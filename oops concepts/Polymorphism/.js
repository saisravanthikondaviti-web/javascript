function calculateArea(shape, value1, value2) {
  if (shape === "circle") {
    console.log("Area of circle:", 3.14 * value1 * value1);
  } 
  else if (shape === "rectangle") {
    console.log("Area of rectangle:", value1 * value2);
  } 
  else if (shape === "square") {
    console.log("Area of square:", value1 * value1);
  }
}

// Polymorphism
calculateArea("circle", 5);
calculateArea("rectangle", 4, 6);
calculateArea("square", 3);
