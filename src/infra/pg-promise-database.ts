import pgp from 'pg-promise';
import Database from './database/database';

export default class PgPromiseDatabase implements Database {
  private pgp: any;
  static instance: PgPromiseDatabase;

  constructor() {
    const user = 'postgres';
    const password = 'docker';
    const host = 'localhost';
    const port = 5432;
    const database = 'app';
    const dbURL = `postgres://${user}:${password}@${host}:${port}/${database}`;
    this.pgp = pgp()(dbURL);
  }

  static getInstance() {
    if (!PgPromiseDatabase.instance) {
      PgPromiseDatabase.instance = new PgPromiseDatabase();
    }
    return PgPromiseDatabase.instance;
  }

  many(query: string, parameters: any) {
    return this.pgp.query(query, parameters);
  }
  one(query: string, parameters: any) {
    return this.pgp.one(query, parameters);
  }
  none(query: string, parameters: any): void {
    return this.pgp.none(query, parameters);
  }
}
