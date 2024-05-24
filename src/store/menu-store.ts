import { create } from 'zustand';

interface MenuState {
  show: boolean;
  setShow: (show: boolean, onChange?: MenuState['onChange']) => void;
  onChange?: (show: boolean) => void;
}

const useMenuStore = create<MenuState>((set) => ({
  show: false,
  setShow: (show, onChange) =>
    set((state) => {
      if (state.show === show) return state;
      state?.onChange && state.onChange(show);
      return { show, onChange };
    }),

  onChange: undefined,
}));
export default useMenuStore;
