//app.js
App({
  onLaunch: function () {

    //存储手机号
    wx.getSystemInfo({
      success:(res) =>{
        this.globalData.systemInfo = res
        if (res.model.indexOf('iPhone X') >= 0){
          this.globalData.isIphoneX = true
        }

        //判断当前环境 填写baseUrl
        this.globalData.bastUrl = res.platform == 'devtools' ? 'https://api.ontheroadstore.com/' : 'https://api.ontheroadstore.com/';
      },
    });
  },
  onShow:function(){},
  onHide:function(){},
  onError:function(){},
  login:function(callback){

  },
  globalData: {
    bastUrl: null,
    isIphoneX: false,
    userInfo: null,
    systemInfo: null,
    authorizationStatus: false
  }
})