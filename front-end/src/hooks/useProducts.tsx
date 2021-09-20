import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../sevices/api";

interface Product {
  name: string;
  price: number;
  quantity: number;
}

interface ProductsContextData {
  products: Product[];
  createProduct: (product: Product) => Promise<void>;
}

interface ProductsProviderProps {
  children: ReactNode;
}

const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get("products").then((response) => setProducts(response.data.products));
  }, []);

  async function createProduct(productInput: Product) {
    const response = await api.post("/products", productInput);

    const { product } = response.data;

    setProducts([...products, product]);
  }

  return (
    <ProductsContext.Provider value={{ products, createProduct }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);

  return context;
}
