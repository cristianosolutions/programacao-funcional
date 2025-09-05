// Função de alta ordem: recebe predicate e lista
const filterUsers = (predicate, users) => users.filter(predicate);


// map de usernames (equivalente a list comprehension)
const mapUsernames = (users) => users.map(u => u.username);


module.exports = { filterUsers, mapUsernames };