# Rock, Paper, Scissors Challenge

logic:

- Scissors beats Paper
- Paper beats Rock
- Rock beats Lizard
- Lizard beats Spock
- Spock beats Scissors
- Scissors beats Lizard
- Lizard beats Paper
- Paper beats Spock
- Spock beats Rock
- Rock beats Scissors

BDD Acceptance Criteria

```
AS A Player
WHEN I click a gesture from tthe game logic
THEN a round is played against the computer
AND the gesture the computer picks is not the same as mine
AND I see a message telling me who won (the player or the computer)
```

```
AS A Player
WHEN I click a gesture from the game logic
THEN a round is played against the computer
AND the gesture the computer picks is the same as mine
AND I see a message telling me that the game was a draw
```

```
AS A Player
HAVING played a game
WHEN I refresh the page
THEN the game is reset and can see the gesture buttons
AND I can play another game
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

for running test:

```bash
npm run test
# or
yarn test
```
