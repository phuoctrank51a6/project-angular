/* Chartist.js 0.11.4
 * Copyright © 2019 Gion Kunz
 * Free to use under either the WTFPL license or the MIT license.
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-WTFPL
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-MIT
 */

! function(a, b) {
    "function" == typeof define && define.amd ? define("Chartist", [], function() {
        return a.Chartist = b()
    }) : "object" == typeof module && module.exports ? module.exports = b() : a.Chartist = b()
}(this, function() {
    var a = {
        version: "0.11.4"
    };
    return function(a, b) {
            "use strict";
            var c = a.window,
                d = a.document;
            b.namespaces = {
                svg: "http://www.w3.org/2000/svg",
                xmlns: "http://www.w3.org/2000/xmlns/",
                xhtml: "http://www.w3.org/1999/xhtml",
                xlink: "http://www.w3.org/1999/xlink",
                ct: "http://gionkunz.github.com/chartist-js/ct"
            }, b.noop = function(a) {
                return a
            }, b.alphaNumerate = function(a) {
                return String.fromCharCode(97 + a % 26)
            }, b.extend = function(a) {
                var c, d, e;
                for (a = a || {}, c = 1; c < arguments.length; c++) {
                    d = arguments[c];
                    for (var f in d) e = d[f], "object" != typeof e || null === e || e instanceof Array ? a[f] = e : a[f] = b.extend(a[f], e)
                }
                return a
            }, b.replaceAll = function(a, b, c) {
                return a.replace(new RegExp(b, "g"), c)
            }, b.ensureUnit = function(a, b) {
                return "number" == typeof a && (a += b), a
            }, b.quantity = function(a) {
                if ("string" == typeof a) {
                    var b = /^(\d+)\s*(.*)$/g.exec(a);
                    return {
                        value: +b[1],
                        unit: b[2] || void 0
                    }
                }
                return {
                    value: a
                }
            }, b.querySelector = function(a) {
                return a instanceof Node ? a : d.querySelector(a)
            }, b.times = function(a) {
                return Array.apply(null, new Array(a))
            }, b.sum = function(a, b) {
                return a + (b ? b : 0)
            }, b.mapMultiply = function(a) {
                return function(b) {
                    return b * a
                }
            }, b.mapAdd = function(a) {
                return function(b) {
                    return b + a
                }
            }, b.serialMap = function(a, c) {
                var d = [],
                    e = Math.max.apply(null, a.map(function(a) {
                        return a.length
                    }));
                return b.times(e).forEach(function(b, e) {
                    var f = a.map(function(a) {
                        return a[e]
                    });
                    d[e] = c.apply(null, f)
                }), d
            }, b.roundWithPrecision = function(a, c) {
                var d = Math.pow(10, c || b.precision);
                return Math.round(a * d) / d
            }, b.precision = 8, b.escapingMap = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"
            }, b.serialize = function(a) {
                return null === a || void 0 === a ? a : ("number" == typeof a ? a = "" + a : "object" == typeof a && (a = JSON.stringify({
                    data: a
                })), Object.keys(b.escapingMap).reduce(function(a, c) {
                    return b.replaceAll(a, c, b.escapingMap[c])
                }, a))
            }, b.deserialize = function(a) {
                if ("string" != typeof a) return a;
                a = Object.keys(b.escapingMap).reduce(function(a, c) {
                    return b.replaceAll(a, b.escapingMap[c], c)
                }, a);
                try {
                    a = JSON.parse(a), a = void 0 !== a.data ? a.data : a
                } catch (c) {}
                return a
            }, b.createSvg = function(a, c, d, e) {
                var f;
                return c = c || "100%", d = d || "100%", Array.prototype.slice.call(a.querySelectorAll("svg")).filter(function(a) {
                    return a.getAttributeNS(b.namespaces.xmlns, "ct")
                }).forEach(function(b) {
                    a.removeChild(b)
                }), f = new b.Svg("svg").attr({
                    width: c,
                    height: d
                }).addClass(e), f._node.style.width = c, f._node.style.height = d, a.appendChild(f._node), f
            }, b.normalizeData = function(a, c, d) {
                var e, f = {
                    raw: a,
                    normalized: {}
                };
                return f.normalized.series = b.getDataArray({
                    series: a.series || []
                }, c, d), e = f.normalized.series.every(function(a) {
                    return a instanceof Array
                }) ? Math.max.apply(null, f.normalized.series.map(function(a) {
                    return a.length
                })) : f.normalized.series.length, f.normalized.labels = (a.labels || []).slice(), Array.prototype.push.apply(f.normalized.labels, b.times(Math.max(0, e - f.normalized.labels.length)).map(function() {
                    return ""
                })), c && b.reverseData(f.normalized), f
            }, b.safeHasProperty = function(a, b) {
                return null !== a && "object" == typeof a && a.hasOwnProperty(b)
            }, b.isDataHoleValue = function(a) {
                return null === a || void 0 === a || "number" == typeof a && isNaN(a)
            }, b.reverseData = function(a) {
                a.labels.reverse(), a.series.reverse();
                for (var b = 0; b < a.series.length; b++) "object" == typeof a.series[b] && void 0 !== a.series[b].data ? a.series[b].data.reverse() : a.series[b] instanceof Array && a.series[b].reverse()
            }, b.getDataArray = function(a, c, d) {
                function e(a) {
                    if (b.safeHasProperty(a, "value")) return e(a.value);
                    if (b.safeHasProperty(a, "data")) return e(a.data);
                    if (a instanceof Array) return a.map(e);
                    if (!b.isDataHoleValue(a)) {
                        if (d) {
                            var c = {};
                            return "string" == typeof d ? c[d] = b.getNumberOrUndefined(a) : c.y = b.getNumberOrUndefined(a), c.x = a.hasOwnProperty("x") ? b.getNumberOrUndefined(a.x) : c.x, c.y = a.hasOwnProperty("y") ? b.getNumberOrUndefined(a.y) : c.y, c
                        }
                        return b.getNumberOrUndefined(a)
                    }
                }
                return a.series.map(e)
            }, b.normalizePadding = function(a, b) {
                return b = b || 0, "number" == typeof a ? {
                    top: a,
                    right: a,
                    bottom: a,
                    left: a
                } : {
                    top: "number" == typeof a.top ? a.top : b,
                    right: "number" == typeof a.right ? a.right : b,
                    bottom: "number" == typeof a.bottom ? a.bottom : b,
                    left: "number" == typeof a.left ? a.left : b
                }
            }, b.getMetaData = function(a, b) {
                var c = a.data ? a.data[b] : a[b];
                return c ? c.meta : void 0
            }, b.orderOfMagnitude = function(a) {
                return Math.floor(Math.log(Math.abs(a)) / Math.LN10)
            }, b.projectLength = function(a, b, c) {
                return b / c.range * a
            }, b.getAvailableHeight = function(a, c) {
                return Math.max((b.quantity(c.height).value || a.height()) - (c.chartPadding.top + c.chartPadding.bottom) - c.axisX.offset, 0)
            }, b.getHighLow = function(a, c, d) {
                function e(a) {
                    if (void 0 !== a)
                        if (a instanceof Array)
                            for (var b = 0; b < a.length; b++) e(a[b]);
                        else {
                            var c = d ? +a[d] : +a;
                            g && c > f.high && (f.high = c), h && c < f.low && (f.low = c)
                        }
                }
                c = b.extend({}, c, d ? c["axis" + d.toUpperCase()] : {});
                var f = {
                        high: void 0 === c.high ? -Number.MAX_VALUE : +c.high,
                        low: void 0 === c.low ? Number.MAX_VALUE : +c.low
                    },
                    g = void 0 === c.high,
                    h = void 0 === c.low;
                return (g || h) && e(a), (c.referenceValue || 0 === c.referenceValue) && (f.high = Math.max(c.referenceValue, f.high), f.low = Math.min(c.referenceValue, f.low)), f.high <= f.low && (0 === f.low ? f.high = 1 : f.low < 0 ? f.high = 0 : f.high > 0 ? f.low = 0 : (f.high = 1, f.low = 0)), f
            }, b.isNumeric = function(a) {
                return null !== a && isFinite(a)
            }, b.isFalseyButZero = function(a) {
                return !a && 0 !== a
            }, b.getNumberOrUndefined = function(a) {
                return b.isNumeric(a) ? +a : void 0
            }, b.isMultiValue = function(a) {
                return "object" == typeof a && ("x" in a || "y" in a)
            }, b.getMultiValue = function(a, c) {
                return b.isMultiValue(a) ? b.getNumberOrUndefined(a[c || "y"]) : b.getNumberOrUndefined(a)
            }, b.rho = function(a) {
                function b(a, c) {
                    return a % c === 0 ? c : b(c, a % c)
                }

                function c(a) {
                    return a * a + 1
                }
                if (1 === a) return a;
                var d, e = 2,
                    f = 2;
                if (a % 2 === 0) return 2;
                do e = c(e) % a, f = c(c(f)) % a, d = b(Math.abs(e - f), a); while (1 === d);
                return d
            }, b.getBounds = function(a, c, d, e) {
                function f(a, b) {
                    return a === (a += b) && (a *= 1 + (b > 0 ? o : -o)), a
                }
                var g, h, i, j = 0,
                    k = {
                        high: c.high,
                        low: c.low
                    };
                k.valueRange = k.high - k.low, k.oom = b.orderOfMagnitude(k.valueRange), k.step = Math.pow(10, k.oom), k.min = Math.floor(k.low / k.step) * k.step, k.max = Math.ceil(k.high / k.step) * k.step, k.range = k.max - k.min, k.numberOfSteps = Math.round(k.range / k.step);
                var l = b.projectLength(a, k.step, k),
                    m = l < d,
                    n = e ? b.rho(k.range) : 0;
                if (e && b.projectLength(a, 1, k) >= d) k.step = 1;
                else if (e && n < k.step && b.projectLength(a, n, k) >= d) k.step = n;
                else
                    for (;;) {
                        if (m && b.projectLength(a, k.step, k) <= d) k.step *= 2;
                        else {
                            if (m || !(b.projectLength(a, k.step / 2, k) >= d)) break;
                            if (k.step /= 2, e && k.step % 1 !== 0) {
                                k.step *= 2;
                                break
                            }
                        }
                        if (j++ > 1e3) throw new Error("Exceeded maximum number of iterations while optimizing scale step!")
                    }
                var o = 2.221e-16;
                for (k.step = Math.max(k.step, o), h = k.min, i = k.max; h + k.step <= k.low;) h = f(h, k.step);
                for (; i - k.step >= k.high;) i = f(i, -k.step);
                k.min = h, k.max = i, k.range = k.max - k.min;
                var p = [];
                for (g = k.min; g <= k.max; g = f(g, k.step)) {
                    var q = b.roundWithPrecision(g);
                    q !== p[p.length - 1] && p.push(q)
                }
                return k.values = p, k
            }, b.polarToCartesian = function(a, b, c, d) {
                var e = (d - 90) * Math.PI / 180;
                return {
                    x: a + c * Math.cos(e),
                    y: b + c * Math.sin(e)
                }
            }, b.createChartRect = function(a, c, d) {
                var e = !(!c.axisX && !c.axisY),
                    f = e ? c.axisY.offset : 0,
                    g = e ? c.axisX.offset : 0,
                    h = a.width() || b.quantity(c.width).value || 0,
                    i = a.height() || b.quantity(c.height).value || 0,
                    j = b.normalizePadding(c.chartPadding, d);
                h = Math.max(h, f + j.left + j.right), i = Math.max(i, g + j.top + j.bottom);
                var k = {
                    padding: j,
                    width: function() {
                        return this.x2 - this.x1
                    },
                    height: function() {
                        return this.y1 - this.y2
                    }
                };
                return e ? ("start" === c.axisX.position ? (k.y2 = j.top + g, k.y1 = Math.max(i - j.bottom, k.y2 + 1)) : (k.y2 = j.top, k.y1 = Math.max(i - j.bottom - g, k.y2 + 1)), "start" === c.axisY.position ? (k.x1 = j.left + f, k.x2 = Math.max(h - j.right, k.x1 + 1)) : (k.x1 = j.left, k.x2 = Math.max(h - j.right - f, k.x1 + 1))) : (k.x1 = j.left, k.x2 = Math.max(h - j.right, k.x1 + 1), k.y2 = j.top, k.y1 = Math.max(i - j.bottom, k.y2 + 1)), k
            }, b.createGrid = function(a, c, d, e, f, g, h, i) {
                var j = {};
                j[d.units.pos + "1"] = a, j[d.units.pos + "2"] = a, j[d.counterUnits.pos + "1"] = e, j[d.counterUnits.pos + "2"] = e + f;
                var k = g.elem("line", j, h.join(" "));
                i.emit("draw", b.extend({
                    type: "grid",
                    axis: d,
                    index: c,
                    group: g,
                    element: k
                }, j))
            }, b.createGridBackground = function(a, b, c, d) {
                var e = a.elem("rect", {
                    x: b.x1,
                    y: b.y2,
                    width: b.width(),
                    height: b.height()
                }, c, !0);
                d.emit("draw", {
                    type: "gridBackground",
                    group: a,
                    element: e
                })
            }, b.createLabel = function(a, c, e, f, g, h, i, j, k, l, m) {
                var n, o = {};
                if (o[g.units.pos] = a + i[g.units.pos], o[g.counterUnits.pos] = i[g.counterUnits.pos], o[g.units.len] = c, o[g.counterUnits.len] = Math.max(0, h - 10), l) {
                    var p = d.createElement("span");
                    p.className = k.join(" "), p.setAttribute("xmlns", b.namespaces.xhtml), p.innerText = f[e], p.style[g.units.len] = Math.round(o[g.units.len]) + "px", p.style[g.counterUnits.len] = Math.round(o[g.counterUnits.len]) + "px", n = j.foreignObject(p, b.extend({
                        style: "overflow: visible;"
                    }, o))
                } else n = j.elem("text", o, k.join(" ")).text(f[e]);
                m.emit("draw", b.extend({
                    type: "label",
                    axis: g,
                    index: e,
                    group: j,
                    element: n,
                    text: f[e]
                }, o))
            }, b.getSeriesOption = function(a, b, c) {
                if (a.name && b.series && b.series[a.name]) {
                    var d = b.series[a.name];
                    return d.hasOwnProperty(c) ? d[c] : b[c]
                }
                return b[c]
            }, b.optionsProvider = function(a, d, e) {
                function f(a) {
                    var f = h;
                    if (h = b.extend({}, j), d)
                        for (i = 0; i < d.length; i++) {
                            var g = c.matchMedia(d[i][0]);
                            g.matches && (h = b.extend(h, d[i][1]))
                        }
                    e && a && e.emit("optionsChanged", {
                        previousOptions: f,
                        currentOptions: h
                    })
                }

                function g() {
                    k.forEach(function(a) {
                        a.removeListener(f)
                    })
                }
                var h, i, j = b.extend({}, a),
                    k = [];
                if (!c.matchMedia) throw "window.matchMedia not found! Make sure you're using a polyfill.";
                if (d)
                    for (i = 0; i < d.length; i++) {
                        var l = c.matchMedia(d[i][0]);
                        l.addListener(f), k.push(l)
                    }
                return f(), {
                    removeMediaQueryListeners: g,
                    getCurrentOptions: function() {
                        return b.extend({}, h)
                    }
                }
            }, b.splitIntoSegments = function(a, c, d) {
                var e = {
                    increasingX: !1,
                    fillHoles: !1
                };
                d = b.extend({}, e, d);
                for (var f = [], g = !0, h = 0; h < a.length; h += 2) void 0 === b.getMultiValue(c[h / 2].value) ? d.fillHoles || (g = !0) : (d.increasingX && h >= 2 && a[h] <= a[h - 2] && (g = !0), g && (f.push({
                    pathCoordinates: [],
                    valueData: []
                }), g = !1), f[f.length - 1].pathCoordinates.push(a[h], a[h + 1]), f[f.length - 1].valueData.push(c[h / 2]));
                return f
            }
        }(this || global, a),
        function(a, b) {
            "use strict";
            b.Interpolation = {}, b.Interpolation.none = function(a) {
                var c = {
                    fillHoles: !1
                };
                return a = b.extend({}, c, a),
                    function(c, d) {
                        for (var e = new b.Svg.Path, f = !0, g = 0; g < c.length; g += 2) {
                            var h = c[g],
                                i = c[g + 1],
                                j = d[g / 2];
                            void 0 !== b.getMultiValue(j.value) ? (f ? e.move(h, i, !1, j) : e.line(h, i, !1, j), f = !1) : a.fillHoles || (f = !0)
                        }
                        return e
                    }
            }, b.Interpolation.simple = function(a) {
                var c = {
                    divisor: 2,
                    fillHoles: !1
                };
                a = b.extend({}, c, a);
                var d = 1 / Math.max(1, a.divisor);
                return function(c, e) {
                    for (var f, g, h, i = new b.Svg.Path, j = 0; j < c.length; j += 2) {
                        var k = c[j],
                            l = c[j + 1],
                            m = (k - f) * d,
                            n = e[j / 2];
                        void 0 !== n.value ? (void 0 === h ? i.move(k, l, !1, n) : i.curve(f + m, g, k - m, l, k, l, !1, n), f = k, g = l, h = n) : a.fillHoles || (f = k = h = void 0)
                    }
                    return i
                }
            }, b.Interpolation.cardinal = function(a) {
                var c = {
                    tension: 1,
                    fillHoles: !1
                };
                a = b.extend({}, c, a);
                var d = Math.min(1, Math.max(0, a.tension)),
                    e = 1 - d;
                return function f(c, g) {
                    var h = b.splitIntoSegments(c, g, {
                        fillHoles: a.fillHoles
                    });
                    if (h.length) {
                        if (h.length > 1) {
                            var i = [];
                            return h.forEach(function(a) {
                                i.push(f(a.pathCoordinates, a.valueData))
                            }), b.Svg.Path.join(i)
                        }
                        if (c = h[0].pathCoordinates, g = h[0].valueData, c.length <= 4) return b.Interpolation.none()(c, g);
                        for (var j, k = (new b.Svg.Path).move(c[0], c[1], !1, g[0]), l = 0, m = c.length; m - 2 * !j > l; l += 2) {
                            var n = [{
                                x: +c[l - 2],
                                y: +c[l - 1]
                            }, {
                                x: +c[l],
                                y: +c[l + 1]
                            }, {
                                x: +c[l + 2],
                                y: +c[l + 3]
                            }, {
                                x: +c[l + 4],
                                y: +c[l + 5]
                            }];
                            j ? l ? m - 4 === l ? n[3] = {
                                x: +c[0],
                                y: +c[1]
                            } : m - 2 === l && (n[2] = {
                                x: +c[0],
                                y: +c[1]
                            }, n[3] = {
                                x: +c[2],
                                y: +c[3]
                            }) : n[0] = {
                                x: +c[m - 2],
                                y: +c[m - 1]
                            } : m - 4 === l ? n[3] = n[2] : l || (n[0] = {
                                x: +c[l],
                                y: +c[l + 1]
                            }), k.curve(d * (-n[0].x + 6 * n[1].x + n[2].x) / 6 + e * n[2].x, d * (-n[0].y + 6 * n[1].y + n[2].y) / 6 + e * n[2].y, d * (n[1].x + 6 * n[2].x - n[3].x) / 6 + e * n[2].x, d * (n[1].y + 6 * n[2].y - n[3].y) / 6 + e * n[2].y, n[2].x, n[2].y, !1, g[(l + 2) / 2])
                        }
                        return k
                    }
                    return b.Interpolation.none()([])
                }
            }, b.Interpolation.monotoneCubic = function(a) {
                var c = {
                    fillHoles: !1
                };
                return a = b.extend({}, c, a),
                    function d(c, e) {
                        var f = b.splitIntoSegments(c, e, {
                            fillHoles: a.fillHoles,
                            increasingX: !0
                        });
                        if (f.length) {
                            if (f.length > 1) {
                                var g = [];
                                return f.forEach(function(a) {
                                    g.push(d(a.pathCoordinates, a.valueData))
                                }), b.Svg.Path.join(g)
                            }
                            if (c = f[0].pathCoordinates, e = f[0].valueData, c.length <= 4) return b.Interpolation.none()(c, e);
                            var h, i, j = [],
                                k = [],
                                l = c.length / 2,
                                m = [],
                                n = [],
                                o = [],
                                p = [];
                            for (h = 0; h < l; h++) j[h] = c[2 * h], k[h] = c[2 * h + 1];
                            for (h = 0; h < l - 1; h++) o[h] = k[h + 1] - k[h], p[h] = j[h + 1] - j[h], n[h] = o[h] / p[h];
                            for (m[0] = n[0], m[l - 1] = n[l - 2], h = 1; h < l - 1; h++) 0 === n[h] || 0 === n[h - 1] || n[h - 1] > 0 != n[h] > 0 ? m[h] = 0 : (m[h] = 3 * (p[h - 1] + p[h]) / ((2 * p[h] + p[h - 1]) / n[h - 1] + (p[h] + 2 * p[h - 1]) / n[h]), isFinite(m[h]) || (m[h] = 0));
                            for (i = (new b.Svg.Path).move(j[0], k[0], !1, e[0]), h = 0; h < l - 1; h++) i.curve(j[h] + p[h] / 3, k[h] + m[h] * p[h] / 3, j[h + 1] - p[h] / 3, k[h + 1] - m[h + 1] * p[h] / 3, j[h + 1], k[h + 1], !1, e[h + 1]);
                            return i
                        }
                        return b.Interpolation.none()([])
                    }
            }, b.Interpolation.step = function(a) {
                var c = {
                    postpone: !0,
                    fillHoles: !1
                };
                return a = b.extend({}, c, a),
                    function(c, d) {
                        for (var e, f, g, h = new b.Svg.Path, i = 0; i < c.length; i += 2) {
                            var j = c[i],
                                k = c[i + 1],
                                l = d[i / 2];
                            void 0 !== l.value ? (void 0 === g ? h.move(j, k, !1, l) : (a.postpone ? h.line(j, f, !1, g) : h.line(e, k, !1, l), h.line(j, k, !1, l)), e = j, f = k, g = l) : a.fillHoles || (e = f = g = void 0)
                        }
                        return h
                    }
            }
        }(this || global, a),
        function(a, b) {
            "use strict";
            b.EventEmitter = function() {
                function a(a, b) {
                    d[a] = d[a] || [], d[a].push(b)
                }

                function b(a, b) {
                    d[a] && (b ? (d[a].splice(d[a].indexOf(b), 1), 0 === d[a].length && delete d[a]) : delete d[a])
                }

                function c(a, b) {
                    d[a] && d[a].forEach(function(a) {
                        a(b)
                    }), d["*"] && d["*"].forEach(function(c) {
                        c(a, b)
                    })
                }
                var d = [];
                return {
                    addEventHandler: a,
                    removeEventHandler: b,
                    emit: c
                }
            }
        }(this || global, a),
        function(a, b) {
            "use strict";

            function c(a) {
                var b = [];
                if (a.length)
                    for (var c = 0; c < a.length; c++) b.push(a[c]);
                return b
            }

            function d(a, c) {
                var d = c || this.prototype || b.Class,
                    e = Object.create(d);
                b.Class.cloneDefinitions(e, a);
                var f = function() {
                    var a, c = e.constructor || function() {};
                    return a = this === b ? Object.create(e) : this, c.apply(a, Array.prototype.slice.call(arguments, 0)), a
                };
                return f.prototype = e, f["super"] = d, f.extend = this.extend, f
            }

            function e() {
                var a = c(arguments),
                    b = a[0];
                return a.splice(1, a.length - 1).forEach(function(a) {
                    Object.getOwnPropertyNames(a).forEach(function(c) {
                        delete b[c], Object.defineProperty(b, c, Object.getOwnPropertyDescriptor(a, c))
                    })
                }), b
            }
            b.Class = {
                extend: d,
                cloneDefinitions: e
            }
        }(this || global, a),
        function(a, b) {
            "use strict";

            function c(a, c, d) {
                return a && (this.data = a || {}, this.data.labels = this.data.labels || [], this.data.series = this.data.series || [], this.eventEmitter.emit("data", {
                    type: "update",
                    data: this.data
                })), c && (this.options = b.extend({}, d ? this.options : this.defaultOptions, c), this.initializeTimeoutId || (this.optionsProvider.removeMediaQueryListeners(), this.optionsProvider = b.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter))), this.initializeTimeoutId || this.createChart(this.optionsProvider.getCurrentOptions()), this
            }

            function d() {
                return this.initializeTimeoutId ? i.clearTimeout(this.initializeTimeoutId) : (i.removeEventListener("resize", this.resizeListener), this.optionsProvider.removeMediaQueryListeners()), this
            }

            function e(a, b) {
                return this.eventEmitter.addEventHandler(a, b), this
            }

            function f(a, b) {
                return this.eventEmitter.removeEventHandler(a, b), this
            }

            function g() {
                i.addEventListener("resize", this.resizeListener), this.optionsProvider = b.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter), this.eventEmitter.addEventHandler("optionsChanged", function() {
                    this.update()
                }.bind(this)), this.options.plugins && this.options.plugins.forEach(function(a) {
                    a instanceof Array ? a[0](this, a[1]) : a(this)
                }.bind(this)), this.eventEmitter.emit("data", {
                    type: "initial",
                    data: this.data
                }), this.createChart(this.optionsProvider.getCurrentOptions()), this.initializeTimeoutId = void 0
            }

            function h(a, c, d, e, f) {
                this.container = b.querySelector(a), this.data = c || {}, this.data.labels = this.data.labels || [], this.data.series = this.data.series || [], this.defaultOptions = d, this.options = e, this.responsiveOptions = f, this.eventEmitter = b.EventEmitter(), this.supportsForeignObject = b.Svg.isSupported("Extensibility"), this.supportsAnimations = b.Svg.isSupported("AnimationEventsAttribute"), this.resizeListener = function() {
                    this.update()
                }.bind(this), this.container && (this.container.__chartist__ && this.container.__chartist__.detach(), this.container.__chartist__ = this), this.initializeTimeoutId = setTimeout(g.bind(this), 0)
            }
            var i = a.window;
            b.Base = b.Class.extend({
                constructor: h,
                optionsProvider: void 0,
                container: void 0,
                svg: void 0,
                eventEmitter: void 0,
                createChart: function() {
                    throw new Error("Base chart type can't be instantiated!")
                },
                update: c,
                detach: d,
                on: e,
                off: f,
                version: b.version,
                supportsForeignObject: !1
            })
        }(this || global, a),
        function(a, b) {
            "use strict";

            function c(a, c, d, e, f) {
                a instanceof Element ? this._node = a : (this._node = y.createElementNS(b.namespaces.svg, a), "svg" === a && this.attr({
                    "xmlns:ct": b.namespaces.ct
                })), c && this.attr(c), d && this.addClass(d), e && (f && e._node.firstChild ? e._node.insertBefore(this._node, e._node.firstChild) : e._node.appendChild(this._node))
            }

            function d(a, c) {
                return "string" == typeof a ? c ? this._node.getAttributeNS(c, a) : this._node.getAttribute(a) : (Object.keys(a).forEach(function(c) {
                    if (void 0 !== a[c])
                        if (c.indexOf(":") !== -1) {
                            var d = c.split(":");
                            this._node.setAttributeNS(b.namespaces[d[0]], c, a[c])
                        } else this._node.setAttribute(c, a[c])
                }.bind(this)), this)
            }

            function e(a, c, d, e) {
                return new b.Svg(a, c, d, this, e)
            }

            function f() {
                return this._node.parentNode instanceof SVGElement ? new b.Svg(this._node.parentNode) : null
            }

            function g() {
                for (var a = this._node;
                    "svg" !== a.nodeName;) a = a.parentNode;
                return new b.Svg(a)
            }

            function h(a) {
                var c = this._node.querySelector(a);
                return c ? new b.Svg(c) : null
            }

            function i(a) {
                var c = this._node.querySelectorAll(a);
                return c.length ? new b.Svg.List(c) : null
            }

            function j() {
                return this._node
            }

            function k(a, c, d, e) {
                if ("string" == typeof a) {
                    var f = y.createElement("div");
                    f.innerHTML = a, a = f.firstChild
                }
                a.setAttribute("xmlns", b.namespaces.xmlns);
                var g = this.elem("foreignObject", c, d, e);
                return g._node.appendChild(a), g
            }

            function l(a) {
                return this._node.appendChild(y.createTextNode(a)), this
            }

            function m() {
                for (; this._node.firstChild;) this._node.removeChild(this._node.firstChild);
                return this
            }

            function n() {
                return this._node.parentNode.removeChild(this._node), this.parent()
            }

            function o(a) {
                return this._node.parentNode.replaceChild(a._node, this._node), a
            }

            function p(a, b) {
                return b && this._node.firstChild ? this._node.insertBefore(a._node, this._node.firstChild) : this._node.appendChild(a._node), this
            }

            function q() {
                return this._node.getAttribute("class") ? this._node.getAttribute("class").trim().split(/\s+/) : []
            }

            function r(a) {
                return this._node.setAttribute("class", this.classes(this._node).concat(a.trim().split(/\s+/)).filter(function(a, b, c) {
                    return c.indexOf(a) === b
                }).join(" ")), this
            }

            function s(a) {
                var b = a.trim().split(/\s+/);
                return this._node.setAttribute("class", this.classes(this._node).filter(function(a) {
                    return b.indexOf(a) === -1
                }).join(" ")), this
            }

            function t() {
                return this._node.setAttribute("class", ""), this
            }

            function u() {
                return this._node.getBoundingClientRect().height
            }

            function v() {
                return this._node.getBoundingClientRect().width
            }

            function w(a, c, d) {
                return void 0 === c && (c = !0), Object.keys(a).forEach(function(e) {
                    function f(a, c) {
                        var f, g, h, i = {};
                        a.easing && (h = a.easing instanceof Array ? a.easing : b.Svg.Easing[a.easing], delete a.easing), a.begin = b.ensureUnit(a.begin, "ms"), a.dur = b.ensureUnit(a.dur, "ms"), h && (a.calcMode = "spline", a.keySplines = h.join(" "), a.keyTimes = "0;1"), c && (a.fill = "freeze", i[e] = a.from, this.attr(i), g = b.quantity(a.begin || 0).value, a.begin = "indefinite"), f = this.elem("animate", b.extend({
                            attributeName: e
                        }, a)), c && setTimeout(function() {
                            try {
                                f._node.beginElement()
                            } catch (b) {
                                i[e] = a.to, this.attr(i), f.remove()
                            }
                        }.bind(this), g), d && f._node.addEventListener("beginEvent", function() {
                            d.emit("animationBegin", {
                                element: this,
                                animate: f._node,
                                params: a
                            })
                        }.bind(this)), f._node.addEventListener("endEvent", function() {
                            d && d.emit("animationEnd", {
                                element: this,
                                animate: f._node,
                                params: a
                            }), c && (i[e] = a.to, this.attr(i), f.remove())
                        }.bind(this))
                    }
                    a[e] instanceof Array ? a[e].forEach(function(a) {
                        f.bind(this)(a, !1)
                    }.bind(this)) : f.bind(this)(a[e], c)
                }.bind(this)), this
            }

            function x(a) {
                var c = this;
                this.svgElements = [];
                for (var d = 0; d < a.length; d++) this.svgElements.push(new b.Svg(a[d]));
                Object.keys(b.Svg.prototype).filter(function(a) {
                    return ["constructor", "parent", "querySelector", "querySelectorAll", "replace", "append", "classes", "height", "width"].indexOf(a) === -1
                }).forEach(function(a) {
                    c[a] = function() {
                        var d = Array.prototype.slice.call(arguments, 0);
                        return c.svgElements.forEach(function(c) {
                            b.Svg.prototype[a].apply(c, d)
                        }), c
                    }
                })
            }
            var y = a.document;
            b.Svg = b.Class.extend({
                constructor: c,
                attr: d,
                elem: e,
                parent: f,
                root: g,
                querySelector: h,
                querySelectorAll: i,
                getNode: j,
                foreignObject: k,
                text: l,
                empty: m,
                remove: n,
                replace: o,
                append: p,
                classes: q,
                addClass: r,
                removeClass: s,
                removeAllClasses: t,
                height: u,
                width: v,
                animate: w
            }), b.Svg.isSupported = function(a) {
                return y.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#" + a, "1.1")
            };
            var z = {
                easeInSine: [.47, 0, .745, .715],
                easeOutSine: [.39, .575, .565, 1],
                easeInOutSine: [.445, .05, .55, .95],
                easeInQuad: [.55, .085, .68, .53],
                easeOutQuad: [.25, .46, .45, .94],
                easeInOutQuad: [.455, .03, .515, .955],
                easeInCubic: [.55, .055, .675, .19],
                easeOutCubic: [.215, .61, .355, 1],
                easeInOutCubic: [.645, .045, .355, 1],
                easeInQuart: [.895, .03, .685, .22],
                easeOutQuart: [.165, .84, .44, 1],
                easeInOutQuart: [.77, 0, .175, 1],
                easeInQuint: [.755, .05, .855, .06],
                easeOutQuint: [.23, 1, .32, 1],
                easeInOutQuint: [.86, 0, .07, 1],
                easeInExpo: [.95, .05, .795, .035],
                easeOutExpo: [.19, 1, .22, 1],
                easeInOutExpo: [1, 0, 0, 1],
                easeInCirc: [.6, .04, .98, .335],
                easeOutCirc: [.075, .82, .165, 1],
                easeInOutCirc: [.785, .135, .15, .86],
                easeInBack: [.6, -.28, .735, .045],
                easeOutBack: [.175, .885, .32, 1.275],
                easeInOutBack: [.68, -.55, .265, 1.55]
            };
            b.Svg.Easing = z, b.Svg.List = b.Class.extend({
                constructor: x
            })
        }(this || global, a),
        function(a, b) {
            "use strict";

            function c(a, c, d, e, f, g) {
                var h = b.extend({
                    command: f ? a.toLowerCase() : a.toUpperCase()
                }, c, g ? {
                    data: g
                } : {});
                d.splice(e, 0, h)
            }

            function d(a, b) {
                a.forEach(function(c, d) {
                    t[c.command.toLowerCase()].forEach(function(e, f) {
                        b(c, e, d, f, a)
                    })
                })
            }

            function e(a, c) {
                this.pathElements = [], this.pos = 0, this.close = a, this.options = b.extend({}, u, c)
            }

            function f(a) {
                return void 0 !== a ? (this.pos = Math.max(0, Math.min(this.pathElements.length, a)), this) : this.pos
            }

            function g(a) {
                return this.pathElements.splice(this.pos, a), this
            }

            function h(a, b, d, e) {
                return c("M", {
                    x: +a,
                    y: +b
                }, this.pathElements, this.pos++, d, e), this
            }

            function i(a, b, d, e) {
                return c("L", {
                    x: +a,
                    y: +b
                }, this.pathElements, this.pos++, d, e), this
            }

            function j(a, b, d, e, f, g, h, i) {
                return c("C", {
                    x1: +a,
                    y1: +b,
                    x2: +d,
                    y2: +e,
                    x: +f,
                    y: +g
                }, this.pathElements, this.pos++, h, i), this
            }

            function k(a, b, d, e, f, g, h, i, j) {
                return c("A", {
                    rx: +a,
                    ry: +b,
                    xAr: +d,
                    lAf: +e,
                    sf: +f,
                    x: +g,
                    y: +h
                }, this.pathElements, this.pos++, i, j), this
            }

            function l(a) {
                var c = a.replace(/([A-Za-z])([0-9])/g, "$1 $2").replace(/([0-9])([A-Za-z])/g, "$1 $2").split(/[\s,]+/).reduce(function(a, b) {
                    return b.match(/[A-Za-z]/) && a.push([]), a[a.length - 1].push(b), a
                }, []);
                "Z" === c[c.length - 1][0].toUpperCase() && c.pop();
                var d = c.map(function(a) {
                        var c = a.shift(),
                            d = t[c.toLowerCase()];
                        return b.extend({
                            command: c
                        }, d.reduce(function(b, c, d) {
                            return b[c] = +a[d], b
                        }, {}))
                    }),
                    e = [this.pos, 0];
                return Array.prototype.push.apply(e, d), Array.prototype.splice.apply(this.pathElements, e), this.pos += d.length, this
            }

            function m() {
                var a = Math.pow(10, this.options.accuracy);
                return this.pathElements.reduce(function(b, c) {
                    var d = t[c.command.toLowerCase()].map(function(b) {
                        return this.options.accuracy ? Math.round(c[b] * a) / a : c[b]
                    }.bind(this));
                    return b + c.command + d.join(",")
                }.bind(this), "") + (this.close ? "Z" : "")
            }

            function n(a, b) {
                return d(this.pathElements, function(c, d) {
                    c[d] *= "x" === d[0] ? a : b
                }), this
            }

            function o(a, b) {
                return d(this.pathElements, function(c, d) {
                    c[d] += "x" === d[0] ? a : b
                }), this
            }

            function p(a) {
                return d(this.pathElements, function(b, c, d, e, f) {
                    var g = a(b, c, d, e, f);
                    (g || 0 === g) && (b[c] = g)
                }), this
            }

            function q(a) {
                var c = new b.Svg.Path(a || this.close);
                return c.pos = this.pos, c.pathElements = this.pathElements.slice().map(function(a) {
                    return b.extend({}, a)
                }), c.options = b.extend({}, this.options), c
            }

            function r(a) {
                var c = [new b.Svg.Path];
                return this.pathElements.forEach(function(d) {
                    d.command === a.toUpperCase() && 0 !== c[c.length - 1].pathElements.length && c.push(new b.Svg.Path), c[c.length - 1].pathElements.push(d)
                }), c
            }

            function s(a, c, d) {
                for (var e = new b.Svg.Path(c, d), f = 0; f < a.length; f++)
                    for (var g = a[f], h = 0; h < g.pathElements.length; h++) e.pathElements.push(g.pathElements[h]);
                return e
            }
            var t = {
                    m: ["x", "y"],
                    l: ["x", "y"],
                    c: ["x1", "y1", "x2", "y2", "x", "y"],
                    a: ["rx", "ry", "xAr", "lAf", "sf", "x", "y"]
                },
                u = {
                    accuracy: 3
                };
            b.Svg.Path = b.Class.extend({
                constructor: e,
                position: f,
                remove: g,
                move: h,
                line: i,
                curve: j,
                arc: k,
                scale: n,
                translate: o,
                transform: p,
                parse: l,
                stringify: m,
                clone: q,
                splitByCommand: r
            }), b.Svg.Path.elementDescriptions = t, b.Svg.Path.join = s
        }(this || global, a),
        function(a, b) {
            "use strict";

            function c(a, b, c, d) {
                this.units = a, this.counterUnits = a === e.x ? e.y : e.x, this.chartRect = b, this.axisLength = b[a.rectEnd] - b[a.rectStart], this.gridOffset = b[a.rectOffset], this.ticks = c, this.options = d
            }

            function d(a, c, d, e, f) {
                var g = e["axis" + this.units.pos.toUpperCase()],
                    h = this.ticks.map(this.projectValue.bind(this)),
                    i = this.ticks.map(g.labelInterpolationFnc);
                h.forEach(function(j, k) {
                    var l, m = {
                        x: 0,
                        y: 0
                    };
                    l = h[k + 1] ? h[k + 1] - j : Math.max(this.axisLength - j, 30), b.isFalseyButZero(i[k]) && "" !== i[k] || ("x" === this.units.pos ? (j = this.chartRect.x1 + j, m.x = e.axisX.labelOffset.x, "start" === e.axisX.position ? m.y = this.chartRect.padding.top + e.axisX.labelOffset.y + (d ? 5 : 20) : m.y = this.chartRect.y1 + e.axisX.labelOffset.y + (d ? 5 : 20)) : (j = this.chartRect.y1 - j, m.y = e.axisY.labelOffset.y - (d ? l : 0), "start" === e.axisY.position ? m.x = d ? this.chartRect.padding.left + e.axisY.labelOffset.x : this.chartRect.x1 - 10 : m.x = this.chartRect.x2 + e.axisY.labelOffset.x + 10), g.showGrid && b.createGrid(j, k, this, this.gridOffset, this.chartRect[this.counterUnits.len](), a, [e.classNames.grid, e.classNames[this.units.dir]], f), g.showLabel && b.createLabel(j, l, k, i, this, g.offset, m, c, [e.classNames.label, e.classNames[this.units.dir], "start" === g.position ? e.classNames[g.position] : e.classNames.end], d, f))
                }.bind(this))
            }
            var e = (a.window, a.document, {
                x: {
                    pos: "x",
                    len: "width",
                    dir: "horizontal",
                    rectStart: "x1",
                    rectEnd: "x2",
                    rectOffset: "y2"
                },
                y: {
                    pos: "y",
                    len: "height",
                    dir: "vertical",
                    rectStart: "y2",
                    rectEnd: "y1",
                    rectOffset: "x1"
                }
            });
            b.Axis = b.Class.extend({
                constructor: c,
                createGridAndLabels: d,
                projectValue: function(a, b, c) {
                    throw new Error("Base axis can't be instantiated!")
                }
            }), b.Axis.units = e
        }(this || global, a),
        function(a, b) {
            "use strict";

            function c(a, c, d, e) {
                var f = e.highLow || b.getHighLow(c, e, a.pos);
                this.bounds = b.getBounds(d[a.rectEnd] - d[a.rectStart], f, e.scaleMinSpace || 20, e.onlyInteger), this.range = {
                    min: this.bounds.min,
                    max: this.bounds.max
                }, b.AutoScaleAxis["super"].constructor.call(this, a, d, this.bounds.values, e)
            }

            function d(a) {
                return this.axisLength * (+b.getMultiValue(a, this.units.pos) - this.bounds.min) / this.bounds.range
            }
            a.window, a.document;
            b.AutoScaleAxis = b.Axis.extend({
                constructor: c,
                projectValue: d
            })
        }(this || global, a),
        function(a, b) {
            "use strict";

            function c(a, c, d, e) {
                var f = e.highLow || b.getHighLow(c, e, a.pos);
                this.divisor = e.divisor || 1, this.ticks = e.ticks || b.times(this.divisor).map(function(a, b) {
                    return f.low + (f.high - f.low) / this.divisor * b
                }.bind(this)), this.ticks.sort(function(a, b) {
                    return a - b
                }), this.range = {
                    min: f.low,
                    max: f.high
                }, b.FixedScaleAxis["super"].constructor.call(this, a, d, this.ticks, e), this.stepLength = this.axisLength / this.divisor
            }

            function d(a) {
                return this.axisLength * (+b.getMultiValue(a, this.units.pos) - this.range.min) / (this.range.max - this.range.min)
            }
            a.window, a.document;
            b.FixedScaleAxis = b.Axis.extend({
                constructor: c,
                projectValue: d
            })
        }(this || global, a),
        function(a, b) {
            "use strict";

            function c(a, c, d, e) {
                b.StepAxis["super"].constructor.call(this, a, d, e.ticks, e);
                var f = Math.max(1, e.ticks.length - (e.stretch ? 1 : 0));
                this.stepLength = this.axisLength / f
            }

            function d(a, b) {
                return this.stepLength * b
            }
            a.window, a.document;
            b.StepAxis = b.Axis.extend({
                constructor: c,
                projectValue: d
            })
        }(this || global, a),
        function(a, b) {
            "use strict";

            function c(a) {
                var c = b.normalizeData(this.data, a.reverseData, !0);
                this.svg = b.createSvg(this.container, a.width, a.height, a.classNames.chart);
                var d, f, g = this.svg.elem("g").addClass(a.classNames.gridGroup),
                    h = this.svg.elem("g"),
                    i = this.svg.elem("g").addClass(a.classNames.labelGroup),
                    j = b.createChartRect(this.svg, a, e.padding);
                d = void 0 === a.axisX.type ? new b.StepAxis(b.Axis.units.x, c.normalized.series, j, b.extend({}, a.axisX, {
                    ticks: c.normalized.labels,
                    stretch: a.fullWidth
                })) : a.axisX.type.call(b, b.Axis.units.x, c.normalized.series, j, a.axisX), f = void 0 === a.axisY.type ? new b.AutoScaleAxis(b.Axis.units.y, c.normalized.series, j, b.extend({}, a.axisY, {
                    high: b.isNumeric(a.high) ? a.high : a.axisY.high,
                    low: b.isNumeric(a.low) ? a.low : a.axisY.low
                })) : a.axisY.type.call(b, b.Axis.units.y, c.normalized.series, j, a.axisY), d.createGridAndLabels(g, i, this.supportsForeignObject, a, this.eventEmitter), f.createGridAndLabels(g, i, this.supportsForeignObject, a, this.eventEmitter), a.showGridBackground && b.createGridBackground(g, j, a.classNames.gridBackground, this.eventEmitter), c.raw.series.forEach(function(e, g) {
                    var i = h.elem("g");
                    i.attr({
                        "ct:series-name": e.name,
                        "ct:meta": b.serialize(e.meta)
                    }), i.addClass([a.classNames.series, e.className || a.classNames.series + "-" + b.alphaNumerate(g)].join(" "));
                    var k = [],
                        l = [];
                    c.normalized.series[g].forEach(function(a, h) {
                        var i = {
                            x: j.x1 + d.projectValue(a, h, c.normalized.series[g]),
                            y: j.y1 - f.projectValue(a, h, c.normalized.series[g])
                        };
                        k.push(i.x, i.y), l.push({
                            value: a,
                            valueIndex: h,
                            meta: b.getMetaData(e, h)
                        })
                    }.bind(this));
                    var m = {
                            lineSmooth: b.getSeriesOption(e, a, "lineSmooth"),
                            showPoint: b.getSeriesOption(e, a, "showPoint"),
                            showLine: b.getSeriesOption(e, a, "showLine"),
                            showArea: b.getSeriesOption(e, a, "showArea"),
                            areaBase: b.getSeriesOption(e, a, "areaBase")
                        },
                        n = "function" == typeof m.lineSmooth ? m.lineSmooth : m.lineSmooth ? b.Interpolation.monotoneCubic() : b.Interpolation.none(),
                        o = n(k, l);
                    if (m.showPoint && o.pathElements.forEach(function(c) {
                            var h = i.elem("line", {
                                x1: c.x,
                                y1: c.y,
                                x2: c.x + .01,
                                y2: c.y
                            }, a.classNames.point).attr({
                                "ct:value": [c.data.value.x, c.data.value.y].filter(b.isNumeric).join(","),
                                "ct:meta": b.serialize(c.data.meta)
                            });
                            this.eventEmitter.emit("draw", {
                                type: "point",
                                value: c.data.value,
                                index: c.data.valueIndex,
                                meta: c.data.meta,
                                series: e,
                                seriesIndex: g,
                                axisX: d,
                                axisY: f,
                                group: i,
                                element: h,
                                x: c.x,
                                y: c.y
                            })
                        }.bind(this)), m.showLine) {
                        var p = i.elem("path", {
                            d: o.stringify()
                        }, a.classNames.line, !0);
                        this.eventEmitter.emit("draw", {
                            type: "line",
                            values: c.normalized.series[g],
                            path: o.clone(),
                            chartRect: j,
                            index: g,
                            series: e,
                            seriesIndex: g,
                            seriesMeta: e.meta,
                            axisX: d,
                            axisY: f,
                            group: i,
                            element: p
                        })
                    }
                    if (m.showArea && f.range) {
                        var q = Math.max(Math.min(m.areaBase, f.range.max), f.range.min),
                            r = j.y1 - f.projectValue(q);
                        o.splitByCommand("M").filter(function(a) {
                            return a.pathElements.length > 1
                        }).map(function(a) {
                            var b = a.pathElements[0],
                                c = a.pathElements[a.pathElements.length - 1];
                            return a.clone(!0).position(0).remove(1).move(b.x, r).line(b.x, b.y).position(a.pathElements.length + 1).line(c.x, r)
                        }).forEach(function(b) {
                            var h = i.elem("path", {
                                d: b.stringify()
                            }, a.classNames.area, !0);
                            this.eventEmitter.emit("draw", {
                                type: "area",
                                values: c.normalized.series[g],
                                path: b.clone(),
                                series: e,
                                seriesIndex: g,
                                axisX: d,
                                axisY: f,
                                chartRect: j,
                                index: g,
                                group: i,
                                element: h
                            })
                        }.bind(this))
                    }
                }.bind(this)), this.eventEmitter.emit("created", {
                    bounds: f.bounds,
                    chartRect: j,
                    axisX: d,
                    axisY: f,
                    svg: this.svg,
                    options: a
                })
            }

            function d(a, c, d, f) {
                b.Line["super"].constructor.call(this, a, c, e, b.extend({}, e, d), f)
            }
            var e = (a.window, a.document, {
                axisX: {
                    offset: 30,
                    position: "end",
                    labelOffset: {
                        x: 0,
                        y: 0
                    },
                    showLabel: !0,
                    showGrid: !0,
                    labelInterpolationFnc: b.noop,
                    type: void 0
                },
                axisY: {
                    offset: 40,
                    position: "start",
                    labelOffset: {
                        x: 0,
                        y: 0
                    },
                    showLabel: !0,
                    showGrid: !0,
                    labelInterpolationFnc: b.noop,
                    type: void 0,
                    scaleMinSpace: 20,
                    onlyInteger: !1
                },
                width: void 0,
                height: void 0,
                showLine: !0,
                showPoint: !0,
                showArea: !1,
                areaBase: 0,
                lineSmooth: !0,
                showGridBackground: !1,
                low: void 0,
                high: void 0,
                chartPadding: {
                    top: 15,
                    right: 15,
                    bottom: 5,
                    left: 10
                },
                fullWidth: !1,
                reverseData: !1,
                classNames: {
                    chart: "ct-chart-line",
                    label: "ct-label",
                    labelGroup: "ct-labels",
                    series: "ct-series",
                    line: "ct-line",
                    point: "ct-point",
                    area: "ct-area",
                    grid: "ct-grid",
                    gridGroup: "ct-grids",
                    gridBackground: "ct-grid-background",
                    vertical: "ct-vertical",
                    horizontal: "ct-horizontal",
                    start: "ct-start",
                    end: "ct-end"
                }
            });
            b.Line = b.Base.extend({
                constructor: d,
                createChart: c
            })
        }(this || global, a),
        function(a, b) {
            "use strict";

            function c(a) {
                var c, d;
                a.distributeSeries ? (c = b.normalizeData(this.data, a.reverseData, a.horizontalBars ? "x" : "y"), c.normalized.series = c.normalized.series.map(function(a) {
                    return [a]
                })) : c = b.normalizeData(this.data, a.reverseData, a.horizontalBars ? "x" : "y"), this.svg = b.createSvg(this.container, a.width, a.height, a.classNames.chart + (a.horizontalBars ? " " + a.classNames.horizontalBars : ""));
                var f = this.svg.elem("g").addClass(a.classNames.gridGroup),
                    g = this.svg.elem("g"),
                    h = this.svg.elem("g").addClass(a.classNames.labelGroup);
                if (a.stackBars && 0 !== c.normalized.series.length) {
                    var i = b.serialMap(c.normalized.series, function() {
                        return Array.prototype.slice.call(arguments).map(function(a) {
                            return a
                        }).reduce(function(a, b) {
                            return {
                                x: a.x + (b && b.x) || 0,
                                y: a.y + (b && b.y) || 0
                            }
                        }, {
                            x: 0,
                            y: 0
                        })
                    });
                    d = b.getHighLow([i], a, a.horizontalBars ? "x" : "y")
                } else d = b.getHighLow(c.normalized.series, a, a.horizontalBars ? "x" : "y");
                d.high = +a.high || (0 === a.high ? 0 : d.high), d.low = +a.low || (0 === a.low ? 0 : d.low);
                var j, k, l, m, n, o = b.createChartRect(this.svg, a, e.padding);
                k = a.distributeSeries && a.stackBars ? c.normalized.labels.slice(0, 1) : c.normalized.labels, a.horizontalBars ? (j = m = void 0 === a.axisX.type ? new b.AutoScaleAxis(b.Axis.units.x, c.normalized.series, o, b.extend({}, a.axisX, {
                    highLow: d,
                    referenceValue: 0
                })) : a.axisX.type.call(b, b.Axis.units.x, c.normalized.series, o, b.extend({}, a.axisX, {
                    highLow: d,
                    referenceValue: 0
                })), l = n = void 0 === a.axisY.type ? new b.StepAxis(b.Axis.units.y, c.normalized.series, o, {
                    ticks: k
                }) : a.axisY.type.call(b, b.Axis.units.y, c.normalized.series, o, a.axisY)) : (l = m = void 0 === a.axisX.type ? new b.StepAxis(b.Axis.units.x, c.normalized.series, o, {
                    ticks: k
                }) : a.axisX.type.call(b, b.Axis.units.x, c.normalized.series, o, a.axisX), j = n = void 0 === a.axisY.type ? new b.AutoScaleAxis(b.Axis.units.y, c.normalized.series, o, b.extend({}, a.axisY, {
                    highLow: d,
                    referenceValue: 0
                })) : a.axisY.type.call(b, b.Axis.units.y, c.normalized.series, o, b.extend({}, a.axisY, {
                    highLow: d,
                    referenceValue: 0
                })));
                var p = a.horizontalBars ? o.x1 + j.projectValue(0) : o.y1 - j.projectValue(0),
                    q = [];
                l.createGridAndLabels(f, h, this.supportsForeignObject, a, this.eventEmitter), j.createGridAndLabels(f, h, this.supportsForeignObject, a, this.eventEmitter), a.showGridBackground && b.createGridBackground(f, o, a.classNames.gridBackground, this.eventEmitter), c.raw.series.forEach(function(d, e) {
                    var f, h, i = e - (c.raw.series.length - 1) / 2;
                    f = a.distributeSeries && !a.stackBars ? l.axisLength / c.normalized.series.length / 2 : a.distributeSeries && a.stackBars ? l.axisLength / 2 : l.axisLength / c.normalized.series[e].length / 2, h = g.elem("g"), h.attr({
                        "ct:series-name": d.name,
                        "ct:meta": b.serialize(d.meta)
                    }), h.addClass([a.classNames.series, d.className || a.classNames.series + "-" + b.alphaNumerate(e)].join(" ")), c.normalized.series[e].forEach(function(g, k) {
                        var r, s, t, u;
                        if (u = a.distributeSeries && !a.stackBars ? e : a.distributeSeries && a.stackBars ? 0 : k, r = a.horizontalBars ? {
                                x: o.x1 + j.projectValue(g && g.x ? g.x : 0, k, c.normalized.series[e]),
                                y: o.y1 - l.projectValue(g && g.y ? g.y : 0, u, c.normalized.series[e])
                            } : {
                                x: o.x1 + l.projectValue(g && g.x ? g.x : 0, u, c.normalized.series[e]),
                                y: o.y1 - j.projectValue(g && g.y ? g.y : 0, k, c.normalized.series[e])
                            }, l instanceof b.StepAxis && (l.options.stretch || (r[l.units.pos] += f * (a.horizontalBars ? -1 : 1)), r[l.units.pos] += a.stackBars || a.distributeSeries ? 0 : i * a.seriesBarDistance * (a.horizontalBars ? -1 : 1)), t = q[k] || p, q[k] = t - (p - r[l.counterUnits.pos]), void 0 !== g) {
                            var v = {};
                            v[l.units.pos + "1"] = r[l.units.pos], v[l.units.pos + "2"] = r[l.units.pos], !a.stackBars || "accumulate" !== a.stackMode && a.stackMode ? (v[l.counterUnits.pos + "1"] = p, v[l.counterUnits.pos + "2"] = r[l.counterUnits.pos]) : (v[l.counterUnits.pos + "1"] = t, v[l.counterUnits.pos + "2"] = q[k]), v.x1 = Math.min(Math.max(v.x1, o.x1), o.x2), v.x2 = Math.min(Math.max(v.x2, o.x1), o.x2), v.y1 = Math.min(Math.max(v.y1, o.y2), o.y1), v.y2 = Math.min(Math.max(v.y2, o.y2), o.y1);
                            var w = b.getMetaData(d, k);
                            s = h.elem("line", v, a.classNames.bar).attr({
                                "ct:value": [g.x, g.y].filter(b.isNumeric).join(","),
                                "ct:meta": b.serialize(w)
                            }), this.eventEmitter.emit("draw", b.extend({
                                type: "bar",
                                value: g,
                                index: k,
                                meta: w,
                                series: d,
                                seriesIndex: e,
                                axisX: m,
                                axisY: n,
                                chartRect: o,
                                group: h,
                                element: s
                            }, v))
                        }
                    }.bind(this))
                }.bind(this)), this.eventEmitter.emit("created", {
                    bounds: j.bounds,
                    chartRect: o,
                    axisX: m,
                    axisY: n,
                    svg: this.svg,
                    options: a
                })
            }

            function d(a, c, d, f) {
                b.Bar["super"].constructor.call(this, a, c, e, b.extend({}, e, d), f)
            }
            var e = (a.window, a.document, {
                axisX: {
                    offset: 30,
                    position: "end",
                    labelOffset: {
                        x: 0,
                        y: 0
                    },
                    showLabel: !0,
                    showGrid: !0,
                    labelInterpolationFnc: b.noop,
                    scaleMinSpace: 30,
                    onlyInteger: !1
                },
                axisY: {
                    offset: 40,
                    position: "start",
                    labelOffset: {
                        x: 0,
                        y: 0
                    },
                    showLabel: !0,
                    showGrid: !0,
                    labelInterpolationFnc: b.noop,
                    scaleMinSpace: 20,
                    onlyInteger: !1
                },
                width: void 0,
                height: void 0,
                high: void 0,
                low: void 0,
                referenceValue: 0,
                chartPadding: {
                    top: 15,
                    right: 15,
                    bottom: 5,
                    left: 10
                },
                seriesBarDistance: 15,
                stackBars: !1,
                stackMode: "accumulate",
                horizontalBars: !1,
                distributeSeries: !1,
                reverseData: !1,
                showGridBackground: !1,
                classNames: {
                    chart: "ct-chart-bar",
                    horizontalBars: "ct-horizontal-bars",
                    label: "ct-label",
                    labelGroup: "ct-labels",
                    series: "ct-series",
                    bar: "ct-bar",
                    grid: "ct-grid",
                    gridGroup: "ct-grids",
                    gridBackground: "ct-grid-background",
                    vertical: "ct-vertical",
                    horizontal: "ct-horizontal",
                    start: "ct-start",
                    end: "ct-end"
                }
            });
            b.Bar = b.Base.extend({
                constructor: d,
                createChart: c
            })
        }(this || global, a),
        function(a, b) {
            "use strict";

            function c(a, b, c) {
                var d = b.x > a.x;
                return d && "explode" === c || !d && "implode" === c ? "start" : d && "implode" === c || !d && "explode" === c ? "end" : "middle"
            }

            function d(a) {
                var d, e, g, h, i, j = b.normalizeData(this.data),
                    k = [],
                    l = a.startAngle;
                this.svg = b.createSvg(this.container, a.width, a.height, a.donut ? a.classNames.chartDonut : a.classNames.chartPie), e = b.createChartRect(this.svg, a, f.padding), g = Math.min(e.width() / 2, e.height() / 2), i = a.total || j.normalized.series.reduce(function(a, b) {
                    return a + b
                }, 0);
                var m = b.quantity(a.donutWidth);
                "%" === m.unit && (m.value *= g / 100), g -= a.donut && !a.donutSolid ? m.value / 2 : 0, h = "outside" === a.labelPosition || a.donut && !a.donutSolid ? g : "center" === a.labelPosition ? 0 : a.donutSolid ? g - m.value / 2 : g / 2, h += a.labelOffset;
                var n = {
                        x: e.x1 + e.width() / 2,
                        y: e.y2 + e.height() / 2
                    },
                    o = 1 === j.raw.series.filter(function(a) {
                        return a.hasOwnProperty("value") ? 0 !== a.value : 0 !== a
                    }).length;
                j.raw.series.forEach(function(a, b) {
                    k[b] = this.svg.elem("g", null, null)
                }.bind(this)), a.showLabel && (d = this.svg.elem("g", null, null)), j.raw.series.forEach(function(e, f) {
                    if (0 !== j.normalized.series[f] || !a.ignoreEmptyValues) {
                        k[f].attr({
                            "ct:series-name": e.name
                        }), k[f].addClass([a.classNames.series, e.className || a.classNames.series + "-" + b.alphaNumerate(f)].join(" "));
                        var p = i > 0 ? l + j.normalized.series[f] / i * 360 : 0,
                            q = Math.max(0, l - (0 === f || o ? 0 : .2));
                        p - q >= 359.99 && (p = q + 359.99);
                        var r, s, t, u = b.polarToCartesian(n.x, n.y, g, q),
                            v = b.polarToCartesian(n.x, n.y, g, p),
                            w = new b.Svg.Path(!a.donut || a.donutSolid).move(v.x, v.y).arc(g, g, 0, p - l > 180, 0, u.x, u.y);
                        a.donut ? a.donutSolid && (t = g - m.value, r = b.polarToCartesian(n.x, n.y, t, l - (0 === f || o ? 0 : .2)), s = b.polarToCartesian(n.x, n.y, t, p), w.line(r.x, r.y), w.arc(t, t, 0, p - l > 180, 1, s.x, s.y)) : w.line(n.x, n.y);
                        var x = a.classNames.slicePie;
                        a.donut && (x = a.classNames.sliceDonut, a.donutSolid && (x = a.classNames.sliceDonutSolid));
                        var y = k[f].elem("path", {
                            d: w.stringify()
                        }, x);
                        if (y.attr({
                                "ct:value": j.normalized.series[f],
                                "ct:meta": b.serialize(e.meta)
                            }), a.donut && !a.donutSolid && (y._node.style.strokeWidth = m.value + "px"), this.eventEmitter.emit("draw", {
                                type: "slice",
                                value: j.normalized.series[f],
                                totalDataSum: i,
                                index: f,
                                meta: e.meta,
                                series: e,
                                group: k[f],
                                element: y,
                                path: w.clone(),
                                center: n,
                                radius: g,
                                startAngle: l,
                                endAngle: p
                            }), a.showLabel) {
                            var z;
                            z = 1 === j.raw.series.length ? {
                                x: n.x,
                                y: n.y
                            } : b.polarToCartesian(n.x, n.y, h, l + (p - l) / 2);
                            var A;
                            A = j.normalized.labels && !b.isFalseyButZero(j.normalized.labels[f]) ? j.normalized.labels[f] : j.normalized.series[f];
                            var B = a.labelInterpolationFnc(A, f);
                            if (B || 0 === B) {
                                var C = d.elem("text", {
                                    dx: z.x,
                                    dy: z.y,
                                    "text-anchor": c(n, z, a.labelDirection)
                                }, a.classNames.label).text("" + B);
                                this.eventEmitter.emit("draw", {
                                    type: "label",
                                    index: f,
                                    group: d,
                                    element: C,
                                    text: "" + B,
                                    x: z.x,
                                    y: z.y
                                })
                            }
                        }
                        l = p
                    }
                }.bind(this)), this.eventEmitter.emit("created", {
                    chartRect: e,
                    svg: this.svg,
                    options: a
                })
            }

            function e(a, c, d, e) {
                b.Pie["super"].constructor.call(this, a, c, f, b.extend({}, f, d), e)
            }
            var f = (a.window, a.document, {
                width: void 0,
                height: void 0,
                chartPadding: 5,
                classNames: {
                    chartPie: "ct-chart-pie",
                    chartDonut: "ct-chart-donut",
                    series: "ct-series",
                    slicePie: "ct-slice-pie",
                    sliceDonut: "ct-slice-donut",
                    sliceDonutSolid: "ct-slice-donut-solid",
                    label: "ct-label"
                },
                startAngle: 0,
                total: void 0,
                donut: !1,
                donutSolid: !1,
                donutWidth: 60,
                showLabel: !0,
                labelOffset: 0,
                labelPosition: "inside",
                labelInterpolationFnc: b.noop,
                labelDirection: "neutral",
                reverseData: !1,
                ignoreEmptyValues: !1
            });
            b.Pie = b.Base.extend({
                constructor: e,
                createChart: d,
                determineAnchorPosition: c
            })
        }(this || global, a), a
});