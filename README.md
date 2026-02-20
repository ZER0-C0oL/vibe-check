# 🎉 Party Games Hub

A lightweight, browser-based party games platform built with **HTML, CSS, and Vanilla JavaScript**. No frameworks, no build tools — just open `index.html` and play!

## Getting Started

1. Open `index.html` in any modern browser
2. Name your party
3. Add participants in the lobby
4. Pick a game and have fun!

## Included Games

| Game | Description | Min Players |
| --- | --- | --- |
| **Whose Brain Is This?** | Anonymous answers + wild guessing | 3 |
| **Hot Take Roulette** | Spicy opinions, voting, and chaos | 3 |

## Project Structure

```
/party-games-hub
├── index.html            # Home screen (party title)
├── lobby.html            # Add/remove participants
├── games.html            # Games hub grid
├── /games
│   ├── brain.html        # Whose Brain Is This?
│   ├── hot-take.html     # Hot Take Roulette
│   └── template.html     # Boilerplate for new games
├── /css
│   ├── global.css        # Base styles
│   └── cards.css         # Game card grid styles
├── /js
│   ├── state.js          # Global app state (localStorage)
│   ├── config.js         # Games registry
│   └── utils.js          # Helper functions
└── README.md
```

## How to Add a New Game

Adding a game takes **two steps** — no other files need to change.

### Step 1: Create the Game File

Copy `games/template.html` and save it as `games/your-game.html`. The template includes:
- The shared CSS
- Back to Hub button
- Global state & utility scripts
- Access to `getParticipants()` and helper functions

### Step 2: Register the Game

Open `js/config.js` and add an entry to the `GAMES` array:

```js
{
  id: "your-game",
  title: "Your Game Name",
  description: "A short, fun description",
  file: "games/your-game.html",
  minPlayers: 2
}
```

That's it! The games hub will automatically show the new card.

## Tech Details

- **State**: All data stored in `localStorage` (party title + participants)
- **Styling**: CSS Grid, Flexbox, CSS custom properties (variables)
- **No dependencies**: Zero npm packages, zero build steps
- **Mobile-friendly**: Responsive design for phones and desktops

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).
