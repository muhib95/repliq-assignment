import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";

const Register = () => {
  //   const { setUpRecaptha } = useContext(UserAuthContext);
  const [value, setValue] = useState("");

  const [flag, setFlag] = useState(false);
  const handleCancel = () => {
    setValue("");
  };

  const getOtp = (e) => {
    e.preventDefault();
    setFlag(true);
  };

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
