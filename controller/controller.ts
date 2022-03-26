import { inject, injectable } from "inversify";
import { controller, httpGet } from "inversify-express-utils";
import { Model } from "../model/model";
import { Request, Response, NextFunction, Router } from "express";

@injectable()
@controller('/hello')
export class ExampleController {
  constructor(@inject(Model.name) private model: Model) {

  }

  @httpGet('/world')
  public helloWorld(req: Request, res: Response, next: NextFunction) {
    res.send(this.model.value + 'world')
  }
}