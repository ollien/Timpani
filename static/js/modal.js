function Modal(e,t){if(this.overlay=document.createElement("div"),this.overlay.classList.add("modal-overlay"),this.overlay.addEventListener("transitionend",function(e){this.parentNode.removeChild(this)}),this.zIndex=-1,null==t?this.config={keyboard:!0}:this.config=t,e instanceof HTMLElement)this.element=e;else{if(this.element=document.querySelector(e),null==this.element)throw new Error("element does not exist.");if(!this.element.classList.contains("modal"))throw new Error("element must have class modal")}if(buttonsEl=this.element.querySelector(".modal-buttons"),null!=buttonsEl){buttons=Array.prototype.slice.call(buttonsEl.childNodes);var n=this;document.addEventListener("keyup",function(e){n.config.keyboard&&27===e.keyCode&&n.element.classList.contains("active")&&n.zIndex===Modal.highestZIndex&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopImmediatePropagation(),n.hide())}),buttons.forEach(function(e){1===e.nodeType&&(e.classList.contains("positive")&&document.addEventListener("keyup",function(t){n.config.keyboard&&(console.log(t.keyCode),console.log(n.element.classList.contains("active")),console.log(n.zIndex),console.log(Modal.highestZIndex),13===t.keyCode&&n.element.classList.contains("active")&&n.zIndex===Modal.highestZIndex&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopImmediatePropagation(),e.click()))}),e.addEventListener("click",function(e){var t=null,s=null;try{t=new Event("pressed",{cancelable:!0})}catch(i){t=document.createEvent("event"),t.initEvent("pressed",!1,!0)}if(t.el=this,this.classList.contains("positive"))try{s=new Event("positive-pressed",{cancelable:!0})}catch(i){t=document.createEvent("event"),t.initEvent("positive-pressed",!1,!0)}else if(this.classList.contains("negative")){s=new Event("negative-pressed",{cancelable:!0});try{s=new Event("negative-pressed",{cancelable:!0})}catch(i){t=document.createEvent("event"),t.initEvent("negative-pressed",!1,!0)}}n.element.dispatchEvent(t),null!==s&&(s.el=this,n.element.dispatchEvent(s)),!t.defaultPrevented&&t.returnValue&&(null==s||!s.defaultPrevented&&s.returnValue)&&n.hide()}))})}}Modal.prototype.show=function(){var e=null;try{e=new Event("show",{cancelable:!0})}catch(t){e=document.createEvent("event"),e.initEvent("show",!1,!0)}this.element.dispatchEvent(e),e.defaultPrevented&&!e.returnValue||(this.element.classList.contains("active")||(this.overlay.style.zIndex=Modal.highestZIndex,this.element.style.zIndex=Modal.highestZIndex+1,Modal.highestZIndex+=2,this.zIndex=Modal.highestZIndex),this.element.classList.add("active"),document.body.appendChild(this.overlay),this.overlay.classList.add("active"))},Modal.prototype.hide=function(){var e=null;try{e=new Event("hide",{cancelable:!0})}catch(t){e=document.createEvent("event"),e.initEvent("hide",!1,!0)}if(this.element.dispatchEvent(e),!e.defaultPrevented||e.returnValue){this.element.classList.contains("active")&&(this.overlay.style.zIndex="",this.element.style.zIndex="",Modal.highestZIndex-=2),this.element.classList.remove("active");this.overlay.classList.remove("active")}},Modal.prototype.toggle=function(){this.element.classList.contains("active")?this.hide():this.show()},Modal.prototype.addEventListener=function(){this.element.addEventListener.apply(this,arguments)},Modal.highestZIndex=0;