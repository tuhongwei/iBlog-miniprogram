import request from "../../utils/request";
import { POSTS_URL } from "../../config/index";

Page({
  data: {
    articleList: []
  },
  // 事件处理函数
  bindArticleTap(e) {
    var path = e.currentTarget.dataset.path;
    wx.navigateTo({
      url: '../article/article?path=' + path
    });
  },
  onLoad() {
    wx.showLoading({
      title: '加载中',
    });
    request
      .get(POSTS_URL)
      .then(res => {
        console.log("发起get请求-res", res);
        this.setData({
          articleList: res.data
        });
      })
      .catch(err => {
        console.log("发起get请求-err", err);
      })
      .finally(() => {
        wx.hideLoading();
      });
  }
})
