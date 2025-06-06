import { create } from 'zustand';

type Product = {
  website?: string;
  url?: string;
  title?: string;
  imageUrl: string;
  price?: number;
  currency?: string;
  condition?: string;
};

type Status = 'IDLE' | 'LOADING' | 'LOADWITHDATA' | 'DONE';

type ProductStore = {
  inputProduct: Partial<Product>;
  similarProducts: Product[];
  responseError: string;
  currentStatus: Status;
  STATUS: {
    IDLE: Status;
    LOADING: Status;
    LOADWITHDATA: Status;
    DONE: Status;
  };
  setInputProduct: (product: Partial<Product>) => void;
  setSimilarProducts: (products: Product[]) => void;
  appendSimilarProducts: (products: Product[]) => void;
  setStatus: (status: Status) => void;
  setError: (error: string) => void;
  resetState: () => void;
};

const useProductStore = create<ProductStore>((set) => ({
  inputProduct: {},
  similarProducts: [],
  responseError: '',
  currentStatus: 'IDLE',
  STATUS: {
    IDLE: 'IDLE',
    LOADING: 'LOADING',
    LOADWITHDATA: 'LOADWITHDATA',
    DONE: 'DONE',
  },
  setInputProduct: (product) => set({ inputProduct: product }),
  setSimilarProducts: (products) => set({ similarProducts: products }),
  appendSimilarProducts: (products) =>
    set((state) => ({
      similarProducts: [...state.similarProducts, ...products].sort(
        (a, b) => (a.price || 0) - (b.price || 0)
      ),
    })),
  setStatus: (status) => set({ currentStatus: status }),
  setError: (error) => set({responseError: error}),
  resetState: () =>
    set({
      inputProduct: {},
      similarProducts: [],
      currentStatus: 'LOADING',
      responseError: ''
    }),
}));

export default useProductStore;
