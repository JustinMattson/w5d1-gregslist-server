import express from "express";
import BaseController from "../utils/BaseController";
import { housesService } from "../services/HousesService";

export class HousesController extends BaseController {
  constructor() {
    super("api/houses");
    this.router
      .get("", this.getAll) // localhost:3000/api/values; GET
      .get("/:id", this.getById) // localhost:3000/api/values/k23hj4; GET
      .post("", this.create) // localhost:3000/api/values; POST
      .put("/:id", this.edit) // localhost:3000/api/values/lk1j32h4; PUT
      .delete("/:id", this.delete); // localhost:3000/api/values/2k3hj5; DELETE
  }

  async getAll(_, res, next) {
    try {
      let data = await housesService.find();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await housesService.findById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await housesService.create(req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await housesService.edit(req.params.id, req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      let data = await housesService.delete(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
