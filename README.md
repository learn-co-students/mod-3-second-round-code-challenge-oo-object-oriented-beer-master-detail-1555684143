# Module 3 JS Code Challenge

## Objectives

- DOM Manipulation
- Events and Event Handlers
- Communication with the Server
- ES6 Classes
  - You may either use classes from the beginning, or refactor to use classes near the end if you prefer. **You must demonstrate defining and instantiating a class to pass this code challenge**

## Deliverables

* As a user, when the page loads, I should see a list of beer names retrieved from an API on the left hand side of the screen.

* As a user, when I click a beer name, the application should reveal more information about that particular beer.

* As a user, when looking at the details of a beer, I can edit the current description of a beer. Clicking the 'Save' button will save any changes added to the description in the database

![beer gif](code-challenge-mod-iii-round-ii.gif)

## The API

This challenge uses a [json-server](https://github.com/typicode/json-server) to create a fake API for development and testing.

It is very easy to set-up:

1 - Run the command `npm install -g json-server` in the command line from this directory

2 - Run  `json-server --watch db.json`

That's it. You will have a server running on `localhost:3000` that serves the JSON data contained in the `db.json` file.

>  Troubleshooting: If this fails, be sure you don't already have something running on port 3000

## Outline

### Step 1 - Display All Beer Names

When the page loads, I should see a list of all of the beer names retrieved from the API on the left hand side of the screen. The API endpoint we need to retrieve all the beers is a conventional RESTful route

* **Route:** GET `http://localhost:3000/beers`

> While this deliverable only requires that you get the names on the page, here is a recommended template rendering the beer list:

```html
<ul class="list-group" id="list-group">
  <li class="list-group-item">Beer title 1</li>
  <li class="list-group-item">Beer title 2</li>
  /* etc... */
</ul>
```

### Step 2 - Display Single Beer Details

When I click a beer name, the application should reveal more information about that particular beer, including the name, image, and description of the beer

> While this deliverable only requires that you get the details on the page, here is a recommended template for the beer detail:

```html
<h1>Beer Name</h1>
<img src="<add beer img url here>">
<h3>Beer Tagline</h3>
<input type="text">Beer Description</input>
<button id="edit-beer" class="btn btn-info">
  Save
</button>
```



> Note: If you haven't used classes up to this point, do so now.



### Step 4 - Edit Beer Details

When looking at the details of a beer, a user can edit the current description of a beer. Clicking the 'Save' button will save any changes added to the description in the database. The edited beer should also update the DOM. For example, if I update the details of "Beer A" then click on another beer, when I go back to "Beer A", the description should be updated.

To update a beer you'll need to make a PATCH request
* **Route:** PATCH `http://localhost:3000/beers/:id`
* **Body:**
```js
  {description: "your new description"}
```
* **Headers:**
```js
  {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
```
