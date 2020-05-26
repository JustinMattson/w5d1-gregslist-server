import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CarsService {
    async find(query = {}) {
        let data = await dbContext.Cars.find(query)
        return data;
    }

    async findById(id) {
        let data = await dbContext.Cars.findById(id);
        if (!data) {
            throw new BadRequest("Invalid Id");
        }
        return data;
    }
    async create(rawData) {
        return await dbContext.Cars.create(rawData);
    }

    async edit(id, updatedData) {
        let data = await dbContext.Cars.findByIdAndUpdate(id, updatedData, { new: true })
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return data
    }

    async delete(id) {
        let data = await dbContext.Cars.findByIdAndDelete(id)
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return "successfully deleted"
    }
}

export const carsService = new CarsService();