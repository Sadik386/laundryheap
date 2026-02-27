# Laundryheap Clone

This repository contains a full-stack clone of the Laundryheap on-demand laundry service. It is structured as a simple monorepo with separate **client** and **server** folders:

```
client/          # React frontend (Vite, Tailwind, Firebase auth)
server/          # Node/Express backend (MongoDB, payment integrations)
```

Sensitive configuration values (API keys, database URIs, etc.) are never checked in; see **Environment Setup** below.

---

## 🚀 Features

- Responsive React UI styled with Tailwind CSS
- Firebase authentication with Google OAuth
- Multi-step booking flow (address lookup, schedule, service selection)
- Support for SSLCommerz, Stripe, and PayPal payments
- User dashboard and backend order persistence

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS 4
- **Backend**: Node.js, Express, MongoDB/Mongoose
- **Authentication**: Firebase Auth (Google OAuth)
- **Payments**: SSLCommerz, Stripe, PayPal
- **Deployment**: Intended for Heroku/Vercel or similar

## 📁 Repository Structure

```
├── client/             # React application
│   ├── src/            # components, pages, context
│   ├── public/         # static assets
│   ├── .env.example    # frontend env template
│   └── README.md       # client-specific docs
├── server/             # Express API
│   ├── models/         # Mongoose schemas
│   ├── .env.example    # backend env template
│   ├── server.js       # main entry point
│   └── README.md?      # (optional) notes for server
├── .gitignore          # root ignore rules
└── README.md           # this file
```

> ❗ **Note**: Each subdirectory also contains its own `.gitignore` which ignores `node_modules`, build artifacts, and local `.env` files.

## ✅ Getting Started

### Prerequisites

- Node.js v18 or later
- npm or yarn
- MongoDB (local or Atlas)
- Firebase project with Google Auth enabled

### Clone & install

```bash
git clone <repo-url>
cd laundryheap-clone
```

#### Frontend

```bash
cd client
npm install
# create .env based on .env.example
npm run dev            # start Vite dev server (default port 5173)
```

#### Backend

```bash
cd ../server
npm install
# create .env based on .env.example
node server.js         # or `npm start` if defined
```

> Make sure the `BASE_URL` and `FRONTEND_URL` values in `server/.env` match your local ports.

## 🔐 Environment Variables

The repository intentionally ignores any `.env` files. Copy and edit the example files before running the app:

```bash
cp client/.env.example client/.env
cp server/.env.example server/.env
```

Populate the variables with your own API keys and connection strings. `.gitignore` rules prevent these files (and any `serviceAccountKey*.json`) from being committed.

## 📦 Deployment

The two applications can be deployed separately (e.g. frontend to Vercel, backend to Heroku). Ensure env vars are set appropriately in your hosting environment.

## 📝 Other Documentation

Detailed frontend-specific notes live in `client/README.md`. For backend contributors, refer to comments in `server/server.js` and model files.

## 🤝 Contributing

1. Fork the repo and create a feature branch.
2. Add or update `.env.example` if new config is needed.
3. Ensure new files are added to the appropriate `.gitignore`.
4. Submit a pull request describing your changes.

## 📄 License

This project is released under the MIT License.

