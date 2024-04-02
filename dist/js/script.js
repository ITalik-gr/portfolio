


// hover cuursor

let casesItems = document.querySelectorAll('.cases-item');

function hoverCasesItem(e, item) {
  let span = item.querySelector('.cases-item__type');
  if(e.type == 'mouseover') {
    span.textContent = `${span.getAttribute('data-hover')}`
  } else if (e.type == 'mouseout') {
    span.textContent = `${span.getAttribute('data-type')}`
  }
}
casesItems.forEach((item) => {
  item.addEventListener('mouseover', (e) => hoverCasesItem(e, item))
  item.addEventListener('mouseout', (e) => hoverCasesItem(e, item))
})


// Scroll click

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  if(anchor.getAttribute('href')[0] !== '#') {
    continue;
  }
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}