import { useEffect, useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { api } from "../../sevices/api";
import { Container } from "./styles";

import EditImg from '../../assets/edit.svg'
import DeleteImg from '../../assets/delete.svg'

interface Product {
  id?: string;
  name: string;
  price: number;
  quantity: number;
}

interface ProductTableProps {
  onOpenEditProductModal: () => void;
}

export function ProductsTable({ onOpenEditProductModal }: ProductTableProps) {
  const { products, setId, loading, viewProduct, deleteProduct } =
    useProducts();
  const [productsData, setProductsData] = useState<Product[]>([]);

  function onEditProduct(id: string) {
    viewProduct(id);
    onOpenEditProductModal();
    setId(id);
  }

  function onDeleteProduct(id: string) {
    const confirmDelete = window.confirm("Excluir produto?");
    if (confirmDelete) {
      deleteProduct(id);
    }
  }

  useEffect(() => {
    listProduct();
  }, [products]);

  async function listProduct() {
    await api
      .get("/")
      .then((response) => setProductsData(response.data.products));
  }

  return (
    <Container>
      {loading ? (
        <p>Carregando...</p>
      ) : productsData.length === 0 ? <h3>Bem vindo! Cadastre um produto.</h3> :(
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Situação</th>
            </tr>
          </thead>
          <tbody>
            {productsData.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(product.price)}
                </td>

                <td>{product.quantity}</td>
                {product.quantity <= 20 ? <td className="critical">Crítico</td> : product.quantity <= 40 ? <td className="alert">Alerta</td> : <td className="ok">Ok</td>}
                
                <td>
                  <button onClick={() => onEditProduct(String(product.id))}>
                    <img src={EditImg} alt="" />
                  </button>
                  <button onClick={() => onDeleteProduct(String(product.id))}>
                    <img src={DeleteImg} alt="" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Container>
  );
}
