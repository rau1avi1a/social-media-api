# Social Media API 
## Description
This is an application that can serve as a social media API, with users, thoughts, and reactions.
## Table of Contents
1. [Installation](https://github.com/rau1avi1a/README-generator#installation)
2. [Usage](https://github.com/rau1avi1a/README-generator#usage)
3. [License](https://github.com/rau1avi1a/README-generator#license)
4. [Contributing](https://github.com/rau1avi1a/README-generator#contributing)
5. [Tests](https://github.com/rau1avi1a/README-generator#tests)
6. [Questions?](https://github.com/rau1avi1a/README-generator#questions)
## Installation
This is an express application, run `npm i` in order to install all dependencies and then run `npm start` in order to start the server.
## Usage
This application will require Insomnia in order to test the different express routes. Once server is running, open the local host on Insomnia `http://localhost:3001`. The routes are as follows:

### Users
- GET `http://localhost:3001/api/users`: obtains all users.

- GET `http://localhost:3001/api/users/:userId`: obtains the user with specified id. 

- POST `http://localhost:3001/api/users`: creates a user (requires "username" and "email" parameters).

- PUT `http://localhost:3001/api/users/:userId`: updates user information (username or email).

- DELETE `http://localhost:3001/api/users/:userId`: deletes user and thoughts linked to user.

#### Users - Friends

- POST `http://localhost:3001/api/users/:userId/friends/:friendId`: add friend to a user's friend list. `:userId` is the user with the friend list, `:friendId` is the user being added as a friend.

- DELETE `http://localhost:3001/api/users/:userId/friends/:friendId`: deletes a friend from user's friend list. `:userId` is the user with the friend list, `:friendId` is the user being removed from friend list.

#### Users - Reactions

- POST `http://localhost:3001/api/users/:userId/:thoughtId`: creates a reaction to a thought (requires "reactionBody" parameter). `:userId` is the id of the user creating the reaction, `:thoughtid` is the id of the thought that the reaction is being posted on.

- DELETE `http://localhost:3001/api/users/:thoughtId/:reactionId`: deletes a reaction from a thought. `:thoughtId` is the target thought and `:reactionId` is the id of the reaction being deleted.

### Thoughts
- GET `http://localhost:3001/api/thoughts`: obtains all thoughts.

- GET `http://localhost:3001/api/thought/:thoughtId`: obtains a thought with specified id.

- POST `http://localhost:3001/api/thoughts/:userId`: creates a thought for a user (requires "thoughtText" parameter).

- PUT `http://localhost:3001/api/thoughts/:thoughtId`: updates a user's thought (thoughtText).

- DELETE `http://localhost:3001/api/thoughts/:thoughtId`: deletes a user's thought.


## License
N/A
## Contributing
N/A
## Tests
N/A
## Questions?
Reach me on [GitHub](https://github.com/rau1avi1a)
