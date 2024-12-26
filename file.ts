interface Vehicle {
    make: string
    modal: string
    year: number
    start(): void
}
 class Car implements Vehicle {
    make: string
    modal: string
    year: number
 

 constructor (make:string,modal:string,year:number){
    this.make= make
    this.modal= modal
    this.year=year
 }
   start(): void {
    console.log(`${this.make}engine started`)
   }
}
const Ford:Car = new Car ("Ford", "Mustang", 2021)
 Ford.start()