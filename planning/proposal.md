# Project Overview

## Project Links

- [Front-End](https://github.com/thePumaLovers/project-planning-client)
- [Back-End](https://github.com/thePumaLovers/project-planning-api)

- [Front-End Deployed (Nonfunctioning)]()
- [Back-End Deployed (Nonfunctioning)]()


## Project Schedule
| Day | Deliverable | Status |
| ------ | :------: | :------------: |
| 1 | Project Worksheet approved |      Incomplete      |
| 1 | Create basic back end (connection, models, controllers) | Incomplete |
| 2           |    Create basic front end (routing pages, placeholder text)   |      Incomplete     |
| 2            |    Minimal styling and responsive design     |      Incomplete      |
| 3            |    Main CRUD form on front end     |      Incomplete      |
| 3            |    Deploy back end, meet MVP     |      Incomplete      |
| 4            |    User Authentication, animation, accessibility     |      Incomplete      |
| 5           |    Present     |      Incomplete      |


## Project Description

Our app will be used for keeping track of a user's projects. The goal of the data structure is to let our app fit the mold of many different projects. While user authentication will be a post-mvp, we want users to have a place to store their ideas.


## User-Story

Our user is someone who is interested in planning projects. They are looking for a smooth, easy way to view, create, edit, and delete their projects in one place. Our user has found themselves at a loss with traditional project management software, which can have unnecessary features that can complicate their project planning. Our app will be easy to interact with and a useful organization tool.


## Data Structure

### Schemas:

*user*

- displayName: String,
- age: Number,
- location: String,
- projects: [ ref: “Projects” ]

- Stretch Goal:
  - loginName: String,
  - password: String

*project*

- projectName: String,
- projectLocation: String,
- projectTotalCost: Number (users can estimate the total cost of the project),
- projectLink: String (users can put a URL to something connected with the project, such as an item on Home Depot's website or the website of a food shelf),
- projectDescription: String (large text field for users to explain the details of the project),
- projectSteps:  [ String (large text field for users to write out the distinct steps for the project) ],
- projectPriority: Number (optional; users can rank 1-5 how important the project is),
- projectDifficulty: Number (optional; users could rank how difficult it might be to complete a project... for example, building a birdhouse might be 1: very easy, but building a functioning sailboat from scratch might be 5: very difficult)

### Routing Table

#### Project Routes

| URL        | HTTP | Action | Description |
| ---------------- | :------: | :------------: | :------------: |
| /projects |    GET     |      show      |     show all projects     |
| / |    POST     |      create      |     create a new project     |
| /id/:id            |    PUT     |      update      |      update a single project by id      |
| /id/:id            |    DELETE     |      delete      |      delete a single project by id      |

#### User Routes
| URL        | HTTP | Action | Description |
| ---------------- | :------: | :------------: | :------------: |
| /users |    GET     |      show      |     show all users and their projects     |
| / |    POST     |      create      |     create a new user     |
| /id/:id            |    PUT     |      update      |      update a single user by id      |
| /id/:id            |    DELETE     |      delete      |      delete a single user by id      |


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Mobile1](https://i.imgur.com/uhRWtyF.jpg)
- [Mobile2](https://i.imgur.com/7pTOKYi.jpg)
- [Mobile3](https://i.imgur.com/c3JZ5q0.jpg)
- [Tablet1](https://i.imgur.com/ZgDtInC.jpg)
- [Tablet2](https://i.imgur.com/iuMLwTc.jpg)
- [Tablet3](https://i.imgur.com/Imm42yA.jpg)
- [Desktop1](https://i.imgur.com/8P5kPHt.jpg)
- [Desktop2](https://i.imgur.com/AT0PN49.jpg)
- [Desktop3](https://i.imgur.com/EjffRNg.jpg)
- [React Architecture](./proposal-images/react-architecture-v1.jpg)


## MVP

- Develop back-end with current data structure
- Develop routing of pages for front end
- Develop front-end functionality with basic CRUD actions
- Responsive design


## Post-MVP

- User Authentication
- Basic animation for click events
- Use Lighthouse to check accessibility


## React Components

| Component           |                                                                    Description                                                                     |
| ------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------: |
| App                 |                                                               React Router home base                                                               |
| Nav                 |                                         Will need option to add user, state of modal will need to be here                                          |
| User Form           |                                                State, will hold info for push request for new User                                                 |
| Modal               |                                             Popup for forms will need state passed down for form input                                             |
| Main                |                                          Theoretically Stateless and used for routing to different pages                                           |
| Landing Page        |              Stateless? Maybe we combine current projects with this page and have a GET request for all projects with the about blurb              |
| Single Project      | Nuts and bolts of project. View a current project of user and be able to edit / delete. Also need button for modal to have popup for creation form |
| Create Project Form |                                             State, will hold a lot of information for the push request                                             |
| Teams               |                                                                  Stateless, bios                                                                   |
| Footer              |                                                                     Stateless                                                                      |


## Time Frame

| Component        | Priority | Estimated Time | Actual Time |
| ---------------- | :------: | :------------: | :------------: |
| Initial server setup |    H     |      2hrs      |     hrs     |
| Creating models and controllers |    H     |      3hrs      |     hrs     |
| Seed data            |    H     |      3hrs      |      hrs      |
| Nav            |    H     |      3hrs      |      hrs      |
| Landing/About page           |    H     |      1hrs      |      hrs      |
| Projects page            |    H     |      1.5hrs      |      hrs      |
| Users projects page            |    H     |      3hrs      |      hrs      |
| Individual project page            |    H     |      5hrs      |      hrs      |
| Team page           |    H     |      hrs      |      3hrs      |
| Total            |    H     |      24.5hrs      |      hrs      |


## Additional Libraries

- Axios
- React Bootstrap
