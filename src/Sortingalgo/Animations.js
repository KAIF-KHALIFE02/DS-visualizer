function compare(bar1, bar2) {
    bar1.style.backgroundColor = "red";
    bar2.style.backgroundColor = "red";
    return new Promise(resolve => setTimeout(resolve,1))
  }
  function isLess(bar1, bar2) {
    bar1.style.backgroundColor = "purple";
    bar2.style.backgroundColor = "purple";
    return new Promise(resolve => setTimeout(resolve,1))
  }
  
  function swap(bar1, bar2) {
    let temp;
    temp = bar1.style.height;
    bar1.style.height = bar2.style.height;
    bar2.style.height = temp;
    bar1.style.backgroundColor = "blue";
  }
  
  function unselect(bar1,bar2,index,current){
    if(current&&index){
      if(index<=current){
        bar1.style.backgroundColor = "green";
        bar2.style.backgroundColor = "green";
        return;
      }
    }
    bar1.style.backgroundColor = "blue";
    bar2.style.backgroundColor = "blue";
  }

  function Insert(element, idx1, idx2) {
    let temp1 = element[idx1].style.height;
    let temp2 = element[idx2].style.height;
    for (let i = idx2; i > idx1; i--) {
      element[i].style.height = element[i - 1].style.height;
    }
    element[idx1].style.height = temp2;
    element[idx1 + 1].style.height = temp1;
    return new Promise((resolve) => setTimeout(resolve, 1));
  }

  function find(element, tofind) {
    for (let i = 0; i < element.length; i++) {
      if (element[i].style.height=== (tofind+'px')){
        return i;
      }
    }
    return false;
  }

export {compare,swap,unselect,isLess,Insert,find}