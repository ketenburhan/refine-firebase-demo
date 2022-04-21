# refine-firebase-demo

This project is a demo of [@ketenburhan/refine-firebase](https://github.com/ketenburhan/refine-firebase)

This project was generated with [superplate](https://github.com/pankod/superplate).

## Getting Started

Just after you create a new firebase project from [console.firebase.google.com](https://console.firebase.google.com), register a new web app.

Create a new file called `.env` at the root of your project (where `package.json` is) and copy `.env.example` file into it. Then fill the `.env` file according to your firebase config except `REACT_APP_FIREBASE_DATABASE_URL`. After that, go back to the firebase console, click `Realtime Database` at the left and create a database. Get the database-url and set the `REACT_APP_FIREBASE_DATABASE_URL` with it.
```
DATABASE URL:

DATABASE_NAME.firebaseio.com (for databases in us-central1)
DATABASE_NAME.REGION.firebasedatabase.app (for databases in all other locations)
```

Finally, run your app with `npm run dev` command.

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


### **antd**



[Go To Documentation]()


### **css**



[Go To Documentation]()


### **react-router-v6**



[Go To Documentation]()


### **custom-json-rest-data-provider**



[Go To Documentation]()


### **example-resource**



[Go To Documentation]()


### **no**



[Go To Documentation]()


### **no**



[Go To Documentation]()


### **no**



[Go To Documentation]()



## License

MIT
