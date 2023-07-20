const er = () => {
   try {
      throw new Error("Somthing wrong!");
   } catch (error) {
      throw error;
   }
};

try {
   console.log(er());
} catch (error) {
   console.log("ERROR:", error.message);
}

class Car {
   // private state = { name: "", speed: "", power: "" };
   constructor(name, speed, power) {
      this.state = { name, speed, power };
   }

   getState() {
      return this.state;
   }

   changeSpee(speed) {
      this.state.speed = speed;
   }
}

class Ferari extends Car {
   constructor(name, speed, power, color) {
      super(name, speed, color);
      this.color = color;
   }

   getState() {
      return { ...this.state, color: this.color };
   }
}

const car = new Car("BMW", "240 km/p", "1400 hp");

const audi = new Car("Audi", "340 km/p", "2400 hp");

const f9 = new Ferari("Ferrari", "140 km/p", "400 hp", "Red");

console.log(f9.getState());

audi.changeSpee("500 km/p");

console.log(audi.getState());

console.log(car.getState());
