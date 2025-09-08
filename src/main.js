const { loadUsers, saveUsers } = require('./storage');
const { hashPassword, verifyPassword } = require('./auth');
const { filterUsers, mapUsernames } = require('./utils');
const readline = require('readline');


// Closure: makeUserAdder captura saveFn
const makeUserAdder = (saveFn) => (users, username, email, password, role = 'user') => {
const hashed = hashPassword(password);
const user = {
id: users.length + 1,
username,
email,
password: hashed,
role,
createdAt: new Date().toISOString(),
active: true
};
const newUsers = [...users, user]; // evita mutação direta
const ok = saveFn(newUsers);
return ok ? newUsers : users;
};


const authenticate = (users, username, password) => {
const user = users.find(u => u.username === username);
if (!user) return false;
return verifyPassword(password, user.password);
};


const rl = readline.createInterface({ input: process.stdin, output: process.stdout });


const question = (q) => new Promise(resolve => rl.question(q, ans => resolve(ans.trim())));


const cli = async () => {
let users = loadUsers();
const addUser = makeUserAdder(saveUsers);


while (true) {
console.log(`
1) Listar usuários
2) Cadastrar usuário
3) Autenticar
4) Listar adminitradores
5) Mostrar nomes de usuários
0) Sair`);
const choice = await question('Escolha uma opção acima: ');


if (choice === '1') {
users.forEach(u => console.log(`${u.id}: ${u.username} (${u.email}) - ${u.role}`));
} else if (choice === '2') {
const username = await question('username: ');
const email = await question('email: ');
const password = await question('password: ');
const role = await question("role (default 'user'): ") || 'user';
users = addUser(users, username, email, password, role);
console.log('Usuário adicionado.');
} else if (choice === '3') {
const username = await question('username: ');
const password = await question('password: ');
const ok = authenticate(users, username, password);
console.log(ok ? 'Autenticado' : 'Falha na autenticação');
} else if (choice === '4') {
  const admins = filterUsers(u => u.role === 'admin', users);
  console.log(`${admins.length} admin(s)`);
  admins.forEach(a => console.log(a.username));
} else if (choice === '5') {
  console.log(mapUsernames(users));
} else if (choice === '0') {
  rl.close();
  process.exit(0);
} else {
  console.log('Opção inválida.');
}
}
};

if (require.main === module) {
  cli();
}

module.exports = { makeUserAdder, authenticate };
