(window.webpackJsonp=window.webpackJsonp||[]).push([[29,13,14,18,21],{259:function(t,e,n){"use strict";n.r(e);var l=n(260),o=n.n(l),r=(n(261),n(262),{name:"Carousel",components:{VueSlickCarousel:o.a},methods:{showNext:function(){this.$refs.carousel.next()},showBefore:function(){this.$refs.carousel.prev()}}}),c=n(40),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"testimonials wf-section"},[n("div",{staticClass:"testimonials-section"},[n("div",{staticClass:"w-col w-col-10 slick-carousel"},[n("div",{staticClass:"w-slider-mask"},[n("VueSlickCarousel",{ref:"carousel",staticClass:"testimonial w-slider",attrs:{"css-ease":t.ease}},[n("div",{staticClass:"w-slide"},[n("div",{staticClass:"testimonial-text"},[t._v("\n              Suspendisse dignissim ultrices dolor, quis condimentum orci.\n              Proin eu pulvinar leo. Quisque tempor aliquet convallis. Ut in\n              urna lacinia, viverra ex quis, suscipit sapien. Donec sed ipsum\n              velit. Praesent at faucibus purus. Curabitur pretium nibh vel\n              nisi efficitur viverra. Nullam finibus in lectus ut fermentum.\n              Phasellus hendrerit nec nulla a posuere. Fusce rhoncus ut sem et\n              lobortis. Aenean tempus ut neque eu eleifend. Curabitur quis\n              urna mi. Suspendisse odio justo, lobortis vel auctor ut, ornare\n              eget tortor."),n("br"),t._v("LOREM IPSUM\n            ")])]),t._v(" "),n("div",{staticClass:"w-slide"},[n("div",{staticClass:"testimonial-text"},[t._v("\n              Suspendisse dignissim ultrices dolor, quis condimentum orci.\n              Proin eu pulvinar leo. Quisque tempor aliquet convallis. Ut in\n              urna lacinia, viverra ex quis, suscipit sapien. Donec sed ipsum\n              velit. Praesent at faucibus purus. Curabitur pretium nibh vel\n              nisi efficitur viverra. Nullam finibus in lectus ut fermentum.\n              Phasellus hendrerit nec nulla a posuere. Fusce rhoncus ut sem et\n              lobortis. Aenean tempus ut neque eu eleifend. Curabitur quis\n              urna mi. Suspendisse odio justo, lobortis vel auctor ut, ornare\n              eget tortor."),n("br"),t._v("LOREM IPSUM\n            ")])])])],1),t._v(" "),n("div",{staticClass:"slider-arrow"},[n("div",{staticClass:"left-arrow",on:{click:t.showBefore}},[n("div",{staticClass:"icon-4 w-icon-slider-left"},[t._v("◄")])]),t._v(" "),n("div",{staticClass:"right-arrow",on:{click:t.showNext}},[n("div",{staticClass:"icon-3 w-icon-slider-right"},[t._v("►")])])])])])])}),[],!1,null,null,null);e.default=component.exports},264:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{isOpen:!1,burgerOpen:!1}},methods:{toggle:function(){this.isOpen=!this.isOpen,document.getElementById("myDropdown").classList.toggle("show"),document.getElementById("myDropdown").classList.add("w--open")},burgerToggle:function(){this.burgerOpen=!this.burgerOpen,document.getElementById("myDropdown").classList.toggle("show"),document.getElementById("myDropdown").classList.add("w--open")}}},o=n(40),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation-container wf-section"},[n("div",{staticClass:"nav-contain w-row"},[n("div",{staticClass:"column-2 w-col w-col-5 w-col-stack nav-bar-group"},[n("NuxtLink",{staticClass:"nav-bar-logo",attrs:{to:"/"}},[n("img",{staticClass:"logo",attrs:{src:"assets/images/logo.ce898954.png",loading:"lazy",width:"245.5",alt:""}})]),t._v(" "),n("div",{staticClass:"w-nav-button",on:{click:t.burgerToggle}},[n("div",{staticClass:"w-icon-nav-menu"})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.burgerOpen,expression:"burgerOpen"}],staticClass:"w-nav-overlay",staticStyle:{display:"block",height:"4042.22px"},attrs:{id:"w-nav-overlay-0","data-wf-ignore":""}},[n("nav",{staticClass:"w-nav-menu",attrs:{role:"navigation","data-nav-menu-open":""}},[n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/"}},[t._v("\n            Homes\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/about"}},[t._v("\n            About\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/resources"}},[t._v("\n            Resources\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/faq"}},[t._v("\n            FAQ\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/contact"}},[t._v("\n            Contact\n          ")])],1)])],1),t._v(" "),n("div",{staticClass:"column w-col w-col-7 w-col-stack w-col-small-small-stack"},[n("div",{staticClass:"navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[n("div",{staticClass:"container w-container nav-menu-responsive"},[n("nav",{staticClass:"w-nav-menu",attrs:{role:"navigation"}},[n("NuxtLink",{attrs:{to:"/"}},[n("a",{staticClass:"nav-link w-nav-link"},[t._v("Home")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/about"}},[n("a",{staticClass:"nav-link w-nav-link"},[t._v("About")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/resources"}},[n("a",{staticClass:"nav-link w-nav-link"},[t._v("Resources")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/faq"}},[n("a",{staticClass:"nav-link w-nav-link"},[t._v("FAQ")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/contact"}},[n("a",{staticClass:"nav-link w-nav-link",attrs:{"aria-current":"page"}},[t._v("Contact")])])],1)])]),t._v(" "),n("div",{staticClass:"w-row"},[n("div",{staticClass:"sub-phone left w-col w-col-3 w-col-stack"},[n("div",{staticClass:"w-dropdown",attrs:{"data-hover":"true","data-delay":"0"},on:{click:t.toggle}},[t._m(0),t._v(" "),n("nav",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"w-dropdown-list",attrs:{id:"myDropdown"}},[t._m(1),t._v(" "),t._m(2)])])]),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"site-toggle w-col w-col-5 w-col-stack"},[n("Nuxt-link",{attrs:{to:"/att-index"}},[n("a",{staticClass:"toggle-button w-button",attrs:{href:"#"}},[t._v("\n              Attorneys At Law    ----------------\n            ")])])],1)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-toggle w-dropdown-toggle"},[n("div",{staticClass:"icon w-icon-dropdown-toggle"}),t._v(" "),n("div",{staticClass:"text-block-4"},[t._v("Real Estate")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-dropdown-list-sub"},[n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("Commercial")]),t._v(" "),n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("Title Settlement")]),t._v(" "),n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("Loan Closing")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-dropdown-list-sub"},[n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("Residential")]),t._v(" "),n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("Estate Planning")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sub-phone w-col w-col-4 w-col-stack"},[n("a",{staticClass:"phone-number",attrs:{href:"tel:337-893-3423"}},[t._v("337-893-3423")])])}],!1,null,null,null);e.default=component.exports},266:function(t,e,n){"use strict";n.r(e);var l=n(40),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer wf-section"},[n("div",{staticClass:"main-content-container w-container"},[n("div",{staticClass:"experienced-attorneys-text"},[t._v("Experienced and Local Attorneys Here for You")]),t._v(" "),n("div",{staticClass:"footer-content w-row"},[n("div",{staticClass:"w-col w-col-3"}),t._v(" "),n("div",{staticClass:"w-col w-col-3"},[n("p",{staticClass:"working-with-subtext"},[t._v("OFFICE"),n("br"),t._v("105 Tivoli Street"),n("br"),t._v("Abbeville, LA"),n("br"),t._v("337-893-3423"),n("br")])]),t._v(" "),n("div",{staticClass:"w-col w-col-3"},[n("p",{staticClass:"working-with-subtext"},[t._v("CONTACT"),n("br"),t._v("Disclaimer"),n("br"),t._v("Sitemap"),n("br"),t._v("Privacy policy"),n("br")])]),t._v(" "),n("div",{staticClass:"w-col w-col-3"},[n("p",{staticClass:"working-with-subtext"},[t._v("PRIVACY POLICY"),n("br"),t._v("‍Purpose Federal and state laws and regulations require Gabe A. Duhon, L.L.C. (“the Company”) to disclose how it collects, shares, and protects any personal information obtained during the course of normal business operations. This Privacy Policy and Notice is to be distributed pursuant to Title V of the Gramm-Leach-Bliley Act (GLBA). Any information collected will only be used in accordance with this privacy statement."),n("br")])])])])])}],!1,null,null,null);e.default=component.exports},275:function(t,e,n){"use strict";n.r(e);var l=n(40),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),n("Carousel")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overlay-section about-us resources contact w-container"},[n("h1",{staticClass:"hero-text sub-page-hero contact-us"},[t._v("Contact Us"),n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"resources-top contact wf-section"},[n("div",{staticClass:"resources-top-container contact-top w-row"},[n("div",{staticClass:"w-col w-col-8 w-col-stack"},[n("h1",{staticClass:"resources-title schedule"},[t._v("\n          Schedule a"),n("br"),t._v("Consultation"),n("br")]),t._v(" "),n("div",{staticClass:"w-form"},[n("form",{attrs:{id:"email-form",name:"email-form","data-name":"Email Form"}},[n("input",{staticClass:"w-input",attrs:{id:"name",type:"text",maxlength:"256",name:"name","data-name":"Name",placeholder:"Name"}}),t._v(" "),n("input",{staticClass:"w-input",attrs:{id:"email",type:"email",maxlength:"256",name:"email","data-name":"Email",placeholder:"Email",required:""}}),t._v(" "),n("input",{staticClass:"w-input",attrs:{id:"Phone",type:"tel",maxlength:"256",name:"Phone","data-name":"Phone",placeholder:"Phone",required:""}}),t._v(" "),n("input",{staticClass:"w-input",attrs:{id:"Service-Subject",type:"text",maxlength:"256",name:"Service-Subject","data-name":"Service / Subject",placeholder:"Service / Subject",required:""}}),t._v(" "),n("textarea",{staticClass:"w-input",attrs:{id:"Message",placeholder:"Message",maxlength:"5000",name:"Message","data-name":"Message",rows:"5"}}),t._v(" "),n("input",{staticClass:"w-button",attrs:{type:"submit",value:"Submit","data-wait":"Please wait..."}})]),t._v(" "),n("div",{staticClass:"w-form-done"},[n("div",[t._v("Thank you! Your submission has been received!")])]),t._v(" "),n("div",{staticClass:"w-form-fail"},[n("div",[t._v("Oops! Something went wrong while submitting the form.")])])])]),t._v(" "),n("div",{staticClass:"w-col w-col-4 w-col-stack"},[n("img",{staticClass:"contact-image",attrs:{src:"assets/images/Contact-Image.png",loading:"lazy",sizes:"(max-width: 479px) 87vw, (max-width: 767px) 84vw, (max-width: 991px) 500px, 31vw",alt:""}})])]),t._v(" "),n("div",{staticClass:"resources-top-container other-resources contact-bottom w-row"},[n("div",{staticClass:"column-10 w-col w-col-5"},[n("div",{staticClass:"w-embed w-iframe"},[n("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.1739156630233!2d-92.13768718488652!3d29.9744314819078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x862367f2016092bf%3A0x916bc0c052053c97!2s105%20Tivoli%20St%2C%20Abbeville%2C%20LA%2070510!5e0!3m2!1sen!2sus!4v1634949420130!5m2!1sen!2sus",width:"100%",height:"250",allowfullscreen:"",loading:"lazy"}})])]),t._v(" "),n("div",{staticClass:"w-col w-col-7"},[n("h1",{staticClass:"resources-title other address"},[t._v("\n          105 Tivoli Street"),n("br"),t._v("Abbeville, LA"),n("br"),t._v("337-893-3423"),n("br")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Carousel:n(259).default})},288:function(t,e,n){"use strict";n.r(e);var l={},o=n(40),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),t._v(" "),n("ContactMain"),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:n(264).default,ContactMain:n(275).default,Footer:n(266).default})}}]);