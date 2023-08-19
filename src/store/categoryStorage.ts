import { create } from 'zustand';

interface ISelectedCategoryStore {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  clearSelectedCategory: () => void;
}

const useSelectedCategory = create<ISelectedCategoryStore>()((set) => ({
  selectedCategory: 'all categories',
  setSelectedCategory: (category) => {
    set(() => ({
      selectedCategory: category,
    }));
  },
  clearSelectedCategory: () => {
    set(() => ({ selectedCategory: 'all categories' }));
  },
}));

export default useSelectedCategory;
