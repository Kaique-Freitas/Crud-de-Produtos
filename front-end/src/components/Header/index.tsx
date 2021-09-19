import { Container, Content, Title } from "./styles";

export function Header() {
  return (
    <>
      <Container>
        <Content>
          <Title>Crud de Produtos</Title>
          <button>Cadastrar produto</button>
        </Content>
      </Container>
    </>
  );
}
