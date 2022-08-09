async function heapSort(array, element, setState, speed) {
  document.getElementById("captions").innerText =
    "Lets's start sorting with Heap sort!!!";
  await pauseIt();
  document.getElementById("captions").innerText = "Sorting......"
  let HighestSpeed;
  if (speed === 1) {
    HighestSpeed = 1;
  } else {
    HighestSpeed = speed * 3;
  }
  await buildMaxHeap(element, array, setState, 0, HighestSpeed);
  let lastChild = array.length - 1;
  while (lastChild >= 0) {
    await swap(element[0], element[lastChild]);
    await highest(array.length - lastChild, element[lastChild], HighestSpeed);
    let temp = array[0];
    array[0] = array[lastChild];
    array[lastChild] = temp;
    setState(array);
    await maxHeapify(element, array, lastChild, 0, setState, 1, HighestSpeed);
    element[lastChild].style.backgroundColor = "green";
    if (speed >= 500) await success(array.length - lastChild);
    lastChild--;
  }
  document.getElementById("captions").innerText = "The bars are now sorted!!!";
  return array;
}

async function buildMaxHeap(element, array, setState, at, speed) {
  if(speed>=500){
  document.getElementById("captions").innerText =
    "First we will build the max heap";
  }
  let internalNodes = Math.floor(array.length / 2) - 1;
  let length = array.length;
  for (let i = internalNodes; i >= 0; i--) {
    await maxHeapify(element, array, length, i, setState, at, speed);
  }
  if (speed >= 500) {
    document.getElementById("captions").innerText =
      "We have successfully build the max heap";
    await pauseIt();
  }
}

async function maxHeapify(element, array, n, i, setState, at, speed) {
  if (speed >= 500) {
    if (at !== 0) {
      document.getElementById("captions").innerText =
        "Performing maxHeapify on the remaining elements of the array";
      await pauseIt();
    }
  }
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  if (l < n && array[l] > array[largest]) {
    await compare(element[largest], element[l]);
    unselect(element[largest], element[l]);
    largest = l;
  }
  if (r < n && array[r] > array[largest]) {
    await compare(element[largest], element[r]);
    unselect(element[largest], element[r]);
    largest = r;
  }
  if (largest !== i) {
    await isLess(element[i], element[largest]);
    unselect(element[i], element[largest]);
    await swap(element[i], element[largest]);
    let temp = array[largest];
    array[largest] = array[i];
    array[i] = temp;
    console.log("heap", array);
    setState(array);
    await maxHeapify(element, array, n, largest, setState, at, speed);
  }
}

function compare(bar1, bar2) {
  bar1.style.backgroundColor = "red";
  bar2.style.backgroundColor = "red";
  return new Promise((resolve) => setTimeout(resolve, 10));
}

async function swap(bar1, bar2) {
  let temp;
  temp = bar1.style.height;
  bar1.style.height = bar2.style.height;
  bar2.style.height = temp;
  bar1.style.backgroundColor = "blue";
  return new Promise((resolve) => setTimeout(resolve, 10));
}

async function isLess(bar1, bar2) {
  bar1.style.backgroundColor = "purple";
  bar2.style.backgroundColor = "purple";
  return new Promise((resolve) => setTimeout(resolve, 10));
}

function unselect(bar1, bar2) {
  bar1.style.backgroundColor = "blue";
  bar2.style.backgroundColor = "blue";
}

function pauseIt() {
  return new Promise((resolve) => setTimeout(resolve, 1500));
}

function highest(num, bar, speed) {
  if (speed === 1) {
    return new Promise((resolve) => setTimeout(resolve, speed));
  }
  if (num === 1) {
    document.getElementById("captions").innerText =
      "Placing the 1st highest element at the end";
    bar.childNodes[0].innerText = 1;
    return new Promise((resolve) => setTimeout(resolve, speed));
  }
  if (num === 2) {
    document.getElementById("captions").innerText =
      "Placing the 2nd highest element before bar2";
    bar.childNodes[0].innerText = 2;
    return new Promise((resolve) => setTimeout(resolve, speed));
  }
  if (num === 3) {
    document.getElementById("captions").innerText =
      "Placing the 3rd highest element before bar3";
    bar.childNodes[0].innerText = 3;
    return new Promise((resolve) => setTimeout(resolve, speed));
  }
  if (num > 3) {
    document.getElementById("captions").innerText =
      "Placing the " + num + "th highest element before bar" + (num - 1);
    bar.childNodes[0].innerText = num;
    return new Promise((resolve) => setTimeout(resolve, speed));
  }
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

export { heapSort };
