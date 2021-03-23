/* /components/Checkout/CheckoutForm.js */

import React, { useState, useContext, useEffect } from "react";

import { FormGroup, Label, Input } from "reactstrap";

import fetch from "isomorphic-fetch";
//import Cookies from "js-cookie";
//import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

//import CardSection from "./CardSection";
import AppContext from "../../context/AppContext";
//import Ckeditor from "../ckeditor/Ckeditor";
//import Compotest from "../ckeditor/Compotest";
import dynamic from 'next/dynamic';

import $ from "jquery";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Router from "next/router";

const Ckeditor = dynamic(() => import('../ckeditor/Ckeditor'), { ssr: false })

const MySwal = withReactContent(Swal);

function AddResForm() {
  const [data, setData] = useState({
    nameshop: "",
    description: "",
  });
  const [error, setError] = useState("");
  //const stripe = useStripe();
  //const elements = useElements();
  const appContext = useContext(AppContext);

  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()
  const [loading, setLoading] = useState(false)

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)

    }, [selectedFile])

    useEffect(() => {
      $(".nameshop").change(function() {
        alert( "test" );
      });
    }, [])

  function onChange(e) {
    //alert(data.description)
    // set the key = to the name property equal to the value typed
    const updateItem = (data[e.target.name] = e.target.value);
    // update the state data object
    setData({ ...data, updateItem });

    /*MySwal.fire({
      title: <p>Hello World</p>,
      footer: 'Copyright 2018',
      didOpen: () => {
        // `MySwal` is a subclass of `Swal`
        //   with all the same instance & static methods
        MySwal.clickConfirm()
      }
    })
    .then(() => {
      return MySwal.fire(<p>Shorthand works too</p>)
    })*/
    
  }

  //document.querySelector("#validatedCustomFile").onchange = function(){
    function onChangeF(e) {
      document.querySelector("#file-name").textContent = e.target.files[0].name;
      if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined)
        return
      }
      // I've kept this example simple by using the first image instead of multiple
      setSelectedFile(e.target.files[0])
    }
  //}

  async function submitAddRestaurant(event) {
      //alert(data.description);
      event.preventDefault();

    // // Use elements.getElement to get a reference to the mounted Element.
    //const cardElement = elements.getElement(CardElement);

    // // Pass the Element directly to other Stripe.js methods:
    // // e.g. createToken - https://stripe.com/docs/js/tokens_sources/create_token?type=cardElement
    // get token back from stripe to process credit card
    //const token = await stripe.createToken(cardElement);
    //const userToken = Cookies.get("token");
    if(data.nameshop == ""){
      
      MySwal.fire({
      icon: 'error',
      //title: 'Oops...',
      text: 'กรุณากรอกชื่อร้าน',
      onAfterClose: () => {
        setTimeout(() => document.querySelector("input[name='nameshop']").focus(), 110);
      }
      //footer: '<a href>Why do I have this issue?</a>'
      })
      
    }
    else if(data.description == ""){
      MySwal.fire({
        icon: 'error',
        //title: 'Oops...',
        text: 'กรุณากรอกรายละเอียดร้าน',
        //footer: '<a href>Why do I have this issue?</a>'
      })
    }
    else{
    setLoading(true);
    event.target.disabled=true;
    const fileInput = document.querySelector("input[name='image']");
    const formData = new FormData();
		
    formData.append('data', JSON.stringify({
      name: data.nameshop,
      description: data.description,
    }));
    if (fileInput.files[0]) {
      formData.append(`files.image`, fileInput.files[0], fileInput.files[0].name);
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/restaurants`, {
      method: "POST",
      //headers: userToken && { Authorization: `Bearer ${userToken}` },
      //headers: {'Content-Type': 'application/json'},
      //headers: {'Content-Type': 'multipart/form-data'},
      //headers: {'Content-Type': 'application/x-www-form-urlencoded'},

      /*body: JSON.stringify({
        name: data.nameshop,
        description: data.description,
        amount: Number(Math.round(appContext.cart.total + "e2") + "e-2"),
        dishes: appContext.cart.items,
        address: data.address,
        city: data.city,
        state: data.state,
        token: token.token.id,
      }),*/
      
      body: formData

    });

    if (!response.ok) {
      setError(response.statusText);
    }
    else{
      MySwal.fire({
        icon: 'success',
        text: 'เพิ่มข้อมูลร้านเรียบร้อย',
        allowOutsideClick: false
      })
      .then(() => {
        Router.push("/");
      });
    }
    

    }

    // OTHER stripe methods you can use depending on app
    // // or createPaymentMethod - https://stripe.com/docs/js/payment_intents/create_payment_method
    // stripe.createPaymentMethod({
    //   type: "card",
    //   card: cardElement,
    // });

    // // or confirmCardPayment - https://stripe.com/docs/js/payment_intents/confirm_card_payment
    // stripe.confirmCardPayment(paymentIntentClientSecret, {
    //   payment_method: {
    //     card: cardElement,
    //   },
    // });
  }

  return (
    <div className="paper">

      <h5>รายละเอียดร้าน :</h5>
      <hr />
      <FormGroup style={{ display: "flex" }}>
        <div style={{ flex: "0.90", marginRight: 10 }}>
          <Label>ชื่อร้าน</Label>
          <Input style={{width: 200}} name="nameshop" onChange={onChange} />
        </div>
      </FormGroup>
      <FormGroup style={{ display: "flex" }}>
        <div style={{ flex: "0.65", marginRight: "6%" }}>
          <Label>ภาพ</Label>

          <div class="custom-file">
          <Input type="file" name="image" onChange={onChangeF} class="custom-file-input" id="validatedCustomFile" required />
          <label id="file-name" class="custom-file-label" for="validatedCustomFile">เลือกรูปภาพ...</label>
          <div class="invalid-feedback">Example invalid custom file feedback</div>
          </div>
          <div style={{marginTop: 5}}>
          {selectedFile &&  <img style={{width: "100%"}} src={preview} /> }     
          </div>
        </div>
      </FormGroup>
      <FormGroup style={{ display: "flex" }}>
        <div style={{ flex: "0.65", marginRight: "6%" }}>
          <Label>รายละเอียด</Label>
          
          <div className="ck-editor__editable">
          
          <Ckeditor data="" value="" onChange={(v)=> {data['description'] = v;}} />
          
          </div>
          
        </div>
        
      </FormGroup>
      
      <div className="order-button-wrapper">
        <button onClick={submitAddRestaurant}>
          {loading ? "Loading... " : "เพิ่มร้านค้า"}
        </button>
      </div>
      <style jsx global>
        {`
        @media (max-device-width: 1224px) {
            .ck.ck-toolbar-dropdown .ck.ck-toolbar .ck.ck-toolbar__items
            {
              flex-wrap: wrap;
              min-width: 70vw;
            }  
        }
        @media (max-device-width: 1224px) {
          .ck-editor__editable
          {
              min-height: 300px;
              width: 300px;
          }
        }
        @media (min-device-width: 1224px) {
          .ck-editor__editable
          {
              min-height: 400px;
          }
        }
            
          .paper {
            border: 1px solid lightgray;
            box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
              0px 1px 1px 0px rgba(0, 0, 0, 0.14),
              0px 2px 1px -1px rgba(0, 0, 0, 0.12);
            height: auto;
            padding: 30px;
            background: #fff;
            border-radius: 6px;
            margin-top: 10px;
            margin-bottom: 10px;
          }
          .form-half {
            flex: 0.5;
          }
          * {
            box-sizing: border-box;
          }
          body,
          html {
            background-color: #f6f9fc;
            font-size: 18px;
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          }
          h1 {
            color: #32325d;
            font-weight: 400;
            line-height: 50px;
            font-size: 40px;
            margin: 20px 0;
            padding: 0;
          }
          .Checkout {
            margin: 0 auto;
            max-width: 800px;
            box-sizing: border-box;
            padding: 0 5px;
          }
          label {
            color: #6b7c93;
            font-weight: 300;
            letter-spacing: 0.025em;
          }
          button {
            white-space: nowrap;
            border: 0;
            outline: 0;
            display: inline-block;
            height: 40px;
            line-height: 40px;
            padding: 0 14px;
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.08);
            color: #fff;
            border-radius: 4px;
            font-size: 15px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.025em;
            background-color: #6772e5;
            text-decoration: none;
            -webkit-transition: all 150ms ease;
            transition: all 150ms ease;
            margin-top: 10px;
          }
          form {
            margin-bottom: 40px;
            padding-bottom: 40px;
            border-bottom: 3px solid #e6ebf1;
          }
          button:hover {
            color: #fff;
            cursor: pointer;
            background-color: #7795f8;
            transform: translateY(-1px);
            box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
              0 3px 6px rgba(0, 0, 0, 0.08);
          }
          textarea {
            display: block;
            background-color: #f8f9fa !important;
            margin: 10px 0 20px 0;
            max-width: 500px;
            padding: 10px 14px;
            font-size: 1em;
            font-family: "Source Code Pro", monospace;
            box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
              rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
            border: 0;
            outline: 0;
            border-radius: 4px;
            background: white;
            width: 440px;
            resize: vertical;
            overflow: auto;
            height:120px;
          }
          input,
          .StripeElement {
            display: block;
            background-color: #f8f9fa !important;
            margin: 10px 0 20px 0;
            max-width: 500px;
            padding: 10px 14px;
            font-size: 1em;
            font-family: "Source Code Pro", monospace;
            box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
              rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
            border: 0;
            outline: 0;
            border-radius: 4px;
            background: white;
          }
          input::placeholder {
            color: #aab7c4;
          }
          input:focus,
          .StripeElement--focus {
            box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,
              rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
            -webkit-transition: all 150ms ease;
            transition: all 150ms ease;
          }
          .StripeElement.IdealBankElement,
          .StripeElement.PaymentRequestButton {
            padding: 0;
          }
        `}
      </style>
    </div>
  );
}
export default AddResForm;