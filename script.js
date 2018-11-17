let burger = document.getElementsByClassName("burger")[0];

burger.addEventListener("click", function() {
	burger.classList.toggle("burger-select");
  
  let nav = document.getElementsByTagName("nav")[0];
  nav.classList.toggle("menu__items");
});


