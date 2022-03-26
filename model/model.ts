import { injectable } from "inversify";

@injectable()
export class Model {
  public value: string;
  constructor() {
    this.value = "hello";
  }
}