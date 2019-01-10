(function() {
  const createToolTip = function() {
    const toolTip = document.createElement("div");
    toolTip.classList.add("tooltip");
    document.body.appendChild(toolTip);

    function throttle(func, ms) {
      var isThrottled = false;
        let savedArgs;
        let savedThis;

      function wrapper() {
        if (isThrottled) {                                               
          savedArgs = arguments;
          savedThis = this;
          return;
        }

        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(function() {
          isThrottled = false;
          if (savedArgs) {       
            wrapper.apply(this,savedArgs)       
            savedArgs = null;          
          }
        }, ms);
      }

      return wrapper;
    }

    let showToolTip =  function(X,Y) {
      toolTip.style.left = X + "px";
      toolTip.style.top = Y - 130 + "px";
      toolTip.innerHTML = "X :" + X + " Y: " + Y;
    }
    showToolTip = throttle(showToolTip,500);
    window.addEventListener("mousemove", function(e) {
      showToolTip(e.screenX,e.screenY);
    });
  };
  createToolTip();
}());
