Random Lunch Team
=================

Kiwi Team random lunch grouping tool.

# Screenshot

![](http://ww1.sinaimg.cn/large/62580dd9gw1exorrdutdcj20kv02wwf8.jpg)

# Usage

### Random(members<Array>)
### Random.except(members<Array>)
### Random.run()

```javascript
let Random = require('path/to/random');
let random = new Random(require('/path/to/config').members);

// grouping all the members
random.run()

// grouping all the members apart from several members
random.except(['foo', 'bar']).run();
```