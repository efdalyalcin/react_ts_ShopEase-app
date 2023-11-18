import { create } from 'zustand';

interface ISearchQuery {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  clearSearchQuery: () => void;
}

const useSearchQuery = create<ISearchQuery>()((set) => ({
  searchQuery: '',
  setSearchQuery: (query) =>
    set(() => ({
      searchQuery: query,
    })),
  clearSearchQuery: () => set(() => ({ searchQuery: '' })),
}));

export default useSearchQuery;
