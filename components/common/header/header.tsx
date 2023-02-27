import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import {
  faUser,
  faHome,
  faHatCowboy,
  faMedkit,
  faMobile,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export function HeaderDesktop() {
  const router = useRouter();

  return (
    <div className="inline-block float-left w-full max-w-[380px] h-full max-h-[80vh] text-center overflow-auto px-[30px] pt-[70px] pb-[45px]">
      <div className="header-content">
        <div className="header-photo relative w-[180px] mt-[0px] mr-auto mb-[30px] ml-auto ">
          <img src="./images/main_photo.jpg" className="rounded-[300px]" />
        </div>
        <div className="header-titles">
          <h2 className="text-4xl font-semibold text-[#f5f5f5] mt-[5px] mr-[0px] mb-[7px] ml-[0px] ">
            Alex Smith
          </h2>
          <h4 className="text-lg font-light text-[#bbb] mx-[0px] my-[5px] ">
            Web Designer
          </h4>
        </div>
      </div>

      <ul className="header-menu absolute px-[0px] py-[15px] bg-[#444] rounded-[35px] top-0 right-[-90px] w-[70px] ">
        <li className="p-[10px] ">
          <Link href="/">
            <FontAwesomeIcon className="text-3xl " icon={faHome} />
          </Link>
        </li>
        <li className="p-[10px] ">
          <Link href="/about">
            <FontAwesomeIcon className="text-3xl " icon={faUser} />
          </Link>
        </li>
        <li className="p-[10px] ">
          <Link href="/">
            <FontAwesomeIcon className="text-3xl " icon={faHatCowboy} />
          </Link>
        </li>
        <li className="p-[10px] ">
          <Link href="/">
            <FontAwesomeIcon className="text-3xl " icon={faMedkit} />
          </Link>
        </li>
        <li className="p-[10px] ">
          <Link href="/">
            <FontAwesomeIcon className="text-3xl " icon={faMobile} />
          </Link>
        </li>
        <li className="p-[10px] ">
          <Link href="/">
            <FontAwesomeIcon className="text-3xl " icon={faEnvelope} />
          </Link>
        </li>
      </ul>

      <div className="header-links my-[20px] mx-[0px]">
        <ul>
          <li className="inline-block mr-[20px]">
            <a
              href="#"
              target="_blank"
              className="text-[#fff] text-lg text-center h-[30px] w-[30px] "
            >
              <FontAwesomeIcon icon={faUser} />
            </a>
          </li>
          <li className="inline-block mr-[20px]">
            <a
              href="#"
              target="_blank"
              className="text-[#fff] text-lg text-center h-[30px] w-[30px] "
            >
              <FontAwesomeIcon icon={faUser} />
            </a>
          </li>
          <li className="inline-block mr-[20px]">
            <a
              href="#"
              target="_blank"
              className="text-[#fff] text-lg text-center h-[30px] w-[30px] "
            >
              <FontAwesomeIcon icon={faUser} />
            </a>
          </li>
        </ul>
      </div>

      <div className="header-button mt-[50px] mb-5">
        <button
          type="button"
          className="bg-transparent text-[#f5f5f5] border-[#f5f5f5] border-solid border-2 px-[30px] py-[8px] rounded-[30px] text-base"
        >
          Download CV
        </button>
      </div>
      <span className="text-[#bbb]">© 2020 All rights reserved.</span>
    </div>
  );
}
