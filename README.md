# backend-stockflow-case-study
Backend engineering case study for inventory management system (StockFlow)
# StockFlow – Backend Case Study

## Overview

This project is a backend case study for an inventory management system ("StockFlow") used by companies to manage products across multiple warehouses and suppliers.

The goal was not just to build a working solution, but to demonstrate problem-solving ability, handling of incomplete requirements, and clean backend design.

---

## What I Focused On

* Identifying real-world issues in an existing API
* Designing a scalable and flexible database schema
* Handling ambiguity using clear assumptions
* Writing simple, readable, and maintainable backend logic

---

## Tech Stack

* Node.js (Express)
* MongoDB (Mongoose)

---

## Project Structure

```
src/
  ├── models/        # Mongoose schemas
  ├── controllers/   # Business logic
  ├── routes/        # API routes
  ├── app.js         # Express app setup

server.js            # Entry point
case-study/          # Written explanations for all parts
```

---

## API Endpoints

### Create Product

```
POST /api/products
```

Creates a new product and initializes inventory for a warehouse.

---

### Low Stock Alerts

```
GET /api/companies/{companyId}/alerts/low-stock
```

Returns products that are below the stock threshold and have recent activity.

---

## Key Design Decisions

* **Separated Product and Inventory**

  * A product can exist in multiple warehouses, so inventory is handled as a separate collection.

* **SKU Uniqueness**

  * Enforced at the database level to avoid duplicate products.

* **Flexible Supplier Mapping**

  * Products are linked to suppliers through a separate mapping to allow multiple suppliers.

* **Simple First Approach**

  * Prioritized readability and clarity over heavy optimization.

---

## Assumptions

Since the requirements were intentionally incomplete, I made the following assumptions:

* Low stock threshold is fixed (20 units)
* Recent activity = last 30 days
* Each product has at least one supplier
* Days until stockout is estimated (not calculated precisely)

---

## Edge Cases Considered

* Product without supplier
* No recent inventory activity
* Duplicate SKU creation
* Missing required fields in API request
* Large dataset performance (not fully optimized in current version)

---

## How to Run

1. Install dependencies:

```
npm install
```

2. Start MongoDB locally

3. Run the server:

```
npx nodemon server.js
```

Server will run on:

```
http://localhost:3000
```

---

## Notes

This solution focuses more on **approach, clarity, and reasoning** rather than building a production-ready system.

Given more time, I would:

* Optimize queries (avoid multiple DB calls)
* Add pagination and filtering
* Improve error handling and validation
* Add authentication and role-based access

---

## Author

Vansh Deshmukh
