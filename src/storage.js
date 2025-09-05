const fs = require('fs');
const path = require('path');


const DATA_PATH = path.resolve(__dirname, '..', 'data', 'users.json');


const ensureDataFile = () => {
const dir = path.dirname(DATA_PATH);
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
if (!fs.existsSync(DATA_PATH)) fs.writeFileSync(DATA_PATH, '[]', 'utf8');
};


const loadUsers = () => {
try {
ensureDataFile();
const raw = fs.readFileSync(DATA_PATH, 'utf8');
return JSON.parse(raw);
} catch (err) {
console.error('Erro ao carregar usuários:', err.message);
return [];
}
};


const saveUsers = (users) => {
try {
ensureDataFile();
fs.writeFileSync(DATA_PATH, JSON.stringify(users, null, 2), 'utf8');
return true;
} catch (err) {
console.error('Erro ao salvar usuários:', err.message);
return false;
}
};


module.exports = { loadUsers, saveUsers };