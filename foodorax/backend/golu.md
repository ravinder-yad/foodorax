# Foodorax API Documentation

**Base URL:** `http://localhost:5000/api`

## How to Test in Postman

1.  **Method**: Select `POST`
2.  **URL**: Enter `http://localhost:5000/api/auth/signup`
3.  **Body**: Select `raw` and `JSON` format.
4.  **Paste JSON**:
    ```json
    {
      "name": "Rohan",
      "email": "rohan@gmail.com",
      "password": "password123",
      "phone": "9988776655"
    }
    ```
5.  Click **Send**.

---

## All API Endpoints

### Auth
*   **Signup**: `POST http://localhost:5000/api/auth/signup`
*   **Login**: `POST http://localhost:5000/api/auth/login`
*   **Send OTP**: `POST http://localhost:5000/api/auth/send-otp`
*   **Verify OTP**: `POST http://localhost:5000/api/auth/verify-otp`

### Food
*   **Get All**: `GET http://localhost:5000/api/food/all`
*   **Search**: `GET http://localhost:5000/api/search?q=burger`
*   **Add (Admin)**: `POST http://localhost:5000/api/food/add`

### Cart
*   **Get Cart**: `GET http://localhost:5000/api/cart`
*   **Add Item**: `POST http://localhost:5000/api/cart/add`

### Order
*   **Create**: `POST http://localhost:5000/api/order/create`
*   **My Orders**: `GET http://localhost:5000/api/order/my-orders`
