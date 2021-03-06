import { FormEvent, useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import Modal from "react-modal";

import closeImg from "../../assets/close.svg";
import { Container } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewProductModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createProduct, loading } = useProducts();
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(Number);
  const [quantity, setQuantity] = useState<number>(Number);

  async function handleCreateNewProduct(event: FormEvent) {
    event.preventDefault();

    await createProduct({ name, price, quantity });

    setName("");
    setPrice(Number);
    setQuantity(Number);
    onRequestClose();
  }
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

      <Container onSubmit={handleCreateNewProduct}>
        <h2>Cadastrar produto</h2>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Nome do produto"
        />
        <input
          type="number"
          value={price}
          onChange={(event) => setPrice(Number(event.target.value))}
          placeholder="Preço"
        />
        <input
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
          placeholder="Quantidade"
        />
        {loading ? (
          <button type="submit">Carregando...</button>
        ) : (
          <button type="submit">Cadastrar</button>
        )}
      </Container>
    </Modal>
  );
}
