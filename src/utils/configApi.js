import md5 from "md5";

const ts = Date.now();
const hash = md5(
  `${ts}${import.meta.env.VITE_PRIVATE_KEY}${import.meta.env.VITE_PUBLIC_KEY}`
);

const apikey = import.meta.env.VITE_PUBLIC_KEY;

const apiParams = {
  ts,
  apikey,
  hash,
  baseURL: "https://gateway.marvel.com",
};
export default apiParams;
