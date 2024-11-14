{
class Car{
    make:String;
    model:String;
    year:Number;
    constructor(make:string, model:string,year:Number){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarAge():number {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    } 
}

const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());

}