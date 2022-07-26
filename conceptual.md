### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
# Try & Catch or .then

- What is a Promise?
# A piece of code that takes time to return

- What are the differences between an async function and a regular function?
# Async stops the code until its function has finished running

- What is the difference between Node.js and Express.js?
# Express is a node js web framework

- What is the error-first callback pattern?
# Catching and returning/throwing errors before they break your code

- What is middleware?
# Intercepts route request to pass code through for purposes like making sure a user is logged in or authentifying a user

- What does the `next` function do?
# In middleware, or when an error is thrown, next pushes the code to continue running

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers(){
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

# Doesn't catch any errors that may be thrown
