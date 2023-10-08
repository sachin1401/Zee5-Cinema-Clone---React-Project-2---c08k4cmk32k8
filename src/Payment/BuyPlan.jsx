import React, { useState, useEffect } from "react";
import "../style/BuyPlan.css";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";

const Buyplan = () => {
  // console.log("payment click");
  // Check if a user is logged in
  const loggedInUser = localStorage.getItem("loggedInUser");
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [purchasedPlans, setPurchasedPlans] = useState([]);

  let updatedPurchasedPlans =
    JSON.parse(localStorage.getItem(loggedInUser)) || [];
  const isPlanPurchased = updatedPurchasedPlans.includes(`${selectedPrice}`)
    ? true
    : false;
  console.log(isPlanPurchased);

  useEffect(() => {
    const storedPurchasedPlans = localStorage.getItem(loggedInUser);
    if (storedPurchasedPlans) {
      setPurchasedPlans(JSON.parse(storedPurchasedPlans));
    }
  }, [loggedInUser]);

  const handlePlanSelect = (price) => {
    setSelectedPrice(price);
  };

  const handlePurchase = () => {
    if (selectedPrice !== null) {
      const updatedPurchasedPlans = [...purchasedPlans, selectedPrice];
      setPurchasedPlans(updatedPurchasedPlans);

      // localStorage.setItem(loggedInUser, JSON.stringify(updatedPurchasedPlans));

      // window.location.href = `/buy-plan/payment?price=${selectedPrice}`;
    }
  };

  // const isPlanDisabled = (price) => {
  //   let updatedPurchasedPlans =
  //     JSON.parse(localStorage.getItem(loggedInUser)) || [];
  //   console.log(updatedPurchasedPlans);
  //   return updatedPurchasedPlans.includes(price);
  // };

  return (
    <div className="headb" style={{ backgroundColor: "red" }}>
      <div className="mainb">
        <h1 className="pln">Choose your premium plan</h1>

        <div className="mainbob">
          <div className="boxb">
            {/* 1st */}
            <div className="pre-conb">
              <div>
                <h2>Premium content</h2>
                <p className="pb">
                  Movies, Web Series, TV Shows, Live TV, Downloads
                </p>
              </div>
              <hr />
              <div>
                <h2 className="h2b">Ad-free</h2>
                <p className="pb">Non-stop Fun</p>
              </div>
              <hr />
              <div>
                <h2 className="h2b">Device</h2>
                <p className="pb">Mobile, TV and Laptop</p>
              </div>
              <div></div>
              <div></div>
            </div>
            {/* second */}
            <div className="iconb">
              <div>
                <h2>Premium HD</h2>
              </div>
              <hr />
              <div>
                <AiOutlineCheck />
              </div>
              <hr />
              <div>
                <AiOutlineCheck />
              </div>
              <hr />
              <div>
                <AiOutlineCheck />
              </div>
              <div></div>
              <div></div>
            </div>
            {/* 3rd */}
            <div className="iconb2">
              <div>
                <h2>Premium 4k</h2>
              </div>
              <hr />
              <div>
                <AiOutlineCheck />
              </div>
              <hr />
              <div>
                <AiOutlineCheck />
              </div>
              <hr />
              <div>
                <AiOutlineCheck />
              </div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="preb ">
            <div
              className={`fpre  ${
                selectedPrice === 399 ? "selected-price" : ""
              }`}
              onClick={() => handlePlanSelect(399)}
            >
              <h2>Premium</h2>
              <h4>$399</h4>

              <h4>3 Months</h4>
            </div>
            <div
              className={`spre ${
                selectedPrice === 699 ? "selected-price" : ""
              }`}
              onClick={() => handlePlanSelect(699)}
            >
              <h2>Premium HD</h2>
              <h4>$699</h4>
              <h4>12 Months</h4>
            </div>
            <div
              className={`tpre ${
                selectedPrice === 1499 ? "selected-price" : ""
              }`}
              onClick={() => handlePlanSelect(1499)}
            >
              <h2>Premium 4k</h2>
              <h4>$1499</h4>
              <h4>12 Months</h4>
            </div>
          </div>
          {/* apply */}
          {/* <div className="applyb">
            <CiPercent /> 
            <p>Apply code</p>
          </div> */}

          <p className="applyb" style={{ color: "#a4a0a0dc" }}>
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability{" "}
          </p>
          <p className="applyb" style={{ color: "#a4a0a0dc" }}>
            subject to your internet service and device capabilities.
          </p>
          <p className="applyb" style={{ color: "#a4a0a0dc" }}>
            {" "}
            Not all content is available in all resolutions. See our Terms of
            Use for more details
          </p>
          <div className="payb">
            <div>
              {" "}
              {selectedPrice !== null && (
                <p className="price-tag">Selected Price: ${selectedPrice}</p>
              )}
            </div>

            {loggedInUser ? (
              <Link to={`/buy-plan/payment?price=${selectedPrice}`}>
                <button
                  className="btnb"
                  onClick={handlePurchase}
                  disabled={selectedPrice === null || isPlanPurchased}
                >
                  {isPlanPurchased
                    ? "You Already Purchased"
                    : "Buy Premium Plan"}
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="btnb" disabled={selectedPrice === null}>
                  Login to Buy Premium
                </button>
              </Link>
            )}
          </div>
        </div>

        <div></div>
      </div>
      {/* <hr/> */}
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
    </div>
  );
};

export default Buyplan;
