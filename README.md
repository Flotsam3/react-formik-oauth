# Vite React OAuth Demo

This project is a simple setup to test OAuth authentication using a Vite frontend with React and Formik together with a Node.js backend with Passport.

## Features
- Frontend:
  - Built with Vite and React
  - Uses Formik for form handling

- Backend:
  - Built with Node.js and Express
  - Uses Passport for OAuth authentication

## Getting Started

### Prerequisites
- Node.js v16+
- npm or yarn

### Installation

1. Clone the repository:

2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

### Configuration

Create an `.env` file in the `backend` directory with the following keys:
```
...
```

### Running the project

#### Frontend:
```bash
cd frontend
npm run dev
```

#### Backend:
```bash
cd backend
npm start
```

### Usage
Visit `http://localhost:5173` to view the frontend and initiate the OAuth flow.

## License
This project is licensed under the MIT License.

