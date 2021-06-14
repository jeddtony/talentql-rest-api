# Talentql-REST-API
This is a RESTful API that supports the posts functionality of Facebook.

### Postman Documentation Link
https://documenter.getpostman.com/view/7429378/TzeUmTxf#90348ac7-9b82-439c-893e-d9081a08321e

### Stack Used
This API was written in Node.js using the Express framework. The database used is a NoSQL database known as MongoDB. The reason for using MongoDB is because of it's speed of processing queries and the complex queries that can be performed on it. 

### Database Setup
To setup the database, you must have MongoDB installed and running on your machine.

To install and run MongoDB follow this link 
https://docs.mongodb.com/guides/server/install/

It is assumed that the MongoDB database is running on the same server with the code

### Setup
Clone this repo and run the command

`npm install`

### Development Setup
To run the app on your local machine, copy the contents of the ``.env.example`` file into a file name ``.env.develop `` and fill up the environment fields as required. 
An example of the ``.env.develop`` is given below 

NODE_ENV=Development

PORT=4000

MONGO_USER=
MONGO_PASSWORD=
MONGO_DATABASE=talentqlassessment

MAIL_HOST="smtp.mailtrap.io" 

MAIL_PORT=587
MAIL_USERNAME="mailtrap_username"
MAIL_PASSWORD="mailtrap_password"

JWT_TOKEN_SECRET=69eftt%$##=hyt

BASE_URL="http://localhost:4000"


Then run the command

`npm run start:dev`

This will start the app in development mode.

#### Live Setup
Alternatively, copy the contents of the ``.env.example`` file into a ``.env`` file and fill up the environment fields as required. 

An example of the ``.env`` is given below 

NODE_ENV=Production

PORT=4000

MONGO_USER=MongodbUserName
MONGO_PASSWORD=MongodbPassword
MONGO_DATABASE=talentqlassessment

MAIL_HOST="smtp.mailtrap.io" 

MAIL_PORT=587
MAIL_USERNAME="mailtrap_username"
MAIL_PASSWORD="mailtrap_password"

JWT_TOKEN_SECRET=69eftt%$##=hyt

BASE_URL="http://localhost:4000"

Then run the command

``npm start``

This will start the app in production mode

### Running Tests 
To run tests copy the contents of the ``.env.example`` file into a ``.env.testing`` file and fill up the environment fields as required. Note, you must create a different database for testing. 

An example of the ``.env.testing`` is given below 

NODE_ENV=Testing

PORT=4000

MONGO_USER=MongodbUserName
MONGO_PASSWORD=MongodbPassword
MONGO_DATABASE=talentqlassessment_test

MAIL_HOST="smtp.mailtrap.io" 

MAIL_PORT=587
MAIL_USERNAME="mailtrap_username"
MAIL_PASSWORD="mailtrap_password"

JWT_TOKEN_SECRET=69eftt%$##=hyt

BASE_URL="http://localhost:4000"


Then run the command

``npm run test``
