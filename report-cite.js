console.log('report-cite.js loaded');

      
const copyButtons = document.querySelectorAll('#report-cite button');
copyButtons.forEach(button => button.addEventListener('click', () => {
  // get the citation text
  let spanElement = button.previousElementSibling;
  console.log(spanElement.tagName)
  // while(spanElement.tagName !== 'span'){
  //   spanElement = spanElement.previousElementSibling;
  // }
  const copyText = spanElement.textContent;
  //copy to clipboard
  navigator.clipboard.writeText(copyText);
  
  if(copyText){
    console.log('Copied citation:',copyText);
    //create a new element indicate success
    const messageElement = document.createElement('div');
    messageElement.classList.add('report-cite-message');
    messageElement.textContent = 'Copied!';
    button.parentNode.appendChild(messageElement);
    //remove the element after 1 second
    setTimeout(() => messageElement.remove(), 1000);
  
  }else{
    console.log('Error copying citation');
  }

}));





