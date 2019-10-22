var http = require('http')
var console = require('console')
var config = require('config')
module.exports.function = function deepSearch (isbn) {
  $li = "http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx?ttbkey=ttbjun0612272300001&itemIdType=ISBN13&output=js&ItemId=";
  var options = { 
    format: 'json'
  };
  // If type is "Formal", then thiconfig.get('remote.url')s makes a GET call to /shoes?type=Formal

  var obj = http.postUrl('https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbjun0612272300001&MaxResults=1&start=1&SearchTarget=Book&output=JS&Version=20131101&QueryType=title&cover=Big&Query=' + isbn ,options);
  var va = JSON.parse(obj);
  it = va['item'][0];
  return {
    title: it['title'],
    author: it['author'] + ".",
    isbn: it['isbn13'],
    rank: it['customerReviewRank'],
    category: it['categoryId'],
    description: it['description'] + ".",
    link: it['link'],
    price: it['priceSales'],
    cover: it['cover']

    
  };
  return {}
}
