function getTriangle(sideA, sideB, sideC) {
  if (sideA === 0 || sideB === 0 || sideC === 0) {
    return "not a triangle";
  }
}


jQuery(document).ready(function() {
  $("#dim1").focus();
  $("#triangle").submit(function(event) {

    $("#result").show();
    event.preventDefault();
  });
});
