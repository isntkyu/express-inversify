import 'reflect-metadata';
import { injectable } from "inversify";
import * as mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});

connection.query(
  'show databases;',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

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