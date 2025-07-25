# 📘 API Documentation

Base URL: `https://backend-answer-keys.onrender.com`


## Overview

| Resource         | Method | Endpoint                   | Description                                           |
|------------------|--------|----------------------------|-------------------------------------------------------|
| `users`          | GET    | /get-newest-user           | Retrieves the most recently added user.              |
| `users`          | GET    | /get-all-users             | Retrieves all users from the database.               |
| `users`          | POST   | /add-one-user              | Adds a new user to the database.                     |
| `country_counts` | POST   | /update-one-country-count | Updates (or initializes) the view count of a country.|
| `saved_countries`| GET    | /get-all-saved-countries   | Retrieves a list of all saved countries.             |
| `saved_countries`| POST   | /save-one-country          | Saves a country if it hasn’t already been saved.     |
| `saved_countries`| POST   | /unsave-one-country          | Unsaves a country if it has been saved.     |


## Users

---

### 🔹 GET `/get-newest-user`

**Description:** Retrieves the most recently added user.

**Example Request URL:**

`GET https://backend-answer-keys.onrender.com/get-newest-user`

**Example Response:**

```json
[
  {
    "user_id": 42,
    "name": "John Smith",
    "country_name": "Canada",
    "email": "john@example.com",
    "bio": "Another bio"
  }
]
```

---

### 🔹 GET `/get-all-users`

**Description:** Retrieves all users in the system ordered by `user_id`.

**Example Request URL:**

`GET https://backend-answer-keys.onrender.com/get-all-users`

**Example Response:**

```json
[
  {
    "user_id": 1,
    "name": "Jane Doe",
    "country_name": "USA",
    "email": "jane@example.com",
    "bio": "Short bio here"
  },
  {
    "user_id": 2,
    "name": "Paul Smith",
    "country_name": "Australia",
    "email": "paul@example.com",
    "bio": "Short bio here"
  },
]
```

---

### 🔹 POST `/add-one-user`

**Description:** Adds a new user.

**Example Request URL:**

`POST https://backend-answer-keys.onrender.com/add-one-user`

**Example Request Body:**

```json
{
  "name": "Alice",
  "country_name": "Germany",
  "email": "alice@example.com",
  "bio": "A little about Alice"
}
```

**Example Response:**

```
Success! User has been added.
```

---

## Country Counts

---

### 🔹 POST `/update-one-country-count`

**Description:** Increments the view count of a given country. If it doesn't exist, initializes it with count 1. Returns a response with the updated country's count. 

**Example Request URL:**

`POST https://backend-answer-keys.onrender.com/update-one-country-count`

**Example Request Body:**

```json
{
  "country_name": "France"
}
```

**Example Response:**

```json
{
  "newCount": 3
}
```

---

## Saved Countries

---

### 🔹 GET `/get-all-saved-countries`

**Description:** Retrieves all saved country names.

**Example Request URL:**

`GET https://backend-answer-keys.onrender.com/get-all-saved-countries`

**Example Response:**

```json
[
  {
    "country_name": "Japan"
  },
  {
    "country_name": "Germany"
  }
]
```

---

### 🔹 POST `/save-one-country`

**Description:** Saves a country name if it hasn’t already been saved.

**Example Request URL:**

`POST https://backend-answer-keys.onrender.com/save-one-country`

**Example Request Body:**

```
{
  "country_name": "Brazil"
}
```

**Example Response:**

```
Success! The country is saved.
```

---

### 🔹 POST `/unsave-one-country`

**Description:** Unsaves a country name if it has been saved. 

**Example Request URL:**

`POST https://backend-answer-keys.onrender.com/unsave-one-country`

**Example Request Body:**

```
{
  "country_name": "Brazil"
}
```

**Example Response:**

```
Success! The country is unsaved.
```

