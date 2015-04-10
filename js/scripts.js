function getTriangle(sideA, sideB, sideC) {
  // sides cannot be 0 and one side cannot be longer than the other
  // two combined
  if (sideA === 0 || sideB === 0 || sideC === 0 ||
      sideA + sideB < sideC || sideB + sideC < sideA ||
      sideA + sideC < sideB) {
    return "not a triangle";
  } else if (sideA === sideB && sideA === sideC) {
    return "equilateral";
  } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
    return "isosceles";
  }


}


jQuery(document).ready(function() {
  $("#dim1").focus();
  $("#triangle").submit(function(event) {

    $("#result").show();
    event.preventDefault();
  });
});
