# MyApp

## Description
This project is a simple web application built using the Laravel framework and Inertia.js. It demonstrates the integration of Laravel and Inertia.js to create a modern, single-page application (SPA) with a backend powered by Laravel and a frontend built using Vue.js.

## Features
- User authentication and authorization
- Create & List users and search filter
- Real-time form validation
- Server-side rendering for initial page load and subsequent API requests using Inertia.js
- Designed with tailwind css

## Installation
To run this project locally, please follow these steps:

1. Clone the repository: `git clone https://github.com/vermataruna/laravel-inertia.git`
2. Navigate to the project directory: `cd laravel-inertia`
3. Install the Laravel dependencies: `composer install`
4. Install the frontend dependencies: `npm install`
5. Create a copy of the `.env.example` file and rename it to `.env`
6. Generate an application key: `php artisan key:generate`
7. Configure the database connection in the `.env` file with your database credentials
8. Run the database migrations: `php artisan migrate`
9. Build the frontend assets: `npm run dev`
10. Start the development server: `php artisan serve`
11. Visit `http://localhost:8000` in your web browser to access the application

## Contributing
Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request to this repository.
