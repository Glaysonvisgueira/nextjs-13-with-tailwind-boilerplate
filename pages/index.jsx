import CardProduct from "../components/CardProduct";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full h-screen flex-col">
      <CardProduct productTitle="TESTE" price="0,00" />
      <CardProduct productTitle="TESTE" price="0,00" />
      <CardProduct productTitle="TESTE" price="0,00" />
    </div>
  );
}
