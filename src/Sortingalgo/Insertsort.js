
async function insertSort(array, element,setState,speed) {
  document.getElementById('captions').innerText = "Lets's start sorting with Insert sort!!!";
  await pauseIt();
  let compareSpeed,insertSpeed,isLessSpeed;
  if(speed===1){
  compareSpeed = 0;
  insertSpeed = 1;
  isLessSpeed =0;
}else {
  compareSpeed = speed * 1.5;
  insertSpeed = speed * 3;
  isLessSpeed = speed * 3;
}
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j <= i; j++) {
      await compare(element[i], element[j],compareSpeed);
      let tempj = j
      if (array[i] < array[j]) {
        if(isLessSpeed !== 0) await isLess(element[i],element[j],isLessSpeed)
        await animateInsert(element, j, i,insertSpeed);
        Insert(array, j, i);
        setState(array)
        j = i + 1;
      }
      let idx1 = find(element, array[i]);
      let idx2 = find(element, array[tempj]);
      unselect(element[idx1], element[idx2],idx2,i);
      element[0].style.backgroundColor = 'green'
    }
    if (speed >= 500) await success(i+1);
  }
  document.getElementById('captions').innerText = "All the bars are now sorted!!!"
  // return array;
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

function compare(bar1, bar2,speed) {
  document.getElementById('captions').innerText = "Searching for any bar less than bar2 from the sorted part of the bars"
  bar1.childNodes[0].innerText = 'bar1'
  bar2.childNodes[0].innerText = 'bar2'
  bar1.style.backgroundColor = "red";
  bar2.style.backgroundColor = "red";
  return new Promise(resolve => setTimeout(resolve,speed))
}

async function isLess(bar1, bar2,speed) {
  document.getElementById('captions').innerText = "Bar1 is less than the next Bar2"
  bar1.style.backgroundColor = "purple";
  bar2.style.backgroundColor = "purple";
  return new Promise(resolve => setTimeout(resolve,speed))
}

function unselect(bar1,bar2){
  bar1.childNodes[0].innerText = ''
  bar2.childNodes[0].innerText = ''
  bar1.style.backgroundColor = "green";
  bar2.style.backgroundColor = "green";
}

function find(element, tofind) {
  for (let i = 0; i < element.length; i++) {
    if (element[i].style.height=== (tofind+'px')){
      return i;
    }
  }
  return false;
}

function animateInsert(element, idx1, idx2,speed) {
  document.getElementById('captions').innerText = "Since bar1 is less than the next Bar2 we will insert the bar2 before bar1"
  let temp1 = element[idx1].style.height;
  let temp2 = element[idx2].style.height;
  for (let i = idx2; i > idx1; i--) {
    element[i].style.height = element[i - 1].style.height;
  }
  element[idx1].style.height = temp2;
  element[idx1 + 1].style.height = temp1;
  return new Promise((resolve) => setTimeout(resolve, speed));
}

function pauseIt(){
  return new Promise(resolve => setTimeout(resolve,1500))
}


function success(num){
  if(num<=1){
    document.getElementById('captions').innerText = "We have successfully sorted " +num+" element of the array";
  }
  else{
    document.getElementById('captions').innerText = "We have successfully sorted " +num+" elements of the array";
  }
  return new Promise(resolve => setTimeout(resolve,1500))
}

export { insertSort };
