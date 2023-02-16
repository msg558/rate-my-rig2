# Rate-My-Rig
A simple demonstration app that I have used to incorporate skills that I have obtained while learning React with Typescript. 

* Rate-My-Rig is now hosted on http://matt-gips-myapp3.herokuapp.com/rigs/App !!!

(2/16/2023) Added Button below map that opens a modal with a larger version of the map. Added animation to highlight the selected rig on the leaderboard. 

(2/14/2023) Added buttons to allow user to add a new rig or delete the current rig (currently only supports path=1 through 10, may accept external URL in the future). Leaderboard now scrolls if there's overflow. Selected rig will appear highlighted on the map. 

(2/9/2023) Added a Mapbox GL map below the leaderboard that shows geographic location of rigs. Hovering over the marker will show the photo and clicking will update the photo component to the clicked rig. 

** Now supports multiple clients. All instances of this app will connect to the same remote API that serves the latest data and allows for new likes to be added to the database. Each client automatically connects to this API and updates the Likes state based on the API response every 5 seconds. 

The user can select like or dislike on a photo of a rig and the result will be stored and the leaderboard automatically updated, and then a new photo will be displayed. Additionally, the user can click on an icon in the leaderboard to swap the main display to that photo.

![alt text](https://github.com/msg558/rate-my-rig2/blob/main/public/Photos/RMR.png?raw=true)

Tracking concepts and skills that are utilized:
* Redux store for holding global state data
* Redux saga for handling API requests
* useEffect for initial data fetch and fetch setInterval for auto-updates
* Ruby-on-Rails app to act as API hosted on heroku: http://matt-gips-myapp3.herokuapp.com/rigs returns JSON of postgres table
* useState
* useContext for lifting state
* .map() for rendering multiple elements
* conditionally ordering grid elements
* sorting algorithm based on number of likes
* styling for viewport scaling
* onClick handling
