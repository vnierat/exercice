# React test front

To have optimal conditions, it's recommended to use [visual studio code](https://code.visualstudio.com/) with the [live share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) extension already installed

![Image 1](/docs/liveshare.PNG?raw=true)

## Fetch apis :

You will need to use these api for this exercise : https://jsonplaceholder.typicode.com/

---

## Before starting

- Fork the repos
- Clone the repos on your desktop
- Install all the dependencies
- Build it / run dev command to be sure everything is ok before starting the test.

## Step 1

Follow this design

- Use [react-bootstrap button](https://react-bootstrap.github.io/components/buttons/) for the head button
- Use [react-bootstrap grid](https://react-bootstrap.github.io/layout/grid/) to create a grid with 3 col
- Use [react-bootstrap ListGroup](https://react-bootstrap.github.io/components/listgroup/) to create a placeholder

[![Image 1](/docs/screen_step_1.PNG?raw=true)](/docs/screen_step_1.PNG?raw=true)

---

## Step 2

- On click on the button, load the [users api](https://jsonplaceholder.typicode.com/users) and the [albums api](https://jsonplaceholder.typicode.com/albums)
- Once the data loaded, change the button state
- Use [react-bootstrap ListGroup](https://react-bootstrap.github.io/components/listgroup/) to create a component for displaying the users data
  - For each user, list their albums
  - add "see" button

[![Image 2](/docs/screen_step_2.PNG?raw=true)](/docs/screen_step_2.PNG?raw=true)

---

## Step 3

- On click on an album button, load the first photo using [photos api](https://jsonplaceholder.typicode.com/albums/1/photos)
  - Create Photo interface
- Use [react-bootstrap Modal](https://react-bootstrap.github.io/modal)
- In the modal
  - display the picture,
  - the photo title
  - album title

[![Image 3](/docs/screen_step_3.PNG?raw=true)](/docs/screen_step_3.PNG?raw=true)

## Bonus step

- Write tests !

## Once you've done

Send us the link of your forked repos

Good luck !

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
