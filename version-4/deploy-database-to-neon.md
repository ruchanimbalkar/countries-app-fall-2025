# Deploying a Database to Neon


## Introduction

Deploying your database remotely makes it accessible from anywhere on the internet, not just your computer. It ensures better reliability, security, and performance, plus it's easier to scale and collaborate with others. Remote deployment is also the standard for professional, always-online services.
 
There are many database deployment options out there, but we will use [Neon](https://neon.tech) because it's free to use, doesn't require a credit card, and is relatively easy to set up!

---

## Step 1: Create a Neon account

We will use Neon to deploy our database remotely to the web. 

- Go to [neon.tech]([neon.tech](https://neon.tech)) to create your new account using your Github credentials.

---

## Step 2: Create a Database on Neon

- First, we need to create a project on Neon that will hold our database. In the [Neon console](console.neon.tech), select "Create Project" to create a new project.
- For the Project name, write `countries-api-project`.
- For the Postgres version, choose the latest version 17.
- For the Database name, write `countries-api-db`.
- For the Cloud Service Provider, choose AWS.
- For the Region, choose the region that is closest to your current location.
  
- <img width="999" alt="image" src="https://github.com/user-attachments/assets/b03ff07b-cbe0-49d9-b4cb-8a193c1702d5" />

---

## Step 3: Create your SQL tables 

Now that you have your database, you can create your SQL tables! 

- In the left sidebar on Neon, select the SQL Editor.
  <img width="200" alt="SQL Editor on Neon" src="https://github.com/user-attachments/assets/74924f5c-715e-491d-b42c-2181286e9550" />
- In the SQL Editor, run your `CREATE TABLE` and `INSERT INTO` SQL commands from your `database-schema.sql` file to create your users, saved_countries, and country_counts tables. Make sure to insert at least 3 rows of data for each table. 
- To confirm your SQL tables were created, run `SELECT` commands to see if your new tables exist. For example, `SELECT * FROM users` should give you all 3 users as 3 rows of data in your users table. 
- Click on the "Tables" tab in the left sidebar on Neon to see the data in your tables.

                                
