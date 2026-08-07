import "../pages/TrackingPage.css";
import Header from "../components/Header";
import { Link } from "react-router";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
function TrackingPage({ cart }) {
  const params = useParams();
  // console.log(params);
  const { orderId, productId } = params;
  //console.log(orderId);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchTrackingData = async () => {
      const response = await axios.get(
        `/api/orders/${orderId}?expand=products`,
      );
      //console.log(response.data);
      setOrder(response.data);
    };
    fetchTrackingData();
  }, [orderId]);

  if (!order) {
    return null;
  } else {
    const selectedProduct = order.products.find((product) => {
      return product.productId === productId;
    });

    const totalDeliveryTimeMs =
      selectedProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
    // console.log(totalDeliveryTimeMs);
    // console.log("Here is the product!");
    // console.log(selectedProduct);
    // console.log("time passed");
    // let timePassedMs = totalDeliveryTimeMs * 0.3;
    const timePassedMs = dayjs().valueOf() - order.orderTimeMs;
    // console.log(timePassedMs);
    let deliveryPercent;
    let arrivingOn = "Arriving on";
      // some calculations
      ((timePassedMs / totalDeliveryTimeMs) * 100).toFixed(2) > 100
        ? ((deliveryPercent = 100), (arrivingOn = "Delivered on"))
        : ((deliveryPercent = 50), arrivingOn);
    //console.log(deliveryPercent);
    let isPreparing;
    let isShipped;
    let isDeliverd;
    if (deliveryPercent < 33) {
      isPreparing = deliveryPercent;
    } else if (deliveryPercent >= 33 && deliveryPercent < 100) {
      isShipped = deliveryPercent;
    } else if (deliveryPercent === 100) {
      isDeliverd = deliveryPercent;
    }
    return (
      <>
        <link rel="icon" type="image/svg+xml" href="tracking-favicon.png" />
        <title>Tracking</title> <Header cart={cart} />
        <div className="tracking-page">
          <div className="order-tracking">
            <Link className="back-to-orders-link link-primary" to="/orders">
              View all orders
            </Link>
            <div className="delivery-date">
              {arrivingOn}{" "}
              {dayjs(productId.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
            </div>

            <>
              <div className="product-info">{selectedProduct.product.name}</div>

              <div className="product-info">
                Quantity:{selectedProduct.quantity}
              </div>

              <img
                className="product-image"
                src={selectedProduct.product.image}
              />
            </>

            <div className="progress-labels-container">
              <div
                className={`progress-label ${isPreparing && "current-status"}`}
              >
                Preparing
              </div>
              <div
                className={`progress-label ${isShipped && "current-status"}`}
              >
                Shipped
              </div>
              <div
                className={`progress-label ${isDeliverd && "current-status"}`}
              >
                Delivered
              </div>
            </div>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${deliveryPercent}%` }}
              ></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TrackingPage;
