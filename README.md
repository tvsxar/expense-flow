# Expense Flow (Spendly)

A full-stack expense tracking application built with React + TypeScript on the frontend and Node.js + Express + GraphQL on the backend.
The app helps users track, manage, and analyze their expenses in a clean and structured way with a modern UI.
The main focus of the project is server-side expense filtering and visual analytics using Chart.js.

---

## Table of Contents

- [Description](#description)
- [Live Demo](#live-demo)
- [Features](#features)
- [Technologies & Stack Explanation](#technologies--stack-explanation)
- [Architecture & Flow](#architecture--flow)
- [Installation & Run](#installation--run)
- [Project Structure](#project-structure)
- [GraphQL API](#graphql-api)
- [Author](#author)

---

## Description

Expense Flow allows users to:

- Add and manage expenses
- Filter expenses on the backend
- Analyze spending using interactive charts
- Work with structured data via GraphQL API
- Use a fast and type-safe frontend built with React + TypeScript

Backend is built with **Node.js, Express.js, GraphQL** and **MongoDB**.  
Frontend is built with **React (Vite) with TypeScript ** and styled with **Tailwind CSS**.

---

## Live Demo

Try it online via our [Live Demo](https://expense-flow-backend-8m66.onrender.com)!

---

## Features

- Server-side expense filtering
- Dynamic charts using Chart.js
- Category-based and time-based analytics
- Type-safe frontend with TypeScript
- GraphQL queries and mutations
- Fully responsive UI
- Storybook setup for component isolation and testing
- **MERN stack** setup (MongoDB, Express.js, React, Node.js)  

---

## Technologies & Stack Explanation

- **MongoDB** — NoSQL database for storing posts  
- **Mongoose** — ODM for MongoDB  
- **Express.js / Node.js** — backend and HTTP server
- **GraphQL** — flexible API layer
- **graphql-http** — GraphQL middleware
- **React (Vite)** — frontend framework  
- **TypeScript** — static typing
- **Chart.js** — data visualization
- **Storybook** — UI component development and testing
- **Tailwind CSS** — utility-first styling  

---

## Architecture & Flow

1. Frontend sends GraphQL queries with filter parameters via Apollo Client
2. Backend applies filtering logic at database level 
3. Filtered data is returned to frontend  
4. Chart components transform data into visual analytics
5. UI updates dynamically based on filters

---

## Installation & Run

### Backend

```bash
cd backend
npm install
npm i express mongoose cors dotenv graphql graphql-http
```

Create a `.env` file inside `backend/` with the following:

```env
PORT=1333
MONGO_URI=your_mongo_connection_string
NODE_ENV=development
```

```bash
npm run dev
```

---

### Frontend

```bash
cd frontend
npm install
npm i typescript tailwindcss @tailwindcss/vite graphql chart.js emoji-picker-react @apollo/client storybook
```

Create a `.env` file inside `frontend/` with the following:

```env
VITE_API_URL=http://localhost:1333/graphql
```

```bash
npm run dev
```

Frontend will be available at:
http://localhost:5173

---

## Project Structure

```
expense-flow/
├─ backend/
│  ├─ models/
│  │  └─ Expense.js
│  ├─ graphql/
│  │  ├─ schema.js
│  │  └─ resolvers.js
│  ├─ server.js
│
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  │  ├─ charts/
│  │  │  │  └─ ExpensesChart.tsx
│  │  │  ├─ ExpensesList.tsx
│  │  │  ├─ ExpenseItem.tsx
│  │  │  ├─ SummaryCards.tsx
│  │  │  └─ ...
│  │  ├─ pages/
│  │  │  └─ DashboardPage.tsx
│  │  ├─ hooks/
│  │  │  ├─ useExpenses.tsx
│  │  │  ├─ useModal.tsx
│  │  │  ├─ useExpensesChartData.tsx
│  │  │  └─ usePeriodDropdown.tsx
│  │  ├─ apollo/
│  │  ├─ types/
│  │  └─ main.tsx
```

---

## GraphQL API

Example Query with Date Filters
```bash
query {
  expenses(
    fromDate: "2024-01-01"
    toDate: "2024-01-31"
  ) {
    _id
    icon
    amount
    category
  }
}
```

---

## Author

**Taras Poiatsyka**\
[GitHub](https://github.com/tvsxar)