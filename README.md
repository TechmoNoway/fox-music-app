# Music Player App

Welcome to the Music Player App! This project is built using Node.js and Express.js for the backend, and React.js with Firebase for the frontend. The app allows users to upload, browse, and play their favorite music tracks.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction
The Music Player App is a modern web application that provides a seamless music streaming experience. Users can create playlists, search for tracks, and enjoy high-quality audio playback.

## Features
- User authentication and authorization
- Music upload and storage
- Playlist creation and management
- Audio playback with controls (play, pause, skip, etc.)
- Search functionality for tracks
- Responsive design for mobile and desktop

## Technologies Used
- **Backend:** Node.js, Express.js
- **Frontend:** React.js
- **Database:** Firebase
- **Authentication:** Firebase Authentication
- **Storage:** Firebase Storage
- **Styling:** Tailwind CSS

## Installation
### Prerequisites
- Node.js and npm/yarn
- Firebase account

### Backend
1. Clone the repository
    ```bash
    git clone https://github.com/yourusername/nodejs-music-player-app.git
    ```
2. Navigate to the backend directory
    ```bash
    cd server
    ```
3. Install dependencies
    ```bash
    npm install
    # or
    yarn install
    ```
4. Set up environment variables (create a `.env` file)
    ```
    FIREBASE_API_KEY=your_firebase_api_key
    FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    FIREBASE_PROJECT_ID=your_firebase_project_id
    FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    FIREBASE_APP_ID=your_firebase_app_id
    ```

5. Run the server
    ```bash
    npm start
    # or
    yarn start
    ```

### Frontend
1. Clone the repository
    ```bash
    git clone https://github.com/yourusername/nodejs-music-player-app.git
    ```
2. Navigate to the frontend directory
    ```bash
    cd client
    ```
3. Install dependencies
    ```bash
    npm install
    # or
    yarn install
    ```
4. Configure Firebase settings (use the same environment variables as in the backend)
    ```javascript
    const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID,
    };
    ```

5. Start the development server
    ```bash
    npm start
    # or
    yarn start
    ```

## Usage
- Navigate to `http://localhost:3000` to access the frontend.
- Use the app to upload, browse, and play music tracks.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any feature addition or bug fix.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
- Name: Your Name
- Email: nguyentriky0604@gmail.com
- GitHub: [TechmoNoway](https://github.com/TechmoNoway)


