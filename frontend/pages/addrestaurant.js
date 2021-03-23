/* pages/checkout.js */

import React, { useContext } from "react";

import { Row, Col } from "reactstrap";
//import { loadStripe } from "@stripe/stripe-js";
//import { Elements } from "@stripe/react-stripe-js";
//import InjectedCheckoutForm from "../components/checkout/CheckoutForm";
import AppContext from "../context/AppContext";
import InjectedAddResForm from "../components/RestaurantList/AddResForm";

//import Cart from "../components/cart/";

function Addrestaurant() {
  // get app context
  const appContext = useContext(AppContext);
  // isAuthenticated is passed to the cart component to display order button
  //const { isAuthenticated } = appContext;

  // load stripe to inject into elements components
  //const stripePromise = loadStripe("pk_test_51HvAf5HXxQpTKolxC2c8mQvyC66B9VLS2hJEwt7IijhI4TznCL0C7rY9bIIbWFJ8M8vJpdMGXs92n1MxABK9ujf900nxIKk4p6");

  return (
    <Row>
      <Col style={{ paddingLeft: 5 }} sm={{ size: 8, order: 1 }}>
        <h1 style={{ marginTop: 20 }}>เพิ่มร้านอาหาร</h1>
        <InjectedAddResForm />
      </Col>
    </Row>
  );
  // }
}
export default Addrestaurant;