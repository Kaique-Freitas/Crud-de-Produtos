import Modal from "react-modal";
import { FormEvent, useEffect, useState } from "react";
import { useProducts } from "../../hooks/useProducts";

import closeImg from "../../assets/close.svg";
import { Container } from "./styles";

interface EditTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function EditProductModal({
  isOpen,
  onRequestClose,
}: EditTransactionModalProps) {
  const { product, editProduct, loading } = useProducts();
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(Number);
  const [quantity, setQuantity] = useState<number>(Number);

  async function handleEditProduct(event: FormEvent) {
    event.preventDefault();

    await editProduct({ name, price, quantity });

    setName("");
    setPrice(Number);
    setQuantity(Number);
    onRequestClose();
  }

  useEffect(() => {
    const { name, price, quantity } = product;
    setName(name);
    setPrice(price);
    setQuantity(quantity);
  }, [product]);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button className="react-modal-close" onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleEditProduct}>
        <h2>Editar produto</h2>
        <input
          type="text"
          value={name || ""}
          onChange={(event) => setName(event.target.value)}
          placeholder="Nome do produto"
        />
        <input
          type="number"
          value={price || 0}
          onChange={(event) => setPrice(Number(event.target.value))}
          placeholder="Preço"
        />
        <input
          type="number"
          value={quantity || 0}
          onChange={(event) => setQuantity(Number(event.target.value))}
          placeholder="Quantidade"
        />
        {loading ? (
          <button type="submit">Carregando...</button>
        ) : (
          <button type="submit">Editar</button>
        )}
      </Container>
    </Modal>
  );
}
