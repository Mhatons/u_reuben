import React from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { useContext } from 'react';
import { myContext } from '../../myContext';
import img from "../images/logo_no_bg.png"

export default function App() {
  const {userInfo, logo, cartSum} = useContext(myContext)
   const config = {
    public_key: 'FLWPUBK_TEST-797fbe839202b6d1c8b3898bf9fb1699-X',
    tx_ref: Date.now(),
    amount: parseInt(cartSum),
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: userInfo.email,
      phone_number: userInfo.phone,
      name: userInfo.user_name,
    },
    customizations: {
      title: 'UncleReuben Grills',
      description: 'Payment for items in cart',
      logo: <img src={img} alt='logo' />,
    },
  };

  const fwConfig = {
    ...config,
    text: 'Checkout',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="cartBtn">
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}