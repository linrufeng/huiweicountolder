// miniprogram/pages/ordertest/ordertest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    db:null,
    index:0,
    price:0,       
    itemlist:[1,2,3],
    goods:{
      array: ['火龙果', '榴莲', '凤梨'],
      objectArray: [
        {
          name: '火龙果',
          price: 10
        },
        {
          name: '榴莲',
          price: 5
        },
        {
          name: '凤梨',
          price: 15
        }
      ],
    },    
    //已选择
    choseGoods:[]
  },
  // 增加品种
  addGoods(){
    console.log(1)
    let choseGoods = this.data.choseGoods;
    choseGoods.push({
      name: '火龙果',
      num: 1,
      id: 'g' + Number(new Date())
    });
    this.setData({
      choseGoods: choseGoods
    })
  },
  //选择某个
  bindPickerChange(res){
    let index = res.detail.value;
   
    let price = this.data.price;
    price = price + this.data.objectArray[index].price;
    this.setData({
      index: res.detail.value,
      price: price
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.addGoods()
    
    const db = wx.cloud.database('todo');
    this.data.db = db;
  },
  upload(){
    let db = this.data.db;
    db.collection('todo').add({
      data: {
        name: '火龙果',
        num: 3
      },
      success:res =>{
        console.log(res)
      }
     
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data.db)
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