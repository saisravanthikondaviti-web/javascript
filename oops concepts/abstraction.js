class Shape {
  area() {
    throw new Error("area() must be implemented");
  }
}

class Circle extends Shape {
  area() {
    console.log("Area of circle:", 3.14 * 3 * 3);
  }
}

class Rectangle extends Shape {
  area() {
    console.log("Area of rectangle:", 4 * 5);
  }
}

let shapes = [new Circle(), new Rectangle()];

shapes.forEach(shape => shape.area());

//output
// Area of circle: 28.259999999999998
// Area of rectangle: 20