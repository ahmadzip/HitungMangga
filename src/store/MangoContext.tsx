import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

import type { MangoData } from "../types/mango";
import { createId } from "../utils/id";

type MangoContextType = {
  data: MangoData;
  loaded: boolean;

  addType: (name: string) => void;
  deleteType: (typeId: string) => void;

  addWeight: (typeId: string, weight: number) => void;

  updateWeight: (oldTypeId: string, entryId: string, newTypeId: string, weight: number) => void;

  deleteWeight: (typeId: string, entryId: string) => void;

  setCrateWeight: (weight: number) => void;

  clearAllData: () => void;
  clearWeightData: () => void;
};

const STORAGE_KEY = "mangga_app_data_v1";

const DEFAULT_DATA: MangoData = {
  crateWeight: 5,

  types: [
    {
      id: "dr1",
      name: "DR 1",
      entries: [],
    },

    {
      id: "dr2",
      name: "DR 2",
      entries: [],
    },

    {
      id: "dr3",
      name: "DR 3",
      entries: [],
    },
  ],
};

const MangoContext = createContext<MangoContextType | null>(null);

export function MangoProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<MangoData>(DEFAULT_DATA);

  const [loaded, setLoaded] = useState(false);

  // LOAD DATA

  useEffect(() => {
    async function loadData() {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);

        if (stored) {
          const parsed = JSON.parse(stored);

          if (parsed && Array.isArray(parsed.types) && typeof parsed.crateWeight === "number") {
            setData(parsed);
          }
        }
      } catch {
      } finally {
        setLoaded(true);
      }
    }

    loadData();
  }, []);

  // SAVE OTOMATIS

  useEffect(() => {
    if (!loaded) {
      return;
    }

    async function saveData() {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch {
      }
    }

    saveData();
  }, [data, loaded]);

  // JENIS

  function addType(name: string) {
    setData((current) => ({
      ...current,

      types: [
        ...current.types,

        {
          id: createId("type"),
          name,
          entries: [],
        },
      ],
    }));
  }

  function deleteType(typeId: string) {
    setData((current) => ({
      ...current,

      types: current.types.filter((type) => type.id !== typeId),
    }));
  }

  // TAMBAH BERAT

  function addWeight(typeId: string, weight: number) {
    setData((current) => ({
      ...current,

      types: current.types.map((type) => {
        if (type.id !== typeId) {
          return type;
        }

        return {
          ...type,

          entries: [
            ...type.entries,

            {
              id: createId("entry"),

              weight,
            },
          ],
        };
      }),
    }));
  }

  // EDIT / PINDAH BERAT

  function updateWeight(oldTypeId: string, entryId: string, newTypeId: string, weight: number) {
    setData((current) => {
      const oldType = current.types.find((type) => type.id === oldTypeId);

      const entry = oldType?.entries.find((item) => item.id === entryId);

      if (!oldType || !entry) {
        return current;
      }

      // Kalau tetap di jenis sama

      if (oldTypeId === newTypeId) {
        return {
          ...current,

          types: current.types.map((type) => {
            if (type.id !== oldTypeId) {
              return type;
            }

            return {
              ...type,

              entries: type.entries.map((item) =>
                item.id === entryId
                  ? {
                      ...item,
                      weight,
                    }
                  : item,
              ),
            };
          }),
        };
      }

      // Kalau pindah jenis

      return {
        ...current,

        types: current.types.map((type) => {
          // hapus dari jenis lama

          if (type.id === oldTypeId) {
            return {
              ...type,

              entries: type.entries.filter((item) => item.id !== entryId),
            };
          }

          // masukkan ke jenis baru

          if (type.id === newTypeId) {
            return {
              ...type,

              entries: [
                ...type.entries,

                {
                  id: entryId,
                  weight,
                },
              ],
            };
          }

          return type;
        }),
      };
    });
  }

  // HAPUS BERAT

  function deleteWeight(typeId: string, entryId: string) {
    setData((current) => ({
      ...current,

      types: current.types.map((type) => {
        if (type.id !== typeId) {
          return type;
        }

        return {
          ...type,

          entries: type.entries.filter((entry) => entry.id !== entryId),
        };
      }),
    }));
  }

  // BERAT PETI

  function setCrateWeight(weight: number) {
    setData((current) => ({
      ...current,
      crateWeight: weight,
    }));
  }

  // CLEAR ALL

  function clearAllData() {
    setData({
      crateWeight: 5,
      types: [],
    });
  }

  function clearWeightData() {
    setData((current) => ({
      ...current,
      types: current.types.map((type) => ({
        ...type,
        entries: [],
      })),
    }));
  }

  return (
    <MangoContext.Provider
      value={{
        data,
        loaded,

        addType,
        deleteType,

        addWeight,
        updateWeight,
        deleteWeight,

        setCrateWeight,
        clearAllData,
        clearWeightData,
      }}
    >
      {children}
    </MangoContext.Provider>
  );
}

export function useMango() {
  const context = useContext(MangoContext);

  if (!context) {
    throw new Error("useMango harus digunakan di dalam MangoProvider");
  }

  return context;
}
