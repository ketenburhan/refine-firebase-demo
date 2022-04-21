# refine-firebase-demo

This project is a demo of [@ketenburhan/refine-firebase](https://github.com/ketenburhan/refine-firebase)

This project was generated with [superplate](https://github.com/pankod/superplate).

## Getting Started

### Setup Local Environment

Just after you create a new Firebase project from [console.firebase.google.com](https://console.firebase.google.com), register a new web app.

Create a new file called `.env` at the root of your project (where `package.json` is) and copy `.env.example` file into it. Then fill the `.env` file according to your firebase config except `REACT_APP_FIREBASE_DATABASE_URL`. After that, go back to the Firebase Console, click `Realtime Database` at the left and create a database. Get the database-url and set the `REACT_APP_FIREBASE_DATABASE_URL` with it. Then run `npm i`.

### Setup Database

We will use the [refine fake rest api](https://api.fake-rest.refine.dev/)'s `posts` and `categories` parts for filling the database for a first time.

Download [/posts.json](https://api.fake-rest.refine.dev/posts) and [/categories.json](https://api.fake-rest.refine.dev/categories) files and [firebasify](https://github.com/ketenburhan/firebasify) them by running:
```sh
npx firebasify posts.json posts-new.json -r /
npx firebasify categories.json categories-new.json -r /
```
After that, add a object named `posts` in your database and import the `posts-new.json` into `posts`. Do the same things for `categories` too.

Be sure your database rules gives read and write access to your app.

### Run App

Finally, run app with `npm run dev` command.

## Available Scripts

### Running the development server.

```bash
    npm run dev
```

### Building for production.

```bash
    npm run build
```

### Running the production server.

```bash
    npm run start
```

## Learn More

To learn more about **superplate**, please check out the [Documentation](https://github.com/pankod/superplate).

## License

MIT
