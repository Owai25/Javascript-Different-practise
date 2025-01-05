


// var day = "mon"

// switch(day){
//     case "mon":
//        alert("1");
//     break;

//  case "tue":
//     alert(2);
//  default:
//     alert("default");

// }

var str =  "5+5-";

var newInput = "10";
            //  str[str.length -1];  ye pata chale  k last me kiya hai 
var last = str[str.length -1];   


var arr = ["+", "-" ,"*", "/"];

if (arr.indexOf(last) !==   -1 && arr.indexOf( newInput   ) === -1 ){
     str = str.slice (0, -1)  + newInput;
}else{
    str += newInput;
}


    console.log(str);









