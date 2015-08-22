'use strict';

// Require all gulp tasks in /gulp/tasks

var requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true });
