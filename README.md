# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Github Repo](https://your-solution-url.com)
- Live Site URL: [Github Pages Site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I liked this piece of code I used for the fetch request of the API.

```js
	async function getAdvise() {
		let response

		try {
			response = await fetch(API_URL)
		} catch (error) {
			console.error('There was an error', error)
		}
		if (response?.ok) {
			const json = await response.json()
			setData(json.slip)
		} else {
			console.error(`HTTP Response Code: ${response?.status}`)
		}
	}
```

### Continued development

- React
- Nextjs
- Vue
- Svelte
- Semantic HTML
- CSS
- SCSS

### Useful resources

- [LogRocket - How to deploy a React app to Github Pages](https://blog.logrocket.com/deploying-react-apps-github-pages/) - This helped me to understand how to deploy this code to Github Pages.

## Author

- Github - [Github](https://github.com/NathanMartinez)
- Frontend Mentor - [@NathanMartinez](https://www.frontendmentor.io/profile/NathanMartinez)
