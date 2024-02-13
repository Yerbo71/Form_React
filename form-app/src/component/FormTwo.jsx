import { useContext,useState } from "react";
import { AppContext } from "../App";
import Input from "./formelements/Input"
import Select from "./formelements/Select"
import Toggle from "./formelements/Toggle";
import TextArea from "./formelements/TextArea";
import Radio from "./formelements/Radio";
import CheckBox from "./formelements/CheckBox";
import Button from "./formelements/Button";
import styles from "./FormTwo.module.scss";
function FormTwo () {
    const {
      name,setName,
      phone,setPhone,
      remember,setRemember,
      mail,setMail,
      country,setCountry,
      shipping,setShipping,
      comment,setComment,
      shipRef,setShipRef,
      agree,setAgree,
    } = useContext(AppContext)

    const [formData, setFormData] = useState({
      name:name || "",
      phone: phone || "",
      remember:remember || false,
        mail: mail || "",
        country: country || "Kazakhstan",
        shipping: shipping || false,
        comment: comment || "Write here",
        shipRef: shipRef || "",
        agree: agree || false,

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
        setMail(formData.mail);
        setCountry(formData.country);
        setShipping(formData.shipping);
        setComment(formData.comment);
        setShipRef(formData.shipRef);
        setAgree(formData.agree);
    
        console.log(formData);
      };
    return(
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <h1>Form 2</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputBlocks}>
            <Input
              title="Email address"
              type ="text"
              data={formData.mail}
              placeholder="Your Email"
              // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
              handleChange={(value) => handleInput("mail",value)}
              />
              <p>Confirmation email will be sent to this address</p>
          </div>
          <div className={styles.inputBlocks}>
            <Select
              title="Country"
              data={formData.country}
              handleChange={(value) => handleInput("country",value)}
              />
          </div>
          <div className={styles.inputBlocks}>
            <Toggle 
              title={"Shipping address is different"}
              data={formData.shipping}
              handleChange={(value) => handleInput("shipping",value)}
              />
          </div>
          <div className={styles.inputBlocks}>
            <TextArea 
              title={"Comment"}
              placeholder={"Write here"}
              data={formData.comment}
              handleChange={(value) => handleInput("comment",value)}
              />
          </div>
            <Radio 
            title={"Shipping Prefence"}
            data={formData.shipRef}
            handleChange={(value) => handleInput("shipRef",value)}
            
            />
          <div className={styles.footerCustom}>
            <Button title={"Finish"} type={"submit"}  />
              <CheckBox
                type="checkbox"
                data={formData.agree}
                setProps={(value) => handleInput("agree", value)}
                title="Agree with "
              />
              <a>terms of service</a>
          </div>
        </form>

      </div>

    );
}
export  default FormTwo;