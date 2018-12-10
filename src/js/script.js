(function() {
  const createToolTip = function() {
    const toolTip = document.createElement('div');
    toolTip.classList.add('tooltip');
    document.body.appendChild(toolTip);

    window.addEventListener('mousemove', function(e){
      toolTip.style.left = e.screenX + 'px';
      toolTip.style.top = e.screenY - 130 + 'px';
      toolTip.innerHTML = 'X :'+ e.screenX + ' Y: ' + e.screenY
    })
    
  }
  createToolTip();
}())