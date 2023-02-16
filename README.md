# internship_project
auth using jwt and cookies

commands after clonning:
internship_project\frontend> npm i
internship_project\backend> npm i
internship_project\backend\db> npm i
internship_project\frontend> npm start
internship_project\backend> node app.js

login ->
username: garvit3835
password: abcd1234

after login, will be directed to user page.
now refresh, you will still reamin on the user page(do it within 2 minutes of loging in, else the cookies will expire).
now remove the cookies and wait for 30 seconds, you will be directed back to the login page(the program checks the login status at an interval of 30 seconds).

