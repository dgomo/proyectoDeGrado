!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length, n = it.type(e);
        return"function" === n || it.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function r(e, t, n) {
        if (it.isFunction(t))
            return it.grep(e, function(e, r) {
                return!!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return it.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (ft.test(t))
                return it.filter(t, e, n);
            t = it.filter(t, e)
        }
        return it.grep(e, function(e) {
            return it.inArray(e, t) >= 0 !== n
        })
    }
    function i(e, t) {
        do
            e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    function o(e) {
        var t = xt[e] = {};
        return it.each(e.match(bt) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    function a() {
        pt.addEventListener ? (pt.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (pt.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }
    function s() {
        (pt.addEventListener || "load" === event.type || "complete" === pt.readyState) && (a(), it.ready())
    }
    function u(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(Ft, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Et.test(n) ? it.parseJSON(n) : n
                } catch (i) {
                }
                it.data(e, t, n)
            } else
                n = void 0
        }
        return n
    }
    function l(e) {
        var t;
        for (t in e)
            if (("data" !== t || !it.isEmptyObject(e[t])) && "toJSON" !== t)
                return!1;
        return!0
    }
    function c(e, t, n, r) {
        if (it.acceptData(e)) {
            var i, o, a = it.expando, s = e.nodeType, u = s ? it.cache : e, l = s ? e[a] : e[a] && a;
            if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t)
                return l || (l = s ? e[a] = J.pop() || it.guid++ : a), u[l] || (u[l] = s ? {} : {toJSON: it.noop}), ("object" == typeof t || "function" == typeof t) && (r ? u[l] = it.extend(u[l], t) : u[l].data = it.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[it.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[it.camelCase(t)])) : i = o, i
        }
    }
    function d(e, t, n) {
        if (it.acceptData(e)) {
            var r, i, o = e.nodeType, a = o ? it.cache : e, s = o ? e[it.expando] : it.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    it.isArray(t) ? t = t.concat(it.map(t, it.camelCase)) : t in r ? t = [t] : (t = it.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--; )
                        delete r[t[i]];
                    if (n ? !l(r) : !it.isEmptyObject(r))
                        return
                }
                (n || (delete a[s].data, l(a[s]))) && (o ? it.cleanData([e], !0) : nt.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }
    function f() {
        return!0
    }
    function h() {
        return!1
    }
    function p() {
        try {
            return pt.activeElement
        } catch (e) {
        }
    }
    function m(e) {
        var t = Mt.split("|"), n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length; )
                n.createElement(t.pop());
        return n
    }
    function g(e, t) {
        var n, r, i = 0, o = typeof e.getElementsByTagName !== Tt ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Tt ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++)
                !t || it.nodeName(r, t) ? o.push(r) : it.merge(o, g(r, t));
        return void 0 === t || t && it.nodeName(e, t) ? it.merge([e], o) : o
    }
    function v(e) {
        At.test(e.type) && (e.defaultChecked = e.checked)
    }
    function y(e, t) {
        return it.nodeName(e, "table") && it.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function b(e) {
        return e.type = (null !== it.find.attr(e, "type")) + "/" + e.type, e
    }
    function x(e) {
        var t = Ut.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }
    function w(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++)
            it._data(n, "globalEval", !t || it._data(t[r], "globalEval"))
    }
    function C(e, t) {
        if (1 === t.nodeType && it.hasData(e)) {
            var n, r, i, o = it._data(e), a = it._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++)
                        it.event.add(t, n, s[n][r])
            }
            a.data && (a.data = it.extend({}, a.data))
        }
    }
    function T(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !nt.noCloneEvent && t[it.expando]) {
                i = it._data(t);
                for (r in i.events)
                    it.removeEvent(t, r, i.handle);
                t.removeAttribute(it.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), nt.html5Clone && e.innerHTML && !it.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && At.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function E(t, n) {
        var r, i = it(n.createElement(t)).appendTo(n.body), o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : it.css(i[0], "display");
        return i.detach(), o
    }
    function F(e) {
        var t = pt, n = Kt[e];
        return n || (n = E(e, t), "none" !== n && n || (Zt = (Zt || it("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Zt[0].contentWindow || Zt[0].contentDocument).document, t.write(), t.close(), n = E(e, t), Zt.detach()), Kt[e] = n), n
    }
    function N(e, t) {
        return{get: function() {
                var n = e();
                if (null != n)
                    return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }}
    }
    function k(e, t) {
        if (t in e)
            return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = hn.length; i--; )
            if (t = hn[i] + n, t in e)
                return t;
        return r
    }
    function S(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)
            r = e[a], r.style && (o[a] = it._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && St(r) && (o[a] = it._data(r, "olddisplay", F(r.nodeName)))) : (i = St(r), (n && "none" !== n || !i) && it._data(r, "olddisplay", i ? n : it.css(r, "display"))));
        for (a = 0; s > a; a++)
            r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    function D(e, t, n) {
        var r = ln.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function A(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)
            "margin" === n && (a += it.css(e, n + kt[o], !0, i)), r ? ("content" === n && (a -= it.css(e, "padding" + kt[o], !0, i)), "margin" !== n && (a -= it.css(e, "border" + kt[o] + "Width", !0, i))) : (a += it.css(e, "padding" + kt[o], !0, i), "padding" !== n && (a += it.css(e, "border" + kt[o] + "Width", !0, i)));
        return a
    }
    function L(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = en(e), a = nt.boxSizing && "border-box" === it.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = tn(e, t, o), (0 > i || null == i) && (i = e.style[t]), rn.test(i))
                return i;
            r = a && (nt.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + A(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }
    function j(e, t, n, r, i) {
        return new j.prototype.init(e, t, n, r, i)
    }
    function H() {
        return setTimeout(function() {
            pn = void 0
        }), pn = it.now()
    }
    function q(e, t) {
        var n, r = {height: e}, i = 0;
        for (t = t?1:0; 4 > i; i += 2 - t)
            n = kt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    function R(e, t, n) {
        for (var r, i = (xn[t] || []).concat(xn["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function M(e, t, n) {
        var r, i, o, a, s, u, l, c, d = this, f = {}, h = e.style, p = e.nodeType && St(e), m = it._data(e, "fxshow");
        n.queue || (s = it._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
            s.unqueued || u()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, it.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = it.css(e, "display"), c = "none" === l ? it._data(e, "olddisplay") || F(e.nodeName) : l, "inline" === c && "none" === it.css(e, "float") && (nt.inlineBlockNeedsLayout && "inline" !== F(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", nt.shrinkWrapBlocks() || d.always(function() {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], gn.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r])
                        continue;
                    p = !0
                }
                f[r] = m && m[r] || it.style(e, r)
            } else
                l = void 0;
        if (it.isEmptyObject(f))
            "inline" === ("none" === l ? F(e.nodeName) : l) && (h.display = l);
        else {
            m ? "hidden"in m && (p = m.hidden) : m = it._data(e, "fxshow", {}), o && (m.hidden = !p), p ? it(e).show() : d.done(function() {
                it(e).hide()
            }), d.done(function() {
                var t;
                it._removeData(e, "fxshow");
                for (t in f)
                    it.style(e, t, f[t])
            });
            for (r in f)
                a = R(p ? m[r] : 0, r, d), r in m || (m[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function _(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = it.camelCase(n), i = t[r], o = e[n], it.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = it.cssHooks[r], a && "expand"in a) {
                o = a.expand(o), delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n], t[n] = i)
            } else
                t[r] = i
    }
    function O(e, t, n) {
        var r, i, o = 0, a = bn.length, s = it.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return!1;
            for (var t = pn || H(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++)
                l.tweens[a].run(o);
            return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
        }, l = s.promise({elem: e, props: it.extend({}, t), opts: it.extend(!0, {specialEasing: {}}, n), originalProperties: t, originalOptions: n, startTime: pn || H(), duration: n.duration, tweens: [], createTween: function(t, n) {
                var r = it.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r
            }, stop: function(t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; r > n; n++)
                    l.tweens[n].run(1);
                return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
            }}), c = l.props;
        for (_(c, l.opts.specialEasing); a > o; o++)
            if (r = bn[o].call(l, e, c, l.opts))
                return r;
        return it.map(c, R, l), it.isFunction(l.opts.start) && l.opts.start.call(e, l), it.fx.timer(it.extend(u, {elem: e, anim: l, queue: l.opts.queue})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function P(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(bt) || [];
            if (it.isFunction(n))
                for (; r = o[i++]; )
                    "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function B(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, it.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return"string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {}, a = e === In;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function z(e, t) {
        var n, r, i = it.ajaxSettings.flatOptions || {};
        for (r in t)
            void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && it.extend(!0, e, n), e
    }
    function $(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
            u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) {
                    u.unshift(a);
                    break
                }
        if (u[0]in n)
            o = u[0];
        else {
            for (a in n) {
                if (!u[0] || e.converters[a + " " + u[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }
    function W(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (a = l[u + " " + o] || l["* " + o], !a)
                        for (i in l)
                            if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (d) {
                                return{state: "parsererror", error: a ? d : "No conversion from " + u + " to " + o}
                            }
                }
        return{state: "success", data: t}
    }
    function I(e, t, n, r) {
        var i;
        if (it.isArray(t))
            it.each(t, function(t, i) {
                n || Jn.test(e) ? r(e, i) : I(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== it.type(t))
            r(e, t);
        else
            for (i in t)
                I(e + "[" + i + "]", t[i], n, r)
    }
    function X() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }
    function V() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }
    function U(e) {
        return it.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var J = [], Q = J.slice, Y = J.concat, G = J.push, Z = J.indexOf, K = {}, et = K.toString, tt = K.hasOwnProperty, nt = {}, rt = "1.11.1", it = function(e, t) {
        return new it.fn.init(e, t)
    }, ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, at = /^-ms-/, st = /-([\da-z])/gi, ut = function(e, t) {
        return t.toUpperCase()
    };
    it.fn = it.prototype = {jquery: rt, constructor: it, selector: "", length: 0, toArray: function() {
            return Q.call(this)
        }, get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Q.call(this)
        }, pushStack: function(e) {
            var t = it.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function(e, t) {
            return it.each(this, e, t)
        }, map: function(e) {
            return this.pushStack(it.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function() {
            return this.pushStack(Q.apply(this, arguments))
        }, first: function() {
            return this.eq(0)
        }, last: function() {
            return this.eq(-1)
        }, eq: function(e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, end: function() {
            return this.prevObject || this.constructor(null)
        }, push: G, sort: J.sort, splice: J.splice}, it.extend = it.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || it.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
            if (null != (i = arguments[s]))
                for (r in i)
                    e = a[r], n = i[r], a !== n && (l && n && (it.isPlainObject(n) || (t = it.isArray(n))) ? (t ? (t = !1, o = e && it.isArray(e) ? e : []) : o = e && it.isPlainObject(e) ? e : {}, a[r] = it.extend(l, o, n)) : void 0 !== n && (a[r] = n));
        return a
    }, it.extend({expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) {
            throw new Error(e)
        }, noop: function() {
        }, isFunction: function(e) {
            return"function" === it.type(e)
        }, isArray: Array.isArray || function(e) {
            return"array" === it.type(e)
        }, isWindow: function(e) {
            return null != e && e == e.window
        }, isNumeric: function(e) {
            return!it.isArray(e) && e - parseFloat(e) >= 0
        }, isEmptyObject: function(e) {
            var t;
            for (t in e)
                return!1;
            return!0
        }, isPlainObject: function(e) {
            var t;
            if (!e || "object" !== it.type(e) || e.nodeType || it.isWindow(e))
                return!1;
            try {
                if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf"))
                    return!1
            } catch (n) {
                return!1
            }
            if (nt.ownLast)
                for (t in e)
                    return tt.call(e, t);
            for (t in e)
                ;
            return void 0 === t || tt.call(e, t)
        }, type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? K[et.call(e)] || "object" : typeof e
        }, globalEval: function(t) {
            t && it.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function(e) {
            return e.replace(at, "ms-").replace(st, ut)
        }, nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function(e, t, r) {
            var i, o = 0, a = e.length, s = n(e);
            if (r) {
                if (s)
                    for (; a > o && (i = t.apply(e[o], r), i !== !1); o++)
                        ;
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1)
                            break
            } else if (s)
                for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++)
                    ;
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1)
                        break;
            return e
        }, trim: function(e) {
            return null == e ? "" : (e + "").replace(ot, "")
        }, makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? it.merge(r, "string" == typeof e ? [e] : e) : G.call(r, e)), r
        }, inArray: function(e, t, n) {
            var r;
            if (t) {
                if (Z)
                    return Z.call(t, e, n);
                for (r = t.length, n = n?0 > n?Math.max(0, r + n):n:0; r > n; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return-1
        }, merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; )
                e[i++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r]; )
                    e[i++] = t[r++];
            return e.length = i, e
        }, grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++)
                r = !t(e[o], o), r !== s && i.push(e[o]);
            return i
        }, map: function(e, t, r) {
            var i, o = 0, a = e.length, s = n(e), u = [];
            if (s)
                for (; a > o; o++)
                    i = t(e[o], o, r), null != i && u.push(i);
            else
                for (o in e)
                    i = t(e[o], o, r), null != i && u.push(i);
            return Y.apply([], u)
        }, guid: 1, proxy: function(e, t) {
            var n, r, i;
            return"string" == typeof t && (i = e[t], t = e, e = i), it.isFunction(e) ? (n = Q.call(arguments, 2), r = function() {
                return e.apply(t || this, n.concat(Q.call(arguments)))
            }, r.guid = e.guid = e.guid || it.guid++, r) : void 0
        }, now: function() {
            return+new Date
        }, support: nt}), it.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        K["[object " + t + "]"] = t.toLowerCase()
    });
    var lt = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, l, d, h, p, m;
            if ((t ? t.ownerDocument || t : B) !== j && L(t), t = t || j, n = n || [], !e || "string" != typeof e)
                return n;
            if (1 !== (s = t.nodeType) && 9 !== s)
                return[];
            if (q && !r) {
                if (i = yt.exec(e))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode)
                                return n;
                            if (o.id === a)
                                return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && O(t, o) && o.id === a)
                            return n.push(o), n
                    } else {
                        if (i[2])
                            return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = i[3]) && w.getElementsByClassName && t.getElementsByClassName)
                            return K.apply(n, t.getElementsByClassName(a)), n
                    }
                if (w.qsa && (!R || !R.test(e))) {
                    if (h = d = P, p = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = F(e), (d = t.getAttribute("id"))?h = d.replace(xt, "\\$&"):t.setAttribute("id", h), h = "[id='" + h + "'] ", u = l.length; u--; )
                            l[u] = h + f(l[u]);
                        p = bt.test(e) && c(t.parentNode) || t, m = l.join(",")
                    }
                    if (m)
                        try {
                            return K.apply(n, p.querySelectorAll(m)), n
                        } catch (g) {
                        } finally {
                            d || t.removeAttribute("id")
                        }
                }
            }
            return k(e.replace(ut, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[P] = !0, e
        }
        function i(e) {
            var t = j.createElement("div");
            try {
                return!!e(t)
            } catch (n) {
                return!1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--; )
                C.attrHandle[n[r]] = t
        }
        function a(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return-1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return"input" === n && t.type === e
            }
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return("input" === n || "button" === n) && t.type === e
            }
        }
        function l(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; )
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function c(e) {
            return e && typeof e.getElementsByTagName !== U && e
        }
        function d() {
        }
        function f(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)
                r += e[t].value;
            return r
        }
        function h(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, o = $++;
            return t.first ? function(t, n, o) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || i)
                        return e(t, n, o)
            } : function(t, n, a) {
                var s, u, l = [z, o];
                if (a) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || i) && e(t, n, a))
                            return!0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || i) {
                            if (u = t[P] || (t[P] = {}), (s = u[r]) && s[0] === z && s[1] === o)
                                return l[2] = s[2];
                            if (u[r] = l, l[2] = e(t, n, a))
                                return!0
                        }
            }
        }
        function p(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return!1;
                return!0
            } : e[0]
        }
        function m(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++)
                t(e, n[i], r);
            return r
        }
        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)
                (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a
        }
        function v(e, t, n, i, o, a) {
            return i && !i[P] && (i = v(i)), o && !o[P] && (o = v(o, a)), r(function(r, a, s, u) {
                var l, c, d, f = [], h = [], p = a.length, v = r || m(t || "*", s.nodeType ? [s] : s, []), y = !e || !r && t ? v : g(v, f, e, s, u), b = n ? o || (r ? e : p || i) ? [] : a : y;
                if (n && n(y, b, s, u), i)
                    for (l = g(b, h), i(l, [], s, u), c = l.length; c--; )
                        (d = l[c]) && (b[h[c]] = !(y[h[c]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = b.length; c--; )
                                (d = b[c]) && l.push(y[c] = d);
                            o(null, b = [], l, u)
                        }
                        for (c = b.length; c--; )
                            (d = b[c]) && (l = o ? tt.call(r, d) : f[c]) > -1 && (r[l] = !(a[l] = d))
                    }
                } else
                    b = g(b === a ? b.splice(p, b.length) : b), o ? o(null, a, b, u) : K.apply(a, b)
            })
        }
        function y(e) {
            for (var t, n, r, i = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = h(function(e) {
                return e === t
            }, a, !0), l = h(function(e) {
                return tt.call(t, e) > -1
            }, a, !0), c = [function(e, n, r) {
                    return!o && (r || n !== S) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
                }]; i > s; s++)
                if (n = C.relative[e[s].type])
                    c = [h(p(c), n)];
                else {
                    if (n = C.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                        for (r = ++s; i > r && !C.relative[e[r].type]; r++)
                            ;
                        return v(s > 1 && p(c), s > 1 && f(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(ut, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && f(e))
                    }
                    c.push(n)
                }
            return p(c)
        }
        function b(e, n) {
            var i = n.length > 0, o = e.length > 0, a = function(r, a, s, u, l) {
                var c, d, f, h = 0, p = "0", m = r && [], v = [], y = S, b = r || o && C.find.TAG("*", l), x = z += null == y ? 1 : Math.random() || .1, w = b.length;
                for (l && (S = a !== j && a); p !== w && null != (c = b[p]); p++) {
                    if (o && c) {
                        for (d = 0; f = e[d++]; )
                            if (f(c, a, s)) {
                                u.push(c);
                                break
                            }
                        l && (z = x)
                    }
                    i && ((c = !f && c) && h--, r && m.push(c))
                }
                if (h += p, i && p !== h) {
                    for (d = 0; f = n[d++]; )
                        f(m, v, a, s);
                    if (r) {
                        if (h > 0)
                            for (; p--; )
                                m[p] || v[p] || (v[p] = G.call(u));
                        v = g(v)
                    }
                    K.apply(u, v), l && !r && v.length > 0 && h + n.length > 1 && t.uniqueSort(u)
                }
                return l && (z = x, S = y), m
            };
            return i ? r(a) : a
        }
        var x, w, C, T, E, F, N, k, S, D, A, L, j, H, q, R, M, _, O, P = "sizzle" + -new Date, B = e.document, z = 0, $ = 0, W = n(), I = n(), X = n(), V = function(e, t) {
            return e === t && (A = !0), 0
        }, U = "undefined", J = 1 << 31, Q = {}.hasOwnProperty, Y = [], G = Y.pop, Z = Y.push, K = Y.push, et = Y.slice, tt = Y.indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (this[t] === e)
                    return t;
            return-1
        }, nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", rt = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ot = it.replace("w", "w#"), at = "\\[" + rt + "*(" + it + ")(?:" + rt + "*([*^$|!~]?=)" + rt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + rt + "*\\]", st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + at + ")*)|.*)\\)|)", ut = new RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"), lt = new RegExp("^" + rt + "*," + rt + "*"), ct = new RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"), dt = new RegExp("=" + rt + "*([^\\]'\"]*?)" + rt + "*\\]", "g"), ft = new RegExp(st), ht = new RegExp("^" + ot + "$"), pt = {ID: new RegExp("^#(" + it + ")"), CLASS: new RegExp("^\\.(" + it + ")"), TAG: new RegExp("^(" + it.replace("w", "w*") + ")"), ATTR: new RegExp("^" + at), PSEUDO: new RegExp("^" + st), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"), bool: new RegExp("^(?:" + nt + ")$", "i"), needsContext: new RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")}, mt = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, vt = /^[^{]+\{\s*\[native \w/, yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, bt = /[+~]/, xt = /'|\\/g, wt = new RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"), Ct = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        };
        try {
            K.apply(Y = et.call(B.childNodes), B.childNodes), Y[B.childNodes.length].nodeType
        } catch (Tt) {
            K = {apply: Y.length ? function(e, t) {
                    Z.apply(e, et.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }}
        }
        w = t.support = {}, E = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, L = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e : B, r = n.defaultView;
            return n !== j && 9 === n.nodeType && n.documentElement ? (j = n, H = n.documentElement, q = !E(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
                L()
            }, !1) : r.attachEvent && r.attachEvent("onunload", function() {
                L()
            })), w.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = vt.test(n.getElementsByClassName) && i(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), w.getById = i(function(e) {
                return H.appendChild(e).id = P, !n.getElementsByName || !n.getElementsByName(P).length
            }), w.getById ? (C.find.ID = function(e, t) {
                if (typeof t.getElementById !== U && q) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, C.filter.ID = function(e) {
                var t = e.replace(wt, Ct);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete C.find.ID, C.filter.ID = function(e) {
                var t = e.replace(wt, Ct);
                return function(e) {
                    var n = typeof e.getAttributeNode !== U && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), C.find.TAG = w.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== U ? t.getElementsByTagName(e) : void 0
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, C.find.CLASS = w.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== U && q ? t.getElementsByClassName(e) : void 0
            }, M = [], R = [], (w.qsa = vt.test(n.querySelectorAll)) && (i(function(e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && R.push("[*^$]=" + rt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || R.push("\\[" + rt + "*(?:value|" + nt + ")"), e.querySelectorAll(":checked").length || R.push(":checked")
            }), i(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && R.push("name" + rt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || R.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), R.push(",.*:")
            })), (w.matchesSelector = vt.test(_ = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function(e) {
                w.disconnectedMatch = _.call(e, "div"), _.call(e, "[s!='']:x"), M.push("!=", st)
            }), R = R.length && new RegExp(R.join("|")), M = M.length && new RegExp(M.join("|")), t = vt.test(H.compareDocumentPosition), O = t || vt.test(H.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return!0;
                return!1
            }, V = t ? function(e, t) {
                if (e === t)
                    return A = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !w.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === B && O(B, e) ? -1 : t === n || t.ownerDocument === B && O(B, t) ? 1 : D ? tt.call(D, e) - tt.call(D, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
                if (e === t)
                    return A = !0, 0;
                var r, i = 0, o = e.parentNode, s = t.parentNode, u = [e], l = [t];
                if (!o || !s)
                    return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : D ? tt.call(D, e) - tt.call(D, t) : 0;
                if (o === s)
                    return a(e, t);
                for (r = e; r = r.parentNode; )
                    u.unshift(r);
                for (r = t; r = r.parentNode; )
                    l.unshift(r);
                for (; u[i] === l[i]; )
                    i++;
                return i ? a(u[i], l[i]) : u[i] === B ? -1 : l[i] === B ? 1 : 0
            }, n) : j
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== j && L(e), n = n.replace(dt, "='$1']"), !(!w.matchesSelector || !q || M && M.test(n) || R && R.test(n)))
                try {
                    var r = _.call(e, n);
                    if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (i) {
                }
            return t(n, j, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return(e.ownerDocument || e) !== j && L(e), O(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== j && L(e);
            var n = C.attrHandle[t.toLowerCase()], r = n && Q.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
            return void 0 !== r ? r : w.attributes || !q ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (A = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(V), A) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return D = null, e
        }, T = t.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += T(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += T(t);
            return n
        }, C = t.selectors = {cacheLength: 50, createPseudo: r, match: pt, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function(e) {
                    return e[1] = e[1].replace(wt, Ct), e[3] = (e[3] || e[4] || e[5] || "").replace(wt, Ct), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ft.test(n) && (t = F(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }}, filter: {TAG: function(e) {
                    var t = e.replace(wt, Ct).toLowerCase();
                    return"*" === e ? function() {
                        return!0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + rt + ")" + e + "(" + rt + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== U && e.getAttribute("class") || "")
                    })
                }, ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                }, CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return!!e.parentNode
                    } : function(t, n, u) {
                        var l, c, d, f, h, p, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !u && !s;
                        if (g) {
                            if (o) {
                                for (; m; ) {
                                    for (d = t; d = d[m]; )
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                            return!1;
                                    p = m = "only" === e && !p && "nextSibling"
                                }
                                return!0
                            }
                            if (p = [a ? g.firstChild : g.lastChild], a && y) {
                                for (c = g[P] || (g[P] = {}), l = c[e] || [], h = l[0] === z && l[1], f = l[0] === z && l[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (f = h = 0) || p.pop(); )
                                    if (1 === d.nodeType && ++f && d === t) {
                                        c[e] = [z, h, f];
                                        break
                                    }
                            } else if (y && (l = (t[P] || (t[P] = {}))[e]) && l[0] === z)
                                f = l[1];
                            else
                                for (; (d = ++h && d && d[m] || (f = h = 0) || p.pop()) && ((s?d.nodeName.toLowerCase() !== v:1 !== d.nodeType) || !++f || (y && ((d[P] || (d[P] = {}))[e] = [z, f]), d !== t)); )
                                    ;
                            return f -= i, f === r || f % r === 0 && f / r >= 0
                        }
                    }
                }, PSEUDO: function(e, n) {
                    var i, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[P] ? o(n) : o.length > 1 ? (i = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--; )
                            r = tt.call(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }}, pseudos: {not: r(function(e) {
                    var t = [], n = [], i = N(e.replace(ut, "$1"));
                    return i[P] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--; )
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), !n.pop()
                    }
                }), has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }), contains: r(function(e) {
                    return function(t) {
                        return(t.textContent || t.innerText || T(t)).indexOf(e) > -1
                    }
                }), lang: r(function(e) {
                    return ht.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(wt, Ct).toLowerCase(), function(t) {
                        var n;
                        do
                            if (n = q ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return!1
                    }
                }), target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function(e) {
                    return e === H
                }, focus: function(e) {
                    return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function(e) {
                    return e.disabled === !1
                }, disabled: function(e) {
                    return e.disabled === !0
                }, checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return"input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return!1;
                    return!0
                }, parent: function(e) {
                    return!C.pseudos.empty(e)
                }, header: function(e) {
                    return gt.test(e.nodeName)
                }, input: function(e) {
                    return mt.test(e.nodeName)
                }, button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return"input" === t && "button" === e.type || "button" === t
                }, text: function(e) {
                    var t;
                    return"input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: l(function() {
                    return[0]
                }), last: l(function(e, t) {
                    return[t - 1]
                }), eq: l(function(e, t, n) {
                    return[0 > n ? n + t : n]
                }), even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }), odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }), lt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }), gt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })}}, C.pseudos.nth = C.pseudos.eq;
        for (x in{radio:!0, checkbox:!0, file:!0, password:!0, image:!0})
            C.pseudos[x] = s(x);
        for (x in{submit:!0, reset:!0})
            C.pseudos[x] = u(x);
        return d.prototype = C.filters = C.pseudos, C.setFilters = new d, F = t.tokenize = function(e, n) {
            var r, i, o, a, s, u, l, c = I[e + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (s = e, u = [], l = C.preFilter; s; ) {
                (!r || (i = lt.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ct.exec(s)) && (r = i.shift(), o.push({value: r, type: i[0].replace(ut, " ")}), s = s.slice(r.length));
                for (a in C.filter)
                    !(i = pt[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({value: r, type: a, matches: i}), s = s.slice(r.length));
                if (!r)
                    break
            }
            return n ? s.length : s ? t.error(e) : I(e, u).slice(0)
        }, N = t.compile = function(e, t) {
            var n, r = [], i = [], o = X[e + " "];
            if (!o) {
                for (t || (t = F(e)), n = t.length; n--; )
                    o = y(t[n]), o[P] ? r.push(o) : i.push(o);
                o = X(e, b(i, r)), o.selector = e
            }
            return o
        }, k = t.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, d = !r && F(e = l.selector || e);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && q && C.relative[o[1].type]) {
                    if (t = (C.find.ID(a.matches[0].replace(wt, Ct), t) || [])[0], !t)
                        return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = pt.needsContext.test(e)?0:o.length; i-- && (a = o[i], !C.relative[s = a.type]); )
                    if ((u = C.find[s]) && (r = u(a.matches[0].replace(wt, Ct), bt.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && f(o), !e)
                            return K.apply(n, r), n;
                        break
                    }
            }
            return(l || N(e, d))(r, t, !q, n, bt.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = P.split("").sort(V).join("") === P, w.detectDuplicates = !!A, L(), w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(j.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(nt, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    it.find = lt, it.expr = lt.selectors, it.expr[":"] = it.expr.pseudos, it.unique = lt.uniqueSort, it.text = lt.getText, it.isXMLDoc = lt.isXML, it.contains = lt.contains;
    var ct = it.expr.match.needsContext, dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ft = /^.[^:#\[\.,]*$/;
    it.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? it.find.matchesSelector(r, e) ? [r] : [] : it.find.matches(e, it.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, it.fn.extend({find: function(e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e)
                return this.pushStack(it(e).filter(function() {
                    for (t = 0; i > t; t++)
                        if (it.contains(r[t], this))
                            return!0
                }));
            for (t = 0; i > t; t++)
                it.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? it.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        }, filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        }, not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        }, is: function(e) {
            return!!r(this, "string" == typeof e && ct.test(e) ? it(e) : e || [], !1).length
        }});
    var ht, pt = e.document, mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, gt = it.fn.init = function(e, t) {
        var n, r;
        if (!e)
            return this;
        if ("string" == typeof e) {
            if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : mt.exec(e), !n || !n[1] && t)
                return!t || t.jquery ? (t || ht).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof it ? t[0] : t, it.merge(this, it.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : pt, !0)), dt.test(n[1]) && it.isPlainObject(t))
                    for (n in t)
                        it.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            if (r = pt.getElementById(n[2]), r && r.parentNode) {
                if (r.id !== n[2])
                    return ht.find(e);
                this.length = 1, this[0] = r
            }
            return this.context = pt, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : it.isFunction(e) ? "undefined" != typeof ht.ready ? ht.ready(e) : e(it) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), it.makeArray(e, this))
    };
    gt.prototype = it.fn, ht = it(pt);
    var vt = /^(?:parents|prev(?:Until|All))/, yt = {children: !0, contents: !0, next: !0, prev: !0};
    it.extend({dir: function(e, t, n) {
            for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !it(i).is(n)); )
                1 === i.nodeType && r.push(i), i = i[t];
            return r
        }, sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }}), it.fn.extend({has: function(e) {
            var t, n = it(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (it.contains(this, n[t]))
                        return!0
            })
        }, closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = ct.test(e) || "string" != typeof e ? it(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && it.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? it.unique(o) : o)
        }, index: function(e) {
            return e ? "string" == typeof e ? it.inArray(this[0], it(e)) : it.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function(e, t) {
            return this.pushStack(it.unique(it.merge(this.get(), it(e, t))))
        }, addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }}), it.each({parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function(e) {
            return it.dir(e, "parentNode")
        }, parentsUntil: function(e, t, n) {
            return it.dir(e, "parentNode", n)
        }, next: function(e) {
            return i(e, "nextSibling")
        }, prev: function(e) {
            return i(e, "previousSibling")
        }, nextAll: function(e) {
            return it.dir(e, "nextSibling")
        }, prevAll: function(e) {
            return it.dir(e, "previousSibling")
        }, nextUntil: function(e, t, n) {
            return it.dir(e, "nextSibling", n)
        }, prevUntil: function(e, t, n) {
            return it.dir(e, "previousSibling", n)
        }, siblings: function(e) {
            return it.sibling((e.parentNode || {}).firstChild, e)
        }, children: function(e) {
            return it.sibling(e.firstChild)
        }, contents: function(e) {
            return it.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : it.merge([], e.childNodes)
        }}, function(e, t) {
        it.fn[e] = function(n, r) {
            var i = it.map(this, t, n);
            return"Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = it.filter(r, i)), this.length > 1 && (yt[e] || (i = it.unique(i)), vt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var bt = /\S+/g, xt = {};
    it.Callbacks = function(e) {
        e = "string" == typeof e ? xt[e] || o(e) : it.extend({}, e);
        var t, n, r, i, a, s, u = [], l = !e.once && [], c = function(o) {
            for (n = e.memory && o, r = !0, a = s || 0, s = 0, i = u.length, t = !0; u && i > a; a++)
                if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                    n = !1;
                    break
                }
            t = !1, u && (l ? l.length && c(l.shift()) : n ? u = [] : d.disable())
        }, d = {add: function() {
                if (u) {
                    var r = u.length;
                    !function o(t) {
                        it.each(t, function(t, n) {
                            var r = it.type(n);
                            "function" === r ? e.unique && d.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                        })
                    }(arguments), t ? i = u.length : n && (s = r, c(n))
                }
                return this
            }, remove: function() {
                return u && it.each(arguments, function(e, n) {
                    for (var r; (r = it.inArray(n, u, r)) > - 1; )
                        u.splice(r, 1), t && (i >= r && i--, a >= r && a--)
                }), this
            }, has: function(e) {
                return e ? it.inArray(e, u) > -1 : !(!u || !u.length)
            }, empty: function() {
                return u = [], i = 0, this
            }, disable: function() {
                return u = l = n = void 0, this
            }, disabled: function() {
                return!u
            }, lock: function() {
                return l = void 0, n || d.disable(), this
            }, locked: function() {
                return!l
            }, fireWith: function(e, n) {
                return!u || r && !l || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? l.push(n) : c(n)), this
            }, fire: function() {
                return d.fireWith(this, arguments), this
            }, fired: function() {
                return!!r
            }};
        return d
    }, it.extend({Deferred: function(e) {
            var t = [["resolve", "done", it.Callbacks("once memory"), "resolved"], ["reject", "fail", it.Callbacks("once memory"), "rejected"], ["notify", "progress", it.Callbacks("memory")]], n = "pending", r = {state: function() {
                    return n
                }, always: function() {
                    return i.done(arguments).fail(arguments), this
                }, then: function() {
                    var e = arguments;
                    return it.Deferred(function(n) {
                        it.each(t, function(t, o) {
                            var a = it.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && it.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, promise: function(e) {
                    return null != e ? it.extend(e, r) : r
                }}, i = {};
            return r.pipe = r.then, it.each(t, function(e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function(e) {
            var t, n, r, i = 0, o = Q.call(arguments), a = o.length, s = 1 !== a || e && it.isFunction(e.promise) ? a : 0, u = 1 === s ? e : it.Deferred(), l = function(e, n, r) {
                return function(i) {
                    n[e] = this, r[e] = arguments.length > 1 ? Q.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                }
            };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++)
                    o[i] && it.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }});
    var wt;
    it.fn.ready = function(e) {
        return it.ready.promise().done(e), this
    }, it.extend({isReady: !1, readyWait: 1, holdReady: function(e) {
            e ? it.readyWait++ : it.ready(!0)
        }, ready: function(e) {
            if (e === !0 ? !--it.readyWait : !it.isReady) {
                if (!pt.body)
                    return setTimeout(it.ready);
                it.isReady = !0, e !== !0 && --it.readyWait > 0 || (wt.resolveWith(pt, [it]), it.fn.triggerHandler && (it(pt).triggerHandler("ready"), it(pt).off("ready")))
            }
        }}), it.ready.promise = function(t) {
        if (!wt)
            if (wt = it.Deferred(), "complete" === pt.readyState)
                setTimeout(it.ready);
            else if (pt.addEventListener)
                pt.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
            else {
                pt.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == e.frameElement && pt.documentElement
                } catch (r) {
                }
                n && n.doScroll && !function i() {
                    if (!it.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(i, 50)
                        }
                        a(), it.ready()
                    }
                }()
            }
        return wt.promise(t)
    };
    var Ct, Tt = "undefined";
    for (Ct in it(nt))
        break;
    nt.ownLast = "0" !== Ct, nt.inlineBlockNeedsLayout = !1, it(function() {
        var e, t, n, r;
        n = pt.getElementsByTagName("body")[0], n && n.style && (t = pt.createElement("div"), r = pt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Tt && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
    }), function() {
        var e = pt.createElement("div");
        if (null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                nt.deleteExpando = !1
            }
        }
        e = null
    }(), it.acceptData = function(e) {
        var t = it.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    };
    var Et = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ft = /([A-Z])/g;
    it.extend({cache: {}, noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"}, hasData: function(e) {
            return e = e.nodeType ? it.cache[e[it.expando]] : e[it.expando], !!e && !l(e)
        }, data: function(e, t, n) {
            return c(e, t, n)
        }, removeData: function(e, t) {
            return d(e, t)
        }, _data: function(e, t, n) {
            return c(e, t, n, !0)
        }, _removeData: function(e, t) {
            return d(e, t, !0)
        }}), it.fn.extend({data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = it.data(o), 1 === o.nodeType && !it._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = it.camelCase(r.slice(5)), u(o, r, i[r])));
                    it._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return"object" == typeof e ? this.each(function() {
                it.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                it.data(this, e, t)
            }) : o ? u(o, e, it.data(o, e)) : void 0
        }, removeData: function(e) {
            return this.each(function() {
                it.removeData(this, e)
            })
        }}), it.extend({queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = it._data(e, t), n && (!r || it.isArray(n) ? r = it._data(e, t, it.makeArray(n)) : r.push(n)), r || []) : void 0
        }, dequeue: function(e, t) {
            t = t || "fx";
            var n = it.queue(e, t), r = n.length, i = n.shift(), o = it._queueHooks(e, t), a = function() {
                it.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return it._data(e, n) || it._data(e, n, {empty: it.Callbacks("once memory").add(function() {
                    it._removeData(e, t + "queue"), it._removeData(e, n)
                })})
        }}), it.fn.extend({queue: function(e, t) {
            var n = 2;
            return"string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? it.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = it.queue(this, e, t);
                it._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && it.dequeue(this, e)
            })
        }, dequeue: function(e) {
            return this.each(function() {
                it.dequeue(this, e)
            })
        }, clearQueue: function(e) {
            return this.queue(e || "fx", [])
        }, promise: function(e, t) {
            var n, r = 1, i = it.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--; )
                n = it._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }});
    var Nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, kt = ["Top", "Right", "Bottom", "Left"], St = function(e, t) {
        return e = t || e, "none" === it.css(e, "display") || !it.contains(e.ownerDocument, e)
    }, Dt = it.access = function(e, t, n, r, i, o, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === it.type(n)) {
            i = !0;
            for (s in n)
                it.access(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0, it.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
            return l.call(it(e), n)
        })), t))
            for (; u > s; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }, At = /^(?:checkbox|radio)$/i;
    !function() {
        var e = pt.createElement("input"), t = pt.createElement("div"), n = pt.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === t.firstChild.nodeType, nt.tbody = !t.getElementsByTagName("tbody").length, nt.htmlSerialize = !!t.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== pt.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), nt.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
            nt.noCloneEvent = !1
        }), t.cloneNode(!0).click()), null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete t.test
            } catch (r) {
                nt.deleteExpando = !1
            }
        }
    }(), function() {
        var t, n, r = pt.createElement("div");
        for (t in{submit:!0, change:!0, focusin:!0})
            n = "on" + t, (nt[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), nt[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    }();
    var Lt = /^(?:input|select|textarea)$/i, jt = /^key/, Ht = /^(?:mouse|pointer|contextmenu)|click/, qt = /^(?:focusinfocus|focusoutblur)$/, Rt = /^([^.]*)(?:\.(.+)|)$/;
    it.event = {global: {}, add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, h, p, m, g = it._data(e);
            if (g) {
                for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = it.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                    return typeof it === Tt || e && it.event.triggered === e.type ? void 0 : it.event.dispatch.apply(c.elem, arguments)
                }, c.elem = e), t = (t || "").match(bt) || [""], s = t.length; s--; )
                    o = Rt.exec(t[s]) || [], h = m = o[1], p = (o[2] || "").split(".").sort(), h && (l = it.event.special[h] || {}, h = (i ? l.delegateType : l.bindType) || h, l = it.event.special[h] || {}, d = it.extend({type: h, origType: m, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && it.expr.match.needsContext.test(i), namespace: p.join(".")}, u), (f = a[h]) || (f = a[h] = [], f.delegateCount = 0, l.setup && l.setup.call(e, r, p, c) !== !1 || (e.addEventListener ? e.addEventListener(h, c, !1) : e.attachEvent && e.attachEvent("on" + h, c))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), it.event.global[h] = !0);
                e = null
            }
        }, remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, h, p, m, g = it.hasData(e) && it._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(bt) || [""], l = t.length; l--; )
                    if (s = Rt.exec(t[l]) || [], h = m = s[1], p = (s[2] || "").split(".").sort(), h) {
                        for (d = it.event.special[h] || {}, h = (r?d.delegateType:d.bindType) || h, f = c[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length; o--; )
                            a = f[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        u && !f.length && (d.teardown && d.teardown.call(e, p, g.handle) !== !1 || it.removeEvent(e, h, g.handle), delete c[h])
                    } else
                        for (h in c)
                            it.event.remove(e, h + t[l], n, r, !0);
                it.isEmptyObject(c) && (delete g.handle, it._removeData(e, "events"))
            }
        }, trigger: function(t, n, r, i) {
            var o, a, s, u, l, c, d, f = [r || pt], h = tt.call(t, "type") ? t.type : t, p = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || pt, 3 !== r.nodeType && 8 !== r.nodeType && !qt.test(h + it.event.triggered) && (h.indexOf(".") >= 0 && (p = h.split("."), h = p.shift(), p.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[it.expando] ? t : new it.Event(h, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : it.makeArray(n, [t]), l = it.event.special[h] || {}, i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                if (!i && !l.noBubble && !it.isWindow(r)) {
                    for (u = l.delegateType || h, qt.test(u + h) || (s = s.parentNode); s; s = s.parentNode)
                        f.push(s), c = s;
                    c === (r.ownerDocument || pt) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0; (s = f[d++]) && !t.isPropagationStopped(); )
                    t.type = d > 1 ? u : l.bindType || h, o = (it._data(s, "events") || {})[t.type] && it._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && it.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = h, !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(f.pop(), n) === !1) && it.acceptData(r) && a && r[h] && !it.isWindow(r)) {
                    c = r[a], c && (r[a] = null), it.event.triggered = h;
                    try {
                        r[h]()
                    } catch (m) {
                    }
                    it.event.triggered = void 0, c && (r[a] = c)
                }
                return t.result
            }
        }, dispatch: function(e) {
            e = it.event.fix(e);
            var t, n, r, i, o, a = [], s = Q.call(arguments), u = (it._data(this, "events") || {})[e.type] || [], l = it.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (a = it.event.handlers.call(this, e, u), t = 0; (i = a[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = i.elem, o = 0; (r = i.handlers[o++]) && !e.isImmediatePropagationStopped(); )
                        (!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((it.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        }, handlers: function(e, t) {
            var n, r, i, o, a = [], s = t.delegateCount, u = e.target;
            if (s && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], o = 0; s > o; o++)
                            r = t[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? it(n, this).index(u) >= 0 : it.find(n, this, null, [u]).length), i[n] && i.push(r);
                        i.length && a.push({elem: u, handlers: i})
                    }
            return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a
        }, fix: function(e) {
            if (e[it.expando])
                return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Ht.test(i)?this.mouseHooks:jt.test(i)?this.keyHooks:{}), r = a.props?this.props.concat(a.props):this.props, e = new it.Event(o), t = r.length; t--; )
                n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || pt), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(e, t) {
                var n, r, i, o = t.button, a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || pt, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }}, special: {load: {noBubble: !0}, focus: {trigger: function() {
                    if (this !== p() && this.focus)
                        try {
                            return this.focus(), !1
                        } catch (e) {
                        }
                }, delegateType: "focusin"}, blur: {trigger: function() {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"}, click: {trigger: function() {
                    return it.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function(e) {
                    return it.nodeName(e.target, "a")
                }}, beforeunload: {postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }}}, simulate: function(e, t, n, r) {
            var i = it.extend(new it.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            r ? it.event.trigger(i, null, t) : it.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }}, it.removeEvent = pt.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === Tt && (e[r] = null), e.detachEvent(r, n))
    }, it.Event = function(e, t) {
        return this instanceof it.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : h) : this.type = e, t && it.extend(this, t), this.timeStamp = e && e.timeStamp || it.now(), void(this[it.expando] = !0)) : new it.Event(e, t)
    }, it.Event.prototype = {isDefaultPrevented: h, isPropagationStopped: h, isImmediatePropagationStopped: h, preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        }, stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        }, stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }}, it.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function(e, t) {
        it.event.special[e] = {delegateType: t, bindType: t, handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return(!i || i !== r && !it.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }}
    }), nt.submitBubbles || (it.event.special.submit = {setup: function() {
            return it.nodeName(this, "form") ? !1 : void it.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target, n = it.nodeName(t, "input") || it.nodeName(t, "button") ? t.form : void 0;
                n && !it._data(n, "submitBubbles") && (it.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), it._data(n, "submitBubbles", !0))
            })
        }, postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && it.event.simulate("submit", this.parentNode, e, !0))
        }, teardown: function() {
            return it.nodeName(this, "form") ? !1 : void it.event.remove(this, "._submit")
        }}), nt.changeBubbles || (it.event.special.change = {setup: function() {
            return Lt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (it.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), it.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), it.event.simulate("change", this, e, !0)
            })), !1) : void it.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Lt.test(t.nodeName) && !it._data(t, "changeBubbles") && (it.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || it.event.simulate("change", this.parentNode, e, !0)
                }), it._data(t, "changeBubbles", !0))
            })
        }, handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function() {
            return it.event.remove(this, "._change"), !Lt.test(this.nodeName)
        }}), nt.focusinBubbles || it.each({focus: "focusin", blur: "focusout"}, function(e, t) {
        var n = function(e) {
            it.event.simulate(t, e.target, it.event.fix(e), !0)
        };
        it.event.special[t] = {setup: function() {
                var r = this.ownerDocument || this, i = it._data(r, t);
                i || r.addEventListener(e, n, !0), it._data(r, t, (i || 0) + 1)
            }, teardown: function() {
                var r = this.ownerDocument || this, i = it._data(r, t) - 1;
                i ? it._data(r, t, i) : (r.removeEventListener(e, n, !0), it._removeData(r, t))
            }}
    }), it.fn.extend({on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (o in e)
                    this.on(o, t, n, e[o], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1)
                r = h;
            else if (!r)
                return this;
            return 1 === i && (a = r, r = function(e) {
                return it().off(e), a.apply(this, arguments)
            }, r.guid = a.guid || (a.guid = it.guid++)), this.each(function() {
                it.event.add(this, e, r, n, t)
            })
        }, one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }, off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj, it(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return(t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = h), this.each(function() {
                it.event.remove(this, e, n, t)
            })
        }, trigger: function(e, t) {
            return this.each(function() {
                it.event.trigger(e, t, this)
            })
        }, triggerHandler: function(e, t) {
            var n = this[0];
            return n ? it.event.trigger(e, t, n, !0) : void 0
        }});
    var Mt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", _t = / jQuery\d+="(?:null|\d+)"/g, Ot = new RegExp("<(?:" + Mt + ")[\\s/>]", "i"), Pt = /^\s+/, Bt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, zt = /<([\w:]+)/, $t = /<tbody/i, Wt = /<|&#?\w+;/, It = /<(?:script|style|link)/i, Xt = /checked\s*(?:[^=]|=\s*.checked.)/i, Vt = /^$|\/(?:java|ecma)script/i, Ut = /^true\/(.*)/, Jt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Qt = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, Yt = m(pt), Gt = Yt.appendChild(pt.createElement("div"));
    Qt.optgroup = Qt.option, Qt.tbody = Qt.tfoot = Qt.colgroup = Qt.caption = Qt.thead, Qt.th = Qt.td, it.extend({clone: function(e, t, n) {
            var r, i, o, a, s, u = it.contains(e.ownerDocument, e);
            if (nt.html5Clone || it.isXMLDoc(e) || !Ot.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Gt.innerHTML = e.outerHTML, Gt.removeChild(o = Gt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || it.isXMLDoc(e)))
                for (r = g(o), s = g(e), a = 0; null != (i = s[a]); ++a)
                    r[a] && T(i, r[a]);
            if (t)
                if (n)
                    for (s = s || g(e), r = r || g(o), a = 0; null != (i = s[a]); a++)
                        C(i, r[a]);
                else
                    C(e, o);
            return r = g(o, "script"), r.length > 0 && w(r, !u && g(e, "script")), r = s = i = null, o
        }, buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, l, c, d = e.length, f = m(t), h = [], p = 0; d > p; p++)
                if (o = e[p], o || 0 === o)
                    if ("object" === it.type(o))
                        it.merge(h, o.nodeType ? [o] : o);
                    else if (Wt.test(o)) {
                        for (s = s || f.appendChild(t.createElement("div")), u = (zt.exec(o) || ["", ""])[1].toLowerCase(), c = Qt[u] || Qt._default, s.innerHTML = c[1] + o.replace(Bt, "<$1></$2>") + c[2], i = c[0]; i--; )
                            s = s.lastChild;
                        if (!nt.leadingWhitespace && Pt.test(o) && h.push(t.createTextNode(Pt.exec(o)[0])), !nt.tbody)
                            for (o = "table" !== u || $t.test(o)?"<table>" !== c[1] || $t.test(o)?0:s:s.firstChild, i = o && o.childNodes.length; i--; )
                                it.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                        for (it.merge(h, s.childNodes), s.textContent = ""; s.firstChild; )
                            s.removeChild(s.firstChild);
                        s = f.lastChild
                    } else
                        h.push(t.createTextNode(o));
            for (s && f.removeChild(s), nt.appendChecked || it.grep(g(h, "input"), v), p = 0; o = h[p++]; )
                if ((!r || -1 === it.inArray(o, r)) && (a = it.contains(o.ownerDocument, o), s = g(f.appendChild(o), "script"), a && w(s), n))
                    for (i = 0; o = s[i++]; )
                        Vt.test(o.type || "") && n.push(o);
            return s = null, f
        }, cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = it.expando, u = it.cache, l = nt.deleteExpando, c = it.event.special; null != (n = e[a]); a++)
                if ((t || it.acceptData(n)) && (i = n[s], o = i && u[i])) {
                    if (o.events)
                        for (r in o.events)
                            c[r] ? it.event.remove(n, r) : it.removeEvent(n, r, o.handle);
                    u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== Tt ? n.removeAttribute(s) : n[s] = null, J.push(i))
                }
        }}), it.fn.extend({text: function(e) {
            return Dt(this, function(e) {
                return void 0 === e ? it.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pt).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function(e, t) {
            for (var n, r = e ? it.filter(e, this) : this, i = 0; null != (n = r[i]); i++)
                t || 1 !== n.nodeType || it.cleanData(g(n)), n.parentNode && (t && it.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && it.cleanData(g(e, !1)); e.firstChild; )
                    e.removeChild(e.firstChild);
                e.options && it.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return it.clone(this, e, t)
            })
        }, html: function(e) {
            return Dt(this, function(e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e)
                    return 1 === t.nodeType ? t.innerHTML.replace(_t, "") : void 0;
                if (!("string" != typeof e || It.test(e) || !nt.htmlSerialize && Ot.test(e) || !nt.leadingWhitespace && Pt.test(e) || Qt[(zt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Bt, "<$1></$2>");
                    try {
                        for (; r > n; n++)
                            t = this[n] || {}, 1 === t.nodeType && (it.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, it.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        }, detach: function(e) {
            return this.remove(e, !0)
        }, domManip: function(e, t) {
            e = Y.apply([], e);
            var n, r, i, o, a, s, u = 0, l = this.length, c = this, d = l - 1, f = e[0], h = it.isFunction(f);
            if (h || l > 1 && "string" == typeof f && !nt.checkClone && Xt.test(f))
                return this.each(function(n) {
                    var r = c.eq(n);
                    h && (e[0] = f.call(this, n, r.html())), r.domManip(e, t)
                });
            if (l && (s = it.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (o = it.map(g(s, "script"), b), i = o.length; l > u; u++)
                    r = s, u !== d && (r = it.clone(r, !0, !0), i && it.merge(o, g(r, "script"))), t.call(this[u], r, u);
                if (i)
                    for (a = o[o.length - 1].ownerDocument, it.map(o, x), u = 0; i > u; u++)
                        r = o[u], Vt.test(r.type || "") && !it._data(r, "globalEval") && it.contains(a, r) && (r.src ? it._evalUrl && it._evalUrl(r.src) : it.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Jt, "")));
                s = n = null
            }
            return this
        }}), it.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function(e, t) {
        it.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = it(e), a = o.length - 1; a >= r; r++)
                n = r === a ? this : this.clone(!0), it(o[r])[t](n), G.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Zt, Kt = {};
    !function() {
        var e;
        nt.shrinkWrapBlocks = function() {
            if (null != e)
                return e;
            e = !1;
            var t, n, r;
            return n = pt.getElementsByTagName("body")[0], n && n.style ? (t = pt.createElement("div"), r = pt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Tt && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(pt.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
        }
    }();
    var en, tn, nn = /^margin/, rn = new RegExp("^(" + Nt + ")(?!px)[a-z%]+$", "i"), on = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (en = function(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    }, tn = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || en(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || it.contains(e.ownerDocument, e) || (a = it.style(e, t)), rn.test(a) && nn.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
    }) : pt.documentElement.currentStyle && (en = function(e) {
        return e.currentStyle
    }, tn = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || en(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), rn.test(a) && !on.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
    }), function() {
        function t() {
            var t, n, r, i;
            n = pt.getElementsByTagName("body")[0], n && n.style && (t = pt.createElement("div"), r = pt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, u = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {width: "4px"}).width, i = t.appendChild(pt.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", u = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), n.removeChild(r))
        }
        var n, r, i, o, a, s, u;
        n = pt.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = n.getElementsByTagName("a")[0], r = i && i.style, r && (r.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === r.opacity, nt.cssFloat = !!r.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, it.extend(nt, {reliableHiddenOffsets: function() {
                return null == s && t(), s
            }, boxSizingReliable: function() {
                return null == a && t(), a
            }, pixelPosition: function() {
                return null == o && t(), o
            }, reliableMarginRight: function() {
                return null == u && t(), u
            }}))
    }(), it.swap = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)
            e.style[o] = a[o];
        return i
    };
    var an = /alpha\([^)]*\)/i, sn = /opacity\s*=\s*([^)]*)/, un = /^(none|table(?!-c[ea]).+)/, ln = new RegExp("^(" + Nt + ")(.*)$", "i"), cn = new RegExp("^([+-])=(" + Nt + ")", "i"), dn = {position: "absolute", visibility: "hidden", display: "block"}, fn = {letterSpacing: "0", fontWeight: "400"}, hn = ["Webkit", "O", "Moz", "ms"];
    it.extend({cssHooks: {opacity: {get: function(e, t) {
                    if (t) {
                        var n = tn(e, "opacity");
                        return"" === n ? "1" : n
                    }
                }}}, cssNumber: {columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": nt.cssFloat ? "cssFloat" : "styleFloat"}, style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = it.camelCase(t), u = e.style;
                if (t = it.cssProps[s] || (it.cssProps[s] = k(u, s)), a = it.cssHooks[t] || it.cssHooks[s], void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                if (o = typeof n, "string" === o && (i = cn.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(it.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || it.cssNumber[s] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set"in a && void 0 === (n = a.set(e, n, r)))))
                    try {
                        u[t] = n
                    } catch (l) {
                    }
            }
        }, css: function(e, t, n, r) {
            var i, o, a, s = it.camelCase(t);
            return t = it.cssProps[s] || (it.cssProps[s] = k(e.style, s)), a = it.cssHooks[t] || it.cssHooks[s], a && "get"in a && (o = a.get(e, !0, n)), void 0 === o && (o = tn(e, t, r)), "normal" === o && t in fn && (o = fn[t]), "" === n || n ? (i = parseFloat(o), n === !0 || it.isNumeric(i) ? i || 0 : o) : o
        }}), it.each(["height", "width"], function(e, t) {
        it.cssHooks[t] = {get: function(e, n, r) {
                return n ? un.test(it.css(e, "display")) && 0 === e.offsetWidth ? it.swap(e, dn, function() {
                    return L(e, t, r)
                }) : L(e, t, r) : void 0
            }, set: function(e, n, r) {
                var i = r && en(e);
                return D(e, n, r ? A(e, t, r, nt.boxSizing && "border-box" === it.css(e, "boxSizing", !1, i), i) : 0)
            }}
    }), nt.opacity || (it.cssHooks.opacity = {get: function(e, t) {
            return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function(e, t) {
            var n = e.style, r = e.currentStyle, i = it.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === it.trim(o.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = an.test(o) ? o.replace(an, i) : o + " " + i)
        }}), it.cssHooks.marginRight = N(nt.reliableMarginRight, function(e, t) {
        return t ? it.swap(e, {display: "inline-block"}, tn, [e, "marginRight"]) : void 0
    }), it.each({margin: "", padding: "", border: "Width"}, function(e, t) {
        it.cssHooks[e + t] = {expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                    i[e + kt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }}, nn.test(e) || (it.cssHooks[e + t].set = D)
    }), it.fn.extend({css: function(e, t) {
            return Dt(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (it.isArray(t)) {
                    for (r = en(e), i = t.length; i > a; a++)
                        o[t[a]] = it.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? it.style(e, t, n) : it.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function() {
            return S(this, !0)
        }, hide: function() {
            return S(this)
        }, toggle: function(e) {
            return"boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                St(this) ? it(this).show() : it(this).hide()
            })
        }}), it.Tween = j, j.prototype = {constructor: j, init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (it.cssNumber[n] ? "" : "px")
        }, cur: function() {
            var e = j.propHooks[this.prop];
            return e && e.get ? e.get(this) : j.propHooks._default.get(this)
        }, run: function(e) {
            var t, n = j.propHooks[this.prop];
            return this.pos = t = this.options.duration ? it.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
        }}, j.prototype.init.prototype = j.prototype, j.propHooks = {_default: {get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = it.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function(e) {
                it.fx.step[e.prop] ? it.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[it.cssProps[e.prop]] || it.cssHooks[e.prop]) ? it.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }}}, j.propHooks.scrollTop = j.propHooks.scrollLeft = {set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }}, it.easing = {linear: function(e) {
            return e
        }, swing: function(e) {
            return.5 - Math.cos(e * Math.PI) / 2
        }}, it.fx = j.prototype.init, it.fx.step = {};
    var pn, mn, gn = /^(?:toggle|show|hide)$/, vn = new RegExp("^(?:([+-])=|)(" + Nt + ")([a-z%]*)$", "i"), yn = /queueHooks$/, bn = [M], xn = {"*": [function(e, t) {
                var n = this.createTween(e, t), r = n.cur(), i = vn.exec(t), o = i && i[3] || (it.cssNumber[e] ? "" : "px"), a = (it.cssNumber[e] || "px" !== o && +r) && vn.exec(it.css(n.elem, e)), s = 1, u = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do
                        s = s || ".5", a /= s, it.style(n.elem, e, a + o);
                    while (s !== (s = n.cur() / r) && 1 !== s && --u)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]};
    it.Animation = it.extend(O, {tweener: function(e, t) {
            it.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++)
                n = e[r], xn[n] = xn[n] || [], xn[n].unshift(t)
        }, prefilter: function(e, t) {
            t ? bn.unshift(e) : bn.push(e)
        }}), it.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? it.extend({}, e) : {complete: n || !n && t || it.isFunction(e) && e, duration: e, easing: n && t || t && !it.isFunction(t) && t};
        return r.duration = it.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in it.fx.speeds ? it.fx.speeds[r.duration] : it.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            it.isFunction(r.old) && r.old.call(this), r.queue && it.dequeue(this, r.queue)
        }, r
    }, it.fn.extend({fadeTo: function(e, t, n, r) {
            return this.filter(St).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function(e, t, n, r) {
            var i = it.isEmptyObject(e), o = it.speed(t, n, r), a = function() {
                var t = O(this, it.extend({}, e), o);
                (i || it._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        }, stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return"string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0, i = null != e && e + "queueHooks", o = it.timers, a = it._data(this);
                if (i)
                    a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && yn.test(i) && r(a[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                (t || !n) && it.dequeue(this, e)
            })
        }, finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = it._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = it.timers, a = r ? r.length : 0;
                for (n.finish = !0, it.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }}), it.each(["toggle", "show", "hide"], function(e, t) {
        var n = it.fn[t];
        it.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(q(t, !0), e, r, i)
        }
    }), it.each({slideDown: q("show"), slideUp: q("hide"), slideToggle: q("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function(e, t) {
        it.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), it.timers = [], it.fx.tick = function() {
        var e, t = it.timers, n = 0;
        for (pn = it.now(); n < t.length; n++)
            e = t[n], e() || t[n] !== e || t.splice(n--, 1);
        t.length || it.fx.stop(), pn = void 0
    }, it.fx.timer = function(e) {
        it.timers.push(e), e() ? it.fx.start() : it.timers.pop()
    }, it.fx.interval = 13, it.fx.start = function() {
        mn || (mn = setInterval(it.fx.tick, it.fx.interval))
    }, it.fx.stop = function() {
        clearInterval(mn), mn = null
    }, it.fx.speeds = {slow: 600, fast: 200, _default: 400}, it.fn.delay = function(e, t) {
        return e = it.fx ? it.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
            var r = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(r)
            }
        })
    }, function() {
        var e, t, n, r, i;
        t = pt.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = pt.createElement("select"), i = n.appendChild(pt.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", nt.getSetAttribute = "t" !== t.className, nt.style = /top/.test(r.getAttribute("style")), nt.hrefNormalized = "/a" === r.getAttribute("href"), nt.checkOn = !!e.value, nt.optSelected = i.selected, nt.enctype = !!pt.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !i.disabled, e = pt.createElement("input"), e.setAttribute("value", ""), nt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), nt.radioValue = "t" === e.value
    }();
    var wn = /\r/g;
    it.fn.extend({val: function(e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length)
                    return r = it.isFunction(e), this.each(function(n) {
                        var i;
                        1 === this.nodeType && (i = r ? e.call(this, n, it(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : it.isArray(i) && (i = it.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })), t = it.valHooks[this.type] || it.valHooks[this.nodeName.toLowerCase()], t && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                if (i)
                    return t = it.valHooks[i.type] || it.valHooks[i.nodeName.toLowerCase()], t && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(wn, "") : null == n ? "" : n)
            }
        }}), it.extend({valHooks: {option: {get: function(e) {
                    var t = it.find.attr(e, "value");
                    return null != t ? t : it.trim(it.text(e))
                }}, select: {get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                        if (n = r[u], !(!n.selected && u !== i || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && it.nodeName(n.parentNode, "optgroup"))) {
                            if (t = it(n).val(), o)
                                return t;
                            a.push(t)
                        }
                    return a
                }, set: function(e, t) {
                    for (var n, r, i = e.options, o = it.makeArray(t), a = i.length; a--; )
                        if (r = i[a], it.inArray(it.valHooks.option.get(r), o) >= 0)
                            try {
                                r.selected = n = !0
                            } catch (s) {
                                r.scrollHeight
                            }
                        else
                            r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }}}}), it.each(["radio", "checkbox"], function() {
        it.valHooks[this] = {set: function(e, t) {
                return it.isArray(t) ? e.checked = it.inArray(it(e).val(), t) >= 0 : void 0
            }}, nt.checkOn || (it.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Cn, Tn, En = it.expr.attrHandle, Fn = /^(?:checked|selected)$/i, Nn = nt.getSetAttribute, kn = nt.input;
    it.fn.extend({attr: function(e, t) {
            return Dt(this, it.attr, e, t, arguments.length > 1)
        }, removeAttr: function(e) {
            return this.each(function() {
                it.removeAttr(this, e)
            })
        }}), it.extend({attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o)
                return typeof e.getAttribute === Tt ? it.prop(e, t, n) : (1 === o && it.isXMLDoc(e) || (t = t.toLowerCase(), r = it.attrHooks[t] || (it.expr.match.bool.test(t) ? Tn : Cn)), void 0 === n ? r && "get"in r && null !== (i = r.get(e, t)) ? i : (i = it.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void it.removeAttr(e, t))
        }, removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(bt);
            if (o && 1 === e.nodeType)
                for (; n = o[i++]; )
                    r = it.propFix[n] || n, it.expr.match.bool.test(n) ? kn && Nn || !Fn.test(n) ? e[r] = !1 : e[it.camelCase("default-" + n)] = e[r] = !1 : it.attr(e, n, ""), e.removeAttribute(Nn ? n : r)
        }, attrHooks: {type: {set: function(e, t) {
                    if (!nt.radioValue && "radio" === t && it.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }}}}), Tn = {set: function(e, t, n) {
            return t === !1 ? it.removeAttr(e, n) : kn && Nn || !Fn.test(n) ? e.setAttribute(!Nn && it.propFix[n] || n, n) : e[it.camelCase("default-" + n)] = e[n] = !0, n
        }}, it.each(it.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = En[t] || it.find.attr;
        En[t] = kn && Nn || !Fn.test(t) ? function(e, t, r) {
            var i, o;
            return r || (o = En[t], En[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, En[t] = o), i
        } : function(e, t, n) {
            return n ? void 0 : e[it.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), kn && Nn || (it.attrHooks.value = {set: function(e, t, n) {
            return it.nodeName(e, "input") ? void(e.defaultValue = t) : Cn && Cn.set(e, t, n)
        }}), Nn || (Cn = {set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }}, En.id = En.name = En.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, it.valHooks.button = {get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        }, set: Cn.set}, it.attrHooks.contenteditable = {set: function(e, t, n) {
            Cn.set(e, "" === t ? !1 : t, n)
        }}, it.each(["width", "height"], function(e, t) {
        it.attrHooks[t] = {set: function(e, n) {
                return"" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }}
    })), nt.style || (it.attrHooks.style = {get: function(e) {
            return e.style.cssText || void 0
        }, set: function(e, t) {
            return e.style.cssText = t + ""
        }});
    var Sn = /^(?:input|select|textarea|button|object)$/i, Dn = /^(?:a|area)$/i;
    it.fn.extend({prop: function(e, t) {
            return Dt(this, it.prop, e, t, arguments.length > 1)
        }, removeProp: function(e) {
            return e = it.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {
                }
            })
        }}), it.extend({propFix: {"for": "htmlFor", "class": "className"}, prop: function(e, t, n) {
            var r, i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a)
                return o = 1 !== a || !it.isXMLDoc(e), o && (t = it.propFix[t] || t, i = it.propHooks[t]), void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {tabIndex: {get: function(e) {
                    var t = it.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Sn.test(e.nodeName) || Dn.test(e.nodeName) && e.href ? 0 : -1
                }}}}), nt.hrefNormalized || it.each(["href", "src"], function(e, t) {
        it.propHooks[t] = {get: function(e) {
                return e.getAttribute(t, 4)
            }}
    }), nt.optSelected || (it.propHooks.selected = {get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }}), it.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        it.propFix[this.toLowerCase()] = this
    }), nt.enctype || (it.propFix.enctype = "encoding");
    var An = /[\t\r\n\f]/g;
    it.fn.extend({addClass: function(e) {
            var t, n, r, i, o, a, s = 0, u = this.length, l = "string" == typeof e && e;
            if (it.isFunction(e))
                return this.each(function(t) {
                    it(this).addClass(e.call(this, t, this.className))
                });
            if (l)
                for (t = (e || "").match(bt) || []; u > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : " ")) {
                        for (o = 0; i = t[o++]; )
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = it.trim(r), n.className !== a && (n.className = a)
                    }
            return this
        }, removeClass: function(e) {
            var t, n, r, i, o, a, s = 0, u = this.length, l = 0 === arguments.length || "string" == typeof e && e;
            if (it.isFunction(e))
                return this.each(function(t) {
                    it(this).removeClass(e.call(this, t, this.className))
                });
            if (l)
                for (t = (e || "").match(bt) || []; u > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : "")) {
                        for (o = 0; i = t[o++]; )
                            for (; r.indexOf(" " + i + " ") >= 0; )
                                r = r.replace(" " + i + " ", " ");
                        a = e ? it.trim(r) : "", n.className !== a && (n.className = a)
                    }
            return this
        }, toggleClass: function(e, t) {
            var n = typeof e;
            return"boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(it.isFunction(e) ? function(n) {
                it(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, r = 0, i = it(this), o = e.match(bt) || []; t = o[r++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    (n === Tt || "boolean" === n) && (this.className && it._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : it._data(this, "__className__") || "")
            })
        }, hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(An, " ").indexOf(t) >= 0)
                    return!0;
            return!1
        }}), it.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        it.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), it.fn.extend({hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function(e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function(e, t) {
            return this.off(e, null, t)
        }, delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }});
    var Ln = it.now(), jn = /\?/, Hn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    it.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse)
            return e.JSON.parse(t + "");
        var n, r = null, i = it.trim(t + "");
        return i && !it.trim(i.replace(Hn, function(e, t, i, o) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "")
        })) ? Function("return " + i)() : it.error("Invalid JSON: " + t)
    }, it.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t)
            return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || it.error("Invalid XML: " + t), n
    };
    var qn, Rn, Mn = /#.*$/, _n = /([?&])_=[^&]*/, On = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Pn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Bn = /^(?:GET|HEAD)$/, zn = /^\/\//, $n = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Wn = {}, In = {}, Xn = "*/".concat("*");
    try {
        Rn = location.href
    } catch (Vn) {
        Rn = pt.createElement("a"), Rn.href = "", Rn = Rn.href
    }
    qn = $n.exec(Rn.toLowerCase()) || [], it.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: Rn, type: "GET", isLocal: Pn.test(qn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": Xn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": it.parseJSON, "text xml": it.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function(e, t) {
            return t ? z(z(e, it.ajaxSettings), t) : z(it.ajaxSettings, e)
        }, ajaxPrefilter: P(Wn), ajaxTransport: P(In), ajax: function(e, t) {
            function n(e, t, n, r) {
                var i, c, v, y, x, C = t;
                2 !== b && (b = 2, s && clearTimeout(s), l = void 0, a = r || "", w.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (y = $(d, w, n)), y = W(d, y, w, i), i ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (it.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (it.etag[o] = x)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = y.state, c = y.data, v = y.error, i = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || C) + "", i ? p.resolveWith(f, [c, C, w]) : p.rejectWith(f, [w, C, v]), w.statusCode(g), g = void 0, u && h.trigger(i ? "ajaxSuccess" : "ajaxError", [w, d, i ? c : v]), m.fireWith(f, [w, C]), u && (h.trigger("ajaxComplete", [w, d]), --it.active || it.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, a, s, u, l, c, d = it.ajaxSetup({}, t), f = d.context || d, h = d.context && (f.nodeType || f.jquery) ? it(f) : it.event, p = it.Deferred(), m = it.Callbacks("once memory"), g = d.statusCode || {}, v = {}, y = {}, b = 0, x = "canceled", w = {readyState: 0, getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!c)
                            for (c = {}; t = On.exec(a); )
                                c[t[1].toLowerCase()] = t[2];
                        t = c[e.toLowerCase()]
                    }
                    return null == t ? null : t
                }, getAllResponseHeaders: function() {
                    return 2 === b ? a : null
                }, setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = y[n] = y[n] || e, v[e] = t), this
                }, overrideMimeType: function(e) {
                    return b || (d.mimeType = e), this
                }, statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > b)
                            for (t in e)
                                g[t] = [g[t], e[t]];
                        else
                            w.always(e[w.status]);
                    return this
                }, abort: function(e) {
                    var t = e || x;
                    return l && l.abort(t), n(0, t), this
                }};
            if (p.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || Rn) + "").replace(Mn, "").replace(zn, qn[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = it.trim(d.dataType || "*").toLowerCase().match(bt) || [""], null == d.crossDomain && (r = $n.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === qn[1] && r[2] === qn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (qn[3] || ("http:" === qn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = it.param(d.data, d.traditional)), B(Wn, d, t, w), 2 === b)
                return w;
            u = d.global, u && 0 === it.active++ && it.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Bn.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (jn.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = _n.test(o) ? o.replace(_n, "$1_=" + Ln++) : o + (jn.test(o) ? "&" : "?") + "_=" + Ln++)), d.ifModified && (it.lastModified[o] && w.setRequestHeader("If-Modified-Since", it.lastModified[o]), it.etag[o] && w.setRequestHeader("If-None-Match", it.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : d.accepts["*"]);
            for (i in d.headers)
                w.setRequestHeader(i, d.headers[i]);
            if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b))
                return w.abort();
            x = "abort";
            for (i in{success:1, error:1, complete:1})
                w[i](d[i]);
            if (l = B(In, d, t, w)) {
                w.readyState = 1, u && h.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, l.send(v, n)
                } catch (C) {
                    if (!(2 > b))
                        throw C;
                    n(-1, C)
                }
            } else
                n(-1, "No Transport");
            return w
        }, getJSON: function(e, t, n) {
            return it.get(e, t, n, "json")
        }, getScript: function(e, t) {
            return it.get(e, void 0, t, "script")
        }}), it.each(["get", "post"], function(e, t) {
        it[t] = function(e, n, r, i) {
            return it.isFunction(n) && (i = i || r, r = n, n = void 0), it.ajax({url: e, type: t, dataType: i, data: n, success: r})
        }
    }), it.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        it.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), it._evalUrl = function(e) {
        return it.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, it.fn.extend({wrapAll: function(e) {
            if (it.isFunction(e))
                return this.each(function(t) {
                    it(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = it(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function(e) {
            return this.each(it.isFunction(e) ? function(t) {
                it(this).wrapInner(e.call(this, t))
            } : function() {
                var t = it(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function(e) {
            var t = it.isFunction(e);
            return this.each(function(n) {
                it(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function() {
            return this.parent().each(function() {
                it.nodeName(this, "body") || it(this).replaceWith(this.childNodes)
            }).end()
        }}), it.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || it.css(e, "display"))
    }, it.expr.filters.visible = function(e) {
        return!it.expr.filters.hidden(e)
    };
    var Un = /%20/g, Jn = /\[\]$/, Qn = /\r?\n/g, Yn = /^(?:submit|button|image|reset|file)$/i, Gn = /^(?:input|select|textarea|keygen)/i;
    it.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            t = it.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = it.ajaxSettings && it.ajaxSettings.traditional), it.isArray(e) || e.jquery && !it.isPlainObject(e))
            it.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                I(n, e[n], t, i);
        return r.join("&").replace(Un, "+")
    }, it.fn.extend({serialize: function() {
            return it.param(this.serializeArray())
        }, serializeArray: function() {
            return this.map(function() {
                var e = it.prop(this, "elements");
                return e ? it.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !it(this).is(":disabled") && Gn.test(this.nodeName) && !Yn.test(e) && (this.checked || !At.test(e))
            }).map(function(e, t) {
                var n = it(this).val();
                return null == n ? null : it.isArray(n) ? it.map(n, function(e) {
                    return{name: t.name, value: e.replace(Qn, "\r\n")}
                }) : {name: t.name, value: n.replace(Qn, "\r\n")}
            }).get()
        }}), it.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return!this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || V()
    } : X;
    var Zn = 0, Kn = {}, er = it.ajaxSettings.xhr();
    e.ActiveXObject && it(e).on("unload", function() {
        for (var e in Kn)
            Kn[e](void 0, !0)
    }), nt.cors = !!er && "withCredentials"in er, er = nt.ajax = !!er, er && it.ajaxTransport(function(e) {
        if (!e.crossDomain || nt.cors) {
            var t;
            return{send: function(n, r) {
                    var i, o = e.xhr(), a = ++Zn;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields)
                            o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n)
                        void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                    o.send(e.hasContent && e.data || null), t = function(n, i) {
                        var s, u, l;
                        if (t && (i || 4 === o.readyState))
                            if (delete Kn[a], t = void 0, o.onreadystatechange = it.noop, i)
                                4 !== o.readyState && o.abort();
                            else {
                                l = {}, s = o.status, "string" == typeof o.responseText && (l.text = o.responseText);
                                try {
                                    u = o.statusText
                                } catch (c) {
                                    u = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = l.text ? 200 : 404
                            }
                        l && r(s, u, l, o.getAllResponseHeaders())
                    }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Kn[a] = t : t()
                }, abort: function() {
                    t && t(void 0, !0)
                }}
        }
    }), it.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function(e) {
                return it.globalEval(e), e
            }}}), it.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), it.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = pt.head || it("head")[0] || pt.documentElement;
            return{send: function(r, i) {
                    t = pt.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                }, abort: function() {
                    t && t.onload(void 0, !0)
                }}
        }
    });
    var tr = [], nr = /(=)\?(?=&|$)|\?\?/;
    it.ajaxSetup({jsonp: "callback", jsonpCallback: function() {
            var e = tr.pop() || it.expando + "_" + Ln++;
            return this[e] = !0, e
        }}), it.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = t.jsonp !== !1 && (nr.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && nr.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = it.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(nr, "$1" + i) : t.jsonp !== !1 && (t.url += (jn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || it.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, tr.push(i)), a && it.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), it.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || pt;
        var r = dt.exec(e), i = !n && [];
        return r ? [t.createElement(r[1])] : (r = it.buildFragment([e], t, i), i && i.length && it(i).remove(), it.merge([], r.childNodes))
    };
    var rr = it.fn.load;
    it.fn.load = function(e, t, n) {
        if ("string" != typeof e && rr)
            return rr.apply(this, arguments);
        var r, i, o, a = this, s = e.indexOf(" ");
        return s >= 0 && (r = it.trim(e.slice(s, e.length)), e = e.slice(0, s)), it.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && it.ajax({url: e, type: o, dataType: "html", data: t}).done(function(e) {
            i = arguments, a.html(r ? it("<div>").append(it.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            a.each(n, i || [e.responseText, t, e])
        }), this
    }, it.expr.filters.animated = function(e) {
        return it.grep(it.timers, function(t) {
            return e === t.elem
        }).length
    };
    var ir = e.document.documentElement;
    it.offset = {setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = it.css(e, "position"), d = it(e), f = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), o = it.css(e, "top"), u = it.css(e, "left"), l = ("absolute" === c || "fixed" === c) && it.inArray("auto", [o, u]) > -1, l ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), it.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using"in t ? t.using.call(e, f) : d.css(f)
        }}, it.fn.extend({offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    it.offset.setOffset(this, e, t)
                });
            var t, n, r = {top: 0, left: 0}, i = this[0], o = i && i.ownerDocument;
            if (o)
                return t = o.documentElement, it.contains(t, i) ? (typeof i.getBoundingClientRect !== Tt && (r = i.getBoundingClientRect()), n = U(o), {top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)}) : r
        }, position: function() {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0}, r = this[0];
                return"fixed" === it.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), it.nodeName(e[0], "html") || (n = e.offset()), n.top += it.css(e[0], "borderTopWidth", !0), n.left += it.css(e[0], "borderLeftWidth", !0)), {top: t.top - n.top - it.css(r, "marginTop", !0), left: t.left - n.left - it.css(r, "marginLeft", !0)}
            }
        }, offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || ir; e && !it.nodeName(e, "html") && "static" === it.css(e, "position"); )
                    e = e.offsetParent;
                return e || ir
            })
        }}), it.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function(e, t) {
        var n = /Y/.test(t);
        it.fn[e] = function(r) {
            return Dt(this, function(e, r, i) {
                var o = U(e);
                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? it(o).scrollLeft() : i, n ? i : it(o).scrollTop()) : e[r] = i)
            }, e, r, arguments.length, null)
        }
    }), it.each(["top", "left"], function(e, t) {
        it.cssHooks[t] = N(nt.pixelPosition, function(e, n) {
            return n ? (n = tn(e, t), rn.test(n) ? it(e).position()[t] + "px" : n) : void 0
        })
    }), it.each({Height: "height", Width: "width"}, function(e, t) {
        it.each({padding: "inner" + e, content: t, "": "outer" + e}, function(n, r) {
            it.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r), a = n || (r === !0 || i === !0 ? "margin" : "border");
                return Dt(this, function(t, n, r) {
                    var i;
                    return it.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? it.css(t, n, a) : it.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), it.fn.size = function() {
        return this.length
    }, it.fn.andSelf = it.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return it
    });
    var or = e.jQuery, ar = e.$;
    return it.noConflict = function(t) {
        return e.$ === it && (e.$ = ar), t && e.jQuery === it && (e.jQuery = or), it
    }, typeof t === Tt && (e.jQuery = e.$ = it), it
}), function(e) {
    e.extend(e.fn, {validate: function(t) {
            if (!this.length)
                return void(t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var n = e.data(this[0], "validator");
            return n ? n : (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function(t) {
                n.settings.submitHandler && (n.submitButton = t.target), e(t.target).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(t.target).attr("formnovalidate") && (n.cancelSubmit = !0)
            }), this.submit(function(t) {
                function r() {
                    var r;
                    return n.settings.submitHandler ? (n.submitButton && (r = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), n.settings.submitHandler.call(n, n.currentForm, t), n.submitButton && r.remove(), !1) : !0
                }
                return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, r()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : r() : (n.focusInvalid(), !1)
            })), n)
        }, valid: function() {
            var t, n;
            return e(this[0]).is("form") ? t = this.validate().form() : (t = !0, n = e(this[0].form).validate(), this.each(function() {
                t = n.element(this) && t
            })), t
        }, removeAttrs: function(t) {
            var n = {}, r = this;
            return e.each(t.split(/\s/), function(e, t) {
                n[t] = r.attr(t), r.removeAttr(t)
            }), n
        }, rules: function(t, n) {
            var r, i, o, a, s, u, l = this[0];
            if (t)
                switch (r = e.data(l.form, "validator").settings, i = r.rules, o = e.validator.staticRules(l), t) {
                    case"add":
                        e.extend(o, e.validator.normalizeRule(n)), delete o.messages, i[l.name] = o, n.messages && (r.messages[l.name] = e.extend(r.messages[l.name], n.messages));
                        break;
                    case"remove":
                        return n ? (u = {}, e.each(n.split(/\s/), function(t, n) {
                            u[n] = o[n], delete o[n], "required" === n && e(l).removeAttr("aria-required")
                        }), u) : (delete i[l.name], o)
                }
            return a = e.validator.normalizeRules(e.extend({}, e.validator.classRules(l), e.validator.attributeRules(l), e.validator.dataRules(l), e.validator.staticRules(l)), l), a.required && (s = a.required, delete a.required, a = e.extend({required: s}, a), e(l).attr("aria-required", "true")), a.remote && (s = a.remote, delete a.remote, a = e.extend(a, {remote: s})), a
        }}), e.extend(e.expr[":"], {blank: function(t) {
            return!e.trim("" + e(t).val())
        }, filled: function(t) {
            return!!e.trim("" + e(t).val())
        }, unchecked: function(t) {
            return!e(t).prop("checked")
        }}), e.validator = function(t, n) {
        this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init()
    }, e.validator.format = function(t, n) {
        return 1 === arguments.length ? function() {
            var n = e.makeArray(arguments);
            return n.unshift(t), e.validator.format.apply(this, n)
        } : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function(e, n) {
            t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function() {
                return n
            })
        }), t)
    }, e.extend(e.validator, {defaults: {messages: {}, groups: {}, rules: {}, errorClass: "error", validClass: "valid", errorElement: "label", focusInvalid: !0, errorContainer: e([]), errorLabelContainer: e([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function(e) {
                this.lastActive = e, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(e)).hide())
            }, onfocusout: function(e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            }, onkeyup: function(e, t) {
                (9 !== t.which || "" !== this.elementValue(e)) && (e.name in this.submitted || e === this.lastElement) && this.element(e)
            }, onclick: function(e) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            }, highlight: function(t, n, r) {
                "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(r) : e(t).addClass(n).removeClass(r)
            }, unhighlight: function(t, n, r) {
                "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(r) : e(t).removeClass(n).addClass(r)
            }}, setDefaults: function(t) {
            e.extend(e.validator.defaults, t)
        }, messages: {required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", creditcard: "Please enter a valid credit card number.", equalTo: "Please enter the same value again.", maxlength: e.validator.format("Please enter no more than {0} characters."), minlength: e.validator.format("Please enter at least {0} characters."), rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."), range: e.validator.format("Please enter a value between {0} and {1}."), max: e.validator.format("Please enter a value less than or equal to {0}."), min: e.validator.format("Please enter a value greater than or equal to {0}.")}, autoCreateRanges: !1, prototype: {init: function() {
                function t(t) {
                    var n = e.data(this[0].form, "validator"), r = "on" + t.type.replace(/^validate/, ""), i = n.settings;
                    i[r] && !this.is(i.ignore) && i[r].call(n, this[0], t)
                }
                this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var n, r = this.groups = {};
                e.each(this.settings.groups, function(t, n) {
                    "string" == typeof n && (n = n.split(/\s/)), e.each(n, function(e, n) {
                        r[n] = t
                    })
                }), n = this.settings.rules, e.each(n, function(t, r) {
                    n[t] = e.validator.normalizeRule(r)
                }), e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", t).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", t), this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            }, form: function() {
                return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            }, checkForm: function() {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++)
                    this.check(t[e]);
                return this.valid()
            }, element: function(t) {
                var n = this.clean(t), r = this.validationTargetFor(n), i = !0;
                return this.lastElement = r, void 0 === r ? delete this.invalid[n.name] : (this.prepareElement(r), this.currentElements = e(r), i = this.check(r) !== !1, i ? delete this.invalid[r.name] : this.invalid[r.name] = !0), e(t).attr("aria-invalid", !i), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
            }, showErrors: function(t) {
                if (t) {
                    e.extend(this.errorMap, t), this.errorList = [];
                    for (var n in t)
                        this.errorList.push({message: t[n], element: this.findByName(n)[0]});
                    this.successList = e.grep(this.successList, function(e) {
                        return!(e.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            }, resetForm: function() {
                e.fn.resetForm && e(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
            }, numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            }, objectLength: function(e) {
                var t, n = 0;
                for (t in e)
                    n++;
                return n
            }, hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            }, valid: function() {
                return 0 === this.size()
            }, size: function() {
                return this.errorList.length
            }, focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {
                    }
            }, findLastActive: function() {
                var t = this.lastActive;
                return t && 1 === e.grep(this.errorList, function(e) {
                    return e.element.name === t.name
                }).length && t
            }, elements: function() {
                var t = this, n = {};
                return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return!this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in n || !t.objectLength(e(this).rules()) ? !1 : (n[this.name] = !0, !0)
                })
            }, clean: function(t) {
                return e(t)[0]
            }, errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return e(this.settings.errorElement + "." + t, this.errorContext)
            }, reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]), this.currentElements = e([])
            }, prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            }, prepareElement: function(e) {
                this.reset(), this.toHide = this.errorsFor(e)
            }, elementValue: function(t) {
                var n, r = e(t), i = r.attr("type");
                return"radio" === i || "checkbox" === i ? e("input[name='" + r.attr("name") + "']:checked").val() : (n = r.val(), "string" == typeof n ? n.replace(/\r/g, "") : n)
            }, check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var n, r, i, o = e(t).rules(), a = e.map(o, function(e, t) {
                    return t
                }).length, s = !1, u = this.elementValue(t);
                for (r in o) {
                    i = {method: r, parameters: o[r]};
                    try {
                        if (n = e.validator.methods[r].call(this, u, t, i.parameters), "dependency-mismatch" === n && 1 === a) {
                            s = !0;
                            continue
                        }
                        if (s = !1, "pending" === n)
                            return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!n)
                            return this.formatAndAdd(t, i), !1
                    } catch (l) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method.", l), l
                    }
                }
                if (!s)
                    return this.objectLength(o) && this.successList.push(t), !0
            }, customDataMessage: function(t, n) {
                return e(t).data("msg" + n[0].toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg")
            }, customMessage: function(e, t) {
                var n = this.settings.messages[e];
                return n && (n.constructor === String ? n : n[t])
            }, findDefined: function() {
                for (var e = 0; e < arguments.length; e++)
                    if (void 0 !== arguments[e])
                        return arguments[e];
                return void 0
            }, defaultMessage: function(t, n) {
                return this.findDefined(this.customMessage(t.name, n), this.customDataMessage(t, n), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n], "<strong>Warning: No message defined for " + t.name + "</strong>")
            }, formatAndAdd: function(t, n) {
                var r = this.defaultMessage(t, n.method), i = /\$?\{(\d+)\}/g;
                "function" == typeof r ? r = r.call(this, n.parameters, t) : i.test(r) && (r = e.validator.format(r.replace(i, "{$1}"), n.parameters)), this.errorList.push({message: r, element: t, method: n.method}), this.errorMap[t.name] = r, this.submitted[t.name] = r
            }, addWrapper: function(e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
            }, defaultShowErrors: function() {
                var e, t, n;
                for (e = 0; this.errorList[e]; e++)
                    n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (e = 0; this.successList[e]; e++)
                        this.showLabel(this.successList[e]);
                if (this.settings.unhighlight)
                    for (e = 0, t = this.validElements(); t[e]; e++)
                        this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            }, validElements: function() {
                return this.currentElements.not(this.invalidElements())
            }, invalidElements: function() {
                return e(this.errorList).map(function() {
                    return this.element
                })
            }, showLabel: function(t, n) {
                var r = this.errorsFor(t);
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(n)) : (r = e("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, e(t)) : r.insertAfter(t))), !n && this.settings.success && (r.text(""), "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r, t)), this.toShow = this.toShow.add(r)
            }, errorsFor: function(t) {
                var n = this.idOrName(t);
                return this.errors().filter(function() {
                    return e(this).attr("for") === n
                })
            }, idOrName: function(e) {
                return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
            }, validationTargetFor: function(e) {
                return this.checkable(e) && (e = this.findByName(e.name).not(this.settings.ignore)[0]), e
            }, checkable: function(e) {
                return/radio|checkbox/i.test(e.type)
            }, findByName: function(t) {
                return e(this.currentForm).find("[name='" + t + "']")
            }, getLength: function(t, n) {
                switch (n.nodeName.toLowerCase()) {
                    case"select":
                        return e("option:selected", n).length;
                    case"input":
                        if (this.checkable(n))
                            return this.findByName(n.name).filter(":checked").length
                }
                return t.length
            }, depend: function(e, t) {
                return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) : !0
            }, dependTypes: {"boolean": function(e) {
                    return e
                }, string: function(t, n) {
                    return!!e(t, n.form).length
                }, "function": function(e, t) {
                    return e(t)
                }}, optional: function(t) {
                var n = this.elementValue(t);
                return!e.validator.methods.required.call(this, n, t) && "dependency-mismatch"
            }, startRequest: function(e) {
                this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0)
            }, stopRequest: function(t, n) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            }, previousValue: function(t) {
                return e.data(t, "previousValue") || e.data(t, "previousValue", {old: null, valid: !0, message: this.defaultMessage(t, "remote")})
            }}, classRuleSettings: {required: {required: !0}, email: {email: !0}, url: {url: !0}, date: {date: !0}, dateISO: {dateISO: !0}, number: {number: !0}, digits: {digits: !0}, creditcard: {creditcard: !0}}, addClassRules: function(t, n) {
            t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
        }, classRules: function(t) {
            var n = {}, r = e(t).attr("class");
            return r && e.each(r.split(" "), function() {
                this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
            }), n
        }, attributeRules: function(t) {
            var n, r, i = {}, o = e(t), a = t.getAttribute("type");
            for (n in e.validator.methods)
                "required" === n ? (r = t.getAttribute(n), "" === r && (r = !0), r = !!r) : r = o.attr(n), /min|max/.test(n) && (null === a || /number|range|text/.test(a)) && (r = Number(r)), r || 0 === r ? i[n] = r : a === n && "range" !== a && (i[n] = !0);
            return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
        }, dataRules: function(t) {
            var n, r, i = {}, o = e(t);
            for (n in e.validator.methods)
                r = o.data("rule" + n[0].toUpperCase() + n.substring(1).toLowerCase()), void 0 !== r && (i[n] = r);
            return i
        }, staticRules: function(t) {
            var n = {}, r = e.data(t.form, "validator");
            return r.settings.rules && (n = e.validator.normalizeRule(r.settings.rules[t.name]) || {}), n
        }, normalizeRules: function(t, n) {
            return e.each(t, function(r, i) {
                if (i === !1)
                    return void delete t[r];
                if (i.param || i.depends) {
                    var o = !0;
                    switch (typeof i.depends) {
                        case"string":
                            o = !!e(i.depends, n.form).length;
                            break;
                        case"function":
                            o = i.depends.call(n, n)
                    }
                    o ? t[r] = void 0 !== i.param ? i.param : !0 : delete t[r]
                }
            }), e.each(t, function(r, i) {
                t[r] = e.isFunction(i) ? i(n) : i
            }), e.each(["minlength", "maxlength"], function() {
                t[this] && (t[this] = Number(t[this]))
            }), e.each(["rangelength", "range"], function() {
                var n;
                t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]))
            }), e.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
        }, normalizeRule: function(t) {
            if ("string" == typeof t) {
                var n = {};
                e.each(t.split(/\s/), function() {
                    n[this] = !0
                }), t = n
            }
            return t
        }, addMethod: function(t, n, r) {
            e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== r ? r : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
        }, methods: {required: function(t, n, r) {
                if (!this.depend(r, n))
                    return"dependency-mismatch";
                if ("select" === n.nodeName.toLowerCase()) {
                    var i = e(n).val();
                    return i && i.length > 0
                }
                return this.checkable(n) ? this.getLength(t, n) > 0 : e.trim(t).length > 0
            }, email: function(e, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
            }, url: function(e, t) {
                return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)
            }, date: function(e, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
            }, dateISO: function(e, t) {
                return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e)
            }, number: function(e, t) {
                return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            }, digits: function(e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            }, creditcard: function(e, t) {
                if (this.optional(t))
                    return"dependency-mismatch";
                if (/[^0-9 \-]+/.test(e))
                    return!1;
                var n, r, i = 0, o = 0, a = !1;
                if (e = e.replace(/\D/g, ""), e.length < 13 || e.length > 19)
                    return!1;
                for (n = e.length - 1; n >= 0; n--)
                    r = e.charAt(n), o = parseInt(r, 10), a && (o *= 2) > 9 && (o -= 9), i += o, a = !a;
                return i % 10 === 0
            }, minlength: function(t, n, r) {
                var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                return this.optional(n) || i >= r
            }, maxlength: function(t, n, r) {
                var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                return this.optional(n) || r >= i
            }, rangelength: function(t, n, r) {
                var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                return this.optional(n) || i >= r[0] && i <= r[1]
            }, min: function(e, t, n) {
                return this.optional(t) || e >= n
            }, max: function(e, t, n) {
                return this.optional(t) || n >= e
            }, range: function(e, t, n) {
                return this.optional(t) || e >= n[0] && e <= n[1]
            }, equalTo: function(t, n, r) {
                var i = e(r);
                return this.settings.onfocusout && i.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    e(n).valid()
                }), t === i.val()
            }, remote: function(t, n, r) {
                if (this.optional(n))
                    return"dependency-mismatch";
                var i, o, a = this.previousValue(n);
                return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), a.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = a.message, r = "string" == typeof r && {url: r} || r, a.old === t ? a.valid : (a.old = t, i = this, this.startRequest(n), o = {}, o[n.name] = t, e.ajax(e.extend(!0, {url: r, mode: "abort", port: "validate" + n.name, dataType: "json", data: o, context: i.currentForm, success: function(r) {
                        var o, s, u, l = r === !0 || "true" === r;
                        i.settings.messages[n.name].remote = a.originalMessage, l ? (u = i.formSubmitted, i.prepareElement(n), i.formSubmitted = u, i.successList.push(n), delete i.invalid[n.name], i.showErrors()) : (o = {}, s = r || i.defaultMessage(n, "remote"), o[n.name] = a.message = e.isFunction(s) ? s(t) : s, i.invalid[n.name] = !0, i.showErrors(o)), a.valid = l, i.stopRequest(n, l)
                    }}, r)), "pending")
            }}}), e.format = function() {
        throw"$.format has been deprecated. Please use $.validator.format instead."
    }
}(jQuery), function(e) {
    var t, n = {};
    e.ajaxPrefilter ? e.ajaxPrefilter(function(e, t, r) {
        var i = e.port;
        "abort" === e.mode && (n[i] && n[i].abort(), n[i] = r)
    }) : (t = e.ajax, e.ajax = function(r) {
        var i = ("mode"in r ? r : e.ajaxSettings).mode, o = ("port"in r ? r : e.ajaxSettings).port;
        return"abort" === i ? (n[o] && n[o].abort(), n[o] = t.apply(this, arguments), n[o]) : t.apply(this, arguments)
    })
}(jQuery), function(e) {
    e.extend(e.fn, {validateDelegate: function(t, n, r) {
            return this.bind(n, function(n) {
                var i = e(n.target);
                return i.is(t) ? r.apply(i, arguments) : void 0
            })
        }})
}(jQuery);
"function" != typeof Object.create && (Object.create = function(e) {
    function t() {
    }
    return t.prototype = e, new t
}), function(e, t, n) {
    var i = {init: function(t, n) {
            var i = this;
            i.$elem = e(n), i.options = e.extend({}, e.fn.owlCarousel.options, i.$elem.data(), t), i.userOptions = t, i.loadContent()
        }, loadContent: function() {
            function t(e) {
                var t, n = "";
                if ("function" == typeof i.options.jsonSuccess)
                    i.options.jsonSuccess.apply(this, [e]);
                else {
                    for (t in e.owl)
                        e.owl.hasOwnProperty(t) && (n += e.owl[t].item);
                    i.$elem.html(n)
                }
                i.logIn()
            }
            var n, i = this;
            "function" == typeof i.options.beforeInit && i.options.beforeInit.apply(this, [i.$elem]), "string" == typeof i.options.jsonPath ? (n = i.options.jsonPath, e.getJSON(n, t)) : i.logIn()
        }, logIn: function() {
            var e = this;
            e.$elem.data("owl-originalStyles", e.$elem.attr("style")).data("owl-originalClasses", e.$elem.attr("class")), e.$elem.css({opacity: 0}), e.orignalItems = e.options.items, e.checkBrowser(), e.wrapperWidth = 0, e.checkVisible = null, e.setVars()
        }, setVars: function() {
            var e = this;
            return 0 === e.$elem.children().length ? !1 : (e.baseClass(), e.eventTypes(), e.$userItems = e.$elem.children(), e.itemsAmount = e.$userItems.length, e.wrapItems(), e.$owlItems = e.$elem.find(".owl-item"), e.$owlWrapper = e.$elem.find(".owl-wrapper"), e.playDirection = "next", e.prevItem = 0, e.prevArr = [0], e.currentItem = 0, e.customEvents(), void e.onStartup())
        }, onStartup: function() {
            var e = this;
            e.updateItems(), e.calculateAll(), e.buildControls(), e.updateControls(), e.response(), e.moveEvents(), e.stopOnHover(), e.owlStatus(), e.options.transitionStyle !== !1 && e.transitionTypes(e.options.transitionStyle), e.options.autoPlay === !0 && (e.options.autoPlay = 5e3), e.play(), e.$elem.find(".owl-wrapper").css("display", "block"), e.$elem.is(":visible") ? e.$elem.css("opacity", 1) : e.watchVisibility(), e.onstartup = !1, e.eachMoveUpdate(), "function" == typeof e.options.afterInit && e.options.afterInit.apply(this, [e.$elem])
        }, eachMoveUpdate: function() {
            var e = this;
            e.options.lazyLoad === !0 && e.lazyLoad(), e.options.autoHeight === !0 && e.autoHeight(), e.onVisibleItems(), "function" == typeof e.options.afterAction && e.options.afterAction.apply(this, [e.$elem])
        }, updateVars: function() {
            var e = this;
            "function" == typeof e.options.beforeUpdate && e.options.beforeUpdate.apply(this, [e.$elem]), e.watchVisibility(), e.updateItems(), e.calculateAll(), e.updatePosition(), e.updateControls(), e.eachMoveUpdate(), "function" == typeof e.options.afterUpdate && e.options.afterUpdate.apply(this, [e.$elem])
        }, reload: function() {
            var e = this;
            t.setTimeout(function() {
                e.updateVars()
            }, 0)
        }, watchVisibility: function() {
            var e = this;
            return e.$elem.is(":visible") !== !1 ? !1 : (e.$elem.css({opacity: 0}), t.clearInterval(e.autoPlayInterval), t.clearInterval(e.checkVisible), void(e.checkVisible = t.setInterval(function() {
                e.$elem.is(":visible") && (e.reload(), e.$elem.animate({opacity: 1}, 200), t.clearInterval(e.checkVisible))
            }, 500)))
        }, wrapItems: function() {
            var e = this;
            e.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), e.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), e.wrapperOuter = e.$elem.find(".owl-wrapper-outer"), e.$elem.css("display", "block")
        }, baseClass: function() {
            var e = this, t = e.$elem.hasClass(e.options.baseClass), n = e.$elem.hasClass(e.options.theme);
            t || e.$elem.addClass(e.options.baseClass), n || e.$elem.addClass(e.options.theme)
        }, updateItems: function() {
            var t, n, i = this;
            if (i.options.responsive === !1)
                return!1;
            if (i.options.singleItem === !0)
                return i.options.items = i.orignalItems = 1, i.options.itemsCustom = !1, i.options.itemsDesktop = !1, i.options.itemsDesktopSmall = !1, i.options.itemsTablet = !1, i.options.itemsTabletSmall = !1, i.options.itemsMobile = !1, !1;
            if (t = e(i.options.responsiveBaseWidth).width(), t > (i.options.itemsDesktop[0] || i.orignalItems) && (i.options.items = i.orignalItems), i.options.itemsCustom !== !1)
                for (i.options.itemsCustom.sort(function(e, t) {
                    return e[0] - t[0]
                }), n = 0; n < i.options.itemsCustom.length; n += 1)
                    i.options.itemsCustom[n][0] <= t && (i.options.items = i.options.itemsCustom[n][1]);
            else
                t <= i.options.itemsDesktop[0] && i.options.itemsDesktop !== !1 && (i.options.items = i.options.itemsDesktop[1]), t <= i.options.itemsDesktopSmall[0] && i.options.itemsDesktopSmall !== !1 && (i.options.items = i.options.itemsDesktopSmall[1]), t <= i.options.itemsTablet[0] && i.options.itemsTablet !== !1 && (i.options.items = i.options.itemsTablet[1]), t <= i.options.itemsTabletSmall[0] && i.options.itemsTabletSmall !== !1 && (i.options.items = i.options.itemsTabletSmall[1]), t <= i.options.itemsMobile[0] && i.options.itemsMobile !== !1 && (i.options.items = i.options.itemsMobile[1]);
            i.options.items > i.itemsAmount && i.options.itemsScaleUp === !0 && (i.options.items = i.itemsAmount)
        }, response: function() {
            var n, i, r = this;
            return r.options.responsive !== !0 ? !1 : (i = e(t).width(), r.resizer = function() {
                e(t).width() !== i && (r.options.autoPlay !== !1 && t.clearInterval(r.autoPlayInterval), t.clearTimeout(n), n = t.setTimeout(function() {
                    i = e(t).width(), r.updateVars()
                }, r.options.responsiveRefreshRate))
            }, void e(t).resize(r.resizer))
        }, updatePosition: function() {
            var e = this;
            e.jumpTo(e.currentItem), e.options.autoPlay !== !1 && e.checkAp()
        }, appendItemsSizes: function() {
            var t = this, n = 0, i = t.itemsAmount - t.options.items;
            t.$owlItems.each(function(r) {
                var o = e(this);
                o.css({width: t.itemWidth}).data("owl-item", Number(r)), (r % t.options.items === 0 || r === i) && (r > i || (n += 1)), o.data("owl-roundPages", n)
            })
        }, appendWrapperSizes: function() {
            var e = this, t = e.$owlItems.length * e.itemWidth;
            e.$owlWrapper.css({width: 2 * t, left: 0}), e.appendItemsSizes()
        }, calculateAll: function() {
            var e = this;
            e.calculateWidth(), e.appendWrapperSizes(), e.loops(), e.max()
        }, calculateWidth: function() {
            var e = this;
            e.itemWidth = Math.round(e.$elem.width() / e.options.items)
        }, max: function() {
            var e = this, t = -1 * (e.itemsAmount * e.itemWidth - e.options.items * e.itemWidth);
            return e.options.items > e.itemsAmount ? (e.maximumItem = 0, t = 0, e.maximumPixels = 0) : (e.maximumItem = e.itemsAmount - e.options.items, e.maximumPixels = t), t
        }, min: function() {
            return 0
        }, loops: function() {
            var t, n, i, r = this, o = 0, s = 0;
            for (r.positionsInArray = [0], r.pagesInArray = [], t = 0; t < r.itemsAmount; t += 1)
                s += r.itemWidth, r.positionsInArray.push(-s), r.options.scrollPerPage === !0 && (n = e(r.$owlItems[t]), i = n.data("owl-roundPages"), i !== o && (r.pagesInArray[o] = r.positionsInArray[t], o = i))
        }, buildControls: function() {
            var t = this;
            (t.options.navigation === !0 || t.options.pagination === !0) && (t.owlControls = e('<div class="owl-controls"/>').toggleClass("clickable", !t.browser.isTouch).appendTo(t.$elem)), t.options.pagination === !0 && t.buildPagination(), t.options.navigation === !0 && t.buildButtons()
        }, buildButtons: function() {
            var t = this, n = e('<div class="owl-buttons"/>');
            t.owlControls.append(n), t.buttonPrev = e("<div/>", {"class": "owl-prev", html: t.options.navigationText[0] || ""}), t.buttonNext = e("<div/>", {"class": "owl-next", html: t.options.navigationText[1] || ""}), n.append(t.buttonPrev).append(t.buttonNext), n.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(e) {
                e.preventDefault()
            }), n.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(n) {
                n.preventDefault(), e(this).hasClass("owl-next") ? t.next() : t.prev()
            })
        }, buildPagination: function() {
            var t = this;
            t.paginationWrapper = e('<div class="owl-pagination"/>'), t.owlControls.append(t.paginationWrapper), t.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(n) {
                n.preventDefault(), Number(e(this).data("owl-page")) !== t.currentItem && t.goTo(Number(e(this).data("owl-page")), !0)
            })
        }, updatePagination: function() {
            var t, n, i, r, o, s, a = this;
            if (a.options.pagination === !1)
                return!1;
            for (a.paginationWrapper.html(""), t = 0, n = a.itemsAmount - a.itemsAmount % a.options.items, r = 0; r < a.itemsAmount; r += 1)
                r % a.options.items === 0 && (t += 1, n === r && (i = a.itemsAmount - a.options.items), o = e("<div/>", {"class": "owl-page"}), s = e("<span></span>", {text: a.options.paginationNumbers === !0 ? t : "", "class": a.options.paginationNumbers === !0 ? "owl-numbers" : ""}), o.append(s), o.data("owl-page", n === r ? i : r), o.data("owl-roundPages", t), a.paginationWrapper.append(o));
            a.checkPagination()
        }, checkPagination: function() {
            var t = this;
            return t.options.pagination === !1 ? !1 : void t.paginationWrapper.find(".owl-page").each(function() {
                e(this).data("owl-roundPages") === e(t.$owlItems[t.currentItem]).data("owl-roundPages") && (t.paginationWrapper.find(".owl-page").removeClass("active"), e(this).addClass("active"))
            })
        }, checkNavigation: function() {
            var e = this;
            return e.options.navigation === !1 ? !1 : void(e.options.rewindNav === !1 && (0 === e.currentItem && 0 === e.maximumItem ? (e.buttonPrev.addClass("disabled"), e.buttonNext.addClass("disabled")) : 0 === e.currentItem && 0 !== e.maximumItem ? (e.buttonPrev.addClass("disabled"), e.buttonNext.removeClass("disabled")) : e.currentItem === e.maximumItem ? (e.buttonPrev.removeClass("disabled"), e.buttonNext.addClass("disabled")) : 0 !== e.currentItem && e.currentItem !== e.maximumItem && (e.buttonPrev.removeClass("disabled"), e.buttonNext.removeClass("disabled"))))
        }, updateControls: function() {
            var e = this;
            e.updatePagination(), e.checkNavigation(), e.owlControls && (e.options.items >= e.itemsAmount ? e.owlControls.hide() : e.owlControls.show())
        }, destroyControls: function() {
            var e = this;
            e.owlControls && e.owlControls.remove()
        }, next: function(e) {
            var t = this;
            if (t.isTransition)
                return!1;
            if (t.currentItem += t.options.scrollPerPage === !0 ? t.options.items : 1, t.currentItem > t.maximumItem + (t.options.scrollPerPage === !0 ? t.options.items - 1 : 0)) {
                if (t.options.rewindNav !== !0)
                    return t.currentItem = t.maximumItem, !1;
                t.currentItem = 0, e = "rewind"
            }
            t.goTo(t.currentItem, e)
        }, prev: function(e) {
            var t = this;
            if (t.isTransition)
                return!1;
            if (t.options.scrollPerPage === !0 && t.currentItem > 0 && t.currentItem < t.options.items ? t.currentItem = 0 : t.currentItem -= t.options.scrollPerPage === !0 ? t.options.items : 1, t.currentItem < 0) {
                if (t.options.rewindNav !== !0)
                    return t.currentItem = 0, !1;
                t.currentItem = t.maximumItem, e = "rewind"
            }
            t.goTo(t.currentItem, e)
        }, goTo: function(e, n, i) {
            var r, o = this;
            return o.isTransition ? !1 : ("function" == typeof o.options.beforeMove && o.options.beforeMove.apply(this, [o.$elem]), e >= o.maximumItem ? e = o.maximumItem : 0 >= e && (e = 0), o.currentItem = o.owl.currentItem = e, o.options.transitionStyle !== !1 && "drag" !== i && 1 === o.options.items && o.browser.support3d === !0 ? (o.swapSpeed(0), o.browser.support3d === !0 ? o.transition3d(o.positionsInArray[e]) : o.css2slide(o.positionsInArray[e], 1), o.afterGo(), o.singleItemTransition(), !1) : (r = o.positionsInArray[e], o.browser.support3d === !0 ? (o.isCss3Finish = !1, n === !0 ? (o.swapSpeed("paginationSpeed"), t.setTimeout(function() {
                o.isCss3Finish = !0
            }, o.options.paginationSpeed)) : "rewind" === n ? (o.swapSpeed(o.options.rewindSpeed), t.setTimeout(function() {
                o.isCss3Finish = !0
            }, o.options.rewindSpeed)) : (o.swapSpeed("slideSpeed"), t.setTimeout(function() {
                o.isCss3Finish = !0
            }, o.options.slideSpeed)), o.transition3d(r)) : n === !0 ? o.css2slide(r, o.options.paginationSpeed) : "rewind" === n ? o.css2slide(r, o.options.rewindSpeed) : o.css2slide(r, o.options.slideSpeed), void o.afterGo()))
        }, jumpTo: function(e) {
            var t = this;
            "function" == typeof t.options.beforeMove && t.options.beforeMove.apply(this, [t.$elem]), e >= t.maximumItem || -1 === e ? e = t.maximumItem : 0 >= e && (e = 0), t.swapSpeed(0), t.browser.support3d === !0 ? t.transition3d(t.positionsInArray[e]) : t.css2slide(t.positionsInArray[e], 1), t.currentItem = t.owl.currentItem = e, t.afterGo()
        }, afterGo: function() {
            var e = this;
            e.prevArr.push(e.currentItem), e.prevItem = e.owl.prevItem = e.prevArr[e.prevArr.length - 2], e.prevArr.shift(0), e.prevItem !== e.currentItem && (e.checkPagination(), e.checkNavigation(), e.eachMoveUpdate(), e.options.autoPlay !== !1 && e.checkAp()), "function" == typeof e.options.afterMove && e.prevItem !== e.currentItem && e.options.afterMove.apply(this, [e.$elem])
        }, stop: function() {
            var e = this;
            e.apStatus = "stop", t.clearInterval(e.autoPlayInterval)
        }, checkAp: function() {
            var e = this;
            "stop" !== e.apStatus && e.play()
        }, play: function() {
            var e = this;
            return e.apStatus = "play", e.options.autoPlay === !1 ? !1 : (t.clearInterval(e.autoPlayInterval), void(e.autoPlayInterval = t.setInterval(function() {
                e.next(!0)
            }, e.options.autoPlay)))
        }, swapSpeed: function(e) {
            var t = this;
            "slideSpeed" === e ? t.$owlWrapper.css(t.addCssSpeed(t.options.slideSpeed)) : "paginationSpeed" === e ? t.$owlWrapper.css(t.addCssSpeed(t.options.paginationSpeed)) : "string" != typeof e && t.$owlWrapper.css(t.addCssSpeed(e))
        }, addCssSpeed: function(e) {
            return{"-webkit-transition": "all " + e + "ms ease", "-moz-transition": "all " + e + "ms ease", "-o-transition": "all " + e + "ms ease", transition: "all " + e + "ms ease"}
        }, removeTransition: function() {
            return{"-webkit-transition": "", "-moz-transition": "", "-o-transition": "", transition: ""}
        }, doTranslate: function(e) {
            return{"-webkit-transform": "translate3d(" + e + "px, 0px, 0px)", "-moz-transform": "translate3d(" + e + "px, 0px, 0px)", "-o-transform": "translate3d(" + e + "px, 0px, 0px)", "-ms-transform": "translate3d(" + e + "px, 0px, 0px)", transform: "translate3d(" + e + "px, 0px,0px)"}
        }, transition3d: function(e) {
            var t = this;
            t.$owlWrapper.css(t.doTranslate(e))
        }, css2move: function(e) {
            var t = this;
            t.$owlWrapper.css({left: e})
        }, css2slide: function(e, t) {
            var n = this;
            n.isCssFinish = !1, n.$owlWrapper.stop(!0, !0).animate({left: e}, {duration: t || n.options.slideSpeed, complete: function() {
                    n.isCssFinish = !0
                }})
        }, checkBrowser: function() {
            var e, i, r, o, s = this, a = "translate3d(0px, 0px, 0px)", l = n.createElement("div");
            l.style.cssText = "  -moz-transform:" + a + "; -ms-transform:" + a + "; -o-transform:" + a + "; -webkit-transform:" + a + "; transform:" + a, e = /translate3d\(0px, 0px, 0px\)/g, i = l.style.cssText.match(e), r = null !== i && 1 === i.length, o = "ontouchstart"in t || t.navigator.msMaxTouchPoints, s.browser = {support3d: r, isTouch: o}
        }, moveEvents: function() {
            var e = this;
            (e.options.mouseDrag !== !1 || e.options.touchDrag !== !1) && (e.gestures(), e.disabledEvents())
        }, eventTypes: function() {
            var e = this, t = ["s", "e", "x"];
            e.ev_types = {}, e.options.mouseDrag === !0 && e.options.touchDrag === !0 ? t = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : e.options.mouseDrag === !1 && e.options.touchDrag === !0 ? t = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : e.options.mouseDrag === !0 && e.options.touchDrag === !1 && (t = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), e.ev_types.start = t[0], e.ev_types.move = t[1], e.ev_types.end = t[2]
        }, disabledEvents: function() {
            var t = this;
            t.$elem.on("dragstart.owl", function(e) {
                e.preventDefault()
            }), t.$elem.on("mousedown.disableTextSelect", function(t) {
                return e(t.target).is("input, textarea, select, option")
            })
        }, gestures: function() {
            function i(e) {
                if (void 0 !== e.touches)
                    return{x: e.touches[0].pageX, y: e.touches[0].pageY};
                if (void 0 === e.touches) {
                    if (void 0 !== e.pageX)
                        return{x: e.pageX, y: e.pageY};
                    if (void 0 === e.pageX)
                        return{x: e.clientX, y: e.clientY}
                }
            }
            function r(t) {
                "on" === t ? (e(n).on(l.ev_types.move, s), e(n).on(l.ev_types.end, a)) : "off" === t && (e(n).off(l.ev_types.move), e(n).off(l.ev_types.end))
            }
            function o(n) {
                var o, s = n.originalEvent || n || t.event;
                if (3 === s.which)
                    return!1;
                if (!(l.itemsAmount <= l.options.items)) {
                    if (l.isCssFinish === !1 && !l.options.dragBeforeAnimFinish)
                        return!1;
                    if (l.isCss3Finish === !1 && !l.options.dragBeforeAnimFinish)
                        return!1;
                    l.options.autoPlay !== !1 && t.clearInterval(l.autoPlayInterval), l.browser.isTouch === !0 || l.$owlWrapper.hasClass("grabbing") || l.$owlWrapper.addClass("grabbing"), l.newPosX = 0, l.newRelativeX = 0, e(this).css(l.removeTransition()), o = e(this).position(), u.relativePos = o.left, u.offsetX = i(s).x - o.left, u.offsetY = i(s).y - o.top, r("on"), u.sliding = !1, u.targetElement = s.target || s.srcElement
                }
            }
            function s(r) {
                var o, s, a = r.originalEvent || r || t.event;
                l.newPosX = i(a).x - u.offsetX, l.newPosY = i(a).y - u.offsetY, l.newRelativeX = l.newPosX - u.relativePos, "function" == typeof l.options.startDragging && u.dragging !== !0 && 0 !== l.newRelativeX && (u.dragging = !0, l.options.startDragging.apply(l, [l.$elem])), (l.newRelativeX > 8 || l.newRelativeX < -8) && l.browser.isTouch === !0 && (void 0 !== a.preventDefault ? a.preventDefault() : a.returnValue = !1, u.sliding = !0), (l.newPosY > 10 || l.newPosY < -10) && u.sliding === !1 && e(n).off("touchmove.owl"), o = function() {
                    return l.newRelativeX / 5
                }, s = function() {
                    return l.maximumPixels + l.newRelativeX / 5
                }, l.newPosX = Math.max(Math.min(l.newPosX, o()), s()), l.browser.support3d === !0 ? l.transition3d(l.newPosX) : l.css2move(l.newPosX)
            }
            function a(n) {
                var i, o, s, a = n.originalEvent || n || t.event;
                a.target = a.target || a.srcElement, u.dragging = !1, l.browser.isTouch !== !0 && l.$owlWrapper.removeClass("grabbing"), l.dragDirection = l.owl.dragDirection = l.newRelativeX < 0 ? "left" : "right", 0 !== l.newRelativeX && (i = l.getNewPosition(), l.goTo(i, !1, "drag"), u.targetElement === a.target && l.browser.isTouch !== !0 && (e(a.target).on("click.disable", function(t) {
                    t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault(), e(t.target).off("click.disable")
                }), o = e._data(a.target, "events").click, s = o.pop(), o.splice(0, 0, s))), r("off")
            }
            var l = this, u = {offsetX: 0, offsetY: 0, baseElWidth: 0, relativePos: 0, position: null, minSwipe: null, maxSwipe: null, sliding: null, dargging: null, targetElement: null};
            l.isCssFinish = !0, l.$elem.on(l.ev_types.start, ".owl-wrapper", o)
        }, getNewPosition: function() {
            var e = this, t = e.closestItem();
            return t > e.maximumItem ? (e.currentItem = e.maximumItem, t = e.maximumItem) : e.newPosX >= 0 && (t = 0, e.currentItem = 0), t
        }, closestItem: function() {
            var t = this, n = t.options.scrollPerPage === !0 ? t.pagesInArray : t.positionsInArray, i = t.newPosX, r = null;
            return e.each(n, function(o, s) {
                i - t.itemWidth / 20 > n[o + 1] && i - t.itemWidth / 20 < s && "left" === t.moveDirection() ? (r = s, t.currentItem = t.options.scrollPerPage === !0 ? e.inArray(r, t.positionsInArray) : o) : i + t.itemWidth / 20 < s && i + t.itemWidth / 20 > (n[o + 1] || n[o] - t.itemWidth) && "right" === t.moveDirection() && (t.options.scrollPerPage === !0 ? (r = n[o + 1] || n[n.length - 1], t.currentItem = e.inArray(r, t.positionsInArray)) : (r = n[o + 1], t.currentItem = o + 1))
            }), t.currentItem
        }, moveDirection: function() {
            var e, t = this;
            return t.newRelativeX < 0 ? (e = "right", t.playDirection = "next") : (e = "left", t.playDirection = "prev"), e
        }, customEvents: function() {
            var e = this;
            e.$elem.on("owl.next", function() {
                e.next()
            }), e.$elem.on("owl.prev", function() {
                e.prev()
            }), e.$elem.on("owl.play", function(t, n) {
                e.options.autoPlay = n, e.play(), e.hoverStatus = "play"
            }), e.$elem.on("owl.stop", function() {
                e.stop(), e.hoverStatus = "stop"
            }), e.$elem.on("owl.goTo", function(t, n) {
                e.goTo(n)
            }), e.$elem.on("owl.jumpTo", function(t, n) {
                e.jumpTo(n)
            })
        }, stopOnHover: function() {
            var e = this;
            e.options.stopOnHover === !0 && e.browser.isTouch !== !0 && e.options.autoPlay !== !1 && (e.$elem.on("mouseover", function() {
                e.stop()
            }), e.$elem.on("mouseout", function() {
                "stop" !== e.hoverStatus && e.play()
            }))
        }, lazyLoad: function() {
            var t, n, i, r, o, s = this;
            if (s.options.lazyLoad === !1)
                return!1;
            for (t = 0; t < s.itemsAmount; t += 1)
                n = e(s.$owlItems[t]), "loaded" !== n.data("owl-loaded") && (i = n.data("owl-item"), r = n.find(".lazyOwl"), "string" == typeof r.data("src") ? (void 0 === n.data("owl-loaded") && (r.hide(), n.addClass("loading").data("owl-loaded", "checked")), o = s.options.lazyFollow === !0 ? i >= s.currentItem : !0, o && i < s.currentItem + s.options.items && r.length && s.lazyPreload(n, r)) : n.data("owl-loaded", "loaded"))
        }, lazyPreload: function(e, n) {
            function i() {
                e.data("owl-loaded", "loaded").removeClass("loading"), n.removeAttr("data-src"), "fade" === s.options.lazyEffect ? n.fadeIn(400) : n.show(), "function" == typeof s.options.afterLazyLoad && s.options.afterLazyLoad.apply(this, [s.$elem])
            }
            function r() {
                a += 1, s.completeImg(n.get(0)) || o === !0 ? i() : 100 >= a ? t.setTimeout(r, 100) : i()
            }
            var o, s = this, a = 0;
            "DIV" === n.prop("tagName") ? (n.css("background-image", "url(" + n.data("src") + ")"), o = !0) : n[0].src = n.data("src"), r()
        }, autoHeight: function() {
            function n() {
                var n = e(o.$owlItems[o.currentItem]).height();
                o.wrapperOuter.css("height", n + "px"), o.wrapperOuter.hasClass("autoHeight") || t.setTimeout(function() {
                    o.wrapperOuter.addClass("autoHeight")
                }, 0)
            }
            function i() {
                r += 1, o.completeImg(s.get(0)) ? n() : 100 >= r ? t.setTimeout(i, 100) : o.wrapperOuter.css("height", "")
            }
            var r, o = this, s = e(o.$owlItems[o.currentItem]).find("img");
            void 0 !== s.get(0) ? (r = 0, i()) : n()
        }, completeImg: function(e) {
            var t;
            return e.complete ? (t = typeof e.naturalWidth, "undefined" !== t && 0 === e.naturalWidth ? !1 : !0) : !1
        }, onVisibleItems: function() {
            var t, n = this;
            for (n.options.addClassActive === !0 && n.$owlItems.removeClass("active"), n.visibleItems = [], t = n.currentItem; t < n.currentItem + n.options.items; t += 1)
                n.visibleItems.push(t), n.options.addClassActive === !0 && e(n.$owlItems[t]).addClass("active");
            n.owl.visibleItems = n.visibleItems
        }, transitionTypes: function(e) {
            var t = this;
            t.outClass = "owl-" + e + "-out", t.inClass = "owl-" + e + "-in"
        }, singleItemTransition: function() {
            function e(e) {
                return{position: "relative", left: e + "px"}
            }
            var t = this, n = t.outClass, i = t.inClass, r = t.$owlItems.eq(t.currentItem), o = t.$owlItems.eq(t.prevItem), s = Math.abs(t.positionsInArray[t.currentItem]) + t.positionsInArray[t.prevItem], a = Math.abs(t.positionsInArray[t.currentItem]) + t.itemWidth / 2, l = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
            t.isTransition = !0, t.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin": a + "px", "-moz-perspective-origin": a + "px", "perspective-origin": a + "px"}), o.css(e(s, 10)).addClass(n).on(l, function() {
                t.endPrev = !0, o.off(l), t.clearTransStyle(o, n)
            }), r.addClass(i).on(l, function() {
                t.endCurrent = !0, r.off(l), t.clearTransStyle(r, i)
            })
        }, clearTransStyle: function(e, t) {
            var n = this;
            e.css({position: "", left: ""}).removeClass(t), n.endPrev && n.endCurrent && (n.$owlWrapper.removeClass("owl-origin"), n.endPrev = !1, n.endCurrent = !1, n.isTransition = !1)
        }, owlStatus: function() {
            var e = this;
            e.owl = {userOptions: e.userOptions, baseElement: e.$elem, userItems: e.$userItems, owlItems: e.$owlItems, currentItem: e.currentItem, prevItem: e.prevItem, visibleItems: e.visibleItems, isTouch: e.browser.isTouch, browser: e.browser, dragDirection: e.dragDirection}
        }, clearEvents: function() {
            var i = this;
            i.$elem.off(".owl owl mousedown.disableTextSelect"), e(n).off(".owl owl"), e(t).off("resize", i.resizer)
        }, unWrap: function() {
            var e = this;
            0 !== e.$elem.children().length && (e.$owlWrapper.unwrap(), e.$userItems.unwrap().unwrap(), e.owlControls && e.owlControls.remove()), e.clearEvents(), e.$elem.attr("style", e.$elem.data("owl-originalStyles") || "").attr("class", e.$elem.data("owl-originalClasses"))
        }, destroy: function() {
            var e = this;
            e.stop(), t.clearInterval(e.checkVisible), e.unWrap(), e.$elem.removeData()
        }, reinit: function(t) {
            var n = this, i = e.extend({}, n.userOptions, t);
            n.unWrap(), n.init(i, n.$elem)
        }, addItem: function(e, t) {
            var n, i = this;
            return e ? 0 === i.$elem.children().length ? (i.$elem.append(e), i.setVars(), !1) : (i.unWrap(), n = void 0 === t || -1 === t ? -1 : t, n >= i.$userItems.length || -1 === n ? i.$userItems.eq(-1).after(e) : i.$userItems.eq(n).before(e), void i.setVars()) : !1
        }, removeItem: function(e) {
            var t, n = this;
            return 0 === n.$elem.children().length ? !1 : (t = void 0 === e || -1 === e ? -1 : e, n.unWrap(), n.$userItems.eq(t).remove(), void n.setVars())
        }};
    e.fn.owlCarousel = function(t) {
        return this.each(function() {
            if (e(this).data("owl-init") === !0)
                return!1;
            e(this).data("owl-init", !0);
            var n = Object.create(i);
            n.init(t, this), e.data(this, "owlCarousel", n)
        })
    }, e.fn.owlCarousel.options = {items: 5, itemsCustom: !1, itemsDesktop: [1199, 4], itemsDesktopSmall: [979, 3], itemsTablet: [768, 2], itemsTabletSmall: !1, itemsMobile: [479, 1], singleItem: !1, itemsScaleUp: !1, slideSpeed: 200, paginationSpeed: 800, rewindSpeed: 1e3, autoPlay: !1, stopOnHover: !1, navigation: !1, navigationText: ["prev", "next"], rewindNav: !0, scrollPerPage: !1, pagination: !0, paginationNumbers: !1, responsive: !0, responsiveRefreshRate: 200, responsiveBaseWidth: t, baseClass: "owl-carousel", theme: "owl-theme", lazyLoad: !1, lazyFollow: !0, lazyEffect: "fade", autoHeight: !1, jsonPath: !1, jsonSuccess: !1, dragBeforeAnimFinish: !0, mouseDrag: !0, touchDrag: !0, addClassActive: !1, transitionStyle: !1, beforeUpdate: !1, afterUpdate: !1, beforeInit: !1, afterInit: !1, beforeMove: !1, afterMove: !1, afterAction: !1, startDragging: !1, afterLazyLoad: !1}
}(jQuery, window, document);