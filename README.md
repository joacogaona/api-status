# Status page for FactoryFour Apis

This app shows the apis status every certain amount of time configured in the constants.tsx file.

## Project structure inside /src

The App is divided into 4 main folders:

- /statusDashboard . Here we have all the logic and presentational data of the dahboard page (which is the only page at this moment). Most of the logic is inside the ApiCard component which manages the api calls.

- /config . Here we have the file constants.tsx which can be edited to change the time interval of api calls.

- /components . All reusable components go in this folder

- /api . All the api call functions definitions go in this folder

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

You can also view the project [here](https://api-status-challenge.netlify.app/)

## Configuration of Api interval

If you need to change the time interval in which the api status is refreshed:

- You can do so by changing the variable REFETCH_API_STATUS_INTERVAL_MILISECONDS value, which is located in the file constants.tsx inside folder config. (src/config/constant.tsx) (The value should be expressed in miliseconds).

In this file you can also add new api entities or delete unused ones by modifying the array in the variable API_LIST.

## Technologies chosen for the project

### [Typescript](https://www.typescriptlang.org/)

Improves the development speed and efficiency by solving or pointing at bugs during the development process.

### [React-Query](https://tanstack.com/query/v4/docs/overview)

Since the data flow comes from the server and we do not need to manipulate this data in the client side, is a good option for clean and efficient code.

### [Axios](https://axios-http.com/docs/intro)

Simplifies api calls

### [Tailwind Css](https://v1.tailwindcss.com/docs/utility-first)

Fast to style, easier to maintain than css and avoids possible problems with opinionated predesigned components.
