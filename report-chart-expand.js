console.log('report-chart-expand.js loaded');

const chartImages = document.querySelectorAll('.report-chart img');
chartImages.forEach((img) => {
  const expandButton = document.createElement('button');
  const buttonImage = document.createElement('img');
  const imgSrcExpand = 'imgs/icons/icon-expand.svg';
  const imgSrcClose = 'imgs/icons/icon-close.svg';
  buttonImage.src = imgSrcExpand;
  buttonImage.alt = 'Expand chart image';
  // expandButton.innerHTML = 'Expand';
  expandButton.classList.add('expand-button');
  expandButton.appendChild(buttonImage);
  expandButton.addEventListener('click', () => {
    const chart = img.parentElement;
    chart.classList.toggle('expanded-image');
    if(chart.classList.contains('expanded-image')){
      buttonImage.src = imgSrcClose;
      buttonImage.alt = 'Close chart image';
      //close on scroll
      window.addEventListener('scroll', () => {
        if(chart.classList.contains('expanded-image')){
          chart.classList.remove('expanded-image');
          buttonImage.src = imgSrcExpand;
          buttonImage.alt = 'Expand chart image';
        }
      });
    } else {
      buttonImage.src = imgSrcExpand;
      buttonImage.alt = 'Expand chart image';
    }
  });
  img.parentElement.appendChild(expandButton);
});




console.log('report-chart-share.js loaded');

// const chartImages = document.querySelectorAll('.report-chart img');
chartImages.forEach((img) => {
  const shareButton = document.createElement('button');
  const buttonImage = document.createElement('img');
  const imgSrcShare = 'imgs/icons/icon-share.svg';
  buttonImage.src = imgSrcShare;
  buttonImage.alt = 'Share chart image';
  // shareButton.innerHTML = 'Share';
  shareButton.classList.add('share-button');
  img.parentElement.appendChild(shareButton);
  shareButton.appendChild(buttonImage);
});


