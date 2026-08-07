import Products from "./Products";

function ProductsGrid({ products, loadCart }) {
 

  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
         <Products key={product.id} loadCart={loadCart} product={product} />
        );
      })}
    </div>
  );
}

export default ProductsGrid;
