# React Movie Search App

A movie search application built with vite, which allows users to search for movies, view detailed information about their favorite films.

## 🚀 Features

-   Search for movies using a keyword.
-   View detailed information for each movie, including poster, plot, and rating.
-   Client-side routing for seamless navigation.

## 🛠️ Technologies Used

-   **React** & **Vite**
-   **React Router** for navigation.
-   **Context API** for state management (Favorites feature).
-   **OMDb API** for movie data.
-   **CSS** for styling.

## 📦 Setup and Installation

Follow these steps to get the project running on your local machine.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/react-movie-search-app.git](https://github.com/your-username/react-movie-search-app.git)
    cd react-movie-search-app
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Get an API Key:**
    -   Go to [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx) and get a free API key.
    -   Create a `.env.local` file in the root of your project.
    -   Add your API key to the file:
        ```env
        VITE_OMDB_API_KEY=your_omdb_api_key_here
        ```
    -   _Note: The `VITE_` prefix is necessary for Vite to expose environment variables to the client-side code._
4.  **Run the application:**
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:5173`.

---

