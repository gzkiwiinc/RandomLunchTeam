var members = ["ac","get","jingying","yunqing","wgh","xuliang","randy", "cash", "harry", "ali"];
var options = process.argv;
var group_count = options[2];

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

    // 数组乱序
    members = shuffle(members);
    groups = new Array();
    // 分组基数
    base_count = members.length / group_count;
    
    var index = 0;
    for(; index < group_count; index++) {
        start = index * base_count;
        end = start + base_count;
        groups[index] = members.slice(start, end);
    }

    console.log('');
    var group_num = 1;
    for( item in groups ) {
        console.log("食家", group_num, "组:");
        group_members = groups[item]
        for( x in group_members) {
            console.log("    ", group_members[x]);
        }
        group_num++;
    }

  }

function shuffle(array) {
    var m = array.length,
        t, i;
    // 如果还剩有元素…
    while (m) {
        // 随机选取一个元素…
        i = Math.floor(Math.random() * m--);
        // 与当前元素进行交换
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}
