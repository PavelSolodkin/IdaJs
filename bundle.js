(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var t=[{image:"../images/photo.png",title:"Наименование товара",descr:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:"5 000"},{image:"../images/photo.png",title:"Наименование товара",descr:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:"7 000"},{image:"../images/photo.png",title:"Наименование товара",descr:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:"10 000"},{image:"../images/photo.png",title:"Наименование товара",descr:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:"9 000"},{image:"../images/photo.png",title:"Наименование товара",descr:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:"8 000"},{image:"../images/photo.png",title:"Наименование товара",descr:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:"3 000"}],r=[],n=document.querySelector(".cards"),a=document.querySelector(".form__button");function c(){var a;n.innerHTML="",r.length=0,t.forEach((function(e){n.innerHTML+='\n    <div class="card">\n    <div class="card__image">\n      <img src="'.concat(e.image,'" alt="photo" />\n    </div>\n    <div class="card__text">\n      <h2 class="card__title">').concat(e.title,'</h2>\n      <p class="card__descr">').concat(e.descr,'\n      </p>\n      <h2 class="card__price">').concat(e.price,'</h2>\n    </div>\n    <button class="card__del">\n    </button>\n  </div>\n  ')})),r.push.apply(r,function(t){if(Array.isArray(t))return e(t)}(a=document.getElementsByClassName("card__del"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(a)||function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());for(var o=function(e){r[e].addEventListener("click",(function(){t.splice(e,1),c()}))},i=0;i<r.length;i++)o(i)}c(),a.addEventListener("click",(function(e){e.preventDefault();for(var r=document.getElementsByClassName("form__error"),n=document.querySelector('.form [name="name"]').value,a=document.querySelector('.form [name="descr"]').value,o=document.querySelector('.form [name="link"]').value,i=document.querySelector('.form [name="price"]').value,l=0;l<r.length;l++)r[l].style.display="none";""===n||""===o||""===i?(""===n&&(r[0].style.display="flex"),""===o&&(r[1].style.display="flex"),""===i&&(r[2].style.display="flex")):(t.push({image:o,title:n,descr:a,price:i}),c())}))})();