import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const params = useParams();

  return (
    <section>
      <ul>
        <li>{params.productId}</li>
      </ul>
    </section>
  );
};

export default ProductDetail;
