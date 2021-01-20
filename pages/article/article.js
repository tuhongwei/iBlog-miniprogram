import request from "../../utils/request";
import { baseUrl } from "../../config/index";

const app = getApp();

Page({
  data: {
    article: {}
  },
  onLoad(options) {
    var path = options.path;
    wx.showLoading({
      title: '加载中',
    });
    request
      .get(path)
      .then(res => {
        let content = res.content;
        let result = app.towxml(content, 'html', {
          // 相对资源的base路径
          base: baseUrl,
          theme: 'light', // 主题，默认`light`
        });
        this.setData({
          article: result
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
