# Project Overview

## Project Links

- [Back-End](https://github.com/thePumaLovers/project-planning-api)

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

## Data Structure

### Schemas:

_user_

- displayName: String,
- location: String,
- projects: [ ref: “Projects” ]

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


## MVP

- Develop back-end with current data structure
- Develop routing of pages for front end
- Develop front-end functionality with basic CRUD actions
- Responsive design

## Post-MVP

- Add logo
- Update form to become empty after adding new group/project
- Use Lighthouse to check accessibility


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
