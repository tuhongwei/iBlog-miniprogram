// index.js
import axios from "../../utils/request/axios";
import { POSTS_URL } from "../../config/index";

Page({
  data: {
    isLoading: true,
    articalList: {}
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    axios
      .get(POSTS_URL)
      .then((res) => {
        console.log("发起get请求-res", res);
      })
      .catch((err) => {
        console.log("发起get请求-err", err);
      });
  }
})
