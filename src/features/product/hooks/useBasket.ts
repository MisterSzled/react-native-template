import { basketStore } from "../stores/basket.store";

export const useBasket = <T>(selector: (s: ReturnType<typeof basketStore.getState>) => T): T => {
        return basketStore(selector);
}