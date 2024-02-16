import React, { useState , useEffect } from "react";
import axios from "axios";
import url from "./global";
function Racing() {
  const [formDetails, setFormDetails] = useState({
    personname: "",
    age: "",
    phoneNo: "",
    email: "",
    location: "",
    address: "",
    purpose: "Select From DropDown",
    exprerience: "Select From DropDown",
    cc: "Select From DropDown",
  });
  useEffect(async() => {
    await axios.get(`${url}/`);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${url}/race`, formDetails); // Proxy will automatically prepend the backend URL
      if (response.data) {
        alert("Your request has been successfully sent");
        setFormDetails({
          personname: "",
          age: "",
          phoneNo: "",
          email: "",
          location: "",
          address: "",
          purpose: "Select From DropDown",
          exprerience: "Select From DropDown",
          cc: "Select From DropDown",
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
      <div className="firstsectionformscarpurchased">
        <div className="formsLogoflex"></div>
        <h1>RACING</h1>
        <div className="carpurchaseform">
          <form onSubmit={handleSubmit}>
            <div id="formschecktickbox" style={{ display: "block" }}></div>
            <div id="formsnotchecktickbox" style={{ display: "none" }}>
              <div className="inputboxforcarpurchase">
                <input type="text" placeholder="Type the Company Name" />
              </div>
            </div>

            <div className="inputboxforcarpurchase">
              <input
                type="text"
                placeholder="Name"
                name="(This-Form-is-Join-Racing) Name:"
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
                type="text"
                placeholder="Age"
                name="Age"
                value={formDetails.age}
                onChange={(e) =>
                  setFormDetails({
                    ...formDetails,
                    age: e.target.value,
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

            <div className="callschdeuleforrevnito">
              <h2>Purpose of Training</h2>
            </div>
            <div className="dropdwoninputforrevnbitrto">
              <select
                name="Professional Training or Casual track rider : "
                value={formDetails.purpose}
                onChange={(e) =>
                  setFormDetails({
                    ...formDetails,
                    purpose: e.target.value,
                  })
                }
                id=""
              >
                <option value="Select From DropDown" disabled>
                  Select From DropDown
                </option>
                <option value="Professional Training for Track">
                  Professional Training for Track
                </option>
                <option value="Riding Skill development for Road Safety">
                  Riding Skill development for Road Safety
                </option>
                <option value="Professional Training for track">
                  Basic Knowledge for Casual Track Ride
                </option>
              </select>
            </div>
            <div className="callschdeuleforrevnito">
              <h2>Previous track experience / Certification</h2>
            </div>

            <div className="dropdwoninputforrevnbitrto">
              <select
                name="Previous track experience / Certification :"
                value={formDetails.exprerience}
                onChange={(e) =>
                  setFormDetails({
                    ...formDetails,
                    exprerience: e.target.value,
                  })
                }
                id=""
              >
                <option value="Select From DropDown" disabled>
                  Select From DropDown
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="callschdeuleforrevnito">
              <h2>Interested className of Racing</h2>
            </div>

            <div className="dropdwoninputforrevnbitrto">
              <select
                name="Interested className of Racing"
                value={formDetails.cc}
                onChange={(e) =>
                  setFormDetails({
                    ...formDetails,
                    cc: e.target.value,
                  })
                }
                id=""
              >
                <option value="Select From DropDown" disabled>
                  Select From DropDown
                </option>
                <option value="Stock 165cc">Stock 165cc</option>
                <option value="Prostock 165cc">Prostock 165cc</option>
                <option value="Stock 400cc">Stock 400cc</option>
                <option value="Prostock 400cc">Prostock 400cc</option>
              </select>
            </div>

            <div className="carspurchasebuuttonss">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Racing;
