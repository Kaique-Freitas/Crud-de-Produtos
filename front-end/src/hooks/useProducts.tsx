import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../sevices/api";

interface Product {
  id?: string;
  name: string;
  price: number;
  quantity: number;
}

interface ProductsContextData {
  products: Product[];
  id: string;
  product: Product
  createProduct: (product: Product) => Promise<void>;
  editProduct: (product: Product) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  viewProduct: (id: string) => Promise<void>
  setId: (id: string) => void;
  loading: boolean;
}

interface ProductsProviderProps {
  children: ReactNode;
}

const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>({} as Product);
  const [id, setId] = useState(String);
  const [loading, setLoading] = useState(false);

  async function createProduct(productInput: Product) {
    setLoading(true);
    const response = await api.post("register", productInput);
    setLoading(false);
    const { product } = response.data;

    setProducts([...products, product]);
  }

  async function viewProduct(id: string) {
    const response = await api.get("product/" + id);
    const data = response.data.product;

    setProduct(data)
  }

  async function editProduct(productInput: Product) {
    const response = await api.put("update" + productInput.id, {
      productInput,
    });

    const { product } = response.data;
    setProducts([...products, product]);
  }



  async function deleteProduct(id: string) {
    const response = await api.delete("delete/" + id);
    const { product } = response.data;
    setProducts([...products, product]);
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        product,
        viewProduct,
        id,
        setId,
        loading,
        createProduct,
        editProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);

  return context;
}
