var PASSWORDS_DO_NOT_MATCH="Passwords do not match.";document.addEventListener("DOMContentLoaded",function(e){var t=document.getElementById("add-user-modal"),n=document.getElementById("user-info-modal"),s=new Modal(t);s.positiveButton=s.element.querySelector("button.positive");var i=new Modal(n);i.positiveButton=s.element.querySelector("button.positive");var o=document.getElementById("add-user-button"),d=document.getElementById("users-list"),a=document.getElementById("create-user-form"),r=a.querySelector("button"),u=document.querySelectorAll(".user-info-button"),l=document.getElementById("username-input"),c=document.getElementById("full-name-input"),m=document.getElementById("password-input"),p=document.getElementById("confirm-password-input"),y=document.getElementById("can-change-settings-checkbox"),v=document.getElementById("can-write-posts-checkbox"),g=document.getElementById("username-display"),f=document.getElementById("full-name-display"),E=document.getElementById("permission-info"),h=document.getElementById("can-change-settings"),B=document.getElementById("can-write-posts"),L=document.getElementById("no-permissions");o.addEventListener("click",function(e){s.show()}),a.addEventListener("submit",function(e){s.positiveButton.classList.add("working"),e.preventDefault(),a.checkValidity();var t=new FormData;t.append(l.getAttribute("name"),l.value),t.append(c.getAttribute("name"),c.value),t.append(m.getAttribute("name"),m.value),y.checked&&t.append(y.getAttribute("name"),"on"),v.checked&&t.append(v.getAttribute("name"),"on");var n=new XMLHttpRequest;n.open("POST","/create_user"),n.addEventListener("load",function(e){var t=JSON.parse(n.responseText);if(s.positiveButton.classList.remove("working"),0===t.error){var i=t.user_id,o=document.createElement("li");o.setAttribute("user_id",i),o.classList.add("user");var a=document.createElement("span");a.classList.add("username"),a.textContent=l.value,o.appendChild(a),o.classList.add("fading"),d.appendChild(o),o.classList.remove("fading"),s.hide()}else 1===t.error?window.location="/login":2===t.error&&(l.setCustomValidity("Username already in use!"),r.click())}),n.send(t)}),l.addEventListener("input",function(e){this.setCustomValidity("")}),m.addEventListener("input",function(e){this.setCustomValidity(""),this.value!==p.value&&this.setCustomValidity(PASSWORDS_DO_NOT_MATCH)}),p.addEventListener("input",function(e){m.setCustomValidity(""),m.value!==this.value&&m.setCustomValidity(PASSWORDS_DO_NOT_MATCH)}),s.element.addEventListener("positive-pressed",function(e){e.preventDefault(),r.click()}),s.element.addEventListener("hide",function(e){a.reset(),m.setCustomValidity(""),p.setCustomValidity(""),l.setCustomValidity("")}),Array.prototype.slice.call(u).forEach(function(e){e.addEventListener("click",function(e){i.show();var t=this.parentNode.getAttribute("user_id"),n=new XMLHttpRequest;n.open("GET","/get_user_info/"+t),n.addEventListener("load",function(e){var t=JSON.parse(n.responseText);0===t.error?(g.textContent=t.info.username,f.textContent=t.info.full_name,0===t.info.permissions.length?(L.style.display="",E.style.display="none"):(L.style.display="none",E.style.display="",h.style.display=t.info.permissions.indexOf("can_write_posts")>-1?"":"none",B.style.display=t.info.permissions.indexOf("can_change_settings")>-1?"":"none")):1===t.error&&(window.location="/login")}),n.send()})})});