https://rithmschool.github.io/function-timer-demo/

## Simplifying Big O Expressions

### Constants don't matter

```
O(2n) => O(n)
O(500) => O(1)
O(13n²) => O(n²)
```

### Smaller Terms Don't Matter

```
O(n + 10) => O(n)
O(1000n + 50) => O(n)
O(n² + 5n + 8) => O(n²)
```

## Space Complexity in JS

- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)
