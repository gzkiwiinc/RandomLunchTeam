'use strict';

let Random = require('./random');

let random = new Random(require('./config').members);

random.run(4);
