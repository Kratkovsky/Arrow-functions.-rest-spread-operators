'use strict';

// 1. Создайте функцию, которая принимает неограниченное количество входящих данных, и возвращает количество строк, переданных ей в этом массиве. Решить с использованием стрелочных функций.

const howMuchStrings = (...data) =>
  data.filter((elem) => typeof elem === 'string').length;
console.log(
  howMuchStrings(
    'Test',
    [1, 2, 3, 4, 5],
    { name: 'Anton' },
    2,
    true,
    10,
    'test'
  )
);

// 2. Создайте функцию продвинутого калькулятора. Он принимает знак, а  затем неограниченное количество чисел, над которыми проведет указанную операцию.

function superCalc(operator, ...numbers) {
  switch (operator.trim()) {
    case '+': {
      return numbers.reduce((num1, num2) => num1 + num2);
    }
    case '-': {
      return numbers.reduce((num1, num2) => num1 - num2);
    }
    case '/': {
      return numbers.reduce((num1, num2) => num1 / num2);
    }
    case '*': {
      return numbers.reduce((num1, num2) => num1 * num2);
    }
    default:
      throw new Error('U need to use one of this operators: + - / * ');
  }
}

console.log(superCalc('*', 14, 15));

//3. Имея массив чисел, найдите в нем самое большое. Не используйте циклы или методы перебора массива.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
console.log(Math.max(...arr));