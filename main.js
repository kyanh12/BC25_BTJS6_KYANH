var  count = 0;
var n = 0 ;
var content ="";
while ( count <10000 ){
    n++;
    count = count + n;
    content = "số nguyên dương nhỏ nhất là : " + n;
    document.getElementById("footerSo").innerHTML=content;
}



document.getElementById("btnTinh").onclick = function(){
   var x = document.getElementById("txtNumber1").value*1;
   var n = document.getElementById("txtNumber2").value*1;
    var tong = 0;
    var z = 1;
    for (var i = 1; i <= n ; i++ ){
        z = z * x;
        tong += z;
    }
    document.getElementById("footerTinh").innerHTML = tong;
}


document.getElementById("btnGiaiThua").onclick = function(){
    var n = document.getElementById("txtGiaiThua").value;
    var giaithua = 1 ;
    for (var i = 1 ; i <= n ; i++ ){
       giaithua *= i;
    }
    document.getElementById("footerGiaiThua").innerHTML = giaithua;
}



document.getElementById("btnDiv").onclick = function(){
    var n = document.getElementById("div1").style.display ="block";
    var n1 = document.getElementsByClassName("divs");
    for ( var i = 0; n1.length ; i++){
        if((i+1) % 2 == 0 ){
            n1[i].style.background = "red";
        }else {
            n1[i].style.background = "blue";
        }
    }
}