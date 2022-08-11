// Your code goes here!

import { calculateAspectRatio } from './aspect-ratio.js';
import { modulo, percentage, percentageOf, difference } from './percentage.js';

let moduloForm = document.getElementById('modulo-form');

let moduloInput_1 = document.getElementById('modulo_1');
let moduloInput_2 = document.getElementById('modulo_2');
let moduloResult = document.getElementById('modulo_result');

moduloForm.addEventListener('change', function () {
  moduloResult.value = modulo(moduloInput_1.value, moduloInput_2.value);
});

// Percentage

const formPercentage = document.getElementById('percentage-form');

const inputPercentage_1 = document.getElementById('percentage_1');
const inputPercentage_2 = document.getElementById('percentage_2');
const percentageResult = document.getElementById('percentage_result');

formPercentage.addEventListener('change', function () {
  percentageResult.value = percentage(
    inputPercentage_1.value,
    inputPercentage_2.value
  );
});

// percentageOf
const percentageOfForm = document.getElementById('percentageOf-form');
const inputPercentageOf_1 = document.getElementById('percentageOf_1');
const inputPercentageOf_2 = document.getElementById('percentageOf_2');
const percentageOfResult = document.getElementById('percentageOf_result');

percentageOfForm.addEventListener('change', function () {
  percentageOfResult.value = percentageOf(
    inputPercentageOf_1.value,
    inputPercentageOf_2.value
  );
});

// difference

const differenceForm = document.getElementById('difference-form');

const inputDifference_1 = document.getElementById('difference_1');
const inputDifference_2 = document.getElementById('difference_2');
const differenceResult = document.getElementById('difference_result');

differenceForm.addEventListener('change', function () {
  differenceResult.value = difference(
    inputDifference_1.value,
    inputDifference_2.value
  );
});

// aspect ratio

const aspectForm = document.getElementById('aspect-form');

const oldInputWidth = document.getElementById('ratio_1');
const oldInputHeight = document.getElementById('ratio_2');
const newInputWidth = document.getElementById('ratio_result-width');
const newInputHeight = document.getElementById('ratio_result-height');

aspectForm.addEventListener('change', function (e) {
  if (e.target === newInputWidth) {
    newInputHeight.value = calculateAspectRatio(
      oldInputWidth.value,
      oldInputHeight.value,
      newInputWidth.value,
      'w'
    );
  } else {
    newInputWidth.value = calculateAspectRatio(
      oldInputWidth.value,
      oldInputHeight.value,
      newInputHeight.value,
      'h'
    );
  }
});
