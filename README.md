# Messaging app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps to run

Install all packages by running: `yarn install`

To start the project, run: `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Explanation of features

### 1. Add new recepients

- By adding text in the sidebar input field and pressing Enter, user is able to add multiple friends.
- User is not able to add empty friends (i.e. just clicking enter without adding any text in the input field).
- Friends are not persisted, so on refresh they will disappear.

### 2. Set active recepient

- When the user has added friend(s), he needs to click on a friend to make it the currently active one, which will be shown by style changes of said friend element.
- The user can switch between multiple friend, but the message can only be sent to one (currently active) friend.

### 3. Send message to active recepient

- When a user has selected a friend, he is able to add text to message input field and send it by pressing Enter. If not friend is selected, the message input will be disabled.
- Every message is stored in the state, so the user can switch through friends and see all the messages written to them.
- If the user sends enough messages to get to the bottom of the chat window, on every new message the window will scroll to the most recent one, i.e. the one on bottom.
- Messages are not persisted, so on refresh they will disappear.


#### NOTE: Styling is not optimized for mobile.