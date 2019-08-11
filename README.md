# FullStackApp

Application uses Node.JS Express Angular to create a full stack application to fetch data, display the fetched data, make API calls.



# Installation

1. Clone the Repository uing 
    https://github.com/Vishwas-93/animal-characteristic-rfcx.git

2. Cd into directory "animal-characteristic-rfcx"

3. Run "npm install" to install all the dependencies

4. Once all the dependencies/libraries are installed,
    Run "npm run start-server".
    This command will start the express server and also the Angular App is built and placed inside of the root folder to be served on the port.

5. Reach to URL "http://localhost:5000" to see the working application


# Backend

1. Middlewares: Uses CORS middleware to support cross origin resource sharing.
2. Middlewares: To serve static content
3. Middlewares: To serve index.html from the files built

# Routes

1. "/api/getAnimals": This route takes in the letters tyoes on the front end and returns matching string (Uses substring    method to compare)

2. "/api/getAttributes": This route takes in name of the animal and selected on the front end and returns the attributes if any present.


# Angular


1. Uses Component to display input boxes for both Animal and Animal Charatacteristics.

2. If the attributes exists for an animal only then the Animal Charatacteristics Component is displayed.

3. The Animal Component dropdown responds to Key Up, Key Down, Mouse hover, Click and Enter.

4. Waits 500ms to make call to the  "/api/getAnimals" API.

5. Once the Animal is selected either by clicking or by pressing Enter key, A call to the "/api/getAttributes" API is made with selected animal in the query string parameters.

