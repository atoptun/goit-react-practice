import { useParams } from 'react-router-dom';
import { getProductById } from '../fakeApi.ts';

function ProductDetails() {
  const { productId } = useParams<string>();
  if (!productId) {
    return <div>Product not found</div>;
  }
  const product = getProductById(productId);

  return (
    <div>
      Product - {product?.id} - {product?.name}
    </div>
  );
}

export default ProductDetails;
