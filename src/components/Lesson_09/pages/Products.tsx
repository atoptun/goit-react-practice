import { getProducts } from '../fakeApi.ts';

function Products() {
  const products = getProducts();
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <a href={`./products/${product.id}`}>{product.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Products;
