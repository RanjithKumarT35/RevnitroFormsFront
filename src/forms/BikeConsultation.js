import React, { useState ,useEffect } from "react";
import axios from "axios";
import url from "./global";
function BikeConsultation() {
  const [toggle, setToggle] = useState(false);
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
  useEffect(async() => {
    await axios.get(`${url}/`);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/bike`, formDetails); // Proxy will automatically prepend the backend URL
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
  return (
    <div>
      <div>
        <div className="firstsectionformscarpurchased">
          <div className="formsLogoflex"></div>
          <h1>BIKE PURCHASE CONSULTATION</h1>
          <div className="carpurchaseform">
            <form onSubmit={handleSubmit}>
              <h3 className="whatdoyuwanttobuy">
                Looking for : New Bike or Pre owned Bike
              </h3>
              <div className="dropdwoninputforrevnbitrto">
                <select
                  name="(This-is-Bike-Purchase-Consultation-Form) :"
                  id=""
                  value={formDetails.bikeType}
                  onChange={(e) =>
                    setFormDetails({ ...formDetails, bikeType: e.target.value })
                  }
                  required
                >
                  <option value="Select From DropDown" disabled>
                    Select From DropDown
                  </option>
                  <option value="New bike">New Bike</option>
                  <option value="Pre owned bike">Pre owned Bike</option>
                </select>
              </div>
              <h3 className="whatdoyuwanttobuy">What do you want to buy ?</h3>
              <div className="dropdwoninputforrevnbitrto">
                <select
                  name="Bike Company"
                  value={formDetails.bikename}
                  id=""
                  required
                  onChange={(e) =>
                    setFormDetails({ ...formDetails, bikename: e.target.value })
                  }
                >
                  <option value="Select From DropDown" disabled>
                    Select From DropDown
                  </option>
                  <option value="TVS">TVS</option>
                  <option value="BAJAJ">BAJAJ</option>
                  <option value="KTM">KTM</option>
                  <option value="YAMAHA">YAMAHA</option>
                  <option value="ROYAL ENFIELD">ROYAL ENFIELD</option>
                  <option value="HONDA">HONDA</option>
                  <option value="TRUIMPH">TRUIMPH</option>
                  <option value="HERO">HERO</option>
                  <option value="SUZUKI">SUZUKI</option>
                  <option value="ATHER">ATHER</option>
                  <option value="OTHERS">OTHERS</option>
                </select>
              </div>

              <div>
                <label htmlFor="formscheckboxxxx" className="formforrevnitro">
                  <input
                    type="checkbox"
                    id="formscheckboxxxx"
                    onClick={() => setToggle((prevToggle) => !prevToggle)}
                  />
                  <span className="formrevnitroround">
                    <h3>If Other Please Specify</h3>
                  </span>
                </label>
              </div>

              {toggle && (
                <div id="formsnotchecktickbox">
                  <div className="inputboxforcarpurchase">
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={formDetails.bikename}
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          bikename: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              )}

              <h1>Tell about yourselves</h1>
              <div className="inputboxforcarpurchase">
                <input
                  type="text"
                  placeholder="Name"
                  name="Name"
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
                  placeholder="Mobile No"
                  name="Mobile number"
                  value={formDetails.phoneNo}
                  onChange={(e) =>
                    setFormDetails({ ...formDetails, phoneNo: e.target.value })
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
                    setFormDetails({ ...formDetails, email: e.target.value })
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
                    setFormDetails({ ...formDetails, location: e.target.value })
                  }
                  required
                />
              </div>

              <div className="textatreaadressform">
                <textarea
                  id=""
                  cols="30"
                  rows="10"
                  name="Address"
                  placeholder="Address"
                  value={formDetails.address}
                  onChange={(e) =>
                    setFormDetails({ ...formDetails, address: e.target.value })
                  }
                  required
                ></textarea>
              </div>

              <div className="textareacontentsform">
                <label htmlFor="">
                  What Questions do you have regarding your bike purchase ?
                </label>

                <div className="textareacarconsiltationform">
                  <textarea
                    name="Questions in Bike Purchase"
                    id=""
                    cols="30"
                    rows="10"
                    value={formDetails.question}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        question: e.target.value,
                      })
                    }
                    required
                  ></textarea>
                </div>
              </div>

              <div className="callschdeuleforrevnito">
                <h2>Call Schedule time :(Please Select One)</h2>
              </div>

              <div className="dropdwoninputforrevnbitrto">
                <select
                  name="Timing"
                  id=""
                  value={formDetails.time}
                  onChange={(e) =>
                    setFormDetails({ ...formDetails, time: e.target.value })
                  }
                  required
                >
                  <option value="Select From DropDown" disabled>
                    Select From DropDown
                  </option>
                  <option value="10:00 am - 1:00 pm">10:00 am - 1:00 pm</option>
                  <option value="01:00 pm - 5:00 pm">01:00 pm - 5:00 pm</option>
                  <option value="06:00 pm - 8:00 pm">06:00 pm - 8:00 pm</option>
                </select>
              </div>

              <div className="carspurchasebuuttonss">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BikeConsultation;
