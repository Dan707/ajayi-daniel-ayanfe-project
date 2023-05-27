import React from "react";
import { BiWifi } from "react-icons/bi";
import { ImAppleinc } from "react-icons/im";
import { IoReceipt } from "react-icons/io5";
import { card, masterCard } from "../../assets/images";

const CardCheckout = ({ expiryYear, expiryMonth, creditCardValue }: any) => {
  return (
    <div className="w-[40%] xxl:w-1/3 h-full font-HemenixRegular flex flex-col justify-end items-center">
      <div className="w-full h-4/5 bg-[#E8ECEF] rounded-xl relative">
        <div className="w-1/3 bg-[#1365EE] absolute left-1/3 -top-[26%] h-[10px] rounded-sm mx-auto  "></div>
        <div className="w-2/3 bg-[#f7f9fa] -top-[24%]  h-[60%] absolute left-1/2 transform translate-x-[-50%] rounded-xl mx-auto">
          <div className="w-[55%] bg-[#BBD1F5] h-[22px] mx-auto rounded-t-[4px] rounded-b-[8px] bg-opacity-30"></div>
          <div className="px-4 w-full mt-6">
            <div className="flex justify-between  items-start">
              <div className="w-[26px] h-[32px] rounded-md">
                <img src={card} className="w-full h-full object-cover" alt="" />
              </div>
              <BiWifi className="text-2xl text-[#394260]" />
            </div>
            <div className="mt-12">
              <h4 className="text-black text-[15px]">Jonathan Michael</h4>
              <div className="mt-2 flex justify-start items-center gap-6">
                <div className="flex justify-start items-center h-[10px] gap-1">
                  <div className="w-[8px] h-[8px] rounded-full bg-[#3D2929]" />
                  <div className="w-[8px] h-[8px] rounded-full bg-[#3D2929]" />
                  <div className="w-[8px] h-[8px] rounded-full bg-[#3D2929]" />
                  <div className="w-[8px] h-[8px] rounded-full bg-[#3D2929]" />
                </div>
                <h4 className="font-HemenixSemibold text-[18px] text-black">
                  {creditCardValue ? creditCardValue.slice(-4) : "----"}
                </h4>
              </div>
            </div>
            <div className="flex justify-between mt-6 items-center">
              <h4 className="text-[14px] text-black font-HemenixSemibold">
                {expiryMonth ? expiryMonth : "--"} /{" "}
                {expiryYear ? expiryYear : "--"}
              </h4>
              <div className="flex justify-center items-center flex-col">
                <div className="w-[32px] h-[24px]">
                  <img
                    src={masterCard}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <h4 className="text-[#141414] text-[8px] text-center font-HemenixBold">
                  mastercard
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 w-full mt-44">
          <div className="flex justify-between ">
            <h4 className="text-[#73788A] text-[15px] ">Company</h4>
            <div className="flex justify-center items-center gap-2">
              <div className="w-[26px] bg-[#394260] h-[26px] rounded-full flex justify-center items-center">
                <ImAppleinc className="text-[16px] text-white" />
              </div>
              <h4 className="text-[#394260] text-[15px] font-HemenixSemibold">
                Apple
              </h4>
            </div>
          </div>

          <div className="flex justify-between mt-2">
            <h4 className="text-[#73788A] text-[15px] ">Order Number</h4>

            <h4 className="text-[#394260] text-[15px] font-HemenixSemibold">
              1266201
            </h4>
          </div>
          <div className="flex justify-between mt-2">
            <h4 className="text-[#73788A] text-[15px] ">Product</h4>

            <h4 className="text-[#394260] text-[15px] font-HemenixSemibold">
              Mack Book Air
            </h4>
          </div>
          <div className="flex justify-between mt-2">
            <h4 className="text-[#73788A] text-[15px] ">VAT (20%)</h4>

            <h4 className="text-[#394260] text-[15px] font-HemenixSemibold">
              $100.00
            </h4>
          </div>
        </div>
        <div className="flex justify-between mt-4 items-center">
          <div className="bg-white h-[32px] w-[18px] rounded-r-full"></div>
          <div className="w-10/12 mx-auto h-[1px] rounded-full border border-[#B2BBC9] border-dashed " />
          <div className="bg-white h-[32px] w-[18px] rounded-l-full"></div>
        </div>
        <div className="flex justify-between items-center mt-2 px-6">
          <div>
            <h4 className="text-[#73788A] text-[15px] ">You have to Pay</h4>
            <div className="text-[#1D294F] mt-1 text-[24px] font-HemenixSemibold">
              549.<span className="text-[16px]">99</span>{" "}
              <span className="text-[#73788A] font-HemenixRegular text-[15px] ">
                USD
              </span>
            </div>
          </div>
          <IoReceipt className="text-3xl text-[#1D294F] transform rotate-180" />
        </div>
      </div>
    </div>
  );
};

export default CardCheckout;
