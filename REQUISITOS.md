# Documento de Requisitos - (Programação Funcional)

Este documento descreve os **requisitos funcionais e não funcionais** do sistema, relacionando cada requisito às partes específicas do código que o implementam.

---

## ✅ Requisitos Funcionais

1. **Cadastrar usuários no sistema**  
   - **Descrição:** O sistema deve permitir adicionar novos usuários com nome, e-mail, senha e cargo.  
   - **Implementação:**  
     - Função `makeUserAdder` (`src/main.js`)  
     - Persistência via `saveUsers` (`src/storage.js`)  

2. **Autenticar usuários com login e senha**  
   - **Descrição:** O sistema deve validar as credenciais de login comparando senha digitada com a senha armazenada.  
   - **Implementação:**  
     - Função `authenticate` (`src/main.js`)  
     - Funções `hashPassword` e `verifyPassword` (`src/auth.js`)  

3. **Listar usuários cadastrados**  
   - **Descrição:** O sistema deve permitir listar todos os usuários armazenados.  
   - **Implementação:**  
     - Loop `users.forEach(...)` (`src/main.js`, opção 1 do menu)  

4. **Filtrar administradores**  
   - **Descrição:** O sistema deve permitir encontrar somente usuários com papel `admin`.  
   - **Implementação:**  
     - Função `filterUsers` (`src/utils.js`)  
     - Função lambda usada no menu (opção 4, `src/main.js`)  

5. **Imprimir apenas nomes de usuários**  
   - **Descrição:** O sistema deve exibir somente a lista de usernames cadastrados.  
   - **Implementação:**  
     - Função `mapUsernames` (`src/utils.js`)  
     - Usada no menu (opção 5, `src/main.js`)  

6. **Armazenar credenciais com segurança**  
   - **Descrição:** O sistema deve salvar senhas criptografadas, nunca em texto puro.  
   - **Implementação:**  
     - Função `hashPassword` (`src/auth.js`)  
     - Função `verifyPassword` (`src/auth.js`)  

---

## ⚙️ Requisitos Não Funcionais

1. **Persistência em arquivo JSON**  
   - **Descrição:** Os dados devem ser mantidos mesmo após encerrar a aplicação.  
   - **Implementação:**  
     - Funções `loadUsers` e `saveUsers` (`src/storage.js`)  

2. **Interface baseada em CLI**  
   - **Descrição:** O sistema deve ser executado no terminal via linha de comando.  
   - **Implementação:**  
     - Uso da biblioteca `readline` (`src/main.js`)  

3. **Imutabilidade ao cadastrar usuários**  
   - **Descrição:** A lista de usuários não deve ser alterada diretamente, mas recriada a cada inserção.  
   - **Implementação:**  
     - Operador spread `[...users, user]` em `makeUserAdder` (`src/main.js`)  

4. **Código modular e organizado**  
   - **Descrição:** O sistema deve ser dividido em múltiplos arquivos para melhor manutenção.  
   - **Implementação:**  
     - `auth.js` → segurança de credenciais  
     - `storage.js` → persistência  
     - `utils.js` → funções utilitárias  
     - `main.js` → fluxo principal e CLI  

---

## 🔎 Relação com Programação Funcional

- **Função Lambda**  
  - `u => u.role === 'admin'` (opção 4 do menu em `src/main.js`)  

- **List Comprehension (Map)**  
  - `mapUsernames(users)` (opção 5 do menu em `src/utils.js`)  

- **Closure**  
  - `makeUserAdder(saveFn)` retorna outra função que usa `saveFn` (em `src/main.js`)  

- **Função de Alta Ordem**  
  - `filterUsers(predicate, users)` recebe uma função como argumento (em `src/utils.js`)  

---

📌 **Conclusão:**  
Todos os requisitos funcionais e não funcionais foram implementados e documentados, garantindo rastreabilidade entre especificação e código.

