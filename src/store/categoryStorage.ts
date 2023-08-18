import { create } from 'zustand';

interface ISelectedCategoryStore {
  selectedCategory: string;
  setCategory: (category: string) => void;
  clearCategory: () => void;
}

const useSelectedCategory = create<ISelectedCategoryStore>()((set) => ({
  selectedCategory: '',
  setCategory: (category) => {
    set(() => ({
      selectedCategory: category,
    }));
  },
  clearCategory: () => {
    set(() => ({ selectedCategory: 'all categories' }));
  },
}));

export default useSelectedCategory;
