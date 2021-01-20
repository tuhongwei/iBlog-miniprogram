import axios from "./axios/axios";
import { baseUrl } from "../config/index";
 
const resolveWrap = res => {
  return res.data;
};
const rejectWrap = res => {
  console.log("rejectWrap:", "这里可以统一处理reject状态");
  return res;
};

const validateStatus = res => {
  return /^2/.test(res.statusCode.toString());
};

const instance = axios.create({
  baseUrl,
  resolveWrap,
  rejectWrap,
  validateStatus
});

export default instance;