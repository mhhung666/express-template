import CryptoJS from "crypto-js";

export default async function (length: number) {
  let uniqueCode = new Date().getTime() * 1000;

  let hash = CryptoJS.SHA512(uniqueCode.toString() + Math.random().toString());
  let stringCode = [...hash.toString(CryptoJS.enc.Hex)];

  return stringCode.slice(0, length).join("");
}
