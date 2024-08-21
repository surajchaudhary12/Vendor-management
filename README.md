
## Vendor Management System

**# Overview**

The Vendor Management System is a NestJS application designed to streamline vendor management and purchase order handling. This README provides instructions for setup, details on utilizing the API endpoints, and specifics about the implementation.

**## Setup Instructions**

1.  **Clone the Repository**

Bash

```
git clone https://github.com/your-username/vendor-management-system.git
cd vendor-management-system

```


3.  **Install Dependencies**

Code snippet

```
npm install

```


4.  **Running the App**

Bash

```
npm run start

```


## API Endpoints

**1. Create a Purchase Order**

-   **Endpoint:** POST /purchase-orders
-   **Description:** Creates a new purchase order.
-   **Request Body:**

JSON

```
{
  "poNumber": "PO123456",
  "vendorId": 1,
  "orderDate": "2024-08-01T00:00:00Z",
  "deliveryDate": "2024-08-10T00:00:00Z",
  "items": "[{\"itemCode\":\"ITEM001\", \"itemName\":\"Item 1\", \"itemPrice\":100}]",
  "quantity": 10,
  "status": "pending",
  "issueDate": "2024-08-01T00:00:00Z",
  "acknowledgmentDate": "2024-08-02T00:00:00Z"
}

```


**2. Get Purchase Order**

-   **Endpoint:** GET /purchase-orders/:id
-   **Description:** Retrieves a purchase order by its ID.

**3. Update a Purchase Order**

-   **Endpoint:** PUT /purchase-orders/:id
-   **Description:** Updates an existing purchase order.
-   **Path Parameter:**  `id` - The ID of the purchase order.
-   **Request Body:**

JSON

```
{
  "poNumber": "PO123456",
  "vendorId": 1,
  "orderDate": "2024-08-01T00:00:00Z",
  "deliveryDate": "2024-08-15T00:00:00Z",
  "items": "[{\"itemCode\":\"ITEM001\", \"itemName\":\"Item 1\", \"itemPrice\":100}]",
  "quantity": 15,
  "status": "shipped",
  "issueDate": "2024-08-01T00:00:00Z",
  "acknowledgmentDate": "2024-08-02T00:00:00Z"
}

```


**4. Delete a Purchase Order**

-   **Endpoint:** DELETE /purchase-orders/:id
-   **Description:** Deletes a specific purchase order by ID.
-   **Path Parameter:**  `id` - The ID of the purchase order.
-   **Response:** No content (status 204).

## Running Tests

Bash

```
npm run test

```
