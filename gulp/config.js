var dest = "./build";
var src = './';

//A faire : watch sur build

module.exports = {
  watch: {
    src: ['src/*.tex']
  },
  latex: {
    src: 'src/*.tex',
    dest: 'build/'
  },
  clean: {
    files: ['build/*.aux', 'build/*.log', 'build/*.out', 'build/*.pdf']
  }
};
