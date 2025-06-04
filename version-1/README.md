# Countries API Application - Version 1

## 👋 Welcome!

Your challenge is to build a website with React.js that pulls country data from the [REST Countries API](https://restcountries.com) and displays it like the [Figma designs](https://www.figma.com/design/YuEMNteoQic0h6RRiYprpV/Countries-API-Project?node-id=0-1).

## 🎯 Requirements for Version 1

In Version 1, you'll build a mobile-responsive React app that:

- Displays country data from the [REST Countries API](https://restcountries.com), or from `localData.js` file as a backup when the API is down
- Is styled according to provided [Figma designs](https://www.figma.com/design/YuEMNteoQic0h6RRiYprpV/Countries-API-Project?node-id=0-1)
- Uses `react-router` to navigate between Home, SavedCountries, and CountryDetail pages
- Deployed to a Netlify URL
- As a user, when I view the Home page, I can see all countries with API data displayed about each country
- As a user, when I view the Saved Countries page, I can submit a form with my profile information
- As a user, when I click on a CountryCard from the Home page, I will see information about that specific country

![Example of what Version 1 of Countries API Project should look like](https://github.com/user-attachments/assets/79094b58-6856-4491-8fa5-0a394f85f0b9)


## 🔗 Resources

- **Designs:** You will need to use this [Figma file](https://www.figma.com/design/YuEMNteoQic0h6RRiYprpV/Countries-API-Project?node-id=0-1) for the designs
- **Style Guide:** Refer to the `style-guide.md` file for info about the color palette, fonts, and design.
- **API:** You will use the [REST Countries API](https://restcountries.com) to get the country data and flag images

## 🚀 Roadmap: Step-by-step guide to building your project
Make sure you've finished Version 0 before moving on with the following steps.

### Project Setup: Copy your files over 
1. Copy all of the files inside of your `version-0` folder
2. Paste all of the files into your `version-1` folder
3. Push your code to Github! You will use your `version-0` code as the starting point for your `version-1`. 

### 🎯 Milestone: Create API Call to REST Countries API
1. In App.jsx, create API call that pulls countries data from the [REST Countries API](https://restcountries.com) using the `useEffect` hook
2. Pass the countries API data down as a prop from the App component as a prop into the 3 pages: Home page, Saved Countries page, and CountryDetail page
3. Display countries data from API call on the Home page, instead of displaying data from `data.json`
4. Push your code to Github!

### 🎯 Milestone: Build the SavedCountries Page
1. In SavedCountries.jsx, create the Form so that the user can submit their profile information
2. Style the Form according to the designs
3. Push your code to Github!

### 🎯 Milestone: Create the CountryDetail page
1. Create the CountryDetail page and and style it according to the Figma designs.
2. Implement [dynamic routing with React Router by following this guide](https://docs.google.com/document/d/18jxCUA0bebCyYaIHy8aaKMgOQH4w5-b-iCGDWpV4K4M/edit?tab=t.f13uxxkk1u49#heading=h.k4m41u3ojj4d). This allows you to show details about a specific country based on which country you clicked on. 
3. Push your code to Github!

### Clean and Comment your code 
1. Clean up your code by renaming confusing variables, removing unused code, and organizing your logic. Your code should read like a newspaper: clear, easy to follow, and understandable at a glance.
2. Comment your code generously — Future You will thank you. You’ll be building on top of this project over the next 3 months, so help yourself out by writing clear, helpful comments that explain what your code is doing. Trust us, it will save you time and confusion later.
3. Push your code to Github!

### Deploy project to Netlify
1. Deploy your completed project to [Netlify](https://www.netlify.com/) via your Github repo. In your Netlify Deploy settings, you will need to specify which version you want to deploy. Check out [this deployment guide to help you](https://docs.google.com/document/d/18jxCUA0bebCyYaIHy8aaKMgOQH4w5-b-iCGDWpV4K4M/edit?tab=t.jnwta4jrhylr#heading=h.scmsi7a6s9yz).

### Stretch Goals (optional — only do these if you have completed _all_ of the above steps)

Finished all the above steps? Fantastic! 

Here are a few next-level challenges to tackle:
1. 🏆 Sort the countries on the Home page in alphabetical order
2. 🏆 Create the search bar on the Home page
3. 🏆 Filter countries by region on the Home page
4. 🏆 Show Bordering countries on Country Detail page
5. 🏆 Light & Dark Mode on all pages

You can find the [designs for all of these Stretch Goals in the Figma file.](https://www.figma.com/design/YuEMNteoQic0h6RRiYprpV/Countries-API-Project?node-id=1032-2&p=f&t=63CpCVNtkWIFmrAK-0) 
