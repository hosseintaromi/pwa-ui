import { create } from 'zustand';

import CarModel from '@/models/car.model';

interface CarStore {
  car: CarModel | null;
  noCar: boolean;
  setCar: (car: CarModel) => void;
  setNoCar: (noCar: boolean) => void;
}
const useCarStore = create<CarStore>((set) => ({
  car: null,
  noCar: false,
  setCar: (car) => set({ car }),
  setNoCar: (noCar) => set({ noCar }),
}));
export default useCarStore;
