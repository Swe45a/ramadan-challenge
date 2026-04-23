
import { useState } from "react";
import LandingPage from "./components/LandingPage";
import RamadanDashboard from "./components/RamadanDashboard";

function App() {
  const [showLanding, setShowLanding] = useState(true);

  return showLanding ? (
    <LandingPage onStart={() => setShowLanding(false)} />
  ) : (
    <RamadanDashboard />
  );
}

export default App;