import db from './db';

class LogsService {
  async getAll() {
    const result = db.execQuery('SELECT * FROM lootlogs');
    return (result[0] && result[0].values) || [];
  }

  async getUnformatted(orderBy = 'date', order = 'DESC') {
    // date,player,item,response,votes,class,instance,boss,gear1,gear2,subType,equipLoc,note
    return db.execQuery(`SELECT date,player,item,response,class,instance,boss FROM lootlogs ORDER BY ${orderBy} ${order};`)[0];
  }
}

export default new LogsService();
