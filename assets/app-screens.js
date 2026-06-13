/* Síob app-screen mockups — reusable across landing + marketing pages.
   Usage: el.innerHTML = SIOB.phone( SIOB.screen('role') );  */
(function(){
  var I = {
    wheel:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.6"/><path d="M12 9.4V3.2M9.6 13.4 4.6 17.6M14.4 13.4l5 4.2"/></svg>',
    person:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.4"/><path d="M5.5 20c.6-3.4 3.2-5.4 6.5-5.4S17.9 16.6 18.5 20"/><path d="M17.5 4.8c1.5.6 2.4 1.8 2.8 3.4" stroke="#CDE84A"/></svg>',
    arrowUR:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>',
    back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>',
    clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 8v4.3l2.8 1.7"/></svg>'
  };

  function statusBar(dark){
    var c = dark ? '' : '';
    return '<div class="as__bar"><span>9:41</span><span class="sig"><i></i><i></i><i></i> &nbsp;<svg width="22" height="11" viewBox="0 0 22 11" fill="none" stroke="currentColor" stroke-width="1"><rect x="1" y="1" width="17" height="9" rx="2"/><rect x="3" y="3" width="11" height="5" rx="1" fill="currentColor" stroke="none"/><path d="M20 4v3" stroke-width="1.6"/></svg></span></div>';
  }

  var SCREENS = {
    role: function(){
      return '<div class="as">'+statusBar(true)+
        '<div class="as__body">'+
          '<div class="rs-top"><span class="as__wm">síob<span class="pd">.</span></span>'+
            '<span class="as__av" style="background:oklch(0.88 0.06 150);color:oklch(0.35 0.09 150)">CK</span></div>'+
          '<div class="as__eyebrow" style="color:var(--cream-faint);margin-top:22px">Wednesday, 11 June</div>'+
          '<div class="as__h" style="font-size:26px;margin-top:8px">What are you<br>up to today?</div>'+
          '<div style="display:flex;flex-direction:column;gap:11px;margin-top:18px;flex:1">'+
            '<div class="rs-card rs-card--lime"><span style="color:var(--lime-ink)" class="ric">'+I.wheel+'</span>'+
              '<span class="rs-chip">'+I.arrowUR+'</span>'+
              '<div class="rttl">Captain</div><div class="rsub">You\u2019ve got the car. Fill your empty seats on a trip you\u2019re already making.</div></div>'+
            '<div class="rs-card rs-card--glass"><span class="ric" style="color:var(--cream)">'+I.person+'</span>'+
              '<div class="rttl">Passenger</div><div class="rsub">You need a lift. Grab a seat with someone going your way.</div></div>'+
          '</div>'+
        '</div></div>';
    },
    results: function(){
      function ride(t,arr,price,nm,meta,seats,feat){
        return '<div class="ride'+(feat?' feat':'')+'">'+(feat?'<span class="vbadge">Verified Captain</span>':'')+
          '<div class="r1"><div class="rtime">'+t+' <small>\u2192 '+arr+'</small></div><div class="rprice">'+price+'</div></div>'+
          '<div class="r2"><span class="as__av" style="width:28px;height:28px;font-size:11px;background:oklch(0.88 0.06 30);color:oklch(0.35 0.09 30)">'+nm.charAt(0)+'</span>'+
          '<span class="nm">'+nm+'</span> <span class="mt">'+meta+'</span><span class="seats">'+seats+'</span></div></div>';
      }
      return '<div class="as as--cream">'+statusBar()+
        '<div class="as__body">'+
          '<div class="rs-top"><span class="as-iconbtn">'+I.back+'</span>'+
            '<div style="flex:1;margin-left:12px"><div class="as__h" style="font-size:17px">Dublin \u2192 Galway</div>'+
            '<div style="font-size:11px;color:var(--ink-soft)">Fri 13 Jun \u00b7 after 5pm \u00b7 1 seat</div></div></div>'+
          '<div class="as-sortrow"><span class="as-sort on">Best match</span><span class="as-sort">Cheapest</span><span class="as-sort">Earliest</span></div>'+
          '<div class="as-grouplbl">Friday evening</div>'+
          ride('17:30','20:15','\u20ac14','Aoife M.','\u00b7 \u2605 4.9','2 seats',true)+
          ride('18:05','20:50','\u20ac13','Cian D.','\u00b7 \u2605 4.8','3 seats',false)+
        '</div></div>';
    },
    chat: function(){
      return '<div class="as">'+statusBar(true)+
        '<div class="ch-head">'+
          '<div class="ch-row"><span class="as__av" style="background:oklch(0.88 0.06 30);color:oklch(0.35 0.09 30)">A</span>'+
            '<div style="flex:1"><div style="font-family:var(--display);font-weight:800;font-size:15px">Aoife M.</div>'+
            '<div style="font-size:11px;color:var(--cream-soft)">\u2605 4.9 \u00b7 replies in ~5 min</div></div>'+
            '<span style="font-size:11px;font-weight:700;color:var(--lime)">Profile</span></div>'+
          '<div class="ch-ctx"><span>Fri 13 \u00b7 Dublin \u2192 Galway \u00b7 17:30</span><span style="color:var(--cream)"><b>\u20ac14</b> listed</span></div>'+
        '</div>'+
        '<div class="ch-thread">'+
          '<div class="bub them">Hiya! Plenty of room, leaving Heuston at half 5 \u2014 grand?</div>'+
          '<div class="bub me">Perfect. Any chance of \u20ac13 if I meet you in Lucan?</div>'+
          '<div class="offer"><div class="ohd"><span>Ciara\u2019s offer</span><span class="opill">Pending</span></div>'+
            '<div class="oprice">\u20ac13 <s>\u20ac14</s></div>'+
            '<div class="odet"><span class="ld"></span> Pickup: Lucan Shopping Centre</div>'+
            '<div class="odet">'+I.clock+' Same departure \u00b7 17:30</div>'+
            '<div class="obtns"><span class="obtn fill">Accept \u20ac13</span><span class="obtn out">Counter</span></div></div>'+
        '</div></div>';
    }
  };

  window.SIOB = window.SIOB || {};
  window.SIOB.screen = function(name){ return (SCREENS[name]||SCREENS.role)(); };
  window.SIOB.phone = function(inner, sm){
    return '<div class="phone'+(sm?' phone--sm':'')+'"><div class="phone__notch"></div><div class="phone__screen">'+inner+'</div></div>';
  };
})();
