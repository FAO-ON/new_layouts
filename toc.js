// INIT / / / / / / / / / / / / / / / / / / / / / / / / /
// addEventListener("DOMContentLoaded", (event) => {

// });





// close TOC details on click
let closeTOCOnClick = false;
const tocElement = document.querySelector('.table-of-contents');
const tocLinks = document.querySelectorAll('.table-of-contents li a');
console.log(tocElement);
tocLinks.forEach(e => {
  //todo: add more event types
  e.addEventListener('click', (event) => {
    closeTOCOnClick = getComputedStyle(tocElement).getPropertyValue('--close-toc-on-click');
    console.log(closeTOCOnClick);
    if(closeTOCOnClick){
    const detailsElement = tocElement.querySelector('details');
      detailsElement.removeAttribute('open');
      console.log('close TOC')  ;
    }
  });
});
//set scroll-padding to height of summary element
const summaryElement = tocElement.querySelector('summary');
const htmlElement = document.querySelector('html');
htmlElement.style.scrollPaddingTop = `${summaryElement.clientHeight}px`;



// / / / / / / / / / / / / / / / / / / / / / / / / / /
// from https://codepen.io/desirecampbell/pen/oNJrmdO

// get all headings
const contentHeadings = document.querySelectorAll(':is(h1,h2,h3,h4,h5)');
console.log(contentHeadings.length);
//get all links in the TOC
//const tocLinks = document.querySelectorAll('nav :is(ul,ol) li a');
// how far up the page does the next section have to be to be labeled as 'current section'
const pagePercentage = 50; //50 = half way up page, 75 = almost to the top

window.addEventListener('scroll', (event) => {
  if (typeof(contentHeadings) != 'undefined' && contentHeadings != null && typeof(tocLinks) != 'undefined' && tocLinks != null) {
    // remove all TOC highlights
    tocLinks.forEach((link, index) => {
      link.classList.remove("highlight");
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
            matchFound = true;
          }
        }
      }
    });
  }
});