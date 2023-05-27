import React, { useEffect, useState, useRef } from "react";
import { GiSwipeCard } from "react-icons/gi";
import { FaPen, FaTimes } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { MdError } from "react-icons/md";
import { masterCard } from "../../assets/images";
import CardCheckout from "./CardCheckout";
import { isCardNumberValid } from "../../utils/helpers";

const PaymentModal = () => {
  const [creditCardNumber, setCreditCardNumber] = useState<string>("");
  const [creditCardValue, setCreditCardValue] = useState<string>("");
  const [cvv, setCVV] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [expiryMonth, setExpiryMonth] = useState<string>("");
  const [expiryYear, setExpiryYear] = useState<string>("");
  const [viewCVV, setViewCVV] = useState<boolean>(false);
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [cardValid, setCardValid] = useState<boolean>(false);
  const cvvInputRef = useRef<HTMLInputElement>(null);
  const monthInputRef = useRef<HTMLInputElement>(null);
  const yearInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else if (minutes > 0) {
        setMinutes((prevMinutes) => prevMinutes - 1);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [minutes, seconds]);

  const handleCreditCardChange = (e: { target: { value: string } }) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    let formattedValue = "";

    // Add a dash every 4 digits
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += " - ";
      }
      formattedValue += value[i];
    }

    if (value.length <= 16) {
      setCreditCardValue(value);
      setCreditCardNumber(formattedValue);
    }
  };

  useEffect(() => {
    if (creditCardValue.length === 16) {
      setCardValid(isCardNumberValid(creditCardValue));
    } else {
      setCardValid(false);
    }
  }, [creditCardValue]);

  useEffect(() => {
    if (creditCardValue.length === 16 && cardValid) {
      cvvInputRef.current?.focus();
    }
  }, [cardValid, creditCardValue.length]);
  useEffect(() => {
    if (creditCardValue.length === 16 && cvv.length === 3 && cardValid) {
      monthInputRef.current?.focus();
    }
  }, [cardValid, creditCardValue.length, cvv.length]);
  useEffect(() => {
    if (
      creditCardValue.length === 16 &&
      cvv.length === 3 &&
      expiryYear.length === 2 &&
      cardValid
    ) {
      passwordInputRef.current?.focus();
    }
  }, [cardValid, creditCardValue.length, cvv.length, expiryYear.length]);
  const handleExpiryMonthChange = (e: { target: { value: string } }) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters

    if (value.length === 1 && parseInt(value) > 1) {
      // Add a leading 0 if the user enters a number between 2 to 9
      value = "0" + value;
    }

    if (value.length === 2) {
      const month = parseInt(value);

      if (month > 12) {
        // Restrict the month to a maximum of 12
        value = "12";
      } else if (month >= 2 && month <= 9 && yearInputRef.current) {
        // Focus the year input if the month is between 2 to 9
        yearInputRef.current.focus();
      } else if (month === 10 && yearInputRef.current) {
        yearInputRef.current.focus();
      } else if (month === 11 && yearInputRef.current) {
        yearInputRef.current.focus();
      } else if (month === 12 && yearInputRef.current) {
        yearInputRef.current.focus();
      }
    }

    setExpiryMonth(value);
  };
  return (
    <div className="bg-white font-HemenixRegular h-[650px] rounded-lg   w-8/12">
      <div className="flex justify-end items-center ">
        <div className="h-[32px] flex justify-center items-center bg-opacity-30 w-[40px] bg-[#73788A]">
          <FaTimes className="text-[#2b2f31] text-opacity-80 text-[14px] cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 h-[85%] w-full gap-8 px:8 lg:px-16">
        <div className="w-2/3 h-full ">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-3">
              <div className="w-[40px] h-[40px] rounded-full bg-secondary flex justify-center items-center">
                <GiSwipeCard className="text-white text-xl" />
              </div>
              <div className="text-[20px] font-HemenixBold text-[#394260]">
                AceCoin<span className="font-HemenixRegular">Pay</span>
              </div>
            </div>
            <div className="flex justify-center items-center gap-1">
              <div className="h-[35px] w-[26px] flex justify-center font-HemenixSemibold items-center rounded-sm bg-[#1E2A53] text-white text-[16px] font-medium">
                {Math.floor(minutes / 10)}
              </div>
              <div className="h-[35px] w-[26px] flex justify-center font-HemenixSemibold items-center rounded-sm bg-[#1E2A53] text-white text-[16px] font-medium">
                {minutes % 10}
              </div>
              <h2 className="text-[#161d3b] font-bold text-2xl">:</h2>
              <div className="flex justify-center items-center gap-1">
                <div className="h-[35px] w-[26px] flex justify-center font-HemenixSemibold items-center rounded-sm bg-[#1E2A53] text-white text-[16px] font-medium">
                  {Math.floor(seconds / 10)}
                </div>
                <div className="h-[35px] w-[26px] flex justify-center font-HemenixSemibold items-center rounded-sm bg-[#1E2A53] text-white text-[16px] font-medium">
                  {seconds % 10}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-12">
            <div>
              <h3 className="font-HemenixSemibold text-[16px]   text-[#394260]">
                Card Number{" "}
              </h3>
              <h4 className="mt-1 text-[13px] text-[#A3A9BC] font-HemenixRegular">
                Enter the 16 digit card-number on the card
              </h4>
            </div>
            <div className="flex justify-center items-center gap-2">
              <FaPen className="text-secondary text-xs" />
              <h4 className="text-secondary text-[14px] font-HemenixSemibold">
                Edit
              </h4>
            </div>
          </div>
          <form className="mt-6 w-full">
            <div
              className={
                creditCardNumber
                  ? "flex relative justify-center border rounded-xl  bg-[#F0F5FF] border-[#266BE3] bg-transparent items-center w-full "
                  : "flex relative justify-center border rounded-xl border-[#A3A9BC]  bg-transparent items-center w-full "
              }
            >
              <span className={"-top  left-8 relative"}>
                <div className="w-[24px] h-[24px] rounded-full">
                  <img
                    src={masterCard}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </span>
              <input
                type="text"
                value={creditCardNumber}
                onChange={handleCreditCardChange}
                name="Credit card"
                autoComplete="off"
                placeholder="2412 - 7512  -  3412 - 3456"
                className="w-full h-[52px] px-12   text-[15px]  placeholder:text-[15px] bg-transparent font-HemenixSemibold text-[#394260] placeholder:text-[#A3A9BC] tracking-[4px]  outline-none "
              />
              {creditCardValue.length === 16 && cardValid && (
                <span className={"-top relative -left-8 "}>
                  <BsFillPatchCheckFill className="text-2xl text-secondary" />
                </span>
              )}
              {creditCardValue.length === 16 && !cardValid && (
                <span className={"-top relative -left-8 "}>
                  <MdError className="text-2xl text-red-600" />
                </span>
              )}
            </div>
            <div className="flex justify-between  mt-6 items-center">
              <div>
                <h3 className="font-HemenixSemibold text-[16px]   text-[#394260]">
                  CVV Number{" "}
                </h3>
                <h4 className="mt-1 text-[12.5px] text-[#A3A9BC] ">
                  Enter the 3 or 4 digit number on the card
                </h4>
              </div>
              <label
                className={
                  cvv
                    ? "relative pr-2 flex  w-[50%] h-[52px] border-2 rounded-xl bg-[#F0F5FF] border-[#266BE3] items-center "
                    : "relative pr-2 flex  w-[50%] h-[52px] border-2 rounded-xl border-[#A3A9BC] items-center "
                }
              >
                <input
                  type={viewCVV ? "text" : "password"}
                  value={cvv}
                  ref={cvvInputRef}
                  placeholder="CVV"
                  autoComplete="off"
                  onChange={(e) => {
                    const input = e.target.value;
                    const numericInput = input.replace(/\D/g, ""); // Remove non-numeric characters
                    setCVV(numericInput);
                  }}
                  className="h-full w-full mx-auto   text-center  rounded-xl bg-transparent text-[15px]  placeholder:text-[15px]  font-HemenixSemibold text-[#394260] placeholder:text-[#A3A9BC] outline-none"
                />

                {!viewCVV ? (
                  <RxDashboard
                    className="text-xl -ml-10  text-[#747780] cursor-pointer"
                    onClick={() => setViewCVV((prev) => !prev)}
                  />
                ) : (
                  <RxDashboard
                    className="text-xl -ml-10  text-[#747780] cursor-pointer"
                    onClick={() => setViewCVV((prev) => !prev)}
                  />
                )}
              </label>
            </div>
            <div className="flex justify-between  mt-6 items-center">
              <div>
                <h3 className="font-HemenixSemibold text-[16px]   text-[#394260]">
                  Expiry Date{" "}
                </h3>
                <h4 className="mt-1 text-[12.5px] text-[#A3A9BC] ">
                  Enter the expiration date of the card
                </h4>
              </div>

              <div className="flex justify-center w-1/2 items-center gap-4">
                <input
                  type="text"
                  value={expiryMonth}
                  ref={monthInputRef}
                  placeholder="MM"
                  onChange={handleExpiryMonthChange}
                  className="h-[52px] w-1/2  border-2 focus:border-[#266BE3] focus:bg-[#F0F5FF] border-[#A3A9BC]  text-center  rounded-xl bg-transparent text-[15px]  placeholder:text-[15px]  font-HemenixSemibold text-[#394260] placeholder:text-[#A3A9BC] outline-none"
                />
                <h4 className="text-[16px] font-HemenixSemibold text-[#394260]">
                  /
                </h4>
                <input
                  type="text"
                  value={expiryYear}
                  ref={yearInputRef}
                  placeholder="YYYY"
                  onChange={(e) => {
                    const input = e.target.value;
                    const numericInput = input.replace(/\D/g, ""); // Remove non-numeric characters
                    setExpiryYear(numericInput);
                  }}
                  className="h-[52px] w-1/2  border-2 focus:border-[#266BE3] focus:bg-[#F0F5FF] border-[#A3A9BC]  text-center  rounded-xl bg-transparent text-[15px]  placeholder:text-[15px]  font-HemenixSemibold text-[#394260] placeholder:text-[#A3A9BC] outline-none"
                />
              </div>
            </div>
            <div className="flex justify-between  mt-6 items-center">
              <div>
                <h3 className="font-HemenixSemibold text-[16px]   text-[#394260]">
                  Password{" "}
                </h3>
                <h4 className="mt-1 text-[12.5px] text-[#A3A9BC] ">
                  Enter your Dynamic Password
                </h4>
              </div>
              <label
                className={
                  password
                    ? "relative pr-2 flex   w-[50%] h-[52px] border-2 rounded-xl bg-[#F0F5FF] border-[#266BE3] items-center "
                    : "relative pr-2 flex   w-[50%] h-[52px] border-2 rounded-xl border-[#A3A9BC] items-center "
                }
              >
                <input
                  type={viewPassword ? "text" : "password"}
                  value={password}
                  ref={passwordInputRef}
                  placeholder="Password"
                  onChange={(e) => {
                    const input = e.target.value; // Remove non-numeric characters
                    setPassword(input);
                  }}
                  className="h-full w-full mx-auto px-4  rounded-xl bg-transparent text-[15px]  placeholder:text-[15px]  font-HemenixSemibold text-[#394260] placeholder:text-[#A3A9BC] outline-none"
                />

                {!viewPassword ? (
                  <RxDashboard
                    className="text-xl -ml-10  text-[#747780] cursor-pointer"
                    onClick={() => setViewPassword((prev) => !prev)}
                  />
                ) : (
                  <RxDashboard
                    className="text-xl -ml-10  text-[#747780] cursor-pointer"
                    onClick={() => setViewPassword((prev) => !prev)}
                  />
                )}
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 w-full h-[72px] rounded-md bg-secondary text-white flex justify-center items-center font-HemenixBold text-[17px]"
            >
              Pay Now
            </button>
          </form>
        </div>
        <CardCheckout
          expiryYear={expiryYear}
          expiryMonth={expiryMonth}
          creditCardValue={creditCardValue}
        />
      </div>
    </div>
  );
};

export default PaymentModal;
