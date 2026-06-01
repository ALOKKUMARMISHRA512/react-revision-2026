
function greet (name)
{
return  `hello ${name}`;
}

console.log(greet("Alok"));

// 2. Function Expression

const add = function (a, b) {
  return a + b;
};

console.log(add(10, 20));


// 3. Arrow Function

const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(5, 4));


// 4. Short Arrow Function

const square = num => num * num;

console.log(square(6));
