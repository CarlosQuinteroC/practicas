import { Router, Request, Response } from "express";
import IFragance from "../models/IFragance";
import fraganceService from "../services/fraganceService";

const fraganceController: Router = Router();

fraganceController.post("/", async (request: Request, response: Response) => {
    try {
        const fragance: IFragance = request.body;
        const serviceResult = await fraganceService.createFragance(fragance);
        response.send(serviceResult);
    } catch (error) {
        response.status(500).send({ status: "Ok", result: error });
    }
});

fraganceController.get("/", async (request: Request, response: Response) => {
    try {
        const serviceResult = await fraganceService.getFragances();
        response.send({ status: "Ok", result: serviceResult });
    } catch (error) {
        response.status(500).send({ status: "Ok", result: error });
    }
});

fraganceController.put("/:id", async (request: Request, response: Response) => {
    try {
        const fraganceId = request.params.id;
        const fragance: IFragance = request.body;
        const serviceResult = await fraganceService.editFragance(fraganceId,fragance);
        response.send(serviceResult);
    } catch (error) {
        response.status(500).send({ status: "Ok", result: error });
    }
});

fraganceController.delete("/:id", async (request: Request, response: Response) => {
    try {
        const fraganceId = request.params.id;
        const serviceResult = await fraganceService.deleteFragance(fraganceId);
        response.send(serviceResult);
    } catch (error) {
        response.status(500).send({ status: "Ok", result: error });
    }
});


export default fraganceController;