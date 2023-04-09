# Game Search App

This is a web application designed to allow users to search for video game titles using a search bar. The app will query a game API with the search term and display the top results. The app also features a cache system that stores all unique queries, and uses those in future if a user searches for a term which has already been searched for.

## Technologies Used
This app was built using Angular 14.2.0, ngrx/store 14.3.0, and RxJS on the front-end. The styling is done using bare CSS. On the back-end, the app uses Node.js 16.16.0, Express 4.18.2, and MongoDB with the Mongoose ORM.

## How to Use
To use this app, simply enter the title of the video game you want to search for in the search bar, and press enter or click the search button. The app will then display the top results for your search term. You can use the next/previous buttons to scroll through the results.

## Installation
To install this app, simply clone the repository and run 
```
npm install
```
in both the client and server folders to install all the necessary dependencies. You will also need to create a MongoDB database and configure the connection string in the index.js file.

## Development
To run this app in development mode, for the front-end, navigate to the client folder and use the command 
```
ng serve --open
```
and navigate to the server folder to use command
```
nodemon index.js
```
for the back-end. This will start a development server for the front-end and back-end respectively.

## Technical Decisions
- ngrx/store was used for state management to simplify the code and improve performance.
- RxJS was used to handle asynchronous data streams.
- Node.js and Express were used to build the backend server for their simplicity and speed.
- MongoDB was chosen for its flexibility and ease of use, and Mongoose ORM was used to simplify database interactions.

Credits
This app was created by Alex Jones.
