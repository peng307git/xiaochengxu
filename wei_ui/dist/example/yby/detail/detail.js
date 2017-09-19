Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,

    tabs: ["信息", "技能", "动态"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0
  },

  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  pay:function(){
    wx.navigateTo({
      url: '../pay/pay'
    })
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  startRecord: function(e){wx.startRecord({
      success: function (res) {
        var tempFilePath = res.tempFilePath;
        wx.uploadFile({
          url: 'http://example.weixin.qq.com/upload', //上传录音
          filePath: tempFilePath,
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: function (res) {
            var data = res.data
            //do something
          }
        })
      },
      fail: function (res) {
        //录音失败
      }
    })
  },
  stopRecord:function(e){
     wx.stopRecord();
  },
  playIntroduceVoic:function(e){
      wx.downloadFile({
      url: 'http://example.com/audio/123', //仅为示例，并非真实的资源
      success: function (res) {
        wx.playVoice({
          filePath: res.tempFilePath
        })
      }
    })
  }
})