import React from "react";
import Image from "next/image";
export default function Ready() {
  return (
    <div className="flex gap-[125px] items-center">
      <div>
        <p className="text-[48px] font-semibold font-Inter w-[600px] text-[#101828]">
          Ready to clear the path to perfect communication?
        </p>
        <div className="ml-[16px] mt-[32px] flex gap-[12px] items-center">
          <Check />
          <p className="text-[24px] font-normal font-Inter text-[#475467]">
            30 days free trial
          </p>
        </div>
        <div className="ml-[16px] mt-[20px] flex gap-[12px] items-center">
          <Check />
          <p className="text-[24px] font-normal font-Inter text-[#475467]">
            Cancel at any time
          </p>
        </div>
        <div className="ml-[16px] mt-[20px] flex gap-[12px] items-center">
          <Check />
          <p className="text-[24px] font-normal font-Inter text-[#475467]">
            Access to all features
          </p>
        </div>
        <div className="ml-[16px] mt-[20px] flex gap-[12px] items-center">
          <Check />
          <p className="text-[24px] font-normal font-Inter text-[#475467]">
            Peronalized onboarding
          </p>
        </div>

        <div className="flex gap-[8px] mt-[40px]">
          <button className="w-[144px] h-[52px] bg-white rounded-[100px] border border-[#98A2B3]">
            <p className="text-[16px] font-Inter font-semibold">
              Talk to sales
            </p>
          </button>
          <button className="w-[195px] h-[52px] bg-[#175CD3] rounded-[100px] ">
            <p className="text-[16px] text-white font-Inter font-semibold">
              Start your free trial
            </p>
          </button>
        </div>
      </div>
      <div>
        <Image src="/mockup.svg" alt="" height={682} width={1024} />
      </div>
    </div>
  );
}

const Check = () => (
  <svg
    width="28"
    height="29"
    viewBox="0 0 28 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_301_571)">
      <path
        d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
        stroke="#175CD3"
        stroke-width="2.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_301_571">
        <rect y="0.5" width="28" height="28" rx="14" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
