/* Síob site — shared chrome: nav + footer injection, mobile menu, scroll reveal.
   Each page sets <body data-page="..." data-nav="light|green">.
   Place <div id="site-nav"></div> after <body> and <div id="site-footer"></div> before scripts. */
(function(){
  "use strict";

  var ICON = {
    arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    x:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 1.2h3.7l-8 9.1 9.4 12.5h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L0 1.2h7.6l5.2 6.9zM17.6 20.6h2L6.5 3.3H4.3z"/></svg>',
    linkedin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 3H3.6A.6.6 0 0 0 3 3.6v16.8a.6.6 0 0 0 .6.6h16.8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6zM8.3 18.3H5.5V9.4h2.8zM6.9 8.2a1.6 1.6 0 1 1 0-3.3 1.6 1.6 0 0 1 0 3.3zM18.5 18.3h-2.8v-4.3c0-1 0-2.4-1.4-2.4s-1.7 1.1-1.7 2.3v4.4H9.8V9.4h2.7v1.2h.04a3 3 0 0 1 2.7-1.5c2.9 0 3.4 1.9 3.4 4.3z"/></svg>',
    instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    apple:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 12.5c0-2.2 1.8-3.25 1.88-3.3a4.1 4.1 0 0 0-3.23-1.75c-1.37-.14-2.68.8-3.38.8s-1.77-.78-2.92-.76A4.3 4.3 0 0 0 5.76 9.7c-1.55 2.7-.4 6.7 1.12 8.9.74 1.07 1.62 2.27 2.78 2.23 1.12-.05 1.54-.72 2.9-.72s1.74.72 2.92.7c1.2-.02 1.97-1.09 2.7-2.17a9 9 0 0 0 1.22-2.5 3.96 3.96 0 0 1-2.35-3.64zM14.9 5.9A3.9 3.9 0 0 0 15.8 3a4 4 0 0 0-2.6 1.34 3.7 3.7 0 0 0-.92 2.8 3.3 3.3 0 0 0 2.62-1.24z"/></svg>',
    play:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 3.4v17.2c0 .5.5.8 1 .6l13.4-8.5c.5-.3.5-1 0-1.3L5 2.8c-.5-.3-1 0-1 .6z"/></svg>'
  };

  var page = document.body.getAttribute('data-page') || 'home';
  var navStyle = document.body.getAttribute('data-nav') || 'light';

  var LINKS = [
    {h:'index.html#how', t:'How it works'},
    {h:'safety.html', t:'Safety', p:'safety'},
    {h:'investors.html', t:'Investors', p:'investors'},
    {h:'careers.html', t:'Careers', p:'careers'},
    {h:'contact.html', t:'Contact', p:'contact'}
  ];

  function navHTML(){
    var links = LINKS.map(function(l){
      var active = l.p && l.p===page ? ' class="active"' : '';
      return '<a href="'+l.h+'"'+active+'>'+l.t+'</a>';
    }).join('');
    return ''+
    '<nav class="nav'+(navStyle==='green'?' nav--green':'')+'" id="siteNav">'+
      '<div class="container nav__inner">'+
        '<a href="index.html" class="wordmark" aria-label="Síob home">síob<span class="pd">.</span></a>'+
        '<div class="nav__links">'+links+'</div>'+
        '<div class="nav__cta">'+
          '<a href="contact.html#beta" class="btn btn--lime btn--sm nav__primary">Join the beta</a>'+
          '<button class="nav__burger" id="navBurger" aria-label="Menu" aria-expanded="false">'+ICON.menu+'</button>'+
        '</div>'+
      '</div>'+
    '</nav>';
  }

  function footHTML(){
    return ''+
    '<footer class="footer">'+
      '<div class="container">'+
        '<div class="footer__top">'+
          '<div class="footer__brand">'+
            '<div class="wordmark">síob<span class="pd">.</span></div>'+
            '<p>Ireland\u2019s car-sharing community. Every empty seat is a lift for someone \u2014 one profile, two hats: ride as a Passenger, drive as a Captain.</p>'+
          '</div>'+
          '<div class="footer__col"><h5>Product</h5>'+
            '<a href="index.html#how">How it works</a>'+
            '<a href="safety.html">Safety &amp; trust</a>'+
            '<a href="index.html#captains">Become a Captain</a>'+
            '<a href="contact.html#beta">Join the beta</a>'+
          '</div>'+
          '<div class="footer__col"><h5>Company</h5>'+
            '<a href="investors.html">Investors</a>'+
            '<a href="careers.html">Careers</a>'+
            '<a href="contact.html">Contact</a>'+
            '<a href="contact.html#press">Press</a>'+
          '</div>'+
          '<div class="footer__col"><h5>Legal</h5>'+
            '<a href="privacy.html">Privacy Policy</a>'+
            '<a href="terms.html">Terms of Service</a>'+
            '<a href="cookies.html">Cookie Policy</a>'+
          '</div>'+
        '</div>'+
        '<div class="footer__bottom">'+
          '<p class="legal-mini">\u00A9 '+new Date().getFullYear()+' <span class="ph-inline">S\u00edob Mobility Ltd.</span> Registered in Ireland, company no. <span class="ph-inline">[CRO no.]</span>. Registered office: <span class="ph-inline">[Registered address, Dublin]</span>. S\u00edob is a technology platform connecting drivers and passengers for cost-sharing; it is not a transport provider.</p>'+
          '<div class="footer__social">'+
            '<a href="#" aria-label="X">'+ICON.x+'</a>'+
            '<a href="#" aria-label="LinkedIn">'+ICON.linkedin+'</a>'+
            '<a href="#" aria-label="Instagram">'+ICON.instagram+'</a>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</footer>';
  }

  var navMount = document.getElementById('site-nav');
  var footMount = document.getElementById('site-footer');
  if(navMount) navMount.outerHTML = navHTML();
  if(footMount) footMount.outerHTML = footHTML();

  // mobile menu
  var nav = document.getElementById('siteNav');
  var burger = document.getElementById('navBurger');
  if(burger && nav){
    burger.addEventListener('click', function(){
      var open = nav.classList.toggle('open');
      burger.innerHTML = open ? ICON.close : ICON.menu;
      burger.setAttribute('aria-expanded', open?'true':'false');
    });
    nav.querySelectorAll('.nav__links a').forEach(function(a){
      a.addEventListener('click', function(){ nav.classList.remove('open'); burger.innerHTML=ICON.menu; });
    });
  }

  // fill any [data-icon] placeholders with shared icons
  document.querySelectorAll('[data-icon]').forEach(function(el){
    var k=el.getAttribute('data-icon'); if(ICON[k]) el.innerHTML=ICON[k];
  });

  // scroll reveal
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:0.12, rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

  // expose icons for inline use
  window.SIOB_ICON = ICON;
})();
