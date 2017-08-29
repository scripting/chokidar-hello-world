# chokidar-hello-world

A simple hello world app for <a href="https://github.com/paulmillr/chokidar">chokidar</a>.

### How to

To run the Hello World app:

1. Create a sub-folder in the same folder as the app called <i>watch.</i>

2. Launch the Terminal app, `cd` to the helloworld folder, type `npm install`.

3. Type `node hello.js` to run the hello world app.

4. Copy a file into the <i>watch</i> sub-folder. You should see a message saying <i>add</i> followed by the path to the file that was added. Similarly if you delete a file you should see a message about that on the console. 

Note that when you add a file, you'll also get a change event. And delete is called <i>unlink</i> in this context. 

### Why

I was able to create some useful tools with chokidar, and I wanted to give back by making it easier for other people to get started with it. 

