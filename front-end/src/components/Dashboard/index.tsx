import { NewProductModal } from "../NewProductModal";

export function Dashboard() {
  return (
    <>
      <NewProductModal isOpen={true} onRequestClose={() => {}}/>
    </>
  );
}
