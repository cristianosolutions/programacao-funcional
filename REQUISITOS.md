# Projeto: Sistema de Gerenciamento de Usuários (Programação Funcional em JavaScript)

Este projeto implementa um **sistema de gerenciamento de usuários** em **JavaScript**, explorando conceitos de **programação funcional**.  
O sistema roda em linha de comando (CLI) e permite cadastrar, listar, autenticar e filtrar usuários.  

---

## 🎯 Objetivo
Avaliar a aplicação de **Programação Funcional** no desenvolvimento de um pequeno projeto em **JavaScript**, utilizando **Node.js** e explorando:
- Funções de alta ordem  
- Closures  
- Lambdas (funções anônimas)  
- Operações de mapeamento e filtragem (list comprehension)

---

## 📝 Requisitos

### ✅ Requisitos Funcionais
1. **Cadastrar usuários** no sistema.  
   - Implementado em: `makeUserAdder` (`src/main.js`)  
   - O usuário é salvo em `users.json`.  

2. **Autenticar usuários** com login e senha.  
   - Implementado em: `authenticate` (`src/main.js`)  
   - Verificação via `verifyPassword` (`src/auth.js`).  

3. **Listar usuários cadastrados**.  
   - Implementado no menu CLI (`src/main.js`, opção `1`).  

4. **Filtrar administradores** do sistema.  
   - Implementado com `filterUsers` e função **lambda** (`src/utils.js`).  

5. **Imprimir somente os nomes de usuário**.  
   - Implementado com `mapUsernames` (`src/utils.js`).  

6. **Armazenar credenciais com segurança**.  
   - Senhas são convertidas para **hash** com SHA-256.  
   - Implementado em `hashPassword` e `verifyPassword` (`src/auth.js`).  

---

### ⚙️ Requisitos Não Funcionais
1. **Persistência em arquivo JSON** para manter dados salvos.  
   - Implementado em `loadUsers` e `saveUsers` (`src/storage.js`).  

2. **Interface simples em CLI** para interação.  
   - Implementado com `readline` (`src/main.js`).  

3. **Imutabilidade** no cadastro de usuários.  
   - `makeUserAdder` usa `[...users, user]` em vez de mutar o array.  

4. **Organização modular**.  
   - Código separado em: `auth.js`, `storage.js`, `utils.js` e `main.js`.  

---

## 💻 Conceitos de Programação Funcional Aplicados

1. **Função Lambda**  
   - Exemplo:  
     ```js
     const admins = filterUsers(u => u.role === 'admin', users);
     ```  
     Local: `src/main.js` (opção 4 do menu).  

2. **List Comprehension (Map)**  
   - Exemplo:  
     ```js
     const names = mapUsernames(users);
     ```  
     Local: `src/utils.js`  

3. **Closure**  
   - Exemplo:  
     ```js
     const makeUserAdder = (saveFn) => (users, username, email, password, role = 'user') => { ... }
     ```  
     Local: `src/main.js`  
     - `saveFn` é capturado pelo escopo da função retornada.  

4. **Função de Alta Ordem**  
   - Exemplo:  
     ```js
     const filterUsers = (predicate, users) => users.filter(predicate);
     ```  
     Local: `src/utils.js`  
     - Recebe uma função (`predicate`) como argumento.  

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (v18+)  

### Passos
1. Clone este repositório ou extraia os arquivos.  
2. Instale as dependências:  
   ```bash
   npm install
