(function(e){function t(t){for(var n,i,u=t[0],c=t[1],d=t[2],l=0,h=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);a&&a(t);while(h.length)h.shift()();return s.push.apply(s,d||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/WordQuest/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var a=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("word-section",{attrs:{currentWord:e.wordList.words[e.wordNumber],guessedLetters:e.guessedLetters}}),e.checkForWin||0==e.tries?e._e():r("guess-section",{on:{enteredLetter:e.addLetter}}),e.checkForWin?e._e():r("guessed-section",{attrs:{guessedLetters:e.guessedLetters}}),e.checkForWin?r("next-word",{on:{nextWord:e.newWord}}):e._e(),r("word-score",{attrs:{currentScore:e.amountOfGuessed,amountOfWords:e.wordList.words.length,previousTopScore:e.highScore}}),r("tries-left",{attrs:{tries:e.tries},on:{resetGame:e.resetGame}}),e.checkForWin?e._e():r("keyboard",{on:{emittedLetter:e.addLetter}})],1)},s=[],i=(r("a9e3"),r("25eb"),r("d3b7"),r("caad"),r("2532"),r("ac1f"),r("1276"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[e._v("You've tried these letters")]),r("div",{staticClass:"letters"},e._l(e.guessedLetters,(function(t){return r("div",{key:t},[e._v(e._s(t))])})),0)])}),u=[],c={name:"GuessedSection",props:{guessedLetters:{type:Array}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},d=c,a=r("2877"),l=Object(a["a"])(d,i,u,!1,null,null,null),h=l.exports,p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.letter,expression:"letter"}],attrs:{maxlength:1},domProps:{value:e.letter},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onEnter()},input:function(t){t.target.composing||(e.letter=t.target.value)}}}),r("button",{on:{click:function(t){return e.emitLetter()}}},[e._v(" Enter ")])])},f=[],m={name:"GuessSection",data:function(){return{letter:""}},computed:{},mounted:function(){},methods:{emitLetter:function(){this.$emit("enteredLetter",this.letter.toLowerCase()),this.clearInputLetter()},onEnter:function(){this.emitLetter()},clearInputLetter:function(){this.letter=""}}},v=m,g=Object(a["a"])(v,p,f,!1,null,null,null),b=g.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"letters"},e._l(e.wordArray,(function(t){return r("div",{key:t.index},[e.guessedLetters.includes(t.letter)?r("div",[e._v(e._s(t.letter))]):r("div",[e._v(" - ")])])})),0)])},w=[],_=(r("159b"),{name:"WordSection",data:function(){return{}},props:{currentWord:{type:String},guessedLetters:{type:Array}},computed:{wordArray:function(){var e=[],t=0;return this.currentWord.split("").forEach((function(r){e.push({letter:r,index:t}),t+=1})),e},wordLength:function(){return this.currentWord.length}},mounted:function(){},methods:{}}),L=_,x=Object(a["a"])(L,y,w,!1,null,null,null),O=x.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("button",{on:{click:function(t){return e.emitNext()}}},[e._v(" Next Word ")])])},W=[],k={name:"NextWord",data:function(){return{}},props:{currentWord:{type:String},guessedLetters:{type:Array}},computed:{wordArray:function(){return this.currentWord.split("")},wordLength:function(){return this.currentWord.length}},mounted:function(){},methods:{emitNext:function(){this.$emit("nextWord")}}},N=k,j=Object(a["a"])(N,S,W,!1,null,null,null),G=j.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._v(" You're at "+e._s(e.currentScore)+" out of "+e._s(e.amountOfWords)+" "),r("br"),e._v(" Previous best score: "+e._s(e.previousTopScore)+" ")])},$=[],T={name:"WordScore",props:{amountOfWords:{type:Number},currentScore:{type:Number},previousTopScore:{type:Number}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},A=T,P=Object(a["a"])(A,E,$,!1,null,null,null),C=P.exports,F=["cello","piano","guitar","encyclopedia","weather","rain","sunny","misty","media","sussex","copenhagen","automobile","plants","trees","compiler","technology","language","speech","travel","airplane","passport","terminal","airport","busstop","workshop","mechanic","psychologist","bycycle","telekinesis","heroes","villains","demons","speed","engine","wheels","fortune","wealth","games","funny","sadly","javascript","scripts"],I={words:F},M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.tries>0?r("div",[e._v(" "+e._s(e.tries)+" guesses left ")]):r("div",[e._v(" You've lost "),r("button",{on:{click:function(t){return e.resetGame()}}},[e._v("Reset game")])])},Y=[],q={name:"TriesLeft",props:{tries:{type:Number,required:!0}},data:function(){return{}},watch:{},computed:{},mounted:function(){},methods:{resetGame:function(){this.$emit("resetGame")}}},J=q,K=Object(a["a"])(J,M,Y,!1,null,null,null),R=K.exports,U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.loadedLetters.letters,(function(t){return r("button",{key:t.index,on:{click:function(r){return e.emitLetter(t)}}},[e._v(" "+e._s(t)+" ")])})),0)},z=[],D=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","w","v","y","z","x"],Q={letters:D},B={name:"Keyboard",data:function(){return{loadedLetters:{type:Array}}},props:{},computed:{},created:function(){this.loadedLetters=Q},methods:{emitLetter:function(e){this.$emit("emittedLetter",e)}}},H=B,V=Object(a["a"])(H,U,z,!1,null,null,null),X=V.exports;function Z(e){for(var t=e+"=",r=decodeURIComponent(document.cookie),n=r.split(";"),o=0;o<n.length;o++){var s=n[o];while(" "==s.charAt(0))s=s.substring(1);if(0==s.indexOf(t))return s.substring(t.length,s.length)}return""}var ee={name:"App",components:{WordSection:O,GuessSection:b,GuessedSection:h,NextWord:G,WordScore:C,TriesLeft:R,Keyboard:X},data:function(){return{guessedLetters:[],gameWon:!1,wordList:{type:Array},wordNumber:{type:Number},amountOfGuessed:{type:Number},tries:{type:Number},highScore:{type:Number}}},created:function(){this.amountOfGuessed=0,this.wordNumber=0,this.wordList=I,Z("highscore")?this.highScore=Number.parseInt(Z("highscore")):this.highScore=0,console.log("Thought you'd cheat by looking here eh?"),this.tries=this.wordList.words[this.wordNumber].length+5},methods:{addLetter:function(e){this.guessedLetters.push(e),this.tries--},newWord:function(){if(this.guessedLetters=[],this.wordNumber++,this.amountOfGuessed++,this.tries=this.wordList.words[this.wordNumber].length+5,this.wordNumber>this.highScore){this.highScore++;var e=new Date,t=e.getTime(),r=t+18e8;e.setTime(r),document.cookie="highscore="+this.highScore+"; expires="+e.toUTCString()+";"}},resetGame:function(){this.amountOfGuessed=0,this.wordNumber=0,this.wordList=I,this.guessedLetters=[],this.tries=this.wordList.words[this.wordNumber].length+5}},computed:{checkForWin:function(){var e=function(e,t){return t.every((function(t){return e.includes(t)}))};return e(this.guessedLetters,this.wordList.words[this.wordNumber].split(""))}}},te=ee,re=(r("034f"),Object(a["a"])(te,o,s,!1,null,null,null)),ne=re.exports;r("ebb9");n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(ne)}}).$mount("#app")},"85ec":function(e,t,r){},ebb9:function(e,t,r){}});
//# sourceMappingURL=app.fd4478c0.js.map