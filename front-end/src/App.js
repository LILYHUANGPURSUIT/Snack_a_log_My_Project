import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Snacks from "./Components/Snacks";
import NewSnack from "./Components/NewSnack";
import SnackDetails from "./Components/SnackDetails";
import EditSnack from "./Components/EditSnack";
import FourOFour from "./Components/FourOFour";


function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/snacks/new" element={<NewSnack />} />
          <Route path="/snacks/:id" element={<SnackDetails />} />
          <Route path="/snacks/:id/edit" element={<EditSnack />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
