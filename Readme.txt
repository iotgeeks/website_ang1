How to create a bitbacket account
  1. Enter the url http://bitbucket.org/
  2. Click login button means first setup atlassian account first and than access git repo
  
Git clone: 
	1.login bitbucket account.
	2. Clieck the project repository which is share for your (website_ang1)
	3. Left side menu bar have a clone icon than click the icon and shown the widget.
	4. Copy the clone url and open terminal and paste it, now repo is ready to access. While processing time ask ur bitbucket credential.
	5. After cd prodject folder name than set following config
		git config --global user.name "yourname"
		git config --global user.email "yourmailid"

Node:
	why need for node server?
		Angularjs is need a any one web server so we preparable for node server for best.
	Node Setup:
		1. cd Project folder(Ex website_ang1)
		2. npm init 
			This above the command is prepare for package.json. It contain project detail. 
			Sample:
			{
			  "name": "index.js",
			  "version": "1.0.0",
			  "description": "iotgeek",
			  "main": "app.module.js",
			  "scripts": {
			    "test": "iotgeek",
			    "start": "node server.js"
			  },
			  "repository": {
			    "type": "git",
			    "url": "git+https://sathiyaraj45@bitbucket.org/iotgeeks/website_ang1.git"
			  },
			  "author": "sathiyaraj",
			  "license": "ISC",
			  "homepage": "https://bitbucket.org/iotgeeks/website_ang1#readme",
			  "dependencies": {
			    "express": "^4.14.1"
			  }
			}
		3. npm install express --save
			if above command execute shown an error means ues 
			sudo install express --save
		4. npm install express or sudo npm install express
		5. npm install --save body-parser or sudo npm install --save body-parser
	How to start node server
		node filename.js
		example of our project is 
		node  server.js
	How to stop the server ?
		ctrl+c command

Gulp : 
	why Gulp?
		A tool that help you out with several tasks when comes to web development.some of them are,
			-> Optimizing assests like css,js,images
			-> Using preprocessors like sass
			-> Automatic reloading of browser window.
	Gulp setup:
	    Move to project folder and run the following terminal commands
	    1)npm install gulp or sudo npm install gulp
	    2)npm init
	    	-> commend will add devDependencies key for gulp task in package.json
			{
			  "name": "index.js",
			  "version": "1.0.0",
			  "description": "iotgeek",
			  "main": "app.module.js",
			  "scripts": {
			    "test": "iotgeek",
			    "start": "node server.js"
			  },
			  "repository": {
			    "type": "git",
			    "url": "git+https://sathiyaraj45@bitbucket.org/iotgeeks/website_ang1.git"
			  },
			  "author": "sathiyaraj",
			  "license": "ISC",
			  "homepage": "https://bitbucket.org/iotgeeks/website_ang1#readme",
			  "dependencies": {
			    "body-parser": "^1.16.0",
			    "express": "^4.14.1"
			  },
			  "devDependencies": {}
			}
		3)npm install gulp --save-dev
			-> This will add gulp as dev dependency inside package.json.
		4)Touch gulpfile.js(If file is available in the root folder not execute the command)
			-> Will create a gulpfile.js to define tasks.
		5)npm install browser-sync --save-dev
			-> command used to create browser sync functionality.Also need to create task in gulpfile.js
		6.) Run a gulp file
			 gulp browser-sync