import { createContext, useState } from "react";
import FormOne from "./component/FormOne";
import FormTwo from "./component/FormTwo";
import "./../src/App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AppContext = createContext();

const AppProvider = ({children}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(null);
  const [remember, setRemember] = useState(false);
  const [mail, setMail] = useState("");
  const [country, setCountry] = useState("");
  const [shipping, setShipping] = useState(false);
  const [comment, setComment] = useState("");
  const [shipRef, setShipRef] = useState("");
  const [agree, setAgree] = useState(false);

  return (
    <AppContext.Provider value={{
      name, setName,
      phone, setPhone,
      remember, setRemember,
      mail, setMail, country, setCountry,
      shipping, setShipping,
      comment, setComment,
      shipRef, setShipRef,
      agree, setAgree
    }}>
      {children}
    </AppContext.Provider>
  );
}

function App() {
  return (
    <div className="main-screen">
      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route path="/" element={<FormOne />} />
            <Route path="/formTwo" element={<FormTwo />} />
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
