(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(76)},45:function(e,t,a){},46:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},60:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(19),o=a.n(r),c=(a(45),a(4)),s=a(5),l=a(7),m=a(6),d=a(8),u=a(20),h=a(9),g=(a(46),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={animationCount:0,redirect:window.matchMedia("(max-width: 599px)").matches},a.setRedirect=function(){var e=a.state.animationCount;e>=2?a.setState({redirect:!0}):a.setState({animationCount:e+1})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.redirect?i.a.createElement(h.c,{push:!0,to:"/home"}):i.a.createElement("div",{className:"preloader-wrapper"},i.a.createElement("div",{className:"preloader-header",onAnimationEnd:this.setRedirect},i.a.createElement("div",{className:"preloader-header-text"},"Hello, this is Tim Chu")))}}]),t}(n.Component)),p=a(30),f=a(11),v=a(98),E=a(35),b=a.n(E),y=a(26),w=(a(52),function(e){return i.a.createElement("div",{className:"global-menu ".concat(e.openDirection," justify-").concat(e.justifyDirection," ").concat(e.open?"open":"")},i.a.createElement("div",{className:"global-menu-inner"},e.children))}),N=(a(53),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={menuOpen:!1,scrolled:!1},a.toggleMenuScreen=a.toggleMenuScreen.bind(Object(f.a)(a)),a.logoClickHandler=a.logoClickHandler.bind(Object(f.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=0,t=this;document.addEventListener("scroll",function(){var a=window.pageYOffset||document.documentElement.scrollTop;a>e?t.setState({scrolled:!0}):t.setState({scrolled:!1}),e=a<=0?0:a},!1)}},{key:"toggleMenuScreen",value:function(){var e=this.state.menuOpen;this.setState({menuOpen:!e})}},{key:"logoClickHandler",value:function(e){"home"===this.props.pageId&&(e.preventDefault(),window.scrollTo({top:document.documentElement.offsetTop,left:0,behavior:"smooth"}))}},{key:"render",value:function(){var e=this.state,t=e.menuOpen,a=e.scrolled;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"nav ".concat(a?"scrolled":"")},i.a.createElement(y.HashLink,{to:"/home",className:"nav-logo",onClick:this.logoClickHandler})),i.a.createElement(w,{open:t,openDirection:"left",justifyDirection:"left"},i.a.createElement("div",{className:"menu-item"},i.a.createElement(y.HashLink,{to:"/home#self-intro",onClick:this.toggleMenuScreen},"About Me")),i.a.createElement("div",{className:"menu-item"},i.a.createElement(y.HashLink,{to:"/home#sec3",onClick:this.toggleMenuScreen},"Projects")),i.a.createElement("div",{className:"menu-item"},i.a.createElement("a",{href:"https://drive.google.com/open?id=0B1dSWHM51dn-RGJBNlJZNFdaNW8",target:"_blank",rel:"noopener noreferrer",onClick:this.toggleMenuScreen},"Resume"))),i.a.createElement("div",{className:"nav-hamburger ".concat(t?"open":""," ").concat(a&&!t?"scrolled":""),onClick:this.toggleMenuScreen},i.a.createElement("div",{className:"nav-hamburger-bars"})))}}]),t}(n.Component)),k=(a(54),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.direction,a=e.animated,n=e.content,r=e.callFlyer;return i.a.createElement("div",{className:"flyer flyer-"+t+(a?"":" noanimation")},i.a.createElement("div",{className:"flyer-inner"},n.titleIcon&&i.a.createElement("div",{className:"flyer-title-icon"},i.a.createElement("img",{src:"/imgs/"+n.titleIcon,alt:"Flyer Title Icon"})),i.a.createElement("h3",null,n.title),i.a.createElement("p",{className:a?"animated":""},n.content),i.a.createElement("div",{className:"icons"},n.icons&&n.icons.map(function(e,t){return i.a.createElement("div",{key:t,className:"flyer-icon","data-target":e.dataTarget,onClick:r},i.a.createElement("img",{src:"/imgs/"+e.src,alt:"Flyer Icon"}))}))))}}]),t}(n.Component)),j=a(99),I=a(95),O=a(96),T=(a(55),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={open:!1},a.bubble=i.a.createRef(),a.togglePopup=a.togglePopup.bind(Object(f.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"togglePopup",value:function(){var e=this.state.open;this.setState({open:!e})}},{key:"render",value:function(){var e,t=this.state.open;return e=t?i.a.createElement(I.a,null):i.a.createElement(O.a,null),i.a.createElement("div",{className:"contact-wrapper"},i.a.createElement("div",{className:"contact-bubble ".concat(t?"open":""),ref:this.bubble},i.a.createElement(j.a,{className:"contact-bubble-cta",onClick:this.togglePopup},e)),i.a.createElement(w,{open:t,openDirection:"right",justifyDirection:"right"},i.a.createElement("div",{className:"menu-item"},i.a.createElement("a",{href:"https://www.linkedin.com/in/tim-chu-980881a4",target:"_blank",rel:"noopener noreferrer",title:"Connect with me on LinkedIn"},i.a.createElement("img",{src:"/imgs/icons/linkedin.svg",alt:"LinkedIn Icon"}))),i.a.createElement("div",{className:"menu-item"},i.a.createElement("a",{href:"https://github.com/tic30",target:"_blank",rel:"noopener noreferrer",title:"Connect with me on GitHub"},i.a.createElement("img",{src:"/imgs/icons/github.svg",alt:"GitHub Icon"}))),i.a.createElement("div",{className:"menu-item"},i.a.createElement("a",{href:"mailto:173341277@qq.com?subject=Let\\'s\xa0talk,\xa0Tim!",target:"_blank",rel:"noopener noreferrer",title:"Email me"},i.a.createElement("img",{src:"/imgs/icons/email.svg",alt:"Email Icon"})))))}}]),t}(n.Component)),S=a(97),C=(a(56),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={open:!1,redirect:""},a.card=i.a.createRef(),a.backdrop=i.a.createRef(),a.clickCard=a.clickCard.bind(Object(f.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"clickCard",value:function(e){if(e){var t=this.card.current.getBoundingClientRect(),a=t.x,n=t.y,i=t.width,r=t.height,o=this.card.current,c=this;o.style.left="".concat(a,"px"),o.style.top="".concat(n,"px"),o.style.width="".concat(i,"px"),o.style.height="".concat(r,"px"),this.setState({open:!0}),setTimeout(function(){o.style.left="0",o.style.top="0",o.style.width="".concat(window.innerWidth,"px"),o.style.height="".concat(window.innerHeight,"px"),setTimeout(function(){c.setState({redirect:e})},800)},200)}}},{key:"render",value:function(){var e=this,t=this.props,a=t.large,n=t.content,r=this.state,o=r.open,c=r.redirect;return""!==c?i.a.createElement(h.c,{push:!0,to:c}):i.a.createElement(i.a.Fragment,null,i.a.createElement(S.a,{className:"portfolio-card ".concat(a?"portfolio-card-large":""," ").concat(o?"open":""),ref:this.card},i.a.createElement("div",{className:"portfolio-card-container",onClick:function(){return e.clickCard(n.pageUrl)}},i.a.createElement("div",{className:"portfolio-card-img",style:{backgroundImage:"url(/imgs/".concat(n.imgUrl,")")},alt:"Portfolio"}),i.a.createElement("div",{className:"portfolio-card-text-wrapper ".concat(o?"open":"")},i.a.createElement("h4",null,n.title),i.a.createElement("div",{className:"portfolio-card-content"},i.a.createElement("p",null,n.subTitle),i.a.createElement("div",{className:"portfolio-card-btn"},n.btnText,n.pageUrl&&i.a.createElement("img",{src:"/imgs/icons/arrow-right.svg",alt:"Arrow right",height:"14px"})))))),o?i.a.createElement("div",{className:"placeHolder-card"}):"")}}]),t}(n.Component)),x={Hero:{title:"Hi, Welcome!",content:"This is Tim Chu, an open-minded problem solver, UX explorer and front end coder."},SelfIntro:{title:"I seek challenges, \n within and without of work.",content:"I embrace them, break them down into practical tasks and improve myself along the way.",icons:[{src:"icons/reading.svg"},{src:"icons/soccer.svg"},{src:"icons/pingpong.svg"},{src:"icons/archery.svg"}]},Company:{title:"UX, \n Front end, and Fun",content:"I have hands on experience with UX research & design, front end prototyping and production level coding.",icons:[{src:"icons/cmu.png",dataTarget:"Cmu"},{src:"icons/deephow.png",dataTarget:"Deephow"},{src:"icons/siemens.svg",dataTarget:"Siemens"},{src:"icons/indeed.png",dataTarget:"Indeed"}]},Indeed:{titleIcon:"icons/indeed.png",content:"I am working as a UX Developer at Indeed. The motivation for me to go to work everyday is simply straightforward: to help people get jobs. The major chord of my work includes studying user, creating solutions and validating the effectiveness of the solutions through fast iterations of prototyping, testing, optimization and finally push to production."},Deephow:{titleIcon:"icons/deephow.png",content:"This AI start-up is incubated in Techstar by the hands of talents from Siemens UX team. I lead the front end architecture design and MVP development. During the short journey I established a highly-reusable and efficient development ecosystem, introduced a fully automated process from coding, testing, building, to deployment, and I advocated code ownership to boost productivity."},Siemens:{titleIcon:"icons/siemens.svg",content:"The experience at Siemens is fast-paced. Engineers and designers sync daily to enable development and design to run in parallel. Thanks to the close engagement with stake holder, I am able to test creative sometimes crazy ideas, collect feedback and iterate quickly on not only functions and feature but also tools, platforms and service systems."},Cmu:{titleIcon:"icons/cmu.png",content:"I joined a group of HCI student to create AR application and study its social impact. I received my degree of Master of Science in Software Engineering at Carnegie Mellon University(CMU) in 2018. CMU courses paved solid ground in engineering which I benefit from util today and encouraged me to pursue a life-long learning."},ITS:{title:"Intelligent Tutoring Systems",imgUrl:"its.png",subTitle:"Better teaching with AR.",btnText:"Read more",pageUrl:"/its"},DealFindMe:{title:"DealFindMe",imgUrl:"dealfindme.png",subTitle:"Coupon at hand for the store I am standing in.",btnText:"Coming Soon",pageUrl:""},Milu:{title:"Milu",imgUrl:"milu.png",subTitle:"An image content search engine.",btnText:"Coming Soon",pageUrl:""},EthereumWallet:{title:"Ethereum Wallet",imgUrl:"ethereumwallet.png",subTitle:"Checkout with Ethereum using this extension.",btnText:"Coming Soon",pageUrl:""},MovieEmodex:{title:"Movie.Emodex",imgUrl:"movie.png",subTitle:"New movie rating based on emotional impact.",btnText:"Coming Soon",pageUrl:""},ITSHero:{title:"INTELLIGENT TUTORING SYSTEMS",content:"Research Project @ CMU.HCII"},ITSTech:[{src:"/imgs/icons/hololens.png",msrc:"/imgs/icons/hololens_m.png",alt:"Hololens"},{src:"/imgs/icons/unity.png",msrc:"/imgs/icons/unity_m.png",alt:"Unity"},{src:"/imgs/icons/vuforia.png",msrc:"/imgs/icons/vuforia_m.png",alt:"Vuforia"},{src:"/imgs/icons/node.png",msrc:"/imgs/icons/node.png",alt:"NodeJS"},{src:"/imgs/icons/mongo.png",msrc:"/imgs/icons/mongo_m.png",alt:"MongoDB"}]},H=function(e){var t=e.getBoundingClientRect(),a=window.innerHeight||document.documentElement.clientHeight,n=window.innerWidth||document.documentElement.clientWidth,i=t.top<=a&&t.top+t.height>=0,r=t.left<=n&&t.left+t.width>=0;return i&&r},M=function(e){return H(e)||e.getBoundingClientRect().y<0};window.lastScrollTop=0;a(57);var L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={dynamicFlyer:"",timeouts:[]},a.contactBubble=i.a.createRef(),a.hand=i.a.createRef(),a.smile=i.a.createRef(),a.footer=i.a.createRef(),a.logoHover=a.logoHover.bind(Object(f.a)(a)),a.logoHoverEnd=a.logoHoverEnd.bind(Object(f.a)(a)),a.callFlyer=a.callFlyer.bind(Object(f.a)(a)),a.closeFlyer=a.closeFlyer.bind(Object(f.a)(a)),a.scrollEvent=a.scrollEvent.bind(Object(f.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"logoHover",value:function(){this.hand.current.classList.remove("animated","handTada"),this.hand.current.classList.add("visible","animated","handTada"),this.smile.current.classList.add("visible")}},{key:"logoHoverEnd",value:function(){var e=this.state.timeouts,t=this,a=setTimeout(function(){t.hand.current.classList.remove("visible","animated","handTada"),t.smile.current.classList.remove("visible")},800);this.setState({timeouts:[].concat(Object(p.a)(e),[a])})}},{key:"callFlyer",value:function(e){var t=e.currentTarget.getAttribute("data-target");this.setState({dynamicFlyer:t})}},{key:"closeFlyer",value:function(){this.setState({dynamicFlyer:""})}},{key:"scrollEvent",value:function(){document.querySelectorAll(".portfolio-card").forEach(function(e){H(e)&&e.classList.add("come-in")})}},{key:"componentDidMount",value:function(){var e=this.state.timeouts,t=this,a=document.querySelectorAll(".portfolio-card"),n=setTimeout(function(){t.logoHover(),t.logoHoverEnd()},2e3);this.setState({timeouts:[].concat(Object(p.a)(e),[n])}),a.forEach(function(e){H(e)&&e.classList.add("come-in")}),window.addEventListener("scroll",this.scrollEvent)}},{key:"componentWillUnmount",value:function(){this.state.timeouts.forEach(function(e){clearTimeout(e)}),window.removeEventListener("scroll",this.scrollEvent)}},{key:"render",value:function(){var e=this.state.dynamicFlyer;return i.a.createElement(i.a.Fragment,null,i.a.createElement(N,{pageId:"home"}),i.a.createElement(T,{ref:this.contactBubble}),i.a.createElement("section",{id:"sec1"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{id:"img-container",onMouseEnter:this.logoHover,onMouseLeave:this.logoHoverEnd},i.a.createElement("img",{id:"chu-logo",src:"/imgs/chu-logo.png",alt:"Loading Logo..."}),i.a.createElement("div",{id:"hand",ref:this.hand},i.a.createElement("img",{src:"/imgs/hand.png",alt:"Loading hand..."})),i.a.createElement("img",{id:"smile",src:"/imgs/smile.png",alt:"Loading smile...",ref:this.smile})),i.a.createElement("h1",null,x.Hero.title),i.a.createElement("p",{className:"contentText"},x.Hero.content)),i.a.createElement("div",{className:"section-header",id:"self-intro"},i.a.createElement("h2",null,"About me")),i.a.createElement("div",{className:"container container-flyer"},e&&i.a.createElement(k,{direction:"left",animated:!0,content:x[e]}),i.a.createElement(k,{direction:"left",animated:!1,content:x.SelfIntro}),i.a.createElement("div",{className:"flyer-divider"},e&&i.a.createElement("div",{className:"closeBtn",onClick:this.closeFlyer},i.a.createElement(b.a,null))),i.a.createElement(k,{direction:"right",animated:!1,content:x.Company,callFlyer:this.callFlyer}))),i.a.createElement("section",{id:"sec3"},i.a.createElement("div",{className:"section-header"},i.a.createElement("h2",null,"Projects")),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"container-inner container-inner-wrap"},i.a.createElement(v.a,{container:!0,spacing:3,className:"grid-container grid-container-left"},i.a.createElement(v.a,{item:!0,xs:12},i.a.createElement(C,{large:!0,content:x.ITS}))),i.a.createElement(v.a,{container:!0,spacing:3,className:"grid-container grid-container-right"},i.a.createElement(v.a,{item:!0,xs:12,sm:6,md:12},i.a.createElement(C,{content:x.DealFindMe})),i.a.createElement(v.a,{item:!0,xs:12,sm:6,md:12},i.a.createElement(C,{content:x.Milu})))),i.a.createElement("div",{className:"container-inner"},i.a.createElement(v.a,{container:!0,spacing:3,className:"grid-container"},i.a.createElement(v.a,{item:!0,xs:12,sm:6,lg:4},i.a.createElement(C,{content:x.EthereumWallet})),i.a.createElement(v.a,{item:!0,xs:12,sm:6,lg:8},i.a.createElement(C,{content:x.MovieEmodex})))))),i.a.createElement("section",{id:"sec4"},i.a.createElement("div",{className:"section-header"},i.a.createElement("h2",null,"Lets chat"),i.a.createElement("h1",null,"I am open to",i.a.createElement("br",null),"creative ideas!")),i.a.createElement("footer",{ref:this.footer},"Copyright \xa9 2016 - 2020 Chu, Tianxin. All rights reserved.")))}}]),t}(n.Component),R=(a(60),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"scrollHint-wrapper"},i.a.createElement("div",{className:"scrollHint"}))}}]),t}(n.Component)),U=a(36),F=(a(73),{playerVars:{enablejsapi:1,rel:0,iv_load_policy:3}}),A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e)))._onReady=function(e){a.player=e.target},a.playVideo=function(){a.setState({started:!0}),a.player.playVideo()},a._onEnd=function(){a.setState({started:!1})},a.player=null,a.state={width:0,started:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.started;return i.a.createElement("div",{className:"player-wrapper"},i.a.createElement("div",{class:"player-cover ".concat(e?"hide":""),type:"button",onClick:this.playVideo},i.a.createElement("div",{className:"player-cover-title"},"Q"),i.a.createElement("hr",null),i.a.createElement("div",{className:"player-cover-text"},"What problem to solve?")),i.a.createElement(U.a,{videoId:"b4Ro7i9c2QE",opts:F,onReady:this._onReady,onEnd:this._onEnd}))}}]),t}(n.Component),D=(a(74),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).scrollEvent=function(){M(a.endOfSec2.current)?a.setState({scrollLevel:3}):M(a.player.current)?a.setState({scrollLevel:2}):M(a.sec2Title.current)?a.setState({scrollLevel:1}):a.setState({scrollLevel:0})},a.windowResizeHandler=function(){a.setState({mobile:window.matchMedia("(max-width: 959px)").matches})},a.state={scrollLevel:0,mobile:window.matchMedia("(max-width: 959px)").matches},a.sec2Title=i.a.createRef(),a.player=i.a.createRef(),a.endOfSec2=i.a.createRef(),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){window.scrollTo(0,0)}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollEvent),window.addEventListener("resize",this.windowResizeHandler)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollEvent),window.removeEventListener("resize",this.windowResizeHandler)}},{key:"render",value:function(){var e=this.state,t=e.scrollLevel,a=e.mobile;return i.a.createElement(i.a.Fragment,null,i.a.createElement(N,{pageId:"its"}),i.a.createElement("section",{id:"its-sec1",className:3===t?"fade3":2===t?"fade2":""},i.a.createElement("div",{className:"container ".concat(t>=1?"fade1":"")},i.a.createElement("h2",null,x.ITSHero.title),i.a.createElement("p",{className:"contentText"},x.ITSHero.content)),i.a.createElement(R,null)),i.a.createElement("div",{id:"its-sec1-placeholder"}),i.a.createElement("section",{id:"its-sec2"},i.a.createElement("div",{className:"container"},i.a.createElement("h3",{ref:this.sec2Title},"To improve the",i.a.createElement("br",null),i.a.createElement("span",{className:"text-blue"},"effectiveness")," of teaching",i.a.createElement("br",null),"meets teachers' urgent need."),i.a.createElement("p",{className:"subheader"},"Students get lost fast in class. Teachers want to track students' response as much as their own teaching pace. Doing so will significantly improve the efficiency of teaching and learning. But they need help when facing large number of students."),i.a.createElement("div",{className:"playerStart",ref:this.player}),i.a.createElement(A,null),i.a.createElement("div",{className:"endOfSec2",ref:this.endOfSec2}))),i.a.createElement("section",{id:"its-sec3"},i.a.createElement("div",{className:"section-header"},i.a.createElement("h2",null,"User Study")),i.a.createElement("div",{className:"container"},i.a.createElement("p",{className:"lead"},"Teacher: I want ",i.a.createElement("span",{className:"text-orange"},"super power"),"!"),i.a.createElement("p",null,'The table below shows pairwise comparison matrix summarizing teachers\u2019 preferences between "superpowers". Each row shows a superpower that appeared in at least two teachers\u2019 hierarchies, and each column shows a different superpower against which it is being compared (cells on the diagonal represent self-comparisons, and are blacked-out). Cell shade indicates the number of teachers who ranked the row superpower higher than the column superpower, with darker shades indicating greater agreement (minimum observed value is 0, and maximum is 4). Grey indicates that this superpower was not present in all five teachers\u2019 card stacks (by the time a teacher first generated this card, no synonyms were available among the cards generated by previous teachers).'),i.a.createElement("img",{className:"img-its img-its1",src:"/imgs/its-1.jpg",alt:"Superpower chart"}))),i.a.createElement("section",{id:"its-sec4"},i.a.createElement("div",{className:"section-header"},i.a.createElement("h2",null,"Our proposal")),i.a.createElement("div",{className:"container"},i.a.createElement("p",{className:"lead"},"Use ",i.a.createElement("span",{className:"text-orange"},"Augmented Reality")," to enrich visible info"),i.a.createElement("p",null,"Based on carefully conducted user case study and detailed research about competitive teaching-aid tools on the market, we believe augmented reality will give teachers maximum access to additional data they need to perform most efficient and effective teaching. Such data refers to issues in-place in reality, is also interactive in projection. Teachers can observe and decide what to do with the data throughout the class while keeping environmental awareness. The benefits of head-mounted wearable device also includes keeping teachers' hands free to minimize the impact on their regular teaching behavior."))),i.a.createElement("section",{id:"its-sec5"},i.a.createElement("div",{className:"section-header"},i.a.createElement("h2",null,"Design")),i.a.createElement("div",{className:"container"},i.a.createElement("img",{className:"img-its img-its2",src:"/imgs/its-2.jpg",alt:"Illustation Overall"}),i.a.createElement("img",{className:"img-its img-its3",src:"/imgs/its-3.jpg",alt:"Illustation Stats"}),i.a.createElement("p",null,'As shown above, the HoloLens software should function as a monitor to all students and report their learning behavior with explicit visual feedback to the teacher. For example, the "hand-up" figure shows that student stuck at someplace. Colored "hand" shows multi-level urgency for student\'s need for help. And "Zzz" figure shows up after certain student\'s PC does not record any input behavior for a certain time. These sample figures help the teacher quickly identifies those who need help but may be too shy to raise their hands, or reminds the student who is idling behind the screen to guide them back to proper active learning status.'))),i.a.createElement("section",{id:"its-sec6"},i.a.createElement("div",{className:"section-header"},i.a.createElement("h2",null,"Technology")),i.a.createElement("div",{className:"container"},i.a.createElement("p",null,"The core technology we use is ",i.a.createElement("b",{className:"text-orange"},"Microsoft HoloLens"),". We use ",i.a.createElement("b",{className:"text-blue"},"Node")," and ",i.a.createElement("b",{className:"text-blue"},"MongoDB")," to handle data I/O, storage and calculations as a support."),i.a.createElement("div",{className:"tech-imgs-wrapper"},x.ITSTech.map(function(e,t){return i.a.createElement("img",{className:"tech-imgs",src:a?e.msrc:e.src,alt:e.alt,key:t})})))),i.a.createElement("section",{id:"its-sec7"},i.a.createElement("div",{className:"section-header"},i.a.createElement("h2",null,"Implementation")),i.a.createElement("div",{className:"container"},i.a.createElement("p",null,"My job is to ",i.a.createElement("b",{className:"text-orange"},"prototype a web application")," for displaying and testing data flows, to ",i.a.createElement("b",{className:"text-blue"},"initiate the construction of virtual world in Unity")," and to integrate Unity build with HoloLen emulator in Visual Studio. The following diagrams present basic data structures for both front end interface and Holographic display implementation."),i.a.createElement("p",{className:"lead"},"Web application Structure"),i.a.createElement("img",{className:"imp-imgs",src:"/imgs/its-6.png",alt:"Web application Structure"}),i.a.createElement("p",{className:"lead"},"AR Implementation Structure"),i.a.createElement("img",{className:"imp-imgs",src:"/imgs/its-7.png",alt:"AR Implementation Structure"}),i.a.createElement("p",null,"During my short stay, I mostly focused on Unity coding, aiming to create an AR environment that deliver visual information. We setup the database as a streaming source and use the headset as the front-end interface that receives and displays data. The data collection and database population coding is most accomplished by the time I joined the team. For the first phase of my work, I spent a short period of time learning the codebase built with Node.js and Ember.js. This step is important for me to understand how the database is connected to front end and how the web interface functions in order to migrant web data to hologram and visualize information. After that, I started to \u201ctranslate\u201d web language to hologram language to be displayed in HoloLens headset. I spent time reading papers about AR visual design guidelines and testing automated and gesture-triggerd 3D model behaviors. On the other hand, we tested data streaming in various approaches aiming to seamlessly integrate code and data. We also harmonized the coding style for code reuse."))),i.a.createElement("section",{id:"its-sec8"},i.a.createElement("div",{className:"section-header"},i.a.createElement("h2",null,"Outcome")),i.a.createElement("div",{className:"container"},i.a.createElement("p",null,"By the end of my stay, our team has finished designing and constructing the database and pre-scan the designated classroom for testing purpose. We also ",i.a.createElement("b",{className:"text-orange"},"finished visualizing data with web interface"),", making Unity interact with database, ",i.a.createElement("b",{className:"text-blue"},"dynamically generating and placing objects in vitual world")," based on retrived data, and rendering simple visual effects and animations. The image below is a demo web interface."),i.a.createElement("div",{className:"outcome-imgs-wrapper"},i.a.createElement("img",{className:"outcome-imgs",src:"/imgs/its-4.jpg",alt:"Outcome web app"})),i.a.createElement("p",null,"In the visual world, I built ",i.a.createElement("b",{className:"text-orange"},"figures which simulate visual feedback")," to remind teacher the learning status for specific student, made them dynamically generated and rendered based on local database input. The object behavior is also optimized to interact with camera movement and gesture."),i.a.createElement("div",{className:"outcome-imgs-wrapper"},i.a.createElement("img",{className:"outcome-imgs",src:"/imgs/its-5.png",alt:"Outcome AR"})),i.a.createElement("p",null,"Meanwhile, the steaming is tested seperately. With intention to bring our product online, more issues like network accessibility and security need to be taken into consideration. In the near future, field testing will be conducted and more information can be collected to aid the decision-making progress."))),i.a.createElement("section",{id:"its-sec9"},i.a.createElement("div",{className:"section-header"},i.a.createElement("h2",null,"Acknowledgment")),i.a.createElement("div",{className:"container"},i.a.createElement("p",{className:"lead"},"To Carnegie Mellon University ",i.a.createElement("b",{className:"text-cmu"},"HCI Institute")),i.a.createElement("p",null,"I remember the first day when I met Kenneth Holstein, PhD student at HCII back in 2017, he described to me about what people do at HCII as \u201cresearching about cutting edge and ahead of time technologies that will have huge market impact in the future\u201d and he gave me an example of mobile touchscreen research sponsored by Apple at early 21st century, which was more than five years before the first generation of iPhone hit the market. Looking back at the project I worked on during this short three months, I could not agree more. I appreciate all the guidance and help from Dr. Bruce McLaren, Dr. Vincent Aleven as well as admission and support staffs from HCI Institute. I enjoyed working closely with Kenneth Holstein, Zac Yu and all other team members. Finally, I sincerely wish them the best in the future development of Intelligent Tutoring Systems project."))),i.a.createElement("footer",{className:"its-footer"},i.a.createElement("div",{className:"container"},"Copyright \xa9 2016 - 2020 Chu, Tianxin. All rights reserved.")))}}]),t}(n.Component)),W=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,"dij")}}]),t}(n.Component),B=(a(75),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(u.HashRouter,null,i.a.createElement(i.a.Fragment,null,i.a.createElement(h.g,null,i.a.createElement(h.d,{path:"/",exact:!0,component:g}),i.a.createElement(h.d,{path:"/home",component:L}),i.a.createElement(h.d,{path:"/its",component:D}),i.a.createElement(h.d,{path:"/dfm",component:W}),i.a.createElement(h.c,{to:"/home"}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.163b5468.chunk.js.map