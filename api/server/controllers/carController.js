import Car from '../src/models/car';
import Util from '../utils/Utils';

const util = new Util();

class CarController {
  static async getAllCars(req, res) {
    try {
      const allCars = await Car.getAllCars();
      if (allCars.length > 0) {
        util.setSuccess(200, 'Cars retrieved', allCars);
      } else {
        util.setSuccess(200, 'No car found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async getAllStateCars(req, res) {
    try {
      const allStateCars = await Car.getAllStateCars();
      if (allStateCars.length > 0) {
        util.setSuccess(200, 'Cars retrieved', allStateCars);
      } else {
        util.setSuccess(200, 'No car found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async getAllRangeCars(req, res) {
    try {
      const maxPrice = req.params.max_price;
      const minPrice = req.params.min_price;
      const allCarsInRange = await Car.getAllRangeCars(maxPrice, minPrice);
      if (allCarsInRange.length > 0) {
        util.setSuccess(200, 'Cars retrieved', allCarsInRange);
      } else {
        util.setSuccess(200, 'No cars found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async getAllAdminCars(req, res) {
    try {
      const allAdminCars = await Car.getAllAdminCars();
      if (allAdminCars.length > 0) {
        util.setSuccess(200, 'Cars retrieved', allAdminCars);
      } else {
        util.setSuccess(200, 'No car found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async getAllBodyTypeCars(req, res) {
    try {
      const allCars = await Car.getAllBodyTypeCars();
      if (allCars.length > 0) {
        util.setSuccess(200, 'Cars retrieved', allCars);
      } else {
        util.setSuccess(200, 'No car found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addCar(req, res) {
    if (!req.body.title || !req.body.price || !req.body.description) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newCar = req.body;
    try {
      const createdCar = await Car.addCar(newCar);
      util.setSuccess(201, 'Car Added!', createdCar);
      return util.send(res);
    } catch (error) {
      util.setError(401, error.message);
      return util.send(res);
    }
  }

  static async markAsSold(req, res) {
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatedCar = await Car.markAsSold(id);
      if (!updatedCar) {
        util.setError(401, `Cannot find car with the id: ${id}`);
      } else {
        util.setSuccess(201, 'car status updated', updatedCar);
      }
      return util.send(res);
    } catch (error) {
      util.setError(401, error);
      return util.send(res);
    }
  }

  static async updatePrice(req, res) {
    const { id, price } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatedCar = await Car.updatePrice(id, price);
      if (!updatedCar) {
        util.setError(401, `Cannot find car with the id: ${id}`);
      } else {
        util.setSuccess(201, 'car status updated', updatedCar);
      }
      return util.send(res);
    } catch (error) {
      util.setError(401, error);
      return util.send(res);
    }
  }

  static async updateCar(req, res) {
    const alteredBook = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateBook = await Car.updateBook(id, alteredBook);
      if (!updateBook) {
        util.setError(404, `Cannot find book with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Book updated', updateBook);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getACar(req, res) {
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const theCar = await Car.getACar(id);
      if (!theCar) {
        util.setError(400, `Cannot find car with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found it', theCar);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async deleteCar(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const deletedCar = await Car.deleteCar(id);

      if (deletedCar) {
        util.setSuccess(200, 'Car deleted');
      } else {
        util.setError(404, `Car with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default CarController;
