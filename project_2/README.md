Project 2!!!!


Project Schedule


Day	Deliverable	Status


Day 1	Project Description √

Day 2	Wireframes / Priority Matrix / Functional Components √

Day 3	Core Application Structure (HTML, CSS, etc.) Done √

Day 4	Pseudocode / actual code  almost....

Day 5	Initial Clickable Model  Done √

Day 6	MVP

Day 7 Post MVP/Additional stylings

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

Style each Component

Link images to cocktail when rendered

Add CSS animations to the click events and in the DOM

When cocktail ingredients are rendered have a link to actual bars where you can get the drink




React Architectural Design

https://drive.google.com/open?id=1-jOvGAOUaqQ_qdks2VB9sr7IKixEQbBb



Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.


Component	Description
Header	This will render the header include the nav
Footer	This will render the header include the nav



Component	Priority	Estimated Time	Actual Time

Render 3 Components	 H	8.5hrs	- 4hrs √

Working with API	H	8hrs - 3 hrs	√

Render Data List  H    8.5hrs  - 4hrs

Style    H     7hrs

Return Homepage/Refresh Data   H  6hrs

Total	H	40hrs   


Additional Libraries




Code snippet
    
         <form>
        <input type='text' placeholder='Enter Cocktail' value={this.state.cocktailName} onChange={this.handleChange}/>

        <button type='submit' onClick={this.submitFn}><Link to={`/CocktailList/${this.state.cocktailName}`}>Cocktails List</Link></button>
      </form>


Change Log

May be changing how the date is rendered in the UI so the flow makes more sense. My initial plan seems clunky and not particularly great UI flow.


Possible changing for UI flow
https://drive.google.com/open?id=1-ymuUKxo2lQAcwHTeouOQeXsA2L3zXRf





Issues and Resolutions


So I am having an issue with how the data is stored in the api. I need to be able to grab up to 15 individual props that are stored as objects with most of the values being "" or null. 

