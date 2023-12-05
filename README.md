Project Christian-Eben-Roberto

# proyecto-final-backend way-home

# API

### Authentication Endpoints

The Authentication flow for the application is:

### User Signup/Login

| METHOD | ENDPOINT     | TOKEN | ROLE | DESCRIPTION | POST PARAMS                                 | RETURNS            |
| ------ | ------------ | ----- | ---- | ----------- | ------------------------------------------- | ------------------ |
| POST   | /auth/signup | -     | user | User Signup | `firstName`,`lastName`, `email`, `password` | { token: `token` } |
| POST   | /auth/login  | -     | user | User Login  | `email`, `password`                         | { token: `token` } |

### User Endpoints 🧔

| METHOD | ENDPOINT       | TOKEN | ROLE  | DESCRIPTION        | POST PARAMS                                                                                                                          | RETURNS                        |
| ------ | -------------- | ----- | ----- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ |
| GET    | /user          | YES   | admin | Get All Users      | `query params`                                                                                                                       | [{user}]                       |
| GET    | /user/me       | YES   | user  | Get Own Profile    |                                                                                                                                      | {user}                         |
| GET    | /user/:userId  | YES   | admin | Get One User       |                                                                                                                                      | {user}                         |
| POST   | /user          | YES   | admin | Create one user    | `firstName`,`lastName`, `email`, `password`, `phone`, `birth_Date`, `background`, `profile`, `address`, `location`, `info`, `media`, | {user}                         |
| PUT    | /user/me       | YES   | user  | Update own profile | {body}                                                                                                                               | {message: 'Profile updated'}   |
| PUT    | /user/password | YES   | user  | Reset password     | `newPassword` `repeatPassword`                                                                                                       | { message: 'Password updated } |
| PUT    | /user/:userId  | YES   | admin | Update one user    | {body}                                                                                                                               | {message: 'User updated'}      |
| DELETE | /user/:userId  | YES   | admin | Delete one user    |                                                                                                                                      | {message: 'User deleted'}      |
| DELETE | /user/me       | YES   | user  | Delete own profile |                                                                                                                                      | { message: 'Profile deleted' } |

### Pets Endpoints 🐱🐶

| METHOD | ENDPOINT        | TOKEN | ROLE  | DESCRIPTION         | POST PARAMS                                                                                        | RETURNS                                      |
| ------ | --------------- | ----- | ----- | ------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| GET    | /pets           | -     | -     | See All Pets        | `query params`                                                                                     | [{ pets }]                                   |
| GET    | /pets/:petId    | -     | -     | See one Pet Info    |                                                                                                    | { pet }                                      |
| POST   | /pets/me        | YES   | user  | Create Own pet Info | `name`, `role`, `userId`, `character`, `gender`, `size`, `info`, `location`, `{ image }`, `raceId` | { pets }                                     |
| POST   | /pets           | YES   | admin | Create one pet      | { body }                                                                                           | {user}                                       |
| PUT    | /pets/me        | YES   | user  | Update own pet Info | { body }                                                                                           | {message: 'Your Pet Info have been updated'} |
| PUT    | /pets/:petId 🐈‍⬛ | YES   | admin | Update one pet      | { body }                                                                                           | {message: 'User updated'}                    |
| DELETE | /pets/:petId 🐶 | YES   | admin | Delete one pet      |                                                                                                    | {message: 'User deleted'}                    |
| DELETE | /pets/me        | YES   | user  | Delete own pet Info |                                                                                                    | {message: 'Your Pet Info have been deleted'} |

### Comments Endpoints ☄️

| METHOD | ENDPOINT               | TOKEN | ROLE  | DESCRIPTION                 | POST PARAMS    | RETURNS                                     |
| ------ | ---------------------- | ----- | ----- | --------------------------- | -------------- | ------------------------------------------- |
| GET    | /comment ☄️            | YES   | Admin | Get all Comments            | `query params` | [{comments}]                                |
| GET    | /comment/inbox         | YES   | user  | Get own Comments (receiver) |                | [{comments}]                                |
| GET    | /comment/send          | YES   | user  | Get own Comments (author)   |                | [{comments}]                                |
| GET    | /comment/:commentId    | YES   | Admin | Get a specific Comment      |                | [{comments}]                                |
| POST   | /comment/me            | YES   | user  | Create own comment          | `comment`      | {comment}                                   |
| POST   | /comment               | YES   | Admin | Create a comment            | `comment`      | {comment}                                   |
| PUT    | /comment/me/:commentId | YES   | user  | Update own comment          |                | {message: 'Your comment have been updated'} |
| PUT    | /comment/:commentId    | YES   | Admin | Update a specific comment   |                | {message: 'The comment have been updated'}  |
| DELETE | /comment/me/:commentId | YES   | user  | Delete own comment          |                | {message: 'Comment deleted'}                |
| DELETE | /comment/:commentId    | YES   | Admin | Delete a specific comment   |                | {message: 'Comment deleted'}                |

### History Endpoints 💟

| Method | Endpoint        | Token Required | Role  | Description                          | Post Params      | Returns                                             |
| ------ | --------------- | -------------- | ----- | ------------------------------------ | ---------------- | --------------------------------------------------- |
| GET    | /histories      | YES            | Admin | Get all ratings                      | `query params`   | [{history}]                                         |
| GET    | /history/me     | YES            | User  | Get all my histories                 |                  | [{history}]                                         |
| GET    | /history/me/:Id | YES            | Admin | Get a specific own History           |                  | {history}                                           |
| GET    | /history/:Id    | YES            | Admin | Get a specific History               |                  | {history}                                           |
| POST   | /history/me     | YES            | User  | Add a new history                    | `score, comment` | {history}                                           |
| POST   | /history        | YES            | Admin | Add a new history                    | `score, comment` | {history}                                           |
| PUT    | /history/me/:id | YES            | User  | Update an existing own history by ID | `score, comment` | {message: 'The history have been updated'}{history} |
| PUT    | /history/:id    | YES            | Admin | Update an existing history by ID     | `score, comment` | {message: 'The history have been updated'}{history} |
| DELETE | /history/:id    | YES            | Admin | Delete an existing history by ID     | `score, comment` | {message: 'History deleted'}                        |
