import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "./global";

function EcuTuning() {
  const [formDetails, setFormDetails] = useState({
    vehiclename: "",
    vehiclemodel: "",
    personname: "",
    phoneNo: "",
    email: "",
    location: "",
    address: "",
    issues: "",
    servicelocation: "Select From DropDown",
  });

  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await axios.get(`${url}/`);
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowNotification(true);

    try {
      const response = await axios.post(`${url}/ecu`, formDetails);

      if (response.data) {
        alert("Your request has been successfully sent");
        setFormDetails({
          vehiclename: "",
          vehiclemodel: "",
          personname: "",
          phoneNo: "",
          email: "",
          location: "",
          address: "",
          issues: "",
          servicelocation: "Select From DropDown",
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

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  return (
    <div>
      <div>
        <div className="firstsectionformscarpurchased">
          <div className="formsLogoflex"></div>
          <h1>BOOK ECU TUNING</h1>
          <div className="carpurchaseform">
            <form onSubmit={handleSubmit}>
              <div
                id="formschecktickbox"
                style={{ display: "block" }}
              ></div>
              <div
                id="formsnotchecktickbox"
                style={{ display: "none" }}
              >
                <div className="inputboxforcarpurchase">
                  <input type="text" placeholder="Type the Company Name" />
                </div>
              </div>

              <div className="inputboxforcarpurchase">
                <input
                  type="text"
                  placeholder="Name"
                  name="(This-is-ECU-Tuning-Form) Name:"
                  value={formDetails.personname}
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      personname: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="inputboxforcarpurchase">
                <input
                  type="number"
                  placeholder="Phone No"
                  name="Mobile Number"
                  value={formDetails.phoneNo}
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      phoneNo: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="inputboxforcarpurchase">
                <input
                  type="email"
                  placeholder="Email Id"
                  name="Email"
                  value={formDetails.email}
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      email: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="inputboxforcarpurchase">
                <input
                  type="text"
                  placeholder="Location"
                  name="Location"
                  value={formDetails.location}
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      location: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="textatreaadressform">
                <textarea
                  name="Address"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Address"
                  value={formDetails.address}
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      address: e.target.value,
                    })
                  }
                ></textarea>
              </div>

              <div className="bikeserviceformpage">
                <h3>Bike Company</h3>
                <div className="inputboxforcarpurchase">
                  <input
                    type="text"
                    placeholder="Company Name"
                    name="Company Name"
                    value={formDetails.vehiclename}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        vehiclename: e.target.value,
                      })
                    }
                    required
                  />
                </div>
              </div>
              <div className="bikeserviceformpage">
                <h3>What model do you have ?</h3>
                <div className="inputboxforcarpurchase">
                  <input
                    type="text"
                    placeholder="Model"
                    name="Model Name"
                    value={formDetails.vehiclemodel}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        vehiclemodel: e.target.value,
                      })
                    }
                    required
                  />
                </div>
              </div>
              <div className="bikeserviceformpage">
                <h3>Describe your issues</h3>
                <textarea
                  name="Issues"
                  id=""
                  cols="30"
                  rows="10"
                  value={formDetails.issues}
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      issues: e.target.value,
                    })
                  }
                  required
                ></textarea>
              </div>

              <div className="callschdeuleforrevnito">
                <h2>Service Location</h2>
              </div>

              <div className="dropdwoninputforrevnbitrto">
                <select
                  name="Location"
                  value={formDetails.servicelocation}
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      servicelocation: e.target.value,
                    })
                  }
                  id=""
                >
                  <option value="Select From DropDown" disabled>
                    Select From DropDown
                  </option>
                  <option value="Chennai">Chennai</option>
                </select>
              </div>
              <div className="carspurchasebuuttonss">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showNotification && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#333",
            color: "#fff",
            padding: "10px",
            borderRadius: "5px",
            zIndex: "9999",
          }}
        >
          <p>Wait for some time. This process will take about a minute.</p>
        </div>
      )}
    </div>
  );
}

export default EcuTuning;
