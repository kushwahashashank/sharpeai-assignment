import React, { useState } from "react";
import "./Transaction.css";
const Transaction = ({ notify }) => {
  // address and amount input states
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  // Validate function for form validation
  const validate = () => {
    if (address.length === 0 || !address.startsWith("0x")) {
      notify("warning", "Please enter a valid wallet address !");
      return false;
    } else {
      if (
        amount.length === 0 ||
        parseInt(amount) <= 0 ||
        parseInt(amount) > 10000
      ) {
        notify("warning", "Please enter a valid amount !");
        return false;
      } else {
        return true;
      }
    }
  };

  //function for submiting the form
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      // Uploading the form data to firebase
      // Please change the https link to store the data at your firebase applicaton
      const res = await fetch("https://sharpe-75c0b-default-rtdb.asia-southeast1.firebasedatabase.app/userRecord.json", {
        method: "POST",
        Headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address, amount }),
      });
      if (res) {
        setAddress("");
        setAmount("");
        console.log(res);
        notify("success", "Data uploaded !");
      } else {
        notify("error", "Unable to send data !");
        setAddress("");
        setAmount("");
      }
    }
  };

  return (
    <>
      <div className="form-container">
        <div className="form">
          <input
            type="text"
            name="address"
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Wallet Address"
            className="form-input"
            value={address}
            required
          />
          <input
            type="number"
            name="amount"
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            className="form-input"
            value={amount}
            required
          />
          <button className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Transaction;
