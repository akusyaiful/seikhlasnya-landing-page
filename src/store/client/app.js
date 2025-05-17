import { create } from 'zustand';

export const useAppStore = create((set) => ({
  openModalUnauthenticated: false,
  updateOpenModalUnauthenticated: (value) =>
    set(() => ({ openModalUnauthenticated: value })),
}));
