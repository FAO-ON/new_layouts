// INIT / / / / / / / / / / / / / / / / / / / / / / / / /
// addEventListener("DOMContentLoaded", (event) => {

// });
console.log('toc.js loaded');


// close TOC details on click
const tocElement = document.querySelector('.table-of-contents');
const tocLinks = document.querySelectorAll('.table-of-contents li a');
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
// from https://codepen.io/desirecampbell/pen/oNJrmdO

// get all headings
const contentHeadings = document.querySelectorAll(':is(h1,h2,h3,h4,h5)');
console.log(`${contentHeadings.length} headings found`);
//get all links in the TOC
//const tocLinks = document.querySelectorAll('nav :is(ul,ol) li a');
// how far up the page does the next section have to be to be labeled as 'current section'
const pagePercentage = 1; //50 = half way up page, 75 = almost to the top

window.addEventListener('scroll', (event) => {
  if (typeof(contentHeadings) != 'undefined' && contentHeadings != null && typeof(tocLinks) != 'undefined' && tocLinks != null) {
    // remove all TOC highlights
    tocLinks.forEach((link, index) => {
      link.classList.remove("highlight");
      console.log(`[-] removing highlight from ${link}`)
    });
    // iterate backwards through headings
    const reverseContentHeadings = [...contentHeadings].toReversed();
    let matchFound = false;
    reverseContentHeadings.forEach(anchor => {
      // IF you haven't found a match yet...
      if(!matchFound){
        // ...AND this heading is far enough up the page...
        if((window.scrollY + (window.innerHeight * (100 - pagePercentage) / 100)) > anchor.offsetTop){
          // ...AND there's a TOC link to this heading...
          const link = document.querySelector('nav :is(ul,ol) li a[href="#' + anchor.id + '"]');
          if(link){
            // ... THEN highlight the TOC link and flag that we've found our match
            link.classList.add('highlight');
            console.log(`[+] highlighting ${link}`)
            matchFound = true;
          }
        }
      }
    });
  }
});


