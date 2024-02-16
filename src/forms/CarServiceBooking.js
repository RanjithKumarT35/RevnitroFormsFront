import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "./global";

function CarServiceBooking() {
  const [formDetails, setFormDetails] = useState({
    carname: "",
    carmodel: "",
    personname: "",
    phoneNo: "",
    email: "",
    location: "",
    address: "",
    issues: "",
    serviceloction: "Select From DropDown",
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
      const response = await axios.post(`${url}/carService`, formDetails);

      if (response.data) {
        alert("Your request has been successfully sent");
        setFormDetails({
          carname: "",
          carmodel: "",
          personname: "",
          phoneNo: "",
          email: "",
          location: "",
          address: "",
          issues: "",
          serviceloction: "Select From DropDown",
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
          <h1>CAR BOOK SERVICE</h1>
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
                  name="(This-is-Car-Service-Booking-Form) : Name :"
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
                  name="Email  "
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
                  placeholder="Address"
                  id=""
                  cols="30"
                  rows="10"
                  value={formDetails.address}
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      address: e.target.value,
                    })
                  }
                  required
                ></textarea>
              </div>

              <div className="bikeserviceformpage">
                <h3>What car do you have ?</h3>
                <div className="inputboxforcarpurchase">
                  <input
                    type="text"
                    placeholder="Car"
                    name="Car Company"
                    value={formDetails.carname}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        carname: e.target.value,
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
                    name="Car Model"
                    value={formDetails.carmodel}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        carmodel: e.target.value,
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
                  id=""
                  value={formDetails.serviceloction}
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      serviceloction: e.target.value,
                    })
                  }
                  required
                >
                  <option value="Select From DropDown" disabled>
                    Select From DropDown
                  </option>
                  <option value="Chennai">Chennai</option>
                  <option value="Erode">Erode</option>
                  <option value="Coimbatore">Coimbatore</option>
                </select>
              </div>

              <div className="disclaimer">
                Note : We are not providing service directly you will be
                redirected to our partners
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

export default CarServiceBooking;
