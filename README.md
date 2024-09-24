# ZONIXX 

## Next.js 14 Project with NextUI, TypeScript, and Zustand

### Project Description

This application is designed to help users create and manage personalized workout plans. The core functionality is centered around the user's profile page, where they can:

1) Create Custom Workout Plans:

* Add exercises to favorites
* Incorporate favorite exercises into specific training days
* Default training days include basic CrossFit exercises


2) Exercise Information:

* Each exercise card displays an animation demonstrating proper technique
* Users can open a modal for quick information
* Detailed view available with:

   * Complete exercise information
   * YouTube videos on proper form
   * List of similar exercises
   * List of exercises using the same equipment




3) Exercise Browsing and Filtering:

* On the main exercises page, users can filter exercises by body part



The application aims to provide a comprehensive and user-friendly platform for fitness enthusiasts to plan and track their workouts effectively.

## Technologies Used

- **Next.js 14**
- **NextUI**
- **TypeScript**
- **Tailwind CSS**
- **Zustand**

## External APIs

This project uses the following external APIs from RapidAPI:

- **ExerciseDB**: Provides exercise-related data.
- **YouTube Search and Download**: Used for searching and integrating YouTube content.

**Note**: To contribute to or run this project, you'll need to obtain your own API credentials from RapidAPI for both ExerciseDB and YouTube Search and Download APIs.

## Features

- Modern and responsive UI components with NextUI
- Type-safe development environment with TypeScript
- Efficient styling with Tailwind CSS
- Centralized state management using Zustand
- Server-side rendering and static site generation capabilities with Next.js 14
- Integration with ExerciseDB for exercise data
- YouTube content integration using YouTube Search and Download API

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
    - Create a `.env.local` file in the root directory
    - Add your RapidAPI credentials:
      ```
      RAPIDAPI_KEY=your_rapidapi_key
      EXERCISEDB_HOST=exercisedb.p.rapidapi.com
      YOUTUBE_HOST=youtube-search-and-download.p.rapidapi.com
      ```
4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

[//]: # (## Project Structure)

[//]: # ()
[//]: # (&#40;Here you can add information about the project structure, main components, and important files&#41;)

[//]: # ()
[//]: # (## Contributing)

[//]: # ()
[//]: # (Contributions are welcome! Please follow these steps:)

[//]: # ()
[//]: # (1. Fork the repository)

[//]: # (2. Create your feature branch &#40;`git checkout -b feature/AmazingFeature`&#41;)

[//]: # (3. Commit your changes &#40;`git commit -m 'Add some AmazingFeature'`&#41;)

[//]: # (4. Push to the branch &#40;`git push origin feature/AmazingFeature`&#41;)

[//]: # (5. Open a Pull Request)

**Important**: Make sure to obtain your own API credentials from RapidAPI for both ExerciseDB and YouTube Search and Download APIs before contributing. Do not share your credentials in the repository.
