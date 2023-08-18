import create from 'zustand';

interface ISelectCategoryStore {
  selectedCategory: string;
  setCategory: (category: string) => void;
  clearCategory: () => void;
}

const useSelectCategory = create<ISelectCategoryStore>()((set) => ({
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

export default useSelectCategory;
