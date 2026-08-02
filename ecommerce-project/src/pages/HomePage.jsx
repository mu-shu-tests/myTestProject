import "../pages/HomePage.css";
import Header from "../components/Header";
import CheckmarkIcon from "../assets/images/icons/checkmark.png";
import { products } from "../../../starting-code/data/products";
import axios from "axios";


function HomePage() {
  /*
fetch("http://localhost:3000/api/products")
  .then((Response) => {
    //console.log(Response);
    // console.log(Response.json()) it returns a Promise.
    return Response.json();
    /*
   .then((data)=> {
    console.log(data);
  })

    // when we use return we can transfer then() to outside to be cleaner a little bit;
  })
  .then((data) => {
    console.log(data);
  });
*/

  axios.get("http://localhost:3000/api/products").then((response) => {
    console.log(response.data);
  });
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <title>Home Page</title>
      <Header />

      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            return (
              <div key={product.id} className="product-container">
                <div className="product-image-container">
                  <img className="product-image" src={product.image} />
                </div>

                <div className="product-name limit-text-to-2-lines">
                  {product.name}
                </div>

                <div className="product-rating-container">
                  <img
                    className="product-rating-stars"
                    src={`images/ratings/rating-${product.rating.stars * 10}.png`}
                  />
                  <div className="product-rating-count link-primary">
                    {product.rating.count}
                  </div>
                </div>

                <div className="product-price">
                  {(product.priceCents / 100).toFixed(2)}
                </div>

                <div className="product-quantity-container">
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="product-spacer"></div>

                <div className="added-to-cart">
                  <img src={CheckmarkIcon} />
                  Added
                </div>

                <button className="add-to-cart-button button-primary">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomePage;
