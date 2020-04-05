import initSqlJs from 'sql.js';
import databaseBytes from '../database.db';

const debug = process.env.NODE_ENV !== "production";

class DBService {
  async init() {
    const SQL = await initSqlJs({
      // Required to load the wasm binary asynchronously. Of course, you can host it wherever you want
      // You can omit locateFile completely when running in node
      locateFile: file => {
        return debug ? `/sql-wasm.wasm` : `/wow-loot-logs/sql-wasm.wasm`;
      }
    });

    this.db = new SQL.Database(new Uint8Array(databaseBytes));
  }

  runQuery(query) {
    this.db.run(query);
  }

  execQuery(query) {
    return this.db.exec(query);
  }

  export() {
    return this.db.export();
  }

  get initialized() {
    return !!this.db;
  }
}

export default new DBService();
