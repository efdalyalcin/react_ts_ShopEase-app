import { initialCategoryKey } from 'src/constants/categories';
import { create } from 'zustand';

interface ISelectedCategoryStore {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  clearSelectedCategory: () => void;
}

const useSelectedCategory = create<ISelectedCategoryStore>()((set) => ({
  selectedCategory: initialCategoryKey,
  setSelectedCategory: (category) => {
    set(() => ({
      selectedCategory: category,
    }));
  },
  clearSelectedCategory: () => {
    set(() => ({ selectedCategory: initialCategoryKey }));
  },
}));

export default useSelectedCategory;
