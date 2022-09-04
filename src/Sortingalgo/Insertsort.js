async function insertSort(array, element, setState, speed) {
  if (speed >= 500) {
    document.getElementById("captions").innerText =
      "Lets's start sorting with Insert sort!!!";
    await pauseIt();
  }
  let compareSpeed, insertSpeed, isLessSpeed;
  if (speed === 1) {
    compareSpeed = 0;
    insertSpeed = 1;
    isLessSpeed = 0;
  } else {
    compareSpeed = speed * 3;
    insertSpeed = speed * 3;
    isLessSpeed = speed * 3;
  }
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j <= i; j++) {
      await compare(element[i], element[j], compareSpeed);
      let tempj = j;
      if (array[i] < array[j]) {
        if (isLessSpeed !== 0)
          await isLess(element[i], element[j], isLessSpeed);
        await animateInsert(element, j, i, insertSpeed);
        Insert(array, j, i);
        setState(array);
        j = i + 1;
      }
      let idx1 = find(element, array[i]);
      let idx2 = find(element, array[tempj]);
      unselect(element[idx1], element[idx2], idx2, i, speed);
      element[0].classList.add('sorted')
    }
    if (speed >= 500) await success(i + 1);
  }
  if (speed >= 500) {
    document.getElementById("captions").innerText =
      "All the bars are now sorted!!!";
  }
}

function Insert(array, idx1, idx2) {
  let temp1 = array[idx1];
  let temp2 = array[idx2];
  for (let i = idx2; i > idx1; i--) {
    array[i] = array[i - 1];
  }
  array[idx1] = temp2;
  array[idx1 + 1] = temp1;
}

function compare(bar1, bar2, speed) {
  if (speed >= 500) {
    document.getElementById("captions").innerText =
      "Searching for any bar less than bar2 from the sorted part of the bars";
    bar1.childNodes[0].innerText = "bar1";
    bar2.childNodes[0].innerText = "bar2";
  }
  bar1.classList.remove('sorted')
  bar1.classList.add('compare')
  bar2.classList.remove('sorted')
  bar2.classList.add('compare')
  return new Promise((resolve) => setTimeout(resolve, speed));
}

async function isLess(bar1, bar2, speed) {
  if (speed >= 500) {
    document.getElementById("captions").innerText =
      "Bar1 is less than the next Bar2";
  }
  bar1.classList.add('isgreater')
  bar2.classList.add('isgreater')
  return new Promise((resolve) => setTimeout(resolve, speed));
}

function unselect(bar1, bar2, speed) {
  if (speed >= 500) {
    bar1.childNodes[0].innerText = "";
    bar2.childNodes[0].innerText = "";
  }
  bar1.classList.remove('compare');
  bar1.classList.remove('isgreater');
  bar1.classList.add('sorted');
  bar2.classList.remove('compare')
  bar2.classList.remove('isgreater')
  bar2.classList.add('sorted');
}

function find(element, tofind) {
  for (let i = 0; i < element.length; i++) {
    if (element[i].style.height === tofind + "px") {
      return i;
    }
  }
  return false;
}

function animateInsert(element, idx1, idx2, speed) {
  if (speed >= 500) {
    document.getElementById("captions").innerText =
      "Since bar1 is less than the next Bar2 we will insert the bar2 before bar1";
  }
  let temp1 = element[idx1].style.height;
  let temp2 = element[idx2].style.height;
  for (let i = idx2; i > idx1; i--) {
    element[i].style.height = element[i - 1].style.height;
  }
  element[idx1].style.height = temp2;
  element[idx1 + 1].style.height = temp1;
  return new Promise((resolve) => setTimeout(resolve, speed));
}

function pauseIt() {
  return new Promise((resolve) => setTimeout(resolve, 1500));
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

export { insertSort };
