# Project Overview

## Project Links

- [Front-End](https://github.com/thePumaLovers/project-planning-client)
- [Back-End](https://github.com/thePumaLovers/project-planning-api)

- [Front-End Deployed ](https://thepumalovers.github.io/project-planning-client/)
- [Back-End Deployed](https://stark-basin-09914.herokuapp.com/groups)

## Project Schedule

| Day |                       Deliverable                        |               Status                |
| --- | :------------------------------------------------------: | :---------------------------------: |
| 1   |                Project Worksheet approved                |              Complete               |
| 1   | Create basic back end (connection, models, controllers)  |              Complete               |
| 2   | Create basic front end (routing pages, placeholder text) |              Complete               |
| 2   |          Minimal styling and responsive design           |              Complete               |
| 3   |               Main CRUD form on front end                |              Complete               |
| 3   |                Deploy back end, meet MVP                 |              Complete               |
| 4   |      User Authentication, animation, accessibility       | Incomplete (accessibility complete) |
| 5   |                         Present                          |             Incomplete              |

## Project Description

Our app will be used for keeping track of a user's projects. The goal of the data structure is to let our app fit the mold of many different projects. While user authentication will be a post-mvp, we want users to have a place to store their ideas.

## Project Process

We decided to implement the back-end as a group and mob programmed for the majority of the first day. This allowed us to all have input on the routes we were creating and how they were coded.

The beginning of the front-end was similar where we mob programmed until we had the skeletal structure of the app configured (routes, folder structure, etc.). At that point, we broke off into pair programming to hit the two pages with CRUD routing.

As we continued the process, we became more and more free-form with how we were splitting off. Occasionally, one of us would break off from the main group, play in a lab-like setting with a feature, and then bring it back to the group for full implementation into the project.

As we concluded the process, we deployed as a group to celebrate our successes!

## User-Story

Our user is someone who is interested in planning projects. They are looking for a smooth, easy way to view, create, edit, and delete their projects in one place. Our user has found themselves at a loss with traditional project management software, which can have unnecessary features that can complicate their project planning. Our app will be easy to interact with and a useful organization tool.

## Team Duties

Ross focused on higher level design thoughts with the application and implemented the landing page's video. Additionally, he implemented the cards on the projects page.

Juan focused on color schemes and design, and implemented both back-end and front-end code.

Aidyn created data structures and spearheaded the back-end design. Zie also was our fearless project manager while implementing bootstrap components on the front-end.

Matt focused on the structure of the front-end and how the routes would interact with the back-end. Additionally, he facilitated conversations between teammembers and helped resolve differing opinions.

## Proposed Data Structure

### Schemas:

_user_

- displayName: String,
- age: Number,
- location: String,
- projects: [ ref: “Projects” ]

- Stretch Goal:
  - loginName: String,
  - password: String

_project_

- projectName: String,
- projectLocation: String,
- projectTotalCost: Number (users can estimate the total cost of the project),
- projectLink: String (users can put a URL to something connected with the project, such as an item on Home Depot's website or the website of a food shelf),
- projectDescription: String (large text field for users to explain the details of the project),
- projectSteps: [ String (large text field for users to write out the distinct steps for the project) ],
- projectPriority: Number (optional; users can rank 1-5 how important the project is),
- projectDifficulty: Number (optional; users could rank how difficult it might be to complete a project... for example, building a birdhouse might be 1: very easy, but building a functioning sailboat from scratch might be 5: very difficult)

### Routing Table

#### Project Routes

| URL       |  HTTP  | Action |          Description          |
| --------- | :----: | :----: | :---------------------------: |
| /projects |  GET   |  show  |       show all projects       |
| /         |  POST  | create |     create a new project      |
| /id/:id   |  PUT   | update | update a single project by id |
| /id/:id   | DELETE | delete | delete a single project by id |

#### User Routes

| URL                                  |  HTTP  | Action |            Description            |
| ------------------------------------ | :----: | :----: | :-------------------------------: |
| /users                               |  GET   |  show  | show all users and their projects |
| /                                    |  POST  | create |         create a new user         |
| /id/:id                              |  PUT   | update |    update a single user by id     |
| /userid/:userid/projectid/:projectid |  PUT   | update |       link project to user        |
| /id/:id                              | DELETE | delete |    delete a single user by id     |

## Updated Data Structure

### Schemas:

_group_

- displayName: String,
- location: String,
- projects: [ subdocument ]

_project_

- projectName: String,
- projectDescription: String (large text field for users to explain the details of the project),
- isCompleted: Boolean

### Routing Table

#### Project Routes

| URL                                    |  HTTP  | Action |          Description          |
| -------------------------------------- | :----: | :----: | :---------------------------: |
| /groupid/:groupid                      |  POST  | create |     create a new project      |
| /groupid/:groupid/projectid/:projectid |  PUT   | update | update a single project by id |
| /groupid/:groupid/projectid/:projectid | DELETE | delete | delete a single project by id |

#### Group Routes

| URL  |  HTTP  | Action |         Description         |
| ---- | :----: | :----: | :-------------------------: |
| /    |  GET   |  show  |       show all groups       |
| /:id |  GET   |  show  |    show one group by id     |
| /    |  POST  | create |     create a new group      |
| /:id |  PUT   | update | update a single group by id |
| /:id | DELETE | delete | delete a single gropu by id |

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

## Proposed React Components

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

## Updated React Components

| Component             |                         Description                         |
| --------------------- | :---------------------------------------------------------: |
| App                   |                   React Router home base                    |
| Header                |                   Holds Navbar and links                    |
| Group Add/Edit Form   |    State, holds info for push/put request for new Group     |
| Landing Page          |       Stateless. Little blurb about project and video       |
| Groups Page           |  State, View all groups and create, add, delete, from here  |
| Project Add/Edit Form | State, will hold a lot of information for the push request  |
| Projects Page         | State, View all projects and create, add, delete, from here |
| Teams                 |                       Stateless, bios                       |
| Footer                |                          Stateless                          |

## Time Frame

| Component                       | Priority | Estimated Time | Actual Time |
| ------------------------------- | :------: | :------------: | :---------: |
| Initial server setup            |    H     |      2hrs      |    2hrs     |
| Creating models and controllers |    H     |      3hrs      |    2hrs     |
| Seed data                       |    H     |      3hrs      |    1hrs     |
| Nav                             |    H     |      3hrs      |    2hrs     |
| Landing/About page              |    H     |      1hrs      |    1hrs     |
| Projects page                   |    H     |     1.5hrs     |    6hrs     |
| Users projects page             |    H     |      3hrs      |    8hrs     |
| Individual project page         |    H     |      5hrs      |     hrs     |
| Team page                       |    H     |      2hrs      |    3hrs     |
| Total                           |    H     |    24.5hrs     |    26hrs    |

## Additional Libraries

- Axios
- React Bootstrap
- React Router
- Fontsource

## Code Snippets

### Front-End

This was an interesting use case of utilizing a for loop to update the state of an individual group object and then have it properly re-render it's updated projects out on the page.

```js
useEffect(() => {
  for (let i = 0; i < groups.length; i++) {
    if (groupId === groups[i]._id) {
      setGroupProjects(groups[i]);
    }
  }
}, [groups]);
```

### Back-End

Updating our projects was an interesting challenge due to how we had to move information about and utilize array methods.

```js
// Update project by id
router.put("/groupid/:groupid/projectid/:projectid", async (req, res) => {
  //Find specific group by id
  const group = await Group.findById(req.params.groupid);

  //Find specific project in selected group via id
  const project = group.projects.id(req.params.projectid);

  //Find index of selected group
  const index = group.projects.indexOf(project);

  //Modify group and save since subdocs don't save unless parent saves
  group.projects.splice(index, 1, req.body);
  group.save();

  //Response sent from request
  res.json({
    status: 200,
    message: "project edited",
    project: group,
  });
});
```

## Citations

### Fixed Footer

Useful tut on footer positioning:

https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/

### React-Bootstrap Checkmarks

We learned about event.target.checked!

https://stackoverflow.com/questions/69441990/how-to-get-the-current-status-of-a-react-bootstrap-checkbox-whether-checked-in

### Fontsource Import

Fontsources docs made it incredibly clear as to how to import:

https://fontsource.org/docs/introduction
