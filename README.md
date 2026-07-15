# Task Architect - Backend

This is the backend for the Task Architect application, built with Node.js, Express, and MongoDB.

## Tech Stack
- **Node.js** & **Express.js**
- **MongoDB** & **Mongoose**
- **JWT** (JSON Web Tokens) for authentication
- **bcrypt** for password hashing

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB database

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   Copy `.env.sample` to `.env` and fill in the required values (e.g., MongoDB URI, JWT Secret).
   ```bash
   cp .env.sample .env
   ```

3. Run the development server (using nodemon):
   ```bash
   npx nodemon server.js
   ```
