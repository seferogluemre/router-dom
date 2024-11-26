import { create } from 'zustand'

interface BearState {
  bears: number
  removeAllBears:()=>void;
  increasePopulation: (by: number) => void
}

export const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))