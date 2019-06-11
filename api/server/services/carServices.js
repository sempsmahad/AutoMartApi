import database from '../src/models';

class CarService {
  static async getAllCars() {
    try {
      return await database.Book.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addCar(newBook) {
    try {
      return await database.Book.create(newBook);
    } catch (error) {
      throw error;
    }
  }

  static async updateCar(id, updateBook) {
    try {
      const bookToUpdate = await database.Book.findOne({
        where: { id: Number(id) }
      });

      if (bookToUpdate) {
        await database.Book.update(updateBook, { where: { id: Number(id) } });

        return updateBook;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getACar(id) {
    try {
      const theBook = await database.Book.findOne({
        where: { id: Number(id) }
      });

      return theBook;
    } catch (error) {
      throw error;
    }
  }

  static async deleteCar(id) {
    try {
      const bookToDelete = await database.Book.findOne({ where: { id: Number(id) } });

      if (bookToDelete) {
        const deletedBook = await database.Book.destroy({
          where: { id: Number(id) }
        });
        return deletedBook;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default CarService;
