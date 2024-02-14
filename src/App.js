import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BikeServiceBooking from "./forms/BikeServiceBooking";
import CarConsultation from "./forms/CarConsultation";
import CarServiceBooking from "./forms/CarServiceBooking";
import EcuTuning from "./forms/EcuTuning";
import Racing from "./forms/Racing";
import BikeConsultation from "./forms/BikeConsultation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/BikeConsultation" element={<BikeConsultation />} />
          <Route path="/BikeServiceBooking" element={<BikeServiceBooking />} />
          <Route path="/CarConsultation" element={<CarConsultation />} />
          <Route path="/CarServiceBooking" element={<CarServiceBooking />} />
          <Route path="/EcuTuning" element={<EcuTuning />} />
          <Route path="/Racing" element={<Racing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
