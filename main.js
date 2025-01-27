!function(){"use strict";var e="";const t={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__submit-btn",inactiveButtonClass:"modal__submit-btn_disabled_error",inputErrorClass:"modal__input_type_error",errorClass:"modal__error_visible"},r=(e,t,r)=>{e.querySelector(`#${t.id}-error`).textContent="",t.classList.remove(r.inputErrorClass)},n=(e,t,r)=>{(e=>e.some((e=>!e.validity.valid)))(e)?o(t,r):(t.disabled=!1,t.classList.remove(r.inactiveButtonClass))},o=(e,t)=>{e.disabled=!0,e.classList.add(t.inactiveButtonClass)};var a=e+"d3610e9c6dce3cb370d8.svg",s=e+"40608da7369d39bc1077.svg",c=e+"d38272e02bb4f1ab1c37.svg",d=e+"2fc47fd8e9a9bcd9612f.jpg",l=e+"a5d2fa0dc3858ef4db94.svg";document.getElementById("header-logo").src=a,document.getElementById("plus").src=s,document.getElementById("pencil").src=c,document.getElementById("avatar").src=d,document.getElementById("pencil-light").src=l;const i=new class{constructor(e){let{baseUrl:t,headers:r}=e;this._baseUrl=t,this._headers=r}getAppInfo(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}getInitialCards(){return fetch(`${this._baseUrl}/cards`,{headers:this._headers}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}addNewCard(e){let{name:t,link:r}=e;return fetch(`${this._baseUrl}/cards`,{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:r})}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}getUserInfo(){return fetch(`${this._baseUrl}/users/me`,{headers:this._headers}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}editUserInfo(e){let{name:t,about:r}=e;return fetch(`${this._baseUrl}/users/me`,{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:r})}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}editAvatarInfo(e){return fetch(`${this._baseUrl}/users/me/avatar`,{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}deleteCard(e){return fetch(`${this._baseUrl}/cards/${e}`,{method:"DELETE",headers:this._headers}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}changeLikeStatus(e,t){return fetch(`${this._baseUrl}/cards/${e}/likes`,{method:t?"DELETE":"PUT",headers:this._headers}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}}({baseUrl:"https://around-api.en.tripleten-services.com/v1",headers:{authorization:"b78caabf-43de-4c58-86fc-7378db5d190d","Content-Type":"application/json"}});i.getAppInfo().then((e=>{let[t,r]=e;t.forEach((e=>{const t=F(e);H.append(t)})),v.src=r.avatar,_.textContent=r.name,h.textContent=r.about})).catch(console.error);const u=document.querySelector(".profile__edit-btn"),m=document.querySelector(".profile__add-btn"),_=document.querySelector(".profile__name"),h=document.querySelector(".profile__description"),v=document.querySelector(".profile__avatar"),f=document.querySelector("#avatar-modal"),y=document.querySelector(".profile__avatar-btn"),b=f.querySelector(".modal__form"),S=(f.querySelector(".modal__submit-btn"),f.querySelector(".modal__close-btn")),p=f.querySelector("#profile-avatar-input"),E=document.querySelector("#edit-modal"),q=E.querySelector(".modal__content"),k=E.querySelector(".modal__close-btn"),g=E.querySelector("#profile-name-input"),L=E.querySelector("#profile-description-input"),C=document.querySelector("#delete-modal"),x=C.querySelector(".modal__close-btn"),$=(C.querySelector(".modal__delete-btn"),C.querySelector(".modal__cancel-btn")),j=C.querySelector(".modal__form"),I=document.querySelector("#add-card-modal"),U=I.querySelector(".modal__form"),P=I.querySelector(".modal__submit-btn"),B=I.querySelector(".modal__close-btn"),A=I.querySelector("#add-card-name-input"),D=I.querySelector("#add-card-link-input"),w=document.querySelector("#preview-modal"),T=w.querySelector(".modal__image"),N=w.querySelector(".modal__caption"),O=w.querySelector(".modal__close-btn"),J=document.querySelector("#card-template"),H=document.querySelector(".cards__list");let z,M;function F(e){const t=J.content.querySelector(".card").cloneNode(!0),r=t.querySelector(".card__title"),n=t.querySelector(".card__image"),o=t.querySelector(".card__like-btn"),a=t.querySelector(".card__delete-btn");return e.isLiked&&o.classList.add("card__like-button_liked"),r.textContent=e.name,n.src=e.link,n.alt=e.name,n.addEventListener("click",(()=>{G(w),N.textContent=e.name,T.src=e.link,T.alt=e.name})),o.addEventListener("click",(t=>function(e,t){e.preventDefault();const r=e.target,n=r.classList.contains("card__like-button_liked");i.changeLikeStatus(t,n).then((()=>{r.classList.toggle("card__like-button_liked")})).catch(console.error)}(t,e._id))),a.addEventListener("click",(()=>function(e,t){z=e,M=t,G(C)}(t,e._id))),t}function G(e){e.classList.add("modal_is-opened"),document.addEventListener("keydown",Q),e.addEventListener("mousedown",R)}function K(e){e.classList.remove("modal_is-opened"),document.removeEventListener("keydown",Q),e.removeEventListener("mousedown",R)}function Q(e){"Escape"===e.key&&K(document.querySelector(".modal_is-opened"))}function R(e){e.target.classList.contains("modal_is-opened")&&K(e.target)}var V;u.addEventListener("click",(()=>{var e,n;g.value=_.textContent,L.value=h.textContent,e=q,n=t,[g,L].forEach((t=>{r(e,t,n)})),G(E)})),k.addEventListener("click",(()=>{K(E)})),m.addEventListener("click",(()=>{G(I)})),B.addEventListener("click",(()=>{K(I)})),O.addEventListener("click",(()=>{K(w)})),y.addEventListener("click",(()=>{G(f)})),S.addEventListener("click",(()=>{K(f)})),x.addEventListener("click",(()=>{K(C)})),$.addEventListener("click",(()=>{K(C)})),q.addEventListener("submit",(function(e){e.preventDefault();const t=e.submitter;t.textContent="Saving...",i.editUserInfo({name:g.value,about:L.value}).then((e=>{_.textContent=e.name,h.textContent=e.about,K(E)})).catch(console.error).finally((()=>{t.textContent="Save"}))})),U.addEventListener("submit",(function(e){e.preventDefault();const r=e.submitter;r.textContent="Saving...";const n={name:A.value,link:D.value};i.addNewCard(n).then((r=>{const n=F(r);H.prepend(n),e.target.reset(),o(P,t),K(I)})).catch(console.error).finally((()=>{r.textContent="Save"}))})),b.addEventListener("submit",(function(e){e.preventDefault();const t=e.submitter;t.textContent="Saving...",i.editAvatarInfo(p.value).then((e=>{v.src=e.avatar,K(f)})).catch(console.error).finally((()=>{t.textContent="Save"}))})),j.addEventListener("submit",(function(e){e.preventDefault();const t=e.submitter;t.textContent="Deleting...",i.deleteCard(M).then((()=>{z.remove(),K(C)})).catch(console.error).finally((()=>{t.textContent="Delete"}))})),V=t,document.querySelectorAll(V.formSelector).forEach((e=>{((e,t)=>{const o=Array.from(e.querySelectorAll(t.inputSelector)),a=e.querySelector(t.submitButtonSelector);n(o,a,t),o.forEach((s=>{s.addEventListener("input",(function(){((e,t,n)=>{t.validity.valid?r(e,t,n):((e,t,r,n)=>{e.querySelector(`#${t.id}-error`).textContent=r,t.classList.add(n.inputErrorClass)})(e,t,t.validationMessage,n)})(e,s,t),n(o,a,t)}))}))})(e,V)}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUNYakUsTUFBSyxLQUNKZ0UsRUFBYWxHLFNBQ2IySCxFQUFXeEMsRUFBWSxJQUV4QmYsTUFBTUMsUUFBUUMsT0FDZDRELFNBQVEsS0FDUEYsRUFBVWxJLFlBQWMsUUFBUSxHQUV0QyxJRnBKaUNILEVFd09oQlYsRUZ2T0UyQixTQUFTMkgsaUJBQWlCNUksRUFBT1QsY0FDekN5RSxTQUFTbEUsSUFoQk0rSSxFQUFDL0ksRUFBUUUsS0FDakMsTUFBTU8sRUFBWXVJLE1BQU1DLEtBQUtqSixFQUFPOEksaUJBQWlCNUksRUFBT1IsZ0JBQ3REd0osRUFBZ0JsSixFQUFPRyxjQUFjRCxFQUFPUCxzQkFFbERhLEVBQWtCQyxFQUFXeUksRUFBZWhKLEdBRTVDTyxFQUFVeUQsU0FBU2lGLElBQ2pCQSxFQUFhaEMsaUJBQWlCLFNBQVMsV0F6Q2hCaUMsRUFBQ3BKLEVBQVFDLEVBQVNDLEtBQ3RDRCxFQUFRWSxTQUFTQyxNQUdwQmYsRUFBZUMsRUFBUUMsRUFBU0MsR0FoQmJtSixFQUFDckosRUFBUUMsRUFBU3FKLEVBQVVwSixLQUM5QkYsRUFBT0csY0FBYyxJQUFJRixFQUFRRyxZQUN6Q0MsWUFBY2lKLEVBQ3pCckosRUFBUUssVUFBVVksSUFBSWhCLEVBQU9MLGdCQUFnQixFQVczQ3dKLENBQWVySixFQUFRQyxFQUFTQSxFQUFRc0osa0JBQW1CckosRUFHN0QsRUFxQ0lrSixDQUFtQnBKLEVBQVFtSixFQUFjakosR0FDekNNLEVBQWtCQyxFQUFXeUksRUFBZWhKLEVBQzlDLEdBQUUsR0FDRixFQU1BNkksQ0FBa0IvSSxFQUFRRSxFQUFPLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZV9wcm9qZWN0X3Nwb3RzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NlX3Byb2plY3Rfc3BvdHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9zcG90cy8uL3NyYy9zY3JpcHRzL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9zcG90cy8uL3NyYy91dGlscy9BcGkuanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9zcG90cy8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJleHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG4gIGZvcm1TZWxlY3RvcjogXCIubW9kYWxfX2Zvcm1cIixcbiAgaW5wdXRTZWxlY3RvcjogXCIubW9kYWxfX2lucHV0XCIsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5tb2RhbF9fc3VibWl0LWJ0blwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcIm1vZGFsX19zdWJtaXQtYnRuX2Rpc2FibGVkX2Vycm9yXCIsXG4gIGlucHV0RXJyb3JDbGFzczogXCJtb2RhbF9faW5wdXRfdHlwZV9lcnJvclwiLFxuICBlcnJvckNsYXNzOiBcIm1vZGFsX19lcnJvcl92aXNpYmxlXCIsXG59O1xuXG5jb25zdCBzaG93SW5wdXRFcnJvciA9IChmb3JtRWwsIGlucHV0RWwsIGVycm9yTXNnLCBjb25maWcpID0+IHtcbiAgY29uc3QgZXJyb3JNc2dFbCA9IGZvcm1FbC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfS1lcnJvcmApO1xuICBlcnJvck1zZ0VsLnRleHRDb250ZW50ID0gZXJyb3JNc2c7XG4gIGlucHV0RWwuY2xhc3NMaXN0LmFkZChjb25maWcuaW5wdXRFcnJvckNsYXNzKTtcbn07XG5cbmNvbnN0IGhpZGVJbnB1dEVycm9yID0gKGZvcm1FbCwgaW5wdXRFbCwgY29uZmlnKSA9PiB7XG4gIGNvbnN0IGVycm9yTXNnRWwgPSBmb3JtRWwucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbC5pZH0tZXJyb3JgKTtcbiAgZXJyb3JNc2dFbC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGlucHV0RWwuY2xhc3NMaXN0LnJlbW92ZShjb25maWcuaW5wdXRFcnJvckNsYXNzKTtcbn07XG5cbmNvbnN0IGNoZWNrSW5wdXRWYWxpZGl0eSA9IChmb3JtRWwsIGlucHV0RWwsIGNvbmZpZykgPT4ge1xuICBpZiAoIWlucHV0RWwudmFsaWRpdHkudmFsaWQpIHtcbiAgICBzaG93SW5wdXRFcnJvcihmb3JtRWwsIGlucHV0RWwsIGlucHV0RWwudmFsaWRhdGlvbk1lc3NhZ2UsIGNvbmZpZyk7XG4gIH0gZWxzZSB7XG4gICAgaGlkZUlucHV0RXJyb3IoZm9ybUVsLCBpbnB1dEVsLCBjb25maWcpO1xuICB9XG59O1xuXG5jb25zdCBoYXNJbnZhbGlkSW5wdXQgPSAoaW5wdXRMaXN0KSA9PiB7XG4gIHJldHVybiBpbnB1dExpc3Quc29tZSgoaW5wdXQpID0+IHtcbiAgICByZXR1cm4gIWlucHV0LnZhbGlkaXR5LnZhbGlkO1xuICB9KTtcbn07XG5cbmNvbnN0IHRvZ2dsZUJ1dHRvblN0YXRlID0gKGlucHV0TGlzdCwgYnV0dG9uRWwsIGNvbmZpZykgPT4ge1xuICBpZiAoaGFzSW52YWxpZElucHV0KGlucHV0TGlzdCkpIHtcbiAgICBkaXNhYmxlQnV0dG9uKGJ1dHRvbkVsLCBjb25maWcpO1xuICB9IGVsc2Uge1xuICAgIGJ1dHRvbkVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgYnV0dG9uRWwuY2xhc3NMaXN0LnJlbW92ZShjb25maWcuaW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZXNldFZhbGlkYXRpb24gPSAoZm9ybUVsLCBpbnB1dExpc3QsIGNvbmZpZykgPT4ge1xuICBpbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBoaWRlSW5wdXRFcnJvcihmb3JtRWwsIGlucHV0LCBjb25maWcpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlQnV0dG9uID0gKGJ1dHRvbkVsLCBjb25maWcpID0+IHtcbiAgYnV0dG9uRWwuZGlzYWJsZWQgPSB0cnVlO1xuICBidXR0b25FbC5jbGFzc0xpc3QuYWRkKGNvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbn07XG5cbmNvbnN0IHNldEV2ZW50TGlzdGVuZXJzID0gKGZvcm1FbCwgY29uZmlnKSA9PiB7XG4gIGNvbnN0IGlucHV0TGlzdCA9IEFycmF5LmZyb20oZm9ybUVsLnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnLmlucHV0U2VsZWN0b3IpKTtcbiAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGZvcm1FbC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG5cbiAgdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50LCBjb25maWcpO1xuXG4gIGlucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoZWNrSW5wdXRWYWxpZGl0eShmb3JtRWwsIGlucHV0RWxlbWVudCwgY29uZmlnKTtcbiAgICAgIHRvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCwgY29uZmlnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZW5hYmxlVmFsaWRhdGlvbiA9IChjb25maWcpID0+IHtcbiAgY29uc3QgZm9ybUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNvbmZpZy5mb3JtU2VsZWN0b3IpO1xuICBmb3JtTGlzdC5mb3JFYWNoKChmb3JtRWwpID0+IHtcbiAgICBzZXRFdmVudExpc3RlbmVycyhmb3JtRWwsIGNvbmZpZyk7XG4gIH0pO1xufTtcbiIsImNsYXNzIEFwaSB7XG4gIGNvbnN0cnVjdG9yKHsgYmFzZVVybCwgaGVhZGVycyB9KSB7XG4gICAgdGhpcy5fYmFzZVVybCA9IGJhc2VVcmw7XG4gICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnM7XG4gIH1cblxuICBnZXRBcHBJbmZvKCkge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChbdGhpcy5nZXRJbml0aWFsQ2FyZHMoKSwgdGhpcy5nZXRVc2VySW5mbygpXSk7XG4gIH1cblxuICBnZXRJbml0aWFsQ2FyZHMoKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzYCwge1xuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICBQcm9taXNlLnJlamVjdChgRXJyb3I6ICR7cmVzLnN0YXR1c31gKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZE5ld0NhcmQoeyBuYW1lLCBsaW5rIH0pIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHNgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgbGluayxcbiAgICAgIH0pLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIFByb21pc2UucmVqZWN0KGBFcnJvcjogJHtyZXMuc3RhdHVzfWApO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L3VzZXJzL21lYCwge1xuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICBQcm9taXNlLnJlamVjdChgRXJyb3I6ICR7cmVzLnN0YXR1c31gKTtcbiAgICB9KTtcbiAgfVxuXG4gIGVkaXRVc2VySW5mbyh7IG5hbWUsIGFib3V0IH0pIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWVgLCB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGFib3V0LFxuICAgICAgfSksXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuICAgICAgUHJvbWlzZS5yZWplY3QoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XG4gICAgfSk7XG4gIH1cblxuICBlZGl0QXZhdGFySW5mbyhhdmF0YXIpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWUvYXZhdGFyYCwge1xuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBhdmF0YXIsXG4gICAgICB9KSxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICBQcm9taXNlLnJlamVjdChgRXJyb3I6ICR7cmVzLnN0YXR1c31gKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZUNhcmQoaWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHMvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIFByb21pc2UucmVqZWN0KGBFcnJvcjogJHtyZXMuc3RhdHVzfWApO1xuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlTGlrZVN0YXR1cyhpZCwgaXNMaWtlZCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkcy8ke2lkfS9saWtlc2AsIHtcbiAgICAgIG1ldGhvZDogaXNMaWtlZCA/IFwiREVMRVRFXCIgOiBcIlBVVFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICBQcm9taXNlLnJlamVjdChgRXJyb3I6ICR7cmVzLnN0YXR1c31gKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcGk7XG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IHtcbiAgZW5hYmxlVmFsaWRhdGlvbixcbiAgc2V0dGluZ3MsXG4gIHJlc2V0VmFsaWRhdGlvbixcbiAgZGlzYWJsZUJ1dHRvbixcbn0gZnJvbSBcIi4uL3NjcmlwdHMvdmFsaWRhdGlvbi5qc1wiO1xuaW1wb3J0IEFwaSBmcm9tIFwiLi4vdXRpbHMvQXBpLmpzXCI7XG5pbXBvcnQgSGVhZGVyU3JjIGZyb20gXCIvc3JjL2ltYWdlcy9sb2dvLnN2Z1wiO1xuaW1wb3J0IFBsdXNTcmMgZnJvbSBcIi9zcmMvaW1hZ2VzL3BsdXMuc3ZnXCI7XG5pbXBvcnQgUGVuY2lsU3JjIGZyb20gXCIvc3JjL2ltYWdlcy9wZW5jaWwuc3ZnXCI7XG5pbXBvcnQgQXZhdGFyU3JjIGZyb20gXCIvc3JjL2ltYWdlcy9hdmF0YXIuanBnXCI7XG5pbXBvcnQgUGVuY2lsTGlnaHRTcmMgZnJvbSBcIi9zcmMvaW1hZ2VzL3BlbmNpbC1saWdodC5zdmdcIjtcblxuY29uc3QgSGVhZGVyTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyLWxvZ29cIik7XG5IZWFkZXJMb2dvLnNyYyA9IEhlYWRlclNyYztcblxuY29uc3QgUGx1c0xvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsdXNcIik7XG5QbHVzTG9nby5zcmMgPSBQbHVzU3JjO1xuXG5jb25zdCBQZW5jaWxMb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZW5jaWxcIik7XG5QZW5jaWxMb2dvLnNyYyA9IFBlbmNpbFNyYztcblxuY29uc3QgQXZhdGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdmF0YXJcIik7XG5BdmF0YXIuc3JjID0gQXZhdGFyU3JjO1xuXG5jb25zdCBBdmF0YXJQZW5jaWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlbmNpbC1saWdodFwiKTtcbkF2YXRhclBlbmNpbC5zcmMgPSBQZW5jaWxMaWdodFNyYztcblxuY29uc3QgYXBpID0gbmV3IEFwaSh7XG4gIGJhc2VVcmw6IFwiaHR0cHM6Ly9hcm91bmQtYXBpLmVuLnRyaXBsZXRlbi1zZXJ2aWNlcy5jb20vdjFcIixcbiAgaGVhZGVyczoge1xuICAgIGF1dGhvcml6YXRpb246IFwiYjc4Y2FhYmYtNDNkZS00YzU4LTg2ZmMtNzM3OGRiNWQxOTBkXCIsXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIH0sXG59KTtcblxuYXBpXG4gIC5nZXRBcHBJbmZvKClcbiAgLnRoZW4oKFtjYXJkcywgbWVdKSA9PiB7XG4gICAgY2FyZHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBnZXRDYXJkRWxlbWVudChpdGVtKTtcbiAgICAgIGNhcmRzTGlzdC5hcHBlbmQoY2FyZEVsZW1lbnQpO1xuICAgIH0pO1xuICAgIHByb2ZpbGVBdmF0YXIuc3JjID0gbWUuYXZhdGFyO1xuICAgIHByb2ZpbGVOYW1lLnRleHRDb250ZW50ID0gbWUubmFtZTtcbiAgICBwcm9maWxlRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBtZS5hYm91dDtcbiAgfSlcbiAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXG4vLyBQcm9maWxlIGVsZW1lbnRzXG5jb25zdCBwcm9maWxlRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZWRpdC1idG5cIik7XG5jb25zdCBjYXJkRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ0blwiKTtcbmNvbnN0IHByb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19uYW1lXCIpO1xuY29uc3QgcHJvZmlsZURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19kZXNjcmlwdGlvblwiKTtcbmNvbnN0IHByb2ZpbGVBdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2F2YXRhclwiKTtcbmNvbnN0IGF2YXRhck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhdmF0YXItbW9kYWxcIik7XG5cbi8vQXZhdGFyIGZvcm0gZWxlbWVudHNcbmNvbnN0IGF2YXRhckVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2F2YXRhci1idG5cIik7XG5jb25zdCBhdmF0YXJGb3JtRWxlbWVudCA9IGF2YXRhck1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XG5jb25zdCBhdmF0YXJTdWJtaXRCdG4gPSBhdmF0YXJNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19zdWJtaXQtYnRuXCIpO1xuY29uc3QgYXZhdGFyTW9kYWxDbG9zZUJ0biA9IGF2YXRhck1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Nsb3NlLWJ0blwiKTtcbmNvbnN0IGF2YXRhckxpbmtJbnB1dCA9IGF2YXRhck1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS1hdmF0YXItaW5wdXRcIik7XG5cbi8vIEZvcm0gZWxlbWVudHNcbmNvbnN0IGVkaXRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1tb2RhbFwiKTtcbmNvbnN0IGVkaXRGb3JtRWxlbWVudCA9IGVkaXRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jb250ZW50XCIpO1xuY29uc3QgZWRpdE1vZGFsQ2xvc2VCdG4gPSBlZGl0TW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2xvc2UtYnRuXCIpO1xuY29uc3QgZWRpdE1vZGFsTmFtZUlucHV0ID0gZWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS1uYW1lLWlucHV0XCIpO1xuY29uc3QgZWRpdE1vZGFsRGVzY3JpcHRpb25JbnB1dCA9IGVkaXRNb2RhbC5xdWVyeVNlbGVjdG9yKFxuICBcIiNwcm9maWxlLWRlc2NyaXB0aW9uLWlucHV0XCJcbik7XG5cbi8vIERlbGV0ZSBmb3JtIGVsZW1lbmV0c1xuY29uc3QgZGVsZXRlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlbGV0ZS1tb2RhbFwiKTtcbmNvbnN0IGRlbGV0ZUNsb3NlQnRuID0gZGVsZXRlTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2xvc2UtYnRuXCIpO1xuY29uc3QgZGVsZXRlQnRuID0gZGVsZXRlTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZGVsZXRlLWJ0blwiKTtcbmNvbnN0IGRlbGV0ZUNhbmNlbEJ0biA9IGRlbGV0ZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2NhbmNlbC1idG5cIik7XG5jb25zdCBkZWxldGVGb3JtID0gZGVsZXRlTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybVwiKTtcblxuLy8gQ2FyZCBmb3JtIGVsZW1lbnRzXG5jb25zdCBjYXJkTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLW1vZGFsXCIpO1xuY29uc3QgY2FyZEZvcm1FbGVtZW50ID0gY2FyZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XG5jb25zdCBjYXJkU3VibWl0QnRuID0gY2FyZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3N1Ym1pdC1idG5cIik7XG5jb25zdCBjYXJkTW9kYWxDbG9zZUJ0biA9IGNhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jbG9zZS1idG5cIik7XG5jb25zdCBjYXJkTmFtZUlucHV0ID0gY2FyZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtbmFtZS1pbnB1dFwiKTtcbmNvbnN0IGNhcmRMaW5rSW5wdXQgPSBjYXJkTW9kYWwucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1saW5rLWlucHV0XCIpO1xuXG4vLyBQcmV2aWV3IGltYWdlIHBvcHVwIGVsZW1lbnRzXG5jb25zdCBwcmV2aWV3TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZpZXctbW9kYWxcIik7XG5jb25zdCBwcmV2aWV3TW9kYWxJbWFnZUVsID0gcHJldmlld01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2ltYWdlXCIpO1xuY29uc3QgcHJldmlld01vZGFsQ2FwdGlvbkVsID0gcHJldmlld01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2NhcHRpb25cIik7XG5jb25zdCBwcmV2aWV3TW9kYWxDbG9zZUJ0biA9IHByZXZpZXdNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jbG9zZS1idG5cIik7XG5cbi8vIENhcmQgcmVsYXRlZCBlbGVtZW50c1xuY29uc3QgY2FyZFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJkLXRlbXBsYXRlXCIpO1xuY29uc3QgY2FyZHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fbGlzdFwiKTtcblxubGV0IHNlbGVjdGVkQ2FyZCwgc2VsZWN0ZWRDYXJkSWQ7XG5cbmZ1bmN0aW9uIGdldENhcmRFbGVtZW50KGRhdGEpIHtcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkVGVtcGxhdGUuY29udGVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIilcbiAgICAuY2xvbmVOb2RlKHRydWUpO1xuXG4gIGNvbnN0IGNhcmROYW1lRWwgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RpdGxlXCIpO1xuICBjb25zdCBjYXJkSW1hZ2UgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpO1xuICBjb25zdCBjYXJkTGlrZUJ0biA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idG5cIik7XG4gIGNvbnN0IGNhcmREZWxldGVCdG4gPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2RlbGV0ZS1idG5cIik7XG5cbiAgaWYgKGRhdGEuaXNMaWtlZCkge1xuICAgIGNhcmRMaWtlQnRuLmNsYXNzTGlzdC5hZGQoXCJjYXJkX19saWtlLWJ1dHRvbl9saWtlZFwiKTtcbiAgfVxuXG4gIGNhcmROYW1lRWwudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XG4gIGNhcmRJbWFnZS5zcmMgPSBkYXRhLmxpbms7XG4gIGNhcmRJbWFnZS5hbHQgPSBkYXRhLm5hbWU7XG5cbiAgY2FyZEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb3Blbk1vZGFsKHByZXZpZXdNb2RhbCk7XG4gICAgcHJldmlld01vZGFsQ2FwdGlvbkVsLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuICAgIHByZXZpZXdNb2RhbEltYWdlRWwuc3JjID0gZGF0YS5saW5rO1xuICAgIHByZXZpZXdNb2RhbEltYWdlRWwuYWx0ID0gZGF0YS5uYW1lO1xuICB9KTtcblxuICBjYXJkTGlrZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4gaGFuZGxlTGlrZShldnQsIGRhdGEuX2lkKSk7XG5cbiAgY2FyZERlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICBoYW5kbGVEZWxldGVDYXJkKGNhcmRFbGVtZW50LCBkYXRhLl9pZClcbiAgKTtcblxuICByZXR1cm4gY2FyZEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfaXMtb3BlbmVkXCIpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFc2NDbG9zZSk7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlT3ZlckxheUNsb3NlKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfaXMtb3BlbmVkXCIpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFc2NDbG9zZSk7XG4gIG1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlT3ZlckxheUNsb3NlKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRWRpdEZvcm1TdWJtaXQoZXZ0KSB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBzdWJtaXRCdG4gPSBldnQuc3VibWl0dGVyO1xuICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlNhdmluZy4uLlwiO1xuICBhcGlcbiAgICAuZWRpdFVzZXJJbmZvKHtcbiAgICAgIG5hbWU6IGVkaXRNb2RhbE5hbWVJbnB1dC52YWx1ZSxcbiAgICAgIGFib3V0OiBlZGl0TW9kYWxEZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgIH0pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHByb2ZpbGVOYW1lLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuICAgICAgcHJvZmlsZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGF0YS5hYm91dDtcbiAgICAgIGNsb3NlTW9kYWwoZWRpdE1vZGFsKTtcbiAgICB9KVxuICAgIC5jYXRjaChjb25zb2xlLmVycm9yKVxuICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU2F2ZVwiO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVBdmF0YXJTdWJtaXQoZXZ0KSB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBzdWJtaXRCdG4gPSBldnQuc3VibWl0dGVyO1xuICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlNhdmluZy4uLlwiO1xuICBhcGlcbiAgICAuZWRpdEF2YXRhckluZm8oYXZhdGFyTGlua0lucHV0LnZhbHVlKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBwcm9maWxlQXZhdGFyLnNyYyA9IGRhdGEuYXZhdGFyO1xuICAgICAgY2xvc2VNb2RhbChhdmF0YXJNb2RhbCk7XG4gICAgfSlcbiAgICAuY2F0Y2goY29uc29sZS5lcnJvcilcbiAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlNhdmVcIjtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQWRkQ2FyZFN1Ym1pdChldnQpIHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGV2dC5zdWJtaXR0ZXI7XG4gIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU2F2aW5nLi4uXCI7XG4gIGNvbnN0IGlucHV0VmFsdWVzID0geyBuYW1lOiBjYXJkTmFtZUlucHV0LnZhbHVlLCBsaW5rOiBjYXJkTGlua0lucHV0LnZhbHVlIH07XG4gIGFwaVxuICAgIC5hZGROZXdDYXJkKGlucHV0VmFsdWVzKVxuICAgIC50aGVuKChuZXdDYXJkKSA9PiB7XG4gICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGdldENhcmRFbGVtZW50KG5ld0NhcmQpO1xuICAgICAgY2FyZHNMaXN0LnByZXBlbmQoY2FyZEVsZW1lbnQpO1xuICAgICAgZXZ0LnRhcmdldC5yZXNldCgpO1xuICAgICAgZGlzYWJsZUJ1dHRvbihjYXJkU3VibWl0QnRuLCBzZXR0aW5ncyk7XG4gICAgICBjbG9zZU1vZGFsKGNhcmRNb2RhbCk7XG4gICAgfSlcbiAgICAuY2F0Y2goY29uc29sZS5lcnJvcilcbiAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlNhdmVcIjtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRGVsZXRlU3VibWl0KGV2dCkge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3Qgc3VibWl0QnRuID0gZXZ0LnN1Ym1pdHRlcjtcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJEZWxldGluZy4uLlwiO1xuICBhcGlcbiAgICAuZGVsZXRlQ2FyZChzZWxlY3RlZENhcmRJZClcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBzZWxlY3RlZENhcmQucmVtb3ZlKCk7XG4gICAgICBjbG9zZU1vZGFsKGRlbGV0ZU1vZGFsKTtcbiAgICB9KVxuICAgIC5jYXRjaChjb25zb2xlLmVycm9yKVxuICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZUNhcmQoY2FyZEVsZW1lbnQsIGNhcmRJZCkge1xuICBzZWxlY3RlZENhcmQgPSBjYXJkRWxlbWVudDtcbiAgc2VsZWN0ZWRDYXJkSWQgPSBjYXJkSWQ7XG4gIG9wZW5Nb2RhbChkZWxldGVNb2RhbCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUxpa2UoZXZ0LCBpZCkge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbGlrZUJ1dHRvbiA9IGV2dC50YXJnZXQ7XG4gIGNvbnN0IGlzTGlrZWQgPSBsaWtlQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImNhcmRfX2xpa2UtYnV0dG9uX2xpa2VkXCIpO1xuICBhcGlcbiAgICAuY2hhbmdlTGlrZVN0YXR1cyhpZCwgaXNMaWtlZClcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBsaWtlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX19saWtlLWJ1dHRvbl9saWtlZFwiKTtcbiAgICB9KVxuICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcbn1cblxucHJvZmlsZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZWRpdE1vZGFsTmFtZUlucHV0LnZhbHVlID0gcHJvZmlsZU5hbWUudGV4dENvbnRlbnQ7XG4gIGVkaXRNb2RhbERlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBwcm9maWxlRGVzY3JpcHRpb24udGV4dENvbnRlbnQ7XG4gIHJlc2V0VmFsaWRhdGlvbihcbiAgICBlZGl0Rm9ybUVsZW1lbnQsXG4gICAgW2VkaXRNb2RhbE5hbWVJbnB1dCwgZWRpdE1vZGFsRGVzY3JpcHRpb25JbnB1dF0sXG4gICAgc2V0dGluZ3NcbiAgKTtcbiAgb3Blbk1vZGFsKGVkaXRNb2RhbCk7XG59KTtcblxuZWRpdE1vZGFsQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xvc2VNb2RhbChlZGl0TW9kYWwpO1xufSk7XG5cbmNhcmRFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG9wZW5Nb2RhbChjYXJkTW9kYWwpO1xufSk7XG5cbmNhcmRNb2RhbENsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNsb3NlTW9kYWwoY2FyZE1vZGFsKTtcbn0pO1xuXG5wcmV2aWV3TW9kYWxDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjbG9zZU1vZGFsKHByZXZpZXdNb2RhbCk7XG59KTtcblxuYXZhdGFyRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBvcGVuTW9kYWwoYXZhdGFyTW9kYWwpO1xufSk7XG5cbmF2YXRhck1vZGFsQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xvc2VNb2RhbChhdmF0YXJNb2RhbCk7XG59KTtcblxuZGVsZXRlQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xvc2VNb2RhbChkZWxldGVNb2RhbCk7XG59KTtcblxuZGVsZXRlQ2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNsb3NlTW9kYWwoZGVsZXRlTW9kYWwpO1xufSk7XG5cbmVkaXRGb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUVkaXRGb3JtU3VibWl0KTtcblxuY2FyZEZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlQWRkQ2FyZFN1Ym1pdCk7XG5cbmF2YXRhckZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlQXZhdGFyU3VibWl0KTtcblxuZGVsZXRlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZURlbGV0ZVN1Ym1pdCk7XG5cbmZ1bmN0aW9uIGhhbmRsZUVzY0Nsb3NlKGV2dCkge1xuICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgIGNvbnN0IGFjdGl2ZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9pcy1vcGVuZWRcIik7XG4gICAgY2xvc2VNb2RhbChhY3RpdmVNb2RhbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlT3ZlckxheUNsb3NlKGV2dCkge1xuICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9pcy1vcGVuZWRcIikpIHtcbiAgICBjbG9zZU1vZGFsKGV2dC50YXJnZXQpO1xuICB9XG59XG5cbmVuYWJsZVZhbGlkYXRpb24oc2V0dGluZ3MpO1xuIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJzZXR0aW5ncyIsImZvcm1TZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiaGlkZUlucHV0RXJyb3IiLCJmb3JtRWwiLCJpbnB1dEVsIiwiY29uZmlnIiwicXVlcnlTZWxlY3RvciIsImlkIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0b2dnbGVCdXR0b25TdGF0ZSIsImlucHV0TGlzdCIsImJ1dHRvbkVsIiwic29tZSIsImlucHV0IiwidmFsaWRpdHkiLCJ2YWxpZCIsImhhc0ludmFsaWRJbnB1dCIsImRpc2FibGVCdXR0b24iLCJkaXNhYmxlZCIsImFkZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzcmMiLCJIZWFkZXJTcmMiLCJQbHVzU3JjIiwiUGVuY2lsU3JjIiwiQXZhdGFyU3JjIiwiUGVuY2lsTGlnaHRTcmMiLCJhcGkiLCJjb25zdHJ1Y3RvciIsIl9yZWYiLCJiYXNlVXJsIiwiaGVhZGVycyIsInRoaXMiLCJfYmFzZVVybCIsIl9oZWFkZXJzIiwiZ2V0QXBwSW5mbyIsIlByb21pc2UiLCJhbGwiLCJnZXRJbml0aWFsQ2FyZHMiLCJnZXRVc2VySW5mbyIsImZldGNoIiwidGhlbiIsInJlcyIsIm9rIiwianNvbiIsInJlamVjdCIsInN0YXR1cyIsImFkZE5ld0NhcmQiLCJfcmVmMiIsIm5hbWUiLCJsaW5rIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlZGl0VXNlckluZm8iLCJfcmVmMyIsImFib3V0IiwiZWRpdEF2YXRhckluZm8iLCJhdmF0YXIiLCJkZWxldGVDYXJkIiwiY2hhbmdlTGlrZVN0YXR1cyIsImlzTGlrZWQiLCJhdXRob3JpemF0aW9uIiwiY2FyZHMiLCJtZSIsImZvckVhY2giLCJpdGVtIiwiY2FyZEVsZW1lbnQiLCJnZXRDYXJkRWxlbWVudCIsImNhcmRzTGlzdCIsImFwcGVuZCIsInByb2ZpbGVBdmF0YXIiLCJwcm9maWxlTmFtZSIsInByb2ZpbGVEZXNjcmlwdGlvbiIsImNhdGNoIiwiY29uc29sZSIsImVycm9yIiwicHJvZmlsZUVkaXRCdXR0b24iLCJjYXJkRWRpdEJ1dHRvbiIsImF2YXRhck1vZGFsIiwiYXZhdGFyRWRpdEJ1dHRvbiIsImF2YXRhckZvcm1FbGVtZW50IiwiYXZhdGFyTW9kYWxDbG9zZUJ0biIsImF2YXRhckxpbmtJbnB1dCIsImVkaXRNb2RhbCIsImVkaXRGb3JtRWxlbWVudCIsImVkaXRNb2RhbENsb3NlQnRuIiwiZWRpdE1vZGFsTmFtZUlucHV0IiwiZWRpdE1vZGFsRGVzY3JpcHRpb25JbnB1dCIsImRlbGV0ZU1vZGFsIiwiZGVsZXRlQ2xvc2VCdG4iLCJkZWxldGVDYW5jZWxCdG4iLCJkZWxldGVGb3JtIiwiY2FyZE1vZGFsIiwiY2FyZEZvcm1FbGVtZW50IiwiY2FyZFN1Ym1pdEJ0biIsImNhcmRNb2RhbENsb3NlQnRuIiwiY2FyZE5hbWVJbnB1dCIsImNhcmRMaW5rSW5wdXQiLCJwcmV2aWV3TW9kYWwiLCJwcmV2aWV3TW9kYWxJbWFnZUVsIiwicHJldmlld01vZGFsQ2FwdGlvbkVsIiwicHJldmlld01vZGFsQ2xvc2VCdG4iLCJjYXJkVGVtcGxhdGUiLCJzZWxlY3RlZENhcmQiLCJzZWxlY3RlZENhcmRJZCIsImRhdGEiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiY2FyZE5hbWVFbCIsImNhcmRJbWFnZSIsImNhcmRMaWtlQnRuIiwiY2FyZERlbGV0ZUJ0biIsImFsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcGVuTW9kYWwiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImxpa2VCdXR0b24iLCJ0YXJnZXQiLCJjb250YWlucyIsInRvZ2dsZSIsImhhbmRsZUxpa2UiLCJfaWQiLCJjYXJkSWQiLCJoYW5kbGVEZWxldGVDYXJkIiwibW9kYWwiLCJoYW5kbGVFc2NDbG9zZSIsImhhbmRsZU92ZXJMYXlDbG9zZSIsImNsb3NlTW9kYWwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwia2V5IiwicmVzZXRWYWxpZGF0aW9uIiwidmFsdWUiLCJzdWJtaXRCdG4iLCJzdWJtaXR0ZXIiLCJmaW5hbGx5IiwiaW5wdXRWYWx1ZXMiLCJuZXdDYXJkIiwicHJlcGVuZCIsInJlc2V0IiwicXVlcnlTZWxlY3RvckFsbCIsInNldEV2ZW50TGlzdGVuZXJzIiwiQXJyYXkiLCJmcm9tIiwiYnV0dG9uRWxlbWVudCIsImlucHV0RWxlbWVudCIsImNoZWNrSW5wdXRWYWxpZGl0eSIsInNob3dJbnB1dEVycm9yIiwiZXJyb3JNc2ciLCJ2YWxpZGF0aW9uTWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=