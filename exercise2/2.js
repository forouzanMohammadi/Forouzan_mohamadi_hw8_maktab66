// class Circle {
// 	constructor(radius){
// 		this.radius = radius;
// 		}
// 	getArea(){
// 		return Math.PI*Math.pow(this.radius, 2)
// 	}
// 	getPerimeter(){
// 		return 2*Math.PI*this.radius
// 	}
// }



// let theCircle = new Circle(1);
// console.log(theCircle.getArea());
// console.log(theCircle.getPerimeter());

function Circle (radius){
    this.radius = radius;
    this.area = function(){
		return Math.PI*Math.pow(this.radius, 2)
	}
    this.perimeter = function(){
        {
            return 2*Math.PI*this.radius
        }
    }
}
let theCircle = new Circle(1);
console.log(theCircle.area());
console.log(theCircle.perimeter());