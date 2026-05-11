# Global Game Scheduler 🌍🎮

A full-stack web scheduling tool that helps players across the world find the best times to play together. Enter an event, and the scheduler collects availability data across all global time zones to identify optimal meeting windows.

---

## Features

- **Multi-timezone support** — handles all global time zones by converting local availability to UTC and back
- **Heatmap visualization** — displays a 7-day × 24-hour availability grid with a white-to-blue gradient showing how many players are free at each time slot
- **Best Times mode** — highlights the top 5 time slots with the highest player availability
- **Interactive grid** — click any cell to see exactly which players are available at that time
- **Custom events** — create named events with a start time, end time, and date
- **Fast performance** — core scheduling algorithm runs in ~137ms for 193 players

---

## How It Works

1. User submits an event name, date, start time, and end time on the home page
2. The scheduler loads player availability data from `data.json`
3. Each player's local availability is converted to UTC using their timezone
4. The UTC grid is then converted back to the viewer's local time for display
5. A heatmap is rendered on a canvas showing overlapping availability
6. Toggle **Show Best Times** to highlight the best optimal slots

---

## Tech Stack

- **JavaScript** — core scheduling logic, UTC conversion, canvas rendering
- **HTML/CSS** — front-end interface and styling
- **JSON** — player availability data storage

---

## Project Structure

```
Global-Game-Scheduler/
├── index.html       # Home page — event creation form
├── index.js         # Form validation and routing
├── style.css        # Home page styles
├── graph.html       # Availability heatmap page (local time)
├── graph.css        # Heatmap page styles
├── grid.js          # Core scheduling algorithm and canvas rendering
├── graphutc.html    # Availability heatmap page (UTC view)
├── gridutc.js       # UTC version of the grid renderer
├── tools.js         # Utility functions (timezone offset, matrix builder, UnionFind)
├── test.js          # Testing utilities
└── data.json        # Player availability dataset (193 players)
```

---

## Getting Started

Since the project fetches `data.json` locally, you need to run it through a local server — opening `index.html` directly in a browser will cause a CORS error.

### Using VS Code Live Server (recommended)

1. Clone the repository:
   ```bash
   git clone https://github.com/edwinsorto05/Global-Game-Scheduler.git
   ```
2. Open the project folder in VS Code
3. Install the **Live Server** extension
4. Right-click `index.html` → **Open with Live Server**
5. The app will open at `http://127.0.0.1:5500`

---

## Authors

- **Edwin Sorto Rosales** — [@edwinsorto05](https://github.com/edwinsorto05)
- **DauryT14** — [@DauryT14](https://github.com/DauryT14) (original repository)
