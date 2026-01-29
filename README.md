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
- Dockerized: Entire stack orchestrated with **Docker Compose**

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
- **Docker & Docker Compose** — For containerization and easy setup

---

## Architecture & Flow

1. Frontend sends GraphQL queries with filter parameters via Apollo Client
2. Backend applies filtering logic at database level 
3. Filtered data is returned to frontend  
4. Chart components transform data into visual analytics
5. UI updates dynamically based on filters
6. Docker Volumes ensure instant Hot Reload for both TS/JS services during development.

---

## Installation & Run

### 1. The Quickest Way (Docker Compose)

_Requires [Docker](https://www.docker.com/get-started/)_

1. Create a `.env` file inside `backend/` (see variables below)
2. Run everything with one command:
   ```bash
   docker-compose up --build
   ```
3. Open http://localhost:5173 in your browser

### 2. Manual Setup (For Development)

If you want to run the services separately without Docker:

#### Backend

```bash
cd backend
npm install dotenv cors mongoose express nodemon
# Create .env with PORT, MONGO_URL, CLIENT_URL
npm run dev
```

Backend .env variables:
```bash
PORT=1333
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

---

#### Frontend

```bash
cd frontend
npm install axios tailwindcss react-chartjs-2 @tailwindcss/vite emoji-picker-react graphql @apollo/client @storybook/react-vite
# Create .env with VITE_API_URL
npm run dev
```

Frontend .env variables:
```bash
VITE_API_URL=http://localhost:1333
```

Frontend will be available at:
http://localhost:5173

---


## Project Structure

```
expense-flow/
├─ docker-compose.yml
├─ backend/
│  ├─ Dockerfile
│  ├─ models/
│  │  └─ Expense.js
│  ├─ graphql/
│  │  ├─ schema.js
│  │  └─ resolvers.js
│  ├─ server.js
│
├─ frontend/
│  ├─ Dockerfile
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