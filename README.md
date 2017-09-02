# chokidar-hello-world

A simple hello world app for <a href="https://github.com/paulmillr/chokidar">chokidar</a>.

### How to

To run the Hello World app:

1. <a href="https://github.com/scripting/chokidar-hello-world/archive/master.zip">Download</a> the folder from the repo. 

2. Unzip the folder. Create a sub-folder called <i>watch.</i> 

2. Launch the Terminal app, `cd` to the app folder, type `npm install`.

3. Type `node hello.js` to run the app.

4. Copy a file into the <i>watch</i> sub-folder. You should see a message saying <i>add</i> followed by the path to the file that was added. Similarly if you delete a file you should see a message about that on the console. 

Note that when you add a file, you'll also get a <i>change</i> event. And <i>delete</i> is called <i>unlink</i> in this context. 

### Why

I was able to create some useful tools with chokidar, and I wanted to give back by making it easier for other people to get started with it. 

### Udates

#### v0.4.1 -- 9/2/17 by DW

Added new option,<i> awaitWriteFinish,</i> with a value of true.  This setting matters when the user is copying large files into the watched folder. This way you only get the change event when the file has finished copying. <a href="https://github.com/paulmillr/chokidar#performance">Chokidar</a> does this by polling to see if the file size changed, so this will make Chokidar slower. The other option is processing files before they're fully there.

