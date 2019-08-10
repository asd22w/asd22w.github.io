function sl(t, stepChanger, stepMinCh, btnLocation, euroCrew) {
    var s;
    return s = function () {
        function s(s, e) {
            var i, h, l, o, a, u, r, n, b, m, c, p, d, f, g, S, v, F, C, x;
            this.element = s, this.element.hide(), this.min = null != (h = this.element.attr("min")) ? h : e.min, this.max = null != (l = this.element.attr("max")) ? l : e.max, this.step = null != (p = this.element.attr("step")) ? p : e.step, this.value = null != (d = this.element.attr("value")) ? d : (e.max - e.min) / 2 + e.min, this.decimals = null != (f = this.element.data("decimals")) ? f : e.decimals, this.prefix = null != (g = this.element.data("prefix")) ? g : e.prefix, this.postfix = null != (S = this.element.data("postfix")) ? S : e.postfix, this.toggleBubble = null != (v = this.element.data("toggle-bubble")) ? v : e.toggleBubble, this.toggleLimit = null != (F = this.element.data("toggle-limit")) ? F : e.toggleLimit, this.bubbleColor = null != (C = this.element.data("bubble-color")) ? C : e.bubbleColor, this.bubbleFontScale = null != (o = this.element.data("bubble-font-scale")) ? o : e.bubbleFontScale, this.bubbleFontColor = null != (a = this.element.data("bubble-font-color")) ? a : e.bubbleFontColor, this.thumbScale = null != (u = this.element.data("thumb-scale")) ? u : e.thumbScale, this.thumbColor = null != (r = this.element.data("thumb-color")) ? r : e.thumbColor, this.thumbFontScale = null != (n = this.element.data("thumb-font-scale")) ? n : e.thumbFontScale, this.thumbFontColor = null != (b = this.element.data("thumb-font-color")) ? b : e.thumbFontColor, this.trackScale = null != (m = this.element.data("track-scale")) ? m : e.trackScale, this.trackColor = null != (c = this.element.data("track-color")) ? c : e.trackColor, this.min = parseFloat(this.removeCommas(this.min)), this.max = parseFloat(this.removeCommas(this.max)), this.step = parseFloat(this.removeCommas(this.step)), this.value = parseFloat(this.removeCommas(this.value)), this.decimals = parseFloat(this.removeCommas(this.decimals)), this.toggleLimit = parseFloat(this.removeCommas(this.toggleLimit)), this.bubbleFontScale = parseFloat(this.removeCommas(this.bubbleFontScale)), this.thumbScale = parseFloat(this.removeCommas(this.thumbScale)), this.thumbFontScale = parseFloat(this.removeCommas(this.thumbFontScale)), this.trackScale = parseFloat(this.removeCommas(this.trackScale)), this.slider = t("<div>").addClass("bubble-slider-wrap").insertAfter(this.element), this.minus = t("<div><span>-</span></div>").addClass("bubble-slider-minus").appendTo(this.slider), this.plus = t("<div><span>+</span></div>").addClass("bubble-slider-plus").appendTo(this.slider), this.track = t("<div>").addClass("bubble-slider-track").appendTo(this.slider), this.thumb = t("<div><span>").addClass("bubble-slider-thumb").appendTo(this.track), this.bubble = t("<div><span>").addClass("bubble-slider-bubble").appendTo(this.thumb), this.bubbleArrow = t("<div>").addClass("bubble-slider-bubble-arrow").prependTo(this.bubble), this.thumbSpan = this.thumb.find("span").first(), this.bubbleSpan = this.bubble.find("span").first(), 1 !== this.bubbleFontScale && (this.bubble.css({
                "font-size": parseFloat(this.bubble.css("font-size")) * this.bubbleFontScale + "px",
                "border-radius": parseFloat(this.bubble.css("border-radius")) * this.bubbleFontScale + "px"
            }), this.bubbleArrow.css({
                width: parseFloat(this.bubbleArrow.css("width")) * this.bubbleFontScale + "px",
                height: parseFloat(this.bubbleArrow.css("height")) * this.bubbleFontScale + "px"
            })), 1 !== this.thumbScale && this.thumb.css({
                width: parseFloat(this.thumb.css("width")) * this.thumbScale + "px",
                height: parseFloat(this.thumb.css("height")) * this.thumbScale + "px"
            }), 1 !== this.thumbFontScale && this.thumbSpan.css({
                "font-size": parseFloat(this.thumbSpan.css("font-size")) * this.thumbFontScale + "px"
            }), 1 !== this.trackScale && (this.minus.css({
                width: Math.round(parseFloat(this.minus.css("width")) * this.trackScale) + "px",
                height: Math.round(parseFloat(this.minus.css("height")) * this.trackScale) + "px",
                "font-size": Math.round(parseFloat(this.minus.css("font-size")) * this.trackScale) + "px"
            }), this.plus.css({
                width: Math.round(parseFloat(this.plus.css("width")) * this.trackScale) + "px",
                height: Math.round(parseFloat(this.plus.css("height")) * this.trackScale) + "px",
                "font-size": Math.round(parseFloat(this.plus.css("font-size")) * this.trackScale) + "px"
            }), this.track.css({
                left: parseFloat(this.minus.outerWidth()) + .2 * this.minus.outerWidth() + "px",
                right: parseFloat(this.plus.outerWidth()) + .2 * this.plus.outerWidth() + "px"
            })), 1 === this.bubbleFontScale && 1 === this.thumbScale && 1 === this.trackScale || (x = this.thumb.outerHeight() > this.plus.outerHeight() ? this.thumb.outerHeight() : this.plus.outerHeight(), i = this.bubble.outerHeight(), this.slider.css({
                margin: parseFloat(x) + parseFloat(i) + "px auto"
            })), this.bubbleColor && (this.bubbleArrow.css("background", this.bubbleColor), this.bubble.css("background", this.bubbleColor)), this.bubbleFontColor && this.bubbleSpan.css("color", this.bubbleFontColor), this.thumbColor && (this.minus.css("color", this.thumbColor), this.plus.css("color", this.thumbColor), this.thumb.css("background", this.thumbColor)), this.thumbFontColor && this.thumbSpan.css("color", this.thumbFontColor), this.trackColor && (this.minus.css("border-color", this.trackColor), this.plus.css("border-color", this.trackColor), this.track.css("background", this.trackColor)), this.dragging = !1, this.thumbOffset = this.thumb.outerWidth() / 2, this.setValue(this.value), this.positionThumb(this.value), this.toggleBubble && this.value.toString().length <= this.toggleLimit ? (this.bubble.hide(), this.thumbSpan.show()) : this.thumbSpan.hide(), this.thumb.css("-ms-touch-action", "none"), this.thumb.on("mousedown touchstart", function (t) {
                return function (s) {
                    return t.dragging ? void 0 : (s.preventDefault(), t.dragging = !0, t.bubbleState(!0))
                }
            }(this)), t("html").on("mousemove touchmove", function (t) {
                return function (s) {
                    return t.dragging ? (s.preventDefault(), "touchmove" === s.type ? t.dragThumb(s.originalEvent.touches[0].pageX) : t.dragThumb(s.originalEvent.pageX)) : void 0
                }
            }(this)).on("mouseup touchend", function (t) {
                return function (s) {
                    return t.dragging ? (s.preventDefault(), t.dragging = !1, t.bubbleState(!1)) : void 0
                }
            }(this)), this.minus.on("click", function (t) {
                return function (s) {
                    var e;
                    return s.preventDefault(), e = t.value - t.step, e = Math.max(t.min, e), t.setValue(e), t.positionThumb(e)
                }
            }(this)), this.plus.on("click", function (t) {
                return function (s) {
                    var e;
                    return s.preventDefault(), e = t.value + t.step, e = Math.min(t.max, e), t.setValue(e), t.positionThumb(e)
                }
            }(this)), t(window).on("resize onorientationchange", function (t) {
                return function () {
                    return t.positionThumb(t.value)
                }
            }(this))
        }
        return s.prototype.dragThumb = function (t) {
            var s, e, i;
            return e = this.track.offset().left + this.thumbOffset, s = this.track.offset().left + this.track.innerWidth() - this.thumbOffset, i = Math.max(e, t), i = Math.min(s, i), this.setValue(this.calcValue()), this.thumb.offset({
                left: i - this.thumbOffset
            })
        }, s.prototype.calcValue = function () {
            var t;
            return t = this.normalize(this.thumb.position().left, 0, this.track.innerWidth() - 2 * this.thumbOffset), t * (this.max - this.min) + this.min;
        }, s.prototype.setValue = function (t) {
            var s;
            return this.value = Math.round((t - this.min) / this.step) * this.step + this.min, this.element.val(this.value), s = this.prefix + this.addCommas(this.value.toFixed(this.decimals)) + this.postfix, this.thumbSpan.text(s), this.bubbleSpan.text(s)
        }, s.prototype.positionThumb = function (t) {
            var s;
            return s = this.normalize(t, this.min, this.max), this.thumb.offset({
                left: Math.round(s * (this.track.innerWidth() - 2 * this.thumbOffset) + this.track.offset().left)
            })
        }, s.prototype.bubbleState = function (t) {
            if (this.toggleBubble) {
                if (t) return this.bubble.stop(!0, !0).fadeIn(300), this.thumbSpan.stop(!0, !0).fadeOut(200);
                if (this.value.toString().length <= this.toggleLimit) return this.bubble.stop(!0, !0).fadeOut(300), this.thumbSpan.stop(!0, !0).fadeIn(200)
            }
        }, s.prototype.normalize = function (t, s, e) {
            return (t - s) / (e - s)
        }, s.prototype.addCommas = function (t) {
            if(euroCrew) {
                if(this.value == 8400){
                    changeData(btnLocation, 40);
                    return 40
                }
                if(this.value == 7200){
                    changeData(btnLocation, 16);
                    return 16
                }
                if(this.value == 6000){
                    changeData(btnLocation, 4);
                    return 4
                }
            }
            if(this.value == 10800) {
                changeData(btnLocation, 'Unlimited');
                return 'Unlimited'
            }
            if(this.value == 9600){
                changeData(btnLocation, 1024);
                return 1024
            }
            if(this.value == 8400){
                changeData(btnLocation, 500);
                return 500
            }
            if(this.value == 7200){
                changeData(btnLocation, 250);
                return 250
            }
            if(this.value == 6000){
                changeData(btnLocation, 100);
                return 100
            }
            if(this.value == 4800){
                changeData(btnLocation, 50);
                return 50
            }
            if(this.value == 3600){
                changeData(btnLocation, 40);
                return 40
            }
            if(this.value == 2400){
                changeData(btnLocation, 30);
                return 30
            }
            if(this.value == 1200){
                changeData(btnLocation, 20);
                return 20
            }
            if(this.value == 0){
                changeData(btnLocation, 10);
                return 10
            }
            return t.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
        }, s.prototype.removeCommas = function (t) {
            return t.toString().replace(/,/g, "")
        }, s
    }(), t.fn.bubbleSlider = function (e) {
        var i, h;
        return i = {
            min: stepMinCh,
            max: stepChanger,
            step: 1200,
            value: 250,
            decimals: 0,
            prefix: "",
            postfix: "",
            toggleBubble: !1,
            toggleLimit: 4,
            bubbleColor: "",
            bubbleFontScale: 1,
            bubbleFontColor: "",
            thumbScale: 1,
            thumbColor: "",
            thumbFontScale: 1,
            thumbFontColor: "",
            trackScale: 1,
            trackColor: ""
        }, h = t.extend({}, i, t.fn.bubbleSlider.defaults, e), new s(t(this), h)
    }, t(function () {
        return t(".bubble-slider").each(function () {
            return t(this).bubbleSlider()
        })
    })
}

sl(this.jQuery, 10800, 0, 'Europe');

$('.location').click(event => {
    if($('.dataBtn2').hasClass('button-select-active')) return;
    if(event.target.tagName != 'BUTTON') return;
    for(let btn of $('.location button')) {
        btn.classList.remove('button-select-active');
    }
    event.target.classList.add('button-select-active');
    if(event.target.classList.contains('locationBtn1')) {
        $('.bubble-slider-wrap').remove();
        sl(this.jQuery, 10800, 0, 'Europe');
    }
    if(event.target.classList.contains('locationBtn2')) {
        $('.bubble-slider-wrap').remove();
        sl(this.jQuery, 9600, 0, 'France + Monaco');
    }
    if(event.target.classList.contains('locationBtn3')) {
        $('.bubble-slider-wrap').remove();
        sl(this.jQuery, 9600, 4800, 'Worldwide');
    }
})

$('.data').click(event => {
    if(event.target.tagName != 'BUTTON') return;
    for(let btn of $('.data button')) {
        btn.classList.remove('button-select-active');
    }
    event.target.classList.add('button-select-active');
    if(event.target.classList.contains('dataBtn2')) {
        $('.bubble-slider-wrap').remove();
        $('.locationBtn2').addClass('greyed');
        $('.locationBtn3').addClass('greyed');
        sl(this.jQuery, 8400, 6000, 'EuropeCrew', true);
    } else {
        $('.bubble-slider-wrap').remove();
        $('.locationBtn2').removeClass('greyed');
        $('.locationBtn3').removeClass('greyed');
        sl(this.jQuery, 10800, 0, 'Europe');
    }
})
/* $('.bubble-slider').remove(); */

function changeData (location, gbSelected) {
    if(location == 'Europe') {
        switch(gbSelected) {
            case 10:
                planName.textContent = 'Starter plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 35';
                makeDataOnly();
                makeBtn('eu-10_orange');
                makeLink();
                break;
            case 20:
                planName.textContent = 'Sailor plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 60';
                makeDataOnly();
                makeBtn('eu-20_orange');
                makeLink();
                break;
            case 30:
                planName.textContent = 'Surfer plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 85';
                makeDataOnly();
                makeBtn('eu-30_orange');
                makeLink();
                break;
            case 40:
                planName.textContent = 'Streamer plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 110';
                makeDataOnly();
                makeBtn('eu-40_orange');
                makeLink();
                break;
            case 50:
                planName.textContent = 'Personal plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 150';
                makeDataOnly();
                makeBtn('eu-50_orange');
                makeLink();
                break;
            case 100:
                planName.textContent = 'Small crew plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 270';
                makeDataOnly();
                makeBtn('eu-100_orange');
                makeLink();
                break;
            case 250:
                planName.textContent = 'Medium crew plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 620';
                makeDataOnly();
                makeBtn('eu-250_orange');
                makeLink();
                break;
            case 500:
                planName.textContent = 'Guest and crew plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 1080';
                makeDataOnly();
                makeBtn('eu-500_orange');
                makeLink();
                break;
            case 1024:
                planName.textContent = 'Big data plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 2000';
                makeDataOnly();
                makeBtn('eu-1024_orange');
                makeLink();
                break;
            case 'Unlimited':
                planName.textContent = 'Unlimited EU plan';
                period.textContent = '/ Year';
                money.textContent = '€ 4900';
                makeDataOnly();
                makeBtn('eu-unlimited_vodafone-de');
                makeLink();
                break;
        }
    }

    /* france + monaco btn */

    if(location == 'France + Monaco') {
        switch(gbSelected) {
            case 10:
                planName.textContent = 'Basic plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 30';
                makeDataOnly();
                makeBtn('fr-mc-10_orange');
                makeLink2();
                break;
            case 20:
                planName.textContent = 'Standard plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 39';
                makeDataOnly();
                makeBtn('fr-mc-20_orange');
                makeLink2();
                break;
            case 30:
                planName.textContent = 'Advanced plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 55';
                makeDataOnly();
                makeBtn('fr-mc-30_orange')
                makeLink2();
                break;
            case 40:
                planName.textContent = 'Pro plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 73';
                makeDataOnly();
                makeBtn('fr-mc-40_orange')
                makeLink2();
                break;
            case 50:
                planName.textContent = 'Personal plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 75';
                makeDataOnly();
                makeBtn('fr-mc-50_orange')
                makeLink2();
                break;
            case 100:
                planName.textContent = 'Small crew plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 135';
                makeDataOnly();
                makeBtn('fr-mc-100_orange');
                makeLink2();
                break;
            case 250:
                planName.textContent = 'Medium crew plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 310';
                makeDataOnly();
                makeBtn('fr-mc-250_orange');
                makeLink2();
                break;
            case 500:
                planName.textContent = 'Guest and crew plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 595';
                makeDataOnly();
                makeBtn('fr-mc-500_orange');
                makeLink2();
                break;
            case 1024:
                planName.textContent = 'Big data plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 1080';
                makeDataOnly();
                makeBtn('fr-mc-1024_orange');
                makeLink2();
                break;
        }
    }

    /* worldwide btn */

    if(location == 'Worldwide') {
        switch(gbSelected) {
            case 50:
                planName.textContent = 'Personal plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 262';
                makeDataOnly();
                makeBtn('ww-50_vodafone');
                makeLink3();
                break;
            case 100:
                planName.textContent = 'Small crew plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 473';
                makeDataOnly();
                makeBtn('ww-100_vodafone');
                makeLink3();
                break;
            case 250:
                planName.textContent = 'Medium crew plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 787';
                makeDataOnly();
                makeBtn('ww-250_vodafone');
                makeLink3();
                break;
            case 500:
                planName.textContent = 'Guest and crew plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 1575';
                makeDataOnly();
                makeBtn('ww-500_vodafone');
                makeLink3();
                break;
            case 1024:
                planName.textContent = 'Big data plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 2730';
                makeDataOnly();
                makeBtn('ww-1024_vodafone');
                makeLink3();
                break;
        }
    }

    /* Europe crew */

    if(location == 'EuropeCrew') {
        switch(gbSelected) {
            case 4:
                planName.textContent = 'Starter plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 31';
                makeBtn('crew_eu-4_vodafone');
                makeLink4();
                makeLink5();
                break;
            case 16:
                planName.textContent = 'Surfer plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 39';
                makeBtn('crew_eu-16_vodafone');
                makeLink4();
                makeLink5();
                break;
            case 40:
                planName.textContent = 'Streamer plan';
                period.textContent = '/ Monthly';
                money.textContent = '£ 49';
                makeBtn('crew_eu-40_vodafone');
                makeLink4();
                makeLink5();
                break;
        }
    }
}

function makeLink() {
    let link = document.createElement('a');
    link.dataset.beaconArticle = "5d399c682c7d3a2ec4bf67fa";
    link.className = 'text-color-purple-prime text-decoration-underline periodLink';
    link.textContent = 'Excellent EU coverage';
    link.href = '#';
    let repl = document.querySelector('.periodLink');
    repl.replaceWith(link);
}

function makeLink2() {
    let link = document.createElement('a');
    link.dataset.beaconArticle = "5d399c682c7d3a2ec4bf67fa";
    link.className = 'text-color-purple-prime text-decoration-underline periodLink';
    link.textContent = 'France + Monaco';
    link.href = '#';
    let repl = document.querySelector('.periodLink');
    repl.replaceWith(link);
}

function makeLink3() {
    let link = document.createElement('a');
    link.dataset.beaconArticle = "5d399c682c7d3a2ec4bf67fa";
    link.className = 'text-color-purple-prime text-decoration-underline periodLink';
    link.textContent = 'Worldwide';
    link.href = '#';
    let repl = document.querySelector('.periodLink');
    repl.replaceWith(link);
}

function makeLink4() {
    let link = document.createElement('a');
    link.dataset.beaconArticle = "5d43e337042863478675c6db";
    link.className = 'text-color-purple-prime text-decoration-underline periodLink';
    link.textContent = 'Unlimited calls &amp; text';
    link.href = '#';
    let repl = document.querySelector('.periodLink');
    repl.replaceWith(link);
}


function makeLink5() {
    let link = document.createElement('a');
    link.dataset.beaconArticle = "5d43e337042863478675c6db";
    link.className = 'text-color-purple-prime text-decoration-underline moneyLink';
    link.textContent = 'Unlimited calls';
    link.href = '#';
    let repl = document.querySelector('.moneyLink');
    repl.replaceWith(link);
}

function makeBtn(data) {
    let link = document.createElement('a');
    link.href = "javascript:void(0)";
    link.dataset.cbType = 'checkout';
    link.dataset.cbPlanId = data;
    link.textContent = 'Sign up';
    link.className = 'sign-up-button-slider';
    let repl = document.querySelector('.sign-up-button-slider');
    repl.replaceWith(link);
    /* Chargebee.registerAgain(); */
}

function makeDataOnly() {
    let p = document.createElement('p');
    p.textContent = 'Data only';
    p.className = 'moneyLink';
    let repl = document.querySelector('.moneyLink');
    repl.replaceWith(p);
}