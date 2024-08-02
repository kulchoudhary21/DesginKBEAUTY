import React from "react";

const IconsHeader = () => {
  return (
    <>
      <div>
        <svg
          aria-hidden="true"
          fill="none"
          focusable="false"
          width="24"
          className="header__nav-icon icon icon-account"
          viewBox="0 0 24 24"
        >
          <path
            d="M16.125 8.75c-.184 2.478-2.063 4.5-4.125 4.5s-3.944-2.021-4.125-4.5c-.187-2.578 1.64-4.5 4.125-4.5 2.484 0 4.313 1.969 4.125 4.5Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3.017 20.747C3.783 16.5 7.922 14.25 12 14.25s8.217 2.25 8.984 6.497"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-miterlimit="10"
          ></path>
        </svg>
      </div>
      <div>
        <svg
          aria-hidden="true"
          fill="none"
          focusable="false"
          width="24"
          className="header__nav-icon icon icon-search"
          viewBox="0 0 24 24"
        >
          <path
            d="M10.364 3a7.364 7.364 0 1 0 0 14.727 7.364 7.364 0 0 0 0-14.727Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M15.857 15.858 21 21.001"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
          ></path>
        </svg>
      </div>
      <div style={{ width: "24px" }}>
        <svg viewBox="0 0 64 64">
          <path d="M32.012,59.616c-1.119-.521-2.365-1.141-3.707-1.859a79.264,79.264,0,0,1-11.694-7.614C6.316,42,.266,32.6.254,22.076,0.244,12.358,7.871,4.506,17.232,4.5a16.661,16.661,0,0,1,11.891,4.99l2.837,2.889,2.827-2.9a16.639,16.639,0,0,1,11.874-5.02h0c9.368-.01,17.008,7.815,17.021,17.539,0.015,10.533-6.022,19.96-16.312,28.128a79.314,79.314,0,0,1-11.661,7.63C34.369,58.472,33.127,59.094,32.012,59.616Z">
            <path></path>
          </path>
        </svg>
      </div>
      <div>
        <svg
          aria-hidden="true"
          fill="none"
          focusable="false"
          width="24"
          className="header__nav-icon icon icon-cart"
          viewBox="0 0 24 24"
        >
          <path
            d="M4.75 8.25A.75.75 0 0 0 4 9L3 19.125c0 1.418 1.207 2.625 2.625 2.625h12.75c1.418 0 2.625-1.149 2.625-2.566L20 9a.75.75 0 0 0-.75-.75H4.75Zm2.75 0v-1.5a4.5 4.5 0 0 1 4.5-4.5v0a4.5 4.5 0 0 1 4.5 4.5v1.5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default IconsHeader;
