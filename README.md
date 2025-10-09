# Shoptimize

Shoptimize is a React and Redux web app that helps time-strapped shoppers build a grocery list, pick a store layout, and walk the most efficient in-store route from entrance to checkout. The interface guides people who have never seen the code by combining a friendly list builder with a visual floor map that highlights the aisles they need to visit.

## Key Features

- **Guided grocery list builder.** Search lets you add products either by typing individual items or browsing by category, with rich imagery that makes the catalogue easy to scan. Every selection is saved in local component state and mirrored in Redux so the list can be used across pages.
- **Store and location awareness.** After choosing a retailer, you can drill down into specific branches; each location bundles a predefined floor layout and aisle-to-category mapping so route planning matches the real-world store you picked.
- **Smart in-store routing.** The canvas renderer builds a grid-based map, loads the chosen store blueprint, and uses a Dijkstra shortest-path implementation to connect the entrance, every aisle that stocks your list, and the exit in an efficient sequence.
- **Step-by-step directions and visualization.** Once the path is generated, the floor map animates the optimal trail, labels each stop with tooltips, and presents a textual checklist that shoppers can follow on their phones.
- **Polished landing experience.** The home page introduces the app’s value proposition with Material-UI sections, a call-to-action button that opens the search workflow, and a team showcase for quick orientation.

## Project Structure at a Glance

- `src/components/pages` holds the main screens (home, search, and store layout) that visitors interact with.
- `src/components/layouts` contains the canvas renderer, layout utilities, and prebuilt store blueprints.
- `src/algorithms` packages the weighted graph, priority queue, and Dijkstra algorithm used for route optimization.
- `src/redux` stores shared application state, keeping the grocery list, selected map, and generated directions in sync across the UI.

## Getting Started

### Prerequisites

- Node.js and npm (or Yarn) installed locally.

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
   The app runs on <http://localhost:3000> by default and hot-reloads as you edit files.

### Useful Scripts

- `npm test` – runs the Create React App test suite.
- `npm run build` – creates an optimized production build inside the `build/` directory.

## Working with Store Layouts

Store layouts live in `src/components/layouts/GenerateLayout.js`. Each layout defines aisle rectangles keyed by grid coordinates along with human-readable names. You can add new stores by extending the `stores` array in `Search.js` with a new entry that points to a matching layout definition and category-to-aisle lookup.

## Project Assets

- `images/demo.gif` provides a quick animated walkthrough you can embed in documentation or demos.
- The `components/home-components` directory contains reusable Material-UI sections that power the landing page aesthetics.

## Related Resources

- Backend service (for features such as authentication or persistence): <https://github.com/Garricktgh/shoptimize-server>

With these notes, you can clone the repository, run it locally, and understand how the search, mapping, and routing pieces fit together without diving into every source file.
