# 📘 API Documentation

Base URL: `https://countries-app-fall-2025-version-4.onrender.com`

## Overview

| Resource          | Method | Endpoint                  | Description                                           |
| ----------------- | ------ | ------------------------- | ----------------------------------------------------- |
| `users`           | GET    | /get-newest-user          | Retrieves the most recently added user.               |
| `users`           | GET    | /get-all-users            | Retrieves all users from the database.                |
| `users`           | POST   | /add-one-user             | Adds a new user to the database.                      |
| `country_counts`  | POST   | /update-one-country-count | Updates (or initializes) the view count of a country. |
| `saved_countries` | GET    | /get-all-saved-countries  | Retrieves a list of all saved countries.              |
| `saved_countries` | POST   | /save-one-country         | Saves a country if it hasn’t already been saved.      |
| `saved_countries` | POST   | /unsave-one-country       | Unsaves a country if it has been saved.               |

## Users

---

### 🔹 GET `/get-newest-user`

**Description:** Retrieves the most recently added user.

**Example Request URL:**

`GET https://countries-app-fall-2025-version-4.onrender.com/get-newest-user`

**Example Response:**

```json
[
  {
    "user_id": 6,
    "name": "Popoye",
    "country_name": "Brazil",
    "email": "psailor@gmail.com",
    "bio": "Spinach is yummy!!!"
  }
]
```

---

### 🔹 GET `/get-all-users`

**Description:** Retrieves all users in the system ordered by `user_id`.

**Example Request URL:**

`GET https://countries-app-fall-2025-version-4.onrender.com/get-all-users`

**Example Response:**

```json
[
  {
    "user_id": 1,
    "name": "Harry Potter",
    "country_name": "England",
    "email": "hpotter@gmail.com",
    "bio": "Expelliarmus"
  },
  {
    "user_id": 2,
    "name": "Super Mario",
    "country_name": "Italy",
    "email": "smario@yahoo.iy",
    "bio": "Mama Mia"
  },
  {
    "user_id": 3,
    "name": "Tin Tin",
    "country_name": "France",
    "email": "tintin@refiff.co",
    "bio": "Snowy"
  },
  {
    "user_id": 4,
    "name": "Alice",
    "country_name": "Germany",
    "email": "alice@example.com",
    "bio": "A little about Alice"
  },
  {
    "user_id": 5,
    "name": "Rucha",
    "country_name": "India",
    "email": "rn@gmail.com",
    "bio": "Hello"
  },
  {
    "user_id": 6,
    "name": "Popoye",
    "country_name": "Brazil",
    "email": "psailor@gmail.com",
    "bio": "Spinach is yummy!!!"
  }
]
```

---

### 🔹 POST `/add-one-user`

**Description:** Adds a new user.

**Example Request URL:**

`POST https://countries-app-fall-2025-version-4.onrender.com/add-one-user`

**Example Request Body:**

```json
{
  "name": "Barbie",
  "country_name": "Barbie Land",
  "email": "barbie@mattel.com",
  "bio": "Barbie and Ken are in love."
}
```

**Example Response:**

```
Status Code  : 200 | Success, user was added
```

---

## Country Counts

---

### 🔹 POST `/update-one-country-count`

**Description:** Increments the view count of a given country. If it doesn't exist, initializes it with count 1. Returns a response with the updated country's count.

**Example Request URL:**

`POST https://countries-app-fall-2025-version-4.onrender.com/update-one-country-count`

**Example Request Body:**

```json
{
  "country_name": "France"
}
```

**Example Response:**

```json
{
  "count": 2
}
```

---

## Saved Countries

---

### 🔹 GET `/get-all-saved-countries`

**Description:** Retrieves all saved country names.

**Example Request URL:**

`GET https://countries-app-fall-2025-version-4.onrender.com/get-all-saved-countries`

**Example Response:**

```json
[
  {
    "country_name": "Algeria"
  },
  {
    "country_name": "Belgium"
  },
  {
    "country_name": "Zimbabwe"
  },
  {
    "country_name": "Japan"
  },
  {
    "country_name": "Nepal"
  },
  {
    "country_name": "Thailand"
  }
]
```

---

### 🔹 POST `/save-one-country`

**Description:** Saves a country name if it hasn’t already been saved.

**Example Request URL:**

`POST https://countries-app-fall-2025-version-4.onrender.com/save-one-country`

**Example Request Body:**

```
{
    "country_name": "Belgium"
}
```

**Example Response:**

```
Status Code : 200 | Success! The country is saved.
```

---

### 🔹 POST `/unsave-one-country`

**Description:** Unsaves a country name if it has been saved.

**Example Request URL:**

`POST https://countries-app-fall-2025-version-4.onrender.com/unsave-one-country`

**Example Request Body:**

```
{
    "country_name": "Zimbabwe"
}
```

**Example Response:**

```
Status Code : 200 | Success! The country is unsaved.
```
