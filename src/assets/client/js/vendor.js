/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        E = C.document,
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.concat,
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        x = function(e) {
            return null != e && e === e.window
        },
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.4.1",
        k = function(e, t) {
            return new k.fn.init(e, t)
        },
        p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function d(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    k.fn = k.prototype = {
        jquery: f,
        constructor: k,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return k.each(this, e)
        },
        map: function(n) {
            return this.pushStack(k.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, k.extend = k.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, k.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t) {
            b(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, r = 0;
            if (d(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(p, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (d(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g.apply([], a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var h = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, k = "sizzle" + 1 * new Date,
            m = n.document,
            S = 0,
            r = 0,
            p = ue(),
            x = ue(),
            N = ue(),
            A = ue(),
            D = function(e, t) {
                return e === t && (l = !0), 0
            },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            F = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp($),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + $),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ne = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                T()
            },
            ae = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                    }
                if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && U.test(t)) {
                        (s = e.getAttribute("id")) ? s = s.replace(re, ie): e.setAttribute("id", s = k), o = (l = h(t)).length;
                        while (o--) l[o] = "#" + s + " " + xe(l[o]);
                        c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        A(t, !0)
                    } finally {
                        s === k && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[k] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : m;
                return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) {
                    return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length
                }), d.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                    a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $)
                }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0
                }), C
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    A(t, !0)
                }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) !== C && T(e), y(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = p[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [S, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace(B, "$1"));
                        return s[k] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function() {
                        return [0]
                    }),
                    last: ve(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ve(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [S, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, v, y, e) {
            return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) {
                    i = Te(p, u), v(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                    return e === i
                }, a, !0), l = be(function(e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(B, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = N[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
                (a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = S += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument === C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (S = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (S = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;
    var T = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && k(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        S = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        N = k.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return m(n) ? k.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? k.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? k.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : k.filter(n, e, r)
    }
    k.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, k.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(k(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (k.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
            return 1 < r ? k.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
    }).prototype = k.fn, q = k(E);
    var H = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    k.fn.extend({
        has: function(e) {
            var t = k(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (k.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && k(e);
            if (!N.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), k.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return T(e, "nextSibling")
        },
        prevAll: function(e) {
            return T(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes))
        }
    }, function(r, i) {
        k.fn[r] = function(e, t) {
            var n = k.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var R = /[^\x20\t\r\n\f]+/g;

    function M(e) {
        return e
    }

    function I(e) {
        throw e
    }

    function W(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    k.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function(e, t) {
            n[t] = !0
        }), n) : k.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        k.each(e, function(e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return k.each(arguments, function(e, t) {
                        var n;
                        while (-1 < (n = k.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < k.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, k.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                    ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return k.Deferred(function(r) {
                            k.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return k.Deferred(function(e) {
                            o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? k.extend(e, a) : a
                    }
                },
                s = {};
            return k.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = k.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) W(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, k.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var F = k.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready()
    }
    k.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            k.readyException(e)
        }), this
    }, k.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k])
        }
    }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var _ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) _(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(k(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        z = /^-ms-/,
        U = /-([a-z])/g;

    function X(e, t) {
        return t.toUpperCase()
    }

    function V(e) {
        return e.replace(z, "ms-").replace(U, X)
    }
    var G = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Y() {
        this.expando = k.expando + Y.uid++
    }
    Y.uid = 1, Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[V(t)] = n;
            else
                for (r in t) i[V(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t)
        }
    };
    var Q = new Y,
        J = new Y,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function ee(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                J.set(e, t, n)
            } else n = void 0;
        return n
    }
    k.extend({
        hasData: function(e) {
            return J.hasData(e) || Q.hasData(e)
        },
        data: function(e, t, n) {
            return J.access(e, t, n)
        },
        removeData: function(e, t) {
            J.remove(e, t)
        },
        _data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        _removeData: function(e, t) {
            Q.remove(e, t)
        }
    }), k.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
                    Q.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                J.set(this, n)
            }) : _(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function() {
                    J.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                J.remove(this, e)
            })
        }
    }), k.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = k._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                k.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: k.Callbacks("once memory").add(function() {
                    Q.remove(e, [t + "queue", n])
                })
            })
        }
    }), k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                k.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = k.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        re = ["Top", "Right", "Bottom", "Left"],
        ie = E.documentElement,
        oe = function(e) {
            return k.contains(e.ownerDocument, e)
        },
        ae = {
            composed: !0
        };
    ie.getRootNode && (oe = function(e) {
        return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
    });
    var se = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display")
        },
        ue = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
            return i
        };

    function le(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return k.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, k.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ce = {};

    function fe(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    k.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? k(this).show() : k(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var me, xe, be = /<|&#?\w+;/;

    function we(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);
                else if (be.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            k.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < k.inArray(o, r)) i && i.push(o);
            else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }
    me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var Te = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;

    function ke() {
        return !0
    }

    function Se() {
        return !1
    }

    function Ne(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ae(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return k().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = k.guid++)), e.each(function() {
            k.event.add(this, t, i, r, n)
        })
    }

    function De(e, i, o) {
        o ? (Q.set(e, i, !1), k.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Q.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(k.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else r.length && (Q.set(this, i, {
                    value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke)
    }
    k.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(t);
            if (v) {
                n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(R) || [""]).length;
                while (l--) d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && k.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(R) || [""]).length;
                while (l--)
                    if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = k.event.fix(e),
                u = new Array(arguments.length),
                l = (Q.get(this, "events") || {})[s.type] || [],
                c = k.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                a = k.event.handlers.call(this, s, l), t = 0;
                while ((i = a[t++]) && !s.isPropagationStopped()) {
                    s.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[k.expando] ? e : new k.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, k.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, k.Event = function(e, t) {
        if (!(this instanceof k.Event)) return new k.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
    }, k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, k.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, k.event.addProp), k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        k.event.special[e] = {
            setup: function() {
                return De(this, e, Ne), !1
            },
            trigger: function() {
                return De(this, e), !0
            },
            delegateType: t
        }
    }), k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        k.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), k.fn.extend({
        on: function(e, t, n, r) {
            return Ae(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ae(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() {
                k.event.remove(this, e, n, t)
            })
        }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        qe = /<script|<style|<link/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Oe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
    }

    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Re(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Me(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events))
                for (i in delete a.handle, a.events = {}, l)
                    for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
            J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u))
        }
    }

    function Ie(n, r, i, o) {
        r = g.apply([], r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o)
        });
        if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++) u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }) : b(u.textContent.replace(He, ""), u, l))
        }
        return n
    }

    function We(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    k.extend({
        htmlPrefilter: function(e) {
            return e.replace(je, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = oe(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Me(o[r], a[r]);
                else Me(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (G(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
        }
    }), k.fn.extend({
        detach: function(e) {
            return We(this, e, !0)
        },
        remove: function(e) {
            return We(this, e)
        },
        text: function(e) {
            return _(this, function(e) {
                return void 0 === e ? k.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Ie(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Ie(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return k.clone(this, e, t)
            })
        },
        html: function(e) {
            return _(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Ie(this, arguments, function(e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        k.fn[e] = function(e) {
            for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Fe = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        Be = new RegExp(re.join("|"), "i");

    function _e(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function ze(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u);
                var e = C.getComputedStyle(u);
                n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s = E.createElement("div"),
            u = E.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), a
            },
            scrollboxSize: function() {
                return e(), i
            }
        }))
    }();
    var Ue = ["Webkit", "Moz", "ms"],
        Xe = E.createElement("div").style,
        Ve = {};

    function Ge(e) {
        var t = k.cssProps[e] || Ve[e];
        return t || (e in Xe ? e : Ve[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = Ue.length;
            while (n--)
                if ((e = Ue[n] + t) in Xe) return e
        }(e) || e)
    }
    var Ye = /^(none|table(?!-c[ea]).+)/,
        Qe = /^--/,
        Je = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ke = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ze(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function et(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function tt(e, t, n) {
        var r = Fe(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
            o = i,
            a = _e(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if ($e.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function nt(e, t, n, r, i) {
        return new nt.prototype.init(e, t, n, r, i)
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = _e(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = V(t),
                    u = Qe.test(t),
                    l = e.style;
                if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = V(t);
            return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), k.each(["height", "width"], function(e, u) {
        k.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function() {
                    return tt(e, u, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Fe(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
                    s = n ? et(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s)
            }
        }
    }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), k.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        k.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (k.cssHooks[i + o].set = Ze)
    }), k.fn.extend({
        css: function(e, t) {
            return _(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Fe(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((k.Tween = nt).prototype = {
        constructor: nt,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
        }
    }).init.prototype = nt.prototype, (nt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, k.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, k.fx = nt.prototype.init, k.fx.step = {};
    var rt, it, ot, at, st = /^(?:toggle|show|hide)$/,
        ut = /queueHooks$/;

    function lt() {
        it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick())
    }

    function ct() {
        return C.setTimeout(function() {
            rt = void 0
        }), rt = Date.now()
    }

    function ft(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function pt(e, t, n) {
        for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function dt(o, e, t) {
        var n, a, r = 0,
            i = dt.prefilters.length,
            s = k.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: k.extend({}, e),
                opts: k.extend(!0, {
                    specialEasing: {},
                    easing: k.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: rt || ct(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    k.Animation = k.extend(dt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return le(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(R);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && se(e),
                v = Q.get(e, "fxshow");
            for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, k.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], st.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || k.style(e, r)
                }
            if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && fe([e], !0), p.done(function() {
                    for (r in g || fe([e]), Q.remove(e, "fxshow"), d) k.style(e, r, d[r])
                })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
        }
    }), k.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? k.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
        }, r
    }, k.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = k.isEmptyObject(t),
                o = k.speed(e, n, r),
                a = function() {
                    var e = dt(this, k.extend({}, t), o);
                    (i || Q.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = k.timers,
                    r = Q.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || k.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Q.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = k.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), k.each(["toggle", "show", "hide"], function(e, r) {
        var i = k.fn[r];
        k.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n)
        }
    }), k.each({
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        k.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), k.timers = [], k.fx.tick = function() {
        var e, t = 0,
            n = k.timers;
        for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(), rt = void 0
    }, k.fx.timer = function(e) {
        k.timers.push(e), k.fx.start()
    }, k.fx.interval = 13, k.fx.start = function() {
        it || (it = !0, lt())
    }, k.fx.stop = function() {
        it = null
    }, k.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, k.fn.delay = function(r, e) {
        return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value;
    var ht, gt = k.expr.attrHandle;
    k.fn.extend({
        attr: function(e, t) {
            return _(this, k.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                k.removeAttr(this, e)
            })
        }
    }), k.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(R);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), ht = {
        set: function(e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = gt[t] || k.find.attr;
        gt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r
        }
    });
    var vt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;

    function mt(e) {
        return (e.match(R) || []).join(" ")
    }

    function xt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function bt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
    }
    k.fn.extend({
        prop: function(e, t) {
            return _(this, k.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[k.propFix[e] || e]
            })
        }
    }), k.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), y.optSelected || (k.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        k.propFix[this.toLowerCase()] = this
    }), k.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                k(this).addClass(t.call(this, e, xt(this)))
            });
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                k(this).removeClass(t.call(this, e, xt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                k(this).toggleClass(i.call(this, e, xt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0, n = k(this), r = bt(i);
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    k.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
        }
    }), k.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : mt(k.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = k(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = k.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), k.each(["radio", "checkbox"], function() {
        k.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t)
            }
        }, y.checkOn || (k.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;
    var Tt = /^(?:focusinfocus|focusoutblur)$/,
        Ct = function(e) {
            e.stopPropagation()
        };
    k.extend(k.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = k.extend(new k.Event, n, {
                type: e,
                isSimulated: !0
            });
            k.event.trigger(r, null, t)
        }
    }), k.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                k.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return k.event.trigger(e, t, n, !0)
        }
    }), y.focusin || k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            k.event.simulate(r, e.target, k.event.fix(e))
        };
        k.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, r);
                t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, r) - 1;
                t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r))
            }
        }
    });
    var Et = C.location,
        kt = Date.now(),
        St = /\?/;
    k.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t
    };
    var Nt = /\[\]$/,
        At = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;

    function qt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) k.each(e, function(e, t) {
            r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) qt(n + "[" + t + "]", e[t], r, i)
    }
    k.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) qt(n, e[n], t, i);
        return r.join("&")
    }, k.fn.extend({
        serialize: function() {
            return k.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = k(this).val();
                return null == n ? null : Array.isArray(n) ? k.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(At, "\r\n")
                }
            }).get()
        }
    });
    var Lt = /%20/g,
        Ht = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:GET|HEAD)$/,
        Mt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Ft = E.createElement("a");

    function Bt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(R) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function _t(t, i, o, a) {
        var s = {},
            u = t === Wt;

        function l(e) {
            var r;
            return s[e] = !0, k.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function zt(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && k.extend(!0, e, r), e
    }
    Ft.href = Et.href, k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": k.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e)
        },
        ajaxPrefilter: Bt(It),
        ajaxTransport: Bt(Wt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
                x = k.Deferred(),
                b = k.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Pt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (v.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T;
            for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return k.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return k.get(e, void 0, t, "script")
        }
    }), k.each(["get", "post"], function(e, i) {
        k[i] = function(e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, k.isPlainObject(e) && e))
        }
    }), k._evalUrl = function(e, t) {
        return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                k.globalEval(e, t)
            }
        })
    }, k.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                k(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = k(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                k(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                k(this).replaceWith(this.childNodes)
            }), this
        }
    }), k.expr.pseudos.hidden = function(e) {
        return !k.expr.pseudos.visible(e)
    }, k.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, k.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var Ut = {
            0: 200,
            1223: 204
        },
        Xt = k.ajaxSettings.xhr();
    y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || Xt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), k.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), k.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return k.globalEval(e), e
            }
        }
    }), k.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), k.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = k("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Vt, Gt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Gt.pop() || k.expando + "_" + kt++;
            return this[e] = !0, e
        }
    }), k.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || k.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
        var r, i, o
    }, k.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && k.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        k.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), k.expr.pseudos.animated = function(t) {
        return k.grep(k.timers, function(e) {
            return t === e.elem
        }).length
    }, k.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = k.css(e, "position"),
                c = k(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, k.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                k.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - k.css(r, "marginTop", !0),
                    left: t.left - i.left - k.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === k.css(e, "position")) e = e.offsetParent;
                return e || ie
            })
        }
    }), k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function(e) {
            return _(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), k.each(["top", "left"], function(e, n) {
        k.cssHooks[n] = ze(y.pixelPosition, function(e, t) {
            if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t
        })
    }), k.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        k.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            k.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return _(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        k.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), k.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), k.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), k.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || k.guid++, i
    }, k.holdReady = function(e) {
        e ? k.readyWait++ : k.ready(!0)
    }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function(e) {
        var t = k.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return k
    });
    var Qt = C.jQuery,
        Jt = C.$;
    return k.noConflict = function(e) {
        return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k
    }, e || (C.jQuery = C.$ = k), k
});
/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
})(this, function() {
    'use strict';

    function e(e) {
        return e && '[object Function]' === {}.toString.call(e)
    }

    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var o = getComputedStyle(e, null);
        return t ? o[t] : o
    }

    function o(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host
    }

    function n(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case 'HTML':
            case 'BODY':
                return e.ownerDocument.body;
            case '#document':
                return e.body;
        }
        var i = t(e),
            r = i.overflow,
            p = i.overflowX,
            s = i.overflowY;
        return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
    }

    function r(e) {
        if (!e) return document.documentElement;
        for (var o = ie(10) ? document.body : null, n = e.offsetParent; n === o && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? r(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function p(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e)
    }

    function s(e) {
        return null === e.parentNode ? e : s(e.parentNode)
    }

    function d(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            n = o ? e : t,
            i = o ? t : e,
            a = document.createRange();
        a.setStart(n, 0), a.setEnd(i, 0);
        var l = a.commonAncestorContainer;
        if (e !== l && t !== l || n.contains(i)) return p(l) ? l : r(l);
        var f = s(e);
        return f.host ? d(f.host, t) : d(e, s(t).host)
    }

    function a(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
            o = 'top' === t ? 'scrollTop' : 'scrollLeft',
            n = e.nodeName;
        if ('BODY' === n || 'HTML' === n) {
            var i = e.ownerDocument.documentElement,
                r = e.ownerDocument.scrollingElement || i;
            return r[o]
        }
        return e[o]
    }

    function l(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            n = a(t, 'top'),
            i = a(t, 'left'),
            r = o ? -1 : 1;
        return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e
    }

    function f(e, t) {
        var o = 'x' === t ? 'Left' : 'Top',
            n = 'Left' == o ? 'Right' : 'Bottom';
        return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10)
    }

    function m(e, t, o, n) {
        return Q(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], ie(10) ? o['offset' + e] + n['margin' + ('Height' === e ? 'Top' : 'Left')] + n['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
    }

    function h() {
        var e = document.body,
            t = document.documentElement,
            o = ie(10) && getComputedStyle(t);
        return {
            height: m('Height', e, t, o),
            width: m('Width', e, t, o)
        }
    }

    function c(e) {
        return de({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function g(e) {
        var o = {};
        try {
            if (ie(10)) {
                o = e.getBoundingClientRect();
                var n = a(e, 'top'),
                    i = a(e, 'left');
                o.top += n, o.left += i, o.bottom += n, o.right += i
            } else o = e.getBoundingClientRect()
        } catch (t) {}
        var r = {
                left: o.left,
                top: o.top,
                width: o.right - o.left,
                height: o.bottom - o.top
            },
            p = 'HTML' === e.nodeName ? h() : {},
            s = p.width || e.clientWidth || r.right - r.left,
            d = p.height || e.clientHeight || r.bottom - r.top,
            l = e.offsetWidth - s,
            m = e.offsetHeight - d;
        if (l || m) {
            var g = t(e);
            l -= f(g, 'x'), m -= f(g, 'y'), r.width -= l, r.height -= m
        }
        return c(r)
    }

    function u(e, o) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            r = ie(10),
            p = 'HTML' === o.nodeName,
            s = g(e),
            d = g(o),
            a = n(e),
            f = t(o),
            m = parseFloat(f.borderTopWidth, 10),
            h = parseFloat(f.borderLeftWidth, 10);
        i && 'HTML' === o.nodeName && (d.top = Q(d.top, 0), d.left = Q(d.left, 0));
        var u = c({
            top: s.top - d.top - m,
            left: s.left - d.left - h,
            width: s.width,
            height: s.height
        });
        if (u.marginTop = 0, u.marginLeft = 0, !r && p) {
            var b = parseFloat(f.marginTop, 10),
                y = parseFloat(f.marginLeft, 10);
            u.top -= m - b, u.bottom -= m - b, u.left -= h - y, u.right -= h - y, u.marginTop = b, u.marginLeft = y
        }
        return (r && !i ? o.contains(a) : o === a && 'BODY' !== a.nodeName) && (u = l(u, o)), u
    }

    function b(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = e.ownerDocument.documentElement,
            n = u(e, o),
            i = Q(o.clientWidth, window.innerWidth || 0),
            r = Q(o.clientHeight, window.innerHeight || 0),
            p = t ? 0 : a(o),
            s = t ? 0 : a(o, 'left'),
            d = {
                top: p - n.top + n.marginTop,
                left: s - n.left + n.marginLeft,
                width: i,
                height: r
            };
        return c(d)
    }

    function y(e) {
        var n = e.nodeName;
        return 'BODY' === n || 'HTML' === n ? !1 : 'fixed' === t(e, 'position') || y(o(e))
    }

    function w(e) {
        if (!e || !e.parentElement || ie()) return document.documentElement;
        for (var o = e.parentElement; o && 'none' === t(o, 'transform');) o = o.parentElement;
        return o || document.documentElement
    }

    function E(e, t, i, r) {
        var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            s = {
                top: 0,
                left: 0
            },
            a = p ? w(e) : d(e, t);
        if ('viewport' === r) s = b(a, p);
        else {
            var l;
            'scrollParent' === r ? (l = n(o(t)), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r;
            var f = u(l, a, p);
            if ('HTML' === l.nodeName && !y(a)) {
                var m = h(),
                    c = m.height,
                    g = m.width;
                s.top += f.top - f.marginTop, s.bottom = c + f.top, s.left += f.left - f.marginLeft, s.right = g + f.left
            } else s = f
        }
        return s.left += i, s.top += i, s.right -= i, s.bottom -= i, s
    }

    function v(e) {
        var t = e.width,
            o = e.height;
        return t * o
    }

    function x(e, t, o, n, i) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto')) return e;
        var p = E(o, n, r, i),
            s = {
                top: {
                    width: p.width,
                    height: t.top - p.top
                },
                right: {
                    width: p.right - t.right,
                    height: p.height
                },
                bottom: {
                    width: p.width,
                    height: p.bottom - t.bottom
                },
                left: {
                    width: t.left - p.left,
                    height: p.height
                }
            },
            d = Object.keys(s).map(function(e) {
                return de({
                    key: e
                }, s[e], {
                    area: v(s[e])
                })
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            a = d.filter(function(e) {
                var t = e.width,
                    n = e.height;
                return t >= o.clientWidth && n >= o.clientHeight
            }),
            l = 0 < a.length ? a[0].key : d[0].key,
            f = e.split('-')[1];
        return l + (f ? '-' + f : '')
    }

    function O(e, t, o) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
            i = n ? w(t) : d(t, o);
        return u(o, i, n)
    }

    function L(e) {
        var t = getComputedStyle(e),
            o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            n = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
            i = {
                width: e.offsetWidth + n,
                height: e.offsetHeight + o
            };
        return i
    }

    function S(e) {
        var t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function T(e, t, o) {
        o = o.split('-')[0];
        var n = L(e),
            i = {
                width: n.width,
                height: n.height
            },
            r = -1 !== ['right', 'left'].indexOf(o),
            p = r ? 'top' : 'left',
            s = r ? 'left' : 'top',
            d = r ? 'height' : 'width',
            a = r ? 'width' : 'height';
        return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[S(s)], i
    }

    function D(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function C(e, t, o) {
        if (Array.prototype.findIndex) return e.findIndex(function(e) {
            return e[t] === o
        });
        var n = D(e, function(e) {
            return e[t] === o
        });
        return e.indexOf(n)
    }

    function N(t, o, n) {
        var i = void 0 === n ? t : t.slice(0, C(t, 'name', n));
        return i.forEach(function(t) {
            t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var n = t['function'] || t.fn;
            t.enabled && e(n) && (o.offsets.popper = c(o.offsets.popper), o.offsets.reference = c(o.offsets.reference), o = n(o, t))
        }), o
    }

    function k() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = O(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = x(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = T(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = N(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
        }
    }

    function P(e, t) {
        return e.some(function(e) {
            var o = e.name,
                n = e.enabled;
            return n && o === t
        })
    }

    function W(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
            var i = t[n],
                r = i ? '' + i + o : e;
            if ('undefined' != typeof document.body.style[r]) return r
        }
        return null
    }

    function B() {
        return this.state.isDestroyed = !0, P(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[W('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function H(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function A(e, t, o, i) {
        var r = 'BODY' === e.nodeName,
            p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, {
            passive: !0
        }), r || A(n(p.parentNode), t, o, i), i.push(p)
    }

    function I(e, t, o, i) {
        o.updateBound = i, H(e).addEventListener('resize', o.updateBound, {
            passive: !0
        });
        var r = n(e);
        return A(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
    }

    function M() {
        this.state.eventsEnabled || (this.state = I(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function F(e, t) {
        return H(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener('scroll', t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
    }

    function R() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = F(this.reference, this.state))
    }

    function U(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function Y(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && U(t[o]) && (n = 'px'), e.style[o] = t[o] + n
        })
    }

    function j(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = t[o];
            !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o])
        })
    }

    function q(e, t, o) {
        var n = D(e, function(e) {
                var o = e.name;
                return o === t
            }),
            i = !!n && e.some(function(e) {
                return e.name === o && e.enabled && e.order < n.order
            });
        if (!i) {
            var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
        }
        return i
    }

    function K(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e
    }

    function V(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = le.indexOf(e),
            n = le.slice(o + 1).concat(le.slice(0, o));
        return t ? n.reverse() : n
    }

    function z(e, t, o, n) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            r = +i[1],
            p = i[2];
        if (!r) return e;
        if (0 === p.indexOf('%')) {
            var s;
            switch (p) {
                case '%p':
                    s = o;
                    break;
                case '%':
                case '%r':
                default:
                    s = n;
            }
            var d = c(s);
            return d[t] / 100 * r
        }
        if ('vh' === p || 'vw' === p) {
            var a;
            return a = 'vh' === p ? Q(document.documentElement.clientHeight, window.innerHeight || 0) : Q(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
        }
        return r
    }

    function G(e, t, o, n) {
        var i = [0, 0],
            r = -1 !== ['right', 'left'].indexOf(n),
            p = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            }),
            s = p.indexOf(D(p, function(e) {
                return -1 !== e.search(/,|\s/)
            }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var d = /\s*,\s*|\s+/,
            a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
        return a = a.map(function(e, n) {
            var i = (1 === n ? !r : r) ? 'height' : 'width',
                p = !1;
            return e.reduce(function(e, t) {
                return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
            }, []).map(function(e) {
                return z(e, i, t, o)
            })
        }), a.forEach(function(e, t) {
            e.forEach(function(o, n) {
                U(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1))
            })
        }), i
    }

    function _(e, t) {
        var o, n = t.offset,
            i = e.placement,
            r = e.offsets,
            p = r.popper,
            s = r.reference,
            d = i.split('-')[0];
        return o = U(+n) ? [+n, 0] : G(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
    }
    for (var X = Math.min, J = Math.floor, Q = Math.max, Z = 'undefined' != typeof window && 'undefined' != typeof document, $ = ['Edge', 'Trident', 'Firefox'], ee = 0, te = 0; te < $.length; te += 1)
        if (Z && 0 <= navigator.userAgent.indexOf($[te])) {
            ee = 1;
            break
        }
    var i = Z && window.Promise,
        oe = i ? function(e) {
            var t = !1;
            return function() {
                t || (t = !0, window.Promise.resolve().then(function() {
                    t = !1, e()
                }))
            }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1, e()
                }, ee))
            }
        },
        ne = {},
        ie = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 'all';
            return (e = e.toString(), ne.hasOwnProperty(e)) ? ne[e] : ('11' === e ? ne[e] = -1 !== navigator.userAgent.indexOf('Trident') : '10' === e ? ne[e] = -1 !== navigator.appVersion.indexOf('MSIE 10') : 'all' === e ? ne[e] = -1 !== navigator.userAgent.indexOf('Trident') || -1 !== navigator.userAgent.indexOf('MSIE') : void 0, ne.all = ne.all || Object.keys(ne).some(function(e) {
                return ne[e]
            }), ne[e])
        },
        re = function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        },
        pe = function() {
            function e(e, t) {
                for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
            return function(t, o, n) {
                return o && e(t.prototype, o), n && e(t, n), t
            }
        }(),
        se = function(e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o, e
        },
        de = Object.assign || function(e) {
            for (var t, o = 1; o < arguments.length; o++)
                for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        },
        ae = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
        le = ae.slice(3),
        fe = {
            FLIP: 'flip',
            CLOCKWISE: 'clockwise',
            COUNTERCLOCKWISE: 'counterclockwise'
        },
        me = function() {
            function t(o, n) {
                var i = this,
                    r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                re(this, t), this.scheduleUpdate = function() {
                    return requestAnimationFrame(i.update)
                }, this.update = oe(this.update.bind(this)), this.options = de({}, t.Defaults, r), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(de({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                    i.options.modifiers[e] = de({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return de({
                        name: e
                    }, i.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(t) {
                    t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
                }), this.update();
                var p = this.options.eventsEnabled;
                p && this.enableEventListeners(), this.state.eventsEnabled = p
            }
            return pe(t, [{
                key: 'update',
                value: function() {
                    return k.call(this)
                }
            }, {
                key: 'destroy',
                value: function() {
                    return B.call(this)
                }
            }, {
                key: 'enableEventListeners',
                value: function() {
                    return M.call(this)
                }
            }, {
                key: 'disableEventListeners',
                value: function() {
                    return R.call(this)
                }
            }]), t
        }();
    return me.Utils = ('undefined' == typeof window ? global : window).PopperUtils, me.placements = ae, me.Defaults = {
        placement: 'bottom',
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement,
                        o = t.split('-')[0],
                        n = t.split('-')[1];
                    if (n) {
                        var i = e.offsets,
                            r = i.reference,
                            p = i.popper,
                            s = -1 !== ['bottom', 'top'].indexOf(o),
                            d = s ? 'left' : 'top',
                            a = s ? 'width' : 'height',
                            l = {
                                start: se({}, d, r[d]),
                                end: se({}, d, r[d] + r[a] - p[a])
                            };
                        e.offsets.popper = de({}, p, l[n])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: _,
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.boundariesElement || r(e.instance.popper);
                    e.instance.reference === o && (o = r(o));
                    var n = E(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
                    t.boundaries = n;
                    var i = t.priority,
                        p = e.offsets.popper,
                        s = {
                            primary: function(e) {
                                var o = p[e];
                                return p[e] < n[e] && !t.escapeWithReference && (o = Q(p[e], n[e])), se({}, e, o)
                            },
                            secondary: function(e) {
                                var o = 'right' === e ? 'left' : 'top',
                                    i = p[o];
                                return p[e] > n[e] && !t.escapeWithReference && (i = X(p[o], n[e] - ('right' === e ? p.width : p.height))), se({}, o, i)
                            }
                        };
                    return i.forEach(function(e) {
                        var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                        p = de({}, p, s[t](e))
                    }), e.offsets.popper = p, e
                },
                priority: ['left', 'right', 'top', 'bottom'],
                padding: 5,
                boundariesElement: 'scrollParent'
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets,
                        o = t.popper,
                        n = t.reference,
                        i = e.placement.split('-')[0],
                        r = J,
                        p = -1 !== ['top', 'bottom'].indexOf(i),
                        s = p ? 'right' : 'bottom',
                        d = p ? 'left' : 'top',
                        a = p ? 'width' : 'height';
                    return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, o) {
                    var n;
                    if (!q(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
                    var i = o.element;
                    if ('string' == typeof i) {
                        if (i = e.instance.popper.querySelector(i), !i) return e;
                    } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
                    var r = e.placement.split('-')[0],
                        p = e.offsets,
                        s = p.popper,
                        d = p.reference,
                        a = -1 !== ['left', 'right'].indexOf(r),
                        l = a ? 'height' : 'width',
                        f = a ? 'Top' : 'Left',
                        m = f.toLowerCase(),
                        h = a ? 'left' : 'top',
                        g = a ? 'bottom' : 'right',
                        u = L(i)[l];
                    d[g] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[g] - u)), d[m] + u > s[g] && (e.offsets.popper[m] += d[m] + u - s[g]), e.offsets.popper = c(e.offsets.popper);
                    var b = d[m] + d[l] / 2 - u / 2,
                        y = t(e.instance.popper),
                        w = parseFloat(y['margin' + f], 10),
                        E = parseFloat(y['border' + f + 'Width'], 10),
                        v = b - e.offsets.popper[m] - w - E;
                    return v = Q(X(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, se(n, m, Math.round(v)), se(n, h, ''), n), e
                },
                element: '[x-arrow]'
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (P(e.instance.modifiers, 'inner')) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var o = E(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                        n = e.placement.split('-')[0],
                        i = S(n),
                        r = e.placement.split('-')[1] || '',
                        p = [];
                    switch (t.behavior) {
                        case fe.FLIP:
                            p = [n, i];
                            break;
                        case fe.CLOCKWISE:
                            p = V(n);
                            break;
                        case fe.COUNTERCLOCKWISE:
                            p = V(n, !0);
                            break;
                        default:
                            p = t.behavior;
                    }
                    return p.forEach(function(s, d) {
                        if (n !== s || p.length === d + 1) return e;
                        n = e.placement.split('-')[0], i = S(n);
                        var a = e.offsets.popper,
                            l = e.offsets.reference,
                            f = J,
                            m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom),
                            h = f(a.left) < f(o.left),
                            c = f(a.right) > f(o.right),
                            g = f(a.top) < f(o.top),
                            u = f(a.bottom) > f(o.bottom),
                            b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u,
                            y = -1 !== ['top', 'bottom'].indexOf(n),
                            w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);
                        (m || b || w) && (e.flipped = !0, (m || b) && (n = p[d + 1]), w && (r = K(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = de({}, e.offsets.popper, T(e.instance.popper, e.offsets.reference, e.placement)), e = N(e.instance.modifiers, e, 'flip'))
                    }), e
                },
                behavior: 'flip',
                padding: 5,
                boundariesElement: 'viewport'
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement,
                        o = t.split('-')[0],
                        n = e.offsets,
                        i = n.popper,
                        r = n.reference,
                        p = -1 !== ['left', 'right'].indexOf(o),
                        s = -1 === ['top', 'left'].indexOf(o);
                    return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = S(t), e.offsets.popper = c(i), e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!q(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
                    var t = e.offsets.reference,
                        o = D(e.instance.modifiers, function(e) {
                            return 'preventOverflow' === e.name
                        }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.x,
                        n = t.y,
                        i = e.offsets.popper,
                        p = D(e.instance.modifiers, function(e) {
                            return 'applyStyle' === e.name
                        }).gpuAcceleration;
                    void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                    var s, d, a = void 0 === p ? t.gpuAcceleration : p,
                        l = r(e.instance.popper),
                        f = g(l),
                        m = {
                            position: i.position
                        },
                        h = {
                            left: J(i.left),
                            top: J(i.top),
                            bottom: J(i.bottom),
                            right: J(i.right)
                        },
                        c = 'bottom' === o ? 'top' : 'bottom',
                        u = 'right' === n ? 'left' : 'right',
                        b = W('transform');
                    if (d = 'bottom' == c ? -f.height + h.bottom : h.top, s = 'right' == u ? -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[u] = 0, m.willChange = 'transform';
                    else {
                        var y = 'bottom' == c ? -1 : 1,
                            w = 'right' == u ? -1 : 1;
                        m[c] = d * y, m[u] = s * w, m.willChange = c + ', ' + u
                    }
                    var E = {
                        "x-placement": e.placement
                    };
                    return e.attributes = de({}, E, e.attributes), e.styles = de({}, m, e.styles), e.arrowStyles = de({}, e.offsets.arrow, e.arrowStyles), e
                },
                gpuAcceleration: !0,
                x: 'bottom',
                y: 'right'
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return Y(e.instance.popper, e.styles), j(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && Y(e.arrowElement, e.arrowStyles), e
                },
                onLoad: function(e, t, o, n, i) {
                    var r = O(i, t, e, o.positionFixed),
                        p = x(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute('x-placement', p), Y(t, {
                        position: o.positionFixed ? 'fixed' : 'absolute'
                    }), o
                },
                gpuAcceleration: void 0
            }
        }
    }, me
});
/**!
 * lightgallery.js | 1.1.3 | February 11th 2019
 * http://sachinchoolur.github.io/lightgallery.js/
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */
! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.Lightgallery = e()
    }
}(function() {
    var e, t, s;
    return function() {
        function e(t, s, l) {
            function i(r, d) {
                if (!s[r]) {
                    if (!t[r]) {
                        var a = "function" == typeof require && require;
                        if (!d && a) return a(r, !0);
                        if (o) return o(r, !0);
                        var n = new Error("Cannot find module '" + r + "'");
                        throw n.code = "MODULE_NOT_FOUND", n
                    }
                    var u = s[r] = {
                        exports: {}
                    };
                    t[r][0].call(u.exports, function(e) {
                        return i(t[r][1][e] || e)
                    }, u, u.exports, e, t, s, l)
                }
                return s[r].exports
            }
            for (var o = "function" == typeof require && require, r = 0; r < l.length; r++) i(l[r]);
            return i
        }
        return e
    }()({
        1: [function(t, s, l) {
            ! function(t, s) {
                if ("function" == typeof e && e.amd) e(["exports"], s);
                else if (void 0 !== l) s(l);
                else {
                    var i = {
                        exports: {}
                    };
                    s(i.exports), t.lgUtils = i.exports
                }
            }(this, function(e) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var t = {
                    getAttribute: function e(t, s) {
                        return t[s]
                    },
                    setAttribute: function e(t, s, l) {
                        t[s] = l
                    },
                    wrap: function e(t, s) {
                        if (t) {
                            var l = document.createElement("div");
                            l.className = s, t.parentNode.insertBefore(l, t), t.parentNode.removeChild(t), l.appendChild(t)
                        }
                    },
                    addClass: function e(t, s) {
                        t && (t.classList ? t.classList.add(s) : t.className += " " + s)
                    },
                    removeClass: function e(t, s) {
                        t && (t.classList ? t.classList.remove(s) : t.className = t.className.replace(new RegExp("(^|\\b)" + s.split(" ").join("|") + "(\\b|$)", "gi"), " "))
                    },
                    hasClass: function e(t, s) {
                        return t.classList ? t.classList.contains(s) : new RegExp("(^| )" + s + "( |$)", "gi").test(t.className)
                    },
                    setVendor: function e(t, s, l) {
                        t && (t.style[s.charAt(0).toLowerCase() + s.slice(1)] = l, t.style["webkit" + s] = l, t.style["moz" + s] = l, t.style["ms" + s] = l, t.style["o" + s] = l)
                    },
                    trigger: function e(t, s) {
                        var l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                        if (t) {
                            var i = new CustomEvent(s, {
                                detail: l
                            });
                            t.dispatchEvent(i)
                        }
                    },
                    Listener: {
                        uid: 0
                    },
                    on: function e(s, l, i) {
                        var o = this;
                        s && l.split(" ").forEach(function(e) {
                            var l = o.getAttribute(s, "lg-event-uid") || "";
                            t.Listener.uid++, l += "&" + t.Listener.uid, o.setAttribute(s, "lg-event-uid", l), t.Listener[e + t.Listener.uid] = i, s.addEventListener(e.split(".")[0], i, !1)
                        })
                    },
                    off: function e(s, l) {
                        if (s) {
                            var i = this.getAttribute(s, "lg-event-uid");
                            if (i) {
                                i = i.split("&");
                                for (var o = 0; o < i.length; o++)
                                    if (i[o]) {
                                        var r = l + i[o];
                                        if ("." === r.substring(0, 1))
                                            for (var d in t.Listener) t.Listener.hasOwnProperty(d) && d.split(".").indexOf(r.split(".")[1]) > -1 && (s.removeEventListener(d.split(".")[0], t.Listener[d]), this.setAttribute(s, "lg-event-uid", this.getAttribute(s, "lg-event-uid").replace("&" + i[o], "")), delete t.Listener[d]);
                                        else s.removeEventListener(r.split(".")[0], t.Listener[r]), this.setAttribute(s, "lg-event-uid", this.getAttribute(s, "lg-event-uid").replace("&" + i[o], "")), delete t.Listener[r]
                                    }
                            }
                        }
                    },
                    param: function e(t) {
                        return Object.keys(t).map(function(e) {
                            return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
                        }).join("&")
                    }
                };
                e.default = t
            })
        }, {}],
        2: [function(t, s, l) {
            ! function(s, i) {
                if ("function" == typeof e && e.amd) e(["./lg-utils"], i);
                else if (void 0 !== l) i(t("./lg-utils"));
                else {
                    var o = {
                        exports: {}
                    };
                    i(s.lgUtils), s.lightgallery = o.exports
                }
            }(this, function(e) {
                "use strict";

                function t(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function s(e, t) {
                    if (this.el = e, this.s = i({}, o, t), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
                    return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in document.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.items = [], this.s.dynamic ? this.items = this.s.dynamicEl : "this" === this.s.selector ? this.items.push(this.el) : "" !== this.s.selector ? this.s.selectWithin ? this.items = document.querySelector(this.s.selectWithin).querySelectorAll(this.s.selector) : this.items = this.el.querySelectorAll(this.s.selector) : this.items = this.el.children, this.___slide = "", this.outer = "", this.init(), this
                }
                var l = t(e),
                    i = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var s = arguments[t];
                            for (var l in s) Object.prototype.hasOwnProperty.call(s, l) && (e[l] = s[l])
                        }
                        return e
                    };
                ! function() {
                    function e(e, t) {
                        t = t || {
                            bubbles: !1,
                            cancelable: !1,
                            detail: void 0
                        };
                        var s = document.createEvent("CustomEvent");
                        return s.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), s
                    }
                    if ("function" == typeof window.CustomEvent) return !1;
                    e.prototype = window.Event.prototype, window.CustomEvent = e
                }(), window.utils = l.default, window.lgData = {
                    uid: 0
                }, window.lgModules = {};
                var o = {
                    mode: "lg-slide",
                    cssEasing: "ease",
                    easing: "linear",
                    speed: 600,
                    height: "100%",
                    width: "100%",
                    addClass: "",
                    startClass: "lg-start-zoom",
                    backdropDuration: 150,
                    hideBarsDelay: 6e3,
                    useLeft: !1,
                    closable: !0,
                    loop: !0,
                    escKey: !0,
                    keyPress: !0,
                    controls: !0,
                    slideEndAnimatoin: !0,
                    hideControlOnEnd: !1,
                    mousewheel: !1,
                    getCaptionFromTitleOrAlt: !0,
                    appendSubHtmlTo: ".lg-sub-html",
                    subHtmlSelectorRelative: !1,
                    preload: 1,
                    showAfterLoad: !0,
                    selector: "",
                    selectWithin: "",
                    nextHtml: "",
                    prevHtml: "",
                    index: !1,
                    iframeMaxWidth: "100%",
                    download: !0,
                    counter: !0,
                    appendCounterTo: ".lg-toolbar",
                    swipeThreshold: 50,
                    enableSwipe: !0,
                    enableDrag: !0,
                    dynamic: !1,
                    dynamicEl: [],
                    galleryId: 1
                };
                s.prototype.init = function() {
                    var e = this;
                    e.s.preload > e.items.length && (e.s.preload = e.items.length);
                    var t = window.location.hash;
                    if (t.indexOf("lg=" + this.s.galleryId) > 0 && (e.index = parseInt(t.split("&slide=")[1], 10), l.default.addClass(document.body, "lg-from-hash"), l.default.hasClass(document.body, "lg-on") || (l.default.addClass(document.body, "lg-on"), setTimeout(function() {
                            e.build(e.index)
                        }))), e.s.dynamic) l.default.trigger(this.el, "onBeforeOpen"), e.index = e.s.index || 0, l.default.hasClass(document.body, "lg-on") || (l.default.addClass(document.body, "lg-on"), setTimeout(function() {
                        e.build(e.index)
                    }));
                    else
                        for (var s = 0; s < e.items.length; s++) ! function(t) {
                            l.default.on(e.items[t], "click.lgcustom", function(s) {
                                s.preventDefault(), l.default.trigger(e.el, "onBeforeOpen"), e.index = e.s.index || t, l.default.hasClass(document.body, "lg-on") || (e.build(e.index), l.default.addClass(document.body, "lg-on"))
                            })
                        }(s)
                }, s.prototype.build = function(e) {
                    var t = this;
                    t.structure();
                    for (var s in window.lgModules) t.modules[s] = new window.lgModules[s](t.el);
                    t.slide(e, !1, !1), t.s.keyPress && t.keyPress(), t.items.length > 1 && (t.arrow(), setTimeout(function() {
                        t.enableDrag(), t.enableSwipe()
                    }, 50), t.s.mousewheel && t.mousewheel()), t.counter(), t.closeGallery(), l.default.trigger(t.el, "onAfterOpen"), l.default.on(t.outer, "mousemove.lg click.lg touchstart.lg", function() {
                        l.default.removeClass(t.outer, "lg-hide-items"), clearTimeout(t.hideBartimeout), t.hideBartimeout = setTimeout(function() {
                            l.default.addClass(t.outer, "lg-hide-items")
                        }, t.s.hideBarsDelay)
                    })
                }, s.prototype.structure = function() {
                    var e = "",
                        t = "",
                        s = 0,
                        i = "",
                        o, r = this;
                    for (document.body.insertAdjacentHTML("beforeend", '<div class="lg-backdrop"></div>'), l.default.setVendor(document.querySelector(".lg-backdrop"), "TransitionDuration", this.s.backdropDuration + "ms"), s = 0; s < this.items.length; s++) e += '<div class="lg-item"></div>';
                    if (this.s.controls && this.items.length > 1 && (t = '<div class="lg-actions"><div class="lg-prev lg-icon">' + this.s.prevHtml + '</div><div class="lg-next lg-icon">' + this.s.nextHtml + "</div></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (i = '<div class="lg-sub-html"></div>'), o = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + e + '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' + t + i + "</div></div>", document.body.insertAdjacentHTML("beforeend", o), this.outer = document.querySelector(".lg-outer"), this.___slide = this.outer.querySelectorAll(".lg-item"), this.s.useLeft ? (l.default.addClass(this.outer, "lg-use-left"), this.s.mode = "lg-slide") : l.default.addClass(this.outer, "lg-use-css3"), r.setTop(), l.default.on(window, "resize.lg orientationchange.lg", function() {
                            setTimeout(function() {
                                r.setTop()
                            }, 100)
                        }), l.default.addClass(this.___slide[this.index], "lg-current"), this.doCss() ? l.default.addClass(this.outer, "lg-css3") : (l.default.addClass(this.outer, "lg-css"), this.s.speed = 0), l.default.addClass(this.outer, this.s.mode), this.s.enableDrag && this.items.length > 1 && l.default.addClass(this.outer, "lg-grab"), this.s.showAfterLoad && l.default.addClass(this.outer, "lg-show-after-load"), this.doCss()) {
                        var d = this.outer.querySelector(".lg-inner");
                        l.default.setVendor(d, "TransitionTimingFunction", this.s.cssEasing), l.default.setVendor(d, "TransitionDuration", this.s.speed + "ms")
                    }
                    setTimeout(function() {
                        l.default.addClass(document.querySelector(".lg-backdrop"), "in")
                    }), setTimeout(function() {
                        l.default.addClass(r.outer, "lg-visible")
                    }, this.s.backdropDuration), this.s.download && this.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend", '<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = document.documentElement.scrollTop || document.body.scrollTop
                }, s.prototype.setTop = function() {
                    if ("100%" !== this.s.height) {
                        var e = window.innerHeight,
                            t = (e - parseInt(this.s.height, 10)) / 2,
                            s = this.outer.querySelector(".lg");
                        e >= parseInt(this.s.height, 10) ? s.style.top = t + "px" : s.style.top = "0px"
                    }
                }, s.prototype.doCss = function() {
                    return !! function e() {
                        var t = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
                            s = document.documentElement,
                            l = 0;
                        for (l = 0; l < t.length; l++)
                            if (t[l] in s.style) return !0
                    }()
                }, s.prototype.isVideo = function(e, t) {
                    var s;
                    if (s = this.s.dynamic ? this.s.dynamicEl[t].html : this.items[t].getAttribute("data-html"), !e && s) return {
                        html5: !0
                    };
                    var l = e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
                        i = e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
                        o = e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
                        r = e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
                    return l ? {
                        youtube: l
                    } : i ? {
                        vimeo: i
                    } : o ? {
                        dailymotion: o
                    } : r ? {
                        vk: r
                    } : void 0
                }, s.prototype.counter = function() {
                    this.s.counter && this.outer.querySelector(this.s.appendCounterTo).insertAdjacentHTML("beforeend", '<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.items.length + "</span></div>")
                }, s.prototype.addHtml = function(e) {
                    var t = null,
                        s;
                    if (this.s.dynamic ? t = this.s.dynamicEl[e].subHtml : (s = this.items[e], t = s.getAttribute("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !t && (t = s.getAttribute("title")) && s.querySelector("img") && (t = s.querySelector("img").getAttribute("alt"))), void 0 !== t && null !== t) {
                        var i = t.substring(0, 1);
                        "." !== i && "#" !== i || (t = this.s.subHtmlSelectorRelative && !this.s.dynamic ? s.querySelector(t).innerHTML : document.querySelector(t).innerHTML)
                    } else t = "";
                    ".lg-sub-html" === this.s.appendSubHtmlTo ? this.outer.querySelector(this.s.appendSubHtmlTo).innerHTML = t : this.___slide[e].insertAdjacentHTML("beforeend", t), void 0 !== t && null !== t && ("" === t ? l.default.addClass(this.outer.querySelector(this.s.appendSubHtmlTo), "lg-empty-html") : l.default.removeClass(this.outer.querySelector(this.s.appendSubHtmlTo), "lg-empty-html")), l.default.trigger(this.el, "onAfterAppendSubHtml", {
                        index: e
                    })
                }, s.prototype.preload = function(e) {
                    var t = 1,
                        s = 1;
                    for (t = 1; t <= this.s.preload && !(t >= this.items.length - e); t++) this.loadContent(e + t, !1, 0);
                    for (s = 1; s <= this.s.preload && !(e - s < 0); s++) this.loadContent(e - s, !1, 0)
                }, s.prototype.loadContent = function(e, t, s) {
                    var i = this,
                        o = !1,
                        r, d, a, n, u, c, g = function e(t) {
                            for (var s = [], l = [], i = 0; i < t.length; i++) {
                                var o = t[i].split(" ");
                                "" === o[0] && o.splice(0, 1), l.push(o[0]), s.push(o[1])
                            }
                            for (var r = window.innerWidth, a = 0; a < s.length; a++)
                                if (parseInt(s[a], 10) > r) {
                                    d = l[a];
                                    break
                                }
                        };
                    if (i.s.dynamic) {
                        if (i.s.dynamicEl[e].poster && (o = !0, a = i.s.dynamicEl[e].poster), c = i.s.dynamicEl[e].html, d = i.s.dynamicEl[e].src, i.s.dynamicEl[e].responsive) {
                            g(i.s.dynamicEl[e].responsive.split(","))
                        }
                        n = i.s.dynamicEl[e].srcset, u = i.s.dynamicEl[e].sizes
                    } else {
                        if (i.items[e].getAttribute("data-poster") && (o = !0, a = i.items[e].getAttribute("data-poster")), c = i.items[e].getAttribute("data-html"), d = i.items[e].getAttribute("href") || i.items[e].getAttribute("data-src"), i.items[e].getAttribute("data-responsive")) {
                            g(i.items[e].getAttribute("data-responsive").split(","))
                        }
                        n = i.items[e].getAttribute("data-srcset"), u = i.items[e].getAttribute("data-sizes")
                    }
                    var f = !1;
                    i.s.dynamic ? i.s.dynamicEl[e].iframe && (f = !0) : "true" === i.items[e].getAttribute("data-iframe") && (f = !0);
                    var h = i.isVideo(d, e);
                    if (!l.default.hasClass(i.___slide[e], "lg-loaded")) {
                        if (f) i.___slide[e].insertAdjacentHTML("afterbegin", '<div class="lg-video-cont" style="max-width:' + i.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + d + '"  allowfullscreen="true"></iframe></div></div>');
                        else if (o) {
                            var m = "";
                            m = h && h.youtube ? "lg-has-youtube" : h && h.vimeo ? "lg-has-vimeo" : "lg-has-html5", i.___slide[e].insertAdjacentHTML("beforeend", '<div class="lg-video-cont ' + m + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + a + '" /></div></div>')
                        } else h ? (i.___slide[e].insertAdjacentHTML("beforeend", '<div class="lg-video-cont "><div class="lg-video"></div></div>'), l.default.trigger(i.el, "hasVideo", {
                            index: e,
                            src: d,
                            html: c
                        })) : i.___slide[e].insertAdjacentHTML("beforeend", '<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + d + '" /></div>');
                        if (l.default.trigger(i.el, "onAferAppendSlide", {
                                index: e
                            }), r = i.___slide[e].querySelector(".lg-object"), u && r.setAttribute("sizes", u), n) {
                            r.setAttribute("srcset", n);
                            try {
                                picturefill({
                                    elements: [r[0]]
                                })
                            } catch (e) {
                                console.error("Make sure you have included Picturefill version 2")
                            }
                        }
                        ".lg-sub-html" !== this.s.appendSubHtmlTo && i.addHtml(e), l.default.addClass(i.___slide[e], "lg-loaded")
                    }
                    l.default.on(i.___slide[e].querySelector(".lg-object"), "load.lg error.lg", function() {
                        var t = 0;
                        s && !l.default.hasClass(document.body, "lg-from-hash") && (t = s), setTimeout(function() {
                            l.default.addClass(i.___slide[e], "lg-complete"), l.default.trigger(i.el, "onSlideItemLoad", {
                                index: e,
                                delay: s || 0
                            })
                        }, t)
                    }), h && h.html5 && !o && l.default.addClass(i.___slide[e], "lg-complete"), !0 === t && (l.default.hasClass(i.___slide[e], "lg-complete") ? i.preload(e) : l.default.on(i.___slide[e].querySelector(".lg-object"), "load.lg error.lg", function() {
                        i.preload(e)
                    }))
                }, s.prototype.slide = function(e, t, s) {
                    for (var i = 0, o = 0; o < this.___slide.length; o++)
                        if (l.default.hasClass(this.___slide[o], "lg-current")) {
                            i = o;
                            break
                        }
                    var r = this;
                    if (!r.lGalleryOn || i !== e) {
                        var d = this.___slide.length,
                            a = r.lGalleryOn ? this.s.speed : 0,
                            n = !1,
                            u = !1;
                        if (!r.lgBusy) {
                            if (this.s.download) {
                                var c;
                                c = r.s.dynamic ? !1 !== r.s.dynamicEl[e].downloadUrl && (r.s.dynamicEl[e].downloadUrl || r.s.dynamicEl[e].src) : "false" !== r.items[e].getAttribute("data-download-url") && (r.items[e].getAttribute("data-download-url") || r.items[e].getAttribute("href") || r.items[e].getAttribute("data-src")), c ? (document.getElementById("lg-download").setAttribute("href", c), l.default.removeClass(r.outer, "lg-hide-download")) : l.default.addClass(r.outer, "lg-hide-download")
                            }
                            if (l.default.trigger(r.el, "onBeforeSlide", {
                                    prevIndex: i,
                                    index: e,
                                    fromTouch: t,
                                    fromThumb: s
                                }), r.lgBusy = !0, clearTimeout(r.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function() {
                                    r.addHtml(e)
                                }, a), this.arrowDisable(e), t) {
                                var g = e - 1,
                                    f = e + 1;
                                0 === e && i === d - 1 ? (f = 0, g = d - 1) : e === d - 1 && 0 === i && (f = 0, g = d - 1), l.default.removeClass(r.outer.querySelector(".lg-prev-slide"), "lg-prev-slide"), l.default.removeClass(r.outer.querySelector(".lg-current"), "lg-current"), l.default.removeClass(r.outer.querySelector(".lg-next-slide"), "lg-next-slide"), l.default.addClass(r.___slide[g], "lg-prev-slide"), l.default.addClass(r.___slide[f], "lg-next-slide"), l.default.addClass(r.___slide[e], "lg-current")
                            } else {
                                l.default.addClass(r.outer, "lg-no-trans");
                                for (var h = 0; h < this.___slide.length; h++) l.default.removeClass(this.___slide[h], "lg-prev-slide"), l.default.removeClass(this.___slide[h], "lg-next-slide");
                                e < i ? (u = !0, 0 !== e || i !== d - 1 || s || (u = !1, n = !0)) : e > i && (n = !0, e !== d - 1 || 0 !== i || s || (u = !0, n = !1)), u ? (l.default.addClass(this.___slide[e], "lg-prev-slide"), l.default.addClass(this.___slide[i], "lg-next-slide")) : n && (l.default.addClass(this.___slide[e], "lg-next-slide"), l.default.addClass(this.___slide[i], "lg-prev-slide")), setTimeout(function() {
                                    l.default.removeClass(r.outer.querySelector(".lg-current"), "lg-current"), l.default.addClass(r.___slide[e], "lg-current"), l.default.removeClass(r.outer, "lg-no-trans")
                                }, 50)
                            }
                            r.lGalleryOn ? (setTimeout(function() {
                                r.loadContent(e, !0, 0)
                            }, this.s.speed + 50), setTimeout(function() {
                                r.lgBusy = !1, l.default.trigger(r.el, "onAfterSlide", {
                                    prevIndex: i,
                                    index: e,
                                    fromTouch: t,
                                    fromThumb: s
                                })
                            }, this.s.speed)) : (r.loadContent(e, !0, r.s.backdropDuration), r.lgBusy = !1, l.default.trigger(r.el, "onAfterSlide", {
                                prevIndex: i,
                                index: e,
                                fromTouch: t,
                                fromThumb: s
                            })), r.lGalleryOn = !0, this.s.counter && document.getElementById("lg-counter-current") && (document.getElementById("lg-counter-current").innerHTML = e + 1)
                        }
                    }
                }, s.prototype.goToNextSlide = function(e) {
                    var t = this;
                    t.lgBusy || (t.index + 1 < t.___slide.length ? (t.index++, l.default.trigger(t.el, "onBeforeNextSlide", {
                        index: t.index
                    }), t.slide(t.index, e, !1)) : t.s.loop ? (t.index = 0, l.default.trigger(t.el, "onBeforeNextSlide", {
                        index: t.index
                    }), t.slide(t.index, e, !1)) : t.s.slideEndAnimatoin && (l.default.addClass(t.outer, "lg-right-end"), setTimeout(function() {
                        l.default.removeClass(t.outer, "lg-right-end")
                    }, 400)))
                }, s.prototype.goToPrevSlide = function(e) {
                    var t = this;
                    t.lgBusy || (t.index > 0 ? (t.index--, l.default.trigger(t.el, "onBeforePrevSlide", {
                        index: t.index,
                        fromTouch: e
                    }), t.slide(t.index, e, !1)) : t.s.loop ? (t.index = t.items.length - 1, l.default.trigger(t.el, "onBeforePrevSlide", {
                        index: t.index,
                        fromTouch: e
                    }), t.slide(t.index, e, !1)) : t.s.slideEndAnimatoin && (l.default.addClass(t.outer, "lg-left-end"), setTimeout(function() {
                        l.default.removeClass(t.outer, "lg-left-end")
                    }, 400)))
                }, s.prototype.keyPress = function() {
                    var e = this;
                    this.items.length > 1 && l.default.on(window, "keyup.lg", function(t) {
                        e.items.length > 1 && (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()), 39 === t.keyCode && (t.preventDefault(), e.goToNextSlide()))
                    }), l.default.on(window, "keydown.lg", function(t) {
                        !0 === e.s.escKey && 27 === t.keyCode && (t.preventDefault(), l.default.hasClass(e.outer, "lg-thumb-open") ? l.default.removeClass(e.outer, "lg-thumb-open") : e.destroy())
                    })
                }, s.prototype.arrow = function() {
                    var e = this;
                    l.default.on(this.outer.querySelector(".lg-prev"), "click.lg", function() {
                        e.goToPrevSlide()
                    }), l.default.on(this.outer.querySelector(".lg-next"), "click.lg", function() {
                        e.goToNextSlide()
                    })
                }, s.prototype.arrowDisable = function(e) {
                    if (!this.s.loop && this.s.hideControlOnEnd) {
                        var t = this.outer.querySelector(".lg-next"),
                            s = this.outer.querySelector(".lg-prev");
                        e + 1 < this.___slide.length ? (t.removeAttribute("disabled"), l.default.removeClass(t, "disabled")) : (t.setAttribute("disabled", "disabled"), l.default.addClass(t, "disabled")), e > 0 ? (s.removeAttribute("disabled"), l.default.removeClass(s, "disabled")) : (s.setAttribute("disabled", "disabled"), l.default.addClass(s, "disabled"))
                    }
                }, s.prototype.setTranslate = function(e, t, s) {
                    this.s.useLeft ? e.style.left = t : l.default.setVendor(e, "Transform", "translate3d(" + t + "px, " + s + "px, 0px)")
                }, s.prototype.touchMove = function(e, t) {
                    var s = t - e;
                    Math.abs(s) > 15 && (l.default.addClass(this.outer, "lg-dragging"), this.setTranslate(this.___slide[this.index], s, 0), this.setTranslate(document.querySelector(".lg-prev-slide"), -this.___slide[this.index].clientWidth + s, 0), this.setTranslate(document.querySelector(".lg-next-slide"), this.___slide[this.index].clientWidth + s, 0))
                }, s.prototype.touchEnd = function(e) {
                    var t = this;
                    "lg-slide" !== t.s.mode && l.default.addClass(t.outer, "lg-slide");
                    for (var s = 0; s < this.___slide.length; s++) l.default.hasClass(this.___slide[s], "lg-current") || l.default.hasClass(this.___slide[s], "lg-prev-slide") || l.default.hasClass(this.___slide[s], "lg-next-slide") || (this.___slide[s].style.opacity = "0");
                    setTimeout(function() {
                        l.default.removeClass(t.outer, "lg-dragging"), e < 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToNextSlide(!0) : e > 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToPrevSlide(!0) : Math.abs(e) < 5 && l.default.trigger(t.el, "onSlideClick");
                        for (var s = 0; s < t.___slide.length; s++) t.___slide[s].removeAttribute("style")
                    }), setTimeout(function() {
                        l.default.hasClass(t.outer, "lg-dragging") || "lg-slide" === t.s.mode || l.default.removeClass(t.outer, "lg-slide")
                    }, t.s.speed + 100)
                }, s.prototype.enableSwipe = function() {
                    var e = this,
                        t = 0,
                        s = 0,
                        i = !1;
                    if (e.s.enableSwipe && e.isTouch && e.doCss()) {
                        for (var o = 0; o < e.___slide.length; o++) l.default.on(e.___slide[o], "touchstart.lg", function(s) {
                            l.default.hasClass(e.outer, "lg-zoomed") || e.lgBusy || (s.preventDefault(), e.manageSwipeClass(), t = s.targetTouches[0].pageX)
                        });
                        for (var r = 0; r < e.___slide.length; r++) l.default.on(e.___slide[r], "touchmove.lg", function(o) {
                            l.default.hasClass(e.outer, "lg-zoomed") || (o.preventDefault(), s = o.targetTouches[0].pageX, e.touchMove(t, s), i = !0)
                        });
                        for (var d = 0; d < e.___slide.length; d++) l.default.on(e.___slide[d], "touchend.lg", function() {
                            l.default.hasClass(e.outer, "lg-zoomed") || (i ? (i = !1, e.touchEnd(s - t)) : l.default.trigger(e.el, "onSlideClick"))
                        })
                    }
                }, s.prototype.enableDrag = function() {
                    var e = this,
                        t = 0,
                        s = 0,
                        i = !1,
                        o = !1;
                    if (e.s.enableDrag && !e.isTouch && e.doCss()) {
                        for (var r = 0; r < e.___slide.length; r++) l.default.on(e.___slide[r], "mousedown.lg", function(s) {
                            l.default.hasClass(e.outer, "lg-zoomed") || (l.default.hasClass(s.target, "lg-object") || l.default.hasClass(s.target, "lg-video-play")) && (s.preventDefault(), e.lgBusy || (e.manageSwipeClass(), t = s.pageX, i = !0, e.outer.scrollLeft += 1, e.outer.scrollLeft -= 1, l.default.removeClass(e.outer, "lg-grab"), l.default.addClass(e.outer, "lg-grabbing"), l.default.trigger(e.el, "onDragstart")))
                        });
                        l.default.on(window, "mousemove.lg", function(r) {
                            i && (o = !0, s = r.pageX, e.touchMove(t, s), l.default.trigger(e.el, "onDragmove"))
                        }), l.default.on(window, "mouseup.lg", function(r) {
                            o ? (o = !1, e.touchEnd(s - t), l.default.trigger(e.el, "onDragend")) : (l.default.hasClass(r.target, "lg-object") || l.default.hasClass(r.target, "lg-video-play")) && l.default.trigger(e.el, "onSlideClick"), i && (i = !1, l.default.removeClass(e.outer, "lg-grabbing"), l.default.addClass(e.outer, "lg-grab"))
                        })
                    }
                }, s.prototype.manageSwipeClass = function() {
                    var e = this.index + 1,
                        t = this.index - 1,
                        s = this.___slide.length;
                    this.s.loop && (0 === this.index ? t = s - 1 : this.index === s - 1 && (e = 0));
                    for (var i = 0; i < this.___slide.length; i++) l.default.removeClass(this.___slide[i], "lg-next-slide"), l.default.removeClass(this.___slide[i], "lg-prev-slide");
                    t > -1 && l.default.addClass(this.___slide[t], "lg-prev-slide"), l.default.addClass(this.___slide[e], "lg-next-slide")
                }, s.prototype.mousewheel = function() {
                    var e = this;
                    l.default.on(e.outer, "mousewheel.lg", function(t) {
                        t.deltaY && (t.deltaY > 0 ? e.goToPrevSlide() : e.goToNextSlide(), t.preventDefault())
                    })
                }, s.prototype.closeGallery = function() {
                    var e = this,
                        t = !1;
                    l.default.on(this.outer.querySelector(".lg-close"), "click.lg", function() {
                        e.destroy()
                    }), e.s.closable && (l.default.on(e.outer, "mousedown.lg", function(e) {
                        t = !!(l.default.hasClass(e.target, "lg-outer") || l.default.hasClass(e.target, "lg-item") || l.default.hasClass(e.target, "lg-img-wrap"))
                    }), l.default.on(e.outer, "mouseup.lg", function(s) {
                        (l.default.hasClass(s.target, "lg-outer") || l.default.hasClass(s.target, "lg-item") || l.default.hasClass(s.target, "lg-img-wrap") && t) && (l.default.hasClass(e.outer, "lg-dragging") || e.destroy())
                    }))
                }, s.prototype.destroy = function(e) {
                    var t = this;
                    if (e || l.default.trigger(t.el, "onBeforeClose"), document.body.scrollTop = t.prevScrollTop, document.documentElement.scrollTop = t.prevScrollTop, e) {
                        if (!t.s.dynamic)
                            for (var s = 0; s < this.items.length; s++) l.default.off(this.items[s], ".lg"), l.default.off(this.items[s], ".lgcustom");
                        var i = t.el.getAttribute("lg-uid");
                        delete window.lgData[i], t.el.removeAttribute("lg-uid")
                    }
                    l.default.off(this.el, ".lgtm");
                    for (var o in window.lgModules) t.modules[o] && t.modules[o].destroy(e);
                    this.lGalleryOn = !1, clearTimeout(t.hideBartimeout), this.hideBartimeout = !1, l.default.off(window, ".lg"), l.default.removeClass(document.body, "lg-on"), l.default.removeClass(document.body, "lg-from-hash"), t.outer && l.default.removeClass(t.outer, "lg-visible"), l.default.removeClass(document.querySelector(".lg-backdrop"), "in"), setTimeout(function() {
                        try {
                            t.outer && t.outer.parentNode.removeChild(t.outer), document.querySelector(".lg-backdrop") && document.querySelector(".lg-backdrop").parentNode.removeChild(document.querySelector(".lg-backdrop")), e || l.default.trigger(t.el, "onCloseAfter")
                        } catch (e) {}
                    }, t.s.backdropDuration + 50)
                }, window.lightGallery = function(e, t) {
                    if (e) try {
                        if (e.getAttribute("lg-uid")) try {
                            window.lgData[e.getAttribute("lg-uid")].init()
                        } catch (e) {
                            console.error("lightGallery has not initiated properly")
                        } else {
                            var l = "lg" + window.lgData.uid++;
                            window.lgData[l] = new s(e, t), e.setAttribute("lg-uid", l)
                        }
                    } catch (e) {
                        console.error("lightGallery has not initiated properly")
                    }
                }
            })
        }, {
            "./lg-utils": 1
        }]
    }, {}, [2])(2)
});
/*!
 * Bootstrap v4.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, g, u) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function s(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }

    function e(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, i)
        }
        return n
    }

    function l(o) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? e(Object(r), !0).forEach(function(t) {
                var e, n, i;
                e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = i
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach(function(t) {
                Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return o
    }
    g = g && g.hasOwnProperty("default") ? g.default : g, u = u && u.hasOwnProperty("default") ? u.default : u;
    var n = "transitionend";

    function o(t) {
        var e = this,
            n = !1;
        return g(this).one(_.TRANSITION_END, function() {
            n = !0
        }), setTimeout(function() {
            n || _.triggerTransitionEnd(e)
        }, t), this
    }
    var _ = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
            for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
            return t
        },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(e) ? e : null
            } catch (t) {
                return null
            }
        },
        getTransitionDurationFromElement: function(t) {
            if (!t) return 0;
            var e = g(t).css("transition-duration"),
                n = g(t).css("transition-delay"),
                i = parseFloat(e),
                o = parseFloat(n);
            return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0
        },
        reflow: function(t) {
            return t.offsetHeight
        },
        triggerTransitionEnd: function(t) {
            g(t).trigger(n)
        },
        supportsTransitionEnd: function() {
            return Boolean(n)
        },
        isElement: function(t) {
            return (t[0] || t).nodeType
        },
        typeCheckConfig: function(t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        r = e[i],
                        s = r && _.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                }
            var a
        },
        findShadowRoot: function(t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
            var e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        },
        jQueryDetection: function() {
            if ("undefined" == typeof g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = g.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    _.jQueryDetection(), g.fn.emulateTransitionEnd = o, g.event.special[_.TRANSITION_END] = {
        bindType: n,
        delegateType: n,
        handle: function(t) {
            if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
        }
    };
    var r = "alert",
        a = "bs.alert",
        c = "." + a,
        h = g.fn[r],
        f = {
            CLOSE: "close" + c,
            CLOSED: "closed" + c,
            CLICK_DATA_API: "click" + c + ".data-api"
        },
        d = "alert",
        m = "fade",
        p = "show",
        v = function() {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.close = function(t) {
                var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, t.dispose = function() {
                g.removeData(this._element, a), this._element = null
            }, t._getRootElement = function(t) {
                var e = _.getSelectorFromElement(t),
                    n = !1;
                return e && (n = document.querySelector(e)), n = n || g(t).closest("." + d)[0]
            }, t._triggerCloseEvent = function(t) {
                var e = g.Event(f.CLOSE);
                return g(t).trigger(e), e
            }, t._removeElement = function(e) {
                var n = this;
                if (g(e).removeClass(p), g(e).hasClass(m)) {
                    var t = _.getTransitionDurationFromElement(e);
                    g(e).one(_.TRANSITION_END, function(t) {
                        return n._destroyElement(e, t)
                    }).emulateTransitionEnd(t)
                } else this._destroyElement(e)
            }, t._destroyElement = function(t) {
                g(t).detach().trigger(f.CLOSED).remove()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = g(this),
                        e = t.data(a);
                    e || (e = new i(this), t.data(a, e)), "close" === n && e[n](this)
                })
            }, i._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }]), i
        }();
    g(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', v._handleDismiss(new v)), g.fn[r] = v._jQueryInterface, g.fn[r].Constructor = v, g.fn[r].noConflict = function() {
        return g.fn[r] = h, v._jQueryInterface
    };
    var y = "button",
        E = "bs.button",
        C = "." + E,
        T = ".data-api",
        b = g.fn[y],
        S = "active",
        D = "btn",
        I = "focus",
        w = '[data-toggle^="button"]',
        A = '[data-toggle="buttons"]',
        N = '[data-toggle="button"]',
        O = '[data-toggle="buttons"] .btn',
        k = 'input:not([type="hidden"])',
        P = ".active",
        L = ".btn",
        j = {
            CLICK_DATA_API: "click" + C + T,
            FOCUS_BLUR_DATA_API: "focus" + C + T + " blur" + C + T,
            LOAD_DATA_API: "load" + C + T
        },
        H = function() {
            function n(t) {
                this._element = t
            }
            var t = n.prototype;
            return t.toggle = function() {
                var t = !0,
                    e = !0,
                    n = g(this._element).closest(A)[0];
                if (n) {
                    var i = this._element.querySelector(k);
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains(S)) t = !1;
                            else {
                                var o = n.querySelector(P);
                                o && g(o).removeClass(S)
                            }
                        else "checkbox" === i.type ? "LABEL" === this._element.tagName && i.checked === this._element.classList.contains(S) && (t = !1) : t = !1;
                        t && (i.checked = !this._element.classList.contains(S), g(i).trigger("change")), i.focus(), e = !1
                    }
                }
                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), t && g(this._element).toggleClass(S))
            }, t.dispose = function() {
                g.removeData(this._element, E), this._element = null
            }, n._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = g(this).data(E);
                    t || (t = new n(this), g(this).data(E, t)), "toggle" === e && t[e]()
                })
            }, s(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }]), n
        }();
    g(document).on(j.CLICK_DATA_API, w, function(t) {
        var e = t.target;
        if (g(e).hasClass(D) || (e = g(e).closest(L)[0]), !e || e.hasAttribute("disabled") || e.classList.contains("disabled")) t.preventDefault();
        else {
            var n = e.querySelector(k);
            if (n && (n.hasAttribute("disabled") || n.classList.contains("disabled"))) return void t.preventDefault();
            H._jQueryInterface.call(g(e), "toggle")
        }
    }).on(j.FOCUS_BLUR_DATA_API, w, function(t) {
        var e = g(t.target).closest(L)[0];
        g(e).toggleClass(I, /^focus(in)?$/.test(t.type))
    }), g(window).on(j.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(O)), e = 0, n = t.length; e < n; e++) {
            var i = t[e],
                o = i.querySelector(k);
            o.checked || o.hasAttribute("checked") ? i.classList.add(S) : i.classList.remove(S)
        }
        for (var r = 0, s = (t = [].slice.call(document.querySelectorAll(N))).length; r < s; r++) {
            var a = t[r];
            "true" === a.getAttribute("aria-pressed") ? a.classList.add(S) : a.classList.remove(S)
        }
    }), g.fn[y] = H._jQueryInterface, g.fn[y].Constructor = H, g.fn[y].noConflict = function() {
        return g.fn[y] = b, H._jQueryInterface
    };
    var R = "carousel",
        x = "bs.carousel",
        F = "." + x,
        U = ".data-api",
        W = g.fn[R],
        q = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        M = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        K = "next",
        Q = "prev",
        B = "left",
        V = "right",
        Y = {
            SLIDE: "slide" + F,
            SLID: "slid" + F,
            KEYDOWN: "keydown" + F,
            MOUSEENTER: "mouseenter" + F,
            MOUSELEAVE: "mouseleave" + F,
            TOUCHSTART: "touchstart" + F,
            TOUCHMOVE: "touchmove" + F,
            TOUCHEND: "touchend" + F,
            POINTERDOWN: "pointerdown" + F,
            POINTERUP: "pointerup" + F,
            DRAG_START: "dragstart" + F,
            LOAD_DATA_API: "load" + F + U,
            CLICK_DATA_API: "click" + F + U
        },
        z = "carousel",
        X = "active",
        $ = "slide",
        G = "carousel-item-right",
        J = "carousel-item-left",
        Z = "carousel-item-next",
        tt = "carousel-item-prev",
        et = "pointer-event",
        nt = ".active",
        it = ".active.carousel-item",
        ot = ".carousel-item",
        rt = ".carousel-item img",
        st = ".carousel-item-next, .carousel-item-prev",
        at = ".carousel-indicators",
        lt = "[data-slide], [data-slide-to]",
        ct = '[data-ride="carousel"]',
        ht = {
            TOUCH: "touch",
            PEN: "pen"
        },
        ut = function() {
            function r(t, e) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(at), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var t = r.prototype;
            return t.next = function() {
                this._isSliding || this._slide(K)
            }, t.nextWhenVisible = function() {
                !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next()
            }, t.prev = function() {
                this._isSliding || this._slide(Q)
            }, t.pause = function(t) {
                t || (this._isPaused = !0), this._element.querySelector(st) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, t.cycle = function(t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, t.to = function(t) {
                var e = this;
                this._activeElement = this._element.querySelector(it);
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) g(this._element).one(Y.SLID, function() {
                        return e.to(t)
                    });
                    else {
                        if (n === t) return this.pause(), void this.cycle();
                        var i = n < t ? K : Q;
                        this._slide(i, this._items[t])
                    }
            }, t.dispose = function() {
                g(this._element).off(F), g.removeData(this._element, x), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, t._getConfig = function(t) {
                return t = l({}, q, {}, t), _.typeCheckConfig(R, t, M), t
            }, t._handleSwipe = function() {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    (this.touchDeltaX = 0) < e && this.prev(), e < 0 && this.next()
                }
            }, t._addEventListeners = function() {
                var e = this;
                this._config.keyboard && g(this._element).on(Y.KEYDOWN, function(t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && g(this._element).on(Y.MOUSEENTER, function(t) {
                    return e.pause(t)
                }).on(Y.MOUSELEAVE, function(t) {
                    return e.cycle(t)
                }), this._config.touch && this._addTouchEventListeners()
            }, t._addTouchEventListeners = function() {
                var e = this;
                if (this._touchSupported) {
                    var n = function(t) {
                            e._pointerEvent && ht[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                        },
                        i = function(t) {
                            e._pointerEvent && ht[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
                                return e.cycle(t)
                            }, 500 + e._config.interval))
                        };
                    g(this._element.querySelectorAll(rt)).on(Y.DRAG_START, function(t) {
                        return t.preventDefault()
                    }), this._pointerEvent ? (g(this._element).on(Y.POINTERDOWN, function(t) {
                        return n(t)
                    }), g(this._element).on(Y.POINTERUP, function(t) {
                        return i(t)
                    }), this._element.classList.add(et)) : (g(this._element).on(Y.TOUCHSTART, function(t) {
                        return n(t)
                    }), g(this._element).on(Y.TOUCHMOVE, function(t) {
                        return function(t) {
                            t.originalEvent.touches && 1 < t.originalEvent.touches.length ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
                        }(t)
                    }), g(this._element).on(Y.TOUCHEND, function(t) {
                        return i(t)
                    }))
                }
            }, t._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, t._getItemIndex = function(t) {
                return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(ot)) : [], this._items.indexOf(t)
            }, t._getItemByDirection = function(t, e) {
                var n = t === K,
                    i = t === Q,
                    o = this._getItemIndex(e),
                    r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
                var s = (o + (t === Q ? -1 : 1)) % this._items.length;
                return -1 == s ? this._items[this._items.length - 1] : this._items[s]
            }, t._triggerSlideEvent = function(t, e) {
                var n = this._getItemIndex(t),
                    i = this._getItemIndex(this._element.querySelector(it)),
                    o = g.Event(Y.SLIDE, {
                        relatedTarget: t,
                        direction: e,
                        from: i,
                        to: n
                    });
                return g(this._element).trigger(o), o
            }, t._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    var e = [].slice.call(this._indicatorsElement.querySelectorAll(nt));
                    g(e).removeClass(X);
                    var n = this._indicatorsElement.children[this._getItemIndex(t)];
                    n && g(n).addClass(X)
                }
            }, t._slide = function(t, e) {
                var n, i, o, r = this,
                    s = this._element.querySelector(it),
                    a = this._getItemIndex(s),
                    l = e || s && this._getItemByDirection(t, s),
                    c = this._getItemIndex(l),
                    h = Boolean(this._interval);
                if (o = t === K ? (n = J, i = Z, B) : (n = G, i = tt, V), l && g(l).hasClass(X)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                    this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
                    var u = g.Event(Y.SLID, {
                        relatedTarget: l,
                        direction: o,
                        from: a,
                        to: c
                    });
                    if (g(this._element).hasClass($)) {
                        g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);
                        var f = parseInt(l.getAttribute("data-interval"), 10);
                        f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = f) : this._config.interval = this._config.defaultInterval || this._config.interval;
                        var d = _.getTransitionDurationFromElement(s);
                        g(s).one(_.TRANSITION_END, function() {
                            g(l).removeClass(n + " " + i).addClass(X), g(s).removeClass(X + " " + i + " " + n), r._isSliding = !1, setTimeout(function() {
                                return g(r._element).trigger(u)
                            }, 0)
                        }).emulateTransitionEnd(d)
                    } else g(s).removeClass(X), g(l).addClass(X), this._isSliding = !1, g(this._element).trigger(u);
                    h && this.cycle()
                }
            }, r._jQueryInterface = function(i) {
                return this.each(function() {
                    var t = g(this).data(x),
                        e = l({}, q, {}, g(this).data());
                    "object" == typeof i && (e = l({}, e, {}, i));
                    var n = "string" == typeof i ? i : e.slide;
                    if (t || (t = new r(this, e), g(this).data(x, t)), "number" == typeof i) t.to(i);
                    else if ("string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    } else e.interval && e.ride && (t.pause(), t.cycle())
                })
            }, r._dataApiClickHandler = function(t) {
                var e = _.getSelectorFromElement(this);
                if (e) {
                    var n = g(e)[0];
                    if (n && g(n).hasClass(z)) {
                        var i = l({}, g(n).data(), {}, g(this).data()),
                            o = this.getAttribute("data-slide-to");
                        o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(x).to(o), t.preventDefault()
                    }
                }
            }, s(r, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return q
                }
            }]), r
        }();
    g(document).on(Y.CLICK_DATA_API, lt, ut._dataApiClickHandler), g(window).on(Y.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(ct)), e = 0, n = t.length; e < n; e++) {
            var i = g(t[e]);
            ut._jQueryInterface.call(i, i.data())
        }
    }), g.fn[R] = ut._jQueryInterface, g.fn[R].Constructor = ut, g.fn[R].noConflict = function() {
        return g.fn[R] = W, ut._jQueryInterface
    };
    var ft = "collapse",
        dt = "bs.collapse",
        gt = "." + dt,
        _t = g.fn[ft],
        mt = {
            toggle: !0,
            parent: ""
        },
        pt = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        vt = {
            SHOW: "show" + gt,
            SHOWN: "shown" + gt,
            HIDE: "hide" + gt,
            HIDDEN: "hidden" + gt,
            CLICK_DATA_API: "click" + gt + ".data-api"
        },
        yt = "show",
        Et = "collapse",
        Ct = "collapsing",
        Tt = "collapsed",
        bt = "width",
        St = "height",
        Dt = ".show, .collapsing",
        It = '[data-toggle="collapse"]',
        wt = function() {
            function a(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(It)), i = 0, o = n.length; i < o; i++) {
                    var r = n[i],
                        s = _.getSelectorFromElement(r),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                            return t === e
                        });
                    null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var t = a.prototype;
            return t.toggle = function() {
                g(this._element).hasClass(yt) ? this.hide() : this.show()
            }, t.show = function() {
                var t, e, n = this;
                if (!this._isTransitioning && !g(this._element).hasClass(yt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Dt)).filter(function(t) {
                        return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(Et)
                    })).length && (t = null), !(t && (e = g(t).not(this._selector).data(dt)) && e._isTransitioning))) {
                    var i = g.Event(vt.SHOW);
                    if (g(this._element).trigger(i), !i.isDefaultPrevented()) {
                        t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(dt, null));
                        var o = this._getDimension();
                        g(this._element).removeClass(Et).addClass(Ct), this._element.style[o] = 0, this._triggerArray.length && g(this._triggerArray).removeClass(Tt).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                            s = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, function() {
                            g(n._element).removeClass(Ct).addClass(Et).addClass(yt), n._element.style[o] = "", n.setTransitioning(!1), g(n._element).trigger(vt.SHOWN)
                        }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px"
                    }
                }
            }, t.hide = function() {
                var t = this;
                if (!this._isTransitioning && g(this._element).hasClass(yt)) {
                    var e = g.Event(vt.HIDE);
                    if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _.reflow(this._element), g(this._element).addClass(Ct).removeClass(Et).removeClass(yt);
                        var i = this._triggerArray.length;
                        if (0 < i)
                            for (var o = 0; o < i; o++) {
                                var r = this._triggerArray[o],
                                    s = _.getSelectorFromElement(r);
                                if (null !== s) g([].slice.call(document.querySelectorAll(s))).hasClass(yt) || g(r).addClass(Tt).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var a = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, function() {
                            t.setTransitioning(!1), g(t._element).removeClass(Ct).addClass(Et).trigger(vt.HIDDEN)
                        }).emulateTransitionEnd(a)
                    }
                }
            }, t.setTransitioning = function(t) {
                this._isTransitioning = t
            }, t.dispose = function() {
                g.removeData(this._element, dt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, t._getConfig = function(t) {
                return (t = l({}, mt, {}, t)).toggle = Boolean(t.toggle), _.typeCheckConfig(ft, t, pt), t
            }, t._getDimension = function() {
                return g(this._element).hasClass(bt) ? bt : St
            }, t._getParent = function() {
                var t, n = this;
                _.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    i = [].slice.call(t.querySelectorAll(e));
                return g(i).each(function(t, e) {
                    n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
                }), t
            }, t._addAriaAndCollapsedClass = function(t, e) {
                var n = g(t).hasClass(yt);
                e.length && g(e).toggleClass(Tt, !n).attr("aria-expanded", n)
            }, a._getTargetFromElement = function(t) {
                var e = _.getSelectorFromElement(t);
                return e ? document.querySelector(e) : null
            }, a._jQueryInterface = function(i) {
                return this.each(function() {
                    var t = g(this),
                        e = t.data(dt),
                        n = l({}, mt, {}, t.data(), {}, "object" == typeof i && i ? i : {});
                    if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(dt, e)), "string" == typeof i) {
                        if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i]()
                    }
                })
            }, s(a, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return mt
                }
            }]), a
        }();
    g(document).on(vt.CLICK_DATA_API, It, function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = g(this),
            e = _.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(e));
        g(i).each(function() {
            var t = g(this),
                e = t.data(dt) ? "toggle" : n.data();
            wt._jQueryInterface.call(t, e)
        })
    }), g.fn[ft] = wt._jQueryInterface, g.fn[ft].Constructor = wt, g.fn[ft].noConflict = function() {
        return g.fn[ft] = _t, wt._jQueryInterface
    };
    var At = "dropdown",
        Nt = "bs.dropdown",
        Ot = "." + Nt,
        kt = ".data-api",
        Pt = g.fn[At],
        Lt = new RegExp("38|40|27"),
        jt = {
            HIDE: "hide" + Ot,
            HIDDEN: "hidden" + Ot,
            SHOW: "show" + Ot,
            SHOWN: "shown" + Ot,
            CLICK: "click" + Ot,
            CLICK_DATA_API: "click" + Ot + kt,
            KEYDOWN_DATA_API: "keydown" + Ot + kt,
            KEYUP_DATA_API: "keyup" + Ot + kt
        },
        Ht = "disabled",
        Rt = "show",
        xt = "dropup",
        Ft = "dropright",
        Ut = "dropleft",
        Wt = "dropdown-menu-right",
        qt = "position-static",
        Mt = '[data-toggle="dropdown"]',
        Kt = ".dropdown form",
        Qt = ".dropdown-menu",
        Bt = ".navbar-nav",
        Vt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        Yt = "top-start",
        zt = "top-end",
        Xt = "bottom-start",
        $t = "bottom-end",
        Gt = "right-start",
        Jt = "left-start",
        Zt = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        },
        te = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        },
        ee = function() {
            function c(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var t = c.prototype;
            return t.toggle = function() {
                if (!this._element.disabled && !g(this._element).hasClass(Ht)) {
                    var t = g(this._menu).hasClass(Rt);
                    c._clearMenus(), t || this.show(!0)
                }
            }, t.show = function(t) {
                if (void 0 === t && (t = !1), !(this._element.disabled || g(this._element).hasClass(Ht) || g(this._menu).hasClass(Rt))) {
                    var e = {
                            relatedTarget: this._element
                        },
                        n = g.Event(jt.SHOW, e),
                        i = c._getParentFromElement(this._element);
                    if (g(i).trigger(n), !n.isDefaultPrevented()) {
                        if (!this._inNavbar && t) {
                            if ("undefined" == typeof u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                            var o = this._element;
                            "parent" === this._config.reference ? o = i : _.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && g(i).addClass(qt), this._popper = new u(o, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === g(i).closest(Bt).length && g(document.body).children().on("mouseover", null, g.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), g(this._menu).toggleClass(Rt), g(i).toggleClass(Rt).trigger(g.Event(jt.SHOWN, e))
                    }
                }
            }, t.hide = function() {
                if (!this._element.disabled && !g(this._element).hasClass(Ht) && g(this._menu).hasClass(Rt)) {
                    var t = {
                            relatedTarget: this._element
                        },
                        e = g.Event(jt.HIDE, t),
                        n = c._getParentFromElement(this._element);
                    g(n).trigger(e), e.isDefaultPrevented() || (this._popper && this._popper.destroy(), g(this._menu).toggleClass(Rt), g(n).toggleClass(Rt).trigger(g.Event(jt.HIDDEN, t)))
                }
            }, t.dispose = function() {
                g.removeData(this._element, Nt), g(this._element).off(Ot), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, t.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, t._addEventListeners = function() {
                var e = this;
                g(this._element).on(jt.CLICK, function(t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, t._getConfig = function(t) {
                return t = l({}, this.constructor.Default, {}, g(this._element).data(), {}, t), _.typeCheckConfig(At, t, this.constructor.DefaultType), t
            }, t._getMenuElement = function() {
                if (!this._menu) {
                    var t = c._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(Qt))
                }
                return this._menu
            }, t._getPlacement = function() {
                var t = g(this._element.parentNode),
                    e = Xt;
                return t.hasClass(xt) ? (e = Yt, g(this._menu).hasClass(Wt) && (e = zt)) : t.hasClass(Ft) ? e = Gt : t.hasClass(Ut) ? e = Jt : g(this._menu).hasClass(Wt) && (e = $t), e
            }, t._detectNavbar = function() {
                return 0 < g(this._element).closest(".navbar").length
            }, t._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this._config.offset ? t.fn = function(t) {
                    return t.offsets = l({}, t.offsets, {}, e._config.offset(t.offsets, e._element) || {}), t
                } : t.offset = this._config.offset, t
            }, t._getPopperConfig = function() {
                var t = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (t.modifiers.applyStyle = {
                    enabled: !1
                }), l({}, t, {}, this._config.popperConfig)
            }, c._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = g(this).data(Nt);
                    if (t || (t = new c(this, "object" == typeof e ? e : null), g(this).data(Nt, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, c._clearMenus = function(t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var e = [].slice.call(document.querySelectorAll(Mt)), n = 0, i = e.length; n < i; n++) {
                        var o = c._getParentFromElement(e[n]),
                            r = g(e[n]).data(Nt),
                            s = {
                                relatedTarget: e[n]
                            };
                        if (t && "click" === t.type && (s.clickEvent = t), r) {
                            var a = r._menu;
                            if (g(o).hasClass(Rt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
                                var l = g.Event(jt.HIDE, s);
                                g(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), e[n].setAttribute("aria-expanded", "false"), r._popper && r._popper.destroy(), g(a).removeClass(Rt), g(o).removeClass(Rt).trigger(g.Event(jt.HIDDEN, s)))
                            }
                        }
                    }
            }, c._getParentFromElement = function(t) {
                var e, n = _.getSelectorFromElement(t);
                return n && (e = document.querySelector(n)), e || t.parentNode
            }, c._dataApiKeydownHandler = function(t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(Qt).length)) : Lt.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Ht))) {
                    var e = c._getParentFromElement(this),
                        n = g(e).hasClass(Rt);
                    if (n || 27 !== t.which)
                        if (n && (!n || 27 !== t.which && 32 !== t.which)) {
                            var i = [].slice.call(e.querySelectorAll(Vt)).filter(function(t) {
                                return g(t).is(":visible")
                            });
                            if (0 !== i.length) {
                                var o = i.indexOf(t.target);
                                38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus()
                            }
                        } else {
                            if (27 === t.which) {
                                var r = e.querySelector(Mt);
                                g(r).trigger("focus")
                            }
                            g(this).trigger("click")
                        }
                }
            }, s(c, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Zt
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return te
                }
            }]), c
        }();
    g(document).on(jt.KEYDOWN_DATA_API, Mt, ee._dataApiKeydownHandler).on(jt.KEYDOWN_DATA_API, Qt, ee._dataApiKeydownHandler).on(jt.CLICK_DATA_API + " " + jt.KEYUP_DATA_API, ee._clearMenus).on(jt.CLICK_DATA_API, Mt, function(t) {
        t.preventDefault(), t.stopPropagation(), ee._jQueryInterface.call(g(this), "toggle")
    }).on(jt.CLICK_DATA_API, Kt, function(t) {
        t.stopPropagation()
    }), g.fn[At] = ee._jQueryInterface, g.fn[At].Constructor = ee, g.fn[At].noConflict = function() {
        return g.fn[At] = Pt, ee._jQueryInterface
    };
    var ne = "modal",
        ie = "bs.modal",
        oe = "." + ie,
        re = g.fn[ne],
        se = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        ae = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        le = {
            HIDE: "hide" + oe,
            HIDE_PREVENTED: "hidePrevented" + oe,
            HIDDEN: "hidden" + oe,
            SHOW: "show" + oe,
            SHOWN: "shown" + oe,
            FOCUSIN: "focusin" + oe,
            RESIZE: "resize" + oe,
            CLICK_DISMISS: "click.dismiss" + oe,
            KEYDOWN_DISMISS: "keydown.dismiss" + oe,
            MOUSEUP_DISMISS: "mouseup.dismiss" + oe,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + oe,
            CLICK_DATA_API: "click" + oe + ".data-api"
        },
        ce = "modal-dialog-scrollable",
        he = "modal-scrollbar-measure",
        ue = "modal-backdrop",
        fe = "modal-open",
        de = "fade",
        ge = "show",
        _e = "modal-static",
        me = ".modal-dialog",
        pe = ".modal-body",
        ve = '[data-toggle="modal"]',
        ye = '[data-dismiss="modal"]',
        Ee = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        Ce = ".sticky-top",
        Te = function() {
            function o(t, e) {
                this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(me), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var t = o.prototype;
            return t.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }, t.show = function(t) {
                var e = this;
                if (!this._isShown && !this._isTransitioning) {
                    g(this._element).hasClass(de) && (this._isTransitioning = !0);
                    var n = g.Event(le.SHOW, {
                        relatedTarget: t
                    });
                    g(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), g(this._element).on(le.CLICK_DISMISS, ye, function(t) {
                        return e.hide(t)
                    }), g(this._dialog).on(le.MOUSEDOWN_DISMISS, function() {
                        g(e._element).one(le.MOUSEUP_DISMISS, function(t) {
                            g(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return e._showElement(t)
                    }))
                }
            }, t.hide = function(t) {
                var e = this;
                if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                    var n = g.Event(le.HIDE);
                    if (g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = g(this._element).hasClass(de);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), g(document).off(le.FOCUSIN), g(this._element).removeClass(ge), g(this._element).off(le.CLICK_DISMISS), g(this._dialog).off(le.MOUSEDOWN_DISMISS), i) {
                            var o = _.getTransitionDurationFromElement(this._element);
                            g(this._element).one(_.TRANSITION_END, function(t) {
                                return e._hideModal(t)
                            }).emulateTransitionEnd(o)
                        } else this._hideModal()
                    }
                }
            }, t.dispose = function() {
                [window, this._element, this._dialog].forEach(function(t) {
                    return g(t).off(oe)
                }), g(document).off(le.FOCUSIN), g.removeData(this._element, ie), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, t.handleUpdate = function() {
                this._adjustDialog()
            }, t._getConfig = function(t) {
                return t = l({}, se, {}, t), _.typeCheckConfig(ne, t, ae), t
            }, t._triggerBackdropTransition = function() {
                var t = this;
                if ("static" === this._config.backdrop) {
                    var e = g.Event(le.HIDE_PREVENTED);
                    if (g(this._element).trigger(e), e.defaultPrevented) return;
                    this._element.classList.add(_e);
                    var n = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, function() {
                        t._element.classList.remove(_e)
                    }).emulateTransitionEnd(n), this._element.focus()
                } else this.hide()
            }, t._showElement = function(t) {
                var e = this,
                    n = g(this._element).hasClass(de),
                    i = this._dialog ? this._dialog.querySelector(pe) : null;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), g(this._dialog).hasClass(ce) && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && _.reflow(this._element), g(this._element).addClass(ge), this._config.focus && this._enforceFocus();

                function o() {
                    e._config.focus && e._element.focus(), e._isTransitioning = !1, g(e._element).trigger(r)
                }
                var r = g.Event(le.SHOWN, {
                    relatedTarget: t
                });
                if (n) {
                    var s = _.getTransitionDurationFromElement(this._dialog);
                    g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(s)
                } else o()
            }, t._enforceFocus = function() {
                var e = this;
                g(document).off(le.FOCUSIN).on(le.FOCUSIN, function(t) {
                    document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus()
                })
            }, t._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? g(this._element).on(le.KEYDOWN_DISMISS, function(t) {
                    27 === t.which && e._triggerBackdropTransition()
                }) : this._isShown || g(this._element).off(le.KEYDOWN_DISMISS)
            }, t._setResizeEvent = function() {
                var e = this;
                this._isShown ? g(window).on(le.RESIZE, function(t) {
                    return e.handleUpdate(t)
                }) : g(window).off(le.RESIZE)
            }, t._hideModal = function() {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                    g(document.body).removeClass(fe), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(le.HIDDEN)
                })
            }, t._removeBackdrop = function() {
                this._backdrop && (g(this._backdrop).remove(), this._backdrop = null)
            }, t._showBackdrop = function(t) {
                var e = this,
                    n = g(this._element).hasClass(de) ? de : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = ue, n && this._backdrop.classList.add(n), g(this._backdrop).appendTo(document.body), g(this._element).on(le.CLICK_DISMISS, function(t) {
                            e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && e._triggerBackdropTransition()
                        }), n && _.reflow(this._backdrop), g(this._backdrop).addClass(ge), !t) return;
                    if (!n) return void t();
                    var i = _.getTransitionDurationFromElement(this._backdrop);
                    g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    g(this._backdrop).removeClass(ge);
                    var o = function() {
                        e._removeBackdrop(), t && t()
                    };
                    if (g(this._element).hasClass(de)) {
                        var r = _.getTransitionDurationFromElement(this._backdrop);
                        g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                    } else o()
                } else t && t()
            }, t._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, t._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, t._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function() {
                var o = this;
                if (this._isBodyOverflowing) {
                    var t = [].slice.call(document.querySelectorAll(Ee)),
                        e = [].slice.call(document.querySelectorAll(Ce));
                    g(t).each(function(t, e) {
                        var n = e.style.paddingRight,
                            i = g(e).css("padding-right");
                        g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
                    }), g(e).each(function(t, e) {
                        var n = e.style.marginRight,
                            i = g(e).css("margin-right");
                        g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight,
                        i = g(document.body).css("padding-right");
                    g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
                g(document.body).addClass(fe)
            }, t._resetScrollbar = function() {
                var t = [].slice.call(document.querySelectorAll(Ee));
                g(t).each(function(t, e) {
                    var n = g(e).data("padding-right");
                    g(e).removeData("padding-right"), e.style.paddingRight = n || ""
                });
                var e = [].slice.call(document.querySelectorAll("" + Ce));
                g(e).each(function(t, e) {
                    var n = g(e).data("margin-right");
                    "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right")
                });
                var n = g(document.body).data("padding-right");
                g(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, t._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = he, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, o._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var t = g(this).data(ie),
                        e = l({}, se, {}, g(this).data(), {}, "object" == typeof n && n ? n : {});
                    if (t || (t = new o(this, e), g(this).data(ie, t)), "string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n](i)
                    } else e.show && t.show(i)
                })
            }, s(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return se
                }
            }]), o
        }();
    g(document).on(le.CLICK_DATA_API, ve, function(t) {
        var e, n = this,
            i = _.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var o = g(e).data(ie) ? "toggle" : l({}, g(e).data(), {}, g(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var r = g(e).one(le.SHOW, function(t) {
            t.isDefaultPrevented() || r.one(le.HIDDEN, function() {
                g(n).is(":visible") && n.focus()
            })
        });
        Te._jQueryInterface.call(g(e), o, this)
    }), g.fn[ne] = Te._jQueryInterface, g.fn[ne].Constructor = Te, g.fn[ne].noConflict = function() {
        return g.fn[ne] = re, Te._jQueryInterface
    };
    var be = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Se = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        De = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Ie = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function we(t, r, e) {
        if (0 === t.length) return t;
        if (e && "function" == typeof e) return e(t);
        for (var n = (new window.DOMParser).parseFromString(t, "text/html"), s = Object.keys(r), a = [].slice.call(n.body.querySelectorAll("*")), i = function(t) {
                var e = a[t],
                    n = e.nodeName.toLowerCase();
                if (-1 === s.indexOf(e.nodeName.toLowerCase())) return e.parentNode.removeChild(e), "continue";
                var i = [].slice.call(e.attributes),
                    o = [].concat(r["*"] || [], r[n] || []);
                i.forEach(function(t) {
                    ! function(t, e) {
                        var n = t.nodeName.toLowerCase();
                        if (-1 !== e.indexOf(n)) return -1 === be.indexOf(n) || Boolean(t.nodeValue.match(De) || t.nodeValue.match(Ie));
                        for (var i = e.filter(function(t) {
                                return t instanceof RegExp
                            }), o = 0, r = i.length; o < r; o++)
                            if (n.match(i[o])) return !0;
                        return !1
                    }(t, o) && e.removeAttribute(t.nodeName)
                })
            }, o = 0, l = a.length; o < l; o++) i(o);
        return n.body.innerHTML
    }
    var Ae = "tooltip",
        Ne = "bs.tooltip",
        Oe = "." + Ne,
        ke = g.fn[Ae],
        Pe = "bs-tooltip",
        Le = new RegExp("(^|\\s)" + Pe + "\\S+", "g"),
        je = ["sanitize", "whiteList", "sanitizeFn"],
        He = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        },
        Re = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        xe = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Se,
            popperConfig: null
        },
        Fe = "show",
        Ue = "out",
        We = {
            HIDE: "hide" + Oe,
            HIDDEN: "hidden" + Oe,
            SHOW: "show" + Oe,
            SHOWN: "shown" + Oe,
            INSERTED: "inserted" + Oe,
            CLICK: "click" + Oe,
            FOCUSIN: "focusin" + Oe,
            FOCUSOUT: "focusout" + Oe,
            MOUSEENTER: "mouseenter" + Oe,
            MOUSELEAVE: "mouseleave" + Oe
        },
        qe = "fade",
        Me = "show",
        Ke = ".tooltip-inner",
        Qe = ".arrow",
        Be = "hover",
        Ve = "focus",
        Ye = "click",
        ze = "manual",
        Xe = function() {
            function i(t, e) {
                if ("undefined" == typeof u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }
            var t = i.prototype;
            return t.enable = function() {
                this._isEnabled = !0
            }, t.disable = function() {
                this._isEnabled = !1
            }, t.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, t.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var e = this.constructor.DATA_KEY,
                            n = g(t.currentTarget).data(e);
                        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (g(this.getTipElement()).hasClass(Me)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, t.dispose = function() {
                clearTimeout(this._timeout), g.removeData(this.element, this.constructor.DATA_KEY), g(this.element).off(this.constructor.EVENT_KEY), g(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && g(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, t.show = function() {
                var e = this;
                if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements");
                var t = g.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    g(this.element).trigger(t);
                    var n = _.findShadowRoot(this.element),
                        i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !i) return;
                    var o = this.getTipElement(),
                        r = _.getUID(this.constructor.NAME);
                    o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && g(o).addClass(qe);
                    var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                        a = this._getAttachment(s);
                    this.addAttachmentClass(a);
                    var l = this._getContainer();
                    g(o).data(this.constructor.DATA_KEY, this), g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l), g(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, o, this._getPopperConfig(a)), g(o).addClass(Me), "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);
                    var c = function() {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null, g(e.element).trigger(e.constructor.Event.SHOWN), t === Ue && e._leave(null, e)
                    };
                    if (g(this.tip).hasClass(qe)) {
                        var h = _.getTransitionDurationFromElement(this.tip);
                        g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h)
                    } else c()
                }
            }, t.hide = function(t) {
                function e() {
                    n._hoverState !== Fe && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), g(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
                }
                var n = this,
                    i = this.getTipElement(),
                    o = g.Event(this.constructor.Event.HIDE);
                if (g(this.element).trigger(o), !o.isDefaultPrevented()) {
                    if (g(i).removeClass(Me), "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), this._activeTrigger[Ye] = !1, this._activeTrigger[Ve] = !1, this._activeTrigger[Be] = !1, g(this.tip).hasClass(qe)) {
                        var r = _.getTransitionDurationFromElement(i);
                        g(i).one(_.TRANSITION_END, e).emulateTransitionEnd(r)
                    } else e();
                    this._hoverState = ""
                }
            }, t.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, t.isWithContent = function() {
                return Boolean(this.getTitle())
            }, t.addAttachmentClass = function(t) {
                g(this.getTipElement()).addClass(Pe + "-" + t)
            }, t.getTipElement = function() {
                return this.tip = this.tip || g(this.config.template)[0], this.tip
            }, t.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(g(t.querySelectorAll(Ke)), this.getTitle()), g(t).removeClass(qe + " " + Me)
            }, t.setElementContent = function(t, e) {
                "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = we(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text())
            }, t.getTitle = function() {
                var t = this.element.getAttribute("data-original-title");
                return t = t || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
            }, t._getPopperConfig = function(t) {
                var e = this;
                return l({}, {
                    placement: t,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: Qe
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(t) {
                        t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                    },
                    onUpdate: function(t) {
                        return e._handlePopperPlacementChange(t)
                    }
                }, {}, this.config.popperConfig)
            }, t._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this.config.offset ? t.fn = function(t) {
                    return t.offsets = l({}, t.offsets, {}, e.config.offset(t.offsets, e.element) || {}), t
                } : t.offset = this.config.offset, t
            }, t._getContainer = function() {
                return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container)
            }, t._getAttachment = function(t) {
                return Re[t.toUpperCase()]
            }, t._setListeners = function() {
                var i = this;
                this.config.trigger.split(" ").forEach(function(t) {
                    if ("click" === t) g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
                        return i.toggle(t)
                    });
                    else if (t !== ze) {
                        var e = t === Be ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = t === Be ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        g(i.element).on(e, i.config.selector, function(t) {
                            return i._enter(t)
                        }).on(n, i.config.selector, function(t) {
                            return i._leave(t)
                        })
                    }
                }), this._hideModalHandler = function() {
                    i.element && i.hide()
                }, g(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = l({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, t._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                !this.element.getAttribute("title") && "string" == t || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, t._enter = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Ve : Be] = !0), g(e.getTipElement()).hasClass(Me) || e._hoverState === Fe ? e._hoverState = Fe : (clearTimeout(e._timeout), e._hoverState = Fe, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                    e._hoverState === Fe && e.show()
                }, e.config.delay.show) : e.show())
            }, t._leave = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Ve : Be] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = Ue, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                    e._hoverState === Ue && e.hide()
                }, e.config.delay.hide) : e.hide())
            }, t._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, t._getConfig = function(t) {
                var e = g(this.element).data();
                return Object.keys(e).forEach(function(t) {
                    -1 !== je.indexOf(t) && delete e[t]
                }), "number" == typeof(t = l({}, this.constructor.Default, {}, e, {}, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _.typeCheckConfig(Ae, t, this.constructor.DefaultType), t.sanitize && (t.template = we(t.template, t.whiteList, t.sanitizeFn)), t
            }, t._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, t._cleanTipClass = function() {
                var t = g(this.getTipElement()),
                    e = t.attr("class").match(Le);
                null !== e && e.length && t.removeClass(e.join(""))
            }, t._handlePopperPlacementChange = function(t) {
                var e = t.instance;
                this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, t._fixTransition = function() {
                var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("x-placement") && (g(t).removeClass(qe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = g(this).data(Ne),
                        e = "object" == typeof n && n;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ne, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return xe
                }
            }, {
                key: "NAME",
                get: function() {
                    return Ae
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Ne
                }
            }, {
                key: "Event",
                get: function() {
                    return We
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Oe
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return He
                }
            }]), i
        }();
    g.fn[Ae] = Xe._jQueryInterface, g.fn[Ae].Constructor = Xe, g.fn[Ae].noConflict = function() {
        return g.fn[Ae] = ke, Xe._jQueryInterface
    };
    var $e = "popover",
        Ge = "bs.popover",
        Je = "." + Ge,
        Ze = g.fn[$e],
        tn = "bs-popover",
        en = new RegExp("(^|\\s)" + tn + "\\S+", "g"),
        nn = l({}, Xe.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        on = l({}, Xe.DefaultType, {
            content: "(string|element|function)"
        }),
        rn = "fade",
        sn = "show",
        an = ".popover-header",
        ln = ".popover-body",
        cn = {
            HIDE: "hide" + Je,
            HIDDEN: "hidden" + Je,
            SHOW: "show" + Je,
            SHOWN: "shown" + Je,
            INSERTED: "inserted" + Je,
            CLICK: "click" + Je,
            FOCUSIN: "focusin" + Je,
            FOCUSOUT: "focusout" + Je,
            MOUSEENTER: "mouseenter" + Je,
            MOUSELEAVE: "mouseleave" + Je
        },
        hn = function(t) {
            function i() {
                return t.apply(this, arguments) || this
            }! function(t, e) {
                t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
            }(i, t);
            var e = i.prototype;
            return e.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, e.addAttachmentClass = function(t) {
                g(this.getTipElement()).addClass(tn + "-" + t)
            }, e.getTipElement = function() {
                return this.tip = this.tip || g(this.config.template)[0], this.tip
            }, e.setContent = function() {
                var t = g(this.getTipElement());
                this.setElementContent(t.find(an), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(ln), e), t.removeClass(rn + " " + sn)
            }, e._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, e._cleanTipClass = function() {
                var t = g(this.getTipElement()),
                    e = t.attr("class").match(en);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = g(this).data(Ge),
                        e = "object" == typeof n ? n : null;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ge, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return nn
                }
            }, {
                key: "NAME",
                get: function() {
                    return $e
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Ge
                }
            }, {
                key: "Event",
                get: function() {
                    return cn
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Je
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return on
                }
            }]), i
        }(Xe);
    g.fn[$e] = hn._jQueryInterface, g.fn[$e].Constructor = hn, g.fn[$e].noConflict = function() {
        return g.fn[$e] = Ze, hn._jQueryInterface
    };
    var un = "scrollspy",
        fn = "bs.scrollspy",
        dn = "." + fn,
        gn = g.fn[un],
        _n = {
            offset: 10,
            method: "auto",
            target: ""
        },
        mn = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        pn = {
            ACTIVATE: "activate" + dn,
            SCROLL: "scroll" + dn,
            LOAD_DATA_API: "load" + dn + ".data-api"
        },
        vn = "dropdown-item",
        yn = "active",
        En = '[data-spy="scroll"]',
        Cn = ".nav, .list-group",
        Tn = ".nav-link",
        bn = ".nav-item",
        Sn = ".list-group-item",
        Dn = ".dropdown",
        In = ".dropdown-item",
        wn = ".dropdown-toggle",
        An = "offset",
        Nn = "position",
        On = function() {
            function n(t, e) {
                var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + Tn + "," + this._config.target + " " + Sn + "," + this._config.target + " " + In, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, g(this._scrollElement).on(pn.SCROLL, function(t) {
                    return n._process(t)
                }), this.refresh(), this._process()
            }
            var t = n.prototype;
            return t.refresh = function() {
                var e = this,
                    t = this._scrollElement === this._scrollElement.window ? An : Nn,
                    o = "auto" === this._config.method ? t : this._config.method,
                    r = o === Nn ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                    var e, n = _.getSelectorFromElement(t);
                    if (n && (e = document.querySelector(n)), e) {
                        var i = e.getBoundingClientRect();
                        if (i.width || i.height) return [g(e)[o]().top + r, n]
                    }
                    return null
                }).filter(function(t) {
                    return t
                }).sort(function(t, e) {
                    return t[0] - e[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, t.dispose = function() {
                g.removeData(this._element, fn), g(this._scrollElement).off(dn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, t._getConfig = function(t) {
                if ("string" != typeof(t = l({}, _n, {}, "object" == typeof t && t ? t : {})).target) {
                    var e = g(t.target).attr("id");
                    e || (e = _.getUID(un), g(t.target).attr("id", e)), t.target = "#" + e
                }
                return _.typeCheckConfig(un, t, mn), t
            }, t._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, t._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, t._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, t._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), n <= t) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) {
                        this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                    }
                }
            }, t._activate = function(e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",").map(function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    }),
                    n = g([].slice.call(document.querySelectorAll(t.join(","))));
                n.hasClass(vn) ? (n.closest(Dn).find(wn).addClass(yn), n.addClass(yn)) : (n.addClass(yn), n.parents(Cn).prev(Tn + ", " + Sn).addClass(yn), n.parents(Cn).prev(bn).children(Tn).addClass(yn)), g(this._scrollElement).trigger(pn.ACTIVATE, {
                    relatedTarget: e
                })
            }, t._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) {
                    return t.classList.contains(yn)
                }).forEach(function(t) {
                    return t.classList.remove(yn)
                })
            }, n._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = g(this).data(fn);
                    if (t || (t = new n(this, "object" == typeof e && e), g(this).data(fn, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, s(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return _n
                }
            }]), n
        }();
    g(window).on(pn.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(En)), e = t.length; e--;) {
            var n = g(t[e]);
            On._jQueryInterface.call(n, n.data())
        }
    }), g.fn[un] = On._jQueryInterface, g.fn[un].Constructor = On, g.fn[un].noConflict = function() {
        return g.fn[un] = gn, On._jQueryInterface
    };
    var kn = "bs.tab",
        Pn = "." + kn,
        Ln = g.fn.tab,
        jn = {
            HIDE: "hide" + Pn,
            HIDDEN: "hidden" + Pn,
            SHOW: "show" + Pn,
            SHOWN: "shown" + Pn,
            CLICK_DATA_API: "click" + Pn + ".data-api"
        },
        Hn = "dropdown-menu",
        Rn = "active",
        xn = "disabled",
        Fn = "fade",
        Un = "show",
        Wn = ".dropdown",
        qn = ".nav, .list-group",
        Mn = ".active",
        Kn = "> li > .active",
        Qn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        Bn = ".dropdown-toggle",
        Vn = "> .dropdown-menu .active",
        Yn = function() {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.show = function() {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Rn) || g(this._element).hasClass(xn))) {
                    var t, i, e = g(this._element).closest(qn)[0],
                        o = _.getSelectorFromElement(this._element);
                    if (e) {
                        var r = "UL" === e.nodeName || "OL" === e.nodeName ? Kn : Mn;
                        i = (i = g.makeArray(g(e).find(r)))[i.length - 1]
                    }
                    var s = g.Event(jn.HIDE, {
                            relatedTarget: this._element
                        }),
                        a = g.Event(jn.SHOW, {
                            relatedTarget: i
                        });
                    if (i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        o && (t = document.querySelector(o)), this._activate(this._element, e);
                        var l = function() {
                            var t = g.Event(jn.HIDDEN, {
                                    relatedTarget: n._element
                                }),
                                e = g.Event(jn.SHOWN, {
                                    relatedTarget: i
                                });
                            g(i).trigger(t), g(n._element).trigger(e)
                        };
                        t ? this._activate(t, t.parentNode, l) : l()
                    }
                }
            }, t.dispose = function() {
                g.removeData(this._element, kn), this._element = null
            }, t._activate = function(t, e, n) {
                function i() {
                    return o._transitionComplete(t, r, n)
                }
                var o = this,
                    r = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Mn) : g(e).find(Kn))[0],
                    s = n && r && g(r).hasClass(Fn);
                if (r && s) {
                    var a = _.getTransitionDurationFromElement(r);
                    g(r).removeClass(Un).one(_.TRANSITION_END, i).emulateTransitionEnd(a)
                } else i()
            }, t._transitionComplete = function(t, e, n) {
                if (e) {
                    g(e).removeClass(Rn);
                    var i = g(e.parentNode).find(Vn)[0];
                    i && g(i).removeClass(Rn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                }
                if (g(t).addClass(Rn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), t.classList.contains(Fn) && t.classList.add(Un), t.parentNode && g(t.parentNode).hasClass(Hn)) {
                    var o = g(t).closest(Wn)[0];
                    if (o) {
                        var r = [].slice.call(o.querySelectorAll(Bn));
                        g(r).addClass(Rn)
                    }
                    t.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = g(this),
                        e = t.data(kn);
                    if (e || (e = new i(this), t.data(kn, e)), "string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }]), i
        }();
    g(document).on(jn.CLICK_DATA_API, Qn, function(t) {
        t.preventDefault(), Yn._jQueryInterface.call(g(this), "show")
    }), g.fn.tab = Yn._jQueryInterface, g.fn.tab.Constructor = Yn, g.fn.tab.noConflict = function() {
        return g.fn.tab = Ln, Yn._jQueryInterface
    };
    var zn = "toast",
        Xn = "bs.toast",
        $n = "." + Xn,
        Gn = g.fn[zn],
        Jn = {
            CLICK_DISMISS: "click.dismiss" + $n,
            HIDE: "hide" + $n,
            HIDDEN: "hidden" + $n,
            SHOW: "show" + $n,
            SHOWN: "shown" + $n
        },
        Zn = "fade",
        ti = "hide",
        ei = "show",
        ni = "showing",
        ii = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        oi = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        ri = '[data-dismiss="toast"]',
        si = function() {
            function i(t, e) {
                this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
            }
            var t = i.prototype;
            return t.show = function() {
                var t = this,
                    e = g.Event(Jn.SHOW);
                if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
                    this._config.animation && this._element.classList.add(Zn);
                    var n = function() {
                        t._element.classList.remove(ni), t._element.classList.add(ei), g(t._element).trigger(Jn.SHOWN), t._config.autohide && (t._timeout = setTimeout(function() {
                            t.hide()
                        }, t._config.delay))
                    };
                    if (this._element.classList.remove(ti), _.reflow(this._element), this._element.classList.add(ni), this._config.animation) {
                        var i = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, n).emulateTransitionEnd(i)
                    } else n()
                }
            }, t.hide = function() {
                if (this._element.classList.contains(ei)) {
                    var t = g.Event(Jn.HIDE);
                    g(this._element).trigger(t), t.isDefaultPrevented() || this._close()
                }
            }, t.dispose = function() {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(ei) && this._element.classList.remove(ei), g(this._element).off(Jn.CLICK_DISMISS), g.removeData(this._element, Xn), this._element = null, this._config = null
            }, t._getConfig = function(t) {
                return t = l({}, oi, {}, g(this._element).data(), {}, "object" == typeof t && t ? t : {}), _.typeCheckConfig(zn, t, this.constructor.DefaultType), t
            }, t._setListeners = function() {
                var t = this;
                g(this._element).on(Jn.CLICK_DISMISS, ri, function() {
                    return t.hide()
                })
            }, t._close = function() {
                function t() {
                    e._element.classList.add(ti), g(e._element).trigger(Jn.HIDDEN)
                }
                var e = this;
                if (this._element.classList.remove(ei), this._config.animation) {
                    var n = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, t).emulateTransitionEnd(n)
                } else t()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = g(this),
                        e = t.data(Xn);
                    if (e || (e = new i(this, "object" == typeof n && n), t.data(Xn, e)), "string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n](this)
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return ii
                }
            }, {
                key: "Default",
                get: function() {
                    return oi
                }
            }]), i
        }();
    g.fn[zn] = si._jQueryInterface, g.fn[zn].Constructor = si, g.fn[zn].noConflict = function() {
        return g.fn[zn] = Gn, si._jQueryInterface
    }, t.Alert = v, t.Button = H, t.Carousel = ut, t.Collapse = wt, t.Dropdown = ee, t.Modal = Te, t.Popover = hn, t.Scrollspy = On, t.Tab = Yn, t.Toast = si, t.Tooltip = Xe, t.Util = _, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=bootstrap.min.js.map
/*!
 * bsCustomFileInput v1.3.2 (https://github.com/Johann-S/bs-custom-file-input)
 * Copyright 2018 - 2019 Johann-S <johann.servoire@gmail.com>
 * Licensed under MIT (https://github.com/Johann-S/bs-custom-file-input/blob/master/LICENSE)
 */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).bsCustomFileInput = t()
}(this, function() {
    "use strict";
    var d = {
            CUSTOMFILE: '.custom-file input[type="file"]',
            CUSTOMFILELABEL: ".custom-file-label",
            FORM: "form",
            INPUT: "input"
        },
        r = function(e) {
            if (0 < e.childNodes.length)
                for (var t = [].slice.call(e.childNodes), n = 0; n < t.length; n++) {
                    var r = t[n];
                    if (3 !== r.nodeType) return r
                }
            return e
        },
        u = function(e) {
            var t = e.bsCustomFileInput.defaultText,
                n = e.parentNode.querySelector(d.CUSTOMFILELABEL);
            n && (r(n).innerHTML = t)
        },
        n = !!window.File,
        l = function(e) {
            if (e.hasAttribute("multiple") && n) return [].slice.call(e.files).map(function(e) {
                return e.name
            }).join(", ");
            if (-1 === e.value.indexOf("fakepath")) return e.value;
            var t = e.value.split("\\");
            return t[t.length - 1]
        };

    function v() {
        var e = this.parentNode.querySelector(d.CUSTOMFILELABEL);
        if (e) {
            var t = r(e),
                n = l(this);
            n.length ? t.innerHTML = n : u(this)
        }
    }

    function p() {
        for (var e = [].slice.call(this.querySelectorAll(d.INPUT)).filter(function(e) {
                return !!e.bsCustomFileInput
            }), t = 0, n = e.length; t < n; t++) u(e[t])
    }
    var m = "bsCustomFileInput",
        L = "reset",
        h = "change";
    return {
        init: function(e, t) {
            void 0 === e && (e = d.CUSTOMFILE), void 0 === t && (t = d.FORM);
            for (var n, r, l, i = [].slice.call(document.querySelectorAll(e)), o = [].slice.call(document.querySelectorAll(t)), u = 0, c = i.length; u < c; u++) {
                var f = i[u];
                Object.defineProperty(f, m, {
                    value: {
                        defaultText: (n = f, r = void 0, void 0, r = "", l = n.parentNode.querySelector(d.CUSTOMFILELABEL), l && (r = l.innerHTML), r)
                    },
                    writable: !0
                }), v.call(f), f.addEventListener(h, v)
            }
            for (var a = 0, s = o.length; a < s; a++) o[a].addEventListener(L, p), Object.defineProperty(o[a], m, {
                value: !0,
                writable: !0
            })
        },
        destroy: function() {
            for (var e = [].slice.call(document.querySelectorAll(d.FORM)).filter(function(e) {
                    return !!e.bsCustomFileInput
                }), t = [].slice.call(document.querySelectorAll(d.INPUT)).filter(function(e) {
                    return !!e.bsCustomFileInput
                }), n = 0, r = t.length; n < r; n++) {
                var l = t[n];
                u(l), l[m] = void 0, l.removeEventListener(h, v)
            }
            for (var i = 0, o = e.length; i < o; i++) e[i].removeEventListener(L, p), e[i][m] = void 0
        }
    }
});

var u = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

function v() {
    v = function() {}, u.Symbol || (u.Symbol = A)
}
var B = 0;

function A(t) {
    return "jscomp_symbol_" + (t || "") + B++
}! function(t) {
    function i(n) {
        if (e[n]) return e[n].T;
        var s = e[n] = {
            ja: n,
            fa: !1,
            T: {}
        };
        return t[n].call(s.T, s, s.T, i), s.fa = !0, s.T
    }
    var e = {};
    i.u = t, i.h = e, i.c = function(t, e, n) {
        i.g(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(t) {
        v(), v(), "undefined" != typeof Symbol && Symbol.toStringTag && (v(), Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        })), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.m = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.ba) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var s in t) i.c(n, s, function(i) {
                return t[i]
            }.bind(null, s));
        return n
    }, i.i = function(t) {
        var e = t && t.ba ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.c(e, "a", e), e
    }, i.g = function(t, i) {
        return Object.prototype.hasOwnProperty.call(t, i)
    }, i.o = "", i(i.v = 0)
}([function(t, i, e) {
    function n(t, i) {
        if (i = void 0 === i ? {} : i, this.h = t, this.g = this.g.bind(this), !a(this.h)) throw new TypeError("`new Drift` requires a DOM element as its first argument.");
        t = i.namespace || null;
        var e = i.showWhitespaceAtEdges || !1,
            n = i.containInline || !1,
            s = i.inlineOffsetX || 0,
            o = i.inlineOffsetY || 0,
            h = i.inlineContainer || document.body,
            r = i.sourceAttribute || "data-zoom",
            d = i.zoomFactor || 3,
            u = void 0 === i.paneContainer ? document.body : i.paneContainer,
            c = i.inlinePane || 375,
            f = !("handleTouch" in i) || !!i.handleTouch,
            p = i.onShow || null,
            l = i.onHide || null,
            b = !("injectBaseStyles" in i) || !!i.injectBaseStyles,
            v = i.hoverDelay || 0,
            m = i.touchDelay || 0,
            y = i.hoverBoundingBox || !1,
            g = i.touchBoundingBox || !1;
        if (i = i.boundingBoxContainer || document.body, !0 !== c && !a(u)) throw new TypeError("`paneContainer` must be a DOM element when `inlinePane !== true`");
        if (!a(h)) throw new TypeError("`inlineContainer` must be a DOM element");
        this.a = {
            j: t,
            P: e,
            I: n,
            K: s,
            L: o,
            w: h,
            R: r,
            f: d,
            ga: u,
            ea: c,
            C: f,
            O: p,
            N: l,
            da: b,
            F: v,
            A: m,
            D: y,
            G: g,
            H: i
        }, this.a.da && !document.querySelector(".drift-base-styles") && ((i = document.createElement("style")).type = "text/css", i.classList.add("drift-base-styles"), i.appendChild(document.createTextNode(".drift-bounding-box,.drift-zoom-pane{position:absolute;pointer-events:none}@keyframes noop{0%{zoom:1}}@-webkit-keyframes noop{0%{zoom:1}}.drift-zoom-pane.drift-open{display:block}.drift-zoom-pane.drift-closing,.drift-zoom-pane.drift-opening{animation:noop 1ms;-webkit-animation:noop 1ms}.drift-zoom-pane{overflow:hidden;width:100%;height:100%;top:0;left:0}.drift-zoom-pane-loader{display:none}.drift-zoom-pane img{position:absolute;display:block;max-width:none;max-height:none}")), (t = document.head).insertBefore(i, t.firstChild)), this.v(), this.u()
    }

    function s(t) {
        t = void 0 === t ? {} : t, this.h = this.h.bind(this), this.g = this.g.bind(this), this.m = this.m.bind(this), this.s = !1;
        var i = void 0 === t.J ? null : t.J,
            e = void 0 === t.f ? c() : t.f,
            n = void 0 === t.U ? c() : t.U,
            s = void 0 === t.j ? null : t.j,
            o = void 0 === t.P ? c() : t.P,
            h = void 0 === t.I ? c() : t.I;
        this.a = {
            J: i,
            f: e,
            U: n,
            j: s,
            P: o,
            I: h,
            K: void 0 === t.K ? 0 : t.K,
            L: void 0 === t.L ? 0 : t.L,
            w: void 0 === t.w ? document.body : t.w
        }, this.o = this.i("open"), this.Y = this.i("opening"), this.u = this.i("closing"), this.v = this.i("inline"), this.V = this.i("loading"), this.ha()
    }

    function o(t) {
        t = void 0 === t ? {} : t, this.m = this.m.bind(this), this.B = this.B.bind(this), this.g = this.g.bind(this), this.c = this.c.bind(this);
        var i = t;
        t = void 0 === i.b ? c() : i.b;
        var e = void 0 === i.l ? c() : i.l,
            n = void 0 === i.R ? c() : i.R,
            s = void 0 === i.C ? c() : i.C,
            o = void 0 === i.O ? null : i.O,
            a = void 0 === i.N ? null : i.N,
            r = void 0 === i.F ? 0 : i.F,
            d = void 0 === i.A ? 0 : i.A,
            u = void 0 === i.D ? c() : i.D,
            f = void 0 === i.G ? c() : i.G,
            p = void 0 === i.j ? null : i.j,
            l = void 0 === i.f ? c() : i.f;
        i = void 0 === i.H ? c() : i.H, this.a = {
            b: t,
            l: e,
            R: n,
            C: s,
            O: o,
            N: a,
            F: r,
            A: d,
            D: u,
            G: f,
            j: p,
            f: l,
            H: i
        }, (this.a.D || this.a.G) && (this.o = new h({
            j: this.a.j,
            f: this.a.f,
            S: this.a.H
        })), this.enabled = !0, this.M()
    }

    function h(t) {
        this.s = !1;
        var i = void 0 === t.j ? null : t.j,
            e = void 0 === t.f ? c() : t.f;
        t = void 0 === t.S ? c() : t.S, this.a = {
            j: i,
            f: e,
            S: t
        }, this.c = this.g("open"), this.h()
    }

    function a(t) {
        return f ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
    }

    function r(t, i) {
        i.forEach(function(i) {
            t.classList.add(i)
        })
    }

    function d(t, i) {
        i.forEach(function(i) {
            t.classList.remove(i)
        })
    }

    function c() {
        throw Error("Missing parameter")
    }
    e.r(i);
    var f = "object" == typeof HTMLElement;
    h.prototype.g = function(t) {
        var i = ["drift-" + t],
            e = this.a.j;
        return e && i.push(e + "-" + t), i
    }, h.prototype.h = function() {
        this.b = document.createElement("div"), r(this.b, this.g("bounding-box"))
    }, h.prototype.show = function(t, i) {
        this.s = !0, this.a.S.appendChild(this.b);
        var e = this.b.style;
        e.width = Math.round(t / this.a.f) + "px", e.height = Math.round(i / this.a.f) + "px", r(this.b, this.c)
    }, h.prototype.W = function() {
        this.s && this.a.S.removeChild(this.b), this.s = !1, d(this.b, this.c)
    }, h.prototype.setPosition = function(t, i, e) {
        var n = window.pageXOffset,
            s = window.pageYOffset;
        t = e.left + t * e.width - this.b.clientWidth / 2 + n, i = e.top + i * e.height - this.b.clientHeight / 2 + s, t < e.left + n ? t = e.left + n : t + this.b.clientWidth > e.left + e.width + n && (t = e.left + e.width - this.b.clientWidth + n), i < e.top + s ? i = e.top + s : i + this.b.clientHeight > e.top + e.height + s && (i = e.top + e.height - this.b.clientHeight + s), this.b.style.left = t + "px", this.b.style.top = i + "px"
    }, o.prototype.i = function(t) {
        t.preventDefault()
    }, o.prototype.u = function(t) {
        this.a.A && this.V(t) && !this.s || t.preventDefault()
    }, o.prototype.V = function(t) {
        return !!t.touches
    }, o.prototype.M = function() {
        this.a.b.addEventListener("mouseenter", this.g, !1), this.a.b.addEventListener("mouseleave", this.B, !1), this.a.b.addEventListener("mousemove", this.c, !1), this.a.C ? (this.a.b.addEventListener("touchstart", this.g, !1), this.a.b.addEventListener("touchend", this.B, !1), this.a.b.addEventListener("touchmove", this.c, !1)) : (this.a.b.addEventListener("touchstart", this.i, !1), this.a.b.addEventListener("touchend", this.i, !1), this.a.b.addEventListener("touchmove", this.i, !1))
    }, o.prototype.ca = function() {
        this.a.b.removeEventListener("mouseenter", this.g, !1), this.a.b.removeEventListener("mouseleave", this.B, !1), this.a.b.removeEventListener("mousemove", this.c, !1), this.a.C ? (this.a.b.removeEventListener("touchstart", this.g, !1), this.a.b.removeEventListener("touchend", this.B, !1), this.a.b.removeEventListener("touchmove", this.c, !1)) : (this.a.b.removeEventListener("touchstart", this.i, !1), this.a.b.removeEventListener("touchend", this.i, !1), this.a.b.removeEventListener("touchmove", this.i, !1))
    }, o.prototype.g = function(t) {
        this.u(t), this.h = t, "mouseenter" == t.type && this.a.F ? this.v = setTimeout(this.m, this.a.F) : this.a.A ? this.v = setTimeout(this.m, this.a.A) : this.m()
    }, o.prototype.m = function() {
        if (this.enabled) {
            var t = this.a.O;
            t && "function" == typeof t && t(), this.a.l.show(this.a.b.getAttribute(this.a.R), this.a.b.clientWidth, this.a.b.clientHeight), this.h && ((t = this.h.touches) && this.a.G || !t && this.a.D) && this.o.show(this.a.l.b.clientWidth, this.a.l.b.clientHeight), this.c()
        }
    }, o.prototype.B = function(t) {
        t && this.u(t), this.h = null, this.v && clearTimeout(this.v), this.o && this.o.W(), (t = this.a.N) && "function" == typeof t && t(), this.a.l.W()
    }, o.prototype.c = function(t) {
        if (t) this.u(t), this.h = t;
        else {
            if (!this.h) return;
            t = this.h
        }
        if (t.touches) var i = (t = t.touches[0]).clientX,
            e = t.clientY;
        else i = t.clientX, e = t.clientY;
        i = (i - (t = this.a.b.getBoundingClientRect()).left) / this.a.b.clientWidth, e = (e - t.top) / this.a.b.clientHeight, this.o && this.o.setPosition(i, e, t), this.a.l.setPosition(i, e, t)
    }, u.Object.defineProperties(o.prototype, {
        s: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.a.l.s
            }
        }
    }), t = document.createElement("div").style;
    var p = "undefined" != typeof document && ("animation" in t || "webkitAnimation" in t);
    s.prototype.i = function(t) {
        var i = ["drift-" + t],
            e = this.a.j;
        return e && i.push(e + "-" + t), i
    }, s.prototype.ha = function() {
        this.b = document.createElement("div"), r(this.b, this.i("zoom-pane"));
        var t = document.createElement("div");
        r(t, this.i("zoom-pane-loader")), this.b.appendChild(t), this.c = document.createElement("img"), this.b.appendChild(this.c)
    }, s.prototype.X = function(t) {
        this.c.setAttribute("src", t)
    }, s.prototype.Z = function(t, i) {
        this.c.style.width = t * this.a.f + "px", this.c.style.height = i * this.a.f + "px"
    }, s.prototype.setPosition = function(t, i, e) {
        var n = this.c.offsetWidth,
            s = this.c.offsetHeight,
            o = this.b.offsetWidth,
            h = this.b.offsetHeight,
            a = o / 2 - n * t,
            r = h / 2 - s * i,
            d = o - n,
            u = h - s,
            c = 0 < d,
            f = 0 < u;
        s = c ? d / 2 : 0, n = f ? u / 2 : 0, d = c ? d / 2 : d, u = f ? u / 2 : u, this.b.parentElement === this.a.w && (f = window.pageXOffset, c = window.pageYOffset, t = e.left + t * e.width - o / 2 + this.a.K + f, i = e.top + i * e.height - h / 2 + this.a.L + c, this.a.I && (t < e.left + f ? t = e.left + f : t + o > e.left + e.width + f && (t = e.left + e.width - o + f), i < e.top + c ? i = e.top + c : i + h > e.top + e.height + c && (i = e.top + e.height - h + c)), this.b.style.left = t + "px", this.b.style.top = i + "px"), this.a.P || (a > s ? a = s : a < d && (a = d), r > n ? r = n : r < u && (r = u)), this.c.style.transform = "translate(" + a + "px, " + r + "px)", this.c.style.webkitTransform = "translate(" + a + "px, " + r + "px)"
    }, s.prototype.M = function() {
        this.b.removeEventListener("animationend", this.h, !1), this.b.removeEventListener("animationend", this.g, !1), this.b.removeEventListener("webkitAnimationEnd", this.h, !1), this.b.removeEventListener("webkitAnimationEnd", this.g, !1), d(this.b, this.o), d(this.b, this.u)
    }, s.prototype.show = function(t, i, e) {
        this.M(), this.s = !0, r(this.b, this.o), this.c.getAttribute("src") != t && (r(this.b, this.V), this.c.addEventListener("load", this.m, !1), this.X(t)), this.Z(i, e), this.ia ? this.aa() : this.$(), p && (this.b.addEventListener("animationend", this.h, !1), this.b.addEventListener("webkitAnimationEnd", this.h, !1), r(this.b, this.Y))
    }, s.prototype.aa = function() {
        this.a.w.appendChild(this.b), r(this.b, this.v)
    }, s.prototype.$ = function() {
        this.a.J.appendChild(this.b)
    }, s.prototype.W = function() {
        this.M(), this.s = !1, p ? (this.b.addEventListener("animationend", this.g, !1), this.b.addEventListener("webkitAnimationEnd", this.g, !1), r(this.b, this.u)) : (d(this.b, this.o), d(this.b, this.v))
    }, s.prototype.h = function() {
        this.b.removeEventListener("animationend", this.h, !1), this.b.removeEventListener("webkitAnimationEnd", this.h, !1), d(this.b, this.Y)
    }, s.prototype.g = function() {
        this.b.removeEventListener("animationend", this.g, !1), this.b.removeEventListener("webkitAnimationEnd", this.g, !1), d(this.b, this.o), d(this.b, this.u), d(this.b, this.v), this.b.setAttribute("style", ""), this.b.parentElement === this.a.J ? this.a.J.removeChild(this.b) : this.b.parentElement === this.a.w && this.a.w.removeChild(this.b)
    }, s.prototype.m = function() {
        this.c.removeEventListener("load", this.m, !1), d(this.b, this.V)
    }, u.Object.defineProperties(s.prototype, {
        ia: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var t = this.a.U;
                return !0 === t || "number" == typeof t && window.innerWidth <= t
            }
        }
    }), n.prototype.v = function() {
        this.l = new s({
            J: this.a.ga,
            f: this.a.f,
            P: this.a.P,
            I: this.a.I,
            U: this.a.ea,
            j: this.a.j,
            K: this.a.K,
            L: this.a.L,
            w: this.a.w
        })
    }, n.prototype.u = function() {
        this.c = new o({
            b: this.h,
            l: this.l,
            C: this.a.C,
            O: this.a.O,
            N: this.a.N,
            R: this.a.R,
            F: this.a.F,
            A: this.a.A,
            D: this.a.D,
            G: this.a.G,
            j: this.a.j,
            f: this.a.f,
            H: this.a.H
        })
    }, n.prototype.M = function(t) {
        this.l.X(t)
    }, n.prototype.i = function() {
        this.c.enabled = !1
    }, n.prototype.m = function() {
        this.c.enabled = !0
    }, n.prototype.g = function() {
        this.c.B(), this.c.ca()
    }, u.Object.defineProperties(n.prototype, {
        s: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.l.s
            }
        },
        f: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.a.f
            },
            set: function(t) {
                this.a.f = t, this.l.a.f = t, this.c.a.f = t, this.o.a.f = t
            }
        }
    }), Object.defineProperty(n.prototype, "isShowing", {
        get: function() {
            return this.s
        }
    }), Object.defineProperty(n.prototype, "zoomFactor", {
        get: function() {
            return this.f
        },
        set: function(t) {
            this.f = t
        }
    }), n.prototype.setZoomImageURL = n.prototype.M, n.prototype.disable = n.prototype.i, n.prototype.enable = n.prototype.m, n.prototype.destroy = n.prototype.g, window.Drift = n
}]);

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

! function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {},
                n = i[e] = i[e] || [];
            return n.indexOf(t) == -1 && n.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[e] = i[e] || {};
            return n[t] = !0, this
        }
    }, t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return n != -1 && i.splice(n, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0), t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
                var r = i[o],
                    s = n && n[r];
                s && (this.off(e, r), delete n[r]), r.apply(this, t)
            }
            return this
        }
    }, t.allOff = function() {
        delete this._events, delete this._onceEvents
    }, e
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }

    function n(e) {
        if (Array.isArray(e)) return e;
        var t = "object" == typeof e && "number" == typeof e.length;
        return t ? d.call(e) : [e]
    }

    function o(e, t, r) {
        if (!(this instanceof o)) return new o(e, t, r);
        var s = e;
        return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e))
    }

    function r(e) {
        this.img = e
    }

    function s(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var h = e.jQuery,
        a = e.console,
        d = Array.prototype.slice;
    o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
            }
    }, o.prototype.addImage = function(e) {
        var t = new r(e);
        this.images.push(t)
    }, o.prototype.addBackground = function(e, t) {
        var i = new s(e, t);
        this.images.push(i)
    }, o.prototype.check = function() {
        function e(e, i, n) {
            setTimeout(function() {
                t.progress(e, i, n)
            })
        }
        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, o.prototype.progress = function(e, t, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
    }, o.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, r.prototype = Object.create(t.prototype), r.prototype.check = function() {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }, r.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, r.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, r.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, o.makeJQueryPlugin = function(t) {
        t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function(e, t) {
            var i = new o(this, e, t);
            return i.jqDeferred.promise(h(this))
        })
    }, o.makeJQueryPlugin(), o
});
/**!
 * lg-fullscreen.js | 1.1.0 | February 23rd 2019
 * http://sachinchoolur.github.io/lg-fullscreen.js
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */
! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var n;
        n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, n.LgFullscreen = e()
    }
}(function() {
    var e, n, l;
    return function() {
        function e(n, l, t) {
            function r(o, c) {
                if (!l[o]) {
                    if (!n[o]) {
                        var s = "function" == typeof require && require;
                        if (!c && s) return s(o, !0);
                        if (u) return u(o, !0);
                        var i = new Error("Cannot find module '" + o + "'");
                        throw i.code = "MODULE_NOT_FOUND", i
                    }
                    var f = l[o] = {
                        exports: {}
                    };
                    n[o][0].call(f.exports, function(e) {
                        return r(n[o][1][e] || e)
                    }, f, f.exports, e, n, l, t)
                }
                return l[o].exports
            }
            for (var u = "function" == typeof require && require, o = 0; o < t.length; o++) r(t[o]);
            return r
        }
        return e
    }()({
        1: [function(n, l, t) {
            ! function(n, l) {
                if ("function" == typeof e && e.amd) e([], l);
                else if (void 0 !== t) l();
                else {
                    var r = {
                        exports: {}
                    };
                    l(), n.lgFullscreen = r.exports
                }
            }(this, function() {
                "use strict";

                function e() {
                    return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
                }
                var n = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var l = arguments[n];
                            for (var t in l) Object.prototype.hasOwnProperty.call(l, t) && (e[t] = l[t])
                        }
                        return e
                    },
                    l = {
                        fullScreen: !0
                    },
                    t = function e(t) {
                        return this.el = t, this.core = window.lgData[this.el.getAttribute("lg-uid")], this.core.s = n({}, l, this.core.s), this.init(), this
                    };
                t.prototype.init = function() {
                    var e = "";
                    if (this.core.s.fullScreen) {
                        if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)) return;
                        e = '<span class="lg-fullscreen lg-icon"></span>', this.core.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend", e), this.fullScreen()
                    }
                }, t.prototype.requestFullscreen = function() {
                    var e = document.documentElement;
                    e.requestFullscreen ? e.requestFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen()
                }, t.prototype.exitFullscreen = function() {
                    document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
                }, t.prototype.fullScreen = function() {
                    var n = this;
                    utils.on(document, "fullscreenchange.lgfullscreen webkitfullscreenchange.lgfullscreen mozfullscreenchange.lgfullscreen MSFullscreenChange.lgfullscreen", function() {
                        utils.hasClass(n.core.outer, "lg-fullscreen-on") ? utils.removeClass(n.core.outer, "lg-fullscreen-on") : utils.addClass(n.core.outer, "lg-fullscreen-on")
                    }), utils.on(this.core.outer.querySelector(".lg-fullscreen"), "click.lg", function() {
                        e() ? n.exitFullscreen() : n.requestFullscreen()
                    })
                }, t.prototype.destroy = function() {
                    e() && this.exitFullscreen(), utils.off(document, ".lgfullscreen")
                }, window.lgModules.fullscreen = t
            })
        }, {}]
    }, {}, [1])(1)
});
/**!
 * lg-video.js | 1.0.0 | October 5th 2016
 * http://sachinchoolur.github.io/lg-video.js
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */
! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var o;
        o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, o.LgVideo = e()
    }
}(function() {
    var e, o, i;
    return function e(o, i, t) {
        function r(s, a) {
            if (!i[s]) {
                if (!o[s]) {
                    var d = "function" == typeof require && require;
                    if (!a && d) return d(s, !0);
                    if (l) return l(s, !0);
                    var c = new Error("Cannot find module '" + s + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var n = i[s] = {
                    exports: {}
                };
                o[s][0].call(n.exports, function(e) {
                    var i = o[s][1][e];
                    return r(i ? i : e)
                }, n, n.exports, e, o, i, t)
            }
            return i[s].exports
        }
        for (var l = "function" == typeof require && require, s = 0; s < t.length; s++) r(t[s]);
        return r
    }({
        1: [function(o, i, t) {
            ! function(o, i) {
                if ("function" == typeof e && e.amd) e([], i);
                else if ("undefined" != typeof t) i();
                else {
                    var r = {
                        exports: {}
                    };
                    i(), o.lgVideo = r.exports
                }
            }(this, function() {
                "use strict";
                var e = Object.assign || function(e) {
                        for (var o = 1; o < arguments.length; o++) {
                            var i = arguments[o];
                            for (var t in i) Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t])
                        }
                        return e
                    },
                    o = {
                        videoMaxWidth: "855px",
                        youtubePlayerParams: !1,
                        vimeoPlayerParams: !1,
                        dailymotionPlayerParams: !1,
                        vkPlayerParams: !1,
                        videojs: !1,
                        videojsOptions: {}
                    },
                    i = function i(t) {
                        return this.el = t, this.core = window.lgData[this.el.getAttribute("lg-uid")], this.core.s = e({}, o, this.core.s), this.videoLoaded = !1, this.init(), this
                    };
                i.prototype.init = function() {
                    var e = this;
                    utils.on(e.core.el, "hasVideo.lgtm", function(o) {
                        if (e.core.___slide[o.detail.index].querySelector(".lg-video").insertAdjacentHTML("beforeend", e.loadVideo(o.detail.src, "lg-object", !0, o.detail.index, o.detail.html)), o.detail.html)
                            if (e.core.s.videojs) try {
                                videojs(e.core.___slide[o.detail.index].querySelector(".lg-html5"), e.core.s.videojsOptions, function() {
                                    e.videoLoaded || this.play()
                                })
                            } catch (e) {
                                console.error("Make sure you have included videojs")
                            } else e.core.___slide[o.detail.index].querySelector(".lg-html5").play()
                    }), utils.on(e.core.el, "onAferAppendSlide.lgtm", function(o) {
                        e.core.___slide[o.detail.index].querySelector(".lg-video-cont") && (e.core.___slide[o.detail.index].querySelector(".lg-video-cont").style.maxWidth = e.core.s.videoMaxWidth, e.videoLoaded = !0)
                    });
                    var o = function o(i) {
                        if (utils.hasClass(i.querySelector(".lg-object"), "lg-has-poster") && "none" !== i.querySelector(".lg-object").style.display)
                            if (utils.hasClass(i, "lg-has-video")) {
                                var t = i.querySelector(".lg-youtube"),
                                    r = i.querySelector(".lg-vimeo"),
                                    l = i.querySelector(".lg-dailymotion"),
                                    s = i.querySelector(".lg-html5");
                                if (t) t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
                                else if (r) try {
                                        $f(r).api("play")
                                    } catch (e) {
                                        console.error("Make sure you have included froogaloop2 js")
                                    } else if (l) l.contentWindow.postMessage("play", "*");
                                    else if (s)
                                    if (e.core.s.videojs) try {
                                        videojs(s).play()
                                    } catch (e) {
                                        console.error("Make sure you have included videojs")
                                    } else s.play();
                                utils.addClass(i, "lg-video-playing")
                            } else {
                                utils.addClass(i, "lg-video-playing"), utils.addClass(i, "lg-has-video");
                                var a, d, c = function o(t, r) {
                                    if (i.querySelector(".lg-video").insertAdjacentHTML("beforeend", e.loadVideo(t, "", !1, e.core.index, r)), r)
                                        if (e.core.s.videojs) try {
                                            videojs(e.core.___slide[e.core.index].querySelector(".lg-html5"), e.core.s.videojsOptions, function() {
                                                this.play()
                                            })
                                        } catch (e) {
                                            console.error("Make sure you have included videojs")
                                        } else e.core.___slide[e.core.index].querySelector(".lg-html5").play()
                                };
                                e.core.s.dynamic ? (a = e.core.s.dynamicEl[e.core.index].src, d = e.core.s.dynamicEl[e.core.index].html, c(a, d)) : (a = e.core.items[e.core.index].getAttribute("href") || e.core.items[e.core.index].getAttribute("data-src"), d = e.core.items[e.core.index].getAttribute("data-html"), c(a, d));
                                var n = i.querySelector(".lg-object");
                                i.querySelector(".lg-video").appendChild(n), utils.hasClass(i.querySelector(".lg-video-object"), "lg-html5") || (utils.removeClass(i, "lg-complete"), utils.on(i.querySelector(".lg-video-object"), "load.lg error.lg", function() {
                                    utils.addClass(i, "lg-complete")
                                }))
                            }
                    };
                    if (e.core.doCss() && e.core.items.length > 1 && (e.core.s.enableSwipe && e.core.isTouch || e.core.s.enableDrag && !e.core.isTouch)) utils.on(e.core.el, "onSlideClick.lgtm", function() {
                        var i = e.core.___slide[e.core.index];
                        o(i)
                    });
                    else
                        for (var i = 0; i < e.core.___slide.length; i++) ! function(i) {
                            utils.on(e.core.___slide[i], "click.lg", function() {
                                o(e.core.___slide[i])
                            })
                        }(i);
                    utils.on(e.core.el, "onBeforeSlide.lgtm", function(o) {
                        var i = e.core.___slide[o.detail.prevIndex],
                            t = i.querySelector(".lg-youtube"),
                            r = i.querySelector(".lg-vimeo"),
                            l = i.querySelector(".lg-dailymotion"),
                            s = i.querySelector(".lg-vk"),
                            a = i.querySelector(".lg-html5");
                        if (t) t.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
                        else if (r) try {
                                $f(r).api("pause")
                            } catch (e) {
                                console.error("Make sure you have included froogaloop2 js")
                            } else if (l) l.contentWindow.postMessage("pause", "*");
                            else if (a)
                            if (e.core.s.videojs) try {
                                videojs(a).pause()
                            } catch (e) {
                                console.error("Make sure you have included videojs")
                            } else a.pause();
                        s && s.setAttribute("src", s.getAttribute("src").replace("&autoplay", "&noplay"));
                        var d;
                        d = e.core.s.dynamic ? e.core.s.dynamicEl[o.detail.index].src : e.core.items[o.detail.index].getAttribute("href") || e.core.items[o.detail.index].getAttribute("data-src");
                        var c = e.core.isVideo(d, o.detail.index) || {};
                        (c.youtube || c.vimeo || c.dailymotion || c.vk) && utils.addClass(e.core.outer, "lg-hide-download")
                    }), utils.on(e.core.el, "onAfterSlide.lgtm", function(o) {
                        utils.removeClass(e.core.___slide[o.detail.prevIndex], "lg-video-playing")
                    })
                }, i.prototype.loadVideo = function(e, o, i, t, r) {
                    var l = "",
                        s = 1,
                        a = "",
                        d = this.core.isVideo(e, t) || {};
                    if (i && (s = this.videoLoaded ? 0 : 1), d.youtube) a = "?wmode=opaque&autoplay=" + s + "&enablejsapi=1", this.core.s.youtubePlayerParams && (a = a + "&" + utils.param(this.core.s.youtubePlayerParams)), l = '<iframe class="lg-video-object lg-youtube ' + o + '" width="560" height="315" src="//www.youtube.com/embed/' + d.youtube[1] + a + '" frameborder="0" allowfullscreen></iframe>';
                    else if (d.vimeo) a = "?autoplay=" + s + "&api=1", this.core.s.vimeoPlayerParams && (a = a + "&" + utils.param(this.core.s.vimeoPlayerParams)), l = '<iframe class="lg-video-object lg-vimeo ' + o + '" width="560" height="315"  src="//player.vimeo.com/video/' + d.vimeo[1] + a + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
                    else if (d.dailymotion) a = "?wmode=opaque&autoplay=" + s + "&api=postMessage", this.core.s.dailymotionPlayerParams && (a = a + "&" + utils.param(this.core.s.dailymotionPlayerParams)), l = '<iframe class="lg-video-object lg-dailymotion ' + o + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + d.dailymotion[1] + a + '" frameborder="0" allowfullscreen></iframe>';
                    else if (d.html5) {
                        var c = r.substring(0, 1);
                        "." !== c && "#" !== c || (r = document.querySelector(r).innerHTML), l = r
                    } else d.vk && (a = "&autoplay=" + s, this.core.s.vkPlayerParams && (a = a + "&" + utils.param(this.core.s.vkPlayerParams)), l = '<iframe class="lg-video-object lg-vk ' + o + '" width="560" height="315" src="http://vk.com/video_ext.php?' + d.vk[1] + a + '" frameborder="0" allowfullscreen></iframe>');
                    return l
                }, i.prototype.destroy = function() {
                    this.videoLoaded = !1
                }, window.lgModules.video = i
            })
        }, {}]
    }, {}, [1])(1)
});
/**!
 * lg-zoom.js | 1.0.1 | December 22nd 2016
 * http://sachinchoolur.github.io/lg-zoom.js
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */
! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.LgZoom = e()
    }
}(function() {
    var e, t, o;
    return function e(t, o, r) {
        function l(s, a) {
            if (!o[s]) {
                if (!t[s]) {
                    var n = "function" == typeof require && require;
                    if (!a && n) return n(s, !0);
                    if (i) return i(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = o[s] = {
                    exports: {}
                };
                t[s][0].call(c.exports, function(e) {
                    var o = t[s][1][e];
                    return l(o ? o : e)
                }, c, c.exports, e, t, o, r)
            }
            return o[s].exports
        }
        for (var i = "function" == typeof require && require, s = 0; s < r.length; s++) l(r[s]);
        return l
    }({
        1: [function(t, o, r) {
            ! function(t, o) {
                if ("function" == typeof e && e.amd) e([], o);
                else if ("undefined" != typeof r) o();
                else {
                    var l = {
                        exports: {}
                    };
                    o(), t.lgZoom = l.exports
                }
            }(this, function() {
                "use strict";
                var e = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                        }
                        return e
                    },
                    t = function e() {
                        var t = !1,
                            o = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
                        return o && parseInt(o[2], 10) < 54 && (t = !0), t
                    },
                    o = {
                        scale: 1,
                        zoom: !0,
                        actualSize: !0,
                        enableZoomAfter: 300,
                        useLeftForZoom: t()
                    },
                    r = function t(r) {
                        return this.el = r, this.core = window.lgData[this.el.getAttribute("lg-uid")], this.core.s = e({}, o, this.core.s), this.core.s.zoom && this.core.doCss() && (this.init(), this.zoomabletimeout = !1, this.pageX = window.innerWidth / 2, this.pageY = window.innerHeight / 2 + (document.documentElement.scrollTop || document.body.scrollTop)), this
                    };
                r.prototype.init = function() {
                    var e = this,
                        t = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
                    e.core.s.actualSize && (t += '<span id="lg-actual-size" class="lg-icon"></span>'), e.core.s.useLeftForZoom ? utils.addClass(e.core.outer, "lg-use-left-for-zoom") : utils.addClass(e.core.outer, "lg-use-transition-for-zoom"), this.core.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend", t), utils.on(e.core.el, "onSlideItemLoad.lgtmzoom", function(t) {
                        var o = e.core.s.enableZoomAfter + t.detail.delay;
                        utils.hasClass(document.body, "lg-from-hash") && t.detail.delay ? o = 0 : utils.removeClass(document.body, "lg-from-hash"), e.zoomabletimeout = setTimeout(function() {
                            utils.addClass(e.core.___slide[t.detail.index], "lg-zoomable")
                        }, o + 30)
                    });
                    var o = 1,
                        r = function t(o) {
                            var r = e.core.outer.querySelector(".lg-current .lg-image"),
                                l, i, s = (window.innerWidth - r.clientWidth) / 2,
                                a = (window.innerHeight - r.clientHeight) / 2 + (document.documentElement.scrollTop || document.body.scrollTop);
                            l = e.pageX - s, i = e.pageY - a;
                            var n = (o - 1) * l,
                                u = (o - 1) * i;
                            utils.setVendor(r, "Transform", "scale3d(" + o + ", " + o + ", 1)"), r.setAttribute("data-scale", o), e.core.s.useLeftForZoom ? (r.parentElement.style.left = -n + "px", r.parentElement.style.top = -u + "px") : utils.setVendor(r.parentElement, "Transform", "translate3d(-" + n + "px, -" + u + "px, 0)"), r.parentElement.setAttribute("data-x", n), r.parentElement.setAttribute("data-y", u)
                        },
                        l = function t() {
                            o > 1 ? utils.addClass(e.core.outer, "lg-zoomed") : e.resetZoom(), o < 1 && (o = 1), r(o)
                        },
                        i = function t(r, i, s, a) {
                            var n = i.clientWidth,
                                u;
                            u = e.core.s.dynamic ? e.core.s.dynamicEl[s].width || i.naturalWidth || n : e.core.items[s].getAttribute("data-width") || i.naturalWidth || n;
                            var c;
                            utils.hasClass(e.core.outer, "lg-zoomed") ? o = 1 : u > n && (c = u / n, o = c || 2), a ? (e.pageX = window.innerWidth / 2, e.pageY = window.innerHeight / 2 + (document.documentElement.scrollTop || document.body.scrollTop)) : (e.pageX = r.pageX || r.targetTouches[0].pageX, e.pageY = r.pageY || r.targetTouches[0].pageY), l(), setTimeout(function() {
                                utils.removeClass(e.core.outer, "lg-grabbing"), utils.addClass(e.core.outer, "lg-grab")
                            }, 10)
                        },
                        s = !1;
                    utils.on(e.core.el, "onAferAppendSlide.lgtmzoom", function(t) {
                        var o = t.detail.index,
                            r = e.core.___slide[o].querySelector(".lg-image");
                        e.core.isTouch || utils.on(r, "dblclick", function(e) {
                            i(e, r, o)
                        }), e.core.isTouch && utils.on(r, "touchstart", function(e) {
                            s ? (clearTimeout(s), s = null, i(e, r, o)) : s = setTimeout(function() {
                                s = null
                            }, 300), e.preventDefault()
                        })
                    }), utils.on(window, "resize.lgzoom scroll.lgzoom orientationchange.lgzoom", function() {
                        e.pageX = window.innerWidth / 2, e.pageY = window.innerHeight / 2 + (document.documentElement.scrollTop || document.body.scrollTop), r(o)
                    }), utils.on(document.getElementById("lg-zoom-out"), "click.lg", function() {
                        e.core.outer.querySelector(".lg-current .lg-image") && (o -= e.core.s.scale, l())
                    }), utils.on(document.getElementById("lg-zoom-in"), "click.lg", function() {
                        e.core.outer.querySelector(".lg-current .lg-image") && (o += e.core.s.scale, l())
                    }), utils.on(document.getElementById("lg-actual-size"), "click.lg", function(t) {
                        i(t, e.core.___slide[e.core.index].querySelector(".lg-image"), e.core.index, !0)
                    }), utils.on(e.core.el, "onBeforeSlide.lgtm", function() {
                        o = 1, e.resetZoom()
                    }), e.core.isTouch || e.zoomDrag(), e.core.isTouch && e.zoomSwipe()
                }, r.prototype.resetZoom = function() {
                    utils.removeClass(this.core.outer, "lg-zoomed");
                    for (var e = 0; e < this.core.___slide.length; e++) this.core.___slide[e].querySelector(".lg-img-wrap") && (this.core.___slide[e].querySelector(".lg-img-wrap").removeAttribute("style"), this.core.___slide[e].querySelector(".lg-img-wrap").removeAttribute("data-x"), this.core.___slide[e].querySelector(".lg-img-wrap").removeAttribute("data-y"));
                    for (var t = 0; t < this.core.___slide.length; t++) this.core.___slide[t].querySelector(".lg-image") && (this.core.___slide[t].querySelector(".lg-image").removeAttribute("style"), this.core.___slide[t].querySelector(".lg-image").removeAttribute("data-scale"));
                    this.pageX = window.innerWidth / 2, this.pageY = window.innerHeight / 2 + (document.documentElement.scrollTop || document.body.scrollTop)
                }, r.prototype.zoomSwipe = function() {
                    for (var e = this, t = {}, o = {}, r = !1, l = !1, i = !1, s = 0; s < e.core.___slide.length; s++) utils.on(e.core.___slide[s], "touchstart.lg", function(o) {
                        if (utils.hasClass(e.core.outer, "lg-zoomed")) {
                            var r = e.core.___slide[e.core.index].querySelector(".lg-object");
                            i = r.offsetHeight * r.getAttribute("data-scale") > e.core.outer.querySelector(".lg").clientHeight, l = r.offsetWidth * r.getAttribute("data-scale") > e.core.outer.querySelector(".lg").clientWidth, (l || i) && (o.preventDefault(), t = {
                                x: o.targetTouches[0].pageX,
                                y: o.targetTouches[0].pageY
                            })
                        }
                    });
                    for (var a = 0; a < e.core.___slide.length; a++) utils.on(e.core.___slide[a], "touchmove.lg", function(s) {
                        if (utils.hasClass(e.core.outer, "lg-zoomed")) {
                            var a = e.core.___slide[e.core.index].querySelector(".lg-img-wrap"),
                                n, u;
                            s.preventDefault(), r = !0, o = {
                                x: s.targetTouches[0].pageX,
                                y: s.targetTouches[0].pageY
                            }, utils.addClass(e.core.outer, "lg-zoom-dragging"), u = i ? -Math.abs(a.getAttribute("data-y")) + (o.y - t.y) : -Math.abs(a.getAttribute("data-y")), n = l ? -Math.abs(a.getAttribute("data-x")) + (o.x - t.x) : -Math.abs(a.getAttribute("data-x")), (Math.abs(o.x - t.x) > 15 || Math.abs(o.y - t.y) > 15) && (e.core.s.useLeftForZoom ? (a.style.left = n + "px", a.style.top = u + "px") : utils.setVendor(a, "Transform", "translate3d(" + n + "px, " + u + "px, 0)"))
                        }
                    });
                    for (var n = 0; n < e.core.___slide.length; n++) utils.on(e.core.___slide[n], "touchend.lg", function() {
                        utils.hasClass(e.core.outer, "lg-zoomed") && r && (r = !1, utils.removeClass(e.core.outer, "lg-zoom-dragging"), e.touchendZoom(t, o, l, i))
                    })
                }, r.prototype.zoomDrag = function() {
                    for (var e = this, t = {}, o = {}, r = !1, l = !1, i = !1, s = !1, a = 0; a < e.core.___slide.length; a++) utils.on(e.core.___slide[a], "mousedown.lgzoom", function(o) {
                        var l = e.core.___slide[e.core.index].querySelector(".lg-object");
                        s = l.offsetHeight * l.getAttribute("data-scale") > e.core.outer.querySelector(".lg").clientHeight, i = l.offsetWidth * l.getAttribute("data-scale") > e.core.outer.querySelector(".lg").clientWidth, utils.hasClass(e.core.outer, "lg-zoomed") && utils.hasClass(o.target, "lg-object") && (i || s) && (o.preventDefault(), t = {
                            x: o.pageX,
                            y: o.pageY
                        }, r = !0, e.core.outer.scrollLeft += 1, e.core.outer.scrollLeft -= 1, utils.removeClass(e.core.outer, "lg-grab"), utils.addClass(e.core.outer, "lg-grabbing"))
                    });
                    utils.on(window, "mousemove.lgzoom", function(a) {
                        if (r) {
                            var n = e.core.___slide[e.core.index].querySelector(".lg-img-wrap"),
                                u, c;
                            l = !0, o = {
                                x: a.pageX,
                                y: a.pageY
                            }, utils.addClass(e.core.outer, "lg-zoom-dragging"), c = s ? -Math.abs(n.getAttribute("data-y")) + (o.y - t.y) : -Math.abs(n.getAttribute("data-y")), u = i ? -Math.abs(n.getAttribute("data-x")) + (o.x - t.x) : -Math.abs(n.getAttribute("data-x")), e.core.s.useLeftForZoom ? (n.style.left = u + "px", n.style.top = c + "px") : utils.setVendor(n, "Transform", "translate3d(" + u + "px, " + c + "px, 0)")
                        }
                    }), utils.on(window, "mouseup.lgzoom", function(a) {
                        r && (r = !1, utils.removeClass(e.core.outer, "lg-zoom-dragging"), !l || t.x === o.x && t.y === o.y || (o = {
                            x: a.pageX,
                            y: a.pageY
                        }, e.touchendZoom(t, o, i, s)), l = !1), utils.removeClass(e.core.outer, "lg-grabbing"), utils.addClass(e.core.outer, "lg-grab")
                    })
                }, r.prototype.touchendZoom = function(e, t, o, r) {
                    var l = this,
                        i = l.core.___slide[l.core.index].querySelector(".lg-img-wrap"),
                        s = l.core.___slide[l.core.index].querySelector(".lg-object"),
                        a = -Math.abs(i.getAttribute("data-x")) + (t.x - e.x),
                        n = -Math.abs(i.getAttribute("data-y")) + (t.y - e.y),
                        u = (l.core.outer.querySelector(".lg").clientHeight - s.offsetHeight) / 2,
                        c = Math.abs(s.offsetHeight * Math.abs(s.getAttribute("data-scale")) - l.core.outer.querySelector(".lg").clientHeight + u),
                        d = (l.core.outer.querySelector(".lg").clientWidth - s.offsetWidth) / 2,
                        g = Math.abs(s.offsetWidth * Math.abs(s.getAttribute("data-scale")) - l.core.outer.querySelector(".lg").clientWidth + d);
                    (Math.abs(t.x - e.x) > 15 || Math.abs(t.y - e.y) > 15) && (r && (n <= -c ? n = -c : n >= -u && (n = -u)), o && (a <= -g ? a = -g : a >= -d && (a = -d)), r ? i.setAttribute("data-y", Math.abs(n)) : n = -Math.abs(i.getAttribute("data-y")), o ? i.setAttribute("data-x", Math.abs(a)) : a = -Math.abs(i.getAttribute("data-x")), l.core.s.useLeftForZoom ? (i.style.left = a + "px", i.style.top = n + "px") : utils.setVendor(i, "Transform", "translate3d(" + a + "px, " + n + "px, 0)"))
                }, r.prototype.destroy = function() {
                    var e = this;
                    utils.off(e.core.el, ".lgzoom"), utils.off(window, ".lgzoom");
                    for (var t = 0; t < e.core.___slide.length; t++) utils.off(e.core.___slide[t], ".lgzoom");
                    utils.off(e.core.el, ".lgtmzoom"), e.resetZoom(), clearTimeout(e.zoomabletimeout), e.zoomabletimeout = !1
                }, window.lgModules.zoom = r
            })
        }, {}]
    }, {}, [1])(1)
});
/*! nouislider - 14.1.0 - 12/4/2019 */
! function(t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : window.noUiSlider = t()
}(function() {
    "use strict";
    var lt = "14.1.0";

    function ut(t) {
        t.parentElement.removeChild(t)
    }

    function s(t) {
        return null != t
    }

    function ct(t) {
        t.preventDefault()
    }

    function i(t) {
        return "number" == typeof t && !isNaN(t) && isFinite(t)
    }

    function pt(t, e, r) {
        0 < r && (ht(t, e), setTimeout(function() {
            mt(t, e)
        }, r))
    }

    function ft(t) {
        return Math.max(Math.min(t, 100), 0)
    }

    function dt(t) {
        return Array.isArray(t) ? t : [t]
    }

    function e(t) {
        var e = (t = String(t)).split(".");
        return 1 < e.length ? e[1].length : 0
    }

    function ht(t, e) {
        t.classList ? t.classList.add(e) : t.className += " " + e
    }

    function mt(t, e) {
        t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")
    }

    function gt(t) {
        var e = void 0 !== window.pageXOffset,
            r = "CSS1Compat" === (t.compatMode || "");
        return {
            x: e ? window.pageXOffset : r ? t.documentElement.scrollLeft : t.body.scrollLeft,
            y: e ? window.pageYOffset : r ? t.documentElement.scrollTop : t.body.scrollTop
        }
    }

    function c(t, e) {
        return 100 / (e - t)
    }

    function p(t, e) {
        return 100 * e / (t[1] - t[0])
    }

    function f(t, e) {
        for (var r = 1; t >= e[r];) r += 1;
        return r
    }

    function r(t, e, r) {
        if (r >= t.slice(-1)[0]) return 100;
        var n, i, o = f(r, t),
            a = t[o - 1],
            s = t[o],
            l = e[o - 1],
            u = e[o];
        return l + (i = r, p(n = [a, s], n[0] < 0 ? i + Math.abs(n[0]) : i - n[0]) / c(l, u))
    }

    function n(t, e, r, n) {
        if (100 === n) return n;
        var i, o, a = f(n, t),
            s = t[a - 1],
            l = t[a];
        return r ? (l - s) / 2 < n - s ? l : s : e[a - 1] ? t[a - 1] + (i = n - t[a - 1], o = e[a - 1], Math.round(i / o) * o) : n
    }

    function o(t, e, r) {
        var n;
        if ("number" == typeof e && (e = [e]), !Array.isArray(e)) throw new Error("noUiSlider (" + lt + "): 'range' contains invalid value.");
        if (!i(n = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t)) || !i(e[0])) throw new Error("noUiSlider (" + lt + "): 'range' value isn't numeric.");
        r.xPct.push(n), r.xVal.push(e[0]), n ? r.xSteps.push(!isNaN(e[1]) && e[1]) : isNaN(e[1]) || (r.xSteps[0] = e[1]), r.xHighestCompleteStep.push(0)
    }

    function a(t, e, r) {
        if (e)
            if (r.xVal[t] !== r.xVal[t + 1]) {
                r.xSteps[t] = p([r.xVal[t], r.xVal[t + 1]], e) / c(r.xPct[t], r.xPct[t + 1]);
                var n = (r.xVal[t + 1] - r.xVal[t]) / r.xNumSteps[t],
                    i = Math.ceil(Number(n.toFixed(3)) - 1),
                    o = r.xVal[t] + r.xNumSteps[t] * i;
                r.xHighestCompleteStep[t] = o
            } else r.xSteps[t] = r.xHighestCompleteStep[t] = r.xVal[t]
    }

    function l(t, e, r) {
        var n;
        this.xPct = [], this.xVal = [], this.xSteps = [r || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = e;
        var i = [];
        for (n in t) t.hasOwnProperty(n) && i.push([t[n], n]);
        for (i.length && "object" == typeof i[0][0] ? i.sort(function(t, e) {
                return t[0][0] - e[0][0]
            }) : i.sort(function(t, e) {
                return t[0] - e[0]
            }), n = 0; n < i.length; n++) o(i[n][1], i[n][0], this);
        for (this.xNumSteps = this.xSteps.slice(0), n = 0; n < this.xNumSteps.length; n++) a(n, this.xNumSteps[n], this)
    }
    l.prototype.getMargin = function(t) {
        var e = this.xNumSteps[0];
        if (e && t / e % 1 != 0) throw new Error("noUiSlider (" + lt + "): 'limit', 'margin' and 'padding' must be divisible by step.");
        return 2 === this.xPct.length && p(this.xVal, t)
    }, l.prototype.toStepping = function(t) {
        return t = r(this.xVal, this.xPct, t)
    }, l.prototype.fromStepping = function(t) {
        return function(t, e, r) {
            if (100 <= r) return t.slice(-1)[0];
            var n, i = f(r, e),
                o = t[i - 1],
                a = t[i],
                s = e[i - 1],
                l = e[i];
            return n = [o, a], (r - s) * c(s, l) * (n[1] - n[0]) / 100 + n[0]
        }(this.xVal, this.xPct, t)
    }, l.prototype.getStep = function(t) {
        return t = n(this.xPct, this.xSteps, this.snap, t)
    }, l.prototype.getDefaultStep = function(t, e, r) {
        var n = f(t, this.xPct);
        return (100 === t || e && t === this.xPct[n - 1]) && (n = Math.max(n - 1, 1)), (this.xVal[n] - this.xVal[n - 1]) / r
    }, l.prototype.getNearbySteps = function(t) {
        var e = f(t, this.xPct);
        return {
            stepBefore: {
                startValue: this.xVal[e - 2],
                step: this.xNumSteps[e - 2],
                highestStep: this.xHighestCompleteStep[e - 2]
            },
            thisStep: {
                startValue: this.xVal[e - 1],
                step: this.xNumSteps[e - 1],
                highestStep: this.xHighestCompleteStep[e - 1]
            },
            stepAfter: {
                startValue: this.xVal[e],
                step: this.xNumSteps[e],
                highestStep: this.xHighestCompleteStep[e]
            }
        }
    }, l.prototype.countStepDecimals = function() {
        var t = this.xNumSteps.map(e);
        return Math.max.apply(null, t)
    }, l.prototype.convert = function(t) {
        return this.getStep(this.toStepping(t))
    };
    var u = {
        to: function(t) {
            return void 0 !== t && t.toFixed(2)
        },
        from: Number
    };

    function d(t) {
        if ("object" == typeof(e = t) && "function" == typeof e.to && "function" == typeof e.from) return !0;
        var e;
        throw new Error("noUiSlider (" + lt + "): 'format' requires 'to' and 'from' methods.")
    }

    function h(t, e) {
        if (!i(e)) throw new Error("noUiSlider (" + lt + "): 'step' is not numeric.");
        t.singleStep = e
    }

    function m(t, e) {
        if ("object" != typeof e || Array.isArray(e)) throw new Error("noUiSlider (" + lt + "): 'range' is not an object.");
        if (void 0 === e.min || void 0 === e.max) throw new Error("noUiSlider (" + lt + "): Missing 'min' or 'max' in 'range'.");
        if (e.min === e.max) throw new Error("noUiSlider (" + lt + "): 'range' 'min' and 'max' cannot be equal.");
        t.spectrum = new l(e, t.snap, t.singleStep)
    }

    function g(t, e) {
        if (e = dt(e), !Array.isArray(e) || !e.length) throw new Error("noUiSlider (" + lt + "): 'start' option is incorrect.");
        t.handles = e.length, t.start = e
    }

    function v(t, e) {
        if ("boolean" != typeof(t.snap = e)) throw new Error("noUiSlider (" + lt + "): 'snap' option must be a boolean.")
    }

    function b(t, e) {
        if ("boolean" != typeof(t.animate = e)) throw new Error("noUiSlider (" + lt + "): 'animate' option must be a boolean.")
    }

    function S(t, e) {
        if ("number" != typeof(t.animationDuration = e)) throw new Error("noUiSlider (" + lt + "): 'animationDuration' option must be a number.")
    }

    function x(t, e) {
        var r, n = [!1];
        if ("lower" === e ? e = [!0, !1] : "upper" === e && (e = [!1, !0]), !0 === e || !1 === e) {
            for (r = 1; r < t.handles; r++) n.push(e);
            n.push(!1)
        } else {
            if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1) throw new Error("noUiSlider (" + lt + "): 'connect' option doesn't match handle count.");
            n = e
        }
        t.connect = n
    }

    function w(t, e) {
        switch (e) {
            case "horizontal":
                t.ort = 0;
                break;
            case "vertical":
                t.ort = 1;
                break;
            default:
                throw new Error("noUiSlider (" + lt + "): 'orientation' option is invalid.")
        }
    }

    function y(t, e) {
        if (!i(e)) throw new Error("noUiSlider (" + lt + "): 'margin' option must be numeric.");
        if (0 !== e && (t.margin = t.spectrum.getMargin(e), !t.margin)) throw new Error("noUiSlider (" + lt + "): 'margin' option is only supported on linear sliders.")
    }

    function E(t, e) {
        if (!i(e)) throw new Error("noUiSlider (" + lt + "): 'limit' option must be numeric.");
        if (t.limit = t.spectrum.getMargin(e), !t.limit || t.handles < 2) throw new Error("noUiSlider (" + lt + "): 'limit' option is only supported on linear sliders with 2 or more handles.")
    }

    function C(t, e) {
        if (!i(e) && !Array.isArray(e)) throw new Error("noUiSlider (" + lt + "): 'padding' option must be numeric or array of exactly 2 numbers.");
        if (Array.isArray(e) && 2 !== e.length && !i(e[0]) && !i(e[1])) throw new Error("noUiSlider (" + lt + "): 'padding' option must be numeric or array of exactly 2 numbers.");
        if (0 !== e) {
            if (Array.isArray(e) || (e = [e, e]), !(t.padding = [t.spectrum.getMargin(e[0]), t.spectrum.getMargin(e[1])]) === t.padding[0] || !1 === t.padding[1]) throw new Error("noUiSlider (" + lt + "): 'padding' option is only supported on linear sliders.");
            if (t.padding[0] < 0 || t.padding[1] < 0) throw new Error("noUiSlider (" + lt + "): 'padding' option must be a positive number(s).");
            if (100 < t.padding[0] + t.padding[1]) throw new Error("noUiSlider (" + lt + "): 'padding' option must not exceed 100% of the range.")
        }
    }

    function N(t, e) {
        switch (e) {
            case "ltr":
                t.dir = 0;
                break;
            case "rtl":
                t.dir = 1;
                break;
            default:
                throw new Error("noUiSlider (" + lt + "): 'direction' option was not recognized.")
        }
    }

    function U(t, e) {
        if ("string" != typeof e) throw new Error("noUiSlider (" + lt + "): 'behaviour' must be a string containing options.");
        var r = 0 <= e.indexOf("tap"),
            n = 0 <= e.indexOf("drag"),
            i = 0 <= e.indexOf("fixed"),
            o = 0 <= e.indexOf("snap"),
            a = 0 <= e.indexOf("hover"),
            s = 0 <= e.indexOf("unconstrained");
        if (i) {
            if (2 !== t.handles) throw new Error("noUiSlider (" + lt + "): 'fixed' behaviour must be used with 2 handles");
            y(t, t.start[1] - t.start[0])
        }
        if (s && (t.margin || t.limit)) throw new Error("noUiSlider (" + lt + "): 'unconstrained' behaviour cannot be used with margin or limit");
        t.events = {
            tap: r || o,
            drag: n,
            fixed: i,
            snap: o,
            hover: a,
            unconstrained: s
        }
    }

    function P(t, e) {
        if (!1 !== e)
            if (!0 === e) {
                t.tooltips = [];
                for (var r = 0; r < t.handles; r++) t.tooltips.push(!0)
            } else {
                if (t.tooltips = dt(e), t.tooltips.length !== t.handles) throw new Error("noUiSlider (" + lt + "): must pass a formatter for all handles.");
                t.tooltips.forEach(function(t) {
                    if ("boolean" != typeof t && ("object" != typeof t || "function" != typeof t.to)) throw new Error("noUiSlider (" + lt + "): 'tooltips' must be passed a formatter or 'false'.")
                })
            }
    }

    function V(t, e) {
        d(t.ariaFormat = e)
    }

    function k(t, e) {
        d(t.format = e)
    }

    function A(t, e) {
        if ("boolean" != typeof(t.keyboardSupport = e)) throw new Error("noUiSlider (" + lt + "): 'keyboardSupport' option must be a boolean.")
    }

    function M(t, e) {
        t.documentElement = e
    }

    function O(t, e) {
        if ("string" != typeof e && !1 !== e) throw new Error("noUiSlider (" + lt + "): 'cssPrefix' must be a string or `false`.");
        t.cssPrefix = e
    }

    function L(t, e) {
        if ("object" != typeof e) throw new Error("noUiSlider (" + lt + "): 'cssClasses' must be an object.");
        if ("string" == typeof t.cssPrefix)
            for (var r in t.cssClasses = {}, e) e.hasOwnProperty(r) && (t.cssClasses[r] = t.cssPrefix + e[r]);
        else t.cssClasses = e
    }

    function vt(e) {
        var r = {
                margin: 0,
                limit: 0,
                padding: 0,
                animate: !0,
                animationDuration: 300,
                ariaFormat: u,
                format: u
            },
            n = {
                step: {
                    r: !1,
                    t: h
                },
                start: {
                    r: !0,
                    t: g
                },
                connect: {
                    r: !0,
                    t: x
                },
                direction: {
                    r: !0,
                    t: N
                },
                snap: {
                    r: !1,
                    t: v
                },
                animate: {
                    r: !1,
                    t: b
                },
                animationDuration: {
                    r: !1,
                    t: S
                },
                range: {
                    r: !0,
                    t: m
                },
                orientation: {
                    r: !1,
                    t: w
                },
                margin: {
                    r: !1,
                    t: y
                },
                limit: {
                    r: !1,
                    t: E
                },
                padding: {
                    r: !1,
                    t: C
                },
                behaviour: {
                    r: !0,
                    t: U
                },
                ariaFormat: {
                    r: !1,
                    t: V
                },
                format: {
                    r: !1,
                    t: k
                },
                tooltips: {
                    r: !1,
                    t: P
                },
                keyboardSupport: {
                    r: !0,
                    t: A
                },
                documentElement: {
                    r: !1,
                    t: M
                },
                cssPrefix: {
                    r: !0,
                    t: O
                },
                cssClasses: {
                    r: !0,
                    t: L
                }
            },
            i = {
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                keyboardSupport: !0,
                cssPrefix: "noUi-",
                cssClasses: {
                    target: "target",
                    base: "base",
                    origin: "origin",
                    handle: "handle",
                    handleLower: "handle-lower",
                    handleUpper: "handle-upper",
                    touchArea: "touch-area",
                    horizontal: "horizontal",
                    vertical: "vertical",
                    background: "background",
                    connect: "connect",
                    connects: "connects",
                    ltr: "ltr",
                    rtl: "rtl",
                    textDirectionLtr: "txt-dir-ltr",
                    textDirectionRtl: "txt-dir-rtl",
                    draggable: "draggable",
                    drag: "state-drag",
                    tap: "state-tap",
                    active: "active",
                    tooltip: "tooltip",
                    pips: "pips",
                    pipsHorizontal: "pips-horizontal",
                    pipsVertical: "pips-vertical",
                    marker: "marker",
                    markerHorizontal: "marker-horizontal",
                    markerVertical: "marker-vertical",
                    markerNormal: "marker-normal",
                    markerLarge: "marker-large",
                    markerSub: "marker-sub",
                    value: "value",
                    valueHorizontal: "value-horizontal",
                    valueVertical: "value-vertical",
                    valueNormal: "value-normal",
                    valueLarge: "value-large",
                    valueSub: "value-sub"
                }
            };
        e.format && !e.ariaFormat && (e.ariaFormat = e.format), Object.keys(n).forEach(function(t) {
            if (!s(e[t]) && void 0 === i[t]) {
                if (n[t].r) throw new Error("noUiSlider (" + lt + "): '" + t + "' is required.");
                return !0
            }
            n[t].t(r, s(e[t]) ? e[t] : i[t])
        }), r.pips = e.pips;
        var t = document.createElement("div"),
            o = void 0 !== t.style.msTransform,
            a = void 0 !== t.style.transform;
        r.transformRule = a ? "transform" : o ? "msTransform" : "webkitTransform";
        return r.style = [
            ["left", "top"],
            ["right", "bottom"]
        ][r.dir][r.ort], r
    }

    function D(t, v, o) {
        var l, u, a, c, i, s, e, p, f = window.navigator.pointerEnabled ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            } : {
                start: "mousedown touchstart",
                move: "mousemove touchmove",
                end: "mouseup touchend"
            },
            d = window.CSS && CSS.supports && CSS.supports("touch-action", "none") && function() {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function() {
                            t = !0
                        }
                    });
                    window.addEventListener("test", null, e)
                } catch (t) {}
                return t
            }(),
            h = t,
            y = v.spectrum,
            b = [],
            S = [],
            m = [],
            g = 0,
            x = {},
            w = t.ownerDocument,
            E = v.documentElement || w.documentElement,
            C = w.body,
            N = -1,
            U = 0,
            P = 1,
            V = 2,
            k = "rtl" === w.dir || 1 === v.ort ? 0 : 100;

        function A(t, e) {
            var r = w.createElement("div");
            return e && ht(r, e), t.appendChild(r), r
        }

        function M(t, e) {
            var r = A(t, v.cssClasses.origin),
                n = A(r, v.cssClasses.handle);
            return A(n, v.cssClasses.touchArea), n.setAttribute("data-handle", e), v.keyboardSupport && (n.setAttribute("tabindex", "0"), n.addEventListener("keydown", function(t) {
                return function(t, e) {
                    if (L() || D(e)) return !1;
                    var r = ["Left", "Right"],
                        n = ["Down", "Up"],
                        i = ["PageDown", "PageUp"],
                        o = ["Home", "End"];
                    v.dir && !v.ort ? r.reverse() : v.ort && !v.dir && (n.reverse(), i.reverse());
                    var a, s = t.key.replace("Arrow", ""),
                        l = s === i[0],
                        u = s === i[1],
                        c = s === n[0] || s === r[0] || l,
                        p = s === n[1] || s === r[1] || u,
                        f = s === o[0],
                        d = s === o[1];
                    if (!(c || p || f || d)) return !0;
                    if (t.preventDefault(), p || c) {
                        var h = c ? 0 : 1,
                            m = st(e),
                            g = m[h];
                        if (null === g) return !1;
                        !1 === g && (g = y.getDefaultStep(S[e], c, 10)), (u || l) && (g *= 5), g = Math.max(g, 1e-7), g *= c ? -1 : 1, a = b[e] + g
                    } else a = d ? v.spectrum.xVal[v.spectrum.xVal.length - 1] : v.spectrum.xVal[0];
                    return rt(e, y.toStepping(a), !0, !0), J("slide", e), J("update", e), J("change", e), J("set", e), !1
                }(t, e)
            })), n.setAttribute("role", "slider"), n.setAttribute("aria-orientation", v.ort ? "vertical" : "horizontal"), 0 === e ? ht(n, v.cssClasses.handleLower) : e === v.handles - 1 && ht(n, v.cssClasses.handleUpper), r
        }

        function O(t, e) {
            return !!e && A(t, v.cssClasses.connect)
        }

        function r(t, e) {
            return !!v.tooltips[e] && A(t.firstChild, v.cssClasses.tooltip)
        }

        function L() {
            return h.hasAttribute("disabled")
        }

        function D(t) {
            return u[t].hasAttribute("disabled")
        }

        function z() {
            i && (G("update.tooltips"), i.forEach(function(t) {
                t && ut(t)
            }), i = null)
        }

        function H() {
            z(), i = u.map(r), $("update.tooltips", function(t, e, r) {
                if (i[e]) {
                    var n = t[e];
                    !0 !== v.tooltips[e] && (n = v.tooltips[e].to(r[e])), i[e].innerHTML = n
                }
            })
        }

        function j(e, i, o) {
            var a = w.createElement("div"),
                s = [];
            s[U] = v.cssClasses.valueNormal, s[P] = v.cssClasses.valueLarge, s[V] = v.cssClasses.valueSub;
            var l = [];
            l[U] = v.cssClasses.markerNormal, l[P] = v.cssClasses.markerLarge, l[V] = v.cssClasses.markerSub;
            var u = [v.cssClasses.valueHorizontal, v.cssClasses.valueVertical],
                c = [v.cssClasses.markerHorizontal, v.cssClasses.markerVertical];

            function p(t, e) {
                var r = e === v.cssClasses.value,
                    n = r ? s : l;
                return e + " " + (r ? u : c)[v.ort] + " " + n[t]
            }
            return ht(a, v.cssClasses.pips), ht(a, 0 === v.ort ? v.cssClasses.pipsHorizontal : v.cssClasses.pipsVertical), Object.keys(e).forEach(function(t) {
                ! function(t, e, r) {
                    if ((r = i ? i(e, r) : r) !== N) {
                        var n = A(a, !1);
                        n.className = p(r, v.cssClasses.marker), n.style[v.style] = t + "%", U < r && ((n = A(a, !1)).className = p(r, v.cssClasses.value), n.setAttribute("data-value", e), n.style[v.style] = t + "%", n.innerHTML = o.to(e))
                    }
                }(t, e[t][0], e[t][1])
            }), a
        }

        function F() {
            c && (ut(c), c = null)
        }

        function R(t) {
            F();
            var m, g, v, b, e, r, S, x, w, n = t.mode,
                i = t.density || 1,
                o = t.filter || !1,
                a = function(t, e, r) {
                    if ("range" === t || "steps" === t) return y.xVal;
                    if ("count" === t) {
                        if (e < 2) throw new Error("noUiSlider (" + lt + "): 'values' (>= 2) required for mode 'count'.");
                        var n = e - 1,
                            i = 100 / n;
                        for (e = []; n--;) e[n] = n * i;
                        e.push(100), t = "positions"
                    }
                    return "positions" === t ? e.map(function(t) {
                        return y.fromStepping(r ? y.getStep(t) : t)
                    }) : "values" === t ? r ? e.map(function(t) {
                        return y.fromStepping(y.getStep(y.toStepping(t)))
                    }) : e : void 0
                }(n, t.values || !1, t.stepped || !1),
                s = (m = i, g = n, v = a, b = {}, e = y.xVal[0], r = y.xVal[y.xVal.length - 1], x = S = !1, w = 0, (v = v.slice().sort(function(t, e) {
                    return t - e
                }).filter(function(t) {
                    return !this[t] && (this[t] = !0)
                }, {}))[0] !== e && (v.unshift(e), S = !0), v[v.length - 1] !== r && (v.push(r), x = !0), v.forEach(function(t, e) {
                    var r, n, i, o, a, s, l, u, c, p, f = t,
                        d = v[e + 1],
                        h = "steps" === g;
                    if (h && (r = y.xNumSteps[e]), r || (r = d - f), !1 !== f && void 0 !== d)
                        for (r = Math.max(r, 1e-7), n = f; n <= d; n = (n + r).toFixed(7) / 1) {
                            for (u = (a = (o = y.toStepping(n)) - w) / m, p = a / (c = Math.round(u)), i = 1; i <= c; i += 1) b[(s = w + i * p).toFixed(5)] = [y.fromStepping(s), 0];
                            l = -1 < v.indexOf(n) ? P : h ? V : U, !e && S && (l = 0), n === d && x || (b[o.toFixed(5)] = [n, l]), w = o
                        }
                }), b),
                l = t.format || {
                    to: Math.round
                };
            return c = h.appendChild(j(s, o, l))
        }

        function T() {
            var t = l.getBoundingClientRect(),
                e = "offset" + ["Width", "Height"][v.ort];
            return 0 === v.ort ? t.width || l[e] : t.height || l[e]
        }

        function B(n, i, o, a) {
            var e = function(t) {
                    return !!(t = function(t, e, r) {
                        var n, i, o = 0 === t.type.indexOf("touch"),
                            a = 0 === t.type.indexOf("mouse"),
                            s = 0 === t.type.indexOf("pointer");
                        0 === t.type.indexOf("MSPointer") && (s = !0);
                        if (o) {
                            var l = function(t) {
                                return t.target === r || r.contains(t.target)
                            };
                            if ("touchstart" === t.type) {
                                var u = Array.prototype.filter.call(t.touches, l);
                                if (1 < u.length) return !1;
                                n = u[0].pageX, i = u[0].pageY
                            } else {
                                var c = Array.prototype.find.call(t.changedTouches, l);
                                if (!c) return !1;
                                n = c.pageX, i = c.pageY
                            }
                        }
                        e = e || gt(w), (a || s) && (n = t.clientX + e.x, i = t.clientY + e.y);
                        return t.pageOffset = e, t.points = [n, i], t.cursor = a || s, t
                    }(t, a.pageOffset, a.target || i)) && (!(L() && !a.doNotReject) && (e = h, r = v.cssClasses.tap, !((e.classList ? e.classList.contains(r) : new RegExp("\\b" + r + "\\b").test(e.className)) && !a.doNotReject) && (!(n === f.start && void 0 !== t.buttons && 1 < t.buttons) && ((!a.hover || !t.buttons) && (d || t.preventDefault(), t.calcPoint = t.points[v.ort], void o(t, a))))));
                    var e, r
                },
                r = [];
            return n.split(" ").forEach(function(t) {
                i.addEventListener(t, e, !!d && {
                    passive: !0
                }), r.push([t, e])
            }), r
        }

        function q(t) {
            var e, r, n, i, o, a, s = 100 * (t - (e = l, r = v.ort, n = e.getBoundingClientRect(), i = e.ownerDocument, o = i.documentElement, a = gt(i), /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (a.x = 0), r ? n.top + a.y - o.clientTop : n.left + a.x - o.clientLeft)) / T();
            return s = ft(s), v.dir ? 100 - s : s
        }

        function X(t, e) {
            "mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && _(t, e)
        }

        function Y(t, e) {
            if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === t.buttons && 0 !== e.buttonsProperty) return _(t, e);
            var r = (v.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
            Z(0 < r, 100 * r / e.baseSize, e.locations, e.handleNumbers)
        }

        function _(t, e) {
            e.handle && (mt(e.handle, v.cssClasses.active), g -= 1), e.listeners.forEach(function(t) {
                E.removeEventListener(t[0], t[1])
            }), 0 === g && (mt(h, v.cssClasses.drag), et(), t.cursor && (C.style.cursor = "", C.removeEventListener("selectstart", ct))), e.handleNumbers.forEach(function(t) {
                J("change", t), J("set", t), J("end", t)
            })
        }

        function I(t, e) {
            if (e.handleNumbers.some(D)) return !1;
            var r;
            1 === e.handleNumbers.length && (r = u[e.handleNumbers[0]].children[0], g += 1, ht(r, v.cssClasses.active));
            t.stopPropagation();
            var n = [],
                i = B(f.move, E, Y, {
                    target: t.target,
                    handle: r,
                    listeners: n,
                    startCalcPoint: t.calcPoint,
                    baseSize: T(),
                    pageOffset: t.pageOffset,
                    handleNumbers: e.handleNumbers,
                    buttonsProperty: t.buttons,
                    locations: S.slice()
                }),
                o = B(f.end, E, _, {
                    target: t.target,
                    handle: r,
                    listeners: n,
                    doNotReject: !0,
                    handleNumbers: e.handleNumbers
                }),
                a = B("mouseout", E, X, {
                    target: t.target,
                    handle: r,
                    listeners: n,
                    doNotReject: !0,
                    handleNumbers: e.handleNumbers
                });
            n.push.apply(n, i.concat(o, a)), t.cursor && (C.style.cursor = getComputedStyle(t.target).cursor, 1 < u.length && ht(h, v.cssClasses.drag), C.addEventListener("selectstart", ct, !1)), e.handleNumbers.forEach(function(t) {
                J("start", t)
            })
        }

        function n(t) {
            t.stopPropagation();
            var i, o, a, e = q(t.calcPoint),
                r = (i = e, a = !(o = 100), u.forEach(function(t, e) {
                    if (!D(e)) {
                        var r = S[e],
                            n = Math.abs(r - i);
                        (n < o || n <= o && r < i || 100 === n && 100 === o) && (a = e, o = n)
                    }
                }), a);
            if (!1 === r) return !1;
            v.events.snap || pt(h, v.cssClasses.tap, v.animationDuration), rt(r, e, !0, !0), et(), J("slide", r, !0), J("update", r, !0), J("change", r, !0), J("set", r, !0), v.events.snap && I(t, {
                handleNumbers: [r]
            })
        }

        function W(t) {
            var e = q(t.calcPoint),
                r = y.getStep(e),
                n = y.fromStepping(r);
            Object.keys(x).forEach(function(t) {
                "hover" === t.split(".")[0] && x[t].forEach(function(t) {
                    t.call(s, n)
                })
            })
        }

        function $(t, e) {
            x[t] = x[t] || [], x[t].push(e), "update" === t.split(".")[0] && u.forEach(function(t, e) {
                J("update", e)
            })
        }

        function G(t) {
            var n = t && t.split(".")[0],
                i = n && t.substring(n.length);
            Object.keys(x).forEach(function(t) {
                var e = t.split(".")[0],
                    r = t.substring(e.length);
                n && n !== e || i && i !== r || delete x[t]
            })
        }

        function J(r, n, i) {
            Object.keys(x).forEach(function(t) {
                var e = t.split(".")[0];
                r === e && x[t].forEach(function(t) {
                    t.call(s, b.map(v.format.to), n, b.slice(), i || !1, S.slice())
                })
            })
        }

        function K(t, e, r, n, i, o) {
            return 1 < u.length && !v.events.unconstrained && (n && 0 < e && (r = Math.max(r, t[e - 1] + v.margin)), i && e < u.length - 1 && (r = Math.min(r, t[e + 1] - v.margin))), 1 < u.length && v.limit && (n && 0 < e && (r = Math.min(r, t[e - 1] + v.limit)), i && e < u.length - 1 && (r = Math.max(r, t[e + 1] - v.limit))), v.padding && (0 === e && (r = Math.max(r, v.padding[0])), e === u.length - 1 && (r = Math.min(r, 100 - v.padding[1]))), !((r = ft(r = y.getStep(r))) === t[e] && !o) && r
        }

        function Q(t, e) {
            var r = v.ort;
            return (r ? e : t) + ", " + (r ? t : e)
        }

        function Z(t, n, r, e) {
            var i = r.slice(),
                o = [!t, t],
                a = [t, !t];
            e = e.slice(), t && e.reverse(), 1 < e.length ? e.forEach(function(t, e) {
                var r = K(i, t, i[t] + n, o[e], a[e], !1);
                !1 === r ? n = 0 : (n = r - i[t], i[t] = r)
            }) : o = a = [!0];
            var s = !1;
            e.forEach(function(t, e) {
                s = rt(t, r[t] + n, o[e], a[e]) || s
            }), s && e.forEach(function(t) {
                J("update", t), J("slide", t)
            })
        }

        function tt(t, e) {
            return v.dir ? 100 - t - e : t
        }

        function et() {
            m.forEach(function(t) {
                var e = 50 < S[t] ? -1 : 1,
                    r = 3 + (u.length + e * t);
                u[t].style.zIndex = r
            })
        }

        function rt(t, e, r, n) {
            return !1 !== (e = K(S, t, e, r, n, !1)) && (function(t, e) {
                S[t] = e, b[t] = y.fromStepping(e);
                var r = "translate(" + Q(10 * (tt(e, 0) - k) + "%", "0") + ")";
                u[t].style[v.transformRule] = r, nt(t), nt(t + 1)
            }(t, e), !0)
        }

        function nt(t) {
            if (a[t]) {
                var e = 0,
                    r = 100;
                0 !== t && (e = S[t - 1]), t !== a.length - 1 && (r = S[t]);
                var n = r - e,
                    i = "translate(" + Q(tt(e, n) + "%", "0") + ")",
                    o = "scale(" + Q(n / 100, "1") + ")";
                a[t].style[v.transformRule] = i + " " + o
            }
        }

        function it(t, e) {
            return null === t || !1 === t || void 0 === t ? S[e] : ("number" == typeof t && (t = String(t)), t = v.format.from(t), !1 === (t = y.toStepping(t)) || isNaN(t) ? S[e] : t)
        }

        function ot(t, e) {
            var r = dt(t),
                n = void 0 === S[0];
            e = void 0 === e || !!e, v.animate && !n && pt(h, v.cssClasses.tap, v.animationDuration), m.forEach(function(t) {
                rt(t, it(r[t], t), !0, !1)
            });
            for (var i = 1 === m.length ? 0 : 1; i < m.length; ++i) m.forEach(function(t) {
                rt(t, S[t], !0, !0)
            });
            et(), m.forEach(function(t) {
                J("update", t), null !== r[t] && e && J("set", t)
            })
        }

        function at() {
            var t = b.map(v.format.to);
            return 1 === t.length ? t[0] : t
        }

        function st(t) {
            var e = S[t],
                r = y.getNearbySteps(e),
                n = b[t],
                i = r.thisStep.step,
                o = null;
            if (v.snap) return [n - r.stepBefore.startValue || null, r.stepAfter.startValue - n || null];
            !1 !== i && n + i > r.stepAfter.startValue && (i = r.stepAfter.startValue - n), o = n > r.thisStep.startValue ? r.thisStep.step : !1 !== r.stepBefore.step && n - r.stepBefore.highestStep, 100 === e ? i = null : 0 === e && (o = null);
            var a = y.countStepDecimals();
            return null !== i && !1 !== i && (i = Number(i.toFixed(a))), null !== o && !1 !== o && (o = Number(o.toFixed(a))), [o, i]
        }
        return ht(e = h, v.cssClasses.target), 0 === v.dir ? ht(e, v.cssClasses.ltr) : ht(e, v.cssClasses.rtl), 0 === v.ort ? ht(e, v.cssClasses.horizontal) : ht(e, v.cssClasses.vertical), ht(e, "ltr" === getComputedStyle(e).direction ? v.cssClasses.textDirectionLtr : v.cssClasses.textDirectionRtl), l = A(e, v.cssClasses.base),
            function(t, e) {
                var r = A(e, v.cssClasses.connects);
                u = [], (a = []).push(O(r, t[0]));
                for (var n = 0; n < v.handles; n++) u.push(M(e, n)), m[n] = n, a.push(O(r, t[n + 1]))
            }(v.connect, l), (p = v.events).fixed || u.forEach(function(t, e) {
                B(f.start, t.children[0], I, {
                    handleNumbers: [e]
                })
            }), p.tap && B(f.start, l, n, {}), p.hover && B(f.move, l, W, {
                hover: !0
            }), p.drag && a.forEach(function(t, e) {
                if (!1 !== t && 0 !== e && e !== a.length - 1) {
                    var r = u[e - 1],
                        n = u[e],
                        i = [t];
                    ht(t, v.cssClasses.draggable), p.fixed && (i.push(r.children[0]), i.push(n.children[0])), i.forEach(function(t) {
                        B(f.start, t, I, {
                            handles: [r, n],
                            handleNumbers: [e - 1, e]
                        })
                    })
                }
            }), ot(v.start), v.pips && R(v.pips), v.tooltips && H(), $("update", function(t, e, a, r, s) {
                m.forEach(function(t) {
                    var e = u[t],
                        r = K(S, t, 0, !0, !0, !0),
                        n = K(S, t, 100, !0, !0, !0),
                        i = s[t],
                        o = v.ariaFormat.to(a[t]);
                    r = y.fromStepping(r).toFixed(1), n = y.fromStepping(n).toFixed(1), i = y.fromStepping(i).toFixed(1), e.children[0].setAttribute("aria-valuemin", r), e.children[0].setAttribute("aria-valuemax", n), e.children[0].setAttribute("aria-valuenow", i), e.children[0].setAttribute("aria-valuetext", o)
                })
            }), s = {
                destroy: function() {
                    for (var t in v.cssClasses) v.cssClasses.hasOwnProperty(t) && mt(h, v.cssClasses[t]);
                    for (; h.firstChild;) h.removeChild(h.firstChild);
                    delete h.noUiSlider
                },
                steps: function() {
                    return m.map(st)
                },
                on: $,
                off: G,
                get: at,
                set: ot,
                setHandle: function(t, e, r) {
                    if (!(0 <= (t = Number(t)) && t < m.length)) throw new Error("noUiSlider (" + lt + "): invalid handle number, got: " + t);
                    rt(t, it(e, t), !0, !0), J("update", t), r && J("set", t)
                },
                reset: function(t) {
                    ot(v.start, t)
                },
                __moveHandles: function(t, e, r) {
                    Z(t, e, S, r)
                },
                options: o,
                updateOptions: function(e, t) {
                    var r = at(),
                        n = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"];
                    n.forEach(function(t) {
                        void 0 !== e[t] && (o[t] = e[t])
                    });
                    var i = vt(o);
                    n.forEach(function(t) {
                        void 0 !== e[t] && (v[t] = i[t])
                    }), y = i.spectrum, v.margin = i.margin, v.limit = i.limit, v.padding = i.padding, v.pips ? R(v.pips) : F(), v.tooltips ? H() : z(), S = [], ot(e.start || r, t)
                },
                target: h,
                removePips: F,
                removeTooltips: z,
                pips: R
            }
    }
    return {
        __spectrum: l,
        version: lt,
        create: function(t, e) {
            if (!t || !t.nodeName) throw new Error("noUiSlider (" + lt + "): create requires a single element, got: " + t);
            if (t.noUiSlider) throw new Error("noUiSlider (" + lt + "): Slider was already initialized.");
            var r = D(t, vt(e), e);
            return t.noUiSlider = r
        }
    }
});
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Shuffle = e()
}(this, (function() {
    "use strict";

    function t(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function e(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function i(t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t
    }

    function n(t) {
        return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function s(t, e) {
        return (s = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function o(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function r() {}
    r.prototype = {
        on: function(t, e, i) {
            var n = this.e || (this.e = {});
            return (n[t] || (n[t] = [])).push({
                fn: e,
                ctx: i
            }), this
        },
        once: function(t, e, i) {
            var n = this;

            function s() {
                n.off(t, s), e.apply(i, arguments)
            }
            return s._ = e, this.on(t, s, i)
        },
        emit: function(t) {
            for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, s = i.length; n < s; n++) i[n].fn.apply(i[n].ctx, e);
            return this
        },
        off: function(t, e) {
            var i = this.e || (this.e = {}),
                n = i[t],
                s = [];
            if (n && e)
                for (var o = 0, r = n.length; o < r; o++) n[o].fn !== e && n[o].fn._ !== e && s.push(n[o]);
            return s.length ? i[t] = s : delete i[t], this
        }
    };
    var l = r,
        a = r;
    l.TinyEmitter = a;
    var u = "undefined" != typeof Element ? Element.prototype : {},
        h = u.matches || u.matchesSelector || u.webkitMatchesSelector || u.mozMatchesSelector || u.msMatchesSelector || u.oMatchesSelector,
        f = function(t, e) {
            if (!t || 1 !== t.nodeType) return !1;
            if (h) return h.call(t, e);
            for (var i = t.parentNode.querySelectorAll(e), n = 0; n < i.length; n++)
                if (i[n] == t) return !0;
            return !1
        };
    var c = function(t, e) {
        var i, n, s, o, r = 0;
        return function() {
            i = this, n = arguments;
            var t = new Date - r;
            return o || (t >= e ? l() : o = setTimeout(l, e - t)), s
        };

        function l() {
            o = 0, r = +new Date, s = t.apply(i, n), i = null, n = null
        }
    };

    function d() {}

    function m(t) {
        return parseFloat(t) || 0
    }
    var p = function() {
            function e(i, n) {
                t(this, e), this.x = m(i), this.y = m(n)
            }
            return i(e, null, [{
                key: "equals",
                value: function(t, e) {
                    return t.x === e.x && t.y === e.y
                }
            }]), e
        }(),
        v = function() {
            function e(i, n, s, o, r) {
                t(this, e), this.id = r, this.left = i, this.top = n, this.width = s, this.height = o
            }
            return i(e, null, [{
                key: "intersects",
                value: function(t, e) {
                    return t.left < e.left + e.width && e.left < t.left + t.width && t.top < e.top + e.height && e.top < t.top + t.height
                }
            }]), e
        }(),
        y = {
            BASE: "shuffle",
            SHUFFLE_ITEM: "shuffle-item",
            VISIBLE: "shuffle-item--visible",
            HIDDEN: "shuffle-item--hidden"
        },
        g = 0,
        _ = function() {
            function e(i) {
                t(this, e), g += 1, this.id = g, this.element = i, this.isVisible = !0, this.isHidden = !1
            }
            return i(e, [{
                key: "show",
                value: function() {
                    this.isVisible = !0, this.element.classList.remove(y.HIDDEN), this.element.classList.add(y.VISIBLE), this.element.removeAttribute("aria-hidden")
                }
            }, {
                key: "hide",
                value: function() {
                    this.isVisible = !1, this.element.classList.remove(y.VISIBLE), this.element.classList.add(y.HIDDEN), this.element.setAttribute("aria-hidden", !0)
                }
            }, {
                key: "init",
                value: function() {
                    this.addClasses([y.SHUFFLE_ITEM, y.VISIBLE]), this.applyCss(e.Css.INITIAL), this.scale = e.Scale.VISIBLE, this.point = new p
                }
            }, {
                key: "addClasses",
                value: function(t) {
                    var e = this;
                    t.forEach((function(t) {
                        e.element.classList.add(t)
                    }))
                }
            }, {
                key: "removeClasses",
                value: function(t) {
                    var e = this;
                    t.forEach((function(t) {
                        e.element.classList.remove(t)
                    }))
                }
            }, {
                key: "applyCss",
                value: function(t) {
                    var e = this;
                    Object.keys(t).forEach((function(i) {
                        e.element.style[i] = t[i]
                    }))
                }
            }, {
                key: "dispose",
                value: function() {
                    this.removeClasses([y.HIDDEN, y.VISIBLE, y.SHUFFLE_ITEM]), this.element.removeAttribute("style"), this.element = null
                }
            }]), e
        }();
    _.Css = {
        INITIAL: {
            position: "absolute",
            top: 0,
            left: 0,
            visibility: "visible",
            willChange: "transform"
        },
        VISIBLE: {
            before: {
                opacity: 1,
                visibility: "visible"
            },
            after: {
                transitionDelay: ""
            }
        },
        HIDDEN: {
            before: {
                opacity: 0
            },
            after: {
                visibility: "hidden",
                transitionDelay: ""
            }
        }
    }, _.Scale = {
        VISIBLE: 1,
        HIDDEN: .001
    };
    var E = null,
        I = function() {
            if (null !== E) return E;
            var t = document.body || document.documentElement,
                e = document.createElement("div");
            return e.style.cssText = "width:10px;padding:2px;box-sizing:border-box;", t.appendChild(e), E = "10px" === window.getComputedStyle(e, null).width, t.removeChild(e), E
        };

    function b(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.getComputedStyle(t, null),
            n = m(i[e]);
        return I() || "width" !== e ? I() || "height" !== e || (n += m(i.paddingTop) + m(i.paddingBottom) + m(i.borderTopWidth) + m(i.borderBottomWidth)) : n += m(i.paddingLeft) + m(i.paddingRight) + m(i.borderLeftWidth) + m(i.borderRightWidth), n
    }
    var S = {
        reverse: !1,
        by: null,
        compare: null,
        randomize: !1,
        key: "element"
    };

    function T(t, e) {
        var i = Object.assign({}, S, e),
            n = Array.from(t),
            s = !1;
        return t.length ? i.randomize ? function(t) {
            for (var e = t.length; e;) {
                e -= 1;
                var i = Math.floor(Math.random() * (e + 1)),
                    n = t[i];
                t[i] = t[e], t[e] = n
            }
            return t
        }(t) : ("function" == typeof i.by ? t.sort((function(t, e) {
            if (s) return 0;
            var n = i.by(t[i.key]),
                o = i.by(e[i.key]);
            return void 0 === n && void 0 === o ? (s = !0, 0) : n < o || "sortFirst" === n || "sortLast" === o ? -1 : n > o || "sortLast" === n || "sortFirst" === o ? 1 : 0
        })) : "function" == typeof i.compare && t.sort(i.compare), s ? n : (i.reverse && t.reverse(), t)) : []
    }
    var k = {},
        w = 0;

    function C(t) {
        return !!k[t] && (k[t].element.removeEventListener("transitionend", k[t].listener), k[t] = null, !0)
    }

    function L(t, e) {
        var i = "transitionend" + (w += 1),
            n = function(t) {
                t.currentTarget === t.target && (C(i), e(t))
            };
        return t.addEventListener("transitionend", n), k[i] = {
            element: t,
            listener: n
        }, i
    }

    function D(t) {
        return Math.max.apply(Math, t)
    }

    function z(t, e, i, n) {
        var s = t / e;
        return Math.abs(Math.round(s) - s) < n && (s = Math.round(s)), Math.min(Math.ceil(s), i)
    }

    function M(t, e, i) {
        if (1 === e) return t;
        for (var n = [], s = 0; s <= i - e; s++) n.push(D(t.slice(s, s + e)));
        return n
    }

    function A(t, e) {
        for (var i, n = (i = t, Math.min.apply(Math, i)), s = 0, o = t.length; s < o; s++)
            if (t[s] >= n - e && t[s] <= n + e) return s;
        return 0
    }

    function F(t, e) {
        var i = {};
        t.forEach((function(t) {
            i[t.top] ? i[t.top].push(t) : i[t.top] = [t]
        }));
        var n = [],
            s = [],
            o = [];
        return Object.keys(i).forEach((function(t) {
            var r = i[t];
            s.push(r);
            var l, a = r[r.length - 1],
                u = a.left + a.width,
                h = Math.round((e - u) / 2),
                f = r,
                c = !1;
            if (h > 0) {
                var d = [];
                (c = r.every((function(t) {
                    var e = new v(t.left + h, t.top, t.width, t.height, t.id),
                        i = !n.some((function(t) {
                            return v.intersects(e, t)
                        }));
                    return d.push(e), i
                }))) && (f = d)
            }
            if (!c && r.some((function(t) {
                    return n.some((function(e) {
                        var i = v.intersects(t, e);
                        return i && (l = e), i
                    }))
                }))) {
                var m = o.findIndex((function(t) {
                    return t.includes(l)
                }));
                o.splice(m, 1, s[m])
            }
            n = n.concat(f), o.push(f)
        })), [].concat.apply([], o).sort((function(t, e) {
            return t.id - e.id
        })).map((function(t) {
            return new p(t.left, t.top)
        }))
    }

    function x(t) {
        return Array.from(new Set(t))
    }
    var O = 0,
        N = function(e) {
            function r(e) {
                var i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                t(this, r), (i = o(this, n(r).call(this))).options = Object.assign({}, r.options, s), i.options.delimeter && (i.options.delimiter = i.options.delimeter), i.lastSort = {}, i.group = r.ALL_ITEMS, i.lastFilter = r.ALL_ITEMS, i.isEnabled = !0, i.isDestroyed = !1, i.isInitialized = !1, i._transitions = [], i.isTransitioning = !1, i._queue = [];
                var l = i._getElementOption(e);
                if (!l) throw new TypeError("Shuffle needs to be initialized with an element.");
                return i.element = l, i.id = "shuffle_" + O, O += 1, i._init(), i.isInitialized = !0, i
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && s(t, e)
            }(r, e), i(r, [{
                key: "_init",
                value: function() {
                    if (this.items = this._getItems(), this.options.sizer = this._getElementOption(this.options.sizer), this.element.classList.add(r.Classes.BASE), this._initItems(this.items), this._onResize = this._getResizeFunction(), window.addEventListener("resize", this._onResize), "complete" !== document.readyState) {
                        var t = this.layout.bind(this);
                        window.addEventListener("load", (function e() {
                            window.removeEventListener("load", e), t()
                        }))
                    }
                    var e = window.getComputedStyle(this.element, null),
                        i = r.getSize(this.element).width;
                    this._validateStyles(e), this._setColumns(i), this.filter(this.options.group, this.options.initialSort), this.element.offsetWidth, this.setItemTransitions(this.items), this.element.style.transition = "height ".concat(this.options.speed, "ms ").concat(this.options.easing)
                }
            }, {
                key: "_getResizeFunction",
                value: function() {
                    var t = this._handleResize.bind(this);
                    return this.options.throttle ? this.options.throttle(t, this.options.throttleTime) : t
                }
            }, {
                key: "_getElementOption",
                value: function(t) {
                    return "string" == typeof t ? this.element.querySelector(t) : t && t.nodeType && 1 === t.nodeType ? t : t && t.jquery ? t[0] : null
                }
            }, {
                key: "_validateStyles",
                value: function(t) {
                    "static" === t.position && (this.element.style.position = "relative"), "hidden" !== t.overflow && (this.element.style.overflow = "hidden")
                }
            }, {
                key: "_filter",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.lastFilter,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.items,
                        i = this._getFilteredSets(t, e);
                    return this._toggleFilterClasses(i), this.lastFilter = t, "string" == typeof t && (this.group = t), i
                }
            }, {
                key: "_getFilteredSets",
                value: function(t, e) {
                    var i = this,
                        n = [],
                        s = [];
                    return t === r.ALL_ITEMS ? n = e : e.forEach((function(e) {
                        i._doesPassFilter(t, e.element) ? n.push(e) : s.push(e)
                    })), {
                        visible: n,
                        hidden: s
                    }
                }
            }, {
                key: "_doesPassFilter",
                value: function(t, e) {
                    if ("function" == typeof t) return t.call(e, e, this);
                    var i = e.getAttribute("data-" + r.FILTER_ATTRIBUTE_KEY),
                        n = this.options.delimiter ? i.split(this.options.delimiter) : JSON.parse(i);

                    function s(t) {
                        return n.includes(t)
                    }
                    return Array.isArray(t) ? this.options.filterMode === r.FilterMode.ANY ? t.some(s) : t.every(s) : n.includes(t)
                }
            }, {
                key: "_toggleFilterClasses",
                value: function(t) {
                    var e = t.visible,
                        i = t.hidden;
                    e.forEach((function(t) {
                        t.show()
                    })), i.forEach((function(t) {
                        t.hide()
                    }))
                }
            }, {
                key: "_initItems",
                value: function(t) {
                    t.forEach((function(t) {
                        t.init()
                    }))
                }
            }, {
                key: "_disposeItems",
                value: function(t) {
                    t.forEach((function(t) {
                        t.dispose()
                    }))
                }
            }, {
                key: "_updateItemCount",
                value: function() {
                    this.visibleItems = this._getFilteredItems().length
                }
            }, {
                key: "setItemTransitions",
                value: function(t) {
                    var e = this.options,
                        i = e.speed,
                        n = e.easing,
                        s = this.options.useTransforms ? ["transform"] : ["top", "left"],
                        o = Object.keys(_.Css.HIDDEN.before).map((function(t) {
                            return t.replace(/([A-Z])/g, (function(t, e) {
                                return "-".concat(e.toLowerCase())
                            }))
                        })),
                        r = s.concat(o).join();
                    t.forEach((function(t) {
                        t.element.style.transitionDuration = i + "ms", t.element.style.transitionTimingFunction = n, t.element.style.transitionProperty = r
                    }))
                }
            }, {
                key: "_getItems",
                value: function() {
                    var t = this;
                    return Array.from(this.element.children).filter((function(e) {
                        return f(e, t.options.itemSelector)
                    })).map((function(t) {
                        return new _(t)
                    }))
                }
            }, {
                key: "_mergeNewItems",
                value: function(t) {
                    var e = Array.from(this.element.children);
                    return T(this.items.concat(t), {
                        by: function(t) {
                            return e.indexOf(t)
                        }
                    })
                }
            }, {
                key: "_getFilteredItems",
                value: function() {
                    return this.items.filter((function(t) {
                        return t.isVisible
                    }))
                }
            }, {
                key: "_getConcealedItems",
                value: function() {
                    return this.items.filter((function(t) {
                        return !t.isVisible
                    }))
                }
            }, {
                key: "_getColumnSize",
                value: function(t, e) {
                    var i;
                    return 0 === (i = "function" == typeof this.options.columnWidth ? this.options.columnWidth(t) : this.options.sizer ? r.getSize(this.options.sizer).width : this.options.columnWidth ? this.options.columnWidth : this.items.length > 0 ? r.getSize(this.items[0].element, !0).width : t) && (i = t), i + e
                }
            }, {
                key: "_getGutterSize",
                value: function(t) {
                    return "function" == typeof this.options.gutterWidth ? this.options.gutterWidth(t) : this.options.sizer ? b(this.options.sizer, "marginLeft") : this.options.gutterWidth
                }
            }, {
                key: "_setColumns",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.getSize(this.element).width,
                        e = this._getGutterSize(t),
                        i = this._getColumnSize(t, e),
                        n = (t + e) / i;
                    Math.abs(Math.round(n) - n) < this.options.columnThreshold && (n = Math.round(n)), this.cols = Math.max(Math.floor(n || 0), 1), this.containerWidth = t, this.colWidth = i
                }
            }, {
                key: "_setContainerSize",
                value: function() {
                    this.element.style.height = this._getContainerSize() + "px"
                }
            }, {
                key: "_getContainerSize",
                value: function() {
                    return D(this.positions)
                }
            }, {
                key: "_getStaggerAmount",
                value: function(t) {
                    return Math.min(t * this.options.staggerAmount, this.options.staggerAmountMax)
                }
            }, {
                key: "_dispatch",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.isDestroyed || (e.shuffle = this, this.emit(t, e))
                }
            }, {
                key: "_resetCols",
                value: function() {
                    var t = this.cols;
                    for (this.positions = []; t;) t -= 1, this.positions.push(0)
                }
            }, {
                key: "_layout",
                value: function(t) {
                    var e = this,
                        i = this._getNextPositions(t),
                        n = 0;
                    t.forEach((function(t, s) {
                        function o() {
                            t.applyCss(_.Css.VISIBLE.after)
                        }
                        if (p.equals(t.point, i[s]) && !t.isHidden) return t.applyCss(_.Css.VISIBLE.before), void o();
                        t.point = i[s], t.scale = _.Scale.VISIBLE, t.isHidden = !1;
                        var r = e.getStylesForTransition(t, _.Css.VISIBLE.before);
                        r.transitionDelay = e._getStaggerAmount(n) + "ms", e._queue.push({
                            item: t,
                            styles: r,
                            callback: o
                        }), n += 1
                    }))
                }
            }, {
                key: "_getNextPositions",
                value: function(t) {
                    var e = this;
                    if (this.options.isCentered) {
                        var i = t.map((function(t, i) {
                            var n = r.getSize(t.element, !0),
                                s = e._getItemPosition(n);
                            return new v(s.x, s.y, n.width, n.height, i)
                        }));
                        return this.getTransformedPositions(i, this.containerWidth)
                    }
                    return t.map((function(t) {
                        return e._getItemPosition(r.getSize(t.element, !0))
                    }))
                }
            }, {
                key: "_getItemPosition",
                value: function(t) {
                    return function(t) {
                        for (var e = t.itemSize, i = t.positions, n = t.gridSize, s = t.total, o = t.threshold, r = t.buffer, l = z(e.width, n, s, o), a = M(i, l, s), u = A(a, r), h = new p(n * u, a[u]), f = a[u] + e.height, c = 0; c < l; c++) i[u + c] = f;
                        return h
                    }({
                        itemSize: t,
                        positions: this.positions,
                        gridSize: this.colWidth,
                        total: this.cols,
                        threshold: this.options.columnThreshold,
                        buffer: this.options.buffer
                    })
                }
            }, {
                key: "getTransformedPositions",
                value: function(t, e) {
                    return F(t, e)
                }
            }, {
                key: "_shrink",
                value: function() {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getConcealedItems(),
                        i = 0;
                    e.forEach((function(e) {
                        function n() {
                            e.applyCss(_.Css.HIDDEN.after)
                        }
                        if (e.isHidden) return e.applyCss(_.Css.HIDDEN.before), void n();
                        e.scale = _.Scale.HIDDEN, e.isHidden = !0;
                        var s = t.getStylesForTransition(e, _.Css.HIDDEN.before);
                        s.transitionDelay = t._getStaggerAmount(i) + "ms", t._queue.push({
                            item: e,
                            styles: s,
                            callback: n
                        }), i += 1
                    }))
                }
            }, {
                key: "_handleResize",
                value: function() {
                    this.isEnabled && !this.isDestroyed && this.update()
                }
            }, {
                key: "getStylesForTransition",
                value: function(t, e) {
                    var i = Object.assign({}, e);
                    if (this.options.useTransforms) {
                        var n = this.options.roundTransforms ? Math.round(t.point.x) : t.point.x,
                            s = this.options.roundTransforms ? Math.round(t.point.y) : t.point.y;
                        i.transform = "translate(".concat(n, "px, ").concat(s, "px) scale(").concat(t.scale, ")")
                    } else i.left = t.point.x + "px", i.top = t.point.y + "px";
                    return i
                }
            }, {
                key: "_whenTransitionDone",
                value: function(t, e, i) {
                    var n = L(t, (function(t) {
                        e(), i(null, t)
                    }));
                    this._transitions.push(n)
                }
            }, {
                key: "_getTransitionFunction",
                value: function(t) {
                    var e = this;
                    return function(i) {
                        t.item.applyCss(t.styles), e._whenTransitionDone(t.item.element, t.callback, i)
                    }
                }
            }, {
                key: "_processQueue",
                value: function() {
                    this.isTransitioning && this._cancelMovement();
                    var t = this.options.speed > 0,
                        e = this._queue.length > 0;
                    e && t && this.isInitialized ? this._startTransitions(this._queue) : e ? (this._styleImmediately(this._queue), this._dispatch(r.EventType.LAYOUT)) : this._dispatch(r.EventType.LAYOUT), this._queue.length = 0
                }
            }, {
                key: "_startTransitions",
                value: function(t) {
                    var e = this;
                    this.isTransitioning = !0,
                        function(t, e, i) {
                            i || ("function" == typeof e ? (i = e, e = null) : i = d);
                            var n = t && t.length;
                            if (!n) return i(null, []);
                            var s = !1,
                                o = new Array(n);

                            function r(t) {
                                return function(e, r) {
                                    if (!s) {
                                        if (e) return i(e, o), void(s = !0);
                                        o[t] = r, --n || i(null, o)
                                    }
                                }
                            }
                            t.forEach(e ? function(t, i) {
                                t.call(e, r(i))
                            } : function(t, e) {
                                t(r(e))
                            })
                        }(t.map((function(t) {
                            return e._getTransitionFunction(t)
                        })), this._movementFinished.bind(this))
                }
            }, {
                key: "_cancelMovement",
                value: function() {
                    this._transitions.forEach(C), this._transitions.length = 0, this.isTransitioning = !1
                }
            }, {
                key: "_styleImmediately",
                value: function(t) {
                    if (t.length) {
                        var e = t.map((function(t) {
                            return t.item.element
                        }));
                        r._skipTransitions(e, (function() {
                            t.forEach((function(t) {
                                t.item.applyCss(t.styles), t.callback()
                            }))
                        }))
                    }
                }
            }, {
                key: "_movementFinished",
                value: function() {
                    this._transitions.length = 0, this.isTransitioning = !1, this._dispatch(r.EventType.LAYOUT)
                }
            }, {
                key: "filter",
                value: function(t, e) {
                    this.isEnabled && ((!t || t && 0 === t.length) && (t = r.ALL_ITEMS), this._filter(t), this._shrink(), this._updateItemCount(), this.sort(e))
                }
            }, {
                key: "sort",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.lastSort;
                    if (this.isEnabled) {
                        this._resetCols();
                        var e = T(this._getFilteredItems(), t);
                        this._layout(e), this._processQueue(), this._setContainerSize(), this.lastSort = t
                    }
                }
            }, {
                key: "update",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.isEnabled && (t || this._setColumns(), this.sort())
                }
            }, {
                key: "layout",
                value: function() {
                    this.update(!0)
                }
            }, {
                key: "add",
                value: function(t) {
                    var e = this,
                        i = x(t).map((function(t) {
                            return new _(t)
                        }));
                    this._initItems(i), this._resetCols();
                    var n = T(this._mergeNewItems(i), this.lastSort),
                        s = this._filter(this.lastFilter, n),
                        o = function(t) {
                            return i.includes(t)
                        },
                        r = function(t) {
                            t.scale = _.Scale.HIDDEN, t.isHidden = !0, t.applyCss(_.Css.HIDDEN.before), t.applyCss(_.Css.HIDDEN.after)
                        },
                        l = this._getNextPositions(s.visible);
                    s.visible.forEach((function(t, i) {
                        o(t) && (t.point = l[i], r(t), t.applyCss(e.getStylesForTransition(t, {})))
                    })), s.hidden.forEach((function(t) {
                        o(t) && r(t)
                    })), this.element.offsetWidth, this.setItemTransitions(i), this.items = this._mergeNewItems(i), this.filter(this.lastFilter)
                }
            }, {
                key: "disable",
                value: function() {
                    this.isEnabled = !1
                }
            }, {
                key: "enable",
                value: function() {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.isEnabled = !0, t && this.update()
                }
            }, {
                key: "remove",
                value: function(t) {
                    var e = this;
                    if (t.length) {
                        var i = x(t),
                            n = i.map((function(t) {
                                return e.getItemByElement(t)
                            })).filter((function(t) {
                                return !!t
                            }));
                        this._toggleFilterClasses({
                            visible: [],
                            hidden: n
                        }), this._shrink(n), this.sort(), this.items = this.items.filter((function(t) {
                            return !n.includes(t)
                        })), this._updateItemCount(), this.once(r.EventType.LAYOUT, (function() {
                            e._disposeItems(n), i.forEach((function(t) {
                                t.parentNode.removeChild(t)
                            })), e._dispatch(r.EventType.REMOVED, {
                                collection: i
                            })
                        }))
                    }
                }
            }, {
                key: "getItemByElement",
                value: function(t) {
                    return this.items.find((function(e) {
                        return e.element === t
                    }))
                }
            }, {
                key: "resetItems",
                value: function() {
                    var t = this;
                    this._disposeItems(this.items), this.isInitialized = !1, this.items = this._getItems(), this._initItems(this.items), this.once(r.EventType.LAYOUT, (function() {
                        t.setItemTransitions(t.items), t.isInitialized = !0
                    })), this.filter(this.lastFilter)
                }
            }, {
                key: "destroy",
                value: function() {
                    this._cancelMovement(), window.removeEventListener("resize", this._onResize), this.element.classList.remove("shuffle"), this.element.removeAttribute("style"), this._disposeItems(this.items), this.items.length = 0, this._transitions.length = 0, this.options.sizer = null, this.element = null, this.isDestroyed = !0, this.isEnabled = !1
                }
            }], [{
                key: "getSize",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = window.getComputedStyle(t, null),
                        n = b(t, "width", i),
                        s = b(t, "height", i);
                    if (e) {
                        var o = b(t, "marginLeft", i),
                            r = b(t, "marginRight", i),
                            l = b(t, "marginTop", i),
                            a = b(t, "marginBottom", i);
                        n += o + r, s += l + a
                    }
                    return {
                        width: n,
                        height: s
                    }
                }
            }, {
                key: "_skipTransitions",
                value: function(t, e) {
                    var i = t.map((function(t) {
                        var e = t.style,
                            i = e.transitionDuration,
                            n = e.transitionDelay;
                        return e.transitionDuration = "0ms", e.transitionDelay = "0ms", {
                            duration: i,
                            delay: n
                        }
                    }));
                    e(), t[0].offsetWidth, t.forEach((function(t, e) {
                        t.style.transitionDuration = i[e].duration, t.style.transitionDelay = i[e].delay
                    }))
                }
            }]), r
        }(l);
    return N.ShuffleItem = _, N.ALL_ITEMS = "all", N.FILTER_ATTRIBUTE_KEY = "groups", N.EventType = {
        LAYOUT: "shuffle:layout",
        REMOVED: "shuffle:removed"
    }, N.Classes = y, N.FilterMode = {
        ANY: "any",
        ALL: "all"
    }, N.options = {
        group: N.ALL_ITEMS,
        speed: 250,
        easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
        itemSelector: "*",
        sizer: null,
        gutterWidth: 0,
        columnWidth: 0,
        delimiter: null,
        buffer: 0,
        columnThreshold: .01,
        initialSort: null,
        throttle: c,
        throttleTime: 300,
        staggerAmount: 15,
        staggerAmountMax: 150,
        useTransforms: !0,
        filterMode: N.FilterMode.ANY,
        isCentered: !1,
        roundTransforms: !0
    }, N.Point = p, N.Rect = v, N.__sorter = T, N.__getColumnSpan = z, N.__getAvailablePositions = M, N.__getShortColumn = A, N.__getCenteredPositions = F, N
}));

/**
 * SimpleBar.js - v4.3.0-alpha.0
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */

! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).SimpleBar = e()
}(this, function() {
    "use strict";
    var t = function(t) {
            if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
            return t
        },
        e = function(e, r, n) {
            if (t(e), void 0 === r) return e;
            switch (n) {
                case 0:
                    return function() {
                        return e.call(r)
                    };
                case 1:
                    return function(t) {
                        return e.call(r, t)
                    };
                case 2:
                    return function(t, n) {
                        return e.call(r, t, n)
                    };
                case 3:
                    return function(t, n, i) {
                        return e.call(r, t, n, i)
                    }
            }
            return function() {
                return e.apply(r, arguments)
            }
        },
        r = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        },
        n = {}.toString,
        i = function(t) {
            return n.call(t).slice(8, -1)
        },
        o = "".split,
        s = r(function() {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function(t) {
            return "String" == i(t) ? o.call(t, "") : Object(t)
        } : Object,
        a = function(t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t
        },
        c = function(t) {
            return Object(a(t))
        },
        l = Math.ceil,
        u = Math.floor,
        f = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? u : l)(t)
        },
        h = Math.min,
        d = function(t) {
            return t > 0 ? h(f(t), 9007199254740991) : 0
        },
        p = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        },
        v = Array.isArray || function(t) {
            return "Array" == i(t)
        },
        g = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function y(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    var b, m, x, E = "object" == typeof window && window && window.Math == Math ? window : "object" == typeof self && self && self.Math == Math ? self : Function("return this")(),
        w = !r(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }),
        O = E.document,
        _ = p(O) && p(O.createElement),
        S = function(t) {
            return _ ? O.createElement(t) : {}
        },
        A = !w && !r(function() {
            return 7 != Object.defineProperty(S("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }),
        k = function(t) {
            if (!p(t)) throw TypeError(String(t) + " is not an object");
            return t
        },
        L = function(t, e) {
            if (!p(t)) return t;
            var r, n;
            if (e && "function" == typeof(r = t.toString) && !p(n = r.call(t))) return n;
            if ("function" == typeof(r = t.valueOf) && !p(n = r.call(t))) return n;
            if (!e && "function" == typeof(r = t.toString) && !p(n = r.call(t))) return n;
            throw TypeError("Can't convert object to primitive value")
        },
        M = Object.defineProperty,
        j = {
            f: w ? M : function(t, e, r) {
                if (k(t), e = L(e, !0), k(r), A) try {
                    return M(t, e, r)
                } catch (t) {}
                if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
                return "value" in r && (t[e] = r.value), t
            }
        },
        R = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        },
        T = w ? function(t, e, r) {
            return j.f(t, e, R(1, r))
        } : function(t, e, r) {
            return t[e] = r, t
        },
        W = function(t, e) {
            try {
                T(E, t, e)
            } catch (r) {
                E[t] = e
            }
            return e
        },
        z = y(function(t) {
            var e = E["__core-js_shared__"] || W("__core-js_shared__", {});
            (t.exports = function(t, r) {
                return e[t] || (e[t] = void 0 !== r ? r : {})
            })("versions", []).push({
                version: "3.0.1",
                mode: "global",
                copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
            })
        }),
        C = 0,
        N = Math.random(),
        I = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++C + N).toString(36))
        },
        D = !r(function() {
            return !String(Symbol())
        }),
        P = z("wks"),
        V = E.Symbol,
        F = function(t) {
            return P[t] || (P[t] = D && V[t] || (D ? V : I)("Symbol." + t))
        },
        B = F("species"),
        H = function(t, e) {
            var r;
            return v(t) && ("function" != typeof(r = t.constructor) || r !== Array && !v(r.prototype) ? p(r) && null === (r = r[B]) && (r = void 0) : r = void 0), new(void 0 === r ? Array : r)(0 === e ? 0 : e)
        },
        q = function(t, r) {
            var n = 1 == t,
                i = 2 == t,
                o = 3 == t,
                a = 4 == t,
                l = 6 == t,
                u = 5 == t || l,
                f = r || H;
            return function(r, h, p) {
                for (var v, g, y = c(r), b = s(y), m = e(h, p, 3), x = d(b.length), E = 0, w = n ? f(r, x) : i ? f(r, 0) : void 0; x > E; E++)
                    if ((u || E in b) && (g = m(v = b[E], E, y), t))
                        if (n) w[E] = g;
                        else if (g) switch (t) {
                        case 3:
                            return !0;
                        case 5:
                            return v;
                        case 6:
                            return E;
                        case 2:
                            w.push(v)
                    } else if (a) return !1;
                return l ? -1 : o || a ? a : w
            }
        },
        $ = F("species"),
        Y = {}.propertyIsEnumerable,
        G = Object.getOwnPropertyDescriptor,
        X = {
            f: G && !Y.call({
                1: 2
            }, 1) ? function(t) {
                var e = G(this, t);
                return !!e && e.enumerable
            } : Y
        },
        U = function(t) {
            return s(a(t))
        },
        Q = {}.hasOwnProperty,
        K = function(t, e) {
            return Q.call(t, e)
        },
        J = Object.getOwnPropertyDescriptor,
        Z = {
            f: w ? J : function(t, e) {
                if (t = U(t), e = L(e, !0), A) try {
                    return J(t, e)
                } catch (t) {}
                if (K(t, e)) return R(!X.f.call(t, e), t[e])
            }
        },
        tt = z("native-function-to-string", Function.toString),
        et = E.WeakMap,
        rt = "function" == typeof et && /native code/.test(tt.call(et)),
        nt = z("keys"),
        it = function(t) {
            return nt[t] || (nt[t] = I(t))
        },
        ot = {},
        st = E.WeakMap;
    if (rt) {
        var at = new st,
            ct = at.get,
            lt = at.has,
            ut = at.set;
        b = function(t, e) {
            return ut.call(at, t, e), e
        }, m = function(t) {
            return ct.call(at, t) || {}
        }, x = function(t) {
            return lt.call(at, t)
        }
    } else {
        var ft = it("state");
        ot[ft] = !0, b = function(t, e) {
            return T(t, ft, e), e
        }, m = function(t) {
            return K(t, ft) ? t[ft] : {}
        }, x = function(t) {
            return K(t, ft)
        }
    }
    var ht, dt = {
            set: b,
            get: m,
            has: x,
            enforce: function(t) {
                return x(t) ? m(t) : b(t, {})
            },
            getterFor: function(t) {
                return function(e) {
                    var r;
                    if (!p(e) || (r = m(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                    return r
                }
            }
        },
        pt = y(function(t) {
            var e = dt.get,
                r = dt.enforce,
                n = String(tt).split("toString");
            z("inspectSource", function(t) {
                return tt.call(t)
            }), (t.exports = function(t, e, i, o) {
                var s = !!o && !!o.unsafe,
                    a = !!o && !!o.enumerable,
                    c = !!o && !!o.noTargetGet;
                "function" == typeof i && ("string" != typeof e || K(i, "name") || T(i, "name", e), r(i).source = n.join("string" == typeof e ? e : "")), t !== E ? (s ? !c && t[e] && (a = !0) : delete t[e], a ? t[e] = i : T(t, e, i)) : a ? t[e] = i : W(e, i)
            })(Function.prototype, "toString", function() {
                return "function" == typeof this && e(this).source || tt.call(this)
            })
        }),
        vt = Math.max,
        gt = Math.min,
        yt = (ht = !1, function(t, e, r) {
            var n, i = U(t),
                o = d(i.length),
                s = function(t, e) {
                    var r = f(t);
                    return r < 0 ? vt(r + e, 0) : gt(r, e)
                }(r, o);
            if (ht && e != e) {
                for (; o > s;)
                    if ((n = i[s++]) != n) return !0
            } else
                for (; o > s; s++)
                    if ((ht || s in i) && i[s] === e) return ht || s || 0;
            return !ht && -1
        }),
        bt = function(t, e) {
            var r, n = U(t),
                i = 0,
                o = [];
            for (r in n) !K(ot, r) && K(n, r) && o.push(r);
            for (; e.length > i;) K(n, r = e[i++]) && (~yt(o, r) || o.push(r));
            return o
        },
        mt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        xt = mt.concat("length", "prototype"),
        Et = {
            f: Object.getOwnPropertyNames || function(t) {
                return bt(t, xt)
            }
        },
        wt = {
            f: Object.getOwnPropertySymbols
        },
        Ot = E.Reflect,
        _t = Ot && Ot.ownKeys || function(t) {
            var e = Et.f(k(t)),
                r = wt.f;
            return r ? e.concat(r(t)) : e
        },
        St = function(t, e) {
            for (var r = _t(e), n = j.f, i = Z.f, o = 0; o < r.length; o++) {
                var s = r[o];
                K(t, s) || n(t, s, i(e, s))
            }
        },
        At = /#|\.prototype\./,
        kt = function(t, e) {
            var n = Mt[Lt(t)];
            return n == Rt || n != jt && ("function" == typeof e ? r(e) : !!e)
        },
        Lt = kt.normalize = function(t) {
            return String(t).replace(At, ".").toLowerCase()
        },
        Mt = kt.data = {},
        jt = kt.NATIVE = "N",
        Rt = kt.POLYFILL = "P",
        Tt = kt,
        Wt = Z.f,
        zt = function(t, e) {
            var r, n, i, o, s, a = t.target,
                c = t.global,
                l = t.stat;
            if (r = c ? E : l ? E[a] || W(a, {}) : (E[a] || {}).prototype)
                for (n in e) {
                    if (o = e[n], i = t.noTargetGet ? (s = Wt(r, n)) && s.value : r[n], !Tt(c ? n : a + (l ? "." : "#") + n, t.forced) && void 0 !== i) {
                        if (typeof o == typeof i) continue;
                        St(o, i)
                    }(t.sham || i && i.sham) && T(o, "sham", !0), pt(r, n, o, t)
                }
        },
        Ct = q(2),
        Nt = function(t) {
            return !r(function() {
                var e = [];
                return (e.constructor = {})[$] = function() {
                    return {
                        foo: 1
                    }
                }, 1 !== e[t](Boolean).foo
            })
        }("filter");
    zt({
        target: "Array",
        proto: !0,
        forced: !Nt
    }, {
        filter: function(t) {
            return Ct(this, t, arguments[1])
        }
    });
    var It = function(t, e) {
            var n = [][t];
            return !n || !r(function() {
                n.call(null, e || function() {
                    throw 1
                }, 1)
            })
        },
        Dt = [].forEach,
        Pt = q(0),
        Vt = It("forEach") ? function(t) {
            return Pt(this, t, arguments[1])
        } : Dt;
    zt({
        target: "Array",
        proto: !0,
        forced: [].forEach != Vt
    }, {
        forEach: Vt
    });
    var Ft = Object.keys || function(t) {
            return bt(t, mt)
        },
        Bt = w ? Object.defineProperties : function(t, e) {
            k(t);
            for (var r, n = Ft(e), i = n.length, o = 0; i > o;) j.f(t, r = n[o++], e[r]);
            return t
        },
        Ht = E.document,
        qt = Ht && Ht.documentElement,
        $t = it("IE_PROTO"),
        Yt = function() {},
        Gt = function() {
            var t, e = S("iframe"),
                r = mt.length;
            for (e.style.display = "none", qt.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), Gt = t.F; r--;) delete Gt.prototype[mt[r]];
            return Gt()
        },
        Xt = Object.create || function(t, e) {
            var r;
            return null !== t ? (Yt.prototype = k(t), r = new Yt, Yt.prototype = null, r[$t] = t) : r = Gt(), void 0 === e ? r : Bt(r, e)
        };
    ot[$t] = !0;
    var Ut = F("unscopables"),
        Qt = Array.prototype;
    null == Qt[Ut] && T(Qt, Ut, Xt(null));
    var Kt, Jt, Zt, te = function(t) {
            Qt[Ut][t] = !0
        },
        ee = {},
        re = !r(function() {
            function t() {}
            return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
        }),
        ne = it("IE_PROTO"),
        ie = Object.prototype,
        oe = re ? Object.getPrototypeOf : function(t) {
            return t = c(t), K(t, ne) ? t[ne] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? ie : null
        },
        se = F("iterator"),
        ae = !1;
    [].keys && ("next" in (Zt = [].keys()) ? (Jt = oe(oe(Zt))) !== Object.prototype && (Kt = Jt) : ae = !0), null == Kt && (Kt = {}), K(Kt, se) || T(Kt, se, function() {
        return this
    });
    var ce = {
            IteratorPrototype: Kt,
            BUGGY_SAFARI_ITERATORS: ae
        },
        le = j.f,
        ue = F("toStringTag"),
        fe = function(t, e, r) {
            t && !K(t = r ? t : t.prototype, ue) && le(t, ue, {
                configurable: !0,
                value: e
            })
        },
        he = ce.IteratorPrototype,
        de = function() {
            return this
        },
        pe = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var t, e = !1,
                r = {};
            try {
                (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), e = r instanceof Array
            } catch (t) {}
            return function(r, n) {
                return function(t, e) {
                    if (k(t), !p(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype")
                }(r, n), e ? t.call(r, n) : r.__proto__ = n, r
            }
        }() : void 0),
        ve = F("iterator"),
        ge = ce.IteratorPrototype,
        ye = ce.BUGGY_SAFARI_ITERATORS,
        be = function() {
            return this
        },
        me = function(t, e, r, n, i, o, s) {
            ! function(t, e, r) {
                var n = e + " Iterator";
                t.prototype = Xt(he, {
                    next: R(1, r)
                }), fe(t, n, !1), ee[n] = de
            }(r, e, n);
            var a, c, l, u = function(t) {
                    if (t === i && v) return v;
                    if (!ye && t in d) return d[t];
                    switch (t) {
                        case "keys":
                        case "values":
                        case "entries":
                            return function() {
                                return new r(this, t)
                            }
                    }
                    return function() {
                        return new r(this)
                    }
                },
                f = e + " Iterator",
                h = !1,
                d = t.prototype,
                p = d[ve] || d["@@iterator"] || i && d[i],
                v = !ye && p || u(i),
                g = "Array" == e && d.entries || p;
            if (g && (a = oe(g.call(new t)), ge !== Object.prototype && a.next && (oe(a) !== ge && (pe ? pe(a, ge) : "function" != typeof a[ve] && T(a, ve, be)), fe(a, f, !0))), "values" == i && p && "values" !== p.name && (h = !0, v = function() {
                    return p.call(this)
                }), d[ve] !== v && T(d, ve, v), ee[e] = v, i)
                if (c = {
                        values: u("values"),
                        keys: o ? v : u("keys"),
                        entries: u("entries")
                    }, s)
                    for (l in c) !ye && !h && l in d || pt(d, l, c[l]);
                else zt({
                    target: e,
                    proto: !0,
                    forced: ye || h
                }, c);
            return c
        },
        xe = dt.set,
        Ee = dt.getterFor("Array Iterator"),
        we = me(Array, "Array", function(t, e) {
            xe(this, {
                type: "Array Iterator",
                target: U(t),
                index: 0,
                kind: e
            })
        }, function() {
            var t = Ee(this),
                e = t.target,
                r = t.kind,
                n = t.index++;
            return !e || n >= e.length ? (t.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == r ? {
                value: n,
                done: !1
            } : "values" == r ? {
                value: e[n],
                done: !1
            } : {
                value: [n, e[n]],
                done: !1
            }
        }, "values");
    ee.Arguments = ee.Array, te("keys"), te("values"), te("entries");
    var Oe = It("reduce");
    zt({
        target: "Array",
        proto: !0,
        forced: Oe
    }, {
        reduce: function(e) {
            return function(e, r, n, i, o) {
                t(r);
                var a = c(e),
                    l = s(a),
                    u = d(a.length),
                    f = o ? u - 1 : 0,
                    h = o ? -1 : 1;
                if (n < 2)
                    for (;;) {
                        if (f in l) {
                            i = l[f], f += h;
                            break
                        }
                        if (f += h, o ? f < 0 : u <= f) throw TypeError("Reduce of empty array with no initial value")
                    }
                for (; o ? f >= 0 : u > f; f += h) f in l && (i = r(i, l[f], f, a));
                return i
            }(this, e, arguments.length, arguments[1], !1)
        }
    });
    var _e = j.f,
        Se = Function.prototype,
        Ae = Se.toString,
        ke = /^\s*function ([^ (]*)/;
    !w || "name" in Se || _e(Se, "name", {
        configurable: !0,
        get: function() {
            try {
                return Ae.call(this).match(ke)[1]
            } catch (t) {
                return ""
            }
        }
    });
    var Le = Object.assign,
        Me = !Le || r(function() {
            var t = {},
                e = {},
                r = Symbol();
            return t[r] = 7, "abcdefghijklmnopqrst".split("").forEach(function(t) {
                e[t] = t
            }), 7 != Le({}, t)[r] || "abcdefghijklmnopqrst" != Ft(Le({}, e)).join("")
        }) ? function(t, e) {
            for (var r = c(t), n = arguments.length, i = 1, o = wt.f, a = X.f; n > i;)
                for (var l, u = s(arguments[i++]), f = o ? Ft(u).concat(o(u)) : Ft(u), h = f.length, d = 0; h > d;) a.call(u, l = f[d++]) && (r[l] = u[l]);
            return r
        } : Le;
    zt({
        target: "Object",
        stat: !0,
        forced: Object.assign !== Me
    }, {
        assign: Me
    });
    var je = F("toStringTag"),
        Re = "Arguments" == i(function() {
            return arguments
        }()),
        Te = function(t) {
            var e, r, n;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = function(t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = Object(t), je)) ? r : Re ? i(e) : "Object" == (n = i(e)) && "function" == typeof e.callee ? "Arguments" : n
        },
        We = {};
    We[F("toStringTag")] = "z";
    var ze = "[object z]" !== String(We) ? function() {
            return "[object " + Te(this) + "]"
        } : We.toString,
        Ce = Object.prototype;
    ze !== Ce.toString && pt(Ce, "toString", ze, {
        unsafe: !0
    });
    var Ne = "\t\n\v\f\r                　\u2028\u2029\ufeff",
        Ie = "[" + Ne + "]",
        De = RegExp("^" + Ie + Ie + "*"),
        Pe = RegExp(Ie + Ie + "*$"),
        Ve = E.parseInt,
        Fe = /^[-+]?0[xX]/,
        Be = 8 !== Ve(Ne + "08") || 22 !== Ve(Ne + "0x16") ? function(t, e) {
            var r = function(t, e) {
                return t = String(a(t)), 1 & e && (t = t.replace(De, "")), 2 & e && (t = t.replace(Pe, "")), t
            }(String(t), 3);
            return Ve(r, e >>> 0 || (Fe.test(r) ? 16 : 10))
        } : Ve;
    zt({
        global: !0,
        forced: parseInt != Be
    }, {
        parseInt: Be
    });
    var He, qe, $e = RegExp.prototype.exec,
        Ye = String.prototype.replace,
        Ge = $e,
        Xe = (He = /a/, qe = /b*/g, $e.call(He, "a"), $e.call(qe, "a"), 0 !== He.lastIndex || 0 !== qe.lastIndex),
        Ue = void 0 !== /()??/.exec("")[1];
    (Xe || Ue) && (Ge = function(t) {
        var e, r, n, i, o = this;
        return Ue && (r = new RegExp("^" + o.source + "$(?!\\s)", function() {
            var t = k(this),
                e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
        }.call(o))), Xe && (e = o.lastIndex), n = $e.call(o, t), Xe && n && (o.lastIndex = o.global ? n.index + n[0].length : e), Ue && n && n.length > 1 && Ye.call(n[0], r, function() {
            for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (n[i] = void 0)
        }), n
    });
    var Qe = Ge;
    zt({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== Qe
    }, {
        exec: Qe
    });
    var Ke = function(t, e, r) {
            var n, i, o = String(a(t)),
                s = f(e),
                c = o.length;
            return s < 0 || s >= c ? r ? "" : void 0 : (n = o.charCodeAt(s)) < 55296 || n > 56319 || s + 1 === c || (i = o.charCodeAt(s + 1)) < 56320 || i > 57343 ? r ? o.charAt(s) : n : r ? o.slice(s, s + 2) : i - 56320 + (n - 55296 << 10) + 65536
        },
        Je = dt.set,
        Ze = dt.getterFor("String Iterator");
    me(String, "String", function(t) {
        Je(this, {
            type: "String Iterator",
            string: String(t),
            index: 0
        })
    }, function() {
        var t, e = Ze(this),
            r = e.string,
            n = e.index;
        return n >= r.length ? {
            value: void 0,
            done: !0
        } : (t = Ke(r, n, !0), e.index += t.length, {
            value: t,
            done: !1
        })
    });
    var tr = function(t, e, r) {
            return e + (r ? Ke(t, e, !0).length : 1)
        },
        er = function(t, e) {
            var r = t.exec;
            if ("function" == typeof r) {
                var n = r.call(t, e);
                if ("object" != typeof n) throw TypeError("RegExp exec method returned something other than an Object or null");
                return n
            }
            if ("RegExp" !== i(t)) throw TypeError("RegExp#exec called on incompatible receiver");
            return Qe.call(t, e)
        },
        rr = F("species"),
        nr = !r(function() {
            var t = /./;
            return t.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "7" !== "".replace(t, "$<a>")
        }),
        ir = !r(function() {
            var t = /(?:)/,
                e = t.exec;
            t.exec = function() {
                return e.apply(this, arguments)
            };
            var r = "ab".split(t);
            return 2 !== r.length || "a" !== r[0] || "b" !== r[1]
        }),
        or = function(t, e, n, i) {
            var o = F(t),
                s = !r(function() {
                    var e = {};
                    return e[o] = function() {
                        return 7
                    }, 7 != "" [t](e)
                }),
                a = s && !r(function() {
                    var e = !1,
                        r = /a/;
                    return r.exec = function() {
                        return e = !0, null
                    }, "split" === t && (r.constructor = {}, r.constructor[rr] = function() {
                        return r
                    }), r[o](""), !e
                });
            if (!s || !a || "replace" === t && !nr || "split" === t && !ir) {
                var c = /./ [o],
                    l = n(o, "" [t], function(t, e, r, n, i) {
                        return e.exec === Qe ? s && !i ? {
                            done: !0,
                            value: c.call(e, r, n)
                        } : {
                            done: !0,
                            value: t.call(r, e, n)
                        } : {
                            done: !1
                        }
                    }),
                    u = l[0],
                    f = l[1];
                pt(String.prototype, t, u), pt(RegExp.prototype, o, 2 == e ? function(t, e) {
                    return f.call(t, this, e)
                } : function(t) {
                    return f.call(t, this)
                }), i && T(RegExp.prototype[o], "sham", !0)
            }
        };
    or("match", 1, function(t, e, r) {
        return [function(e) {
            var r = a(this),
                n = null == e ? void 0 : e[t];
            return void 0 !== n ? n.call(e, r) : new RegExp(e)[t](String(r))
        }, function(t) {
            var n = r(e, t, this);
            if (n.done) return n.value;
            var i = k(t),
                o = String(this);
            if (!i.global) return er(i, o);
            var s = i.unicode;
            i.lastIndex = 0;
            for (var a, c = [], l = 0; null !== (a = er(i, o));) {
                var u = String(a[0]);
                c[l] = u, "" === u && (i.lastIndex = tr(o, d(i.lastIndex), s)), l++
            }
            return 0 === l ? null : c
        }]
    });
    var sr = Math.max,
        ar = Math.min,
        cr = Math.floor,
        lr = /\$([$&`']|\d\d?|<[^>]*>)/g,
        ur = /\$([$&`']|\d\d?)/g;
    or("replace", 2, function(t, e, r) {
        return [function(r, n) {
            var i = a(this),
                o = null == r ? void 0 : r[t];
            return void 0 !== o ? o.call(r, i, n) : e.call(String(i), r, n)
        }, function(t, i) {
            var o = r(e, t, this, i);
            if (o.done) return o.value;
            var s = k(t),
                a = String(this),
                c = "function" == typeof i;
            c || (i = String(i));
            var l = s.global;
            if (l) {
                var u = s.unicode;
                s.lastIndex = 0
            }
            for (var h = [];;) {
                var p = er(s, a);
                if (null === p) break;
                if (h.push(p), !l) break;
                "" === String(p[0]) && (s.lastIndex = tr(a, d(s.lastIndex), u))
            }
            for (var v, g = "", y = 0, b = 0; b < h.length; b++) {
                p = h[b];
                for (var m = String(p[0]), x = sr(ar(f(p.index), a.length), 0), E = [], w = 1; w < p.length; w++) E.push(void 0 === (v = p[w]) ? v : String(v));
                var O = p.groups;
                if (c) {
                    var _ = [m].concat(E, x, a);
                    void 0 !== O && _.push(O);
                    var S = String(i.apply(void 0, _))
                } else S = n(m, a, x, E, O, i);
                x >= y && (g += a.slice(y, x) + S, y = x + m.length)
            }
            return g + a.slice(y)
        }];

        function n(t, r, n, i, o, s) {
            var a = n + t.length,
                l = i.length,
                u = ur;
            return void 0 !== o && (o = c(o), u = lr), e.call(s, u, function(e, s) {
                var c;
                switch (s.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return r.slice(0, n);
                    case "'":
                        return r.slice(a);
                    case "<":
                        c = o[s.slice(1, -1)];
                        break;
                    default:
                        var u = +s;
                        if (0 === u) return e;
                        if (u > l) {
                            var f = cr(u / 10);
                            return 0 === f ? e : f <= l ? void 0 === i[f - 1] ? s.charAt(1) : i[f - 1] + s.charAt(1) : e
                        }
                        c = i[u - 1]
                }
                return void 0 === c ? "" : c
            })
        }
    });
    var fr = function(t, e, r) {
            for (var n in e) pt(t, n, e[n], r);
            return t
        },
        hr = !r(function() {
            return Object.isExtensible(Object.preventExtensions({}))
        }),
        dr = y(function(t) {
            var e = I("meta"),
                r = j.f,
                n = 0,
                i = Object.isExtensible || function() {
                    return !0
                },
                o = function(t) {
                    r(t, e, {
                        value: {
                            objectID: "O" + ++n,
                            weakData: {}
                        }
                    })
                },
                s = t.exports = {
                    REQUIRED: !1,
                    fastKey: function(t, r) {
                        if (!p(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                        if (!K(t, e)) {
                            if (!i(t)) return "F";
                            if (!r) return "E";
                            o(t)
                        }
                        return t[e].objectID
                    },
                    getWeakData: function(t, r) {
                        if (!K(t, e)) {
                            if (!i(t)) return !0;
                            if (!r) return !1;
                            o(t)
                        }
                        return t[e].weakData
                    },
                    onFreeze: function(t) {
                        return hr && s.REQUIRED && i(t) && !K(t, e) && o(t), t
                    }
                };
            ot[e] = !0
        }),
        pr = (dr.REQUIRED, dr.fastKey, dr.getWeakData, dr.onFreeze, function(t, e, r) {
            if (!(t instanceof e)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
            return t
        }),
        vr = F("iterator"),
        gr = Array.prototype,
        yr = F("iterator"),
        br = function(t, e, r, n) {
            try {
                return n ? e(k(r)[0], r[1]) : e(r)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && k(i.call(t)), e
            }
        },
        mr = y(function(t) {
            var r = {};
            (t.exports = function(t, n, i, o, s) {
                var a, c, l, u, f, h, p = e(n, i, o ? 2 : 1);
                if (s) a = t;
                else {
                    if ("function" != typeof(c = function(t) {
                            if (null != t) return t[yr] || t["@@iterator"] || ee[Te(t)]
                        }(t))) throw TypeError("Target is not iterable");
                    if (void 0 !== (h = c) && (ee.Array === h || gr[vr] === h)) {
                        for (l = 0, u = d(t.length); u > l; l++)
                            if ((o ? p(k(f = t[l])[0], f[1]) : p(t[l])) === r) return r;
                        return
                    }
                    a = c.call(t)
                }
                for (; !(f = a.next()).done;)
                    if (br(a, p, f.value, o) === r) return r
            }).BREAK = r
        }),
        xr = dr.getWeakData,
        Er = dt.set,
        wr = dt.getterFor,
        Or = q(5),
        _r = q(6),
        Sr = 0,
        Ar = function(t) {
            return t.frozen || (t.frozen = new kr)
        },
        kr = function() {
            this.entries = []
        },
        Lr = function(t, e) {
            return Or(t.entries, function(t) {
                return t[0] === e
            })
        };
    kr.prototype = {
        get: function(t) {
            var e = Lr(this, t);
            if (e) return e[1]
        },
        has: function(t) {
            return !!Lr(this, t)
        },
        set: function(t, e) {
            var r = Lr(this, t);
            r ? r[1] = e : this.entries.push([t, e])
        },
        delete: function(t) {
            var e = _r(this.entries, function(e) {
                return e[0] === t
            });
            return ~e && this.entries.splice(e, 1), !!~e
        }
    };
    var Mr = {
            getConstructor: function(t, e, r, n) {
                var i = t(function(t, o) {
                        pr(t, i, e), Er(t, {
                            type: e,
                            id: Sr++,
                            frozen: void 0
                        }), null != o && mr(o, t[n], t, r)
                    }),
                    o = wr(e),
                    s = function(t, e, r) {
                        var n = o(t),
                            i = xr(k(e), !0);
                        return !0 === i ? Ar(n).set(e, r) : i[n.id] = r, t
                    };
                return fr(i.prototype, {
                    delete: function(t) {
                        var e = o(this);
                        if (!p(t)) return !1;
                        var r = xr(t);
                        return !0 === r ? Ar(e).delete(t) : r && K(r, e.id) && delete r[e.id]
                    },
                    has: function(t) {
                        var e = o(this);
                        if (!p(t)) return !1;
                        var r = xr(t);
                        return !0 === r ? Ar(e).has(t) : r && K(r, e.id)
                    }
                }), fr(i.prototype, r ? {
                    get: function(t) {
                        var e = o(this);
                        if (p(t)) {
                            var r = xr(t);
                            return !0 === r ? Ar(e).get(t) : r ? r[e.id] : void 0
                        }
                    },
                    set: function(t, e) {
                        return s(this, t, e)
                    }
                } : {
                    add: function(t) {
                        return s(this, t, !0)
                    }
                }), i
            }
        },
        jr = F("iterator"),
        Rr = !1;
    try {
        var Tr = 0;
        ({
            next: function() {
                return {
                    done: !!Tr++
                }
            },
            return: function() {
                Rr = !0
            }
        })[jr] = function() {
            return this
        }
    } catch (t) {}
    var Wr = function(t, e, n, i, o) {
            var s = E[t],
                a = s && s.prototype,
                c = s,
                l = i ? "set" : "add",
                u = {},
                f = function(t) {
                    var e = a[t];
                    pt(a, t, "add" == t ? function(t) {
                        return e.call(this, 0 === t ? 0 : t), this
                    } : "delete" == t ? function(t) {
                        return !(o && !p(t)) && e.call(this, 0 === t ? 0 : t)
                    } : "get" == t ? function(t) {
                        return o && !p(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                    } : "has" == t ? function(t) {
                        return !(o && !p(t)) && e.call(this, 0 === t ? 0 : t)
                    } : function(t, r) {
                        return e.call(this, 0 === t ? 0 : t, r), this
                    })
                };
            if (Tt(t, "function" != typeof s || !(o || a.forEach && !r(function() {
                    (new s).entries().next()
                })))) c = n.getConstructor(e, t, i, l), dr.REQUIRED = !0;
            else if (Tt(t, !0)) {
                var h = new c,
                    d = h[l](o ? {} : -0, 1) != h,
                    v = r(function() {
                        h.has(1)
                    }),
                    g = function(t, e) {
                        if (!e && !Rr) return !1;
                        var r = !1;
                        try {
                            var n = {};
                            n[jr] = function() {
                                return {
                                    next: function() {
                                        return {
                                            done: r = !0
                                        }
                                    }
                                }
                            }, t(n)
                        } catch (t) {}
                        return r
                    }(function(t) {
                        new s(t)
                    }),
                    y = !o && r(function() {
                        for (var t = new s, e = 5; e--;) t[l](e, e);
                        return !t.has(-0)
                    });
                g || ((c = e(function(e, r) {
                    pr(e, c, t);
                    var n = function(t, e, r) {
                        var n, i = e.constructor;
                        return i !== r && "function" == typeof i && (n = i.prototype) !== r.prototype && p(n) && pe && pe(t, n), t
                    }(new s, e, c);
                    return null != r && mr(r, n[l], n, i), n
                })).prototype = a, a.constructor = c), (v || y) && (f("delete"), f("has"), i && f("get")), (y || d) && f(l), o && a.clear && delete a.clear
            }
            return u[t] = c, zt({
                global: !0,
                forced: c != s
            }, u), fe(c, t), o || n.setStrong(c, t, i), c
        },
        zr = (y(function(t) {
            var e, r = dt.enforce,
                n = !E.ActiveXObject && "ActiveXObject" in E,
                i = Object.isExtensible,
                o = function(t) {
                    return function() {
                        return t(this, arguments.length > 0 ? arguments[0] : void 0)
                    }
                },
                s = t.exports = Wr("WeakMap", o, Mr, !0, !0);
            if (rt && n) {
                e = Mr.getConstructor(o, "WeakMap", !0), dr.REQUIRED = !0;
                var a = s.prototype,
                    c = a.delete,
                    l = a.has,
                    u = a.get,
                    f = a.set;
                fr(a, {
                    delete: function(t) {
                        if (p(t) && !i(t)) {
                            var n = r(this);
                            return n.frozen || (n.frozen = new e), c.call(this, t) || n.frozen.delete(t)
                        }
                        return c.call(this, t)
                    },
                    has: function(t) {
                        if (p(t) && !i(t)) {
                            var n = r(this);
                            return n.frozen || (n.frozen = new e), l.call(this, t) || n.frozen.has(t)
                        }
                        return l.call(this, t)
                    },
                    get: function(t) {
                        if (p(t) && !i(t)) {
                            var n = r(this);
                            return n.frozen || (n.frozen = new e), l.call(this, t) ? u.call(this, t) : n.frozen.get(t)
                        }
                        return u.call(this, t)
                    },
                    set: function(t, n) {
                        if (p(t) && !i(t)) {
                            var o = r(this);
                            o.frozen || (o.frozen = new e), l.call(this, t) ? f.call(this, t, n) : o.frozen.set(t, n)
                        } else f.call(this, t, n);
                        return this
                    }
                })
            }
        }), {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        });
    for (var Cr in zr) {
        var Nr = E[Cr],
            Ir = Nr && Nr.prototype;
        if (Ir && Ir.forEach !== Vt) try {
            T(Ir, "forEach", Vt)
        } catch (t) {
            Ir.forEach = Vt
        }
    }
    var Dr = F("iterator"),
        Pr = F("toStringTag"),
        Vr = we.values;
    for (var Fr in zr) {
        var Br = E[Fr],
            Hr = Br && Br.prototype;
        if (Hr) {
            if (Hr[Dr] !== Vr) try {
                T(Hr, Dr, Vr)
            } catch (t) {
                Hr[Dr] = Vr
            }
            if (Hr[Pr] || T(Hr, Pr, Fr), zr[Fr])
                for (var qr in we)
                    if (Hr[qr] !== we[qr]) try {
                        T(Hr, qr, we[qr])
                    } catch (t) {
                        Hr[qr] = we[qr]
                    }
        }
    }
    var $r = "Expected a function",
        Yr = NaN,
        Gr = "[object Symbol]",
        Xr = /^\s+|\s+$/g,
        Ur = /^[-+]0x[0-9a-f]+$/i,
        Qr = /^0b[01]+$/i,
        Kr = /^0o[0-7]+$/i,
        Jr = parseInt,
        Zr = "object" == typeof g && g && g.Object === Object && g,
        tn = "object" == typeof self && self && self.Object === Object && self,
        en = Zr || tn || Function("return this")(),
        rn = Object.prototype.toString,
        nn = Math.max,
        on = Math.min,
        sn = function() {
            return en.Date.now()
        };

    function an(t, e, r) {
        var n, i, o, s, a, c, l = 0,
            u = !1,
            f = !1,
            h = !0;
        if ("function" != typeof t) throw new TypeError($r);

        function d(e) {
            var r = n,
                o = i;
            return n = i = void 0, l = e, s = t.apply(o, r)
        }

        function p(t) {
            var r = t - c;
            return void 0 === c || r >= e || r < 0 || f && t - l >= o
        }

        function v() {
            var t = sn();
            if (p(t)) return g(t);
            a = setTimeout(v, function(t) {
                var r = e - (t - c);
                return f ? on(r, o - (t - l)) : r
            }(t))
        }

        function g(t) {
            return a = void 0, h && n ? d(t) : (n = i = void 0, s)
        }

        function y() {
            var t = sn(),
                r = p(t);
            if (n = arguments, i = this, c = t, r) {
                if (void 0 === a) return function(t) {
                    return l = t, a = setTimeout(v, e), u ? d(t) : s
                }(c);
                if (f) return a = setTimeout(v, e), d(c)
            }
            return void 0 === a && (a = setTimeout(v, e)), s
        }
        return e = ln(e) || 0, cn(r) && (u = !!r.leading, o = (f = "maxWait" in r) ? nn(ln(r.maxWait) || 0, e) : o, h = "trailing" in r ? !!r.trailing : h), y.cancel = function() {
            void 0 !== a && clearTimeout(a), l = 0, n = c = i = a = void 0
        }, y.flush = function() {
            return void 0 === a ? s : g(sn())
        }, y
    }

    function cn(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }

    function ln(t) {
        if ("number" == typeof t) return t;
        if (function(t) {
                return "symbol" == typeof t || function(t) {
                    return !!t && "object" == typeof t
                }(t) && rn.call(t) == Gr
            }(t)) return Yr;
        if (cn(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = cn(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(Xr, "");
        var r = Qr.test(t);
        return r || Kr.test(t) ? Jr(t.slice(2), r ? 2 : 8) : Ur.test(t) ? Yr : +t
    }
    var un = function(t, e, r) {
            var n = !0,
                i = !0;
            if ("function" != typeof t) throw new TypeError($r);
            return cn(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), an(t, e, {
                leading: n,
                maxWait: e,
                trailing: i
            })
        },
        fn = "Expected a function",
        hn = NaN,
        dn = "[object Symbol]",
        pn = /^\s+|\s+$/g,
        vn = /^[-+]0x[0-9a-f]+$/i,
        gn = /^0b[01]+$/i,
        yn = /^0o[0-7]+$/i,
        bn = parseInt,
        mn = "object" == typeof g && g && g.Object === Object && g,
        xn = "object" == typeof self && self && self.Object === Object && self,
        En = mn || xn || Function("return this")(),
        wn = Object.prototype.toString,
        On = Math.max,
        _n = Math.min,
        Sn = function() {
            return En.Date.now()
        };

    function An(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }

    function kn(t) {
        if ("number" == typeof t) return t;
        if (function(t) {
                return "symbol" == typeof t || function(t) {
                    return !!t && "object" == typeof t
                }(t) && wn.call(t) == dn
            }(t)) return hn;
        if (An(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = An(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(pn, "");
        var r = gn.test(t);
        return r || yn.test(t) ? bn(t.slice(2), r ? 2 : 8) : vn.test(t) ? hn : +t
    }
    var Ln = function(t, e, r) {
            var n, i, o, s, a, c, l = 0,
                u = !1,
                f = !1,
                h = !0;
            if ("function" != typeof t) throw new TypeError(fn);

            function d(e) {
                var r = n,
                    o = i;
                return n = i = void 0, l = e, s = t.apply(o, r)
            }

            function p(t) {
                var r = t - c;
                return void 0 === c || r >= e || r < 0 || f && t - l >= o
            }

            function v() {
                var t = Sn();
                if (p(t)) return g(t);
                a = setTimeout(v, function(t) {
                    var r = e - (t - c);
                    return f ? _n(r, o - (t - l)) : r
                }(t))
            }

            function g(t) {
                return a = void 0, h && n ? d(t) : (n = i = void 0, s)
            }

            function y() {
                var t = Sn(),
                    r = p(t);
                if (n = arguments, i = this, c = t, r) {
                    if (void 0 === a) return function(t) {
                        return l = t, a = setTimeout(v, e), u ? d(t) : s
                    }(c);
                    if (f) return a = setTimeout(v, e), d(c)
                }
                return void 0 === a && (a = setTimeout(v, e)), s
            }
            return e = kn(e) || 0, An(r) && (u = !!r.leading, o = (f = "maxWait" in r) ? On(kn(r.maxWait) || 0, e) : o, h = "trailing" in r ? !!r.trailing : h), y.cancel = function() {
                void 0 !== a && clearTimeout(a), l = 0, n = c = i = a = void 0
            }, y.flush = function() {
                return void 0 === a ? s : g(Sn())
            }, y
        },
        Mn = "Expected a function",
        jn = "__lodash_hash_undefined__",
        Rn = "[object Function]",
        Tn = "[object GeneratorFunction]",
        Wn = /^\[object .+?Constructor\]$/,
        zn = "object" == typeof g && g && g.Object === Object && g,
        Cn = "object" == typeof self && self && self.Object === Object && self,
        Nn = zn || Cn || Function("return this")();
    var In = Array.prototype,
        Dn = Function.prototype,
        Pn = Object.prototype,
        Vn = Nn["__core-js_shared__"],
        Fn = function() {
            var t = /[^.]+$/.exec(Vn && Vn.keys && Vn.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }(),
        Bn = Dn.toString,
        Hn = Pn.hasOwnProperty,
        qn = Pn.toString,
        $n = RegExp("^" + Bn.call(Hn).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        Yn = In.splice,
        Gn = ei(Nn, "Map"),
        Xn = ei(Object, "create");

    function Un(t) {
        var e = -1,
            r = t ? t.length : 0;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }

    function Qn(t) {
        var e = -1,
            r = t ? t.length : 0;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }

    function Kn(t) {
        var e = -1,
            r = t ? t.length : 0;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }

    function Jn(t, e) {
        for (var r, n, i = t.length; i--;)
            if ((r = t[i][0]) === (n = e) || r != r && n != n) return i;
        return -1
    }

    function Zn(t) {
        return !(!ni(t) || (e = t, Fn && Fn in e)) && (function(t) {
            var e = ni(t) ? qn.call(t) : "";
            return e == Rn || e == Tn
        }(t) || function(t) {
            var e = !1;
            if (null != t && "function" != typeof t.toString) try {
                e = !!(t + "")
            } catch (t) {}
            return e
        }(t) ? $n : Wn).test(function(t) {
            if (null != t) {
                try {
                    return Bn.call(t)
                } catch (t) {}
                try {
                    return t + ""
                } catch (t) {}
            }
            return ""
        }(t));
        var e
    }

    function ti(t, e) {
        var r, n, i = t.__data__;
        return ("string" == (n = typeof(r = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? i["string" == typeof e ? "string" : "hash"] : i.map
    }

    function ei(t, e) {
        var r = function(t, e) {
            return null == t ? void 0 : t[e]
        }(t, e);
        return Zn(r) ? r : void 0
    }

    function ri(t, e) {
        if ("function" != typeof t || e && "function" != typeof e) throw new TypeError(Mn);
        var r = function() {
            var n = arguments,
                i = e ? e.apply(this, n) : n[0],
                o = r.cache;
            if (o.has(i)) return o.get(i);
            var s = t.apply(this, n);
            return r.cache = o.set(i, s), s
        };
        return r.cache = new(ri.Cache || Kn), r
    }

    function ni(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }
    Un.prototype.clear = function() {
        this.__data__ = Xn ? Xn(null) : {}
    }, Un.prototype.delete = function(t) {
        return this.has(t) && delete this.__data__[t]
    }, Un.prototype.get = function(t) {
        var e = this.__data__;
        if (Xn) {
            var r = e[t];
            return r === jn ? void 0 : r
        }
        return Hn.call(e, t) ? e[t] : void 0
    }, Un.prototype.has = function(t) {
        var e = this.__data__;
        return Xn ? void 0 !== e[t] : Hn.call(e, t)
    }, Un.prototype.set = function(t, e) {
        return this.__data__[t] = Xn && void 0 === e ? jn : e, this
    }, Qn.prototype.clear = function() {
        this.__data__ = []
    }, Qn.prototype.delete = function(t) {
        var e = this.__data__,
            r = Jn(e, t);
        return !(r < 0 || (r == e.length - 1 ? e.pop() : Yn.call(e, r, 1), 0))
    }, Qn.prototype.get = function(t) {
        var e = this.__data__,
            r = Jn(e, t);
        return r < 0 ? void 0 : e[r][1]
    }, Qn.prototype.has = function(t) {
        return Jn(this.__data__, t) > -1
    }, Qn.prototype.set = function(t, e) {
        var r = this.__data__,
            n = Jn(r, t);
        return n < 0 ? r.push([t, e]) : r[n][1] = e, this
    }, Kn.prototype.clear = function() {
        this.__data__ = {
            hash: new Un,
            map: new(Gn || Qn),
            string: new Un
        }
    }, Kn.prototype.delete = function(t) {
        return ti(this, t).delete(t)
    }, Kn.prototype.get = function(t) {
        return ti(this, t).get(t)
    }, Kn.prototype.has = function(t) {
        return ti(this, t).has(t)
    }, Kn.prototype.set = function(t, e) {
        return ti(this, t).set(t, e), this
    }, ri.Cache = Kn;
    var ii = ri,
        oi = function() {
            if ("undefined" != typeof Map) return Map;

            function t(t, e) {
                var r = -1;
                return t.some(function(t, n) {
                    return t[0] === e && (r = n, !0)
                }), r
            }
            return function() {
                function e() {
                    this.__entries__ = []
                }
                return Object.defineProperty(e.prototype, "size", {
                    get: function() {
                        return this.__entries__.length
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.get = function(e) {
                    var r = t(this.__entries__, e),
                        n = this.__entries__[r];
                    return n && n[1]
                }, e.prototype.set = function(e, r) {
                    var n = t(this.__entries__, e);
                    ~n ? this.__entries__[n][1] = r : this.__entries__.push([e, r])
                }, e.prototype.delete = function(e) {
                    var r = this.__entries__,
                        n = t(r, e);
                    ~n && r.splice(n, 1)
                }, e.prototype.has = function(e) {
                    return !!~t(this.__entries__, e)
                }, e.prototype.clear = function() {
                    this.__entries__.splice(0)
                }, e.prototype.forEach = function(t, e) {
                    void 0 === e && (e = null);
                    for (var r = 0, n = this.__entries__; r < n.length; r++) {
                        var i = n[r];
                        t.call(e, i[1], i[0])
                    }
                }, e
            }()
        }(),
        si = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
        ai = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
        ci = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(ai) : function(t) {
            return setTimeout(function() {
                return t(Date.now())
            }, 1e3 / 60)
        },
        li = 2;
    var ui = 20,
        fi = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
        hi = "undefined" != typeof MutationObserver,
        di = function() {
            function t() {
                this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(t, e) {
                    var r = !1,
                        n = !1,
                        i = 0;

                    function o() {
                        r && (r = !1, t()), n && a()
                    }

                    function s() {
                        ci(o)
                    }

                    function a() {
                        var t = Date.now();
                        if (r) {
                            if (t - i < li) return;
                            n = !0
                        } else r = !0, n = !1, setTimeout(s, e);
                        i = t
                    }
                    return a
                }(this.refresh.bind(this), ui)
            }
            return t.prototype.addObserver = function(t) {
                ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
            }, t.prototype.removeObserver = function(t) {
                var e = this.observers_,
                    r = e.indexOf(t);
                ~r && e.splice(r, 1), !e.length && this.connected_ && this.disconnect_()
            }, t.prototype.refresh = function() {
                this.updateObservers_() && this.refresh()
            }, t.prototype.updateObservers_ = function() {
                var t = this.observers_.filter(function(t) {
                    return t.gatherActive(), t.hasActive()
                });
                return t.forEach(function(t) {
                    return t.broadcastActive()
                }), t.length > 0
            }, t.prototype.connect_ = function() {
                si && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), hi ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
            }, t.prototype.disconnect_ = function() {
                si && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
            }, t.prototype.onTransitionEnd_ = function(t) {
                var e = t.propertyName,
                    r = void 0 === e ? "" : e;
                fi.some(function(t) {
                    return !!~r.indexOf(t)
                }) && this.refresh()
            }, t.getInstance = function() {
                return this.instance_ || (this.instance_ = new t), this.instance_
            }, t.instance_ = null, t
        }(),
        pi = function(t, e) {
            for (var r = 0, n = Object.keys(e); r < n.length; r++) {
                var i = n[r];
                Object.defineProperty(t, i, {
                    value: e[i],
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                })
            }
            return t
        },
        vi = function(t) {
            return t && t.ownerDocument && t.ownerDocument.defaultView || ai
        },
        gi = wi(0, 0, 0, 0);

    function yi(t) {
        return parseFloat(t) || 0
    }

    function bi(t) {
        for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        return e.reduce(function(e, r) {
            return e + yi(t["border-" + r + "-width"])
        }, 0)
    }

    function mi(t) {
        var e = t.clientWidth,
            r = t.clientHeight;
        if (!e && !r) return gi;
        var n = vi(t).getComputedStyle(t),
            i = function(t) {
                for (var e = {}, r = 0, n = ["top", "right", "bottom", "left"]; r < n.length; r++) {
                    var i = n[r],
                        o = t["padding-" + i];
                    e[i] = yi(o)
                }
                return e
            }(n),
            o = i.left + i.right,
            s = i.top + i.bottom,
            a = yi(n.width),
            c = yi(n.height);
        if ("border-box" === n.boxSizing && (Math.round(a + o) !== e && (a -= bi(n, "left", "right") + o), Math.round(c + s) !== r && (c -= bi(n, "top", "bottom") + s)), ! function(t) {
                return t === vi(t).document.documentElement
            }(t)) {
            var l = Math.round(a + o) - e,
                u = Math.round(c + s) - r;
            1 !== Math.abs(l) && (a -= l), 1 !== Math.abs(u) && (c -= u)
        }
        return wi(i.left, i.top, a, c)
    }
    var xi = "undefined" != typeof SVGGraphicsElement ? function(t) {
        return t instanceof vi(t).SVGGraphicsElement
    } : function(t) {
        return t instanceof vi(t).SVGElement && "function" == typeof t.getBBox
    };

    function Ei(t) {
        return si ? xi(t) ? function(t) {
            var e = t.getBBox();
            return wi(0, 0, e.width, e.height)
        }(t) : mi(t) : gi
    }

    function wi(t, e, r, n) {
        return {
            x: t,
            y: e,
            width: r,
            height: n
        }
    }
    var Oi = function() {
            function t(t) {
                this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = wi(0, 0, 0, 0), this.target = t
            }
            return t.prototype.isActive = function() {
                var t = Ei(this.target);
                return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
            }, t.prototype.broadcastRect = function() {
                var t = this.contentRect_;
                return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
            }, t
        }(),
        _i = function() {
            return function(t, e) {
                var r, n, i, o, s, a, c, l = (n = (r = e).x, i = r.y, o = r.width, s = r.height, a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, c = Object.create(a.prototype), pi(c, {
                    x: n,
                    y: i,
                    width: o,
                    height: s,
                    top: i,
                    right: n + o,
                    bottom: s + i,
                    left: n
                }), c);
                pi(this, {
                    target: t,
                    contentRect: l
                })
            }
        }(),
        Si = function() {
            function t(t, e, r) {
                if (this.activeObservations_ = [], this.observations_ = new oi, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
                this.callback_ = t, this.controller_ = e, this.callbackCtx_ = r
            }
            return t.prototype.observe = function(t) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(t instanceof vi(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var e = this.observations_;
                    e.has(t) || (e.set(t, new Oi(t)), this.controller_.addObserver(this), this.controller_.refresh())
                }
            }, t.prototype.unobserve = function(t) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(t instanceof vi(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var e = this.observations_;
                    e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
                }
            }, t.prototype.disconnect = function() {
                this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
            }, t.prototype.gatherActive = function() {
                var t = this;
                this.clearActive(), this.observations_.forEach(function(e) {
                    e.isActive() && t.activeObservations_.push(e)
                })
            }, t.prototype.broadcastActive = function() {
                if (this.hasActive()) {
                    var t = this.callbackCtx_,
                        e = this.activeObservations_.map(function(t) {
                            return new _i(t.target, t.broadcastRect())
                        });
                    this.callback_.call(t, e, t), this.clearActive()
                }
            }, t.prototype.clearActive = function() {
                this.activeObservations_.splice(0)
            }, t.prototype.hasActive = function() {
                return this.activeObservations_.length > 0
            }, t
        }(),
        Ai = "undefined" != typeof WeakMap ? new WeakMap : new oi,
        ki = function() {
            return function t(e) {
                if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                var r = di.getInstance(),
                    n = new Si(e, r, this);
                Ai.set(this, n)
            }
        }();
    ["observe", "unobserve", "disconnect"].forEach(function(t) {
        ki.prototype[t] = function() {
            var e;
            return (e = Ai.get(this))[t].apply(e, arguments)
        }
    });
    var Li = void 0 !== ai.ResizeObserver ? ai.ResizeObserver : ki,
        Mi = !("undefined" == typeof window || !window.document || !window.document.createElement);

    function ji() {
        if ("undefined" == typeof document) return 0;
        var t = document.body,
            e = document.createElement("div"),
            r = e.style;
        r.position = "fixed", r.left = 0, r.visibility = "hidden", r.overflowY = "scroll", t.appendChild(e);
        var n = e.getBoundingClientRect().right;
        return t.removeChild(e), n
    }
    var Ri = function() {
        function t(e, r) {
            var n = this;
            this.onScroll = function() {
                n.scrollXTicking || (window.requestAnimationFrame(n.scrollX), n.scrollXTicking = !0), n.scrollYTicking || (window.requestAnimationFrame(n.scrollY), n.scrollYTicking = !0)
            }, this.scrollX = function() {
                n.axis.x.isOverflowing && (n.showScrollbar("x"), n.positionScrollbar("x")), n.scrollXTicking = !1
            }, this.scrollY = function() {
                n.axis.y.isOverflowing && (n.showScrollbar("y"), n.positionScrollbar("y")), n.scrollYTicking = !1
            }, this.onMouseEnter = function() {
                n.showScrollbar("x"), n.showScrollbar("y")
            }, this.onMouseMove = function(t) {
                n.mouseX = t.clientX, n.mouseY = t.clientY, (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseMoveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseMoveForAxis("y")
            }, this.onMouseLeave = function() {
                n.onMouseMove.cancel(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseLeaveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseLeaveForAxis("y"), n.mouseX = -1, n.mouseY = -1
            }, this.onWindowResize = function() {
                n.scrollbarWidth = ji(), n.hideNativeScrollbar()
            }, this.hideScrollbars = function() {
                n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect(), n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect(), n.isWithinBounds(n.axis.y.track.rect) || (n.axis.y.scrollbar.el.classList.remove(n.classNames.visible), n.axis.y.isVisible = !1), n.isWithinBounds(n.axis.x.track.rect) || (n.axis.x.scrollbar.el.classList.remove(n.classNames.visible), n.axis.x.isVisible = !1)
            }, this.onPointerEvent = function(t) {
                var e, r;
                n.axis.x.scrollbar.rect = n.axis.x.scrollbar.el.getBoundingClientRect(), n.axis.y.scrollbar.rect = n.axis.y.scrollbar.el.getBoundingClientRect(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && (r = n.isWithinBounds(n.axis.x.scrollbar.rect)), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && (e = n.isWithinBounds(n.axis.y.scrollbar.rect)), (e || r) && (t.preventDefault(), t.stopPropagation(), "mousedown" === t.type && (e && n.onDragStart(t, "y"), r && n.onDragStart(t, "x")))
            }, this.drag = function(e) {
                var r = n.axis[n.draggedAxis].track,
                    i = r.rect[n.axis[n.draggedAxis].sizeAttr],
                    o = n.axis[n.draggedAxis].scrollbar;
                e.preventDefault(), e.stopPropagation();
                var s = (("y" === n.draggedAxis ? e.pageY : e.pageX) - r.rect[n.axis[n.draggedAxis].offsetAttr] - n.axis[n.draggedAxis].dragOffset) / r.rect[n.axis[n.draggedAxis].sizeAttr] * n.contentWrapperEl[n.axis[n.draggedAxis].scrollSizeAttr];
                "x" === n.draggedAxis && (s = n.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? s - (i + o.size) : s, s = n.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -s : s), n.contentWrapperEl[n.axis[n.draggedAxis].scrollOffsetAttr] = s
            }, this.onEndDrag = function(t) {
                t.preventDefault(), t.stopPropagation(), n.el.classList.remove(n.classNames.dragging), document.removeEventListener("mousemove", n.drag, !0), document.removeEventListener("mouseup", n.onEndDrag, !0), n.removePreventClickId = window.setTimeout(function() {
                    document.removeEventListener("click", n.preventClick, !0), document.removeEventListener("dblclick", n.preventClick, !0), n.removePreventClickId = null
                })
            }, this.preventClick = function(t) {
                t.preventDefault(), t.stopPropagation()
            }, this.el = e, this.flashTimeout, this.contentEl, this.contentWrapperEl, this.offsetEl, this.maskEl, this.globalObserver, this.mutationObserver, this.resizeObserver, this.scrollbarWidth, this.minScrollbarWidth = 20, this.options = Object.assign({}, t.defaultOptions, r), this.classNames = Object.assign({}, t.defaultOptions.classNames, this.options.classNames), this.isRtl, this.axis = {
                x: {
                    scrollOffsetAttr: "scrollLeft",
                    sizeAttr: "width",
                    scrollSizeAttr: "scrollWidth",
                    offsetAttr: "left",
                    overflowAttr: "overflowX",
                    dragOffset: 0,
                    isOverflowing: !0,
                    isVisible: !1,
                    forceVisible: !1,
                    track: {},
                    scrollbar: {}
                },
                y: {
                    scrollOffsetAttr: "scrollTop",
                    sizeAttr: "height",
                    scrollSizeAttr: "scrollHeight",
                    offsetAttr: "top",
                    overflowAttr: "overflowY",
                    dragOffset: 0,
                    isOverflowing: !0,
                    isVisible: !1,
                    forceVisible: !1,
                    track: {},
                    scrollbar: {}
                }
            }, this.removePreventClickId = null, t.instances.has(this.el) || (this.recalculate = un(this.recalculate.bind(this), 64), this.onMouseMove = un(this.onMouseMove.bind(this), 64), this.hideScrollbars = Ln(this.hideScrollbars.bind(this), this.options.timeout), this.onWindowResize = Ln(this.onWindowResize.bind(this), 64, {
                leading: !0
            }), t.getRtlHelpers = ii(t.getRtlHelpers), this.init())
        }
        t.getRtlHelpers = function() {
            var e = document.createElement("div");
            e.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
            var r = e.firstElementChild;
            document.body.appendChild(r);
            var n = r.firstElementChild;
            r.scrollLeft = 0;
            var i = t.getOffset(r),
                o = t.getOffset(n);
            r.scrollLeft = 999;
            var s = t.getOffset(n);
            return {
                isRtlScrollingInverted: i.left !== o.left && o.left - s.left != 0,
                isRtlScrollbarInverted: i.left !== o.left
            }
        }, t.initHtmlApi = function() {
            this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(function(e) {
                e.forEach(function(e) {
                    Array.prototype.forEach.call(e.addedNodes, function(e) {
                        1 === e.nodeType && (e.hasAttribute("data-simplebar") ? !t.instances.has(e) && new t(e, t.getElOptions(e)) : Array.prototype.forEach.call(e.querySelectorAll("[data-simplebar]"), function(e) {
                            !t.instances.has(e) && new t(e, t.getElOptions(e))
                        }))
                    }), Array.prototype.forEach.call(e.removedNodes, function(e) {
                        1 === e.nodeType && (e.hasAttribute("data-simplebar") ? t.instances.has(e) && t.instances.get(e).unMount() : Array.prototype.forEach.call(e.querySelectorAll("[data-simplebar]"), function(e) {
                            t.instances.has(e) && t.instances.get(e).unMount()
                        }))
                    })
                })
            }), this.globalObserver.observe(document, {
                childList: !0,
                subtree: !0
            })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements))
        }, t.getElOptions = function(t) {
            return Array.prototype.reduce.call(t.attributes, function(t, e) {
                var r = e.name.match(/data-simplebar-(.+)/);
                if (r) {
                    var n = r[1].replace(/\W+(.)/g, function(t, e) {
                        return e.toUpperCase()
                    });
                    switch (e.value) {
                        case "true":
                            t[n] = !0;
                            break;
                        case "false":
                            t[n] = !1;
                            break;
                        case void 0:
                            t[n] = !0;
                            break;
                        default:
                            t[n] = e.value
                    }
                }
                return t
            }, {})
        }, t.removeObserver = function() {
            this.globalObserver.disconnect()
        }, t.initDOMLoadedElements = function() {
            document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), function(e) {
                t.instances.has(e) || new t(e, t.getElOptions(e))
            })
        }, t.getOffset = function(t) {
            var e = t.getBoundingClientRect();
            return {
                top: e.top + (window.pageYOffset || document.documentElement.scrollTop),
                left: e.left + (window.pageXOffset || document.documentElement.scrollLeft)
            }
        };
        var e = t.prototype;
        return e.init = function() {
            t.instances.set(this.el, this), Mi && (this.initDOM(), this.scrollbarWidth = ji(), this.recalculate(), this.initListeners())
        }, e.initDOM = function() {
            var t = this;
            if (Array.prototype.filter.call(this.el.children, function(e) {
                    return e.classList.contains(t.classNames.wrapper)
                }).length) this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper), this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl), this.offsetEl = this.el.querySelector("." + this.classNames.offset), this.maskEl = this.el.querySelector("." + this.classNames.mask), this.placeholderEl = this.el.querySelector("." + this.classNames.placeholder), this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl), this.axis.x.track.el = this.el.querySelector("." + this.classNames.track + "." + this.classNames.horizontal), this.axis.y.track.el = this.el.querySelector("." + this.classNames.track + "." + this.classNames.vertical);
            else {
                for (this.wrapperEl = document.createElement("div"), this.contentWrapperEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), this.wrapperEl.classList.add(this.classNames.wrapper), this.contentWrapperEl.classList.add(this.classNames.contentWrapper), this.offsetEl.classList.add(this.classNames.offset), this.maskEl.classList.add(this.classNames.mask), this.contentEl.classList.add(this.classNames.contentEl), this.placeholderEl.classList.add(this.classNames.placeholder), this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
                this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl)
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
                var e = document.createElement("div"),
                    r = document.createElement("div");
                e.classList.add(this.classNames.track), r.classList.add(this.classNames.scrollbar), e.appendChild(r), this.axis.x.track.el = e.cloneNode(!0), this.axis.x.track.el.classList.add(this.classNames.horizontal), this.axis.y.track.el = e.cloneNode(!0), this.axis.y.track.el.classList.add(this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el)
            }
            this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar), this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar), this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible), this.axis.y.scrollbar.el.classList.add(this.classNames.visible)), this.el.setAttribute("data-simplebar", "init")
        }, e.initListeners = function() {
            var t = this;
            this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach(function(e) {
                t.el.addEventListener(e, t.onPointerEvent, !0)
            }), ["touchstart", "touchend", "touchmove"].forEach(function(e) {
                t.el.addEventListener(e, t.onPointerEvent, {
                    capture: !0,
                    passive: !0
                })
            }), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.addEventListener("scroll", this.onScroll), window.addEventListener("resize", this.onWindowResize), this.resizeObserver = new Li(this.recalculate), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl)
        }, e.recalculate = function() {
            var t = this.heightAutoObserverEl.offsetHeight <= 1,
                e = this.heightAutoObserverEl.offsetWidth <= 1;
            this.elStyles = window.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction, this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft, this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft, this.contentWrapperEl.style.height = t ? "auto" : "100%", this.placeholderEl.style.width = e ? this.contentEl.offsetWidth + "px" : "auto", this.placeholderEl.style.height = this.contentEl.scrollHeight + "px", this.axis.x.isOverflowing = this.contentWrapperEl.scrollWidth > this.contentWrapperEl.offsetWidth, this.axis.y.isOverflowing = this.contentWrapperEl.scrollHeight > this.contentWrapperEl.offsetHeight, this.axis.x.isOverflowing = "hidden" !== this.elStyles.overflowX && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== this.elStyles.overflowY && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible, this.hideNativeScrollbar(), this.axis.x.track.rect = this.axis.x.track.el.getBoundingClientRect(), this.axis.y.track.rect = this.axis.y.track.el.getBoundingClientRect(), this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px", this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px", this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y")
        }, e.getScrollbarSize = function(t) {
            void 0 === t && (t = "y");
            var e, r = this.scrollbarWidth ? this.contentWrapperEl[this.axis[t].scrollSizeAttr] : this.contentWrapperEl[this.axis[t].scrollSizeAttr] - this.minScrollbarWidth,
                n = this.axis[t].track.rect[this.axis[t].sizeAttr];
            if (this.axis[t].isOverflowing) {
                var i = n / r;
                return e = Math.max(~~(i * n), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (e = Math.min(e, this.options.scrollbarMaxSize)), e
            }
        }, e.positionScrollbar = function(e) {
            void 0 === e && (e = "y");
            var r = this.contentWrapperEl[this.axis[e].scrollSizeAttr],
                n = this.axis[e].track.rect[this.axis[e].sizeAttr],
                i = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
                o = this.axis[e].scrollbar,
                s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
                a = (s = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -s : s) / (r - i),
                c = ~~((n - o.size) * a);
            c = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? c + (n - o.size) : c, o.el.style.transform = "x" === e ? "translate3d(" + c + "px, 0, 0)" : "translate3d(0, " + c + "px, 0)"
        }, e.toggleTrackVisibility = function(t) {
            void 0 === t && (t = "y");
            var e = this.axis[t].track.el,
                r = this.axis[t].scrollbar.el;
            this.axis[t].isOverflowing || this.axis[t].forceVisible ? (e.style.visibility = "visible", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll") : (e.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "hidden"), this.axis[t].isOverflowing ? r.style.display = "block" : r.style.display = "none"
        }, e.hideNativeScrollbar = function() {
            if (this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + (this.scrollbarWidth || this.minScrollbarWidth) + "px" : 0, this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + (this.scrollbarWidth || this.minScrollbarWidth) + "px" : 0, !this.scrollbarWidth) {
                var t = [this.isRtl ? "paddingLeft" : "paddingRight"];
                this.contentWrapperEl.style[t] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? this.minScrollbarWidth + "px" : 0, this.contentWrapperEl.style.paddingBottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? this.minScrollbarWidth + "px" : 0
            }
        }, e.onMouseMoveForAxis = function(t) {
            void 0 === t && (t = "y"), this.axis[t].track.rect = this.axis[t].track.el.getBoundingClientRect(), this.axis[t].scrollbar.rect = this.axis[t].scrollbar.el.getBoundingClientRect(), this.isWithinBounds(this.axis[t].scrollbar.rect) ? this.axis[t].scrollbar.el.classList.add(this.classNames.hover) : this.axis[t].scrollbar.el.classList.remove(this.classNames.hover), this.isWithinBounds(this.axis[t].track.rect) ? (this.showScrollbar(t), this.axis[t].track.el.classList.add(this.classNames.hover)) : this.axis[t].track.el.classList.remove(this.classNames.hover)
        }, e.onMouseLeaveForAxis = function(t) {
            void 0 === t && (t = "y"), this.axis[t].track.el.classList.remove(this.classNames.hover), this.axis[t].scrollbar.el.classList.remove(this.classNames.hover)
        }, e.showScrollbar = function(t) {
            void 0 === t && (t = "y");
            var e = this.axis[t].scrollbar.el;
            this.axis[t].isVisible || (e.classList.add(this.classNames.visible), this.axis[t].isVisible = !0), this.options.autoHide && this.hideScrollbars()
        }, e.onDragStart = function(t, e) {
            void 0 === e && (e = "y");
            var r = this.axis[e].scrollbar.el,
                n = "y" === e ? t.pageY : t.pageX;
            this.axis[e].dragOffset = n - r.getBoundingClientRect()[this.axis[e].offsetAttr], this.draggedAxis = e, this.el.classList.add(this.classNames.dragging), document.addEventListener("mousemove", this.drag, !0), document.addEventListener("mouseup", this.onEndDrag, !0), null === this.removePreventClickId ? (document.addEventListener("click", this.preventClick, !0), document.addEventListener("dblclick", this.preventClick, !0)) : (window.clearTimeout(this.removePreventClickId), this.removePreventClickId = null)
        }, e.getContentElement = function() {
            return this.contentEl
        }, e.getScrollElement = function() {
            return this.contentWrapperEl
        }, e.removeListeners = function() {
            var t = this;
            this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach(function(e) {
                t.el.removeEventListener(e, t.onPointerEvent, !0)
            }), ["touchstart", "touchend", "touchmove"].forEach(function(e) {
                t.el.removeEventListener(e, t.onPointerEvent, {
                    capture: !0,
                    passive: !0
                })
            }), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.removeEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver.disconnect(), this.recalculate.cancel(), this.onMouseMove.cancel(), this.hideScrollbars.cancel(), this.onWindowResize.cancel()
        }, e.unMount = function() {
            this.removeListeners(), t.instances.delete(this.el)
        }, e.isChildNode = function(t) {
            return null !== t && (t === this.el || this.isChildNode(t.parentNode))
        }, e.isWithinBounds = function(t) {
            return this.mouseX >= t.left && this.mouseX <= t.left + t.width && this.mouseY >= t.top && this.mouseY <= t.top + t.height
        }, t
    }();
    return Ri.defaultOptions = {
        autoHide: !0,
        forceVisible: !1,
        classNames: {
            contentEl: "simplebar-content",
            contentWrapper: "simplebar-content-wrapper",
            offset: "simplebar-offset",
            mask: "simplebar-mask",
            wrapper: "simplebar-wrapper",
            placeholder: "simplebar-placeholder",
            scrollbar: "simplebar-scrollbar",
            track: "simplebar-track",
            heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
            heightAutoObserverEl: "simplebar-height-auto-observer",
            visible: "simplebar-visible",
            horizontal: "simplebar-horizontal",
            vertical: "simplebar-vertical",
            hover: "simplebar-hover",
            dragging: "simplebar-dragging"
        },
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        timeout: 1e3
    }, Ri.instances = new WeakMap, Mi && Ri.initHtmlApi(), Ri
});
/*! smooth-scroll v16.1.1 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!(function(e, t) {
    "function" == typeof define && define.amd ? define([], (function() {
        return t(e)
    })) : "object" == typeof exports ? module.exports = t(e) : e.SmoothScroll = t(e)
})("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, (function(w) {
    "use strict";
    var L = {
            ignore: "[data-scroll-ignore]",
            header: null,
            topOnEmptyHash: !0,
            speed: 500,
            speedAsDuration: !1,
            durationMax: null,
            durationMin: null,
            clip: !0,
            offset: 0,
            easing: "easeInOutCubic",
            customEasing: null,
            updateURL: !0,
            popstate: !0,
            emitEvents: !0
        },
        H = function() {
            var n = {};
            return Array.prototype.forEach.call(arguments, (function(e) {
                for (var t in e) {
                    if (!e.hasOwnProperty(t)) return;
                    n[t] = e[t]
                }
            })), n
        },
        r = function(e) {
            "#" === e.charAt(0) && (e = e.substr(1));
            for (var t, n = String(e), o = n.length, a = -1, r = "", i = n.charCodeAt(0); ++a < o;) {
                if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                1 <= t && t <= 31 || 127 == t || 0 === a && 48 <= t && t <= 57 || 1 === a && 48 <= t && t <= 57 && 45 === i ? r += "\\" + t.toString(16) + " " : r += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a)
            }
            return "#" + r
        },
        q = function() {
            return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
        },
        x = function(e) {
            return e ? (t = e, parseInt(w.getComputedStyle(t).height, 10) + e.offsetTop) : 0;
            var t
        },
        Q = function(e, t, n, o) {
            if (t.emitEvents && "function" == typeof w.CustomEvent) {
                var a = new CustomEvent(e, {
                    bubbles: !0,
                    detail: {
                        anchor: n,
                        toggle: o
                    }
                });
                document.dispatchEvent(a)
            }
        };
    return function(o, e) {
        var I, a, M, A, C = {};
        C.cancelScroll = function(e) {
            cancelAnimationFrame(A), A = null, e || Q("scrollCancel", I)
        }, C.animateScroll = function(i, s, e) {
            C.cancelScroll();
            var c = H(I || L, e || {}),
                u = "[object Number]" === Object.prototype.toString.call(i),
                t = u || !i.tagName ? null : i;
            if (u || t) {
                var l = w.pageYOffset;
                c.header && !M && (M = document.querySelector(c.header));
                var n, o, a, d, r, f, m, h, p = x(M),
                    g = u ? i : (function(e, t, n, o) {
                        var a = 0;
                        if (e.offsetParent)
                            for (; a += e.offsetTop, e = e.offsetParent;);
                        return a = Math.max(a - t - n, 0), o && (a = Math.min(a, q() - w.innerHeight)), a
                    })(t, p, parseInt("function" == typeof c.offset ? c.offset(i, s) : c.offset, 10), c.clip),
                    y = g - l,
                    v = q(),
                    S = 0,
                    E = (n = y, a = (o = c).speedAsDuration ? o.speed : Math.abs(n / 1e3 * o.speed), o.durationMax && a > o.durationMax ? o.durationMax : o.durationMin && a < o.durationMin ? o.durationMin : parseInt(a, 10)),
                    b = function(e, t) {
                        var n, o, a, r = w.pageYOffset;
                        if (e == t || r == t || (l < t && w.innerHeight + r) >= v) return C.cancelScroll(!0), o = t, a = u, 0 === (n = i) && document.body.focus(), a || (n.focus(), document.activeElement !== n && (n.setAttribute("tabindex", "-1"), n.focus(), n.style.outline = "none"), w.scrollTo(0, o)), Q("scrollStop", c, i, s), !(A = d = null)
                    },
                    O = function(e) {
                        var t, n, o;
                        d || (d = e), S += e - d, f = l + y * (n = r = 1 < (r = 0 === E ? 0 : S / E) ? 1 : r, "easeInQuad" === (t = c).easing && (o = n * n), "easeOutQuad" === t.easing && (o = n * (2 - n)), "easeInOutQuad" === t.easing && (o = n < .5 ? 2 * n * n : (4 - 2 * n) * n - 1), "easeInCubic" === t.easing && (o = n * n * n), "easeOutCubic" === t.easing && (o = --n * n * n + 1), "easeInOutCubic" === t.easing && (o = n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1), "easeInQuart" === t.easing && (o = n * n * n * n), "easeOutQuart" === t.easing && (o = 1 - --n * n * n * n), "easeInOutQuart" === t.easing && (o = n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n), "easeInQuint" === t.easing && (o = n * n * n * n * n), "easeOutQuint" === t.easing && (o = 1 + --n * n * n * n * n), "easeInOutQuint" === t.easing && (o = n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n), t.customEasing && (o = t.customEasing(n)), o || n), w.scrollTo(0, Math.floor(f)), b(f, g) || (A = w.requestAnimationFrame(O), d = e)
                    };
                0 === w.pageYOffset && w.scrollTo(0, 0), m = i, h = c, u || history.pushState && h.updateURL && history.pushState({
                    smoothScroll: JSON.stringify(h),
                    anchor: m.id
                }, document.title, m === document.documentElement ? "#top" : "#" + m.id), "matchMedia" in w && w.matchMedia("(prefers-reduced-motion)").matches ? w.scrollTo(0, Math.floor(g)) : (Q("scrollStart", c, i, s), C.cancelScroll(!0), w.requestAnimationFrame(O))
            }
        };
        var t = function(e) {
                if (!e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && "closest" in e.target && (a = e.target.closest(o)) && "a" === a.tagName.toLowerCase() && !e.target.closest(I.ignore) && a.hostname === w.location.hostname && a.pathname === w.location.pathname && /#/.test(a.href)) {
                    var t, n;
                    try {
                        t = r(decodeURIComponent(a.hash))
                    } catch (e) {
                        t = r(a.hash)
                    }
                    if (console.log(t), "#" === t) {
                        if (!I.topOnEmptyHash) return;
                        n = document.documentElement
                    } else n = document.querySelector(t);
                    (n = n || "#top" !== t ? n : document.documentElement) && (e.preventDefault(), (function(e) {
                        if (history.replaceState && e.updateURL && !history.state) {
                            var t = w.location.hash;
                            t = t || "", history.replaceState({
                                smoothScroll: JSON.stringify(e),
                                anchor: t || w.pageYOffset
                            }, document.title, t || w.location.href)
                        }
                    })(I), C.animateScroll(n, a))
                }
            },
            n = function(e) {
                if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(I)) {
                    var t = history.state.anchor;
                    "string" == typeof t && t && !(t = document.querySelector(r(history.state.anchor))) || C.animateScroll(t, null, {
                        updateURL: !1
                    })
                }
            };
        C.destroy = function() {
            I && (document.removeEventListener("click", t, !1), w.removeEventListener("popstate", n, !1), C.cancelScroll(), A = M = a = I = null)
        };
        return (function() {
            if (!("querySelector" in document && "addEventListener" in w && "requestAnimationFrame" in w && "closest" in w.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
            C.destroy(), I = H(L, e || {}), M = I.header ? document.querySelector(I.header) : null, document.addEventListener("click", t, !1), I.updateURL && I.popstate && w.addEventListener("popstate", n, !1)
        })(), C
    }
}));
var tns = function() {
    var t = window,
        Si = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
            return setTimeout(t, 16)
        },
        e = window,
        Hi = e.cancelAnimationFrame || e.mozCancelAnimationFrame || function(t) {
            clearTimeout(t)
        };

    function Oi() {
        for (var t, e, n, i = arguments[0] || {}, a = 1, r = arguments.length; a < r; a++)
            if (null !== (t = arguments[a]))
                for (e in t) i !== (n = t[e]) && void 0 !== n && (i[e] = n);
        return i
    }

    function Di(t) {
        return 0 <= ["true", "false"].indexOf(t) ? JSON.parse(t) : t
    }

    function ki(t, e, n, i) {
        if (i) try {
            t.setItem(e, n)
        } catch (t) {}
        return n
    }

    function Ri() {
        var t = document,
            e = t.body;
        return e || ((e = t.createElement("body")).fake = !0), e
    }
    var n = document.documentElement;

    function Ii(t) {
        var e = "";
        return t.fake && (e = n.style.overflow, t.style.background = "", t.style.overflow = n.style.overflow = "hidden", n.appendChild(t)), e
    }

    function Pi(t, e) {
        t.fake && (t.remove(), n.style.overflow = e, n.offsetHeight)
    }

    function zi(t, e, n, i) {
        "insertRule" in t ? t.insertRule(e + "{" + n + "}", i) : t.addRule(e, n, i)
    }

    function Wi(t) {
        return ("insertRule" in t ? t.cssRules : t.rules).length
    }

    function Fi(t, e, n) {
        for (var i = 0, a = t.length; i < a; i++) e.call(n, t[i], i)
    }
    var i = "classList" in document.createElement("_"),
        qi = i ? function(t, e) {
            return t.classList.contains(e)
        } : function(t, e) {
            return 0 <= t.className.indexOf(e)
        },
        ji = i ? function(t, e) {
            qi(t, e) || t.classList.add(e)
        } : function(t, e) {
            qi(t, e) || (t.className += " " + e)
        },
        Vi = i ? function(t, e) {
            qi(t, e) && t.classList.remove(e)
        } : function(t, e) {
            qi(t, e) && (t.className = t.className.replace(e, ""))
        };

    function Gi(t, e) {
        return t.hasAttribute(e)
    }

    function Qi(t, e) {
        return t.getAttribute(e)
    }

    function r(t) {
        return void 0 !== t.item
    }

    function Xi(t, e) {
        if (t = r(t) || t instanceof Array ? t : [t], "[object Object]" === Object.prototype.toString.call(e))
            for (var n = t.length; n--;)
                for (var i in e) t[n].setAttribute(i, e[i])
    }

    function Yi(t, e) {
        t = r(t) || t instanceof Array ? t : [t];
        for (var n = (e = e instanceof Array ? e : [e]).length, i = t.length; i--;)
            for (var a = n; a--;) t[i].removeAttribute(e[a])
    }

    function Ki(t) {
        for (var e = [], n = 0, i = t.length; n < i; n++) e.push(t[n]);
        return e
    }

    function Ji(t, e) {
        "none" !== t.style.display && (t.style.display = "none")
    }

    function Ui(t, e) {
        "none" === t.style.display && (t.style.display = "")
    }

    function _i(t) {
        return "none" !== window.getComputedStyle(t).display
    }

    function Zi(e) {
        if ("string" == typeof e) {
            var n = [e],
                i = e.charAt(0).toUpperCase() + e.substr(1);
            ["Webkit", "Moz", "ms", "O"].forEach(function(t) {
                "ms" === t && "transform" !== e || n.push(t + i)
            }), e = n
        }
        for (var t = document.createElement("fakeelement"), a = (e.length, 0); a < e.length; a++) {
            var r = e[a];
            if (void 0 !== t.style[r]) return r
        }
        return !1
    }

    function $i(t, e) {
        var n = !1;
        return /^Webkit/.test(t) ? n = "webkit" + e + "End" : /^O/.test(t) ? n = "o" + e + "End" : t && (n = e.toLowerCase() + "end"), n
    }
    var a = !1;
    try {
        var o = Object.defineProperty({}, "passive", {
            get: function() {
                a = !0
            }
        });
        window.addEventListener("test", null, o)
    } catch (t) {}
    var u = !!a && {
        passive: !0
    };

    function ta(t, e, n) {
        for (var i in e) {
            var a = 0 <= ["touchstart", "touchmove"].indexOf(i) && !n && u;
            t.addEventListener(i, e[i], a)
        }
    }

    function ea(t, e) {
        for (var n in e) {
            var i = 0 <= ["touchstart", "touchmove"].indexOf(n) && u;
            t.removeEventListener(n, e[n], i)
        }
    }

    function na() {
        return {
            topics: {},
            on: function(t, e) {
                this.topics[t] = this.topics[t] || [], this.topics[t].push(e)
            },
            off: function(t, e) {
                if (this.topics[t])
                    for (var n = 0; n < this.topics[t].length; n++)
                        if (this.topics[t][n] === e) {
                            this.topics[t].splice(n, 1);
                            break
                        }
            },
            emit: function(e, n) {
                n.type = e, this.topics[e] && this.topics[e].forEach(function(t) {
                    t(n, e)
                })
            }
        }
    }
    Object.keys || (Object.keys = function(t) {
        var e = [];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
        return e
    }), "remove" in Element.prototype || (Element.prototype.remove = function() {
        this.parentNode && this.parentNode.removeChild(this)
    });
    var ia = function(H) {
        H = Oi({
            container: ".slider",
            mode: "carousel",
            axis: "horizontal",
            items: 1,
            gutter: 0,
            edgePadding: 0,
            fixedWidth: !1,
            autoWidth: !1,
            viewportMax: !1,
            slideBy: 1,
            center: !1,
            controls: !0,
            controlsPosition: "top",
            controlsText: ["prev", "next"],
            controlsContainer: !1,
            prevButton: !1,
            nextButton: !1,
            nav: !0,
            navPosition: "top",
            navContainer: !1,
            navAsThumbnails: !1,
            arrowKeys: !1,
            speed: 300,
            autoplay: !1,
            autoplayPosition: "top",
            autoplayTimeout: 5e3,
            autoplayDirection: "forward",
            autoplayText: ["start", "stop"],
            autoplayHoverPause: !1,
            autoplayButton: !1,
            autoplayButtonOutput: !0,
            autoplayResetOnVisibility: !0,
            animateIn: "tns-fadeIn",
            animateOut: "tns-fadeOut",
            animateNormal: "tns-normal",
            animateDelay: !1,
            loop: !0,
            rewind: !1,
            autoHeight: !1,
            responsive: !1,
            lazyload: !1,
            lazyloadSelector: ".tns-lazy-img",
            touch: !0,
            mouseDrag: !1,
            swipeAngle: 15,
            nested: !1,
            preventActionWhenRunning: !1,
            preventScrollOnTouch: !1,
            freezable: !0,
            onInit: !1,
            useLocalStorage: !0
        }, H || {});
        var O = document,
            m = window,
            a = {
                ENTER: 13,
                SPACE: 32,
                LEFT: 37,
                RIGHT: 39
            },
            e = {},
            n = H.useLocalStorage;
        if (n) {
            var t = navigator.userAgent,
                i = new Date;
            try {
                (e = m.localStorage) ? (e.setItem(i, i), n = e.getItem(i) == i, e.removeItem(i)) : n = !1, n || (e = {})
            } catch (t) {
                n = !1
            }
            n && (e.tnsApp && e.tnsApp !== t && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(t) {
                e.removeItem(t)
            }), localStorage.tnsApp = t)
        }
        var r, o, u, l, s, c, f, y = e.tC ? Di(e.tC) : ki(e, "tC", function() {
                var t = document,
                    e = Ri(),
                    n = Ii(e),
                    i = t.createElement("div"),
                    a = !1;
                e.appendChild(i);
                try {
                    for (var r, o = "(10px * 10)", u = ["calc" + o, "-moz-calc" + o, "-webkit-calc" + o], l = 0; l < 3; l++)
                        if (r = u[l], i.style.width = r, 100 === i.offsetWidth) {
                            a = r.replace(o, "");
                            break
                        }
                } catch (t) {}
                return e.fake ? Pi(e, n) : i.remove(), a
            }(), n),
            g = e.tPL ? Di(e.tPL) : ki(e, "tPL", function() {
                var t, e = document,
                    n = Ri(),
                    i = Ii(n),
                    a = e.createElement("div"),
                    r = e.createElement("div"),
                    o = "";
                a.className = "tns-t-subp2", r.className = "tns-t-ct";
                for (var u = 0; u < 70; u++) o += "<div></div>";
                return r.innerHTML = o, a.appendChild(r), n.appendChild(a), t = Math.abs(a.getBoundingClientRect().left - r.children[67].getBoundingClientRect().left) < 2, n.fake ? Pi(n, i) : a.remove(), t
            }(), n),
            D = e.tMQ ? Di(e.tMQ) : ki(e, "tMQ", (o = document, u = Ri(), l = Ii(u), s = o.createElement("div"), c = o.createElement("style"), f = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", c.type = "text/css", s.className = "tns-mq-test", u.appendChild(c), u.appendChild(s), c.styleSheet ? c.styleSheet.cssText = f : c.appendChild(o.createTextNode(f)), r = window.getComputedStyle ? window.getComputedStyle(s).position : s.currentStyle.position, u.fake ? Pi(u, l) : s.remove(), "absolute" === r), n),
            d = e.tTf ? Di(e.tTf) : ki(e, "tTf", Zi("transform"), n),
            v = e.t3D ? Di(e.t3D) : ki(e, "t3D", function(t) {
                if (!t) return !1;
                if (!window.getComputedStyle) return !1;
                var e, n = document,
                    i = Ri(),
                    a = Ii(i),
                    r = n.createElement("p"),
                    o = 9 < t.length ? "-" + t.slice(0, -9).toLowerCase() + "-" : "";
                return o += "transform", i.insertBefore(r, null), r.style[t] = "translate3d(1px,1px,1px)", e = window.getComputedStyle(r).getPropertyValue(o), i.fake ? Pi(i, a) : r.remove(), void 0 !== e && 0 < e.length && "none" !== e
            }(d), n),
            x = e.tTDu ? Di(e.tTDu) : ki(e, "tTDu", Zi("transitionDuration"), n),
            p = e.tTDe ? Di(e.tTDe) : ki(e, "tTDe", Zi("transitionDelay"), n),
            b = e.tADu ? Di(e.tADu) : ki(e, "tADu", Zi("animationDuration"), n),
            h = e.tADe ? Di(e.tADe) : ki(e, "tADe", Zi("animationDelay"), n),
            C = e.tTE ? Di(e.tTE) : ki(e, "tTE", $i(x, "Transition"), n),
            w = e.tAE ? Di(e.tAE) : ki(e, "tAE", $i(b, "Animation"), n),
            M = m.console && "function" == typeof m.console.warn,
            T = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"],
            E = {};
        if (T.forEach(function(t) {
                if ("string" == typeof H[t]) {
                    var e = H[t],
                        n = O.querySelector(e);
                    if (E[t] = e, !n || !n.nodeName) return void(M && console.warn("Can't find", H[t]));
                    H[t] = n
                }
            }), !(H.container.children.length < 1)) {
            var k = H.responsive,
                R = H.nested,
                I = "carousel" === H.mode;
            if (k) {
                0 in k && (H = Oi(H, k[0]), delete k[0]);
                var A = {};
                for (var N in k) {
                    var L = k[N];
                    L = "number" == typeof L ? {
                        items: L
                    } : L, A[N] = L
                }
                k = A, A = null
            }
            if (I || function t(e) {
                    for (var n in e) I || ("slideBy" === n && (e[n] = "page"), "edgePadding" === n && (e[n] = !1), "autoHeight" === n && (e[n] = !1)), "responsive" === n && t(e[n])
                }(H), !I) {
                H.axis = "horizontal", H.slideBy = "page", H.edgePadding = !1;
                var P = H.animateIn,
                    z = H.animateOut,
                    B = H.animateDelay,
                    W = H.animateNormal
            }
            var S, F, q = "horizontal" === H.axis,
                j = O.createElement("div"),
                V = O.createElement("div"),
                G = H.container,
                Q = G.parentNode,
                X = G.outerHTML,
                Y = G.children,
                K = Y.length,
                J = sn(),
                U = !1;
            k && Bn(), I && (G.className += " tns-vpfix");
            var _, Z, $, tt, et, nt, it, at, rt = H.autoWidth,
                ot = vn("fixedWidth"),
                ut = vn("edgePadding"),
                lt = vn("gutter"),
                st = fn(),
                ct = vn("center"),
                ft = rt ? 1 : Math.floor(vn("items")),
                dt = vn("slideBy"),
                vt = H.viewportMax || H.fixedWidthViewportWidth,
                pt = vn("arrowKeys"),
                ht = vn("speed"),
                mt = H.rewind,
                yt = !mt && H.loop,
                gt = vn("autoHeight"),
                xt = vn("controls"),
                bt = vn("controlsText"),
                Ct = vn("nav"),
                wt = vn("touch"),
                Mt = vn("mouseDrag"),
                Tt = vn("autoplay"),
                Et = vn("autoplayTimeout"),
                At = vn("autoplayText"),
                Nt = vn("autoplayHoverPause"),
                Lt = vn("autoplayResetOnVisibility"),
                Bt = (at = document.createElement("style"), it && at.setAttribute("media", it), document.querySelector("head").appendChild(at), at.sheet ? at.sheet : at.styleSheet),
                St = H.lazyload,
                Ht = (H.lazyloadSelector, []),
                Ot = yt ? (et = function() {
                    {
                        if (rt || ot && !vt) return K - 1;
                        var t = ot ? "fixedWidth" : "items",
                            e = [];
                        if ((ot || H[t] < K) && e.push(H[t]), k)
                            for (var n in k) {
                                var i = k[n][t];
                                i && (ot || i < K) && e.push(i)
                            }
                        return e.length || e.push(0), Math.ceil(ot ? vt / Math.min.apply(null, e) : Math.max.apply(null, e))
                    }
                }(), nt = I ? Math.ceil((5 * et - K) / 2) : 4 * et - K, nt = Math.max(et, nt), dn("edgePadding") ? nt + 1 : nt) : 0,
                Dt = I ? K + 2 * Ot : K + Ot,
                kt = !(!ot && !rt || yt),
                Rt = ot ? ei() : null,
                It = !I || !yt,
                Pt = q ? "left" : "top",
                zt = "",
                Wt = "",
                Ft = ot ? function() {
                    return ct && !yt ? K - 1 : Math.ceil(-Rt / (ot + lt))
                } : rt ? function() {
                    for (var t = Dt; t--;)
                        if (_[t] >= -Rt) return t
                } : function() {
                    return ct && I && !yt ? K - 1 : yt || I ? Math.max(0, Dt - Math.ceil(ft)) : Dt - 1
                },
                qt = on(vn("startIndex")),
                jt = qt,
                Vt = (rn(), 0),
                Gt = rt ? null : Ft(),
                Qt = H.preventActionWhenRunning,
                Xt = H.swipeAngle,
                Yt = !Xt || "?",
                Kt = !1,
                Jt = H.onInit,
                Ut = new na,
                _t = " tns-slider tns-" + H.mode,
                Zt = G.id || (tt = window.tnsId, window.tnsId = tt ? tt + 1 : 1, "tns" + window.tnsId),
                $t = vn("disable"),
                te = !1,
                ee = H.freezable,
                ne = !(!ee || rt) && Ln(),
                ie = !1,
                ae = {
                    click: ci,
                    keydown: function(t) {
                        t = gi(t);
                        var e = [a.LEFT, a.RIGHT].indexOf(t.keyCode);
                        0 <= e && (0 === e ? Ee.disabled || ci(t, -1) : Ae.disabled || ci(t, 1))
                    }
                },
                re = {
                    click: function(t) {
                        if (Kt) {
                            if (Qt) return;
                            li()
                        }
                        var e = xi(t = gi(t));
                        for (; e !== Se && !Gi(e, "data-nav");) e = e.parentNode;
                        if (Gi(e, "data-nav")) {
                            var n = ke = Number(Qi(e, "data-nav")),
                                i = ot || rt ? n * K / Oe : n * ft,
                                a = ve ? n : Math.min(Math.ceil(i), K - 1);
                            si(a, t), Re === n && (qe && hi(), ke = -1)
                        }
                    },
                    keydown: function(t) {
                        t = gi(t);
                        var e = O.activeElement;
                        if (!Gi(e, "data-nav")) return;
                        var n = [a.LEFT, a.RIGHT, a.ENTER, a.SPACE].indexOf(t.keyCode),
                            i = Number(Qi(e, "data-nav"));
                        0 <= n && (0 === n ? 0 < i && yi(Be[i - 1]) : 1 === n ? i < Oe - 1 && yi(Be[i + 1]) : si(ke = i, t))
                    }
                },
                oe = {
                    mouseover: function() {
                        qe && (di(), je = !0)
                    },
                    mouseout: function() {
                        je && (fi(), je = !1)
                    }
                },
                ue = {
                    visibilitychange: function() {
                        O.hidden ? qe && (di(), Ge = !0) : Ge && (fi(), Ge = !1)
                    }
                },
                le = {
                    keydown: function(t) {
                        t = gi(t);
                        var e = [a.LEFT, a.RIGHT].indexOf(t.keyCode);
                        0 <= e && ci(t, 0 === e ? -1 : 1)
                    }
                },
                se = {
                    touchstart: Mi,
                    touchmove: Ti,
                    touchend: Ei,
                    touchcancel: Ei
                },
                ce = {
                    mousedown: Mi,
                    mousemove: Ti,
                    mouseup: Ei,
                    mouseleave: Ei
                },
                fe = dn("controls"),
                de = dn("nav"),
                ve = !!rt || H.navAsThumbnails,
                pe = dn("autoplay"),
                he = dn("touch"),
                me = dn("mouseDrag"),
                ye = "tns-slide-active",
                ge = "tns-complete",
                xe = {
                    load: function(t) {
                        zn(xi(t))
                    },
                    error: function(t) {
                        e = xi(t), ji(e, "failed"), Wn(e);
                        var e
                    }
                },
                be = "force" === H.preventScrollOnTouch;
            if (fe) var Ce, we, Me = H.controlsContainer,
                Te = H.controlsContainer ? H.controlsContainer.outerHTML : "",
                Ee = H.prevButton,
                Ae = H.nextButton,
                Ne = H.prevButton ? H.prevButton.outerHTML : "",
                Le = H.nextButton ? H.nextButton.outerHTML : "";
            if (de) var Be, Se = H.navContainer,
                He = H.navContainer ? H.navContainer.outerHTML : "",
                Oe = rt ? K : Ni(),
                De = 0,
                ke = -1,
                Re = ln(),
                Ie = Re,
                Pe = "tns-nav-active",
                ze = "Carousel Page ",
                We = " (Current Slide)";
            if (pe) var Fe, qe, je, Ve, Ge, Qe = "forward" === H.autoplayDirection ? 1 : -1,
                Xe = H.autoplayButton,
                Ye = H.autoplayButton ? H.autoplayButton.outerHTML : "",
                Ke = ["<span class='tns-visually-hidden'>", " animation</span>"];
            if (he || me) var Je, Ue, _e = {},
                Ze = {},
                $e = !1,
                tn = q ? function(t, e) {
                    return t.x - e.x
                } : function(t, e) {
                    return t.y - e.y
                };
            rt || an($t || ne), d && (Pt = d, zt = "translate", v ? (zt += q ? "3d(" : "3d(0px, ", Wt = q ? ", 0px, 0px)" : ", 0px)") : (zt += q ? "X(" : "Y(", Wt = ")")), I && (G.className = G.className.replace("tns-vpfix", "")),
                function() {
                    dn("gutter");
                    j.className = "tns-outer", V.className = "tns-inner", j.id = Zt + "-ow", V.id = Zt + "-iw", "" === G.id && (G.id = Zt);
                    _t += g || rt ? " tns-subpixel" : " tns-no-subpixel", _t += y ? " tns-calc" : " tns-no-calc", rt && (_t += " tns-autowidth");
                    _t += " tns-" + H.axis, G.className += _t, I ? ((S = O.createElement("div")).id = Zt + "-mw", S.className = "tns-ovh", j.appendChild(S), S.appendChild(V)) : j.appendChild(V);
                    if (gt) {
                        var t = S || V;
                        t.className += " tns-ah"
                    }
                    if (Q.insertBefore(j, G), V.appendChild(G), Fi(Y, function(t, e) {
                            ji(t, "tns-item"), t.id || (t.id = Zt + "-item" + e), !I && W && ji(t, W), Xi(t, {
                                "aria-hidden": "true",
                                tabindex: "-1"
                            })
                        }), Ot) {
                        for (var e = O.createDocumentFragment(), n = O.createDocumentFragment(), i = Ot; i--;) {
                            var a = i % K,
                                r = Y[a].cloneNode(!0);
                            if (Yi(r, "id"), n.insertBefore(r, n.firstChild), I) {
                                var o = Y[K - 1 - a].cloneNode(!0);
                                Yi(o, "id"), e.appendChild(o)
                            }
                        }
                        G.insertBefore(e, G.firstChild), G.appendChild(n), Y = G.children
                    }
                }(),
                function() {
                    if (!I)
                        for (var t = qt, e = qt + Math.min(K, ft); t < e; t++) {
                            var n = Y[t];
                            n.style.left = 100 * (t - qt) / ft + "%", ji(n, P), Vi(n, W)
                        }
                    q && (g || rt ? (zi(Bt, "#" + Zt + " > .tns-item", "font-size:" + m.getComputedStyle(Y[0]).fontSize + ";", Wi(Bt)), zi(Bt, "#" + Zt, "font-size:0;", Wi(Bt))) : I && Fi(Y, function(t, e) {
                        var n;
                        t.style.marginLeft = (n = e, y ? y + "(" + 100 * n + "% / " + Dt + ")" : 100 * n / Dt + "%")
                    }));
                    if (D) {
                        if (x) {
                            var i = S && H.autoHeight ? xn(H.speed) : "";
                            zi(Bt, "#" + Zt + "-mw", i, Wi(Bt))
                        }
                        i = pn(H.edgePadding, H.gutter, H.fixedWidth, H.speed, H.autoHeight), zi(Bt, "#" + Zt + "-iw", i, Wi(Bt)), I && (i = q && !rt ? "width:" + hn(H.fixedWidth, H.gutter, H.items) + ";" : "", x && (i += xn(ht)), zi(Bt, "#" + Zt, i, Wi(Bt))), i = q && !rt ? mn(H.fixedWidth, H.gutter, H.items) : "", H.gutter && (i += yn(H.gutter)), I || (x && (i += xn(ht)), b && (i += bn(ht))), i && zi(Bt, "#" + Zt + " > .tns-item", i, Wi(Bt))
                    } else {
                        I && gt && (S.style[x] = ht / 1e3 + "s"), V.style.cssText = pn(ut, lt, ot, gt), I && q && !rt && (G.style.width = hn(ot, lt, ft));
                        var i = q && !rt ? mn(ot, lt, ft) : "";
                        lt && (i += yn(lt)), i && zi(Bt, "#" + Zt + " > .tns-item", i, Wi(Bt))
                    }
                    if (k && D)
                        for (var a in k) {
                            a = parseInt(a);
                            var r = k[a],
                                i = "",
                                o = "",
                                u = "",
                                l = "",
                                s = "",
                                c = rt ? null : vn("items", a),
                                f = vn("fixedWidth", a),
                                d = vn("speed", a),
                                v = vn("edgePadding", a),
                                p = vn("autoHeight", a),
                                h = vn("gutter", a);
                            x && S && vn("autoHeight", a) && "speed" in r && (o = "#" + Zt + "-mw{" + xn(d) + "}"), ("edgePadding" in r || "gutter" in r) && (u = "#" + Zt + "-iw{" + pn(v, h, f, d, p) + "}"), I && q && !rt && ("fixedWidth" in r || "items" in r || ot && "gutter" in r) && (l = "width:" + hn(f, h, c) + ";"), x && "speed" in r && (l += xn(d)), l && (l = "#" + Zt + "{" + l + "}"), ("fixedWidth" in r || ot && "gutter" in r || !I && "items" in r) && (s += mn(f, h, c)), "gutter" in r && (s += yn(h)), !I && "speed" in r && (x && (s += xn(d)), b && (s += bn(d))), s && (s = "#" + Zt + " > .tns-item{" + s + "}"), (i = o + u + l + s) && Bt.insertRule("@media (min-width: " + a / 16 + "em) {" + i + "}", Bt.cssRules.length)
                        }
                }(), Cn();
            var en = yt ? I ? function() {
                    var t = Vt,
                        e = Gt;
                    t += dt, e -= dt, ut ? (t += 1, e -= 1) : ot && (st + lt) % (ot + lt) && (e -= 1), Ot && (e < qt ? qt -= K : qt < t && (qt += K))
                } : function() {
                    if (Gt < qt)
                        for (; Vt + K <= qt;) qt -= K;
                    else if (qt < Vt)
                        for (; qt <= Gt - K;) qt += K
                } : function() {
                    qt = Math.max(Vt, Math.min(Gt, qt))
                },
                nn = I ? function() {
                    var e, n, i, a, t, r, o, u, l, s, c;
                    $n(G, ""), x || !ht ? (ai(), ht && _i(G) || li()) : (e = G, n = Pt, i = zt, a = Wt, t = ni(), r = ht, o = li, u = Math.min(r, 10), l = 0 <= t.indexOf("%") ? "%" : "px", t = t.replace(l, ""), s = Number(e.style[n].replace(i, "").replace(a, "").replace(l, "")), c = (t - s) / r * u, setTimeout(function t() {
                        r -= u, s += c, e.style[n] = i + s + l + a, 0 < r ? setTimeout(t, u) : o()
                    }, u)), q || Ai()
                } : function() {
                    Ht = [];
                    var t = {};
                    t[C] = t[w] = li, ea(Y[jt], t), ta(Y[qt], t), ri(jt, P, z, !0), ri(qt, W, P), C && w && ht && _i(G) || li()
                };
            return {
                version: "2.9.2",
                getInfo: Bi,
                events: Ut,
                goTo: si,
                play: function() {
                    Tt && !qe && (pi(), Ve = !1)
                },
                pause: function() {
                    qe && (hi(), Ve = !0)
                },
                isOn: U,
                updateSliderHeight: Qn,
                refresh: Cn,
                destroy: function() {
                    if (Bt.disabled = !0, Bt.ownerNode && Bt.ownerNode.remove(), ea(m, {
                            resize: An
                        }), pt && ea(O, le), Me && ea(Me, ae), Se && ea(Se, re), ea(G, oe), ea(G, ue), Xe && ea(Xe, {
                            click: mi
                        }), Tt && clearInterval(Fe), I && C) {
                        var t = {};
                        t[C] = li, ea(G, t)
                    }
                    wt && ea(G, se), Mt && ea(G, ce);
                    var r = [X, Te, Ne, Le, He, Ye];
                    for (var e in T.forEach(function(t, e) {
                            var n = "container" === t ? j : H[t];
                            if ("object" == typeof n && n) {
                                var i = !!n.previousElementSibling && n.previousElementSibling,
                                    a = n.parentNode;
                                n.outerHTML = r[e], H[t] = i ? i.nextElementSibling : a.firstElementChild
                            }
                        }), T = P = z = B = W = q = j = V = G = Q = X = Y = K = F = J = rt = ot = ut = lt = st = ft = dt = vt = pt = ht = mt = yt = gt = Bt = St = _ = Ht = Ot = Dt = kt = Rt = It = Pt = zt = Wt = Ft = qt = jt = Vt = Gt = Xt = Yt = Kt = Jt = Ut = _t = Zt = $t = te = ee = ne = ie = ae = re = oe = ue = le = se = ce = fe = de = ve = pe = he = me = ye = ge = xe = Z = xt = bt = Me = Te = Ee = Ae = Ce = we = Ct = Se = He = Be = Oe = De = ke = Re = Ie = Pe = ze = We = Tt = Et = Qe = At = Nt = Xe = Ye = Lt = Ke = Fe = qe = je = Ve = Ge = _e = Ze = Je = $e = Ue = tn = wt = Mt = null, this) "rebuild" !== e && (this[e] = null);
                    U = !1
                },
                rebuild: function() {
                    return ia(Oi(H, E))
                }
            }
        }

        function an(t) {
            t && (xt = Ct = wt = Mt = pt = Tt = Nt = Lt = !1)
        }

        function rn() {
            for (var t = I ? qt - Ot : qt; t < 0;) t += K;
            return t % K + 1
        }

        function on(t) {
            return t = t ? Math.max(0, Math.min(yt ? K - 1 : K - ft, t)) : 0, I ? t + Ot : t
        }

        function un(t) {
            for (null == t && (t = qt), I && (t -= Ot); t < 0;) t += K;
            return Math.floor(t % K)
        }

        function ln() {
            var t, e = un();
            return t = ve ? e : ot || rt ? Math.ceil((e + 1) * Oe / K - 1) : Math.floor(e / ft), !yt && I && qt === Gt && (t = Oe - 1), t
        }

        function sn() {
            return m.innerWidth || O.documentElement.clientWidth || O.body.clientWidth
        }

        function cn(t) {
            return "top" === t ? "afterbegin" : "beforeend"
        }

        function fn() {
            var t = ut ? 2 * ut - lt : 0;
            return function t(e) {
                if (null != e) {
                    var n, i, a = O.createElement("div");
                    return e.appendChild(a), i = (n = a.getBoundingClientRect()).right - n.left, a.remove(), i || t(e.parentNode)
                }
            }(Q) - t
        }

        function dn(t) {
            if (H[t]) return !0;
            if (k)
                for (var e in k)
                    if (k[e][t]) return !0;
            return !1
        }

        function vn(t, e) {
            if (null == e && (e = J), "items" === t && ot) return Math.floor((st + lt) / (ot + lt)) || 1;
            var n = H[t];
            if (k)
                for (var i in k) e >= parseInt(i) && t in k[i] && (n = k[i][t]);
            return "slideBy" === t && "page" === n && (n = vn("items")), I || "slideBy" !== t && "items" !== t || (n = Math.floor(n)), n
        }

        function pn(t, e, n, i, a) {
            var r = "";
            if (void 0 !== t) {
                var o = t;
                e && (o -= e), r = q ? "margin: 0 " + o + "px 0 " + t + "px;" : "margin: " + t + "px 0 " + o + "px 0;"
            } else if (e && !n) {
                var u = "-" + e + "px";
                r = "margin: 0 " + (q ? u + " 0 0" : "0 " + u + " 0") + ";"
            }
            return !I && a && x && i && (r += xn(i)), r
        }

        function hn(t, e, n) {
            return t ? (t + e) * Dt + "px" : y ? y + "(" + 100 * Dt + "% / " + n + ")" : 100 * Dt / n + "%"
        }

        function mn(t, e, n) {
            var i;
            if (t) i = t + e + "px";
            else {
                I || (n = Math.floor(n));
                var a = I ? Dt : n;
                i = y ? y + "(100% / " + a + ")" : 100 / a + "%"
            }
            return i = "width:" + i, "inner" !== R ? i + ";" : i + " !important;"
        }

        function yn(t) {
            var e = "";
            !1 !== t && (e = (q ? "padding-" : "margin-") + (q ? "right" : "bottom") + ": " + t + "px;");
            return e
        }

        function gn(t, e) {
            var n = t.substring(0, t.length - e).toLowerCase();
            return n && (n = "-" + n + "-"), n
        }

        function xn(t) {
            return gn(x, 18) + "transition-duration:" + t / 1e3 + "s;"
        }

        function bn(t) {
            return gn(b, 17) + "animation-duration:" + t / 1e3 + "s;"
        }

        function Cn() {
            if (dn("autoHeight") || rt || !q) {
                var t = G.querySelectorAll("img");
                Fi(t, function(t) {
                    var e = t.src;
                    St || (e && e.indexOf("data:image") < 0 ? (t.src = "", ta(t, xe), ji(t, "loading"), t.src = e) : zn(t))
                }), Si(function() {
                    jn(Ki(t), function() {
                        Z = !0
                    })
                }), dn("autoHeight") && (t = Fn(qt, Math.min(qt + ft - 1, Dt - 1))), St ? wn() : Si(function() {
                    jn(Ki(t), wn)
                })
            } else I && ii(), Tn(), En()
        }

        function wn() {
            if (rt) {
                var e = yt ? qt : K - 1;
                ! function t() {
                    Y[e - 1].getBoundingClientRect().right.toFixed(2) === Y[e].getBoundingClientRect().left.toFixed(2) ? Mn() : setTimeout(function() {
                        t()
                    }, 16)
                }()
            } else Mn()
        }

        function Mn() {
            q && !rt || (Xn(), rt ? (Rt = ei(), ee && (ne = Ln()), Gt = Ft(), an($t || ne)) : Ai()), I && ii(), Tn(), En()
        }

        function Tn() {
            if (Yn(), j.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + Rn() + "</span>  of " + K + "</div>"), $ = j.querySelector(".tns-liveregion .current"), pe) {
                var t = Tt ? "stop" : "start";
                Xe ? Xi(Xe, {
                    "data-action": t
                }) : H.autoplayButtonOutput && (j.insertAdjacentHTML(cn(H.autoplayPosition), '<button type="button" data-action="' + t + '">' + Ke[0] + t + Ke[1] + At[0] + "</button>"), Xe = j.querySelector("[data-action]")), Xe && ta(Xe, {
                    click: mi
                }), Tt && (pi(), Nt && ta(G, oe), Lt && ta(G, ue))
            }
            if (de) {
                if (Se) Xi(Se, {
                    "aria-label": "Carousel Pagination"
                }), Fi(Be = Se.children, function(t, e) {
                    Xi(t, {
                        "data-nav": e,
                        tabindex: "-1",
                        "aria-label": ze + (e + 1),
                        "aria-controls": Zt
                    })
                });
                else {
                    for (var e = "", n = ve ? "" : 'style="display:none"', i = 0; i < K; i++) e += '<button type="button" data-nav="' + i + '" tabindex="-1" aria-controls="' + Zt + '" ' + n + ' aria-label="' + ze + (i + 1) + '"></button>';
                    e = '<div class="tns-nav" aria-label="Carousel Pagination">' + e + "</div>", j.insertAdjacentHTML(cn(H.navPosition), e), Se = j.querySelector(".tns-nav"), Be = Se.children
                }
                if (Li(), x) {
                    var a = x.substring(0, x.length - 18).toLowerCase(),
                        r = "transition: all " + ht / 1e3 + "s";
                    a && (r = "-" + a + "-" + r), zi(Bt, "[aria-controls^=" + Zt + "-item]", r, Wi(Bt))
                }
                Xi(Be[Re], {
                    "aria-label": ze + (Re + 1) + We
                }), Yi(Be[Re], "tabindex"), ji(Be[Re], Pe), ta(Se, re)
            }
            fe && (Me || Ee && Ae || (j.insertAdjacentHTML(cn(H.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + Zt + '">' + bt[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + Zt + '">' + bt[1] + "</button></div>"), Me = j.querySelector(".tns-controls")), Ee && Ae || (Ee = Me.children[0], Ae = Me.children[1]), H.controlsContainer && Xi(Me, {
                "aria-label": "Carousel Navigation",
                tabindex: "0"
            }), (H.controlsContainer || H.prevButton && H.nextButton) && Xi([Ee, Ae], {
                "aria-controls": Zt,
                tabindex: "-1"
            }), (H.controlsContainer || H.prevButton && H.nextButton) && (Xi(Ee, {
                "data-controls": "prev"
            }), Xi(Ae, {
                "data-controls": "next"
            })), Ce = Jn(Ee), we = Jn(Ae), Zn(), Me ? ta(Me, ae) : (ta(Ee, ae), ta(Ae, ae))), Sn()
        }

        function En() {
            if (I && C) {
                var t = {};
                t[C] = li, ta(G, t)
            }
            wt && ta(G, se, H.preventScrollOnTouch), Mt && ta(G, ce), pt && ta(O, le), "inner" === R ? Ut.on("outerResized", function() {
                Nn(), Ut.emit("innerLoaded", Bi())
            }) : (k || ot || rt || gt || !q) && ta(m, {
                resize: An
            }), gt && ("outer" === R ? Ut.on("innerLoaded", qn) : $t || qn()), Pn(), $t ? Dn() : ne && On(), Ut.on("indexChanged", Vn), "inner" === R && Ut.emit("innerLoaded", Bi()), "function" == typeof Jt && Jt(Bi()), U = !0
        }

        function An(t) {
            Si(function() {
                Nn(gi(t))
            })
        }

        function Nn(t) {
            if (U) {
                "outer" === R && Ut.emit("outerResized", Bi(t)), J = sn();
                var e, n = F,
                    i = !1;
                k && (Bn(), (e = n !== F) && Ut.emit("newBreakpointStart", Bi(t)));
                var a, r, o, u, l = ft,
                    s = $t,
                    c = ne,
                    f = pt,
                    d = xt,
                    v = Ct,
                    p = wt,
                    h = Mt,
                    m = Tt,
                    y = Nt,
                    g = Lt,
                    x = qt;
                if (e) {
                    var b = ot,
                        C = gt,
                        w = bt,
                        M = ct,
                        T = At;
                    if (!D) var E = lt,
                        A = ut
                }
                if (pt = vn("arrowKeys"), xt = vn("controls"), Ct = vn("nav"), wt = vn("touch"), ct = vn("center"), Mt = vn("mouseDrag"), Tt = vn("autoplay"), Nt = vn("autoplayHoverPause"), Lt = vn("autoplayResetOnVisibility"), e && ($t = vn("disable"), ot = vn("fixedWidth"), ht = vn("speed"), gt = vn("autoHeight"), bt = vn("controlsText"), At = vn("autoplayText"), Et = vn("autoplayTimeout"), D || (ut = vn("edgePadding"), lt = vn("gutter"))), an($t), st = fn(), q && !rt || $t || (Xn(), q || (Ai(), i = !0)), (ot || rt) && (Rt = ei(), Gt = Ft()), (e || ot) && (ft = vn("items"), dt = vn("slideBy"), (r = ft !== l) && (ot || rt || (Gt = Ft()), en())), e && $t !== s && ($t ? Dn() : function() {
                        if (!te) return;
                        if (Bt.disabled = !1, G.className += _t, ii(), yt)
                            for (var t = Ot; t--;) I && Ui(Y[t]), Ui(Y[Dt - t - 1]);
                        if (!I)
                            for (var e = qt, n = qt + K; e < n; e++) {
                                var i = Y[e],
                                    a = e < qt + ft ? P : W;
                                i.style.left = 100 * (e - qt) / ft + "%", ji(i, a)
                            }
                        Hn(), te = !1
                    }()), ee && (e || ot || rt) && (ne = Ln()) !== c && (ne ? (ai(ni(on(0))), On()) : (! function() {
                        if (!ie) return;
                        ut && D && (V.style.margin = "");
                        if (Ot)
                            for (var t = "tns-transparent", e = Ot; e--;) I && Vi(Y[e], t), Vi(Y[Dt - e - 1], t);
                        Hn(), ie = !1
                    }(), i = !0)), an($t || ne), Tt || (Nt = Lt = !1), pt !== f && (pt ? ta(O, le) : ea(O, le)), xt !== d && (xt ? Me ? Ui(Me) : (Ee && Ui(Ee), Ae && Ui(Ae)) : Me ? Ji(Me) : (Ee && Ji(Ee), Ae && Ji(Ae))), Ct !== v && (Ct ? Ui(Se) : Ji(Se)), wt !== p && (wt ? ta(G, se, H.preventScrollOnTouch) : ea(G, se)), Mt !== h && (Mt ? ta(G, ce) : ea(G, ce)), Tt !== m && (Tt ? (Xe && Ui(Xe), qe || Ve || pi()) : (Xe && Ji(Xe), qe && hi())), Nt !== y && (Nt ? ta(G, oe) : ea(G, oe)), Lt !== g && (Lt ? ta(O, ue) : ea(O, ue)), e) {
                    if (ot === b && ct === M || (i = !0), gt !== C && (gt || (V.style.height = "")), xt && bt !== w && (Ee.innerHTML = bt[0], Ae.innerHTML = bt[1]), Xe && At !== T) {
                        var N = Tt ? 1 : 0,
                            L = Xe.innerHTML,
                            B = L.length - T[N].length;
                        L.substring(B) === T[N] && (Xe.innerHTML = L.substring(0, B) + At[N])
                    }
                } else ct && (ot || rt) && (i = !0);
                if ((r || ot && !rt) && (Oe = Ni(), Li()), (a = qt !== x) ? (Ut.emit("indexChanged", Bi()), i = !0) : r ? a || Vn() : (ot || rt) && (Pn(), Yn(), kn()), r && !I && function() {
                        for (var t = qt + Math.min(K, ft), e = Dt; e--;) {
                            var n = Y[e];
                            qt <= e && e < t ? (ji(n, "tns-moving"), n.style.left = 100 * (e - qt) / ft + "%", ji(n, P), Vi(n, W)) : n.style.left && (n.style.left = "", ji(n, W), Vi(n, P)), Vi(n, z)
                        }
                        setTimeout(function() {
                            Fi(Y, function(t) {
                                Vi(t, "tns-moving")
                            })
                        }, 300)
                    }(), !$t && !ne) {
                    if (e && !D && (ut === A && lt === E || (V.style.cssText = pn(ut, lt, ot, ht, gt)), q)) {
                        I && (G.style.width = hn(ot, lt, ft));
                        var S = mn(ot, lt, ft) + yn(lt);
                        u = Wi(o = Bt) - 1, "deleteRule" in o ? o.deleteRule(u) : o.removeRule(u), zi(Bt, "#" + Zt + " > .tns-item", S, Wi(Bt))
                    }
                    gt && qn(), i && (ii(), jt = qt)
                }
                e && Ut.emit("newBreakpointEnd", Bi(t))
            }
        }

        function Ln() {
            if (!ot && !rt) return K <= (ct ? ft - (ft - 1) / 2 : ft);
            var t = ot ? (ot + lt) * K : _[K],
                e = ut ? st + 2 * ut : st + lt;
            return ct && (e -= ot ? (st - ot) / 2 : (st - (_[qt + 1] - _[qt] - lt)) / 2), t <= e
        }

        function Bn() {
            for (var t in F = 0, k)(t = parseInt(t)) <= J && (F = t)
        }

        function Sn() {
            !Tt && Xe && Ji(Xe), !Ct && Se && Ji(Se), xt || (Me ? Ji(Me) : (Ee && Ji(Ee), Ae && Ji(Ae)))
        }

        function Hn() {
            Tt && Xe && Ui(Xe), Ct && Se && Ui(Se), xt && (Me ? Ui(Me) : (Ee && Ui(Ee), Ae && Ui(Ae)))
        }

        function On() {
            if (!ie) {
                if (ut && (V.style.margin = "0px"), Ot)
                    for (var t = "tns-transparent", e = Ot; e--;) I && ji(Y[e], t), ji(Y[Dt - e - 1], t);
                Sn(), ie = !0
            }
        }

        function Dn() {
            if (!te) {
                if (Bt.disabled = !0, G.className = G.className.replace(_t.substring(1), ""), Yi(G, ["style"]), yt)
                    for (var t = Ot; t--;) I && Ji(Y[t]), Ji(Y[Dt - t - 1]);
                if (q && I || Yi(V, ["style"]), !I)
                    for (var e = qt, n = qt + K; e < n; e++) {
                        var i = Y[e];
                        Yi(i, ["style"]), Vi(i, P), Vi(i, W)
                    }
                Sn(), te = !0
            }
        }

        function kn() {
            var t = Rn();
            $.innerHTML !== t && ($.innerHTML = t)
        }

        function Rn() {
            var t = In(),
                e = t[0] + 1,
                n = t[1] + 1;
            return e === n ? e + "" : e + " to " + n
        }

        function In(t) {
            null == t && (t = ni());
            var n, i, a, r = qt;
            if (ct || ut ? (rt || ot) && (i = -(parseFloat(t) + ut), a = i + st + 2 * ut) : rt && (i = _[qt], a = i + st), rt) _.forEach(function(t, e) {
                e < Dt && ((ct || ut) && t <= i + .5 && (r = e), .5 <= a - t && (n = e))
            });
            else {
                if (ot) {
                    var e = ot + lt;
                    ct || ut ? (r = Math.floor(i / e), n = Math.ceil(a / e - 1)) : n = r + Math.ceil(st / e) - 1
                } else if (ct || ut) {
                    var o = ft - 1;
                    if (ct ? (r -= o / 2, n = qt + o / 2) : n = qt + o, ut) {
                        var u = ut * ft / st;
                        r -= u, n += u
                    }
                    r = Math.floor(r), n = Math.ceil(n)
                } else n = r + ft - 1;
                r = Math.max(r, 0), n = Math.min(n, Dt - 1)
            }
            return [r, n]
        }

        function Pn() {
            St && !$t && Fn.apply(null, In()).forEach(function(t) {
                if (!qi(t, ge)) {
                    var e = {};
                    e[C] = function(t) {
                        t.stopPropagation()
                    }, ta(t, e), ta(t, xe), t.src = Qi(t, "data-src");
                    var n = Qi(t, "data-srcset");
                    n && (t.srcset = n), ji(t, "loading")
                }
            })
        }

        function zn(t) {
            ji(t, "loaded"), Wn(t)
        }

        function Wn(t) {
            ji(t, ge), Vi(t, "loading"), ea(t, xe)
        }

        function Fn(t, e) {
            for (var n = []; t <= e;) Fi(Y[t].querySelectorAll("img"), function(t) {
                n.push(t)
            }), t++;
            return n
        }

        function qn() {
            var t = Fn.apply(null, In());
            Si(function() {
                jn(t, Qn)
            })
        }

        function jn(n, t) {
            return Z ? t() : (n.forEach(function(t, e) {
                !St && t.complete && Wn(t), qi(t, ge) && n.splice(e, 1)
            }), n.length ? void Si(function() {
                jn(n, t)
            }) : t())
        }

        function Vn() {
            Pn(), Yn(), kn(), Zn(),
                function() {
                    if (Ct && (Re = 0 <= ke ? ke : ln(), ke = -1, Re !== Ie)) {
                        var t = Be[Ie],
                            e = Be[Re];
                        Xi(t, {
                            tabindex: "-1",
                            "aria-label": ze + (Ie + 1)
                        }), Vi(t, Pe), Xi(e, {
                            "aria-label": ze + (Re + 1) + We
                        }), Yi(e, "tabindex"), ji(e, Pe), Ie = Re
                    }
                }()
        }

        function Gn(t, e) {
            for (var n = [], i = t, a = Math.min(t + e, Dt); i < a; i++) n.push(Y[i].offsetHeight);
            return Math.max.apply(null, n)
        }

        function Qn() {
            var t = gt ? Gn(qt, ft) : Gn(Ot, K),
                e = S || V;
            e.style.height !== t && (e.style.height = t + "px")
        }

        function Xn() {
            _ = [0];
            var n = q ? "left" : "top",
                i = q ? "right" : "bottom",
                a = Y[0].getBoundingClientRect()[n];
            Fi(Y, function(t, e) {
                e && _.push(t.getBoundingClientRect()[n] - a), e === Dt - 1 && _.push(t.getBoundingClientRect()[i] - a)
            })
        }

        function Yn() {
            var t = In(),
                n = t[0],
                i = t[1];
            Fi(Y, function(t, e) {
                n <= e && e <= i ? Gi(t, "aria-hidden") && (Yi(t, ["aria-hidden", "tabindex"]), ji(t, ye)) : Gi(t, "aria-hidden") || (Xi(t, {
                    "aria-hidden": "true",
                    tabindex: "-1"
                }), Vi(t, ye))
            })
        }

        function Kn(t) {
            return t.nodeName.toLowerCase()
        }

        function Jn(t) {
            return "button" === Kn(t)
        }

        function Un(t) {
            return "true" === t.getAttribute("aria-disabled")
        }

        function _n(t, e, n) {
            t ? e.disabled = n : e.setAttribute("aria-disabled", n.toString())
        }

        function Zn() {
            if (xt && !mt && !yt) {
                var t = Ce ? Ee.disabled : Un(Ee),
                    e = we ? Ae.disabled : Un(Ae),
                    n = qt <= Vt,
                    i = !mt && Gt <= qt;
                n && !t && _n(Ce, Ee, !0), !n && t && _n(Ce, Ee, !1), i && !e && _n(we, Ae, !0), !i && e && _n(we, Ae, !1)
            }
        }

        function $n(t, e) {
            x && (t.style[x] = e)
        }

        function ti(t) {
            return null == t && (t = qt), rt ? (st - (ut ? lt : 0) - (_[t + 1] - _[t] - lt)) / 2 : ot ? (st - ot) / 2 : (ft - 1) / 2
        }

        function ei() {
            var t = st + (ut ? lt : 0) - (ot ? (ot + lt) * Dt : _[Dt]);
            return ct && !yt && (t = ot ? -(ot + lt) * (Dt - 1) - ti() : ti(Dt - 1) - _[Dt - 1]), 0 < t && (t = 0), t
        }

        function ni(t) {
            var e;
            if (null == t && (t = qt), q && !rt)
                if (ot) e = -(ot + lt) * t, ct && (e += ti());
                else {
                    var n = d ? Dt : ft;
                    ct && (t -= ti()), e = 100 * -t / n
                }
            else e = -_[t], ct && rt && (e += ti());
            return kt && (e = Math.max(e, Rt)), e += !q || rt || ot ? "px" : "%"
        }

        function ii(t) {
            $n(G, "0s"), ai(t)
        }

        function ai(t) {
            null == t && (t = ni()), G.style[Pt] = zt + t + Wt
        }

        function ri(t, e, n, i) {
            var a = t + ft;
            yt || (a = Math.min(a, Dt));
            for (var r = t; r < a; r++) {
                var o = Y[r];
                i || (o.style.left = 100 * (r - qt) / ft + "%"), B && p && (o.style[p] = o.style[h] = B * (r - t) / 1e3 + "s"), Vi(o, e), ji(o, n), i && Ht.push(o)
            }
        }

        function oi(t, e) {
            It && en(), (qt !== jt || e) && (Ut.emit("indexChanged", Bi()), Ut.emit("transitionStart", Bi()), gt && qn(), qe && t && 0 <= ["click", "keydown"].indexOf(t.type) && hi(), Kt = !0, nn())
        }

        function ui(t) {
            return t.toLowerCase().replace(/-/g, "")
        }

        function li(t) {
            if (I || Kt) {
                if (Ut.emit("transitionEnd", Bi(t)), !I && 0 < Ht.length)
                    for (var e = 0; e < Ht.length; e++) {
                        var n = Ht[e];
                        n.style.left = "", h && p && (n.style[h] = "", n.style[p] = ""), Vi(n, z), ji(n, W)
                    }
                if (!t || !I && t.target.parentNode === G || t.target === G && ui(t.propertyName) === ui(Pt)) {
                    if (!It) {
                        var i = qt;
                        en(), qt !== i && (Ut.emit("indexChanged", Bi()), ii())
                    }
                    "inner" === R && Ut.emit("innerLoaded", Bi()), Kt = !1, jt = qt
                }
            }
        }

        function si(t, e) {
            if (!ne)
                if ("prev" === t) ci(e, -1);
                else if ("next" === t) ci(e, 1);
            else {
                if (Kt) {
                    if (Qt) return;
                    li()
                }
                var n = un(),
                    i = 0;
                if ("first" === t ? i = -n : "last" === t ? i = I ? K - ft - n : K - 1 - n : ("number" != typeof t && (t = parseInt(t)), isNaN(t) || (e || (t = Math.max(0, Math.min(K - 1, t))), i = t - n)), !I && i && Math.abs(i) < ft) {
                    var a = 0 < i ? 1 : -1;
                    i += Vt <= qt + i - K ? K * a : 2 * K * a * -1
                }
                qt += i, I && yt && (qt < Vt && (qt += K), Gt < qt && (qt -= K)), un(qt) !== un(jt) && oi(e)
            }
        }

        function ci(t, e) {
            if (Kt) {
                if (Qt) return;
                li()
            }
            var n;
            if (!e) {
                for (var i = xi(t = gi(t)); i !== Me && [Ee, Ae].indexOf(i) < 0;) i = i.parentNode;
                var a = [Ee, Ae].indexOf(i);
                0 <= a && (n = !0, e = 0 === a ? -1 : 1)
            }
            if (mt) {
                if (qt === Vt && -1 === e) return void si("last", t);
                if (qt === Gt && 1 === e) return void si("first", t)
            }
            e && (qt += dt * e, rt && (qt = Math.floor(qt)), oi(n || t && "keydown" === t.type ? t : null))
        }

        function fi() {
            Fe = setInterval(function() {
                ci(null, Qe)
            }, Et), qe = !0
        }

        function di() {
            clearInterval(Fe), qe = !1
        }

        function vi(t, e) {
            Xi(Xe, {
                "data-action": t
            }), Xe.innerHTML = Ke[0] + t + Ke[1] + e
        }

        function pi() {
            fi(), Xe && vi("stop", At[1])
        }

        function hi() {
            di(), Xe && vi("start", At[0])
        }

        function mi() {
            qe ? (hi(), Ve = !0) : (pi(), Ve = !1)
        }

        function yi(t) {
            t.focus()
        }

        function gi(t) {
            return bi(t = t || m.event) ? t.changedTouches[0] : t
        }

        function xi(t) {
            return t.target || m.event.srcElement
        }

        function bi(t) {
            return 0 <= t.type.indexOf("touch")
        }

        function Ci(t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }

        function wi() {
            return a = Ze.y - _e.y, r = Ze.x - _e.x, t = Math.atan2(a, r) * (180 / Math.PI), e = Xt, n = !1, i = Math.abs(90 - Math.abs(t)), 90 - e <= i ? n = "horizontal" : i <= e && (n = "vertical"), n === H.axis;
            var t, e, n, i, a, r
        }

        function Mi(t) {
            if (Kt) {
                if (Qt) return;
                li()
            }
            Tt && qe && di(), $e = !0, Ue && (Hi(Ue), Ue = null);
            var e = gi(t);
            Ut.emit(bi(t) ? "touchStart" : "dragStart", Bi(t)), !bi(t) && 0 <= ["img", "a"].indexOf(Kn(xi(t))) && Ci(t), Ze.x = _e.x = e.clientX, Ze.y = _e.y = e.clientY, I && (Je = parseFloat(G.style[Pt].replace(zt, "")), $n(G, "0s"))
        }

        function Ti(t) {
            if ($e) {
                var e = gi(t);
                Ze.x = e.clientX, Ze.y = e.clientY, I ? Ue || (Ue = Si(function() {
                    ! function t(e) {
                        if (!Yt) return void($e = !1);
                        Hi(Ue);
                        $e && (Ue = Si(function() {
                            t(e)
                        }));
                        "?" === Yt && (Yt = wi());
                        if (Yt) {
                            !be && bi(e) && (be = !0);
                            try {
                                e.type && Ut.emit(bi(e) ? "touchMove" : "dragMove", Bi(e))
                            } catch (t) {}
                            var n = Je,
                                i = tn(Ze, _e);
                            if (!q || ot || rt) n += i, n += "px";
                            else {
                                var a = d ? i * ft * 100 / ((st + lt) * Dt) : 100 * i / (st + lt);
                                n += a, n += "%"
                            }
                            G.style[Pt] = zt + n + Wt
                        }
                    }(t)
                })) : ("?" === Yt && (Yt = wi()), Yt && (be = !0)), ("boolean" != typeof t.cancelable || t.cancelable) && be && t.preventDefault()
            }
        }

        function Ei(i) {
            if ($e) {
                Ue && (Hi(Ue), Ue = null), I && $n(G, ""), $e = !1;
                var t = gi(i);
                Ze.x = t.clientX, Ze.y = t.clientY;
                var a = tn(Ze, _e);
                if (Math.abs(a)) {
                    if (!bi(i)) {
                        var n = xi(i);
                        ta(n, {
                            click: function t(e) {
                                Ci(e), ea(n, {
                                    click: t
                                })
                            }
                        })
                    }
                    I ? Ue = Si(function() {
                        if (q && !rt) {
                            var t = -a * ft / (st + lt);
                            t = 0 < a ? Math.floor(t) : Math.ceil(t), qt += t
                        } else {
                            var e = -(Je + a);
                            if (e <= 0) qt = Vt;
                            else if (e >= _[Dt - 1]) qt = Gt;
                            else
                                for (var n = 0; n < Dt && e >= _[n];) e > _[qt = n] && a < 0 && (qt += 1), n++
                        }
                        oi(i, a), Ut.emit(bi(i) ? "touchEnd" : "dragEnd", Bi(i))
                    }) : Yt && ci(i, 0 < a ? -1 : 1)
                }
            }
            "auto" === H.preventScrollOnTouch && (be = !1), Xt && (Yt = "?"), Tt && !qe && fi()
        }

        function Ai() {
            (S || V).style.height = _[qt + ft] - _[qt] + "px"
        }

        function Ni() {
            var t = ot ? (ot + lt) * K / st : K / ft;
            return Math.min(Math.ceil(t), K)
        }

        function Li() {
            if (Ct && !ve && Oe !== De) {
                var t = De,
                    e = Oe,
                    n = Ui;
                for (Oe < De && (t = Oe, e = De, n = Ji); t < e;) n(Be[t]), t++;
                De = Oe
            }
        }

        function Bi(t) {
            return {
                container: G,
                slideItems: Y,
                navContainer: Se,
                navItems: Be,
                controlsContainer: Me,
                hasControls: fe,
                prevButton: Ee,
                nextButton: Ae,
                items: ft,
                slideBy: dt,
                cloneCount: Ot,
                slideCount: K,
                slideCountNew: Dt,
                index: qt,
                indexCached: jt,
                displayIndex: rn(),
                navCurrentIndex: Re,
                navCurrentIndexCached: Ie,
                pages: Oe,
                pagesCached: De,
                sheet: Bt,
                isOn: U,
                event: t || {}
            }
        }
        M && console.warn("No slides found in", H.container)
    };
    return ia
}();