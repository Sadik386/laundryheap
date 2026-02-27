---
description: Implementation plan for SSLCommerz 10% Advance Booking Integration
---

# 1. Backend Modifications (Express + MongoDB)

## 1.1 Install Dependencies
- Run `npm install sslcommerz-lts` in `server/` directory.
- Run `npm install uuid` for generating unique transaction IDs.

## 1.2 Update Environment Variables
- Add SSLCommerz Sandbox credentials to `.env`:
  - `STORE_ID=testbox`
  - `STORE_PASSWORD=qwerty`
  - `IS_LIVE=false`

## 1.3 Update Data Model (`models/Booking.js`)
- Add new fields:
  - `totalAmount`: Number (Total booking cost)
  - `paidAmount`: Number (Amount paid upfront)
  - `transactionId`: String
  - `paymentStatus`: String (Pending, Paid, Failed)
  - `currency`: String (default 'BDT')

## 1.4 Create Payment Utility/Config
- Setup `sslcommerz` configuration in a utility file or directly in `server.js`.

## 1.5 Implement Routes
- `POST /api/bookings/init`:
  - Calculate `totalPrice` based on service type (mock logic for now).
  - Calculate 10% advance.
  - Create a temporary or "Pending" booking record.
  - Initialize SSLCommerz session.
  - Return the Gateway URL to frontend.
- `POST /api/payment/success/:tranId`:
  - Verify payment (optional but recommended for security).
  - Update Booking status to `Confirmed`.
  - Update `paymentStatus` to `Paid`.
  - Redirect user to Frontend Success Page.
- `POST /api/payment/fail/:tranId`:
  - Update Booking status to `Failed`.
  - Redirect user to Frontend Fail Page.

# 2. Frontend Modifications (React)

## 2.1 Update `Booking.jsx`
- Calculate estimated price on frontend (for display).
- Show "Total Price" and "Pay Now (10%)" breakdown.
- Update `handleSubmit` to call `/api/bookings/init` instead of direct creation.
- Redirect user to the returned Gateway URL.

## 2.2 Create Result Pages
- `src/pages/PaymentSuccess.jsx`: Show success message and booking details.
- `src/pages/PaymentFail.jsx`: Show failure message and "Try Again" button.

## 2.3 Update Router (`App.jsx`)
- Add routes:
  - `/payment/success`
  - `/payment/fail`

# 3. Validation
- Test full flow:
  1. User fills booking form.
  2. Hits "Pay 10% Advance".
  3. Redirects to SSLCommerz Sandbox.
  4. Completes payment (Success).
  5. Redirects back to `/payment/success`.
  6. Verify booking in Dashboard.
