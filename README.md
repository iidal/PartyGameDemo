# PartyGameDemo

## [The game is live, click here :sunglasses:](https://afternoon-fortress-51422.herokuapp.com/) 
(Suggestions for a name are welcomed)

Inspired by Drunk Pirate and every other party game. I will be updating this readme file as I go forward with the project

in a nutshell:
- database(s) of party/icebreaker/etc questions that the players go through
- player names can be inserted to the site, the site tracks whose turn it is to answer/complete a task/etc



Coming soon to a browser near you:
- player icons
- card deck (new app)
- new prompts/tasks/questions (to replace the testing versions)
- different modes? only never have i ever, would you rather, etc databases
- users can suggest new prompts
  - users can vote new suggestions



### Pickings from the project

#####csv2db.py

a custom django-admin command for creating a database from a csv file.

#####admin site

Using the admin interface provided by django, game prompts and questions can be managed on the browser

#####Using Django REST framework

serializers for listing the prompts as json in the browser (at /api). The prompts are accessed from there with jQuery/AJAX and used in the game


### Bugs, things to fix/add/change

-the model for a prompt defines the prompt id as char instead of int, so the database entries cant be sorted by the id. This does not affect any of the functionalities of the project, it's just an inconvenience when viewing the prompts on the admin page.


#django, python, javascript, jquery, html, css, database, REST framework, heroku


