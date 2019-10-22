module.exports.function = function showMyBook ($vivContext) {
   var options = { 
    cacheTime: 0,
    format: 'text'
  };
  var http = require('http')
  var console = require('console')
  var config = require('config')
  var obj = http.getUrl('http://hillasen.com/bookhouse/bookhouse_found.php?cmd=show&token=' + $vivContext.userId ,options);
  
  var va = JSON.parse(obj);
  var it = va['my'];
  if(it.length == 0)
  {
    return 0;
  }
  var k = "";
  var wi = [];
  console.log(it.length)
  for(var i=0; i<it.length;i++){
    var o = it[i];
    var obj = http.postUrl('https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbjun0612272300001&MaxResults=1&start=1&SearchTarget=Book&output=JS&Version=20131101&QueryType=title&cover=Big&Query=' + o['isbn'] ,options);
    var va = JSON.parse(obj);
    var t = va['item'][0];
    var ao = {
    title: t['title'],
    author: t['author'] + ".",
    isbn: t['isbn13'],
    rank: t['customerReviewRank'],
    category: t['categoryId'],
    description: t['description'] + ".",
    link: t['link'],
    price: t['priceSales'],
    cover: t['cover']
    }
  
    wi.push(ao);
  }
  
  return wi;
  
}
