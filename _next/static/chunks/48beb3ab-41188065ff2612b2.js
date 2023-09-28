"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7958], {
        98715: function(e, t, n) {
            n.d(t, {
                EH: function() {
                    return Kt
                },
                p: function() {
                    return Lt
                },
                tk: function() {
                    return hn
                }
            });
            var o = n(60314),
                i = n(31506),
                s = n(85804);
            const r = function(e) {
                    for (var t = 0;; t++)
                        if (!(e = e.previousSibling)) return t
                },
                l = function(e) {
                    let t = e.assignedSlot || e.parentNode;
                    return t && 11 == t.nodeType ? t.host : t
                };
            let d = null;
            const a = function(e, t, n) {
                    let o = d || (d = document.createRange());
                    return o.setEnd(e, null == n ? e.nodeValue.length : n), o.setStart(e, t || 0), o
                },
                c = function(e, t, n, o) {
                    return n && (u(e, t, n, o, -1) || u(e, t, n, o, 1))
                },
                h = /^(img|br|input|textarea|hr)$/i;

            function u(e, t, n, o, i) {
                for (;;) {
                    if (e == n && t == o) return !0;
                    if (t == (i < 0 ? 0 : f(e))) {
                        let n = e.parentNode;
                        if (!n || 1 != n.nodeType || p(e) || h.test(e.nodeName) || "false" == e.contentEditable) return !1;
                        t = r(e) + (i < 0 ? 0 : 1), e = n
                    } else {
                        if (1 != e.nodeType) return !1;
                        if ("false" == (e = e.childNodes[t + (i < 0 ? -1 : 0)]).contentEditable) return !1;
                        t = i < 0 ? f(e) : 0
                    }
                }
            }

            function f(e) {
                return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length
            }

            function p(e) {
                let t;
                for (let n = e; n && !(t = n.pmViewDesc); n = n.parentNode);
                return t && t.node && t.node.isBlock && (t.dom == e || t.contentDOM == e)
            }
            const m = function(e) {
                return e.focusNode && c(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)
            };

            function g(e, t) {
                let n = document.createEvent("Event");
                return n.initEvent("keydown", !0, !0), n.keyCode = e, n.key = n.code = t, n
            }
            const y = "undefined" != typeof navigator ? navigator : null,
                b = "undefined" != typeof document ? document : null,
                v = y && y.userAgent || "",
                w = /Edge\/(\d+)/.exec(v),
                D = /MSIE \d/.exec(v),
                N = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(v),
                O = !!(D || N || w),
                S = D ? document.documentMode : N ? +N[1] : w ? +w[1] : 0,
                C = !O && /gecko\/(\d+)/i.test(v);
            C && (/Firefox\/(\d+)/.exec(v) || [0, 0])[1];
            const M = !O && /Chrome\/(\d+)/.exec(v),
                x = !!M,
                k = M ? +M[1] : 0,
                T = !O && !!y && /Apple Computer/.test(y.vendor),
                E = T && (/Mobile\/\w+/.test(v) || !!y && y.maxTouchPoints > 2),
                P = E || !!y && /Mac/.test(y.platform),
                A = !!y && /Win/.test(y.platform),
                V = /Android \d/.test(v),
                R = !!b && "webkitFontSmoothing" in b.documentElement.style,
                B = R ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;

            function I(e) {
                return {
                    left: 0,
                    right: e.documentElement.clientWidth,
                    top: 0,
                    bottom: e.documentElement.clientHeight
                }
            }

            function q(e, t) {
                return "number" == typeof e ? e : e[t]
            }

            function z(e) {
                let t = e.getBoundingClientRect(),
                    n = t.width / e.offsetWidth || 1,
                    o = t.height / e.offsetHeight || 1;
                return {
                    left: t.left,
                    right: t.left + e.clientWidth * n,
                    top: t.top,
                    bottom: t.top + e.clientHeight * o
                }
            }

            function L(e, t, n) {
                let o = e.someProp("scrollThreshold") || 0,
                    i = e.someProp("scrollMargin") || 5,
                    s = e.dom.ownerDocument;
                for (let r = n || e.dom; r; r = l(r)) {
                    if (1 != r.nodeType) continue;
                    let e = r,
                        n = e == s.body,
                        l = n ? I(s) : z(e),
                        d = 0,
                        a = 0;
                    if (t.top < l.top + q(o, "top") ? a = -(l.top - t.top + q(i, "top")) : t.bottom > l.bottom - q(o, "bottom") && (a = t.bottom - l.bottom + q(i, "bottom")), t.left < l.left + q(o, "left") ? d = -(l.left - t.left + q(i, "left")) : t.right > l.right - q(o, "right") && (d = t.right - l.right + q(i, "right")), d || a)
                        if (n) s.defaultView.scrollBy(d, a);
                        else {
                            let n = e.scrollLeft,
                                o = e.scrollTop;
                            a && (e.scrollTop += a), d && (e.scrollLeft += d);
                            let i = e.scrollLeft - n,
                                s = e.scrollTop - o;
                            t = {
                                left: t.left - i,
                                top: t.top - s,
                                right: t.right - i,
                                bottom: t.bottom - s
                            }
                        }
                    if (n || /^(fixed|sticky)$/.test(getComputedStyle(r).position)) break
                }
            }

            function F(e) {
                let t = [],
                    n = e.ownerDocument;
                for (let o = e; o && (t.push({
                        dom: o,
                        top: o.scrollTop,
                        left: o.scrollLeft
                    }), e != n); o = l(o));
                return t
            }

            function $(e, t) {
                for (let n = 0; n < e.length; n++) {
                    let {
                        dom: o,
                        top: i,
                        left: s
                    } = e[n];
                    o.scrollTop != i + t && (o.scrollTop = i + t), o.scrollLeft != s && (o.scrollLeft = s)
                }
            }
            let K = null;

            function W(e, t) {
                let n, o, i, s, r = 2e8,
                    l = 0,
                    d = t.top,
                    c = t.top;
                for (let h = e.firstChild, u = 0; h; h = h.nextSibling, u++) {
                    let e;
                    if (1 == h.nodeType) e = h.getClientRects();
                    else {
                        if (3 != h.nodeType) continue;
                        e = a(h).getClientRects()
                    }
                    for (let a = 0; a < e.length; a++) {
                        let f = e[a];
                        if (f.top <= d && f.bottom >= c) {
                            d = Math.max(f.bottom, d), c = Math.min(f.top, c);
                            let e = f.left > t.left ? f.left - t.left : f.right < t.left ? t.left - f.right : 0;
                            if (e < r) {
                                n = h, r = e, o = e && 3 == n.nodeType ? {
                                    left: f.right < t.left ? f.right : f.left,
                                    top: t.top
                                } : t, 1 == h.nodeType && e && (l = u + (t.left >= (f.left + f.right) / 2 ? 1 : 0));
                                continue
                            }
                        } else f.top > t.top && !i && f.left <= t.left && f.right >= t.left && (i = h, s = {
                            left: Math.max(f.left, Math.min(f.right, t.left)),
                            top: f.top
                        });
                        !n && (t.left >= f.right && t.top >= f.top || t.left >= f.left && t.top >= f.bottom) && (l = u + 1)
                    }
                }
                return !n && i && (n = i, o = s, r = 0), n && 3 == n.nodeType ? function(e, t) {
                    let n = e.nodeValue.length,
                        o = document.createRange();
                    for (let i = 0; i < n; i++) {
                        o.setEnd(e, i + 1), o.setStart(e, i);
                        let n = U(o, 1);
                        if (n.top != n.bottom && H(t, n)) return {
                            node: e,
                            offset: i + (t.left >= (n.left + n.right) / 2 ? 1 : 0)
                        }
                    }
                    return {
                        node: e,
                        offset: 0
                    }
                }(n, o) : !n || r && 1 == n.nodeType ? {
                    node: e,
                    offset: l
                } : W(n, o)
            }

            function H(e, t) {
                return e.left >= t.left - 1 && e.left <= t.right + 1 && e.top >= t.top - 1 && e.top <= t.bottom + 1
            }

            function _(e, t, n) {
                let o = e.childNodes.length;
                if (o && n.top < n.bottom)
                    for (let i = Math.max(0, Math.min(o - 1, Math.floor(o * (t.top - n.top) / (n.bottom - n.top)) - 2)), s = i;;) {
                        let n = e.childNodes[s];
                        if (1 == n.nodeType) {
                            let e = n.getClientRects();
                            for (let o = 0; o < e.length; o++) {
                                let i = e[o];
                                if (H(t, i)) return _(n, t, i)
                            }
                        }
                        if ((s = (s + 1) % o) == i) break
                    }
                return e
            }

            function Y(e, t) {
                let n, o = e.dom.ownerDocument,
                    i = 0,
                    s = function(e, t, n) {
                        if (e.caretPositionFromPoint) try {
                            let o = e.caretPositionFromPoint(t, n);
                            if (o) return {
                                node: o.offsetNode,
                                offset: o.offset
                            }
                        } catch (o) {}
                        if (e.caretRangeFromPoint) {
                            let o = e.caretRangeFromPoint(t, n);
                            if (o) return {
                                node: o.startContainer,
                                offset: o.startOffset
                            }
                        }
                    }(o, t.left, t.top);
                s && ({
                    node: n,
                    offset: i
                } = s);
                let r, d = (e.root.elementFromPoint ? e.root : o).elementFromPoint(t.left, t.top);
                if (!d || !e.dom.contains(1 != d.nodeType ? d.parentNode : d)) {
                    let n = e.dom.getBoundingClientRect();
                    if (!H(t, n)) return null;
                    if (d = _(e.dom, t, n), !d) return null
                }
                if (T)
                    for (let c = d; n && c; c = l(c)) c.draggable && (n = void 0);
                if (d = function(e, t) {
                        let n = e.parentNode;
                        return n && /^li$/i.test(n.nodeName) && t.left < e.getBoundingClientRect().left ? n : e
                    }(d, t), n) {
                    if (C && 1 == n.nodeType && (i = Math.min(i, n.childNodes.length), i < n.childNodes.length)) {
                        let e, o = n.childNodes[i];
                        "IMG" == o.nodeName && (e = o.getBoundingClientRect()).right <= t.left && e.bottom > t.top && i++
                    }
                    n == e.dom && i == n.childNodes.length - 1 && 1 == n.lastChild.nodeType && t.top > n.lastChild.getBoundingClientRect().bottom ? r = e.state.doc.content.size : 0 != i && 1 == n.nodeType && "BR" == n.childNodes[i - 1].nodeName || (r = function(e, t, n, o) {
                        let i = -1;
                        for (let s = t, r = !1; s != e.dom;) {
                            let t = e.docView.nearestDesc(s, !0);
                            if (!t) return null;
                            if (1 == t.dom.nodeType && (t.node.isBlock && t.parent && !r || !t.contentDOM)) {
                                let e = t.dom.getBoundingClientRect();
                                if (t.node.isBlock && t.parent && !r && (r = !0, e.left > o.left || e.top > o.top ? i = t.posBefore : (e.right < o.left || e.bottom < o.top) && (i = t.posAfter)), !t.contentDOM && i < 0 && !t.node.isText) return (t.node.isBlock ? o.top < (e.top + e.bottom) / 2 : o.left < (e.left + e.right) / 2) ? t.posBefore : t.posAfter
                            }
                            s = t.dom.parentNode
                        }
                        return i > -1 ? i : e.docView.posFromDOM(t, n, -1)
                    }(e, n, i, t))
                }
                null == r && (r = function(e, t, n) {
                    let {
                        node: o,
                        offset: i
                    } = W(t, n), s = -1;
                    if (1 == o.nodeType && !o.firstChild) {
                        let e = o.getBoundingClientRect();
                        s = e.left != e.right && n.left > (e.left + e.right) / 2 ? 1 : -1
                    }
                    return e.docView.posFromDOM(o, i, s)
                }(e, d, t));
                let a = e.docView.nearestDesc(d, !0);
                return {
                    pos: r,
                    inside: a ? a.posAtStart - a.border : -1
                }
            }

            function G(e) {
                return e.top < e.bottom || e.left < e.right
            }

            function U(e, t) {
                let n = e.getClientRects();
                if (n.length) {
                    let e = n[t < 0 ? 0 : n.length - 1];
                    if (G(e)) return e
                }
                return Array.prototype.find.call(n, G) || e.getBoundingClientRect()
            }
            const j = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;

            function X(e, t, n) {
                let {
                    node: o,
                    offset: i,
                    atom: s
                } = e.docView.domFromPos(t, n < 0 ? -1 : 1), r = R || C;
                if (3 == o.nodeType) {
                    if (!r || !j.test(o.nodeValue) && (n < 0 ? i : i != o.nodeValue.length)) {
                        let e = i,
                            t = i,
                            s = n < 0 ? 1 : -1;
                        return n < 0 && !i ? (t++, s = -1) : n >= 0 && i == o.nodeValue.length ? (e--, s = 1) : n < 0 ? e-- : t++, J(U(a(o, e, t), s), s < 0)
                    } {
                        let e = U(a(o, i, i), n);
                        if (C && i && /\s/.test(o.nodeValue[i - 1]) && i < o.nodeValue.length) {
                            let t = U(a(o, i - 1, i - 1), -1);
                            if (t.top == e.top) {
                                let n = U(a(o, i, i + 1), -1);
                                if (n.top != e.top) return J(n, n.left < t.left)
                            }
                        }
                        return e
                    }
                }
                if (!e.state.doc.resolve(t - (s || 0)).parent.inlineContent) {
                    if (null == s && i && (n < 0 || i == f(o))) {
                        let e = o.childNodes[i - 1];
                        if (1 == e.nodeType) return Q(e.getBoundingClientRect(), !1)
                    }
                    if (null == s && i < f(o)) {
                        let e = o.childNodes[i];
                        if (1 == e.nodeType) return Q(e.getBoundingClientRect(), !0)
                    }
                    return Q(o.getBoundingClientRect(), n >= 0)
                }
                if (null == s && i && (n < 0 || i == f(o))) {
                    let e = o.childNodes[i - 1],
                        t = 3 == e.nodeType ? a(e, f(e) - (r ? 0 : 1)) : 1 != e.nodeType || "BR" == e.nodeName && e.nextSibling ? null : e;
                    if (t) return J(U(t, 1), !1)
                }
                if (null == s && i < f(o)) {
                    let e = o.childNodes[i];
                    for (; e.pmViewDesc && e.pmViewDesc.ignoreForCoords;) e = e.nextSibling;
                    let t = e ? 3 == e.nodeType ? a(e, 0, r ? 0 : 1) : 1 == e.nodeType ? e : null : null;
                    if (t) return J(U(t, -1), !0)
                }
                return J(U(3 == o.nodeType ? a(o) : o, -n), n >= 0)
            }

            function J(e, t) {
                if (0 == e.width) return e;
                let n = t ? e.left : e.right;
                return {
                    top: e.top,
                    bottom: e.bottom,
                    left: n,
                    right: n
                }
            }

            function Q(e, t) {
                if (0 == e.height) return e;
                let n = t ? e.top : e.bottom;
                return {
                    top: n,
                    bottom: n,
                    left: e.left,
                    right: e.right
                }
            }

            function Z(e, t, n) {
                let o = e.state,
                    i = e.root.activeElement;
                o != t && e.updateState(t), i != e.dom && e.focus();
                try {
                    return n()
                } finally {
                    o != t && e.updateState(o), i != e.dom && i && i.focus()
                }
            }
            const ee = /[\u0590-\u08ac]/;
            let te = null,
                ne = null,
                oe = !1;

            function ie(e, t, n) {
                return te == t && ne == n ? oe : (te = t, ne = n, oe = "up" == n || "down" == n ? function(e, t, n) {
                    let o = t.selection,
                        i = "up" == n ? o.$from : o.$to;
                    return Z(e, t, (() => {
                        let {
                            node: t
                        } = e.docView.domFromPos(i.pos, "up" == n ? -1 : 1);
                        for (;;) {
                            let n = e.docView.nearestDesc(t, !0);
                            if (!n) break;
                            if (n.node.isBlock) {
                                t = n.contentDOM || n.dom;
                                break
                            }
                            t = n.dom.parentNode
                        }
                        let o = X(e, i.pos, 1);
                        for (let e = t.firstChild; e; e = e.nextSibling) {
                            let t;
                            if (1 == e.nodeType) t = e.getClientRects();
                            else {
                                if (3 != e.nodeType) continue;
                                t = a(e, 0, e.nodeValue.length).getClientRects()
                            }
                            for (let e = 0; e < t.length; e++) {
                                let i = t[e];
                                if (i.bottom > i.top + 1 && ("up" == n ? o.top - i.top > 2 * (i.bottom - o.top) : i.bottom - o.bottom > 2 * (o.bottom - i.top))) return !1
                            }
                        }
                        return !0
                    }))
                }(e, t, n) : function(e, t, n) {
                    let {
                        $head: o
                    } = t.selection;
                    if (!o.parent.isTextblock) return !1;
                    let i = o.parentOffset,
                        s = !i,
                        r = i == o.parent.content.size,
                        l = e.domSelection();
                    return ee.test(o.parent.textContent) && l.modify ? Z(e, t, (() => {
                        let {
                            focusNode: t,
                            focusOffset: i,
                            anchorNode: s,
                            anchorOffset: r
                        } = e.domSelectionRange(), d = l.caretBidiLevel;
                        l.modify("move", n, "character");
                        let a = o.depth ? e.docView.domAfterPos(o.before()) : e.dom,
                            {
                                focusNode: c,
                                focusOffset: h
                            } = e.domSelectionRange(),
                            u = c && !a.contains(1 == c.nodeType ? c : c.parentNode) || t == c && i == h;
                        try {
                            l.collapse(s, r), t && (t != s || i != r) && l.extend && l.extend(t, i)
                        } catch (f) {}
                        return null != d && (l.caretBidiLevel = d), u
                    })) : "left" == n || "backward" == n ? s : r
                }(e, t, n))
            }
            class se {
                constructor(e, t, n, o) {
                    this.parent = e, this.children = t, this.dom = n, this.contentDOM = o, this.dirty = 0, n.pmViewDesc = this
                }
                matchesWidget(e) {
                    return !1
                }
                matchesMark(e) {
                    return !1
                }
                matchesNode(e, t, n) {
                    return !1
                }
                matchesHack(e) {
                    return !1
                }
                parseRule() {
                    return null
                }
                stopEvent(e) {
                    return !1
                }
                get size() {
                    let e = 0;
                    for (let t = 0; t < this.children.length; t++) e += this.children[t].size;
                    return e
                }
                get border() {
                    return 0
                }
                destroy() {
                    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
                    for (let e = 0; e < this.children.length; e++) this.children[e].destroy()
                }
                posBeforeChild(e) {
                    for (let t = 0, n = this.posAtStart;; t++) {
                        let o = this.children[t];
                        if (o == e) return n;
                        n += o.size
                    }
                }
                get posBefore() {
                    return this.parent.posBeforeChild(this)
                }
                get posAtStart() {
                    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0
                }
                get posAfter() {
                    return this.posBefore + this.size
                }
                get posAtEnd() {
                    return this.posAtStart + this.size - 2 * this.border
                }
                localPosFromDOM(e, t, n) {
                    if (this.contentDOM && this.contentDOM.contains(1 == e.nodeType ? e : e.parentNode)) {
                        if (n < 0) {
                            let n, o;
                            if (e == this.contentDOM) n = e.childNodes[t - 1];
                            else {
                                for (; e.parentNode != this.contentDOM;) e = e.parentNode;
                                n = e.previousSibling
                            }
                            for (; n && (!(o = n.pmViewDesc) || o.parent != this);) n = n.previousSibling;
                            return n ? this.posBeforeChild(o) + o.size : this.posAtStart
                        } {
                            let n, o;
                            if (e == this.contentDOM) n = e.childNodes[t];
                            else {
                                for (; e.parentNode != this.contentDOM;) e = e.parentNode;
                                n = e.nextSibling
                            }
                            for (; n && (!(o = n.pmViewDesc) || o.parent != this);) n = n.nextSibling;
                            return n ? this.posBeforeChild(o) : this.posAtEnd
                        }
                    }
                    let o;
                    if (e == this.dom && this.contentDOM) o = t > r(this.contentDOM);
                    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) o = 2 & e.compareDocumentPosition(this.contentDOM);
                    else if (this.dom.firstChild) {
                        if (0 == t)
                            for (let t = e;; t = t.parentNode) {
                                if (t == this.dom) {
                                    o = !1;
                                    break
                                }
                                if (t.previousSibling) break
                            }
                        if (null == o && t == e.childNodes.length)
                            for (let t = e;; t = t.parentNode) {
                                if (t == this.dom) {
                                    o = !0;
                                    break
                                }
                                if (t.nextSibling) break
                            }
                    }
                    return (null == o ? n > 0 : o) ? this.posAtEnd : this.posAtStart
                }
                nearestDesc(e, t = !1) {
                    for (let n = !0, o = e; o; o = o.parentNode) {
                        let i, s = this.getDesc(o);
                        if (s && (!t || s.node)) {
                            if (!n || !(i = s.nodeDOM) || (1 == i.nodeType ? i.contains(1 == e.nodeType ? e : e.parentNode) : i == e)) return s;
                            n = !1
                        }
                    }
                }
                getDesc(e) {
                    let t = e.pmViewDesc;
                    for (let n = t; n; n = n.parent)
                        if (n == this) return t
                }
                posFromDOM(e, t, n) {
                    for (let o = e; o; o = o.parentNode) {
                        let i = this.getDesc(o);
                        if (i) return i.localPosFromDOM(e, t, n)
                    }
                    return -1
                }
                descAt(e) {
                    for (let t = 0, n = 0; t < this.children.length; t++) {
                        let o = this.children[t],
                            i = n + o.size;
                        if (n == e && i != n) {
                            for (; !o.border && o.children.length;) o = o.children[0];
                            return o
                        }
                        if (e < i) return o.descAt(e - n - o.border);
                        n = i
                    }
                }
                domFromPos(e, t) {
                    if (!this.contentDOM) return {
                        node: this.dom,
                        offset: 0,
                        atom: e + 1
                    };
                    let n, o = 0,
                        i = 0;
                    for (let s = 0; o < this.children.length; o++) {
                        let t = this.children[o],
                            n = s + t.size;
                        if (n > e || t instanceof ue) {
                            i = e - s;
                            break
                        }
                        s = n
                    }
                    if (i) return this.children[o].domFromPos(i - this.children[o].border, t);
                    for (; o && !(n = this.children[o - 1]).size && n instanceof re && n.side >= 0; o--);
                    if (t <= 0) {
                        let e, n = !0;
                        for (; e = o ? this.children[o - 1] : null, e && e.dom.parentNode != this.contentDOM; o--, n = !1);
                        return e && t && n && !e.border && !e.domAtom ? e.domFromPos(e.size, t) : {
                            node: this.contentDOM,
                            offset: e ? r(e.dom) + 1 : 0
                        }
                    } {
                        let e, n = !0;
                        for (; e = o < this.children.length ? this.children[o] : null, e && e.dom.parentNode != this.contentDOM; o++, n = !1);
                        return e && n && !e.border && !e.domAtom ? e.domFromPos(0, t) : {
                            node: this.contentDOM,
                            offset: e ? r(e.dom) : this.contentDOM.childNodes.length
                        }
                    }
                }
                parseRange(e, t, n = 0) {
                    if (0 == this.children.length) return {
                        node: this.contentDOM,
                        from: e,
                        to: t,
                        fromOffset: 0,
                        toOffset: this.contentDOM.childNodes.length
                    };
                    let o = -1,
                        i = -1;
                    for (let s = n, l = 0;; l++) {
                        let n = this.children[l],
                            d = s + n.size;
                        if (-1 == o && e <= d) {
                            let i = s + n.border;
                            if (e >= i && t <= d - n.border && n.node && n.contentDOM && this.contentDOM.contains(n.contentDOM)) return n.parseRange(e, t, i);
                            e = s;
                            for (let t = l; t > 0; t--) {
                                let n = this.children[t - 1];
                                if (n.size && n.dom.parentNode == this.contentDOM && !n.emptyChildAt(1)) {
                                    o = r(n.dom) + 1;
                                    break
                                }
                                e -= n.size
                            } - 1 == o && (o = 0)
                        }
                        if (o > -1 && (d > t || l == this.children.length - 1)) {
                            t = d;
                            for (let e = l + 1; e < this.children.length; e++) {
                                let n = this.children[e];
                                if (n.size && n.dom.parentNode == this.contentDOM && !n.emptyChildAt(-1)) {
                                    i = r(n.dom);
                                    break
                                }
                                t += n.size
                            } - 1 == i && (i = this.contentDOM.childNodes.length);
                            break
                        }
                        s = d
                    }
                    return {
                        node: this.contentDOM,
                        from: e,
                        to: t,
                        fromOffset: o,
                        toOffset: i
                    }
                }
                emptyChildAt(e) {
                    if (this.border || !this.contentDOM || !this.children.length) return !1;
                    let t = this.children[e < 0 ? 0 : this.children.length - 1];
                    return 0 == t.size || t.emptyChildAt(e)
                }
                domAfterPos(e) {
                    let {
                        node: t,
                        offset: n
                    } = this.domFromPos(e, 0);
                    if (1 != t.nodeType || n == t.childNodes.length) throw new RangeError("No node after pos " + e);
                    return t.childNodes[n]
                }
                setSelection(e, t, n, o = !1) {
                    let i = Math.min(e, t),
                        s = Math.max(e, t);
                    for (let r = 0, c = 0; r < this.children.length; r++) {
                        let l = this.children[r],
                            d = c + l.size;
                        if (i > c && s < d) return l.setSelection(e - c - l.border, t - c - l.border, n, o);
                        c = d
                    }
                    let l = this.domFromPos(e, e ? -1 : 1),
                        d = t == e ? l : this.domFromPos(t, t ? -1 : 1),
                        a = n.getSelection(),
                        h = !1;
                    if ((C || T) && e == t) {
                        let {
                            node: e,
                            offset: t
                        } = l;
                        if (3 == e.nodeType) {
                            if (h = !(!t || "\n" != e.nodeValue[t - 1]), h && t == e.nodeValue.length)
                                for (let n, o = e; o; o = o.parentNode) {
                                    if (n = o.nextSibling) {
                                        "BR" == n.nodeName && (l = d = {
                                            node: n.parentNode,
                                            offset: r(n) + 1
                                        });
                                        break
                                    }
                                    let e = o.pmViewDesc;
                                    if (e && e.node && e.node.isBlock) break
                                }
                        } else {
                            let n = e.childNodes[t - 1];
                            h = n && ("BR" == n.nodeName || "false" == n.contentEditable)
                        }
                    }
                    if (C && a.focusNode && a.focusNode != d.node && 1 == a.focusNode.nodeType) {
                        let e = a.focusNode.childNodes[a.focusOffset];
                        e && "false" == e.contentEditable && (o = !0)
                    }
                    if (!(o || h && T) && c(l.node, l.offset, a.anchorNode, a.anchorOffset) && c(d.node, d.offset, a.focusNode, a.focusOffset)) return;
                    let u = !1;
                    if ((a.extend || e == t) && !h) {
                        a.collapse(l.node, l.offset);
                        try {
                            e != t && a.extend(d.node, d.offset), u = !0
                        } catch (f) {}
                    }
                    if (!u) {
                        if (e > t) {
                            let e = l;
                            l = d, d = e
                        }
                        let n = document.createRange();
                        n.setEnd(d.node, d.offset), n.setStart(l.node, l.offset), a.removeAllRanges(), a.addRange(n)
                    }
                }
                ignoreMutation(e) {
                    return !this.contentDOM && "selection" != e.type
                }
                get contentLost() {
                    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM)
                }
                markDirty(e, t) {
                    for (let n = 0, o = 0; o < this.children.length; o++) {
                        let i = this.children[o],
                            s = n + i.size;
                        if (n == s ? e <= s && t >= n : e < s && t > n) {
                            let o = n + i.border,
                                r = s - i.border;
                            if (e >= o && t <= r) return this.dirty = e == n || t == s ? 2 : 1, void(e != o || t != r || !i.contentLost && i.dom.parentNode == this.contentDOM ? i.markDirty(e - o, t - o) : i.dirty = 3);
                            i.dirty = i.dom != i.contentDOM || i.dom.parentNode != this.contentDOM || i.children.length ? 3 : 2
                        }
                        n = s
                    }
                    this.dirty = 2
                }
                markParentsDirty() {
                    let e = 1;
                    for (let t = this.parent; t; t = t.parent, e++) {
                        let n = 1 == e ? 2 : 1;
                        t.dirty < n && (t.dirty = n)
                    }
                }
                get domAtom() {
                    return !1
                }
                get ignoreForCoords() {
                    return !1
                }
            }
            class re extends se {
                constructor(e, t, n, o) {
                    let i, s = t.type.toDOM;
                    if ("function" == typeof s && (s = s(n, (() => i ? i.parent ? i.parent.posBeforeChild(i) : void 0 : o))), !t.type.spec.raw) {
                        if (1 != s.nodeType) {
                            let e = document.createElement("span");
                            e.appendChild(s), s = e
                        }
                        s.contentEditable = "false", s.classList.add("ProseMirror-widget")
                    }
                    super(e, [], s, null), this.widget = t, this.widget = t, i = this
                }
                matchesWidget(e) {
                    return 0 == this.dirty && e.type.eq(this.widget.type)
                }
                parseRule() {
                    return {
                        ignore: !0
                    }
                }
                stopEvent(e) {
                    let t = this.widget.spec.stopEvent;
                    return !!t && t(e)
                }
                ignoreMutation(e) {
                    return "selection" != e.type || this.widget.spec.ignoreSelection
                }
                destroy() {
                    this.widget.type.destroy(this.dom), super.destroy()
                }
                get domAtom() {
                    return !0
                }
                get side() {
                    return this.widget.type.side
                }
            }
            class le extends se {
                constructor(e, t, n, o) {
                    super(e, [], t, null), this.textDOM = n, this.text = o
                }
                get size() {
                    return this.text.length
                }
                localPosFromDOM(e, t) {
                    return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t
                }
                domFromPos(e) {
                    return {
                        node: this.textDOM,
                        offset: e
                    }
                }
                ignoreMutation(e) {
                    return "characterData" === e.type && e.target.nodeValue == e.oldValue
                }
            }
            class de extends se {
                constructor(e, t, n, o) {
                    super(e, [], n, o), this.mark = t
                }
                static create(e, t, n, o) {
                    let s = o.nodeViews[t.type.name],
                        r = s && s(t, o, n);
                    return r && r.dom || (r = i.PW.renderSpec(document, t.type.spec.toDOM(t, n))), new de(e, t, r.dom, r.contentDOM || r.dom)
                }
                parseRule() {
                    return 3 & this.dirty || this.mark.type.spec.reparseInView ? null : {
                        mark: this.mark.type.name,
                        attrs: this.mark.attrs,
                        contentElement: this.contentDOM
                    }
                }
                matchesMark(e) {
                    return 3 != this.dirty && this.mark.eq(e)
                }
                markDirty(e, t) {
                    if (super.markDirty(e, t), 0 != this.dirty) {
                        let e = this.parent;
                        for (; !e.node;) e = e.parent;
                        e.dirty < this.dirty && (e.dirty = this.dirty), this.dirty = 0
                    }
                }
                slice(e, t, n) {
                    let o = de.create(this.parent, this.mark, !0, n),
                        i = this.children,
                        s = this.size;
                    t < s && (i = Ce(i, t, s, n)), e > 0 && (i = Ce(i, 0, e, n));
                    for (let r = 0; r < i.length; r++) i[r].parent = o;
                    return o.children = i, o
                }
            }
            class ae extends se {
                constructor(e, t, n, o, i, s, r, l, d) {
                    super(e, [], i, s), this.node = t, this.outerDeco = n, this.innerDeco = o, this.nodeDOM = r
                }
                static create(e, t, n, o, s, r) {
                    let l, d = s.nodeViews[t.type.name],
                        a = d && d(t, s, (() => l ? l.parent ? l.parent.posBeforeChild(l) : void 0 : r), n, o),
                        c = a && a.dom,
                        h = a && a.contentDOM;
                    if (t.isText)
                        if (c) {
                            if (3 != c.nodeType) throw new RangeError("Text must be rendered as a DOM text node")
                        } else c = document.createTextNode(t.text);
                    else c || ({
                        dom: c,
                        contentDOM: h
                    } = i.PW.renderSpec(document, t.type.spec.toDOM(t)));
                    h || t.isText || "BR" == c.nodeName || (c.hasAttribute("contenteditable") || (c.contentEditable = "false"), t.type.spec.draggable && (c.draggable = !0));
                    let u = c;
                    return c = we(c, n, t), a ? l = new fe(e, t, n, o, c, h || null, u, a, s, r + 1) : t.isText ? new he(e, t, n, o, c, u, s) : new ae(e, t, n, o, c, h || null, u, s, r + 1)
                }
                parseRule() {
                    if (this.node.type.spec.reparseInView) return null;
                    let e = {
                        node: this.node.type.name,
                        attrs: this.node.attrs
                    };
                    if ("pre" == this.node.type.whitespace && (e.preserveWhitespace = "full"), this.contentDOM)
                        if (this.contentLost) {
                            for (let t = this.children.length - 1; t >= 0; t--) {
                                let n = this.children[t];
                                if (this.dom.contains(n.dom.parentNode)) {
                                    e.contentElement = n.dom.parentNode;
                                    break
                                }
                            }
                            e.contentElement || (e.getContent = () => i.HY.empty)
                        } else e.contentElement = this.contentDOM;
                    else e.getContent = () => this.node.content;
                    return e
                }
                matchesNode(e, t, n) {
                    return 0 == this.dirty && e.eq(this.node) && De(t, this.outerDeco) && n.eq(this.innerDeco)
                }
                get size() {
                    return this.node.nodeSize
                }
                get border() {
                    return this.node.isLeaf ? 0 : 1
                }
                updateChildren(e, t) {
                    let n = this.node.inlineContent,
                        o = t,
                        s = e.composing ? this.localCompositionInfo(e, t) : null,
                        r = s && s.pos > -1 ? s : null,
                        l = s && s.pos < 0,
                        d = new Oe(this, r && r.node, e);
                    ! function(e, t, n, o) {
                        let i = t.locals(e),
                            s = 0;
                        if (0 == i.length) {
                            for (let n = 0; n < e.childCount; n++) {
                                let r = e.child(n);
                                o(r, i, t.forChild(s, r), n), s += r.nodeSize
                            }
                            return
                        }
                        let r = 0,
                            l = [],
                            d = null;
                        for (let a = 0;;) {
                            if (r < i.length && i[r].to == s) {
                                let e, t = i[r++];
                                for (; r < i.length && i[r].to == s;)(e || (e = [t])).push(i[r++]);
                                if (e) {
                                    e.sort(Se);
                                    for (let t = 0; t < e.length; t++) n(e[t], a, !!d)
                                } else n(t, a, !!d)
                            }
                            let c, h;
                            if (d) h = -1, c = d, d = null;
                            else {
                                if (!(a < e.childCount)) break;
                                h = a, c = e.child(a++)
                            }
                            for (let e = 0; e < l.length; e++) l[e].to <= s && l.splice(e--, 1);
                            for (; r < i.length && i[r].from <= s && i[r].to > s;) l.push(i[r++]);
                            let u = s + c.nodeSize;
                            if (c.isText) {
                                let e = u;
                                r < i.length && i[r].from < e && (e = i[r].from);
                                for (let t = 0; t < l.length; t++) l[t].to < e && (e = l[t].to);
                                e < u && (d = c.cut(e - s), c = c.cut(0, e - s), u = e, h = -1)
                            }
                            o(c, c.isInline && !c.isLeaf ? l.filter((e => !e.inline)) : l.slice(), t.forChild(s, c), h), s = u
                        }
                    }(this.node, this.innerDeco, ((t, s, r) => {
                        t.spec.marks ? d.syncToMarks(t.spec.marks, n, e) : t.type.side >= 0 && !r && d.syncToMarks(s == this.node.childCount ? i.vc.none : this.node.child(s).marks, n, e), d.placeWidget(t, e, o)
                    }), ((t, i, r, a) => {
                        let c;
                        d.syncToMarks(t.marks, n, e), d.findNodeMatch(t, i, r, a) || l && e.state.selection.from > o && e.state.selection.to < o + t.nodeSize && (c = d.findIndexWithChild(s.node)) > -1 && d.updateNodeAt(t, i, r, c, e) || d.updateNextNode(t, i, r, e, a, o) || d.addNode(t, i, r, e, o), o += t.nodeSize
                    })), d.syncToMarks([], n, e), this.node.isTextblock && d.addTextblockHacks(), d.destroyRest(), (d.changed || 2 == this.dirty) && (r && this.protectLocalComposition(e, r), pe(this.contentDOM, this.children, e), E && function(e) {
                        if ("UL" == e.nodeName || "OL" == e.nodeName) {
                            let t = e.style.cssText;
                            e.style.cssText = t + "; list-style: square !important", window.getComputedStyle(e).listStyle, e.style.cssText = t
                        }
                    }(this.dom))
                }
                localCompositionInfo(e, t) {
                    let {
                        from: n,
                        to: i
                    } = e.state.selection;
                    if (!(e.state.selection instanceof o.Bs) || n < t || i > t + this.node.content.size) return null;
                    let s = e.domSelectionRange(),
                        r = function(e, t) {
                            for (;;) {
                                if (3 == e.nodeType) return e;
                                if (1 == e.nodeType && t > 0) {
                                    if (e.childNodes.length > t && 3 == e.childNodes[t].nodeType) return e.childNodes[t];
                                    t = f(e = e.childNodes[t - 1])
                                } else {
                                    if (!(1 == e.nodeType && t < e.childNodes.length)) return null;
                                    e = e.childNodes[t], t = 0
                                }
                            }
                        }(s.focusNode, s.focusOffset);
                    if (!r || !this.dom.contains(r.parentNode)) return null;
                    if (this.node.inlineContent) {
                        let e = r.nodeValue,
                            o = function(e, t, n, o) {
                                for (let i = 0, s = 0; i < e.childCount && s <= o;) {
                                    let r = e.child(i++),
                                        l = s;
                                    if (s += r.nodeSize, !r.isText) continue;
                                    let d = r.text;
                                    for (; i < e.childCount;) {
                                        let t = e.child(i++);
                                        if (s += t.nodeSize, !t.isText) break;
                                        d += t.text
                                    }
                                    if (s >= n) {
                                        let e = l < o ? d.lastIndexOf(t, o - l - 1) : -1;
                                        if (e >= 0 && e + t.length + l >= n) return l + e;
                                        if (n == o && d.length >= o + t.length - l && d.slice(o - l, o - l + t.length) == t) return o
                                    }
                                }
                                return -1
                            }(this.node.content, e, n - t, i - t);
                        return o < 0 ? null : {
                            node: r,
                            pos: o,
                            text: e
                        }
                    }
                    return {
                        node: r,
                        pos: -1,
                        text: ""
                    }
                }
                protectLocalComposition(e, {
                    node: t,
                    pos: n,
                    text: o
                }) {
                    if (this.getDesc(t)) return;
                    let i = t;
                    for (; i.parentNode != this.contentDOM; i = i.parentNode) {
                        for (; i.previousSibling;) i.parentNode.removeChild(i.previousSibling);
                        for (; i.nextSibling;) i.parentNode.removeChild(i.nextSibling);
                        i.pmViewDesc && (i.pmViewDesc = void 0)
                    }
                    let s = new le(this, i, t, o);
                    e.input.compositionNodes.push(s), this.children = Ce(this.children, n, n + o.length, e, s)
                }
                update(e, t, n, o) {
                    return !(3 == this.dirty || !e.sameMarkup(this.node)) && (this.updateInner(e, t, n, o), !0)
                }
                updateInner(e, t, n, o) {
                    this.updateOuterDeco(t), this.node = e, this.innerDeco = n, this.contentDOM && this.updateChildren(o, this.posAtStart), this.dirty = 0
                }
                updateOuterDeco(e) {
                    if (De(e, this.outerDeco)) return;
                    let t = 1 != this.nodeDOM.nodeType,
                        n = this.dom;
                    this.dom = be(this.dom, this.nodeDOM, ye(this.outerDeco, this.node, t), ye(e, this.node, t)), this.dom != n && (n.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e
                }
                selectNode() {
                    1 == this.nodeDOM.nodeType && this.nodeDOM.classList.add("ProseMirror-selectednode"), !this.contentDOM && this.node.type.spec.draggable || (this.dom.draggable = !0)
                }
                deselectNode() {
                    1 == this.nodeDOM.nodeType && this.nodeDOM.classList.remove("ProseMirror-selectednode"), !this.contentDOM && this.node.type.spec.draggable || this.dom.removeAttribute("draggable")
                }
                get domAtom() {
                    return this.node.isAtom
                }
            }

            function ce(e, t, n, o, i) {
                we(o, t, e);
                let s = new ae(void 0, e, t, n, o, o, o, i, 0);
                return s.contentDOM && s.updateChildren(i, 0), s
            }
            class he extends ae {
                constructor(e, t, n, o, i, s, r) {
                    super(e, t, n, o, i, null, s, r, 0)
                }
                parseRule() {
                    let e = this.nodeDOM.parentNode;
                    for (; e && e != this.dom && !e.pmIsDeco;) e = e.parentNode;
                    return {
                        skip: e || !0
                    }
                }
                update(e, t, n, o) {
                    return !(3 == this.dirty || 0 != this.dirty && !this.inParent() || !e.sameMarkup(this.node)) && (this.updateOuterDeco(t), 0 == this.dirty && e.text == this.node.text || e.text == this.nodeDOM.nodeValue || (this.nodeDOM.nodeValue = e.text, o.trackWrites == this.nodeDOM && (o.trackWrites = null)), this.node = e, this.dirty = 0, !0)
                }
                inParent() {
                    let e = this.parent.contentDOM;
                    for (let t = this.nodeDOM; t; t = t.parentNode)
                        if (t == e) return !0;
                    return !1
                }
                domFromPos(e) {
                    return {
                        node: this.nodeDOM,
                        offset: e
                    }
                }
                localPosFromDOM(e, t, n) {
                    return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, n)
                }
                ignoreMutation(e) {
                    return "characterData" != e.type && "selection" != e.type
                }
                slice(e, t, n) {
                    let o = this.node.cut(e, t),
                        i = document.createTextNode(o.text);
                    return new he(this.parent, o, this.outerDeco, this.innerDeco, i, i, n)
                }
                markDirty(e, t) {
                    super.markDirty(e, t), this.dom == this.nodeDOM || 0 != e && t != this.nodeDOM.nodeValue.length || (this.dirty = 3)
                }
                get domAtom() {
                    return !1
                }
            }
            class ue extends se {
                parseRule() {
                    return {
                        ignore: !0
                    }
                }
                matchesHack(e) {
                    return 0 == this.dirty && this.dom.nodeName == e
                }
                get domAtom() {
                    return !0
                }
                get ignoreForCoords() {
                    return "IMG" == this.dom.nodeName
                }
            }
            class fe extends ae {
                constructor(e, t, n, o, i, s, r, l, d, a) {
                    super(e, t, n, o, i, s, r, d, a), this.spec = l
                }
                update(e, t, n, o) {
                    if (3 == this.dirty) return !1;
                    if (this.spec.update) {
                        let i = this.spec.update(e, t, n);
                        return i && this.updateInner(e, t, n, o), i
                    }
                    return !(!this.contentDOM && !e.isLeaf) && super.update(e, t, n, o)
                }
                selectNode() {
                    this.spec.selectNode ? this.spec.selectNode() : super.selectNode()
                }
                deselectNode() {
                    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode()
                }
                setSelection(e, t, n, o) {
                    this.spec.setSelection ? this.spec.setSelection(e, t, n) : super.setSelection(e, t, n, o)
                }
                destroy() {
                    this.spec.destroy && this.spec.destroy(), super.destroy()
                }
                stopEvent(e) {
                    return !!this.spec.stopEvent && this.spec.stopEvent(e)
                }
                ignoreMutation(e) {
                    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e)
                }
            }

            function pe(e, t, n) {
                let o = e.firstChild,
                    i = !1;
                for (let s = 0; s < t.length; s++) {
                    let r = t[s],
                        l = r.dom;
                    if (l.parentNode == e) {
                        for (; l != o;) o = Ne(o), i = !0;
                        o = o.nextSibling
                    } else i = !0, e.insertBefore(l, o);
                    if (r instanceof de) {
                        let t = o ? o.previousSibling : e.lastChild;
                        pe(r.contentDOM, r.children, n), o = t ? t.nextSibling : e.firstChild
                    }
                }
                for (; o;) o = Ne(o), i = !0;
                i && n.trackWrites == e && (n.trackWrites = null)
            }
            const me = function(e) {
                e && (this.nodeName = e)
            };
            me.prototype = Object.create(null);
            const ge = [new me];

            function ye(e, t, n) {
                if (0 == e.length) return ge;
                let o = n ? ge[0] : new me,
                    i = [o];
                for (let s = 0; s < e.length; s++) {
                    let r = e[s].type.attrs;
                    if (r) {
                        r.nodeName && i.push(o = new me(r.nodeName));
                        for (let e in r) {
                            let s = r[e];
                            null != s && (n && 1 == i.length && i.push(o = new me(t.isInline ? "span" : "div")), "class" == e ? o.class = (o.class ? o.class + " " : "") + s : "style" == e ? o.style = (o.style ? o.style + ";" : "") + s : "nodeName" != e && (o[e] = s))
                        }
                    }
                }
                return i
            }

            function be(e, t, n, o) {
                if (n == ge && o == ge) return t;
                let i = t;
                for (let s = 0; s < o.length; s++) {
                    let t = o[s],
                        r = n[s];
                    if (s) {
                        let n;
                        r && r.nodeName == t.nodeName && i != e && (n = i.parentNode) && n.nodeName.toLowerCase() == t.nodeName || (n = document.createElement(t.nodeName), n.pmIsDeco = !0, n.appendChild(i), r = ge[0]), i = n
                    }
                    ve(i, r || ge[0], t)
                }
                return i
            }

            function ve(e, t, n) {
                for (let o in t) "class" == o || "style" == o || "nodeName" == o || o in n || e.removeAttribute(o);
                for (let o in n) "class" != o && "style" != o && "nodeName" != o && n[o] != t[o] && e.setAttribute(o, n[o]);
                if (t.class != n.class) {
                    let o = t.class ? t.class.split(" ").filter(Boolean) : [],
                        i = n.class ? n.class.split(" ").filter(Boolean) : [];
                    for (let t = 0; t < o.length; t++) - 1 == i.indexOf(o[t]) && e.classList.remove(o[t]);
                    for (let t = 0; t < i.length; t++) - 1 == o.indexOf(i[t]) && e.classList.add(i[t]);
                    0 == e.classList.length && e.removeAttribute("class")
                }
                if (t.style != n.style) {
                    if (t.style) {
                        let n, o = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g;
                        for (; n = o.exec(t.style);) e.style.removeProperty(n[1])
                    }
                    n.style && (e.style.cssText += n.style)
                }
            }

            function we(e, t, n) {
                return be(e, e, ge, ye(t, n, 1 != e.nodeType))
            }

            function De(e, t) {
                if (e.length != t.length) return !1;
                for (let n = 0; n < e.length; n++)
                    if (!e[n].type.eq(t[n].type)) return !1;
                return !0
            }

            function Ne(e) {
                let t = e.nextSibling;
                return e.parentNode.removeChild(e), t
            }
            class Oe {
                constructor(e, t, n) {
                    this.lock = t, this.view = n, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = function(e, t) {
                        let n = t,
                            o = n.children.length,
                            i = e.childCount,
                            s = new Map,
                            r = [];
                        e: for (; i > 0;) {
                            let l;
                            for (;;)
                                if (o) {
                                    let e = n.children[o - 1];
                                    if (!(e instanceof de)) {
                                        l = e, o--;
                                        break
                                    }
                                    n = e, o = e.children.length
                                } else {
                                    if (n == t) break e;
                                    o = n.parent.children.indexOf(n), n = n.parent
                                }
                            let d = l.node;
                            if (d) {
                                if (d != e.child(i - 1)) break;
                                --i, s.set(l, i), r.push(l)
                            }
                        }
                        return {
                            index: i,
                            matched: s,
                            matches: r.reverse()
                        }
                    }(e.node.content, e)
                }
                destroyBetween(e, t) {
                    if (e != t) {
                        for (let n = e; n < t; n++) this.top.children[n].destroy();
                        this.top.children.splice(e, t - e), this.changed = !0
                    }
                }
                destroyRest() {
                    this.destroyBetween(this.index, this.top.children.length)
                }
                syncToMarks(e, t, n) {
                    let o = 0,
                        i = this.stack.length >> 1,
                        s = Math.min(i, e.length);
                    for (; o < s && (o == i - 1 ? this.top : this.stack[o + 1 << 1]).matchesMark(e[o]) && !1 !== e[o].type.spec.spanning;) o++;
                    for (; o < i;) this.destroyRest(), this.top.dirty = 0, this.index = this.stack.pop(), this.top = this.stack.pop(), i--;
                    for (; i < e.length;) {
                        this.stack.push(this.top, this.index + 1);
                        let o = -1;
                        for (let t = this.index; t < Math.min(this.index + 3, this.top.children.length); t++) {
                            let n = this.top.children[t];
                            if (n.matchesMark(e[i]) && !this.isLocked(n.dom)) {
                                o = t;
                                break
                            }
                        }
                        if (o > -1) o > this.index && (this.changed = !0, this.destroyBetween(this.index, o)), this.top = this.top.children[this.index];
                        else {
                            let o = de.create(this.top, e[i], t, n);
                            this.top.children.splice(this.index, 0, o), this.top = o, this.changed = !0
                        }
                        this.index = 0, i++
                    }
                }
                findNodeMatch(e, t, n, o) {
                    let i, s = -1;
                    if (o >= this.preMatch.index && (i = this.preMatch.matches[o - this.preMatch.index]).parent == this.top && i.matchesNode(e, t, n)) s = this.top.children.indexOf(i, this.index);
                    else
                        for (let r = this.index, l = Math.min(this.top.children.length, r + 5); r < l; r++) {
                            let o = this.top.children[r];
                            if (o.matchesNode(e, t, n) && !this.preMatch.matched.has(o)) {
                                s = r;
                                break
                            }
                        }
                    return !(s < 0) && (this.destroyBetween(this.index, s), this.index++, !0)
                }
                updateNodeAt(e, t, n, o, i) {
                    let s = this.top.children[o];
                    return 3 == s.dirty && s.dom == s.contentDOM && (s.dirty = 2), !!s.update(e, t, n, i) && (this.destroyBetween(this.index, o), this.index++, !0)
                }
                findIndexWithChild(e) {
                    for (;;) {
                        let t = e.parentNode;
                        if (!t) return -1;
                        if (t == this.top.contentDOM) {
                            let t = e.pmViewDesc;
                            if (t)
                                for (let e = this.index; e < this.top.children.length; e++)
                                    if (this.top.children[e] == t) return e;
                            return -1
                        }
                        e = t
                    }
                }
                updateNextNode(e, t, n, o, i, s) {
                    for (let r = this.index; r < this.top.children.length; r++) {
                        let l = this.top.children[r];
                        if (l instanceof ae) {
                            let d = this.preMatch.matched.get(l);
                            if (null != d && d != i) return !1;
                            let a, c = l.dom,
                                h = this.isLocked(c) && !(e.isText && l.node && l.node.isText && l.nodeDOM.nodeValue == e.text && 3 != l.dirty && De(t, l.outerDeco));
                            if (!h && l.update(e, t, n, o)) return this.destroyBetween(this.index, r), l.dom != c && (this.changed = !0), this.index++, !0;
                            if (!h && (a = this.recreateWrapper(l, e, t, n, o, s))) return this.top.children[this.index] = a, a.dirty = 2, a.updateChildren(o, s + 1), a.dirty = 0, this.changed = !0, this.index++, !0;
                            break
                        }
                    }
                    return !1
                }
                recreateWrapper(e, t, n, o, i, s) {
                    if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content)) return null;
                    let r = ae.create(this.top, t, n, o, i, s);
                    if (!r.contentDOM) return null;
                    r.children = e.children, e.children = [], e.destroy();
                    for (let l of r.children) l.parent = r;
                    return r
                }
                addNode(e, t, n, o, i) {
                    let s = ae.create(this.top, e, t, n, o, i);
                    s.contentDOM && s.updateChildren(o, i + 1), this.top.children.splice(this.index++, 0, s), this.changed = !0
                }
                placeWidget(e, t, n) {
                    let o = this.index < this.top.children.length ? this.top.children[this.index] : null;
                    if (!o || !o.matchesWidget(e) || e != o.widget && o.widget.type.toDOM.parentNode) {
                        let o = new re(this.top, e, t, n);
                        this.top.children.splice(this.index++, 0, o), this.changed = !0
                    } else this.index++
                }
                addTextblockHacks() {
                    let e = this.top.children[this.index - 1],
                        t = this.top;
                    for (; e instanceof de;) t = e, e = t.children[t.children.length - 1];
                    (!e || !(e instanceof he) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((T || x) && e && "false" == e.dom.contentEditable && this.addHackNode("IMG", t), this.addHackNode("BR", this.top))
                }
                addHackNode(e, t) {
                    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e)) this.index++;
                    else {
                        let n = document.createElement(e);
                        "IMG" == e && (n.className = "ProseMirror-separator", n.alt = ""), "BR" == e && (n.className = "ProseMirror-trailingBreak");
                        let o = new ue(this.top, [], n, null);
                        t != this.top ? t.children.push(o) : t.children.splice(this.index++, 0, o), this.changed = !0
                    }
                }
                isLocked(e) {
                    return this.lock && (e == this.lock || 1 == e.nodeType && e.contains(this.lock.parentNode))
                }
            }

            function Se(e, t) {
                return e.type.side - t.type.side
            }

            function Ce(e, t, n, o, i) {
                let s = [];
                for (let r = 0, l = 0; r < e.length; r++) {
                    let d = e[r],
                        a = l,
                        c = l += d.size;
                    a >= n || c <= t ? s.push(d) : (a < t && s.push(d.slice(0, t - a, o)), i && (s.push(i), i = void 0), c > n && s.push(d.slice(n - a, d.size, o)))
                }
                return s
            }

            function Me(e, t = null) {
                let n = e.domSelectionRange(),
                    i = e.state.doc;
                if (!n.focusNode) return null;
                let s = e.docView.nearestDesc(n.focusNode),
                    l = s && 0 == s.size,
                    d = e.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
                if (d < 0) return null;
                let a, c, h = i.resolve(d);
                if (m(n)) {
                    for (a = h; s && !s.node;) s = s.parent;
                    let e = s.node;
                    if (s && e.isAtom && o.qv.isSelectable(e) && s.parent && (!e.isInline || ! function(e, t, n) {
                            for (let o = 0 == t, i = t == f(e); o || i;) {
                                if (e == n) return !0;
                                let t = r(e);
                                if (!(e = e.parentNode)) return !1;
                                o = o && 0 == t, i = i && t == f(e)
                            }
                        }(n.focusNode, n.focusOffset, s.dom))) {
                        let e = s.posBefore;
                        c = new o.qv(d == e ? h : i.resolve(e))
                    }
                } else {
                    let t = e.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
                    if (t < 0) return null;
                    a = i.resolve(t)
                }
                if (!c) {
                    c = Be(e, a, h, "pointer" == t || e.state.selection.head < h.pos && !l ? 1 : -1)
                }
                return c
            }

            function xe(e) {
                return e.editable ? e.hasFocus() : qe(e) && document.activeElement && document.activeElement.contains(e.dom)
            }

            function ke(e, t = !1) {
                let n = e.state.selection;
                if (Ve(e, n), xe(e)) {
                    if (!t && e.input.mouseDown && e.input.mouseDown.allowDefault && x) {
                        let t = e.domSelectionRange(),
                            n = e.domObserver.currentSelection;
                        if (t.anchorNode && n.anchorNode && c(t.anchorNode, t.anchorOffset, n.anchorNode, n.anchorOffset)) return e.input.mouseDown.delayedSelectionSync = !0, void e.domObserver.setCurSelection()
                    }
                    if (e.domObserver.disconnectSelection(), e.cursorWrapper) ! function(e) {
                        let t = e.domSelection(),
                            n = document.createRange(),
                            o = e.cursorWrapper.dom,
                            i = "IMG" == o.nodeName;
                        i ? n.setEnd(o.parentNode, r(o) + 1) : n.setEnd(o, 0);
                        n.collapse(!1), t.removeAllRanges(), t.addRange(n), !i && !e.state.selection.visible && O && S <= 11 && (o.disabled = !0, o.disabled = !1)
                    }(e);
                    else {
                        let i, s, {
                            anchor: r,
                            head: l
                        } = n;
                        !Te || n instanceof o.Bs || (n.$from.parent.inlineContent || (i = Ee(e, n.from)), n.empty || n.$from.parent.inlineContent || (s = Ee(e, n.to))), e.docView.setSelection(r, l, e.root, t), Te && (i && Ae(i), s && Ae(s)), n.visible ? e.dom.classList.remove("ProseMirror-hideselection") : (e.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && function(e) {
                            let t = e.dom.ownerDocument;
                            t.removeEventListener("selectionchange", e.input.hideSelectionGuard);
                            let n = e.domSelectionRange(),
                                o = n.anchorNode,
                                i = n.anchorOffset;
                            t.addEventListener("selectionchange", e.input.hideSelectionGuard = () => {
                                n.anchorNode == o && n.anchorOffset == i || (t.removeEventListener("selectionchange", e.input.hideSelectionGuard), setTimeout((() => {
                                    xe(e) && !e.state.selection.visible || e.dom.classList.remove("ProseMirror-hideselection")
                                }), 20))
                            })
                        }(e))
                    }
                    e.domObserver.setCurSelection(), e.domObserver.connectSelection()
                }
            }
            const Te = T || x && k < 63;

            function Ee(e, t) {
                let {
                    node: n,
                    offset: o
                } = e.docView.domFromPos(t, 0), i = o < n.childNodes.length ? n.childNodes[o] : null, s = o ? n.childNodes[o - 1] : null;
                if (T && i && "false" == i.contentEditable) return Pe(i);
                if ((!i || "false" == i.contentEditable) && (!s || "false" == s.contentEditable)) {
                    if (i) return Pe(i);
                    if (s) return Pe(s)
                }
            }

            function Pe(e) {
                return e.contentEditable = "true", T && e.draggable && (e.draggable = !1, e.wasDraggable = !0), e
            }

            function Ae(e) {
                e.contentEditable = "false", e.wasDraggable && (e.draggable = !0, e.wasDraggable = null)
            }

            function Ve(e, t) {
                if (t instanceof o.qv) {
                    let n = e.docView.descAt(t.from);
                    n != e.lastSelectedViewDesc && (Re(e), n && n.selectNode(), e.lastSelectedViewDesc = n)
                } else Re(e)
            }

            function Re(e) {
                e.lastSelectedViewDesc && (e.lastSelectedViewDesc.parent && e.lastSelectedViewDesc.deselectNode(), e.lastSelectedViewDesc = void 0)
            }

            function Be(e, t, n, i) {
                return e.someProp("createSelectionBetween", (o => o(e, t, n))) || o.Bs.between(t, n, i)
            }

            function Ie(e) {
                return !(e.editable && !e.hasFocus()) && qe(e)
            }

            function qe(e) {
                let t = e.domSelectionRange();
                if (!t.anchorNode) return !1;
                try {
                    return e.dom.contains(3 == t.anchorNode.nodeType ? t.anchorNode.parentNode : t.anchorNode) && (e.editable || e.dom.contains(3 == t.focusNode.nodeType ? t.focusNode.parentNode : t.focusNode))
                } catch (n) {
                    return !1
                }
            }

            function ze(e, t) {
                let {
                    $anchor: n,
                    $head: i
                } = e.selection, s = t > 0 ? n.max(i) : n.min(i), r = s.parent.inlineContent ? s.depth ? e.doc.resolve(t > 0 ? s.after() : s.before()) : null : s;
                return r && o.Y1.findFrom(r, t)
            }

            function Le(e, t) {
                return e.dispatch(e.state.tr.setSelection(t).scrollIntoView()), !0
            }

            function Fe(e, t, n) {
                let i = e.state.selection;
                if (!(i instanceof o.Bs)) {
                    if (i instanceof o.qv && i.node.isInline) return Le(e, new o.Bs(t > 0 ? i.$to : i.$from)); {
                        let n = ze(e.state, t);
                        return !!n && Le(e, n)
                    }
                }
                if (!i.empty || n.indexOf("s") > -1) return !1;
                if (e.endOfTextblock(t > 0 ? "forward" : "backward")) {
                    let n = ze(e.state, t);
                    return !!(n && n instanceof o.qv) && Le(e, n)
                }
                if (!(P && n.indexOf("m") > -1)) {
                    let n, s = i.$head,
                        r = s.textOffset ? null : t < 0 ? s.nodeBefore : s.nodeAfter;
                    if (!r || r.isText) return !1;
                    let l = t < 0 ? s.pos - r.nodeSize : s.pos;
                    return !!(r.isAtom || (n = e.docView.descAt(l)) && !n.contentDOM) && (o.qv.isSelectable(r) ? Le(e, new o.qv(t < 0 ? e.state.doc.resolve(s.pos - r.nodeSize) : s)) : !!R && Le(e, new o.Bs(e.state.doc.resolve(t < 0 ? l : l + r.nodeSize))))
                }
            }

            function $e(e) {
                return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length
            }

            function Ke(e) {
                let t = e.pmViewDesc;
                return t && 0 == t.size && (e.nextSibling || "BR" != e.nodeName)
            }

            function We(e, t) {
                return t < 0 ? function(e) {
                    let t = e.domSelectionRange(),
                        n = t.focusNode,
                        o = t.focusOffset;
                    if (!n) return;
                    let i, s, l = !1;
                    C && 1 == n.nodeType && o < $e(n) && Ke(n.childNodes[o]) && (l = !0);
                    for (;;)
                        if (o > 0) {
                            if (1 != n.nodeType) break; {
                                let e = n.childNodes[o - 1];
                                if (Ke(e)) i = n, s = --o;
                                else {
                                    if (3 != e.nodeType) break;
                                    n = e, o = n.nodeValue.length
                                }
                            }
                        } else {
                            if (_e(n)) break; {
                                let t = n.previousSibling;
                                for (; t && Ke(t);) i = n.parentNode, s = r(t), t = t.previousSibling;
                                if (t) n = t, o = $e(n);
                                else {
                                    if (n = n.parentNode, n == e.dom) break;
                                    o = 0
                                }
                            }
                        }
                    l ? Ye(e, n, o) : i && Ye(e, i, s)
                }(e) : He(e)
            }

            function He(e) {
                let t = e.domSelectionRange(),
                    n = t.focusNode,
                    o = t.focusOffset;
                if (!n) return;
                let i, s, l = $e(n);
                for (;;)
                    if (o < l) {
                        if (1 != n.nodeType) break;
                        if (!Ke(n.childNodes[o])) break;
                        i = n, s = ++o
                    } else {
                        if (_e(n)) break; {
                            let t = n.nextSibling;
                            for (; t && Ke(t);) i = t.parentNode, s = r(t) + 1, t = t.nextSibling;
                            if (t) n = t, o = 0, l = $e(n);
                            else {
                                if (n = n.parentNode, n == e.dom) break;
                                o = l = 0
                            }
                        }
                    }
                i && Ye(e, i, s)
            }

            function _e(e) {
                let t = e.pmViewDesc;
                return t && t.node && t.node.isBlock
            }

            function Ye(e, t, n) {
                let o = e.domSelection();
                if (m(o)) {
                    let e = document.createRange();
                    e.setEnd(t, n), e.setStart(t, n), o.removeAllRanges(), o.addRange(e)
                } else o.extend && o.extend(t, n);
                e.domObserver.setCurSelection();
                let {
                    state: i
                } = e;
                setTimeout((() => {
                    e.state == i && ke(e)
                }), 50)
            }

            function Ge(e, t) {
                let n = e.state.doc.resolve(t);
                if (!x && !A && n.parent.inlineContent) {
                    let o = e.coordsAtPos(t);
                    if (t > n.start()) {
                        let n = e.coordsAtPos(t - 1),
                            i = (n.top + n.bottom) / 2;
                        if (i > o.top && i < o.bottom && Math.abs(n.left - o.left) > 1) return n.left < o.left ? "ltr" : "rtl"
                    }
                    if (t < n.end()) {
                        let n = e.coordsAtPos(t + 1),
                            i = (n.top + n.bottom) / 2;
                        if (i > o.top && i < o.bottom && Math.abs(n.left - o.left) > 1) return n.left > o.left ? "ltr" : "rtl"
                    }
                }
                return "rtl" == getComputedStyle(e.dom).direction ? "rtl" : "ltr"
            }

            function Ue(e, t, n) {
                let i = e.state.selection;
                if (i instanceof o.Bs && !i.empty || n.indexOf("s") > -1) return !1;
                if (P && n.indexOf("m") > -1) return !1;
                let {
                    $from: s,
                    $to: r
                } = i;
                if (!s.parent.inlineContent || e.endOfTextblock(t < 0 ? "up" : "down")) {
                    let n = ze(e.state, t);
                    if (n && n instanceof o.qv) return Le(e, n)
                }
                if (!s.parent.inlineContent) {
                    let n = t < 0 ? s : r,
                        l = i instanceof o.C1 ? o.Y1.near(n, t) : o.Y1.findFrom(n, t);
                    return !!l && Le(e, l)
                }
                return !1
            }

            function je(e, t) {
                if (!(e.state.selection instanceof o.Bs)) return !0;
                let {
                    $head: n,
                    $anchor: i,
                    empty: s
                } = e.state.selection;
                if (!n.sameParent(i)) return !0;
                if (!s) return !1;
                if (e.endOfTextblock(t > 0 ? "forward" : "backward")) return !0;
                let r = !n.textOffset && (t < 0 ? n.nodeBefore : n.nodeAfter);
                if (r && !r.isText) {
                    let o = e.state.tr;
                    return t < 0 ? o.delete(n.pos - r.nodeSize, n.pos) : o.delete(n.pos, n.pos + r.nodeSize), e.dispatch(o), !0
                }
                return !1
            }

            function Xe(e, t, n) {
                e.domObserver.stop(), t.contentEditable = n, e.domObserver.start()
            }

            function Je(e, t) {
                let n = t.keyCode,
                    o = function(e) {
                        let t = "";
                        return e.ctrlKey && (t += "c"), e.metaKey && (t += "m"), e.altKey && (t += "a"), e.shiftKey && (t += "s"), t
                    }(t);
                if (8 == n || P && 72 == n && "c" == o) return je(e, -1) || We(e, -1);
                if (46 == n && !t.shiftKey || P && 68 == n && "c" == o) return je(e, 1) || We(e, 1);
                if (13 == n || 27 == n) return !0;
                if (37 == n || P && 66 == n && "c" == o) {
                    let t = 37 == n ? "ltr" == Ge(e, e.state.selection.from) ? -1 : 1 : -1;
                    return Fe(e, t, o) || We(e, t)
                }
                if (39 == n || P && 70 == n && "c" == o) {
                    let t = 39 == n ? "ltr" == Ge(e, e.state.selection.from) ? 1 : -1 : 1;
                    return Fe(e, t, o) || We(e, t)
                }
                return 38 == n || P && 80 == n && "c" == o ? Ue(e, -1, o) || We(e, -1) : 40 == n || P && 78 == n && "c" == o ? function(e) {
                    if (!T || e.state.selection.$head.parentOffset > 0) return !1;
                    let {
                        focusNode: t,
                        focusOffset: n
                    } = e.domSelectionRange();
                    if (t && 1 == t.nodeType && 0 == n && t.firstChild && "false" == t.firstChild.contentEditable) {
                        let n = t.firstChild;
                        Xe(e, n, "true"), setTimeout((() => Xe(e, n, "false")), 20)
                    }
                    return !1
                }(e) || Ue(e, 1, o) || He(e) : o == (P ? "m" : "c") && (66 == n || 73 == n || 89 == n || 90 == n)
            }

            function Qe(e, t) {
                e.someProp("transformCopied", (n => {
                    t = n(t, e)
                }));
                let n = [],
                    {
                        content: o,
                        openStart: s,
                        openEnd: r
                    } = t;
                for (; s > 1 && r > 1 && 1 == o.childCount && 1 == o.firstChild.childCount;) {
                    s--, r--;
                    let e = o.firstChild;
                    n.push(e.type.name, e.attrs != e.type.defaultAttrs ? e.attrs : null), o = e.content
                }
                let l = e.someProp("clipboardSerializer") || i.PW.fromSchema(e.state.schema),
                    d = dt(),
                    a = d.createElement("div");
                a.appendChild(l.serializeFragment(o, {
                    document: d
                }));
                let c, h = a.firstChild,
                    u = 0;
                for (; h && 1 == h.nodeType && (c = rt[h.nodeName.toLowerCase()]);) {
                    for (let e = c.length - 1; e >= 0; e--) {
                        let t = d.createElement(c[e]);
                        for (; a.firstChild;) t.appendChild(a.firstChild);
                        a.appendChild(t), u++
                    }
                    h = a.firstChild
                }
                return h && 1 == h.nodeType && h.setAttribute("data-pm-slice", `${s} ${r}${u?` -${u}`:""} ${JSON.stringify(n)}`), {
                    dom: a,
                    text: e.someProp("clipboardTextSerializer", (n => n(t, e))) || t.content.textBetween(0, t.content.size, "\n\n")
                }
            }

            function Ze(e, t, n, o, s) {
                let r, l, d = s.parent.type.spec.code;
                if (!n && !t) return null;
                let a = t && (o || d || !n);
                if (a) {
                    if (e.someProp("transformPastedText", (n => {
                            t = n(t, d || o, e)
                        })), d) return t ? new i.p2(i.HY.from(e.state.schema.text(t.replace(/\r\n?/g, "\n"))), 0, 0) : i.p2.empty;
                    let n = e.someProp("clipboardTextParser", (n => n(t, s, o, e)));
                    if (n) l = n;
                    else {
                        let n = s.marks(),
                            {
                                schema: o
                            } = e.state,
                            l = i.PW.fromSchema(o);
                        r = document.createElement("div"), t.split(/(?:\r\n?|\n)+/).forEach((e => {
                            let t = r.appendChild(document.createElement("p"));
                            e && t.appendChild(l.serializeNode(o.text(e, n)))
                        }))
                    }
                } else e.someProp("transformPastedHTML", (t => {
                    n = t(n, e)
                })), r = function(e) {
                    let t = /^(\s*<meta [^>]*>)*/.exec(e);
                    t && (e = e.slice(t[0].length));
                    let n, o = dt().createElement("div"),
                        i = /<([a-z][^>\s]+)/i.exec(e);
                    (n = i && rt[i[1].toLowerCase()]) && (e = n.map((e => "<" + e + ">")).join("") + e + n.map((e => "</" + e + ">")).reverse().join(""));
                    if (o.innerHTML = e, n)
                        for (let s = 0; s < n.length; s++) o = o.querySelector(n[s]) || o;
                    return o
                }(n), R && function(e) {
                    let t = e.querySelectorAll(x ? "span:not([class]):not([style])" : "span.Apple-converted-space");
                    for (let n = 0; n < t.length; n++) {
                        let o = t[n];
                        1 == o.childNodes.length && "\xa0" == o.textContent && o.parentNode && o.parentNode.replaceChild(e.ownerDocument.createTextNode(" "), o)
                    }
                }(r);
                let c = r && r.querySelector("[data-pm-slice]"),
                    h = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
                if (h && h[3])
                    for (let i = +h[3]; i > 0; i--) {
                        let e = r.firstChild;
                        for (; e && 1 != e.nodeType;) e = e.nextSibling;
                        if (!e) break;
                        r = e
                    }
                if (!l) {
                    let t = e.someProp("clipboardParser") || e.someProp("domParser") || i.aw.fromSchema(e.state.schema);
                    l = t.parseSlice(r, {
                        preserveWhitespace: !(!a && !h),
                        context: s,
                        ruleFromNode: e => "BR" != e.nodeName || e.nextSibling || !e.parentNode || et.test(e.parentNode.nodeName) ? null : {
                            ignore: !0
                        }
                    })
                }
                if (h) l = function(e, t) {
                    if (!e.size) return e;
                    let n, o = e.content.firstChild.type.schema;
                    try {
                        n = JSON.parse(t)
                    } catch (d) {
                        return e
                    }
                    let {
                        content: s,
                        openStart: r,
                        openEnd: l
                    } = e;
                    for (let a = n.length - 2; a >= 0; a -= 2) {
                        let e = o.nodes[n[a]];
                        if (!e || e.hasRequiredAttrs()) break;
                        s = i.HY.from(e.create(n[a + 1], s)), r++, l++
                    }
                    return new i.p2(s, r, l)
                }(st(l, +h[1], +h[2]), h[4]);
                else if (l = i.p2.maxOpen(function(e, t) {
                        if (e.childCount < 2) return e;
                        for (let n = t.depth; n >= 0; n--) {
                            let o, s = t.node(n).contentMatchAt(t.index(n)),
                                r = [];
                            if (e.forEach((e => {
                                    if (!r) return;
                                    let t, n = s.findWrapping(e.type);
                                    if (!n) return r = null;
                                    if (t = r.length && o.length && nt(n, o, e, r[r.length - 1], 0)) r[r.length - 1] = t;
                                    else {
                                        r.length && (r[r.length - 1] = ot(r[r.length - 1], o.length));
                                        let t = tt(e, n);
                                        r.push(t), s = s.matchType(t.type), o = n
                                    }
                                })), r) return i.HY.from(r)
                        }
                        return e
                    }(l.content, s), !0), l.openStart || l.openEnd) {
                    let e = 0,
                        t = 0;
                    for (let n = l.content.firstChild; e < l.openStart && !n.type.spec.isolating; e++, n = n.firstChild);
                    for (let n = l.content.lastChild; t < l.openEnd && !n.type.spec.isolating; t++, n = n.lastChild);
                    l = st(l, e, t)
                }
                return e.someProp("transformPasted", (t => {
                    l = t(l, e)
                })), l
            }
            const et = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;

            function tt(e, t, n = 0) {
                for (let o = t.length - 1; o >= n; o--) e = t[o].create(null, i.HY.from(e));
                return e
            }

            function nt(e, t, n, o, s) {
                if (s < e.length && s < t.length && e[s] == t[s]) {
                    let r = nt(e, t, n, o.lastChild, s + 1);
                    if (r) return o.copy(o.content.replaceChild(o.childCount - 1, r));
                    if (o.contentMatchAt(o.childCount).matchType(s == e.length - 1 ? n.type : e[s + 1])) return o.copy(o.content.append(i.HY.from(tt(n, e, s + 1))))
                }
            }

            function ot(e, t) {
                if (0 == t) return e;
                let n = e.content.replaceChild(e.childCount - 1, ot(e.lastChild, t - 1)),
                    o = e.contentMatchAt(e.childCount).fillBefore(i.HY.empty, !0);
                return e.copy(n.append(o))
            }

            function it(e, t, n, o, s, r) {
                let l = t < 0 ? e.firstChild : e.lastChild,
                    d = l.content;
                return e.childCount > 1 && (r = 0), s < o - 1 && (d = it(d, t, n, o, s + 1, r)), s >= n && (d = t < 0 ? l.contentMatchAt(0).fillBefore(d, r <= s).append(d) : d.append(l.contentMatchAt(l.childCount).fillBefore(i.HY.empty, !0))), e.replaceChild(t < 0 ? 0 : e.childCount - 1, l.copy(d))
            }

            function st(e, t, n) {
                return t < e.openStart && (e = new i.p2(it(e.content, -1, t, e.openStart, 0, e.openEnd), t, e.openEnd)), n < e.openEnd && (e = new i.p2(it(e.content, 1, n, e.openEnd, 0, 0), e.openStart, n)), e
            }
            const rt = {
                thead: ["table"],
                tbody: ["table"],
                tfoot: ["table"],
                caption: ["table"],
                colgroup: ["table"],
                col: ["table", "colgroup"],
                tr: ["table", "tbody"],
                td: ["table", "tbody", "tr"],
                th: ["table", "tbody", "tr"]
            };
            let lt = null;

            function dt() {
                return lt || (lt = document.implementation.createHTMLDocument("title"))
            }
            const at = {},
                ct = {},
                ht = {
                    touchstart: !0,
                    touchmove: !0
                };
            class ut {
                constructor() {
                    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = {
                        time: 0,
                        x: 0,
                        y: 0,
                        type: ""
                    }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastAndroidDelete = 0, this.composing = !1, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.domChangeCount = 0, this.eventHandlers = Object.create(null), this.hideSelectionGuard = null
                }
            }

            function ft(e, t) {
                e.input.lastSelectionOrigin = t, e.input.lastSelectionTime = Date.now()
            }

            function pt(e) {
                e.someProp("handleDOMEvents", (t => {
                    for (let n in t) e.input.eventHandlers[n] || e.dom.addEventListener(n, e.input.eventHandlers[n] = t => mt(e, t))
                }))
            }

            function mt(e, t) {
                return e.someProp("handleDOMEvents", (n => {
                    let o = n[t.type];
                    return !!o && (o(e, t) || t.defaultPrevented)
                }))
            }

            function gt(e, t) {
                if (!t.bubbles) return !0;
                if (t.defaultPrevented) return !1;
                for (let n = t.target; n != e.dom; n = n.parentNode)
                    if (!n || 11 == n.nodeType || n.pmViewDesc && n.pmViewDesc.stopEvent(t)) return !1;
                return !0
            }

            function yt(e) {
                return {
                    left: e.clientX,
                    top: e.clientY
                }
            }

            function bt(e, t, n, o, i) {
                if (-1 == o) return !1;
                let s = e.state.doc.resolve(o);
                for (let r = s.depth + 1; r > 0; r--)
                    if (e.someProp(t, (t => r > s.depth ? t(e, n, s.nodeAfter, s.before(r), i, !0) : t(e, n, s.node(r), s.before(r), i, !1)))) return !0;
                return !1
            }

            function vt(e, t, n) {
                e.focused || e.focus();
                let o = e.state.tr.setSelection(t);
                "pointer" == n && o.setMeta("pointer", !0), e.dispatch(o)
            }

            function wt(e, t, n, i, s) {
                return bt(e, "handleClickOn", t, n, i) || e.someProp("handleClick", (n => n(e, t, i))) || (s ? function(e, t) {
                    if (-1 == t) return !1;
                    let n, i, s = e.state.selection;
                    s instanceof o.qv && (n = s.node);
                    let r = e.state.doc.resolve(t);
                    for (let l = r.depth + 1; l > 0; l--) {
                        let e = l > r.depth ? r.nodeAfter : r.node(l);
                        if (o.qv.isSelectable(e)) {
                            i = n && s.$from.depth > 0 && l >= s.$from.depth && r.before(s.$from.depth + 1) == s.$from.pos ? r.before(s.$from.depth) : r.before(l);
                            break
                        }
                    }
                    return null != i && (vt(e, o.qv.create(e.state.doc, i), "pointer"), !0)
                }(e, n) : function(e, t) {
                    if (-1 == t) return !1;
                    let n = e.state.doc.resolve(t),
                        i = n.nodeAfter;
                    return !!(i && i.isAtom && o.qv.isSelectable(i)) && (vt(e, new o.qv(n), "pointer"), !0)
                }(e, n))
            }

            function Dt(e, t, n, o) {
                return bt(e, "handleDoubleClickOn", t, n, o) || e.someProp("handleDoubleClick", (n => n(e, t, o)))
            }

            function Nt(e, t, n, i) {
                return bt(e, "handleTripleClickOn", t, n, i) || e.someProp("handleTripleClick", (n => n(e, t, i))) || function(e, t, n) {
                    if (0 != n.button) return !1;
                    let i = e.state.doc;
                    if (-1 == t) return !!i.inlineContent && (vt(e, o.Bs.create(i, 0, i.content.size), "pointer"), !0);
                    let s = i.resolve(t);
                    for (let r = s.depth + 1; r > 0; r--) {
                        let t = r > s.depth ? s.nodeAfter : s.node(r),
                            n = s.before(r);
                        if (t.inlineContent) vt(e, o.Bs.create(i, n + 1, n + 1 + t.content.size), "pointer");
                        else {
                            if (!o.qv.isSelectable(t)) continue;
                            vt(e, o.qv.create(i, n), "pointer")
                        }
                        return !0
                    }
                }(e, n, i)
            }

            function Ot(e) {
                return Et(e)
            }
            ct.keydown = (e, t) => {
                let n = t;
                if (e.input.shiftKey = 16 == n.keyCode || n.shiftKey, !Mt(e, n) && (e.input.lastKeyCode = n.keyCode, e.input.lastKeyCodeTime = Date.now(), !V || !x || 13 != n.keyCode))
                    if (229 != n.keyCode && e.domObserver.forceFlush(), !E || 13 != n.keyCode || n.ctrlKey || n.altKey || n.metaKey) e.someProp("handleKeyDown", (t => t(e, n))) || Je(e, n) ? n.preventDefault() : ft(e, "key");
                    else {
                        let t = Date.now();
                        e.input.lastIOSEnter = t, e.input.lastIOSEnterFallbackTimeout = setTimeout((() => {
                            e.input.lastIOSEnter == t && (e.someProp("handleKeyDown", (t => t(e, g(13, "Enter")))), e.input.lastIOSEnter = 0)
                        }), 200)
                    }
            }, ct.keyup = (e, t) => {
                16 == t.keyCode && (e.input.shiftKey = !1)
            }, ct.keypress = (e, t) => {
                let n = t;
                if (Mt(e, n) || !n.charCode || n.ctrlKey && !n.altKey || P && n.metaKey) return;
                if (e.someProp("handleKeyPress", (t => t(e, n)))) return void n.preventDefault();
                let i = e.state.selection;
                if (!(i instanceof o.Bs) || !i.$from.sameParent(i.$to)) {
                    let t = String.fromCharCode(n.charCode);
                    /[\r\n]/.test(t) || e.someProp("handleTextInput", (n => n(e, i.$from.pos, i.$to.pos, t))) || e.dispatch(e.state.tr.insertText(t).scrollIntoView()), n.preventDefault()
                }
            };
            const St = P ? "metaKey" : "ctrlKey";
            at.mousedown = (e, t) => {
                let n = t;
                e.input.shiftKey = n.shiftKey;
                let o = Ot(e),
                    i = Date.now(),
                    s = "singleClick";
                i - e.input.lastClick.time < 500 && function(e, t) {
                    let n = t.x - e.clientX,
                        o = t.y - e.clientY;
                    return n * n + o * o < 100
                }(n, e.input.lastClick) && !n[St] && ("singleClick" == e.input.lastClick.type ? s = "doubleClick" : "doubleClick" == e.input.lastClick.type && (s = "tripleClick")), e.input.lastClick = {
                    time: i,
                    x: n.clientX,
                    y: n.clientY,
                    type: s
                };
                let r = e.posAtCoords(yt(n));
                r && ("singleClick" == s ? (e.input.mouseDown && e.input.mouseDown.done(), e.input.mouseDown = new Ct(e, r, n, !!o)) : ("doubleClick" == s ? Dt : Nt)(e, r.pos, r.inside, n) ? n.preventDefault() : ft(e, "pointer"))
            };
            class Ct {
                constructor(e, t, n, i) {
                    let s, r;
                    if (this.view = e, this.pos = t, this.event = n, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!n[St], this.allowDefault = n.shiftKey, t.inside > -1) s = e.state.doc.nodeAt(t.inside), r = t.inside;
                    else {
                        let n = e.state.doc.resolve(t.pos);
                        s = n.parent, r = n.depth ? n.before() : 0
                    }
                    const l = i ? null : n.target,
                        d = l ? e.docView.nearestDesc(l, !0) : null;
                    this.target = d ? d.dom : null;
                    let {
                        selection: a
                    } = e.state;
                    (0 == n.button && s.type.spec.draggable && !1 !== s.type.spec.selectable || a instanceof o.qv && a.from <= r && a.to > r) && (this.mightDrag = {
                        node: s,
                        pos: r,
                        addAttr: !(!this.target || this.target.draggable),
                        setUneditable: !(!this.target || !C || this.target.hasAttribute("contentEditable"))
                    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout((() => {
                        this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false")
                    }), 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), ft(e, "pointer")
                }
                done() {
                    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout((() => ke(this.view))), this.view.input.mouseDown = null
                }
                up(e) {
                    if (this.done(), !this.view.dom.contains(e.target)) return;
                    let t = this.pos;
                    this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(yt(e))), this.updateAllowDefault(e), this.allowDefault || !t ? ft(this.view, "pointer") : wt(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : 0 == e.button && (this.flushed || T && this.mightDrag && !this.mightDrag.node.isAtom || x && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (vt(this.view, o.Y1.near(this.view.state.doc.resolve(t.pos)), "pointer"), e.preventDefault()) : ft(this.view, "pointer")
                }
                move(e) {
                    this.updateAllowDefault(e), ft(this.view, "pointer"), 0 == e.buttons && this.done()
                }
                updateAllowDefault(e) {
                    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0)
                }
            }

            function Mt(e, t) {
                return !!e.composing || !!(T && Math.abs(t.timeStamp - e.input.compositionEndedAt) < 500) && (e.input.compositionEndedAt = -2e8, !0)
            }
            at.touchstart = e => {
                e.input.lastTouch = Date.now(), Ot(e), ft(e, "pointer")
            }, at.touchmove = e => {
                e.input.lastTouch = Date.now(), ft(e, "pointer")
            }, at.contextmenu = e => Ot(e);
            const xt = V ? 5e3 : -1;

            function kt(e, t) {
                clearTimeout(e.input.composingTimeout), t > -1 && (e.input.composingTimeout = setTimeout((() => Et(e)), t))
            }

            function Tt(e) {
                for (e.composing && (e.input.composing = !1, e.input.compositionEndedAt = function() {
                        let e = document.createEvent("Event");
                        return e.initEvent("event", !0, !0), e.timeStamp
                    }()); e.input.compositionNodes.length > 0;) e.input.compositionNodes.pop().markParentsDirty()
            }

            function Et(e, t = !1) {
                if (!(V && e.domObserver.flushingSoon >= 0)) {
                    if (e.domObserver.forceFlush(), Tt(e), t || e.docView && e.docView.dirty) {
                        let t = Me(e);
                        return t && !t.eq(e.state.selection) ? e.dispatch(e.state.tr.setSelection(t)) : e.updateState(e.state), !0
                    }
                    return !1
                }
            }
            ct.compositionstart = ct.compositionupdate = e => {
                if (!e.composing) {
                    e.domObserver.flush();
                    let {
                        state: t
                    } = e, n = t.selection.$from;
                    if (t.selection.empty && (t.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some((e => !1 === e.type.spec.inclusive)))) e.markCursor = e.state.storedMarks || n.marks(), Et(e, !0), e.markCursor = null;
                    else if (Et(e), C && t.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
                        let t = e.domSelectionRange();
                        for (let n = t.focusNode, o = t.focusOffset; n && 1 == n.nodeType && 0 != o;) {
                            let t = o < 0 ? n.lastChild : n.childNodes[o - 1];
                            if (!t) break;
                            if (3 == t.nodeType) {
                                e.domSelection().collapse(t, t.nodeValue.length);
                                break
                            }
                            n = t, o = -1
                        }
                    }
                    e.input.composing = !0
                }
                kt(e, xt)
            }, ct.compositionend = (e, t) => {
                e.composing && (e.input.composing = !1, e.input.compositionEndedAt = t.timeStamp, e.input.compositionID++, kt(e, 20))
            };
            const Pt = O && S < 15 || E && B < 604;

            function At(e, t, n, o, s) {
                let r = Ze(e, t, n, o, e.state.selection.$from);
                if (e.someProp("handlePaste", (t => t(e, s, r || i.p2.empty)))) return !0;
                if (!r) return !1;
                let l = function(e) {
                        return 0 == e.openStart && 0 == e.openEnd && 1 == e.content.childCount ? e.content.firstChild : null
                    }(r),
                    d = l ? e.state.tr.replaceSelectionWith(l, o) : e.state.tr.replaceSelection(r);
                return e.dispatch(d.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0
            }
            at.copy = ct.cut = (e, t) => {
                let n = t,
                    o = e.state.selection,
                    i = "cut" == n.type;
                if (o.empty) return;
                let s = Pt ? null : n.clipboardData,
                    r = o.content(),
                    {
                        dom: l,
                        text: d
                    } = Qe(e, r);
                s ? (n.preventDefault(), s.clearData(), s.setData("text/html", l.innerHTML), s.setData("text/plain", d)) : function(e, t) {
                    if (!e.dom.parentNode) return;
                    let n = e.dom.parentNode.appendChild(document.createElement("div"));
                    n.appendChild(t), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
                    let o = getSelection(),
                        i = document.createRange();
                    i.selectNodeContents(t), e.dom.blur(), o.removeAllRanges(), o.addRange(i), setTimeout((() => {
                        n.parentNode && n.parentNode.removeChild(n), e.focus()
                    }), 50)
                }(e, l), i && e.dispatch(e.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"))
            }, ct.paste = (e, t) => {
                let n = t;
                if (e.composing && !V) return;
                let o = Pt ? null : n.clipboardData,
                    i = e.input.shiftKey && 45 != e.input.lastKeyCode;
                o && At(e, o.getData("text/plain"), o.getData("text/html"), i, n) ? n.preventDefault() : function(e, t) {
                    if (!e.dom.parentNode) return;
                    let n = e.input.shiftKey || e.state.selection.$from.parent.type.spec.code,
                        o = e.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
                    n || (o.contentEditable = "true"), o.style.cssText = "position: fixed; left: -10000px; top: 10px", o.focus();
                    let i = e.input.shiftKey && 45 != e.input.lastKeyCode;
                    setTimeout((() => {
                        e.focus(), o.parentNode && o.parentNode.removeChild(o), n ? At(e, o.value, null, i, t) : At(e, o.textContent, o.innerHTML, i, t)
                    }), 50)
                }(e, n)
            };
            class Vt {
                constructor(e, t) {
                    this.slice = e, this.move = t
                }
            }
            const Rt = P ? "altKey" : "ctrlKey";
            at.dragstart = (e, t) => {
                let n = t,
                    i = e.input.mouseDown;
                if (i && i.done(), !n.dataTransfer) return;
                let s = e.state.selection,
                    r = s.empty ? null : e.posAtCoords(yt(n));
                if (r && r.pos >= s.from && r.pos <= (s instanceof o.qv ? s.to - 1 : s.to));
                else if (i && i.mightDrag) e.dispatch(e.state.tr.setSelection(o.qv.create(e.state.doc, i.mightDrag.pos)));
                else if (n.target && 1 == n.target.nodeType) {
                    let t = e.docView.nearestDesc(n.target, !0);
                    t && t.node.type.spec.draggable && t != e.docView && e.dispatch(e.state.tr.setSelection(o.qv.create(e.state.doc, t.posBefore)))
                }
                let l = e.state.selection.content(),
                    {
                        dom: d,
                        text: a
                    } = Qe(e, l);
                n.dataTransfer.clearData(), n.dataTransfer.setData(Pt ? "Text" : "text/html", d.innerHTML), n.dataTransfer.effectAllowed = "copyMove", Pt || n.dataTransfer.setData("text/plain", a), e.dragging = new Vt(l, !n[Rt])
            }, at.dragend = e => {
                let t = e.dragging;
                window.setTimeout((() => {
                    e.dragging == t && (e.dragging = null)
                }), 50)
            }, ct.dragover = ct.dragenter = (e, t) => t.preventDefault(), ct.drop = (e, t) => {
                let n = t,
                    r = e.dragging;
                if (e.dragging = null, !n.dataTransfer) return;
                let l = e.posAtCoords(yt(n));
                if (!l) return;
                let d = e.state.doc.resolve(l.pos),
                    a = r && r.slice;
                a ? e.someProp("transformPasted", (t => {
                    a = t(a, e)
                })) : a = Ze(e, n.dataTransfer.getData(Pt ? "Text" : "text/plain"), Pt ? null : n.dataTransfer.getData("text/html"), !1, d);
                let c = !(!r || n[Rt]);
                if (e.someProp("handleDrop", (t => t(e, n, a || i.p2.empty, c)))) return void n.preventDefault();
                if (!a) return;
                n.preventDefault();
                let h = a ? (0, s.nj)(e.state.doc, d.pos, a) : d.pos;
                null == h && (h = d.pos);
                let u = e.state.tr;
                c && u.deleteSelection();
                let f = u.mapping.map(h),
                    p = 0 == a.openStart && 0 == a.openEnd && 1 == a.content.childCount,
                    m = u.doc;
                if (p ? u.replaceRangeWith(f, f, a.content.firstChild) : u.replaceRange(f, f, a), u.doc.eq(m)) return;
                let g = u.doc.resolve(f);
                if (p && o.qv.isSelectable(a.content.firstChild) && g.nodeAfter && g.nodeAfter.sameMarkup(a.content.firstChild)) u.setSelection(new o.qv(g));
                else {
                    let t = u.mapping.map(h);
                    u.mapping.maps[u.mapping.maps.length - 1].forEach(((e, n, o, i) => t = i)), u.setSelection(Be(e, g, u.doc.resolve(t)))
                }
                e.focus(), e.dispatch(u.setMeta("uiEvent", "drop"))
            }, at.focus = e => {
                e.input.lastFocus = Date.now(), e.focused || (e.domObserver.stop(), e.dom.classList.add("ProseMirror-focused"), e.domObserver.start(), e.focused = !0, setTimeout((() => {
                    e.docView && e.hasFocus() && !e.domObserver.currentSelection.eq(e.domSelectionRange()) && ke(e)
                }), 20))
            }, at.blur = (e, t) => {
                let n = t;
                e.focused && (e.domObserver.stop(), e.dom.classList.remove("ProseMirror-focused"), e.domObserver.start(), n.relatedTarget && e.dom.contains(n.relatedTarget) && e.domObserver.currentSelection.clear(), e.focused = !1)
            }, at.beforeinput = (e, t) => {
                if (x && V && "deleteContentBackward" == t.inputType) {
                    e.domObserver.flushSoon();
                    let {
                        domChangeCount: t
                    } = e.input;
                    setTimeout((() => {
                        if (e.input.domChangeCount != t) return;
                        if (e.dom.blur(), e.focus(), e.someProp("handleKeyDown", (t => t(e, g(8, "Backspace"))))) return;
                        let {
                            $cursor: n
                        } = e.state.selection;
                        n && n.pos > 0 && e.dispatch(e.state.tr.delete(n.pos - 1, n.pos).scrollIntoView())
                    }), 50)
                }
            };
            for (let yn in ct) at[yn] = ct[yn];

            function Bt(e, t) {
                if (e == t) return !0;
                for (let n in e)
                    if (e[n] !== t[n]) return !1;
                for (let n in t)
                    if (!(n in e)) return !1;
                return !0
            }
            class It {
                constructor(e, t) {
                    this.toDOM = e, this.spec = t || $t, this.side = this.spec.side || 0
                }
                map(e, t, n, o) {
                    let {
                        pos: i,
                        deleted: s
                    } = e.mapResult(t.from + o, this.side < 0 ? -1 : 1);
                    return s ? null : new Lt(i - n, i - n, this)
                }
                valid() {
                    return !0
                }
                eq(e) {
                    return this == e || e instanceof It && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Bt(this.spec, e.spec))
                }
                destroy(e) {
                    this.spec.destroy && this.spec.destroy(e)
                }
            }
            class qt {
                constructor(e, t) {
                    this.attrs = e, this.spec = t || $t
                }
                map(e, t, n, o) {
                    let i = e.map(t.from + o, this.spec.inclusiveStart ? -1 : 1) - n,
                        s = e.map(t.to + o, this.spec.inclusiveEnd ? 1 : -1) - n;
                    return i >= s ? null : new Lt(i, s, this)
                }
                valid(e, t) {
                    return t.from < t.to
                }
                eq(e) {
                    return this == e || e instanceof qt && Bt(this.attrs, e.attrs) && Bt(this.spec, e.spec)
                }
                static is(e) {
                    return e.type instanceof qt
                }
                destroy() {}
            }
            class zt {
                constructor(e, t) {
                    this.attrs = e, this.spec = t || $t
                }
                map(e, t, n, o) {
                    let i = e.mapResult(t.from + o, 1);
                    if (i.deleted) return null;
                    let s = e.mapResult(t.to + o, -1);
                    return s.deleted || s.pos <= i.pos ? null : new Lt(i.pos - n, s.pos - n, this)
                }
                valid(e, t) {
                    let n, {
                        index: o,
                        offset: i
                    } = e.content.findIndex(t.from);
                    return i == t.from && !(n = e.child(o)).isText && i + n.nodeSize == t.to
                }
                eq(e) {
                    return this == e || e instanceof zt && Bt(this.attrs, e.attrs) && Bt(this.spec, e.spec)
                }
                destroy() {}
            }
            class Lt {
                constructor(e, t, n) {
                    this.from = e, this.to = t, this.type = n
                }
                copy(e, t) {
                    return new Lt(e, t, this.type)
                }
                eq(e, t = 0) {
                    return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to
                }
                map(e, t, n) {
                    return this.type.map(e, this, t, n)
                }
                static widget(e, t, n) {
                    return new Lt(e, e, new It(t, n))
                }
                static inline(e, t, n, o) {
                    return new Lt(e, t, new qt(n, o))
                }
                static node(e, t, n, o) {
                    return new Lt(e, t, new zt(n, o))
                }
                get spec() {
                    return this.type.spec
                }
                get inline() {
                    return this.type instanceof qt
                }
            }
            const Ft = [],
                $t = {};
            class Kt {
                constructor(e, t) {
                    this.local = e.length ? e : Ft, this.children = t.length ? t : Ft
                }
                static create(e, t) {
                    return t.length ? Ut(t, e, 0, $t) : Wt
                }
                find(e, t, n) {
                    let o = [];
                    return this.findInner(null == e ? 0 : e, null == t ? 1e9 : t, o, 0, n), o
                }
                findInner(e, t, n, o, i) {
                    for (let s = 0; s < this.local.length; s++) {
                        let r = this.local[s];
                        r.from <= t && r.to >= e && (!i || i(r.spec)) && n.push(r.copy(r.from + o, r.to + o))
                    }
                    for (let s = 0; s < this.children.length; s += 3)
                        if (this.children[s] < t && this.children[s + 1] > e) {
                            let r = this.children[s] + 1;
                            this.children[s + 2].findInner(e - r, t - r, n, o + r, i)
                        }
                }
                map(e, t, n) {
                    return this == Wt || 0 == e.maps.length ? this : this.mapInner(e, t, 0, 0, n || $t)
                }
                mapInner(e, t, n, o, i) {
                    let s;
                    for (let r = 0; r < this.local.length; r++) {
                        let l = this.local[r].map(e, n, o);
                        l && l.type.valid(t, l) ? (s || (s = [])).push(l) : i.onRemove && i.onRemove(this.local[r].spec)
                    }
                    return this.children.length ? function(e, t, n, o, i, s, r) {
                        let l = e.slice();
                        for (let a = 0, c = s; a < n.maps.length; a++) {
                            let e = 0;
                            n.maps[a].forEach(((t, n, o, s) => {
                                let r = s - o - (n - t);
                                for (let d = 0; d < l.length; d += 3) {
                                    let s = l[d + 1];
                                    if (s < 0 || t > s + c - e) continue;
                                    let a = l[d] + c - e;
                                    n >= a ? l[d + 1] = t <= a ? -2 : -1 : o >= i && r && (l[d] += r, l[d + 1] += r)
                                }
                                e += r
                            })), c = n.maps[a].map(c, -1)
                        }
                        let d = !1;
                        for (let a = 0; a < l.length; a += 3)
                            if (l[a + 1] < 0) {
                                if (-2 == l[a + 1]) {
                                    d = !0, l[a + 1] = -1;
                                    continue
                                }
                                let t = n.map(e[a] + s),
                                    c = t - i;
                                if (c < 0 || c >= o.content.size) {
                                    d = !0;
                                    continue
                                }
                                let h = n.map(e[a + 1] + s, -1) - i,
                                    {
                                        index: u,
                                        offset: f
                                    } = o.content.findIndex(c),
                                    p = o.maybeChild(u);
                                if (p && f == c && f + p.nodeSize == h) {
                                    let o = l[a + 2].mapInner(n, p, t + 1, e[a] + s + 1, r);
                                    o != Wt ? (l[a] = c, l[a + 1] = h, l[a + 2] = o) : (l[a + 1] = -2, d = !0)
                                } else d = !0
                            }
                        if (d) {
                            let d = function(e, t, n, o, i, s, r) {
                                    function l(e, t) {
                                        for (let s = 0; s < e.local.length; s++) {
                                            let l = e.local[s].map(o, i, t);
                                            l ? n.push(l) : r.onRemove && r.onRemove(e.local[s].spec)
                                        }
                                        for (let n = 0; n < e.children.length; n += 3) l(e.children[n + 2], e.children[n] + t + 1)
                                    }
                                    for (let d = 0; d < e.length; d += 3) - 1 == e[d + 1] && l(e[d + 2], t[d] + s + 1);
                                    return n
                                }(l, e, t, n, i, s, r),
                                a = Ut(d, o, 0, r);
                            t = a.local;
                            for (let e = 0; e < l.length; e += 3) l[e + 1] < 0 && (l.splice(e, 3), e -= 3);
                            for (let e = 0, t = 0; e < a.children.length; e += 3) {
                                let n = a.children[e];
                                for (; t < l.length && l[t] < n;) t += 3;
                                l.splice(t, 0, a.children[e], a.children[e + 1], a.children[e + 2])
                            }
                        }
                        return new Kt(t.sort(jt), l)
                    }(this.children, s || [], e, t, n, o, i) : s ? new Kt(s.sort(jt), Ft) : Wt
                }
                add(e, t) {
                    return t.length ? this == Wt ? Kt.create(e, t) : this.addInner(e, t, 0) : this
                }
                addInner(e, t, n) {
                    let o, i = 0;
                    e.forEach(((e, s) => {
                        let r, l = s + n;
                        if (r = Yt(t, e, l)) {
                            for (o || (o = this.children.slice()); i < o.length && o[i] < s;) i += 3;
                            o[i] == s ? o[i + 2] = o[i + 2].addInner(e, r, l + 1) : o.splice(i, 0, s, s + e.nodeSize, Ut(r, e, l + 1, $t)), i += 3
                        }
                    }));
                    let s = _t(i ? Gt(t) : t, -n);
                    for (let r = 0; r < s.length; r++) s[r].type.valid(e, s[r]) || s.splice(r--, 1);
                    return new Kt(s.length ? this.local.concat(s).sort(jt) : this.local, o || this.children)
                }
                remove(e) {
                    return 0 == e.length || this == Wt ? this : this.removeInner(e, 0)
                }
                removeInner(e, t) {
                    let n = this.children,
                        o = this.local;
                    for (let i = 0; i < n.length; i += 3) {
                        let o, s = n[i] + t,
                            r = n[i + 1] + t;
                        for (let t, n = 0; n < e.length; n++)(t = e[n]) && t.from > s && t.to < r && (e[n] = null, (o || (o = [])).push(t));
                        if (!o) continue;
                        n == this.children && (n = this.children.slice());
                        let l = n[i + 2].removeInner(o, s + 1);
                        l != Wt ? n[i + 2] = l : (n.splice(i, 3), i -= 3)
                    }
                    if (o.length)
                        for (let i, s = 0; s < e.length; s++)
                            if (i = e[s])
                                for (let e = 0; e < o.length; e++) o[e].eq(i, t) && (o == this.local && (o = this.local.slice()), o.splice(e--, 1));
                    return n == this.children && o == this.local ? this : o.length || n.length ? new Kt(o, n) : Wt
                }
                forChild(e, t) {
                    if (this == Wt) return this;
                    if (t.isLeaf) return Kt.empty;
                    let n, o;
                    for (let r = 0; r < this.children.length; r += 3)
                        if (this.children[r] >= e) {
                            this.children[r] == e && (n = this.children[r + 2]);
                            break
                        }
                    let i = e + 1,
                        s = i + t.content.size;
                    for (let r = 0; r < this.local.length; r++) {
                        let e = this.local[r];
                        if (e.from < s && e.to > i && e.type instanceof qt) {
                            let t = Math.max(i, e.from) - i,
                                n = Math.min(s, e.to) - i;
                            t < n && (o || (o = [])).push(e.copy(t, n))
                        }
                    }
                    if (o) {
                        let e = new Kt(o.sort(jt), Ft);
                        return n ? new Ht([e, n]) : e
                    }
                    return n || Wt
                }
                eq(e) {
                    if (this == e) return !0;
                    if (!(e instanceof Kt) || this.local.length != e.local.length || this.children.length != e.children.length) return !1;
                    for (let t = 0; t < this.local.length; t++)
                        if (!this.local[t].eq(e.local[t])) return !1;
                    for (let t = 0; t < this.children.length; t += 3)
                        if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2])) return !1;
                    return !0
                }
                locals(e) {
                    return Xt(this.localsInner(e))
                }
                localsInner(e) {
                    if (this == Wt) return Ft;
                    if (e.inlineContent || !this.local.some(qt.is)) return this.local;
                    let t = [];
                    for (let n = 0; n < this.local.length; n++) this.local[n].type instanceof qt || t.push(this.local[n]);
                    return t
                }
            }
            Kt.empty = new Kt([], []), Kt.removeOverlap = Xt;
            const Wt = Kt.empty;
            class Ht {
                constructor(e) {
                    this.members = e
                }
                map(e, t) {
                    const n = this.members.map((n => n.map(e, t, $t)));
                    return Ht.from(n)
                }
                forChild(e, t) {
                    if (t.isLeaf) return Kt.empty;
                    let n = [];
                    for (let o = 0; o < this.members.length; o++) {
                        let i = this.members[o].forChild(e, t);
                        i != Wt && (i instanceof Ht ? n = n.concat(i.members) : n.push(i))
                    }
                    return Ht.from(n)
                }
                eq(e) {
                    if (!(e instanceof Ht) || e.members.length != this.members.length) return !1;
                    for (let t = 0; t < this.members.length; t++)
                        if (!this.members[t].eq(e.members[t])) return !1;
                    return !0
                }
                locals(e) {
                    let t, n = !0;
                    for (let o = 0; o < this.members.length; o++) {
                        let i = this.members[o].localsInner(e);
                        if (i.length)
                            if (t) {
                                n && (t = t.slice(), n = !1);
                                for (let e = 0; e < i.length; e++) t.push(i[e])
                            } else t = i
                    }
                    return t ? Xt(n ? t : t.sort(jt)) : Ft
                }
                static from(e) {
                    switch (e.length) {
                        case 0:
                            return Wt;
                        case 1:
                            return e[0];
                        default:
                            return new Ht(e.every((e => e instanceof Kt)) ? e : e.reduce(((e, t) => e.concat(t instanceof Kt ? t : t.members)), []))
                    }
                }
            }

            function _t(e, t) {
                if (!t || !e.length) return e;
                let n = [];
                for (let o = 0; o < e.length; o++) {
                    let i = e[o];
                    n.push(new Lt(i.from + t, i.to + t, i.type))
                }
                return n
            }

            function Yt(e, t, n) {
                if (t.isLeaf) return null;
                let o = n + t.nodeSize,
                    i = null;
                for (let s, r = 0; r < e.length; r++)(s = e[r]) && s.from > n && s.to < o && ((i || (i = [])).push(s), e[r] = null);
                return i
            }

            function Gt(e) {
                let t = [];
                for (let n = 0; n < e.length; n++) null != e[n] && t.push(e[n]);
                return t
            }

            function Ut(e, t, n, o) {
                let i = [],
                    s = !1;
                t.forEach(((t, r) => {
                    let l = Yt(e, t, r + n);
                    if (l) {
                        s = !0;
                        let e = Ut(l, t, n + r + 1, o);
                        e != Wt && i.push(r, r + t.nodeSize, e)
                    }
                }));
                let r = _t(s ? Gt(e) : e, -n).sort(jt);
                for (let l = 0; l < r.length; l++) r[l].type.valid(t, r[l]) || (o.onRemove && o.onRemove(r[l].spec), r.splice(l--, 1));
                return r.length || i.length ? new Kt(r, i) : Wt
            }

            function jt(e, t) {
                return e.from - t.from || e.to - t.to
            }

            function Xt(e) {
                let t = e;
                for (let n = 0; n < t.length - 1; n++) {
                    let o = t[n];
                    if (o.from != o.to)
                        for (let i = n + 1; i < t.length; i++) {
                            let s = t[i];
                            if (s.from != o.from) {
                                s.from < o.to && (t == e && (t = e.slice()), t[n] = o.copy(o.from, s.from), Jt(t, i, o.copy(s.from, o.to)));
                                break
                            }
                            s.to != o.to && (t == e && (t = e.slice()), t[i] = s.copy(s.from, o.to), Jt(t, i + 1, s.copy(o.to, s.to)))
                        }
                }
                return t
            }

            function Jt(e, t, n) {
                for (; t < e.length && jt(n, e[t]) > 0;) t++;
                e.splice(t, 0, n)
            }

            function Qt(e) {
                let t = [];
                return e.someProp("decorations", (n => {
                    let o = n(e.state);
                    o && o != Wt && t.push(o)
                })), e.cursorWrapper && t.push(Kt.create(e.state.doc, [e.cursorWrapper.deco])), Ht.from(t)
            }
            const Zt = {
                    childList: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    attributes: !0,
                    attributeOldValue: !0,
                    subtree: !0
                },
                en = O && S <= 11;
            class tn {
                constructor() {
                    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
                }
                set(e) {
                    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset
                }
                clear() {
                    this.anchorNode = this.focusNode = null
                }
                eq(e) {
                    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset
                }
            }
            class nn {
                constructor(e, t) {
                    this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new tn, this.onCharData = null, this.suppressingSelectionUpdates = !1, this.observer = window.MutationObserver && new window.MutationObserver((e => {
                        for (let t = 0; t < e.length; t++) this.queue.push(e[t]);
                        O && S <= 11 && e.some((e => "childList" == e.type && e.removedNodes.length || "characterData" == e.type && e.oldValue.length > e.target.nodeValue.length)) ? this.flushSoon() : this.flush()
                    })), en && (this.onCharData = e => {
                        this.queue.push({
                            target: e.target,
                            type: "characterData",
                            oldValue: e.prevValue
                        }), this.flushSoon()
                    }), this.onSelectionChange = this.onSelectionChange.bind(this)
                }
                flushSoon() {
                    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout((() => {
                        this.flushingSoon = -1, this.flush()
                    }), 20))
                }
                forceFlush() {
                    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush())
                }
                start() {
                    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, Zt)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection()
                }
                stop() {
                    if (this.observer) {
                        let e = this.observer.takeRecords();
                        if (e.length) {
                            for (let t = 0; t < e.length; t++) this.queue.push(e[t]);
                            window.setTimeout((() => this.flush()), 20)
                        }
                        this.observer.disconnect()
                    }
                    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection()
                }
                connectSelection() {
                    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange)
                }
                disconnectSelection() {
                    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange)
                }
                suppressSelectionUpdates() {
                    this.suppressingSelectionUpdates = !0, setTimeout((() => this.suppressingSelectionUpdates = !1), 50)
                }
                onSelectionChange() {
                    if (Ie(this.view)) {
                        if (this.suppressingSelectionUpdates) return ke(this.view);
                        if (O && S <= 11 && !this.view.state.selection.empty) {
                            let e = this.view.domSelectionRange();
                            if (e.focusNode && c(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)) return this.flushSoon()
                        }
                        this.flush()
                    }
                }
                setCurSelection() {
                    this.currentSelection.set(this.view.domSelectionRange())
                }
                ignoreSelectionChange(e) {
                    if (!e.focusNode) return !0;
                    let t, n = new Set;
                    for (let i = e.focusNode; i; i = l(i)) n.add(i);
                    for (let i = e.anchorNode; i; i = l(i))
                        if (n.has(i)) {
                            t = i;
                            break
                        }
                    let o = t && this.view.docView.nearestDesc(t);
                    return o && o.ignoreMutation({
                        type: "selection",
                        target: 3 == t.nodeType ? t.parentNode : t
                    }) ? (this.setCurSelection(), !0) : void 0
                }
                flush() {
                    let {
                        view: e
                    } = this;
                    if (!e.docView || this.flushingSoon > -1) return;
                    let t = this.observer ? this.observer.takeRecords() : [];
                    this.queue.length && (t = this.queue.concat(t), this.queue.length = 0);
                    let n = e.domSelectionRange(),
                        i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(n) && Ie(e) && !this.ignoreSelectionChange(n),
                        s = -1,
                        r = -1,
                        l = !1,
                        d = [];
                    if (e.editable)
                        for (let o = 0; o < t.length; o++) {
                            let e = this.registerMutation(t[o], d);
                            e && (s = s < 0 ? e.from : Math.min(e.from, s), r = r < 0 ? e.to : Math.max(e.to, r), e.typeOver && (l = !0))
                        }
                    if (C && d.length > 1) {
                        let e = d.filter((e => "BR" == e.nodeName));
                        if (2 == e.length) {
                            let t = e[0],
                                n = e[1];
                            t.parentNode && t.parentNode.parentNode == n.parentNode ? n.remove() : t.remove()
                        }
                    }
                    let a = null;
                    s < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && m(n) && (a = Me(e)) && a.eq(o.Y1.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, ke(e), this.currentSelection.set(n), e.scrollToSelection()) : (s > -1 || i) && (s > -1 && (e.docView.markDirty(s, r), function(e) {
                        if (on.has(e)) return;
                        if (on.set(e, null), -1 !== ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(e.dom).whiteSpace)) {
                            if (e.requiresGeckoHackNode = C, sn) return;
                            console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), sn = !0
                        }
                    }(e)), this.handleDOMChange(s, r, l, d), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(n) || ke(e), this.currentSelection.set(n))
                }
                registerMutation(e, t) {
                    if (t.indexOf(e.target) > -1) return null;
                    let n = this.view.docView.nearestDesc(e.target);
                    if ("attributes" == e.type && (n == this.view.docView || "contenteditable" == e.attributeName || "style" == e.attributeName && !e.oldValue && !e.target.getAttribute("style"))) return null;
                    if (!n || n.ignoreMutation(e)) return null;
                    if ("childList" == e.type) {
                        for (let n = 0; n < e.addedNodes.length; n++) t.push(e.addedNodes[n]);
                        if (n.contentDOM && n.contentDOM != n.dom && !n.contentDOM.contains(e.target)) return {
                            from: n.posBefore,
                            to: n.posAfter
                        };
                        let o = e.previousSibling,
                            i = e.nextSibling;
                        if (O && S <= 11 && e.addedNodes.length)
                            for (let t = 0; t < e.addedNodes.length; t++) {
                                let {
                                    previousSibling: n,
                                    nextSibling: s
                                } = e.addedNodes[t];
                                (!n || Array.prototype.indexOf.call(e.addedNodes, n) < 0) && (o = n), (!s || Array.prototype.indexOf.call(e.addedNodes, s) < 0) && (i = s)
                            }
                        let s = o && o.parentNode == e.target ? r(o) + 1 : 0,
                            l = n.localPosFromDOM(e.target, s, -1),
                            d = i && i.parentNode == e.target ? r(i) : e.target.childNodes.length;
                        return {
                            from: l,
                            to: n.localPosFromDOM(e.target, d, 1)
                        }
                    }
                    return "attributes" == e.type ? {
                        from: n.posAtStart - n.border,
                        to: n.posAtEnd + n.border
                    } : {
                        from: n.posAtStart,
                        to: n.posAtEnd,
                        typeOver: e.target.nodeValue == e.oldValue
                    }
                }
            }
            let on = new WeakMap,
                sn = !1;

            function rn(e) {
                let t = e.pmViewDesc;
                if (t) return t.parseRule();
                if ("BR" == e.nodeName && e.parentNode) {
                    if (T && /^(ul|ol)$/i.test(e.parentNode.nodeName)) {
                        let e = document.createElement("div");
                        return e.appendChild(document.createElement("li")), {
                            skip: e
                        }
                    }
                    if (e.parentNode.lastChild == e || T && /^(tr|table)$/i.test(e.parentNode.nodeName)) return {
                        ignore: !0
                    }
                } else if ("IMG" == e.nodeName && e.getAttribute("mark-placeholder")) return {
                    ignore: !0
                };
                return null
            }
            const ln = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;

            function dn(e, t, n, s, r) {
                if (t < 0) {
                    let t = e.input.lastSelectionTime > Date.now() - 50 ? e.input.lastSelectionOrigin : null,
                        n = Me(e, t);
                    if (n && !e.state.selection.eq(n)) {
                        if (x && V && 13 === e.input.lastKeyCode && Date.now() - 100 < e.input.lastKeyCodeTime && e.someProp("handleKeyDown", (t => t(e, g(13, "Enter"))))) return;
                        let o = e.state.tr.setSelection(n);
                        "pointer" == t ? o.setMeta("pointer", !0) : "key" == t && o.scrollIntoView(), e.composing && o.setMeta("composition", e.input.compositionID), e.dispatch(o)
                    }
                    return
                }
                let l = e.state.doc.resolve(t),
                    d = l.sharedDepth(n);
                t = l.before(d + 1), n = e.state.doc.resolve(n).after(d + 1);
                let a, c, h = e.state.selection,
                    u = function(e, t, n) {
                        let o, {
                                node: s,
                                fromOffset: r,
                                toOffset: l,
                                from: d,
                                to: a
                            } = e.docView.parseRange(t, n),
                            c = e.domSelectionRange(),
                            h = c.anchorNode;
                        if (h && e.dom.contains(1 == h.nodeType ? h : h.parentNode) && (o = [{
                                node: h,
                                offset: c.anchorOffset
                            }], m(c) || o.push({
                                node: c.focusNode,
                                offset: c.focusOffset
                            })), x && 8 === e.input.lastKeyCode)
                            for (let i = l; i > r; i--) {
                                let e = s.childNodes[i - 1],
                                    t = e.pmViewDesc;
                                if ("BR" == e.nodeName && !t) {
                                    l = i;
                                    break
                                }
                                if (!t || t.size) break
                            }
                        let u = e.state.doc,
                            f = e.someProp("domParser") || i.aw.fromSchema(e.state.schema),
                            p = u.resolve(d),
                            g = null,
                            y = f.parse(s, {
                                topNode: p.parent,
                                topMatch: p.parent.contentMatchAt(p.index()),
                                topOpen: !0,
                                from: r,
                                to: l,
                                preserveWhitespace: "pre" != p.parent.type.whitespace || "full",
                                findPositions: o,
                                ruleFromNode: rn,
                                context: p
                            });
                        if (o && null != o[0].pos) {
                            let e = o[0].pos,
                                t = o[1] && o[1].pos;
                            null == t && (t = e), g = {
                                anchor: e + d,
                                head: t + d
                            }
                        }
                        return {
                            doc: y,
                            sel: g,
                            from: d,
                            to: a
                        }
                    }(e, t, n),
                    f = e.state.doc,
                    p = f.slice(u.from, u.to);
                8 === e.input.lastKeyCode && Date.now() - 100 < e.input.lastKeyCodeTime ? (a = e.state.selection.to, c = "end") : (a = e.state.selection.from, c = "start"), e.input.lastKeyCode = null;
                let y = function(e, t, n, o, i) {
                    let s = e.findDiffStart(t, n);
                    if (null == s) return null;
                    let {
                        a: r,
                        b: l
                    } = e.findDiffEnd(t, n + e.size, n + t.size);
                    if ("end" == i) {
                        o -= r + Math.max(0, s - Math.min(r, l)) - s
                    }
                    if (r < s && e.size < t.size) {
                        s -= o <= s && o >= r ? s - o : 0, l = s + (l - r), r = s
                    } else if (l < s) {
                        s -= o <= s && o >= l ? s - o : 0, r = s + (r - l), l = s
                    }
                    return {
                        start: s,
                        endA: r,
                        endB: l
                    }
                }(p.content, u.doc.content, u.from, a, c);
                if ((E && e.input.lastIOSEnter > Date.now() - 225 || V) && r.some((e => 1 == e.nodeType && !ln.test(e.nodeName))) && (!y || y.endA >= y.endB) && e.someProp("handleKeyDown", (t => t(e, g(13, "Enter"))))) return void(e.input.lastIOSEnter = 0);
                if (!y) {
                    if (!(s && h instanceof o.Bs && !h.empty && h.$head.sameParent(h.$anchor)) || e.composing || u.sel && u.sel.anchor != u.sel.head) {
                        if (u.sel) {
                            let t = an(e, e.state.doc, u.sel);
                            if (t && !t.eq(e.state.selection)) {
                                let n = e.state.tr.setSelection(t);
                                e.composing && n.setMeta("composition", e.input.compositionID), e.dispatch(n)
                            }
                        }
                        return
                    }
                    y = {
                        start: h.from,
                        endA: h.to,
                        endB: h.to
                    }
                }
                if (x && e.cursorWrapper && u.sel && u.sel.anchor == e.cursorWrapper.deco.from && u.sel.head == u.sel.anchor) {
                    let e = y.endB - y.start;
                    u.sel = {
                        anchor: u.sel.anchor + e,
                        head: u.sel.anchor + e
                    }
                }
                e.input.domChangeCount++, e.state.selection.from < e.state.selection.to && y.start == y.endB && e.state.selection instanceof o.Bs && (y.start > e.state.selection.from && y.start <= e.state.selection.from + 2 && e.state.selection.from >= u.from ? y.start = e.state.selection.from : y.endA < e.state.selection.to && y.endA >= e.state.selection.to - 2 && e.state.selection.to <= u.to && (y.endB += e.state.selection.to - y.endA, y.endA = e.state.selection.to)), O && S <= 11 && y.endB == y.start + 1 && y.endA == y.start && y.start > u.from && " \xa0" == u.doc.textBetween(y.start - u.from - 1, y.start - u.from + 1) && (y.start--, y.endA--, y.endB--);
                let b, v = u.doc.resolveNoCache(y.start - u.from),
                    w = u.doc.resolveNoCache(y.endB - u.from),
                    D = f.resolve(y.start),
                    N = v.sameParent(w) && v.parent.inlineContent && D.end() >= y.endA;
                if ((E && e.input.lastIOSEnter > Date.now() - 225 && (!N || r.some((e => "DIV" == e.nodeName || "P" == e.nodeName))) || !N && v.pos < u.doc.content.size && !v.sameParent(w) && (b = o.Y1.findFrom(u.doc.resolve(v.pos + 1), 1, !0)) && b.head == w.pos) && e.someProp("handleKeyDown", (t => t(e, g(13, "Enter"))))) return void(e.input.lastIOSEnter = 0);
                if (e.state.selection.anchor > y.start && function(e, t, n, o, i) {
                        if (!o.parent.isTextblock || n - t <= i.pos - o.pos || cn(o, !0, !1) < i.pos) return !1;
                        let s = e.resolve(t);
                        if (s.parentOffset < s.parent.content.size || !s.parent.isTextblock) return !1;
                        let r = e.resolve(cn(s, !0, !0));
                        return !(!r.parent.isTextblock || r.pos > n || cn(r, !0, !1) < n) && o.parent.content.cut(o.parentOffset).eq(r.parent.content)
                    }(f, y.start, y.endA, v, w) && e.someProp("handleKeyDown", (t => t(e, g(8, "Backspace"))))) return void(V && x && e.domObserver.suppressSelectionUpdates());
                x && V && y.endB == y.start && (e.input.lastAndroidDelete = Date.now()), V && !N && v.start() != w.start() && 0 == w.parentOffset && v.depth == w.depth && u.sel && u.sel.anchor == u.sel.head && u.sel.head == y.endA && (y.endB -= 2, w = u.doc.resolveNoCache(y.endB - u.from), setTimeout((() => {
                    e.someProp("handleKeyDown", (function(t) {
                        return t(e, g(13, "Enter"))
                    }))
                }), 20));
                let C, M, k, T = y.start,
                    P = y.endA;
                if (N)
                    if (v.pos == w.pos) O && S <= 11 && 0 == v.parentOffset && (e.domObserver.suppressSelectionUpdates(), setTimeout((() => ke(e)), 20)), C = e.state.tr.delete(T, P), M = f.resolve(y.start).marksAcross(f.resolve(y.endA));
                    else if (y.endA == y.endB && (k = function(e, t) {
                        let n, o, s, r = e.firstChild.marks,
                            l = t.firstChild.marks,
                            d = r,
                            a = l;
                        for (let i = 0; i < l.length; i++) d = l[i].removeFromSet(d);
                        for (let i = 0; i < r.length; i++) a = r[i].removeFromSet(a);
                        if (1 == d.length && 0 == a.length) o = d[0], n = "add", s = e => e.mark(o.addToSet(e.marks));
                        else {
                            if (0 != d.length || 1 != a.length) return null;
                            o = a[0], n = "remove", s = e => e.mark(o.removeFromSet(e.marks))
                        }
                        let c = [];
                        for (let i = 0; i < t.childCount; i++) c.push(s(t.child(i)));
                        if (i.HY.from(c).eq(e)) return {
                            mark: o,
                            type: n
                        }
                    }(v.parent.content.cut(v.parentOffset, w.parentOffset), D.parent.content.cut(D.parentOffset, y.endA - D.start())))) C = e.state.tr, "add" == k.type ? C.addMark(T, P, k.mark) : C.removeMark(T, P, k.mark);
                else if (v.parent.child(v.index()).isText && v.index() == w.index() - (w.textOffset ? 0 : 1)) {
                    let t = v.parent.textBetween(v.parentOffset, w.parentOffset);
                    if (e.someProp("handleTextInput", (n => n(e, T, P, t)))) return;
                    C = e.state.tr.insertText(t, T, P)
                }
                if (C || (C = e.state.tr.replace(T, P, u.doc.slice(y.start - u.from, y.endB - u.from))), u.sel) {
                    let t = an(e, C.doc, u.sel);
                    t && !(x && V && e.composing && t.empty && (y.start != y.endB || e.input.lastAndroidDelete < Date.now() - 100) && (t.head == T || t.head == C.mapping.map(P) - 1) || O && t.empty && t.head == T) && C.setSelection(t)
                }
                M && C.ensureMarks(M), e.composing && C.setMeta("composition", e.input.compositionID), e.dispatch(C.scrollIntoView())
            }

            function an(e, t, n) {
                return Math.max(n.anchor, n.head) > t.content.size ? null : Be(e, t.resolve(n.anchor), t.resolve(n.head))
            }

            function cn(e, t, n) {
                let o = e.depth,
                    i = t ? e.end() : e.pos;
                for (; o > 0 && (t || e.indexAfter(o) == e.node(o).childCount);) o--, i++, t = !1;
                if (n) {
                    let t = e.node(o).maybeChild(e.indexAfter(o));
                    for (; t && !t.isLeaf;) t = t.firstChild, i++
                }
                return i
            }
            class hn {
                constructor(e, t) {
                    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new ut, this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(gn), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : "function" == typeof e ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = pn(this), fn(this), this.nodeViews = mn(this), this.docView = ce(this.state.doc, un(this), Qt(this), this.dom, this), this.domObserver = new nn(this, ((e, t, n, o) => dn(this, e, t, n, o))), this.domObserver.start(),
                        function(e) {
                            for (let t in at) {
                                let n = at[t];
                                e.dom.addEventListener(t, e.input.eventHandlers[t] = t => {
                                    !gt(e, t) || mt(e, t) || !e.editable && t.type in ct || n(e, t)
                                }, ht[t] ? {
                                    passive: !0
                                } : void 0)
                            }
                            T && e.dom.addEventListener("input", (() => null)), pt(e)
                        }(this), this.updatePluginViews()
                }
                get composing() {
                    return this.input.composing
                }
                get props() {
                    if (this._props.state != this.state) {
                        let e = this._props;
                        this._props = {};
                        for (let t in e) this._props[t] = e[t];
                        this._props.state = this.state
                    }
                    return this._props
                }
                update(e) {
                    e.handleDOMEvents != this._props.handleDOMEvents && pt(this);
                    let t = this._props;
                    this._props = e, e.plugins && (e.plugins.forEach(gn), this.directPlugins = e.plugins), this.updateStateInner(e.state, t)
                }
                setProps(e) {
                    let t = {};
                    for (let n in this._props) t[n] = this._props[n];
                    t.state = this.state;
                    for (let n in e) t[n] = e[n];
                    this.update(t)
                }
                updateState(e) {
                    this.updateStateInner(e, this._props)
                }
                updateStateInner(e, t) {
                    let n = this.state,
                        o = !1,
                        i = !1;
                    e.storedMarks && this.composing && (Tt(this), i = !0), this.state = e;
                    let s = n.plugins != e.plugins || this._props.plugins != t.plugins;
                    if (s || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
                        let e = mn(this);
                        (function(e, t) {
                            let n = 0,
                                o = 0;
                            for (let i in e) {
                                if (e[i] != t[i]) return !0;
                                n++
                            }
                            for (let i in t) o++;
                            return n != o
                        })(e, this.nodeViews) && (this.nodeViews = e, o = !0)
                    }(s || t.handleDOMEvents != this._props.handleDOMEvents) && pt(this), this.editable = pn(this), fn(this);
                    let r = Qt(this),
                        l = un(this),
                        d = n.plugins == e.plugins || n.doc.eq(e.doc) ? e.scrollToSelection > n.scrollToSelection ? "to selection" : "preserve" : "reset",
                        a = o || !this.docView.matchesNode(e.doc, l, r);
                    !a && e.selection.eq(n.selection) || (i = !0);
                    let h = "preserve" == d && i && null == this.dom.style.overflowAnchor && function(e) {
                        let t, n, o = e.dom.getBoundingClientRect(),
                            i = Math.max(0, o.top);
                        for (let s = (o.left + o.right) / 2, r = i + 1; r < Math.min(innerHeight, o.bottom); r += 5) {
                            let o = e.root.elementFromPoint(s, r);
                            if (!o || o == e.dom || !e.dom.contains(o)) continue;
                            let l = o.getBoundingClientRect();
                            if (l.top >= i - 20) {
                                t = o, n = l.top;
                                break
                            }
                        }
                        return {
                            refDOM: t,
                            refTop: n,
                            stack: F(e.dom)
                        }
                    }(this);
                    if (i) {
                        this.domObserver.stop();
                        let t = a && (O || x) && !this.composing && !n.selection.empty && !e.selection.empty && function(e, t) {
                            let n = Math.min(e.$anchor.sharedDepth(e.head), t.$anchor.sharedDepth(t.head));
                            return e.$anchor.start(n) != t.$anchor.start(n)
                        }(n.selection, e.selection);
                        if (a) {
                            let n = x ? this.trackWrites = this.domSelectionRange().focusNode : null;
                            !o && this.docView.update(e.doc, l, r, this) || (this.docView.updateOuterDeco([]), this.docView.destroy(), this.docView = ce(e.doc, l, r, this.dom, this)), n && !this.trackWrites && (t = !0)
                        }
                        t || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && function(e) {
                            let t = e.docView.domFromPos(e.state.selection.anchor, 0),
                                n = e.domSelectionRange();
                            return c(t.node, t.offset, n.anchorNode, n.anchorOffset)
                        }(this)) ? ke(this, t) : (Ve(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start()
                    }
                    this.updatePluginViews(n), "reset" == d ? this.dom.scrollTop = 0 : "to selection" == d ? this.scrollToSelection() : h && function({
                        refDOM: e,
                        refTop: t,
                        stack: n
                    }) {
                        let o = e ? e.getBoundingClientRect().top : 0;
                        $(n, 0 == o ? 0 : o - t)
                    }(h)
                }
                scrollToSelection() {
                    let e = this.domSelectionRange().focusNode;
                    if (this.someProp("handleScrollToSelection", (e => e(this))));
                    else if (this.state.selection instanceof o.qv) {
                        let t = this.docView.domAfterPos(this.state.selection.from);
                        1 == t.nodeType && L(this, t.getBoundingClientRect(), e)
                    } else L(this, this.coordsAtPos(this.state.selection.head, 1), e)
                }
                destroyPluginViews() {
                    let e;
                    for (; e = this.pluginViews.pop();) e.destroy && e.destroy()
                }
                updatePluginViews(e) {
                    if (e && e.plugins == this.state.plugins && this.directPlugins == this.prevDirectPlugins)
                        for (let t = 0; t < this.pluginViews.length; t++) {
                            let n = this.pluginViews[t];
                            n.update && n.update(this, e)
                        } else {
                            this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
                            for (let e = 0; e < this.directPlugins.length; e++) {
                                let t = this.directPlugins[e];
                                t.spec.view && this.pluginViews.push(t.spec.view(this))
                            }
                            for (let e = 0; e < this.state.plugins.length; e++) {
                                let t = this.state.plugins[e];
                                t.spec.view && this.pluginViews.push(t.spec.view(this))
                            }
                        }
                }
                someProp(e, t) {
                    let n, o = this._props && this._props[e];
                    if (null != o && (n = t ? t(o) : o)) return n;
                    for (let s = 0; s < this.directPlugins.length; s++) {
                        let o = this.directPlugins[s].props[e];
                        if (null != o && (n = t ? t(o) : o)) return n
                    }
                    let i = this.state.plugins;
                    if (i)
                        for (let s = 0; s < i.length; s++) {
                            let o = i[s].props[e];
                            if (null != o && (n = t ? t(o) : o)) return n
                        }
                }
                hasFocus() {
                    if (O) {
                        let e = this.root.activeElement;
                        if (e == this.dom) return !0;
                        if (!e || !this.dom.contains(e)) return !1;
                        for (; e && this.dom != e && this.dom.contains(e);) {
                            if ("false" == e.contentEditable) return !1;
                            e = e.parentElement
                        }
                        return !0
                    }
                    return this.root.activeElement == this.dom
                }
                focus() {
                    this.domObserver.stop(), this.editable && function(e) {
                        if (e.setActive) return e.setActive();
                        if (K) return e.focus(K);
                        let t = F(e);
                        e.focus(null == K ? {
                            get preventScroll() {
                                return K = {
                                    preventScroll: !0
                                }, !0
                            }
                        } : void 0), K || (K = !1, $(t, 0))
                    }(this.dom), ke(this), this.domObserver.start()
                }
                get root() {
                    let e = this._root;
                    if (null == e)
                        for (let t = this.dom.parentNode; t; t = t.parentNode)
                            if (9 == t.nodeType || 11 == t.nodeType && t.host) return t.getSelection || (Object.getPrototypeOf(t).getSelection = () => t.ownerDocument.getSelection()), this._root = t;
                    return e || document
                }
                posAtCoords(e) {
                    return Y(this, e)
                }
                coordsAtPos(e, t = 1) {
                    return X(this, e, t)
                }
                domAtPos(e, t = 0) {
                    return this.docView.domFromPos(e, t)
                }
                nodeDOM(e) {
                    let t = this.docView.descAt(e);
                    return t ? t.nodeDOM : null
                }
                posAtDOM(e, t, n = -1) {
                    let o = this.docView.posFromDOM(e, t, n);
                    if (null == o) throw new RangeError("DOM position not inside the editor");
                    return o
                }
                endOfTextblock(e, t) {
                    return ie(this, t || this.state, e)
                }
                pasteHTML(e, t) {
                    return At(this, "", e, !1, t || new ClipboardEvent("paste"))
                }
                pasteText(e, t) {
                    return At(this, e, null, !0, t || new ClipboardEvent("paste"))
                }
                destroy() {
                    this.docView && (! function(e) {
                        e.domObserver.stop();
                        for (let t in e.input.eventHandlers) e.dom.removeEventListener(t, e.input.eventHandlers[t]);
                        clearTimeout(e.input.composingTimeout), clearTimeout(e.input.lastIOSEnterFallbackTimeout)
                    }(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], Qt(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null)
                }
                get isDestroyed() {
                    return null == this.docView
                }
                dispatchEvent(e) {
                    return function(e, t) {
                        mt(e, t) || !at[t.type] || !e.editable && t.type in ct || at[t.type](e, t)
                    }(this, e)
                }
                dispatch(e) {
                    let t = this._props.dispatchTransaction;
                    t ? t.call(this, e) : this.updateState(this.state.apply(e))
                }
                domSelectionRange() {
                    return T && 11 === this.root.nodeType && function(e) {
                        let t = e.activeElement;
                        for (; t && t.shadowRoot;) t = t.shadowRoot.activeElement;
                        return t
                    }(this.dom.ownerDocument) == this.dom ? function(e) {
                        let t;

                        function n(e) {
                            e.preventDefault(), e.stopImmediatePropagation(), t = e.getTargetRanges()[0]
                        }
                        e.dom.addEventListener("beforeinput", n, !0), document.execCommand("indent"), e.dom.removeEventListener("beforeinput", n, !0);
                        let o = t.startContainer,
                            i = t.startOffset,
                            s = t.endContainer,
                            r = t.endOffset,
                            l = e.domAtPos(e.state.selection.anchor);
                        return c(l.node, l.offset, s, r) && ([o, i, s, r] = [s, r, o, i]), {
                            anchorNode: o,
                            anchorOffset: i,
                            focusNode: s,
                            focusOffset: r
                        }
                    }(this) : this.domSelection()
                }
                domSelection() {
                    return this.root.getSelection()
                }
            }

            function un(e) {
                let t = Object.create(null);
                return t.class = "ProseMirror", t.contenteditable = String(e.editable), e.someProp("attributes", (n => {
                    if ("function" == typeof n && (n = n(e.state)), n)
                        for (let e in n) "class" == e ? t.class += " " + n[e] : "style" == e ? t.style = (t.style ? t.style + ";" : "") + n[e] : t[e] || "contenteditable" == e || "nodeName" == e || (t[e] = String(n[e]))
                })), t.translate || (t.translate = "no"), [Lt.node(0, e.state.doc.content.size, t)]
            }

            function fn(e) {
                if (e.markCursor) {
                    let t = document.createElement("img");
                    t.className = "ProseMirror-separator", t.setAttribute("mark-placeholder", "true"), t.setAttribute("alt", ""), e.cursorWrapper = {
                        dom: t,
                        deco: Lt.widget(e.state.selection.head, t, {
                            raw: !0,
                            marks: e.markCursor
                        })
                    }
                } else e.cursorWrapper = null
            }

            function pn(e) {
                return !e.someProp("editable", (t => !1 === t(e.state)))
            }

            function mn(e) {
                let t = Object.create(null);

                function n(e) {
                    for (let n in e) Object.prototype.hasOwnProperty.call(t, n) || (t[n] = e[n])
                }
                return e.someProp("nodeViews", n), e.someProp("markViews", n), t
            }

            function gn(e) {
                if (e.spec.state || e.spec.filterTransaction || e.spec.appendTransaction) throw new RangeError("Plugins passed directly to the view must not have a state component")
            }
        }
    }
]);