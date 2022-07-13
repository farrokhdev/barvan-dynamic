import axios from "axios";

export const getDriverLastWayBill = async (
  setData,
  setImgOne,
  setImgTwo,
  setLoading,
  setError = ""
) => {
  try {
    setLoading(true);
    await axios({
      url: "https://cryptapi.bar1.ir/crypt/v1/getDriverImg?nationalId=3070166148",
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => setImgOne(res.data.result));

    await axios({
      url: "https://cryptapi.bar1.ir/crypt/v1/getDriverImg?nationalId=3060092311",
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => setImgTwo(res.data.result));

    await axios({
      url: "https://cryptapi.bar1.ir/crypt/v1/getDriverLastWaybill?nationalId=3060092311",
      method: "GET",
      // timeout: 2,

      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Credentials": true,
      },
    }).then((res) => {
      setData(res.data.result);
      setLoading(false);
    });
  } catch (err) {
    setError(true);
    setLoading(false);
  }
};
