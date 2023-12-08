  function animateMenu() {
    var line1 = document.querySelector(".line1");
    var line2 = document.querySelector(".line2");
    var open = document.querySelector("#page1 nav ul");
    if(line1.className == "line1" && line2.className == "line2"){
      line1.className = "line1 rotates";
      line2.className = "line2 rotate";
      open.style.right = "0%";
    }else{
      line1.className = "line1";
      line2.className = "line2";
      open.style.right = "-100%";
    }
  };