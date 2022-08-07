function myFunction() {
    var x = document.getElementById("sidebar-show");
    var y = document.getElementById("hi");
    if (x.style.visibility === "visible") {
        console.log("ds")
        y.style.marginRight = "-20rem";
        x.style.visibility = "collapse";

        x.style.width = "0%"
    } else {
       
        y.style.marginRight = "0rem";

            x.style.visibility = "visible";


        x.style.width = "16rem"
      console.log("vfvfds")

    }
  }