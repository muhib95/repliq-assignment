import React, { useContext } from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { UserAuthContext } from "../../UserContext/UserContext";
// import { Form } from "react-router-dom";

const Register = () => {
  const { setUpRecaptha } = useContext(UserAuthContext);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const [flag, setFlag] = useState(false);
  const handleCancel = () => {
    setValue("");
  };
  const getOtp = async (e) => {
    e.preventDefault();
    console.log(value);
    setError("");
    if (value === "" || value === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(value);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };
  console.log(setUpRecaptha);
  return (
    <>
      <div className="flex justify-center mt-10">
        <form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <PhoneInput
            defaultCountry="BD"
            className="px-4 py-3 rounded-full w-20 "
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
          />
          <div id="recaptcha-container"></div>
          <button
            type="submit"
            className="px-8 mr-3 py-3 font-semibold rounded dark:bg-lime-400 dark:text-gray-800"
            onClick={() => handleCancel()}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-8 py-3 font-semibold rounded dark:bg-lime-400 dark:text-gray-800"
          >
            Send Otp
          </button>
        </form>
      </div>
      <div>
        <form style={{ display: flag ? "block" : "none" }}>
          <input type="text" name="otp" placeholder="Enter OTP" />

          <button
            type="submit"
            className="px-8 py-3 font-semibold rounded dark:bg-lime-400 dark:text-gray-800"
          >
            confirm
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
