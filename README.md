# When You Move Technical Exercise

## We are looking to determine how you approach creating a coded solution from scratch. Please treat this as if you are creating production ready code. We expect this to reflect how you would deliver to a client, so take that into account when creating your solution.

The aim of this short exercise is to simulate a fruit machine game in React. A fruit machine consists of three wheels, each wheel containing four colours

- Red
- Blue
- Green
- Yellow

The player spins the wheels by clicking on a button labelled "PLAY". On playing the game, each wheel should use a random number to decide which colour to land on and the results of the three wheels should be displayed to the user. If all three wheels land on the same colour a message should be displayed declaring that you have won the game.

# Setup

1. Clone the repo
2. npm install
3. npm run start

Once complete, make a pull request from your fork to allow us to review your solution.


# About my solution

## Stack

- `styled-components` for styling/css
- `redux` for state management
- `redux-saga` for side effect management

## Code Quality

- `prettier` for code formatting
- `eslint` for linting
- `flow` for static types

## Testing

- snapshot testing via `enzyme` & `enzyme-to-json` (for making snapshots human readable)

File                         |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------------------------|----------|----------|----------|----------|-------------------|
All files                    |    76.47 |    76.67 |    90.63 |    76.27 |                   |
 src                         |    42.86 |      100 |       50 |    42.86 |                   |
  App.js                     |       80 |      100 |       50 |       80 |                53 |
  index.js                   |        0 |      100 |      100 |        0 |    1,2,3,5,7,8,10 |
  setupTests.js              |      100 |      100 |      100 |      100 |                   |
 src/actions                 |      100 |      100 |      100 |      100 |                   |
  fruitMachine.js            |      100 |      100 |      100 |      100 |                   |
  index.js                   |      100 |      100 |      100 |      100 |                   |
 src/components/FruitMachine |      100 |      100 |      100 |      100 |                   |
  FruitMachine.js            |      100 |      100 |      100 |      100 |                   |
  index.js                   |      100 |      100 |      100 |      100 |                   |
 src/components/Heading      |      100 |      100 |      100 |      100 |                   |
  Heading.js                 |      100 |      100 |      100 |      100 |                   |
  index.js                   |      100 |      100 |      100 |      100 |                   |
 src/components/Lever        |      100 |       50 |      100 |      100 |                   |
  Lever.js                   |      100 |       50 |      100 |      100 |             36,45 |
  index.js                   |      100 |      100 |      100 |      100 |                   |
 src/components/PageLayout   |      100 |      100 |      100 |      100 |                   |
  PageLayout.js              |      100 |      100 |      100 |      100 |                   |
  index.js                   |      100 |      100 |      100 |      100 |                   |
 src/components/SpinResult   |    92.86 |    83.33 |      100 |    92.86 |                   |
  SpinResult.js              |    92.86 |    83.33 |      100 |    92.86 |                34 |
  index.js                   |      100 |      100 |      100 |      100 |                   |
 src/components/Wheel        |    92.31 |       75 |      100 |    92.31 |                   |
  Wheel.js                   |    92.31 |       75 |      100 |    92.31 |                40 |
  index.js                   |      100 |      100 |      100 |      100 |                   |
 src/components/WheelFace    |      100 |      100 |      100 |      100 |                   |
  WheelFace.js               |      100 |      100 |      100 |      100 |                   |
  index.js                   |      100 |      100 |      100 |      100 |                   |
 src/config                  |    42.86 |        0 |      100 |    42.86 |                   |
  constants.js               |      100 |      100 |      100 |      100 |                   |
  store.js                   |        0 |        0 |      100 |        0 |2,3,5,6,8,10,11,16 |
 src/reducers                |    81.82 |      100 |      100 |    81.82 |                   |
  fruitMachine.js            |      100 |      100 |      100 |      100 |                   |
  index.js                   |        0 |      100 |      100 |        0 |               2,3 |
 src/sagas                   |    52.94 |       75 |       60 |    52.94 |                   |
  fruitMachine.js            |    64.29 |       75 |       75 |    64.29 |    39,43,45,50,51 |
  index.js                   |        0 |      100 |        0 |        0 |             2,4,7 |
 src/utils                   |      100 |      100 |      100 |      100 |                   |
  index.js                   |      100 |      100 |      100 |      100 |                   |
