# Issue
This repository contains a standard create-react-app application that was ejected in order to add the configuration necessary to support developing with InversifyJS in TypeScript.
Sadly it does not work. Even if Babel is able to correctly build the code, TSC complains:

```
Compiled with problems:

ERROR in ./src/di/entities.ts 25:108-114
export 'Weapon' (imported as 'Weapon') was not found in './interfaces' (module has no exports)

ERROR in ./src/di/entities.ts 25:142-148
export 'Weapon' (imported as 'Weapon') was not found in './interfaces' (module has no exports)

ERROR in ./src/di/entities.ts 25:157-172
export 'ThrowableWeapon' (imported as 'ThrowableWeapon') was not found in './interfaces' (module has no exports)

ERROR in ./src/di/entities.ts 25:200-215
export 'ThrowableWeapon' (imported as 'ThrowableWeapon') was not found in './interfaces' (module has no exports)
```

What it is even more fun is that if I copy the same code in the __di__ folder  and the same tsconfig and pass it to tsc, everything works, but inside cra, it fails.

The modifications done from the standard CRA settings are in the tsconfig.json 
```
"experimentalDecorators": true,
"emitDecoratorMetadata": true
```
and added "es6" in the lib section.

For Babel the changes are in the babel section of the package.json file:

```
"plugins": [
      "babel-plugin-transform-typescript-metadata",
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "@babel/plugin-proposal-class-properties",
        {
          "loose": true
        }
      ]
    ]
```
# Create React App readme
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
