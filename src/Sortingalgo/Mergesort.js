
function mergesort(array, element,setState,speed) {
  let compareSpeed = speed*1.5;
  let insertSpeed = speed*3;
  let isLessSpeed = speed*3;
  if (array.length <= 1) return array;
  let newelem1 = Array.prototype.slice.call(element);
  let mainArray = JSON.parse(JSON.stringify(array))
  split(array, newelem1,setState,mainArray,compareSpeed,insertSpeed,isLessSpeed);
}

async function split(array, mainarray,setState,mainArray,compareSpeed,insertSpeed,isLessSpeed) {
  document.getElementById('captions').innerText = "Splitting the bars into 2 groups until we left with 1 bar in each broup"
  await pauseIt();
  if (array.length <= 1) return array;
  
  let mid = Math.floor(array.length / 2);
  let larr = await split(array.slice(0, mid), mainarray,setState,mainArray,compareSpeed,insertSpeed,isLessSpeed);
  let rarr = await split(array.slice(mid), mainarray,setState,mainArray,compareSpeed,insertSpeed,isLessSpeed);
  return merge(larr, rarr, mainarray,setState,mainArray,compareSpeed,insertSpeed,isLessSpeed);
}

async function merge(larr, rarr, mainarray,setState,mainArray,compareSpeed,insertSpeed,isLessSpeed) {
  if((larr.length <= 2 && rarr.length === 1 ) || (rarr.length <= 2 && larr.length === 1 )  || (larr.length == 1 && rarr.length === 1 )){
    let ridx1 = find(mainarray,larr[0])
  let ridx2 = find(mainarray,rarr[0])
  let parent1 = mainarray[ridx1].parentNode;
    parent1.style.backgroundColor = "rgba(0,0,0,0.2)"
  let parent2 = mainarray[ridx2].parentNode;
    parent2.style.backgroundColor = "rgba(0,0,0,0.4)"
  }
  else{
    console.log(larr.length)
  let lidx1 = find(mainarray,larr[0])
  let ridx1 = find(mainarray,larr[larr.length-1])
  await select1(ridx1,lidx1,mainarray);
  let lidx2 = find(mainarray,larr[0])
  let ridx2 = find(mainarray,larr[larr.length-1])
  await select2(ridx2,lidx2,mainarray); 
}
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
          mainarray[idx1].style.backgroundColor = "green";
          mainarray[idx2].style.backgroundColor = "blue";
        }
      });
      await Insert(mainarray, idx1, idx2,insertSpeed);
      swap(mainArray,idx1,idx2);
      setState(mainArray)
      sortedarray.push(rarr[j]);
      j++;
    } else {
      if (success) mainarray[idx1].style.backgroundColor = "green";
      sortedarray.push(larr[i]);
      i++;
    }
    if (!success) unselect(mainarray[idx1], mainarray[idx2]);
  }

  while (i < larr.length) {
    let idx1 = find(mainarray, larr[i]);
    if (success) mainarray[idx1].style.backgroundColor = "green";
    sortedarray.push(larr[i]);
    i++;
  }

  while (j < rarr.length) {
    let idx2 = find(mainarray, rarr[j]);
    if (success) mainarray[idx2].style.backgroundColor = "green";
    sortedarray.push(rarr[j]);
    j++;
  }

  return sortedarray;
}

function select1(min,max,element){
  for(let i= min; i<= max; i++){
    let parent = element[i].parentNode;
    parent.style.backgroundColor = "rgba(0,0,0,0.2)"
  }
  return new Promise(resolve => setTimeout(resolve,500))
}
function select2(min,max,element){
  for(let i= min; i<= max; i++){
    let parent = element[i].parentNode;
    parent.style.backgroundColor = "rgba(0,0,0,0.4)"
  }
  return new Promise(resolve => setTimeout(resolve,500))
}

function find(element, tofind) {
  for (let i = 0; i < element.length; i++) {
    if (element[i].style.height=== (tofind+'px')){
      return i;
    }
  }
  return false;
}

function swap(element,idx1,idx2){
  let temp1 = element[idx1]
  let temp2 = element[idx2]
  for (let i = idx2; i > idx1; i--) {
    element[i]= element[i - 1]
  }
  element[idx1] = temp2;
  element[idx1 + 1] = temp1;
}

function compare(bar1, bar2,speed) {
  document.getElementById('captions').innerText = "Comparing the red colored bars"
  bar1.childNodes[0].innerText = 'bar1'
  bar2.childNodes[0].innerText = 'bar2'
  bar1.style.backgroundColor = "red";
  bar2.style.backgroundColor = "red";
  return new Promise(resolve => setTimeout(resolve,speed))
}
async function isLess(bar1, bar2,speed) {
  document.getElementById('captions').innerText = "Bar1 is greater than the next Bar2"
  bar1.style.backgroundColor = "purple";
  bar2.style.backgroundColor = "purple";
  return new Promise(resolve => setTimeout(resolve,1500))
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

function unselect(bar1,bar2){
  bar1.childNodes[0].innerText = ''
  bar2.childNodes[0].innerText = ''
  bar1.style.backgroundColor = "blue";
  bar2.style.backgroundColor = "blue";
}

function pauseIt(){
  return new Promise(resolve => setTimeout(resolve,100))
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

export { mergesort };
