import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "./global";

function Alert({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // Dismiss after 5 seconds

    return () => clearTimeout(timer);
  }, []); // Add [] as dependency to run this effect only once

  return <div>{message}</div>;
}

function BikeConsultation() {
  const [formDetails, setFormDetails] = useState({
    bikeType: "Select From DropDown",
    bikename: "Select From DropDown",
    personname: "",
    phoneNo: "",
    email: "",
    location: "",
    address: "",
    question: "",
    time: "Select From DropDown",
  });

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await axios.get(`${url}/`);
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowAlert(true);

    try {
      const response = await axios.post(`${url}/bike`, formDetails);

      if (response.data) {
        alert("Your request has been successfully sent");
        setFormDetails({
          bikeType: "Select From DropDown",
          bikename: "Select From DropDown",
          personname: "",
          phoneNo: "",
          email: "",
          location: "",
          address: "",
          question: "",
          time: "Select From DropDown",
        });
      } else {
        alert("There is some internal error. Try again");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "There was an error processing your request. Please try again later."
      );
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <div>
        <div className="firstsectionformscarpurchased">
          <div className="formsLogoflex"></div>
          <h1>BIKE PURCHASE CONSULTATION</h1>
          <div className="carpurchaseform">
            <form onSubmit={handleSubmit}>
              <h3 className="whatdoyuwanttobuy">
                Looking for: New Bike or Pre-owned Bike
              </h3>
              {/* Rest of your form */}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      {/* Display the custom alert if showAlert is true */}
      {showAlert && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            backgroundColor: "#f8d7da",
            color: "#721c24",
            padding: "10px",
            textAlign: "center",
            fontWeight: "bold",
            zIndex: "9999", // Ensure it's above other elements
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Alert
            message="Wait for a few seconds. This process may take up to a minute"
            onClose={handleCloseAlert} // Pass the handleCloseAlert function
          />
        </div>
      )}
    </div>
  );
}

export default BikeConsultation;
