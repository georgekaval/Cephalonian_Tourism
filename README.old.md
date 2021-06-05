# Cephalonian_Tourism

![Wireframe] (Wireframe.png)

[View Backend Repo] (https://github.com/georgekaval/Cephalonian_Tourism_Backend)

[View Site] (https://tourism-frontend.herokuapp.com/)

Technologies Used: React, Postgresql, Heroku, Rest Api Server, Flask, Peewee.

User Stories:

* User will land on a home page which gives information and photos of the island.  

* User will be able to click on an attraction from a list and will get images and information of the attraction.

* User can create a username and log in.

* When logged in, the user can add a review to an attraction.

* When logged in, the user can edit and delete their review.

Data Models:
Users: username, email, password
Attractions: name, location, image, info
Reviews: review, user, attractions
There will be a one to many association between attractions and reviews.
There will also be a one to many association between users and reviews.

This is a tourism site for the island of Kefalonia, Greece.  Users will be those traveling to the island, have been to the island or those thinking of visiting.  This site is designed to be a one stop shop for all the has to do with tourism in Kefalonia.  You will be able to get the most of your vacation by seeing what are the top sites, and if they fit into your type of attraction by the info on them and the reviews from other tourists.  I used React for my frontend that made requests to my backend which I used Flask and peewee to connect to Postgresql.  In Postgresql I have three tables, one for attractions, one for reviews and one for users.  I have made relations between the users and reviews, and the reviews with the attractions.  

Stretch Goals:

* Google maps of each attraction

* Attractions will be split into different components, one for beaches, one for historical sites, one for towns.

* Users that are logged in will be able to add attractions to a favorites list and they will be able to see the whole list, and of course delete attractions from it.

* Users can customize their favorites list to be like an itinerary.  So they can add the attractions to date and time slots.
