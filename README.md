# A Minesweeper game written in React

## How to play

Click on the tiles and try not to get exploded.

### Controls

#### Buttons

* Left click - reveal a tile
* Shift + left click (unflagged tile) - flag a tile
* Shift + left click (flagged tile) - unflag a tile

#### Options

Press the Options button at the top to view the options bar.
The bar allows to:

1. Activate Superman Mode™ that shows the location of mines on the board.
2. Restart the game with the current or new row, column and mine inputs (supports a board of up to 300x300).

### Rules

Click on tiles to reveal them.
Flag all mines to win, click on a mine to lose and be exploded back to the start.

## Start in development mode

1. Clone the repo
2. `npm i`
3. `npm start`

## Run the tests

This project includes unit tests for the helper methods, some basic integration tests for the rendering of
components and end to end tests written in incredible Cypress.

### Unit and integration tests

run `npm test`.

### End to end tests

1. `npm start` (note - the tests expect the app to run on localhost:3000)
2. `npm run cypress:open`
3. click on "Run all specs".

## Technical challenges

The app should be responsive and work somewhat well on mobile devices as well.
Supporting a 100x100+ board that looks remotely decent in a SPA on the browser proved to be problematic as even the initial rendering
of  the board could take ages.
Using `React.memo` introduced more problems that performance improvements so I used `react-window` to solve it when it comes to bigger boards.
The app seems to perform well with any given size with the use of virtual scrolling, although UX is not ideal.