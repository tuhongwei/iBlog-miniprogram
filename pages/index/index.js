import request from "../../utils/request";
import { POSTS_PAGE_URL } from "../../config/index";

const postInfo = {
  curPage: 1
};

Page({
  data: {
    articleList: [],
    height: 0,
    refreshLoading: false,
    isNoMore: false
  },
  onLoad() {
    // 初始化 高度   
    wx.getSystemInfo({
      success: res => {
        this.setData({
          height: res.windowHeight
        });
        console.log(res)
      }
    });
    this.getPostData(1);
  },
  getPostData (page, type) {
    wx.showLoading({
      title: '加载中',
    });
    request
      .get(POSTS_PAGE_URL + page + '.json')
      .then(res => {
        console.log("发起get请求-res", res);
        if (page === 1) {
          postInfo.total = res.pageCount;
          this.setData({
            articleList: res.data
          });
          if (type === 'refresh') {
            this.setData({
              refreshLoading: false
            });
          }
        } else {
          let articleList = this.data.articleList.concat(res.data);
          this.setData({
            articleList
          });
        }
      })
      .catch(err => {
        console.log("发起get请求-err", err);
      })
      .finally(() => {
        wx.hideLoading();
      });
  },
  // 事件处理函数
  bindArticleTap(e) {
    var path = e.currentTarget.dataset.path;
    wx.navigateTo({
      url: '../article/article?path=' + encodeURIComponent(path)
    });
  },
  lower () {
    if (postInfo.curPage < postInfo.total) {
      postInfo.curPage++;
      this.getPostData(postInfo.curPage);
    } else {
      this.setData({
        isNoMore: true
      });
    }
  },
  bindRefresherRefresh () {
    this.setData({
      refreshLoading: true
    });
    postInfo.curPage = 1;
    this.getPostData(1, 'refresh');
  }
})
