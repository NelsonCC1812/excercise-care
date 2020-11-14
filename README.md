# CareExpand excercise

Write a Program in React and Node JS. Connect it with Mongo DB. 

Select a Patient
Request the patient to enter the height and the weight. 
Once you have that calculate the BMI. 

Once you have the BMI plot it on a graph with timeseries
now for that patient you should show the graph for last 90 days. 

## Endpoints

### Auth

 | Method | path                 | Description                                        |
 | ------ | -------------------- | -------------------------------------------------- |
 | post   | /api/auth/login      | Login the user, response: {user, status}           |
 | post   | /api/auth/signup     | Signup an user, respose: {user, status}            |
 | get    | /api/auth/logout     | Logout the current user, respose: {status}         |
 | get    | /api/auth/isLoggedIn | Test if a user is logged, response: {user, status} |

 ### MbiSurvey

 | Method | path                     | Description                                                          |
 | ------ | ------------------------ | -------------------------------------------------------------------- |
 | post   | /api/mbiSurvey/newSurvey | Create a new survey and add it to the user, response: {status, user} |
