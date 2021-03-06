"use strict";

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function ownKeys(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        e && (o = o.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), r.push.apply(r, o)
    }
    return r
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(Object(r), !0).forEach(function(e) {
            _defineProperty(t, e, r[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        })
    }
    return t
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}! function(l) {
    var e = {
        init: function() {
            e.masonryGrid(), e.stickyNavbar(), e.stuckNavbarMenuToggle(), e.passwordVisibilityToggle(), e.customFileInput(), e.fileDropArea(), e.formValidation(), e.multilevelDropdown(), e.smoothScroll(), e.scrollTopButton(), e.offcanvasSidebar(), e.tooltips(), e.popovers(), e.toasts(), e.disableDropdownAutohide(), e.carousel(), e.gallery(), e.productGallery(), e.imageZoom(), e.videoPopupBtn(), e.ajaxifySubscribeForm(), e.rangeSlider(), e.filterList(), e.dataFilter(), e.labelUpdate(), e.radioTabs(), e.countdown(), e.charts()
        },
        masonryGrid: function() {
            var e, t = document.querySelectorAll(".cz-masonry-grid");
            if (null !== t)
                for (var r = 0; r < t.length; r++) e = new Shuffle(t[r], {
                    itemSelector: ".grid-item",
                    sizer: ".grid-item"
                }), imagesLoaded(t[r]).on("progress", function() {
                    e.layout()
                })
        },
        stickyNavbar: function() {
            var t = document.querySelector(".navbar-sticky");
            if (null != t) {
                var r = t.offsetHeight;
                window.addEventListener("scroll", function(e) {
                    400 < e.currentTarget.pageYOffset ? (t.classList.contains("navbar-transparent") || (document.body.style.paddingTop = r + "px"), t.classList.add("navbar-stuck")) : (document.body.style.paddingTop = "", t.classList.remove("navbar-stuck"))
                })
            }
        },
        stuckNavbarMenuToggle: function() {
            var e = document.querySelector(".navbar-stuck-toggler"),
                t = document.querySelector(".navbar-stuck-menu");
            null != e && e.addEventListener("click", function(e) {
                t.classList.toggle("show"), e.preventDefault()
            })
        },
        passwordVisibilityToggle: function() {
            for (var r = document.querySelectorAll(".password-toggle"), e = function(e) {
                    var t = r[e].querySelector(".form-control");
                    r[e].querySelector(".password-toggle-btn").addEventListener("click", function(e) {
                        "checkbox" === e.target.type && (e.target.checked ? t.type = "text" : t.type = "password")
                    }, !1)
                }, t = 0; t < r.length; t++) e(t)
        },
        customFileInput: function() {
            bsCustomFileInput.init()
        },
        fileDropArea: function() {
            for (var t = document.querySelectorAll(".cz-file-drop-area"), e = function(e) {
                    var n = t[e].querySelector(".cz-file-drop-input"),
                        a = t[e].querySelector(".cz-file-drop-message"),
                        l = t[e].querySelector(".cz-file-drop-icon");
                    t[e].querySelector(".cz-file-drop-btn").addEventListener("click", function() {
                        n.click()
                    }), n.addEventListener("change", function() {
                        if (n.files && n.files[0]) {
                            var e = new FileReader;
                            e.onload = function(e) {
                                var t = e.target.result,
                                    r = n.files[0].name;
                                if (a.innerHTML = r, t.startsWith("data:image")) {
                                    var o = new Image;
                                    o.src = t, o.onload = function() {
                                        l.className = "cz-file-drop-preview img-thumbnail rounded", l.innerHTML = '<img src="' + o.src + '" alt="' + r + '">', console.log(this.width)
                                    }
                                } else t.startsWith("data:video") ? (l.innerHTML = "", l.className = "", l.className = "cz-file-drop-icon czi-video") : (l.innerHTML = "", l.className = "", l.className = "cz-file-drop-icon czi-document")
                            }, e.readAsDataURL(n.files[0])
                        }
                    })
                }, r = 0; r < t.length; r++) e(r)
        },
        formValidation: function() {
            window.addEventListener("load", function() {
                var e = document.getElementsByClassName("needs-validation");
                Array.prototype.filter.call(e, function(t) {
                    t.addEventListener("submit", function(e) {
                        !1 === t.checkValidity() && (e.preventDefault(), e.stopPropagation()), t.classList.add("was-validated")
                    }, !1)
                })
            }, !1)
        },
        multilevelDropdown: function() {
            l(".dropdown-menu [data-toggle='dropdown']").on("click", function(e) {
                e.preventDefault(), e.stopPropagation(), l(this).siblings().toggleClass("show"), l(this).next().hasClass("show") || l(this).parents(".dropdown-menu").first().find(".show").removeClass("show"), l(this).parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown", function() {
                    l(".dropdown-submenu .show").removeClass("show")
                })
            })
        },
        smoothScroll: function() {
            new SmoothScroll("[data-scroll]", {
                speed: 800,
                speedAsDuration: !0,
                offset: 40,
                header: "[data-scroll-header]",
                updateURL: !1
            })
        },
        scrollTopButton: function() {
            var t = document.querySelector(".btn-scroll-top");
            if (null != t) {
                var r = parseInt(600, 10);
                window.addEventListener("scroll", function(e) {
                    e.currentTarget.pageYOffset > r ? t.classList.add("show") : t.classList.remove("show")
                })
            }
        },
        offcanvasSidebar: function() {
            for (var e = document.querySelectorAll('[data-toggle="sidebar"]'), t = document.querySelectorAll('[data-dismiss="sidebar"]'), r = document.querySelector("body"), o = 0; o < e.length; o++) e[o].addEventListener("click", function(e) {
                e.preventDefault();
                var t = e.currentTarget.getAttribute("href");
                document.querySelector(t).classList.add("show"), r.classList.add("offcanvas-open")
            });
            for (var n = 0; n < t.length; n++) t[n].addEventListener("click", function(e) {
                e.currentTarget.closest(".cz-sidebar").classList.remove("show"), r.classList.remove("offcanvas-open")
            })
        },
        tooltips: function() {
            l('[data-toggle="tooltip"]').tooltip()
        },
        popovers: function() {
            l('[data-toggle="popover"]').popover()
        },
        toasts: function() {
            l('[data-toggle="toast"]').on("click", function() {
                var e = l(this).data("target");
                l(e).toast("show")
            })
        },
        disableDropdownAutohide: function() {
            for (var e = document.querySelectorAll(".disable-autohide .custom-select"), t = 0; t < e.length; t++) e[t].addEventListener("click", function(e) {
                e.stopPropagation()
            })
        },
        carousel: function() {
            ! function(e, t, r) {
                for (var o = 0; o < e.length; o++) t.call(r, o, e[o])
            }(document.querySelectorAll(".cz-carousel .cz-carousel-inner"), function(e, t) {
                var r, o = {
                    container: t,
                    controlsText: ['<i class="czi-arrow-left"></i>', '<i class="czi-arrow-right"></i>'],
                    navPosition: "bottom",
                    mouseDrag: !0,
                    speed: 500,
                    autoplayHoverPause: !0,
                    autoplayButtonOutput: !1
                };
                null != t.dataset.carouselOptions && (r = JSON.parse(t.dataset.carouselOptions));
                var n = _objectSpread({}, o, {}, r);
                tns(n)
            })
        },
        gallery: function() {
            var e = document.querySelectorAll(".cz-gallery");
            if (e.length)
                for (var t = 0; t < e.length; t++) lightGallery(e[t], {
                    selector: ".gallery-item",
                    download: !1,
                    videojs: !0,
                    youtubePlayerParams: {
                        modestbranding: 1,
                        showinfo: 0,
                        rel: 0,
                        controls: 0
                    },
                    vimeoPlayerParams: {
                        byline: 0,
                        portrait: 0,
                        color: "fe696a"
                    }
                })
        },
        productGallery: function() {
            var c = document.querySelectorAll(".cz-product-gallery");
            if (c.length)
                for (var e = function(r) {
                        for (var o = c[r].querySelectorAll(".cz-thumblist-item:not(.video-item)"), n = c[r].querySelectorAll(".cz-preview-item"), e = c[r].querySelectorAll(".cz-thumblist-item.video-item"), t = 0; t < o.length; t++) o[t].addEventListener("click", a);

                        function a(e) {
                            e.preventDefault();
                            for (var t = 0; t < o.length; t++) n[t].classList.remove("active"), o[t].classList.remove("active");
                            this.classList.add("active"), c[r].querySelector(this.getAttribute("href")).classList.add("active")
                        }
                        for (var l = 0; l < e.length; l++) lightGallery(e[l], {
                            selector: "this",
                            download: !1,
                            videojs: !0,
                            youtubePlayerParams: {
                                modestbranding: 1,
                                showinfo: 0,
                                rel: 0,
                                controls: 0
                            },
                            vimeoPlayerParams: {
                                byline: 0,
                                portrait: 0,
                                color: "fe696a"
                            }
                        })
                    }, t = 0; t < c.length; t++) e(t)
        },
        imageZoom: function() {
            for (var e = document.querySelectorAll(".cz-image-zoom"), t = 0; t < e.length; t++) new Drift(e[t], {
                paneContainer: e[t].parentElement.querySelector(".cz-image-zoom-pane")
            })
        },
        videoPopupBtn: function() {
            var e = document.querySelectorAll(".video-popup-btn");
            if (e.length)
                for (var t = 0; t < e.length; t++) lightGallery(e[t], {
                    selector: "this",
                    download: !1,
                    videojs: !0,
                    youtubePlayerParams: {
                        modestbranding: 1,
                        showinfo: 0,
                        rel: 0,
                        controls: 0
                    },
                    vimeoPlayerParams: {
                        byline: 0,
                        portrait: 0,
                        color: "fe696a"
                    }
                })
        },
        ajaxifySubscribeForm: function() {
            var t = l("#mc-embedded-subscribe-form"),
                r = l("#mce-EMAIL"),
                o = l("#mc-embedded-subscribe"),
                n = l(".subscribe-status"),
                a = o.text();
            o.text();
            t.length && o.bind("click", function(e) {
                e && e.preventDefault(),
                    function(e) {
                        o.text("Sending..."), l.ajax({
                            type: e.attr("method"),
                            url: e.attr("action"),
                            data: e.serialize(),
                            cache: !1,
                            dataType: "jsonp",
                            contentType: "application/json; charset=utf-8",
                            error: function(e) {
                                alert("Could not connect to the registration server. Please try again later.")
                            },
                            success: function(e) {
                                "success" === e.result ? (n.removeClass("status-error").addClass("status-success").text("Thank you for subscribing. We have sent you a confirmation email."), o.text(a, setTimeout(function() {
                                    n.removeClass("status-success").text("")
                                }, 5e3)), r.val("")) : (n.removeClass("status-success").addClass("status-error").text(e.msg.substring(4)), o.text(a, setTimeout(function() {
                                    n.removeClass("status-error").text("")
                                }, 5e3)))
                            }
                        })
                    }(t)
            })
        },
        rangeSlider: function() {
            for (var a = document.querySelectorAll(".cz-range-slider"), e = function(e) {
                    var t = a[e].querySelector(".cz-range-slider-ui"),
                        o = a[e].querySelector(".cz-range-slider-value-min"),
                        n = a[e].querySelector(".cz-range-slider-value-max"),
                        r = {
                            dataStartMin: parseInt(a[e].dataset.startMin, 10),
                            dataStartMax: parseInt(a[e].dataset.startMax, 10),
                            dataMin: parseInt(a[e].dataset.min, 10),
                            dataMax: parseInt(a[e].dataset.max, 10),
                            dataStep: parseInt(a[e].dataset.step, 10)
                        };
                    noUiSlider.create(t, {
                        start: [r.dataStartMin, r.dataStartMax],
                        connect: !0,
                        step: r.dataStep,
                        pips: {
                            mode: "count",
                            values: 5
                        },
                        tooltips: !0,
                        range: {
                            min: r.dataMin,
                            max: r.dataMax
                        },
                        format: {
                            to: function(e) {
                                return "$" + parseInt(e, 10)
                            },
                            from: function(e) {
                                return Number(e)
                            }
                        }
                    }), t.noUiSlider.on("update", function(e, t) {
                        var r = e[t];
                        r = r.replace(/\D/g, ""), t ? n.value = Math.round(r) : o.value = Math.round(r)
                    }), o.addEventListener("change", function() {
                        t.noUiSlider.set([this.value, null])
                    }), n.addEventListener("change", function() {
                        t.noUiSlider.set([null, this.value])
                    })
                }, t = 0; t < a.length; t++) e(t)
        },
        filterList: function() {
            for (var t = document.querySelectorAll(".cz-filter"), e = function(e) {
                    var r = t[e].querySelector(".cz-filter-search"),
                        o = t[e].querySelector(".cz-filter-list").querySelectorAll(".cz-filter-item");
                    r.addEventListener("keyup", function() {
                        for (var e = r.value.toLowerCase(), t = 0; t < o.length; t++) {
                            -1 < o[t].querySelector(".cz-filter-item-text").innerHTML.toLowerCase().indexOf(e) ? o[t].classList.remove("d-none") : o[t].classList.add("d-none")
                        }
                    })
                }, r = 0; r < t.length; r++) e(r)
        },
        dataFilter: function() {
            var e = document.querySelector('[data-filter="trigger"]'),
                o = document.querySelectorAll('[data-filter="target"]');
            null !== e && e.addEventListener("change", function() {
                var e = this.options[this.selectedIndex].value.toLowerCase();
                if ("all" === e)
                    for (var t = 0; t < o.length; t++) o[t].classList.remove("d-none");
                else {
                    for (var r = 0; r < o.length; r++) o[r].classList.add("d-none");
                    document.querySelector("#" + e).classList.remove("d-none")
                }
            })
        },
        labelUpdate: function() {
            for (var e = document.querySelectorAll("[data-label]"), t = 0; t < e.length; t++) e[t].addEventListener("change", function() {
                var e = this.dataset.label;
                try {
                    document.getElementById(e).textContent = this.value
                } catch (e) {
                    (e.message = "Cannot set property 'textContent' of null") && console.error("Make sure the [data-label] matches with the id of the target element you want to change text of!")
                }
            })
        },
        radioTabs: function() {
            for (var e = document.querySelectorAll('[data-toggle="radioTab"]'), t = 0; t < e.length; t++) e[t].addEventListener("click", function() {
                var e = this.dataset.target;
                document.querySelector(this.dataset.parent).querySelectorAll(".radio-tab-pane").forEach(function(e) {
                    e.classList.remove("active")
                }), document.querySelector(e).classList.add("active")
            })
        },
        countdown: function() {
            var t = document.querySelectorAll(".cz-countdown");
            if (null != t)
                for (var e = function(e) {
                        var r = t[e].dataset.countdown,
                            o = t[e].querySelector(".cz-countdown-days .cz-countdown-value"),
                            n = t[e].querySelector(".cz-countdown-hours .cz-countdown-value"),
                            a = t[e].querySelector(".cz-countdown-minutes .cz-countdown-value"),
                            l = t[e].querySelector(".cz-countdown-seconds .cz-countdown-value"),
                            c = void 0,
                            i = void 0,
                            s = void 0,
                            u = void 0;
                        if (r = new Date(r).getTime(), isNaN(r)) return {
                            v: void 0
                        };
                        setInterval(function() {
                            var e = (new Date).getTime(),
                                t = parseInt((r - e) / 1e3); {
                                if (!(0 <= t)) return;
                                c = parseInt(t / 86400), t %= 86400, i = parseInt(t / 3600), t %= 3600, s = parseInt(t / 60), t %= 60, u = parseInt(t), null != o && (o.innerHTML = parseInt(c, 10)), null != n && (n.innerHTML = i < 10 ? "0" + i : i), null != a && (a.innerHTML = s < 10 ? "0" + s : s), null != l && (l.innerHTML = u < 10 ? "0" + u : u)
                            }
                        }, 1e3)
                    }, r = 0; r < t.length; r++) {
                    var o = e(r);
                    if ("object" === _typeof(o)) return o.v
                }
        },
        charts: function() {
            function a(e, t) {
                return e + t
            }
            var e = document.querySelectorAll("[data-line-chart]"),
                t = document.querySelectorAll("[data-bar-chart]"),
                l = document.querySelectorAll("[data-pie-chart]");
            if (0 !== e.length || 0 !== t.length || 0 !== l.length) {
                var c, r = document.head || document.getElementsByTagName("head")[0],
                    i = document.createElement("style");
                r.appendChild(i);
                for (var o = 0; o < e.length; o++) {
                    var n = JSON.parse(e[o].dataset.lineChart),
                        s = null != e[o].dataset.options ? JSON.parse(e[o].dataset.options) : "",
                        u = e[o].dataset.seriesColor,
                        d = void 0;
                    if (e[o].classList.add("cz-line-chart-" + o), null != u) {
                        d = JSON.parse(u);
                        for (var f = 0; f < d.colors.length; f++) c = "\n              .cz-line-chart-".concat(o, " .ct-series:nth-child(").concat(f + 1, ") .ct-line,\n              .cz-line-chart-").concat(o, " .ct-series:nth-child(").concat(f + 1, ") .ct-point {\n                stroke: ").concat(d.colors[f], " !important;\n              }\n            "), i.appendChild(document.createTextNode(c))
                    }
                    new Chartist.Line(e[o], n, s)
                }
                for (var p = 0; p < t.length; p++) {
                    var v = JSON.parse(t[p].dataset.barChart),
                        m = null != t[p].dataset.options ? JSON.parse(t[p].dataset.options) : "",
                        h = t[p].dataset.seriesColor,
                        g = void 0;
                    if (t[p].classList.add("cz-bar-chart-" + p), null != h) {
                        g = JSON.parse(h);
                        for (var y = 0; y < g.colors.length; y++) c = "\n            .cz-bar-chart-".concat(p, " .ct-series:nth-child(").concat(y + 1, ") .ct-bar {\n                stroke: ").concat(g.colors[y], " !important;\n              }\n            "), i.appendChild(document.createTextNode(c))
                    }
                    new Chartist.Bar(t[p], v, m)
                }
                for (var b = function(e) {
                        var t = JSON.parse(l[e].dataset.pieChart),
                            r = l[e].dataset.seriesColor,
                            o = void 0;
                        if (l[e].classList.add("cz-pie-chart-" + e), null != r) {
                            o = JSON.parse(r);
                            for (var n = 0; n < o.colors.length; n++) c = "\n            .cz-pie-chart-".concat(e, " .ct-series:nth-child(").concat(n + 1, ") .ct-slice-pie {\n                fill: ").concat(o.colors[n], " !important;\n              }\n            "), i.appendChild(document.createTextNode(c))
                        }
                        new Chartist.Pie(l[e], t, {
                            labelInterpolationFnc: function(e) {
                                return Math.round(e / t.series.reduce(a) * 100) + "%"
                            }
                        })
                    }, S = 0; S < l.length; S++) b(S)
            }
        }
    };
    e.init()
}(jQuery);