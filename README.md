# 🎉 Party Games Hub

A lightweight, browser-based party games platform built with **HTML, CSS, and Vanilla JavaScript**. No frameworks, no build tools — just open `index.html` and play!

## At a Glance

- Single Device and Room (multiplayer) modes
- Zero build tools and no runtime dependencies
- Room mode uses Vercel serverless APIs with optional KV storage

## Getting Started

1. Open `index.html` in any modern browser
2. Choose mode from `mode-select.html`
3. Name your party (Single Device) or create/join a room (Room Mode)
4. Add participants in the lobby
5. Pick a game and have fun!

## Included Games

| Game | Description | Min Players |
| --- | --- | --- |
| **Whose Brain Is This?** | Anonymous answers + wild guessing | 3 |
| **Hot Take Roulette** | Spicy opinions, voting, and chaos | 3 |
| **This You?** | Vote on who fits the prompt best | 3 |
| **Defend the Undefendable** | One player defends a ridiculous statement | 2 |
| **Would You Rather?** | Two impossible choices, pick a side | 2 |
| **Guess the Liar** | One player lies, everyone guesses | 3 |
| **Who's Most Likely To** | Vote on who fits the scenario | 3 |
| **Temporary Personality Disorder** | Timed role assignments with tasks | 2 |
| **ID the Imposter** | One player gets a subtle prompt twist | 3 |

## Project Structure

```
/party-games-hub
├── index.html            # Home screen (party title)
├── mode-select.html      # Select Single Device or Room Mode
├── lobby.html            # Add/remove participants
├── games.html            # Games hub grid
├── /api
│   ├── create-room.js    # POST: create room code
│   ├── join-room.js      # POST: join room by code + name
│   ├── room-state.js     # GET: current room state
│   ├── update-state.js   # POST: patch room state
│   └── _storage.js       # KV/in-memory room storage
├── /games
│   ├── brain.html        # Whose Brain Is This?
│   ├── hot-take.html     # Hot Take Roulette
│   ├── this-you.html     # This You?
│   ├── defend.html       # Defend the Undefendable
│   ├── would-you-rather.html # Would You Rather?
│   ├── guess-the-liar.html   # Guess the Liar
│   ├── most-likely.html       # Who's Most Likely To
│   ├── temporary-personality-disorder.html # Temporary Personality Disorder
│   ├── one-of-you-is-fake.html # ID the Imposter
│   └── template.html     # Boilerplate for new games
├── /data
│   └── one-of-you-is-fake.json # ID the Imposter prompts
├── /css
│   ├── global.css        # Base styles
│   └── cards.css         # Game card grid styles
├── /js
│   ├── state.js          # Global app state (localStorage)
│   ├── config.js         # Games registry
│   ├── room-game-sync.js # Room mode sync helper
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

## Play Modes

### Single Device Mode
- Uses `localStorage` only
- No backend calls
- Existing gameplay flow remains unchanged

### Room Mode
- Uses backend API endpoints under `/api`
- Stores only room session in `localStorage` (`roomId`, `playerId`, `playerName`)
- Lobby polls room state every 2.5 seconds
- Room code is visible with copy-to-clipboard button

## API Endpoints

- `POST /api/create-room`
- `POST /api/join-room`
- `GET /api/room-state?roomId=AB7KQ`
- `POST /api/update-state`

## Tech Details

- **State**:
  - Single mode: `localStorage`
  - Room mode: shared state via `/api` + local room session cache
- **Styling**: CSS Grid, Flexbox, CSS custom properties (variables)
- **No dependencies**: Zero npm packages, zero build steps
- **Mobile-friendly**: Responsive design for phones and desktops

## Deploying Room Mode on Vercel

- Deploy the `party-games-hub` folder to Vercel.
- API routes work with in-memory storage by default (demo-friendly).
- Optional KV support is auto-enabled when these env vars are present:
  - `KV_REST_API_URL`
  - `KV_REST_API_TOKEN`
- Rooms automatically expire after 4 hours of inactivity.

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).
