/* pages/checkout.js */

import React, { useContext } from "react";

/*import { Row, Col } from "reactstrap";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import InjectedCheckoutForm from "../components/checkout/CheckoutForm";
import AppContext from "../context/AppContext";

import Cart from "../components/cart/";*/

function Test2() {
    const formElement = document.querySelector('form');

    formElement.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const request = new XMLHttpRequest();
  
      request.open('POST', '/upload');
  
      request.send(new FormData(formElement));
    });
  return (
    <form>
  
  <input type="file" name="files" />
  <input type="text" name="ref" value="restaurant" />
  <input type="text" name="refId" value="5c126648c7415f0c0ef1bccd" />
  <input type="text" name="field" value="cover" />
  <input type="submit" value="Submit" />
    </form>
  );
  // }
}
export default Test2;
