# Project Overview

## Project Links

- [Front-End](https://github.com/thePumaLovers/project-planning-client)
- [Back-End](https://github.com/thePumaLovers/project-planning-api)

- [Front-End Deployed (Nonfunctioning)]()
- [Back-End Deployed (Nonfunctioning)]()

## Project Description

Our app will be used for keeping track of a user's projects. The goal of the data structure is to let our app fit the mold of many different projects. While user authentication will be a post-mvp, we want users to have a place to store their ideas.

## User-Story

Our users will be any person who has found themselves at a loss with project management software. Our app will be easy to interact with and a useful organization tool.

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
- projectSteps: String (large text field for users to write out the distinct steps for the project),
- Stretch Goal:
  - projectPriority: Number (optional; users can rank 1-5 how important the project is),
  - projectDifficulty: Number (optional; users could rank how difficult it might be to complete a project... for example, building a birdhouse might be 1: very easy, but building a functioning sailboat from scratch might be 5: very difficult)

CRUD:

- Seed data consists of 5-10 projects
- Users can:
  - GET: View existing projects (by name, location, or cost)
  - POST: Create their own project with a form that has all the necessary fields
  - PUT: Edit existing projects (change all the details from the original form)
  - DELETE: Delete projects (either the seed projects or ones they added)
    What are people's thoughts on this so far? I'm excited about the different types of projects we can showcase with our seed data! (edited)

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [add link to your wireframes]()
- [react architecture](./proposal-images/react-architecture-v1.jpg)

## MVP

- Develop back-end with current data structure
- Build routes to interact with data
- Develop front-end functionality with basic CRUD actions
- Responsiveness

## Post-MVP

- User Authentication

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

| Component        | Priority | Estimated Time | Time Invetsted | Actual Time |
| ---------------- | :------: | :------------: | :------------: | :---------: |
| Adding Form      |    H     |      3hrs      |     3.5hrs     |   3.5hrs    |
| Working with API |    H     |      3hrs      |     2.5hrs     |   2.5hrs    |
| Total            |    H     |      6hrs      |      5hrs      |    5hrs     |

## Additional Libraries

- Axios
