module.exports.function = function recommandBook ($vivContext) {
   var options = { 
    format: 'text',
    cacheTime: 0
  };
  var http = require('http')
  var console = require('console')
  var config = require('config')
  var obj = http.getUrl('http://hillasen.com/bookhouse/bookhouse_found.php?cmd=show&token=' + $vivContext.userId ,options);
  var va = JSON.parse(obj);
  it = va['my'];
  if(it.length == 0)
  {
    return 0;
  }
  var k = "";
  for(var i=0; i<it.length;i++){
    var o = it[i];
    k = k + o['isbn'] + ";";
  }
  console.log(k)
  var lin = "http://data4library.kr/api/recommandList?authKey=4a3bf05424aeb37e894a696dfe6e91bdaea4b506ca5366b8346de6396e54dacb&format=json&isbn13=";
  
  var lo = http.postUrl(lin + k ,options);
  var la = JSON.parse(lo);
  
  var j_1 = la['response'];
  var j_p = j_1['resultNum'];
  console.log(j_p)
  if(j_p == 0)
  {
    return 0;
  }
  var j_3 = j_1['docs'];
  var title = [];
  var isbn = [];
  var author = [];
  var rank = [];
  var category = [];
  var description = [];
  var link = [];
  var price = [];
  var cover = [];
  var wi = [];
  for(var j = 0 ; j < j_3.length; j++)
  {
    var q = j_3[j];
    var qq = q['book'];
    var pp = [];
    var po = {
      "title" : qq['bookname'],
      "author" : qq['authors'],
      "isbn" : qq['isbn13'],
      "cover" : qq['bookImageURL']
    }
    wi.push(po);
  

    /*title.push(qq['bookname']);
    author.push(qq['authors']);
    isbn.push(qq['isbn13']);
    rank.push(qq['no']);
    category.push(qq['no']);
    description.push(qq['no']);
    link.push(qq['no']);
    price.push(qq['no']);
    cover.push(qq['no']);
    */
  }
  return wi;
}
