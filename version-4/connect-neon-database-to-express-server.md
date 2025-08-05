# How to connect your Neon Database to your Express server

---

## Get your Neon database's Connection String

1. Get your Neon database's Connection string. To do this, go to the Neon.tech website and open up your Neon project. You should see a 'Connect to your database' section where you can click on the Connect button.

    <img width="461" height="392" alt="Connect to the Neon database on your Neon project's dashboard" src="https://github.com/user-attachments/assets/91f9e3cd-09f3-4899-b9e1-73f3fe58506a" />
2. Once you click on the Connect button, you should see a window pop up with your database's Connection String, which contains the password/access credentials to your database. 

    <img width="1073" height="425" alt="Connect to the Neon database on your Neon project's dashboard" src="https://github.com/user-attachments/assets/d42a10f0-c414-43dc-a9ac-7ef978d424ee" />

    Make sure the Connection string starts with `postgresql://` — if it doesn't, you'll need to click on the dropdown menu to the upper left of the Connection String and make sure you have `Connection String` selected, and not something else like `psql`. 

    <img width="1075" height="427" alt="Selecting Connection String when connecting to Neon database instead of another option like psql" src="https://github.com/user-attachments/assets/fdf21a6b-c862-40ab-83bc-a0d3b949c5dc" />


5. Copy your database's Connection string by clicking on the `Copy snippet` button. This connection string contains the secret key needed to access your database. 

## Paste your database's Connection String into your server's `config.js` file
1. In the `src` folder in the `server` folder, locate the file called `config.js`. 
2. Replace the value of the `databaseUrl` property  with your Connection String. Make sure it has quotation marks around it so that it's a String:

    <img width="797" height="170" alt="Connection string as databaseUrl in the config.js file" src="https://github.com/user-attachments/assets/af6cf409-17ad-4b4e-a092-8fca0e7537ef" />
3. Now your Neon database should be connected to your Express server! 
