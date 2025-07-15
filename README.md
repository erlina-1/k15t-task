# K15T Monorepo

This is a monorepo project containing three independent tasks using [npm workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces) and [Lerna](https://lerna.js.org/).

## 📁 Project Structure

- k15t/
  - task1/  (React app – responsive screen)
  - task2/  (React app – API call and data display)
  - task3/  (HTML & CSS static task)
  - package.json
  - lerna.json
  - README.md


## 📦 Prerequisites

- [Node.js](https://nodejs.org/) >= v16
- [npm](https://www.npmjs.com/) >= v7 (for workspace support)

## 🚀 Getting Started

### Install dependencies

Install all dependencies from the root directory:

npm install

### Start all projects concurrently
This command runs the start script for all three tasks in parallel:

npm run start:all


🛠 Scripts

| Script              | Description                            |
| ------------------- | -------------------------------------- |
| `npm install`       | Installs all dependencies across tasks |
| `npm run start:all` | Starts all tasks concurrently          |

🧩 Tools Used

npm workspaces — Manage multiple projects in a monorepo.
Lerna — Monorepo management tool (v8+ supports native npm workspaces).
concurrently — Run multiple npm scripts in parallel.

📘 Notes
task1 and task2 are React apps (using Create React App).
task3 is a static HTML/CSS project.
You can serve task3 with a static server - BrowserSync.

📁 Lerna Configuration (lerna.json)

{
  "version": "0.0.0",
  "useWorkspaces": true,
  "packages": [
    "task1",
    "task2",
    "task3"
  ]
}
