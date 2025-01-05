function inputValue(value) {
    var input = document.getElementById("input");
    input.value += value;
  }
  
  function result() {
    var input = document.getElementById("input");
    var ans = eval(input.value);
    console.log("ans", ans);
    input.value = ans;
  }
  
  function allClear() {
    var input = document.getElementById("input");
    input.value = "";
  }
  
  function deleteLast(){
    var input = document.getElementById("input");
    input.value= input.value.slice(0,-1);
}


// function inputValue (num){
//   var input = input.value.slice(input.value.lenght -1);
//   console.log(input);
// }
             
                // + , - , * , / ..... REPALCE METHOD

  // var str =  "5+5-";

  // var newInput = "10";
  //             //  str[str.length -1]; USED    take ye pata chale  k last me kiya hai 
  // var last = str[str.length -1];   
  
  
  // var arr = ["+", "-" ,"*", "/"];
  
  // if (arr.indexOf(last) !==   -1 && arr.indexOf( newInput ) !== -1 ){
  //      str = str.slice (0, -1)  + newInput;
  // }else{
  //     str += newInput;
  // }
  
  
  //     console.log(str);