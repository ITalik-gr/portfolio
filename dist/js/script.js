let casesItems = document.querySelectorAll('.cases-item');

function hoverCasesItem(e, item) {
  let span = item.querySelector('.cases-item__type');
  if(e.type == 'mouseover') {
    span.textContent = `check live project`
  } else if (e.type == 'mouseout') {
    span.textContent = `${span.getAttribute('data-type')}`
  }
}
casesItems.forEach((item) => {
  item.addEventListener('mouseover', (e) => hoverCasesItem(e, item))
  item.addEventListener('mouseout', (e) => hoverCasesItem(e, item))
})