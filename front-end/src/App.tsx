import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { EditProductModal } from "./components/EditProductModal";
import { Header } from "./components/Header";
import { NewProductModal } from "./components/NewProductModal";
import { ProductsProvider } from "./hooks/useProducts";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false);
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);

  function handleOpenNewProductModal() {
    setIsNewProductModalOpen(true);
  }

  function handleCloseNewProductModal() {
    setIsNewProductModalOpen(false);
  }

  function handleOpenEditProductModal() {
    setIsEditProductModalOpen(true);
  }

  function handleCloseEditProductModal() {
    setIsEditProductModalOpen(false);
  }
  return (
    <ProductsProvider>
      <Header onOpenNewProductModal={handleOpenNewProductModal} />

      <Dashboard onOpenEditProductModal={handleOpenEditProductModal}/>

      <NewProductModal
        isOpen={isNewProductModalOpen}
        onRequestClose={handleCloseNewProductModal}
      />

      <EditProductModal
        isOpen={isEditProductModalOpen}
        onRequestClose={handleCloseEditProductModal}
      />

      <GlobalStyle />
    </ProductsProvider>
  );
}
