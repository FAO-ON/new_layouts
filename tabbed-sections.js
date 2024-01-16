console.log('tabbed-sections.js loaded');

//get all tabbed-sections headers
const tabs = document.querySelectorAll('.tabbed-sections > :is(h2,h3,h4,h5,h6,.tab)');
const sections = document.querySelectorAll('.tabbed-sections > section');
console.log(tabs.length,'tabs found.', sections.length,'sections found.');
//add listener to each tab
tabs.forEach(tab => tab.addEventListener('click', function() {
  console.log('clicked tab:',this.textContent)
  //if clicked tab is already open, close it
  if(this.classList.contains('active')) {
    this.classList.remove('active');
    document.querySelector('.tabbed-sections > section.open').classList.remove('open');
    console.log('removed active from',this.textContent);
    this.blur();
  }else{
    //remove active from all tabs
    tabs.forEach(tab => {
      tab.classList.remove('active')
      // console.log('removed active from',tab);
    });
    //add active to clicked tab
    this.classList.add('active');
    // console.log('added active to',this);

    //remove open class from all sections
    sections.forEach(section => {
      section.classList.remove('open');
      // console.log('removed open from',section);
    });
    //add open class to section
    document.querySelector('.tabbed-sections > :is(.tab,h2,h3,h4,h5,h6):focus + section').classList.add('open');
    // console.log('added open to',document.querySelector('.tabbed-sections > :is(.tab,h2,h3,h4,h5,h6):focus + section'));
  }
}));


