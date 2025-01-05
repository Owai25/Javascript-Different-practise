var editIcon = document.createElement("i");
  editIcon.className = "fa-solid btn fa-pen-to-square";
  editIcon.setAttribute("onclick", "editHandler(this)");

  function editHandler(ele) {
      console.log(
        "ele",
        (ele.parentNode.parentNode.firstChild.textContent = "hello world")
      );
  
    //   console.log(
    //     (ele.parentNode.parentNode.firstChild.textContent = "HELLO WORLD")
    //   );
  
    const editPrompt = prompt("Enter edit value");
    ele.parentNode.parentNode.firstChild.textContent = editPrompt;
  }