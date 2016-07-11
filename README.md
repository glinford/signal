# **signal**

### **Built in Javascript**

## Dependencies :
- NPM > 3.3.0
- Node.js > 5.7.0

## Installation :
```shell
npm install
```

### CLI Usage Examples :
``` shell
> node do.js 123 0 1221 4353 22 113
one hundred and twenty-three
zero
1221 not allowed
4353 not allowed
twenty-two
one hundred and thirteen
```

``` shell
> node do.js 10 -20 -1.23 3.87 john12 89kiss hello
ten
-20 not allowed
Non-integers are not allowed => -1.23
Non-integers are not allowed => 3.87
Non-integers are not allowed => john12
Non-integers are not allowed => 89kiss
Non-integers are not allowed => hello
```

### Testing (test suite located at __tests__/signal-test.js):
``` shell
npm test
```

Output:

``` shell
Using Jest CLI v13.2.3, jasmine2
 PASS  __tests__/signal-test.js (0.027s)
1 test passed (1 total in 1 test suite, run time 3.917s)
```

The library can also be used in Browser

```html
<script src="./signal.js"></script>
```

![enter image description here](http://i.imgur.com/J24G1wP.png?1)

## API

Start API server ...

```shell
node run-script api
#OR
node do.js api
```

Usage
```shell
GET http://localhost:8080 [env.PORT] /convert/NUMBER
```

By @glinford, Tested on OSX El Capitan, v10.11.5
