# 🛸 Consumo de API - Rick and Morty

Aplicação desenvolvida em **React** para demonstrar o consumo assíncrono de APIs REST em tempo de execução, controle de estados de requisição, componentização e filtros de busca dinâmica.

---

## 📚 Conceitos Praticados

- **Consumo Assíncrono com `fetch` e `useEffect`:** Busca de dados externos na montagem inicial do componente.
- **Gerenciamento de Estado de Requisições:** Controle de estados para `loading` (indicador de carregamento), `erro` (tratamento de falhas) e `personagens` (dados obtidos).
- **Componentização & Props:** Divisão de responsabilidades entre os componentes `ListaPersonagens` e `PersonagemCard`.
- **Filtro via Query Parameters:** Realização de consultas dinâmicas filtrando pelo endpoint `?name=` da API.
- **Renderização Condicional:** Exibição contextualizada de mensagens de feedback e renderização da grade de cards.

---

## 🛠️ Tecnologias e Dependências

- **React** (`react`, `react-dom`)
- **Vite** (Build tool e servidor de desenvolvimento)
- **Rick and Morty API** (Endpoint REST público)
- **JavaScript (ES6+)**
- **CSS3** (Layout responsivo com Flexbox e CSS Grid centralizado)

---

## 📸 Imagens:

<img width="1917" height="950" alt="1" src="https://github.com/user-attachments/assets/97358d4c-86c9-45a8-b9d5-f2b2bec0b707" />
<img width="1918" height="942" alt="2" src="https://github.com/user-attachments/assets/b03639eb-432c-4311-8c79-c07375853f36" />
<img width="1919" height="955" alt="3" src="https://github.com/user-attachments/assets/4718525c-40ca-4097-a584-543f230687ef" />
<img width="1917" height="949" alt="4" src="https://github.com/user-attachments/assets/2ea20712-1c97-4f11-9f2f-428ebe6a2147" />
<img width="1918" height="953" alt="5" src="https://github.com/user-attachments/assets/3bf61c1d-29d9-49bd-8eae-2ca6e6e7b1df" />
<img width="1919" height="954" alt="6" src="https://github.com/user-attachments/assets/dea0062a-a171-4059-8ace-a3339004b260" />

---

## 🔧 Como Executar

```bash
# Clone o repositório
git clone [https://github.com/paulosilva1998/rick-and-morty-app.git](https://github.com/paulosilva1998/rick-and-morty-app.git)

# Entrar no diretório do projeto
cd rick-and-morty-app

# Instalar as dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
