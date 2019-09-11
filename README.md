# Example

```shell
$ npm install sensitive-words --save
```

```javascript
const { sensitiveWords } = require('sensitive-words')

// ES2015 modules
import { sensitiveWords } from 'sensitive-words'

const filtered = sensitiveWords('Do you have a dream ?', ['have', 'dream'])

console.log(filtered)
// Do you **** a **** ?
```
