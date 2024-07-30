const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE users (id TEXT PRIMARY KEY, balance INTEGER, rank TEXT)");
});

module.exports = db;

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, balance INTEGER, rank TEXT, role TEXT)");
    db.run("INSERT OR IGNORE INTO users (id, balance, rank, role) VALUES ('+50581261007@c.us', 10000, 'Rey', 'Rey')");
});
