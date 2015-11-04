Random Lunch Team
=================

Kiwi Team random lunch grouping tool.

# Screenshot

![](http://ww1.sinaimg.cn/large/62580dd9gw1exorrdutdcj20kv02wwf8.jpg)

# Requirement

- Node v4 (ES6 feature)

# Usage

```bash
$ npm install
```

```javascript
const config = require('./config');
let Random = require('path/to/random');
let random = new Random(config.members, config.hooks);

// grouping all the members
random.group();

// grouping all the members apart from several members
random.except(['foo', 'bar']).group();
```

# API

### Random(members<Array>, hooks<String>)
### Random.except(members<Array>)
### Random.group()