var PASSWORDS_DO_NOT_MATCH="Passwords do not match.";document.addEventListener("DOMContentLoaded",function(e){function t(e){e.addEventListener("click",function(e){r.show(),A=this.parentNode.getAttribute("user_id");var t=new XMLHttpRequest;t.open("GET","/get_user_info/"+A),t.addEventListener("load",function(e){var n=JSON.parse(t.responseText);0===n.error?(b.textContent=n.info.username,S.textContent=n.info.full_name,0===n.info.permissions.length?(k.style.display="",C.style.display="none"):(k.style.display="none",C.style.display="",I.style.display=n.info.permissions.indexOf("can_write_posts")>-1?"":"none",O.style.display=n.info.permissions.indexOf("can_change_settings")>-1?"":"none")):1===n.error&&(window.location="/login")}),t.send()})}function n(e){userElements=m.querySelectorAll("li.user");for(var t=0;t<userElements.length;t++)if(userElements[t].querySelector("span.username").textContent.toLowerCase()>e.toLowerCase())return userElements[t];return null}var s=document.getElementById("add-user-modal"),i=document.getElementById("user-info-modal"),o=document.getElementById("change-password-modal"),d=document.getElementById("edit-permissions-modal"),a=new Modal(s);a.positiveButton=a.element.querySelector("button.positive");var r=new Modal(i);r.positiveButton=a.element.querySelector("button.positive");var u=new Modal(o);u.positiveButton=u.element.querySelector("button.positive");var l=new Modal(d);l.positiveButton=l.element.querySelector("button.positive");var c=document.getElementById("add-user-button"),m=document.getElementById("users-list"),p=document.getElementById("create-user-form"),v=p.querySelector("button"),y=Array.prototype.slice.call(document.querySelectorAll(".user-info-button")),g=document.getElementById("change-password-button"),f=document.getElementById("edit-permissions-button"),E=document.getElementById("username-input"),h=document.getElementById("full-name-input"),w=document.getElementById("password-input"),B=document.getElementById("confirm-password-input"),L=document.getElementById("can-change-settings-checkbox"),_=document.getElementById("can-write-posts-checkbox"),b=document.getElementById("username-display"),S=document.getElementById("full-name-display"),C=document.getElementById("permission-info"),I=document.getElementById("can-change-settings"),O=document.getElementById("can-write-posts"),k=document.getElementById("no-permissions"),A=-1,D=document.getElementById("reset-password-input"),T=document.getElementById("confirm-password-reset-input"),x=document.getElementById("change-password-form"),V=x.querySelector("button"),M=document.getElementById("can-change-settings-edit-checkbox"),q=document.getElementById("can-write-posts-edit-checkbox");c.addEventListener("click",function(e){a.show()}),p.addEventListener("submit",function(e){a.positiveButton.classList.add("working"),a.positiveButton.disabled=!0,e.preventDefault(),p.checkValidity();var s=new FormData;s.append(E.getAttribute("name"),E.value),s.append(h.getAttribute("name"),h.value),s.append(w.getAttribute("name"),w.value),L.checked&&s.append(L.getAttribute("name"),"on"),_.checked&&s.append(_.getAttribute("name"),"on");var i=new XMLHttpRequest;i.open("POST","/create_user"),i.addEventListener("load",function(e){var s=JSON.parse(i.responseText);if(a.positiveButton.classList.remove("working"),a.positiveButton.disabled=!1,0===s.error){var o=s.user_id,d=document.createElement("li");d.setAttribute("user_id",o),d.classList.add("user");var r=document.createElement("span");r.classList.add("username"),r.textContent=E.value,d.appendChild(r);var u=document.createElement("span");u.classList.add("user-info-button"),u.classList.add("fa"),u.classList.add("fa-info-circle"),y.push(u),t(u),d.appendChild(u),d.style.opacity=0,d.style.height="0px";var l=n(E.value);null===l?m.appendChild(d):m.insertBefore(d,l),window.getComputedStyle(d).opacity,window.getComputedStyle(d).height,d.style.opacity=1,d.style.height="",a.hide()}else 1===s.error?window.location="/login":2===s.error&&(E.setCustomValidity("Username already in use!"),v.click())}),i.send(s)}),E.addEventListener("input",function(e){this.setCustomValidity("")}),w.addEventListener("input",function(e){this.setCustomValidity(""),this.value!==B.value&&this.setCustomValidity(PASSWORDS_DO_NOT_MATCH)}),B.addEventListener("input",function(e){w.setCustomValidity(""),w.value!==this.value&&w.setCustomValidity(PASSWORDS_DO_NOT_MATCH)}),a.element.addEventListener("positive-pressed",function(e){e.preventDefault(),v.click()}),a.element.addEventListener("hide",function(e){p.reset(),w.setCustomValidity(""),B.setCustomValidity(""),E.setCustomValidity("")}),y.forEach(t),g.addEventListener("click",function(e){u.show()}),x.addEventListener("submit",function(e){u.positiveButton.classList.add("working"),a.positiveButton.disabled=!0,e.preventDefault(),p.checkValidity();var t=new FormData;t.append("userId",A),t.append(D.getAttribute("name"),D.value);var n=new XMLHttpRequest;n.open("POST","/reset_password",!0),n.addEventListener("load",function(e){u.positiveButton.classList.add("working"),a.positiveButton.disabled=!1;var t=JSON.parse(n.responseText);0===t.error?u.hide():window.location="/login"}),n.send(t)}),D.addEventListener("input",function(e){D.setCustomValidity(""),this.value!==T.value&&D.setCustomValidity(PASSWORDS_DO_NOT_MATCH)}),T.addEventListener("input",function(e){D.setCustomValidity(""),this.value!==D.value&&D.setCustomValidity(PASSWORDS_DO_NOT_MATCH)}),u.element.addEventListener("positive-pressed",function(e){e.preventDefault(),V.click()}),u.element.addEventListener("hide",function(e){x.reset(),D.setCustomValidity("")}),f.addEventListener("click",function(e){l.show();var t=new XMLHttpRequest;t.open("GET","/get_user_info/"+A,!0),t.addEventListener("load",function(e){var n=JSON.parse(t.responseText);M.checked=n.info.permissions.indexOf("can_change_settings")>-1,q.checked=n.info.permissions.indexOf("can_write_posts")>-1}),t.send()}),l.element.addEventListener("positive-pressed",function(e){l.positiveButton.classList.add("working"),a.positiveButton.disabled=!0,e.preventDefault();var t=new FormData;t.append("userId",A),M.checked&&t.append(L.getAttribute("name"),"on"),q.checked&&t.append(_.getAttribute("name"),"on");var n=new XMLHttpRequest;n.open("POST","/change_user_permisisons",!0),n.addEventListener("load",function(e){l.positiveButton.classList.remove("working"),a.positiveButton.disabled=!1,l.hide()}),n.send(t)})});