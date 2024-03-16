
    sum = 0;
    t = 1;
    w = 1;
    function init()
    {
        printobj("small", undefined)
        printobj("medium", undefined)
    }
    function disc() {
        x = document.getElementById("discountTB").value;
        y = document.getElementById("carType").value;
        printobj(y, x);
        }
    function printobj(Size,count) {
        let str = "";
    for (var k in companies[Size]) {
        for (var j in companies[Size][k]) {
             if (count != undefined) {
                 t = 1 - count / 100; }
                  pri = companies[Size][k][j].price * t;
                  str +=`<div id="${pri}" onclick="sumi(this.id)">
                  <h3>${k}</h3>
                  <h3>${companies[Size][k][j].model}</h3>
                  <h3>${pri}</h3>
                  </div>`  }
               }
          let namediv = Size + "Cars";
          document.getElementById(namediv).innerHTML = str;
       }
    function sumi(x)
    {
        sum += parseFloat(x);
        if (x == 1000) {sum=0 }
        document.getElementById("calc").innerHTML = sum;
    }

