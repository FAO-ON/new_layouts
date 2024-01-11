// INIT / / / / / / / / / / / / / / / / / / / / / / / / /
// addEventListener("DOMContentLoaded", (event) => {

// });
console.log('toc.js loaded');


// close TOC details on click
const tocElement = document.querySelector('.table-of-contents');
const tocLinks = [...document.querySelectorAll('.table-of-contents a[href^="#"]')];
let tocSections = [];

tocLinks.forEach(e => {
  tocSections.push(document.querySelector('section:has(#' + e.href.split('#')[1] + ')'));
  // e.href.split('#')[1]
});
// console.log(tocSections);

tocLinks.forEach(e => {
  //todo: add more event types
  e.addEventListener('click', (event) => {
    if(isTOCMobile()){
      const detailsElement = tocElement.querySelector('details');
      detailsElement.removeAttribute('open');
      console.log('close TOC');
    }
  });
});

// open/close TOC on desktop/mobile
let prevWindowWidth = window.innerWidth;
window.addEventListener('resize', (event) => {
  //if resize was only vertical, do nothing
  newWindowWidth = event.target.innerWidth;
  if(newWindowWidth == prevWindowWidth) return;

  prevWindowWidth = newWindowWidth;
  if(isTOCMobile()){
    //if TOC is in mobile mode, close it
    console.log('mobile');
    const detailsElement = tocElement.querySelector('details');
    detailsElement.removeAttribute('open');
  }else{
    //if TOC is in dektop mode, open it
    console.log('desktop');
    const detailsElement = tocElement.querySelector('details');
    detailsElement.setAttribute('open','true');
  }
});


//check if TOC is in desktop or mobile mode
function isTOCMobile(){
  const tocElement = document.querySelector('.table-of-contents');
  const closeTOCOnClick = getComputedStyle(tocElement).getPropertyValue('--close-toc-on-click');
  if(closeTOCOnClick == 1) return true;
  return false;
}



//set scroll-padding to height of summary element
const summaryElement = tocElement.querySelector('summary');
const htmlElement = document.querySelector('html');
htmlElement.style.scrollPaddingTop = `${summaryElement.clientHeight}px`;



// / / / / / / / / / / / / / / / / / / / / / / / / / /
// from https://codepen.io/desirecampbell/pen/abMZzmQ




//callback function that fires whenever a target moves into or out of view
let callback = (entries, observer) => {
  // console.log(entries);
  entries.forEach((entry) => {
    tocId = entry.target.querySelector(':is(h2,h3,h4,h5,h6)').id;
    const tocLink = document.querySelector(`a[href="#${tocId}"]`);
    if (entry.isIntersecting) {
      tocLink.setAttribute('tocvisible','true');
      console.log('visible',tocId);
    }
    else{
      tocLink.removeAttribute('tocvisible');
      tocLink.removeAttribute('aria-current');
      console.log('not visible',tocId);
    }
  });
  cleanupTocLinks();
};

//create options
let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.0, //how much of the target needs to be visible (1 = 100%)
};

//create observer
let observer = new IntersectionObserver(callback, options);

//get all targets
// const targets = [...document.querySelectorAll('section[id]')]
//tell observer to observe each tareget
tocSections.forEach( s => {
  observer.observe(s);
});


//check all [tocvisible] links and set [aria-current] to latest one
function cleanupTocLinks(){
  const visibleTocLinks = [...document.querySelectorAll('a[tocvisible]')];
  console.log(visibleTocLinks);
  const lastTocLink = visibleTocLinks.pop();
  lastTocLink.setAttribute('aria-current','true');
  visibleTocLinks.forEach( tocLink => {
    tocLink.removeAttribute('aria-current');
    console.log('[ ]',tocLink.href)
  });
  console.log('[x]',lastTocLink.href)
}