# Test case: AVA power-assert with external macros

## Problem
External AVA macros are not transformed with power-assert.


## Example
- Close this repo
- `npm install && npm test`
- Observe console output


## Expected
Macros in the same file as the tests (internal macros) should have the same behaviour as those imported from an external file.

Both tests should output the same error:

```js
test( 'internalMacro: 2 + 2 === 4', internalMacro, '2 + 2', 8 );
test( 'externalMacro: 2 + 2 === 4', externalMacro, '2 + 2', 8 );
```


## Actual
External macros are not transformed with power-assert and so display standard errors:

```
running internal macro...
  × internalMacro: 2 + 2 === 4
  t.is(eval(input), expected)
       |    |       |
       4    "2 + 2" 8

running external macro...
  × externalMacro: 2 + 2 === 4 4 === 8

  2 tests failed [23:18:50]


  1. internalMacro: 2 + 2 === 4
  AssertionError:
    4    "2 + 2" 8
        Test.internalMacro (test.js:7:4)
        _combinedTickCallback (internal/process/next_tick.js:67:7)
        process._tickCallback (internal/process/next_tick.js:98:9)


  2. externalMacro: 2 + 2 === 4
  AssertionError: 4 === 8
    Test.module.exports.externalMacro (macros.js:3:4)
    _combinedTickCallback (internal/process/next_tick.js:67:7)
    process._tickCallback (internal/process/next_tick.js:98:9)
```
