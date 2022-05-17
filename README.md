# First Assignment

## How to run

This node proyect has use the nodemon and express libraries just to execute the enviroment, using the next command:
#### npm i nodemon express
but, actually you just need to use
####
    npm i

After all node_modules install, you can run the proyect using
####
    npm start
This will run the application.

## How it works

This application uses 2 constants, a megabyte data, and an Array data structure called ' buffer '. When we run the app, we initializate the buffer, generating 3 Mb of rows ( process ), and every 3 seconds we delete a row randomly.

We generate one row like an object, with an id, a device, and a size on Kb, we save it with a push( ) in the buffer, and we add the size to the total size variable.

The data for each row is generated with Math.random( ), and make some adjusts for each column.

We choose the row that we're gonna delete with Math.random( ) too, using the length of the buffer. When there's nothing in the Array 2D, we finish the application.