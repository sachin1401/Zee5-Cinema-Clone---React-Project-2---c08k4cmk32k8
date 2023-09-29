import "../style/Payment.css";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedPrice = queryParams.get("price");

  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    month: "Month",
    year: "Year",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form data:", formData);
  };

  return (
    <>
      <div className="container">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="flex-row">
              <label htmlFor="card-number">Card Number</label>
              <input
                name="cardNumber"
                className="card-number"
                type="text"
                placeholder="1234-4567-7891-4321"
                value={formData.cardNumber}
                onChange={handleChange}
              />
            </div>
            <div className="flex-row">
              <label htmlFor="card-name">Holder Name</label>
              <input
                name="cardName"
                className="card-name"
                type="text"
                placeholder="Sachin Patel"
                value={formData.cardName}
                onChange={handleChange}
              />
            </div>
            <div className="flex-row">
              <table>
                <tbody>
                  <tr>
                    <td className="table-column">
                      <label htmlFor="month">Expiration Date</label>
                      <select
                        name="month"
                        id="month-select"
                        value={formData.month}
                        onChange={handleChange}
                      >
                        <option value="Month" selected disabled>
                          Month
                        </option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </select>
                      <select
                        name="year"
                        id="year-select"
                        value={formData.year}
                        onChange={handleChange}
                      >
                        <option value="Year" selected disabled>
                          Year
                        </option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                      </select>
                    </td>
                    <td className="table-column">
                      <label htmlFor="card-cvv">CVV</label>
                      <input
                        name="cvv"
                        className="card-cvv"
                        type="text"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>{" "}
            <p className="selected-price">
              Selected Price:{" "}
              <span className="selected-price-color">${selectedPrice}</span>
            </p>
            <Link to="/buy-plan/payment-status">
              <div className="flex-row">
                <input className="card-submit" type="submit" />
              </div>
            </Link>
          </form>
          <img
            className="card-image"
            src="https://pngimg.com/uploads/credit_card/credit_card_PNG99.png"
            alt="Card image"
          />
          <div className="card-image-shadow"></div>
        </div>
      </div>
      <div className="fotterb">
        <div>
          <h4 className="fotb">
            Copyright © 2022 Zee Entertainment Enterprises Ltd. All rights
            reserved.
          </h4>
        </div>
        <div>
          <h4 className="fotb">
            About Us | Help Center | Privacy Policy | Terms of Use | Preferences
          </h4>
        </div>
      </div>
    </>
  );
};

export default Payment;
