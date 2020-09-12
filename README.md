# Feedr Technical Challenge

Thank you for taking the time to attempt this challenge.

These tests are used to evaluate candidates of all skill levels so please complete them to a level you feel is an accurate representation of your skill set.

Please read `README-FRONTEND.md` for further instructions.

If you have any questions or would like to clarify any details, please email lyz@feedr.co.

Good luck!

# Quick Start
Fork the repository, clone it to your local system, then:

## Install dependencies
yarn (or npm install)

## Start development server
yarn dev (or npm run dev)

## Run tests
yarn test (or npm run test)

# My plan and approach

## Initial thoughts

The following UI components will be required:

- Dietary
- MenuItem (The component that will display the name and dietaries)
- Input (for search)
- MenuOptions (for the left hand side)
- MenuPreview (for the right hand side)
- MenuSummary (to display the totals)

### MenuItem

This should be optionally set to clickable and have a way to turn on and off the (x) at the top right. I will make these functionalities active by passing handler methods - if they are set then the functionality activates.

### Input

I am inclined to reuse a generic input component which can be used here

## Data management

There are two separate data elements to consider here, I would suggest two React ContextProviders for this use case which can be dispatched to using a custom hook.

### Item data from API

This should be filterable - which can be added to the customHook and use a standard useFetch hook setup to fetch the data.


#### Client

Pros:

- Less requests
- Faster to implement with existing setup
- Less load on server

Cons: 

- Getting all of the data from the server up front (slower load times as size of data increases)
- Couldn't implement pagination on the server in future

#### Server

Pros:

- Can implement pagination on the server in future
- Can limit data up front from server (faster load times)

Cons: 

- Will take some refactoring on the server to accept a search term
- More computation on server
- More load on server

### User Menu selection data

Needs to keep a list of the selected items and also keep track of dietaries on the selected items.

For the dietaries I will require an object to act as a map for key -> value lookups (string -> number).

UserMenuProvider

This is effectively a type of shopping cart

Menu items would ideally be stored in local storage to persist between page loads.


## After thoughts

Disclaimer: I spent between 3 to 4 hours on this task as I wanted to ensure it correctly reflected the approach I outlined above.

### Testing strategy

I opted to do specific unit tests on FoodItemCard as this component needs to render the close button based on if the close function is passed to it or not so it made sense to unit test this behaviour

I have then opted for integration tests on App to check that interaction between the menu items on the left and the right sides work correctly. 

Had I had more time I would have written further tests including:

- Further tests on the dietary totals to ensure they are updating as menu items are selected and removed.

### What I would like to have done with more time:

#### Selecting menu items

I'd have liked to have made selected menu items disappear from the left hand bar if they were selected and appearing on the menu preview.

#### CSS Approach

Given more time I would have removed the Bootstrap classes and worked entirely with styled components / global style defaults

#### Data loading

As a cosmetic bonus I'd have liked to have added skeleton placeholders for data loading in the food items bar. This would have made full use of the useFetch hook loading functionality.

#### React Error boundaries

Error handling for components needs improvement as the current solution will make no attempt to rescue the UI if a component throws an error.

#### Local storage use

The user menu would ideally be stored in local storage so that the selected items would persist between refresh

#### Server

I would further modularise the server to add Expess router and make adding and changing endpoints simpler in future rather than all in one document however as this was not the focus of the task I did not make any significant changes.
