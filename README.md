# PokeAPI Middleware

This project, **pokeapi-middleware**, was developed by **LeviLJR** and consists of a Node.js middleware that consumes the PokeAPI to return information about Pokémon, along with a frontend created with **React**, **Vite** e **Axios**.The goal is to provide a complete application that allows users to search for Pokémon abilities in a simple and interactive way.

---

## Requirements

Before running the project, you need to have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) (package manager)

---

## Project Structure

The project is divided into two main parts:

1. **Backend**: A Node.js middleware that makes requests to the PokeAPI.
2. **Frontend**: A React application with Vite that consumes the backend and displays the information interactively.

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/LeviLJR/pokeapi-middleware.git
```

### 2. Navigate to the Project Directory

```bash
cd pokeapi-middleware
```

---

### Backend Setup

1. Access the backend directory:

   ```bash
   cd backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

Make sure the following dependencies are installed:

- **express**: Framework for the server.
- **axios**: Library for HTTP requests.
- **cors**: Middleware to enable CORS.

If they are not installed, you can install them manually with:

```bash
npm install express axios cors
```

3. Start the server:

   ```bash
   npm start
   ```

The server will be running at `http://localhost:3000`.

---

### Frontend Setup

1. Access the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

   Make sure the following dependencies are installed:

   - **react**: Library for building user interfaces.
   - **react-dom**:React rendering library.
   - **vite**: Development tool.
   - **axios**: Library for HTTP requests.

If they are not installed, you can install them manually with:

```bash
npm install react react-dom vite axios
```

3. Start the frontend server::

   ```bash
   npm run dev
   ```

The frontend will be accessible at `http://localhost:5173`.

---

## Usage

After setting up and running both servers, you can access the application in your browser to search for Pokémon abilities. The frontend will consume the backend to display the data.

---

## Backend Routes

### GET `/api/pokemons/:poke_name`

This route returns the abilities of a Pokémon specified in the `:poke_name`parameter, ordered alphabetically.

#### Example Usage

**Request:**

```http
GET http://localhost:3000/api/pokemons/pikachu
```

**Resposta:**

```json
{
  "name": "pikachu",
  "abilities": ["lightning-rod", "static"],
  "base_experience": 112
}
```

---

## Frontend Features

The frontend has a modern and interactive interface that allows you to:

- Enter a Pokémon's name.
- Search for the Pokémon's abilities by clicking the "Search" button.
- Display the abilities and `base_experience` in a clear and styled way.

### Example Screen

Here's a live demo of the application working
<img src="https://imgur.com/zHMYZJb.gif"/>

1. **Input** the Pokémon's name.
2. Search **Button**.
3. Display of **abilities** and **base_experience** on the screen.

---

## Technologies Used

### Backend:

- **Node.js**: JavaScript runtime environment.
- **Express**: Framework for creating the server.
- **Axios**: Library for making HTTP requests to the PokeAPI.
- **CORS**: Middleware to enable CORS on the backend.

### Frontend:

- **React**: Library for building user interfaces.
- **Vite**: Tool for fast frontend development.
- **Axios**: Library for communicating with the backend.
- **Tailwind CSS**: CSS framework for styling.

---

## Contribution

Feel free to contribute improvements or report issues. Just create a pull request or open an issue in the`pokeapi-middleware`repository.

---

## Developed by

- **LeviLJR**
