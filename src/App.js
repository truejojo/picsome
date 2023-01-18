import { Routes, Route,  } from "react-router-dom";

import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Photos />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
