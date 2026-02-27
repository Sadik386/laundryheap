# Laundryheap Clone (Client)

> See the root `README.md` for full setup instructions, environment guidelines, and repository overview.

A modern, responsive on-demand laundry and dry cleaning service web application built with React, Tailwind CSS, and Firebase. This project is a functional clone of the Laundryheap platform, featuring a complete booking flow and multi-gateway payment integration.

## 🚀 Features

- **Responsive UI**: A polished, mobile-friendly interface built with Tailwind CSS.
- **Service-Specific Pages**: Dedicated landing areas for Dry Cleaning, Wash & Fold, and Ironing.
- **Firebase Authentication**: Secure Google OAuth login and registration.
- **Multi-Step Booking Flow**:
  - Address/Hotel search (optimized for Bangladesh locations).
  - Flexible collection and delivery scheduling.
  - Service selection and order summary.
- **Payment Gateway Integration**: Supports multiple payment methods:
  - **SSLCommerz** (Local payment gateway)
  - **Stripe** (International credit/debit cards)
  - **PayPal**
- **User Dashboard**: Manage orders and profile settings.
- **Backend Sync**: Automatically synchronizes authenticated users with a backend database.

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **Backend Communication**: Axios
- **Authentication**: Firebase (Auth)
- **OAuth**: Google OAuth (@react-oauth/google)

## 📁 Project Structure

```text
src/
├── components/         # UI components (Navbar, Hero, MapSection, etc.)
├── context/            # AuthContext for managing global user state
├── pages/              # Page components (Booking, Dashboard, Login, etc.)
├── firebase.js         # Firebase configuration and initialization
├── App.jsx             # Main routing and application logic
└── main.jsx            # Entry point
```

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn
- A running instance of the [Laundryheap Backend](https://github.com/your-repo/backend) (Expected at `http://localhost:5000`)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd laundryheap-clone/client
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file in the root directory and add your keys:
   ```env
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_key
   VITE_API_URL=http://localhost:5000        # base URL of the backend (can be changed per environment)
   ```
   The frontend uses `VITE_API_URL` to construct API requests; if unset it falls back to `http://localhost:5000`.

4. **Firebase Setup**:
   Update `src/firebase.js` with your Firebase project configuration.

5. **Run the development server**:
   ```bash
   npm run dev
   ```

## 🔐 Firebase Configuration

Ensure your Firebase project has **Google Authentication** enabled in the Firebase Console. You will also need to whitelist `localhost:5173` (or your dev port) in the Google Cloud Console's OAuth redirect URIs.

## 💳 Payment Integration

The booking system is designed to interface with a backend API for processing payments. The frontend sends booking data to the following endpoints:
- `POST /api/bookings/init` (SSLCommerz)
- `POST /api/bookings/init-stripe` (Stripe)
- `POST /api/bookings/init-paypal` (PayPal)

## 📄 License

This project is licensed under the MIT License.
