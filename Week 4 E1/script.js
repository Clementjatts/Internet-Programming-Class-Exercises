function print5() {
  alert(1);
  alert(2);
  alert(3);
  alert(4);
  alert(5);
}

// Call the function twice when the window loads
window.onload = function () {
  print5();
  print5();
};