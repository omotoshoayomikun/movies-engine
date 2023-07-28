# Movie Recommender App

The Movie Recommender App is a web application that allows users to browse and select their favorite movie genres. It then provides movie recommendations based on the selected genres.

## Instructions to Run the App

Follow the steps below to run the Movie Recommender App on your local machine:

### Prerequisites

- Node.js and npm must be installed on your system. You can download and install Node.js from the official website: https://nodejs.org

### Getting Started

1. Clone the repository to your local machine using Git or download the ZIP file and extract it.

2. Open a terminal or command prompt and navigate to the project's root directory.

3. Install the project dependencies by running the following command:

```
npm install
```

### Configuring the API Key

The app uses the TMDB (The Movie Database) API to fetch movie data. To use the API, you need to obtain an API key from TMDB. Follow these steps to get the API key:

1. Go to the TMDB website: https://www.themoviedb.org

2. Sign up for an account if you don't have one.

3. Log in to your account and go to your account settings.

4. Click on the "API" section and then "Create" to request an API key.

5. Once your API key is generated, copy it.

6. Create a new file called `.env` in the project's root directory.

7. Add the following line to the `.env` file, replacing `YOUR_TMDB_API_KEY` with your actual API key:

```
REACT_APP_TMDB_API_KEY=YOUR_TMDB_API_KEY
```

### Running the App

After setting up the API key, you can run the app using the following command:

```
npm run dev
```

This command will start the development server, and the app will be accessible at `http://localhost:5173/` in your web browser.

### Using the App

- When the app loads, you'll see a list of movie genres. Select your favorite genres by checking the checkboxes.

- The app will fetch movie data based on the selected genres and display a list of recommended movies.

- You can browse through the list of recommended movies and explore more details about each movie.

- Your selected genres and movie data will be stored in Local Storage, so if you refresh the page or reopen the app, your preferences will be preserved.

### Stopping the App

To stop the app, simply press `Ctrl + C` in the terminal or command prompt where the development server is running.

## Enjoy exploring movies with the Movie Recommender App!