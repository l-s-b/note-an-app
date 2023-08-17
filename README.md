# NoteAnApp
This is NoteAnApp.

Its documentation below outlines how to set up, install, and run both the application, consisting of a backend in NestJS and a frontend in Angular.

0. Clone the repository:
```git
$ git clone https://github.com/l-s-b/note-an-app.git
```

1. Install dependencies:
```bash
$ cd note-an-app/be-nest
$ npm install
$ cd ../fe-angular
$ npm install
```

## Backend

2. Environment variables:

Create this .env file within /be-nest:
```.env
  DB_USER=
  DB_PASS=
  DB_NAME=
  DB_HOST=3306 /* MySQL's default port */
  JWT_SALT= /* any string you want, as long as it's kept secret. */
  FRONTEND_URL= /* generally http://localhost:4200 for Angular local frontends */
```
3. Database:
### Option 1 - Local

a. Run MySQL:
```bash
$ mysql -u {your_mysql_user_name} -p
```

b. Create a new database, and select it:
```mysql
CREATE DATABASE noteanapp;
USE noteanapp;
```

### Option 2 - MySQL as a service
(Reach out to luciosb100@gmail.com to get the credentials, and add them to your .env file)

### Either way
Fill the missing database name and credentials in your .env file.

4. Run the app:
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

Backend ready!

### API Endpoints
Swagger UI available at http://localhost:3000/api/docs/.
(Needs backend app to be running)

## Frontend

5. Create environment file for frontend
```bash
$ cd ../fe-angular/src
$ mkdir env
```
Once inside, create 'development.ts', with this content:
```development.ts
export interface Environment {
    production: boolean;
    apiBaseUrl: string
}
  
export const env: Environment = {
    production: false /* whenever true */
    apiBaseUrl:  /* generally 'http://localhost:3000' for NestJS backend app */
};
```

6. Run the frontend!

```bash
$ cd ..
$ npm start
```

Log in with 'test-user':'test-pass', or sign up into the app (post a user).
Do so through Swagger
(again, at http://localhost:3000/api/docs/)
or Postman
(by importing the collection located in /be-nest/src/postman-collection.json).

NoteAnApp, by <a href="https://github.com/l-s-b">l-s-b</a>