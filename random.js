var members = ["cash","harry","ac","get","jingying","yunqing","wgh","xuliang","randy"];
var count = 0;
var countTime = 10 * 1000;
function rd(n,m){
    var c = m-n+1;  
    return Math.floor(Math.random() * c + n);
}

var display = setInterval( function (){
  var index = rd(0,members.length-1);
  console.log( '你会跟TA：' + members[index] + ' 一起吃饭？？' );
  countTime = countTime - 200;
  var checkPoint = countTime;
  if( (checkPoint % 1000) == 0 ){
    console.log( '\n 还有' + (countTime /1000)  + '秒 \n' );
  }
}, 200);

setTimeout( function (){
  display = clearInterval(display)
  gogogo();
}, countTime );

///实际
function gogogo(){

  do
  {
    var index = rd(0,members.length-1);

    switch(count)
    {
      case 0:
        console.log( "食家一组：")
        break;
      case 2:
        console.log( "食家二组：")
        break;
      case 4:
        console.log( "食家三组：")
        break;
      case 6:
        console.log( "食家四组：")
        break;
    }

    console.log( '    ' + members[index] );

    members.splice(index, 1);

    count++;

  }
  while (members.length > 0);

}
