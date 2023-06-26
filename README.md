# Album Management App

This is a React app that allows users to manage albums. It provides features such as fetching and displaying albums from an API, adding new albums, updating existing albums, and deleting albums.

## Features

- Fetch and display albums from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/albums).
- Add an album: Users can enter the details of a new album and save it to the app's state. Note that this is a dummy request and the albums won't be added to the server.
- Update an album: Users can update the title of an existing album by clicking the "Update" button. The app makes a dummy PUT request to the API to update the album's title.
- Delete an album: Users can delete an album by clicking the "Delete" button. The app makes a dummy DELETE request to the API to remove the album.

## Technologies Used

- React: The app is built using the React library.
- styled-components: The styled-components library is used for styling the app components.
- JSONPlaceholder API: The app fetches albums data from the JSONPlaceholder API.

## Getting Started

To run the app locally, follow these steps:

1. Clone the repository or download the source code.
2. Install the dependencies by running `npm install` in the project directory.
3. Start the development server by running `npm start`.
4. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

## Additional Notes

- The app uses styled-components to style the album items and buttons. Each album item is displayed as a flex box with a background color and animations.
- When the "Update" button is clicked, a modal box pops up with an input form to enter the updated title. Clicking the "Update" button within the modal updates the current state of the albums.
- The heading ("Album Management App") is styled with a cursive font, and it has a background effect with a gradient color transition. Additionally, a light background color is applied to the heading.

Feel free to customize and modify the code to suit your needs!
