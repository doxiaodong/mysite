/*
 AngularJS v1.4.0-beta.4
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (O, Y, u) {
    'use strict';
    function R(b) {
        return function () {
            var a = arguments[0], c;
            c = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.4.0-beta.4/" + (b ? b + "/" : "") + a;
            for (a = 1; a < arguments.length; a++) {
                c = c + (1 == a ? "?" : "&") + "p" + (a - 1) + "=";
                var d = encodeURIComponent, e;
                e = arguments[a];
                e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;
                c += d(e)
            }
            return Error(c)
        }
    }

    function Oa(b) {
        if (null == b || Pa(b))return !1;
        var a = b.length;
        return b.nodeType ===
        na && a ? !0 : M(b) || J(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b
    }

    function r(b, a, c) {
        var d, e;
        if (b)if (C(b))for (d in b)"prototype" == d || "length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d) || a.call(c, b[d], d, b); else if (J(b) || Oa(b)) {
            var f = "object" !== typeof b;
            d = 0;
            for (e = b.length; d < e; d++)(f || d in b) && a.call(c, b[d], d, b)
        } else if (b.forEach && b.forEach !== r)b.forEach(a, c, b); else for (d in b)b.hasOwnProperty(d) && a.call(c, b[d], d, b);
        return b
    }

    function Jd(b, a, c) {
        for (var d = Object.keys(b).sort(), e = 0; e < d.length; e++)a.call(c,
            b[d[e]], d[e]);
        return d
    }

    function hc(b) {
        return function (a, c) {
            b(c, a)
        }
    }

    function Kd() {
        return ++eb
    }

    function ic(b, a) {
        a ? b.$$hashKey = a : delete b.$$hashKey
    }

    function P(b) {
        for (var a = b.$$hashKey, c = 1, d = arguments.length; c < d; c++) {
            var e = arguments[c];
            if (e)for (var f = Object.keys(e), g = 0, h = f.length; g < h; g++) {
                var l = f[g];
                b[l] = e[l]
            }
        }
        ic(b, a);
        return b
    }

    function ba(b) {
        return parseInt(b, 10)
    }

    function Jb(b, a) {
        return P(Object.create(b), a)
    }

    function D() {
    }

    function Qa(b) {
        return b
    }

    function oa(b) {
        return function () {
            return b
        }
    }

    function H(b) {
        return "undefined" === typeof b
    }

    function w(b) {
        return "undefined" !== typeof b
    }

    function F(b) {
        return null !== b && "object" === typeof b
    }

    function M(b) {
        return "string" === typeof b
    }

    function S(b) {
        return "number" === typeof b
    }

    function pa(b) {
        return "[object Date]" === sa.call(b)
    }

    function C(b) {
        return "function" === typeof b
    }

    function fb(b) {
        return "[object RegExp]" === sa.call(b)
    }

    function Pa(b) {
        return b && b.window === b
    }

    function Ra(b) {
        return b && b.$evalAsync && b.$watch
    }

    function Sa(b) {
        return "boolean" === typeof b
    }

    function jc(b) {
        return !(!b || !(b.nodeName || b.prop &&
        b.attr && b.find))
    }

    function Ld(b) {
        var a = {};
        b = b.split(",");
        var c;
        for (c = 0; c < b.length; c++)a[b[c]] = !0;
        return a
    }

    function ta(b) {
        return G(b.nodeName || b[0] && b[0].nodeName)
    }

    function Ta(b, a) {
        var c = b.indexOf(a);
        0 <= c && b.splice(c, 1);
        return c
    }

    function ua(b, a, c, d) {
        if (Pa(b) || Ra(b))throw Ba("cpws");
        if (kc.test(sa.call(a)))throw Ba("cpta");
        if (a) {
            if (b === a)throw Ba("cpi");
            c = c || [];
            d = d || [];
            if (F(b)) {
                var e = c.indexOf(b);
                if (-1 !== e)return d[e];
                c.push(b);
                d.push(a)
            }
            if (J(b))for (var f = a.length = 0; f < b.length; f++)e = ua(b[f], null, c, d),
            F(b[f]) && (c.push(b[f]), d.push(e)), a.push(e); else {
                var g = a.$$hashKey;
                J(a) ? a.length = 0 : r(a, function (b, c) {
                    delete a[c]
                });
                for (f in b)b.hasOwnProperty(f) && (e = ua(b[f], null, c, d), F(b[f]) && (c.push(b[f]), d.push(e)), a[f] = e);
                ic(a, g)
            }
        } else if (a = b)J(b) ? a = ua(b, [], c, d) : kc.test(sa.call(b)) ? a = new b.constructor(b) : pa(b) ? a = new Date(b.getTime()) : fb(b) ? (a = new RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), a.lastIndex = b.lastIndex) : F(b) && (e = Object.create(Object.getPrototypeOf(b)), a = ua(b, e, c, d));
        return a
    }

    function fa(b, a) {
        if (J(b)) {
            a =
                a || [];
            for (var c = 0, d = b.length; c < d; c++)a[c] = b[c]
        } else if (F(b))for (c in a = a || {}, b)if ("$" !== c.charAt(0) || "$" !== c.charAt(1))a[c] = b[c];
        return a || b
    }

    function ka(b, a) {
        if (b === a)return !0;
        if (null === b || null === a)return !1;
        if (b !== b && a !== a)return !0;
        var c = typeof b, d;
        if (c == typeof a && "object" == c)if (J(b)) {
            if (!J(a))return !1;
            if ((c = b.length) == a.length) {
                for (d = 0; d < c; d++)if (!ka(b[d], a[d]))return !1;
                return !0
            }
        } else {
            if (pa(b))return pa(a) ? ka(b.getTime(), a.getTime()) : !1;
            if (fb(b) && fb(a))return b.toString() == a.toString();
            if (Ra(b) ||
                Ra(a) || Pa(b) || Pa(a) || J(a))return !1;
            c = {};
            for (d in b)if ("$" !== d.charAt(0) && !C(b[d])) {
                if (!ka(b[d], a[d]))return !1;
                c[d] = !0
            }
            for (d in a)if (!c.hasOwnProperty(d) && "$" !== d.charAt(0) && a[d] !== u && !C(a[d]))return !1;
            return !0
        }
        return !1
    }

    function Ua(b, a, c) {
        return b.concat(Va.call(a, c))
    }

    function lc(b, a) {
        var c = 2 < arguments.length ? Va.call(arguments, 2) : [];
        return !C(a) || a instanceof RegExp ? a : c.length ? function () {
            return arguments.length ? a.apply(b, Ua(c, arguments, 0)) : a.apply(b, c)
        } : function () {
            return arguments.length ? a.apply(b,
                arguments) : a.call(b)
        }
    }

    function Md(b, a) {
        var c = a;
        "string" === typeof b && "$" === b.charAt(0) && "$" === b.charAt(1) ? c = u : Pa(a) ? c = "$WINDOW" : a && Y === a ? c = "$DOCUMENT" : Ra(a) && (c = "$SCOPE");
        return c
    }

    function Wa(b, a) {
        if ("undefined" === typeof b)return u;
        S(a) || (a = a ? 2 : null);
        return JSON.stringify(b, Md, a)
    }

    function mc(b) {
        return M(b) ? JSON.parse(b) : b
    }

    function va(b) {
        b = I(b).clone();
        try {
            b.empty()
        } catch (a) {
        }
        var c = I("<div>").append(b).html();
        try {
            return b[0].nodeType === gb ? G(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a,
                                                                                                           b) {
                return "<" + G(b)
            })
        } catch (d) {
            return G(c)
        }
    }

    function nc(b) {
        try {
            return decodeURIComponent(b)
        } catch (a) {
        }
    }

    function oc(b) {
        var a = {}, c, d;
        r((b || "").split("&"), function (b) {
            b && (c = b.replace(/\+/g, "%20").split("="), d = nc(c[0]), w(d) && (b = w(c[1]) ? nc(c[1]) : !0, pc.call(a, d) ? J(a[d]) ? a[d].push(b) : a[d] = [a[d], b] : a[d] = b))
        });
        return a
    }

    function Kb(b) {
        var a = [];
        r(b, function (b, d) {
            J(b) ? r(b, function (b) {
                a.push(Ca(d, !0) + (!0 === b ? "" : "=" + Ca(b, !0)))
            }) : a.push(Ca(d, !0) + (!0 === b ? "" : "=" + Ca(b, !0)))
        });
        return a.length ? a.join("&") : ""
    }

    function hb(b) {
        return Ca(b,
            !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function Ca(b, a) {
        return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, a ? "%20" : "+")
    }

    function qc(b, a) {
        var c, d, e = Ja.length;
        b = I(b);
        for (d = 0; d < e; ++d)if (c = Ja[d] + a, M(c = b.attr(c)))return c;
        return null
    }

    function Nd(b, a) {
        var c, d, e = {};
        r(Ja, function (a) {
            a += "app";
            !c && b.hasAttribute && b.hasAttribute(a) && (c = b, d = b.getAttribute(a))
        });
        r(Ja, function (a) {
            a += "app";
            var e;
            !c && (e = b.querySelector("[" + a.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(a))
        });
        c && (e.strictDi = null !== qc(c, "strict-di"), a(c, d ? [d] : [], e))
    }

    function rc(b, a, c) {
        F(c) || (c = {});
        c = P({strictDi: !1}, c);
        var d = function () {
            b = I(b);
            if (b.injector()) {
                var d = b[0] === Y ? "document" : va(b);
                throw Ba("btstrpd", d.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            a = a || [];
            a.unshift(["$provide", function (a) {
                a.value("$rootElement", b)
            }]);
            c.debugInfoEnabled && a.push(["$compileProvider", function (a) {
                a.debugInfoEnabled(!0)
            }]);
            a.unshift("ng");
            d = Xa(a, c.strictDi);
            d.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
                a.$apply(function () {
                    b.data("$injector", d);
                    c(b)(a)
                })
            }]);
            return d
        }, e = /^NG_ENABLE_DEBUG_INFO!/, f = /^NG_DEFER_BOOTSTRAP!/;
        O && e.test(O.name) && (c.debugInfoEnabled = !0, O.name = O.name.replace(e, ""));
        if (O && !f.test(O.name))return d();
        O.name = O.name.replace(f, "");
        ca.resumeBootstrap = function (b) {
            r(b, function (b) {
                a.push(b)
            });
            return d()
        };
        C(ca.resumeDeferredBootstrap) && ca.resumeDeferredBootstrap()
    }

    function Od() {
        O.name = "NG_ENABLE_DEBUG_INFO!" +
        O.name;
        O.location.reload()
    }

    function Pd(b) {
        b = ca.element(b).injector();
        if (!b)throw Ba("test");
        return b.get("$$testability")
    }

    function sc(b, a) {
        a = a || "_";
        return b.replace(Qd, function (b, d) {
            return (d ? a : "") + b.toLowerCase()
        })
    }

    function Rd() {
        var b;
        if (!tc) {
            var a = ib();
            la = O.jQuery;
            w(a) && (la = null === a ? u : O[a]);
            la && la.fn.on ? (I = la, P(la.fn, {
                scope: Ka.scope,
                isolateScope: Ka.isolateScope,
                controller: Ka.controller,
                injector: Ka.injector,
                inheritedData: Ka.inheritedData
            }), b = la.cleanData, la.cleanData = function (a) {
                var d;
                if (Lb)Lb = !1;
                else for (var e = 0, f; null != (f = a[e]); e++)(d = la._data(f, "events")) && d.$destroy && la(f).triggerHandler("$destroy");
                b(a)
            }) : I = Q;
            ca.element = I;
            tc = !0
        }
    }

    function Mb(b, a, c) {
        if (!b)throw Ba("areq", a || "?", c || "required");
        return b
    }

    function jb(b, a, c) {
        c && J(b) && (b = b[b.length - 1]);
        Mb(C(b), a, "not a function, got " + (b && "object" === typeof b ? b.constructor.name || "Object" : typeof b));
        return b
    }

    function La(b, a) {
        if ("hasOwnProperty" === b)throw Ba("badname", a);
    }

    function uc(b, a, c) {
        if (!a)return b;
        a = a.split(".");
        for (var d, e = b, f = a.length,
                 g = 0; g < f; g++)d = a[g], b && (b = (e = b)[d]);
        return !c && C(b) ? lc(e, b) : b
    }

    function kb(b) {
        var a = b[0];
        b = b[b.length - 1];
        var c = [a];
        do {
            a = a.nextSibling;
            if (!a)break;
            c.push(a)
        } while (a !== b);
        return I(c)
    }

    function qa() {
        return Object.create(null)
    }

    function Sd(b) {
        function a(a, b, c) {
            return a[b] || (a[b] = c())
        }

        var c = R("$injector"), d = R("ng");
        b = a(b, "angular", Object);
        b.$$minErr = b.$$minErr || R;
        return a(b, "module", function () {
            var b = {};
            return function (f, g, h) {
                if ("hasOwnProperty" === f)throw d("badname", "module");
                g && b.hasOwnProperty(f) && (b[f] =
                    null);
                return a(b, f, function () {
                    function a(c, d, e, f) {
                        f || (f = b);
                        return function () {
                            f[e || "push"]([c, d, arguments]);
                            return s
                        }
                    }

                    if (!g)throw c("nomod", f);
                    var b = [], d = [], e = [], t = a("$injector", "invoke", "push", d), s = {
                        _invokeQueue: b,
                        _configBlocks: d,
                        _runBlocks: e,
                        requires: g,
                        name: f,
                        provider: a("$provide", "provider"),
                        factory: a("$provide", "factory"),
                        service: a("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        animation: a("$animateProvider", "register"),
                        filter: a("$filterProvider",
                            "register"),
                        controller: a("$controllerProvider", "register"),
                        directive: a("$compileProvider", "directive"),
                        config: t,
                        run: function (a) {
                            e.push(a);
                            return this
                        }
                    };
                    h && t(h);
                    return s
                })
            }
        })
    }

    function Td(b) {
        P(b, {
            bootstrap: rc,
            copy: ua,
            extend: P,
            equals: ka,
            element: I,
            forEach: r,
            injector: Xa,
            noop: D,
            bind: lc,
            toJson: Wa,
            fromJson: mc,
            identity: Qa,
            isUndefined: H,
            isDefined: w,
            isString: M,
            isFunction: C,
            isObject: F,
            isNumber: S,
            isElement: jc,
            isArray: J,
            version: Ud,
            isDate: pa,
            lowercase: G,
            uppercase: lb,
            callbacks: {counter: 0},
            getTestability: Pd,
            $$minErr: R,
            $$csp: Ya,
            reloadWithDebugInfo: Od
        });
        Za = Sd(O);
        try {
            Za("ngLocale")
        } catch (a) {
            Za("ngLocale", []).provider("$locale", Vd)
        }
        Za("ng", ["ngLocale"], ["$provide", function (a) {
            a.provider({$$sanitizeUri: Wd});
            a.provider("$compile", vc).directive({
                a: Xd,
                input: wc,
                textarea: wc,
                form: Yd,
                script: Zd,
                select: $d,
                style: ae,
                option: be,
                ngBind: ce,
                ngBindHtml: de,
                ngBindTemplate: ee,
                ngClass: fe,
                ngClassEven: ge,
                ngClassOdd: he,
                ngCloak: ie,
                ngController: je,
                ngForm: ke,
                ngHide: le,
                ngIf: me,
                ngInclude: ne,
                ngInit: oe,
                ngNonBindable: pe,
                ngPluralize: qe,
                ngRepeat: re,
                ngShow: se,
                ngStyle: te,
                ngSwitch: ue,
                ngSwitchWhen: ve,
                ngSwitchDefault: we,
                ngOptions: xe,
                ngTransclude: ye,
                ngModel: ze,
                ngList: Ae,
                ngChange: Be,
                pattern: xc,
                ngPattern: xc,
                required: yc,
                ngRequired: yc,
                minlength: zc,
                ngMinlength: zc,
                maxlength: Ac,
                ngMaxlength: Ac,
                ngValue: Ce,
                ngModelOptions: De
            }).directive({ngInclude: Ee}).directive(mb).directive(Bc);
            a.provider({
                $anchorScroll: Fe,
                $animate: Ge,
                $browser: He,
                $cacheFactory: Ie,
                $controller: Je,
                $document: Ke,
                $exceptionHandler: Le,
                $filter: Cc,
                $interpolate: Me,
                $interval: Ne,
                $http: Oe,
                $httpBackend: Pe,
                $location: Qe,
                $log: Re,
                $parse: Se,
                $rootScope: Te,
                $q: Ue,
                $$q: Ve,
                $sce: We,
                $sceDelegate: Xe,
                $sniffer: Ye,
                $templateCache: Ze,
                $templateRequest: $e,
                $$testability: af,
                $timeout: bf,
                $window: cf,
                $$rAF: df,
                $$asyncCallback: ef,
                $$jqLite: ff
            })
        }])
    }

    function $a(b) {
        return b.replace(gf, function (a, b, d, e) {
            return e ? d.toUpperCase() : d
        }).replace(hf, "Moz$1")
    }

    function Dc(b) {
        b = b.nodeType;
        return b === na || !b || 9 === b
    }

    function Ec(b, a) {
        var c, d, e = a.createDocumentFragment(), f = [];
        if (Nb.test(b)) {
            c = c || e.appendChild(a.createElement("div"));
            d = (jf.exec(b) ||
            ["", ""])[1].toLowerCase();
            d = ga[d] || ga._default;
            c.innerHTML = d[1] + b.replace(kf, "<$1></$2>") + d[2];
            for (d = d[0]; d--;)c = c.lastChild;
            f = Ua(f, c.childNodes);
            c = e.firstChild;
            c.textContent = ""
        } else f.push(a.createTextNode(b));
        e.textContent = "";
        e.innerHTML = "";
        r(f, function (a) {
            e.appendChild(a)
        });
        return e
    }

    function Q(b) {
        if (b instanceof Q)return b;
        var a;
        M(b) && (b = W(b), a = !0);
        if (!(this instanceof Q)) {
            if (a && "<" != b.charAt(0))throw Ob("nosel");
            return new Q(b)
        }
        if (a) {
            a = Y;
            var c;
            b = (c = lf.exec(b)) ? [a.createElement(c[1])] : (c = Ec(b,
                a)) ? c.childNodes : []
        }
        Fc(this, b)
    }

    function Pb(b) {
        return b.cloneNode(!0)
    }

    function nb(b, a) {
        a || ob(b);
        if (b.querySelectorAll)for (var c = b.querySelectorAll("*"), d = 0, e = c.length; d < e; d++)ob(c[d])
    }

    function Gc(b, a, c, d) {
        if (w(d))throw Ob("offargs");
        var e = (d = pb(b)) && d.events, f = d && d.handle;
        if (f)if (a)r(a.split(" "), function (a) {
            if (w(c)) {
                var d = e[a];
                Ta(d || [], c);
                if (d && 0 < d.length)return
            }
            b.removeEventListener(a, f, !1);
            delete e[a]
        }); else for (a in e)"$destroy" !== a && b.removeEventListener(a, f, !1), delete e[a]
    }

    function ob(b, a) {
        var c =
            b.ng339, d = c && qb[c];
        d && (a ? delete d.data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), Gc(b)), delete qb[c], b.ng339 = u))
    }

    function pb(b, a) {
        var c = b.ng339, c = c && qb[c];
        a && !c && (b.ng339 = c = ++mf, c = qb[c] = {events: {}, data: {}, handle: u});
        return c
    }

    function Qb(b, a, c) {
        if (Dc(b)) {
            var d = w(c), e = !d && a && !F(a), f = !a;
            b = (b = pb(b, !e)) && b.data;
            if (d)b[a] = c; else {
                if (f)return b;
                if (e)return b && b[a];
                P(b, a)
            }
        }
    }

    function rb(b, a) {
        return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " +
        a + " ") : !1
    }

    function sb(b, a) {
        a && b.setAttribute && r(a.split(" "), function (a) {
            b.setAttribute("class", W((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + W(a) + " ", " ")))
        })
    }

    function tb(b, a) {
        if (a && b.setAttribute) {
            var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            r(a.split(" "), function (a) {
                a = W(a);
                -1 === c.indexOf(" " + a + " ") && (c += a + " ")
            });
            b.setAttribute("class", W(c))
        }
    }

    function Fc(b, a) {
        if (a)if (a.nodeType)b[b.length++] = a; else {
            var c = a.length;
            if ("number" === typeof c && a.window !==
                a) {
                if (c)for (var d = 0; d < c; d++)b[b.length++] = a[d]
            } else b[b.length++] = a
        }
    }

    function Hc(b, a) {
        return ub(b, "$" + (a || "ngController") + "Controller")
    }

    function ub(b, a, c) {
        9 == b.nodeType && (b = b.documentElement);
        for (a = J(a) ? a : [a]; b;) {
            for (var d = 0, e = a.length; d < e; d++)if ((c = I.data(b, a[d])) !== u)return c;
            b = b.parentNode || 11 === b.nodeType && b.host
        }
    }

    function Ic(b) {
        for (nb(b, !0); b.firstChild;)b.removeChild(b.firstChild)
    }

    function Rb(b, a) {
        a || nb(b);
        var c = b.parentNode;
        c && c.removeChild(b)
    }

    function nf(b, a) {
        a = a || O;
        if ("complete" === a.document.readyState)a.setTimeout(b);
        else I(a).on("load", b)
    }

    function Jc(b, a) {
        var c = vb[a.toLowerCase()];
        return c && Kc[ta(b)] && c
    }

    function of(b, a) {
        var c = b.nodeName;
        return ("INPUT" === c || "TEXTAREA" === c) && Lc[a]
    }

    function pf(b, a) {
        var c = function (c, e) {
            c.isDefaultPrevented = function () {
                return c.defaultPrevented
            };
            var f = a[e || c.type], g = f ? f.length : 0;
            if (g) {
                if (H(c.immediatePropagationStopped)) {
                    var h = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function () {
                        c.immediatePropagationStopped = !0;
                        c.stopPropagation && c.stopPropagation();
                        h && h.call(c)
                    }
                }
                c.isImmediatePropagationStopped =
                    function () {
                        return !0 === c.immediatePropagationStopped
                    };
                1 < g && (f = fa(f));
                for (var l = 0; l < g; l++)c.isImmediatePropagationStopped() || f[l].call(b, c)
            }
        };
        c.elem = b;
        return c
    }

    function ff() {
        this.$get = function () {
            return P(Q, {
                hasClass: function (b, a) {
                    b.attr && (b = b[0]);
                    return rb(b, a)
                }, addClass: function (b, a) {
                    b.attr && (b = b[0]);
                    return tb(b, a)
                }, removeClass: function (b, a) {
                    b.attr && (b = b[0]);
                    return sb(b, a)
                }
            })
        }
    }

    function Da(b, a) {
        var c = b && b.$$hashKey;
        if (c)return "function" === typeof c && (c = b.$$hashKey()), c;
        c = typeof b;
        return c = "function" ==
        c || "object" == c && null !== b ? b.$$hashKey = c + ":" + (a || Kd)() : c + ":" + b
    }

    function wb(b, a) {
        if (a) {
            var c = 0;
            this.nextUid = function () {
                return ++c
            }
        }
        r(b, this.put, this)
    }

    function qf(b) {
        return (b = b.toString().replace(Mc, "").match(Nc)) ? "function(" + (b[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function Xa(b, a) {
        function c(a) {
            return function (b, c) {
                if (F(b))r(b, hc(a)); else return a(b, c)
            }
        }

        function d(a, b) {
            La(a, "service");
            if (C(b) || J(b))b = t.instantiate(b);
            if (!b.$get)throw Ea("pget", a);
            return m[a + "Provider"] = b
        }

        function e(a, b) {
            return function () {
                var c =
                    x.invoke(b, this);
                if (H(c))throw Ea("undef", a);
                return c
            }
        }

        function f(a, b, c) {
            return d(a, {$get: !1 !== c ? e(a, b) : b})
        }

        function g(a) {
            var b = [], c;
            r(a, function (a) {
                function d(a) {
                    var b, c;
                    b = 0;
                    for (c = a.length; b < c; b++) {
                        var e = a[b], f = t.get(e[0]);
                        f[e[1]].apply(f, e[2])
                    }
                }

                if (!n.get(a)) {
                    n.put(a, !0);
                    try {
                        M(a) ? (c = Za(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : C(a) ? b.push(t.invoke(a)) : J(a) ? b.push(t.invoke(a)) : jb(a, "module")
                    } catch (e) {
                        throw J(a) && (a = a[a.length - 1]), e.message && e.stack && -1 ==
                        e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Ea("modulerr", a, e.stack || e.message || e);
                    }
                }
            });
            return b
        }

        function h(b, c) {
            function d(a, e) {
                if (b.hasOwnProperty(a)) {
                    if (b[a] === l)throw Ea("cdep", a + " <- " + k.join(" <- "));
                    return b[a]
                }
                try {
                    return k.unshift(a), b[a] = l, b[a] = c(a, e)
                } catch (f) {
                    throw b[a] === l && delete b[a], f;
                } finally {
                    k.shift()
                }
            }

            function e(b, c, f, h) {
                "string" === typeof f && (h = f, f = null);
                var g = [], k = Xa.$$annotate(b, a, h), l, t, m;
                t = 0;
                for (l = k.length; t < l; t++) {
                    m = k[t];
                    if ("string" !== typeof m)throw Ea("itkn", m);
                    g.push(f &&
                    f.hasOwnProperty(m) ? f[m] : d(m, h))
                }
                J(b) && (b = b[l]);
                return b.apply(c, g)
            }

            return {
                invoke: e, instantiate: function (a, b, c) {
                    var d = Object.create((J(a) ? a[a.length - 1] : a).prototype || null);
                    a = e(a, d, b, c);
                    return F(a) || C(a) ? a : d
                }, get: d, annotate: Xa.$$annotate, has: function (a) {
                    return m.hasOwnProperty(a + "Provider") || b.hasOwnProperty(a)
                }
            }
        }

        a = !0 === a;
        var l = {}, k = [], n = new wb([], !0), m = {
            $provide: {
                provider: c(d), factory: c(f), service: c(function (a, b) {
                    return f(a, ["$injector", function (a) {
                        return a.instantiate(b)
                    }])
                }), value: c(function (a,
                                       b) {
                    return f(a, oa(b), !1)
                }), constant: c(function (a, b) {
                    La(a, "constant");
                    m[a] = b;
                    s[a] = b
                }), decorator: function (a, b) {
                    var c = t.get(a + "Provider"), d = c.$get;
                    c.$get = function () {
                        var a = x.invoke(d, c);
                        return x.invoke(b, null, {$delegate: a})
                    }
                }
            }
        }, t = m.$injector = h(m, function (a, b) {
            ca.isString(b) && k.push(b);
            throw Ea("unpr", k.join(" <- "));
        }), s = {}, x = s.$injector = h(s, function (a, b) {
            var c = t.get(a + "Provider", b);
            return x.invoke(c.$get, c, u, a)
        });
        r(g(b), function (a) {
            x.invoke(a || D)
        });
        return x
    }

    function Fe() {
        var b = !0;
        this.disableAutoScrolling =
            function () {
                b = !1
            };
        this.$get = ["$window", "$location", "$rootScope", function (a, c, d) {
            function e(a) {
                var b = null;
                Array.prototype.some.call(a, function (a) {
                    if ("a" === ta(a))return b = a, !0
                });
                return b
            }

            function f(b) {
                if (b) {
                    b.scrollIntoView();
                    var c;
                    c = g.yOffset;
                    C(c) ? c = c() : jc(c) ? (c = c[0], c = "fixed" !== a.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : S(c) || (c = 0);
                    c && (b = b.getBoundingClientRect().top, a.scrollBy(0, b - c))
                } else a.scrollTo(0, 0)
            }

            function g() {
                var a = c.hash(), b;
                a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ?
                    f(b) : "top" === a && f(null) : f(null)
            }

            var h = a.document;
            b && d.$watch(function () {
                return c.hash()
            }, function (a, b) {
                a === b && "" === a || nf(function () {
                    d.$evalAsync(g)
                })
            });
            return g
        }]
    }

    function ef() {
        this.$get = ["$$rAF", "$timeout", function (b, a) {
            return b.supported ? function (a) {
                return b(a)
            } : function (b) {
                return a(b, 0, !1)
            }
        }]
    }

    function rf(b, a, c, d) {
        function e(a) {
            try {
                a.apply(null, Va.call(arguments, 1))
            } finally {
                if (z--, 0 === z)for (; A.length;)try {
                    A.pop()()
                } catch (b) {
                    c.error(b)
                }
            }
        }

        function f(a, b) {
            (function sf() {
                r(v, function (a) {
                    a()
                });
                B = b(sf,
                    a)
            })()
        }

        function g() {
            h();
            l()
        }

        function h() {
            K = b.history.state;
            K = H(K) ? null : K;
            ka(K, Z) && (K = Z);
            Z = K
        }

        function l() {
            if (E !== n.url() || N !== K)E = n.url(), N = K, r(da, function (a) {
                a(n.url(), K)
            })
        }

        function k(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }

        var n = this, m = a[0], t = b.location, s = b.history, x = b.setTimeout, y = b.clearTimeout, q = {};
        n.isMock = !1;
        var z = 0, A = [];
        n.$$completeOutstandingRequest = e;
        n.$$incOutstandingRequestCount = function () {
            z++
        };
        n.notifyWhenNoOutstandingRequests = function (a) {
            r(v, function (a) {
                a()
            });
            0 === z ? a() :
                A.push(a)
        };
        var v = [], B;
        n.addPollFn = function (a) {
            H(B) && f(100, x);
            v.push(a);
            return a
        };
        var K, N, E = t.href, V = a.find("base"), T = null;
        h();
        N = K;
        n.url = function (a, c, e) {
            H(e) && (e = null);
            t !== b.location && (t = b.location);
            s !== b.history && (s = b.history);
            if (a) {
                var f = N === e;
                if (E === a && (!d.history || f))return n;
                var g = E && Ga(E) === Ga(a);
                E = a;
                N = e;
                !d.history || g && f ? (g || (T = a), c ? t.replace(a) : g ? (c = t, e = a.indexOf("#"), a = -1 === e ? "" : a.substr(e + 1), c.hash = a) : t.href = a) : (s[c ? "replaceState" : "pushState"](e, "", a), h(), N = K);
                return n
            }
            return T || t.href.replace(/%27/g,
                    "'")
        };
        n.state = function () {
            return K
        };
        var da = [], Fa = !1, Z = null;
        n.onUrlChange = function (a) {
            if (!Fa) {
                if (d.history)I(b).on("popstate", g);
                I(b).on("hashchange", g);
                Fa = !0
            }
            da.push(a);
            return a
        };
        n.$$checkUrlChange = l;
        n.baseHref = function () {
            var a = V.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var p = {}, w = "", C = n.baseHref();
        n.cookies = function (a, b) {
            var d, e, f, h;
            if (a)b === u ? m.cookie = encodeURIComponent(a) + "=;path=" + C + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : M(b) && (d = (m.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) +
            ";path=" + C).length + 1, 4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!")); else {
                if (m.cookie !== w)for (w = m.cookie, d = w.split("; "), p = {}, f = 0; f < d.length; f++)e = d[f], h = e.indexOf("="), 0 < h && (a = k(e.substring(0, h)), p[a] === u && (p[a] = k(e.substring(h + 1))));
                return p
            }
        };
        n.defer = function (a, b) {
            var c;
            z++;
            c = x(function () {
                delete q[c];
                e(a)
            }, b || 0);
            q[c] = !0;
            return c
        };
        n.defer.cancel = function (a) {
            return q[a] ? (delete q[a], y(a), e(D), !0) : !1
        }
    }

    function He() {
        this.$get = ["$window",
            "$log", "$sniffer", "$document", function (b, a, c, d) {
                return new rf(b, d, a, c)
            }]
    }

    function Ie() {
        this.$get = function () {
            function b(b, d) {
                function e(a) {
                    a != m && (t ? t == a && (t = a.n) : t = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
                }

                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }

                if (b in a)throw R("$cacheFactory")("iid", b);
                var g = 0, h = P({}, d, {id: b}), l = {}, k = d && d.capacity || Number.MAX_VALUE, n = {}, m = null, t = null;
                return a[b] = {
                    put: function (a, b) {
                        if (!H(b)) {
                            if (k < Number.MAX_VALUE) {
                                var c = n[a] || (n[a] = {key: a});
                                e(c)
                            }
                            a in l || g++;
                            l[a] = b;
                            g > k && this.remove(t.key);
                            return b
                        }
                    }, get: function (a) {
                        if (k < Number.MAX_VALUE) {
                            var b = n[a];
                            if (!b)return;
                            e(b)
                        }
                        return l[a]
                    }, remove: function (a) {
                        if (k < Number.MAX_VALUE) {
                            var b = n[a];
                            if (!b)return;
                            b == m && (m = b.p);
                            b == t && (t = b.n);
                            f(b.n, b.p);
                            delete n[a]
                        }
                        delete l[a];
                        g--
                    }, removeAll: function () {
                        l = {};
                        g = 0;
                        n = {};
                        m = t = null
                    }, destroy: function () {
                        n = h = l = null;
                        delete a[b]
                    }, info: function () {
                        return P({}, h, {size: g})
                    }
                }
            }

            var a = {};
            b.info = function () {
                var b = {};
                r(a, function (a, e) {
                    b[e] = a.info()
                });
                return b
            };
            b.get = function (b) {
                return a[b]
            };
            return b
        }
    }

    function Ze() {
        this.$get =
            ["$cacheFactory", function (b) {
                return b("templates")
            }]
    }

    function vc(b, a) {
        function c(a, b, c) {
            var d = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, e = {};
            r(a, function (a, f) {
                var h = a.match(d);
                if (!h)throw ia("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
                e[f] = {mode: h[1][0], collection: "*" === h[2], optional: "?" === h[3], attrName: h[4] || f}
            });
            return e
        }

        var d = {}, e = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, f = /(([\w\-]+)(?:\:([^;]+))?;?)/, g = Ld("ngSrc,ngSrcset,src,srcset"), h = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, l =
            /^(on[a-z]+|formaction)$/;
        this.directive = function m(a, e) {
            La(a, "directive");
            M(a) ? (Mb(e, "directiveFactory"), d.hasOwnProperty(a) || (d[a] = [], b.factory(a + "Directive", ["$injector", "$exceptionHandler", function (b, e) {
                var f = [];
                r(d[a], function (d, h) {
                    try {
                        var g = b.invoke(d);
                        C(g) ? g = {compile: oa(g)} : !g.compile && g.link && (g.compile = oa(g.link));
                        g.priority = g.priority || 0;
                        g.index = h;
                        g.name = g.name || a;
                        g.require = g.require || g.controller && g.name;
                        g.restrict = g.restrict || "EA";
                        var k = g, l = g, m = g.name, s = {isolateScope: null, bindToController: null};
                        F(l.scope) && (!0 === l.bindToController ? (s.bindToController = c(l.scope, m, !0), s.isolateScope = {}) : s.isolateScope = c(l.scope, m, !1));
                        F(l.bindToController) && (s.bindToController = c(l.bindToController, m, !0));
                        if (F(s.bindToController)) {
                            var r = l.controller, T = l.controllerAs;
                            if (!r)throw ia("noctrl", m);
                            var da;
                            a:if (T && M(T))da = T; else {
                                if (M(r)) {
                                    var p = Pc.exec(r);
                                    if (p) {
                                        da = p[3];
                                        break a
                                    }
                                }
                                da = void 0
                            }
                            if (!da)throw ia("noident", m);
                        }
                        var Z = k.$$bindings = s;
                        F(Z.isolateScope) && (g.$$isolateBindings = Z.isolateScope);
                        f.push(g)
                    } catch (u) {
                        e(u)
                    }
                });
                return f
            }])), d[a].push(e)) : r(a, hc(m));
            return this
        };
        this.aHrefSanitizationWhitelist = function (b) {
            return w(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist()
        };
        this.imgSrcSanitizationWhitelist = function (b) {
            return w(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist()
        };
        var k = !0;
        this.debugInfoEnabled = function (a) {
            return w(a) ? (k = a, this) : k
        };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document",
            "$sce", "$animate", "$$sanitizeUri", function (a, b, c, x, y, q, z, A, v, B, K) {
                function N(a, b) {
                    try {
                        a.addClass(b)
                    } catch (c) {
                    }
                }

                function E(a, b, c, d, e) {
                    a instanceof I || (a = I(a));
                    r(a, function (b, c) {
                        b.nodeType == gb && b.nodeValue.match(/\S+/) && (a[c] = I(b).wrap("<span></span>").parent()[0])
                    });
                    var f = V(a, b, a, c, d, e);
                    E.$$addScopeClass(a);
                    var h = null;
                    return function (b, c, d) {
                        Mb(b, "scope");
                        d = d || {};
                        var e = d.parentBoundTranscludeFn, g = d.transcludeControllers;
                        d = d.futureParentElement;
                        e && e.$$boundTransclude && (e = e.$$boundTransclude);
                        h || (h = (d =
                            d && d[0]) ? "foreignobject" !== ta(d) && d.toString().match(/SVG/) ? "svg" : "html" : "html");
                        d = "html" !== h ? I(Ub(h, I("<div>").append(a).html())) : c ? Ka.clone.call(a) : a;
                        if (g)for (var k in g)d.data("$" + k + "Controller", g[k].instance);
                        E.$$addScopeInfo(d, b);
                        c && c(d, b);
                        f && f(b, d, d, e);
                        return d
                    }
                }

                function V(a, b, c, d, e, f) {
                    function h(a, c, d, e) {
                        var f, k, l, t, m, q, v;
                        if (s)for (v = Array(c.length), t = 0; t < g.length; t += 3)f = g[t], v[f] = c[f]; else v = c;
                        t = 0;
                        for (m = g.length; t < m;)if (k = v[g[t++]], c = g[t++], f = g[t++], c) {
                            if (c.scope) {
                                if (l = a.$new(), E.$$addScopeInfo(I(k),
                                        l), q = c.$$destroyBindings)c.$$destroyBindings = null, l.$on("$destroyed", q)
                            } else l = a;
                            q = c.transcludeOnThisElement ? T(a, c.transclude, e, c.elementTranscludeOnThisElement) : !c.templateOnThisElement && e ? e : !e && b ? T(a, b) : null;
                            c(f, l, k, d, q, c)
                        } else f && f(a, k.childNodes, u, e)
                    }

                    for (var g = [], k, l, t, m, s, q = 0; q < a.length; q++) {
                        k = new ea;
                        l = da(a[q], [], k, 0 === q ? d : u, e);
                        (f = l.length ? w(l, a[q], k, b, c, null, [], [], f) : null) && f.scope && E.$$addScopeClass(k.$$element);
                        k = f && f.terminal || !(t = a[q].childNodes) || !t.length ? null : V(t, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
                        if (f || k)g.push(q, f, k), m = !0, s = s || f;
                        f = null
                    }
                    return m ? h : null
                }

                function T(a, b, c, d) {
                    return function (d, e, f, h, g) {
                        d || (d = a.$new(!1, g), d.$$transcluded = !0);
                        return b(d, e, {parentBoundTranscludeFn: c, transcludeControllers: f, futureParentElement: h})
                    }
                }

                function da(a, b, c, d, h) {
                    var g = c.$attr, k;
                    switch (a.nodeType) {
                        case na:
                            X(b, wa(ta(a)), "E", d, h);
                            for (var l, t, m, s = a.attributes, q = 0, v = s && s.length; q < v; q++) {
                                var N = !1, x = !1;
                                l = s[q];
                                k = l.name;
                                t = W(l.value);
                                l = wa(k);
                                if (m = ja.test(l))k = k.replace(Rc,
                                    "").substr(8).replace(/_(.)/g, function (a, b) {
                                        return b.toUpperCase()
                                    });
                                var E = l.replace(/(Start|End)$/, "");
                                ma(E) && l === E + "Start" && (N = k, x = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6));
                                l = wa(k.toLowerCase());
                                g[l] = k;
                                if (m || !c.hasOwnProperty(l))c[l] = t, Jc(a, l) && (c[l] = !0);
                                U(a, b, t, l, m);
                                X(b, l, "A", d, h, N, x)
                            }
                            a = a.className;
                            F(a) && (a = a.animVal);
                            if (M(a) && "" !== a)for (; k = f.exec(a);)l = wa(k[2]), X(b, l, "C", d, h) && (c[l] = W(k[3])), a = a.substr(k.index + k[0].length);
                            break;
                        case gb:
                            Q(b, a.nodeValue);
                            break;
                        case 8:
                            try {
                                if (k = e.exec(a.nodeValue))l =
                                    wa(k[1]), X(b, l, "M", d, h) && (c[l] = W(k[2]))
                            } catch (z) {
                            }
                    }
                    b.sort(O);
                    return b
                }

                function p(a, b, c) {
                    var d = [], e = 0;
                    if (b && a.hasAttribute && a.hasAttribute(b)) {
                        do {
                            if (!a)throw ia("uterdir", b, c);
                            a.nodeType == na && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                            d.push(a);
                            a = a.nextSibling
                        } while (0 < e)
                    } else d.push(a);
                    return I(d)
                }

                function Z(a, b, c) {
                    return function (d, e, f, h, g) {
                        e = p(e[0], b, c);
                        return a(d, e, f, h, g)
                    }
                }

                function w(a, b, d, e, f, g, k, l, t) {
                    function m(a, b, c, d) {
                        if (a) {
                            c && (a = Z(a, c, d));
                            a.require = L.require;
                            a.directiveName = ma;
                            if (B ===
                                L || L.$$isolateScope)a = aa(a, {isolateScope: !0});
                            k.push(a)
                        }
                        if (b) {
                            c && (b = Z(b, c, d));
                            b.require = L.require;
                            b.directiveName = ma;
                            if (B === L || L.$$isolateScope)b = aa(b, {isolateScope: !0});
                            l.push(b)
                        }
                    }

                    function v(a, b, c, d) {
                        var e, f = "data", g = !1, k = c, l;
                        if (M(b)) {
                            l = b.match(h);
                            b = b.substring(l[0].length);
                            l[3] && (l[1] ? l[3] = null : l[1] = l[3]);
                            "^" === l[1] ? f = "inheritedData" : "^^" === l[1] && (f = "inheritedData", k = c.parent());
                            "?" === l[2] && (g = !0);
                            e = null;
                            d && "data" === f && (e = d[b]) && (e = e.instance);
                            e = e || k[f]("$" + b + "Controller");
                            if (!e && !g)throw ia("ctreq",
                                b, a);
                            return e || null
                        }
                        J(b) && (e = [], r(b, function (b) {
                            e.push(v(a, b, c, d))
                        }));
                        return e
                    }

                    function N(a, c, e, f, g, h) {
                        function t(a, b, c) {
                            var d;
                            Ra(a) || (c = b, b = a, a = u);
                            D && (d = da);
                            c || (c = D ? V.parent() : V);
                            return g(a, b, d, c, w)
                        }

                        var m, s, x, ra, da, T, V, p;
                        b === e ? (p = d, V = d.$$element) : (V = I(e), p = new ea(V, d));
                        B && (ra = c.$new(!0));
                        g && (T = t, T.$$boundTransclude = g);
                        K && (y = {}, da = {}, r(K, function (a) {
                            var b = {
                                $scope: a === B || a.$$isolateScope ? ra : c,
                                $element: V,
                                $attrs: p,
                                $transclude: T
                            };
                            x = a.controller;
                            "@" == x && (x = p[a.name]);
                            b = q(x, b, !0, a.controllerAs);
                            da[a.name] =
                                b;
                            D || V.data("$" + a.name + "Controller", b.instance);
                            y[a.name] = b
                        }));
                        B && (E.$$addScopeInfo(V, ra, !0, !(A && (A === B || A === B.$$originalDirective))), E.$$addScopeClass(V, !0), ra.$$isolateBindings = B.$$isolateBindings, ca(c, p, ra, ra.$$isolateBindings, B, ra));
                        if (y) {
                            var Z = B || z, Fa, Qc;
                            Z && y[Z.name] && (Fa = Z.$$bindings.bindToController, (x = y[Z.name]) && x.identifier && Fa && (Qc = x, h.$$destroyBindings = ca(c, p, x.instance, Fa, Z)));
                            r(y, function (a) {
                                var b = a();
                                b !== a.instance && a === Qc && (h.$$destroyBindings(), h.$$destroyBindings = ca(c, p, b, Fa, Z))
                            });
                            y = null
                        }
                        f = 0;
                        for (m = k.length; f < m; f++)s = k[f], ba(s, s.isolateScope ? ra : c, V, p, s.require && v(s.directiveName, s.require, V, da), T);
                        var w = c;
                        B && (B.template || null === B.templateUrl) && (w = ra);
                        a && a(w, e.childNodes, u, g);
                        for (f = l.length - 1; 0 <= f; f--)s = l[f], ba(s, s.isolateScope ? ra : c, V, p, s.require && v(s.directiveName, s.require, V, da), T)
                    }

                    t = t || {};
                    for (var x = -Number.MAX_VALUE, z, K = t.controllerDirectives, y, B = t.newIsolateScopeDirective, A = t.templateDirective, T = t.nonTlbTranscludeDirective, V = !1, Sb = !1, D = t.hasElementTranscludeDirective, X = d.$$element =
                        I(b), L, ma, G, O = e, Q, P = 0, S = a.length; P < S; P++) {
                        L = a[P];
                        var U = L.$$start, Tb = L.$$end;
                        U && (X = p(b, U, Tb));
                        G = u;
                        if (x > L.priority)break;
                        if (G = L.scope)L.templateUrl || (F(G) ? (Ma("new/isolated scope", B || z, L, X), B = L) : Ma("new/isolated scope", B, L, X)), z = z || L;
                        ma = L.name;
                        !L.templateUrl && L.controller && (G = L.controller, K = K || {}, Ma("'" + ma + "' controller", K[ma], L, X), K[ma] = L);
                        if (G = L.transclude)V = !0, L.$$tlb || (Ma("transclusion", T, L, X), T = L), "element" == G ? (D = !0, x = L.priority, G = X, X = d.$$element = I(Y.createComment(" " + ma + ": " + d[ma] + " ")), b = X[0],
                            $(f, Va.call(G, 0), b), O = E(G, e, x, g && g.name, {nonTlbTranscludeDirective: T})) : (G = I(Pb(b)).contents(), X.empty(), O = E(G, e));
                        if (L.template)if (Sb = !0, Ma("template", A, L, X), A = L, G = C(L.template) ? L.template(X, d) : L.template, G = ha(G), L.replace) {
                            g = L;
                            G = Nb.test(G) ? Sc(Ub(L.templateNamespace, W(G))) : [];
                            b = G[0];
                            if (1 != G.length || b.nodeType !== na)throw ia("tplrt", ma, "");
                            $(f, X, b);
                            S = {$attr: {}};
                            G = da(b, [], S);
                            var fa = a.splice(P + 1, a.length - (P + 1));
                            B && H(G);
                            a = a.concat(G).concat(fa);
                            Oc(d, S);
                            S = a.length
                        } else X.html(G);
                        if (L.templateUrl)Sb = !0,
                            Ma("template", A, L, X), A = L, L.replace && (g = L), N = R(a.splice(P, a.length - P), X, d, f, V && O, k, l, {
                            controllerDirectives: K,
                            newIsolateScopeDirective: B,
                            templateDirective: A,
                            nonTlbTranscludeDirective: T
                        }), S = a.length; else if (L.compile)try {
                            Q = L.compile(X, d, O), C(Q) ? m(null, Q, U, Tb) : Q && m(Q.pre, Q.post, U, Tb)
                        } catch (ga) {
                            c(ga, va(X))
                        }
                        L.terminal && (N.terminal = !0, x = Math.max(x, L.priority))
                    }
                    N.scope = z && !0 === z.scope;
                    N.transcludeOnThisElement = V;
                    N.elementTranscludeOnThisElement = D;
                    N.templateOnThisElement = Sb;
                    N.transclude = O;
                    t.hasElementTranscludeDirective =
                        D;
                    return N
                }

                function H(a) {
                    for (var b = 0, c = a.length; b < c; b++)a[b] = Jb(a[b], {$$isolateScope: !0})
                }

                function X(b, e, f, g, h, l, k) {
                    if (e === h)return null;
                    h = null;
                    if (d.hasOwnProperty(e)) {
                        var t;
                        e = a.get(e + "Directive");
                        for (var q = 0, v = e.length; q < v; q++)try {
                            t = e[q], (g === u || g > t.priority) && -1 != t.restrict.indexOf(f) && (l && (t = Jb(t, {
                                $$start: l,
                                $$end: k
                            })), b.push(t), h = t)
                        } catch (x) {
                            c(x)
                        }
                    }
                    return h
                }

                function ma(b) {
                    if (d.hasOwnProperty(b))for (var c = a.get(b + "Directive"), e = 0, f = c.length; e < f; e++)if (b = c[e], b.multiElement)return !0;
                    return !1
                }

                function Oc(a,
                            b) {
                    var c = b.$attr, d = a.$attr, e = a.$$element;
                    r(a, function (d, e) {
                        "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                    });
                    r(b, function (b, f) {
                        "class" == f ? (N(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                    })
                }

                function R(a, b, c, d, e, f, g, h) {
                    var l = [], k, t, m = b[0], s = a.shift(), q = Jb(s, {
                            templateUrl: null,
                            transclude: null,
                            replace: null,
                            $$originalDirective: s
                        }),
                        z = C(s.templateUrl) ? s.templateUrl(b, c) : s.templateUrl, E = s.templateNamespace;
                    b.empty();
                    x(v.getTrustedResourceUrl(z)).then(function (v) {
                        var x, K;
                        v = ha(v);
                        if (s.replace) {
                            v = Nb.test(v) ? Sc(Ub(E, W(v))) : [];
                            x = v[0];
                            if (1 != v.length || x.nodeType !== na)throw ia("tplrt", s.name, z);
                            v = {$attr: {}};
                            $(d, b, x);
                            var y = da(x, [], v);
                            F(s.scope) && H(y);
                            a = y.concat(a);
                            Oc(c, v)
                        } else x = m, b.html(v);
                        a.unshift(q);
                        k = w(a, x, c, e, b, s, f, g, h);
                        r(d, function (a, c) {
                            a == x && (d[c] = b[0])
                        });
                        for (t = V(b[0].childNodes, e); l.length;) {
                            v = l.shift();
                            K = l.shift();
                            var B = l.shift(),
                                A = l.shift(), y = b[0];
                            if (!v.$$destroyed) {
                                if (K !== m) {
                                    var p = K.className;
                                    h.hasElementTranscludeDirective && s.replace || (y = Pb(x));
                                    $(B, I(K), y);
                                    N(I(y), p)
                                }
                                K = k.transcludeOnThisElement ? T(v, k.transclude, A) : A;
                                k(t, v, y, d, K, k)
                            }
                        }
                        l = null
                    });
                    return function (a, b, c, d, e) {
                        a = e;
                        b.$$destroyed || (l ? l.push(b, c, d, a) : (k.transcludeOnThisElement && (a = T(b, k.transclude, e)), k(t, b, c, d, a, k)))
                    }
                }

                function O(a, b) {
                    var c = b.priority - a.priority;
                    return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
                }

                function Ma(a, b, c, d) {
                    if (b)throw ia("multidir",
                        b.name, c.name, a, va(d));
                }

                function Q(a, c) {
                    var d = b(c, !0);
                    d && a.push({
                        priority: 0, compile: function (a) {
                            a = a.parent();
                            var b = !!a.length;
                            b && E.$$addBindingClass(a);
                            return function (a, c) {
                                var e = c.parent();
                                b || E.$$addBindingClass(e);
                                E.$$addBindingInfo(e, d.expressions);
                                a.$watch(d, function (a) {
                                    c[0].nodeValue = a
                                })
                            }
                        }
                    })
                }

                function Ub(a, b) {
                    a = G(a || "html");
                    switch (a) {
                        case "svg":
                        case "math":
                            var c = Y.createElement("div");
                            c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
                            return c.childNodes[0].childNodes;
                        default:
                            return b
                    }
                }

                function S(a, b) {
                    if ("srcdoc" ==
                        b)return v.HTML;
                    var c = ta(a);
                    if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b))return v.RESOURCE_URL
                }

                function U(a, c, d, e, f) {
                    var h = S(a, e);
                    f = g[e] || f;
                    var k = b(d, !0, h, f);
                    if (k) {
                        if ("multiple" === e && "select" === ta(a))throw ia("selmulti", va(a));
                        c.push({
                            priority: 100, compile: function () {
                                return {
                                    pre: function (a, c, g) {
                                        c = g.$$observers || (g.$$observers = {});
                                        if (l.test(e))throw ia("nodomevents");
                                        var m = g[e];
                                        m !== d && (k = m && b(m, !0, h, f), d = m);
                                        k && (g[e] = k(a), (c[e] || (c[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope ||
                                        a).$watch(k, function (a, b) {
                                                "class" === e && a != b ? g.$updateClass(a, b) : g.$set(e, a)
                                            }))
                                    }
                                }
                            }
                        })
                    }
                }

                function $(a, b, c) {
                    var d = b[0], e = b.length, f = d.parentNode, g, h;
                    if (a)for (g = 0, h = a.length; g < h; g++)if (a[g] == d) {
                        a[g++] = c;
                        h = g + e - 1;
                        for (var k = a.length; g < k; g++, h++)h < k ? a[g] = a[h] : delete a[g];
                        a.length -= e - 1;
                        a.context === d && (a.context = c);
                        break
                    }
                    f && f.replaceChild(c, d);
                    a = Y.createDocumentFragment();
                    a.appendChild(d);
                    I(c).data(I(d).data());
                    la ? (Lb = !0, la.cleanData([d])) : delete I.cache[d[I.expando]];
                    d = 1;
                    for (e = b.length; d < e; d++)f = b[d], I(f).remove(),
                        a.appendChild(f), delete b[d];
                    b[0] = c;
                    b.length = 1
                }

                function aa(a, b) {
                    return P(function () {
                        return a.apply(null, arguments)
                    }, a, b)
                }

                function ba(a, b, d, e, f, g) {
                    try {
                        a(b, d, e, f, g)
                    } catch (h) {
                        c(h, va(d))
                    }
                }

                function ca(a, c, d, e, f, g) {
                    var h;
                    r(e, function (e, g) {
                        var k = e.attrName, l = e.optional, m, s, q, v;
                        switch (e.mode) {
                            case "@":
                                c.$observe(k, function (a) {
                                    d[g] = a
                                });
                                c.$$observers[k].$$scope = a;
                                c[k] && (d[g] = b(c[k])(a));
                                break;
                            case "=":
                                if (l && !c[k])break;
                                s = y(c[k]);
                                v = s.literal ? ka : function (a, b) {
                                    return a === b || a !== a && b !== b
                                };
                                q = s.assign || function () {
                                    m =
                                        d[g] = s(a);
                                    throw ia("nonassign", c[k], f.name);
                                };
                                m = d[g] = s(a);
                                l = function (b) {
                                    v(b, d[g]) || (v(b, m) ? q(a, b = d[g]) : d[g] = b);
                                    return m = b
                                };
                                l.$stateful = !0;
                                l = e.collection ? a.$watchCollection(c[k], l) : a.$watch(y(c[k], l), null, s.literal);
                                h = h || [];
                                h.push(l);
                                break;
                            case "&":
                                if (!c.hasOwnProperty(k) && l)break;
                                s = y(c[k]);
                                if (s === D && l)break;
                                d[g] = function (b) {
                                    return s(a, b)
                                }
                        }
                    });
                    e = h ? function () {
                        for (var a = 0, b = h.length; a < b; ++a)h[a]()
                    } : D;
                    return g && e !== D ? (g.$on("$destroy", e), D) : e
                }

                var ea = function (a, b) {
                    if (b) {
                        var c = Object.keys(b), d, e, f;
                        d = 0;
                        for (e =
                                 c.length; d < e; d++)f = c[d], this[f] = b[f]
                    } else this.$attr = {};
                    this.$$element = a
                };
                ea.prototype = {
                    $normalize: wa, $addClass: function (a) {
                        a && 0 < a.length && B.addClass(this.$$element, a)
                    }, $removeClass: function (a) {
                        a && 0 < a.length && B.removeClass(this.$$element, a)
                    }, $updateClass: function (a, b) {
                        var c = Tc(a, b);
                        c && c.length && B.addClass(this.$$element, c);
                        (c = Tc(b, a)) && c.length && B.removeClass(this.$$element, c)
                    }, $set: function (a, b, d, e) {
                        var f = this.$$element[0], g = Jc(f, a), h = of(f, a), f = a;
                        g ? (this.$$element.prop(a, b), e = g) : h && (this[h] = b, f =
                            h);
                        this[a] = b;
                        e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = sc(a, "-"));
                        g = ta(this.$$element);
                        if ("a" === g && "href" === a || "img" === g && "src" === a)this[a] = b = K(b, "src" === a); else if ("img" === g && "srcset" === a) {
                            for (var g = "", h = W(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(h) ? k : /(,)/, h = h.split(k), k = Math.floor(h.length / 2), l = 0; l < k; l++)var t = 2 * l, g = g + K(W(h[t]), !0), g = g + (" " + W(h[t + 1]));
                            h = W(h[2 * l]).split(/\s/);
                            g += K(W(h[0]), !0);
                            2 === h.length && (g += " " + W(h[1]));
                            this[a] = b = g
                        }
                        !1 !== d && (null === b || b === u ? this.$$element.removeAttr(e) :
                            this.$$element.attr(e, b));
                        (a = this.$$observers) && r(a[f], function (a) {
                            try {
                                a(b)
                            } catch (d) {
                                c(d)
                            }
                        })
                    }, $observe: function (a, b) {
                        var c = this, d = c.$$observers || (c.$$observers = qa()), e = d[a] || (d[a] = []);
                        e.push(b);
                        z.$evalAsync(function () {
                            !e.$$inter && c.hasOwnProperty(a) && b(c[a])
                        });
                        return function () {
                            Ta(e, b)
                        }
                    }
                };
                var fa = b.startSymbol(), ga = b.endSymbol(), ha = "{{" == fa || "}}" == ga ? Qa : function (a) {
                    return a.replace(/\{\{/g, fa).replace(/}}/g, ga)
                }, ja = /^ngAttr[A-Z]/;
                E.$$addBindingInfo = k ? function (a, b) {
                    var c = a.data("$binding") || [];
                    J(b) ?
                        c = c.concat(b) : c.push(b);
                    a.data("$binding", c)
                } : D;
                E.$$addBindingClass = k ? function (a) {
                    N(a, "ng-binding")
                } : D;
                E.$$addScopeInfo = k ? function (a, b, c, d) {
                    a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b)
                } : D;
                E.$$addScopeClass = k ? function (a, b) {
                    N(a, b ? "ng-isolate-scope" : "ng-scope")
                } : D;
                return E
            }]
    }

    function wa(b) {
        return $a(b.replace(Rc, ""))
    }

    function Tc(b, a) {
        var c = "", d = b.split(/\s+/), e = a.split(/\s+/), f = 0;
        a:for (; f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++)if (g == e[h])continue a;
            c += (0 < c.length ? " " : "") +
            g
        }
        return c
    }

    function Sc(b) {
        b = I(b);
        var a = b.length;
        if (1 >= a)return b;
        for (; a--;)8 === b[a].nodeType && tf.call(b, a, 1);
        return b
    }

    function Je() {
        var b = {}, a = !1;
        this.register = function (a, d) {
            La(a, "controller");
            F(a) ? P(b, a) : b[a] = d
        };
        this.allowGlobals = function () {
            a = !0
        };
        this.$get = ["$injector", "$window", function (c, d) {
            function e(a, b, c, d) {
                if (!a || !F(a.$scope))throw R("$controller")("noscp", d, b);
                a.$scope[b] = c
            }

            return function (f, g, h, l) {
                var k, n, m;
                h = !0 === h;
                l && M(l) && (m = l);
                if (M(f)) {
                    l = f.match(Pc);
                    if (!l)throw uf("ctrlfmt", f);
                    n = l[1];
                    m = m || l[3];
                    f = b.hasOwnProperty(n) ? b[n] : uc(g.$scope, n, !0) || (a ? uc(d, n, !0) : u);
                    jb(f, n, !0)
                }
                if (h)return h = (J(f) ? f[f.length - 1] : f).prototype, k = Object.create(h || null), m && e(g, m, k, n || f.name), P(function () {
                    var a = c.invoke(f, k, g, n);
                    a !== k && (F(a) || C(a)) && (k = a, m && e(g, m, k, n || f.name));
                    return k
                }, {instance: k, identifier: m});
                k = c.instantiate(f, g, n);
                m && e(g, m, k, n || f.name);
                return k
            }
        }]
    }

    function Ke() {
        this.$get = ["$window", function (b) {
            return I(b.document)
        }]
    }

    function Le() {
        this.$get = ["$log", function (b) {
            return function (a, c) {
                b.error.apply(b,
                    arguments)
            }
        }]
    }

    function Vb(b, a) {
        if (M(b)) {
            var c = b.replace(vf, "").trim();
            if (c) {
                var d = a("Content-Type");
                (d = d && 0 === d.indexOf(Uc)) || (d = (d = c.match(wf)) && xf[d[0]].test(c));
                d && (b = mc(c))
            }
        }
        return b
    }

    function Vc(b) {
        var a = qa(), c, d, e;
        if (!b)return a;
        r(b.split("\n"), function (b) {
            e = b.indexOf(":");
            c = G(W(b.substr(0, e)));
            d = W(b.substr(e + 1));
            c && (a[c] = a[c] ? a[c] + ", " + d : d)
        });
        return a
    }

    function Wc(b) {
        var a = F(b) ? b : u;
        return function (c) {
            a || (a = Vc(b));
            return c ? (c = a[G(c)], void 0 === c && (c = null), c) : a
        }
    }

    function Xc(b, a, c, d) {
        if (C(d))return d(b,
            a, c);
        r(d, function (d) {
            b = d(b, a, c)
        });
        return b
    }

    function Oe() {
        var b = this.defaults = {
            transformResponse: [Vb],
            transformRequest: [function (a) {
                return F(a) && "[object File]" !== sa.call(a) && "[object Blob]" !== sa.call(a) && "[object FormData]" !== sa.call(a) ? Wa(a) : a
            }],
            headers: {common: {Accept: "application/json, text/plain, */*"}, post: fa(Wb), put: fa(Wb), patch: fa(Wb)},
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
        }, a = !1;
        this.useApplyAsync = function (b) {
            return w(b) ? (a = !!b, this) : a
        };
        var c = this.interceptors = [];
        this.$get =
            ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (d, e, f, g, h, l) {
                function k(a) {
                    function c(a) {
                        var b = P({}, a);
                        b.data = a.data ? Xc(a.data, a.headers, a.status, e.transformResponse) : a.data;
                        a = a.status;
                        return 200 <= a && 300 > a ? b : h.reject(b)
                    }

                    function d(a, b) {
                        var c, e = {};
                        r(a, function (a, d) {
                            C(a) ? (c = a(b), null != c && (e[d] = c)) : e[d] = a
                        });
                        return e
                    }

                    if (!ca.isObject(a))throw R("$http")("badreq", a);
                    var e = P({
                        method: "get",
                        transformRequest: b.transformRequest,
                        transformResponse: b.transformResponse
                    }, a);
                    e.headers =
                        function (a) {
                            var c = b.headers, e = P({}, a.headers), f, g, h, c = P({}, c.common, c[G(a.method)]);
                            a:for (f in c) {
                                g = G(f);
                                for (h in e)if (G(h) === g)continue a;
                                e[f] = c[f]
                            }
                            return d(e, fa(a))
                        }(a);
                    e.method = lb(e.method);
                    var f = [function (a) {
                        var d = a.headers, e = Xc(a.data, Wc(d), u, a.transformRequest);
                        H(e) && r(d, function (a, b) {
                            "content-type" === G(b) && delete d[b]
                        });
                        H(a.withCredentials) && !H(b.withCredentials) && (a.withCredentials = b.withCredentials);
                        return n(a, e).then(c, c)
                    }, u], g = h.when(e);
                    for (r(s, function (a) {
                        (a.request || a.requestError) &&
                        f.unshift(a.request, a.requestError);
                        (a.response || a.responseError) && f.push(a.response, a.responseError)
                    }); f.length;) {
                        a = f.shift();
                        var k = f.shift(), g = g.then(a, k)
                    }
                    g.success = function (a) {
                        g.then(function (b) {
                            a(b.data, b.status, b.headers, e)
                        });
                        return g
                    };
                    g.error = function (a) {
                        g.then(null, function (b) {
                            a(b.data, b.status, b.headers, e)
                        });
                        return g
                    };
                    return g
                }

                function n(c, f) {
                    function l(b, c, d, e) {
                        function f() {
                            n(c, b, d, e)
                        }

                        N && (200 <= b && 300 > b ? N.put(p, [b, c, Vc(d), e]) : N.remove(p));
                        a ? g.$applyAsync(f) : (f(), g.$$phase || g.$apply())
                    }

                    function n(a,
                               b, d, e) {
                        b = Math.max(b, 0);
                        (200 <= b && 300 > b ? B.resolve : B.reject)({
                            data: a,
                            status: b,
                            headers: Wc(d),
                            config: c,
                            statusText: e
                        })
                    }

                    function s(a) {
                        n(a.data, a.status, fa(a.headers()), a.statusText)
                    }

                    function v() {
                        var a = k.pendingRequests.indexOf(c);
                        -1 !== a && k.pendingRequests.splice(a, 1)
                    }

                    var B = h.defer(), K = B.promise, N, E, r = c.headers, p = m(c.url, c.params);
                    k.pendingRequests.push(c);
                    K.then(v, v);
                    !c.cache && !b.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (N = F(c.cache) ? c.cache : F(b.cache) ? b.cache : t);
                    N && (E = N.get(p), w(E) ? E &&
                    C(E.then) ? E.then(s, s) : J(E) ? n(E[1], E[0], fa(E[2]), E[3]) : n(E, 200, {}, "OK") : N.put(p, K));
                    H(E) && ((E = Yc(c.url) ? e.cookies()[c.xsrfCookieName || b.xsrfCookieName] : u) && (r[c.xsrfHeaderName || b.xsrfHeaderName] = E), d(c.method, p, f, l, r, c.timeout, c.withCredentials, c.responseType));
                    return K
                }

                function m(a, b) {
                    if (!b)return a;
                    var c = [];
                    Jd(b, function (a, b) {
                        null === a || H(a) || (J(a) || (a = [a]), r(a, function (a) {
                            F(a) && (a = pa(a) ? a.toISOString() : Wa(a));
                            c.push(Ca(b) + "=" + Ca(a))
                        }))
                    });
                    0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&"));
                    return a
                }

                var t = f("$http"), s = [];
                r(c, function (a) {
                    s.unshift(M(a) ? l.get(a) : l.invoke(a))
                });
                k.pendingRequests = [];
                (function (a) {
                    r(arguments, function (a) {
                        k[a] = function (b, c) {
                            return k(P(c || {}, {method: a, url: b}))
                        }
                    })
                })("get", "delete", "head", "jsonp");
                (function (a) {
                    r(arguments, function (a) {
                        k[a] = function (b, c, d) {
                            return k(P(d || {}, {method: a, url: b, data: c}))
                        }
                    })
                })("post", "put", "patch");
                k.defaults = b;
                return k
            }]
    }

    function yf() {
        return new O.XMLHttpRequest
    }

    function Pe() {
        this.$get = ["$browser", "$window", "$document", function (b, a, c) {
            return zf(b,
                yf, b.defer, a.angular.callbacks, c[0])
        }]
    }

    function zf(b, a, c, d, e) {
        function f(a, b, c) {
            var f = e.createElement("script"), n = null;
            f.type = "text/javascript";
            f.src = a;
            f.async = !0;
            n = function (a) {
                f.removeEventListener("load", n, !1);
                f.removeEventListener("error", n, !1);
                e.body.removeChild(f);
                f = null;
                var g = -1, s = "unknown";
                a && ("load" !== a.type || d[b].called || (a = {type: "error"}), s = a.type, g = "error" === a.type ? 404 : 200);
                c && c(g, s)
            };
            f.addEventListener("load", n, !1);
            f.addEventListener("error", n, !1);
            e.body.appendChild(f);
            return n
        }

        return function (e,
                         h, l, k, n, m, t, s) {
            function x() {
                z && z();
                A && A.abort()
            }

            function y(a, d, e, f, g) {
                B !== u && c.cancel(B);
                z = A = null;
                a(d, e, f, g);
                b.$$completeOutstandingRequest(D)
            }

            b.$$incOutstandingRequestCount();
            h = h || b.url();
            if ("jsonp" == G(e)) {
                var q = "_" + (d.counter++).toString(36);
                d[q] = function (a) {
                    d[q].data = a;
                    d[q].called = !0
                };
                var z = f(h.replace("JSON_CALLBACK", "angular.callbacks." + q), q, function (a, b) {
                    y(k, a, d[q].data, "", b);
                    d[q] = D
                })
            } else {
                var A = a();
                A.open(e, h, !0);
                r(n, function (a, b) {
                    w(a) && A.setRequestHeader(b, a)
                });
                A.onload = function () {
                    var a = A.statusText ||
                        "", b = "response"in A ? A.response : A.responseText, c = 1223 === A.status ? 204 : A.status;
                    0 === c && (c = b ? 200 : "file" == ya(h).protocol ? 404 : 0);
                    y(k, c, b, A.getAllResponseHeaders(), a)
                };
                e = function () {
                    y(k, -1, null, null, "")
                };
                A.onerror = e;
                A.onabort = e;
                t && (A.withCredentials = !0);
                if (s)try {
                    A.responseType = s
                } catch (v) {
                    if ("json" !== s)throw v;
                }
                A.send(l || null)
            }
            if (0 < m)var B = c(x, m); else m && C(m.then) && m.then(x)
        }
    }

    function Me() {
        var b = "{{", a = "}}";
        this.startSymbol = function (a) {
            return a ? (b = a, this) : b
        };
        this.endSymbol = function (b) {
            return b ? (a = b, this) :
                a
        };
        this.$get = ["$parse", "$exceptionHandler", "$sce", function (c, d, e) {
            function f(a) {
                return "\\\\\\" + a
            }

            function g(c) {
                return c.replace(n, b).replace(m, a)
            }

            function h(f, h, m, n) {
                function q(a) {
                    try {
                        var b = a;
                        a = m ? e.getTrusted(m, b) : e.valueOf(b);
                        var c;
                        if (n && !w(a))c = a; else if (null == a)c = ""; else {
                            switch (typeof a) {
                                case "string":
                                    break;
                                case "number":
                                    a = "" + a;
                                    break;
                                default:
                                    a = Wa(a)
                            }
                            c = a
                        }
                        return c
                    } catch (g) {
                        c = Xb("interr", f, g.toString()), d(c)
                    }
                }

                n = !!n;
                for (var z, r, v = 0, B = [], K = [], N = f.length, E = [], p = []; v < N;)if (-1 != (z = f.indexOf(b, v)) && -1 !=
                    (r = f.indexOf(a, z + l)))v !== z && E.push(g(f.substring(v, z))), v = f.substring(z + l, r), B.push(v), K.push(c(v, q)), v = r + k, p.push(E.length), E.push(""); else {
                    v !== N && E.push(g(f.substring(v)));
                    break
                }
                if (m && 1 < E.length)throw Xb("noconcat", f);
                if (!h || B.length) {
                    var T = function (a) {
                        for (var b = 0, c = B.length; b < c; b++) {
                            if (n && H(a[b]))return;
                            E[p[b]] = a[b]
                        }
                        return E.join("")
                    };
                    return P(function (a) {
                        var b = 0, c = B.length, e = Array(c);
                        try {
                            for (; b < c; b++)e[b] = K[b](a);
                            return T(e)
                        } catch (g) {
                            a = Xb("interr", f, g.toString()), d(a)
                        }
                    }, {
                        exp: f, expressions: B, $$watchDelegate: function (a,
                                                                           b, c) {
                            var d;
                            return a.$watchGroup(K, function (c, e) {
                                var f = T(c);
                                C(b) && b.call(this, f, c !== e ? d : f, a);
                                d = f
                            }, c)
                        }
                    })
                }
            }

            var l = b.length, k = a.length, n = new RegExp(b.replace(/./g, f), "g"), m = new RegExp(a.replace(/./g, f), "g");
            h.startSymbol = function () {
                return b
            };
            h.endSymbol = function () {
                return a
            };
            return h
        }]
    }

    function Ne() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", function (b, a, c, d) {
            function e(e, h, l, k) {
                var n = a.setInterval, m = a.clearInterval, t = 0, s = w(k) && !k, x = (s ? d : c).defer(), y = x.promise;
                l = w(l) ? l : 0;
                y.then(null, null, e);
                y.$$intervalId =
                    n(function () {
                        x.notify(t++);
                        0 < l && t >= l && (x.resolve(t), m(y.$$intervalId), delete f[y.$$intervalId]);
                        s || b.$apply()
                    }, h);
                f[y.$$intervalId] = x;
                return y
            }

            var f = {};
            e.cancel = function (b) {
                return b && b.$$intervalId in f ? (f[b.$$intervalId].reject("canceled"), a.clearInterval(b.$$intervalId), delete f[b.$$intervalId], !0) : !1
            };
            return e
        }]
    }

    function Vd() {
        this.$get = function () {
            return {
                id: "en-us", NUMBER_FORMATS: {
                    DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [{
                        minInt: 1, minFrac: 0, maxFrac: 3, posPre: "", posSuf: "", negPre: "-", negSuf: "", gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "\u00a4",
                        posSuf: "",
                        negPre: "(\u00a4",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }], CURRENCY_SYM: "$"
                }, DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                }, pluralCat: function (b) {
                    return 1 === b ? "one" : "other"
                }
            }
        }
    }

    function Yb(b) {
        b = b.split("/");
        for (var a = b.length; a--;)b[a] = hb(b[a]);
        return b.join("/")
    }

    function Zc(b, a) {
        var c = ya(b);
        a.$$protocol = c.protocol;
        a.$$host = c.hostname;
        a.$$port = ba(c.port) || Af[c.protocol] || null
    }

    function $c(b, a) {
        var c = "/" !== b.charAt(0);
        c && (b = "/" + b);
        var d = ya(b);
        a.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ?
            d.pathname.substring(1) : d.pathname);
        a.$$search = oc(d.search);
        a.$$hash = decodeURIComponent(d.hash);
        a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path)
    }

    function xa(b, a) {
        if (0 === a.indexOf(b))return a.substr(b.length)
    }

    function Ga(b) {
        var a = b.indexOf("#");
        return -1 == a ? b : b.substr(0, a)
    }

    function xb(b) {
        return b.replace(/(#.+)|#$/, "$1")
    }

    function Zb(b) {
        return b.substr(0, Ga(b).lastIndexOf("/") + 1)
    }

    function $b(b, a) {
        this.$$html5 = !0;
        a = a || "";
        var c = Zb(b);
        Zc(b, this);
        this.$$parse = function (a) {
            var b = xa(c, a);
            if (!M(b))throw yb("ipthprfx",
                a, c);
            $c(b, this);
            this.$$path || (this.$$path = "/");
            this.$$compose()
        };
        this.$$compose = function () {
            var a = Kb(this.$$search), b = this.$$hash ? "#" + hb(this.$$hash) : "";
            this.$$url = Yb(this.$$path) + (a ? "?" + a : "") + b;
            this.$$absUrl = c + this.$$url.substr(1)
        };
        this.$$parseLinkUrl = function (d, e) {
            if (e && "#" === e[0])return this.hash(e.slice(1)), !0;
            var f, g;
            (f = xa(b, d)) !== u ? (g = f, g = (f = xa(a, f)) !== u ? c + (xa("/", f) || f) : b + g) : (f = xa(c, d)) !== u ? g = c + f : c == d + "/" && (g = c);
            g && this.$$parse(g);
            return !!g
        }
    }

    function ac(b, a) {
        var c = Zb(b);
        Zc(b, this);
        this.$$parse =
            function (d) {
                d = xa(b, d) || xa(c, d);
                var e;
                "#" === d.charAt(0) ? (e = xa(a, d), H(e) && (e = d)) : e = this.$$html5 ? d : "";
                $c(e, this);
                d = this.$$path;
                var f = /^\/[A-Z]:(\/.*)/;
                0 === e.indexOf(b) && (e = e.replace(b, ""));
                f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d);
                this.$$path = d;
                this.$$compose()
            };
        this.$$compose = function () {
            var c = Kb(this.$$search), e = this.$$hash ? "#" + hb(this.$$hash) : "";
            this.$$url = Yb(this.$$path) + (c ? "?" + c : "") + e;
            this.$$absUrl = b + (this.$$url ? a + this.$$url : "")
        };
        this.$$parseLinkUrl = function (a, c) {
            return Ga(b) == Ga(a) ? (this.$$parse(a), !0) :
                !1
        }
    }

    function ad(b, a) {
        this.$$html5 = !0;
        ac.apply(this, arguments);
        var c = Zb(b);
        this.$$parseLinkUrl = function (d, e) {
            if (e && "#" === e[0])return this.hash(e.slice(1)), !0;
            var f, g;
            b == Ga(d) ? f = d : (g = xa(c, d)) ? f = b + a + g : c === d + "/" && (f = c);
            f && this.$$parse(f);
            return !!f
        };
        this.$$compose = function () {
            var c = Kb(this.$$search), e = this.$$hash ? "#" + hb(this.$$hash) : "";
            this.$$url = Yb(this.$$path) + (c ? "?" + c : "") + e;
            this.$$absUrl = b + a + this.$$url
        }
    }

    function zb(b) {
        return function () {
            return this[b]
        }
    }

    function bd(b, a) {
        return function (c) {
            if (H(c))return this[b];
            this[b] = a(c);
            this.$$compose();
            return this
        }
    }

    function Qe() {
        var b = "", a = {enabled: !1, requireBase: !0, rewriteLinks: !0};
        this.hashPrefix = function (a) {
            return w(a) ? (b = a, this) : b
        };
        this.html5Mode = function (b) {
            return Sa(b) ? (a.enabled = b, this) : F(b) ? (Sa(b.enabled) && (a.enabled = b.enabled), Sa(b.requireBase) && (a.requireBase = b.requireBase), Sa(b.rewriteLinks) && (a.rewriteLinks = b.rewriteLinks), this) : a
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (c, d, e, f, g) {
            function h(a, b, c) {
                var e = k.url(),
                    f = k.$$state;
                try {
                    d.url(a, b, c), k.$$state = d.state()
                } catch (g) {
                    throw k.url(e), k.$$state = f, g;
                }
            }

            function l(a, b) {
                c.$broadcast("$locationChangeSuccess", k.absUrl(), a, k.$$state, b)
            }

            var k, n;
            n = d.baseHref();
            var m = d.url(), t;
            if (a.enabled) {
                if (!n && a.requireBase)throw yb("nobase");
                t = m.substring(0, m.indexOf("/", m.indexOf("//") + 2)) + (n || "/");
                n = e.history ? $b : ad
            } else t = Ga(m), n = ac;
            k = new n(t, "#" + b);
            k.$$parseLinkUrl(m, m);
            k.$$state = d.state();
            var s = /^\s*(javascript|mailto):/i;
            f.on("click", function (b) {
                if (a.rewriteLinks && !b.ctrlKey && !b.metaKey && !b.shiftKey && 2 != b.which && 2 != b.button) {
                    for (var e = I(b.target); "a" !== ta(e[0]);)if (e[0] === f[0] || !(e = e.parent())[0])return;
                    var h = e.prop("href"), l = e.attr("href") || e.attr("xlink:href");
                    F(h) && "[object SVGAnimatedString]" === h.toString() && (h = ya(h.animVal).href);
                    s.test(h) || !h || e.attr("target") || b.isDefaultPrevented() || !k.$$parseLinkUrl(h, l) || (b.preventDefault(), k.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                }
            });
            xb(k.absUrl()) != xb(m) && d.url(k.absUrl(), !0);
            var x = !0;
            d.onUrlChange(function (a,
                                    b) {
                c.$evalAsync(function () {
                    var d = k.absUrl(), e = k.$$state, f;
                    k.$$parse(a);
                    k.$$state = b;
                    f = c.$broadcast("$locationChangeStart", a, d, b, e).defaultPrevented;
                    k.absUrl() === a && (f ? (k.$$parse(d), k.$$state = e, h(d, !1, e)) : (x = !1, l(d, e)))
                });
                c.$$phase || c.$digest()
            });
            c.$watch(function () {
                var a = xb(d.url()), b = xb(k.absUrl()), f = d.state(), g = k.$$replace, t = a !== b || k.$$html5 && e.history && f !== k.$$state;
                if (x || t)x = !1, c.$evalAsync(function () {
                    var b = k.absUrl(), d = c.$broadcast("$locationChangeStart", b, a, k.$$state, f).defaultPrevented;
                    k.absUrl() ===
                    b && (d ? (k.$$parse(a), k.$$state = f) : (t && h(b, g, f === k.$$state ? null : k.$$state), l(a, f)))
                });
                k.$$replace = !1
            });
            return k
        }]
    }

    function Re() {
        var b = !0, a = this;
        this.debugEnabled = function (a) {
            return w(a) ? (b = a, this) : b
        };
        this.$get = ["$window", function (c) {
            function d(a) {
                a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a
            }

            function e(a) {
                var b = c.console || {}, e = b[a] || b.log || D;
                a = !1;
                try {
                    a = !!e.apply
                } catch (l) {
                }
                return a ?
                    function () {
                        var a = [];
                        r(arguments, function (b) {
                            a.push(d(b))
                        });
                        return e.apply(b, a)
                    } : function (a, b) {
                    e(a, null == b ? "" : b)
                }
            }

            return {
                log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
                    var c = e("debug");
                    return function () {
                        b && c.apply(a, arguments)
                    }
                }()
            }
        }]
    }

    function za(b, a) {
        if ("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b)throw ea("isecfld", a);
        return b
    }

    function ha(b, a) {
        if (b) {
            if (b.constructor === b)throw ea("isecfn", a);
            if (b.window ===
                b)throw ea("isecwindow", a);
            if (b.children && (b.nodeName || b.prop && b.attr && b.find))throw ea("isecdom", a);
            if (b === Object)throw ea("isecobj", a);
        }
        return b
    }

    function cd(b, a) {
        if (b) {
            if (b.constructor === b)throw ea("isecfn", a);
            if (b === Bf || b === Cf || b === Df)throw ea("isecff", a);
        }
    }

    function Ef(b, a) {
        return "undefined" !== typeof b ? b : a
    }

    function dd(b, a) {
        return "undefined" === typeof b ? a : "undefined" === typeof a ? b : b + a
    }

    function U(b, a) {
        var c, d;
        switch (b.type) {
            case p.Program:
                c = !0;
                r(b.body, function (b) {
                    U(b.expression, a);
                    c = c && b.expression.constant
                });
                b.constant = c;
                break;
            case p.Literal:
                b.constant = !0;
                b.toWatch = [];
                break;
            case p.UnaryExpression:
                U(b.argument, a);
                b.constant = b.argument.constant;
                b.toWatch = b.argument.toWatch;
                break;
            case p.BinaryExpression:
                U(b.left, a);
                U(b.right, a);
                b.constant = b.left.constant && b.right.constant;
                b.toWatch = b.left.toWatch.concat(b.right.toWatch);
                break;
            case p.LogicalExpression:
                U(b.left, a);
                U(b.right, a);
                b.constant = b.left.constant && b.right.constant;
                b.toWatch = b.constant ? [] : [b];
                break;
            case p.ConditionalExpression:
                U(b.test, a);
                U(b.alternate,
                    a);
                U(b.consequent, a);
                b.constant = b.test.constant && b.alternate.constant && b.consequent.constant;
                b.toWatch = b.constant ? [] : [b];
                break;
            case p.Identifier:
                b.constant = !1;
                b.toWatch = [b];
                break;
            case p.MemberExpression:
                U(b.object, a);
                b.computed && U(b.property, a);
                b.constant = b.object.constant && (!b.computed || b.property.constant);
                b.toWatch = [b];
                break;
            case p.CallExpression:
                c = b.filter ? !a(b.callee.name).$stateful : !1;
                d = [];
                r(b.arguments, function (b) {
                    U(b, a);
                    c = c && b.constant;
                    b.constant || d.push.apply(d, b.toWatch)
                });
                b.constant = c;
                b.toWatch = b.filter && !a(b.callee.name).$stateful ? d : [b];
                break;
            case p.AssignmentExpression:
                U(b.left, a);
                U(b.right, a);
                b.constant = b.left.constant && b.right.constant;
                b.toWatch = [b];
                break;
            case p.ArrayExpression:
                c = !0;
                d = [];
                r(b.elements, function (b) {
                    U(b, a);
                    c = c && b.constant;
                    b.constant || d.push.apply(d, b.toWatch)
                });
                b.constant = c;
                b.toWatch = d;
                break;
            case p.ObjectExpression:
                c = !0;
                d = [];
                r(b.properties, function (b) {
                    U(b.value, a);
                    c = c && b.value.constant;
                    b.value.constant || d.push.apply(d, b.value.toWatch)
                });
                b.constant = c;
                b.toWatch =
                    d;
                break;
            case p.ThisExpression:
                b.constant = !1, b.toWatch = []
        }
    }

    function ed(b) {
        if (1 == b.length) {
            b = b[0].expression;
            var a = b.toWatch;
            return 1 !== a.length ? a : a[0] !== b ? a : u
        }
    }

    function fd(b) {
        return b.type === p.Identifier || b.type === p.MemberExpression
    }

    function gd(b) {
        if (1 === b.body.length && fd(b.body[0].expression))return {
            type: p.AssignmentExpression,
            left: b.body[0].expression,
            right: {type: p.NGValueParameter},
            operator: "="
        }
    }

    function hd(b) {
        return 0 === b.body.length || 1 === b.body.length && (b.body[0].expression.type === p.Literal ||
            b.body[0].expression.type === p.ArrayExpression || b.body[0].expression.type === p.ObjectExpression)
    }

    function id(b, a) {
        this.astBuilder = b;
        this.$filter = a
    }

    function jd(b, a) {
        this.astBuilder = b;
        this.$filter = a
    }

    function Ab(b, a, c, d) {
        ha(b, d);
        a = a.split(".");
        for (var e, f = 0; 1 < a.length; f++) {
            e = za(a.shift(), d);
            var g = ha(b[e], d);
            g || (g = {}, b[e] = g);
            b = g
        }
        e = za(a.shift(), d);
        ha(b[e], d);
        return b[e] = c
    }

    function Bb(b) {
        return "constructor" == b
    }

    function bc(b) {
        return C(b.valueOf) ? b.valueOf() : Ff.call(b)
    }

    function Se() {
        var b = qa(), a = qa();
        this.$get =
            ["$filter", "$sniffer", function (c, d) {
                function e(a, b) {
                    return null == a || null == b ? a === b : "object" === typeof a && (a = bc(a), "object" === typeof a) ? !1 : a === b || a !== a && b !== b
                }

                function f(a, b, c, d, f) {
                    var g = d.inputs, h;
                    if (1 === g.length) {
                        var l = e, g = g[0];
                        return a.$watch(function (a) {
                            var b = g(a);
                            e(b, l) || (h = d(a, u, u, [b]), l = b && bc(b));
                            return h
                        }, b, c, f)
                    }
                    for (var k = [], m = [], n = 0, E = g.length; n < E; n++)k[n] = e, m[n] = null;
                    return a.$watch(function (a) {
                        for (var b = !1, c = 0, f = g.length; c < f; c++) {
                            var l = g[c](a);
                            if (b || (b = !e(l, k[c])))m[c] = l, k[c] = l && bc(l)
                        }
                        b &&
                        (h = d(a, u, u, m));
                        return h
                    }, b, c, f)
                }

                function g(a, b, c, d) {
                    var e, f;
                    return e = a.$watch(function (a) {
                        return d(a)
                    }, function (a, c, d) {
                        f = a;
                        C(b) && b.apply(this, arguments);
                        w(a) && d.$$postDigest(function () {
                            w(f) && e()
                        })
                    }, c)
                }

                function h(a, b, c, d) {
                    function e(a) {
                        var b = !0;
                        r(a, function (a) {
                            w(a) || (b = !1)
                        });
                        return b
                    }

                    var f, g;
                    return f = a.$watch(function (a) {
                        return d(a)
                    }, function (a, c, d) {
                        g = a;
                        C(b) && b.call(this, a, c, d);
                        e(a) && d.$$postDigest(function () {
                            e(g) && f()
                        })
                    }, c)
                }

                function l(a, b, c, d) {
                    var e;
                    return e = a.$watch(function (a) {
                        return d(a)
                    }, function (a,
                                 c, d) {
                        C(b) && b.apply(this, arguments);
                        e()
                    }, c)
                }

                function k(a, b) {
                    if (!b)return a;
                    var c = a.$$watchDelegate, c = c !== h && c !== g ? function (c, d, e, f) {
                        e = a(c, d, e, f);
                        return b(e, c, d)
                    } : function (c, d, e, f) {
                        e = a(c, d, e, f);
                        c = b(e, c, d);
                        return w(e) ? c : e
                    };
                    a.$$watchDelegate && a.$$watchDelegate !== f ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = f, c.inputs = a.inputs ? a.inputs : [a]);
                    return c
                }

                var n = {csp: d.csp, expensiveChecks: !1}, m = {csp: d.csp, expensiveChecks: !0};
                return function (d, e, x) {
                    var y, q, z;
                    switch (typeof d) {
                        case "string":
                            z =
                                d = d.trim();
                            var r = x ? a : b;
                            y = r[z];
                            y || (":" === d.charAt(0) && ":" === d.charAt(1) && (q = !0, d = d.substring(2)), x = x ? m : n, y = new cc(x), y = (new dc(y, c, x)).parse(d), y.constant ? y.$$watchDelegate = l : q ? y.$$watchDelegate = y.literal ? h : g : y.inputs && (y.$$watchDelegate = f), r[z] = y);
                            return k(y, e);
                        case "function":
                            return k(d, e);
                        default:
                            return D
                    }
                }
            }]
    }

    function Ue() {
        this.$get = ["$rootScope", "$exceptionHandler", function (b, a) {
            return kd(function (a) {
                b.$evalAsync(a)
            }, a)
        }]
    }

    function Ve() {
        this.$get = ["$browser", "$exceptionHandler", function (b, a) {
            return kd(function (a) {
                    b.defer(a)
                },
                a)
        }]
    }

    function kd(b, a) {
        function c(a, b, c) {
            function d(b) {
                return function (c) {
                    e || (e = !0, b.call(a, c))
                }
            }

            var e = !1;
            return [d(b), d(c)]
        }

        function d() {
            this.$$state = {status: 0}
        }

        function e(a, b) {
            return function (c) {
                b.call(a, c)
            }
        }

        function f(c) {
            !c.processScheduled && c.pending && (c.processScheduled = !0, b(function () {
                var b, d, e;
                e = c.pending;
                c.processScheduled = !1;
                c.pending = u;
                for (var f = 0, g = e.length; f < g; ++f) {
                    d = e[f][0];
                    b = e[f][c.status];
                    try {
                        C(b) ? d.resolve(b(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value)
                    } catch (h) {
                        d.reject(h),
                            a(h)
                    }
                }
            }))
        }

        function g() {
            this.promise = new d;
            this.resolve = e(this, this.resolve);
            this.reject = e(this, this.reject);
            this.notify = e(this, this.notify)
        }

        var h = R("$q", TypeError);
        d.prototype = {
            then: function (a, b, c) {
                var d = new g;
                this.$$state.pending = this.$$state.pending || [];
                this.$$state.pending.push([d, a, b, c]);
                0 < this.$$state.status && f(this.$$state);
                return d.promise
            }, "catch": function (a) {
                return this.then(null, a)
            }, "finally": function (a, b) {
                return this.then(function (b) {
                    return k(b, !0, a)
                }, function (b) {
                    return k(b, !1, a)
                }, b)
            }
        };
        g.prototype = {
            resolve: function (a) {
                this.promise.$$state.status || (a === this.promise ? this.$$reject(h("qcycle", a)) : this.$$resolve(a))
            }, $$resolve: function (b) {
                var d, e;
                e = c(this, this.$$resolve, this.$$reject);
                try {
                    if (F(b) || C(b))d = b && b.then;
                    C(d) ? (this.promise.$$state.status = -1, d.call(b, e[0], e[1], this.notify)) : (this.promise.$$state.value = b, this.promise.$$state.status = 1, f(this.promise.$$state))
                } catch (g) {
                    e[1](g), a(g)
                }
            }, reject: function (a) {
                this.promise.$$state.status || this.$$reject(a)
            }, $$reject: function (a) {
                this.promise.$$state.value =
                    a;
                this.promise.$$state.status = 2;
                f(this.promise.$$state)
            }, notify: function (c) {
                var d = this.promise.$$state.pending;
                0 >= this.promise.$$state.status && d && d.length && b(function () {
                    for (var b, e, f = 0, g = d.length; f < g; f++) {
                        e = d[f][0];
                        b = d[f][3];
                        try {
                            e.notify(C(b) ? b(c) : c)
                        } catch (h) {
                            a(h)
                        }
                    }
                })
            }
        };
        var l = function (a, b) {
            var c = new g;
            b ? c.resolve(a) : c.reject(a);
            return c.promise
        }, k = function (a, b, c) {
            var d = null;
            try {
                C(c) && (d = c())
            } catch (e) {
                return l(e, !1)
            }
            return d && C(d.then) ? d.then(function () {
                return l(a, b)
            }, function (a) {
                return l(a, !1)
            }) :
                l(a, b)
        }, n = function (a, b, c, d) {
            var e = new g;
            e.resolve(a);
            return e.promise.then(b, c, d)
        }, m = function s(a) {
            if (!C(a))throw h("norslvr", a);
            if (!(this instanceof s))return new s(a);
            var b = new g;
            a(function (a) {
                b.resolve(a)
            }, function (a) {
                b.reject(a)
            });
            return b.promise
        };
        m.defer = function () {
            return new g
        };
        m.reject = function (a) {
            var b = new g;
            b.reject(a);
            return b.promise
        };
        m.when = n;
        m.all = function (a) {
            var b = new g, c = 0, d = J(a) ? [] : {};
            r(a, function (a, e) {
                c++;
                n(a).then(function (a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                }, function (a) {
                    d.hasOwnProperty(e) ||
                    b.reject(a)
                })
            });
            0 === c && b.resolve(d);
            return b.promise
        };
        return m
    }

    function df() {
        this.$get = ["$window", "$timeout", function (b, a) {
            var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame, d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.webkitCancelRequestAnimationFrame, e = !!c, f = e ? function (a) {
                var b = c(a);
                return function () {
                    d(b)
                }
            } : function (b) {
                var c = a(b, 16.66, !1);
                return function () {
                    a.cancel(c)
                }
            };
            f.supported = e;
            return f
        }]
    }

    function Te() {
        var b = 10, a = R("$rootScope"), c = null, d = null;
        this.digestTtl = function (a) {
            arguments.length &&
            (b = a);
            return b
        };
        this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (e, f, g, h) {
            function l() {
                this.$id = ++eb;
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this.$root = this;
                this.$$destroyed = !1;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$watchersCount = 0;
                this.$$isolateBindings = null
            }

            function k(b) {
                if (p.$$phase)throw a("inprog", p.$$phase);
                p.$$phase = b
            }

            function n(a, b) {
                do a.$$watchersCount += b; while (a = a.$parent)
            }

            function m(a,
                       b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
            }

            function t() {
            }

            function s() {
                for (; u.length;)try {
                    u.shift()()
                } catch (a) {
                    f(a)
                }
                d = null
            }

            function x() {
                null === d && (d = h.defer(function () {
                    p.$apply(s)
                }))
            }

            l.prototype = {
                constructor: l, $new: function (a, b) {
                    function c() {
                        d.$$destroyed = !0
                    }

                    var d;
                    b = b || this;
                    a ? (d = new l, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = function () {
                        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                        this.$$listeners =
                        {};
                        this.$$listenerCount = {};
                        this.$$watchersCount = 0;
                        this.$id = ++eb;
                        this.$$ChildScope = null
                    }, this.$$ChildScope.prototype = this), d = new this.$$ChildScope);
                    d.$parent = b;
                    d.$$prevSibling = b.$$childTail;
                    b.$$childHead ? (b.$$childTail.$$nextSibling = d, b.$$childTail = d) : b.$$childHead = b.$$childTail = d;
                    (a || b != this) && d.$on("$destroy", c);
                    return d
                }, $watch: function (a, b, d, e) {
                    var f = g(a);
                    if (f.$$watchDelegate)return f.$$watchDelegate(this, b, d, f, a);
                    var h = this, l = h.$$watchers, k = {fn: b, last: t, get: f, exp: e || a, eq: !!d};
                    c = null;
                    C(b) || (k.fn =
                        D);
                    l || (l = h.$$watchers = []);
                    l.unshift(k);
                    n(this, 1);
                    return function () {
                        0 <= Ta(l, k) && n(h, -1);
                        c = null
                    }
                }, $watchGroup: function (a, b) {
                    function c() {
                        h = !1;
                        l ? (l = !1, b(e, e, g)) : b(e, d, g)
                    }

                    var d = Array(a.length), e = Array(a.length), f = [], g = this, h = !1, l = !0;
                    if (!a.length) {
                        var k = !0;
                        g.$evalAsync(function () {
                            k && b(e, e, g)
                        });
                        return function () {
                            k = !1
                        }
                    }
                    if (1 === a.length)return this.$watch(a[0], function (a, c, f) {
                        e[0] = a;
                        d[0] = c;
                        b(e, a === c ? e : d, f)
                    });
                    r(a, function (a, b) {
                        var l = g.$watch(a, function (a, f) {
                            e[b] = a;
                            d[b] = f;
                            h || (h = !0, g.$evalAsync(c))
                        });
                        f.push(l)
                    });
                    return function () {
                        for (; f.length;)f.shift()()
                    }
                }, $watchCollection: function (a, b) {
                    function c(a) {
                        e = a;
                        var b, d, g, h;
                        if (!H(e)) {
                            if (F(e))if (Oa(e))for (f !== n && (f = n, q = f.length = 0, k++), a = e.length, q !== a && (k++, f.length = q = a), b = 0; b < a; b++)h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (k++, f[b] = g); else {
                                f !== t && (f = t = {}, q = 0, k++);
                                a = 0;
                                for (b in e)e.hasOwnProperty(b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (k++, f[b] = g)) : (q++, f[b] = g, k++));
                                if (q > a)for (b in k++, f)e.hasOwnProperty(b) || (q--, delete f[b])
                            } else f !== e && (f = e, k++);
                            return k
                        }
                    }

                    c.$stateful = !0;
                    var d = this, e, f, h, l = 1 < b.length, k = 0, m = g(a, c), n = [], t = {}, s = !0, q = 0;
                    return this.$watch(m, function () {
                        s ? (s = !1, b(e, e, d)) : b(e, h, d);
                        if (l)if (F(e))if (Oa(e)) {
                            h = Array(e.length);
                            for (var a = 0; a < e.length; a++)h[a] = e[a]
                        } else for (a in h = {}, e)pc.call(e, a) && (h[a] = e[a]); else h = e
                    })
                }, $digest: function () {
                    var e, g, l, m, n, r, x = b, u, A = [], Z, w;
                    k("$digest");
                    h.$$checkUrlChange();
                    this === p && null !== d && (h.defer.cancel(d), s());
                    c = null;
                    do {
                        r = !1;
                        for (u = this; q.length;) {
                            try {
                                w = q.shift(), w.scope.$eval(w.expression, w.locals)
                            } catch (I) {
                                f(I)
                            }
                            c =
                                null
                        }
                        a:do {
                            if (m = u.$$watchers)for (n = m.length; n--;)try {
                                if (e = m[n])if ((g = e.get(u)) !== (l = e.last) && !(e.eq ? ka(g, l) : "number" === typeof g && "number" === typeof l && isNaN(g) && isNaN(l)))r = !0, c = e, e.last = e.eq ? ua(g, null) : g, e.fn(g, l === t ? g : l, u), 5 > x && (Z = 4 - x, A[Z] || (A[Z] = []), A[Z].push({
                                    msg: C(e.exp) ? "fn: " + (e.exp.name || e.exp.toString()) : e.exp,
                                    newVal: g,
                                    oldVal: l
                                })); else if (e === c) {
                                    r = !1;
                                    break a
                                }
                            } catch (D) {
                                f(D)
                            }
                            if (!(m = u.$$watchersCount && u.$$childHead || u !== this && u.$$nextSibling))for (; u !== this && !(m = u.$$nextSibling);)u = u.$parent
                        } while (u =
                            m);
                        if ((r || q.length) && !x--)throw p.$$phase = null, a("infdig", b, A);
                    } while (r || q.length);
                    for (p.$$phase = null; z.length;)try {
                        z.shift()()
                    } catch (G) {
                        f(G)
                    }
                }, $destroy: function () {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        if (this !== p) {
                            n(this, -this.$$watchersCount);
                            for (var b in this.$$listenerCount)m(this, this.$$listenerCount[b], b);
                            a.$$childHead == this && (a.$$childHead = this.$$nextSibling);
                            a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
                            this.$$prevSibling && (this.$$prevSibling.$$nextSibling =
                                this.$$nextSibling);
                            this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                            this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = D;
                            this.$on = this.$watch = this.$watchGroup = function () {
                                return D
                            };
                            this.$$listeners = {};
                            this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                        }
                    }
                }, $eval: function (a, b) {
                    return g(a)(this, b)
                }, $evalAsync: function (a, b) {
                    p.$$phase || q.length || h.defer(function () {
                        q.length && p.$digest()
                    });
                    q.push({
                        scope: this,
                        expression: a, locals: b
                    })
                }, $$postDigest: function (a) {
                    z.push(a)
                }, $apply: function (a) {
                    try {
                        return k("$apply"), this.$eval(a)
                    } catch (b) {
                        f(b)
                    } finally {
                        p.$$phase = null;
                        try {
                            p.$digest()
                        } catch (c) {
                            throw f(c), c;
                        }
                    }
                }, $applyAsync: function (a) {
                    function b() {
                        c.$eval(a)
                    }

                    var c = this;
                    a && u.push(b);
                    x()
                }, $on: function (a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []);
                    c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function () {
                        var d = c.indexOf(b);
                        -1 !== d && (c[d] = null, m(e, 1, a))
                    }
                }, $emit: function (a, b) {
                    var c = [], d, e = this, g = !1, h = {
                        name: a, targetScope: e, stopPropagation: function () {
                            g = !0
                        }, preventDefault: function () {
                            h.defaultPrevented = !0
                        }, defaultPrevented: !1
                    }, l = Ua([h], arguments, 1), k, m;
                    do {
                        d = e.$$listeners[a] || c;
                        h.currentScope = e;
                        k = 0;
                        for (m = d.length; k < m; k++)if (d[k])try {
                            d[k].apply(null, l)
                        } catch (n) {
                            f(n)
                        } else d.splice(k, 1), k--, m--;
                        if (g)return h.currentScope = null, h;
                        e = e.$parent
                    } while (e);
                    h.currentScope = null;
                    return h
                }, $broadcast: function (a, b) {
                    var c = this, d = this, e = {
                        name: a,
                        targetScope: this, preventDefault: function () {
                            e.defaultPrevented = !0
                        }, defaultPrevented: !1
                    };
                    if (!this.$$listenerCount[a])return e;
                    for (var g = Ua([e], arguments, 1), h, l; c = d;) {
                        e.currentScope = c;
                        d = c.$$listeners[a] || [];
                        h = 0;
                        for (l = d.length; h < l; h++)if (d[h])try {
                            d[h].apply(null, g)
                        } catch (k) {
                            f(k)
                        } else d.splice(h, 1), h--, l--;
                        if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))for (; c !== this && !(d = c.$$nextSibling);)c = c.$parent
                    }
                    e.currentScope = null;
                    return e
                }
            };
            var p = new l, q = p.$$asyncQueue = [], z = p.$$postDigestQueue =
                [], u = p.$$applyAsyncQueue = [];
            return p
        }]
    }

    function Wd() {
        var b = /^\s*(https?|ftp|mailto|tel|file):/, a = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (a) {
            return w(a) ? (b = a, this) : b
        };
        this.imgSrcSanitizationWhitelist = function (b) {
            return w(b) ? (a = b, this) : a
        };
        this.$get = function () {
            return function (c, d) {
                var e = d ? a : b, f;
                f = ya(c).href;
                return "" === f || f.match(e) ? c : "unsafe:" + f
            }
        }
    }

    function Gf(b) {
        if ("self" === b)return b;
        if (M(b)) {
            if (-1 < b.indexOf("***"))throw Aa("iwcard", b);
            b = ld(b).replace("\\*\\*",
                ".*").replace("\\*", "[^:/.?&;]*");
            return new RegExp("^" + b + "$")
        }
        if (fb(b))return new RegExp("^" + b.source + "$");
        throw Aa("imatcher");
    }

    function md(b) {
        var a = [];
        w(b) && r(b, function (b) {
            a.push(Gf(b))
        });
        return a
    }

    function Xe() {
        this.SCE_CONTEXTS = ja;
        var b = ["self"], a = [];
        this.resourceUrlWhitelist = function (a) {
            arguments.length && (b = md(a));
            return b
        };
        this.resourceUrlBlacklist = function (b) {
            arguments.length && (a = md(b));
            return a
        };
        this.$get = ["$injector", function (c) {
            function d(a, b) {
                return "self" === a ? Yc(b) : !!a.exec(b.href)
            }

            function e(a) {
                var b =
                    function (a) {
                        this.$$unwrapTrustedValue = function () {
                            return a
                        }
                    };
                a && (b.prototype = new a);
                b.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                };
                b.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                };
                return b
            }

            var f = function (a) {
                throw Aa("unsafe");
            };
            c.has("$sanitize") && (f = c.get("$sanitize"));
            var g = e(), h = {};
            h[ja.HTML] = e(g);
            h[ja.CSS] = e(g);
            h[ja.URL] = e(g);
            h[ja.JS] = e(g);
            h[ja.RESOURCE_URL] = e(h[ja.URL]);
            return {
                trustAs: function (a, b) {
                    var c = h.hasOwnProperty(a) ? h[a] : null;
                    if (!c)throw Aa("icontext",
                        a, b);
                    if (null === b || b === u || "" === b)return b;
                    if ("string" !== typeof b)throw Aa("itype", a);
                    return new c(b)
                }, getTrusted: function (c, e) {
                    if (null === e || e === u || "" === e)return e;
                    var g = h.hasOwnProperty(c) ? h[c] : null;
                    if (g && e instanceof g)return e.$$unwrapTrustedValue();
                    if (c === ja.RESOURCE_URL) {
                        var g = ya(e.toString()), m, t, s = !1;
                        m = 0;
                        for (t = b.length; m < t; m++)if (d(b[m], g)) {
                            s = !0;
                            break
                        }
                        if (s)for (m = 0, t = a.length; m < t; m++)if (d(a[m], g)) {
                            s = !1;
                            break
                        }
                        if (s)return e;
                        throw Aa("insecurl", e.toString());
                    }
                    if (c === ja.HTML)return f(e);
                    throw Aa("unsafe");
                }, valueOf: function (a) {
                    return a instanceof g ? a.$$unwrapTrustedValue() : a
                }
            }
        }]
    }

    function We() {
        var b = !0;
        this.enabled = function (a) {
            arguments.length && (b = !!a);
            return b
        };
        this.$get = ["$parse", "$sceDelegate", function (a, c) {
            if (b && 8 > ab)throw Aa("iequirks");
            var d = fa(ja);
            d.isEnabled = function () {
                return b
            };
            d.trustAs = c.trustAs;
            d.getTrusted = c.getTrusted;
            d.valueOf = c.valueOf;
            b || (d.trustAs = d.getTrusted = function (a, b) {
                return b
            }, d.valueOf = Qa);
            d.parseAs = function (b, c) {
                var e = a(c);
                return e.literal && e.constant ? e : a(c, function (a) {
                    return d.getTrusted(b,
                        a)
                })
            };
            var e = d.parseAs, f = d.getTrusted, g = d.trustAs;
            r(ja, function (a, b) {
                var c = G(b);
                d[$a("parse_as_" + c)] = function (b) {
                    return e(a, b)
                };
                d[$a("get_trusted_" + c)] = function (b) {
                    return f(a, b)
                };
                d[$a("trust_as_" + c)] = function (b) {
                    return g(a, b)
                }
            });
            return d
        }]
    }

    function Ye() {
        this.$get = ["$window", "$document", function (b, a) {
            var c = {}, d = ba((/android (\d+)/.exec(G((b.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((b.navigator || {}).userAgent), f = a[0] || {}, g, h = /^(Moz|webkit|ms)(?=[A-Z])/, l = f.body && f.body.style, k = !1, n = !1;
            if (l) {
                for (var m in l)if (k =
                        h.exec(m)) {
                    g = k[0];
                    g = g.substr(0, 1).toUpperCase() + g.substr(1);
                    break
                }
                g || (g = "WebkitOpacity"in l && "webkit");
                k = !!("transition"in l || g + "Transition"in l);
                n = !!("animation"in l || g + "Animation"in l);
                !d || k && n || (k = M(l.webkitTransition), n = M(l.webkitAnimation))
            }
            return {
                history: !(!b.history || !b.history.pushState || 4 > d || e), hasEvent: function (a) {
                    if ("input" === a && 11 >= ab)return !1;
                    if (H(c[a])) {
                        var b = f.createElement("div");
                        c[a] = "on" + a in b
                    }
                    return c[a]
                }, csp: Ya(), vendorPrefix: g, transitions: k, animations: n, android: d
            }
        }]
    }

    function $e() {
        this.$get =
            ["$templateCache", "$http", "$q", function (b, a, c) {
                function d(e, f) {
                    d.totalPendingRequests++;
                    var g = a.defaults && a.defaults.transformResponse;
                    J(g) ? g = g.filter(function (a) {
                        return a !== Vb
                    }) : g === Vb && (g = null);
                    return a.get(e, {cache: b, transformResponse: g}).finally(function () {
                        d.totalPendingRequests--
                    }).then(function (a) {
                        b.put(e, a.data);
                        return a.data
                    }, function (a) {
                        if (!f)throw ia("tpload", e, a.status, a.statusText);
                        return c.reject(a)
                    })
                }

                d.totalPendingRequests = 0;
                return d
            }]
    }

    function af() {
        this.$get = ["$rootScope", "$browser",
            "$location", function (b, a, c) {
                return {
                    findBindings: function (a, b, c) {
                        a = a.getElementsByClassName("ng-binding");
                        var g = [];
                        r(a, function (a) {
                            var d = ca.element(a).data("$binding");
                            d && r(d, function (d) {
                                c ? (new RegExp("(^|\\s)" + ld(b) + "(\\s|\\||$)")).test(d) && g.push(a) : -1 != d.indexOf(b) && g.push(a)
                            })
                        });
                        return g
                    }, findModels: function (a, b, c) {
                        for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
                            var l = a.querySelectorAll("[" + g[h] + "model" + (c ? "=" : "*=") + '"' + b + '"]');
                            if (l.length)return l
                        }
                    }, getLocation: function () {
                        return c.url()
                    },
                    setLocation: function (a) {
                        a !== c.url() && (c.url(a), b.$digest())
                    }, whenStable: function (b) {
                        a.notifyWhenNoOutstandingRequests(b)
                    }
                }
            }]
    }

    function bf() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (b, a, c, d, e) {
            function f(f, l, k) {
                C(f) || (k = l, l = f, f = D);
                var n = w(k) && !k, m = (n ? d : c).defer(), t = m.promise;
                l = a.defer(function () {
                    try {
                        m.resolve(f())
                    } catch (a) {
                        m.reject(a), e(a)
                    } finally {
                        delete g[t.$$timeoutId]
                    }
                    n || b.$apply()
                }, l);
                t.$$timeoutId = l;
                g[l] = m;
                return t
            }

            var g = {};
            f.cancel = function (b) {
                return b && b.$$timeoutId in
                g ? (g[b.$$timeoutId].reject("canceled"), delete g[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1
            };
            return f
        }]
    }

    function ya(b) {
        ab && ($.setAttribute("href", b), b = $.href);
        $.setAttribute("href", b);
        return {
            href: $.href,
            protocol: $.protocol ? $.protocol.replace(/:$/, "") : "",
            host: $.host,
            search: $.search ? $.search.replace(/^\?/, "") : "",
            hash: $.hash ? $.hash.replace(/^#/, "") : "",
            hostname: $.hostname,
            port: $.port,
            pathname: "/" === $.pathname.charAt(0) ? $.pathname : "/" + $.pathname
        }
    }

    function Yc(b) {
        b = M(b) ? ya(b) : b;
        return b.protocol ===
            nd.protocol && b.host === nd.host
    }

    function cf() {
        this.$get = oa(O)
    }

    function Cc(b) {
        function a(c, d) {
            if (F(c)) {
                var e = {};
                r(c, function (b, c) {
                    e[c] = a(c, b)
                });
                return e
            }
            return b.factory(c + "Filter", d)
        }

        this.register = a;
        this.$get = ["$injector", function (a) {
            return function (b) {
                return a.get(b + "Filter")
            }
        }];
        a("currency", od);
        a("date", pd);
        a("filter", Hf);
        a("json", If);
        a("limitTo", Jf);
        a("lowercase", Kf);
        a("number", qd);
        a("orderBy", rd);
        a("uppercase", Lf)
    }

    function Hf() {
        return function (b, a, c) {
            if (!J(b)) {
                if (null == b)return b;
                throw R("filter")("notarray",
                    b);
            }
            var d;
            switch (typeof a) {
                case "function":
                    break;
                case "boolean":
                case "number":
                case "string":
                    d = !0;
                case "object":
                    a = Mf(a, c, d);
                    break;
                default:
                    return b
            }
            return b.filter(a)
        }
    }

    function Mf(b, a, c) {
        var d = F(b) && "$"in b;
        !0 === a ? a = ka : C(a) || (a = function (a, b) {
            if (F(a) || F(b))return !1;
            a = G("" + a);
            b = G("" + b);
            return -1 !== a.indexOf(b)
        });
        return function (e) {
            return d && !F(e) ? Ha(e, b.$, a, !1) : Ha(e, b, a, c)
        }
    }

    function Ha(b, a, c, d, e) {
        var f = typeof b, g = typeof a;
        if ("string" === g && "!" === a.charAt(0))return !Ha(b, a.substring(1), c, d);
        if (J(b))return b.some(function (b) {
            return Ha(b,
                a, c, d)
        });
        switch (f) {
            case "object":
                var h;
                if (d) {
                    for (h in b)if ("$" !== h.charAt(0) && Ha(b[h], a, c, !0))return !0;
                    return e ? !1 : Ha(b, a, c, !1)
                }
                if ("object" === g) {
                    for (h in a)if (e = a[h], !C(e) && (f = "$" === h, !Ha(f ? b : b[h], e, c, f, f)))return !1;
                    return !0
                }
                return c(b, a);
            case "function":
                return !1;
            default:
                return c(b, a)
        }
    }

    function od(b) {
        var a = b.NUMBER_FORMATS;
        return function (b, d, e) {
            H(d) && (d = a.CURRENCY_SYM);
            H(e) && (e = a.PATTERNS[1].maxFrac);
            return null == b ? b : sd(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, e).replace(/\u00A4/g, d)
        }
    }

    function qd(b) {
        var a =
            b.NUMBER_FORMATS;
        return function (b, d) {
            return null == b ? b : sd(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
        }
    }

    function sd(b, a, c, d, e) {
        if (F(b))return "";
        var f = 0 > b;
        b = Math.abs(b);
        var g = Infinity === b;
        if (!g && !isFinite(b))return "";
        var h = b + "", l = "", k = !1, n = [];
        g && (l = "\u221e");
        if (!g && -1 !== h.indexOf("e")) {
            var m = h.match(/([\d\.]+)e(-?)(\d+)/);
            m && "-" == m[2] && m[3] > e + 1 ? b = 0 : (l = h, k = !0)
        }
        if (g || k)0 < e && 1 > b && (l = b.toFixed(e), b = parseFloat(l)); else {
            g = (h.split(td)[1] || "").length;
            H(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));
            b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);
            var g = ("" + b).split(td), h = g[0], g = g[1] || "", m = 0, t = a.lgSize, s = a.gSize;
            if (h.length >= t + s)for (m = h.length - t, k = 0; k < m; k++)0 === (m - k) % s && 0 !== k && (l += c), l += h.charAt(k);
            for (k = m; k < h.length; k++)0 === (h.length - k) % t && 0 !== k && (l += c), l += h.charAt(k);
            for (; g.length < e;)g += "0";
            e && "0" !== e && (l += d + g.substr(0, e))
        }
        0 === b && (f = !1);
        n.push(f ? a.negPre : a.posPre, l, f ? a.negSuf : a.posSuf);
        return n.join("")
    }

    function Cb(b, a, c) {
        var d = "";
        0 > b && (d = "-", b = -b);
        for (b = "" + b; b.length < a;)b = "0" + b;
        c && (b =
            b.substr(b.length - a));
        return d + b
    }

    function aa(b, a, c, d) {
        c = c || 0;
        return function (e) {
            e = e["get" + b]();
            if (0 < c || e > -c)e += c;
            0 === e && -12 == c && (e = 12);
            return Cb(e, a, d)
        }
    }

    function Db(b, a) {
        return function (c, d) {
            var e = c["get" + b](), f = lb(a ? "SHORT" + b : b);
            return d[f][e]
        }
    }

    function ud(b) {
        var a = (new Date(b, 0, 1)).getDay();
        return new Date(b, 0, (4 >= a ? 5 : 12) - a)
    }

    function vd(b) {
        return function (a) {
            var c = ud(a.getFullYear());
            a = +new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay())) - +c;
            a = 1 + Math.round(a / 6048E5);
            return Cb(a, b)
        }
    }

    function pd(b) {
        function a(a) {
            var b;
            if (b = a.match(c)) {
                a = new Date(0);
                var f = 0, g = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, l = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (f = ba(b[9] + b[10]), g = ba(b[9] + b[11]));
                h.call(a, ba(b[1]), ba(b[2]) - 1, ba(b[3]));
                f = ba(b[4] || 0) - f;
                g = ba(b[5] || 0) - g;
                h = ba(b[6] || 0);
                b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
                l.call(a, f, g, h, b)
            }
            return a
        }

        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, e, f) {
            var g = "", h = [], l, k;
            e = e ||
            "mediumDate";
            e = b.DATETIME_FORMATS[e] || e;
            M(c) && (c = Nf.test(c) ? ba(c) : a(c));
            S(c) && (c = new Date(c));
            if (!pa(c) || !isFinite(c.getTime()))return c;
            for (; e;)(k = Of.exec(e)) ? (h = Ua(h, k, 1), e = h.pop()) : (h.push(e), e = null);
            var n = c.getTimezoneOffset();
            f && (e = Date.parse("Jan 01, 1970 00:00:00 " + f) / 6E4, isNaN(e) || (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + n - e), n = e));
            r(h, function (a) {
                l = Pf[a];
                g += l ? l(c, b.DATETIME_FORMATS, n) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return g
        }
    }

    function If() {
        return function (b, a) {
            H(a) &&
            (a = 2);
            return Wa(b, a)
        }
    }

    function Jf() {
        return function (b, a) {
            a = Infinity === Math.abs(Number(a)) ? Number(a) : ba(a);
            if (isNaN(a))return b;
            S(b) && (b = b.toString());
            return J(b) || M(b) ? 0 <= a ? b.slice(0, a) : b.slice(a) : b
        }
    }

    function rd(b) {
        return function (a, c, d) {
            function e(a, b) {
                return b ? function (b, c) {
                    return a(c, b)
                } : a
            }

            function f(a) {
                switch (typeof a) {
                    case "number":
                    case "boolean":
                    case "string":
                        return !0;
                    default:
                        return !1
                }
            }

            function g(a) {
                return null === a ? "null" : "function" === typeof a.valueOf && (a = a.valueOf(), f(a)) || "function" === typeof a.toString &&
                (a = a.toString(), f(a)) ? a : ""
            }

            function h(a, b) {
                var c = typeof a, d = typeof b;
                c === d && "object" === c && (a = g(a), b = g(b));
                return c === d ? ("string" === c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1
            }

            if (!Oa(a))return a;
            c = J(c) ? c : [c];
            0 === c.length && (c = ["+"]);
            c = c.map(function (a) {
                var c = !1, d = a || Qa;
                if (M(a)) {
                    if ("+" == a.charAt(0) || "-" == a.charAt(0))c = "-" == a.charAt(0), a = a.substring(1);
                    if ("" === a)return e(h, c);
                    d = b(a);
                    if (d.constant) {
                        var f = d();
                        return e(function (a, b) {
                            return h(a[f], b[f])
                        }, c)
                    }
                }
                return e(function (a, b) {
                    return h(d(a),
                        d(b))
                }, c)
            });
            return Va.call(a).sort(e(function (a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e)return e
                }
                return 0
            }, d))
        }
    }

    function Ia(b) {
        C(b) && (b = {link: b});
        b.restrict = b.restrict || "AC";
        return oa(b)
    }

    function wd(b, a, c, d, e) {
        var f = this, g = [], h = f.$$parentForm = b.parent().controller("form") || Eb;
        f.$error = {};
        f.$$success = {};
        f.$pending = u;
        f.$name = e(a.name || a.ngForm || "")(c);
        f.$dirty = !1;
        f.$pristine = !0;
        f.$valid = !0;
        f.$invalid = !1;
        f.$submitted = !1;
        h.$addControl(f);
        f.$rollbackViewValue = function () {
            r(g, function (a) {
                a.$rollbackViewValue()
            })
        };
        f.$commitViewValue = function () {
            r(g, function (a) {
                a.$commitViewValue()
            })
        };
        f.$addControl = function (a) {
            La(a.$name, "input");
            g.push(a);
            a.$name && (f[a.$name] = a)
        };
        f.$$renameControl = function (a, b) {
            var c = a.$name;
            f[c] === a && delete f[c];
            f[b] = a;
            a.$name = b
        };
        f.$removeControl = function (a) {
            a.$name && f[a.$name] === a && delete f[a.$name];
            r(f.$pending, function (b, c) {
                f.$setValidity(c, null, a)
            });
            r(f.$error, function (b, c) {
                f.$setValidity(c, null, a)
            });
            r(f.$$success, function (b, c) {
                f.$setValidity(c, null, a)
            });
            Ta(g, a)
        };
        xd({
            ctrl: this, $element: b,
            set: function (a, b, c) {
                var d = a[b];
                d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c]
            }, unset: function (a, b, c) {
                var d = a[b];
                d && (Ta(d, c), 0 === d.length && delete a[b])
            }, parentForm: h, $animate: d
        });
        f.$setDirty = function () {
            d.removeClass(b, Na);
            d.addClass(b, Fb);
            f.$dirty = !0;
            f.$pristine = !1;
            h.$setDirty()
        };
        f.$setPristine = function () {
            d.setClass(b, Na, Fb + " ng-submitted");
            f.$dirty = !1;
            f.$pristine = !0;
            f.$submitted = !1;
            r(g, function (a) {
                a.$setPristine()
            })
        };
        f.$setUntouched = function () {
            r(g, function (a) {
                a.$setUntouched()
            })
        };
        f.$setSubmitted = function () {
            d.addClass(b,
                "ng-submitted");
            f.$submitted = !0;
            h.$setSubmitted()
        }
    }

    function ec(b) {
        b.$formatters.push(function (a) {
            return b.$isEmpty(a) ? a : a.toString()
        })
    }

    function bb(b, a, c, d, e, f) {
        var g = G(a[0].type);
        if (!e.android) {
            var h = !1;
            a.on("compositionstart", function (a) {
                h = !0
            });
            a.on("compositionend", function () {
                h = !1;
                l()
            })
        }
        var l = function (b) {
            k && (f.defer.cancel(k), k = null);
            if (!h) {
                var e = a.val();
                b = b && b.type;
                "password" === g || c.ngTrim && "false" === c.ngTrim || (e = W(e));
                (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, b)
            }
        };
        if (e.hasEvent("input"))a.on("input", l); else {
            var k, n = function (a, b, c) {
                k || (k = f.defer(function () {
                    k = null;
                    b && b.value === c || l(a)
                }))
            };
            a.on("keydown", function (a) {
                var b = a.keyCode;
                91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || n(a, this, this.value)
            });
            if (e.hasEvent("paste"))a.on("paste cut", n)
        }
        a.on("change", l);
        d.$render = function () {
            a.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue)
        }
    }

    function Gb(b, a) {
        return function (c, d) {
            var e, f;
            if (pa(c))return c;
            if (M(c)) {
                '"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1));
                if (Qf.test(c))return new Date(c);
                b.lastIndex = 0;
                if (e = b.exec(c))return e.shift(), f = d ? {
                    yyyy: d.getFullYear(),
                    MM: d.getMonth() + 1,
                    dd: d.getDate(),
                    HH: d.getHours(),
                    mm: d.getMinutes(),
                    ss: d.getSeconds(),
                    sss: d.getMilliseconds() / 1E3
                } : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0}, r(e, function (b, c) {
                    c < a.length && (f[a[c]] = +b)
                }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0)
            }
            return NaN
        }
    }

    function cb(b, a, c, d) {
        return function (e, f, g, h, l, k, n) {
            function m(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime())
            }

            function t(a) {
                return w(a) ?
                    pa(a) ? a : c(a) : u
            }

            yd(e, f, g, h);
            bb(e, f, g, h, l, k);
            var s = h && h.$options && h.$options.timezone, p;
            h.$$parserName = b;
            h.$parsers.push(function (b) {
                return h.$isEmpty(b) ? null : a.test(b) ? (b = c(b, p), "UTC" === s && b.setMinutes(b.getMinutes() - b.getTimezoneOffset()), b) : u
            });
            h.$formatters.push(function (a) {
                if (a && !pa(a))throw Hb("datefmt", a);
                if (m(a)) {
                    if ((p = a) && "UTC" === s) {
                        var b = 6E4 * p.getTimezoneOffset();
                        p = new Date(p.getTime() + b)
                    }
                    return n("date")(a, d, s)
                }
                p = null;
                return ""
            });
            if (w(g.min) || g.ngMin) {
                var r;
                h.$validators.min = function (a) {
                    return !m(a) ||
                        H(r) || c(a) >= r
                };
                g.$observe("min", function (a) {
                    r = t(a);
                    h.$validate()
                })
            }
            if (w(g.max) || g.ngMax) {
                var q;
                h.$validators.max = function (a) {
                    return !m(a) || H(q) || c(a) <= q
                };
                g.$observe("max", function (a) {
                    q = t(a);
                    h.$validate()
                })
            }
        }
    }

    function yd(b, a, c, d) {
        (d.$$hasNativeValidators = F(a[0].validity)) && d.$parsers.push(function (b) {
            var c = a.prop("validity") || {};
            return c.badInput && !c.typeMismatch ? u : b
        })
    }

    function zd(b, a, c, d, e) {
        if (w(d)) {
            b = b(d);
            if (!b.constant)throw R("ngModel")("constexpr", c, d);
            return b(a)
        }
        return e
    }

    function fc(b, a) {
        b = "ngClass" +
        b;
        return ["$animate", function (c) {
            function d(a, b) {
                var c = [], d = 0;
                a:for (; d < a.length; d++) {
                    for (var e = a[d], n = 0; n < b.length; n++)if (e == b[n])continue a;
                    c.push(e)
                }
                return c
            }

            function e(a) {
                if (J(a))return a.join(" ").split(" ");
                if (M(a))return a.split(" ");
                if (F(a)) {
                    var b = [];
                    r(a, function (a, c) {
                        a && (b = b.concat(c.split(" ")))
                    });
                    return b
                }
                return a
            }

            return {
                restrict: "AC", link: function (f, g, h) {
                    function l(a, b) {
                        var c = g.data("$classCounts") || {}, d = [];
                        r(a, function (a) {
                            if (0 < b || c[a])c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a)
                        });
                        g.data("$classCounts",
                            c);
                        return d.join(" ")
                    }

                    function k(b) {
                        if (!0 === a || f.$index % 2 === a) {
                            var k = e(b || []);
                            if (!n) {
                                var s = l(k, 1);
                                h.$addClass(s)
                            } else if (!ka(b, n)) {
                                var p = e(n), s = d(k, p), k = d(p, k), s = l(s, 1), k = l(k, -1);
                                s && s.length && c.addClass(g, s);
                                k && k.length && c.removeClass(g, k)
                            }
                        }
                        n = fa(b)
                    }

                    var n;
                    f.$watch(h[b], k, !0);
                    h.$observe("class", function (a) {
                        k(f.$eval(h[b]))
                    });
                    "ngClass" !== b && f.$watch("$index", function (c, d) {
                        var g = c & 1;
                        if (g !== (d & 1)) {
                            var k = e(f.$eval(h[b]));
                            g === a ? (g = l(k, 1), h.$addClass(g)) : (g = l(k, -1), h.$removeClass(g))
                        }
                    })
                }
            }
        }]
    }

    function xd(b) {
        function a(a,
                   b) {
            b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1)
        }

        function c(b, c) {
            b = b ? "-" + sc(b, "-") : "";
            a(db + b, !0 === c);
            a(Ad + b, !1 === c)
        }

        var d = b.ctrl, e = b.$element, f = {}, g = b.set, h = b.unset, l = b.parentForm, k = b.$animate;
        f[Ad] = !(f[db] = e.hasClass(db));
        d.$setValidity = function (b, e, f) {
            e === u ? (d.$pending || (d.$pending = {}), g(d.$pending, b, f)) : (d.$pending && h(d.$pending, b, f), Bd(d.$pending) && (d.$pending = u));
            Sa(e) ? e ? (h(d.$error, b, f), g(d.$$success, b, f)) : (g(d.$error, b, f), h(d.$$success, b, f)) : (h(d.$error, b, f), h(d.$$success,
                b, f));
            d.$pending ? (a(Cd, !0), d.$valid = d.$invalid = u, c("", null)) : (a(Cd, !1), d.$valid = Bd(d.$error), d.$invalid = !d.$valid, c("", d.$valid));
            e = d.$pending && d.$pending[b] ? u : d.$error[b] ? !1 : d.$$success[b] ? !0 : null;
            c(b, e);
            l.$setValidity(b, e, d)
        }
    }

    function Bd(b) {
        if (b)for (var a in b)return !1;
        return !0
    }

    var Rf = /^\/(.+)\/([a-z]*)$/, G = function (b) {
            return M(b) ? b.toLowerCase() : b
        }, pc = Object.prototype.hasOwnProperty, lb = function (b) {
            return M(b) ? b.toUpperCase() : b
        }, ab, I, la, Va = [].slice, tf = [].splice, Sf = [].push, sa = Object.prototype.toString,
        Ba = R("ng"), ca = O.angular || (O.angular = {}), Za, eb = 0;
    ab = Y.documentMode;
    D.$inject = [];
    Qa.$inject = [];
    var J = Array.isArray, kc = /^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/, W = function (b) {
        return M(b) ? b.trim() : b
    }, ld = function (b) {
        return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }, Ya = function () {
        if (w(Ya.isActive_))return Ya.isActive_;
        var b = !(!Y.querySelector("[ng-csp]") && !Y.querySelector("[data-ng-csp]"));
        if (!b)try {
            new Function("")
        } catch (a) {
            b = !0
        }
        return Ya.isActive_ = b
    }, ib = function () {
        if (w(ib.name_))return ib.name_;
        var b, a, c = Ja.length;
        for (a = 0; a < c && !(b = Y.querySelector("[" + Ja[a].replace(":", "\\:") + "jq]")); ++a);
        var d;
        b && (d = qc(b, "jq"));
        return ib.name_ = d
    }, Ja = ["ng-", "data-ng-", "ng:", "x-ng-"], Qd = /[A-Z]/g, tc = !1, Lb, na = 1, gb = 3, Ud = {
        full: "1.4.0-beta.4",
        major: 1,
        minor: 4,
        dot: 0,
        codeName: "overlyexplosive-poprocks"
    };
    Q.expando = "ng339";
    var qb = Q.cache = {}, mf = 1;
    Q._data = function (b) {
        return this.cache[b[this.expando]] || {}
    };
    var gf = /([\:\-\_]+(.))/g, hf = /^moz([A-Z])/,
        Tf = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        }, Ob = R("jqLite"), lf = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Nb = /<|&#?\w+;/, jf = /<([\w:]+)/, kf = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ga = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ga.optgroup = ga.option;
    ga.tbody = ga.tfoot = ga.colgroup =
        ga.caption = ga.thead;
    ga.th = ga.td;
    var Ka = Q.prototype = {
        ready: function (b) {
            function a() {
                c || (c = !0, b())
            }

            var c = !1;
            "complete" === Y.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), Q(O).on("load", a))
        }, toString: function () {
            var b = [];
            r(this, function (a) {
                b.push("" + a)
            });
            return "[" + b.join(", ") + "]"
        }, eq: function (b) {
            return 0 <= b ? I(this[b]) : I(this[this.length + b])
        }, length: 0, push: Sf, sort: [].sort, splice: [].splice
    }, vb = {};
    r("multiple selected checked disabled readOnly required open".split(" "), function (b) {
        vb[G(b)] = b
    });
    var Kc = {};
    r("input select option textarea button form details".split(" "), function (b) {
        Kc[b] = !0
    });
    var Lc = {ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern"};
    r({data: Qb, removeData: ob}, function (b, a) {
        Q[a] = b
    });
    r({
        data: Qb, inheritedData: ub, scope: function (b) {
            return I.data(b, "$scope") || ub(b.parentNode || b, ["$isolateScope", "$scope"])
        }, isolateScope: function (b) {
            return I.data(b, "$isolateScope") || I.data(b, "$isolateScopeNoTemplate")
        }, controller: Hc, injector: function (b) {
            return ub(b,
                "$injector")
        }, removeAttr: function (b, a) {
            b.removeAttribute(a)
        }, hasClass: rb, css: function (b, a, c) {
            a = $a(a);
            if (w(c))b.style[a] = c; else return b.style[a]
        }, attr: function (b, a, c) {
            var d = G(a);
            if (vb[d])if (w(c))c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d)); else return b[a] || (b.attributes.getNamedItem(a) || D).specified ? d : u; else if (w(c))b.setAttribute(a, c); else if (b.getAttribute)return b = b.getAttribute(a, 2), null === b ? u : b
        }, prop: function (b, a, c) {
            if (w(c))b[a] = c; else return b[a]
        }, text: function () {
            function b(a,
                       b) {
                if (H(b)) {
                    var d = a.nodeType;
                    return d === na || d === gb ? a.textContent : ""
                }
                a.textContent = b
            }

            b.$dv = "";
            return b
        }(), val: function (b, a) {
            if (H(a)) {
                if (b.multiple && "select" === ta(b)) {
                    var c = [];
                    r(b.options, function (a) {
                        a.selected && c.push(a.value || a.text)
                    });
                    return 0 === c.length ? null : c
                }
                return b.value
            }
            b.value = a
        }, html: function (b, a) {
            if (H(a))return b.innerHTML;
            nb(b, !0);
            b.innerHTML = a
        }, empty: Ic
    }, function (b, a) {
        Q.prototype[a] = function (a, d) {
            var e, f, g = this.length;
            if (b !== Ic && (2 == b.length && b !== rb && b !== Hc ? a : d) === u) {
                if (F(a)) {
                    for (e = 0; e <
                    g; e++)if (b === Qb)b(this[e], a); else for (f in a)b(this[e], f, a[f]);
                    return this
                }
                e = b.$dv;
                g = e === u ? Math.min(g, 1) : g;
                for (f = 0; f < g; f++) {
                    var h = b(this[f], a, d);
                    e = e ? e + h : h
                }
                return e
            }
            for (e = 0; e < g; e++)b(this[e], a, d);
            return this
        }
    });
    r({
        removeData: ob, on: function a(c, d, e, f) {
            if (w(f))throw Ob("onargs");
            if (Dc(c)) {
                var g = pb(c, !0);
                f = g.events;
                var h = g.handle;
                h || (h = g.handle = pf(c, f));
                for (var g = 0 <= d.indexOf(" ") ? d.split(" ") : [d], l = g.length; l--;) {
                    d = g[l];
                    var k = f[d];
                    k || (f[d] = [], "mouseenter" === d || "mouseleave" === d ? a(c, Tf[d], function (a) {
                        var c =
                            a.relatedTarget;
                        c && (c === this || this.contains(c)) || h(a, d)
                    }) : "$destroy" !== d && c.addEventListener(d, h, !1), k = f[d]);
                    k.push(e)
                }
            }
        }, off: Gc, one: function (a, c, d) {
            a = I(a);
            a.on(c, function f() {
                a.off(c, d);
                a.off(c, f)
            });
            a.on(c, d)
        }, replaceWith: function (a, c) {
            var d, e = a.parentNode;
            nb(a);
            r(new Q(c), function (c) {
                d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
                d = c
            })
        }, children: function (a) {
            var c = [];
            r(a.childNodes, function (a) {
                a.nodeType === na && c.push(a)
            });
            return c
        }, contents: function (a) {
            return a.contentDocument || a.childNodes ||
                []
        }, append: function (a, c) {
            var d = a.nodeType;
            if (d === na || 11 === d) {
                c = new Q(c);
                for (var d = 0, e = c.length; d < e; d++)a.appendChild(c[d])
            }
        }, prepend: function (a, c) {
            if (a.nodeType === na) {
                var d = a.firstChild;
                r(new Q(c), function (c) {
                    a.insertBefore(c, d)
                })
            }
        }, wrap: function (a, c) {
            c = I(c).eq(0).clone()[0];
            var d = a.parentNode;
            d && d.replaceChild(c, a);
            c.appendChild(a)
        }, remove: Rb, detach: function (a) {
            Rb(a, !0)
        }, after: function (a, c) {
            var d = a, e = a.parentNode;
            c = new Q(c);
            for (var f = 0, g = c.length; f < g; f++) {
                var h = c[f];
                e.insertBefore(h, d.nextSibling);
                d = h
            }
        }, addClass: tb, removeClass: sb, toggleClass: function (a, c, d) {
            c && r(c.split(" "), function (c) {
                var f = d;
                H(f) && (f = !rb(a, c));
                (f ? tb : sb)(a, c)
            })
        }, parent: function (a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        }, next: function (a) {
            return a.nextElementSibling
        }, find: function (a, c) {
            return a.getElementsByTagName ? a.getElementsByTagName(c) : []
        }, clone: Pb, triggerHandler: function (a, c, d) {
            var e, f, g = c.type || c, h = pb(a);
            if (h = (h = h && h.events) && h[g])e = {
                preventDefault: function () {
                    this.defaultPrevented = !0
                }, isDefaultPrevented: function () {
                    return !0 ===
                        this.defaultPrevented
                }, stopImmediatePropagation: function () {
                    this.immediatePropagationStopped = !0
                }, isImmediatePropagationStopped: function () {
                    return !0 === this.immediatePropagationStopped
                }, stopPropagation: D, type: g, target: a
            }, c.type && (e = P(e, c)), c = fa(h), f = d ? [e].concat(d) : [e], r(c, function (c) {
                e.isImmediatePropagationStopped() || c.apply(a, f)
            })
        }
    }, function (a, c) {
        Q.prototype[c] = function (c, e, f) {
            for (var g, h = 0, l = this.length; h < l; h++)H(g) ? (g = a(this[h], c, e, f), w(g) && (g = I(g))) : Fc(g, a(this[h], c, e, f));
            return w(g) ? g : this
        };
        Q.prototype.bind =
            Q.prototype.on;
        Q.prototype.unbind = Q.prototype.off
    });
    wb.prototype = {
        put: function (a, c) {
            this[Da(a, this.nextUid)] = c
        }, get: function (a) {
            return this[Da(a, this.nextUid)]
        }, remove: function (a) {
            var c = this[a = Da(a, this.nextUid)];
            delete this[a];
            return c
        }
    };
    var Nc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Uf = /,/, Vf = /^\s*(_?)(\S+?)\1\s*$/, Mc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, Ea = R("$injector");
    Xa.$$annotate = function (a, c, d) {
        var e;
        if ("function" === typeof a) {
            if (!(e = a.$inject)) {
                e = [];
                if (a.length) {
                    if (c)throw M(d) && d || (d = a.name ||
                    qf(a)), Ea("strictdi", d);
                    c = a.toString().replace(Mc, "");
                    c = c.match(Nc);
                    r(c[1].split(Uf), function (a) {
                        a.replace(Vf, function (a, c, d) {
                            e.push(d)
                        })
                    })
                }
                a.$inject = e
            }
        } else J(a) ? (c = a.length - 1, jb(a[c], "fn"), e = a.slice(0, c)) : jb(a, "fn", !0);
        return e
    };
    var Wf = R("$animate"), Ge = ["$provide", function (a) {
        this.$$selectors = {};
        this.register = function (c, d) {
            var e = c + "-animation";
            if (c && "." != c.charAt(0))throw Wf("notcsel", c);
            this.$$selectors[c.substr(1)] = e;
            a.factory(e, d)
        };
        this.classNameFilter = function (a) {
            1 === arguments.length && (this.$$classNameFilter =
                a instanceof RegExp ? a : null);
            return this.$$classNameFilter
        };
        this.$get = ["$$q", "$$asyncCallback", "$rootScope", function (a, d, e) {
            function f(d) {
                var f, g = a.defer();
                g.promise.$$cancelFn = function () {
                    f && f()
                };
                e.$$postDigest(function () {
                    f = d(function () {
                        g.resolve()
                    })
                });
                return g.promise
            }

            function g(a, c) {
                var d = [], e = [], f = qa();
                r((a.attr("class") || "").split(/\s+/), function (a) {
                    f[a] = !0
                });
                r(c, function (a, c) {
                    var g = f[c];
                    !1 === a && g ? e.push(c) : !0 !== a || g || d.push(c)
                });
                return 0 < d.length + e.length && [d.length ? d : null, e.length ? e : null]
            }

            function h(a,
                       c, d) {
                for (var e = 0, f = c.length; e < f; ++e)a[c[e]] = d
            }

            function l() {
                n || (n = a.defer(), d(function () {
                    n.resolve();
                    n = null
                }));
                return n.promise
            }

            function k(a, c) {
                if (ca.isObject(c)) {
                    var d = P(c.from || {}, c.to || {});
                    a.css(d)
                }
            }

            var n;
            return {
                animate: function (a, c, d) {
                    k(a, {from: c, to: d});
                    return l()
                }, enter: function (a, c, d, e) {
                    k(a, e);
                    d ? d.after(a) : c.prepend(a);
                    return l()
                }, leave: function (a, c) {
                    a.remove();
                    return l()
                }, move: function (a, c, d, e) {
                    return this.enter(a, c, d, e)
                }, addClass: function (a, c, d) {
                    return this.setClass(a, c, [], d)
                }, $$addClassImmediately: function (a,
                                                    c, d) {
                    a = I(a);
                    c = M(c) ? c : J(c) ? c.join(" ") : "";
                    r(a, function (a) {
                        tb(a, c)
                    });
                    k(a, d);
                    return l()
                }, removeClass: function (a, c, d) {
                    return this.setClass(a, [], c, d)
                }, $$removeClassImmediately: function (a, c, d) {
                    a = I(a);
                    c = M(c) ? c : J(c) ? c.join(" ") : "";
                    r(a, function (a) {
                        sb(a, c)
                    });
                    k(a, d);
                    return l()
                }, setClass: function (a, c, d, e) {
                    var k = this, l = !1;
                    a = I(a);
                    var n = a.data("$$animateClasses");
                    n ? e && n.options && (n.options = ca.extend(n.options || {}, e)) : (n = {
                        classes: {},
                        options: e
                    }, l = !0);
                    e = n.classes;
                    c = J(c) ? c : c.split(" ");
                    d = J(d) ? d : d.split(" ");
                    h(e, c, !0);
                    h(e, d, !1);
                    l && (n.promise = f(function (c) {
                        var d = a.data("$$animateClasses");
                        a.removeData("$$animateClasses");
                        if (d) {
                            var e = g(a, d.classes);
                            e && k.$$setClassImmediately(a, e[0], e[1], d.options)
                        }
                        c()
                    }), a.data("$$animateClasses", n));
                    return n.promise
                }, $$setClassImmediately: function (a, c, d, e) {
                    c && this.$$addClassImmediately(a, c);
                    d && this.$$removeClassImmediately(a, d);
                    k(a, e);
                    return l()
                }, enabled: D, cancel: D
            }
        }]
    }], ia = R("$compile");
    vc.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Rc = /^((?:x|data)[\:\-_])/i, uf = R("$controller"),
        Pc = /^(\S+)(\s+as\s+(\w+))?$/, Uc = "application/json", Wb = {"Content-Type": Uc + ";charset=utf-8"}, wf = /^\[|^\{(?!\{)/, xf = {
            "[": /]$/,
            "{": /}$/
        }, vf = /^\)\]\}',?\n/, Xb = R("$interpolate"), Xf = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, Af = {
            http: 80,
            https: 443,
            ftp: 21
        }, yb = R("$location"), Yf = {
            $$html5: !1, $$replace: !1, absUrl: zb("$$absUrl"), url: function (a) {
                if (H(a))return this.$$url;
                var c = Xf.exec(a);
                (c[1] || "" === a) && this.path(decodeURIComponent(c[1]));
                (c[2] || c[1] || "" === a) && this.search(c[3] || "");
                this.hash(c[5] || "");
                return this
            }, protocol: zb("$$protocol"),
            host: zb("$$host"), port: zb("$$port"), path: bd("$$path", function (a) {
                a = null !== a ? a.toString() : "";
                return "/" == a.charAt(0) ? a : "/" + a
            }), search: function (a, c) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (M(a) || S(a))a = a.toString(), this.$$search = oc(a); else if (F(a))a = ua(a, {}), r(a, function (c, e) {
                            null == c && delete a[e]
                        }), this.$$search = a; else throw yb("isrcharg");
                        break;
                    default:
                        H(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c
                }
                this.$$compose();
                return this
            }, hash: bd("$$hash", function (a) {
                return null !==
                a ? a.toString() : ""
            }), replace: function () {
                this.$$replace = !0;
                return this
            }
        };
    r([ad, ac, $b], function (a) {
        a.prototype = Object.create(Yf);
        a.prototype.state = function (c) {
            if (!arguments.length)return this.$$state;
            if (a !== $b || !this.$$html5)throw yb("nostate");
            this.$$state = H(c) ? null : c;
            return this
        }
    });
    var ea = R("$parse"), Bf = Function.prototype.call, Cf = Function.prototype.apply, Df = Function.prototype.bind, Ib = qa();
    r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
        Ib[a] = !0
    });
    var Zf = {
        n: "\n", f: "\f", r: "\r",
        t: "\t", v: "\v", "'": "'", '"': '"'
    }, cc = function (a) {
        this.options = a
    };
    cc.prototype = {
        constructor: cc, lex: function (a) {
            this.text = a;
            this.index = 0;
            for (this.tokens = []; this.index < this.text.length;)if (a = this.text.charAt(this.index), '"' === a || "'" === a)this.readString(a); else if (this.isNumber(a) || "." === a && this.isNumber(this.peek()))this.readNumber(); else if (this.isIdent(a))this.readIdent(); else if (this.is(a, "(){}[].,;:?"))this.tokens.push({
                index: this.index,
                text: a
            }), this.index++; else if (this.isWhitespace(a))this.index++;
            else {
                var c = a + this.peek(), d = c + this.peek(2), e = Ib[c], f = Ib[d];
                Ib[a] || e || f ? (a = f ? d : e ? c : a, this.tokens.push({
                    index: this.index,
                    text: a,
                    operator: !0
                }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
            }
            return this.tokens
        }, is: function (a, c) {
            return -1 !== c.indexOf(a)
        }, peek: function (a) {
            a = a || 1;
            return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
        }, isNumber: function (a) {
            return "0" <= a && "9" >= a && "string" === typeof a
        }, isWhitespace: function (a) {
            return " " === a || "\r" === a ||
                "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
        }, isIdent: function (a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
        }, isExpOperator: function (a) {
            return "-" === a || "+" === a || this.isNumber(a)
        }, throwError: function (a, c, d) {
            d = d || this.index;
            c = w(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d;
            throw ea("lexerr", a, c, this.text);
        }, readNumber: function () {
            for (var a = "", c = this.index; this.index < this.text.length;) {
                var d = G(this.text.charAt(this.index));
                if ("." == d || this.isNumber(d))a += d; else {
                    var e = this.peek();
                    if ("e" == d && this.isExpOperator(e))a += d; else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1))a += d; else if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length - 1))break; else this.throwError("Invalid exponent")
                }
                this.index++
            }
            this.tokens.push({index: c, text: a, constant: !0, value: Number(a)})
        }, readIdent: function () {
            for (var a = this.index; this.index < this.text.length;) {
                var c = this.text.charAt(this.index);
                if (!this.isIdent(c) && !this.isNumber(c))break;
                this.index++
            }
            this.tokens.push({
                index: a,
                text: this.text.slice(a, this.index), identifier: !0
            })
        }, readString: function (a) {
            var c = this.index;
            this.index++;
            for (var d = "", e = a, f = !1; this.index < this.text.length;) {
                var g = this.text.charAt(this.index), e = e + g;
                if (f)"u" === g ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Zf[g] || g, f = !1; else if ("\\" === g)f = !0; else {
                    if (g === a) {
                        this.index++;
                        this.tokens.push({
                            index: c, text: e, constant: !0,
                            value: d
                        });
                        return
                    }
                    d += g
                }
                this.index++
            }
            this.throwError("Unterminated quote", c)
        }
    };
    var p = function (a, c) {
        this.lexer = a;
        this.options = c
    };
    p.Program = "Program";
    p.ExpressionStatement = "ExpressionStatement";
    p.AssignmentExpression = "AssignmentExpression";
    p.ConditionalExpression = "ConditionalExpression";
    p.LogicalExpression = "LogicalExpression";
    p.BinaryExpression = "BinaryExpression";
    p.UnaryExpression = "UnaryExpression";
    p.CallExpression = "CallExpression";
    p.MemberExpression = "MemberExpression";
    p.Identifier = "Identifier";
    p.Literal =
        "Literal";
    p.ArrayExpression = "ArrayExpression";
    p.Property = "Property";
    p.ObjectExpression = "ObjectExpression";
    p.ThisExpression = "ThisExpression";
    p.NGValueParameter = "NGValueParameter";
    p.prototype = {
        ast: function (a) {
            this.text = a;
            this.tokens = this.lexer.lex(a);
            a = this.program();
            0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
            return a
        },
        program: function () {
            for (var a = []; ;)if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";"))return {
                type: p.Program,
                body: a
            }
        },
        expressionStatement: function () {
            return {type: p.ExpressionStatement, expression: this.filterChain()}
        },
        filterChain: function () {
            for (var a = this.expression(); this.expect("|");)a = this.filter(a);
            return a
        },
        expression: function () {
            return this.assignment()
        },
        assignment: function () {
            var a = this.ternary();
            this.expect("=") && (a = {type: p.AssignmentExpression, left: a, right: this.assignment(), operator: "="});
            return a
        },
        ternary: function () {
            var a = this.logicalOR(), c, d;
            return this.expect("?") && (c = this.expression(), this.consume(":")) ?
                (d = this.expression(), {type: p.ConditionalExpression, test: a, alternate: c, consequent: d}) : a
        },
        logicalOR: function () {
            for (var a = this.logicalAND(); this.expect("||");)a = {
                type: p.LogicalExpression,
                operator: "||",
                left: a,
                right: this.logicalAND()
            };
            return a
        },
        logicalAND: function () {
            for (var a = this.equality(); this.expect("&&");)a = {
                type: p.LogicalExpression,
                operator: "&&",
                left: a,
                right: this.equality()
            };
            return a
        },
        equality: function () {
            for (var a = this.relational(), c; c = this.expect("==", "!=", "===", "!==");)a = {
                type: p.BinaryExpression,
                operator: c.text, left: a, right: this.relational()
            };
            return a
        },
        relational: function () {
            for (var a = this.additive(), c; c = this.expect("<", ">", "<=", ">=");)a = {
                type: p.BinaryExpression,
                operator: c.text,
                left: a,
                right: this.additive()
            };
            return a
        },
        additive: function () {
            for (var a = this.multiplicative(), c; c = this.expect("+", "-");)a = {
                type: p.BinaryExpression,
                operator: c.text,
                left: a,
                right: this.multiplicative()
            };
            return a
        },
        multiplicative: function () {
            for (var a = this.unary(), c; c = this.expect("*", "/", "%");)a = {
                type: p.BinaryExpression, operator: c.text,
                left: a, right: this.unary()
            };
            return a
        },
        unary: function () {
            var a;
            return (a = this.expect("+", "-", "!")) ? {
                type: p.UnaryExpression,
                operator: a.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary()
        },
        primary: function () {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.constants.hasOwnProperty(this.peek().text) ? a = ua(this.constants[this.consume().text]) : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() :
                this.throwError("not a primary expression", this.peek());
            for (var c; c = this.expect("(", "[", ".");)"(" === c.text ? (a = {
                type: p.CallExpression,
                callee: a,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === c.text ? (a = {
                type: p.MemberExpression,
                object: a,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === c.text ? a = {
                type: p.MemberExpression,
                object: a,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return a
        },
        filter: function (a) {
            a = [a];
            for (var c = {
                type: p.CallExpression, callee: this.identifier(),
                arguments: a, filter: !0
            }; this.expect(":");)a.push(this.expression());
            return c
        },
        parseArguments: function () {
            var a = [];
            if (")" !== this.peekToken().text) {
                do a.push(this.expression()); while (this.expect(","))
            }
            return a
        },
        identifier: function () {
            var a = this.consume();
            a.identifier || this.throwError("is not a valid identifier", a);
            return {type: p.Identifier, name: a.text}
        },
        constant: function () {
            return {type: p.Literal, value: this.consume().value}
        },
        arrayDeclaration: function () {
            var a = [];
            if ("]" !== this.peekToken().text) {
                do {
                    if (this.peek("]"))break;
                    a.push(this.expression())
                } while (this.expect(","))
            }
            this.consume("]");
            return {type: p.ArrayExpression, elements: a}
        },
        object: function () {
            var a = [], c;
            if ("}" !== this.peekToken().text) {
                do {
                    if (this.peek("}"))break;
                    c = {type: p.Property, kind: "init"};
                    this.peek().constant ? c.key = this.constant() : this.peek().identifier ? c.key = this.identifier() : this.throwError("invalid key", this.peek());
                    this.consume(":");
                    c.value = this.expression();
                    a.push(c)
                } while (this.expect(","))
            }
            this.consume("}");
            return {type: p.ObjectExpression, properties: a}
        },
        throwError: function (a, c) {
            throw ea("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
        },
        consume: function (a) {
            if (0 === this.tokens.length)throw ea("ueoe", this.text);
            var c = this.expect(a);
            c || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
            return c
        },
        peekToken: function () {
            if (0 === this.tokens.length)throw ea("ueoe", this.text);
            return this.tokens[0]
        },
        peek: function (a, c, d, e) {
            return this.peekAhead(0, a, c, d, e)
        },
        peekAhead: function (a, c, d, e, f) {
            if (this.tokens.length > a) {
                a = this.tokens[a];
                var g = a.text;
                if (g === c || g === d || g === e || g === f || !(c || d || e || f))return a
            }
            return !1
        },
        expect: function (a, c, d, e) {
            return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1
        },
        constants: {
            "true": {type: p.Literal, value: !0},
            "false": {type: p.Literal, value: !1},
            "null": {type: p.Literal, value: null},
            undefined: {type: p.Literal, value: u},
            "this": {type: p.ThisExpression}
        }
    };
    id.prototype = {
        compile: function (a, c) {
            var d = this, e = this.astBuilder.ast(a);
            this.state = {
                nextId: 0, filters: {}, expensiveChecks: c, fn: {vars: [], body: [], own: {}}, assign: {
                    vars: [],
                    body: [], own: {}
                }, inputs: []
            };
            U(e, d.$filter);
            var f = "", g;
            this.stage = "assign";
            if (g = gd(e))this.state.computing = "assign", f = this.nextId(), this.recurse(g, f), f = "fn.assign=" + this.generateFunction("assign", "s,v,l");
            g = ed(e.body);
            d.stage = "inputs";
            r(g, function (a, c) {
                var e = "fn" + c;
                d.state[e] = {vars: [], body: [], own: {}};
                d.state.computing = e;
                var f = d.nextId();
                d.recurse(a, f);
                d.return(f);
                d.state.inputs.push(e);
                a.watchId = c
            });
            this.state.computing = "fn";
            this.stage = "main";
            this.recurse(e);
            f = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() +
            "var fn=" + this.generateFunction("fn", "s,l,a,i") + f + this.watchFns() + "return fn;";
            f = (new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "ifDefined", "plus", "text", f))(this.$filter, za, ha, cd, Ef, dd, a);
            this.state = this.stage = u;
            f.literal = hd(e);
            f.constant = e.constant;
            return f
        }, USE: "use", STRICT: "strict", watchFns: function () {
            var a = [], c = this.state.inputs, d = this;
            r(c, function (c) {
                a.push("var " + c + "=" + d.generateFunction(c, "s"))
            });
            c.length && a.push("fn.inputs=[" + c.join(",") + "];");
            return a.join("")
        },
        generateFunction: function (a, c) {
            return "function(" + c + "){" + this.varsPrefix(a) + this.body(a) + "};"
        }, filterPrefix: function () {
            var a = [], c = this;
            r(this.state.filters, function (d, e) {
                a.push(d + "=$filter(" + c.escape(e) + ")")
            });
            return a.length ? "var " + a.join(",") + ";" : ""
        }, varsPrefix: function (a) {
            return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : ""
        }, body: function (a) {
            return this.state[a].body.join("")
        }, recurse: function (a, c, d, e, f, g) {
            var h, l, k = this, n, m;
            e = e || D;
            if (!g && w(a.watchId))c = c || this.nextId(), this.if("i",
                this.lazyAssign(c, this.computedMember("i", a.watchId)), this.lazyRecurse(a, c, d, e, f, !0)); else switch (a.type) {
                case p.Program:
                    r(a.body, function (c, d) {
                        k.recurse(c.expression, u, u, function (a) {
                            l = a
                        });
                        d !== a.body.length - 1 ? k.current().body.push(l, ";") : k.return(l)
                    });
                    break;
                case p.Literal:
                    m = this.escape(a.value);
                    this.assign(c, m);
                    e(m);
                    break;
                case p.UnaryExpression:
                    this.recurse(a.argument, u, u, function (a) {
                        l = a
                    });
                    m = a.operator + "(" + this.ifDefined(l, 0) + ")";
                    this.assign(c, m);
                    e(m);
                    break;
                case p.BinaryExpression:
                    this.recurse(a.left,
                        u, u, function (a) {
                            h = a
                        });
                    this.recurse(a.right, u, u, function (a) {
                        l = a
                    });
                    m = "+" === a.operator ? this.plus(h, l) : "-" === a.operator ? this.ifDefined(h, 0) + a.operator + this.ifDefined(l, 0) : "(" + h + ")" + a.operator + "(" + l + ")";
                    this.assign(c, m);
                    e(m);
                    break;
                case p.LogicalExpression:
                    c = c || this.nextId();
                    k.recurse(a.left, c);
                    k.if("&&" === a.operator ? c : k.not(c), k.lazyRecurse(a.right, c));
                    e(c);
                    break;
                case p.ConditionalExpression:
                    c = c || this.nextId();
                    k.recurse(a.test, c);
                    k.if(c, k.lazyRecurse(a.alternate, c), k.lazyRecurse(a.consequent, c));
                    e(c);
                    break;
                case p.Identifier:
                    c = c || this.nextId();
                    d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name);
                    za(a.name);
                    k.if("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function () {
                        k.if("inputs" === k.stage || "s", function () {
                            f && 1 !== f && k.if(k.not(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}"));
                            k.assign(c, k.nonComputedMember("s", a.name))
                        })
                    }, c && k.lazyAssign(c, k.nonComputedMember("l", a.name)));
                    (k.state.expensiveChecks || Bb(a.name)) && k.addEnsureSafeObject(c);
                    e(c);
                    break;
                case p.MemberExpression:
                    h = d && (d.context = this.nextId()) || this.nextId();
                    c = c || this.nextId();
                    k.recurse(a.object, h, u, function () {
                        k.if(k.notNull(h), function () {
                            if (a.computed)l = k.nextId(), k.recurse(a.property, l), k.addEnsureSafeMemberName(l), f && 1 !== f && k.if(k.not(k.computedMember(h, l)), k.lazyAssign(k.computedMember(h, l), "{}")), m = k.ensureSafeObject(k.computedMember(h, l)), k.assign(c, m), d && (d.computed = !0, d.name = l); else {
                                za(a.property.name);
                                f && 1 !== f && k.if(k.not(k.nonComputedMember(h, a.property.name)), k.lazyAssign(k.nonComputedMember(h, a.property.name), "{}"));
                                m = k.nonComputedMember(h, a.property.name);
                                if (k.state.expensiveChecks || Bb(a.property.name))m = k.ensureSafeObject(m);
                                k.assign(c, m);
                                d && (d.computed = !1, d.name = a.property.name)
                            }
                            e(c)
                        })
                    }, !!f);
                    break;
                case p.CallExpression:
                    c = c || this.nextId();
                    a.filter ? (l = k.filter(a.callee.name), n = [], r(a.arguments, function (a) {
                        var c = k.nextId();
                        k.recurse(a, c);
                        n.push(c)
                    }), m = l + "(" + n.join(",") + ")", k.assign(c, m), e(c)) :
                        (l = k.nextId(), h = {}, n = [], k.recurse(a.callee, l, h, function () {
                            k.if(k.notNull(l), function () {
                                k.addEnsureSafeFunction(l);
                                r(a.arguments, function (a) {
                                    k.recurse(a, k.nextId(), u, function (a) {
                                        n.push(k.ensureSafeObject(a))
                                    })
                                });
                                h.name ? (k.state.expensiveChecks || k.addEnsureSafeObject(h.context), m = k.member(h.context, h.name, h.computed) + "(" + n.join(",") + ")") : m = l + "(" + n.join(",") + ")";
                                m = k.ensureSafeObject(m);
                                k.assign(c, m);
                                e(c)
                            })
                        }));
                    break;
                case p.AssignmentExpression:
                    l = this.nextId();
                    h = {};
                    if (!fd(a.left))throw ea("lval");
                    this.recurse(a.left,
                        u, h, function () {
                            k.if(k.notNull(h.context), function () {
                                k.recurse(a.right, l);
                                k.addEnsureSafeObject(k.member(h.context, h.name, h.computed));
                                m = k.member(h.context, h.name, h.computed) + a.operator + l;
                                k.assign(c, m);
                                e(c || m)
                            })
                        }, 1);
                    break;
                case p.ArrayExpression:
                    n = [];
                    r(a.elements, function (a) {
                        k.recurse(a, k.nextId(), u, function (a) {
                            n.push(a)
                        })
                    });
                    m = "[" + n.join(",") + "]";
                    this.assign(c, m);
                    e(m);
                    break;
                case p.ObjectExpression:
                    n = [];
                    r(a.properties, function (a) {
                        k.recurse(a.value, k.nextId(), u, function (c) {
                            n.push(k.escape(a.key.type ===
                            p.Identifier ? a.key.name : "" + a.key.value) + ":" + c)
                        })
                    });
                    m = "{" + n.join(",") + "}";
                    this.assign(c, m);
                    e(m);
                    break;
                case p.ThisExpression:
                    this.assign(c, "s");
                    e("s");
                    break;
                case p.NGValueParameter:
                    this.assign(c, "v"), e("v")
            }
        }, getHasOwnProperty: function (a, c) {
            var d = a + "." + c, e = this.current().own;
            e.hasOwnProperty(d) || (e[d] = this.nextId(!1, a + "&&(" + this.escape(c) + " in " + a + ")"));
            return e[d]
        }, assign: function (a, c) {
            if (a)return this.current().body.push(a, "=", c, ";"), a
        }, filter: function (a) {
            this.state.filters.hasOwnProperty(a) || (this.state.filters[a] =
                this.nextId(!0));
            return this.state.filters[a]
        }, ifDefined: function (a, c) {
            return "ifDefined(" + a + "," + this.escape(c) + ")"
        }, plus: function (a, c) {
            return "plus(" + a + "," + c + ")"
        }, "return": function (a) {
            this.current().body.push("return ", a, ";")
        }, "if": function (a, c, d) {
            if (!0 === a)c(); else {
                var e = this.current().body;
                e.push("if(", a, "){");
                c();
                e.push("}");
                d && (e.push("else{"), d(), e.push("}"))
            }
        }, not: function (a) {
            return "!(" + a + ")"
        }, notNull: function (a) {
            return a + "!=null"
        }, nonComputedMember: function (a, c) {
            return a + "." + c
        }, computedMember: function (a,
                                     c) {
            return a + "[" + c + "]"
        }, member: function (a, c, d) {
            return d ? this.computedMember(a, c) : this.nonComputedMember(a, c)
        }, addEnsureSafeObject: function (a) {
            this.current().body.push(this.ensureSafeObject(a), ";")
        }, addEnsureSafeMemberName: function (a) {
            this.current().body.push(this.ensureSafeMemberName(a), ";")
        }, addEnsureSafeFunction: function (a) {
            this.current().body.push(this.ensureSafeFunction(a), ";")
        }, ensureSafeObject: function (a) {
            return "ensureSafeObject(" + a + ",text)"
        }, ensureSafeMemberName: function (a) {
            return "ensureSafeMemberName(" +
                a + ",text)"
        }, ensureSafeFunction: function (a) {
            return "ensureSafeFunction(" + a + ",text)"
        }, lazyRecurse: function (a, c, d, e, f, g) {
            var h = this;
            return function () {
                h.recurse(a, c, d, e, f, g)
            }
        }, lazyAssign: function (a, c) {
            var d = this;
            return function () {
                d.assign(a, c)
            }
        }, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function (a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }, escape: function (a) {
            if (M(a))return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (S(a))return a.toString();
            if (!0 === a)return "true";
            if (!1 === a)return "false";
            if (null === a)return "null";
            if ("undefined" === typeof a)return "undefined";
            throw ea("esc");
        }, nextId: function (a, c) {
            var d = "v" + this.state.nextId++;
            a || this.current().vars.push(d + (c ? "=" + c : ""));
            return d
        }, current: function () {
            return this.state[this.state.computing]
        }
    };
    jd.prototype = {
        compile: function (a, c) {
            var d = this, e = this.astBuilder.ast(a);
            this.expression = a;
            this.expensiveChecks = c;
            U(e, d.$filter);
            var f, g;
            if (f = gd(e))g = this.recurse(f);
            f = ed(e.body);
            var h;
            f && (h = [], r(f, function (a, c) {
                var e = d.recurse(a);
                a.input = e;
                h.push(e);
                a.watchId = c
            }));
            var l = [];
            r(e.body, function (a) {
                l.push(d.recurse(a.expression))
            });
            f = 0 === e.body.length ? function () {
            } : 1 === e.body.length ? l[0] : function (a, c) {
                var d;
                r(l, function (e) {
                    d = e(a, c)
                });
                return d
            };
            g && (f.assign = function (a, c, d) {
                return g(a, d, c)
            });
            h && (f.inputs = h);
            f.literal = hd(e);
            f.constant = e.constant;
            return f
        }, recurse: function (a, c, d) {
            var e, f, g = this, h;
            if (a.input)return this.inputs(a.input, a.watchId);
            switch (a.type) {
                case p.Literal:
                    return this.value(a.value, c);
                case p.UnaryExpression:
                    return f =
                        this.recurse(a.argument), this["unary" + a.operator](f, c);
                case p.BinaryExpression:
                    return e = this.recurse(a.left), f = this.recurse(a.right), this["binary" + a.operator](e, f, c);
                case p.LogicalExpression:
                    return e = this.recurse(a.left), f = this.recurse(a.right), this["binary" + a.operator](e, f, c);
                case p.ConditionalExpression:
                    return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), c);
                case p.Identifier:
                    return za(a.name, g.expression), g.identifier(a.name, g.expensiveChecks || Bb(a.name),
                        c, d, g.expression);
                case p.MemberExpression:
                    return e = this.recurse(a.object, !1, !!d), a.computed || (za(a.property.name, g.expression), f = a.property.name), a.computed && (f = this.recurse(a.property)), a.computed ? this.computedMember(e, f, c, d, g.expression) : this.nonComputedMember(e, f, g.expensiveChecks, c, d, g.expression);
                case p.CallExpression:
                    return h = [], r(a.arguments, function (a) {
                        h.push(g.recurse(a))
                    }), a.filter && (f = this.$filter(a.callee.name)), a.filter || (f = this.recurse(a.callee, !0)), a.filter ? function (a, d, e, g) {
                        for (var t =
                            [], p = 0; p < h.length; ++p)t.push(h[p](a, d, e, g));
                        a = f.apply(u, t, g);
                        return c ? {context: u, name: u, value: a} : a
                    } : function (a, d, e, m) {
                        var t = f(a, d, e, m), p;
                        if (null != t.value) {
                            ha(t.context, g.expression);
                            cd(t.value, g.expression);
                            p = [];
                            for (var r = 0; r < h.length; ++r)p.push(ha(h[r](a, d, e, m), g.expression));
                            p = ha(t.value.apply(t.context, p), g.expression)
                        }
                        return c ? {value: p} : p
                    };
                case p.AssignmentExpression:
                    return e = this.recurse(a.left, !0, 1), f = this.recurse(a.right), function (a, d, h, m) {
                        var t = e(a, d, h, m);
                        a = f(a, d, h, m);
                        ha(t.value, g.expression);
                        t.context[t.name] = a;
                        return c ? {value: a} : a
                    };
                case p.ArrayExpression:
                    return h = [], r(a.elements, function (a) {
                        h.push(g.recurse(a))
                    }), function (a, d, e, f) {
                        for (var g = [], p = 0; p < h.length; ++p)g.push(h[p](a, d, e, f));
                        return c ? {value: g} : g
                    };
                case p.ObjectExpression:
                    return h = [], r(a.properties, function (a) {
                        h.push({
                            key: a.key.type === p.Identifier ? a.key.name : "" + a.key.value,
                            value: g.recurse(a.value)
                        })
                    }), function (a, d, e, f) {
                        for (var g = {}, p = 0; p < h.length; ++p)g[h[p].key] = h[p].value(a, d, e, f);
                        return c ? {value: g} : g
                    };
                case p.ThisExpression:
                    return function (a) {
                        return c ?
                        {value: a} : a
                    };
                case p.NGValueParameter:
                    return function (a, d, e, f) {
                        return c ? {value: e} : e
                    }
            }
        }, "unary+": function (a, c) {
            return function (d, e, f, g) {
                d = a(d, e, f, g);
                d = w(d) ? +d : 0;
                return c ? {value: d} : d
            }
        }, "unary-": function (a, c) {
            return function (d, e, f, g) {
                d = a(d, e, f, g);
                d = w(d) ? -d : 0;
                return c ? {value: d} : d
            }
        }, "unary!": function (a, c) {
            return function (d, e, f, g) {
                d = !a(d, e, f, g);
                return c ? {value: d} : d
            }
        }, "binary+": function (a, c, d) {
            return function (e, f, g, h) {
                var l = a(e, f, g, h);
                e = c(e, f, g, h);
                l = dd(l, e);
                return d ? {value: l} : l
            }
        }, "binary-": function (a, c, d) {
            return function (e,
                             f, g, h) {
                var l = a(e, f, g, h);
                e = c(e, f, g, h);
                l = (w(l) ? l : 0) - (w(e) ? e : 0);
                return d ? {value: l} : l
            }
        }, "binary*": function (a, c, d) {
            return function (e, f, g, h) {
                e = a(e, f, g, h) * c(e, f, g, h);
                return d ? {value: e} : e
            }
        }, "binary/": function (a, c, d) {
            return function (e, f, g, h) {
                e = a(e, f, g, h) / c(e, f, g, h);
                return d ? {value: e} : e
            }
        }, "binary%": function (a, c, d) {
            return function (e, f, g, h) {
                e = a(e, f, g, h) % c(e, f, g, h);
                return d ? {value: e} : e
            }
        }, "binary===": function (a, c, d) {
            return function (e, f, g, h) {
                e = a(e, f, g, h) === c(e, f, g, h);
                return d ? {value: e} : e
            }
        }, "binary!==": function (a,
                                  c, d) {
            return function (e, f, g, h) {
                e = a(e, f, g, h) !== c(e, f, g, h);
                return d ? {value: e} : e
            }
        }, "binary==": function (a, c, d) {
            return function (e, f, g, h) {
                e = a(e, f, g, h) == c(e, f, g, h);
                return d ? {value: e} : e
            }
        }, "binary!=": function (a, c, d) {
            return function (e, f, g, h) {
                e = a(e, f, g, h) != c(e, f, g, h);
                return d ? {value: e} : e
            }
        }, "binary<": function (a, c, d) {
            return function (e, f, g, h) {
                e = a(e, f, g, h) < c(e, f, g, h);
                return d ? {value: e} : e
            }
        }, "binary>": function (a, c, d) {
            return function (e, f, g, h) {
                e = a(e, f, g, h) > c(e, f, g, h);
                return d ? {value: e} : e
            }
        }, "binary<=": function (a, c, d) {
            return function (e,
                             f, g, h) {
                e = a(e, f, g, h) <= c(e, f, g, h);
                return d ? {value: e} : e
            }
        }, "binary>=": function (a, c, d) {
            return function (e, f, g, h) {
                e = a(e, f, g, h) >= c(e, f, g, h);
                return d ? {value: e} : e
            }
        }, "binary&&": function (a, c, d) {
            return function (e, f, g, h) {
                e = a(e, f, g, h) && c(e, f, g, h);
                return d ? {value: e} : e
            }
        }, "binary||": function (a, c, d) {
            return function (e, f, g, h) {
                e = a(e, f, g, h) || c(e, f, g, h);
                return d ? {value: e} : e
            }
        }, "ternary?:": function (a, c, d, e) {
            return function (f, g, h, l) {
                f = a(f, g, h, l) ? c(f, g, h, l) : d(f, g, h, l);
                return e ? {value: f} : f
            }
        }, value: function (a, c) {
            return function () {
                return c ?
                {context: u, name: u, value: a} : a
            }
        }, identifier: function (a, c, d, e, f) {
            return function (g, h, l, k) {
                g = h && a in h ? h : g;
                e && 1 !== e && g && !g[a] && (g[a] = {});
                h = g ? g[a] : u;
                c && ha(h, f);
                return d ? {context: g, name: a, value: h} : h
            }
        }, computedMember: function (a, c, d, e, f) {
            return function (g, h, l, k) {
                var n = a(g, h, l, k), m, p;
                null != n && (m = c(g, h, l, k), za(m, f), e && 1 !== e && n && !n[m] && (n[m] = {}), p = n[m], ha(p, f));
                return d ? {context: n, name: m, value: p} : p
            }
        }, nonComputedMember: function (a, c, d, e, f, g) {
            return function (h, l, k, n) {
                h = a(h, l, k, n);
                f && 1 !== f && h && !h[c] && (h[c] = {});
                l = null != h ? h[c] : u;
                (d || Bb(c)) && ha(l, g);
                return e ? {context: h, name: c, value: l} : l
            }
        }, inputs: function (a, c) {
            return function (d, e, f, g) {
                return g ? g[c] : a(d, e, f)
            }
        }
    };
    var dc = function (a, c, d) {
        this.lexer = a;
        this.$filter = c;
        this.options = d;
        this.ast = new p(this.lexer);
        this.astCompiler = d.csp ? new jd(this.ast, c) : new id(this.ast, c)
    };
    dc.prototype = {
        constructor: dc, parse: function (a) {
            return this.astCompiler.compile(a, this.options.expensiveChecks)
        }
    };
    qa();
    qa();
    var Ff = Object.prototype.valueOf, Aa = R("$sce"), ja = {
        HTML: "html", CSS: "css", URL: "url",
        RESOURCE_URL: "resourceUrl", JS: "js"
    }, ia = R("$compile"), $ = Y.createElement("a"), nd = ya(O.location.href);
    Cc.$inject = ["$provide"];
    od.$inject = ["$locale"];
    qd.$inject = ["$locale"];
    var td = ".", Pf = {
        yyyy: aa("FullYear", 4),
        yy: aa("FullYear", 2, 0, !0),
        y: aa("FullYear", 1),
        MMMM: Db("Month"),
        MMM: Db("Month", !0),
        MM: aa("Month", 2, 1),
        M: aa("Month", 1, 1),
        dd: aa("Date", 2),
        d: aa("Date", 1),
        HH: aa("Hours", 2),
        H: aa("Hours", 1),
        hh: aa("Hours", 2, -12),
        h: aa("Hours", 1, -12),
        mm: aa("Minutes", 2),
        m: aa("Minutes", 1),
        ss: aa("Seconds", 2),
        s: aa("Seconds", 1),
        sss: aa("Milliseconds", 3),
        EEEE: Db("Day"),
        EEE: Db("Day", !0),
        a: function (a, c) {
            return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1]
        },
        Z: function (a, c, d) {
            a = -1 * d;
            return a = (0 <= a ? "+" : "") + (Cb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Cb(Math.abs(a % 60), 2))
        },
        ww: vd(2),
        w: vd(1)
    }, Of = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/, Nf = /^\-?\d+$/;
    pd.$inject = ["$locale"];
    var Kf = oa(G), Lf = oa(lb);
    rd.$inject = ["$parse"];
    var Xd = oa({
        restrict: "E", compile: function (a, c) {
            if (!c.href && !c.xlinkHref)return function (a,
                                                         c) {
                if ("a" === c[0].nodeName.toLowerCase()) {
                    var f = "[object SVGAnimatedString]" === sa.call(c.prop("href")) ? "xlink:href" : "href";
                    c.on("click", function (a) {
                        c.attr(f) || a.preventDefault()
                    })
                }
            }
        }
    }), mb = {};
    r(vb, function (a, c) {
        function d(a, d, f) {
            a.$watch(f[e], function (a) {
                f.$set(c, !!a)
            })
        }

        if ("multiple" != a) {
            var e = wa("ng-" + c), f = d;
            "checked" === a && (f = function (a, c, f) {
                f.ngModel !== f[e] && d(a, c, f)
            });
            mb[e] = function () {
                return {restrict: "A", priority: 100, link: f}
            }
        }
    });
    r(Lc, function (a, c) {
        mb[c] = function () {
            return {
                priority: 100, link: function (a,
                                               e, f) {
                    if ("ngPattern" === c && "/" == f.ngPattern.charAt(0) && (e = f.ngPattern.match(Rf))) {
                        f.$set("ngPattern", new RegExp(e[1], e[2]));
                        return
                    }
                    a.$watch(f[c], function (a) {
                        f.$set(c, a)
                    })
                }
            }
        }
    });
    r(["src", "srcset", "href"], function (a) {
        var c = wa("ng-" + a);
        mb[c] = function () {
            return {
                priority: 99, link: function (d, e, f) {
                    var g = a, h = a;
                    "href" === a && "[object SVGAnimatedString]" === sa.call(e.prop("href")) && (h = "xlinkHref", f.$attr[h] = "xlink:href", g = null);
                    f.$observe(c, function (c) {
                        c ? (f.$set(h, c), ab && g && e.prop(g, f[h])) : "href" === a && f.$set(h, null)
                    })
                }
            }
        }
    });
    var Eb = {
        $addControl: D, $$renameControl: function (a, c) {
            a.$name = c
        }, $removeControl: D, $setValidity: D, $setDirty: D, $setPristine: D, $setSubmitted: D
    };
    wd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var Dd = function (a) {
            return ["$timeout", function (c) {
                return {
                    name: "form", restrict: a ? "EAC" : "E", controller: wd, compile: function (a) {
                        a.addClass(Na).addClass(db);
                        return {
                            pre: function (a, d, g, h) {
                                if (!("action"in g)) {
                                    var l = function (c) {
                                        a.$apply(function () {
                                            h.$commitViewValue();
                                            h.$setSubmitted()
                                        });
                                        c.preventDefault()
                                    };
                                    d[0].addEventListener("submit", l, !1);
                                    d.on("$destroy", function () {
                                        c(function () {
                                            d[0].removeEventListener("submit", l, !1)
                                        }, 0, !1)
                                    })
                                }
                                var k = h.$$parentForm, n = h.$name;
                                n && (Ab(a, n, h, n), g.$observe(g.name ? "name" : "ngForm", function (c) {
                                    n !== c && (Ab(a, n, u, n), n = c, Ab(a, n, h, n), k.$$renameControl(h, n))
                                }));
                                d.on("$destroy", function () {
                                    k.$removeControl(h);
                                    n && Ab(a, n, u, n);
                                    P(h, Eb)
                                })
                            }
                        }
                    }
                }
            }]
        }, Yd = Dd(), ke = Dd(!0), Qf = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, $f = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        ag = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, bg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Ed = /^(\d{4})-(\d{2})-(\d{2})$/, Fd = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, gc = /^(\d{4})-W(\d\d)$/, Gd = /^(\d{4})-(\d\d)$/, Hd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Id = {
            text: function (a, c, d, e, f, g) {
                bb(a, c, d, e, f, g);
                ec(e)
            },
            date: cb("date", Ed, Gb(Ed, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": cb("datetimelocal", Fd, Gb(Fd, "yyyy MM dd HH mm ss sss".split(" ")),
                "yyyy-MM-ddTHH:mm:ss.sss"),
            time: cb("time", Hd, Gb(Hd, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: cb("week", gc, function (a, c) {
                if (pa(a))return a;
                if (M(a)) {
                    gc.lastIndex = 0;
                    var d = gc.exec(a);
                    if (d) {
                        var e = +d[1], f = +d[2], g = d = 0, h = 0, l = 0, k = ud(e), f = 7 * (f - 1);
                        c && (d = c.getHours(), g = c.getMinutes(), h = c.getSeconds(), l = c.getMilliseconds());
                        return new Date(e, 0, k.getDate() + f, d, g, h, l)
                    }
                }
                return NaN
            }, "yyyy-Www"),
            month: cb("month", Gd, Gb(Gd, ["yyyy", "MM"]), "yyyy-MM"),
            number: function (a, c, d, e, f, g) {
                yd(a, c, d, e);
                bb(a, c, d, e, f, g);
                e.$$parserName =
                    "number";
                e.$parsers.push(function (a) {
                    return e.$isEmpty(a) ? null : bg.test(a) ? parseFloat(a) : u
                });
                e.$formatters.push(function (a) {
                    if (!e.$isEmpty(a)) {
                        if (!S(a))throw Hb("numfmt", a);
                        a = a.toString()
                    }
                    return a
                });
                if (d.min || d.ngMin) {
                    var h;
                    e.$validators.min = function (a) {
                        return e.$isEmpty(a) || H(h) || a >= h
                    };
                    d.$observe("min", function (a) {
                        w(a) && !S(a) && (a = parseFloat(a, 10));
                        h = S(a) && !isNaN(a) ? a : u;
                        e.$validate()
                    })
                }
                if (d.max || d.ngMax) {
                    var l;
                    e.$validators.max = function (a) {
                        return e.$isEmpty(a) || H(l) || a <= l
                    };
                    d.$observe("max", function (a) {
                        w(a) && !S(a) && (a = parseFloat(a, 10));
                        l = S(a) && !isNaN(a) ? a : u;
                        e.$validate()
                    })
                }
            },
            url: function (a, c, d, e, f, g) {
                bb(a, c, d, e, f, g);
                ec(e);
                e.$$parserName = "url";
                e.$validators.url = function (a, c) {
                    var d = a || c;
                    return e.$isEmpty(d) || $f.test(d)
                }
            },
            email: function (a, c, d, e, f, g) {
                bb(a, c, d, e, f, g);
                ec(e);
                e.$$parserName = "email";
                e.$validators.email = function (a, c) {
                    var d = a || c;
                    return e.$isEmpty(d) || ag.test(d)
                }
            },
            radio: function (a, c, d, e) {
                H(d.name) && c.attr("name", ++eb);
                c.on("click", function (a) {
                    c[0].checked && e.$setViewValue(d.value, a && a.type)
                });
                e.$render =
                    function () {
                        c[0].checked = d.value == e.$viewValue
                    };
                d.$observe("value", e.$render)
            },
            checkbox: function (a, c, d, e, f, g, h, l) {
                var k = zd(l, a, "ngTrueValue", d.ngTrueValue, !0), n = zd(l, a, "ngFalseValue", d.ngFalseValue, !1);
                c.on("click", function (a) {
                    e.$setViewValue(c[0].checked, a && a.type)
                });
                e.$render = function () {
                    c[0].checked = e.$viewValue
                };
                e.$isEmpty = function (a) {
                    return !1 === a
                };
                e.$formatters.push(function (a) {
                    return ka(a, k)
                });
                e.$parsers.push(function (a) {
                    return a ? k : n
                })
            },
            hidden: D,
            button: D,
            submit: D,
            reset: D,
            file: D
        }, wc = ["$browser",
            "$sniffer", "$filter", "$parse", function (a, c, d, e) {
                return {
                    restrict: "E", require: ["?ngModel"], link: {
                        pre: function (f, g, h, l) {
                            l[0] && (Id[G(h.type)] || Id.text)(f, g, h, l[0], c, a, d, e)
                        }
                    }
                }
            }], cg = /^(true|false|\d+)$/, Ce = function () {
            return {
                restrict: "A", priority: 100, compile: function (a, c) {
                    return cg.test(c.ngValue) ? function (a, c, f) {
                        f.$set("value", a.$eval(f.ngValue))
                    } : function (a, c, f) {
                        a.$watch(f.ngValue, function (a) {
                            f.$set("value", a)
                        })
                    }
                }
            }
        }, ce = ["$compile", function (a) {
            return {
                restrict: "AC", compile: function (c) {
                    a.$$addBindingClass(c);
                    return function (c, e, f) {
                        a.$$addBindingInfo(e, f.ngBind);
                        e = e[0];
                        c.$watch(f.ngBind, function (a) {
                            e.textContent = a === u ? "" : a
                        })
                    }
                }
            }
        }], ee = ["$interpolate", "$compile", function (a, c) {
            return {
                compile: function (d) {
                    c.$$addBindingClass(d);
                    return function (d, f, g) {
                        d = a(f.attr(g.$attr.ngBindTemplate));
                        c.$$addBindingInfo(f, d.expressions);
                        f = f[0];
                        g.$observe("ngBindTemplate", function (a) {
                            f.textContent = a === u ? "" : a
                        })
                    }
                }
            }
        }], de = ["$sce", "$parse", "$compile", function (a, c, d) {
            return {
                restrict: "A", compile: function (e, f) {
                    var g = c(f.ngBindHtml),
                        h = c(f.ngBindHtml, function (a) {
                            return (a || "").toString()
                        });
                    d.$$addBindingClass(e);
                    return function (c, e, f) {
                        d.$$addBindingInfo(e, f.ngBindHtml);
                        c.$watch(h, function () {
                            e.html(a.getTrustedHtml(g(c)) || "")
                        })
                    }
                }
            }
        }], Be = oa({
            restrict: "A", require: "ngModel", link: function (a, c, d, e) {
                e.$viewChangeListeners.push(function () {
                    a.$eval(d.ngChange)
                })
            }
        }), fe = fc("", !0), he = fc("Odd", 0), ge = fc("Even", 1), ie = Ia({
            compile: function (a, c) {
                c.$set("ngCloak", u);
                a.removeClass("ng-cloak")
            }
        }), je = [function () {
            return {
                restrict: "A", scope: !0, controller: "@",
                priority: 500
            }
        }], Bc = {}, dg = {blur: !0, focus: !0};
    r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
        var c = wa("ng-" + a);
        Bc[c] = ["$parse", "$rootScope", function (d, e) {
            return {
                restrict: "A", compile: function (f, g) {
                    var h = d(g[c], null, !0);
                    return function (c, d) {
                        d.on(a, function (d) {
                            var f = function () {
                                h(c, {$event: d})
                            };
                            dg[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f)
                        })
                    }
                }
            }
        }]
    });
    var me = ["$animate", function (a) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function (c, d, e, f, g) {
                    var h, l, k;
                    c.$watch(e.ngIf, function (c) {
                        c ? l || g(function (c, f) {
                            l = f;
                            c[c.length++] = Y.createComment(" end ngIf: " + e.ngIf + " ");
                            h = {clone: c};
                            a.enter(c, d.parent(), d)
                        }) : (k && (k.remove(), k = null), l && (l.$destroy(), l = null), h && (k = kb(h.clone), a.leave(k).then(function () {
                            k = null
                        }), h = null))
                    })
                }
            }
        }], ne = ["$templateRequest", "$anchorScroll", "$animate", "$sce", function (a, c, d, e) {
            return {
                restrict: "ECA", priority: 400, terminal: !0, transclude: "element",
                controller: ca.noop, compile: function (f, g) {
                    var h = g.ngInclude || g.src, l = g.onload || "", k = g.autoscroll;
                    return function (f, g, p, r, u) {
                        var y = 0, q, z, A, v = function () {
                            z && (z.remove(), z = null);
                            q && (q.$destroy(), q = null);
                            A && (d.leave(A).then(function () {
                                z = null
                            }), z = A, A = null)
                        };
                        f.$watch(e.parseAsResourceUrl(h), function (e) {
                            var h = function () {
                                !w(k) || k && !f.$eval(k) || c()
                            }, p = ++y;
                            e ? (a(e, !0).then(function (a) {
                                if (p === y) {
                                    var c = f.$new();
                                    r.template = a;
                                    a = u(c, function (a) {
                                        v();
                                        d.enter(a, null, g).then(h)
                                    });
                                    q = c;
                                    A = a;
                                    q.$emit("$includeContentLoaded",
                                        e);
                                    f.$eval(l)
                                }
                            }, function () {
                                p === y && (v(), f.$emit("$includeContentError", e))
                            }), f.$emit("$includeContentRequested", e)) : (v(), r.template = null)
                        })
                    }
                }
            }
        }], Ee = ["$compile", function (a) {
            return {
                restrict: "ECA", priority: -400, require: "ngInclude", link: function (c, d, e, f) {
                    /SVG/.test(d[0].toString()) ? (d.empty(), a(Ec(f.template, Y).childNodes)(c, function (a) {
                        d.append(a)
                    }, {futureParentElement: d})) : (d.html(f.template), a(d.contents())(c))
                }
            }
        }], oe = Ia({
            priority: 450, compile: function () {
                return {
                    pre: function (a, c, d) {
                        a.$eval(d.ngInit)
                    }
                }
            }
        }),
        Ae = function () {
            return {
                restrict: "A", priority: 100, require: "ngModel", link: function (a, c, d, e) {
                    var f = c.attr(d.$attr.ngList) || ", ", g = "false" !== d.ngTrim, h = g ? W(f) : f;
                    e.$parsers.push(function (a) {
                        if (!H(a)) {
                            var c = [];
                            a && r(a.split(h), function (a) {
                                a && c.push(g ? W(a) : a)
                            });
                            return c
                        }
                    });
                    e.$formatters.push(function (a) {
                        return J(a) ? a.join(f) : u
                    });
                    e.$isEmpty = function (a) {
                        return !a || !a.length
                    }
                }
            }
        }, db = "ng-valid", Ad = "ng-invalid", Na = "ng-pristine", Fb = "ng-dirty", Cd = "ng-pending", Hb = new R("ngModel"), eg = ["$scope", "$exceptionHandler", "$attrs",
            "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, c, d, e, f, g, h, l, k, n) {
                this.$modelValue = this.$viewValue = Number.NaN;
                this.$$rawModelValue = u;
                this.$validators = {};
                this.$asyncValidators = {};
                this.$parsers = [];
                this.$formatters = [];
                this.$viewChangeListeners = [];
                this.$untouched = !0;
                this.$touched = !1;
                this.$pristine = !0;
                this.$dirty = !1;
                this.$valid = !0;
                this.$invalid = !1;
                this.$error = {};
                this.$$success = {};
                this.$pending = u;
                this.$name = n(d.name || "", !1)(a);
                var m = f(d.ngModel), p = m.assign, s = m, x = p,
                    y = null, q = this;
                this.$$setOptions = function (a) {
                    if ((q.$options = a) && a.getterSetter) {
                        var c = f(d.ngModel + "()"), g = f(d.ngModel + "($$$p)");
                        s = function (a) {
                            var d = m(a);
                            C(d) && (d = c(a));
                            return d
                        };
                        x = function (a, c) {
                            C(m(a)) ? g(a, {$$$p: q.$modelValue}) : p(a, q.$modelValue)
                        }
                    } else if (!m.assign)throw Hb("nonassign", d.ngModel, va(e));
                };
                this.$render = D;
                this.$isEmpty = function (a) {
                    return H(a) || "" === a || null === a || a !== a
                };
                var z = e.inheritedData("$formController") || Eb, A = 0;
                xd({
                    ctrl: this, $element: e, set: function (a, c) {
                        a[c] = !0
                    }, unset: function (a,
                                        c) {
                        delete a[c]
                    }, parentForm: z, $animate: g
                });
                this.$setPristine = function () {
                    q.$dirty = !1;
                    q.$pristine = !0;
                    g.removeClass(e, Fb);
                    g.addClass(e, Na)
                };
                this.$setDirty = function () {
                    q.$dirty = !0;
                    q.$pristine = !1;
                    g.removeClass(e, Na);
                    g.addClass(e, Fb);
                    z.$setDirty()
                };
                this.$setUntouched = function () {
                    q.$touched = !1;
                    q.$untouched = !0;
                    g.setClass(e, "ng-untouched", "ng-touched")
                };
                this.$setTouched = function () {
                    q.$touched = !0;
                    q.$untouched = !1;
                    g.setClass(e, "ng-touched", "ng-untouched")
                };
                this.$rollbackViewValue = function () {
                    h.cancel(y);
                    q.$viewValue =
                        q.$$lastCommittedViewValue;
                    q.$render()
                };
                this.$validate = function () {
                    if (!S(q.$modelValue) || !isNaN(q.$modelValue)) {
                        var a = q.$$rawModelValue, c = q.$valid, d = q.$modelValue, e = q.$options && q.$options.allowInvalid;
                        q.$$runValidators(q.$error[q.$$parserName || "parse"] ? !1 : u, a, q.$$lastCommittedViewValue, function (f) {
                            e || c === f || (q.$modelValue = f ? a : u, q.$modelValue !== d && q.$$writeModelToScope())
                        })
                    }
                };
                this.$$runValidators = function (a, c, d, e) {
                    function f() {
                        var a = !0;
                        r(q.$validators, function (e, f) {
                            var g = e(c, d);
                            a = a && g;
                            h(f, g)
                        });
                        return a ?
                            !0 : (r(q.$asyncValidators, function (a, c) {
                            h(c, null)
                        }), !1)
                    }

                    function g() {
                        var a = [], e = !0;
                        r(q.$asyncValidators, function (f, g) {
                            var k = f(c, d);
                            if (!k || !C(k.then))throw Hb("$asyncValidators", k);
                            h(g, u);
                            a.push(k.then(function () {
                                h(g, !0)
                            }, function (a) {
                                e = !1;
                                h(g, !1)
                            }))
                        });
                        a.length ? k.all(a).then(function () {
                            l(e)
                        }, D) : l(!0)
                    }

                    function h(a, c) {
                        m === A && q.$setValidity(a, c)
                    }

                    function l(a) {
                        m === A && e(a)
                    }

                    A++;
                    var m = A;
                    (function (a) {
                        var c = q.$$parserName || "parse";
                        if (a === u)h(c, null); else if (h(c, a), !a)return r(q.$validators, function (a, c) {
                            h(c,
                                null)
                        }), r(q.$asyncValidators, function (a, c) {
                            h(c, null)
                        }), !1;
                        return !0
                    })(a) ? f() ? g() : l(!1) : l(!1)
                };
                this.$commitViewValue = function () {
                    var a = q.$viewValue;
                    h.cancel(y);
                    if (q.$$lastCommittedViewValue !== a || "" === a && q.$$hasNativeValidators)q.$$lastCommittedViewValue = a, q.$pristine && this.$setDirty(), this.$$parseAndValidate()
                };
                this.$$parseAndValidate = function () {
                    var c = q.$$lastCommittedViewValue, d = H(c) ? u : !0;
                    if (d)for (var e = 0; e < q.$parsers.length; e++)if (c = q.$parsers[e](c), H(c)) {
                        d = !1;
                        break
                    }
                    S(q.$modelValue) && isNaN(q.$modelValue) &&
                    (q.$modelValue = s(a));
                    var f = q.$modelValue, g = q.$options && q.$options.allowInvalid;
                    q.$$rawModelValue = c;
                    g && (q.$modelValue = c, q.$modelValue !== f && q.$$writeModelToScope());
                    q.$$runValidators(d, c, q.$$lastCommittedViewValue, function (a) {
                        g || (q.$modelValue = a ? c : u, q.$modelValue !== f && q.$$writeModelToScope())
                    })
                };
                this.$$writeModelToScope = function () {
                    x(a, q.$modelValue);
                    r(q.$viewChangeListeners, function (a) {
                        try {
                            a()
                        } catch (d) {
                            c(d)
                        }
                    })
                };
                this.$setViewValue = function (a, c) {
                    q.$viewValue = a;
                    q.$options && !q.$options.updateOnDefault ||
                    q.$$debounceViewValueCommit(c)
                };
                this.$$debounceViewValueCommit = function (c) {
                    var d = 0, e = q.$options;
                    e && w(e.debounce) && (e = e.debounce, S(e) ? d = e : S(e[c]) ? d = e[c] : S(e["default"]) && (d = e["default"]));
                    h.cancel(y);
                    d ? y = h(function () {
                        q.$commitViewValue()
                    }, d) : l.$$phase ? q.$commitViewValue() : a.$apply(function () {
                        q.$commitViewValue()
                    })
                };
                a.$watch(function () {
                    var c = s(a);
                    if (c !== q.$modelValue) {
                        q.$modelValue = q.$$rawModelValue = c;
                        for (var d = q.$formatters, e = d.length, f = c; e--;)f = d[e](f);
                        q.$viewValue !== f && (q.$viewValue = q.$$lastCommittedViewValue =
                            f, q.$render(), q.$$runValidators(u, c, f, D))
                    }
                    return c
                })
            }], ze = ["$rootScope", function (a) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: eg,
                priority: 1,
                compile: function (c) {
                    c.addClass(Na).addClass("ng-untouched").addClass(db);
                    return {
                        pre: function (a, c, f, g) {
                            var h = g[0], l = g[1] || Eb;
                            h.$$setOptions(g[2] && g[2].$options);
                            l.$addControl(h);
                            f.$observe("name", function (a) {
                                h.$name !== a && l.$$renameControl(h, a)
                            });
                            a.$on("$destroy", function () {
                                l.$removeControl(h)
                            })
                        }, post: function (c, e, f, g) {
                            var h =
                                g[0];
                            if (h.$options && h.$options.updateOn)e.on(h.$options.updateOn, function (a) {
                                h.$$debounceViewValueCommit(a && a.type)
                            });
                            e.on("blur", function (e) {
                                h.$touched || (a.$$phase ? c.$evalAsync(h.$setTouched) : c.$apply(h.$setTouched))
                            })
                        }
                    }
                }
            }
        }], fg = /(\s+|^)default(\s+|$)/, De = function () {
            return {
                restrict: "A", controller: ["$scope", "$attrs", function (a, c) {
                    var d = this;
                    this.$options = ua(a.$eval(c.ngModelOptions));
                    this.$options.updateOn !== u ? (this.$options.updateOnDefault = !1, this.$options.updateOn = W(this.$options.updateOn.replace(fg,
                        function () {
                            d.$options.updateOnDefault = !0;
                            return " "
                        }))) : this.$options.updateOnDefault = !0
                }]
            }
        }, pe = Ia({
            terminal: !0,
            priority: 1E3
        }), gg = R("ngOptions"), hg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, xe = ["$compile", "$parse", function (a, c) {
            function d(a, d, e) {
                function f(a, c, d, e) {
                    this.selectValue = a;
                    this.viewValue = c;
                    this.label = d;
                    this.group = e
                }

                var n = a.match(hg);
                if (!n)throw gg("iexp", a, va(d));
                var m = n[4] || n[6], p = n[5];
                a = / as /.test(n[0]) && n[1];
                d = n[8];
                var r = c(n[2] ? n[1] : m), u = a && c(a) || r, y = d && c(d), q = d ? function (a, c) {
                    return y(e, c)
                } : function (a) {
                    return Da(a)
                }, z = c(n[2] || n[1]), A = c(n[3] || ""), v = c(n[7]), B = {}, K = p ? function (a, c) {
                    B[p] = c;
                    B[m] = a;
                    return B
                } : function (a) {
                    B[m] = a;
                    return B
                };
                return {
                    getWatchables: c(v, function (a) {
                        var c = [];
                        a = a || [];
                        Object.keys(a).forEach(function (d) {
                            var f = K(a[d], d), g = z(e, f);
                            d = q(a[d], f);
                            c.push(d);
                            c.push(g)
                        });
                        return c
                    }), getOptions: function () {
                        var a = [], c = {},
                            d = v(e) || [];
                        Object.keys(d).forEach(function (g) {
                            if ("$" !== g.charAt(0)) {
                                var h = K(d[g], g), m = u(e, h);
                                g = q(m, h);
                                var n = z(e, h), h = A(e, h), m = new f(g, m, n, h);
                                a.push(m);
                                c[g] = m
                            }
                        });
                        return {
                            items: a, selectValueMap: c, getOptionFromViewValue: function (a) {
                                return c[q(a, K(a))]
                            }
                        }
                    }
                }
            }

            var e = Y.createElement("option"), f = Y.createElement("optgroup");
            return {
                restrict: "A", terminal: !0, require: ["select", "?ngModel"], link: function (c, h, l, k) {
                    function n(a, c) {
                        a.element = c;
                        a.value !== c.value && (c.value = a.selectValue);
                        a.label !== c.label && (c.label = a.label,
                            c.textContent = a.label)
                    }

                    function m(a, c, d, e) {
                        c && G(c.nodeName) === d ? d = c : (d = e.cloneNode(!1), c ? a.insertBefore(d, c) : a.appendChild(d));
                        return d
                    }

                    function p(a) {
                        for (var c; a;)c = a.nextSibling, Rb(a), a = c
                    }

                    function r(a) {
                        var c = z && z[0], d = v && v[0];
                        if (c || d)for (; a && (a === c || a === d);)a = a.nextSibling;
                        return a
                    }

                    function u() {
                        var a = B && q.readValue();
                        B = K.getOptions();
                        var c = {}, d = h[0].firstChild;
                        A && h.prepend(z);
                        d = r(d);
                        B.items.forEach(function (a) {
                            var g, k;
                            a.group ? (g = c[a.group], g || (g = m(h[0], d, "optgroup", f), d = g.nextSibling, g.label = a.group,
                                g = c[a.group] = {
                                    groupElement: g,
                                    currentOptionElement: g.firstChild
                                }), k = m(g.groupElement, g.currentOptionElement, "option", e), n(a, k), g.currentOptionElement = k.nextSibling) : (k = m(h[0], d, "option", e), n(a, k), d = k.nextSibling)
                        });
                        Object.keys(c).forEach(function (a) {
                            p(c[a].currentOptionElement)
                        });
                        p(d);
                        y.$render();
                        if (!y.$isEmpty(a)) {
                            var g = q.readValue();
                            ka(a, g) || y.$setViewValue(g)
                        }
                    }

                    var y = k[1];
                    if (y) {
                        var q = k[0];
                        k = l.multiple;
                        var z = q.emptyOption, A = !!z, v = I(e.cloneNode(!1));
                        v.val("?");
                        var B, K = d(l.ngOptions, h, c);
                        q.writeValue =
                            function (a) {
                                var c = B.getOptionFromViewValue(a);
                                c ? h[0].value !== c.selectValue && (v.remove(), A || z.remove(), h[0].value = c.selectValue, c.element.selected = !0, c.element.setAttribute("selected", "selected")) : null === a || A ? (v.remove(), A || h.prepend(z), h.val(""), z.prop("selected", !0), z.attr("selected", !0)) : (A || z.remove(), h.prepend(v), h.val("?"), v.prop("selected", !0), v.attr("selected", !0))
                            };
                        q.readValue = function () {
                            var a = B.selectValueMap[h.val()];
                            return a ? (A || z.remove(), v.remove(), a.viewValue) : null
                        };
                        k && (y.$isEmpty = function (a) {
                            return !a ||
                                0 === a.length
                        }, q.writeValue = function (a) {
                            B.items.forEach(function (a) {
                                a.element.selected = !1
                            });
                            a && a.forEach(function (a) {
                                if (a = B.getOptionFromViewValue(a))a.element.selected = !0
                            })
                        }, q.readValue = function () {
                            return (h.val() || []).map(function (a) {
                                return B.selectValueMap[a].viewValue
                            })
                        });
                        A ? (z.remove(), a(z)(c), z.removeClass("ng-scope")) : z = I(e.cloneNode(!1));
                        u();
                        c.$watchCollection(K.getWatchables, u)
                    }
                }
            }
        }], qe = ["$locale", "$interpolate", "$log", function (a, c, d) {
            var e = /{}/g, f = /^when(Minus)?(.+)$/;
            return {
                restrict: "EA", link: function (g,
                                                h, l) {
                    function k(a) {
                        h.text(a || "")
                    }

                    var n = l.count, m = l.$attr.when && h.attr(l.$attr.when), p = l.offset || 0, s = g.$eval(m) || {}, u = {}, y = c.startSymbol(), q = c.endSymbol(), z = y + n + "-" + p + q, A = ca.noop, v;
                    r(l, function (a, c) {
                        var d = f.exec(c);
                        d && (d = (d[1] ? "-" : "") + G(d[2]), s[d] = h.attr(l.$attr[c]))
                    });
                    r(s, function (a, d) {
                        u[d] = c(a.replace(e, z))
                    });
                    g.$watch(n, function (c) {
                        var e = parseFloat(c), f = isNaN(e);
                        f || e in s || (e = a.pluralCat(e - p));
                        e === v || f && S(v) && isNaN(v) || (A(), f = u[e], H(f) ? (null != c && d.debug("ngPluralize: no rule defined for '" + e + "' in " +
                        m), A = D, k()) : A = g.$watch(f, k), v = e)
                    })
                }
            }
        }], re = ["$parse", "$animate", function (a, c) {
            var d = R("ngRepeat"), e = function (a, c, d, e, k, n, m) {
                a[d] = e;
                k && (a[k] = n);
                a.$index = c;
                a.$first = 0 === c;
                a.$last = c === m - 1;
                a.$middle = !(a.$first || a.$last);
                a.$odd = !(a.$even = 0 === (c & 1))
            };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1E3,
                terminal: !0,
                $$tlb: !0,
                compile: function (f, g) {
                    var h = g.ngRepeat, l = Y.createComment(" end ngRepeat: " + h + " "), k = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!k)throw d("iexp", h);
                    var n = k[1], m = k[2], p = k[3], s = k[4], k = n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                    if (!k)throw d("iidexp", n);
                    var x = k[3] || k[1], y = k[2];
                    if (p && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw d("badident", p);
                    var q, z, A, v, w = {$id: Da};
                    s ? q = a(s) : (A = function (a, c) {
                        return Da(c)
                    }, v = function (a) {
                        return a
                    });
                    return function (a, f, g, k, n) {
                        q && (z = function (c, d, e) {
                            y && (w[y] = c);
                            w[x] = d;
                            w.$index =
                                e;
                            return q(a, w)
                        });
                        var s = qa();
                        a.$watchCollection(m, function (g) {
                            var k, m, q = f[0], w, B = qa(), E, D, G, C, H, F, J;
                            p && (a[p] = g);
                            if (Oa(g))H = g, m = z || A; else for (J in m = z || v, H = [], g)g.hasOwnProperty(J) && "$" !== J.charAt(0) && H.push(J);
                            E = H.length;
                            J = Array(E);
                            for (k = 0; k < E; k++)if (D = g === H ? k : H[k], G = g[D], C = m(D, G, k), s[C])F = s[C], delete s[C], B[C] = F, J[k] = F; else {
                                if (B[C])throw r(J, function (a) {
                                    a && a.scope && (s[a.id] = a)
                                }), d("dupes", h, C, G);
                                J[k] = {id: C, scope: u, clone: u};
                                B[C] = !0
                            }
                            for (w in s) {
                                F = s[w];
                                C = kb(F.clone);
                                c.leave(C);
                                if (C[0].parentNode)for (k =
                                                             0, m = C.length; k < m; k++)C[k].$$NG_REMOVED = !0;
                                F.scope.$destroy()
                            }
                            for (k = 0; k < E; k++)if (D = g === H ? k : H[k], G = g[D], F = J[k], F.scope) {
                                w = q;
                                do w = w.nextSibling; while (w && w.$$NG_REMOVED);
                                F.clone[0] != w && c.move(kb(F.clone), null, I(q));
                                q = F.clone[F.clone.length - 1];
                                e(F.scope, k, x, G, y, D, E)
                            } else n(function (a, d) {
                                F.scope = d;
                                var f = l.cloneNode(!1);
                                a[a.length++] = f;
                                c.enter(a, null, I(q));
                                q = f;
                                F.clone = a;
                                B[F.id] = F;
                                e(F.scope, k, x, G, y, D, E)
                            });
                            s = B
                        })
                    }
                }
            }
        }], se = ["$animate", function (a) {
            return {
                restrict: "A", multiElement: !0, link: function (c, d, e) {
                    c.$watch(e.ngShow,
                        function (c) {
                            a[c ? "removeClass" : "addClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"})
                        })
                }
            }
        }], le = ["$animate", function (a) {
            return {
                restrict: "A", multiElement: !0, link: function (c, d, e) {
                    c.$watch(e.ngHide, function (c) {
                        a[c ? "addClass" : "removeClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"})
                    })
                }
            }
        }], te = Ia(function (a, c, d) {
            a.$watchCollection(d.ngStyle, function (a, d) {
                d && a !== d && r(d, function (a, d) {
                    c.css(d, "")
                });
                a && c.css(a)
            })
        }), ue = ["$animate", function (a) {
            return {
                restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
                    this.cases =
                    {}
                }], link: function (c, d, e, f) {
                    var g = [], h = [], l = [], k = [], n = function (a, c) {
                        return function () {
                            a.splice(c, 1)
                        }
                    };
                    c.$watch(e.ngSwitch || e.on, function (c) {
                        var d, e;
                        d = 0;
                        for (e = l.length; d < e; ++d)a.cancel(l[d]);
                        d = l.length = 0;
                        for (e = k.length; d < e; ++d) {
                            var p = kb(h[d].clone);
                            k[d].$destroy();
                            (l[d] = a.leave(p)).then(n(l, d))
                        }
                        h.length = 0;
                        k.length = 0;
                        (g = f.cases["!" + c] || f.cases["?"]) && r(g, function (c) {
                            c.transclude(function (d, e) {
                                k.push(e);
                                var f = c.element;
                                d[d.length++] = Y.createComment(" end ngSwitchWhen: ");
                                h.push({clone: d});
                                a.enter(d,
                                    f.parent(), f)
                            })
                        })
                    })
                }
            }
        }], ve = Ia({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (a, c, d, e, f) {
                e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [];
                e.cases["!" + d.ngSwitchWhen].push({transclude: f, element: c})
            }
        }), we = Ia({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (a, c, d, e, f) {
                e.cases["?"] = e.cases["?"] || [];
                e.cases["?"].push({transclude: f, element: c})
            }
        }), ye = Ia({
            restrict: "EAC", link: function (a, c, d, e, f) {
                if (!f)throw R("ngTransclude")("orphan",
                    va(c));
                f(function (a) {
                    c.empty();
                    c.append(a)
                })
            }
        }), Zd = ["$templateCache", function (a) {
            return {
                restrict: "E", terminal: !0, compile: function (c, d) {
                    "text/ng-template" == d.type && a.put(d.id, c[0].text)
                }
            }
        }], ig = {$setViewValue: D, $render: D}, jg = ["$element", "$scope", "$attrs", function (a, c, d) {
            var e = this, f = new wb;
            e.ngModelCtrl = ig;
            e.unknownOption = I(Y.createElement("option"));
            e.renderUnknownOption = function (c) {
                c = "? " + Da(c) + " ?";
                e.unknownOption.val(c);
                a.prepend(e.unknownOption);
                a.val(c)
            };
            c.$on("$destroy", function () {
                e.renderUnknownOption =
                    D
            });
            e.removeUnknownOption = function () {
                e.unknownOption.parent() && e.unknownOption.remove()
            };
            c = 0;
            d = a.children();
            for (var g = d.length; c < g; c++)if ("" === d[c].value) {
                e.emptyOption = d.eq(c);
                break
            }
            e.readValue = function () {
                e.removeUnknownOption();
                return a.val()
            };
            e.writeValue = function (c) {
                e.hasOption(c) ? (e.removeUnknownOption(), a.val(c), "" === c && e.emptyOption.prop("selected", !0)) : H(c) && e.emptyOption ? a.val("") : e.renderUnknownOption(c)
            };
            e.addOption = function (a) {
                La(a, '"option value"');
                var c = f.get(a) || 0;
                f.put(a, c + 1)
            };
            e.removeOption =
                function (a) {
                    var c = f.get(a);
                    c && (1 === c ? f.remove(a) : f.put(a, c - 1))
                };
            e.hasOption = function (a) {
                return !!f.get(a)
            }
        }], $d = function () {
            var a;
            return {
                restrict: "E", require: ["select", "?ngModel"], controller: jg, link: function (c, d, e, f) {
                    var g = f[1];
                    if (g) {
                        var h = f[0];
                        h.ngModelCtrl = g;
                        g.$render = function () {
                            h.writeValue(g.$viewValue)
                        };
                        d.on("change", function () {
                            c.$apply(function () {
                                g.$setViewValue(h.readValue())
                            })
                        });
                        e.multiple && (h.readValue = function () {
                            var a = [];
                            r(d.find("option"), function (c) {
                                c.selected && a.push(c.value)
                            });
                            return a
                        },
                            h.writeValue = function (a) {
                                var c = new wb(a);
                                r(d.find("option"), function (a) {
                                    a.selected = w(c.get(a.value))
                                })
                            }, c.$watch(function () {
                            ka(a, g.$viewValue) || (a = fa(g.$viewValue), g.$render())
                        }), g.$isEmpty = function (a) {
                            return !a || 0 === a.length
                        })
                    }
                }
            }
        }, be = ["$interpolate", function (a) {
            function c(a) {
                a[0].hasAttribute("selected") && (a[0].selected = !0)
            }

            return {
                restrict: "E", priority: 100, compile: function (d, e) {
                    if (H(e.value)) {
                        var f = a(d.text(), !0);
                        f || e.$set("value", d.text())
                    }
                    return function (a, d, e) {
                        var k = d.parent(), n = k.data("$selectController") ||
                            k.parent().data("$selectController");
                        n && n.ngModelCtrl && (f ? a.$watch(f, function (a, f) {
                            e.$set("value", a);
                            f !== a && n.removeOption(f);
                            n.addOption(a, d);
                            n.ngModelCtrl.$render();
                            c(d)
                        }) : (n.addOption(e.value, d), n.ngModelCtrl.$render(), c(d)), d.on("$destroy", function () {
                            n.removeOption(e.value);
                            n.ngModelCtrl.$render()
                        }))
                    }
                }
            }
        }], ae = oa({restrict: "E", terminal: !1}), yc = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, c, d, e) {
                    e && (d.required = !0, e.$validators.required = function (a, c) {
                        return !d.required || !e.$isEmpty(c)
                    },
                        d.$observe("required", function () {
                            e.$validate()
                        }))
                }
            }
        }, xc = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, c, d, e) {
                    if (e) {
                        var f, g = d.ngPattern || d.pattern;
                        d.$observe("pattern", function (a) {
                            M(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));
                            if (a && !a.test)throw R("ngPattern")("noregexp", g, a, va(c));
                            f = a || u;
                            e.$validate()
                        });
                        e.$validators.pattern = function (a) {
                            return e.$isEmpty(a) || H(f) || f.test(a)
                        }
                    }
                }
            }
        }, Ac = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, c, d, e) {
                    if (e) {
                        var f = -1;
                        d.$observe("maxlength",
                            function (a) {
                                a = ba(a);
                                f = isNaN(a) ? -1 : a;
                                e.$validate()
                            });
                        e.$validators.maxlength = function (a, c) {
                            return 0 > f || e.$isEmpty(c) || c.length <= f
                        }
                    }
                }
            }
        }, zc = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, c, d, e) {
                    if (e) {
                        var f = 0;
                        d.$observe("minlength", function (a) {
                            f = ba(a) || 0;
                            e.$validate()
                        });
                        e.$validators.minlength = function (a, c) {
                            return e.$isEmpty(c) || c.length >= f
                        }
                    }
                }
            }
        };
    O.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (Rd(), Td(ca), I(Y).ready(function () {
        Nd(Y, rc)
    }))
})(window,
    document);
!window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');