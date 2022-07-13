import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFlushed } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTelegram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div class="footer">
      <div class="wrapper">
        <div class="contacts d-flex-row">
          <div>
            <span class="f-18">شماره پشتیبانی </span>
            <span class="f-18 barvan">باروان</span>
            <span class="f-18">۰۲۱۹۱۰۷۱۱۰۶</span>
          </div>
        </div>
        <div class="socials d-flex-row">
          <div class="social-icons d-flex-row g-10">
            <div class="site p-5">
              <div class="bg"></div>
              <span class="f-16 f-w-700">www.BAR1.ir</span>
            </div>
            <div class="icons d-flex-row g-10">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTelegram} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
