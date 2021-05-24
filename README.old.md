# Cephalonian_Tourism

![Wireframe] (Wireframe.png)

[View Backend Repo] (https://github.com/georgekaval/Cephalonian_Tourism_Backend)

[View Site] ()

Technologies Used: React, Postgresql, Heroku, Rest Api Server, Flask.

This is a tourism site for the island of Cephalonia, Greece.  Users will be those already traveling to the island, or those wanting to see if they would like to go.

User Stories:

* User will land on a home page which gives information and photos of the island.  

* User will be able to click on an attraction from a list and will get images and information of the attraction.

* User can create a username and log in.

* When logged in, the user can add a review to an attraction.

* When logged in, the user can edit and delete their review.

Data Models:
Users: username, email, password
Attractions: name, location, image, info
Reviews: create_at, comment, user, attractions
There will be a one to many association between attractions and reviews.
There will also be a one to many association between users and reviews.

Stretch Goals:

* Google maps of each attraction

* Users that are logged in will be able to add attractions to a favorites list and they will be able to see the whole list, and of course delete attractions from it.

* Users can customize their favorites list to be like an itinerary.  So they can add the attractions to date and time slots.
