(this.webpackJsonpmyproject=this.webpackJsonpmyproject||[]).push([[0],{19:function(A,e,a){},30:function(A,e,a){},37:function(A,e,a){"use strict";a.r(e);var t=a(1),s=a.n(t),c=a(24),n=a.n(c),r=a(12),l=(a(30),a(19),a.p+"static/media/myicon.e85abd67.png"),i=a(0);var o=function(){return Object(i.jsx)("header",{className:"header-cards",children:Object(i.jsx)(r.b,{to:"/",children:Object(i.jsx)("img",{className:"header-cards_logo",src:l,alt:"profile-cards"})})})},b=a.p+"static/media/logo.c0b4db4b.png";var j=function(){return Object(i.jsxs)("footer",{className:"footer",children:[Object(i.jsx)("small",{className:"footer-small",children:"Awesome profile-cards \xa92021"}),Object(i.jsx)("a",{title:"Blanketfy",href:"",target:"_blank",children:Object(i.jsx)("img",{className:"footer-logo",src:b,alt:"Blanktfy"})})]})},d=a(16),m=a(22),h=a(13),u=a(4),p=a(5),x=a(7),v=a(6),O=function(A){Object(x.a)(a,A);var e=Object(v.a)(a);function a(A){return Object(u.a)(this,a),e.call(this,A)}return Object(p.a)(a,[{key:"render",value:function(){return Object(i.jsx)("li",{className:"cards_box-socialmedia--item",children:Object(i.jsx)("a",{className:this.props.anchor,href:this.props.href,children:Object(i.jsx)("i",{className:this.props.className})})})}}]),a}(s.a.Component),f=a.p+"static/media/rosalia.uni2.b8738423.png";var Z=function(A){var e=""===A.data.photo?f:A.data.photo;return Object(i.jsxs)("section",{className:"cards",children:[Object(i.jsx)("div",{children:Object(i.jsxs)("button",{className:"cards_button reset-js",onClick:A.handleResetButton,children:[Object(i.jsx)("i",{className:"far fa-trash-alt"})," Reset"]})}),Object(i.jsxs)("section",{className:"cards_box js-card_box palette-".concat(A.data.palette),children:[Object(i.jsx)("div",{className:"cards_box-border js-border"}),Object(i.jsxs)("div",{className:"cards-box--text",children:[Object(i.jsx)("h2",{className:"cards_box--text--title js-preview-name",children:""===A.data.name?"Nombre Apellidos":A.data.name}),Object(i.jsx)("h2",{className:"cards_box--text--subtitle js-preview-job",children:""===A.data.job?"Front-End Developer":A.data.job})]}),Object(i.jsx)("div",{className:"cards_box-photo js__profile-preview",style:{backgroundImage:"url(".concat(e,")")}}),Object(i.jsxs)("ul",{className:"cards_box-socialmedia",children:[Object(i.jsx)(O,{className:"far fa-envelope cards_box-icon-social js-social",anchor:"js-preview-mail",href:"mailto:".concat(A.data.email)}),Object(i.jsx)(O,{className:"fas fa-mobile-alt cards_box-icon-social js-preview-phone js-social",anchor:'href = ""',href:"tel:".concat(A.data.phone)}),Object(i.jsx)(O,{className:"fab fa-linkedin-in cards_box-icon-social js-social",anchor:'"js-preview-linkedin" \'target="_blank"\'',href:"https://linkedin.com/in/".concat(A.data.linkedin)}),Object(i.jsx)(O,{className:"fab fa-github-alt cards_box-icon-social js-social",anchor:"'js-preview-github' \"target='_blank'\" \"",href:"https://github.com/".concat(A.data.github)})]})]})]})},g=a(11),Q=function(A){Object(x.a)(a,A);var e=Object(v.a)(a);function a(A){var t;return Object(u.a)(this,a),(t=e.call(this,A)).handleRadios=t.handleRadios.bind(Object(g.a)(t)),t}return Object(p.a)(a,[{key:"handleRadios",value:function(A){this.props.handleChangeInputs(A.currentTarget.value,"palette")}},{key:"render",value:function(){return Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:this.props.className,id:this.props.id,type:"radio",value:this.props.value,name:"palette",onChange:this.handleRadios,checked:this.props.checked}),Object(i.jsx)("img",{className:"color-image",alt:"",src:this.props.src})]})}}]),a}(s.a.Component);var N=function(A){return Object(i.jsxs)("div",{className:"color-design",children:[Object(i.jsx)("div",{className:"color-container",children:Object(i.jsx)("p",{children:"COLORES"})}),Object(i.jsxs)("div",{className:"radio-color",children:[Object(i.jsx)(Q,{handleChangeInputs:A.handleChangeInputs,className:"js-form js-palette color js-color1 ",id:"color1",value:"1",src:"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMuaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0ODgsIDIwMjAvMDcvMTAtMjI6MDY6NTMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ2N0Q4RDAzQTVCQzExRUI4NDVFRDlBRTczRkREQ0Q0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ2N0Q4RDA0QTVCQzExRUI4NDVFRDlBRTczRkREQ0Q0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDY3RDhEMDFBNUJDMTFFQjg0NUVEOUFFNzNGRERDRDQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDY3RDhEMDJBNUJDMTFFQjg0NUVEOUFFNzNGRERDRDQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAEmA3MDAREAAhEBAxEB/8QAbAABAAMBAAAAAAAAAAAAAAAAAAUGBwgBAQEBAQEBAAAAAAAAAAAAAAADBQQBBhABAAECBwEAAgIDAAAAAAAAAAIBNbFyA7N0Bgc0EVGRcxMEFBEBAAICAwAAAAAAAAAAAAAAAAExcQIyAwT/2gAMAwEAAhEDEQA/AMkdj5wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPdSr+P97Up+9OuNHutk1K2rJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANF86smvyZbcGV7+cYW66WlxKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAORm2kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnep/fPJXGj3WyalblkgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGi+dWTX5MtuDK9/OMLddLS4lAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHIzbSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATvU/vnkrjR7rZNStyyQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADRfOrJr8mW3Ble/nGFuulpcSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADkZtpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ3qf3zyVxo91smpW5ZIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABovnVk1+TLbgyvfzjC3XS0uJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAByM20gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE71P755K40e62TUrcskAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Xzqya/JltwZXv5xhbrpaXEoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5GbaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACd6n98/6640e62TUrcskAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Xzqya/JltwZXv5xhbrpaXEoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5GbaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACd6ncJZK40e62TUrcskAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Xzqya/JltwZXv5xhbrpaXEoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5GbaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACd6ncJZK40e62TUrcskAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Xzqya/JltwZXv5xhbrpaXEoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5GbaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACd6ncJZK40e62TUrcskAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Xzqya/JltwZXv5xhbrpaXEoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5GbaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACd6ncJZK40e62TUrcskAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Xzqya/JltwZXv5xhbrpaXEoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5GbaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACd6ncJZK40e62TUrcskAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Xzqya/JltwZXv5xhbrpaXEoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5GbaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACd6ncJZK40e62TUrcskAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Xzqya/JltwZXv5xhbrpaXEoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5GbaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACd6ncJZK40e62TUrcskAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Xzqya/JltwZXv5xhbrpaXEoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5GbaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACd6ncJZK40e62TUrcskAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Xzqya/JltwZXv5xhbrpaXEoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5GbaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACd6ncJZK40e62TUrcskAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Xzqya/JltwZXv5xhbrpaXEoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5GbaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACd6ncJZK40e62TUrcskAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Xzqya/JltwZXv5xhbrpaXEoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5GbaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACd6ncJZK40e62TUrcskAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Xzqya/JltwZXv5xhbrpaXEoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5GbaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACd6ncJZK40e62TUrcskAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Xzqya/JltwZXv5xhbrpaXEoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5GbaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACd6ncJZK40e62TUrcskAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Xzqya/JltwZXv5xhbrpaXEoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5GbaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACd6ncJZK40e62TUrcskAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Xzqya/JltwZXv5xhbrpaXEoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5GbaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACd6ncJZK40e62TUrcskAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Xzqya/JltwZXv5xhbrpaXEoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5GbaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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",checked:"1"===A.data.palette}),Object(i.jsx)(Q,{className:"js-form js-palette color js-color2",id:"color2",value:"2",src:"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMuaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0ODgsIDIwMjAvMDcvMTAtMjI6MDY6NTMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ2N0Q4RDA3QTVCQzExRUI4NDVFRDlBRTczRkREQ0Q0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ2N0Q4RDA4QTVCQzExRUI4NDVFRDlBRTczRkREQ0Q0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDY3RDhEMDVBNUJDMTFFQjg0NUVEOUFFNzNGRERDRDQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDY3RDhEMDZBNUJDMTFFQjg0NUVEOUFFNzNGRERDRDQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkL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",handleChangeInputs:A.handleChangeInputs,checked:"2"===A.data.palette}),Object(i.jsx)(Q,{className:"js-form js-palette color js-color3",id:"color3",value:"3",src:"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMuaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0ODgsIDIwMjAvMDcvMTAtMjI6MDY6NTMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIwNjMzQzhDQTVCRDExRUI4NDVFRDlBRTczRkREQ0Q0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIwNjMzQzhEQTVCRDExRUI4NDVFRDlBRTczRkREQ0Q0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDY3RDhEMDlBNUJDMTFFQjg0NUVEOUFFNzNGRERDRDQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDY3RDhEMEFBNUJDMTFFQjg0NUVEOUFFNzNGRERDRDQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkL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",handleChangeInputs:A.handleChangeInputs,checked:"3"===A.data.palette})]})]})};var k=function(){return Object(i.jsx)("div",{className:"card-done",children:"Rellena todos los campos, por favor"})};var B=function(A){return console.log(A.url),console.log("https://twitter.com/intent/tweet?text=".concat(A.url)),Object(i.jsxs)("div",{className:"card-done ",children:[Object(i.jsx)("p",{className:"tarjeta",children:"La tarjeta ha sido creada:"}),Object(i.jsx)("a",{className:"url js-generate",target:"_blank",href:A.url,children:Object(i.jsxs)("p",{className:"url js-generate",children:["URL: ",A.url]})}),Object(i.jsx)("a",{className:"js-twitter-link ",title:"Twitter",target:"_blank",href:"https://twitter.com/intent/tweet?text=".concat(A.url),children:Object(i.jsxs)("button",{className:"twitter-share",type:"button",children:[Object(i.jsx)("i",{className:"fab fa-twitter list-icon2c"}),"Compartir en twitter"]})})]})};var C=function(A){var e=Object(t.useState)("No enviado"),a=Object(h.a)(e,2),s=a[0],c=a[1],n=Object(t.useState)(""),r=Object(h.a)(n,2),l=r[0],o=r[1];return Object(i.jsxs)("div",{className:"share-container",children:[Object(i.jsxs)("div",{className:"sharebutton",onClick:function(){fetch("https://awesome-profile-cards.herokuapp.com/card",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(A.data)}).then((function(A){return A.json()})).then((function(A){A.cardURL;!1===A.success?c("Me ha dado error"):(c("Me ha dado ok"),o(A.cardURL),console.log(A.cardURL))}))},children:[Object(i.jsx)("i",{className:"far fa-address-card list-icon2c js-hidden"}),Object(i.jsx)("div",{className:"new-card js-create-card",children:"Crear Tarjeta"})]}),"Me ha dado error"===s?Object(i.jsx)(k,{}):null,"Me ha dado ok"===s?Object(i.jsx)(B,{url:l}):null]})},R=function(A){Object(x.a)(a,A);var e=Object(v.a)(a);function a(A){var t;return Object(u.a)(this,a),(t=e.call(this,A)).fr=new FileReader,t.myFileField=s.a.createRef(),t.uploadImage=t.uploadImage.bind(Object(g.a)(t)),t.getImage=t.getImage.bind(Object(g.a)(t)),t}return Object(p.a)(a,[{key:"uploadImage",value:function(A){if(console.log("La usuaria ha abierto la ventana para elegir ficheros"),console.log("La usuaria ha elegido los ficheros",A.currentTarget.files),console.log("El primero de los ficheros elegidos es",A.currentTarget.files[0]),A.currentTarget.files.length>0){var e=A.currentTarget.files[0];this.fr.addEventListener("load",this.getImage),this.fr.readAsDataURL(e)}}},{key:"getImage",value:function(){console.log("Informaci\xf3n \xfatil sobre el fichero cargado",this.fr);var A=this.fr.result;this.props.updateAvatar(A)}},{key:"render",value:function(){var A=""===this.props.avatar?"":this.props.avatar;return Object(i.jsxs)("div",{className:"image",children:[Object(i.jsxs)("label",{className:"profile-image",type:"button",children:["A\xf1adir Imagen",Object(i.jsx)("input",{type:"file",ref:this.myFileField,className:"js-hidden js__profile-upload-btn",onChange:this.uploadImage})]}),Object(i.jsx)("div",{className:"button-white js__profile-image",onChange:this.handleInputs,style:{backgroundImage:"url(".concat(A,")")}}),Object(i.jsx)("div",{className:"get-avatar__preview"})]})}}]),a}(s.a.Component),I=function(A){Object(x.a)(a,A);var e=Object(v.a)(a);function a(){return Object(u.a)(this,a),e.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var A=""===this.props.avatar?f:this.props.avatar;return Object(i.jsx)("div",{className:"profile",children:Object(i.jsx)("div",{className:"profile__avatar",style:{backgroundImage:"url(".concat(A,")")}})})}}]),a}(s.a.Component);var y=function(A){var e=Object(t.useState)(""),a=Object(h.a)(e,2),s=a[0];function c(e){A.handleChangeInputs(e.target.value,e.target.name)}return a[1],Object(i.jsxs)("div",{className:"fill-container",children:[Object(i.jsxs)("label",{children:["Nombre completo",Object(i.jsx)("input",{className:"js-form formies js-name",placeholder:"Blanket Team",type:"text",name:"name",value:A.data.name,onChange:c})]}),Object(i.jsxs)("label",{children:["Puesto",Object(i.jsx)("input",{className:"js-form formies js-job",placeholder:"Frontend Unicorn",type:"text",name:"job",value:A.data.job,onChange:c})]}),Object(i.jsx)("p",{children:"Imagen de perfil"}),Object(i.jsxs)("div",{children:[Object(i.jsx)(R,{avatar:A.data.photo,updateAvatar:function(e){A.handleChangeInputs(e,"photo")},changeInputs:c}),Object(i.jsx)(I,{avatar:s})]}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:["E-mail",Object(i.jsx)("input",{className:"js-form formies js-mail",placeholder:"blanket@blanket.com",type:"email",id:"email",name:"email",value:A.data.email,onChange:c})]}),Object(i.jsxs)("p",{children:["Tel\xe9fono",Object(i.jsx)("input",{className:"js-form js-preview-phone formies js-phone",placeholder:"000000000",type:"tel",id:"phone",name:"phone",value:A.data.phone,onChange:c})]}),Object(i.jsxs)("p",{children:["Linkedin",Object(i.jsx)("input",{className:"js-form formies js-linkedin",placeholder:"Blanket.Linkedin",type:"text",name:"linkedin",value:A.data.linkedin,onChange:c})]}),Object(i.jsxs)("p",{children:["Github",Object(i.jsx)("input",{className:"js-form formies js-github",placeholder:"Blanket.GitHub",type:"text",name:"github",value:A.data.github,onChange:c})]})]})]})},G=function(A){Object(x.a)(a,A);var e=Object(v.a)(a);function a(A){var t;return Object(u.a)(this,a),(t=e.call(this,A)).state={avatar:""},t.updateAvatar=t.updateAvatar.bind(Object(g.a)(t)),t}return Object(p.a)(a,[{key:"updateAvatar",value:function(A){this.setState({avatar:A})}},{key:"render",value:function(){return Object(i.jsx)("fieldset",{className:"info",children:Object(i.jsx)(y,{handleResetButton:this.props.handleResetButton,data:this.props.data,handleChangeInputs:this.props.handleChangeInputs})})}}]),a}(s.a.Component),D=function(A){Object(x.a)(a,A);var e=Object(v.a)(a);function a(A){var t;return Object(u.a)(this,a),(t=e.call(this,A)).state={isOpen:!1},t.handleHeaderClick=t.handleHeaderClick.bind(Object(g.a)(t)),t}return Object(p.a)(a,[{key:"handleHeaderClick",value:function(){this.setState({isHidden:!this.state.isHidden})}},{key:"render",value:function(){var A=this.state.isHidden?"js-hidden":"",e=this.state.isHidden?"":"js-hidden";return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"icon2 js-design-title",onClick:this.handleHeaderClick,children:[Object(i.jsx)("i",{className:this.props.classIcon}),Object(i.jsx)("h2",{className:"legend-fill",children:this.props.className}),Object(i.jsx)("div",{className:"ico-scroll ".concat(this.props.classButtonUp," ").concat(A),children:Object(i.jsx)("i",{className:"fas fa-angle-up"})}),Object(i.jsx)("div",{className:"ico-scroll ".concat(this.props.classButtonDown," ").concat(e),children:Object(i.jsx)("i",{className:"fas fa-angle-down"})})]}),Object(i.jsx)("div",{className:"collapsible-container ".concat(A),children:this.props.children})]})}}]),a}(s.a.Component),w=function(A){Object(x.a)(a,A);var e=Object(v.a)(a);function a(A){return Object(u.a)(this,a),e.call(this,A)}return Object(p.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("form",{onSubmit:function(A){A.preventDefault()},className:"form",id:"cleanForm",children:[Object(i.jsx)(D,{classIcon:"far fa-object-group list-icon2b",className:"dise\xf1a",classButtonUp:"js-arrow-up-d",classButtonDown:"js-arrow-down-d",children:Object(i.jsx)(N,{data:this.props.data,handleChangeInputs:this.props.handleChangeInputs})}),Object(i.jsx)(D,{classIcon:"far fa-keyboard list-icon2b",className:"rellena",classButtonUp:"js-arrow-up-f",classButtonDown:"js-arrow-down-f",children:Object(i.jsx)(G,{data:this.props.data,handleChangeInputs:this.props.handleChangeInputs,handleResetButton:this.props.handleResetButton})}),Object(i.jsx)(D,{classIcon:"fas fa-share-alt list-icon2b",className:"comparte",classButtonUp:"js-arrow-up-s",classButtonDown:"js-arrow-down-s",children:Object(i.jsx)(C,{data:this.props.data})})]})}}]),a}(s.a.Component),z=function(A){var e=localStorage.getItem(A);return JSON.parse(e)},X=function(A,e){localStorage.setItem(A,JSON.stringify(e))};var M=function(){var A=Object(t.useState)({name:"",job:"",email:"",photo:"",github:"",linkedin:"",phone:"",palette:"1"}),e=Object(h.a)(A,2),a=e[0],s=e[1];Object(t.useEffect)((function(){var A=z("dataInput");A&&s(A)}),[]),Object(t.useEffect)((function(){X("dataInput",a)}),[a]);var c=function(){s({name:"",job:"",email:"",photo:"",github:"",linkedin:"",phone:"",palette:"1"})},n=function(A,e){console.log("Change!",A,e),s(Object(m.a)(Object(m.a)({},a),{},Object(d.a)({},e,A)))};return Object(i.jsxs)("section",{className:"main_container",children:[Object(i.jsx)(Z,{data:a,handleChangeInputs:n,handleResetButton:c}),Object(i.jsx)(w,{data:a,handleChangeInputs:n,handleResetButton:c})]})},J=function(A){Object(x.a)(a,A);var e=Object(v.a)(a);function a(){return Object(u.a)(this,a),e.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"page",children:[Object(i.jsxs)("main",{class:"main-container",children:[Object(i.jsx)("img",{class:"main-container__logo",src:b,alt:"profile-cards"}),Object(i.jsx)("h2",{class:"main-container__title",children:"Crea tu tarjeta de visita"}),Object(i.jsx)("p",{class:"main-container__text",children:"Crea mejores contactos profesionales de forma f\xe1cil y c\xf3moda"}),Object(i.jsx)("nav",{class:"nav-container",children:Object(i.jsxs)("ul",{class:"nav-container___list",children:[Object(i.jsxs)("li",{class:"nav-container___list--item",children:[Object(i.jsx)("i",{class:"far fa-object-group list-icon"}),Object(i.jsx)("span",{class:"list-text",children:"Dise\xf1a"})]}),Object(i.jsxs)("li",{class:"nav-container___list--item",children:[Object(i.jsx)("i",{class:"far fa-keyboard list-icon"}),Object(i.jsx)("span",{class:"list-text",children:"Rellena"})]}),Object(i.jsxs)("li",{class:"nav-container___list--item",children:[Object(i.jsx)("i",{class:"fas fa-share-alt list-icon"}),Object(i.jsx)("span",{class:"list-text",children:"Comparte"})]})]})}),Object(i.jsx)(r.b,{to:"/card",children:Object(i.jsx)("span",{className:"main-container__link",children:"comenzar"})})]}),Object(i.jsx)(j,{})]})}}]),a}(s.a.Component),L=a(2);var W=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(L.c,{children:[Object(i.jsx)(L.a,{exact:!0,path:"/",children:Object(i.jsx)(J,{})}),Object(i.jsxs)(L.a,{exact:!0,path:"/card",children:[Object(i.jsx)(o,{}),Object(i.jsx)(M,{}),Object(i.jsx)(j,{})]})]})})};n.a.render(Object(i.jsx)(r.a,{children:Object(i.jsx)(W,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.7bbaca1b.chunk.js.map