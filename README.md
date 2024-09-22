# Dog Breed Gallery

Dog Breed Gallery - This application provides functionality for a user to view images of their favourite dog breeds. A user is able to select one or more breeds and see an image gallery of the selected breed.

## This is the Homepage of the UI
![Home Page](./src/images/Homepage.png)

## This is the list of all the dog breeds in the dropdown
![DropDown](./src/images/dropdownselection.png)

## Selecting a dog breed and clicking on button
![DropDown Selection](./src/images/selectingbreed.png)

## This are all the images that are related to that breed
![List of Images](./src/images/images.png)
## Features

- **Breed Selection**: Users can select a dog breed from a dropdown menu.
- **Image Gallery**: Displays images of the selected dog breeds.
- **Back Button**: Allows users to return to the breed selection screen easily.
- **Responsive Design**: The gallery layout adapts to different screen sizes for a seamless user experience.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **CSS**: Styling for the application, ensuring a visually appealing design.
- **Dog API**: Fetching dog breeds and images from the Dog CEO API.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SandeepThodkar/Dog_Breed_Gallery.git
   cd Dog_Breed_Gallery
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Code Structure

- **App.js**: The main application component that manages state and handles API calls.
- **BreedSelector.js**: Component for selecting dog breeds, allowing multiple selections.
- **ImageGallery.js**: Component for displaying the selected dog images in a grid layout.
- **App.css**: Contains all styling for the application, including responsive design elements and animations.

## Usage

1. On the homepage, select one or more dog breeds from the dropdown menu.
2. Click the "Show Images" button to fetch and display images of the selected breeds.
3. Use the "Back" button to return to the breed selection.

## Example Screenshots

(Include any relevant screenshots of your application here to showcase the UI and features.)

## Additional Notes

- The application uses the Dog CEO API to fetch breed information and images dynamically.
- The code is structured to maintain readability and best practices in React development.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.
