var PASSWORDS_DO_NOT_MATCH="Passwords do not match.";document.addEventListener("DOMContentLoaded",function(e){var t=document.getElementById("add-user-modal"),n=document.getElementById("user-info-modal"),i=new Modal(t);i.positiveButton=i.element.querySelector("button.positive");var d=new Modal(n);d.positiveButton=i.element.querySelector("button.positive");var s=document.getElementById("add-user-button"),a=document.getElementById("users-list"),o=document.getElementById("create-user-form"),u=o.querySelector("button"),r=document.querySelectorAll(".user-info-button"),l=document.getElementById("username-input"),c=document.getElementById("full-name-input"),m=document.getElementById("password-input"),p=document.getElementById("confirm-password-input"),v=document.getElementById("can-change-settings-checkbox"),y=document.getElementById("can-write-posts-checkbox");s.addEventListener("click",function(e){i.show()}),o.addEventListener("submit",function(e){i.positiveButton.classList.add("working"),e.preventDefault(),o.checkValidity();var t=new FormData;t.append(l.getAttribute("name"),l.value),t.append(c.getAttribute("name"),c.value),t.append(m.getAttribute("name"),m.value),v.checked&&t.append(v.getAttribute("name"),"on"),y.checked&&t.append(y.getAttribute("name"),"on");var n=new XMLHttpRequest;n.open("POST","/create_user"),n.addEventListener("load",function(e){var t=JSON.parse(n.responseText);if(i.positiveButton.classList.remove("working"),0===t.error){var d=t.user_id,s=document.createElement("li");s.setAttribute("user_id",d),s.classList.add("user");var o=document.createElement("span");o.classList.add("username"),o.textContent=l.value,s.appendChild(o),s.classList.add("fading"),a.appendChild(s),s.classList.remove("fading"),i.hide()}else 1===t.error?window.location="/login":2===t.error&&(l.setCustomValidity("Username already in use!"),u.click())}),n.send(t)}),l.addEventListener("input",function(e){this.setCustomValidity("")}),m.addEventListener("input",function(e){this.setCustomValidity(""),this.value!==p.value&&this.setCustomValidity(PASSWORDS_DO_NOT_MATCH)}),p.addEventListener("input",function(e){m.setCustomValidity(""),m.value!==this.value&&m.setCustomValidity(PASSWORDS_DO_NOT_MATCH)}),i.element.addEventListener("positive-pressed",function(e){e.preventDefault(),u.click()}),i.element.addEventListener("hide",function(e){o.reset(),m.setCustomValidity(""),p.setCustomValidity(""),l.setCustomValidity("")}),Array.prototype.slice.call(r).forEach(function(e){e.addEventListener("click",function(e){d.show()})})});