async function bubblesort(array1, element, setState, speed) {
  let compareSpeed, swapSpeed, isLessSpeed;
  if (speed === 1) {
    compareSpeed = 0;
    swapSpeed = 1;
    isLessSpeed = 0;
  } else {
    compareSpeed = speed * 3;
    swapSpeed = speed * 2;
    isLessSpeed = speed * 3;
  }
  if (speed >= 500) {
    document.getElementById("captions").innerText =
      "Lets's start sorting with Bubble sort!!!";
    await pauseIt();
    document.getElementById("captions").innerText = "Sorting......";
  }
  let temp;
  let array = array1;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      await compare(element[j], element[j + 1], compareSpeed);
      if (array[j] > array[j + 1]) {
        if (isLessSpeed !== 0)
          await isLess(element[j], element[j + 1], isLessSpeed);
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        await swap(element[j], element[j + 1], swapSpeed);
        unselect(element[j], element[j + 1], compareSpeed,speed);
        setState(array);
      } else {
        unselect(element[j], element[j + 1], compareSpeed,speed);
      }
    }
    let k = array.length - i - 1;
    element[k].classList.add('sorted')
    if (speed >= 500) await success(i + 1);
  }
  element[0].classList.add('sorted')
  if (speed >= 500) {
    document.getElementById("captions").innerText =
      "The bars are now sorted!!!!";
  }
  // return array;
}

function compare(bar1, bar2, speed) {
  if (speed >= 500) {
    document.getElementById("captions").innerText =
      "Searching for bar1 greater than bar2";
      bar1.childNodes[0].innerText = "bar1";
      bar2.childNodes[0].innerText = "bar2";
  }
  bar1.classList.remove('isgreater');
  bar2.classList.remove('isgreater');
  bar1.classList.add('compare')
  bar2.classList.add('compare')
  return new Promise((resolve) => setTimeout(resolve, speed));
}

async function swap(bar1, bar2, speed) {
  if (speed >= 500) {
    document.getElementById("captions").innerText =
      "Since the Bar1 is greater than the Bar2 we will swap them";
    await pauseIt();
  }
  let temp;
  temp = bar1.style.height;
  bar1.style.height = bar2.style.height;
  bar2.style.height = temp;
  bar1.classList.remove('compare')
  return new Promise((resolve) => setTimeout(resolve, speed));
}

async function isLess(bar1, bar2, speed) {
  if (speed >= 500) {
    document.getElementById("captions").innerText =
      "Bar1 is greater than the next Bar2";
  }
  bar1.classList.add('isgreater')
  bar2.classList.add('isgreater')
  return new Promise((resolve) => setTimeout(resolve, speed));
}

function pauseIt() {
  return new Promise((resolve) => setTimeout(resolve, 1500));
}

function unselect(bar1, bar2, speed) {
  if (speed >= 500) {
    bar1.childNodes[0].innerText = "";
    bar2.childNodes[0].innerText = "";
  }
  bar1.classList.remove('compare');
  bar1.classList.remove('isgreater');
  bar2.classList.remove('compare')
  bar2.classList.remove('isgreater')
}

function success(num) {
  if (num <= 1) {
    document.getElementById("captions").innerText =
      "We have successfully sorted " + num + " element of the array";
  } else {
    document.getElementById("captions").innerText =
      "We have successfully sorted " + num + " elements of the array";
  }
  return new Promise((resolve) => setTimeout(resolve, 1500));
}

export { bubblesort };
