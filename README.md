# Fintech Dashboard

This is a modern, functional, and responsive fintech web application dashboard built with **React**, **Next.js**, **TypeScript**, **Tailwind CSS**, and **REST APIs**. The dashboard includes multiple sections such as a user overview, loan management, and transaction history, with data fetched dynamically from a mock REST API.

## Features

### 1. User Overview Section:
- Displays basic user information such as name, account balance, and recent transactions.
- Data is dynamically fetched from a mock REST API.

### 2. Loan Management Section:
- View loan history and current active loan details.
- Form to request a new loan with input validation (amount, tenure, and purpose).

### 3. Transaction History Section:
- Table showing recent transactions.
- Sort transactions by date, amount, or type.
- Filter transactions by type (credit, debit).

### 4. Responsive Design:
- Fully responsive design that works seamlessly on desktop, tablet, and mobile devices.

## Technical Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API (or Redux)
- **Routing**: React Router
- **API Integration**: Mock REST API (e.g., JSONPlaceholder or MockAPI)
- **Deployment**: Vercel (or any preferred hosting service)

## Installation

Follow these steps to run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fintech-dashboard.git

2. Navigate to the project folder:
   cd fintech
3. Install the dependencies:
   npm install
4. Run the application in development mode to run concurrent servers:
   npm run start:dev 