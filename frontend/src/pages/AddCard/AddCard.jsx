import React, { useState } from "react";
import Cards from "react-credit-cards";
import "./AddCard.css";
import "react-credit-cards/es/styles-compiled.css";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { saveUser } from "../../slices/userSlice";
import { useNavigate } from "react-router-dom";

const AddCard = () => {
  const [cardInput, setCardInput] = useState({
    number: "",
    name: "",
    focused: "",
    expiry: "",
    cvc: "",
    category: "",
    default: false,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mandatoryFieldsComplete, setMandatoryFieldsComplete] = useState(true);

  const handleInputChange = (e) => {
    console.log(e.target.name);
    if (e.target.name === "expiry") {
      const formattedExpiry = formatExpiry(e.target.value);
      e.target.value = formattedExpiry;
    }

    if (e.target.name === "number") {
      const formatedNumber = formatCardNumber(e.target.value);
      e.target.value = formatedNumber;
    }
    setCardInput({ ...cardInput, [e.target.name]: e.target.value });
  };

  const formatExpiry = (value) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length <= 2) {
      return digits;
    }
    return digits.slice(0, 2) + "/" + digits.slice(2, 4);
  };

  const formatCardNumber = (value) => {
    const digits = value.replace(/\D/g, "");
    return digits.replace(/(.{4})/g, "$1 ").trim();
  };

  const handleInputFocus = (e) => {
    setCardInput({ ...cardInput, focused: e.target.name });
  };

  const addCardClickHandler = async () => {
    if (checkMandatoryFields()) {
      try {
        const res = await axios.post(
          "https://wealthwise-sdlm.onrender.com/api/v1/add-card",
          cardInput,
          { withCredentials: true }
        );
        console.log(res, "result");
        if (res.data.success) {
          toast.success(res.data.message);
          dispatch(saveUser(res.data.user));
          navigate("/dashboard/my-cards");
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
    console.log(cardInput);
  };

  const checkMandatoryFields = () => {
    if (
      cardInput.category === "" ||
      cardInput.cvc === "" ||
      cardInput.expiry === "" ||
      cardInput.name === "" ||
      cardInput.number === ""
    ) {
      setMandatoryFieldsComplete(false);
      toast.error("Please Enter All Details");
      return false;
    }
    return true;
  };
  return (
    <div>
      <Toaster />
      <h2 className="p-4 text-xl px-8">Add New Card</h2>
      <div className="flex flex-col justify-evenly px-8 pt-4">
        <div>
          <Cards
            cvc={cardInput.cvc}
            expiry={cardInput.expiry}
            focused={cardInput.focused}
            name={cardInput.name}
            number={cardInput.number}
          />
        </div>
        <form className="grid grid-cols-3 gap-x-6 gap-y-4 w-full pt-6">
          <input
            className={`input-width ${
              mandatoryFieldsComplete ? "border-blue-900" : "border-red-400"
            }`}
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            className="input-width"
            type="tel"
            name="number"
            maxLength={19}
            placeholder="Card Number"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            className="input-width"
            type="text"
            name="expiry"
            placeholder="Valid Through"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            className="input-width"
            type="tel"
            name="cvc"
            placeholder="CVV"
            maxLength={3}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />

          <input
            className="input-width"
            type="text"
            name="category"
            placeholder="Category"
            onChange={handleInputChange}
          />

          <div className="flex items-center text-lg">
            <input type="checkbox" className="checkbox-style" name="" id="" />
            <label htmlFor="">Set as default card</label>
          </div>
        </form>

        <div className="flex justify-end px-6 py-8 gap-x-8">
          <div
            className="px-6 py-2 rounded-md text-white bg-blue-500"
            onClick={addCardClickHandler}
          >
            Add Card
          </div>
          <div className="px-6 py-2 rounded-md text-red-500 border border-dashed">
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
