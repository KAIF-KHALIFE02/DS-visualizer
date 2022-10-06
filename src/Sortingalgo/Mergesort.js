function mergesort(array, element,setstate,speed) {
  let compareSpeed, insertSpeed, isLessSpeed;
  if (speed === 1) {
    compareSpeed = 0;
    insertSpeed = 1;
    isLessSpeed = 0;
  } else {
    compareSpeed = speed * 5;
    insertSpeed = speed * 3;
    isLessSpeed = speed * 4;
  }
  if (speed >= 500) {
    document.getElementById("captions").innerText =
      "Sorry, captions for this algorithm are not available...";
    return
  }
  if (array.length <= 1) return array;
  let newelem1 = Array.prototype.slice.call(element);
  split(array, newelem1,compareSpeed,insertSpeed,isLessSpeed);
}

async function split(array, mainarray,compareSpeed,insertSpeed,isLessSpeed) {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);
  let larr = await split(array.slice(0, mid), mainarray,compareSpeed,insertSpeed,isLessSpeed);
  let rarr = await split(array.slice(mid),mainarray,compareSpeed,insertSpeed,isLessSpeed);
  return merge(array,larr, rarr, mainarray,compareSpeed,insertSpeed,isLessSpeed);
}

async function merge(array,larr, rarr, mainarray,compareSpeed,insertSpeed,isLessSpeed) {
  let sortedarray = [];
  let success = false;
  let i = 0,
    j = 0;
  if (larr.length + rarr.length === mainarray.length) {
    success = true;
  }

  while (i < larr.length && j < rarr.length) {
    let idx1 = find(mainarray, larr[i]);
    let idx2 = find(mainarray, rarr[j]);
    await compare(mainarray[idx1], mainarray[idx2],compareSpeed);
    if (rarr[j] <= larr[i]) {
      await isLess(mainarray[idx1], mainarray[idx2],isLessSpeed).then(() => {
        if (success) {
          mainarray[idx2].classList.remove("compare");
          mainarray[idx2].classList.remove("isgreater");
          mainarray[idx1].classList.remove("compare");
          mainarray[idx1].classList.remove("isgreater");
          mainarray[idx1].classList.add("sorted");
        }
      });
      await Insert(mainarray, idx1, idx2,insertSpeed);
      sortedarray.push(rarr[j]);
      j++;
    } else {
      if (success) {
        mainarray[idx1].classList.remove("compare");
        mainarray[idx1].classList.remove("isgreater");
        mainarray[idx1].classList.add("sorted");
      }
      sortedarray.push(larr[i]);
      i++;
    }
    if (!success) unselect(mainarray[idx1], mainarray[idx2]);
  }

  while (i < larr.length) {
    let idx1 = find(mainarray, larr[i]);
    if (success) {
      mainarray[idx1].classList.remove("compare");
      mainarray[idx1].classList.remove("isgreater");
      mainarray[idx1].classList.add("sorted");
    }
    sortedarray.push(larr[i]);
    i++;
  }

  while (j < rarr.length) {
    let idx2 = find(mainarray, rarr[j]);
    if (success) {
      mainarray[idx2].classList.remove("compare");
      mainarray[idx2].classList.remove("isgreater");
      mainarray[idx2].classList.add("sorted");
    }
    sortedarray.push(rarr[j]);
    j++;
  }

  return sortedarray;
}

function find(element, tofind) {
  for (let i = 0; i < element.length; i++) {
    if (element[i].style.height === tofind + "px") {
      return i;
    }
  }
  return false;
}

function compare(bar1, bar2,speed) {
  bar1.classList.remove("isgreater");
  bar2.classList.remove("isgreater");
  bar1.classList.add("compare");
  bar2.classList.add("compare");
  return new Promise((resolve) => setTimeout(resolve, speed));
}

function isLess(bar1, bar2,speed) {
  bar1.classList.remove("compare");
  bar1.classList.add("isgreater");
  bar2.classList.remove("compare");
  bar2.classList.add("isgreater");
  return new Promise((resolve) => setTimeout(resolve, speed));
}

function Insert(element, idx1, idx2,speed) {
  let temp1 = element[idx1].style.height;
  let temp2 = element[idx2].style.height;
  for (let i = idx2; i > idx1; i--) {
    element[i].style.height = element[i - 1].style.height;
  }
  element[idx1].style.height = temp2;
  element[idx1 + 1].style.height = temp1;
  return new Promise((resolve) => setTimeout(resolve, speed));
}

function unselect(bar1, bar2, index, current) {
  if (current && index) {
    if (index <= current) {
      bar1.classList.remove("compare");
      bar2.classList.remove("compare");
      bar1.classList.remove("isgreater");
      bar2.classList.remove("isgreater");
      bar1.classList.add("sorted");
      bar2.classList.add("sorted");
      return;
    }
  }
  bar1.classList.remove("compare");
  bar2.classList.remove("compare");
  bar1.classList.remove("isgreater");
  bar2.classList.remove("isgreater");
}

export { mergesort };
