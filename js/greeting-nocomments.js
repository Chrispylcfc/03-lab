(function(){
  // Variables for returning name input.
  let myName = document.getElementById("my-name");
  let headerName = document.getElementById("header-name");
  let userName = document.getElementById("user-name");
  let getName = document.getElementById("get-name");
  // Variables for changing css on header tag.
  let header = document.getElementsByTagName("header");


  function PerformGreeting() {
    myName.innerHTML = userName.value;
    headerName.innerHTML = userName.value;
    event.preventDefault();
    return false;
  }

  function AddHeaderStyling() {
    header[0].classList.add("header");
    // setTimeout(function() {
    //   header[0].classList.remove("header");
    // }, 500);
  }

  function RemoveHeaderStyling() {
    header[0].classList.remove("header");
  }

  getName.addEventListener("submit", PerformGreeting);
  header[0].addEventListener("mouseover", AddHeaderStyling);
  header[0].addEventListener("mouseout", RemoveHeaderStyling);

  // hoverButton.addEventListener("mouseover", function(e) {
  //   header.classList.add("header");
  // });

}());
