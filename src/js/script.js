(function() {
  const createToolTip = function() {
    const toolTip = document.createElement("div");
    toolTip.classList.add("tooltip");
    document.body.appendChild(toolTip);
  }

  const throttle = function(fn, time) {
    let pause = false;
    let tempArg;
    return function delay() {
      if (!pause) {
        pause = true;
        fn.apply(this, arguments);

        setTimeout(function() {
          pause = false;
          if(tempArg) {
            delay.apply(this,tempArg);
            tempArg = null;
          }
        }, time);
      }
      tempArg = arguments;
    };
  };

    let showToolTip =  function(X,Y) {
      const toolTip = document.querySelector('.tooltip');
      toolTip.style.left = X + "px";
      toolTip.style.top = Y - 130 + "px";
      toolTip.innerHTML = "X :" + X + " Y: " + Y;
    }
    showToolTip = throttle(showToolTip,500);
    window.addEventListener("mousemove", function(e) {
      showToolTip(e.screenX,e.screenY);
    });
  createToolTip();
}());
