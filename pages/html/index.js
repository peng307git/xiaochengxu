// pages/html/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      _num1: "bc_ff",
      _num2: "bc_ff",
      _num3: "bc_ff",
      _num4: "bc_ff",
      mony:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
//   点击事件
    click1: function (e) {
        console.log(this)
        var num = this.data._num1 == "bc_ff" ? "bc_red" : "bc_ff";

        this.setData({
            _num1:num,
            _num2: "bc_ff",
            _num3: "bc_ff",
            _num4: "bc_ff",
            mony:8
        })
    },
    click2: function (e) {
        console.log(this)
        var num = this.data._num2 == "bc_ff" ? "bc_red" : "bc_ff";

        this.setData({
            _num1: "bc_ff",
            _num2: num,
            _num3: "bc_ff",
            _num4: "bc_ff",
            mony:18
        })
    },
    click3: function (e) {
        console.log(this)
        var num = this.data._num3 == "bc_ff" ? "bc_red" : "bc_ff";

        this.setData({
            _num1: "bc_ff",
            _num2: "bc_ff",
            _num3: num,
            _num4: "bc_ff",
            mony:28
        })
    },
    click4: function (e) {
        console.log(this)
        var num = this.data._num4 == "bc_ff" ? "bc_red" : "bc_ff";

        this.setData({
            _num1: "bc_ff",
            _num2: "bc_ff",
            _num3: "bc_ff",
            _num4: num,
            mony:198
        })
    },
    btnmony:function(){
        wx.requestPayment({
            'timeStamp': '',
            'nonceStr': '',
            'package': '',
            'signType': 'MD5',
            'paySign': '',
            'success': function (res) {
                console.log("成功")
            },
            'fail': function (res) {
                console.log("用户不干了。。。")
            }
        })
    },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})