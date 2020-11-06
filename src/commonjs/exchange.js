setInterval(exchange, 1000);
function exchange() {
  $.ajax({
    type: "get",
    url: "https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?query=1%E6%B2%99%E7%89%B9%E9%87%8C%E4%BA%9A%E5%B0%94%E7%AD%89%E4%BA%8E%E5%A4%9A%E5%B0%91%E4%BA%BA%E6%B0%91%E5%B8%81&co=&resource_id=5293&t=1586223308933&cardId=5293&ie=utf8&oe=gbk&cb=op_aladdin_callback&format=json&tn=baidu&alr=1&cb=jQuery110203991885021937811_1586223277956&_=1586223277958",/*url写异域的请求地址*/
    dataType: "jsonp",/*加上datatype*/
    jsonpCallback: "jQuery110203991885021937811_1586223277956",/*设置一个回调函数，名字随便取，和下面的函数里的名字相同，还需要跟url中cb名字相同*/
    success: function () {
    }
  })
}
function jQuery110203991885021937811_1586223277956(data) {
  var title = data.Result[0].DisplayData.resultData.tplData.content1;
  $exchange.html('当前汇率：' + title)
}
