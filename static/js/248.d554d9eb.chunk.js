(self.webpackChunkdineshh_choudhary_github_io=self.webpackChunkdineshh_choudhary_github_io||[]).push([[248],{9248:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return $}});var r=n(2791),i=n(1087),s=n(6842),a=n(184),u=function(t){var e=t.label,n=t.link,r=t.value,i=t.format;return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{width:"70%",children:e}),(0,a.jsx)("td",{children:n?(0,a.jsx)("a",{href:n,children:i(r)}):i(r)})]})};u.defaultProps={format:function(t){return t},link:null,value:null};var c=u,o=function(t){var e=t.data;return(0,a.jsx)("table",{children:(0,a.jsx)("tbody",{children:e.map((function(t){return(0,a.jsx)(c,{format:t.format,label:t.label,link:t.link,value:t.value},t.label)}))})})},h=n(9439),f=function(){var t=(0,r.useState)(),e=(0,h.Z)(t,2),n=e[0],i=e[1];return(0,r.useEffect)((function(){var t=setInterval((function(){return function(){var t=new Date("1997-09-09T11:15:00");i(((Date.now()-t)/31556925190.079998).toFixed(11))}()}),25);return function(){clearInterval(t)}}),[]),(0,a.jsx)(a.Fragment,{children:n})},l=[{key:"age",label:"Current age",value:(0,a.jsx)(f,{})},{key:"location",label:"Current city",value:"Hyderabad, India"}],d=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{children:"Some stats about me"}),(0,a.jsx)(o,{data:l})]})},$=(n(7892),function(){return(0,a.jsx)(s.Z,{title:"Stats",description:"Some statistics about Dinesh Choudhary and mldangelo.com",children:(0,a.jsxs)("article",{className:"post",id:"stats",children:[(0,a.jsx)("header",{children:(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h2",{children:(0,a.jsx)(i.rU,{to:"/stats",children:"Stats"})})})}),(0,a.jsx)(d,{})]})})})},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",u="day",c="week",o="month",h="quarter",f="year",l="date",d="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,o),s=n-i<0,a=e.clone().add(r+(s?-1:1),o);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:f,w:c,d:u,D:l,h:a,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},M="en",D={};D[M]=m;var S=function(t){return t instanceof x},p=function t(e,n,r){var i;if(!e)return M;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var u=e.name;D[u]=e,i=u}return!r&&i&&(M=i),i||!r&&M},b=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},w=g;w.l=p,w.i=S,w.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function m(t){this.$L=p(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return w},y.isValid=function(){return!(this.$d.toString()===d)},y.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return b(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<b(t)},y.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!w.u(e)||e,h=w.p(t),d=function(t,e){var i=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(u)},$=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,m=this.$M,y=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case f:return r?d(1,0):d(31,11);case o:return r?d(1,m):d(0,m+1);case c:var M=this.$locale().weekStart||0,D=(v<M?v+7:v)-M;return d(r?y-D:y+(6-D),m);case u:case l:return $(g+"Hours",0);case a:return $(g+"Minutes",1);case s:return $(g+"Seconds",2);case i:return $(g+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,c=w.p(t),h="set"+(this.$u?"UTC":""),d=(n={},n[u]=h+"Date",n[l]=h+"Date",n[o]=h+"Month",n[f]=h+"FullYear",n[a]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[c],$=c===u?this.$D+(e-this.$W):e;if(c===o||c===f){var v=this.clone().set(l,1);v.$d[d]($),v.init(),this.$d=v.set(l,Math.min(this.$D,v.daysInMonth())).$d}else d&&this.$d[d]($);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[w.p(t)]()},y.add=function(r,h){var l,d=this;r=Number(r);var $=w.p(h),v=function(t){var e=b(d);return w.w(e.date(e.date()+Math.round(t*r)),d)};if($===o)return this.set(o,this.$M+r);if($===f)return this.set(f,this.$y+r);if($===u)return v(1);if($===c)return v(7);var m=(l={},l[s]=e,l[a]=n,l[i]=t,l)[$]||1,y=this.$d.getTime()+r*m;return w.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),s=this.$H,a=this.$m,u=this.$M,c=n.weekdays,o=n.months,h=n.meridiem,f=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},l=function(t){return w.s(s%12||12,t,"0")},$=h||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(v,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return w.s(e.$y,4,"0");case"M":return u+1;case"MM":return w.s(u+1,2,"0");case"MMM":return f(n.monthsShort,u,o,3);case"MMMM":return f(o,u);case"D":return e.$D;case"DD":return w.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return f(n.weekdaysMin,e.$W,c,2);case"ddd":return f(n.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(s);case"HH":return w.s(s,2,"0");case"h":return l(1);case"hh":return l(2);case"a":return $(s,a,!0);case"A":return $(s,a,!1);case"m":return String(a);case"mm":return w.s(a,2,"0");case"s":return String(e.$s);case"ss":return w.s(e.$s,2,"0");case"SSS":return w.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,l,d){var $,v=this,m=w.p(l),y=b(r),g=(y.utcOffset()-this.utcOffset())*e,M=this-y,D=function(){return w.m(v,y)};switch(m){case f:$=D()/12;break;case o:$=D();break;case h:$=D()/3;break;case c:$=(M-g)/6048e5;break;case u:$=(M-g)/864e5;break;case a:$=M/n;break;case s:$=M/e;break;case i:$=M/t;break;default:$=M}return d?$:w.a($)},y.daysInMonth=function(){return this.endOf(o).$D},y.$locale=function(){return D[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=p(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return w.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),_=x.prototype;return b.prototype=_,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",u],["$M",o],["$y",f],["$D",l]].forEach((function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,x,b),t.$i=!0),b},b.locale=p,b.isDayjs=S,b.unix=function(t){return b(1e3*t)},b.en=D[M],b.Ls=D,b.p={},b}()}}]);
//# sourceMappingURL=248.d554d9eb.chunk.js.map