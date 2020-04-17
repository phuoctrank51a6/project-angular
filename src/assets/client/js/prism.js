/* PrismJS 1.17.1
https://prismjs.com/download.html#themes=prism&languages=markup+clike+javascript+pug&plugins=line-numbers+toolbar+copy-to-clipboard */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function(g) {
        var c = /\blang(?:uage)?-([\w-]+)\b/i,
            a = 0,
            C = {
                manual: g.Prism && g.Prism.manual,
                disableWorkerMessageHandler: g.Prism && g.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function(e) {
                        return e instanceof M ? new M(e.type, C.util.encode(e.content), e.alias) : Array.isArray(e) ? e.map(C.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    },
                    type: function(e) {
                        return Object.prototype.toString.call(e).slice(8, -1)
                    },
                    objId: function(e) {
                        return e.__id || Object.defineProperty(e, "__id", {
                            value: ++a
                        }), e.__id
                    },
                    clone: function n(e, t) {
                        var r, a, i = C.util.type(e);
                        switch (t = t || {}, i) {
                            case "Object":
                                if (a = C.util.objId(e), t[a]) return t[a];
                                for (var o in r = {}, t[a] = r, e) e.hasOwnProperty(o) && (r[o] = n(e[o], t));
                                return r;
                            case "Array":
                                return a = C.util.objId(e), t[a] ? t[a] : (r = [], t[a] = r, e.forEach(function(e, a) {
                                    r[a] = n(e, t)
                                }), r);
                            default:
                                return e
                        }
                    }
                },
                languages: {
                    extend: function(e, a) {
                        var n = C.util.clone(C.languages[e]);
                        for (var t in a) n[t] = a[t];
                        return n
                    },
                    insertBefore: function(n, e, a, t) {
                        var r = (t = t || C.languages)[n],
                            i = {};
                        for (var o in r)
                            if (r.hasOwnProperty(o)) {
                                if (o == e)
                                    for (var l in a) a.hasOwnProperty(l) && (i[l] = a[l]);
                                a.hasOwnProperty(o) || (i[o] = r[o])
                            }
                        var s = t[n];
                        return t[n] = i, C.languages.DFS(C.languages, function(e, a) {
                            a === s && e != n && (this[e] = i)
                        }), i
                    },
                    DFS: function e(a, n, t, r) {
                        r = r || {};
                        var i = C.util.objId;
                        for (var o in a)
                            if (a.hasOwnProperty(o)) {
                                n.call(a, o, a[o], t || o);
                                var l = a[o],
                                    s = C.util.type(l);
                                "Object" !== s || r[i(l)] ? "Array" !== s || r[i(l)] || (r[i(l)] = !0, e(l, n, o, r)) : (r[i(l)] = !0, e(l, n, null, r))
                            }
                    }
                },
                plugins: {},
                highlightAll: function(e, a) {
                    C.highlightAllUnder(document, e, a)
                },
                highlightAllUnder: function(e, a, n) {
                    var t = {
                        callback: n,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    C.hooks.run("before-highlightall", t);
                    for (var r, i = e.querySelectorAll(t.selector), o = 0; r = i[o++];) C.highlightElement(r, !0 === a, t.callback)
                },
                highlightElement: function(e, a, n) {
                    for (var t, r = "none", i = e; i && !c.test(i.className);) i = i.parentNode;
                    i && (r = (i.className.match(c) || [, "none"])[1].toLowerCase(), t = C.languages[r]), e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r, e.parentNode && (i = e.parentNode, /pre/i.test(i.nodeName) && (i.className = i.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r));
                    var o = {
                            element: e,
                            language: r,
                            grammar: t,
                            code: e.textContent
                        },
                        l = function(e) {
                            o.highlightedCode = e, C.hooks.run("before-insert", o), o.element.innerHTML = o.highlightedCode, C.hooks.run("after-highlight", o), C.hooks.run("complete", o), n && n.call(o.element)
                        };
                    if (C.hooks.run("before-sanity-check", o), o.code)
                        if (C.hooks.run("before-highlight", o), o.grammar)
                            if (a && g.Worker) {
                                var s = new Worker(C.filename);
                                s.onmessage = function(e) {
                                    l(e.data)
                                }, s.postMessage(JSON.stringify({
                                    language: o.language,
                                    code: o.code,
                                    immediateClose: !0
                                }))
                            } else l(C.highlight(o.code, o.grammar, o.language));
                    else l(C.util.encode(o.code));
                    else C.hooks.run("complete", o)
                },
                highlight: function(e, a, n) {
                    var t = {
                        code: e,
                        grammar: a,
                        language: n
                    };
                    return C.hooks.run("before-tokenize", t), t.tokens = C.tokenize(t.code, t.grammar), C.hooks.run("after-tokenize", t), M.stringify(C.util.encode(t.tokens), t.language)
                },
                matchGrammar: function(e, a, n, t, r, i, o) {
                    for (var l in n)
                        if (n.hasOwnProperty(l) && n[l]) {
                            if (l == o) return;
                            var s = n[l];
                            s = "Array" === C.util.type(s) ? s : [s];
                            for (var g = 0; g < s.length; ++g) {
                                var c = s[g],
                                    u = c.inside,
                                    h = !!c.lookbehind,
                                    f = !!c.greedy,
                                    d = 0,
                                    m = c.alias;
                                if (f && !c.pattern.global) {
                                    var p = c.pattern.toString().match(/[imuy]*$/)[0];
                                    c.pattern = RegExp(c.pattern.source, p + "g")
                                }
                                c = c.pattern || c;
                                for (var y = t, v = r; y < a.length; v += a[y].length, ++y) {
                                    var k = a[y];
                                    if (a.length > e.length) return;
                                    if (!(k instanceof M)) {
                                        if (f && y != a.length - 1) {
                                            if (c.lastIndex = v, !(x = c.exec(e))) break;
                                            for (var b = x.index + (h ? x[1].length : 0), w = x.index + x[0].length, A = y, P = v, O = a.length; A < O && (P < w || !a[A].type && !a[A - 1].greedy); ++A)(P += a[A].length) <= b && (++y, v = P);
                                            if (a[y] instanceof M) continue;
                                            N = A - y, k = e.slice(v, P), x.index -= v
                                        } else {
                                            c.lastIndex = 0;
                                            var x = c.exec(k),
                                                N = 1
                                        }
                                        if (x) {
                                            h && (d = x[1] ? x[1].length : 0);
                                            w = (b = x.index + d) + (x = x[0].slice(d)).length;
                                            var j = k.slice(0, b),
                                                S = k.slice(w),
                                                E = [y, N];
                                            j && (++y, v += j.length, E.push(j));
                                            var _ = new M(l, u ? C.tokenize(x, u) : x, m, x, f);
                                            if (E.push(_), S && E.push(S), Array.prototype.splice.apply(a, E), 1 != N && C.matchGrammar(e, a, n, y, v, !0, l), i) break
                                        } else if (i) break
                                    }
                                }
                            }
                        }
                },
                tokenize: function(e, a) {
                    var n = [e],
                        t = a.rest;
                    if (t) {
                        for (var r in t) a[r] = t[r];
                        delete a.rest
                    }
                    return C.matchGrammar(e, n, a, 0, 0, !1), n
                },
                hooks: {
                    all: {},
                    add: function(e, a) {
                        var n = C.hooks.all;
                        n[e] = n[e] || [], n[e].push(a)
                    },
                    run: function(e, a) {
                        var n = C.hooks.all[e];
                        if (n && n.length)
                            for (var t, r = 0; t = n[r++];) t(a)
                    }
                },
                Token: M
            };

        function M(e, a, n, t, r) {
            this.type = e, this.content = a, this.alias = n, this.length = 0 | (t || "").length, this.greedy = !!r
        }
        if (g.Prism = C, M.stringify = function(e, a) {
                if ("string" == typeof e) return e;
                if (Array.isArray(e)) return e.map(function(e) {
                    return M.stringify(e, a)
                }).join("");
                var n = {
                    type: e.type,
                    content: M.stringify(e.content, a),
                    tag: "span",
                    classes: ["token", e.type],
                    attributes: {},
                    language: a
                };
                if (e.alias) {
                    var t = Array.isArray(e.alias) ? e.alias : [e.alias];
                    Array.prototype.push.apply(n.classes, t)
                }
                C.hooks.run("wrap", n);
                var r = Object.keys(n.attributes).map(function(e) {
                    return e + '="' + (n.attributes[e] || "").replace(/"/g, "&quot;") + '"'
                }).join(" ");
                return "<" + n.tag + ' class="' + n.classes.join(" ") + '"' + (r ? " " + r : "") + ">" + n.content + "</" + n.tag + ">"
            }, !g.document) return g.addEventListener && (C.disableWorkerMessageHandler || g.addEventListener("message", function(e) {
            var a = JSON.parse(e.data),
                n = a.language,
                t = a.code,
                r = a.immediateClose;
            g.postMessage(C.highlight(t, C.languages[n], n)), r && g.close()
        }, !1)), C;
        var e = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
        return e && (C.filename = e.src, C.manual || e.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(C.highlightAll) : window.setTimeout(C.highlightAll, 16) : document.addEventListener("DOMContentLoaded", C.highlightAll))), C
    }(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: /<!DOCTYPE[\s\S]+?>/i,
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
        greedy: !0,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/i,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[^\s>\/:]+:/
                }
            },
            "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
                inside: {
                    punctuation: [/^=/, {
                        pattern: /^(\s*)["']|["']$/,
                        lookbehind: !0
                    }]
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                    namespace: /^[^\s>\/:]+:/
                }
            }
        }
    },
    entity: /&#?[\da-z]{1,8};/i
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function(a) {
    "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"))
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
    value: function(a, e) {
        var s = {};
        s["language-" + e] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: !0,
            inside: Prism.languages[e]
        }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var n = {
            "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: s
            }
        };
        n["language-" + e] = {
            pattern: /[\s\S]+/,
            inside: Prism.languages[e]
        };
        var i = {};
        i[a] = {
            pattern: RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g, a), "i"),
            lookbehind: !0,
            greedy: !0,
            inside: n
        }, Prism.languages.insertBefore("markup", "cdata", i)
    }
}), Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
    }],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /[.\\]/
        }
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [Prism.languages.clike["class-name"], {
        pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
        lookbehind: !0
    }],
    keyword: [{
        pattern: /((?:^|})\s*)(?:catch|finally)\b/,
        lookbehind: !0
    }, {
        pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
    }],
    number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
        lookbehind: !0,
        greedy: !0
    },
    "function-variable": {
        pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
        alias: "function"
    },
    parameter: [{
        pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
        inside: Prism.languages.javascript
    }, {
        pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
    "template-string": {
        pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
        greedy: !0,
        inside: {
            "template-punctuation": {
                pattern: /^`|`$/,
                alias: "string"
            },
            interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                lookbehind: !0,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\${|}$/,
                        alias: "punctuation"
                    },
                    rest: Prism.languages.javascript
                }
            },
            string: /[\s\S]+/
        }
    }
}), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.js = Prism.languages.javascript;
! function(e) {
    e.languages.pug = {
        comment: {
            pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ]+.+)*/m,
            lookbehind: !0
        },
        "multiline-script": {
            pattern: /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
            lookbehind: !0,
            inside: {
                rest: e.languages.javascript
            }
        },
        filter: {
            pattern: /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
            lookbehind: !0,
            inside: {
                "filter-name": {
                    pattern: /^:[\w-]+/,
                    alias: "variable"
                }
            }
        },
        "multiline-plain-text": {
            pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
            lookbehind: !0
        },
        markup: {
            pattern: /(^[\t ]*)<.+/m,
            lookbehind: !0,
            inside: {
                rest: e.languages.markup
            }
        },
        doctype: {
            pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/,
            lookbehind: !0
        },
        "flow-control": {
            pattern: /(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,
            lookbehind: !0,
            inside: {
                each: {
                    pattern: /^each .+? in\b/,
                    inside: {
                        keyword: /\b(?:each|in)\b/,
                        punctuation: /,/
                    }
                },
                branch: {
                    pattern: /^(?:if|unless|else|case|when|default|while)\b/,
                    alias: "keyword"
                },
                rest: e.languages.javascript
            }
        },
        keyword: {
            pattern: /(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,
            lookbehind: !0
        },
        mixin: [{
            pattern: /(^[\t ]*)mixin .+/m,
            lookbehind: !0,
            inside: {
                keyword: /^mixin/,
                function: /\w+(?=\s*\(|\s*$)/,
                punctuation: /[(),.]/
            }
        }, {
            pattern: /(^[\t ]*)\+.+/m,
            lookbehind: !0,
            inside: {
                name: {
                    pattern: /^\+\w+/,
                    alias: "function"
                },
                rest: e.languages.javascript
            }
        }],
        script: {
            pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]+).+/m,
            lookbehind: !0,
            inside: {
                rest: e.languages.javascript
            }
        },
        "plain-text": {
            pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]+).+/m,
            lookbehind: !0
        },
        tag: {
            pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
            lookbehind: !0,
            inside: {
                attributes: [{
                    pattern: /&[^(]+\([^)]+\)/,
                    inside: {
                        rest: e.languages.javascript
                    }
                }, {
                    pattern: /\([^)]+\)/,
                    inside: {
                        "attr-value": {
                            pattern: /(=\s*)(?:\{[^}]*\}|[^,)\r\n]+)/,
                            lookbehind: !0,
                            inside: {
                                rest: e.languages.javascript
                            }
                        },
                        "attr-name": /[\w-]+(?=\s*!?=|\s*[,)])/,
                        punctuation: /[!=(),]+/
                    }
                }],
                punctuation: /:/
            }
        },
        code: [{
            pattern: /(^[\t ]*(?:-|!?=)).+/m,
            lookbehind: !0,
            inside: {
                rest: e.languages.javascript
            }
        }],
        punctuation: /[.\-!=|]+/
    };
    for (var t = [{
            filter: "atpl",
            language: "twig"
        }, {
            filter: "coffee",
            language: "coffeescript"
        }, "ejs", "handlebars", "less", "livescript", "markdown", {
            filter: "sass",
            language: "scss"
        }, "stylus"], n = {}, a = 0, i = t.length; a < i; a++) {
        var r = t[a];
        r = "string" == typeof r ? {
            filter: r,
            language: r
        } : r, e.languages[r.language] && (n["filter-" + r.filter] = {
            pattern: RegExp("(^([\t ]*)):{{filter_name}}(?:(?:\r?\n|\r(?!\n))(?:\\2[\t ]+.+|\\s*?(?=\r?\n|\r)))+".replace("{{filter_name}}", r.filter), "m"),
            lookbehind: !0,
            inside: {
                "filter-name": {
                    pattern: /^:[\w-]+/,
                    alias: "variable"
                },
                rest: e.languages[r.language]
            }
        })
    }
    e.languages.insertBefore("pug", "filter", n)
}(Prism);
! function() {
    if ("undefined" != typeof self && self.Prism && self.document) {
        var l = "line-numbers",
            c = /\n(?!$)/g,
            m = function(e) {
                var t = a(e)["white-space"];
                if ("pre-wrap" === t || "pre-line" === t) {
                    var n = e.querySelector("code"),
                        r = e.querySelector(".line-numbers-rows"),
                        s = e.querySelector(".line-numbers-sizer"),
                        i = n.textContent.split(c);
                    s || ((s = document.createElement("span")).className = "line-numbers-sizer", n.appendChild(s)), s.style.display = "block", i.forEach(function(e, t) {
                        s.textContent = e || "\n";
                        var n = s.getBoundingClientRect().height;
                        r.children[t].style.height = n + "px"
                    }), s.textContent = "", s.style.display = "none"
                }
            },
            a = function(e) {
                return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null
            };
        window.addEventListener("resize", function() {
            Array.prototype.forEach.call(document.querySelectorAll("pre." + l), m)
        }), Prism.hooks.add("complete", function(e) {
            if (e.code) {
                var t = e.element,
                    n = t.parentNode;
                if (n && /pre/i.test(n.nodeName) && !t.querySelector(".line-numbers-rows")) {
                    for (var r = !1, s = /(?:^|\s)line-numbers(?:\s|$)/, i = t; i; i = i.parentNode)
                        if (s.test(i.className)) {
                            r = !0;
                            break
                        }
                    if (r) {
                        t.className = t.className.replace(s, " "), s.test(n.className) || (n.className += " line-numbers");
                        var l, a = e.code.match(c),
                            o = a ? a.length + 1 : 1,
                            u = new Array(o + 1).join("<span></span>");
                        (l = document.createElement("span")).setAttribute("aria-hidden", "true"), l.className = "line-numbers-rows", l.innerHTML = u, n.hasAttribute("data-start") && (n.style.counterReset = "linenumber " + (parseInt(n.getAttribute("data-start"), 10) - 1)), e.element.appendChild(l), m(n), Prism.hooks.run("line-numbers", e)
                    }
                }
            }
        }), Prism.hooks.add("line-numbers", function(e) {
            e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0
        }), Prism.plugins.lineNumbers = {
            getLine: function(e, t) {
                if ("PRE" === e.tagName && e.classList.contains(l)) {
                    var n = e.querySelector(".line-numbers-rows"),
                        r = parseInt(e.getAttribute("data-start"), 10) || 1,
                        s = r + (n.children.length - 1);
                    t < r && (t = r), s < t && (t = s);
                    var i = t - r;
                    return n.children[i]
                }
            }
        }
    }
}();
! function() {
    if ("undefined" != typeof self && self.Prism && self.document) {
        var r = [],
            i = {},
            a = function() {};
        Prism.plugins.toolbar = {};
        var t = Prism.plugins.toolbar.registerButton = function(t, a) {
                var e;
                e = "function" == typeof a ? a : function(t) {
                    var e;
                    return "function" == typeof a.onClick ? ((e = document.createElement("button")).type = "button", e.addEventListener("click", function() {
                        a.onClick.call(this, t)
                    })) : "string" == typeof a.url ? (e = document.createElement("a")).href = a.url : e = document.createElement("span"), a.className && e.classList.add(a.className), e.textContent = a.text, e
                }, t in i ? console.warn('There is a button with the key "' + t + '" registered already.') : r.push(i[t] = e)
            },
            e = Prism.plugins.toolbar.hook = function(n) {
                var t = n.element.parentNode;
                if (t && /pre/i.test(t.nodeName) && !t.parentNode.classList.contains("code-toolbar")) {
                    var e = document.createElement("div");
                    e.classList.add("code-toolbar"), t.parentNode.insertBefore(e, t), e.appendChild(t);
                    var o = document.createElement("div");
                    o.classList.add("toolbar"), document.body.hasAttribute("data-toolbar-order") && (r = document.body.getAttribute("data-toolbar-order").split(",").map(function(t) {
                        return i[t] || a
                    })), r.forEach(function(t) {
                        var e = t(n);
                        if (e) {
                            var a = document.createElement("div");
                            a.classList.add("toolbar-item"), a.appendChild(e), o.appendChild(a)
                        }
                    }), e.appendChild(o)
                }
            };
        t("label", function(t) {
            var e = t.element.parentNode;
            if (e && /pre/i.test(e.nodeName) && e.hasAttribute("data-label")) {
                var a, n, o = e.getAttribute("data-label");
                try {
                    n = document.querySelector("template#" + o)
                } catch (t) {}
                return n ? a = n.content : (e.hasAttribute("data-url") ? (a = document.createElement("a")).href = e.getAttribute("data-url") : a = document.createElement("span"), a.textContent = o), a
            }
        }), Prism.hooks.add("complete", e)
    }
}();
! function() {
    if ("undefined" != typeof self && self.Prism && self.document)
        if (Prism.plugins.toolbar) {
            var r = window.ClipboardJS || void 0;
            r || "function" != typeof require || (r = require("clipboard"));
            var i = [];
            if (!r) {
                var o = document.createElement("script"),
                    e = document.querySelector("head");
                o.onload = function() {
                    if (r = window.ClipboardJS)
                        for (; i.length;) i.pop()()
                }, o.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js", e.appendChild(o)
            }
            Prism.plugins.toolbar.registerButton("copy-to-clipboard", function(e) {
                var t = document.createElement("button");
                return t.textContent = "Copy", r ? o() : i.push(o), t;

                function o() {
                    var o = new r(t, {
                        text: function() {
                            return e.code
                        }
                    });
                    o.on("success", function() {
                        t.textContent = "Copied!", n()
                    }), o.on("error", function() {
                        t.textContent = "Press Ctrl+C to copy", n()
                    })
                }

                function n() {
                    setTimeout(function() {
                        t.textContent = "Copy"
                    }, 5e3)
                }
            })
        } else console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.")
}();