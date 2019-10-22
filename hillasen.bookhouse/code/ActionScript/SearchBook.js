var http = require('http')
var console = require('console')
var config = require('config')
module.exports.function = function SearchBook (author, category, title, $vivContext) {
  var options = { 
    format: 'json',
    cacheTime: 0
  };
  // If type is "Formal", then thiconfig.get('remote.url')s makes a GET call to /shoes?type=Formal
  var ti = title.replace(/ /gi, "");
  var obj = http.postUrl('https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbjun0612272300001&MaxResults=1&start=1&SearchTarget=Book&output=JS&Version=20131101&QueryType=title&cover=Big&Query=' + ti ,options);
  console.log(obj)
  var va = JSON.parse(obj);
  console.log(va)
  console.log($vivContext.userId);
  
  
  var re = [];
  it = va['item'];
  console.log(it)
  for(var k=0; k<it.length;k++){
    var i = it[k];
    var ad = {
      "title" : i['title'],
      "author" : i['author'],
      "isbn" : i['isbn13'],
      "rank" : i['customerReviewRank'],
      "category" : i['categoryId'],
      "description" : i['description'],
      "link" : i['link'],
      "price" : i['priceSales'],
      "cover" : i['cover']
    }
    console.log(ad)
    console.log(i['title'])
    re.push(ad);
  }
  return re;
}
