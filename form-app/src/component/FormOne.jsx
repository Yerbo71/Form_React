import React, { useState, useContext } from "react";
import Input from "./formelements/Input";
import CheckBox from "./formelements/CheckBox";
import { AppContext } from "../App";
import styles from "./FormOne.module.scss";
import Button from "./formelements/Button";
import { useNavigate } from "react-router-dom"; 

function FormOne() {
  const navigate = useNavigate();
  const { name, setName, phone, setPhone, remember, setRemember } = useContext(
    AppContext
  );

  const [formData, setFormData] = useState({
    name: name || "",
    phone: phone || "",
    remember: remember || false,
  });

  const handleInput = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(formData.name);
    setPhone(formData.phone);
    setRemember(formData.remember);

    console.log(formData);
    navigate("/formTwo");
  };

  

  return (
    <div className={styles.container}>
      <div className={styles.headerBlock}>
        <h1>Form 1</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputBlocks}>
          <Input
            title="Full Name"
            data={formData.name}
            placeholder="Yerbolat"
            handleChange={(value) => handleInput("name", value)}
          />
        </div>
        <div className={styles.inputBlocks}>
          <Input
            title="Phone Number"
            data={formData.phone}
            placeholder="8-707-259-79-53"
            type="tel"
            handleChange={(value) => handleInput("phone", value)}
          />
        </div>
        <div className={styles.footerCustom}>
        <Button title={"Continue"} type={"submit"}/>
          <CheckBox
            type="checkbox"
            data={formData.remember}
            setProps={(value) => handleInput("remember", value)}
            title="Remember me!"
          />
        </div>
      </form>
    </div>

  );
}

export default FormOne;
