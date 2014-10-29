// ==UserScript==
// @name         Google Tracking Removal
// @namespace    http://kafene.org
// @version      1.0
// @require      https://code.jquery.com/jquery-2.1.1.min.js
// @require      https://cdn.rawgit.com/brandonaaron/livequery/master/jquery.livequery.min.js
// @grant        unsafeWindow
// @match        *://*.google.com/*
// @match        *://*.google.ad/*
// @match        *://*.google.ae/*
// @match        *://*.google.com.af/*
// @match        *://*.google.com.ag/*
// @match        *://*.google.com.ai/*
// @match        *://*.google.am/*
// @match        *://*.google.co.ao/*
// @match        *://*.google.com.ar/*
// @match        *://*.google.as/*
// @match        *://*.google.at/*
// @match        *://*.google.com.au/*
// @match        *://*.google.az/*
// @match        *://*.google.ba/*
// @match        *://*.google.com.bd/*
// @match        *://*.google.be/*
// @match        *://*.google.bf/*
// @match        *://*.google.bg/*
// @match        *://*.google.com.bh/*
// @match        *://*.google.bi/*
// @match        *://*.google.bj/*
// @match        *://*.google.com.bn/*
// @match        *://*.google.com.bo/*
// @match        *://*.google.com.br/*
// @match        *://*.google.bs/*
// @match        *://*.google.co.bw/*
// @match        *://*.google.by/*
// @match        *://*.google.com.bz/*
// @match        *://*.google.ca/*
// @match        *://*.google.cd/*
// @match        *://*.google.cf/*
// @match        *://*.google.cg/*
// @match        *://*.google.ch/*
// @match        *://*.google.ci/*
// @match        *://*.google.co.ck/*
// @match        *://*.google.cl/*
// @match        *://*.google.cm/*
// @match        *://*.google.cn/*
// @match        *://*.google.com.co/*
// @match        *://*.google.co.cr/*
// @match        *://*.google.com.cu/*
// @match        *://*.google.cv/*
// @match        *://*.google.com.cy/*
// @match        *://*.google.cz/*
// @match        *://*.google.de/*
// @match        *://*.google.dj/*
// @match        *://*.google.dk/*
// @match        *://*.google.dm/*
// @match        *://*.google.com.do/*
// @match        *://*.google.dz/*
// @match        *://*.google.com.ec/*
// @match        *://*.google.ee/*
// @match        *://*.google.com.eg/*
// @match        *://*.google.es/*
// @match        *://*.google.com.et/*
// @match        *://*.google.fi/*
// @match        *://*.google.com.fj/*
// @match        *://*.google.fm/*
// @match        *://*.google.fr/*
// @match        *://*.google.ga/*
// @match        *://*.google.ge/*
// @match        *://*.google.gg/*
// @match        *://*.google.com.gh/*
// @match        *://*.google.com.gi/*
// @match        *://*.google.gl/*
// @match        *://*.google.gm/*
// @match        *://*.google.gp/*
// @match        *://*.google.gr/*
// @match        *://*.google.com.gt/*
// @match        *://*.google.gy/*
// @match        *://*.google.com.hk/*
// @match        *://*.google.hn/*
// @match        *://*.google.hr/*
// @match        *://*.google.ht/*
// @match        *://*.google.hu/*
// @match        *://*.google.co.id/*
// @match        *://*.google.ie/*
// @match        *://*.google.co.il/*
// @match        *://*.google.im/*
// @match        *://*.google.co.in/*
// @match        *://*.google.iq/*
// @match        *://*.google.is/*
// @match        *://*.google.it/*
// @match        *://*.google.je/*
// @match        *://*.google.com.jm/*
// @match        *://*.google.jo/*
// @match        *://*.google.co.jp/*
// @match        *://*.google.co.ke/*
// @match        *://*.google.com.kh/*
// @match        *://*.google.ki/*
// @match        *://*.google.kg/*
// @match        *://*.google.co.kr/*
// @match        *://*.google.com.kw/*
// @match        *://*.google.kz/*
// @match        *://*.google.la/*
// @match        *://*.google.com.lb/*
// @match        *://*.google.li/*
// @match        *://*.google.lk/*
// @match        *://*.google.co.ls/*
// @match        *://*.google.lt/*
// @match        *://*.google.lu/*
// @match        *://*.google.lv/*
// @match        *://*.google.com.ly/*
// @match        *://*.google.co.ma/*
// @match        *://*.google.md/*
// @match        *://*.google.me/*
// @match        *://*.google.mg/*
// @match        *://*.google.mk/*
// @match        *://*.google.ml/*
// @match        *://*.google.mn/*
// @match        *://*.google.ms/*
// @match        *://*.google.com.mt/*
// @match        *://*.google.mu/*
// @match        *://*.google.mv/*
// @match        *://*.google.mw/*
// @match        *://*.google.com.mx/*
// @match        *://*.google.com.my/*
// @match        *://*.google.co.mz/*
// @match        *://*.google.com.na/*
// @match        *://*.google.com.nf/*
// @match        *://*.google.com.ng/*
// @match        *://*.google.com.ni/*
// @match        *://*.google.ne/*
// @match        *://*.google.nl/*
// @match        *://*.google.no/*
// @match        *://*.google.com.np/*
// @match        *://*.google.nr/*
// @match        *://*.google.nu/*
// @match        *://*.google.co.nz/*
// @match        *://*.google.com.om/*
// @match        *://*.google.com.pa/*
// @match        *://*.google.com.pe/*
// @match        *://*.google.com.ph/*
// @match        *://*.google.com.pk/*
// @match        *://*.google.pl/*
// @match        *://*.google.pn/*
// @match        *://*.google.com.pr/*
// @match        *://*.google.ps/*
// @match        *://*.google.pt/*
// @match        *://*.google.com.py/*
// @match        *://*.google.com.qa/*
// @match        *://*.google.ro/*
// @match        *://*.google.ru/*
// @match        *://*.google.rw/*
// @match        *://*.google.com.sa/*
// @match        *://*.google.com.sb/*
// @match        *://*.google.sc/*
// @match        *://*.google.se/*
// @match        *://*.google.com.sg/*
// @match        *://*.google.sh/*
// @match        *://*.google.si/*
// @match        *://*.google.sk/*
// @match        *://*.google.com.sl/*
// @match        *://*.google.sn/*
// @match        *://*.google.so/*
// @match        *://*.google.sm/*
// @match        *://*.google.st/*
// @match        *://*.google.com.sv/*
// @match        *://*.google.td/*
// @match        *://*.google.tg/*
// @match        *://*.google.co.th/*
// @match        *://*.google.com.tj/*
// @match        *://*.google.tk/*
// @match        *://*.google.tl/*
// @match        *://*.google.tm/*
// @match        *://*.google.tn/*
// @match        *://*.google.to/*
// @match        *://*.google.com.tr/*
// @match        *://*.google.tt/*
// @match        *://*.google.com.tw/*
// @match        *://*.google.co.tz/*
// @match        *://*.google.com.ua/*
// @match        *://*.google.co.ug/*
// @match        *://*.google.co.uk/*
// @match        *://*.google.com.uy/*
// @match        *://*.google.co.uz/*
// @match        *://*.google.com.vc/*
// @match        *://*.google.co.ve/*
// @match        *://*.google.vg/*
// @match        *://*.google.co.vi/*
// @match        *://*.google.com.vn/*
// @match        *://*.google.vu/*
// @match        *://*.google.ws/*
// @match        *://*.google.rs/*
// @match        *://*.google.co.za/*
// @match        *://*.google.co.zm/*
// @match        *://*.google.co.zw/*
// @match        *://*.google.cat/*
// ==/UserScript==

(function () {
    function preventUrlRewriting() {
        var s = document.createElement('script');
        s.textContent = '(function(){Object.defineProperty(window,"rwt",{value:' +
            'function(){return true;},writable:false,configurable:false});' +
            'Object.defineProperty(window,"_gaUserPrefs",{value:{ioo:function()' +
            '{return true;}},writable:false,configurable:false});})();';
        s.onload = function () { s.parentNode.removeChild(s); };
        (document.head || document.documentElement).appendChild(s);
    }

    function reverseUrlRewrite(a) {
        var m = /[&?]url=([^&]+)/i.exec(a.search);
        if (m && m[1] && /\/url$/.test(a.pathname)) {
            a.href = decodeURIComponent(m[1]);
            return false;
        }
        if (/\/url?q=/.test(a.href)) {
            var q = /\?q=([^&]+)/.exec(a.href)[1];
            a.href = decodeURIComponent(q);
        }
        a.removeAttribute('onmousedown');
        a.removeAttribute('onmouseover');
    }

    var w = window.wrappedJSObject || window;
    $(document).livequery('a[href][onmousedown*=rwt]', reverseUrlRewrite);
    [].forEach.call(document.querySelectorAll('a'), reverseUrlRewrite);
})();
