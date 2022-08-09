
async function quicksort(array,element,setState,speed){
  let compareSpeed,swapSpeed,isLessSpeed;
  if(speed===1){
  compareSpeed = 0;
  swapSpeed = 1;
  isLessSpeed =0;
}else {
  compareSpeed = speed * 1.5;
  swapSpeed = speed * 2;
  isLessSpeed = speed * 3;
}
    let temp;
    for(let i= 0;i<array.length - 1;i++){
        await select1(element[i],compareSpeed)
        for(let j= i+1; j< array.length;j++){
            await select2(element[j],compareSpeed)
            if(array[j]< array[i]){
                await isLess(element[i],element[j],isLessSpeed)
                await swap(element[i],element[j],swapSpeed)
                temp = array[i];
                array[i]= array[j];
                array[j] = temp;
                setState(array)
                unselect(element[j])
            }
            else{
                unselect(element[j])
              }
        }
        unselect(element[i])
        element[i].style.backgroundColor = 'green'
        await success(i+1);
    }
    element[array.length-1].style.backgroundColor = 'green'
}


function select1(bar,speed){
  if (speed >= 500) {
    bar.childNodes[0].innerText = 'bar1'
    document.getElementById('captions').innerText = "I am bar1 and bar2 will search for any element smaller than me"
  }
    bar.style.backgroundColor = 'red'
    return new Promise(resolve => setTimeout(resolve,speed))
}
function select2(bar,speed){
  if (speed >= 500) {
    document.getElementById('captions').innerText = "Searching for any element less than bar1"
    bar.childNodes[0].innerText = 'bar2'
  }
    bar.style.backgroundColor = 'red'
    return new Promise(resolve => setTimeout(resolve,speed))
}
function unselect(bar){
    bar.childNodes[0].innerText = ''
    bar.style.backgroundColor = 'blue'
}
  async function swap(bar1, bar2,speed) {
    let temp;
    temp = bar1.style.height;
    bar1.style.height = bar2.style.height;
    bar2.style.height = temp;
    bar1.style.backgroundColor = 'red'
    if (speed >= 500) {
    document.getElementById('captions').innerText = "Since the Bar2 is less than the Bar1 we will swap them"
    await pauseIt();
    bar1.childNodes[0].innerText = 'bar1'
    bar2.childNodes[0].innerText = 'bar2'
    }
    return new Promise(resolve => setTimeout(resolve,speed))
  }
  
  async function isLess(bar1, bar2,speed) {
    if (speed >= 500) {
    document.getElementById('captions').innerText = "Bar2 is less than the next Bar1"
    }
    bar1.style.backgroundColor = "purple";
    bar2.style.backgroundColor = "purple";
    return new Promise(resolve => setTimeout(resolve,speed))
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

export {quicksort}