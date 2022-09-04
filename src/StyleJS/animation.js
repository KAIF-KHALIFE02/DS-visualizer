export function animateBarsEntry(bars) {

  for (let i = 0; i < bars.length; i++) {
    // await addSlideBarsClass(bars[i]);
    // if(i>0) 
    bars[i].classList.remove("bars-slide-anmimation");
  }
  // bars[bars.length-1].classList.remove('bars-slide-anmimation')
}
export async function addBarsEntryAnimation(bars) {

  for (let i = 0; i < bars.length; i++) {
    await addSlideBarsClass(bars[i]);
    if(i>0) bars[i].classList.remove("bars-slide-anmimation");
  }
  bars[bars.length-1].classList.remove('bars-slide-anmimation')
}
export async function animateBarsSorted(bars) {

  for (let i = 0; i < bars.length; i++) {
    await addSortedBarsClass(bars[i]);
    if(i>1) bars[i - 1].classList.remove("bars-sorted-anmimation");
  }
  bars[bars.length-1].classList.remove('bars-sorted-anmimation')
}

function addSlideBarsClass(bar) {
  bar.style.display = 'flex'
  bar.classList.add("bars-slide-anmimation");
  return new Promise((resolve) => setTimeout(resolve, 5));
}
function addSortedBarsClass(bar) {
  bar.classList.add("bars-sorted-anmimation");
  return new Promise((resolve) => setTimeout(resolve, 50));
}

export function slideInClass(){
  document.getElementById('captions').classList.remove('slide-out-right')
  document.getElementById('captions').classList.add('slide-in-left')
}

export function slideOutClass(){
  document.getElementById('captions').classList.remove('slide-in-left')
  document.getElementById('captions').classList.add('slide-out-right')
}

export function barsDisplayNone(bars){
  for (let i = 0; i < bars.length; i++) {
    bars[i].style.dislpay = 'none'
  }
}
