import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewProductModal } from "./components/NewProductModal";
import { ProductsProvider, useProducts } from "./hooks/useProducts";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false);

  function handleOpenNewProductModal() {
    setIsNewProductModalOpen(true);
  }

  function handleCloseNewProductModal() {
    setIsNewProductModalOpen(false);
  }
  return (
    <ProductsProvider>
      <Header onOpenNewProductModal={handleOpenNewProductModal}/>
      <Dashboard />
      <NewProductModal
        isOpen={isNewProductModalOpen}
        onRequestClose={handleCloseNewProductModal}
      />
      <GlobalStyle />
    </ProductsProvider>
  );
}
