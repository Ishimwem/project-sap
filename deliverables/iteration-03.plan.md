# Student Accessibility Portal (SAP)

## Iteration 3

 * Start date: Tuesday, March 13, 2018
 * End date: Thursday, March 29, 2018

## Process

For this iteration, we will have weekly meetings all documented in our Google Drive that will state milestones and tasks that will need to be completed for each week. Each week, we will check in on the status of everyone’s task on Tuesday over the web/in person meeting which will then be followed by meeting in person on Thursdays to review the completion of our tasks as well as any outstanding issues. Our goal for this iteration is to complete the Back End and the integration of our Student Accessibility Service website and produce a presentable working product that individuals are able to use.

On our first week of this iteration, we will plan the database structure and populate the database with the relevant data that we have gathered in the previous phase. The documents to the planning and the information will be linked in artifacts.

For the second week, we plan on setting up the database environment and hosting the database on mlabs. We will also begin implementing the backend and setting up the routing for each page of our website.

In the last and third week, we plan on integrating the Back End and the Front End using AJAX and will implement the Favouriting, Filtering, and Searching functionality of our website. We will also polish the website with styling before submission. We also plan to complete the video and the review.md on the last week of the iteration.

#### Changes from previous iteration

Success metric: A rank between 1 and 5 inclusive where 1 is not successful and 5 is very successful.

- Meeting in person more frequently for this iteration
  * Success metric: 4 -- For this iteration, it was required to meet in person more often as integrating everyone’s pages with the Front End and Back End required everyone to know the behaviour of each page and communication was integral for this part of the process. However, sometimes, this was difficult to achieve as everyone’s schedules outside of the existing meeting times were often busy and not everyone is able to meet at the same time.
- More code reviews
  * Success metric: 3 -- We hope to take the time and look at each others code before merging. This is to ensure that our code remains readable and keeps us accountable for the tasks we need to do. This time we will do code reviews between pairs and the technical expert instead of just within pairs.
- More GitHub issues
  * Success metric: 3 -- GitHub issues is a good way to organize tasks in a traceable manner. It keeps everyone accountable for tasks they need to do and it allows us to see immediately what task have been completed. It will help us with tracking our progress which is helpful for our time management.

#### Roles & responsibilities


All team members are assigned page(s) to develop. Each sub-team/pair is responsible for transforming the mockup into a static front end page with clickable elements.

- Bernadine and Nicole -> All Services page, Personal Graph/Main page, Navigation Bar
- Nora and Merci -> Category graph page, Filtering Functionality
- KC and Andre -> Login/Register page, styling for categories, Favouriting/Unfavouriting functionality

In addition to this, we assigned the following roles:

- KC and Andre -> Research and Data Collection, they are responsible for determining which categories we will include in our graphs or any other information about accessibility services around UofT. They will also determine which services are connected to each category, this will be the leaf nodes of our graph. Additionally, they will be designing our databases for the next iteration.

- Bernadine -> Project Manager. She is responsible for ensuring that we follow and complete goals and tasks that we set during our planning meetings. She is also who we will go to when we have a question about the overall product such as what we need to develop and when we need to complete it by. Another responsibility is to set the agenda for each meeting.

- Nicole -> Technical Expert. She is responsible for any questions about the code or any of the languages and frameworks that we use. She will also set up the structure of the web application and any dependencies or scripts that are needed. In addition, she will do code reviews.

- Nora and Merci -> Product Owners. They are responsible for ensuring that each member who is developing is keeping the user in mind, this makes sure that we keep our product user friendly and solve the problems of our target users. They are also responsible for testing the product and catching any bugs.


#### Events

Meetings:

* Thursday, March 15, 2018 12-1 - in person BA2270
  * Plan and set milestones for each week for this iteration
  * Set up database environment and hosting 
  * Populate the database with the data collected
* Tuesday, March 20, 2018 3-5 - in person BA2270
  * Check in on the progress of each page’s routing using express and make adjustments to requirements if needed
* Thursday, March 22, 2018 12-1 - in person BA2270
  * Check in on the progress of each task and help if others need
  * Focus on loading the graphs dynamically using the database for the pages that display the graph
* Tuesday, March 27, 2018 3-5 - in person BA2270
  * Code Review for routing for all pages
  * Integrate the Front End and the Back End
  * Make sure that the Favouriting, Filtering, and Searching
* Thursday, March 29, 2018 3-5 - in person BA2270
  * Last minute review of project
  * Make sure that the product works as planned before submission
  * Write the review.md
  * Final edits on video

#### Artifacts

- Documentation of our meetings will all be in Google Drive which will all be linked in review.md. This will be used to keep track of what is done and what needs to be done after each meeting.
  * within this document we will have a to do list, schedule, and a table that marks the current status of a task (i.e. in progress, not started, complete)
- All tasks in our meeting documents will have deadlines and will be ranked with priorities to make sure we meet our milestones. Our product managers will be in charge of determining the tasks and assigning priorities.
- All tasks will be evenly assigned to pairs in the team based on skills and interest. If there are any issues or conflicts that arise, our project manager will mediate and assign the tasks.
- Slack channel will be used to contact the team for any needs and/or issues throughout the iteration.

#### Git / GitHub workflow

- One person will create the basic structure of the project on GitHub and set up the initial environment (setting up different branches and forks for each pair)
- Our group will then be divided into 3 pairs and each pair will have their own fork of the master repository and are assigned GitHub issues/tasks to work on
- After completing their part, the sub-team will close their GitHub issues and will open a pull-request but only after reviewing changes as a pair in a meeting (either online or in person)
⋅⋅⋅any conflicts with the pull-request should be fixed by this pair during this meeting
- In person, a member who isn’t part of the pair will review the code then after the review, if it is good, they will merge code to the master repo, if it isn’t then the pair will fix their code during the meeting and submit another pull request
- We chose this workflow because we could make sure each pair’s part works before including it in master. This ensures master is our "source of truth" and does not have any bugs. Also, having someone from outside the pair review the code is helpful because this increases the chance of catching any bugs.


## Product

#### Goals and tasks

Our overall goal for this iteration is complete the back end of our product and integrating the back end with the front end to ensure that all functionality is implemented to have a full working website application.

The items are ordered in chronological order of which tasks need to be completed based on deadlines and importance:

- Plan the structure of the Database by Thursday, March 15
- Create Git Issues and assign to pairs by Thursday, March 15
- Create the Database and set up the environment and integrate it with your website (mongoDB) by Tuesday, March 15
- Research information and get the information and populate the database by Tuesday, March 20
- Set up Express and routing for our application by Thursday, March 22
- Add the functionality of search (EXTRA) and favouriting (PRIORITY) and filtering (PRIORITY) by Tuesday, March 27
- Use Ajax and Ejs to integrate Front-end and Back-end by Tuesday, March 27
- Finalize Styling by Thursday, March 29
- Create the video and write review.md by Thursday, March 29

#### Artifacts

- All the future meeting Google documents will be linked in the review.md
- All code will be uploaded to our team repo so that it is accessible to us and the TAs
- We will create a node.js server so that we can test and run our product. This is important because we want to be able to navigate the website as if we were the target users.
- GitHub issues will be created so that coding tasks will be transparent and organized for all team members. This also allows us to keep track of the status of each task assigned.
- Mock ups of our website can be found in our previous iteration/deliverable.
- We will create a video to demonstrate the product. The video can be found in review.md when completed
- Screen caps of website features that was not captured in our video will be added in review.md artifacts. This is so that the graders can see all aspects of our product that have been completed.


