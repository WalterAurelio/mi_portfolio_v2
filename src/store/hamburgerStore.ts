import { create } from 'zustand';

type HamburgerStoreType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const useHamburgerStore = create<HamburgerStoreType>(set => ({
  isOpen: false,
  setIsOpen: value => {
    set({ isOpen: value });
  }
}));
