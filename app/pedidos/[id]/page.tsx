interface PedidoProps {
  id: string;
  name: string;
  imageUrl: string;
}

const pedido = ({ params }: { params: PedidoProps }) => {
  return <h1>Pedido {params.name}</h1>;
};

export default pedido;
