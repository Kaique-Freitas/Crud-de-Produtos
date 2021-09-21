import { ProductsTable } from "../ProductsTable";
import { Container } from "./styles";

interface DashboardProps {
  onOpenEditProductModal: () => void;
}
export function Dashboard({ onOpenEditProductModal }: DashboardProps) {
  return (
    <Container>
      <ProductsTable onOpenEditProductModal={onOpenEditProductModal}/>
    </Container>
  );
}
