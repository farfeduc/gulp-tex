# Gulp-tex starterkit

## About

This is a modular gulp starterkit to compile latex files and use livereload to see the modifications right away.

## Installation

First you need Latex, the Latex wrapper : [clic here for instructions](https://github.com/mikolalysenko/node-latex) and [npm](https://docs.npmjs.com/getting-started/installing-node) 

You also need to install the livereload plugin ([chrome link here](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei))
(do not forget to allow the use of localfiles and clic to have the center dot turn black for it to work).

Then you clone the repo and install the dependencies : 

```bash
$ sudo npm install -g gulp livereload

$ git clone https://github.com/farfeduc/gulp-tex.git && cd gulp-tex

$ npm install 

$ gulp
```

## Folder structure

`src` contains the ".tex" files.

`build` contains the resulting pdf files.


## Contributing

Feel free to adapt or contibute to this project and send me pull-requests.