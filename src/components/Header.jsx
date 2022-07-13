import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spin } from "antd";
import React from "react";
import Logo from "../assets/images/logo.svg";
import QRCode from "../assets/images/qr.png";
import {
  faBarcode,
  faBook,
  faCalendar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export const Header = ({ data, loading }) => {
  return (
    <>
      <div class="header">
        <div class="wrapper">
          <div class="logo">
            <img class="img-logo" src={Logo} alt="" />
          </div>
          <div class="qr-code-box">
            <div class="contents">
              <div class="item">
                <span>
                  {" "}
                  {/* <i class="fa-solid fa-calendar"></i>{" "} */}
                  <FontAwesomeIcon icon={faCalendar} />
                </span>
                <span class="label-color f-16">تاریخ صدور: </span>
                <span class="value-color f-18">{data.Issuedate}</span>
              </div>
              <div class="item">
                <span>
                  {/* <i class="fa-solid fa-clock"></i> */}
                  <FontAwesomeIcon icon={faClock} />
                </span>
                <span class="label-color f-16">ساعت صدور:</span>
                <span class="value-color f-18">{data.IssueTime}</span>
              </div>
              <div class="item">
                <span>
                  {/* <i class="fa-solid fa-book"></i> */}
                  <FontAwesomeIcon icon={faBook} />
                </span>
                <span class="label-color f-16">پیوست:</span>
                <span class="value-color f-18"> ندارد</span>
              </div>
              <div class="item">
                <span class="f-14">
                  {/* <i class="fa-solid fa-barcode"></i> */}
                  <FontAwesomeIcon icon={faBarcode} />
                </span>

                <span class="label-color f-16">کد رهگیری بارنامه: </span>
              </div>
              <div class="item">
                <span class="let-1 value-color f-18 f-w-500">
                  {data.TrackingCode}
                </span>
              </div>
            </div>
            <div class="qr-code">
              <img src={QRCode} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="header-bottom"></div>
    </>
  );
};
