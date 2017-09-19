// pages/demo1/one1.js
var app = getApp();
Page({
  data:{
    userInfo:{},
    imageshow:true,
    btnshow:false,
    valueInput:"",
    isnumber:100,
    message:[]
  },
   
  
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    });
    //当前页面标题改变
    wx.setNavigationBarTitle({
      title: '房卡密聊'
    });
  },
  addfocus: function(){
    // 获取焦点触发
    this.setData({
      imageshow:false,
      btnshow:true
    })
  },
  blur: function (e){
    //失去焦点时触发
    let datar = this.data;
    if( e.detail.value == "" ){
      this.setData({
        imageshow:true,
        btnshow:false
      })
    }else{
      this.setData({
        valueInput:e.detail.value
      });
      console.log(datar.valueInput+"blur")
    }
  },
  formSubmit:function(e){
      let datar = this.data;
      let addmessage = datar.message;
      let addValue = datar.valueInput;
      addmessage.push({
        text2:addValue
      });
      this.setData({
          imageshow:true,
          btnshow:false
        })
      this.setData({
          message:addmessage,
          valueInput:""
      });
      this.setData({
        isnumber:10000
      });
  },
 diaoqi:function(e){
      let datar = this.data;
      let addmessage = datar.message;
      var _self = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        addmessage.push({
          imgList:tempFilePaths
        });
        _self.setData({
            message:addmessage,
            valueInput:""
        });
        _self.setData({
          isnumber:10000
        });
      }
    });
    console.log(addmessage)
 },
 play:function(e){
   var _self = this;
      let datar = this.data;
      let addmessage = datar.message;
      wx.startRecord({
        success: function(res) {
          var tempFilePath = res.tempFilePath 
          addmessage.push({
            myAudio:tempFilePath
         });
          _self.setData({
            message:addmessage
          });
          _self.setData({
              isnumber:10000
          });
        },
        fail: function(res) {
           //录音失败
        }
      })
      setTimeout(function() {
        //结束录音  
        wx.stopRecord()
      }, 10000)
 },
 stop: function(e){
      wx.stopRecord()
 },
 playVoice:function(){
    //播放声音文件
    wx.playVoice({
      //filePath: this.data.message.myAudio
    })
 },
 onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  onShareAppMessage: function () {
    return {
      title: '房卡兔',
      path: '/pages/chat/messages?id=123'
    }
  }
})