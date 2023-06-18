function isParenthesisValid(expression) {
    const stack = [];
  
    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];
  
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else {
        if (stack.length === 0) {
          return false;
        }
  
        const top = stack.pop();
  
        if (
          (char === ')' && top !== '(') ||
          (char === '}' && top !== '{') ||
          (char === ']' && top !== '[')
        ) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  const expression = '({[()]})';
  console.log(isParenthesisValid(expression)); // Output: true

// Time Complexity: O(n)
// Space Complexity: O(n)
  