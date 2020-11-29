# React Task Management Dashboard

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This dashboard developed with react hooks.

[LIVE DEMO](https://react-taskmng.herokuapp.com/)

## Api
For this dashboard application I have used [JSON Server](https://github.com/typicode/json-server). and hosted API layer to heroku [Live URL](https://taskmng-api.herokuapp.com/tasks);

[db.json](https://github.com/Rahees148/todoapi/blob/main/db.json) for reference.

## Functionality

- Login (Login with any random id and name and you can add/delete/Update tasks, if you logout and login back with same ID you will be able to see the list of task you have already added.)
- CRUD operation of Tasks.
- Skeleton Loading (for the initial loading).
- Snapshot test cases.
- Css in JS [Styled Component](https://styled-components.com/);
- CICD with Circle CI.(Whenever new commit happends to any brach it will run the testcases and if you merge anything on the Master branch it will run the test cases and if its success it will automatically deploy to the heroku)


# Local setup

### `Checkout the code`

```
git clone https://github.com/Rahees148/react-dashboard.git
```

### `Install dependencies`

```
cd dashboard

npm install
```
### `Runs the app in the development mode.`

```
npm start
```
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

![alt text](https://github.com/Rahees148/todoapi/blob/main/Screenshot%202020-11-30%20at%2012.31.43%20AM.png?raw=true)

