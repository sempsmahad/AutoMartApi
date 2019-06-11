class Car {
  constructor() {
    this.cars = [];
  }

  getAllCars() {
    return this.cars.filter(car => car.status === 'available');
  }

  getCar(id) {
    return this.cars.find(item => item.id === id);
  }

  getAllRangeCars(max, min) {
    const cars = this.getAllCars();
    return cars.filter(car => car.price >= min && car.price <= max);
  }

  getAllAdminCars() {
    return this.cars;
  }

  addCar(car) {
    this.cars.push(car);
    return car;
  }

  getAllStateCars(state) {
    return this.cars.filter(car => car.state === state);
  }

  getAllBodyTypeCars(bodyType) {
    const cars = this.getAllCars();
    return cars.filter(car => car.body_type === bodyType);
  }

  markAsSold(id) {
    const car = this.getCar(id);
    car.status = 'sold';
    return this.getCar(id);
  }

  updatePrice(id, price) {
    const car = this.getCar(id);
    car.price = price;
    return this.getCar(id);
  }

  deleteCar(id) {
    const car = this.getCar(id);
    const temp = car;
    const index = this.cars.indexOf(car);
    delete this.cars[index];
    return temp;
  }
}
export default Car;
