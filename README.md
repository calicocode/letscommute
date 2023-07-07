# Let’s Commute (Backend)

Description:

This repository contains the backend code for the project: Let's Commute. The project aims to provide a platform for users to offer and find rides between different cities. The backend is built using Express API and MongoDB.

Please note that this repository only includes the backend code. The frontend code (React) can be found in the following repository: [Link to Frontend Repository]([https://github.com/your-frontend-repo](https://github.com/calicocode/letscommute-client))

## Instructions to Run

1. Install dependencies: Run `npm install` to install all the required dependencies.

2. Environment Variables: Make sure to set the following environment variables:
   - `MONGODB_URI`: The URI for connecting to the MongoDB database.
   - `JWT_SECRET`: Secret key used for JSON Web Token (JWT) authentication.

3. Run the application: Execute the command `npm start` to start the server.

## Demo

A deployed version of the project can be accessed at the following link:

https://letscommute.netlify.app

You can use the deployed app to test the functionality of the API.

## Backend Code

### Ride Model

The `ride` schema defines the structure of a ride object and is used for MongoDB document mapping. It includes the following fields:

- `fromCity` (String, required): The city from which the ride starts.
- `toCity` (String, required): The destination city of the ride.
- `intervalOfRides` (String, enum): The interval frequency of the rides.
- `seats` (Number, enum): The number of available seats in the vehicle.
- `driver` (Object ID reference to User model): The ID of the driver associated with the ride.
- `vehicle` (Object ID reference to Vehicle model): The ID of the vehicle associated with the ride.

### User Model

The `user` schema defines the structure of a user object and is used for MongoDB document mapping. It includes the following fields:

- `name` (String, required): The name of the user.
- `email` (String, required): The email address of the user.
- `password` (String, required): The password of the user.
- `profileImage` (String): The URL of the user's profile image.
- `phoneNumber` (Number): The phone number of the user.
- `driver` (String, enum, required): Indicates if the user is a driver or not.
- `probationaryDriver` (String, enum, required): Indicates if the user is a probationary driver or not.

### Vehicle Model

The `vehicle` schema defines the structure of a vehicle object and is used for MongoDB document mapping. It includes the following fields:

- `owner` (Object ID reference to User model): The ID of the owner of the vehicle.
- `vehicle` (String, required): The type of vehicle.
- `imageUrl` (String, default): The URL of the vehicle image.

### Ride Routes

The backend provides the following Ride routes:

- `POST /api/rides`: Creates a new ride. Requires authentication.
- `GET /api/rides`: Retrieves a list of all rides.
- `GET /api/rides/:rideId`: Retrieves details of a specific ride by ID.
- `PUT /api/rides/:rideId`: Updates details of a specific ride by ID.
- `DELETE /api/rides/:rideId`: Deletes a specific ride by ID.

### Vehicle Routes


The backend code also includes the following additional Vehicle routes:

- `GET /api/vehicle`: Retrieves vehicles owned by the authenticated user. Requires authentication.
- `POST /api/vehicle`: Creates a new vehicle. Requires authentication.
- `PUT /api/rides/vehicle`: Updates details of a specific vehicle. Does not require authentication.


#### Authentication Routes

The backend code includes the following routes for user authentication:

- `POST /auth/signup`: Creates a new user in the database. The route expects the following fields in the request body: `email`, `password`, `name`, `profileImage`, `phoneNumber`, `driver`, and `probationaryDriver`. The route performs validation checks on the provided data and creates a new user in the database if the email is unique. It hashes the password using bcrypt before storing it.

- `POST /auth/login`: Verifies the email and password provided in the request body. If the credentials are valid, it generates a JSON Web Token (JWT) and sends it as a response. The JWT can be used for subsequent authenticated requests. The route compares the provided password with the hashed password stored in the database using bcrypt.

- `GET /auth/verify`: Used to verify the JWT stored on the client. This route is protected with the `isAuthenticated` middleware, which checks the validity of the JWT. If the token is valid, the route returns the decoded payload containing user data.

Please refer to the code for the detailed implementation of these routes.

For more information on how to use the API, refer to the documentation or explore the code in the repository.

For any questions or issues, please contact the project maintainers.
