let button=document.getElementById("start-button");
let car=document.getElementById("car");
let map=document.getElementById("map-container");

function move_car(){
    button.style.display="none";
    car.style.left="110%";

    setTimeout(() => {
      map.classList.add("show");
      map_h2.classList.add("show")
      menu.classList.add("show")
      menu.scrollIntoView( {behavior: "smooth"});
    }, 4000);
    }
button.addEventListener("click", move_car);

