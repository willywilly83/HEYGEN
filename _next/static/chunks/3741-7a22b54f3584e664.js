(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3741], {
        97098: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return f
                }
            });
            var r = t(70079);
            var o = e => {
                const n = r.useRef(e);
                return r.useEffect((() => {
                    n.current = e
                })), n
            };
            const i = "undefined" !== typeof performance ? performance : Date,
                l = () => i.now();

            function u(e, n = 30, t = !1) {
                const i = o(e),
                    u = 1e3 / n,
                    a = r.useRef(0),
                    c = r.useRef(),
                    s = () => c.current && clearTimeout(c.current),
                    f = [n, t, i];

                function p() {
                    a.current = 0, s()
                }
                return r.useEffect((() => p), f), r.useCallback((function() {
                    const e = arguments,
                        n = l(),
                        r = () => {
                            a.current = n, s(), i.current.apply(null, e)
                        },
                        o = a.current;
                    if (t && 0 === o) return r();
                    if (n - o > u) {
                        if (o > 0) return r();
                        a.current = n
                    }
                    s(), c.current = setTimeout((() => {
                        r(), a.current = 0
                    }), u)
                }), f)
            }
            var a = function(e, n, t, o) {
                const i = r.useRef(t),
                    l = r.useRef(o);
                r.useEffect((() => {
                    i.current = t, l.current = o
                })), r.useEffect((() => {
                    const t = e && "current" in e ? e.current : e;
                    if (!t) return;
                    let r = 0;

                    function o(...e) {
                        r || i.current.apply(this, e)
                    }
                    t.addEventListener(n, o);
                    const u = l.current;
                    return () => {
                        r = 1, t.removeEventListener(n, o), u && u()
                    }
                }), [e, n])
            };
            const c = "undefined" === typeof window ? null : window,
                s = () => void 0 !== c.scrollY ? c.scrollY : void 0 === c.pageYOffset ? 0 : c.pageYOffset;
            var f = (e = 30) => {
                const n = function(e, n, t) {
                    const o = r.useState(e);
                    return [o[0], u(o[1], n, t)]
                }("undefined" === typeof window ? 0 : s, e, !0);
                return a(c, "scroll", (() => n[1](s()))), n[0]
            }
        },
        24740: function(e) {
            "use strict";
            var n = Object.prototype.hasOwnProperty,
                t = Object.prototype.toString,
                r = Object.defineProperty,
                o = Object.getOwnPropertyDescriptor,
                i = function(e) {
                    return "function" === typeof Array.isArray ? Array.isArray(e) : "[object Array]" === t.call(e)
                },
                l = function(e) {
                    if (!e || "[object Object]" !== t.call(e)) return !1;
                    var r, o = n.call(e, "constructor"),
                        i = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
                    if (e.constructor && !o && !i) return !1;
                    for (r in e);
                    return "undefined" === typeof r || n.call(e, r)
                },
                u = function(e, n) {
                    r && "__proto__" === n.name ? r(e, n.name, {
                        enumerable: !0,
                        configurable: !0,
                        value: n.newValue,
                        writable: !0
                    }) : e[n.name] = n.newValue
                },
                a = function(e, t) {
                    if ("__proto__" === t) {
                        if (!n.call(e, t)) return;
                        if (o) return o(e, t).value
                    }
                    return e[t]
                };
            e.exports = function e() {
                var n, t, r, o, c, s, f = arguments[0],
                    p = 1,
                    d = arguments.length,
                    h = !1;
                for ("boolean" === typeof f && (h = f, f = arguments[1] || {}, p = 2), (null == f || "object" !== typeof f && "function" !== typeof f) && (f = {}); p < d; ++p)
                    if (null != (n = arguments[p]))
                        for (t in n) r = a(f, t), f !== (o = a(n, t)) && (h && o && (l(o) || (c = i(o))) ? (c ? (c = !1, s = r && i(r) ? r : []) : s = r && l(r) ? r : {}, u(f, {
                            name: t,
                            newValue: e(h, s, o)
                        })) : "undefined" !== typeof o && u(f, {
                            name: t,
                            newValue: o
                        }));
                return f
            }
        },
        29058: function(e) {
            var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
                t = /\n/g,
                r = /^\s*/,
                o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
                i = /^:\s*/,
                l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
                u = /^[;\s]*/,
                a = /^\s+|\s+$/g,
                c = "";

            function s(e) {
                return e ? e.replace(a, c) : c
            }
            e.exports = function(e, a) {
                if ("string" !== typeof e) throw new TypeError("First argument must be a string");
                if (!e) return [];
                a = a || {};
                var f = 1,
                    p = 1;

                function d(e) {
                    var n = e.match(t);
                    n && (f += n.length);
                    var r = e.lastIndexOf("\n");
                    p = ~r ? e.length - r : p + e.length
                }

                function h() {
                    var e = {
                        line: f,
                        column: p
                    };
                    return function(n) {
                        return n.position = new m(e), x(), n
                    }
                }

                function m(e) {
                    this.start = e, this.end = {
                        line: f,
                        column: p
                    }, this.source = a.source
                }
                m.prototype.content = e;
                var g = [];

                function y(n) {
                    var t = new Error(a.source + ":" + f + ":" + p + ": " + n);
                    if (t.reason = n, t.filename = a.source, t.line = f, t.column = p, t.source = e, !a.silent) throw t;
                    g.push(t)
                }

                function k(n) {
                    var t = n.exec(e);
                    if (t) {
                        var r = t[0];
                        return d(r), e = e.slice(r.length), t
                    }
                }

                function x() {
                    k(r)
                }

                function v(e) {
                    var n;
                    for (e = e || []; n = b();) !1 !== n && e.push(n);
                    return e
                }

                function b() {
                    var n = h();
                    if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
                        for (var t = 2; c != e.charAt(t) && ("*" != e.charAt(t) || "/" != e.charAt(t + 1));) ++t;
                        if (t += 2, c === e.charAt(t - 1)) return y("End of comment missing");
                        var r = e.slice(2, t - 2);
                        return p += 2, d(r), e = e.slice(t), p += 2, n({
                            type: "comment",
                            comment: r
                        })
                    }
                }

                function w() {
                    var e = h(),
                        t = k(o);
                    if (t) {
                        if (b(), !k(i)) return y("property missing ':'");
                        var r = k(l),
                            a = e({
                                type: "declaration",
                                property: s(t[0].replace(n, c)),
                                value: r ? s(r[0].replace(n, c)) : c
                            });
                        return k(u), a
                    }
                }
                return x(),
                    function() {
                        var e, n = [];
                        for (v(n); e = w();) !1 !== e && (n.push(e), v(n));
                        return n
                    }()
            }
        },
        38165: function(e) {
            e.exports = function(e) {
                return null != e && null != e.constructor && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            }
        },
        84835: function(e, n, t) {
            "use strict";
            var r = t(11596);

            function o() {}

            function i() {}
            i.resetWarningCache = o, e.exports = function() {
                function e(e, n, t, o, i, l) {
                    if (l !== r) {
                        var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw u.name = "Invariant Violation", u
                    }
                }

                function n() {
                    return e
                }
                e.isRequired = e;
                var t = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: n,
                    element: e,
                    elementType: e,
                    instanceOf: n,
                    node: e,
                    objectOf: n,
                    oneOf: n,
                    oneOfType: n,
                    shape: n,
                    exact: n,
                    checkPropTypes: i,
                    resetWarningCache: o
                };
                return t.PropTypes = t, t
            }
        },
        39519: function(e, n, t) {
            e.exports = t(84835)()
        },
        11596: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        92810: function(e, n) {
            "use strict";
            var t, r = Symbol.for("react.element"),
                o = Symbol.for("react.portal"),
                i = Symbol.for("react.fragment"),
                l = Symbol.for("react.strict_mode"),
                u = Symbol.for("react.profiler"),
                a = Symbol.for("react.provider"),
                c = Symbol.for("react.context"),
                s = Symbol.for("react.server_context"),
                f = Symbol.for("react.forward_ref"),
                p = Symbol.for("react.suspense"),
                d = Symbol.for("react.suspense_list"),
                h = Symbol.for("react.memo"),
                m = Symbol.for("react.lazy"),
                g = Symbol.for("react.offscreen");

            function y(e) {
                if ("object" === typeof e && null !== e) {
                    var n = e.$$typeof;
                    switch (n) {
                        case r:
                            switch (e = e.type) {
                                case i:
                                case u:
                                case l:
                                case p:
                                case d:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case s:
                                        case c:
                                        case f:
                                        case m:
                                        case h:
                                        case a:
                                            return e;
                                        default:
                                            return n
                                    }
                            }
                        case o:
                            return n
                    }
                }
            }
            t = Symbol.for("react.module.reference"), n.ContextConsumer = c, n.ContextProvider = a, n.Element = r, n.ForwardRef = f, n.Fragment = i, n.Lazy = m, n.Memo = h, n.Portal = o, n.Profiler = u, n.StrictMode = l, n.Suspense = p, n.SuspenseList = d, n.isAsyncMode = function() {
                return !1
            }, n.isConcurrentMode = function() {
                return !1
            }, n.isContextConsumer = function(e) {
                return y(e) === c
            }, n.isContextProvider = function(e) {
                return y(e) === a
            }, n.isElement = function(e) {
                return "object" === typeof e && null !== e && e.$$typeof === r
            }, n.isForwardRef = function(e) {
                return y(e) === f
            }, n.isFragment = function(e) {
                return y(e) === i
            }, n.isLazy = function(e) {
                return y(e) === m
            }, n.isMemo = function(e) {
                return y(e) === h
            }, n.isPortal = function(e) {
                return y(e) === o
            }, n.isProfiler = function(e) {
                return y(e) === u
            }, n.isStrictMode = function(e) {
                return y(e) === l
            }, n.isSuspense = function(e) {
                return y(e) === p
            }, n.isSuspenseList = function(e) {
                return y(e) === d
            }, n.isValidElementType = function(e) {
                return "string" === typeof e || "function" === typeof e || e === i || e === u || e === l || e === p || e === d || e === g || "object" === typeof e && null !== e && (e.$$typeof === m || e.$$typeof === h || e.$$typeof === a || e.$$typeof === c || e.$$typeof === f || e.$$typeof === t || void 0 !== e.getModuleId)
            }, n.typeOf = y
        },
        72037: function(e, n, t) {
            "use strict";
            e.exports = t(92810)
        },
        4142: function(e, n, t) {
            var r = t(29058);

            function o(e, n) {
                var t, o = null;
                if (!e || "string" !== typeof e) return o;
                for (var i, l, u = r(e), a = "function" === typeof n, c = 0, s = u.length; c < s; c++) i = (t = u[c]).property, l = t.value, a ? n(i, l, t) : l && (o || (o = {}), o[i] = l);
                return o
            }
            e.exports = o, e.exports.default = o
        },
        20531: function(e, n, t) {
            "use strict";
            t.d(n, {
                D: function() {
                    return Jt
                }
            });
            var r = {};
            t.r(r), t.d(r, {
                attentionMarkers: function() {
                    return mn
                },
                contentInitial: function() {
                    return cn
                },
                disable: function() {
                    return gn
                },
                document: function() {
                    return an
                },
                flow: function() {
                    return fn
                },
                flowInitial: function() {
                    return sn
                },
                insideSpan: function() {
                    return hn
                },
                string: function() {
                    return pn
                },
                text: function() {
                    return dn
                }
            });
            var o = {};
            t.r(o), t.d(o, {
                boolean: function() {
                    return at
                },
                booleanish: function() {
                    return ct
                },
                commaOrSpaceSeparated: function() {
                    return ht
                },
                commaSeparated: function() {
                    return dt
                },
                number: function() {
                    return ft
                },
                overloadedBoolean: function() {
                    return st
                },
                spaceSeparated: function() {
                    return pt
                }
            });
            var i = t(70079),
                l = t(38165);

            function u(e) {
                return e && "object" === typeof e ? "position" in e || "type" in e ? c(e.position) : "start" in e || "end" in e ? c(e) : "line" in e || "column" in e ? a(e) : "" : ""
            }

            function a(e) {
                return s(e && e.line) + ":" + s(e && e.column)
            }

            function c(e) {
                return a(e && e.start) + "-" + a(e && e.end)
            }

            function s(e) {
                return e && "number" === typeof e ? e : 1
            }
            class f extends Error {
                constructor(e, n, t) {
                    const r = [null, null];
                    let o = {
                        start: {
                            line: null,
                            column: null
                        },
                        end: {
                            line: null,
                            column: null
                        }
                    };
                    if (super(), "string" === typeof n && (t = n, n = void 0), "string" === typeof t) {
                        const e = t.indexOf(":"); - 1 === e ? r[1] = t : (r[0] = t.slice(0, e), r[1] = t.slice(e + 1))
                    }
                    n && ("type" in n || "position" in n ? n.position && (o = n.position) : "start" in n || "end" in n ? o = n : ("line" in n || "column" in n) && (o.start = n)), this.name = u(n) || "1:1", this.message = "object" === typeof e ? e.message : e, this.stack = "", "object" === typeof e && e.stack && (this.stack = e.stack), this.reason = this.message, this.fatal, this.line = o.start.line, this.column = o.start.column, this.position = o, this.source = r[0], this.ruleId = r[1], this.file, this.actual, this.expected, this.url, this.note
                }
            }
            f.prototype.file = "", f.prototype.name = "", f.prototype.reason = "", f.prototype.message = "", f.prototype.stack = "", f.prototype.fatal = null, f.prototype.column = null, f.prototype.line = null, f.prototype.source = null, f.prototype.ruleId = null, f.prototype.position = null;
            const p = {
                basename: function(e, n) {
                    if (void 0 !== n && "string" !== typeof n) throw new TypeError('"ext" argument must be a string');
                    d(e);
                    let t, r = 0,
                        o = -1,
                        i = e.length;
                    if (void 0 === n || 0 === n.length || n.length > e.length) {
                        for (; i--;)
                            if (47 === e.charCodeAt(i)) {
                                if (t) {
                                    r = i + 1;
                                    break
                                }
                            } else o < 0 && (t = !0, o = i + 1);
                        return o < 0 ? "" : e.slice(r, o)
                    }
                    if (n === e) return "";
                    let l = -1,
                        u = n.length - 1;
                    for (; i--;)
                        if (47 === e.charCodeAt(i)) {
                            if (t) {
                                r = i + 1;
                                break
                            }
                        } else l < 0 && (t = !0, l = i + 1), u > -1 && (e.charCodeAt(i) === n.charCodeAt(u--) ? u < 0 && (o = i) : (u = -1, o = l));
                    r === o ? o = l : o < 0 && (o = e.length);
                    return e.slice(r, o)
                },
                dirname: function(e) {
                    if (d(e), 0 === e.length) return ".";
                    let n, t = -1,
                        r = e.length;
                    for (; --r;)
                        if (47 === e.charCodeAt(r)) {
                            if (n) {
                                t = r;
                                break
                            }
                        } else n || (n = !0);
                    return t < 0 ? 47 === e.charCodeAt(0) ? "/" : "." : 1 === t && 47 === e.charCodeAt(0) ? "//" : e.slice(0, t)
                },
                extname: function(e) {
                    d(e);
                    let n, t = e.length,
                        r = -1,
                        o = 0,
                        i = -1,
                        l = 0;
                    for (; t--;) {
                        const u = e.charCodeAt(t);
                        if (47 !== u) r < 0 && (n = !0, r = t + 1), 46 === u ? i < 0 ? i = t : 1 !== l && (l = 1) : i > -1 && (l = -1);
                        else if (n) {
                            o = t + 1;
                            break
                        }
                    }
                    if (i < 0 || r < 0 || 0 === l || 1 === l && i === r - 1 && i === o + 1) return "";
                    return e.slice(i, r)
                },
                join: function(...e) {
                    let n, t = -1;
                    for (; ++t < e.length;) d(e[t]), e[t] && (n = void 0 === n ? e[t] : n + "/" + e[t]);
                    return void 0 === n ? "." : function(e) {
                        d(e);
                        const n = 47 === e.charCodeAt(0);
                        let t = function(e, n) {
                            let t, r, o = "",
                                i = 0,
                                l = -1,
                                u = 0,
                                a = -1;
                            for (; ++a <= e.length;) {
                                if (a < e.length) t = e.charCodeAt(a);
                                else {
                                    if (47 === t) break;
                                    t = 47
                                }
                                if (47 === t) {
                                    if (l === a - 1 || 1 === u);
                                    else if (l !== a - 1 && 2 === u) {
                                        if (o.length < 2 || 2 !== i || 46 !== o.charCodeAt(o.length - 1) || 46 !== o.charCodeAt(o.length - 2))
                                            if (o.length > 2) {
                                                if (r = o.lastIndexOf("/"), r !== o.length - 1) {
                                                    r < 0 ? (o = "", i = 0) : (o = o.slice(0, r), i = o.length - 1 - o.lastIndexOf("/")), l = a, u = 0;
                                                    continue
                                                }
                                            } else if (o.length > 0) {
                                            o = "", i = 0, l = a, u = 0;
                                            continue
                                        }
                                        n && (o = o.length > 0 ? o + "/.." : "..", i = 2)
                                    } else o.length > 0 ? o += "/" + e.slice(l + 1, a) : o = e.slice(l + 1, a), i = a - l - 1;
                                    l = a, u = 0
                                } else 46 === t && u > -1 ? u++ : u = -1
                            }
                            return o
                        }(e, !n);
                        0 !== t.length || n || (t = ".");
                        t.length > 0 && 47 === e.charCodeAt(e.length - 1) && (t += "/");
                        return n ? "/" + t : t
                    }(n)
                },
                sep: "/"
            };

            function d(e) {
                if ("string" !== typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
            }
            const h = {
                cwd: function() {
                    return "/"
                }
            };

            function m(e) {
                return null !== e && "object" === typeof e && e.href && e.origin
            }

            function g(e) {
                if ("string" === typeof e) e = new URL(e);
                else if (!m(e)) {
                    const n = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
                    throw n.code = "ERR_INVALID_ARG_TYPE", n
                }
                if ("file:" !== e.protocol) {
                    const e = new TypeError("The URL must be of scheme file");
                    throw e.code = "ERR_INVALID_URL_SCHEME", e
                }
                return function(e) {
                    if ("" !== e.hostname) {
                        const e = new TypeError('File URL host must be "localhost" or empty on darwin');
                        throw e.code = "ERR_INVALID_FILE_URL_HOST", e
                    }
                    const n = e.pathname;
                    let t = -1;
                    for (; ++t < n.length;)
                        if (37 === n.charCodeAt(t) && 50 === n.charCodeAt(t + 1)) {
                            const e = n.charCodeAt(t + 2);
                            if (70 === e || 102 === e) {
                                const e = new TypeError("File URL path must not include encoded / characters");
                                throw e.code = "ERR_INVALID_FILE_URL_PATH", e
                            }
                        }
                    return decodeURIComponent(n)
                }(e)
            }
            const y = ["history", "path", "basename", "stem", "extname", "dirname"];
            class k {
                constructor(e) {
                    let n;
                    n = e ? "string" === typeof e || function(e) {
                        return l(e)
                    }(e) ? {
                        value: e
                    } : m(e) ? {
                        path: e
                    } : e : {}, this.data = {}, this.messages = [], this.history = [], this.cwd = h.cwd(), this.value, this.stored, this.result, this.map;
                    let t, r = -1;
                    for (; ++r < y.length;) {
                        const e = y[r];
                        e in n && void 0 !== n[e] && null !== n[e] && (this[e] = "history" === e ? [...n[e]] : n[e])
                    }
                    for (t in n) y.includes(t) || (this[t] = n[t])
                }
                get path() {
                    return this.history[this.history.length - 1]
                }
                set path(e) {
                    m(e) && (e = g(e)), v(e, "path"), this.path !== e && this.history.push(e)
                }
                get dirname() {
                    return "string" === typeof this.path ? p.dirname(this.path) : void 0
                }
                set dirname(e) {
                    b(this.basename, "dirname"), this.path = p.join(e || "", this.basename)
                }
                get basename() {
                    return "string" === typeof this.path ? p.basename(this.path) : void 0
                }
                set basename(e) {
                    v(e, "basename"), x(e, "basename"), this.path = p.join(this.dirname || "", e)
                }
                get extname() {
                    return "string" === typeof this.path ? p.extname(this.path) : void 0
                }
                set extname(e) {
                    if (x(e, "extname"), b(this.dirname, "extname"), e) {
                        if (46 !== e.charCodeAt(0)) throw new Error("`extname` must start with `.`");
                        if (e.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots")
                    }
                    this.path = p.join(this.dirname, this.stem + (e || ""))
                }
                get stem() {
                    return "string" === typeof this.path ? p.basename(this.path, this.extname) : void 0
                }
                set stem(e) {
                    v(e, "stem"), x(e, "stem"), this.path = p.join(this.dirname || "", e + (this.extname || ""))
                }
                toString(e) {
                    return (this.value || "").toString(e || void 0)
                }
                message(e, n, t) {
                    const r = new f(e, n, t);
                    return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r
                }
                info(e, n, t) {
                    const r = this.message(e, n, t);
                    return r.fatal = null, r
                }
                fail(e, n, t) {
                    const r = this.message(e, n, t);
                    throw r.fatal = !0, r
                }
            }

            function x(e, n) {
                if (e && e.includes(p.sep)) throw new Error("`" + n + "` cannot be a path: did not expect `" + p.sep + "`")
            }

            function v(e, n) {
                if (!e) throw new Error("`" + n + "` cannot be empty")
            }

            function b(e, n) {
                if (!e) throw new Error("Setting `" + n + "` requires `path` to be set too")
            }

            function w(e) {
                if (e) throw e
            }
            var S = t(24740);

            function E(e) {
                if ("object" !== typeof e || null === e) return !1;
                const n = Object.getPrototypeOf(e);
                return (null === n || n === Object.prototype || null === Object.getPrototypeOf(n)) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
            }

            function C() {
                const e = [],
                    n = {
                        run: function(...n) {
                            let t = -1;
                            const r = n.pop();
                            if ("function" !== typeof r) throw new TypeError("Expected function as last argument, not " + r);
                            ! function o(i, ...l) {
                                const u = e[++t];
                                let a = -1;
                                if (i) r(i);
                                else {
                                    for (; ++a < n.length;) null !== l[a] && void 0 !== l[a] || (l[a] = n[a]);
                                    n = l, u ? function(e, n) {
                                        let t;
                                        return r;

                                        function r(...n) {
                                            const r = e.length > n.length;
                                            let u;
                                            r && n.push(o);
                                            try {
                                                u = e.apply(this, n)
                                            } catch (i) {
                                                const n = i;
                                                if (r && t) throw n;
                                                return o(n)
                                            }
                                            r || (u instanceof Promise ? u.then(l, o) : u instanceof Error ? o(u) : l(u))
                                        }

                                        function o(e, ...r) {
                                            t || (t = !0, n(e, ...r))
                                        }

                                        function l(e) {
                                            o(null, e)
                                        }
                                    }(u, o)(...l) : r(null, ...l)
                                }
                            }(null, ...n)
                        },
                        use: function(t) {
                            if ("function" !== typeof t) throw new TypeError("Expected `middelware` to be a function, not " + t);
                            return e.push(t), n
                        }
                    };
                return n
            }
            const A = function e() {
                    const n = C(),
                        t = [];
                    let r, o = {},
                        i = -1;
                    return u.data = function(e, n) {
                        if ("string" === typeof e) return 2 === arguments.length ? (O("data", r), o[e] = n, u) : F.call(o, e) && o[e] || null;
                        if (e) return O("data", r), o = e, u;
                        return o
                    }, u.Parser = void 0, u.Compiler = void 0, u.freeze = function() {
                        if (r) return u;
                        for (; ++i < t.length;) {
                            const [e, ...r] = t[i];
                            if (!1 === r[0]) continue;
                            !0 === r[0] && (r[0] = void 0);
                            const o = e.call(u, ...r);
                            "function" === typeof o && n.use(o)
                        }
                        return r = !0, i = Number.POSITIVE_INFINITY, u
                    }, u.attachers = t, u.use = function(e, ...n) {
                        let i;
                        if (O("use", r), null === e || void 0 === e);
                        else if ("function" === typeof e) s(e, ...n);
                        else {
                            if ("object" !== typeof e) throw new TypeError("Expected usable value, not `" + e + "`");
                            Array.isArray(e) ? c(e) : a(e)
                        }
                        i && (o.settings = Object.assign(o.settings || {}, i));
                        return u;

                        function l(e) {
                            if ("function" === typeof e) s(e);
                            else {
                                if ("object" !== typeof e) throw new TypeError("Expected usable value, not `" + e + "`");
                                if (Array.isArray(e)) {
                                    const [n, ...t] = e;
                                    s(n, ...t)
                                } else a(e)
                            }
                        }

                        function a(e) {
                            c(e.plugins), e.settings && (i = Object.assign(i || {}, e.settings))
                        }

                        function c(e) {
                            let n = -1;
                            if (null === e || void 0 === e);
                            else {
                                if (!Array.isArray(e)) throw new TypeError("Expected a list of plugins, not `" + e + "`");
                                for (; ++n < e.length;) {
                                    l(e[n])
                                }
                            }
                        }

                        function s(e, n) {
                            let r, o = -1;
                            for (; ++o < t.length;)
                                if (t[o][0] === e) {
                                    r = t[o];
                                    break
                                }
                            r ? (E(r[1]) && E(n) && (n = S(!0, r[1], n)), r[1] = n) : t.push([...arguments])
                        }
                    }, u.parse = function(e) {
                        u.freeze();
                        const n = z(e),
                            t = u.Parser;
                        if (P("parse", t), T(t, "parse")) return new t(String(n), n).parse();
                        return t(String(n), n)
                    }, u.stringify = function(e, n) {
                        u.freeze();
                        const t = z(n),
                            r = u.Compiler;
                        if (D("stringify", r), I(e), T(r, "compile")) return new r(e, t).compile();
                        return r(e, t)
                    }, u.run = function(e, t, r) {
                        I(e), u.freeze(), r || "function" !== typeof t || (r = t, t = void 0);
                        if (!r) return new Promise(o);

                        function o(o, i) {
                            function l(n, t, l) {
                                t = t || e, n ? i(n) : o ? o(t) : r(null, t, l)
                            }
                            n.run(e, z(t), l)
                        }
                        o(null, r)
                    }, u.runSync = function(e, n) {
                        let t, r;
                        return u.run(e, n, o), L("runSync", "run", r), t;

                        function o(e, n) {
                            w(e), t = n, r = !0
                        }
                    }, u.process = function(e, n) {
                        if (u.freeze(), P("process", u.Parser), D("process", u.Compiler), !n) return new Promise(t);

                        function t(t, r) {
                            const o = z(e);

                            function i(e, o) {
                                e || !o ? r(e) : t ? t(o) : n(null, o)
                            }
                            u.run(u.parse(o), o, ((e, n, t) => {
                                if (!e && n && t) {
                                    const o = u.stringify(n, t);
                                    void 0 === o || null === o || ("string" === typeof(r = o) || l(r) ? t.value = o : t.result = o), i(e, t)
                                } else i(e);
                                var r
                            }))
                        }
                        t(null, n)
                    }, u.processSync = function(e) {
                        let n;
                        u.freeze(), P("processSync", u.Parser), D("processSync", u.Compiler);
                        const t = z(e);
                        return u.process(t, r), L("processSync", "process", n), t;

                        function r(e) {
                            n = !0, w(e)
                        }
                    }, u;

                    function u() {
                        const n = e();
                        let r = -1;
                        for (; ++r < t.length;) n.use(...t[r]);
                        return n.data(S(!0, {}, o)), n
                    }
                }().freeze(),
                F = {}.hasOwnProperty;

            function T(e, n) {
                return "function" === typeof e && e.prototype && (function(e) {
                    let n;
                    for (n in e)
                        if (F.call(e, n)) return !0;
                    return !1
                }(e.prototype) || n in e.prototype)
            }

            function P(e, n) {
                if ("function" !== typeof n) throw new TypeError("Cannot `" + e + "` without `Parser`")
            }

            function D(e, n) {
                if ("function" !== typeof n) throw new TypeError("Cannot `" + e + "` without `Compiler`")
            }

            function O(e, n) {
                if (n) throw new Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
            }

            function I(e) {
                if (!E(e) || "string" !== typeof e.type) throw new TypeError("Expected node, got `" + e + "`")
            }

            function L(e, n, t) {
                if (!t) throw new Error("`" + e + "` finished async. Use `" + n + "` instead")
            }

            function z(e) {
                return function(e) {
                    return Boolean(e && "object" === typeof e && "message" in e && "messages" in e)
                }(e) ? e : new k(e)
            }
            const M = {};

            function R(e, n, t) {
                if (function(e) {
                        return Boolean(e && "object" === typeof e)
                    }(e)) {
                    if ("value" in e) return "html" !== e.type || t ? e.value : "";
                    if (n && "alt" in e && e.alt) return e.alt;
                    if ("children" in e) return B(e.children, n, t)
                }
                return Array.isArray(e) ? B(e, n, t) : ""
            }

            function B(e, n, t) {
                const r = [];
                let o = -1;
                for (; ++o < e.length;) r[o] = R(e[o], n, t);
                return r.join("")
            }

            function _(e, n, t, r) {
                const o = e.length;
                let i, l = 0;
                if (n = n < 0 ? -n > o ? 0 : o + n : n > o ? o : n, t = t > 0 ? t : 0, r.length < 1e4) i = Array.from(r), i.unshift(n, t), e.splice(...i);
                else
                    for (t && e.splice(n, t); l < r.length;) i = r.slice(l, l + 1e4), i.unshift(n, 0), e.splice(...i), l += 1e4, n += 1e4
            }

            function N(e, n) {
                return e.length > 0 ? (_(e, e.length, 0, n), e) : n
            }
            const j = {}.hasOwnProperty;

            function H(e, n) {
                let t;
                for (t in n) {
                    const r = (j.call(e, t) ? e[t] : void 0) || (e[t] = {}),
                        o = n[t];
                    let i;
                    if (o)
                        for (i in o) {
                            j.call(r, i) || (r[i] = []);
                            const e = o[i];
                            U(r[i], Array.isArray(e) ? e : e ? [e] : [])
                        }
                }
            }

            function U(e, n) {
                let t = -1;
                const r = [];
                for (; ++t < n.length;)("after" === n[t].add ? e : r).push(n[t]);
                _(e, 0, 0, r)
            }
            const V = ne(/[A-Za-z]/),
                q = ne(/[\dA-Za-z]/),
                $ = ne(/[#-'*+\--9=?A-Z^-~]/);

            function W(e) {
                return null !== e && (e < 32 || 127 === e)
            }
            const Y = ne(/\d/),
                Q = ne(/[\dA-Fa-f]/),
                K = ne(/[!-/:-@[-`{-~]/);

            function X(e) {
                return null !== e && e < -2
            }

            function Z(e) {
                return null !== e && (e < 0 || 32 === e)
            }

            function J(e) {
                return -2 === e || -1 === e || 32 === e
            }
            const G = ne(/[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/),
                ee = ne(/\s/);

            function ne(e) {
                return function(n) {
                    return null !== n && e.test(String.fromCharCode(n))
                }
            }

            function te(e, n, t, r) {
                const o = r ? r - 1 : Number.POSITIVE_INFINITY;
                let i = 0;
                return function(r) {
                    if (J(r)) return e.enter(t), l(r);
                    return n(r)
                };

                function l(r) {
                    return J(r) && i++ < o ? (e.consume(r), l) : (e.exit(t), n(r))
                }
            }
            const re = {
                tokenize: function(e) {
                    const n = e.attempt(this.parser.constructs.contentInitial, (function(t) {
                        if (null === t) return void e.consume(t);
                        return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), te(e, n, "linePrefix")
                    }), (function(n) {
                        return e.enter("paragraph"), r(n)
                    }));
                    let t;
                    return n;

                    function r(n) {
                        const r = e.enter("chunkText", {
                            contentType: "text",
                            previous: t
                        });
                        return t && (t.next = r), t = r, o(n)
                    }

                    function o(n) {
                        return null === n ? (e.exit("chunkText"), e.exit("paragraph"), void e.consume(n)) : X(n) ? (e.consume(n), e.exit("chunkText"), r) : (e.consume(n), o)
                    }
                }
            };
            const oe = {
                    tokenize: function(e) {
                        const n = this,
                            t = [];
                        let r, o, i, l = 0;
                        return u;

                        function u(r) {
                            if (l < t.length) {
                                const o = t[l];
                                return n.containerState = o[1], e.attempt(o[0].continuation, a, c)(r)
                            }
                            return c(r)
                        }

                        function a(e) {
                            if (l++, n.containerState._closeFlow) {
                                n.containerState._closeFlow = void 0, r && k();
                                const t = n.events.length;
                                let o, i = t;
                                for (; i--;)
                                    if ("exit" === n.events[i][0] && "chunkFlow" === n.events[i][1].type) {
                                        o = n.events[i][1].end;
                                        break
                                    }
                                y(l);
                                let u = t;
                                for (; u < n.events.length;) n.events[u][1].end = Object.assign({}, o), u++;
                                return _(n.events, i + 1, 0, n.events.slice(t)), n.events.length = u, c(e)
                            }
                            return u(e)
                        }

                        function c(o) {
                            if (l === t.length) {
                                if (!r) return p(o);
                                if (r.currentConstruct && r.currentConstruct.concrete) return h(o);
                                n.interrupt = Boolean(r.currentConstruct && !r._gfmTableDynamicInterruptHack)
                            }
                            return n.containerState = {}, e.check(ie, s, f)(o)
                        }

                        function s(e) {
                            return r && k(), y(l), p(e)
                        }

                        function f(e) {
                            return n.parser.lazy[n.now().line] = l !== t.length, i = n.now().offset, h(e)
                        }

                        function p(t) {
                            return n.containerState = {}, e.attempt(ie, d, h)(t)
                        }

                        function d(e) {
                            return l++, t.push([n.currentConstruct, n.containerState]), p(e)
                        }

                        function h(t) {
                            return null === t ? (r && k(), y(0), void e.consume(t)) : (r = r || n.parser.flow(n.now()), e.enter("chunkFlow", {
                                contentType: "flow",
                                previous: o,
                                _tokenizer: r
                            }), m(t))
                        }

                        function m(t) {
                            return null === t ? (g(e.exit("chunkFlow"), !0), y(0), void e.consume(t)) : X(t) ? (e.consume(t), g(e.exit("chunkFlow")), l = 0, n.interrupt = void 0, u) : (e.consume(t), m)
                        }

                        function g(e, t) {
                            const u = n.sliceStream(e);
                            if (t && u.push(null), e.previous = o, o && (o.next = e), o = e, r.defineSkip(e.start), r.write(u), n.parser.lazy[e.start.line]) {
                                let e = r.events.length;
                                for (; e--;)
                                    if (r.events[e][1].start.offset < i && (!r.events[e][1].end || r.events[e][1].end.offset > i)) return;
                                const t = n.events.length;
                                let o, u, a = t;
                                for (; a--;)
                                    if ("exit" === n.events[a][0] && "chunkFlow" === n.events[a][1].type) {
                                        if (o) {
                                            u = n.events[a][1].end;
                                            break
                                        }
                                        o = !0
                                    }
                                for (y(l), e = t; e < n.events.length;) n.events[e][1].end = Object.assign({}, u), e++;
                                _(n.events, a + 1, 0, n.events.slice(t)), n.events.length = e
                            }
                        }

                        function y(r) {
                            let o = t.length;
                            for (; o-- > r;) {
                                const r = t[o];
                                n.containerState = r[1], r[0].exit.call(n, e)
                            }
                            t.length = r
                        }

                        function k() {
                            r.write([null]), o = void 0, r = void 0, n.containerState._closeFlow = void 0
                        }
                    }
                },
                ie = {
                    tokenize: function(e, n, t) {
                        return te(e, e.attempt(this.parser.constructs.document, n, t), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
                    }
                };
            const le = {
                tokenize: function(e, n, t) {
                    return function(n) {
                        return J(n) ? te(e, r, "linePrefix")(n) : r(n)
                    };

                    function r(e) {
                        return null === e || X(e) ? n(e) : t(e)
                    }
                },
                partial: !0
            };

            function ue(e) {
                const n = {};
                let t, r, o, i, l, u, a, c = -1;
                for (; ++c < e.length;) {
                    for (; c in n;) c = n[c];
                    if (t = e[c], c && "chunkFlow" === t[1].type && "listItemPrefix" === e[c - 1][1].type && (u = t[1]._tokenizer.events, o = 0, o < u.length && "lineEndingBlank" === u[o][1].type && (o += 2), o < u.length && "content" === u[o][1].type))
                        for (; ++o < u.length && "content" !== u[o][1].type;) "chunkText" === u[o][1].type && (u[o][1]._isInFirstContentOfListItem = !0, o++);
                    if ("enter" === t[0]) t[1].contentType && (Object.assign(n, ae(e, c)), c = n[c], a = !0);
                    else if (t[1]._container) {
                        for (o = c, r = void 0; o-- && (i = e[o], "lineEnding" === i[1].type || "lineEndingBlank" === i[1].type);) "enter" === i[0] && (r && (e[r][1].type = "lineEndingBlank"), i[1].type = "lineEnding", r = o);
                        r && (t[1].end = Object.assign({}, e[r][1].start), l = e.slice(r, c), l.unshift(t), _(e, r, c - r + 1, l))
                    }
                }
                return !a
            }

            function ae(e, n) {
                const t = e[n][1],
                    r = e[n][2];
                let o = n - 1;
                const i = [],
                    l = t._tokenizer || r.parser[t.contentType](t.start),
                    u = l.events,
                    a = [],
                    c = {};
                let s, f, p = -1,
                    d = t,
                    h = 0,
                    m = 0;
                const g = [m];
                for (; d;) {
                    for (; e[++o][1] !== d;);
                    i.push(o), d._tokenizer || (s = r.sliceStream(d), d.next || s.push(null), f && l.defineSkip(d.start), d._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(s), d._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), f = d, d = d.next
                }
                for (d = t; ++p < u.length;) "exit" === u[p][0] && "enter" === u[p - 1][0] && u[p][1].type === u[p - 1][1].type && u[p][1].start.line !== u[p][1].end.line && (m = p + 1, g.push(m), d._tokenizer = void 0, d.previous = void 0, d = d.next);
                for (l.events = [], d ? (d._tokenizer = void 0, d.previous = void 0) : g.pop(), p = g.length; p--;) {
                    const n = u.slice(g[p], g[p + 1]),
                        t = i.pop();
                    a.unshift([t, t + n.length - 1]), _(e, t, 2, n)
                }
                for (p = -1; ++p < a.length;) c[h + a[p][0]] = h + a[p][1], h += a[p][1] - a[p][0] - 1;
                return c
            }
            const ce = {
                    tokenize: function(e, n) {
                        let t;
                        return function(n) {
                            return e.enter("content"), t = e.enter("chunkContent", {
                                contentType: "content"
                            }), r(n)
                        };

                        function r(n) {
                            return null === n ? o(n) : X(n) ? e.check(se, i, o)(n) : (e.consume(n), r)
                        }

                        function o(t) {
                            return e.exit("chunkContent"), e.exit("content"), n(t)
                        }

                        function i(n) {
                            return e.consume(n), e.exit("chunkContent"), t.next = e.enter("chunkContent", {
                                contentType: "content",
                                previous: t
                            }), t = t.next, r
                        }
                    },
                    resolve: function(e) {
                        return ue(e), e
                    }
                },
                se = {
                    tokenize: function(e, n, t) {
                        const r = this;
                        return function(n) {
                            return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), te(e, o, "linePrefix")
                        };

                        function o(o) {
                            if (null === o || X(o)) return t(o);
                            const i = r.events[r.events.length - 1];
                            return !r.parser.constructs.disable.null.includes("codeIndented") && i && "linePrefix" === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? n(o) : e.interrupt(r.parser.constructs.flow, t, n)(o)
                        }
                    },
                    partial: !0
                };
            const fe = {
                tokenize: function(e) {
                    const n = this,
                        t = e.attempt(le, (function(r) {
                            if (null === r) return void e.consume(r);
                            return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), n.currentConstruct = void 0, t
                        }), e.attempt(this.parser.constructs.flowInitial, r, te(e, e.attempt(this.parser.constructs.flow, r, e.attempt(ce, r)), "linePrefix")));
                    return t;

                    function r(r) {
                        if (null !== r) return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), n.currentConstruct = void 0, t;
                        e.consume(r)
                    }
                }
            };
            const pe = {
                    resolveAll: ge()
                },
                de = me("string"),
                he = me("text");

            function me(e) {
                return {
                    tokenize: function(n) {
                        const t = this,
                            r = this.parser.constructs[e],
                            o = n.attempt(r, i, l);
                        return i;

                        function i(e) {
                            return a(e) ? o(e) : l(e)
                        }

                        function l(e) {
                            if (null !== e) return n.enter("data"), n.consume(e), u;
                            n.consume(e)
                        }

                        function u(e) {
                            return a(e) ? (n.exit("data"), o(e)) : (n.consume(e), u)
                        }

                        function a(e) {
                            if (null === e) return !0;
                            const n = r[e];
                            let o = -1;
                            if (n)
                                for (; ++o < n.length;) {
                                    const e = n[o];
                                    if (!e.previous || e.previous.call(t, t.previous)) return !0
                                }
                            return !1
                        }
                    },
                    resolveAll: ge("text" === e ? ye : void 0)
                }
            }

            function ge(e) {
                return function(n, t) {
                    let r, o = -1;
                    for (; ++o <= n.length;) void 0 === r ? n[o] && "data" === n[o][1].type && (r = o, o++) : n[o] && "data" === n[o][1].type || (o !== r + 2 && (n[r][1].end = n[o - 1][1].end, n.splice(r + 2, o - r - 2), o = r + 2), r = void 0);
                    return e ? e(n, t) : n
                }
            }

            function ye(e, n) {
                let t = 0;
                for (; ++t <= e.length;)
                    if ((t === e.length || "lineEnding" === e[t][1].type) && "data" === e[t - 1][1].type) {
                        const r = e[t - 1][1],
                            o = n.sliceStream(r);
                        let i, l = o.length,
                            u = -1,
                            a = 0;
                        for (; l--;) {
                            const e = o[l];
                            if ("string" === typeof e) {
                                for (u = e.length; 32 === e.charCodeAt(u - 1);) a++, u--;
                                if (u) break;
                                u = -1
                            } else if (-2 === e) i = !0, a++;
                            else if (-1 !== e) {
                                l++;
                                break
                            }
                        }
                        if (a) {
                            const o = {
                                type: t === e.length || i || a < 2 ? "lineSuffix" : "hardBreakTrailing",
                                start: {
                                    line: r.end.line,
                                    column: r.end.column - a,
                                    offset: r.end.offset - a,
                                    _index: r.start._index + l,
                                    _bufferIndex: l ? u : r.start._bufferIndex + u
                                },
                                end: Object.assign({}, r.end)
                            };
                            r.end = Object.assign({}, o.start), r.start.offset === r.end.offset ? Object.assign(r, o) : (e.splice(t, 0, ["enter", o, n], ["exit", o, n]), t += 2)
                        }
                        t++
                    }
                return e
            }

            function ke(e, n, t) {
                const r = [];
                let o = -1;
                for (; ++o < e.length;) {
                    const i = e[o].resolveAll;
                    i && !r.includes(i) && (n = i(n, t), r.push(i))
                }
                return n
            }

            function xe(e, n, t) {
                let r = Object.assign(t ? Object.assign({}, t) : {
                    line: 1,
                    column: 1,
                    offset: 0
                }, {
                    _index: 0,
                    _bufferIndex: -1
                });
                const o = {},
                    i = [];
                let l = [],
                    u = [],
                    a = !0;
                const c = {
                        consume: function(e) {
                            X(e) ? (r.line++, r.column = 1, r.offset += -3 === e ? 2 : 1, v()) : -1 !== e && (r.column++, r.offset++);
                            r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && (r._bufferIndex = -1, r._index++));
                            s.previous = e, a = !0
                        },
                        enter: function(e, n) {
                            const t = n || {};
                            return t.type = e, t.start = h(), s.events.push(["enter", t, s]), u.push(t), t
                        },
                        exit: function(e) {
                            const n = u.pop();
                            return n.end = h(), s.events.push(["exit", n, s]), n
                        },
                        attempt: k((function(e, n) {
                            x(e, n.from)
                        })),
                        check: k(y),
                        interrupt: k(y, {
                            interrupt: !0
                        })
                    },
                    s = {
                        previous: null,
                        code: null,
                        containerState: {},
                        events: [],
                        parser: e,
                        sliceStream: d,
                        sliceSerialize: function(e, n) {
                            return function(e, n) {
                                let t = -1;
                                const r = [];
                                let o;
                                for (; ++t < e.length;) {
                                    const i = e[t];
                                    let l;
                                    if ("string" === typeof i) l = i;
                                    else switch (i) {
                                        case -5:
                                            l = "\r";
                                            break;
                                        case -4:
                                            l = "\n";
                                            break;
                                        case -3:
                                            l = "\r\n";
                                            break;
                                        case -2:
                                            l = n ? " " : "\t";
                                            break;
                                        case -1:
                                            if (!n && o) continue;
                                            l = " ";
                                            break;
                                        default:
                                            l = String.fromCharCode(i)
                                    }
                                    o = -2 === i, r.push(l)
                                }
                                return r.join("")
                            }(d(e), n)
                        },
                        now: h,
                        defineSkip: function(e) {
                            o[e.line] = e.column, v()
                        },
                        write: function(e) {
                            if (l = N(l, e), m(), null !== l[l.length - 1]) return [];
                            return x(n, 0), s.events = ke(i, s.events, s), s.events
                        }
                    };
                let f, p = n.tokenize.call(s, c);
                return n.resolveAll && i.push(n), s;

                function d(e) {
                    return function(e, n) {
                        const t = n.start._index,
                            r = n.start._bufferIndex,
                            o = n.end._index,
                            i = n.end._bufferIndex;
                        let l;
                        if (t === o) l = [e[t].slice(r, i)];
                        else {
                            if (l = e.slice(t, o), r > -1) {
                                const e = l[0];
                                "string" === typeof e ? l[0] = e.slice(r) : l.shift()
                            }
                            i > 0 && l.push(e[o].slice(0, i))
                        }
                        return l
                    }(l, e)
                }

                function h() {
                    const {
                        line: e,
                        column: n,
                        offset: t,
                        _index: o,
                        _bufferIndex: i
                    } = r;
                    return {
                        line: e,
                        column: n,
                        offset: t,
                        _index: o,
                        _bufferIndex: i
                    }
                }

                function m() {
                    let e;
                    for (; r._index < l.length;) {
                        const n = l[r._index];
                        if ("string" === typeof n)
                            for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < n.length;) g(n.charCodeAt(r._bufferIndex));
                        else g(n)
                    }
                }

                function g(e) {
                    a = void 0, f = e, p = p(e)
                }

                function y(e, n) {
                    n.restore()
                }

                function k(e, n) {
                    return function(t, o, i) {
                        let l, f, p, d;
                        return Array.isArray(t) ? m(t) : "tokenize" in t ? m([t]) : function(e) {
                            return n;

                            function n(n) {
                                const t = null !== n && e[n],
                                    r = null !== n && e.null;
                                return m([...Array.isArray(t) ? t : t ? [t] : [], ...Array.isArray(r) ? r : r ? [r] : []])(n)
                            }
                        }(t);

                        function m(e) {
                            return l = e, f = 0, 0 === e.length ? i : g(e[f])
                        }

                        function g(e) {
                            return function(t) {
                                d = function() {
                                    const e = h(),
                                        n = s.previous,
                                        t = s.currentConstruct,
                                        o = s.events.length,
                                        i = Array.from(u);
                                    return {
                                        restore: l,
                                        from: o
                                    };

                                    function l() {
                                        r = e, s.previous = n, s.currentConstruct = t, s.events.length = o, u = i, v()
                                    }
                                }(), p = e, e.partial || (s.currentConstruct = e);
                                if (e.name && s.parser.constructs.disable.null.includes(e.name)) return k(t);
                                return e.tokenize.call(n ? Object.assign(Object.create(s), n) : s, c, y, k)(t)
                            }
                        }

                        function y(n) {
                            return a = !0, e(p, d), o
                        }

                        function k(e) {
                            return a = !0, d.restore(), ++f < l.length ? g(l[f]) : i
                        }
                    }
                }

                function x(e, n) {
                    e.resolveAll && !i.includes(e) && i.push(e), e.resolve && _(s.events, n, s.events.length - n, e.resolve(s.events.slice(n), s)), e.resolveTo && (s.events = e.resolveTo(s.events, s))
                }

                function v() {
                    r.line in o && r.column < 2 && (r.column = o[r.line], r.offset += o[r.line] - 1)
                }
            }
            const ve = {
                name: "thematicBreak",
                tokenize: function(e, n, t) {
                    let r, o = 0;
                    return function(n) {
                        return e.enter("thematicBreak"),
                            function(e) {
                                return r = e, i(e)
                            }(n)
                    };

                    function i(i) {
                        return i === r ? (e.enter("thematicBreakSequence"), l(i)) : o >= 3 && (null === i || X(i)) ? (e.exit("thematicBreak"), n(i)) : t(i)
                    }

                    function l(n) {
                        return n === r ? (e.consume(n), o++, l) : (e.exit("thematicBreakSequence"), J(n) ? te(e, i, "whitespace")(n) : i(n))
                    }
                }
            };
            const be = {
                    name: "list",
                    tokenize: function(e, n, t) {
                        const r = this,
                            o = r.events[r.events.length - 1];
                        let i = o && "linePrefix" === o[1].type ? o[2].sliceSerialize(o[1], !0).length : 0,
                            l = 0;
                        return function(n) {
                            const o = r.containerState.type || (42 === n || 43 === n || 45 === n ? "listUnordered" : "listOrdered");
                            if ("listUnordered" === o ? !r.containerState.marker || n === r.containerState.marker : Y(n)) {
                                if (r.containerState.type || (r.containerState.type = o, e.enter(o, {
                                        _container: !0
                                    })), "listUnordered" === o) return e.enter("listItemPrefix"), 42 === n || 45 === n ? e.check(ve, t, a)(n) : a(n);
                                if (!r.interrupt || 49 === n) return e.enter("listItemPrefix"), e.enter("listItemValue"), u(n)
                            }
                            return t(n)
                        };

                        function u(n) {
                            return Y(n) && ++l < 10 ? (e.consume(n), u) : (!r.interrupt || l < 2) && (r.containerState.marker ? n === r.containerState.marker : 41 === n || 46 === n) ? (e.exit("listItemValue"), a(n)) : t(n)
                        }

                        function a(n) {
                            return e.enter("listItemMarker"), e.consume(n), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || n, e.check(le, r.interrupt ? t : c, e.attempt(we, f, s))
                        }

                        function c(e) {
                            return r.containerState.initialBlankLine = !0, i++, f(e)
                        }

                        function s(n) {
                            return J(n) ? (e.enter("listItemPrefixWhitespace"), e.consume(n), e.exit("listItemPrefixWhitespace"), f) : t(n)
                        }

                        function f(t) {
                            return r.containerState.size = i + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, n(t)
                        }
                    },
                    continuation: {
                        tokenize: function(e, n, t) {
                            const r = this;
                            return r.containerState._closeFlow = void 0, e.check(le, o, i);

                            function o(t) {
                                return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, te(e, n, "listItemIndent", r.containerState.size + 1)(t)
                            }

                            function i(t) {
                                return r.containerState.furtherBlankLines || !J(t) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(t)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Se, n, l)(t))
                            }

                            function l(o) {
                                return r.containerState._closeFlow = !0, r.interrupt = void 0, te(e, e.attempt(be, n, t), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o)
                            }
                        }
                    },
                    exit: function(e) {
                        e.exit(this.containerState.type)
                    }
                },
                we = {
                    tokenize: function(e, n, t) {
                        const r = this;
                        return te(e, (function(e) {
                            const o = r.events[r.events.length - 1];
                            return !J(e) && o && "listItemPrefixWhitespace" === o[1].type ? n(e) : t(e)
                        }), "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5)
                    },
                    partial: !0
                },
                Se = {
                    tokenize: function(e, n, t) {
                        const r = this;
                        return te(e, (function(e) {
                            const o = r.events[r.events.length - 1];
                            return o && "listItemIndent" === o[1].type && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? n(e) : t(e)
                        }), "listItemIndent", r.containerState.size + 1)
                    },
                    partial: !0
                };
            const Ee = {
                name: "blockQuote",
                tokenize: function(e, n, t) {
                    const r = this;
                    return function(n) {
                        if (62 === n) {
                            const t = r.containerState;
                            return t.open || (e.enter("blockQuote", {
                                _container: !0
                            }), t.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(n), e.exit("blockQuoteMarker"), o
                        }
                        return t(n)
                    };

                    function o(t) {
                        return J(t) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(t), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), n) : (e.exit("blockQuotePrefix"), n(t))
                    }
                },
                continuation: {
                    tokenize: function(e, n, t) {
                        const r = this;
                        return function(n) {
                            if (J(n)) return te(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(n);
                            return o(n)
                        };

                        function o(r) {
                            return e.attempt(Ee, n, t)(r)
                        }
                    }
                },
                exit: function(e) {
                    e.exit("blockQuote")
                }
            };

            function Ce(e, n, t, r, o, i, l, u, a) {
                const c = a || Number.POSITIVE_INFINITY;
                let s = 0;
                return function(n) {
                    if (60 === n) return e.enter(r), e.enter(o), e.enter(i), e.consume(n), e.exit(i), f;
                    if (null === n || 32 === n || 41 === n || W(n)) return t(n);
                    return e.enter(r), e.enter(l), e.enter(u), e.enter("chunkString", {
                        contentType: "string"
                    }), h(n)
                };

                function f(t) {
                    return 62 === t ? (e.enter(i), e.consume(t), e.exit(i), e.exit(o), e.exit(r), n) : (e.enter(u), e.enter("chunkString", {
                        contentType: "string"
                    }), p(t))
                }

                function p(n) {
                    return 62 === n ? (e.exit("chunkString"), e.exit(u), f(n)) : null === n || 60 === n || X(n) ? t(n) : (e.consume(n), 92 === n ? d : p)
                }

                function d(n) {
                    return 60 === n || 62 === n || 92 === n ? (e.consume(n), p) : p(n)
                }

                function h(o) {
                    return s || null !== o && 41 !== o && !Z(o) ? s < c && 40 === o ? (e.consume(o), s++, h) : 41 === o ? (e.consume(o), s--, h) : null === o || 32 === o || 40 === o || W(o) ? t(o) : (e.consume(o), 92 === o ? m : h) : (e.exit("chunkString"), e.exit(u), e.exit(l), e.exit(r), n(o))
                }

                function m(n) {
                    return 40 === n || 41 === n || 92 === n ? (e.consume(n), h) : h(n)
                }
            }

            function Ae(e, n, t, r, o, i) {
                const l = this;
                let u, a = 0;
                return function(n) {
                    return e.enter(r), e.enter(o), e.consume(n), e.exit(o), e.enter(i), c
                };

                function c(f) {
                    return a > 999 || null === f || 91 === f || 93 === f && !u || 94 === f && !a && "_hiddenFootnoteSupport" in l.parser.constructs ? t(f) : 93 === f ? (e.exit(i), e.enter(o), e.consume(f), e.exit(o), e.exit(r), n) : X(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), c) : (e.enter("chunkString", {
                        contentType: "string"
                    }), s(f))
                }

                function s(n) {
                    return null === n || 91 === n || 93 === n || X(n) || a++ > 999 ? (e.exit("chunkString"), c(n)) : (e.consume(n), u || (u = !J(n)), 92 === n ? f : s)
                }

                function f(n) {
                    return 91 === n || 92 === n || 93 === n ? (e.consume(n), a++, s) : s(n)
                }
            }

            function Fe(e, n, t, r, o, i) {
                let l;
                return function(n) {
                    if (34 === n || 39 === n || 40 === n) return e.enter(r), e.enter(o), e.consume(n), e.exit(o), l = 40 === n ? 41 : n, u;
                    return t(n)
                };

                function u(t) {
                    return t === l ? (e.enter(o), e.consume(t), e.exit(o), e.exit(r), n) : (e.enter(i), a(t))
                }

                function a(n) {
                    return n === l ? (e.exit(i), u(l)) : null === n ? t(n) : X(n) ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), te(e, a, "linePrefix")) : (e.enter("chunkString", {
                        contentType: "string"
                    }), c(n))
                }

                function c(n) {
                    return n === l || null === n || X(n) ? (e.exit("chunkString"), a(n)) : (e.consume(n), 92 === n ? s : c)
                }

                function s(n) {
                    return n === l || 92 === n ? (e.consume(n), c) : c(n)
                }
            }

            function Te(e, n) {
                let t;
                return function r(o) {
                    if (X(o)) return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), t = !0, r;
                    if (J(o)) return te(e, r, t ? "linePrefix" : "lineSuffix")(o);
                    return n(o)
                }
            }

            function Pe(e) {
                return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
            }
            const De = {
                    name: "definition",
                    tokenize: function(e, n, t) {
                        const r = this;
                        let o;
                        return function(n) {
                            return e.enter("definition"),
                                function(n) {
                                    return Ae.call(r, e, i, t, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(n)
                                }(n)
                        };

                        function i(n) {
                            return o = Pe(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), 58 === n ? (e.enter("definitionMarker"), e.consume(n), e.exit("definitionMarker"), l) : t(n)
                        }

                        function l(n) {
                            return Z(n) ? Te(e, u)(n) : u(n)
                        }

                        function u(n) {
                            return Ce(e, a, t, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(n)
                        }

                        function a(n) {
                            return e.attempt(Oe, c, c)(n)
                        }

                        function c(n) {
                            return J(n) ? te(e, s, "whitespace")(n) : s(n)
                        }

                        function s(i) {
                            return null === i || X(i) ? (e.exit("definition"), r.parser.defined.push(o), n(i)) : t(i)
                        }
                    }
                },
                Oe = {
                    tokenize: function(e, n, t) {
                        return function(n) {
                            return Z(n) ? Te(e, r)(n) : t(n)
                        };

                        function r(n) {
                            return Fe(e, o, t, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(n)
                        }

                        function o(n) {
                            return J(n) ? te(e, i, "whitespace")(n) : i(n)
                        }

                        function i(e) {
                            return null === e || X(e) ? n(e) : t(e)
                        }
                    },
                    partial: !0
                };
            const Ie = {
                    name: "codeIndented",
                    tokenize: function(e, n, t) {
                        const r = this;
                        return function(n) {
                            return e.enter("codeIndented"), te(e, o, "linePrefix", 5)(n)
                        };

                        function o(e) {
                            const n = r.events[r.events.length - 1];
                            return n && "linePrefix" === n[1].type && n[2].sliceSerialize(n[1], !0).length >= 4 ? i(e) : t(e)
                        }

                        function i(n) {
                            return null === n ? u(n) : X(n) ? e.attempt(Le, i, u)(n) : (e.enter("codeFlowValue"), l(n))
                        }

                        function l(n) {
                            return null === n || X(n) ? (e.exit("codeFlowValue"), i(n)) : (e.consume(n), l)
                        }

                        function u(t) {
                            return e.exit("codeIndented"), n(t)
                        }
                    }
                },
                Le = {
                    tokenize: function(e, n, t) {
                        const r = this;
                        return o;

                        function o(n) {
                            return r.parser.lazy[r.now().line] ? t(n) : X(n) ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), o) : te(e, i, "linePrefix", 5)(n)
                        }

                        function i(e) {
                            const i = r.events[r.events.length - 1];
                            return i && "linePrefix" === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? n(e) : X(e) ? o(e) : t(e)
                        }
                    },
                    partial: !0
                };
            const ze = {
                name: "headingAtx",
                tokenize: function(e, n, t) {
                    let r = 0;
                    return function(n) {
                        return e.enter("atxHeading"),
                            function(n) {
                                return e.enter("atxHeadingSequence"), o(n)
                            }(n)
                    };

                    function o(n) {
                        return 35 === n && r++ < 6 ? (e.consume(n), o) : null === n || Z(n) ? (e.exit("atxHeadingSequence"), i(n)) : t(n)
                    }

                    function i(t) {
                        return 35 === t ? (e.enter("atxHeadingSequence"), l(t)) : null === t || X(t) ? (e.exit("atxHeading"), n(t)) : J(t) ? te(e, i, "whitespace")(t) : (e.enter("atxHeadingText"), u(t))
                    }

                    function l(n) {
                        return 35 === n ? (e.consume(n), l) : (e.exit("atxHeadingSequence"), i(n))
                    }

                    function u(n) {
                        return null === n || 35 === n || Z(n) ? (e.exit("atxHeadingText"), i(n)) : (e.consume(n), u)
                    }
                },
                resolve: function(e, n) {
                    let t, r, o = e.length - 2,
                        i = 3;
                    "whitespace" === e[i][1].type && (i += 2);
                    o - 2 > i && "whitespace" === e[o][1].type && (o -= 2);
                    "atxHeadingSequence" === e[o][1].type && (i === o - 1 || o - 4 > i && "whitespace" === e[o - 2][1].type) && (o -= i + 1 === o ? 2 : 4);
                    o > i && (t = {
                        type: "atxHeadingText",
                        start: e[i][1].start,
                        end: e[o][1].end
                    }, r = {
                        type: "chunkText",
                        start: e[i][1].start,
                        end: e[o][1].end,
                        contentType: "text"
                    }, _(e, i, o - i + 1, [
                        ["enter", t, n],
                        ["enter", r, n],
                        ["exit", r, n],
                        ["exit", t, n]
                    ]));
                    return e
                }
            };
            const Me = {
                name: "setextUnderline",
                tokenize: function(e, n, t) {
                    const r = this;
                    let o;
                    return function(n) {
                        let l, u = r.events.length;
                        for (; u--;)
                            if ("lineEnding" !== r.events[u][1].type && "linePrefix" !== r.events[u][1].type && "content" !== r.events[u][1].type) {
                                l = "paragraph" === r.events[u][1].type;
                                break
                            }
                        if (!r.parser.lazy[r.now().line] && (r.interrupt || l)) return e.enter("setextHeadingLine"), o = n,
                            function(n) {
                                return e.enter("setextHeadingLineSequence"), i(n)
                            }(n);
                        return t(n)
                    };

                    function i(n) {
                        return n === o ? (e.consume(n), i) : (e.exit("setextHeadingLineSequence"), J(n) ? te(e, l, "lineSuffix")(n) : l(n))
                    }

                    function l(r) {
                        return null === r || X(r) ? (e.exit("setextHeadingLine"), n(r)) : t(r)
                    }
                },
                resolveTo: function(e, n) {
                    let t, r, o, i = e.length;
                    for (; i--;)
                        if ("enter" === e[i][0]) {
                            if ("content" === e[i][1].type) {
                                t = i;
                                break
                            }
                            "paragraph" === e[i][1].type && (r = i)
                        } else "content" === e[i][1].type && e.splice(i, 1), o || "definition" !== e[i][1].type || (o = i);
                    const l = {
                        type: "setextHeading",
                        start: Object.assign({}, e[r][1].start),
                        end: Object.assign({}, e[e.length - 1][1].end)
                    };
                    e[r][1].type = "setextHeadingText", o ? (e.splice(r, 0, ["enter", l, n]), e.splice(o + 1, 0, ["exit", e[t][1], n]), e[t][1].end = Object.assign({}, e[o][1].end)) : e[t][1] = l;
                    return e.push(["exit", l, n]), e
                }
            };
            const Re = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
                Be = ["pre", "script", "style", "textarea"],
                _e = {
                    name: "htmlFlow",
                    tokenize: function(e, n, t) {
                        const r = this;
                        let o, i, l, u, a;
                        return function(n) {
                            return function(n) {
                                return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(n), c
                            }(n)
                        };

                        function c(u) {
                            return 33 === u ? (e.consume(u), s) : 47 === u ? (e.consume(u), i = !0, d) : 63 === u ? (e.consume(u), o = 3, r.interrupt ? n : z) : V(u) ? (e.consume(u), l = String.fromCharCode(u), h) : t(u)
                        }

                        function s(i) {
                            return 45 === i ? (e.consume(i), o = 2, f) : 91 === i ? (e.consume(i), o = 5, u = 0, p) : V(i) ? (e.consume(i), o = 4, r.interrupt ? n : z) : t(i)
                        }

                        function f(o) {
                            return 45 === o ? (e.consume(o), r.interrupt ? n : z) : t(o)
                        }

                        function p(o) {
                            const i = "CDATA[";
                            return o === i.charCodeAt(u++) ? (e.consume(o), u === i.length ? r.interrupt ? n : A : p) : t(o)
                        }

                        function d(n) {
                            return V(n) ? (e.consume(n), l = String.fromCharCode(n), h) : t(n)
                        }

                        function h(u) {
                            if (null === u || 47 === u || 62 === u || Z(u)) {
                                const a = 47 === u,
                                    c = l.toLowerCase();
                                return a || i || !Be.includes(c) ? Re.includes(l.toLowerCase()) ? (o = 6, a ? (e.consume(u), m) : r.interrupt ? n(u) : A(u)) : (o = 7, r.interrupt && !r.parser.lazy[r.now().line] ? t(u) : i ? g(u) : y(u)) : (o = 1, r.interrupt ? n(u) : A(u))
                            }
                            return 45 === u || q(u) ? (e.consume(u), l += String.fromCharCode(u), h) : t(u)
                        }

                        function m(o) {
                            return 62 === o ? (e.consume(o), r.interrupt ? n : A) : t(o)
                        }

                        function g(n) {
                            return J(n) ? (e.consume(n), g) : E(n)
                        }

                        function y(n) {
                            return 47 === n ? (e.consume(n), E) : 58 === n || 95 === n || V(n) ? (e.consume(n), k) : J(n) ? (e.consume(n), y) : E(n)
                        }

                        function k(n) {
                            return 45 === n || 46 === n || 58 === n || 95 === n || q(n) ? (e.consume(n), k) : x(n)
                        }

                        function x(n) {
                            return 61 === n ? (e.consume(n), v) : J(n) ? (e.consume(n), x) : y(n)
                        }

                        function v(n) {
                            return null === n || 60 === n || 61 === n || 62 === n || 96 === n ? t(n) : 34 === n || 39 === n ? (e.consume(n), a = n, b) : J(n) ? (e.consume(n), v) : w(n)
                        }

                        function b(n) {
                            return n === a ? (e.consume(n), a = null, S) : null === n || X(n) ? t(n) : (e.consume(n), b)
                        }

                        function w(n) {
                            return null === n || 34 === n || 39 === n || 47 === n || 60 === n || 61 === n || 62 === n || 96 === n || Z(n) ? x(n) : (e.consume(n), w)
                        }

                        function S(e) {
                            return 47 === e || 62 === e || J(e) ? y(e) : t(e)
                        }

                        function E(n) {
                            return 62 === n ? (e.consume(n), C) : t(n)
                        }

                        function C(n) {
                            return null === n || X(n) ? A(n) : J(n) ? (e.consume(n), C) : t(n)
                        }

                        function A(n) {
                            return 45 === n && 2 === o ? (e.consume(n), D) : 60 === n && 1 === o ? (e.consume(n), O) : 62 === n && 4 === o ? (e.consume(n), M) : 63 === n && 3 === o ? (e.consume(n), z) : 93 === n && 5 === o ? (e.consume(n), L) : !X(n) || 6 !== o && 7 !== o ? null === n || X(n) ? (e.exit("htmlFlowData"), F(n)) : (e.consume(n), A) : (e.exit("htmlFlowData"), e.check(Ne, R, F)(n))
                        }

                        function F(n) {
                            return e.check(je, T, R)(n)
                        }

                        function T(n) {
                            return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), P
                        }

                        function P(n) {
                            return null === n || X(n) ? F(n) : (e.enter("htmlFlowData"), A(n))
                        }

                        function D(n) {
                            return 45 === n ? (e.consume(n), z) : A(n)
                        }

                        function O(n) {
                            return 47 === n ? (e.consume(n), l = "", I) : A(n)
                        }

                        function I(n) {
                            if (62 === n) {
                                const t = l.toLowerCase();
                                return Be.includes(t) ? (e.consume(n), M) : A(n)
                            }
                            return V(n) && l.length < 8 ? (e.consume(n), l += String.fromCharCode(n), I) : A(n)
                        }

                        function L(n) {
                            return 93 === n ? (e.consume(n), z) : A(n)
                        }

                        function z(n) {
                            return 62 === n ? (e.consume(n), M) : 45 === n && 2 === o ? (e.consume(n), z) : A(n)
                        }

                        function M(n) {
                            return null === n || X(n) ? (e.exit("htmlFlowData"), R(n)) : (e.consume(n), M)
                        }

                        function R(t) {
                            return e.exit("htmlFlow"), n(t)
                        }
                    },
                    resolveTo: function(e) {
                        let n = e.length;
                        for (; n-- && ("enter" !== e[n][0] || "htmlFlow" !== e[n][1].type););
                        n > 1 && "linePrefix" === e[n - 2][1].type && (e[n][1].start = e[n - 2][1].start, e[n + 1][1].start = e[n - 2][1].start, e.splice(n - 2, 2));
                        return e
                    },
                    concrete: !0
                },
                Ne = {
                    tokenize: function(e, n, t) {
                        return function(r) {
                            return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(le, n, t)
                        }
                    },
                    partial: !0
                },
                je = {
                    tokenize: function(e, n, t) {
                        const r = this;
                        return function(n) {
                            if (X(n)) return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), o;
                            return t(n)
                        };

                        function o(e) {
                            return r.parser.lazy[r.now().line] ? t(e) : n(e)
                        }
                    },
                    partial: !0
                };
            const He = {
                    tokenize: function(e, n, t) {
                        const r = this;
                        return function(n) {
                            if (null === n) return t(n);
                            return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), o
                        };

                        function o(e) {
                            return r.parser.lazy[r.now().line] ? t(e) : n(e)
                        }
                    },
                    partial: !0
                },
                Ue = {
                    name: "codeFenced",
                    tokenize: function(e, n, t) {
                        const r = this,
                            o = {
                                tokenize: function(e, n, t) {
                                    let o = 0;
                                    return l;

                                    function l(n) {
                                        return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), a
                                    }

                                    function a(n) {
                                        return e.enter("codeFencedFence"), J(n) ? te(e, c, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(n) : c(n)
                                    }

                                    function c(n) {
                                        return n === i ? (e.enter("codeFencedFenceSequence"), s(n)) : t(n)
                                    }

                                    function s(n) {
                                        return n === i ? (o++, e.consume(n), s) : o >= u ? (e.exit("codeFencedFenceSequence"), J(n) ? te(e, f, "whitespace")(n) : f(n)) : t(n)
                                    }

                                    function f(r) {
                                        return null === r || X(r) ? (e.exit("codeFencedFence"), n(r)) : t(r)
                                    }
                                },
                                partial: !0
                            };
                        let i, l = 0,
                            u = 0;
                        return function(n) {
                            return function(n) {
                                const t = r.events[r.events.length - 1];
                                return l = t && "linePrefix" === t[1].type ? t[2].sliceSerialize(t[1], !0).length : 0, i = n, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), a(n)
                            }(n)
                        };

                        function a(n) {
                            return n === i ? (u++, e.consume(n), a) : u < 3 ? t(n) : (e.exit("codeFencedFenceSequence"), J(n) ? te(e, c, "whitespace")(n) : c(n))
                        }

                        function c(t) {
                            return null === t || X(t) ? (e.exit("codeFencedFence"), r.interrupt ? n(t) : e.check(He, d, k)(t)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
                                contentType: "string"
                            }), s(t))
                        }

                        function s(n) {
                            return null === n || X(n) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(n)) : J(n) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), te(e, f, "whitespace")(n)) : 96 === n && n === i ? t(n) : (e.consume(n), s)
                        }

                        function f(n) {
                            return null === n || X(n) ? c(n) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
                                contentType: "string"
                            }), p(n))
                        }

                        function p(n) {
                            return null === n || X(n) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(n)) : 96 === n && n === i ? t(n) : (e.consume(n), p)
                        }

                        function d(n) {
                            return e.attempt(o, k, h)(n)
                        }

                        function h(n) {
                            return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), m
                        }

                        function m(n) {
                            return l > 0 && J(n) ? te(e, g, "linePrefix", l + 1)(n) : g(n)
                        }

                        function g(n) {
                            return null === n || X(n) ? e.check(He, d, k)(n) : (e.enter("codeFlowValue"), y(n))
                        }

                        function y(n) {
                            return null === n || X(n) ? (e.exit("codeFlowValue"), g(n)) : (e.consume(n), y)
                        }

                        function k(t) {
                            return e.exit("codeFenced"), n(t)
                        }
                    },
                    concrete: !0
                };
            const Ve = document.createElement("i");

            function qe(e) {
                const n = "&" + e + ";";
                Ve.innerHTML = n;
                const t = Ve.textContent;
                return (59 !== t.charCodeAt(t.length - 1) || "semi" === e) && (t !== n && t)
            }
            const $e = {
                name: "characterReference",
                tokenize: function(e, n, t) {
                    const r = this;
                    let o, i, l = 0;
                    return function(n) {
                        return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(n), e.exit("characterReferenceMarker"), u
                    };

                    function u(n) {
                        return 35 === n ? (e.enter("characterReferenceMarkerNumeric"), e.consume(n), e.exit("characterReferenceMarkerNumeric"), a) : (e.enter("characterReferenceValue"), o = 31, i = q, c(n))
                    }

                    function a(n) {
                        return 88 === n || 120 === n ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(n), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, i = Q, c) : (e.enter("characterReferenceValue"), o = 7, i = Y, c(n))
                    }

                    function c(u) {
                        if (59 === u && l) {
                            const o = e.exit("characterReferenceValue");
                            return i !== q || qe(r.sliceSerialize(o)) ? (e.enter("characterReferenceMarker"), e.consume(u), e.exit("characterReferenceMarker"), e.exit("characterReference"), n) : t(u)
                        }
                        return i(u) && l++ < o ? (e.consume(u), c) : t(u)
                    }
                }
            };
            const We = {
                name: "characterEscape",
                tokenize: function(e, n, t) {
                    return function(n) {
                        return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(n), e.exit("escapeMarker"), r
                    };

                    function r(r) {
                        return K(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), n) : t(r)
                    }
                }
            };
            const Ye = {
                name: "lineEnding",
                tokenize: function(e, n) {
                    return function(t) {
                        return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), te(e, n, "linePrefix")
                    }
                }
            };
            const Qe = {
                    name: "labelEnd",
                    tokenize: function(e, n, t) {
                        const r = this;
                        let o, i, l = r.events.length;
                        for (; l--;)
                            if (("labelImage" === r.events[l][1].type || "labelLink" === r.events[l][1].type) && !r.events[l][1]._balanced) {
                                o = r.events[l][1];
                                break
                            }
                        return function(n) {
                            if (!o) return t(n);
                            if (o._inactive) return s(n);
                            return i = r.parser.defined.includes(Pe(r.sliceSerialize({
                                start: o.end,
                                end: r.now()
                            }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(n), e.exit("labelMarker"), e.exit("labelEnd"), u
                        };

                        function u(n) {
                            return 40 === n ? e.attempt(Ke, c, i ? c : s)(n) : 91 === n ? e.attempt(Xe, c, i ? a : s)(n) : i ? c(n) : s(n)
                        }

                        function a(n) {
                            return e.attempt(Ze, c, s)(n)
                        }

                        function c(e) {
                            return n(e)
                        }

                        function s(e) {
                            return o._balanced = !0, t(e)
                        }
                    },
                    resolveTo: function(e, n) {
                        let t, r, o, i, l = e.length,
                            u = 0;
                        for (; l--;)
                            if (t = e[l][1], r) {
                                if ("link" === t.type || "labelLink" === t.type && t._inactive) break;
                                "enter" === e[l][0] && "labelLink" === t.type && (t._inactive = !0)
                            } else if (o) {
                            if ("enter" === e[l][0] && ("labelImage" === t.type || "labelLink" === t.type) && !t._balanced && (r = l, "labelLink" !== t.type)) {
                                u = 2;
                                break
                            }
                        } else "labelEnd" === t.type && (o = l);
                        const a = {
                                type: "labelLink" === e[r][1].type ? "link" : "image",
                                start: Object.assign({}, e[r][1].start),
                                end: Object.assign({}, e[e.length - 1][1].end)
                            },
                            c = {
                                type: "label",
                                start: Object.assign({}, e[r][1].start),
                                end: Object.assign({}, e[o][1].end)
                            },
                            s = {
                                type: "labelText",
                                start: Object.assign({}, e[r + u + 2][1].end),
                                end: Object.assign({}, e[o - 2][1].start)
                            };
                        return i = [
                            ["enter", a, n],
                            ["enter", c, n]
                        ], i = N(i, e.slice(r + 1, r + u + 3)), i = N(i, [
                            ["enter", s, n]
                        ]), i = N(i, ke(n.parser.constructs.insideSpan.null, e.slice(r + u + 4, o - 3), n)), i = N(i, [
                            ["exit", s, n], e[o - 2], e[o - 1],
                            ["exit", c, n]
                        ]), i = N(i, e.slice(o + 1)), i = N(i, [
                            ["exit", a, n]
                        ]), _(e, r, e.length, i), e
                    },
                    resolveAll: function(e) {
                        let n = -1;
                        for (; ++n < e.length;) {
                            const t = e[n][1];
                            "labelImage" !== t.type && "labelLink" !== t.type && "labelEnd" !== t.type || (e.splice(n + 1, "labelImage" === t.type ? 4 : 2), t.type = "data", n++)
                        }
                        return e
                    }
                },
                Ke = {
                    tokenize: function(e, n, t) {
                        return function(n) {
                            return e.enter("resource"), e.enter("resourceMarker"), e.consume(n), e.exit("resourceMarker"), r
                        };

                        function r(n) {
                            return Z(n) ? Te(e, o)(n) : o(n)
                        }

                        function o(n) {
                            return 41 === n ? c(n) : Ce(e, i, l, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(n)
                        }

                        function i(n) {
                            return Z(n) ? Te(e, u)(n) : c(n)
                        }

                        function l(e) {
                            return t(e)
                        }

                        function u(n) {
                            return 34 === n || 39 === n || 40 === n ? Fe(e, a, t, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(n) : c(n)
                        }

                        function a(n) {
                            return Z(n) ? Te(e, c)(n) : c(n)
                        }

                        function c(r) {
                            return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), n) : t(r)
                        }
                    }
                },
                Xe = {
                    tokenize: function(e, n, t) {
                        const r = this;
                        return function(n) {
                            return Ae.call(r, e, o, i, "reference", "referenceMarker", "referenceString")(n)
                        };

                        function o(e) {
                            return r.parser.defined.includes(Pe(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? n(e) : t(e)
                        }

                        function i(e) {
                            return t(e)
                        }
                    }
                },
                Ze = {
                    tokenize: function(e, n, t) {
                        return function(n) {
                            return e.enter("reference"), e.enter("referenceMarker"), e.consume(n), e.exit("referenceMarker"), r
                        };

                        function r(r) {
                            return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), n) : t(r)
                        }
                    }
                };
            const Je = {
                name: "labelStartImage",
                tokenize: function(e, n, t) {
                    const r = this;
                    return function(n) {
                        return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(n), e.exit("labelImageMarker"), o
                    };

                    function o(n) {
                        return 91 === n ? (e.enter("labelMarker"), e.consume(n), e.exit("labelMarker"), e.exit("labelImage"), i) : t(n)
                    }

                    function i(e) {
                        return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? t(e) : n(e)
                    }
                },
                resolveAll: Qe.resolveAll
            };

            function Ge(e) {
                return null === e || Z(e) || ee(e) ? 1 : G(e) ? 2 : void 0
            }
            const en = {
                name: "attention",
                tokenize: function(e, n) {
                    const t = this.parser.constructs.attentionMarkers.null,
                        r = this.previous,
                        o = Ge(r);
                    let i;
                    return function(n) {
                        return i = n, e.enter("attentionSequence"), l(n)
                    };

                    function l(u) {
                        if (u === i) return e.consume(u), l;
                        const a = e.exit("attentionSequence"),
                            c = Ge(u),
                            s = !c || 2 === c && o || t.includes(u),
                            f = !o || 2 === o && c || t.includes(r);
                        return a._open = Boolean(42 === i ? s : s && (o || !f)), a._close = Boolean(42 === i ? f : f && (c || !s)), n(u)
                    }
                },
                resolveAll: function(e, n) {
                    let t, r, o, i, l, u, a, c, s = -1;
                    for (; ++s < e.length;)
                        if ("enter" === e[s][0] && "attentionSequence" === e[s][1].type && e[s][1]._close)
                            for (t = s; t--;)
                                if ("exit" === e[t][0] && "attentionSequence" === e[t][1].type && e[t][1]._open && n.sliceSerialize(e[t][1]).charCodeAt(0) === n.sliceSerialize(e[s][1]).charCodeAt(0)) {
                                    if ((e[t][1]._close || e[s][1]._open) && (e[s][1].end.offset - e[s][1].start.offset) % 3 && !((e[t][1].end.offset - e[t][1].start.offset + e[s][1].end.offset - e[s][1].start.offset) % 3)) continue;
                                    u = e[t][1].end.offset - e[t][1].start.offset > 1 && e[s][1].end.offset - e[s][1].start.offset > 1 ? 2 : 1;
                                    const f = Object.assign({}, e[t][1].end),
                                        p = Object.assign({}, e[s][1].start);
                                    nn(f, -u), nn(p, u), i = {
                                        type: u > 1 ? "strongSequence" : "emphasisSequence",
                                        start: f,
                                        end: Object.assign({}, e[t][1].end)
                                    }, l = {
                                        type: u > 1 ? "strongSequence" : "emphasisSequence",
                                        start: Object.assign({}, e[s][1].start),
                                        end: p
                                    }, o = {
                                        type: u > 1 ? "strongText" : "emphasisText",
                                        start: Object.assign({}, e[t][1].end),
                                        end: Object.assign({}, e[s][1].start)
                                    }, r = {
                                        type: u > 1 ? "strong" : "emphasis",
                                        start: Object.assign({}, i.start),
                                        end: Object.assign({}, l.end)
                                    }, e[t][1].end = Object.assign({}, i.start), e[s][1].start = Object.assign({}, l.end), a = [], e[t][1].end.offset - e[t][1].start.offset && (a = N(a, [
                                        ["enter", e[t][1], n],
                                        ["exit", e[t][1], n]
                                    ])), a = N(a, [
                                        ["enter", r, n],
                                        ["enter", i, n],
                                        ["exit", i, n],
                                        ["enter", o, n]
                                    ]), a = N(a, ke(n.parser.constructs.insideSpan.null, e.slice(t + 1, s), n)), a = N(a, [
                                        ["exit", o, n],
                                        ["enter", l, n],
                                        ["exit", l, n],
                                        ["exit", r, n]
                                    ]), e[s][1].end.offset - e[s][1].start.offset ? (c = 2, a = N(a, [
                                        ["enter", e[s][1], n],
                                        ["exit", e[s][1], n]
                                    ])) : c = 0, _(e, t - 1, s - t + 3, a), s = t + a.length - c - 2;
                                    break
                                }
                    s = -1;
                    for (; ++s < e.length;) "attentionSequence" === e[s][1].type && (e[s][1].type = "data");
                    return e
                }
            };

            function nn(e, n) {
                e.column += n, e.offset += n, e._bufferIndex += n
            }
            const tn = {
                name: "autolink",
                tokenize: function(e, n, t) {
                    let r = 0;
                    return function(n) {
                        return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o
                    };

                    function o(n) {
                        return V(n) ? (e.consume(n), i) : a(n)
                    }

                    function i(e) {
                        return 43 === e || 45 === e || 46 === e || q(e) ? (r = 1, l(e)) : a(e)
                    }

                    function l(n) {
                        return 58 === n ? (e.consume(n), r = 0, u) : (43 === n || 45 === n || 46 === n || q(n)) && r++ < 32 ? (e.consume(n), l) : (r = 0, a(n))
                    }

                    function u(r) {
                        return 62 === r ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), n) : null === r || 32 === r || 60 === r || W(r) ? t(r) : (e.consume(r), u)
                    }

                    function a(n) {
                        return 64 === n ? (e.consume(n), c) : $(n) ? (e.consume(n), a) : t(n)
                    }

                    function c(e) {
                        return q(e) ? s(e) : t(e)
                    }

                    function s(t) {
                        return 46 === t ? (e.consume(t), r = 0, c) : 62 === t ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.exit("autolink"), n) : f(t)
                    }

                    function f(n) {
                        if ((45 === n || q(n)) && r++ < 63) {
                            const t = 45 === n ? f : s;
                            return e.consume(n), t
                        }
                        return t(n)
                    }
                }
            };
            const rn = {
                name: "htmlText",
                tokenize: function(e, n, t) {
                    const r = this;
                    let o, i, l;
                    return function(n) {
                        return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(n), u
                    };

                    function u(n) {
                        return 33 === n ? (e.consume(n), a) : 47 === n ? (e.consume(n), v) : 63 === n ? (e.consume(n), k) : V(n) ? (e.consume(n), S) : t(n)
                    }

                    function a(n) {
                        return 45 === n ? (e.consume(n), c) : 91 === n ? (e.consume(n), i = 0, d) : V(n) ? (e.consume(n), y) : t(n)
                    }

                    function c(n) {
                        return 45 === n ? (e.consume(n), p) : t(n)
                    }

                    function s(n) {
                        return null === n ? t(n) : 45 === n ? (e.consume(n), f) : X(n) ? (l = s, I(n)) : (e.consume(n), s)
                    }

                    function f(n) {
                        return 45 === n ? (e.consume(n), p) : s(n)
                    }

                    function p(e) {
                        return 62 === e ? O(e) : 45 === e ? f(e) : s(e)
                    }

                    function d(n) {
                        const r = "CDATA[";
                        return n === r.charCodeAt(i++) ? (e.consume(n), i === r.length ? h : d) : t(n)
                    }

                    function h(n) {
                        return null === n ? t(n) : 93 === n ? (e.consume(n), m) : X(n) ? (l = h, I(n)) : (e.consume(n), h)
                    }

                    function m(n) {
                        return 93 === n ? (e.consume(n), g) : h(n)
                    }

                    function g(n) {
                        return 62 === n ? O(n) : 93 === n ? (e.consume(n), g) : h(n)
                    }

                    function y(n) {
                        return null === n || 62 === n ? O(n) : X(n) ? (l = y, I(n)) : (e.consume(n), y)
                    }

                    function k(n) {
                        return null === n ? t(n) : 63 === n ? (e.consume(n), x) : X(n) ? (l = k, I(n)) : (e.consume(n), k)
                    }

                    function x(e) {
                        return 62 === e ? O(e) : k(e)
                    }

                    function v(n) {
                        return V(n) ? (e.consume(n), b) : t(n)
                    }

                    function b(n) {
                        return 45 === n || q(n) ? (e.consume(n), b) : w(n)
                    }

                    function w(n) {
                        return X(n) ? (l = w, I(n)) : J(n) ? (e.consume(n), w) : O(n)
                    }

                    function S(n) {
                        return 45 === n || q(n) ? (e.consume(n), S) : 47 === n || 62 === n || Z(n) ? E(n) : t(n)
                    }

                    function E(n) {
                        return 47 === n ? (e.consume(n), O) : 58 === n || 95 === n || V(n) ? (e.consume(n), C) : X(n) ? (l = E, I(n)) : J(n) ? (e.consume(n), E) : O(n)
                    }

                    function C(n) {
                        return 45 === n || 46 === n || 58 === n || 95 === n || q(n) ? (e.consume(n), C) : A(n)
                    }

                    function A(n) {
                        return 61 === n ? (e.consume(n), F) : X(n) ? (l = A, I(n)) : J(n) ? (e.consume(n), A) : E(n)
                    }

                    function F(n) {
                        return null === n || 60 === n || 61 === n || 62 === n || 96 === n ? t(n) : 34 === n || 39 === n ? (e.consume(n), o = n, T) : X(n) ? (l = F, I(n)) : J(n) ? (e.consume(n), F) : (e.consume(n), P)
                    }

                    function T(n) {
                        return n === o ? (e.consume(n), o = void 0, D) : null === n ? t(n) : X(n) ? (l = T, I(n)) : (e.consume(n), T)
                    }

                    function P(n) {
                        return null === n || 34 === n || 39 === n || 60 === n || 61 === n || 96 === n ? t(n) : 47 === n || 62 === n || Z(n) ? E(n) : (e.consume(n), P)
                    }

                    function D(e) {
                        return 47 === e || 62 === e || Z(e) ? E(e) : t(e)
                    }

                    function O(r) {
                        return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), n) : t(r)
                    }

                    function I(n) {
                        return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), L
                    }

                    function L(n) {
                        return J(n) ? te(e, z, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(n) : z(n)
                    }

                    function z(n) {
                        return e.enter("htmlTextData"), l(n)
                    }
                }
            };
            const on = {
                name: "labelStartLink",
                tokenize: function(e, n, t) {
                    const r = this;
                    return function(n) {
                        return e.enter("labelLink"), e.enter("labelMarker"), e.consume(n), e.exit("labelMarker"), e.exit("labelLink"), o
                    };

                    function o(e) {
                        return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? t(e) : n(e)
                    }
                },
                resolveAll: Qe.resolveAll
            };
            const ln = {
                name: "hardBreakEscape",
                tokenize: function(e, n, t) {
                    return function(n) {
                        return e.enter("hardBreakEscape"), e.consume(n), r
                    };

                    function r(r) {
                        return X(r) ? (e.exit("hardBreakEscape"), n(r)) : t(r)
                    }
                }
            };
            const un = {
                name: "codeText",
                tokenize: function(e, n, t) {
                    let r, o, i = 0;
                    return function(n) {
                        return e.enter("codeText"), e.enter("codeTextSequence"), l(n)
                    };

                    function l(n) {
                        return 96 === n ? (e.consume(n), i++, l) : (e.exit("codeTextSequence"), u(n))
                    }

                    function u(n) {
                        return null === n ? t(n) : 32 === n ? (e.enter("space"), e.consume(n), e.exit("space"), u) : 96 === n ? (o = e.enter("codeTextSequence"), r = 0, c(n)) : X(n) ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), u) : (e.enter("codeTextData"), a(n))
                    }

                    function a(n) {
                        return null === n || 32 === n || 96 === n || X(n) ? (e.exit("codeTextData"), u(n)) : (e.consume(n), a)
                    }

                    function c(t) {
                        return 96 === t ? (e.consume(t), r++, c) : r === i ? (e.exit("codeTextSequence"), e.exit("codeText"), n(t)) : (o.type = "codeTextData", a(t))
                    }
                },
                resolve: function(e) {
                    let n, t, r = e.length - 4,
                        o = 3;
                    if (("lineEnding" === e[o][1].type || "space" === e[o][1].type) && ("lineEnding" === e[r][1].type || "space" === e[r][1].type))
                        for (n = o; ++n < r;)
                            if ("codeTextData" === e[n][1].type) {
                                e[o][1].type = "codeTextPadding", e[r][1].type = "codeTextPadding", o += 2, r -= 2;
                                break
                            }
                    n = o - 1, r++;
                    for (; ++n <= r;) void 0 === t ? n !== r && "lineEnding" !== e[n][1].type && (t = n) : n !== r && "lineEnding" !== e[n][1].type || (e[t][1].type = "codeTextData", n !== t + 2 && (e[t][1].end = e[n - 1][1].end, e.splice(t + 2, n - t - 2), r -= n - t - 2, n = t + 2), t = void 0);
                    return e
                },
                previous: function(e) {
                    return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type
                }
            };
            const an = {
                    42: be,
                    43: be,
                    45: be,
                    48: be,
                    49: be,
                    50: be,
                    51: be,
                    52: be,
                    53: be,
                    54: be,
                    55: be,
                    56: be,
                    57: be,
                    62: Ee
                },
                cn = {
                    91: De
                },
                sn = {
                    [-2]: Ie,
                    [-1]: Ie,
                    32: Ie
                },
                fn = {
                    35: ze,
                    42: ve,
                    45: [Me, ve],
                    60: _e,
                    61: Me,
                    95: ve,
                    96: Ue,
                    126: Ue
                },
                pn = {
                    38: $e,
                    92: We
                },
                dn = {
                    [-5]: Ye,
                    [-4]: Ye,
                    [-3]: Ye,
                    33: Je,
                    38: $e,
                    42: en,
                    60: [tn, rn],
                    91: on,
                    92: [ln, We],
                    93: Qe,
                    95: en,
                    96: un
                },
                hn = {
                    null: [en, pe]
                },
                mn = {
                    null: [42, 95]
                },
                gn = {
                    null: []
                };

            function yn(e) {
                const n = function(e) {
                        const n = {};
                        let t = -1;
                        for (; ++t < e.length;) H(n, e[t]);
                        return n
                    }([r, ...(e || {}).extensions || []]),
                    t = {
                        defined: [],
                        lazy: {},
                        constructs: n,
                        content: o(re),
                        document: o(oe),
                        flow: o(fe),
                        string: o(de),
                        text: o(he)
                    };
                return t;

                function o(e) {
                    return function(n) {
                        return xe(t, e, n)
                    }
                }
            }
            const kn = /[\0\t\n\r]/g;

            function xn(e, n) {
                const t = Number.parseInt(e, n);
                return t < 9 || 11 === t || t > 13 && t < 32 || t > 126 && t < 160 || t > 55295 && t < 57344 || t > 64975 && t < 65008 || 65535 === (65535 & t) || 65534 === (65535 & t) || t > 1114111 ? "\ufffd" : String.fromCharCode(t)
            }
            const vn = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

            function bn(e, n, t) {
                if (n) return n;
                if (35 === t.charCodeAt(0)) {
                    const e = t.charCodeAt(1),
                        n = 120 === e || 88 === e;
                    return xn(t.slice(n ? 2 : 1), n ? 16 : 10)
                }
                return qe(t) || e
            }
            const wn = {}.hasOwnProperty,
                Sn = function(e, n, t) {
                    return "string" !== typeof n && (t = n, n = void 0),
                        function(e) {
                            const n = {
                                transforms: [],
                                canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
                                enter: {
                                    autolink: a(ie),
                                    autolinkProtocol: T,
                                    autolinkEmail: T,
                                    atxHeading: a(ne),
                                    blockQuote: a(X),
                                    characterEscape: T,
                                    characterReference: T,
                                    codeFenced: a(Z),
                                    codeFencedFenceInfo: c,
                                    codeFencedFenceMeta: c,
                                    codeIndented: a(Z, c),
                                    codeText: a(J, c),
                                    codeTextData: T,
                                    data: T,
                                    codeFlowValue: T,
                                    definition: a(G),
                                    definitionDestinationString: c,
                                    definitionLabelString: c,
                                    definitionTitleString: c,
                                    emphasis: a(ee),
                                    hardBreakEscape: a(te),
                                    hardBreakTrailing: a(te),
                                    htmlFlow: a(re, c),
                                    htmlFlowData: T,
                                    htmlText: a(re, c),
                                    htmlTextData: T,
                                    image: a(oe),
                                    label: c,
                                    link: a(ie),
                                    listItem: a(ue),
                                    listItemValue: m,
                                    listOrdered: a(le, h),
                                    listUnordered: a(le),
                                    paragraph: a(ae),
                                    reference: q,
                                    referenceString: c,
                                    resourceDestinationString: c,
                                    resourceTitleString: c,
                                    setextHeading: a(ne),
                                    strong: a(ce),
                                    thematicBreak: a(fe)
                                },
                                exit: {
                                    atxHeading: f(),
                                    atxHeadingSequence: E,
                                    autolink: f(),
                                    autolinkEmail: K,
                                    autolinkProtocol: Q,
                                    blockQuote: f(),
                                    characterEscapeValue: P,
                                    characterReferenceMarkerHexadecimal: W,
                                    characterReferenceMarkerNumeric: W,
                                    characterReferenceValue: Y,
                                    codeFenced: f(x),
                                    codeFencedFence: k,
                                    codeFencedFenceInfo: g,
                                    codeFencedFenceMeta: y,
                                    codeFlowValue: P,
                                    codeIndented: f(v),
                                    codeText: f(z),
                                    codeTextData: P,
                                    data: P,
                                    definition: f(),
                                    definitionDestinationString: S,
                                    definitionLabelString: b,
                                    definitionTitleString: w,
                                    emphasis: f(),
                                    hardBreakEscape: f(O),
                                    hardBreakTrailing: f(O),
                                    htmlFlow: f(I),
                                    htmlFlowData: P,
                                    htmlText: f(L),
                                    htmlTextData: P,
                                    image: f(_),
                                    label: j,
                                    labelText: N,
                                    lineEnding: D,
                                    link: f(B),
                                    listItem: f(),
                                    listOrdered: f(),
                                    listUnordered: f(),
                                    paragraph: f(),
                                    referenceString: $,
                                    resourceDestinationString: H,
                                    resourceTitleString: U,
                                    resource: V,
                                    setextHeading: f(F),
                                    setextHeadingLineSequence: A,
                                    setextHeadingText: C,
                                    strong: f(),
                                    thematicBreak: f()
                                }
                            };
                            Cn(n, (e || {}).mdastExtensions || []);
                            const t = {};
                            return r;

                            function r(e) {
                                let t = {
                                    type: "root",
                                    children: []
                                };
                                const r = {
                                        stack: [t],
                                        tokenStack: [],
                                        config: n,
                                        enter: s,
                                        exit: p,
                                        buffer: c,
                                        resume: d,
                                        setData: i,
                                        getData: l
                                    },
                                    u = [];
                                let a = -1;
                                for (; ++a < e.length;)
                                    if ("listOrdered" === e[a][1].type || "listUnordered" === e[a][1].type)
                                        if ("enter" === e[a][0]) u.push(a);
                                        else {
                                            a = o(e, u.pop(), a)
                                        }
                                for (a = -1; ++a < e.length;) {
                                    const t = n[e[a][0]];
                                    wn.call(t, e[a][1].type) && t[e[a][1].type].call(Object.assign({
                                        sliceSerialize: e[a][2].sliceSerialize
                                    }, r), e[a][1])
                                }
                                if (r.tokenStack.length > 0) {
                                    const e = r.tokenStack[r.tokenStack.length - 1];
                                    (e[1] || Fn).call(r, void 0, e[0])
                                }
                                for (t.position = {
                                        start: En(e.length > 0 ? e[0][1].start : {
                                            line: 1,
                                            column: 1,
                                            offset: 0
                                        }),
                                        end: En(e.length > 0 ? e[e.length - 2][1].end : {
                                            line: 1,
                                            column: 1,
                                            offset: 0
                                        })
                                    }, a = -1; ++a < n.transforms.length;) t = n.transforms[a](t) || t;
                                return t
                            }

                            function o(e, n, t) {
                                let r, o, i, l, u = n - 1,
                                    a = -1,
                                    c = !1;
                                for (; ++u <= t;) {
                                    const n = e[u];
                                    if ("listUnordered" === n[1].type || "listOrdered" === n[1].type || "blockQuote" === n[1].type ? ("enter" === n[0] ? a++ : a--, l = void 0) : "lineEndingBlank" === n[1].type ? "enter" === n[0] && (!r || l || a || i || (i = u), l = void 0) : "linePrefix" === n[1].type || "listItemValue" === n[1].type || "listItemMarker" === n[1].type || "listItemPrefix" === n[1].type || "listItemPrefixWhitespace" === n[1].type || (l = void 0), !a && "enter" === n[0] && "listItemPrefix" === n[1].type || -1 === a && "exit" === n[0] && ("listUnordered" === n[1].type || "listOrdered" === n[1].type)) {
                                        if (r) {
                                            let l = u;
                                            for (o = void 0; l--;) {
                                                const n = e[l];
                                                if ("lineEnding" === n[1].type || "lineEndingBlank" === n[1].type) {
                                                    if ("exit" === n[0]) continue;
                                                    o && (e[o][1].type = "lineEndingBlank", c = !0), n[1].type = "lineEnding", o = l
                                                } else if ("linePrefix" !== n[1].type && "blockQuotePrefix" !== n[1].type && "blockQuotePrefixWhitespace" !== n[1].type && "blockQuoteMarker" !== n[1].type && "listItemIndent" !== n[1].type) break
                                            }
                                            i && (!o || i < o) && (r._spread = !0), r.end = Object.assign({}, o ? e[o][1].start : n[1].end), e.splice(o || u, 0, ["exit", r, n[2]]), u++, t++
                                        }
                                        "listItemPrefix" === n[1].type && (r = {
                                            type: "listItem",
                                            _spread: !1,
                                            start: Object.assign({}, n[1].start),
                                            end: void 0
                                        }, e.splice(u, 0, ["enter", r, n[2]]), u++, t++, i = void 0, l = !0)
                                    }
                                }
                                return e[n][1]._spread = c, t
                            }

                            function i(e, n) {
                                t[e] = n
                            }

                            function l(e) {
                                return t[e]
                            }

                            function a(e, n) {
                                return t;

                                function t(t) {
                                    s.call(this, e(t), t), n && n.call(this, t)
                                }
                            }

                            function c() {
                                this.stack.push({
                                    type: "fragment",
                                    children: []
                                })
                            }

                            function s(e, n, t) {
                                return this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([n, t]), e.position = {
                                    start: En(n.start)
                                }, e
                            }

                            function f(e) {
                                return n;

                                function n(n) {
                                    e && e.call(this, n), p.call(this, n)
                                }
                            }

                            function p(e, n) {
                                const t = this.stack.pop(),
                                    r = this.tokenStack.pop();
                                if (!r) throw new Error("Cannot close `" + e.type + "` (" + u({
                                    start: e.start,
                                    end: e.end
                                }) + "): it\u2019s not open");
                                if (r[0].type !== e.type)
                                    if (n) n.call(this, e, r[0]);
                                    else {
                                        (r[1] || Fn).call(this, e, r[0])
                                    }
                                return t.position.end = En(e.end), t
                            }

                            function d() {
                                return function(e, n) {
                                    const t = n || M;
                                    return R(e, "boolean" !== typeof t.includeImageAlt || t.includeImageAlt, "boolean" !== typeof t.includeHtml || t.includeHtml)
                                }(this.stack.pop())
                            }

                            function h() {
                                i("expectingFirstListItemValue", !0)
                            }

                            function m(e) {
                                if (l("expectingFirstListItemValue")) {
                                    this.stack[this.stack.length - 2].start = Number.parseInt(this.sliceSerialize(e), 10), i("expectingFirstListItemValue")
                                }
                            }

                            function g() {
                                const e = this.resume();
                                this.stack[this.stack.length - 1].lang = e
                            }

                            function y() {
                                const e = this.resume();
                                this.stack[this.stack.length - 1].meta = e
                            }

                            function k() {
                                l("flowCodeInside") || (this.buffer(), i("flowCodeInside", !0))
                            }

                            function x() {
                                const e = this.resume();
                                this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), i("flowCodeInside")
                            }

                            function v() {
                                const e = this.resume();
                                this.stack[this.stack.length - 1].value = e.replace(/(\r?\n|\r)$/g, "")
                            }

                            function b(e) {
                                const n = this.resume(),
                                    t = this.stack[this.stack.length - 1];
                                t.label = n, t.identifier = Pe(this.sliceSerialize(e)).toLowerCase()
                            }

                            function w() {
                                const e = this.resume();
                                this.stack[this.stack.length - 1].title = e
                            }

                            function S() {
                                const e = this.resume();
                                this.stack[this.stack.length - 1].url = e
                            }

                            function E(e) {
                                const n = this.stack[this.stack.length - 1];
                                if (!n.depth) {
                                    const t = this.sliceSerialize(e).length;
                                    n.depth = t
                                }
                            }

                            function C() {
                                i("setextHeadingSlurpLineEnding", !0)
                            }

                            function A(e) {
                                this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2
                            }

                            function F() {
                                i("setextHeadingSlurpLineEnding")
                            }

                            function T(e) {
                                const n = this.stack[this.stack.length - 1];
                                let t = n.children[n.children.length - 1];
                                t && "text" === t.type || (t = se(), t.position = {
                                    start: En(e.start)
                                }, n.children.push(t)), this.stack.push(t)
                            }

                            function P(e) {
                                const n = this.stack.pop();
                                n.value += this.sliceSerialize(e), n.position.end = En(e.end)
                            }

                            function D(e) {
                                const t = this.stack[this.stack.length - 1];
                                if (l("atHardBreak")) {
                                    return t.children[t.children.length - 1].position.end = En(e.end), void i("atHardBreak")
                                }!l("setextHeadingSlurpLineEnding") && n.canContainEols.includes(t.type) && (T.call(this, e), P.call(this, e))
                            }

                            function O() {
                                i("atHardBreak", !0)
                            }

                            function I() {
                                const e = this.resume();
                                this.stack[this.stack.length - 1].value = e
                            }

                            function L() {
                                const e = this.resume();
                                this.stack[this.stack.length - 1].value = e
                            }

                            function z() {
                                const e = this.resume();
                                this.stack[this.stack.length - 1].value = e
                            }

                            function B() {
                                const e = this.stack[this.stack.length - 1];
                                if (l("inReference")) {
                                    const n = l("referenceType") || "shortcut";
                                    e.type += "Reference", e.referenceType = n, delete e.url, delete e.title
                                } else delete e.identifier, delete e.label;
                                i("referenceType")
                            }

                            function _() {
                                const e = this.stack[this.stack.length - 1];
                                if (l("inReference")) {
                                    const n = l("referenceType") || "shortcut";
                                    e.type += "Reference", e.referenceType = n, delete e.url, delete e.title
                                } else delete e.identifier, delete e.label;
                                i("referenceType")
                            }

                            function N(e) {
                                const n = this.sliceSerialize(e),
                                    t = this.stack[this.stack.length - 2];
                                t.label = function(e) {
                                    return e.replace(vn, bn)
                                }(n), t.identifier = Pe(n).toLowerCase()
                            }

                            function j() {
                                const e = this.stack[this.stack.length - 1],
                                    n = this.resume(),
                                    t = this.stack[this.stack.length - 1];
                                if (i("inReference", !0), "link" === t.type) {
                                    const n = e.children;
                                    t.children = n
                                } else t.alt = n
                            }

                            function H() {
                                const e = this.resume();
                                this.stack[this.stack.length - 1].url = e
                            }

                            function U() {
                                const e = this.resume();
                                this.stack[this.stack.length - 1].title = e
                            }

                            function V() {
                                i("inReference")
                            }

                            function q() {
                                i("referenceType", "collapsed")
                            }

                            function $(e) {
                                const n = this.resume(),
                                    t = this.stack[this.stack.length - 1];
                                t.label = n, t.identifier = Pe(this.sliceSerialize(e)).toLowerCase(), i("referenceType", "full")
                            }

                            function W(e) {
                                i("characterReferenceType", e.type)
                            }

                            function Y(e) {
                                const n = this.sliceSerialize(e),
                                    t = l("characterReferenceType");
                                let r;
                                if (t) r = xn(n, "characterReferenceMarkerNumeric" === t ? 10 : 16), i("characterReferenceType");
                                else {
                                    r = qe(n)
                                }
                                const o = this.stack.pop();
                                o.value += r, o.position.end = En(e.end)
                            }

                            function Q(e) {
                                P.call(this, e);
                                this.stack[this.stack.length - 1].url = this.sliceSerialize(e)
                            }

                            function K(e) {
                                P.call(this, e);
                                this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e)
                            }

                            function X() {
                                return {
                                    type: "blockquote",
                                    children: []
                                }
                            }

                            function Z() {
                                return {
                                    type: "code",
                                    lang: null,
                                    meta: null,
                                    value: ""
                                }
                            }

                            function J() {
                                return {
                                    type: "inlineCode",
                                    value: ""
                                }
                            }

                            function G() {
                                return {
                                    type: "definition",
                                    identifier: "",
                                    label: null,
                                    title: null,
                                    url: ""
                                }
                            }

                            function ee() {
                                return {
                                    type: "emphasis",
                                    children: []
                                }
                            }

                            function ne() {
                                return {
                                    type: "heading",
                                    depth: void 0,
                                    children: []
                                }
                            }

                            function te() {
                                return {
                                    type: "break"
                                }
                            }

                            function re() {
                                return {
                                    type: "html",
                                    value: ""
                                }
                            }

                            function oe() {
                                return {
                                    type: "image",
                                    title: null,
                                    url: "",
                                    alt: null
                                }
                            }

                            function ie() {
                                return {
                                    type: "link",
                                    title: null,
                                    url: "",
                                    children: []
                                }
                            }

                            function le(e) {
                                return {
                                    type: "list",
                                    ordered: "listOrdered" === e.type,
                                    start: null,
                                    spread: e._spread,
                                    children: []
                                }
                            }

                            function ue(e) {
                                return {
                                    type: "listItem",
                                    spread: e._spread,
                                    checked: null,
                                    children: []
                                }
                            }

                            function ae() {
                                return {
                                    type: "paragraph",
                                    children: []
                                }
                            }

                            function ce() {
                                return {
                                    type: "strong",
                                    children: []
                                }
                            }

                            function se() {
                                return {
                                    type: "text",
                                    value: ""
                                }
                            }

                            function fe() {
                                return {
                                    type: "thematicBreak"
                                }
                            }
                        }(t)(function(e) {
                            for (; !ue(e););
                            return e
                        }(yn(t).document().write(function() {
                            let e, n = 1,
                                t = "",
                                r = !0;
                            return function(o, i, l) {
                                const u = [];
                                let a, c, s, f, p;
                                for (o = t + o.toString(i), s = 0, t = "", r && (65279 === o.charCodeAt(0) && s++, r = void 0); s < o.length;) {
                                    if (kn.lastIndex = s, a = kn.exec(o), f = a && void 0 !== a.index ? a.index : o.length, p = o.charCodeAt(f), !a) {
                                        t = o.slice(s);
                                        break
                                    }
                                    if (10 === p && s === f && e) u.push(-3), e = void 0;
                                    else switch (e && (u.push(-5), e = void 0), s < f && (u.push(o.slice(s, f)), n += f - s), p) {
                                        case 0:
                                            u.push(65533), n++;
                                            break;
                                        case 9:
                                            for (c = 4 * Math.ceil(n / 4), u.push(-2); n++ < c;) u.push(-1);
                                            break;
                                        case 10:
                                            u.push(-4), n = 1;
                                            break;
                                        default:
                                            e = !0, n = 1
                                    }
                                    s = f + 1
                                }
                                return l && (e && u.push(-5), t && u.push(t), u.push(null)), u
                            }
                        }()(e, n, !0))))
                };

            function En(e) {
                return {
                    line: e.line,
                    column: e.column,
                    offset: e.offset
                }
            }

            function Cn(e, n) {
                let t = -1;
                for (; ++t < n.length;) {
                    const r = n[t];
                    Array.isArray(r) ? Cn(e, r) : An(e, r)
                }
            }

            function An(e, n) {
                let t;
                for (t in n)
                    if (wn.call(n, t))
                        if ("canContainEols" === t) {
                            const r = n[t];
                            r && e[t].push(...r)
                        } else if ("transforms" === t) {
                    const r = n[t];
                    r && e[t].push(...r)
                } else if ("enter" === t || "exit" === t) {
                    const r = n[t];
                    r && Object.assign(e[t], r)
                }
            }

            function Fn(e, n) {
                throw e ? new Error("Cannot close `" + e.type + "` (" + u({
                    start: e.start,
                    end: e.end
                }) + "): a different token (`" + n.type + "`, " + u({
                    start: n.start,
                    end: n.end
                }) + ") is open") : new Error("Cannot close document, a token (`" + n.type + "`, " + u({
                    start: n.start,
                    end: n.end
                }) + ") is still open")
            }

            function Tn(e) {
                Object.assign(this, {
                    Parser: n => {
                        const t = this.data("settings");
                        return Sn(n, Object.assign({}, t, e, {
                            extensions: this.data("micromarkExtensions") || [],
                            mdastExtensions: this.data("fromMarkdownExtensions") || []
                        }))
                    }
                })
            }

            function Pn(e) {
                const n = [];
                let t = -1,
                    r = 0,
                    o = 0;
                for (; ++t < e.length;) {
                    const i = e.charCodeAt(t);
                    let l = "";
                    if (37 === i && q(e.charCodeAt(t + 1)) && q(e.charCodeAt(t + 2))) o = 2;
                    else if (i < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i)) || (l = String.fromCharCode(i));
                    else if (i > 55295 && i < 57344) {
                        const n = e.charCodeAt(t + 1);
                        i < 56320 && n > 56319 && n < 57344 ? (l = String.fromCharCode(i, n), o = 1) : l = "\ufffd"
                    } else l = String.fromCharCode(i);
                    l && (n.push(e.slice(r, t), encodeURIComponent(l)), r = t + o + 1, l = ""), o && (t += o, o = 0)
                }
                return n.join("") + e.slice(r)
            }
            const Dn = function(e) {
                if (void 0 === e || null === e) return In;
                if ("string" === typeof e) return function(e) {
                    return On(n);

                    function n(n) {
                        return n && n.type === e
                    }
                }(e);
                if ("object" === typeof e) return Array.isArray(e) ? function(e) {
                    const n = [];
                    let t = -1;
                    for (; ++t < e.length;) n[t] = Dn(e[t]);
                    return On(r);

                    function r(...e) {
                        let t = -1;
                        for (; ++t < n.length;)
                            if (n[t].call(this, ...e)) return !0;
                        return !1
                    }
                }(e) : function(e) {
                    return On(n);

                    function n(n) {
                        let t;
                        for (t in e)
                            if (n[t] !== e[t]) return !1;
                        return !0
                    }
                }(e);
                if ("function" === typeof e) return On(e);
                throw new Error("Expected function, string, or object as test")
            };

            function On(e) {
                return function(n, ...t) {
                    return Boolean(n && "object" === typeof n && "type" in n && Boolean(e.call(this, n, ...t)))
                }
            }

            function In() {
                return !0
            }
            const Ln = function(e, n, t, r) {
                "function" === typeof n && "function" !== typeof t && (r = t, t = n, n = null);
                const o = Dn(n),
                    i = r ? -1 : 1;
                ! function e(l, u, a) {
                    const c = l && "object" === typeof l ? l : {};
                    if ("string" === typeof c.type) {
                        const e = "string" === typeof c.tagName ? c.tagName : "string" === typeof c.name ? c.name : void 0;
                        Object.defineProperty(s, "name", {
                            value: "node (" + l.type + (e ? "<" + e + ">" : "") + ")"
                        })
                    }
                    return s;

                    function s() {
                        let c, s, f, p = [];
                        if ((!n || o(l, u, a[a.length - 1] || null)) && (p = function(e) {
                                if (Array.isArray(e)) return e;
                                if ("number" === typeof e) return [true, e];
                                return [e]
                            }(t(l, a)), false === p[0])) return p;
                        if (l.children && "skip" !== p[0])
                            for (s = (r ? l.children.length : -1) + i, f = a.concat(l); s > -1 && s < l.children.length;) {
                                if (c = e(l.children[s], s, f)(), false === c[0]) return c;
                                s = "number" === typeof c[1] ? c[1] : s + i
                            }
                        return p
                    }
                }(e, void 0, [])()
            };
            const zn = function(e, n, t, r) {
                    "function" === typeof n && "function" !== typeof t && (r = t, t = n, n = null), Ln(e, n, (function(e, n) {
                        const r = n[n.length - 1];
                        return t(e, r ? r.children.indexOf(e) : null, r)
                    }), r)
                },
                Mn = Bn("start"),
                Rn = Bn("end");

            function Bn(e) {
                return function(n) {
                    const t = n && n.position && n.position[e] || {};
                    return {
                        line: t.line || null,
                        column: t.column || null,
                        offset: t.offset > -1 ? t.offset : null
                    }
                }
            }
            const _n = {}.hasOwnProperty;

            function Nn(e) {
                return String(e || "").toUpperCase()
            }

            function jn(e, n) {
                const t = String(n.identifier).toUpperCase(),
                    r = Pn(t.toLowerCase()),
                    o = e.footnoteOrder.indexOf(t);
                let i; - 1 === o ? (e.footnoteOrder.push(t), e.footnoteCounts[t] = 1, i = e.footnoteOrder.length) : (e.footnoteCounts[t]++, i = o + 1);
                const l = e.footnoteCounts[t],
                    u = {
                        type: "element",
                        tagName: "a",
                        properties: {
                            href: "#" + e.clobberPrefix + "fn-" + r,
                            id: e.clobberPrefix + "fnref-" + r + (l > 1 ? "-" + l : ""),
                            dataFootnoteRef: !0,
                            ariaDescribedBy: ["footnote-label"]
                        },
                        children: [{
                            type: "text",
                            value: String(i)
                        }]
                    };
                e.patch(n, u);
                const a = {
                    type: "element",
                    tagName: "sup",
                    properties: {},
                    children: [u]
                };
                return e.patch(n, a), e.applyData(n, a)
            }

            function Hn(e, n) {
                const t = n.referenceType;
                let r = "]";
                if ("collapsed" === t ? r += "[]" : "full" === t && (r += "[" + (n.label || n.identifier) + "]"), "imageReference" === n.type) return {
                    type: "text",
                    value: "![" + n.alt + r
                };
                const o = e.all(n),
                    i = o[0];
                i && "text" === i.type ? i.value = "[" + i.value : o.unshift({
                    type: "text",
                    value: "["
                });
                const l = o[o.length - 1];
                return l && "text" === l.type ? l.value += r : o.push({
                    type: "text",
                    value: r
                }), o
            }

            function Un(e) {
                const n = e.spread;
                return void 0 === n || null === n ? e.children.length > 1 : n
            }

            function Vn(e) {
                const n = String(e),
                    t = /\r?\n|\r/g;
                let r = t.exec(n),
                    o = 0;
                const i = [];
                for (; r;) i.push(qn(n.slice(o, r.index), o > 0, !0), r[0]), o = r.index + r[0].length, r = t.exec(n);
                return i.push(qn(n.slice(o), o > 0, !1)), i.join("")
            }

            function qn(e, n, t) {
                let r = 0,
                    o = e.length;
                if (n) {
                    let n = e.codePointAt(r);
                    for (; 9 === n || 32 === n;) r++, n = e.codePointAt(r)
                }
                if (t) {
                    let n = e.codePointAt(o - 1);
                    for (; 9 === n || 32 === n;) o--, n = e.codePointAt(o - 1)
                }
                return o > r ? e.slice(r, o) : ""
            }
            const $n = {
                blockquote: function(e, n) {
                    const t = {
                        type: "element",
                        tagName: "blockquote",
                        properties: {},
                        children: e.wrap(e.all(n), !0)
                    };
                    return e.patch(n, t), e.applyData(n, t)
                },
                break: function(e, n) {
                    const t = {
                        type: "element",
                        tagName: "br",
                        properties: {},
                        children: []
                    };
                    return e.patch(n, t), [e.applyData(n, t), {
                        type: "text",
                        value: "\n"
                    }]
                },
                code: function(e, n) {
                    const t = n.value ? n.value + "\n" : "",
                        r = n.lang ? n.lang.match(/^[^ \t]+(?=[ \t]|$)/) : null,
                        o = {};
                    r && (o.className = ["language-" + r]);
                    let i = {
                        type: "element",
                        tagName: "code",
                        properties: o,
                        children: [{
                            type: "text",
                            value: t
                        }]
                    };
                    return n.meta && (i.data = {
                        meta: n.meta
                    }), e.patch(n, i), i = e.applyData(n, i), i = {
                        type: "element",
                        tagName: "pre",
                        properties: {},
                        children: [i]
                    }, e.patch(n, i), i
                },
                delete: function(e, n) {
                    const t = {
                        type: "element",
                        tagName: "del",
                        properties: {},
                        children: e.all(n)
                    };
                    return e.patch(n, t), e.applyData(n, t)
                },
                emphasis: function(e, n) {
                    const t = {
                        type: "element",
                        tagName: "em",
                        properties: {},
                        children: e.all(n)
                    };
                    return e.patch(n, t), e.applyData(n, t)
                },
                footnoteReference: jn,
                footnote: function(e, n) {
                    const t = e.footnoteById;
                    let r = 1;
                    for (; r in t;) r++;
                    const o = String(r);
                    return t[o] = {
                        type: "footnoteDefinition",
                        identifier: o,
                        children: [{
                            type: "paragraph",
                            children: n.children
                        }],
                        position: n.position
                    }, jn(e, {
                        type: "footnoteReference",
                        identifier: o,
                        position: n.position
                    })
                },
                heading: function(e, n) {
                    const t = {
                        type: "element",
                        tagName: "h" + n.depth,
                        properties: {},
                        children: e.all(n)
                    };
                    return e.patch(n, t), e.applyData(n, t)
                },
                html: function(e, n) {
                    if (e.dangerous) {
                        const t = {
                            type: "raw",
                            value: n.value
                        };
                        return e.patch(n, t), e.applyData(n, t)
                    }
                    return null
                },
                imageReference: function(e, n) {
                    const t = e.definition(n.identifier);
                    if (!t) return Hn(e, n);
                    const r = {
                        src: Pn(t.url || ""),
                        alt: n.alt
                    };
                    null !== t.title && void 0 !== t.title && (r.title = t.title);
                    const o = {
                        type: "element",
                        tagName: "img",
                        properties: r,
                        children: []
                    };
                    return e.patch(n, o), e.applyData(n, o)
                },
                image: function(e, n) {
                    const t = {
                        src: Pn(n.url)
                    };
                    null !== n.alt && void 0 !== n.alt && (t.alt = n.alt), null !== n.title && void 0 !== n.title && (t.title = n.title);
                    const r = {
                        type: "element",
                        tagName: "img",
                        properties: t,
                        children: []
                    };
                    return e.patch(n, r), e.applyData(n, r)
                },
                inlineCode: function(e, n) {
                    const t = {
                        type: "text",
                        value: n.value.replace(/\r?\n|\r/g, " ")
                    };
                    e.patch(n, t);
                    const r = {
                        type: "element",
                        tagName: "code",
                        properties: {},
                        children: [t]
                    };
                    return e.patch(n, r), e.applyData(n, r)
                },
                linkReference: function(e, n) {
                    const t = e.definition(n.identifier);
                    if (!t) return Hn(e, n);
                    const r = {
                        href: Pn(t.url || "")
                    };
                    null !== t.title && void 0 !== t.title && (r.title = t.title);
                    const o = {
                        type: "element",
                        tagName: "a",
                        properties: r,
                        children: e.all(n)
                    };
                    return e.patch(n, o), e.applyData(n, o)
                },
                link: function(e, n) {
                    const t = {
                        href: Pn(n.url)
                    };
                    null !== n.title && void 0 !== n.title && (t.title = n.title);
                    const r = {
                        type: "element",
                        tagName: "a",
                        properties: t,
                        children: e.all(n)
                    };
                    return e.patch(n, r), e.applyData(n, r)
                },
                listItem: function(e, n, t) {
                    const r = e.all(n),
                        o = t ? function(e) {
                            let n = !1;
                            if ("list" === e.type) {
                                n = e.spread || !1;
                                const t = e.children;
                                let r = -1;
                                for (; !n && ++r < t.length;) n = Un(t[r])
                            }
                            return n
                        }(t) : Un(n),
                        i = {},
                        l = [];
                    if ("boolean" === typeof n.checked) {
                        const e = r[0];
                        let t;
                        e && "element" === e.type && "p" === e.tagName ? t = e : (t = {
                            type: "element",
                            tagName: "p",
                            properties: {},
                            children: []
                        }, r.unshift(t)), t.children.length > 0 && t.children.unshift({
                            type: "text",
                            value: " "
                        }), t.children.unshift({
                            type: "element",
                            tagName: "input",
                            properties: {
                                type: "checkbox",
                                checked: n.checked,
                                disabled: !0
                            },
                            children: []
                        }), i.className = ["task-list-item"]
                    }
                    let u = -1;
                    for (; ++u < r.length;) {
                        const e = r[u];
                        (o || 0 !== u || "element" !== e.type || "p" !== e.tagName) && l.push({
                            type: "text",
                            value: "\n"
                        }), "element" !== e.type || "p" !== e.tagName || o ? l.push(e) : l.push(...e.children)
                    }
                    const a = r[r.length - 1];
                    a && (o || "element" !== a.type || "p" !== a.tagName) && l.push({
                        type: "text",
                        value: "\n"
                    });
                    const c = {
                        type: "element",
                        tagName: "li",
                        properties: i,
                        children: l
                    };
                    return e.patch(n, c), e.applyData(n, c)
                },
                list: function(e, n) {
                    const t = {},
                        r = e.all(n);
                    let o = -1;
                    for ("number" === typeof n.start && 1 !== n.start && (t.start = n.start); ++o < r.length;) {
                        const e = r[o];
                        if ("element" === e.type && "li" === e.tagName && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
                            t.className = ["contains-task-list"];
                            break
                        }
                    }
                    const i = {
                        type: "element",
                        tagName: n.ordered ? "ol" : "ul",
                        properties: t,
                        children: e.wrap(r, !0)
                    };
                    return e.patch(n, i), e.applyData(n, i)
                },
                paragraph: function(e, n) {
                    const t = {
                        type: "element",
                        tagName: "p",
                        properties: {},
                        children: e.all(n)
                    };
                    return e.patch(n, t), e.applyData(n, t)
                },
                root: function(e, n) {
                    const t = {
                        type: "root",
                        children: e.wrap(e.all(n))
                    };
                    return e.patch(n, t), e.applyData(n, t)
                },
                strong: function(e, n) {
                    const t = {
                        type: "element",
                        tagName: "strong",
                        properties: {},
                        children: e.all(n)
                    };
                    return e.patch(n, t), e.applyData(n, t)
                },
                table: function(e, n) {
                    const t = e.all(n),
                        r = t.shift(),
                        o = [];
                    if (r) {
                        const t = {
                            type: "element",
                            tagName: "thead",
                            properties: {},
                            children: e.wrap([r], !0)
                        };
                        e.patch(n.children[0], t), o.push(t)
                    }
                    if (t.length > 0) {
                        const r = {
                                type: "element",
                                tagName: "tbody",
                                properties: {},
                                children: e.wrap(t, !0)
                            },
                            i = Mn(n.children[1]),
                            l = Rn(n.children[n.children.length - 1]);
                        i.line && l.line && (r.position = {
                            start: i,
                            end: l
                        }), o.push(r)
                    }
                    const i = {
                        type: "element",
                        tagName: "table",
                        properties: {},
                        children: e.wrap(o, !0)
                    };
                    return e.patch(n, i), e.applyData(n, i)
                },
                tableCell: function(e, n) {
                    const t = {
                        type: "element",
                        tagName: "td",
                        properties: {},
                        children: e.all(n)
                    };
                    return e.patch(n, t), e.applyData(n, t)
                },
                tableRow: function(e, n, t) {
                    const r = t ? t.children : void 0,
                        o = 0 === (r ? r.indexOf(n) : 1) ? "th" : "td",
                        i = t && "table" === t.type ? t.align : void 0,
                        l = i ? i.length : n.children.length;
                    let u = -1;
                    const a = [];
                    for (; ++u < l;) {
                        const t = n.children[u],
                            r = {},
                            l = i ? i[u] : void 0;
                        l && (r.align = l);
                        let c = {
                            type: "element",
                            tagName: o,
                            properties: r,
                            children: []
                        };
                        t && (c.children = e.all(t), e.patch(t, c), c = e.applyData(n, c)), a.push(c)
                    }
                    const c = {
                        type: "element",
                        tagName: "tr",
                        properties: {},
                        children: e.wrap(a, !0)
                    };
                    return e.patch(n, c), e.applyData(n, c)
                },
                text: function(e, n) {
                    const t = {
                        type: "text",
                        value: Vn(String(n.value))
                    };
                    return e.patch(n, t), e.applyData(n, t)
                },
                thematicBreak: function(e, n) {
                    const t = {
                        type: "element",
                        tagName: "hr",
                        properties: {},
                        children: []
                    };
                    return e.patch(n, t), e.applyData(n, t)
                },
                toml: Wn,
                yaml: Wn,
                definition: Wn,
                footnoteDefinition: Wn
            };

            function Wn() {
                return null
            }
            const Yn = {}.hasOwnProperty;

            function Qn(e, n) {
                const t = n || {},
                    r = t.allowDangerousHtml || !1,
                    o = {};
                return l.dangerous = r, l.clobberPrefix = void 0 === t.clobberPrefix || null === t.clobberPrefix ? "user-content-" : t.clobberPrefix, l.footnoteLabel = t.footnoteLabel || "Footnotes", l.footnoteLabelTagName = t.footnoteLabelTagName || "h2", l.footnoteLabelProperties = t.footnoteLabelProperties || {
                    className: ["sr-only"]
                }, l.footnoteBackLabel = t.footnoteBackLabel || "Back to content", l.unknownHandler = t.unknownHandler, l.passThrough = t.passThrough, l.handlers = { ...$n,
                    ...t.handlers
                }, l.definition = function(e) {
                    const n = Object.create(null);
                    if (!e || !e.type) throw new Error("mdast-util-definitions expected node");
                    return zn(e, "definition", (e => {
                            const t = Nn(e.identifier);
                            t && !_n.call(n, t) && (n[t] = e)
                        })),
                        function(e) {
                            const t = Nn(e);
                            return t && _n.call(n, t) ? n[t] : null
                        }
                }(e), l.footnoteById = o, l.footnoteOrder = [], l.footnoteCounts = {}, l.patch = Kn, l.applyData = Xn, l.one = function(e, n) {
                    return Zn(l, e, n)
                }, l.all = function(e) {
                    return Jn(l, e)
                }, l.wrap = Gn, l.augment = i, zn(e, "footnoteDefinition", (e => {
                    const n = String(e.identifier).toUpperCase();
                    Yn.call(o, n) || (o[n] = e)
                })), l;

                function i(e, n) {
                    if (e && "data" in e && e.data) {
                        const t = e.data;
                        t.hName && ("element" !== n.type && (n = {
                            type: "element",
                            tagName: "",
                            properties: {},
                            children: []
                        }), n.tagName = t.hName), "element" === n.type && t.hProperties && (n.properties = { ...n.properties,
                            ...t.hProperties
                        }), "children" in n && n.children && t.hChildren && (n.children = t.hChildren)
                    }
                    if (e) {
                        const t = "type" in e ? e : {
                            position: e
                        };
                        (function(e) {
                            return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column
                        })(t) || (n.position = {
                            start: Mn(t),
                            end: Rn(t)
                        })
                    }
                    return n
                }

                function l(e, n, t, r) {
                    return Array.isArray(t) && (r = t, t = {}), i(e, {
                        type: "element",
                        tagName: n,
                        properties: t || {},
                        children: r || []
                    })
                }
            }

            function Kn(e, n) {
                e.position && (n.position = function(e) {
                    return {
                        start: Mn(e),
                        end: Rn(e)
                    }
                }(e))
            }

            function Xn(e, n) {
                let t = n;
                if (e && e.data) {
                    const n = e.data.hName,
                        r = e.data.hChildren,
                        o = e.data.hProperties;
                    "string" === typeof n && ("element" === t.type ? t.tagName = n : t = {
                        type: "element",
                        tagName: n,
                        properties: {},
                        children: []
                    }), "element" === t.type && o && (t.properties = { ...t.properties,
                        ...o
                    }), "children" in t && t.children && null !== r && void 0 !== r && (t.children = r)
                }
                return t
            }

            function Zn(e, n, t) {
                const r = n && n.type;
                if (!r) throw new Error("Expected node, got `" + n + "`");
                return Yn.call(e.handlers, r) ? e.handlers[r](e, n, t) : e.passThrough && e.passThrough.includes(r) ? "children" in n ? { ...n,
                    children: Jn(e, n)
                } : n : e.unknownHandler ? e.unknownHandler(e, n, t) : function(e, n) {
                    const t = n.data || {},
                        r = !("value" in n) || Yn.call(t, "hProperties") || Yn.call(t, "hChildren") ? {
                            type: "element",
                            tagName: "div",
                            properties: {},
                            children: Jn(e, n)
                        } : {
                            type: "text",
                            value: n.value
                        };
                    return e.patch(n, r), e.applyData(n, r)
                }(e, n)
            }

            function Jn(e, n) {
                const t = [];
                if ("children" in n) {
                    const r = n.children;
                    let o = -1;
                    for (; ++o < r.length;) {
                        const i = Zn(e, r[o], n);
                        if (i) {
                            if (o && "break" === r[o - 1].type && (Array.isArray(i) || "text" !== i.type || (i.value = i.value.replace(/^\s+/, "")), !Array.isArray(i) && "element" === i.type)) {
                                const e = i.children[0];
                                e && "text" === e.type && (e.value = e.value.replace(/^\s+/, ""))
                            }
                            Array.isArray(i) ? t.push(...i) : t.push(i)
                        }
                    }
                }
                return t
            }

            function Gn(e, n) {
                const t = [];
                let r = -1;
                for (n && t.push({
                        type: "text",
                        value: "\n"
                    }); ++r < e.length;) r && t.push({
                    type: "text",
                    value: "\n"
                }), t.push(e[r]);
                return n && e.length > 0 && t.push({
                    type: "text",
                    value: "\n"
                }), t
            }

            function et(e, n) {
                const t = Qn(e, n),
                    r = t.one(e, null),
                    o = function(e) {
                        const n = [];
                        let t = -1;
                        for (; ++t < e.footnoteOrder.length;) {
                            const r = e.footnoteById[e.footnoteOrder[t]];
                            if (!r) continue;
                            const o = e.all(r),
                                i = String(r.identifier).toUpperCase(),
                                l = Pn(i.toLowerCase());
                            let u = 0;
                            const a = [];
                            for (; ++u <= e.footnoteCounts[i];) {
                                const n = {
                                    type: "element",
                                    tagName: "a",
                                    properties: {
                                        href: "#" + e.clobberPrefix + "fnref-" + l + (u > 1 ? "-" + u : ""),
                                        dataFootnoteBackref: !0,
                                        className: ["data-footnote-backref"],
                                        ariaLabel: e.footnoteBackLabel
                                    },
                                    children: [{
                                        type: "text",
                                        value: "\u21a9"
                                    }]
                                };
                                u > 1 && n.children.push({
                                    type: "element",
                                    tagName: "sup",
                                    children: [{
                                        type: "text",
                                        value: String(u)
                                    }]
                                }), a.length > 0 && a.push({
                                    type: "text",
                                    value: " "
                                }), a.push(n)
                            }
                            const c = o[o.length - 1];
                            if (c && "element" === c.type && "p" === c.tagName) {
                                const e = c.children[c.children.length - 1];
                                e && "text" === e.type ? e.value += " " : c.children.push({
                                    type: "text",
                                    value: " "
                                }), c.children.push(...a)
                            } else o.push(...a);
                            const s = {
                                type: "element",
                                tagName: "li",
                                properties: {
                                    id: e.clobberPrefix + "fn-" + l
                                },
                                children: e.wrap(o, !0)
                            };
                            e.patch(r, s), n.push(s)
                        }
                        if (0 !== n.length) return {
                            type: "element",
                            tagName: "section",
                            properties: {
                                dataFootnotes: !0,
                                className: ["footnotes"]
                            },
                            children: [{
                                type: "element",
                                tagName: e.footnoteLabelTagName,
                                properties: { ...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),
                                    id: "footnote-label"
                                },
                                children: [{
                                    type: "text",
                                    value: e.footnoteLabel
                                }]
                            }, {
                                type: "text",
                                value: "\n"
                            }, {
                                type: "element",
                                tagName: "ol",
                                properties: {},
                                children: e.wrap(n, !0)
                            }, {
                                type: "text",
                                value: "\n"
                            }]
                        }
                    }(t);
                return o && r.children.push({
                    type: "text",
                    value: "\n"
                }, o), Array.isArray(r) ? {
                    type: "root",
                    children: r
                } : r
            }
            var nt = function(e, n) {
                return e && "run" in e ? function(e, n) {
                    return (t, r, o) => {
                        e.run(et(t, n), r, (e => {
                            o(e)
                        }))
                    }
                }(e, n) : function(e) {
                    return n => et(n, e)
                }(e || n)
            };
            var tt = t(39519);
            class rt {
                constructor(e, n, t) {
                    this.property = e, this.normal = n, t && (this.space = t)
                }
            }

            function ot(e, n) {
                const t = {},
                    r = {};
                let o = -1;
                for (; ++o < e.length;) Object.assign(t, e[o].property), Object.assign(r, e[o].normal);
                return new rt(t, r, n)
            }

            function it(e) {
                return e.toLowerCase()
            }
            rt.prototype.property = {}, rt.prototype.normal = {}, rt.prototype.space = null;
            class lt {
                constructor(e, n) {
                    this.property = e, this.attribute = n
                }
            }
            lt.prototype.space = null, lt.prototype.boolean = !1, lt.prototype.booleanish = !1, lt.prototype.overloadedBoolean = !1, lt.prototype.number = !1, lt.prototype.commaSeparated = !1, lt.prototype.spaceSeparated = !1, lt.prototype.commaOrSpaceSeparated = !1, lt.prototype.mustUseProperty = !1, lt.prototype.defined = !1;
            let ut = 0;
            const at = mt(),
                ct = mt(),
                st = mt(),
                ft = mt(),
                pt = mt(),
                dt = mt(),
                ht = mt();

            function mt() {
                return 2 ** ++ut
            }
            const gt = Object.keys(o);
            class yt extends lt {
                constructor(e, n, t, r) {
                    let i = -1;
                    if (super(e, n), kt(this, "space", r), "number" === typeof t)
                        for (; ++i < gt.length;) {
                            const e = gt[i];
                            kt(this, gt[i], (t & o[e]) === o[e])
                        }
                }
            }

            function kt(e, n, t) {
                t && (e[n] = t)
            }
            yt.prototype.defined = !0;
            const xt = {}.hasOwnProperty;

            function vt(e) {
                const n = {},
                    t = {};
                let r;
                for (r in e.properties)
                    if (xt.call(e.properties, r)) {
                        const o = e.properties[r],
                            i = new yt(r, e.transform(e.attributes || {}, r), o, e.space);
                        e.mustUseProperty && e.mustUseProperty.includes(r) && (i.mustUseProperty = !0), n[r] = i, t[it(r)] = r, t[it(i.attribute)] = r
                    }
                return new rt(n, t, e.space)
            }
            const bt = vt({
                    space: "xlink",
                    transform: (e, n) => "xlink:" + n.slice(5).toLowerCase(),
                    properties: {
                        xLinkActuate: null,
                        xLinkArcRole: null,
                        xLinkHref: null,
                        xLinkRole: null,
                        xLinkShow: null,
                        xLinkTitle: null,
                        xLinkType: null
                    }
                }),
                wt = vt({
                    space: "xml",
                    transform: (e, n) => "xml:" + n.slice(3).toLowerCase(),
                    properties: {
                        xmlLang: null,
                        xmlBase: null,
                        xmlSpace: null
                    }
                });

            function St(e, n) {
                return n in e ? e[n] : n
            }

            function Et(e, n) {
                return St(e, n.toLowerCase())
            }
            const Ct = vt({
                    space: "xmlns",
                    attributes: {
                        xmlnsxlink: "xmlns:xlink"
                    },
                    transform: Et,
                    properties: {
                        xmlns: null,
                        xmlnsXLink: null
                    }
                }),
                At = vt({
                    transform: (e, n) => "role" === n ? n : "aria-" + n.slice(4).toLowerCase(),
                    properties: {
                        ariaActiveDescendant: null,
                        ariaAtomic: ct,
                        ariaAutoComplete: null,
                        ariaBusy: ct,
                        ariaChecked: ct,
                        ariaColCount: ft,
                        ariaColIndex: ft,
                        ariaColSpan: ft,
                        ariaControls: pt,
                        ariaCurrent: null,
                        ariaDescribedBy: pt,
                        ariaDetails: null,
                        ariaDisabled: ct,
                        ariaDropEffect: pt,
                        ariaErrorMessage: null,
                        ariaExpanded: ct,
                        ariaFlowTo: pt,
                        ariaGrabbed: ct,
                        ariaHasPopup: null,
                        ariaHidden: ct,
                        ariaInvalid: null,
                        ariaKeyShortcuts: null,
                        ariaLabel: null,
                        ariaLabelledBy: pt,
                        ariaLevel: ft,
                        ariaLive: null,
                        ariaModal: ct,
                        ariaMultiLine: ct,
                        ariaMultiSelectable: ct,
                        ariaOrientation: null,
                        ariaOwns: pt,
                        ariaPlaceholder: null,
                        ariaPosInSet: ft,
                        ariaPressed: ct,
                        ariaReadOnly: ct,
                        ariaRelevant: null,
                        ariaRequired: ct,
                        ariaRoleDescription: pt,
                        ariaRowCount: ft,
                        ariaRowIndex: ft,
                        ariaRowSpan: ft,
                        ariaSelected: ct,
                        ariaSetSize: ft,
                        ariaSort: null,
                        ariaValueMax: ft,
                        ariaValueMin: ft,
                        ariaValueNow: ft,
                        ariaValueText: null,
                        role: null
                    }
                }),
                Ft = vt({
                    space: "html",
                    attributes: {
                        acceptcharset: "accept-charset",
                        classname: "class",
                        htmlfor: "for",
                        httpequiv: "http-equiv"
                    },
                    transform: Et,
                    mustUseProperty: ["checked", "multiple", "muted", "selected"],
                    properties: {
                        abbr: null,
                        accept: dt,
                        acceptCharset: pt,
                        accessKey: pt,
                        action: null,
                        allow: null,
                        allowFullScreen: at,
                        allowPaymentRequest: at,
                        allowUserMedia: at,
                        alt: null,
                        as: null,
                        async: at,
                        autoCapitalize: null,
                        autoComplete: pt,
                        autoFocus: at,
                        autoPlay: at,
                        capture: at,
                        charSet: null,
                        checked: at,
                        cite: null,
                        className: pt,
                        cols: ft,
                        colSpan: null,
                        content: null,
                        contentEditable: ct,
                        controls: at,
                        controlsList: pt,
                        coords: ft | dt,
                        crossOrigin: null,
                        data: null,
                        dateTime: null,
                        decoding: null,
                        default: at,
                        defer: at,
                        dir: null,
                        dirName: null,
                        disabled: at,
                        download: st,
                        draggable: ct,
                        encType: null,
                        enterKeyHint: null,
                        form: null,
                        formAction: null,
                        formEncType: null,
                        formMethod: null,
                        formNoValidate: at,
                        formTarget: null,
                        headers: pt,
                        height: ft,
                        hidden: at,
                        high: ft,
                        href: null,
                        hrefLang: null,
                        htmlFor: pt,
                        httpEquiv: pt,
                        id: null,
                        imageSizes: null,
                        imageSrcSet: null,
                        inputMode: null,
                        integrity: null,
                        is: null,
                        isMap: at,
                        itemId: null,
                        itemProp: pt,
                        itemRef: pt,
                        itemScope: at,
                        itemType: pt,
                        kind: null,
                        label: null,
                        lang: null,
                        language: null,
                        list: null,
                        loading: null,
                        loop: at,
                        low: ft,
                        manifest: null,
                        max: null,
                        maxLength: ft,
                        media: null,
                        method: null,
                        min: null,
                        minLength: ft,
                        multiple: at,
                        muted: at,
                        name: null,
                        nonce: null,
                        noModule: at,
                        noValidate: at,
                        onAbort: null,
                        onAfterPrint: null,
                        onAuxClick: null,
                        onBeforeMatch: null,
                        onBeforePrint: null,
                        onBeforeUnload: null,
                        onBlur: null,
                        onCancel: null,
                        onCanPlay: null,
                        onCanPlayThrough: null,
                        onChange: null,
                        onClick: null,
                        onClose: null,
                        onContextLost: null,
                        onContextMenu: null,
                        onContextRestored: null,
                        onCopy: null,
                        onCueChange: null,
                        onCut: null,
                        onDblClick: null,
                        onDrag: null,
                        onDragEnd: null,
                        onDragEnter: null,
                        onDragExit: null,
                        onDragLeave: null,
                        onDragOver: null,
                        onDragStart: null,
                        onDrop: null,
                        onDurationChange: null,
                        onEmptied: null,
                        onEnded: null,
                        onError: null,
                        onFocus: null,
                        onFormData: null,
                        onHashChange: null,
                        onInput: null,
                        onInvalid: null,
                        onKeyDown: null,
                        onKeyPress: null,
                        onKeyUp: null,
                        onLanguageChange: null,
                        onLoad: null,
                        onLoadedData: null,
                        onLoadedMetadata: null,
                        onLoadEnd: null,
                        onLoadStart: null,
                        onMessage: null,
                        onMessageError: null,
                        onMouseDown: null,
                        onMouseEnter: null,
                        onMouseLeave: null,
                        onMouseMove: null,
                        onMouseOut: null,
                        onMouseOver: null,
                        onMouseUp: null,
                        onOffline: null,
                        onOnline: null,
                        onPageHide: null,
                        onPageShow: null,
                        onPaste: null,
                        onPause: null,
                        onPlay: null,
                        onPlaying: null,
                        onPopState: null,
                        onProgress: null,
                        onRateChange: null,
                        onRejectionHandled: null,
                        onReset: null,
                        onResize: null,
                        onScroll: null,
                        onScrollEnd: null,
                        onSecurityPolicyViolation: null,
                        onSeeked: null,
                        onSeeking: null,
                        onSelect: null,
                        onSlotChange: null,
                        onStalled: null,
                        onStorage: null,
                        onSubmit: null,
                        onSuspend: null,
                        onTimeUpdate: null,
                        onToggle: null,
                        onUnhandledRejection: null,
                        onUnload: null,
                        onVolumeChange: null,
                        onWaiting: null,
                        onWheel: null,
                        open: at,
                        optimum: ft,
                        pattern: null,
                        ping: pt,
                        placeholder: null,
                        playsInline: at,
                        poster: null,
                        preload: null,
                        readOnly: at,
                        referrerPolicy: null,
                        rel: pt,
                        required: at,
                        reversed: at,
                        rows: ft,
                        rowSpan: ft,
                        sandbox: pt,
                        scope: null,
                        scoped: at,
                        seamless: at,
                        selected: at,
                        shape: null,
                        size: ft,
                        sizes: null,
                        slot: null,
                        span: ft,
                        spellCheck: ct,
                        src: null,
                        srcDoc: null,
                        srcLang: null,
                        srcSet: null,
                        start: ft,
                        step: null,
                        style: null,
                        tabIndex: ft,
                        target: null,
                        title: null,
                        translate: null,
                        type: null,
                        typeMustMatch: at,
                        useMap: null,
                        value: ct,
                        width: ft,
                        wrap: null,
                        align: null,
                        aLink: null,
                        archive: pt,
                        axis: null,
                        background: null,
                        bgColor: null,
                        border: ft,
                        borderColor: null,
                        bottomMargin: ft,
                        cellPadding: null,
                        cellSpacing: null,
                        char: null,
                        charOff: null,
                        classId: null,
                        clear: null,
                        code: null,
                        codeBase: null,
                        codeType: null,
                        color: null,
                        compact: at,
                        declare: at,
                        event: null,
                        face: null,
                        frame: null,
                        frameBorder: null,
                        hSpace: ft,
                        leftMargin: ft,
                        link: null,
                        longDesc: null,
                        lowSrc: null,
                        marginHeight: ft,
                        marginWidth: ft,
                        noResize: at,
                        noHref: at,
                        noShade: at,
                        noWrap: at,
                        object: null,
                        profile: null,
                        prompt: null,
                        rev: null,
                        rightMargin: ft,
                        rules: null,
                        scheme: null,
                        scrolling: ct,
                        standby: null,
                        summary: null,
                        text: null,
                        topMargin: ft,
                        valueType: null,
                        version: null,
                        vAlign: null,
                        vLink: null,
                        vSpace: ft,
                        allowTransparency: null,
                        autoCorrect: null,
                        autoSave: null,
                        disablePictureInPicture: at,
                        disableRemotePlayback: at,
                        prefix: null,
                        property: null,
                        results: ft,
                        security: null,
                        unselectable: null
                    }
                }),
                Tt = vt({
                    space: "svg",
                    attributes: {
                        accentHeight: "accent-height",
                        alignmentBaseline: "alignment-baseline",
                        arabicForm: "arabic-form",
                        baselineShift: "baseline-shift",
                        capHeight: "cap-height",
                        className: "class",
                        clipPath: "clip-path",
                        clipRule: "clip-rule",
                        colorInterpolation: "color-interpolation",
                        colorInterpolationFilters: "color-interpolation-filters",
                        colorProfile: "color-profile",
                        colorRendering: "color-rendering",
                        crossOrigin: "crossorigin",
                        dataType: "datatype",
                        dominantBaseline: "dominant-baseline",
                        enableBackground: "enable-background",
                        fillOpacity: "fill-opacity",
                        fillRule: "fill-rule",
                        floodColor: "flood-color",
                        floodOpacity: "flood-opacity",
                        fontFamily: "font-family",
                        fontSize: "font-size",
                        fontSizeAdjust: "font-size-adjust",
                        fontStretch: "font-stretch",
                        fontStyle: "font-style",
                        fontVariant: "font-variant",
                        fontWeight: "font-weight",
                        glyphName: "glyph-name",
                        glyphOrientationHorizontal: "glyph-orientation-horizontal",
                        glyphOrientationVertical: "glyph-orientation-vertical",
                        hrefLang: "hreflang",
                        horizAdvX: "horiz-adv-x",
                        horizOriginX: "horiz-origin-x",
                        horizOriginY: "horiz-origin-y",
                        imageRendering: "image-rendering",
                        letterSpacing: "letter-spacing",
                        lightingColor: "lighting-color",
                        markerEnd: "marker-end",
                        markerMid: "marker-mid",
                        markerStart: "marker-start",
                        navDown: "nav-down",
                        navDownLeft: "nav-down-left",
                        navDownRight: "nav-down-right",
                        navLeft: "nav-left",
                        navNext: "nav-next",
                        navPrev: "nav-prev",
                        navRight: "nav-right",
                        navUp: "nav-up",
                        navUpLeft: "nav-up-left",
                        navUpRight: "nav-up-right",
                        onAbort: "onabort",
                        onActivate: "onactivate",
                        onAfterPrint: "onafterprint",
                        onBeforePrint: "onbeforeprint",
                        onBegin: "onbegin",
                        onCancel: "oncancel",
                        onCanPlay: "oncanplay",
                        onCanPlayThrough: "oncanplaythrough",
                        onChange: "onchange",
                        onClick: "onclick",
                        onClose: "onclose",
                        onCopy: "oncopy",
                        onCueChange: "oncuechange",
                        onCut: "oncut",
                        onDblClick: "ondblclick",
                        onDrag: "ondrag",
                        onDragEnd: "ondragend",
                        onDragEnter: "ondragenter",
                        onDragExit: "ondragexit",
                        onDragLeave: "ondragleave",
                        onDragOver: "ondragover",
                        onDragStart: "ondragstart",
                        onDrop: "ondrop",
                        onDurationChange: "ondurationchange",
                        onEmptied: "onemptied",
                        onEnd: "onend",
                        onEnded: "onended",
                        onError: "onerror",
                        onFocus: "onfocus",
                        onFocusIn: "onfocusin",
                        onFocusOut: "onfocusout",
                        onHashChange: "onhashchange",
                        onInput: "oninput",
                        onInvalid: "oninvalid",
                        onKeyDown: "onkeydown",
                        onKeyPress: "onkeypress",
                        onKeyUp: "onkeyup",
                        onLoad: "onload",
                        onLoadedData: "onloadeddata",
                        onLoadedMetadata: "onloadedmetadata",
                        onLoadStart: "onloadstart",
                        onMessage: "onmessage",
                        onMouseDown: "onmousedown",
                        onMouseEnter: "onmouseenter",
                        onMouseLeave: "onmouseleave",
                        onMouseMove: "onmousemove",
                        onMouseOut: "onmouseout",
                        onMouseOver: "onmouseover",
                        onMouseUp: "onmouseup",
                        onMouseWheel: "onmousewheel",
                        onOffline: "onoffline",
                        onOnline: "ononline",
                        onPageHide: "onpagehide",
                        onPageShow: "onpageshow",
                        onPaste: "onpaste",
                        onPause: "onpause",
                        onPlay: "onplay",
                        onPlaying: "onplaying",
                        onPopState: "onpopstate",
                        onProgress: "onprogress",
                        onRateChange: "onratechange",
                        onRepeat: "onrepeat",
                        onReset: "onreset",
                        onResize: "onresize",
                        onScroll: "onscroll",
                        onSeeked: "onseeked",
                        onSeeking: "onseeking",
                        onSelect: "onselect",
                        onShow: "onshow",
                        onStalled: "onstalled",
                        onStorage: "onstorage",
                        onSubmit: "onsubmit",
                        onSuspend: "onsuspend",
                        onTimeUpdate: "ontimeupdate",
                        onToggle: "ontoggle",
                        onUnload: "onunload",
                        onVolumeChange: "onvolumechange",
                        onWaiting: "onwaiting",
                        onZoom: "onzoom",
                        overlinePosition: "overline-position",
                        overlineThickness: "overline-thickness",
                        paintOrder: "paint-order",
                        panose1: "panose-1",
                        pointerEvents: "pointer-events",
                        referrerPolicy: "referrerpolicy",
                        renderingIntent: "rendering-intent",
                        shapeRendering: "shape-rendering",
                        stopColor: "stop-color",
                        stopOpacity: "stop-opacity",
                        strikethroughPosition: "strikethrough-position",
                        strikethroughThickness: "strikethrough-thickness",
                        strokeDashArray: "stroke-dasharray",
                        strokeDashOffset: "stroke-dashoffset",
                        strokeLineCap: "stroke-linecap",
                        strokeLineJoin: "stroke-linejoin",
                        strokeMiterLimit: "stroke-miterlimit",
                        strokeOpacity: "stroke-opacity",
                        strokeWidth: "stroke-width",
                        tabIndex: "tabindex",
                        textAnchor: "text-anchor",
                        textDecoration: "text-decoration",
                        textRendering: "text-rendering",
                        typeOf: "typeof",
                        underlinePosition: "underline-position",
                        underlineThickness: "underline-thickness",
                        unicodeBidi: "unicode-bidi",
                        unicodeRange: "unicode-range",
                        unitsPerEm: "units-per-em",
                        vAlphabetic: "v-alphabetic",
                        vHanging: "v-hanging",
                        vIdeographic: "v-ideographic",
                        vMathematical: "v-mathematical",
                        vectorEffect: "vector-effect",
                        vertAdvY: "vert-adv-y",
                        vertOriginX: "vert-origin-x",
                        vertOriginY: "vert-origin-y",
                        wordSpacing: "word-spacing",
                        writingMode: "writing-mode",
                        xHeight: "x-height",
                        playbackOrder: "playbackorder",
                        timelineBegin: "timelinebegin"
                    },
                    transform: St,
                    properties: {
                        about: ht,
                        accentHeight: ft,
                        accumulate: null,
                        additive: null,
                        alignmentBaseline: null,
                        alphabetic: ft,
                        amplitude: ft,
                        arabicForm: null,
                        ascent: ft,
                        attributeName: null,
                        attributeType: null,
                        azimuth: ft,
                        bandwidth: null,
                        baselineShift: null,
                        baseFrequency: null,
                        baseProfile: null,
                        bbox: null,
                        begin: null,
                        bias: ft,
                        by: null,
                        calcMode: null,
                        capHeight: ft,
                        className: pt,
                        clip: null,
                        clipPath: null,
                        clipPathUnits: null,
                        clipRule: null,
                        color: null,
                        colorInterpolation: null,
                        colorInterpolationFilters: null,
                        colorProfile: null,
                        colorRendering: null,
                        content: null,
                        contentScriptType: null,
                        contentStyleType: null,
                        crossOrigin: null,
                        cursor: null,
                        cx: null,
                        cy: null,
                        d: null,
                        dataType: null,
                        defaultAction: null,
                        descent: ft,
                        diffuseConstant: ft,
                        direction: null,
                        display: null,
                        dur: null,
                        divisor: ft,
                        dominantBaseline: null,
                        download: at,
                        dx: null,
                        dy: null,
                        edgeMode: null,
                        editable: null,
                        elevation: ft,
                        enableBackground: null,
                        end: null,
                        event: null,
                        exponent: ft,
                        externalResourcesRequired: null,
                        fill: null,
                        fillOpacity: ft,
                        fillRule: null,
                        filter: null,
                        filterRes: null,
                        filterUnits: null,
                        floodColor: null,
                        floodOpacity: null,
                        focusable: null,
                        focusHighlight: null,
                        fontFamily: null,
                        fontSize: null,
                        fontSizeAdjust: null,
                        fontStretch: null,
                        fontStyle: null,
                        fontVariant: null,
                        fontWeight: null,
                        format: null,
                        fr: null,
                        from: null,
                        fx: null,
                        fy: null,
                        g1: dt,
                        g2: dt,
                        glyphName: dt,
                        glyphOrientationHorizontal: null,
                        glyphOrientationVertical: null,
                        glyphRef: null,
                        gradientTransform: null,
                        gradientUnits: null,
                        handler: null,
                        hanging: ft,
                        hatchContentUnits: null,
                        hatchUnits: null,
                        height: null,
                        href: null,
                        hrefLang: null,
                        horizAdvX: ft,
                        horizOriginX: ft,
                        horizOriginY: ft,
                        id: null,
                        ideographic: ft,
                        imageRendering: null,
                        initialVisibility: null,
                        in: null,
                        in2: null,
                        intercept: ft,
                        k: ft,
                        k1: ft,
                        k2: ft,
                        k3: ft,
                        k4: ft,
                        kernelMatrix: ht,
                        kernelUnitLength: null,
                        keyPoints: null,
                        keySplines: null,
                        keyTimes: null,
                        kerning: null,
                        lang: null,
                        lengthAdjust: null,
                        letterSpacing: null,
                        lightingColor: null,
                        limitingConeAngle: ft,
                        local: null,
                        markerEnd: null,
                        markerMid: null,
                        markerStart: null,
                        markerHeight: null,
                        markerUnits: null,
                        markerWidth: null,
                        mask: null,
                        maskContentUnits: null,
                        maskUnits: null,
                        mathematical: null,
                        max: null,
                        media: null,
                        mediaCharacterEncoding: null,
                        mediaContentEncodings: null,
                        mediaSize: ft,
                        mediaTime: null,
                        method: null,
                        min: null,
                        mode: null,
                        name: null,
                        navDown: null,
                        navDownLeft: null,
                        navDownRight: null,
                        navLeft: null,
                        navNext: null,
                        navPrev: null,
                        navRight: null,
                        navUp: null,
                        navUpLeft: null,
                        navUpRight: null,
                        numOctaves: null,
                        observer: null,
                        offset: null,
                        onAbort: null,
                        onActivate: null,
                        onAfterPrint: null,
                        onBeforePrint: null,
                        onBegin: null,
                        onCancel: null,
                        onCanPlay: null,
                        onCanPlayThrough: null,
                        onChange: null,
                        onClick: null,
                        onClose: null,
                        onCopy: null,
                        onCueChange: null,
                        onCut: null,
                        onDblClick: null,
                        onDrag: null,
                        onDragEnd: null,
                        onDragEnter: null,
                        onDragExit: null,
                        onDragLeave: null,
                        onDragOver: null,
                        onDragStart: null,
                        onDrop: null,
                        onDurationChange: null,
                        onEmptied: null,
                        onEnd: null,
                        onEnded: null,
                        onError: null,
                        onFocus: null,
                        onFocusIn: null,
                        onFocusOut: null,
                        onHashChange: null,
                        onInput: null,
                        onInvalid: null,
                        onKeyDown: null,
                        onKeyPress: null,
                        onKeyUp: null,
                        onLoad: null,
                        onLoadedData: null,
                        onLoadedMetadata: null,
                        onLoadStart: null,
                        onMessage: null,
                        onMouseDown: null,
                        onMouseEnter: null,
                        onMouseLeave: null,
                        onMouseMove: null,
                        onMouseOut: null,
                        onMouseOver: null,
                        onMouseUp: null,
                        onMouseWheel: null,
                        onOffline: null,
                        onOnline: null,
                        onPageHide: null,
                        onPageShow: null,
                        onPaste: null,
                        onPause: null,
                        onPlay: null,
                        onPlaying: null,
                        onPopState: null,
                        onProgress: null,
                        onRateChange: null,
                        onRepeat: null,
                        onReset: null,
                        onResize: null,
                        onScroll: null,
                        onSeeked: null,
                        onSeeking: null,
                        onSelect: null,
                        onShow: null,
                        onStalled: null,
                        onStorage: null,
                        onSubmit: null,
                        onSuspend: null,
                        onTimeUpdate: null,
                        onToggle: null,
                        onUnload: null,
                        onVolumeChange: null,
                        onWaiting: null,
                        onZoom: null,
                        opacity: null,
                        operator: null,
                        order: null,
                        orient: null,
                        orientation: null,
                        origin: null,
                        overflow: null,
                        overlay: null,
                        overlinePosition: ft,
                        overlineThickness: ft,
                        paintOrder: null,
                        panose1: null,
                        path: null,
                        pathLength: ft,
                        patternContentUnits: null,
                        patternTransform: null,
                        patternUnits: null,
                        phase: null,
                        ping: pt,
                        pitch: null,
                        playbackOrder: null,
                        pointerEvents: null,
                        points: null,
                        pointsAtX: ft,
                        pointsAtY: ft,
                        pointsAtZ: ft,
                        preserveAlpha: null,
                        preserveAspectRatio: null,
                        primitiveUnits: null,
                        propagate: null,
                        property: ht,
                        r: null,
                        radius: null,
                        referrerPolicy: null,
                        refX: null,
                        refY: null,
                        rel: ht,
                        rev: ht,
                        renderingIntent: null,
                        repeatCount: null,
                        repeatDur: null,
                        requiredExtensions: ht,
                        requiredFeatures: ht,
                        requiredFonts: ht,
                        requiredFormats: ht,
                        resource: null,
                        restart: null,
                        result: null,
                        rotate: null,
                        rx: null,
                        ry: null,
                        scale: null,
                        seed: null,
                        shapeRendering: null,
                        side: null,
                        slope: null,
                        snapshotTime: null,
                        specularConstant: ft,
                        specularExponent: ft,
                        spreadMethod: null,
                        spacing: null,
                        startOffset: null,
                        stdDeviation: null,
                        stemh: null,
                        stemv: null,
                        stitchTiles: null,
                        stopColor: null,
                        stopOpacity: null,
                        strikethroughPosition: ft,
                        strikethroughThickness: ft,
                        string: null,
                        stroke: null,
                        strokeDashArray: ht,
                        strokeDashOffset: null,
                        strokeLineCap: null,
                        strokeLineJoin: null,
                        strokeMiterLimit: ft,
                        strokeOpacity: ft,
                        strokeWidth: null,
                        style: null,
                        surfaceScale: ft,
                        syncBehavior: null,
                        syncBehaviorDefault: null,
                        syncMaster: null,
                        syncTolerance: null,
                        syncToleranceDefault: null,
                        systemLanguage: ht,
                        tabIndex: ft,
                        tableValues: null,
                        target: null,
                        targetX: ft,
                        targetY: ft,
                        textAnchor: null,
                        textDecoration: null,
                        textRendering: null,
                        textLength: null,
                        timelineBegin: null,
                        title: null,
                        transformBehavior: null,
                        type: null,
                        typeOf: ht,
                        to: null,
                        transform: null,
                        u1: null,
                        u2: null,
                        underlinePosition: ft,
                        underlineThickness: ft,
                        unicode: null,
                        unicodeBidi: null,
                        unicodeRange: null,
                        unitsPerEm: ft,
                        values: null,
                        vAlphabetic: ft,
                        vMathematical: ft,
                        vectorEffect: null,
                        vHanging: ft,
                        vIdeographic: ft,
                        version: null,
                        vertAdvY: ft,
                        vertOriginX: ft,
                        vertOriginY: ft,
                        viewBox: null,
                        viewTarget: null,
                        visibility: null,
                        width: null,
                        widths: null,
                        wordSpacing: null,
                        writingMode: null,
                        x: null,
                        x1: null,
                        x2: null,
                        xChannelSelector: null,
                        xHeight: ft,
                        y: null,
                        y1: null,
                        y2: null,
                        yChannelSelector: null,
                        z: null,
                        zoomAndPan: null
                    }
                }),
                Pt = ot([wt, bt, Ct, At, Ft], "html"),
                Dt = ot([wt, bt, Ct, At, Tt], "svg");

            function Ot(e) {
                if (e.allowedElements && e.disallowedElements) throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");
                if (e.allowedElements || e.disallowedElements || e.allowElement) return n => {
                    zn(n, "element", ((n, t, r) => {
                        const o = r;
                        let i;
                        if (e.allowedElements ? i = !e.allowedElements.includes(n.tagName) : e.disallowedElements && (i = e.disallowedElements.includes(n.tagName)), !i && e.allowElement && "number" === typeof t && (i = !e.allowElement(n, t, o)), i && "number" === typeof t) return e.unwrapDisallowed && n.children ? o.children.splice(t, 1, ...n.children) : o.children.splice(t, 1), t
                    }))
                }
            }
            var It = t(72037);

            function Lt(e) {
                const n = e && "object" === typeof e && "text" === e.type ? e.value || "" : e;
                return "string" === typeof n && "" === n.replace(/[ \t\n\f\r]/g, "")
            }
            const zt = /^data[-\w.:]+$/i,
                Mt = /-[a-z]/g,
                Rt = /[A-Z]/g;

            function Bt(e) {
                return "-" + e.toLowerCase()
            }

            function _t(e) {
                return e.charAt(1).toUpperCase()
            }
            const Nt = {
                classId: "classID",
                dataType: "datatype",
                itemId: "itemID",
                strokeDashArray: "strokeDasharray",
                strokeDashOffset: "strokeDashoffset",
                strokeLineCap: "strokeLinecap",
                strokeLineJoin: "strokeLinejoin",
                strokeMiterLimit: "strokeMiterlimit",
                typeOf: "typeof",
                xLinkActuate: "xlinkActuate",
                xLinkArcRole: "xlinkArcrole",
                xLinkHref: "xlinkHref",
                xLinkRole: "xlinkRole",
                xLinkShow: "xlinkShow",
                xLinkTitle: "xlinkTitle",
                xLinkType: "xlinkType",
                xmlnsXLink: "xmlnsXlink"
            };
            var jt = t(4142);
            const Ht = ["http", "https", "mailto", "tel"];

            function Ut(e) {
                const n = (e || "").trim(),
                    t = n.charAt(0);
                if ("#" === t || "/" === t) return n;
                const r = n.indexOf(":");
                if (-1 === r) return n;
                let o = -1;
                for (; ++o < Ht.length;) {
                    const e = Ht[o];
                    if (r === e.length && n.slice(0, e.length).toLowerCase() === e) return n
                }
                return o = n.indexOf("?"), -1 !== o && r > o ? n : (o = n.indexOf("#"), -1 !== o && r > o ? n : "javascript:void(0)")
            }
            const Vt = {}.hasOwnProperty,
                qt = new Set(["table", "thead", "tbody", "tfoot", "tr"]);

            function $t(e, n) {
                const t = [];
                let r, o = -1;
                for (; ++o < n.children.length;) r = n.children[o], "element" === r.type ? t.push(Wt(e, r, o, n)) : "text" === r.type ? "element" === n.type && qt.has(n.tagName) && Lt(r) || t.push(r.value) : "raw" !== r.type || e.options.skipHtml || t.push(r.value);
                return t
            }

            function Wt(e, n, t, r) {
                const o = e.options,
                    l = void 0 === o.transformLinkUri ? Ut : o.transformLinkUri,
                    u = e.schema,
                    a = n.tagName,
                    c = {};
                let s, f = u;
                if ("html" === u.space && "svg" === a && (f = Dt, e.schema = f), n.properties)
                    for (s in n.properties) Vt.call(n.properties, s) && Qt(c, s, n.properties[s], e);
                "ol" !== a && "ul" !== a || e.listDepth++;
                const p = $t(e, n);
                "ol" !== a && "ul" !== a || e.listDepth--, e.schema = u;
                const d = n.position || {
                        start: {
                            line: null,
                            column: null,
                            offset: null
                        },
                        end: {
                            line: null,
                            column: null,
                            offset: null
                        }
                    },
                    h = o.components && Vt.call(o.components, a) ? o.components[a] : a,
                    m = "string" === typeof h || h === i.Fragment;
                if (!It.isValidElementType(h)) throw new TypeError(`Component for name \`${a}\` not defined or is not renderable`);
                if (c.key = t, "a" === a && o.linkTarget && (c.target = "function" === typeof o.linkTarget ? o.linkTarget(String(c.href || ""), n.children, "string" === typeof c.title ? c.title : null) : o.linkTarget), "a" === a && l && (c.href = l(String(c.href || ""), n.children, "string" === typeof c.title ? c.title : null)), m || "code" !== a || "element" !== r.type || "pre" === r.tagName || (c.inline = !0), m || "h1" !== a && "h2" !== a && "h3" !== a && "h4" !== a && "h5" !== a && "h6" !== a || (c.level = Number.parseInt(a.charAt(1), 10)), "img" === a && o.transformImageUri && (c.src = o.transformImageUri(String(c.src || ""), String(c.alt || ""), "string" === typeof c.title ? c.title : null)), !m && "li" === a && "element" === r.type) {
                    const e = function(e) {
                        let n = -1;
                        for (; ++n < e.children.length;) {
                            const t = e.children[n];
                            if ("element" === t.type && "input" === t.tagName) return t
                        }
                        return null
                    }(n);
                    c.checked = e && e.properties ? Boolean(e.properties.checked) : null, c.index = Yt(r, n), c.ordered = "ol" === r.tagName
                }
                var g;
                return m || "ol" !== a && "ul" !== a || (c.ordered = "ol" === a, c.depth = e.listDepth), "td" !== a && "th" !== a || (c.align && (c.style || (c.style = {}), c.style.textAlign = c.align, delete c.align), m || (c.isHeader = "th" === a)), m || "tr" !== a || "element" !== r.type || (c.isHeader = Boolean("thead" === r.tagName)), o.sourcePos && (c["data-sourcepos"] = [(g = d).start.line, ":", g.start.column, "-", g.end.line, ":", g.end.column].map(String).join("")), !m && o.rawSourcePos && (c.sourcePosition = n.position), !m && o.includeElementIndex && (c.index = Yt(r, n), c.siblingCount = Yt(r)), m || (c.node = n), p.length > 0 ? i.createElement(h, c, p) : i.createElement(h, c)
            }

            function Yt(e, n) {
                let t = -1,
                    r = 0;
                for (; ++t < e.children.length && e.children[t] !== n;) "element" === e.children[t].type && r++;
                return r
            }

            function Qt(e, n, t, r) {
                const o = function(e, n) {
                    const t = it(n);
                    let r = n,
                        o = lt;
                    if (t in e.normal) return e.property[e.normal[t]];
                    if (t.length > 4 && "data" === t.slice(0, 4) && zt.test(n)) {
                        if ("-" === n.charAt(4)) {
                            const e = n.slice(5).replace(Mt, _t);
                            r = "data" + e.charAt(0).toUpperCase() + e.slice(1)
                        } else {
                            const e = n.slice(4);
                            if (!Mt.test(e)) {
                                let t = e.replace(Rt, Bt);
                                "-" !== t.charAt(0) && (t = "-" + t), n = "data" + t
                            }
                        }
                        o = yt
                    }
                    return new o(r, n)
                }(r.schema, n);
                let i = t;
                null !== i && void 0 !== i && i === i && (Array.isArray(i) && (i = o.commaSeparated ? function(e, n) {
                    const t = n || {};
                    return ("" === e[e.length - 1] ? [...e, ""] : e).join((t.padRight ? " " : "") + "," + (!1 === t.padLeft ? "" : " ")).trim()
                }(i) : i.join(" ").trim()), "style" === o.property && "string" === typeof i && (i = function(e) {
                    const n = {};
                    try {
                        jt(e, t)
                    } catch {}
                    return n;

                    function t(e, t) {
                        const r = "-ms-" === e.slice(0, 4) ? `ms-${e.slice(4)}` : e;
                        n[r.replace(/-([a-z])/g, Kt)] = t
                    }
                }(i)), o.space && o.property ? e[Vt.call(Nt, o.property) ? Nt[o.property] : o.property] = i : o.attribute && (e[o.attribute] = i))
            }

            function Kt(e, n) {
                return n.toUpperCase()
            }
            const Xt = {}.hasOwnProperty,
                Zt = {
                    plugins: {
                        to: "remarkPlugins",
                        id: "change-plugins-to-remarkplugins"
                    },
                    renderers: {
                        to: "components",
                        id: "change-renderers-to-components"
                    },
                    astPlugins: {
                        id: "remove-buggy-html-in-markdown-parser"
                    },
                    allowDangerousHtml: {
                        id: "remove-buggy-html-in-markdown-parser"
                    },
                    escapeHtml: {
                        id: "remove-buggy-html-in-markdown-parser"
                    },
                    source: {
                        to: "children",
                        id: "change-source-to-children"
                    },
                    allowNode: {
                        to: "allowElement",
                        id: "replace-allownode-allowedtypes-and-disallowedtypes"
                    },
                    allowedTypes: {
                        to: "allowedElements",
                        id: "replace-allownode-allowedtypes-and-disallowedtypes"
                    },
                    disallowedTypes: {
                        to: "disallowedElements",
                        id: "replace-allownode-allowedtypes-and-disallowedtypes"
                    },
                    includeNodeIndex: {
                        to: "includeElementIndex",
                        id: "change-includenodeindex-to-includeelementindex"
                    }
                };

            function Jt(e) {
                for (const i in Zt)
                    if (Xt.call(Zt, i) && Xt.call(e, i)) {
                        const e = Zt[i];
                        console.warn(`[react-markdown] Warning: please ${e.to?`use \`${e.to}\` instead of`:"remove"} \`${i}\` (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#${e.id}> for more info)`), delete Zt[i]
                    }
                const n = A().use(Tn).use(e.remarkPlugins || []).use(nt, { ...e.remarkRehypeOptions,
                        allowDangerousHtml: !0
                    }).use(e.rehypePlugins || []).use(Ot, e),
                    t = new k;
                "string" === typeof e.children ? t.value = e.children : void 0 !== e.children && null !== e.children && console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);
                const r = n.runSync(n.parse(t), t);
                if ("root" !== r.type) throw new TypeError("Expected a `root` node");
                let o = i.createElement(i.Fragment, {}, $t({
                    options: e,
                    schema: Pt,
                    listDepth: 0
                }, r));
                return e.className && (o = i.createElement("div", {
                    className: e.className
                }, o)), o
            }
            Jt.propTypes = {
                children: tt.string,
                className: tt.string,
                allowElement: tt.func,
                allowedElements: tt.arrayOf(tt.string),
                disallowedElements: tt.arrayOf(tt.string),
                unwrapDisallowed: tt.bool,
                remarkPlugins: tt.arrayOf(tt.oneOfType([tt.object, tt.func, tt.arrayOf(tt.oneOfType([tt.bool, tt.string, tt.object, tt.func, tt.arrayOf(tt.any)]))])),
                rehypePlugins: tt.arrayOf(tt.oneOfType([tt.object, tt.func, tt.arrayOf(tt.oneOfType([tt.bool, tt.string, tt.object, tt.func, tt.arrayOf(tt.any)]))])),
                sourcePos: tt.bool,
                rawSourcePos: tt.bool,
                skipHtml: tt.bool,
                includeElementIndex: tt.bool,
                transformLinkUri: tt.oneOfType([tt.func, tt.bool]),
                linkTarget: tt.oneOfType([tt.func, tt.string]),
                transformImageUri: tt.func,
                components: tt.object
            }
        }
    }
]);