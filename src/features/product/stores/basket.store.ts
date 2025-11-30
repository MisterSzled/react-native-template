import { storage } from "@src/lib/mmkv";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type BasketState = {
        items: Record<string, number>;
};

export type BasketActions = {
        increment: (id: string) => void;
        decrement: (id: string) => void;
        clear: (id: string) => void;
        full_clear: () => void;
};

export type BasketStore = BasketState & BasketActions;

const storageAdapter = {
        getItem: async (key: string): Promise<string | null> => storage.getString(key) ?? null,
        setItem: async (key: string, value: string): Promise<void> => storage.set(key, value),
        removeItem: async (key: string): Promise<void> => {
                storage.remove(key)
                return Promise.resolve();
        },
};

export const basketStore = create<BasketStore>()(
        persist(
                (set, get) => ({
                        items: {},

                        increment: (id: string) => {
                                let product_amount = get().items[id];
                                if (!product_amount) {
                                        product_amount = 1;
                                } else {
                                        product_amount = product_amount + 1;
                                };
                                set({
                                        items: {
                                                ...get().items,
                                                [id]: product_amount
                                        }
                                })
                        },

                        decrement: (id: string) => {
                                const product_amount = get().items[id];
                                if (!product_amount) return;
                                if (product_amount <= 1) {
                                        let next_items = { ...get().items };
                                        delete next_items[id]
                                        set({
                                                items: next_items
                                        })
                                } else {
                                        let next_items = { ...get().items };
                                        next_items[id] = next_items[id] - 1;
                                        set({
                                                items: next_items
                                        })
                                }
                        },

                        clear: (id: string) => {
                                let next_items = { ...get().items };
                                delete next_items[id]
                                set({
                                        items: next_items
                                })
                        },

                        full_clear: () => {
                                set({
                                        items: {}
                                })
                        }
                }),
                {
                        name: "basket-storeage",
                        storage: createJSONStorage(() => storageAdapter)
                }
        )
);