import 'reflect-metadata';
import * as Express from 'express';
import { Container } from 'inversify';
import { InversifyExpressServer, TYPE, interfaces } from 'inversify-express-utils';
import * as bodyParser from 'body-parser';
import { Model } from './model/model';
import { ExampleController } from './controller/controller';

export class Server {
  private app: Express.Application;
  private PORT: any = process.env.PORT || 3000;
  private server: InversifyExpressServer;
  private container: Container;
  constructor() {
    this.container = new Container();
    this.container.bind(TYPE.Controller).to(ExampleController);
    this.container.bind(Model.name).to(Model);
    this.server = new InversifyExpressServer(this.container);
    this.server.setConfig((app) => {
      app.use(bodyParser.urlencoded({extended: true}));
      app.use(bodyParser.json());
    })
    this.app = this.server.build();
    this.app.listen((this.PORT), () => {
      console.log(`listening ${this.PORT}`);
    })

  }
  public static bootstrap(): Server { return new Server(); }
}

Server.bootstrap();