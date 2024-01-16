console.log('report-cite.js loaded');

      
// const copyButtons = document.querySelectorAll('#report-cite button');
// copyButtons.forEach(button => button.addEventListener('click', () => {
//   // get the citation text
//   let spanElement = button.previousElementSibling;
//   console.log(spanElement.tagName)
//   // while(spanElement.tagName !== 'span'){
//   //   spanElement = spanElement.previousElementSibling;
//   // }
//   const copyText = spanElement.textContent;
//   //copy to clipboard
//   navigator.clipboard.writeText(copyText);
  
//   if(copyText){
//     console.log('Copied citation:',copyText);
//     //create a new element indicate success
//     const messageElement = document.createElement('div');
//     messageElement.classList.add('report-cite-message');
//     messageElement.textContent = 'Copied!';
//     button.parentNode.appendChild(messageElement);
//     //remove the element after 1 second
//     setTimeout(() => messageElement.remove(), 1000);
  
//   }else{
//     console.log('Error copying citation');
//   }

// }));


const copyButtons = document.querySelectorAll('.copy-button');
copyButtons.forEach(button => {
  button.addEventListener('click', function() {
    //get id of element to copy
    const copyTarget = document.getElementById(button.dataset.copytarget);
    //if coptTarget has no textContent, get value
    let copyText = copyTarget.textContent;
    if(!copyText){
      copyText = copyTarget.value;
    }
    //copy text to clipboard
    console.log('copying',copyText);
    navigator.clipboard.writeText(copyText);
    //display message on page
    button.classList.add('copied');
    setTimeout(() => button.classList.remove('copied'), 3000);
  });
});



