import React, { useEffect, useState } from "react";
import { Footer } from "./Footer";

import { getDriverLastWayBill } from "../api/ApiCalls";
import { Main } from "./Main";
import { Header } from "./Header";

export const Layout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState("");
  const [imgOneData, setImgOneData] = useState("");
  const [imgTwoData, setImgTwoData] = useState("");

  useEffect(() => {
    getDriverLastWayBill(
      setData,
      setImgOneData,
      setImgTwoData,
      setLoading,
      setError
    );
  }, []);
  return (
    <>
      <Header data={data} loading={loading} />
      {/* <Main
        data={data}
        img={imgOneData}
        img2={imgTwoData}
        loading={loading}
        error={error}
      /> */}
      <Main
        data={data}
        img={imgOneData}
        img2={imgTwoData}
        loading={loading}
        error={error}
      />
      <Footer />
    </>
  );
};
