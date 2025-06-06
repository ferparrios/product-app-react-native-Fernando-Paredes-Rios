This is a new [**React Native**](https://reactnative.dev) created for Exagono, using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Third Party Packages Used

> **Icons**: @react-native-vector-icons/ionicons.
  **Navigation**: @react-navigation/native.
  **ApiCall**: axios.
  **State Manager**: zustand.
 

## Step 1: Configuring Environment

First, you will need to configure your environment for running a React Native project, you can use this documentation: [`React Native Environment Configuration`](https://reactnative.dev/docs/environment-setup).

Use npm install for install your dependencies:

```sh
# Using npm
npm install
```

## Step 2: Run iOS dependencies

Run the pod dependencies with:

### On your root folder

```sh
# Using npm
npx pod-install

# OR In ios folder
cd ios && pod install
```

## Step 3: Run the project

### for iOS

```sh
npm run ios
```

### for Android

```sh
npm run android
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Developing Process for the App

### Step 1

Created the app with the packages and configurations that you gonna use, you can use [`Easy React Native CLI`](https://www.npmjs.com/package/ern-cli) for a quick installation

### Step 2

Create the navigators, screens and components that you gonna use

### Step 3

When you create the api calls, try to use a separated file where you put all the get or post calls

### Step 4

Typing is a really good practice, for a better use create a types or interfaces file where you put all these interfaces

### Step 5

Connect your app with the api and start to render all the data that comes from the server, you can manipulate these data in different ways, also you can create a store for managing the data that you prefer to use, for example in this case I created a store for the product and I can add the new products on the previously created categories.

### Step 4

After the integration is time for debugging, start deleting all the console logs, that maybe you use for know the result of a function, type all the data that you have and the interfaces for the props inside the files

### Step 5

Test the app is really important, we can test our app with the iOS emulator or Android simulator

### Optional

Add unit test and integration test is a good practice, you can add these with different packages like Jest

# Thanks

This is a test project created by [`Fernando Paredes Rios`](https://ferparedesrios.dev/), you can check all my previous projects on my website, thanks for reading.
