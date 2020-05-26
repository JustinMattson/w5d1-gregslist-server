import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class JobsService {
  async find(query = {}) {
    let data = await dbContext.Jobs.find(query);
    return data;
  }

  async findById(id) {
    let data = await dbContext.Jobs.findById(id);
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
  async create(rawData) {
    return await dbContext.Jobs.create(rawData);
  }

  async edit(id, updatedData) {
    let data = await dbContext.Jobs.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }

  async delete(id) {
    let data = await dbContext.Jobs.findByIdAndDelete(id);
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return "successfully deleted";
  }
}

export const jobsService = new JobsService();
