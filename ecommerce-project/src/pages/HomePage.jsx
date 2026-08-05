import "../pages/HomePage.css";
import Header from "../components/Header";
import ProductsGrid from "./home/ProductsGrid";
import axios from "axios";
import { useEffect, useState } from "react";

function HomePage({ cart }) {
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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      // console.log(response.data);
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <title>Home Page</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}

export default HomePage;
