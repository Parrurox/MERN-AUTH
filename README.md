# MERN-AUTH

MERN-AUTH is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js) that demonstrates user authentication using JSON Web Tokens (JWT). It utilizes Redux Toolkit for state management, Bootstrap for CSS styling, and MongoDB as the database.

## Features

- User authentication with JWT
- Redux Toolkit for state management
- Bootstrap for CSS styling
- React for the frontend
- Express for the backend
- MongoDB as the database

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- MongoDB

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Parrurox/MERN-AUTH.git
   ```

2. Install the dependencies:

   ```bash
   cd mern-auth
   npm install
   ```

3. Set up the environment variables:

   - Create a `.env` file in the root directory.
   - Add the following variables:

     ```plaintext
     PORT=5000
     MONGODB_URI=your-mongodb-uri
     JWT_SECRET=your-jwt-secret
     ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to see the application.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
