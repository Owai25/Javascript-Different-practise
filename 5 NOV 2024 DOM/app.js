function parahandler(btnType) {
    console.log("btnType", btnType);
}
var heading = document.getElementById("heading");
console.log("parahandler()" , heading.className);
heading.className += " bigText";
  console.log(heading.classList);

  heading.classList.remove("smallText")
    heading.classList.add("bigText");
  heading.classList.replace("smallText" , "bigText")

  if(btnType == "big"){
        heading.classList.replace("smallText", "bigText");
        heading.classList.remove("smallText")
        heading.classList.add("bigText")
    }else{
        heading.classList.add("smallText")
        heading.classList.remove("bigText")
    }
    
function fontSizeCounter(type) {
    var counter = textNumber.innerHTML;
    if (type == "minus") {
      // textNumber.innerHTML -= 1
      textNumber.innerHTML = --counter;
    } else {
      textNumber.innerHTML = ++counter;
    }
  
    para.style.fontSize = `${counter}px`;
  }

  function toggleHandler() {
    var heading = document.getElementById("heading");
    // console.log("heading"  ,heading.classList.contains("smallText"))
    var smallTxtContain = heading.classList.contains("smallText");
    console.log(smallTxtContain, "smallTxtContain");
  
    if (smallTxtContain) {
      heading.classList.replace("smallText", "bigText");
    } else {
      heading.classList.replace("bigText", "smallText");
    }
  }