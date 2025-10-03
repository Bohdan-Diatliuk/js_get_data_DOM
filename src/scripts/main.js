'use strict';

const getSelectorSpan = document.querySelectorAll('span.population');

const numbers = [];

getSelectorSpan.forEach((span) => {
  const text = span.innerText;
  const number = Number(text.replace(/[^\d]/g, ''));

  if (!isNaN(number)) {
    numbers.push(number);
  }
});

const total = numbers.reduce((a, b) => a + b, 0);
const average = total / numbers.length;

const totalFormat = total.toLocaleString('en-US');
const averageFormat = average.toLocaleString('en-US');

document.querySelector('span.total-population').innerText = totalFormat;
document.querySelector('span.average-population').innerText = averageFormat;
