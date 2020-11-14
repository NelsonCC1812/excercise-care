# CareExpand excercise

* [Models](#models)
* [Endpoins](#endpoints)
* [Comments](#comments)


Write a Program in React and Node JS. Connect it with Mongo DB. 

Select a Patient
Request the patient to enter the height and the weight. 
Once you have that calculate the BMI. 

Once you have the BMI plot it on a graph with timeseries
now for that patient you should show the graph for last 90 days.


## Models <div id='models'/>

### User

| key      | value     |
| -------- | --------- |
| username | String    |
| password | String    |
| patients | [Patient] |

### Patient

| key     | value                     |
| ------- | ------------------------- |
| name    | String                    |
| age     | Number                    |
| gener   | enum[male, female, other] |
| history | [MbiSurvey]               |

### MbiSurvey

| key    | value  |
| ------ | ------ |
| height | Number |
| weight | Number |
| mbi    | Number |


## Endpoints

### Auth

 | Method | path                 | Description                                        |
 | ------ | -------------------- | -------------------------------------------------- |
 | post   | /api/auth/login      | Login the user, response: {user, status}           |
 | post   | /api/auth/signup     | Signup an user, respose: {user, status}            |
 | get    | /api/auth/logout     | Logout the current user, respose: {status}         |
 | get    | /api/auth/isLoggedIn | Test if a user is logged, response: {user, status} |

 ### Patient

| Method | path                               | Description                                     |
| ------ | ---------------------------------- | ----------------------------------------------- |
| post   | /api/patient/newPatient            | Create a new patient, response : {user, status} |
| get    | /api/patient/getPatient/:patientId | Sends the patient, response: {data, status}     |

 ### MbiSurvey

 | Method | path                     | Description                                                          |
 | ------ | ------------------------ | -------------------------------------------------------------------- |
 | post   | /api/mbiSurvey/newSurvey | Create a new survey and add it to the user, response: {status, user} |


 ### Comments <div id='comments'>

 The time was very limited, so I could't work as I would like, the attention to details, the interactivite of the front-end the testing of the inputs, etc. With more time I would do a better job. 