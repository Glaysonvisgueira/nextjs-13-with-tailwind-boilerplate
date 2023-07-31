export default function CardProduct(props) {
  const { productTitle, productSubtitle, price } = props;

  return (
    <div className="flex items-center justify-between w-80 h-24 rounded-lg border-2 border-black border-solid p-2 m-1">
      <div className="flex items-start justify-start flex-col h-full">
        <h2 className="font-bold">{productTitle}</h2>
        <span className="text-xs text-gray-300">{productSubtitle}</span>
        <h4 className="font-bold">R$ {price}</h4>
      </div>
      <div className="w-20 h-20 rounded-md border-2 border-black border-solid"></div>
    </div>
  );
}
