import React from "react";
import { Alert, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
// import RateImg from "../assets/images/rate.png";
import CurrencyFormat from "react-currency-format";
import FlagImg from "../assets/images/flag.svg";
import LineImg from "../assets/images/icons/Line.svg";
import LocationImg from "../assets/images/icons/location.svg";
import EndLocationImg from "../assets/images/icons/end-location.svg";
import {
  faBarcode,
  faCalendar,
  faLocation,
  faLocationDot,
  faLocationPin,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

export const Main = ({ data, img, img2, loading, error }) => {
  return (
    <>
      {loading ? (
        <div className="wrapper">
          <div className="main-content">
            <Spin
              className="m-t-40"
              spinning={loading}
              size={"large"}
              indicator={antIcon}
            />
          </div>
        </div>
      ) : (
        <>
          {error ? (
            <div className="wrapper">
              <div className="main-content">
                <Alert
                  message=" خطا در برقراری ارتباط با سرور مجدد تلاش کنید"
                  type="warning"
                  className="m-t-40"
                />
              </div>
            </div>
          ) : (
            <div className="wrapper">
              <div class="main-content">
                <div class="description f-18 f-w-500">
                  <p>با اهدا سلام،</p>
                  <p>
                    احتراماً، کنسرسیوم حمل بار سراسری
                    <span class="f-w-600">بـاروان،</span> ناوگان حمل‌کننده
                    به‌همراه کاپیتان‌های حرفه‌ای خود را جهت تحویل‌گیری و جابجایی
                    بار درخواستی با شرح مشخصات زیر به حضورتان معرفی می‌گردد:
                  </p>
                </div>
                <div class="top-details">
                  <div class="top-items">
                    <div class="top-item">
                      {/* <i class="fa-solid fa-location-dot color-primary"></i> */}
                      {/* <FontAwesomeIcon
                        icon={faLocationDot}
                        className="color-primary"
                      /> */}

                      <img className="line" src={LocationImg} alt="" />
                      <img className="line" src={LineImg} alt="" />
                      <span class="label-color f-16">مبدا:</span>
                      <span class="value-color f-18">{data.Origintitle}</span>
                    </div>
                    <div class="top-item">
                      {/* <i class="fa-solid fa-location-pin color-secondary"></i> */}
                      {/* <FontAwesomeIcon
                        icon={faLocationPin}
                        className="color-secondary"
                      /> */}
                      <img className="line" src={EndLocationImg} alt="" />
                      <span class="label-color f-16">مقصد</span>
                      <span class="value-color f-18">
                        {data.Destinationtitle}
                      </span>
                    </div>
                  </div>
                  <div class="top-items">
                    <div class="top-item">
                      {/* <i class="fa-solid fa-calendar"></i> */}
                      <FontAwesomeIcon icon={faCalendar} />
                      <span class="label-color f-16">تاریخ بارگیری:</span>
                      <span class="value-color f-18">
                        {data.waybillNumber +
                          "-" +
                          data.yearOfWaybillSeries +
                          "/" +
                          data.countOfWaybillSeries}
                      </span>
                    </div>
                    <div class="top-item">
                      {/* <i class="fa-solid fa-calendar"></i> */}
                      <FontAwesomeIcon icon={faCalendar} />
                      <span class="label-color f-16">تاریخ تخلیه:</span>
                      <span class="value-color f-18">
                        {data.waybillNumber +
                          "-" +
                          data.yearOfWaybillSeries +
                          "/" +
                          data.countOfWaybillSeries}
                      </span>
                    </div>
                  </div>
                  <div class="top-items">
                    <div class="top-item">
                      {/* <i class="fa-solid fa-barcode"></i> */}
                      <FontAwesomeIcon icon={faBarcode} />
                      <span class="label-color f-16">کد رهگیری حواله: </span>
                      <span class="value-color f-14">{data.TrackingCode}</span>
                    </div>
                    <div class="top-item">
                      {/* <i class="fa-solid fa-barcode"></i> */}
                      <FontAwesomeIcon
                        icon={faBarcode}
                        // className="color-primary"
                      />
                      <span class="label-color f-16">
                        شماره و سریال بارنامه:{" "}
                      </span>
                      <span class="value-color f-18"> </span>
                    </div>
                  </div>
                </div>
                <div className="person-details">
                  <div class="person-detail">
                    <div class="body-part b-bottom p-15">
                      <div class="w-50">
                        <div class="pelak">
                          <div class="city b-left">
                            <span class="f-8">{data.truckNumberingPlace}</span>
                            <span class="f-20">{data.truckSeries}</span>
                          </div>
                          <div class="number f-22">{data.truckPlate}</div>
                          <div class="flag">
                            <img src={FlagImg} alt="" />
                            <span class="f-6">.I.R</span>
                            <span class="f-6">IRAN</span>
                          </div>
                        </div>
                        <ul>
                          <li class="m-b-24">
                            <span class="label-color f-16">پلاک ناوگان: </span>
                            <span class="value-color f-18">
                              {data.truckPlate}
                            </span>
                          </li>
                          <li class="m-b-12">
                            <span class="label-color f-16">
                              {" "}
                              کارخانه ساخت:{" "}
                            </span>
                            <span class="value-color f-18">--- </span>
                          </li>
                          <li class="">
                            <span class="label-color f-16">
                              {" "}
                              شماره هوشمند:{" "}
                            </span>
                            <span class="value-color f-18">
                              {" "}
                              {data.truckSmartCode}{" "}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="body-part p-15">
                      <ul>
                        <li class="m-b-22">
                          <div>
                            <span class="label-color f-16"> پلاک بارگیر: </span>
                            <span class="value-color f-18">
                              {" "}
                              {data.truckLoaderPlate}{" "}
                            </span>
                          </div>
                          <div>
                            <span class="label-color f-16">نوع بارگیر:</span>
                            <span class="value-color f-18">
                              {data.LanderTitle}
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="person-detail">
                    <div class="person-header">
                      <span class="f-17">مشخصات کاپیتان اول</span>
                      <div class="rank-box">
                        <div class="part1">
                          <span>
                            {/* <i class="fa-solid fa-star"></i> */}
                            <FontAwesomeIcon icon={faStar} />
                          </span>
                          <span>
                            {/* <i class="fa-solid fa-star"></i> */}
                            <FontAwesomeIcon icon={faStar} />
                          </span>
                          <span>
                            {/* <i class="fa-solid fa-star"></i> */}
                            <FontAwesomeIcon icon={faStar} />
                          </span>
                          <span>
                            {/* <i class="fa-solid fa-star"></i> */}
                            <FontAwesomeIcon icon={faStar} />
                          </span>
                          <span>
                            {/* <i class="fa-solid fa-star"></i> */}
                            <FontAwesomeIcon icon={faStar} />
                          </span>
                        </div>
                        <div class="part2 f-18">۱.۰</div>
                        <div class="triangle"></div>
                      </div>
                    </div>
                    <div class="person-body">
                      <img
                        class="person"
                        src={`data:image/png;base64,${img}`}
                        alt=""
                      />
                      <div class="texts">
                        <li>
                          کاپیتان:{" "}
                          {data.firstDriverName + " " + data.firstDriverFamily}
                        </li>
                        <li>
                          شماره همراه: <b>{data.firstDrivermobile}</b>
                        </li>
                        <li>
                          کد ملی: <b>{data.firstDriverId}</b>
                        </li>
                        <li>شماره هوشمند: {data.firstDriverSmartCode}</li>
                        <li>شماره گواهینامه: {data.firstDriverPlateNumber}</li>
                      </div>
                    </div>
                  </div>
                  <div class="person-detail">
                    <div class="person-header">
                      <span class="f-17">مشخصات کاپیتان دوم</span>
                      <div class="rank-box">
                        <div class="part1">
                          <span>
                            {/* <i class="fa-solid fa-star"></i> */}
                            <FontAwesomeIcon icon={faStar} />
                          </span>
                          <span>
                            {/* <i class="fa-solid fa-star"></i> */}
                            <FontAwesomeIcon icon={faStar} />
                          </span>
                          <span>
                            {/* <i class="fa-solid fa-star"></i> */}
                            <FontAwesomeIcon icon={faStar} />
                          </span>
                          <span>
                            {/* <i class="fa-solid fa-star"></i> */}
                            <FontAwesomeIcon icon={faStar} />
                          </span>
                          <span>
                            {/* <i class="fa-solid fa-star"></i> */}
                            <FontAwesomeIcon icon={faStar} />
                          </span>
                        </div>
                        <div class="part2 f-18">۱.۰</div>
                        <div class="triangle"></div>
                      </div>
                    </div>
                    <div class="person-body">
                      <img
                        class="person"
                        src={`data:image/png;base64,${img2}`}
                        alt=""
                      />
                      <div class="texts">
                        <li>
                          کاپیتان:{" "}
                          {data.secondDriverName +
                            " " +
                            data.secondDriverFamily}
                        </li>
                        <li>
                          شماره همراه: <b>{data.secondDrivermobile}</b>
                        </li>
                        <li>
                          کد ملی: <b>{data.secondDriverId}</b>
                        </li>
                        <li>شماره هوشمند: {data.secondDriverSmartCode}</li>
                        <li>شماره گواهینامه: {data.secondDriverPlateNumber}</li>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sender-details">
                  <div class="sender-detail">
                    <div class="sender-header f-17">مشخصات بار و محموله</div>
                    <div class="sender-item">
                      <span class="label-color f-16">
                        {" "}
                        شناسه ردیف بار بـاروان:
                      </span>
                      <span class="value-color f-18">--- </span>
                    </div>
                    <div class="sender-item">
                      <span class="label-color f-16"> نام محموله:</span>
                      <span class="value-color f-18">{data.goodsMainItem}</span>
                    </div>
                    <div class="sender-item">
                      <span class="label-color f-16">
                        {" "}
                        وزن(کیلوگرم) / حجم(لیتر):
                      </span>
                      <span class="value-color f-18">
                        {data.goodsNetWeight} کیلوگرم{" "}
                      </span>
                    </div>
                    <div class="sender-item">
                      <span class="label-color f-16"> نوع بسته‌بندی:</span>
                      <span class="value-color f-18">
                        {data.goodsPackingNAme}
                      </span>
                    </div>
                    <div class="sender-item">
                      <span class="label-color f-16"> تعداد بسته:</span>
                      <span class="value-color f-18">{data.goodsPacking}</span>
                    </div>
                    <div class="sender-item">
                      <span class="f-16"> ابعاد بسته‌ها:</span>
                      <span class="f-18 f-w-500">---</span>
                    </div>
                    <div class="sender-item">
                      <span class="label-color f-16">
                        {" "}
                        شماره سریال کانتینر:
                      </span>
                      <span class="value-color f-18">--- </span>
                    </div>
                    <div class="sender-item-last">
                      <div class="m-b-24">
                        <span class="label-color f-16"> ارزش محموله:</span>
                        <span class="value-color f-18">
                          {" "}
                          <CurrencyFormat
                            value={data.totalValueOfGoods}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={"ریال"}
                          />
                        </span>
                      </div>
                      <div>
                        <span class="label-color f-16"> توجه:</span>
                        <span class="value-color f-18">
                          ارزش کالا به اظهار فرستنده و گیرنده مندرج در بارنامه
                          می‌باشد، پس از رویت بارنامه دستور بارگیری انجام شود.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="sender-detail">
                    <div class="sender-header f-17">مشخصات فرستنده بار</div>
                    <div class="sender-item">
                      <span class="label-color f-16"> شرکت:</span>
                      <span class="value-color f-18">{data.company_name}</span>
                    </div>
                    <div class="sender-item">
                      <span class="label-color f-16"> نام و نام‌خانوادگی:</span>
                      <span class="value-color f-18">
                        {" "}
                        {data.senderName + " " + data.senderFamily}{" "}
                      </span>
                    </div>
                    <div class="sender-item">
                      <span class="label-color f-16"> کد/شناسه ملی:</span>
                      <span class="value-color f-18">{data.senderId}</span>
                    </div>
                    <div class="sender-item">
                      <span class="label-color f-16"> شماره تلفن:</span>
                      <span class="value-color f-18">--- </span>
                    </div>
                    <div class="sender-item">
                      <span class="label-color f-16"> شماره همراه:</span>
                      <span class="value-color f-18">--- </span>
                    </div>
                    <div class="sender-item">
                      <span class="label-color f-16">کدپستی محل بارگیری:</span>
                      <span class="value-color f-18">
                        {" "}
                        {data.senderWarehouseCode}{" "}
                      </span>
                    </div>
                    <div class="sender-item-before-last">
                      <div>
                        <span class="label-color f-16"> آدرس محل بارگیری:</span>
                      </div>
                      <div>
                        <span class="value-color f-14">
                          {data.senderOriginPlaceName}
                        </span>
                      </div>
                      <div></div>
                    </div>
                    <div class="sender-item-after-last">
                      <span class="label-color f-16"> توضیحات:</span>
                      <span class="value-color f-18">{data.W_desc}</span>
                    </div>
                  </div>
                  <div class="sender-detail">
                    <div class="sender-header f-17">مشخصات گیرنده بار</div>
                    <div class="sender-item">
                      <span class="label-color f-16"> شرکت:</span>
                      <span class="value-color f-16">{data.company_name}</span>
                    </div>
                    <div class="sender-item">
                      <span class="label-color f-16"> نام و نام‌خانوادگی:</span>
                      <span class="value-color f-18">
                        {" "}
                        {data.receiverName + " " + data.receiverFamily}{" "}
                      </span>
                    </div>
                    <div class="sender-item">
                      <span class="label-color f-16"> کد/شناسه ملی:</span>
                      <span class="value-color f-18">{data.receiverId}</span>
                    </div>
                    <div class="sender-item">
                      <span class="label-color f-16"> شماره تلفن:</span>
                      <span class="value-color f-18">--- </span>
                    </div>
                    <div class="sender-item">
                      <span class="label-color f-16"> شماره همراه:</span>
                      <span class="value-color f-18">--- </span>
                    </div>
                    <div class="sender-item">
                      <span class="label-color f-16">کدپستی محل بارگیری:</span>
                      <span class="value-color f-18">
                        {data.receiverWarehouseCode}{" "}
                      </span>
                    </div>
                    <div class="sender-item-before-last">
                      <div>
                        <span class="label-color f-16">آدرس محل تخلیه:</span>
                      </div>
                      <div>
                        <span class="value-color f-18">
                          {" "}
                          {data.receiverMainCityName}{" "}
                        </span>
                      </div>
                      <div></div>
                    </div>
                    <div class="sender-item-after-last">
                      <span class="label-color f-16"> توضیحات:</span>
                      <span class="value-color f-18"> {data.W_desc}</span>
                    </div>
                  </div>
                </div>
                <div class="transaction-details">
                  <div class="transaction-detail">
                    <div class="part1">
                      <div class="transaction-header f-16 f-w-500">
                        اطلاعات دریافتی و پرداختی کرایه (ريال)
                      </div>
                      <div class="transaction-body">
                        <div class="transaction-item">
                          <span class="label-color f-16">
                            خالص کرایه پایه(تن/سرویس):
                          </span>
                          <span class="value-color f-18">
                            {" "}
                            <CurrencyFormat
                              value={data.baseFare}
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={"ریال"}
                            />{" "}
                          </span>
                        </div>
                        <div class="transaction-item">
                          <span class="label-color f-16">
                            {" "}
                            جمع کرایه پایه:{" "}
                          </span>
                          <span class="value-color f-18">
                            {" "}
                            <CurrencyFormat
                              value={data.baseFare}
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={"ریال"}
                            />
                          </span>
                        </div>
                        <div class="transaction-item">
                          <span class="label-color f-16">
                            {" "}
                            سهم {data.CommissionPercentage + "%"} سازمان:{" "}
                          </span>
                          <span class="value-color f-18">
                            {" "}
                            <CurrencyFormat
                              value={data.OrganizationShare}
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={"ریال"}
                            />
                          </span>
                        </div>
                        <div class="transaction-item">
                          <span class="label-color f-16">
                            {" "}
                            مبلغ بیمه بارنامه:{" "}
                          </span>
                          <span class="value-color f-18">
                            <CurrencyFormat
                              value={data.AmountOfInsurance}
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={"ریال"}
                            />
                          </span>
                        </div>
                        <div class="transaction-item">
                          <span class="label-color f-16">
                            م ارزش افزوده بیمه بارنامه:
                          </span>
                          <span class="value-color f-18"> ---</span>
                        </div>
                        <div class="transaction-item">
                          <span class="label-color f-16"> دیماند: </span>
                          <span class="value-color f-18">
                            {data.ShippingFee}
                          </span>
                        </div>
                        <div class="transaction-item">
                          <span class="label-color f-16">
                            باسکول، لیفتراک، جرثقیل:
                          </span>
                          <span class="value-color f-18">
                            {data.WeighbridgeFee}
                          </span>
                        </div>
                        <div class="transaction-item">
                          <span class="label-color f-16">
                            میزان حق خواب راننده (ساعتی/روزانه):
                          </span>
                          <span class="value-color f-18"> ---</span>
                        </div>
                        <div class="transaction-item">
                          <span class="label-color f-16">
                            سهم %0/5 بیمه تکمیلی راننده:
                          </span>
                          <span class="value-color f-18"> ---</span>
                        </div>
                        <div class="transaction-item">
                          <span class="label-color f-16">
                            هزینه‌های خدمات آنلاین:
                          </span>
                          <span class="value-color f-18"> ---</span>
                        </div>
                        <div class="transaction-item">
                          <span class="label-color f-16">
                            {" "}
                            مبلغ پیش کرایه:{" "}
                          </span>
                          <span class="value-color f-18"> ---</span>
                        </div>
                        <div class="transaction-item">
                          <span class="label-color f-16">
                            {" "}
                            میزان کسر تناژ مجاز:{" "}
                          </span>
                          <span class="value-color f-18"> ---</span>
                          <div class="m-r-auto d-flex-row g-10">
                            <span class="label-color f-16">
                              <img src="./assets/images/_.svg" alt="" />
                            </span>
                            <span class="value-color f-16">کیلوگرم</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="part2">
                      <div class="transaction-header f-16 f-w-500">
                        اطلاعات دریافتی و پرداختی راننده (ريال)
                      </div>
                      <div class="transaction-body">
                        <div class="transaction-item">
                          <span class="label-color f-16">
                            کمیسیون شرکت حمل و نقل:
                          </span>
                          <span class="value-color f-18">
                            ---
                            {/* <CurrencyFormat
                              value={data.RawCommissionAmount}
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={"ریال"}
                            />{" "} */}
                          </span>
                        </div>
                        <div class="transaction-item">
                          <span class="label-color f-16">
                            {" "}
                            مبلغ کمیسیون دریافتی:{" "}
                          </span>
                          <span class="value-color f-18"> ---</span>
                        </div>
                        <div class="transaction-item">
                          <span class="label-color f-16">
                            مبلغ بیمه مکمل بار و ناوگان:
                          </span>
                          <span class="value-color f-18">---</span>
                        </div>
                        <div class="transaction-item">
                          <span class="label-color f-16">
                            م ارزش افزوده بیمه مکمل:
                          </span>
                          <span class="value-color f-18">---</span>
                        </div>
                        <div class="transaction-item">
                          <span class="label-color f-16">
                            خدمات سالن اعلام بار فیزیکی:
                          </span>
                          <span class="value-color f-18">---</span>
                        </div>
                        <div class="transaction-item">
                          <span class="label-color f-16">
                            خدمات اعلام بار و نوبت‌دهی آنلاین:
                          </span>
                          <span class="value-color f-18">---</span>
                        </div>
                        <div class="transaction-item">
                          <span class="label-color f-16">
                            {" "}
                            جمع دریافتی حق خواب:{" "}
                          </span>
                          <span class="value-color f-18">---</span>
                        </div>
                        <div class="transaction-item">
                          <span class="label-color f-16">
                            جمع مبلغ دریافتی از راننده:
                          </span>
                          <span class="value-color f-18">
                            <CurrencyFormat
                              value={data.receiveRequiredDriver}
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={"ریال"}
                            />
                          </span>
                        </div>
                        <div class="transaction-item">
                          <span class="label-color f-16">
                            {" "}
                            جمع مبلغ کسر تناژ:{" "}
                          </span>
                          <span class="value-color f-18">---</span>
                        </div>
                        <div class="transaction-item">
                          <span class="label-color f-16">
                            جمع پرداختی به راننده (صافی راننده):
                          </span>
                          <span class="value-color f-18">---</span>
                        </div>
                        <div class="transaction-item">
                          <span class="label-color f-16"> </span>
                          <span class="value-color f-18"> </span>
                        </div>
                        <div class="transaction-item">
                          <span class="label-color f-16"></span>
                          <span class="value-color f-18"> </span>
                          <div class="m-r-auto d-flex-row g-10">
                            <span class="label-color f-16"></span>
                            <span class="value-color f-16"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="foot">
                      <div class="foot-content">
                        <div>
                          <span class="label-color f-16">
                            کرایه کل قابل پرداخت:
                          </span>
                          <span class="value-color f-18">
                            {" "}
                            <CurrencyFormat
                              value={data.TotalPrice}
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={"ریال"}
                            />
                          </span>
                        </div>
                        <div>
                          <span class="label-color f-16">
                            کرایه کل به حروف:
                          </span>
                          <span class="value-color f-18">---</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="transaction-detail-2">
                    <div class="transaction-header f-16 f-w-500">
                      مشخصات شرکت حمل و نقل
                    </div>
                    <div class="transaction-body">
                      <div class="transaction-item">
                        <span class="label-color f-16">نام شرکت/موسسه: </span>
                        <span class="value-color f-18">
                          {" "}
                          {data.company_name}{" "}
                        </span>
                      </div>
                      <div class="transaction-item">
                        <span class="label-color f-16">کد شرکت: </span>
                        <span class="value-color f-18">
                          {" "}
                          {data.company_code}{" "}
                        </span>
                      </div>
                      <div class="transaction-item">
                        <span class="label-color f-16">شماره تلفن: </span>
                        <span class="value-color f-18">
                          {" "}
                          {data.FreighterFullInfo_Mobile}
                        </span>
                      </div>
                      <div class="transaction-item">
                        <span class="label-color f-16">مدیر عامل: </span>
                        <span class="value-color f-18">---</span>
                      </div>
                      <div class="transaction-item">
                        <span class="label-color f-16"> مسئول فنی: </span>
                        <span class="value-color f-18">---</span>
                      </div>
                      <div class="transaction-item">
                        <span class="label-color f-16">آدرس شرکت/موسسه: </span>
                        <span class="value-color f-18">---</span>
                      </div>
                      <div class="transaction-item">
                        <span class="label-color f-16">
                          {" "}
                          نام شرکت بیمه‌گر:{" "}
                        </span>
                        <span class="value-color f-18">---</span>
                      </div>
                      <div class="transaction-item">
                        <span class="label-color f-16">
                          {" "}
                          شماره قرارداد بیمه:{" "}
                        </span>
                        <span class="value-color f-18">
                          {data.insuranceNumber}
                        </span>
                      </div>
                      <div class="transaction-item-last">
                        <span class="label-color f-16">توضیحات: </span>
                        <span class="value-color f-18">{data.W_desc}</span>
                      </div>

                      <div class="alert">
                        <span class="value-color f-18 f-w-500">
                          توجه: جریمه کامیون ممنوع بر عهده صاحب بار است. کرایه
                          در مقصد پرداخت می‌گردد.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accept d-flex-row g-10">
                  <span>
                    <img src="./assets/images/check-square.svg" alt="" />
                  </span>
                  <span class="f-18 d-flex-row"> پذیرش قوانین باروان</span>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
