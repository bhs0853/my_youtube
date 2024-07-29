# MY YOUTUBE

**Developed a single-page frontend web app for an online video viewing platform using React.js.**

- **Integrated YouTube Data API** to fetch and display popular videos by category.
- **Designed an intuitive homepage** to enhance user navigation and experience.
- **Implemented optimized search functionality** with autocomplete using debouncing and caching, improving search speed.
- **Added a live chat feature** using mock data for real-time interaction.
- **Created a nested comments section** using recursion, similar to Reddit, with mock data.

**Technologies Used:** React.js, Redux, React Router, Tailwind CSS, Parcel, Git, Postman, VS Code

# Features

## Home Page
- Displays a list of videos by category using the YouTube Data API.

## Search Bar
- Autocomplete search bar powered by the YouTube Data API.
- API calls for autocomplete suggestions are optimized with debouncing and further enhanced by caching the suggestions in the Redux store.
- Autocomplete suggestions are functional and can be clicked to redirect to a search results page displaying videos based on your search query parameters.

## Watch Page
- Utilizes an iframe as a video player.
- Contains a nested comment section implemented using recursion.
- Includes a live chat feature that dynamically updates with mock data.

## Search Page
- Displays search results according to the search query parameters using the YouTube Data API.

**Used Redux store** as a centralized store to manage live chat messages and cache search suggestions.

**Utilized YouTube Data APIs** for fetching videos by category, search results, and autocomplete results.

# Learnings from this Project

- **Set up a React app manually** instead of using the traditional create-react-app.
- **Used different bundlers** to build the app and utilized Parcel as the bundler.
- **Gained knowledge about dependencies and package managers (npm).**
- **Integrated API data** with the web app to make it dynamic, gaining exposure to real-world API handling in the frontend.
- **Handled data layers and UI layers**, understanding the need for centralized data stores to ease the development process.
- **Integrated CSS libraries** to build responsive and engaging UIs, enhancing user experience.
- **Implemented custom hooks**, learning their importance.
- **Learned about dynamic routing**, accessing device network states, hot module replacement, and more.
- **Followed SOLID principles** and organized the folder structure accordingly.
- **Implemented features like live chat, nested comments, and autocomplete suggestions.**
- **Enhanced user experience** with features like shimmer effects and a functional hamburger menu.

This project not only honed my technical skills but also provided practical exposure to real-world web app development challenges and solutions.


## How to run the project
**To experience the webapp clone the project and run the below commands**

#### Step1: Clone the project to your PC and open the terminal.


####  Step 2: Install the Required Node Modules (Dependencies)

Run the following command to automatically install all the dependencies:
```bash
    npm install
```

#### Step 3: Run the Project
```bash
    npm run start
```

#### Enjoy exploring all the features of this app! 😇
    

