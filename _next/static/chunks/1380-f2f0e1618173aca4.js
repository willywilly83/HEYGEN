(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1380], {
        83067: function(r) {
            r.exports = function(r) {
                for (var n = -1, e = null == r ? 0 : r.length, t = {}; ++n < e;) {
                    var a = r[n];
                    t[a[0]] = a[1]
                }
                return t
            }
        },
        42952: function(r) {
            r.exports = function() {
                "use strict";
                for (var r = function(r, n, e) {
                        return void 0 === n && (n = 0), void 0 === e && (e = 1), r < n ? n : r > e ? e : r
                    }, n = r, e = function(r) {
                        r._clipped = !1, r._unclipped = r.slice(0);
                        for (var e = 0; e <= 3; e++) e < 3 ? ((r[e] < 0 || r[e] > 255) && (r._clipped = !0), r[e] = n(r[e], 0, 255)) : 3 === e && (r[e] = n(r[e], 0, 1));
                        return r
                    }, t = {}, a = 0, f = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; a < f.length; a += 1) {
                    var o = f[a];
                    t["[object " + o + "]"] = o.toLowerCase()
                }
                var u = function(r) {
                        return t[Object.prototype.toString.call(r)] || "object"
                    },
                    c = u,
                    i = function(r, n) {
                        return void 0 === n && (n = null), r.length >= 3 ? Array.prototype.slice.call(r) : "object" == c(r[0]) && n ? n.split("").filter((function(n) {
                            return void 0 !== r[0][n]
                        })).map((function(n) {
                            return r[0][n]
                        })) : r[0]
                    },
                    l = u,
                    h = function(r) {
                        if (r.length < 2) return null;
                        var n = r.length - 1;
                        return "string" == l(r[n]) ? r[n].toLowerCase() : null
                    },
                    s = Math.PI,
                    d = {
                        clip_rgb: e,
                        limit: r,
                        type: u,
                        unpack: i,
                        last: h,
                        PI: s,
                        TWOPI: 2 * s,
                        PITHIRD: s / 3,
                        DEG2RAD: s / 180,
                        RAD2DEG: 180 / s
                    },
                    b = {
                        format: {},
                        autodetect: []
                    },
                    p = d.last,
                    g = d.clip_rgb,
                    v = d.type,
                    m = b,
                    y = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        var e = this;
                        if ("object" === v(r[0]) && r[0].constructor && r[0].constructor === this.constructor) return r[0];
                        var t = p(r),
                            a = !1;
                        if (!t) {
                            a = !0, m.sorted || (m.autodetect = m.autodetect.sort((function(r, n) {
                                return n.p - r.p
                            })), m.sorted = !0);
                            for (var f = 0, o = m.autodetect; f < o.length; f += 1) {
                                var u = o[f];
                                if (t = u.test.apply(u, r)) break
                            }
                        }
                        if (!m.format[t]) throw new Error("unknown format: " + r);
                        var c = m.format[t].apply(null, a ? r : r.slice(0, -1));
                        e._rgb = g(c), 3 === e._rgb.length && e._rgb.push(1)
                    };
                y.prototype.toString = function() {
                    return "function" == v(this.hex) ? this.hex() : "[" + this._rgb.join(",") + "]"
                };
                var k = y,
                    w = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        return new(Function.prototype.bind.apply(w.Color, [null].concat(r)))
                    };
                w.Color = k, w.version = "2.4.2";
                var M = w,
                    _ = d.unpack,
                    N = Math.max,
                    x = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        var e = _(r, "rgb"),
                            t = e[0],
                            a = e[1],
                            f = e[2],
                            o = 1 - N(t /= 255, N(a /= 255, f /= 255)),
                            u = o < 1 ? 1 / (1 - o) : 0;
                        return [(1 - t - o) * u, (1 - a - o) * u, (1 - f - o) * u, o]
                    },
                    A = x,
                    E = d.unpack,
                    F = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        var e = (r = E(r, "cmyk"))[0],
                            t = r[1],
                            a = r[2],
                            f = r[3],
                            o = r.length > 4 ? r[4] : 1;
                        return 1 === f ? [0, 0, 0, o] : [e >= 1 ? 0 : 255 * (1 - e) * (1 - f), t >= 1 ? 0 : 255 * (1 - t) * (1 - f), a >= 1 ? 0 : 255 * (1 - a) * (1 - f), o]
                    },
                    P = F,
                    O = M,
                    G = k,
                    R = b,
                    j = d.unpack,
                    q = d.type,
                    L = A;
                G.prototype.cmyk = function() {
                    return L(this._rgb)
                }, O.cmyk = function() {
                    for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                    return new(Function.prototype.bind.apply(G, [null].concat(r, ["cmyk"])))
                }, R.format.cmyk = P, R.autodetect.push({
                    p: 2,
                    test: function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        if (r = j(r, "cmyk"), "array" === q(r) && 4 === r.length) return "cmyk"
                    }
                });
                var C = d.unpack,
                    I = d.last,
                    B = function(r) {
                        return Math.round(100 * r) / 100
                    },
                    D = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        var e = C(r, "hsla"),
                            t = I(r) || "lsa";
                        return e[0] = B(e[0] || 0), e[1] = B(100 * e[1]) + "%", e[2] = B(100 * e[2]) + "%", "hsla" === t || e.length > 3 && e[3] < 1 ? (e[3] = e.length > 3 ? e[3] : 1, t = "hsla") : e.length = 3, t + "(" + e.join(",") + ")"
                    },
                    Y = D,
                    S = d.unpack,
                    $ = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        var e = (r = S(r, "rgba"))[0],
                            t = r[1],
                            a = r[2];
                        e /= 255, t /= 255, a /= 255;
                        var f, o, u = Math.min(e, t, a),
                            c = Math.max(e, t, a),
                            i = (c + u) / 2;
                        return c === u ? (f = 0, o = Number.NaN) : f = i < .5 ? (c - u) / (c + u) : (c - u) / (2 - c - u), e == c ? o = (t - a) / (c - u) : t == c ? o = 2 + (a - e) / (c - u) : a == c && (o = 4 + (e - t) / (c - u)), (o *= 60) < 0 && (o += 360), r.length > 3 && void 0 !== r[3] ? [o, f, i, r[3]] : [o, f, i]
                    },
                    z = $,
                    T = d.unpack,
                    X = d.last,
                    U = Y,
                    V = z,
                    W = Math.round,
                    K = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        var e = T(r, "rgba"),
                            t = X(r) || "rgb";
                        return "hsl" == t.substr(0, 3) ? U(V(e), t) : (e[0] = W(e[0]), e[1] = W(e[1]), e[2] = W(e[2]), ("rgba" === t || e.length > 3 && e[3] < 1) && (e[3] = e.length > 3 ? e[3] : 1, t = "rgba"), t + "(" + e.slice(0, "rgb" === t ? 3 : 4).join(",") + ")")
                    },
                    Z = K,
                    H = d.unpack,
                    J = Math.round,
                    Q = function() {
                        for (var r, n = [], e = arguments.length; e--;) n[e] = arguments[e];
                        var t, a, f, o = (n = H(n, "hsl"))[0],
                            u = n[1],
                            c = n[2];
                        if (0 === u) t = a = f = 255 * c;
                        else {
                            var i = [0, 0, 0],
                                l = [0, 0, 0],
                                h = c < .5 ? c * (1 + u) : c + u - c * u,
                                s = 2 * c - h,
                                d = o / 360;
                            i[0] = d + 1 / 3, i[1] = d, i[2] = d - 1 / 3;
                            for (var b = 0; b < 3; b++) i[b] < 0 && (i[b] += 1), i[b] > 1 && (i[b] -= 1), 6 * i[b] < 1 ? l[b] = s + 6 * (h - s) * i[b] : 2 * i[b] < 1 ? l[b] = h : 3 * i[b] < 2 ? l[b] = s + (h - s) * (2 / 3 - i[b]) * 6 : l[b] = s;
                            t = (r = [J(255 * l[0]), J(255 * l[1]), J(255 * l[2])])[0], a = r[1], f = r[2]
                        }
                        return n.length > 3 ? [t, a, f, n[3]] : [t, a, f, 1]
                    },
                    rr = Q,
                    nr = rr,
                    er = b,
                    tr = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
                    ar = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
                    fr = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
                    or = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
                    ur = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
                    cr = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
                    ir = Math.round,
                    lr = function(r) {
                        var n;
                        if (r = r.toLowerCase().trim(), er.format.named) try {
                            return er.format.named(r)
                        } catch (b) {}
                        if (n = r.match(tr)) {
                            for (var e = n.slice(1, 4), t = 0; t < 3; t++) e[t] = +e[t];
                            return e[3] = 1, e
                        }
                        if (n = r.match(ar)) {
                            for (var a = n.slice(1, 5), f = 0; f < 4; f++) a[f] = +a[f];
                            return a
                        }
                        if (n = r.match(fr)) {
                            for (var o = n.slice(1, 4), u = 0; u < 3; u++) o[u] = ir(2.55 * o[u]);
                            return o[3] = 1, o
                        }
                        if (n = r.match(or)) {
                            for (var c = n.slice(1, 5), i = 0; i < 3; i++) c[i] = ir(2.55 * c[i]);
                            return c[3] = +c[3], c
                        }
                        if (n = r.match(ur)) {
                            var l = n.slice(1, 4);
                            l[1] *= .01, l[2] *= .01;
                            var h = nr(l);
                            return h[3] = 1, h
                        }
                        if (n = r.match(cr)) {
                            var s = n.slice(1, 4);
                            s[1] *= .01, s[2] *= .01;
                            var d = nr(s);
                            return d[3] = +n[4], d
                        }
                    };
                lr.test = function(r) {
                    return tr.test(r) || ar.test(r) || fr.test(r) || or.test(r) || ur.test(r) || cr.test(r)
                };
                var hr = lr,
                    sr = M,
                    dr = k,
                    br = b,
                    pr = d.type,
                    gr = Z,
                    vr = hr;
                dr.prototype.css = function(r) {
                    return gr(this._rgb, r)
                }, sr.css = function() {
                    for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                    return new(Function.prototype.bind.apply(dr, [null].concat(r, ["css"])))
                }, br.format.css = vr, br.autodetect.push({
                    p: 5,
                    test: function(r) {
                        for (var n = [], e = arguments.length - 1; e-- > 0;) n[e] = arguments[e + 1];
                        if (!n.length && "string" === pr(r) && vr.test(r)) return "css"
                    }
                });
                var mr = k,
                    yr = M,
                    kr = b,
                    wr = d.unpack;
                kr.format.gl = function() {
                    for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                    var e = wr(r, "rgba");
                    return e[0] *= 255, e[1] *= 255, e[2] *= 255, e
                }, yr.gl = function() {
                    for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                    return new(Function.prototype.bind.apply(mr, [null].concat(r, ["gl"])))
                }, mr.prototype.gl = function() {
                    var r = this._rgb;
                    return [r[0] / 255, r[1] / 255, r[2] / 255, r[3]]
                };
                var Mr = d.unpack,
                    _r = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        var e, t = Mr(r, "rgb"),
                            a = t[0],
                            f = t[1],
                            o = t[2],
                            u = Math.min(a, f, o),
                            c = Math.max(a, f, o),
                            i = c - u,
                            l = 100 * i / 255,
                            h = u / (255 - i) * 100;
                        return 0 === i ? e = Number.NaN : (a === c && (e = (f - o) / i), f === c && (e = 2 + (o - a) / i), o === c && (e = 4 + (a - f) / i), (e *= 60) < 0 && (e += 360)), [e, l, h]
                    },
                    Nr = _r,
                    xr = d.unpack,
                    Ar = Math.floor,
                    Er = function() {
                        for (var r, n, e, t, a, f, o = [], u = arguments.length; u--;) o[u] = arguments[u];
                        var c, i, l, h = (o = xr(o, "hcg"))[0],
                            s = o[1],
                            d = o[2];
                        d *= 255;
                        var b = 255 * s;
                        if (0 === s) c = i = l = d;
                        else {
                            360 === h && (h = 0), h > 360 && (h -= 360), h < 0 && (h += 360);
                            var p = Ar(h /= 60),
                                g = h - p,
                                v = d * (1 - s),
                                m = v + b * (1 - g),
                                y = v + b * g,
                                k = v + b;
                            switch (p) {
                                case 0:
                                    c = (r = [k, y, v])[0], i = r[1], l = r[2];
                                    break;
                                case 1:
                                    c = (n = [m, k, v])[0], i = n[1], l = n[2];
                                    break;
                                case 2:
                                    c = (e = [v, k, y])[0], i = e[1], l = e[2];
                                    break;
                                case 3:
                                    c = (t = [v, m, k])[0], i = t[1], l = t[2];
                                    break;
                                case 4:
                                    c = (a = [y, v, k])[0], i = a[1], l = a[2];
                                    break;
                                case 5:
                                    c = (f = [k, v, m])[0], i = f[1], l = f[2]
                            }
                        }
                        return [c, i, l, o.length > 3 ? o[3] : 1]
                    },
                    Fr = Er,
                    Pr = d.unpack,
                    Or = d.type,
                    Gr = M,
                    Rr = k,
                    jr = b,
                    qr = Nr;
                Rr.prototype.hcg = function() {
                    return qr(this._rgb)
                }, Gr.hcg = function() {
                    for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                    return new(Function.prototype.bind.apply(Rr, [null].concat(r, ["hcg"])))
                }, jr.format.hcg = Fr, jr.autodetect.push({
                    p: 1,
                    test: function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        if (r = Pr(r, "hcg"), "array" === Or(r) && 3 === r.length) return "hcg"
                    }
                });
                var Lr = d.unpack,
                    Cr = d.last,
                    Ir = Math.round,
                    Br = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        var e = Lr(r, "rgba"),
                            t = e[0],
                            a = e[1],
                            f = e[2],
                            o = e[3],
                            u = Cr(r) || "auto";
                        void 0 === o && (o = 1), "auto" === u && (u = o < 1 ? "rgba" : "rgb");
                        var c = "000000" + ((t = Ir(t)) << 16 | (a = Ir(a)) << 8 | (f = Ir(f))).toString(16);
                        c = c.substr(c.length - 6);
                        var i = "0" + Ir(255 * o).toString(16);
                        switch (i = i.substr(i.length - 2), u.toLowerCase()) {
                            case "rgba":
                                return "#" + c + i;
                            case "argb":
                                return "#" + i + c;
                            default:
                                return "#" + c
                        }
                    },
                    Dr = Br,
                    Yr = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
                    Sr = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
                    $r = function(r) {
                        if (r.match(Yr)) {
                            4 !== r.length && 7 !== r.length || (r = r.substr(1)), 3 === r.length && (r = (r = r.split(""))[0] + r[0] + r[1] + r[1] + r[2] + r[2]);
                            var n = parseInt(r, 16);
                            return [n >> 16, n >> 8 & 255, 255 & n, 1]
                        }
                        if (r.match(Sr)) {
                            5 !== r.length && 9 !== r.length || (r = r.substr(1)), 4 === r.length && (r = (r = r.split(""))[0] + r[0] + r[1] + r[1] + r[2] + r[2] + r[3] + r[3]);
                            var e = parseInt(r, 16);
                            return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, Math.round((255 & e) / 255 * 100) / 100]
                        }
                        throw new Error("unknown hex color: " + r)
                    },
                    zr = M,
                    Tr = k,
                    Xr = d.type,
                    Ur = b,
                    Vr = Dr;
                Tr.prototype.hex = function(r) {
                    return Vr(this._rgb, r)
                }, zr.hex = function() {
                    for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                    return new(Function.prototype.bind.apply(Tr, [null].concat(r, ["hex"])))
                }, Ur.format.hex = $r, Ur.autodetect.push({
                    p: 4,
                    test: function(r) {
                        for (var n = [], e = arguments.length - 1; e-- > 0;) n[e] = arguments[e + 1];
                        if (!n.length && "string" === Xr(r) && [3, 4, 5, 6, 7, 8, 9].indexOf(r.length) >= 0) return "hex"
                    }
                });
                var Wr = d.unpack,
                    Kr = d.TWOPI,
                    Zr = Math.min,
                    Hr = Math.sqrt,
                    Jr = Math.acos,
                    Qr = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        var e, t = Wr(r, "rgb"),
                            a = t[0],
                            f = t[1],
                            o = t[2],
                            u = Zr(a /= 255, f /= 255, o /= 255),
                            c = (a + f + o) / 3,
                            i = c > 0 ? 1 - u / c : 0;
                        return 0 === i ? e = NaN : (e = (a - f + (a - o)) / 2, e /= Hr((a - f) * (a - f) + (a - o) * (f - o)), e = Jr(e), o > f && (e = Kr - e), e /= Kr), [360 * e, i, c]
                    },
                    rn = Qr,
                    nn = d.unpack,
                    en = d.limit,
                    tn = d.TWOPI,
                    an = d.PITHIRD,
                    fn = Math.cos,
                    on = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        var e, t, a, f = (r = nn(r, "hsi"))[0],
                            o = r[1],
                            u = r[2];
                        return isNaN(f) && (f = 0), isNaN(o) && (o = 0), f > 360 && (f -= 360), f < 0 && (f += 360), (f /= 360) < 1 / 3 ? t = 1 - ((a = (1 - o) / 3) + (e = (1 + o * fn(tn * f) / fn(an - tn * f)) / 3)) : f < 2 / 3 ? a = 1 - ((e = (1 - o) / 3) + (t = (1 + o * fn(tn * (f -= 1 / 3)) / fn(an - tn * f)) / 3)) : e = 1 - ((t = (1 - o) / 3) + (a = (1 + o * fn(tn * (f -= 2 / 3)) / fn(an - tn * f)) / 3)), [255 * (e = en(u * e * 3)), 255 * (t = en(u * t * 3)), 255 * (a = en(u * a * 3)), r.length > 3 ? r[3] : 1]
                    },
                    un = on,
                    cn = d.unpack,
                    ln = d.type,
                    hn = M,
                    sn = k,
                    dn = b,
                    bn = rn;
                sn.prototype.hsi = function() {
                    return bn(this._rgb)
                }, hn.hsi = function() {
                    for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                    return new(Function.prototype.bind.apply(sn, [null].concat(r, ["hsi"])))
                }, dn.format.hsi = un, dn.autodetect.push({
                    p: 2,
                    test: function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        if (r = cn(r, "hsi"), "array" === ln(r) && 3 === r.length) return "hsi"
                    }
                });
                var pn = d.unpack,
                    gn = d.type,
                    vn = M,
                    mn = k,
                    yn = b,
                    kn = z;
                mn.prototype.hsl = function() {
                    return kn(this._rgb)
                }, vn.hsl = function() {
                    for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                    return new(Function.prototype.bind.apply(mn, [null].concat(r, ["hsl"])))
                }, yn.format.hsl = rr, yn.autodetect.push({
                    p: 2,
                    test: function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        if (r = pn(r, "hsl"), "array" === gn(r) && 3 === r.length) return "hsl"
                    }
                });
                var wn = d.unpack,
                    Mn = Math.min,
                    _n = Math.max,
                    Nn = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        var e, t, a, f = (r = wn(r, "rgb"))[0],
                            o = r[1],
                            u = r[2],
                            c = Mn(f, o, u),
                            i = _n(f, o, u),
                            l = i - c;
                        return a = i / 255, 0 === i ? (e = Number.NaN, t = 0) : (t = l / i, f === i && (e = (o - u) / l), o === i && (e = 2 + (u - f) / l), u === i && (e = 4 + (f - o) / l), (e *= 60) < 0 && (e += 360)), [e, t, a]
                    },
                    xn = Nn,
                    An = d.unpack,
                    En = Math.floor,
                    Fn = function() {
                        for (var r, n, e, t, a, f, o = [], u = arguments.length; u--;) o[u] = arguments[u];
                        var c, i, l, h = (o = An(o, "hsv"))[0],
                            s = o[1],
                            d = o[2];
                        if (d *= 255, 0 === s) c = i = l = d;
                        else {
                            360 === h && (h = 0), h > 360 && (h -= 360), h < 0 && (h += 360);
                            var b = En(h /= 60),
                                p = h - b,
                                g = d * (1 - s),
                                v = d * (1 - s * p),
                                m = d * (1 - s * (1 - p));
                            switch (b) {
                                case 0:
                                    c = (r = [d, m, g])[0], i = r[1], l = r[2];
                                    break;
                                case 1:
                                    c = (n = [v, d, g])[0], i = n[1], l = n[2];
                                    break;
                                case 2:
                                    c = (e = [g, d, m])[0], i = e[1], l = e[2];
                                    break;
                                case 3:
                                    c = (t = [g, v, d])[0], i = t[1], l = t[2];
                                    break;
                                case 4:
                                    c = (a = [m, g, d])[0], i = a[1], l = a[2];
                                    break;
                                case 5:
                                    c = (f = [d, g, v])[0], i = f[1], l = f[2]
                            }
                        }
                        return [c, i, l, o.length > 3 ? o[3] : 1]
                    },
                    Pn = Fn,
                    On = d.unpack,
                    Gn = d.type,
                    Rn = M,
                    jn = k,
                    qn = b,
                    Ln = xn;
                jn.prototype.hsv = function() {
                    return Ln(this._rgb)
                }, Rn.hsv = function() {
                    for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                    return new(Function.prototype.bind.apply(jn, [null].concat(r, ["hsv"])))
                }, qn.format.hsv = Pn, qn.autodetect.push({
                    p: 2,
                    test: function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        if (r = On(r, "hsv"), "array" === Gn(r) && 3 === r.length) return "hsv"
                    }
                });
                var Cn = {
                        Kn: 18,
                        Xn: .95047,
                        Yn: 1,
                        Zn: 1.08883,
                        t0: .137931034,
                        t1: .206896552,
                        t2: .12841855,
                        t3: .008856452
                    },
                    In = Cn,
                    Bn = d.unpack,
                    Dn = Math.pow,
                    Yn = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        var e = Bn(r, "rgb"),
                            t = e[0],
                            a = e[1],
                            f = e[2],
                            o = zn(t, a, f),
                            u = o[0],
                            c = o[1],
                            i = 116 * c - 16;
                        return [i < 0 ? 0 : i, 500 * (u - c), 200 * (c - o[2])]
                    },
                    Sn = function(r) {
                        return (r /= 255) <= .04045 ? r / 12.92 : Dn((r + .055) / 1.055, 2.4)
                    },
                    $n = function(r) {
                        return r > In.t3 ? Dn(r, 1 / 3) : r / In.t2 + In.t0
                    },
                    zn = function(r, n, e) {
                        return r = Sn(r), n = Sn(n), e = Sn(e), [$n((.4124564 * r + .3575761 * n + .1804375 * e) / In.Xn), $n((.2126729 * r + .7151522 * n + .072175 * e) / In.Yn), $n((.0193339 * r + .119192 * n + .9503041 * e) / In.Zn)]
                    },
                    Tn = Yn,
                    Xn = Cn,
                    Un = d.unpack,
                    Vn = Math.pow,
                    Wn = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        var e, t, a, f = (r = Un(r, "lab"))[0],
                            o = r[1],
                            u = r[2];
                        return t = (f + 16) / 116, e = isNaN(o) ? t : t + o / 500, a = isNaN(u) ? t : t - u / 200, t = Xn.Yn * Zn(t), e = Xn.Xn * Zn(e), a = Xn.Zn * Zn(a), [Kn(3.2404542 * e - 1.5371385 * t - .4985314 * a), Kn(-.969266 * e + 1.8760108 * t + .041556 * a), Kn(.0556434 * e - .2040259 * t + 1.0572252 * a), r.length > 3 ? r[3] : 1]
                    },
                    Kn = function(r) {
                        return 255 * (r <= .00304 ? 12.92 * r : 1.055 * Vn(r, 1 / 2.4) - .055)
                    },
                    Zn = function(r) {
                        return r > Xn.t1 ? r * r * r : Xn.t2 * (r - Xn.t0)
                    },
                    Hn = Wn,
                    Jn = d.unpack,
                    Qn = d.type,
                    re = M,
                    ne = k,
                    ee = b,
                    te = Tn;
                ne.prototype.lab = function() {
                    return te(this._rgb)
                }, re.lab = function() {
                    for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                    return new(Function.prototype.bind.apply(ne, [null].concat(r, ["lab"])))
                }, ee.format.lab = Hn, ee.autodetect.push({
                    p: 2,
                    test: function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        if (r = Jn(r, "lab"), "array" === Qn(r) && 3 === r.length) return "lab"
                    }
                });
                var ae = d.unpack,
                    fe = d.RAD2DEG,
                    oe = Math.sqrt,
                    ue = Math.atan2,
                    ce = Math.round,
                    ie = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        var e = ae(r, "lab"),
                            t = e[0],
                            a = e[1],
                            f = e[2],
                            o = oe(a * a + f * f),
                            u = (ue(f, a) * fe + 360) % 360;
                        return 0 === ce(1e4 * o) && (u = Number.NaN), [t, o, u]
                    },
                    le = ie,
                    he = d.unpack,
                    se = Tn,
                    de = le,
                    be = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        var e = he(r, "rgb"),
                            t = e[0],
                            a = e[1],
                            f = e[2],
                            o = se(t, a, f),
                            u = o[0],
                            c = o[1],
                            i = o[2];
                        return de(u, c, i)
                    },
                    pe = be,
                    ge = d.unpack,
                    ve = d.DEG2RAD,
                    me = Math.sin,
                    ye = Math.cos,
                    ke = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        var e = ge(r, "lch"),
                            t = e[0],
                            a = e[1],
                            f = e[2];
                        return isNaN(f) && (f = 0), [t, ye(f *= ve) * a, me(f) * a]
                    },
                    we = ke,
                    Me = d.unpack,
                    _e = we,
                    Ne = Hn,
                    xe = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        var e = (r = Me(r, "lch"))[0],
                            t = r[1],
                            a = r[2],
                            f = _e(e, t, a),
                            o = f[0],
                            u = f[1],
                            c = f[2],
                            i = Ne(o, u, c);
                        return [i[0], i[1], i[2], r.length > 3 ? r[3] : 1]
                    },
                    Ae = xe,
                    Ee = d.unpack,
                    Fe = Ae,
                    Pe = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        var e = Ee(r, "hcl").reverse();
                        return Fe.apply(void 0, e)
                    },
                    Oe = Pe,
                    Ge = d.unpack,
                    Re = d.type,
                    je = M,
                    qe = k,
                    Le = b,
                    Ce = pe;
                qe.prototype.lch = function() {
                    return Ce(this._rgb)
                }, qe.prototype.hcl = function() {
                    return Ce(this._rgb).reverse()
                }, je.lch = function() {
                    for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                    return new(Function.prototype.bind.apply(qe, [null].concat(r, ["lch"])))
                }, je.hcl = function() {
                    for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                    return new(Function.prototype.bind.apply(qe, [null].concat(r, ["hcl"])))
                }, Le.format.lch = Ae, Le.format.hcl = Oe, ["lch", "hcl"].forEach((function(r) {
                    return Le.autodetect.push({
                        p: 2,
                        test: function() {
                            for (var n = [], e = arguments.length; e--;) n[e] = arguments[e];
                            if (n = Ge(n, r), "array" === Re(n) && 3 === n.length) return r
                        }
                    })
                }));
                var Ie = {
                        aliceblue: "#f0f8ff",
                        antiquewhite: "#faebd7",
                        aqua: "#00ffff",
                        aquamarine: "#7fffd4",
                        azure: "#f0ffff",
                        beige: "#f5f5dc",
                        bisque: "#ffe4c4",
                        black: "#000000",
                        blanchedalmond: "#ffebcd",
                        blue: "#0000ff",
                        blueviolet: "#8a2be2",
                        brown: "#a52a2a",
                        burlywood: "#deb887",
                        cadetblue: "#5f9ea0",
                        chartreuse: "#7fff00",
                        chocolate: "#d2691e",
                        coral: "#ff7f50",
                        cornflower: "#6495ed",
                        cornflowerblue: "#6495ed",
                        cornsilk: "#fff8dc",
                        crimson: "#dc143c",
                        cyan: "#00ffff",
                        darkblue: "#00008b",
                        darkcyan: "#008b8b",
                        darkgoldenrod: "#b8860b",
                        darkgray: "#a9a9a9",
                        darkgreen: "#006400",
                        darkgrey: "#a9a9a9",
                        darkkhaki: "#bdb76b",
                        darkmagenta: "#8b008b",
                        darkolivegreen: "#556b2f",
                        darkorange: "#ff8c00",
                        darkorchid: "#9932cc",
                        darkred: "#8b0000",
                        darksalmon: "#e9967a",
                        darkseagreen: "#8fbc8f",
                        darkslateblue: "#483d8b",
                        darkslategray: "#2f4f4f",
                        darkslategrey: "#2f4f4f",
                        darkturquoise: "#00ced1",
                        darkviolet: "#9400d3",
                        deeppink: "#ff1493",
                        deepskyblue: "#00bfff",
                        dimgray: "#696969",
                        dimgrey: "#696969",
                        dodgerblue: "#1e90ff",
                        firebrick: "#b22222",
                        floralwhite: "#fffaf0",
                        forestgreen: "#228b22",
                        fuchsia: "#ff00ff",
                        gainsboro: "#dcdcdc",
                        ghostwhite: "#f8f8ff",
                        gold: "#ffd700",
                        goldenrod: "#daa520",
                        gray: "#808080",
                        green: "#008000",
                        greenyellow: "#adff2f",
                        grey: "#808080",
                        honeydew: "#f0fff0",
                        hotpink: "#ff69b4",
                        indianred: "#cd5c5c",
                        indigo: "#4b0082",
                        ivory: "#fffff0",
                        khaki: "#f0e68c",
                        laserlemon: "#ffff54",
                        lavender: "#e6e6fa",
                        lavenderblush: "#fff0f5",
                        lawngreen: "#7cfc00",
                        lemonchiffon: "#fffacd",
                        lightblue: "#add8e6",
                        lightcoral: "#f08080",
                        lightcyan: "#e0ffff",
                        lightgoldenrod: "#fafad2",
                        lightgoldenrodyellow: "#fafad2",
                        lightgray: "#d3d3d3",
                        lightgreen: "#90ee90",
                        lightgrey: "#d3d3d3",
                        lightpink: "#ffb6c1",
                        lightsalmon: "#ffa07a",
                        lightseagreen: "#20b2aa",
                        lightskyblue: "#87cefa",
                        lightslategray: "#778899",
                        lightslategrey: "#778899",
                        lightsteelblue: "#b0c4de",
                        lightyellow: "#ffffe0",
                        lime: "#00ff00",
                        limegreen: "#32cd32",
                        linen: "#faf0e6",
                        magenta: "#ff00ff",
                        maroon: "#800000",
                        maroon2: "#7f0000",
                        maroon3: "#b03060",
                        mediumaquamarine: "#66cdaa",
                        mediumblue: "#0000cd",
                        mediumorchid: "#ba55d3",
                        mediumpurple: "#9370db",
                        mediumseagreen: "#3cb371",
                        mediumslateblue: "#7b68ee",
                        mediumspringgreen: "#00fa9a",
                        mediumturquoise: "#48d1cc",
                        mediumvioletred: "#c71585",
                        midnightblue: "#191970",
                        mintcream: "#f5fffa",
                        mistyrose: "#ffe4e1",
                        moccasin: "#ffe4b5",
                        navajowhite: "#ffdead",
                        navy: "#000080",
                        oldlace: "#fdf5e6",
                        olive: "#808000",
                        olivedrab: "#6b8e23",
                        orange: "#ffa500",
                        orangered: "#ff4500",
                        orchid: "#da70d6",
                        palegoldenrod: "#eee8aa",
                        palegreen: "#98fb98",
                        paleturquoise: "#afeeee",
                        palevioletred: "#db7093",
                        papayawhip: "#ffefd5",
                        peachpuff: "#ffdab9",
                        peru: "#cd853f",
                        pink: "#ffc0cb",
                        plum: "#dda0dd",
                        powderblue: "#b0e0e6",
                        purple: "#800080",
                        purple2: "#7f007f",
                        purple3: "#a020f0",
                        rebeccapurple: "#663399",
                        red: "#ff0000",
                        rosybrown: "#bc8f8f",
                        royalblue: "#4169e1",
                        saddlebrown: "#8b4513",
                        salmon: "#fa8072",
                        sandybrown: "#f4a460",
                        seagreen: "#2e8b57",
                        seashell: "#fff5ee",
                        sienna: "#a0522d",
                        silver: "#c0c0c0",
                        skyblue: "#87ceeb",
                        slateblue: "#6a5acd",
                        slategray: "#708090",
                        slategrey: "#708090",
                        snow: "#fffafa",
                        springgreen: "#00ff7f",
                        steelblue: "#4682b4",
                        tan: "#d2b48c",
                        teal: "#008080",
                        thistle: "#d8bfd8",
                        tomato: "#ff6347",
                        turquoise: "#40e0d0",
                        violet: "#ee82ee",
                        wheat: "#f5deb3",
                        white: "#ffffff",
                        whitesmoke: "#f5f5f5",
                        yellow: "#ffff00",
                        yellowgreen: "#9acd32"
                    },
                    Be = k,
                    De = b,
                    Ye = d.type,
                    Se = Ie,
                    $e = $r,
                    ze = Dr;
                Be.prototype.name = function() {
                    for (var r = ze(this._rgb, "rgb"), n = 0, e = Object.keys(Se); n < e.length; n += 1) {
                        var t = e[n];
                        if (Se[t] === r) return t.toLowerCase()
                    }
                    return r
                }, De.format.named = function(r) {
                    if (r = r.toLowerCase(), Se[r]) return $e(Se[r]);
                    throw new Error("unknown color name: " + r)
                }, De.autodetect.push({
                    p: 5,
                    test: function(r) {
                        for (var n = [], e = arguments.length - 1; e-- > 0;) n[e] = arguments[e + 1];
                        if (!n.length && "string" === Ye(r) && Se[r.toLowerCase()]) return "named"
                    }
                });
                var Te = d.unpack,
                    Xe = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        var e = Te(r, "rgb");
                        return (e[0] << 16) + (e[1] << 8) + e[2]
                    },
                    Ue = Xe,
                    Ve = d.type,
                    We = function(r) {
                        if ("number" == Ve(r) && r >= 0 && r <= 16777215) return [r >> 16, r >> 8 & 255, 255 & r, 1];
                        throw new Error("unknown num color: " + r)
                    },
                    Ke = We,
                    Ze = M,
                    He = k,
                    Je = b,
                    Qe = d.type,
                    rt = Ue;
                He.prototype.num = function() {
                    return rt(this._rgb)
                }, Ze.num = function() {
                    for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                    return new(Function.prototype.bind.apply(He, [null].concat(r, ["num"])))
                }, Je.format.num = Ke, Je.autodetect.push({
                    p: 5,
                    test: function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        if (1 === r.length && "number" === Qe(r[0]) && r[0] >= 0 && r[0] <= 16777215) return "num"
                    }
                });
                var nt = M,
                    et = k,
                    tt = b,
                    at = d.unpack,
                    ft = d.type,
                    ot = Math.round;
                et.prototype.rgb = function(r) {
                    return void 0 === r && (r = !0), !1 === r ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(ot)
                }, et.prototype.rgba = function(r) {
                    return void 0 === r && (r = !0), this._rgb.slice(0, 4).map((function(n, e) {
                        return e < 3 ? !1 === r ? n : ot(n) : n
                    }))
                }, nt.rgb = function() {
                    for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                    return new(Function.prototype.bind.apply(et, [null].concat(r, ["rgb"])))
                }, tt.format.rgb = function() {
                    for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                    var e = at(r, "rgba");
                    return void 0 === e[3] && (e[3] = 1), e
                }, tt.autodetect.push({
                    p: 3,
                    test: function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        if (r = at(r, "rgba"), "array" === ft(r) && (3 === r.length || 4 === r.length && "number" == ft(r[3]) && r[3] >= 0 && r[3] <= 1)) return "rgb"
                    }
                });
                var ut = Math.log,
                    ct = function(r) {
                        var n, e, t, a = r / 100;
                        return a < 66 ? (n = 255, e = a < 6 ? 0 : -155.25485562709179 - .44596950469579133 * (e = a - 2) + 104.49216199393888 * ut(e), t = a < 20 ? 0 : .8274096064007395 * (t = a - 10) - 254.76935184120902 + 115.67994401066147 * ut(t)) : (n = 351.97690566805693 + .114206453784165 * (n = a - 55) - 40.25366309332127 * ut(n), e = 325.4494125711974 + .07943456536662342 * (e = a - 50) - 28.0852963507957 * ut(e), t = 255), [n, e, t, 1]
                    },
                    it = ct,
                    lt = d.unpack,
                    ht = Math.round,
                    st = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        for (var e, t = lt(r, "rgb"), a = t[0], f = t[2], o = 1e3, u = 4e4, c = .4; u - o > c;) {
                            var i = it(e = .5 * (u + o));
                            i[2] / i[0] >= f / a ? u = e : o = e
                        }
                        return ht(e)
                    },
                    dt = M,
                    bt = k,
                    pt = b,
                    gt = st;
                bt.prototype.temp = bt.prototype.kelvin = bt.prototype.temperature = function() {
                    return gt(this._rgb)
                }, dt.temp = dt.kelvin = dt.temperature = function() {
                    for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                    return new(Function.prototype.bind.apply(bt, [null].concat(r, ["temp"])))
                }, pt.format.temp = pt.format.kelvin = pt.format.temperature = ct;
                var vt = d.unpack,
                    mt = Math.cbrt,
                    yt = Math.pow,
                    kt = Math.sign,
                    wt = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        var e = vt(r, "rgb"),
                            t = e[0],
                            a = e[1],
                            f = e[2],
                            o = [_t(t / 255), _t(a / 255), _t(f / 255)],
                            u = o[0],
                            c = o[1],
                            i = o[2],
                            l = mt(.4122214708 * u + .5363325363 * c + .0514459929 * i),
                            h = mt(.2119034982 * u + .6806995451 * c + .1073969566 * i),
                            s = mt(.0883024619 * u + .2817188376 * c + .6299787005 * i);
                        return [.2104542553 * l + .793617785 * h - .0040720468 * s, 1.9779984951 * l - 2.428592205 * h + .4505937099 * s, .0259040371 * l + .7827717662 * h - .808675766 * s]
                    },
                    Mt = wt;

                function _t(r) {
                    var n = Math.abs(r);
                    return n < .04045 ? r / 12.92 : (kt(r) || 1) * yt((n + .055) / 1.055, 2.4)
                }
                var Nt = d.unpack,
                    xt = Math.pow,
                    At = Math.sign,
                    Et = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        var e = (r = Nt(r, "lab"))[0],
                            t = r[1],
                            a = r[2],
                            f = xt(e + .3963377774 * t + .2158037573 * a, 3),
                            o = xt(e - .1055613458 * t - .0638541728 * a, 3),
                            u = xt(e - .0894841775 * t - 1.291485548 * a, 3);
                        return [255 * Pt(4.0767416621 * f - 3.3077115913 * o + .2309699292 * u), 255 * Pt(-1.2684380046 * f + 2.6097574011 * o - .3413193965 * u), 255 * Pt(-.0041960863 * f - .7034186147 * o + 1.707614701 * u), r.length > 3 ? r[3] : 1]
                    },
                    Ft = Et;

                function Pt(r) {
                    var n = Math.abs(r);
                    return n > .0031308 ? (At(r) || 1) * (1.055 * xt(n, 1 / 2.4) - .055) : 12.92 * r
                }
                var Ot = d.unpack,
                    Gt = d.type,
                    Rt = M,
                    jt = k,
                    qt = b,
                    Lt = Mt;
                jt.prototype.oklab = function() {
                    return Lt(this._rgb)
                }, Rt.oklab = function() {
                    for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                    return new(Function.prototype.bind.apply(jt, [null].concat(r, ["oklab"])))
                }, qt.format.oklab = Ft, qt.autodetect.push({
                    p: 3,
                    test: function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        if (r = Ot(r, "oklab"), "array" === Gt(r) && 3 === r.length) return "oklab"
                    }
                });
                var Ct = d.unpack,
                    It = Mt,
                    Bt = le,
                    Dt = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        var e = Ct(r, "rgb"),
                            t = e[0],
                            a = e[1],
                            f = e[2],
                            o = It(t, a, f),
                            u = o[0],
                            c = o[1],
                            i = o[2];
                        return Bt(u, c, i)
                    },
                    Yt = Dt,
                    St = d.unpack,
                    $t = we,
                    zt = Ft,
                    Tt = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        var e = (r = St(r, "lch"))[0],
                            t = r[1],
                            a = r[2],
                            f = $t(e, t, a),
                            o = f[0],
                            u = f[1],
                            c = f[2],
                            i = zt(o, u, c);
                        return [i[0], i[1], i[2], r.length > 3 ? r[3] : 1]
                    },
                    Xt = Tt,
                    Ut = d.unpack,
                    Vt = d.type,
                    Wt = M,
                    Kt = k,
                    Zt = b,
                    Ht = Yt;
                Kt.prototype.oklch = function() {
                    return Ht(this._rgb)
                }, Wt.oklch = function() {
                    for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                    return new(Function.prototype.bind.apply(Kt, [null].concat(r, ["oklch"])))
                }, Zt.format.oklch = Xt, Zt.autodetect.push({
                    p: 3,
                    test: function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        if (r = Ut(r, "oklch"), "array" === Vt(r) && 3 === r.length) return "oklch"
                    }
                });
                var Jt = k,
                    Qt = d.type;
                Jt.prototype.alpha = function(r, n) {
                    return void 0 === n && (n = !1), void 0 !== r && "number" === Qt(r) ? n ? (this._rgb[3] = r, this) : new Jt([this._rgb[0], this._rgb[1], this._rgb[2], r], "rgb") : this._rgb[3]
                }, k.prototype.clipped = function() {
                    return this._rgb._clipped || !1
                };
                var ra = k,
                    na = Cn;
                ra.prototype.darken = function(r) {
                    void 0 === r && (r = 1);
                    var n = this,
                        e = n.lab();
                    return e[0] -= na.Kn * r, new ra(e, "lab").alpha(n.alpha(), !0)
                }, ra.prototype.brighten = function(r) {
                    return void 0 === r && (r = 1), this.darken(-r)
                }, ra.prototype.darker = ra.prototype.darken, ra.prototype.brighter = ra.prototype.brighten, k.prototype.get = function(r) {
                    var n = r.split("."),
                        e = n[0],
                        t = n[1],
                        a = this[e]();
                    if (t) {
                        var f = e.indexOf(t) - ("ok" === e.substr(0, 2) ? 2 : 0);
                        if (f > -1) return a[f];
                        throw new Error("unknown channel " + t + " in mode " + e)
                    }
                    return a
                };
                var ea = k,
                    ta = d.type,
                    aa = Math.pow,
                    fa = 1e-7,
                    oa = 20;
                ea.prototype.luminance = function(r) {
                    if (void 0 !== r && "number" === ta(r)) {
                        if (0 === r) return new ea([0, 0, 0, this._rgb[3]], "rgb");
                        if (1 === r) return new ea([255, 255, 255, this._rgb[3]], "rgb");
                        var n = this.luminance(),
                            e = "rgb",
                            t = oa,
                            a = function(n, f) {
                                var o = n.interpolate(f, .5, e),
                                    u = o.luminance();
                                return Math.abs(r - u) < fa || !t-- ? o : u > r ? a(n, o) : a(o, f)
                            },
                            f = (n > r ? a(new ea([0, 0, 0]), this) : a(this, new ea([255, 255, 255]))).rgb();
                        return new ea(f.concat([this._rgb[3]]))
                    }
                    return ua.apply(void 0, this._rgb.slice(0, 3))
                };
                var ua = function(r, n, e) {
                        return .2126 * (r = ca(r)) + .7152 * (n = ca(n)) + .0722 * (e = ca(e))
                    },
                    ca = function(r) {
                        return (r /= 255) <= .03928 ? r / 12.92 : aa((r + .055) / 1.055, 2.4)
                    },
                    ia = {},
                    la = k,
                    ha = d.type,
                    sa = ia,
                    da = function(r, n, e) {
                        void 0 === e && (e = .5);
                        for (var t = [], a = arguments.length - 3; a-- > 0;) t[a] = arguments[a + 3];
                        var f = t[0] || "lrgb";
                        if (sa[f] || t.length || (f = Object.keys(sa)[0]), !sa[f]) throw new Error("interpolation mode " + f + " is not defined");
                        return "object" !== ha(r) && (r = new la(r)), "object" !== ha(n) && (n = new la(n)), sa[f](r, n, e).alpha(r.alpha() + e * (n.alpha() - r.alpha()))
                    },
                    ba = k,
                    pa = da;
                ba.prototype.mix = ba.prototype.interpolate = function(r, n) {
                    void 0 === n && (n = .5);
                    for (var e = [], t = arguments.length - 2; t-- > 0;) e[t] = arguments[t + 2];
                    return pa.apply(void 0, [this, r, n].concat(e))
                };
                var ga = k;
                ga.prototype.premultiply = function(r) {
                    void 0 === r && (r = !1);
                    var n = this._rgb,
                        e = n[3];
                    return r ? (this._rgb = [n[0] * e, n[1] * e, n[2] * e, e], this) : new ga([n[0] * e, n[1] * e, n[2] * e, e], "rgb")
                };
                var va = k,
                    ma = Cn;
                va.prototype.saturate = function(r) {
                    void 0 === r && (r = 1);
                    var n = this,
                        e = n.lch();
                    return e[1] += ma.Kn * r, e[1] < 0 && (e[1] = 0), new va(e, "lch").alpha(n.alpha(), !0)
                }, va.prototype.desaturate = function(r) {
                    return void 0 === r && (r = 1), this.saturate(-r)
                };
                var ya = k,
                    ka = d.type;
                ya.prototype.set = function(r, n, e) {
                    void 0 === e && (e = !1);
                    var t = r.split("."),
                        a = t[0],
                        f = t[1],
                        o = this[a]();
                    if (f) {
                        var u = a.indexOf(f) - ("ok" === a.substr(0, 2) ? 2 : 0);
                        if (u > -1) {
                            if ("string" == ka(n)) switch (n.charAt(0)) {
                                case "+":
                                case "-":
                                    o[u] += +n;
                                    break;
                                case "*":
                                    o[u] *= +n.substr(1);
                                    break;
                                case "/":
                                    o[u] /= +n.substr(1);
                                    break;
                                default:
                                    o[u] = +n
                            } else {
                                if ("number" !== ka(n)) throw new Error("unsupported value for Color.set");
                                o[u] = n
                            }
                            var c = new ya(o, a);
                            return e ? (this._rgb = c._rgb, this) : c
                        }
                        throw new Error("unknown channel " + f + " in mode " + a)
                    }
                    return o
                };
                var wa = k,
                    Ma = function(r, n, e) {
                        var t = r._rgb,
                            a = n._rgb;
                        return new wa(t[0] + e * (a[0] - t[0]), t[1] + e * (a[1] - t[1]), t[2] + e * (a[2] - t[2]), "rgb")
                    };
                ia.rgb = Ma;
                var _a = k,
                    Na = Math.sqrt,
                    xa = Math.pow,
                    Aa = function(r, n, e) {
                        var t = r._rgb,
                            a = t[0],
                            f = t[1],
                            o = t[2],
                            u = n._rgb,
                            c = u[0],
                            i = u[1],
                            l = u[2];
                        return new _a(Na(xa(a, 2) * (1 - e) + xa(c, 2) * e), Na(xa(f, 2) * (1 - e) + xa(i, 2) * e), Na(xa(o, 2) * (1 - e) + xa(l, 2) * e), "rgb")
                    };
                ia.lrgb = Aa;
                var Ea = k,
                    Fa = function(r, n, e) {
                        var t = r.lab(),
                            a = n.lab();
                        return new Ea(t[0] + e * (a[0] - t[0]), t[1] + e * (a[1] - t[1]), t[2] + e * (a[2] - t[2]), "lab")
                    };
                ia.lab = Fa;
                var Pa = k,
                    Oa = function(r, n, e, t) {
                        var a, f, o, u, c, i, l, h, s, d, b, p, g;
                        return "hsl" === t ? (o = r.hsl(), u = n.hsl()) : "hsv" === t ? (o = r.hsv(), u = n.hsv()) : "hcg" === t ? (o = r.hcg(), u = n.hcg()) : "hsi" === t ? (o = r.hsi(), u = n.hsi()) : "lch" === t || "hcl" === t ? (t = "hcl", o = r.hcl(), u = n.hcl()) : "oklch" === t && (o = r.oklch().reverse(), u = n.oklch().reverse()), "h" !== t.substr(0, 1) && "oklch" !== t || (c = (a = o)[0], l = a[1], s = a[2], i = (f = u)[0], h = f[1], d = f[2]), isNaN(c) || isNaN(i) ? isNaN(c) ? isNaN(i) ? p = Number.NaN : (p = i, 1 != s && 0 != s || "hsv" == t || (b = h)) : (p = c, 1 != d && 0 != d || "hsv" == t || (b = l)) : p = c + e * (i > c && i - c > 180 ? i - (c + 360) : i < c && c - i > 180 ? i + 360 - c : i - c), void 0 === b && (b = l + e * (h - l)), g = s + e * (d - s), new Pa("oklch" === t ? [g, b, p] : [p, b, g], t)
                    },
                    Ga = Oa,
                    Ra = function(r, n, e) {
                        return Ga(r, n, e, "lch")
                    };
                ia.lch = Ra, ia.hcl = Ra;
                var ja = k,
                    qa = function(r, n, e) {
                        var t = r.num(),
                            a = n.num();
                        return new ja(t + e * (a - t), "num")
                    };
                ia.num = qa;
                var La = Oa,
                    Ca = function(r, n, e) {
                        return La(r, n, e, "hcg")
                    };
                ia.hcg = Ca;
                var Ia = Oa,
                    Ba = function(r, n, e) {
                        return Ia(r, n, e, "hsi")
                    };
                ia.hsi = Ba;
                var Da = Oa,
                    Ya = function(r, n, e) {
                        return Da(r, n, e, "hsl")
                    };
                ia.hsl = Ya;
                var Sa = Oa,
                    $a = function(r, n, e) {
                        return Sa(r, n, e, "hsv")
                    };
                ia.hsv = $a;
                var za = k,
                    Ta = function(r, n, e) {
                        var t = r.oklab(),
                            a = n.oklab();
                        return new za(t[0] + e * (a[0] - t[0]), t[1] + e * (a[1] - t[1]), t[2] + e * (a[2] - t[2]), "oklab")
                    };
                ia.oklab = Ta;
                var Xa = Oa,
                    Ua = function(r, n, e) {
                        return Xa(r, n, e, "oklch")
                    };
                ia.oklch = Ua;
                var Va = k,
                    Wa = d.clip_rgb,
                    Ka = Math.pow,
                    Za = Math.sqrt,
                    Ha = Math.PI,
                    Ja = Math.cos,
                    Qa = Math.sin,
                    rf = Math.atan2,
                    nf = function(r, n, e) {
                        void 0 === n && (n = "lrgb"), void 0 === e && (e = null);
                        var t = r.length;
                        e || (e = Array.from(new Array(t)).map((function() {
                            return 1
                        })));
                        var a = t / e.reduce((function(r, n) {
                            return r + n
                        }));
                        if (e.forEach((function(r, n) {
                                e[n] *= a
                            })), r = r.map((function(r) {
                                return new Va(r)
                            })), "lrgb" === n) return ef(r, e);
                        for (var f = r.shift(), o = f.get(n), u = [], c = 0, i = 0, l = 0; l < o.length; l++)
                            if (o[l] = (o[l] || 0) * e[0], u.push(isNaN(o[l]) ? 0 : e[0]), "h" === n.charAt(l) && !isNaN(o[l])) {
                                var h = o[l] / 180 * Ha;
                                c += Ja(h) * e[0], i += Qa(h) * e[0]
                            }
                        var s = f.alpha() * e[0];
                        r.forEach((function(r, t) {
                            var a = r.get(n);
                            s += r.alpha() * e[t + 1];
                            for (var f = 0; f < o.length; f++)
                                if (!isNaN(a[f]))
                                    if (u[f] += e[t + 1], "h" === n.charAt(f)) {
                                        var l = a[f] / 180 * Ha;
                                        c += Ja(l) * e[t + 1], i += Qa(l) * e[t + 1]
                                    } else o[f] += a[f] * e[t + 1]
                        }));
                        for (var d = 0; d < o.length; d++)
                            if ("h" === n.charAt(d)) {
                                for (var b = rf(i / u[d], c / u[d]) / Ha * 180; b < 0;) b += 360;
                                for (; b >= 360;) b -= 360;
                                o[d] = b
                            } else o[d] = o[d] / u[d];
                        return s /= t, new Va(o, n).alpha(s > .99999 ? 1 : s, !0)
                    },
                    ef = function(r, n) {
                        for (var e = r.length, t = [0, 0, 0, 0], a = 0; a < r.length; a++) {
                            var f = r[a],
                                o = n[a] / e,
                                u = f._rgb;
                            t[0] += Ka(u[0], 2) * o, t[1] += Ka(u[1], 2) * o, t[2] += Ka(u[2], 2) * o, t[3] += u[3] * o
                        }
                        return t[0] = Za(t[0]), t[1] = Za(t[1]), t[2] = Za(t[2]), t[3] > .9999999 && (t[3] = 1), new Va(Wa(t))
                    },
                    tf = M,
                    af = d.type,
                    ff = Math.pow,
                    of = function(r) {
                        var n = "rgb",
                            e = tf("#ccc"),
                            t = 0,
                            a = [0, 1],
                            f = [],
                            o = [0, 0],
                            u = !1,
                            c = [],
                            i = !1,
                            l = 0,
                            h = 1,
                            s = !1,
                            d = {},
                            b = !0,
                            p = 1,
                            g = function(r) {
                                if ((r = r || ["#fff", "#000"]) && "string" === af(r) && tf.brewer && tf.brewer[r.toLowerCase()] && (r = tf.brewer[r.toLowerCase()]), "array" === af(r)) {
                                    1 === r.length && (r = [r[0], r[0]]), r = r.slice(0);
                                    for (var n = 0; n < r.length; n++) r[n] = tf(r[n]);
                                    f.length = 0;
                                    for (var e = 0; e < r.length; e++) f.push(e / (r.length - 1))
                                }
                                return w(), c = r
                            },
                            v = function(r) {
                                if (null != u) {
                                    for (var n = u.length - 1, e = 0; e < n && r >= u[e];) e++;
                                    return e - 1
                                }
                                return 0
                            },
                            m = function(r) {
                                return r
                            },
                            y = function(r) {
                                return r
                            },
                            k = function(r, t) {
                                var a, i;
                                if (null == t && (t = !1), isNaN(r) || null === r) return e;
                                i = t ? r : u && u.length > 2 ? v(r) / (u.length - 2) : h !== l ? (r - l) / (h - l) : 1, i = y(i), t || (i = m(i)), 1 !== p && (i = ff(i, p)), i = o[0] + i * (1 - o[0] - o[1]), i = Math.min(1, Math.max(0, i));
                                var s = Math.floor(1e4 * i);
                                if (b && d[s]) a = d[s];
                                else {
                                    if ("array" === af(c))
                                        for (var g = 0; g < f.length; g++) {
                                            var k = f[g];
                                            if (i <= k) {
                                                a = c[g];
                                                break
                                            }
                                            if (i >= k && g === f.length - 1) {
                                                a = c[g];
                                                break
                                            }
                                            if (i > k && i < f[g + 1]) {
                                                i = (i - k) / (f[g + 1] - k), a = tf.interpolate(c[g], c[g + 1], i, n);
                                                break
                                            }
                                        } else "function" === af(c) && (a = c(i));
                                    b && (d[s] = a)
                                }
                                return a
                            },
                            w = function() {
                                return d = {}
                            };
                        g(r);
                        var M = function(r) {
                            var n = tf(k(r));
                            return i && n[i] ? n[i]() : n
                        };
                        return M.classes = function(r) {
                            if (null != r) {
                                if ("array" === af(r)) u = r, a = [r[0], r[r.length - 1]];
                                else {
                                    var n = tf.analyze(a);
                                    u = 0 === r ? [n.min, n.max] : tf.limits(n, "e", r)
                                }
                                return M
                            }
                            return u
                        }, M.domain = function(r) {
                            if (!arguments.length) return a;
                            l = r[0], h = r[r.length - 1], f = [];
                            var n = c.length;
                            if (r.length === n && l !== h)
                                for (var e = 0, t = Array.from(r); e < t.length; e += 1) {
                                    var o = t[e];
                                    f.push((o - l) / (h - l))
                                } else {
                                    for (var u = 0; u < n; u++) f.push(u / (n - 1));
                                    if (r.length > 2) {
                                        var i = r.map((function(n, e) {
                                                return e / (r.length - 1)
                                            })),
                                            s = r.map((function(r) {
                                                return (r - l) / (h - l)
                                            }));
                                        s.every((function(r, n) {
                                            return i[n] === r
                                        })) || (y = function(r) {
                                            if (r <= 0 || r >= 1) return r;
                                            for (var n = 0; r >= s[n + 1];) n++;
                                            var e = (r - s[n]) / (s[n + 1] - s[n]);
                                            return i[n] + e * (i[n + 1] - i[n])
                                        })
                                    }
                                }
                            return a = [l, h], M
                        }, M.mode = function(r) {
                            return arguments.length ? (n = r, w(), M) : n
                        }, M.range = function(r, n) {
                            return g(r), M
                        }, M.out = function(r) {
                            return i = r, M
                        }, M.spread = function(r) {
                            return arguments.length ? (t = r, M) : t
                        }, M.correctLightness = function(r) {
                            return null == r && (r = !0), s = r, w(), m = s ? function(r) {
                                for (var n = k(0, !0).lab()[0], e = k(1, !0).lab()[0], t = n > e, a = k(r, !0).lab()[0], f = n + (e - n) * r, o = a - f, u = 0, c = 1, i = 20; Math.abs(o) > .01 && i-- > 0;) t && (o *= -1), o < 0 ? (u = r, r += .5 * (c - r)) : (c = r, r += .5 * (u - r)), a = k(r, !0).lab()[0], o = a - f;
                                return r
                            } : function(r) {
                                return r
                            }, M
                        }, M.padding = function(r) {
                            return null != r ? ("number" === af(r) && (r = [r, r]), o = r, M) : o
                        }, M.colors = function(n, e) {
                            arguments.length < 2 && (e = "hex");
                            var t = [];
                            if (0 === arguments.length) t = c.slice(0);
                            else if (1 === n) t = [M(.5)];
                            else if (n > 1) {
                                var f = a[0],
                                    o = a[1] - f;
                                t = uf(0, n, !1).map((function(r) {
                                    return M(f + r / (n - 1) * o)
                                }))
                            } else {
                                r = [];
                                var i = [];
                                if (u && u.length > 2)
                                    for (var l = 1, h = u.length, s = 1 <= h; s ? l < h : l > h; s ? l++ : l--) i.push(.5 * (u[l - 1] + u[l]));
                                else i = a;
                                t = i.map((function(r) {
                                    return M(r)
                                }))
                            }
                            return tf[e] && (t = t.map((function(r) {
                                return r[e]()
                            }))), t
                        }, M.cache = function(r) {
                            return null != r ? (b = r, M) : b
                        }, M.gamma = function(r) {
                            return null != r ? (p = r, M) : p
                        }, M.nodata = function(r) {
                            return null != r ? (e = tf(r), M) : e
                        }, M
                    };

                function uf(r, n, e) {
                    for (var t = [], a = r < n, f = e ? a ? n + 1 : n - 1 : n, o = r; a ? o < f : o > f; a ? o++ : o--) t.push(o);
                    return t
                }
                var cf = k,
                    lf = of ,
                    hf = function(r) {
                        for (var n = [1, 1], e = 1; e < r; e++) {
                            for (var t = [1], a = 1; a <= n.length; a++) t[a] = (n[a] || 0) + n[a - 1];
                            n = t
                        }
                        return n
                    },
                    sf = function(r) {
                        var n, e, t, a, f, o, u;
                        if (2 === (r = r.map((function(r) {
                                return new cf(r)
                            }))).length) n = r.map((function(r) {
                            return r.lab()
                        })), f = n[0], o = n[1], a = function(r) {
                            var n = [0, 1, 2].map((function(n) {
                                return f[n] + r * (o[n] - f[n])
                            }));
                            return new cf(n, "lab")
                        };
                        else if (3 === r.length) e = r.map((function(r) {
                            return r.lab()
                        })), f = e[0], o = e[1], u = e[2], a = function(r) {
                            var n = [0, 1, 2].map((function(n) {
                                return (1 - r) * (1 - r) * f[n] + 2 * (1 - r) * r * o[n] + r * r * u[n]
                            }));
                            return new cf(n, "lab")
                        };
                        else if (4 === r.length) {
                            var c;
                            t = r.map((function(r) {
                                return r.lab()
                            })), f = t[0], o = t[1], u = t[2], c = t[3], a = function(r) {
                                var n = [0, 1, 2].map((function(n) {
                                    return (1 - r) * (1 - r) * (1 - r) * f[n] + 3 * (1 - r) * (1 - r) * r * o[n] + 3 * (1 - r) * r * r * u[n] + r * r * r * c[n]
                                }));
                                return new cf(n, "lab")
                            }
                        } else {
                            if (!(r.length >= 5)) throw new RangeError("No point in running bezier with only one color.");
                            var i, l, h;
                            i = r.map((function(r) {
                                return r.lab()
                            })), h = r.length - 1, l = hf(h), a = function(r) {
                                var n = 1 - r,
                                    e = [0, 1, 2].map((function(e) {
                                        return i.reduce((function(t, a, f) {
                                            return t + l[f] * Math.pow(n, h - f) * Math.pow(r, f) * a[e]
                                        }), 0)
                                    }));
                                return new cf(e, "lab")
                            }
                        }
                        return a
                    },
                    df = function(r) {
                        var n = sf(r);
                        return n.scale = function() {
                            return lf(n)
                        }, n
                    },
                    bf = M,
                    pf = function(r, n, e) {
                        if (!pf[e]) throw new Error("unknown blend mode " + e);
                        return pf[e](r, n)
                    },
                    gf = function(r) {
                        return function(n, e) {
                            var t = bf(e).rgb(),
                                a = bf(n).rgb();
                            return bf.rgb(r(t, a))
                        }
                    },
                    vf = function(r) {
                        return function(n, e) {
                            var t = [];
                            return t[0] = r(n[0], e[0]), t[1] = r(n[1], e[1]), t[2] = r(n[2], e[2]), t
                        }
                    },
                    mf = function(r) {
                        return r
                    },
                    yf = function(r, n) {
                        return r * n / 255
                    },
                    kf = function(r, n) {
                        return r > n ? n : r
                    },
                    wf = function(r, n) {
                        return r > n ? r : n
                    },
                    Mf = function(r, n) {
                        return 255 * (1 - (1 - r / 255) * (1 - n / 255))
                    },
                    _f = function(r, n) {
                        return n < 128 ? 2 * r * n / 255 : 255 * (1 - 2 * (1 - r / 255) * (1 - n / 255))
                    },
                    Nf = function(r, n) {
                        return 255 * (1 - (1 - n / 255) / (r / 255))
                    },
                    xf = function(r, n) {
                        return 255 === r || (r = n / 255 * 255 / (1 - r / 255)) > 255 ? 255 : r
                    };
                pf.normal = gf(vf(mf)), pf.multiply = gf(vf(yf)), pf.screen = gf(vf(Mf)), pf.overlay = gf(vf(_f)), pf.darken = gf(vf(kf)), pf.lighten = gf(vf(wf)), pf.dodge = gf(vf(xf)), pf.burn = gf(vf(Nf));
                for (var Af = pf, Ef = d.type, Ff = d.clip_rgb, Pf = d.TWOPI, Of = Math.pow, Gf = Math.sin, Rf = Math.cos, jf = M, qf = function(r, n, e, t, a) {
                        void 0 === r && (r = 300), void 0 === n && (n = -1.5), void 0 === e && (e = 1), void 0 === t && (t = 1), void 0 === a && (a = [0, 1]);
                        var f, o = 0;
                        "array" === Ef(a) ? f = a[1] - a[0] : (f = 0, a = [a, a]);
                        var u = function(u) {
                            var c = Pf * ((r + 120) / 360 + n * u),
                                i = Of(a[0] + f * u, t),
                                l = (0 !== o ? e[0] + u * o : e) * i * (1 - i) / 2,
                                h = Rf(c),
                                s = Gf(c);
                            return jf(Ff([255 * (i + l * (-.14861 * h + 1.78277 * s)), 255 * (i + l * (-.29227 * h - .90649 * s)), 255 * (i + l * (1.97294 * h)), 1]))
                        };
                        return u.start = function(n) {
                            return null == n ? r : (r = n, u)
                        }, u.rotations = function(r) {
                            return null == r ? n : (n = r, u)
                        }, u.gamma = function(r) {
                            return null == r ? t : (t = r, u)
                        }, u.hue = function(r) {
                            return null == r ? e : ("array" === Ef(e = r) ? 0 === (o = e[1] - e[0]) && (e = e[1]) : o = 0, u)
                        }, u.lightness = function(r) {
                            return null == r ? a : ("array" === Ef(r) ? (a = r, f = r[1] - r[0]) : (a = [r, r], f = 0), u)
                        }, u.scale = function() {
                            return jf.scale(u)
                        }, u.hue(e), u
                    }, Lf = k, Cf = "0123456789abcdef", If = Math.floor, Bf = Math.random, Df = function() {
                        for (var r = "#", n = 0; n < 6; n++) r += Cf.charAt(If(16 * Bf()));
                        return new Lf(r, "hex")
                    }, Yf = u, Sf = Math.log, $f = Math.pow, zf = Math.floor, Tf = Math.abs, Xf = function(r, n) {
                        void 0 === n && (n = null);
                        var e = {
                            min: Number.MAX_VALUE,
                            max: -1 * Number.MAX_VALUE,
                            sum: 0,
                            values: [],
                            count: 0
                        };
                        return "object" === Yf(r) && (r = Object.values(r)), r.forEach((function(r) {
                            n && "object" === Yf(r) && (r = r[n]), void 0 === r || null === r || isNaN(r) || (e.values.push(r), e.sum += r, r < e.min && (e.min = r), r > e.max && (e.max = r), e.count += 1)
                        })), e.domain = [e.min, e.max], e.limits = function(r, n) {
                            return Uf(e, r, n)
                        }, e
                    }, Uf = function(r, n, e) {
                        void 0 === n && (n = "equal"), void 0 === e && (e = 7), "array" == Yf(r) && (r = Xf(r));
                        var t = r.min,
                            a = r.max,
                            f = r.values.sort((function(r, n) {
                                return r - n
                            }));
                        if (1 === e) return [t, a];
                        var o = [];
                        if ("c" === n.substr(0, 1) && (o.push(t), o.push(a)), "e" === n.substr(0, 1)) {
                            o.push(t);
                            for (var u = 1; u < e; u++) o.push(t + u / e * (a - t));
                            o.push(a)
                        } else if ("l" === n.substr(0, 1)) {
                            if (t <= 0) throw new Error("Logarithmic scales are only possible for values > 0");
                            var c = Math.LOG10E * Sf(t),
                                i = Math.LOG10E * Sf(a);
                            o.push(t);
                            for (var l = 1; l < e; l++) o.push($f(10, c + l / e * (i - c)));
                            o.push(a)
                        } else if ("q" === n.substr(0, 1)) {
                            o.push(t);
                            for (var h = 1; h < e; h++) {
                                var s = (f.length - 1) * h / e,
                                    d = zf(s);
                                if (d === s) o.push(f[d]);
                                else {
                                    var b = s - d;
                                    o.push(f[d] * (1 - b) + f[d + 1] * b)
                                }
                            }
                            o.push(a)
                        } else if ("k" === n.substr(0, 1)) {
                            var p, g = f.length,
                                v = new Array(g),
                                m = new Array(e),
                                y = !0,
                                k = 0,
                                w = null;
                            (w = []).push(t);
                            for (var M = 1; M < e; M++) w.push(t + M / e * (a - t));
                            for (w.push(a); y;) {
                                for (var _ = 0; _ < e; _++) m[_] = 0;
                                for (var N = 0; N < g; N++)
                                    for (var x = f[N], A = Number.MAX_VALUE, E = void 0, F = 0; F < e; F++) {
                                        var P = Tf(w[F] - x);
                                        P < A && (A = P, E = F), m[E]++, v[N] = E
                                    }
                                for (var O = new Array(e), G = 0; G < e; G++) O[G] = null;
                                for (var R = 0; R < g; R++) null === O[p = v[R]] ? O[p] = f[R] : O[p] += f[R];
                                for (var j = 0; j < e; j++) O[j] *= 1 / m[j];
                                y = !1;
                                for (var q = 0; q < e; q++)
                                    if (O[q] !== w[q]) {
                                        y = !0;
                                        break
                                    }
                                w = O, ++k > 200 && (y = !1)
                            }
                            for (var L = {}, C = 0; C < e; C++) L[C] = [];
                            for (var I = 0; I < g; I++) L[p = v[I]].push(f[I]);
                            for (var B = [], D = 0; D < e; D++) B.push(L[D][0]), B.push(L[D][L[D].length - 1]);
                            B = B.sort((function(r, n) {
                                return r - n
                            })), o.push(B[0]);
                            for (var Y = 1; Y < B.length; Y += 2) {
                                var S = B[Y];
                                isNaN(S) || -1 !== o.indexOf(S) || o.push(S)
                            }
                        }
                        return o
                    }, Vf = {
                        analyze: Xf,
                        limits: Uf
                    }, Wf = k, Kf = function(r, n) {
                        r = new Wf(r), n = new Wf(n);
                        var e = r.luminance(),
                            t = n.luminance();
                        return e > t ? (e + .05) / (t + .05) : (t + .05) / (e + .05)
                    }, Zf = k, Hf = Math.sqrt, Jf = Math.pow, Qf = Math.min, ro = Math.max, no = Math.atan2, eo = Math.abs, to = Math.cos, ao = Math.sin, fo = Math.exp, oo = Math.PI, uo = function(r, n, e, t, a) {
                        void 0 === e && (e = 1), void 0 === t && (t = 1), void 0 === a && (a = 1);
                        var f = function(r) {
                                return 360 * r / (2 * oo)
                            },
                            o = function(r) {
                                return 2 * oo * r / 360
                            };
                        r = new Zf(r), n = new Zf(n);
                        var u = Array.from(r.lab()),
                            c = u[0],
                            i = u[1],
                            l = u[2],
                            h = Array.from(n.lab()),
                            s = h[0],
                            d = h[1],
                            b = h[2],
                            p = (c + s) / 2,
                            g = (Hf(Jf(i, 2) + Jf(l, 2)) + Hf(Jf(d, 2) + Jf(b, 2))) / 2,
                            v = .5 * (1 - Hf(Jf(g, 7) / (Jf(g, 7) + Jf(25, 7)))),
                            m = i * (1 + v),
                            y = d * (1 + v),
                            k = Hf(Jf(m, 2) + Jf(l, 2)),
                            w = Hf(Jf(y, 2) + Jf(b, 2)),
                            M = (k + w) / 2,
                            _ = f(no(l, m)),
                            N = f(no(b, y)),
                            x = _ >= 0 ? _ : _ + 360,
                            A = N >= 0 ? N : N + 360,
                            E = eo(x - A) > 180 ? (x + A + 360) / 2 : (x + A) / 2,
                            F = 1 - .17 * to(o(E - 30)) + .24 * to(o(2 * E)) + .32 * to(o(3 * E + 6)) - .2 * to(o(4 * E - 63)),
                            P = A - x;
                        P = eo(P) <= 180 ? P : A <= x ? P + 360 : P - 360, P = 2 * Hf(k * w) * ao(o(P) / 2);
                        var O = s - c,
                            G = w - k,
                            R = 1 + .015 * Jf(p - 50, 2) / Hf(20 + Jf(p - 50, 2)),
                            j = 1 + .045 * M,
                            q = 1 + .015 * M * F,
                            L = 30 * fo(-Jf((E - 275) / 25, 2)),
                            C = -2 * Hf(Jf(M, 7) / (Jf(M, 7) + Jf(25, 7))) * ao(2 * o(L)),
                            I = Hf(Jf(O / (e * R), 2) + Jf(G / (t * j), 2) + Jf(P / (a * q), 2) + C * (G / (t * j)) * (P / (a * q)));
                        return ro(0, Qf(100, I))
                    }, co = k, io = function(r, n, e) {
                        void 0 === e && (e = "lab"), r = new co(r), n = new co(n);
                        var t = r.get(e),
                            a = n.get(e),
                            f = 0;
                        for (var o in t) {
                            var u = (t[o] || 0) - (a[o] || 0);
                            f += u * u
                        }
                        return Math.sqrt(f)
                    }, lo = k, ho = function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        try {
                            return new(Function.prototype.bind.apply(lo, [null].concat(r))), !0
                        } catch (e) {
                            return !1
                        }
                    }, so = M, bo = of , po = {
                        cool: function() {
                            return bo([so.hsl(180, 1, .9), so.hsl(250, .7, .4)])
                        },
                        hot: function() {
                            return bo(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
                        }
                    }, go = {
                        OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
                        PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
                        BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
                        Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
                        BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
                        YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
                        YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
                        Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
                        RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
                        Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
                        YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
                        Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
                        GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
                        Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
                        YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
                        PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
                        Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
                        PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
                        Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
                        Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
                        RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
                        RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
                        PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
                        PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
                        RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
                        BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
                        RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
                        PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
                        Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
                        Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
                        Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
                        Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
                        Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
                        Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
                        Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
                        Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
                    }, vo = 0, mo = Object.keys(go); vo < mo.length; vo += 1) {
                    var yo = mo[vo];
                    go[yo.toLowerCase()] = go[yo]
                }
                var ko = go,
                    wo = M;
                return wo.average = nf, wo.bezier = df, wo.blend = Af, wo.cubehelix = qf, wo.mix = wo.interpolate = da, wo.random = Df, wo.scale = of , wo.analyze = Vf.analyze, wo.contrast = Kf, wo.deltaE = uo, wo.distance = io, wo.limits = Vf.limits, wo.valid = ho, wo.scales = po, wo.colors = Ie, wo.brewer = ko, wo
            }()
        }
    }
]);