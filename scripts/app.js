function play() {
  let first = document.querySelector('#first');
  let second = document.querySelector('#second');
  let third = document.querySelector('#third');
  const firstRandom = Math.round(Math.random() * (50 - 1 + 1) + 1);
  const secondRandom = Math.round(Math.random() * (50 - 1 + 1) + 1);
  const thirdRandom = Math.round(Math.random() * (50 - 1 + 1) + 1);
  if (first.value && second.value && third.value) {
    if (
      parseInt(first.value) == firstRandom &&
      parseInt(second.value) == secondRandom &&
      parseInt(third.value) == thirdRandom
    ) {
      document.querySelector('#result').textContent = `You are Correct`;
      document.querySelector('#firstAI').textContent = firstRandom;
      document.querySelector('#secondAI').textContent = secondRandom;
      document.querySelector('#thirdAI').textContent = thirdRandom;
      first.value = '';
      second.value = '';
      third.value = '';
    } else if (
      parseInt(first.value) === firstRandom ||
      parseInt(second.value) === secondRandom ||
      parseInt(third.value) === thirdRandom
    ) {
      document.querySelector(
        '#result'
      ).textContent = `One of The Number Is Correct See Below`;
      document.querySelector('#firstAI').textContent = firstRandom;
      document.querySelector('#secondAI').textContent = secondRandom;
      document.querySelector('#thirdAI').textContent = thirdRandom;
      first.value = '';
      second.value = '';
      third.value = '';
    } else {
      document.querySelector(
        '#result'
      ).textContent = `Sorry You Missed Try Again`;
      document.querySelector('#firstAI').textContent = firstRandom;
      document.querySelector('#secondAI').textContent = secondRandom;
      document.querySelector('#thirdAI').textContent = thirdRandom;
      first.value = '';
      second.value = '';
      third.value = '';
    }
  }
}
