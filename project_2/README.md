Project 2!!!!


Project Schedule


Day	Deliverable	Status


Day 1	Project Description Done √

Day 2	Wireframes / Priority Matrix / Functional Components Done √

Day 3	Core Application Structure (HTML, CSS, etc.) Done √

Day 4	Pseudocode / actual code  Done √

Day 5	Initial Clickable Model  Done √

Day 6	MVP Done √

Day 7 Post MVP/Additional stylings Done √

Day 8	Present

Project Description

Be Your Own Bartender App!

In today's current nightmarish sociopolitical climate who doesn't need a drink! 

Have you always wanted to know how to craft your own cocktails?! Well now you can. The Be Your Own Bartender App will help you indentify the ingredients in those classic cocktails. It will also allow you to search new cocktail ideas by whatever ingredient you feel like having.

So drink up! You can now have all the booze data you'll need at your fingertips!

API 

https://www.thecocktaildb.com/api.php

Wireframe

https://drive.google.com/open?id=1-FPffg7PlHoQVDHyCef6rld5DcPnqBg7

Priority Matrix

https://drive.google.com/open?id=1-dqbcePgL_uJm5qbShza_f0KdyBBGXmY

Inspiration

https://thedrinkblog.com/

https://tipsybartender.com/



MVP
Find and use external api √

Render data on page in a list √

Create 3 functional Components that Render √

Return to Homepage/Refresh Data √




PostMVP

Style each Component Done √

Link images to cocktail when rendered Done √

Add CSS animations to the click events and in the DOM

When cocktail ingredients are rendered have a link to actual bars where you can get the drink - hahahaha not this time




React Architectural Design

https://drive.google.com/open?id=1-jOvGAOUaqQ_qdks2VB9sr7IKixEQbBb



Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.


Component	Description

App.js - will store Component Links and route paths

Homepage - Will act as the landing page and first search query for data on Cocktails and Alcohol 

Cocktails - Have an input and submit field to direct data flow to be rendered in the virtual DOM from api call

CocktailList - Data info on cocktail name, making of cocktail, and cocktail ingredients along with instructions for the mixing of cocktail

Ingredients - Will have an input and submit button to make api call to list cocktails by alcohol name

IngredientList - Rendering of cocktails by alcohol and ingredient name from api to be rendered with photos

Glossary - A component with helpful cocktail, alcohol, and bar related terms and definitions



Component	Priority	Estimated Time	Actual Time

Render 3 Components	 H	8.5hrs	- 4hrs √

Working with API	H	8hrs - 3 hrs	√

Render Data List  H    8.5hrs  - 4hrs √

Style    H     7hrs √

Return Homepage/Refresh Data   H  6hrs √

Total	H	40hrs   √


Additional Libraries




Code snippet
    
         <div>
        <input type='text' placeholder='Enter Cocktail' value={this.state.cocktailName} onChange={this.handleChange}/>

        <button type='submit' onClick={this.submitFn}><Link to={`/CocktailList/${this.state.cocktailName}`}>Cocktails List</Link></button>
      <div>


Change Log

May be changing how the date is rendered in the UI so the flow makes more sense. My initial plan seems clunky and not particularly great UI flow.


Possible changing for UI flow
https://drive.google.com/open?id=1-ymuUKxo2lQAcwHTeouOQeXsA2L3zXRf

I was able to keep the components in the parent/child relationship I had initially wanted.

But because of this I added a glossaay component to render separately to help with the sibling link issue. 

I need to add a back button to make the user flow more efficient.






Issues and Resolutions


So I am having an issue with how the data is stored in the api. I need to be able to grab up to 15 individual props that are stored as objects with most of the values being "" or null. 

New problem. One typo took me down a new path. I had not set any conditional rendering for if someone put something in the input field that wasn't in the data.

So I had to use a ternary operator to stop the input from crashing the browser. 

New problem. By clicking on the submit button without anything in the input field the browser crashed again. 

Fixed this by adding a CSS pointer event class of disabled and using a variable 'disabled' in the onClick to stop the crashing and redirect to a new rendering of 'ingredients not found'.

I need to eventually create links in the ingredientList to redirect to thes cocktailList list.

