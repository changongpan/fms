//获取日期、时间、周数

export default {
  //获取当前日期
  getDate(){
    let yy = new Date().getFullYear();
    let mm = new Date().getMonth() + 1;
    let dd = new Date().getDate();
    return yy + '-' + mm + '-' + dd
  },
  //获取当前时间
  getTime() {
    let hh = new Date().getHours();
    let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
    let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
    return hh + ':' + mf + ':' + ss;
  },
  //获取周几
  getWeek() {
    switch (new Date().getDay()) {
      case 1:return "星期一"
      case 2:return "星期二"
      case 3:return "星期三"
      case 4:return "星期四"
      case 5:return "星期五"
      case 6:return "星期六"
      default:return "星期日"
    }
  },
  //获取当前周数
  getWeekNumber(){
    //本年第一天的时间戳
    let firstDay = new Date(new Date().getFullYear(), 0, 1, 0, 0, 0)
    //本年已度过的天数
    let nowDays = Math.floor(((new Date().valueOf())-firstDay.valueOf())/(60*60*24*1000))
    //当前周数
    return Math.ceil((nowDays+firstDay.getDay())/7)
  },
  //获取当前日期时间完整显示
  getFullDate(){
    return this.getDate()+' 第'+this.getWeekNumber()+'周 '+this.getWeek()+' '+this.getTime()
  }
}
