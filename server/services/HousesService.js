import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class HousesService {
  async find(query = {}) {
    let data = await dbContext.Houses.find(query);
    return data;
  }

  async findById(id) {
    let data = await dbContext.Houses.findById(id);
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
  async create(rawData) {
    return await dbContext.Houses.create(rawData);
  }

  async edit(id, updatedData) {
    let data = await dbContext.Houses.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }

  async delete(id) {
    let data = await dbContext.Houses.findByIdAndDelete(id);
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return "successfully deleted";
  }
}

export const housesService = new HousesService();
