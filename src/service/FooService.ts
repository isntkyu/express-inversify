import 'reflect-metadata';
import { injectable } from "inversify";

@injectable()
export class FooService {
  public value: string;
  constructor() {
    this.value = "hello";
  }

  async get() {}
  async create() {}
  async delete(id) {
    console.log(id);
  }
}