var scene = wx.getLaunchOptionsSync();
console.log(scene)

Page({
  data: {
    scene
  },
  goMyBlog (e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.clipboardText,
      success: () => {
        wx.showToast({
          title: '博客链接已复制',
          duration: 1000,
        });
      }
    });
  },
  goMyOfficialAccount (e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.clipboardText,
      success: () => {
        wx.showToast({
          title: '公众号名已复制',
          duration: 1000,
        });
      }
    });
  }
})