"use strict";function sendAjax(e,t){var o=new XMLHttpRequest,a={method:"GET",data:null};if(t)for(var n in a)n in t&&(a[n]=t[n]);if(a.method=a.method.toUpperCase(),"GET"==a.method){var r=-1==e.indexOf("?")?"?":"&";for(var d in e+=r,a.data){e+="".concat(d,"=").concat(a.data[d])+"&"}e+="_=".concat(Date.now()),console.log(e),a.data=null}else{if("POST"!=a.method)return void console.log("告辞!");a.data=JSON.stringify(a.data)}return o.open(a.method,e,!0),o.send(a.data),new Promise(function(a,n){o.onreadystatechange=function(){if(4==o.readyState)if(200==o.status){var e=o.response;a(e)}else{var t=o.response;n(t)}}})}