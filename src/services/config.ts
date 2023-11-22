import axios from "axios";

const BASE_URL = "https://api.airtable.com/v0/app4XdB26d9uT2xal";
const TOKEN =
  "patU4rza5pvUklktS.e75291949dbb9ecac3bae068477ddccf9c3b7ec5964cc430dca994108b8d230f";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
  },
});
