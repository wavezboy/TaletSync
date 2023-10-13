import Image from "next/image";
import React from "react";

export default function Shopify() {
  return (
    <div className="flex gap-[64px] items-center">
      <div>
        <ShopifyLogo />

        <div className="flex gap-[4px] mt-[48px]">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>

        <p className="text-[44px] font-bold font-Inter w-[640px] mt-[48px]">
          ClearLink has upgraded our remote meetings. High-quality video, screen
          sharing, and top-notch security make it essential for our team.
        </p>

        <div className="flex mt-[48px]">
          <Image src="/Avat.svg" alt="" width={56} height={56} />
          <div className=" flex ml-[16px] flex-col ">
            <p className="text-[20px] font-Inter font-semibold text-[#101828]">
              Sarah Thompson
            </p>
            <span className="text-[18px] font-Inter font-normal text-[#475467]">
              Project Manager, Shopify
            </span>
          </div>
          <div className="ml-[200px]">
            <ArrowLeft />
          </div>
          <div className="ml-[32px]">
            <ArrowRight />
          </div>
        </div>
      </div>

      <div className="w-[640px] px-[32px] h-[496px]">
        <Image src="/Contents.svg" alt="" width={576} height={496} />
      </div>
    </div>
  );
}

const ArrowRight = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_b_2_9090)">
      <rect width="56" height="56" rx="28" fill="white" fill-opacity="0.9" />
      <path
        d="M35 28H21M21 28L28 35M21 28L28 21"
        stroke="#175CD3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect x="0.5" y="0.5" width="55" height="55" rx="27.5" stroke="#D1E9FF" />
    </g>
    <defs>
      <filter
        id="filter0_b_2_9090"
        x="-8"
        y="-8"
        width="72"
        height="72"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_2_9090"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_2_9090"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const ArrowLeft = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_b_2_9091)">
      <rect width="56" height="56" rx="28" fill="white" fill-opacity="0.9" />
      <path
        d="M21 28H35M35 28L28 21M35 28L28 35"
        stroke="#175CD3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect x="0.5" y="0.5" width="55" height="55" rx="27.5" stroke="#D1E9FF" />
    </g>
    <defs>
      <filter
        id="filter0_b_2_9091"
        x="-8"
        y="-8"
        width="72"
        height="72"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_2_9091"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_2_9091"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const Star = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2_8957)">
      <path
        d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
        fill="#F2F4F7"
      />
      <g clip-path="url(#clip1_2_8957)">
        <path
          d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
          fill="#FDB022"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_2_8957">
        <rect width="20" height="20" fill="white" />
      </clipPath>
      <clipPath id="clip1_2_8957">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ShopifyLogo = () => (
  <svg
    width="152"
    height="43"
    viewBox="0 0 152 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2_8856)">
      <path
        d="M32.7759 8.1442C32.7466 7.93061 32.56 7.81211 32.4051 7.79921C32.2515 7.78631 29.2405 7.74056 29.2405 7.74056C29.2405 7.74056 26.7223 5.29517 26.4735 5.0464C26.2248 4.79764 25.739 4.87274 25.5501 4.92906C25.5478 4.93024 25.0772 5.07574 24.2852 5.32098C24.1526 4.89152 23.9577 4.36348 23.6797 3.8331C22.7832 2.12227 21.4702 1.21757 19.8837 1.21523C19.8813 1.21523 19.8801 1.21523 19.8778 1.21523C19.7675 1.21523 19.6584 1.22579 19.5481 1.23517C19.5012 1.17885 19.4542 1.1237 19.405 1.06972C18.7138 0.330476 17.8279 -0.0297603 16.766 0.00192169C14.7172 0.0605921 12.6767 1.54026 11.0221 4.16869C9.85811 6.01798 8.97217 8.34137 8.72108 10.1402C6.36838 10.8688 4.72326 11.3781 4.68688 11.3899C3.49939 11.763 3.46185 11.7993 3.30696 12.9188C3.19196 13.7648 0.0847778 37.7916 0.0847778 37.7916L26.1239 42.2951L37.4097 39.4894C37.4097 39.4894 32.8052 8.35779 32.7759 8.1442ZM22.9815 5.72463C22.3819 5.91003 21.7001 6.12125 20.9609 6.35006C20.9456 5.31277 20.8224 3.86948 20.339 2.62214C21.8937 2.91667 22.6588 4.67561 22.9815 5.72463ZM19.5985 6.77249C18.2339 7.19489 16.7448 7.65604 15.2511 8.1184C15.6711 6.50964 16.4679 4.90794 17.4466 3.85774C17.8103 3.467 18.3195 3.03166 18.9227 2.7829C19.4894 3.96569 19.6126 5.64015 19.5985 6.77249ZM16.807 1.36542C17.2881 1.35486 17.6929 1.46047 18.0391 1.68811C17.4853 1.9756 16.9502 2.38864 16.448 2.92723C15.1466 4.32359 14.1492 6.49087 13.7514 8.58188C12.5111 8.96557 11.2978 9.34228 10.1808 9.68727C10.886 6.39583 13.6447 1.45695 16.807 1.36542Z"
        fill="#95BF47"
      />
      <path
        d="M32.4063 7.80041C32.2526 7.78751 29.2416 7.74176 29.2416 7.74176C29.2416 7.74176 26.7235 5.29636 26.4747 5.0476C26.382 4.95489 26.2565 4.90678 26.125 4.88684L26.1262 42.294L37.4109 39.4895C37.4109 39.4895 32.8064 8.35899 32.7771 8.1454C32.7477 7.93181 32.56 7.81331 32.4063 7.80041Z"
        fill="#5E8E3E"
      />
      <path
        d="M19.8699 13.6029L18.5593 18.5065C18.5593 18.5065 17.0972 17.8412 15.3641 17.9503C12.8224 18.1111 12.7954 19.714 12.8213 20.1165C12.9597 22.3096 18.7294 22.7883 19.0533 27.9255C19.3079 31.9667 16.9094 34.7313 13.4537 34.9495C9.30573 35.2112 7.02228 32.7646 7.02228 32.7646L7.90118 29.0262C7.90118 29.0262 10.1998 30.7605 12.0398 30.6443C13.2414 30.568 13.6708 29.5906 13.6274 28.8994C13.4467 26.0386 8.74835 26.2076 8.45151 21.5069C8.20154 17.5514 10.7995 13.543 16.5316 13.1816C18.7399 13.0397 19.8699 13.6029 19.8699 13.6029Z"
        fill="white"
      />
      <path
        d="M52.2714 23.8711C50.9737 23.167 50.3068 22.5735 50.3068 21.7576C50.3068 20.7195 51.2332 20.0525 52.6799 20.0525C54.364 20.0525 55.8676 20.7567 55.8676 20.7567L57.0536 17.1232C57.0536 17.1232 55.9631 16.2701 52.7532 16.2701C48.2864 16.2701 45.1906 18.8282 45.1906 22.4244C45.1906 24.4635 46.6361 26.0207 48.5645 27.1322C50.1218 28.0213 50.6781 28.6522 50.6781 29.5786C50.6781 30.5423 49.8995 31.3209 48.454 31.3209C46.2997 31.3209 44.2653 30.2082 44.2653 30.2082L43.0049 33.8417C43.0049 33.8417 44.8845 35.1022 48.0466 35.1022C52.6438 35.1022 55.9433 32.8408 55.9433 28.7627C55.9421 26.577 54.2744 25.0198 52.2714 23.8711Z"
        fill="black"
      />
      <path
        d="M70.5857 16.234C68.3242 16.234 66.5447 17.3094 65.1737 18.9399L65.0992 18.9026L67.0638 8.63409H61.9475L56.9803 34.7693H62.0965L63.8015 25.8356C64.4684 22.4617 66.2107 20.3866 67.8424 20.3866C68.9911 20.3866 69.4369 21.1651 69.4369 22.2778C69.4369 22.9819 69.3624 23.835 69.2145 24.5392L67.2872 34.7705H72.4037L74.405 24.2051C74.6277 23.0925 74.7765 21.7588 74.7765 20.8684C74.7744 17.9762 73.2546 16.234 70.5857 16.234Z"
        fill="black"
      />
      <path
        d="M86.3404 16.2339C80.1857 16.2339 76.1092 21.7948 76.1092 27.9852C76.1092 31.9516 78.5553 35.1394 83.1527 35.1394C89.1953 35.1394 93.2732 29.7275 93.2732 23.388C93.2732 19.7184 91.1225 16.2339 86.3404 16.2339ZM83.8196 31.2113C82.077 31.2113 81.3355 29.7286 81.3355 27.8746C81.3355 24.9464 82.856 20.1642 85.6362 20.1642C87.4527 20.1642 88.0449 21.7214 88.0449 23.2414C88.0449 26.3919 86.5265 31.2113 83.8196 31.2113Z"
        fill="black"
      />
      <path
        d="M106.36 16.234C102.906 16.234 100.947 19.274 100.947 19.274H100.873L101.17 16.5308H96.6473C96.4252 18.3848 96.0164 21.2013 95.6096 23.3148L92.0505 42.0352H97.1668L98.5745 34.4726H98.6866C98.6866 34.4726 99.7362 35.1395 101.69 35.1395C107.695 35.1395 111.624 28.9863 111.624 22.7574C111.624 19.3113 110.103 16.234 106.36 16.234ZM101.466 31.2848C100.138 31.2848 99.352 30.5434 99.352 30.5434L100.205 25.7613C100.799 22.5735 102.466 20.4599 104.246 20.4599C105.803 20.4599 106.285 21.9054 106.285 23.2776C106.285 26.5771 104.32 31.2848 101.466 31.2848Z"
        fill="black"
      />
      <path
        d="M118.927 8.89368C117.296 8.89368 115.999 10.1914 115.999 11.8591C115.999 13.3791 116.962 14.4173 118.408 14.4173H118.482C120.077 14.4173 121.448 13.3419 121.485 11.4518C121.485 9.96903 120.484 8.89368 118.927 8.89368Z"
        fill="black"
      />
      <path
        d="M111.772 34.7694H116.887L120.373 16.6426H115.219L111.772 34.7694Z"
        fill="black"
      />
      <path
        d="M133.385 16.6051H129.826L130.011 15.752C130.308 14.0098 131.346 12.4525 133.051 12.4525C133.961 12.4525 134.682 12.7121 134.682 12.7121L135.683 8.70851C135.683 8.70851 134.793 8.26392 132.902 8.26392C131.085 8.26392 129.27 8.78295 127.897 9.9689C126.155 11.4517 125.339 13.6013 124.932 15.752L124.784 16.6051H122.411L121.669 20.461H124.043L121.337 34.7704H126.453L129.159 20.461H132.681L133.385 16.6051Z"
        fill="black"
      />
      <path
        d="M145.693 16.6426C145.693 16.6426 142.495 24.6998 141.059 29.098H140.984C140.887 27.6816 139.724 16.6426 139.724 16.6426H134.348L137.427 33.2866C137.501 33.6567 137.464 33.8802 137.315 34.1397C136.721 35.2884 135.721 36.4011 134.534 37.2169C133.571 37.921 132.496 38.3656 131.643 38.6624L133.052 43C134.09 42.7777 136.239 41.9247 138.056 40.2196C140.392 38.0327 142.541 34.6588 144.765 30.0616L151.031 16.6414H145.693V16.6426Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_2_8856">
        <rect
          width="151.557"
          height="43"
          fill="white"
          transform="translate(0.0847778)"
        />
      </clipPath>
    </defs>
  </svg>
);
