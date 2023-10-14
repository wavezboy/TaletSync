"use client";
import React from "react";
import Accordion from "react-bootstrap/Accordion";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Faqs() {
  return (
    <div className="flex gap-[96px] w-[1402px] max-w-full mx-auto">
      <div className="w-1/2">
        <p className="text-[18px] font-semibold font-Inter text-[#175CD3]">
          Support
        </p>
        <span className="block text-[48px] font-semibold font-Inter text-[#1D2939]">
          FAQs
        </span>
        <span className="block text-[24px] font-Inter font-normal w-[547px] text-[#667085]">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please chat to our friendly team.
        </span>
      </div>
      <div className="w-1/2">
        {/* accoridion */}
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="bg-[#475467]">
              <p className="text-[20px] font-semibold font-Inter p-3  text-[#101828]">
                How many participants can join a ClearLink video conference?
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-[18px] font-Inter font-normal text-[#475467]">
                ClearLink offers flexible meeting options. Depending on your
                subscription plan, you can host meetings with varying numbers of
                participants. Our plans are designed to accommodate small team
                collaborations and large-scale webinars, ensuring you have the
                right fit for your needs.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <p className="p-3 text-[20px] font-semibold font-Inter  text-[#101828]">
                Can I use ClearLink on multiple devices?
              </p>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <p className="p-3 text-[20px] font-semibold font-Inter  text-[#101828]">
                Is ClearLink compatible with other video conferencing platforms?
              </p>
            </Accordion.Header>
            <Accordion.Body className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <p className="p-3 text-[20px] font-semibold font-Inter  text-[#101828]">
                How does ClearLink ensure the security of my video conferences?
              </p>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <p className="p-3 text-[20px] font-semibold font-Inter  text-[#101828]">
                Do I need to download any software to use ClearLink?
              </p>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <p className="p-3 text-[20px] font-semibold font-Inter  text-[#101828]">
                What kind of customer support does ClearLink provide?
              </p>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
