import { Container, Content, Title } from "./styles";

interface HeaderProps {
  onOpenNewProductModal: () => void;
}

export function Header({ onOpenNewProductModal }: HeaderProps) {
  return (
    <>
      <Container>
        <Content>
          <Title>Crud de Produtos</Title>
          <button onClick={onOpenNewProductModal}>Cadastrar produto</button>
        </Content>
      </Container>
    </>
  );
}
