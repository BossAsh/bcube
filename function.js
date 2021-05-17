<script>
window.onscroll = function() {myFunction()};

var mymenu = document.getElementById("mymenu");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    mymenu.classList.add("sticky");
  } else {
    mymenu.classList.remove("sticky");
  }
}
</script>