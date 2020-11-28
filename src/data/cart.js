import { writable } from "svelte/store";

function createCart() {
  const { subscribe, set, update } = writable([]);
  
  return {
    subscribe,
    clear: () => set([]),
    add: (item) => update((currentCart) => {
      return [...currentCart, item];
    }),
    remove: (item) => update((currentCart) => {
      return currentCart.filter((cartItem) => cartItem !== item);
    })
  }
}

export const cart = createCart();
