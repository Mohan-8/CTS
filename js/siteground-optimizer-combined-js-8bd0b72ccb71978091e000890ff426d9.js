/*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  (function (t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e, window);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(require("jquery"), window))
      : t(jQuery, window);
  })(function (s, n) {
    "use strict";
    function e(e) {
      return (
        0 <=
        (function (e, t) {
          for (
            var r = /^(\d+)\.(\d+)\.(\d+)/,
              n = r.exec(e) || [],
              o = r.exec(t) || [],
              a = 1;
            a <= 3;
            a++
          ) {
            if (+o[a] < +n[a]) return 1;
            if (+n[a] < +o[a]) return -1;
          }
          return 0;
        })(s.fn.jquery, e)
      );
    }
    s.migrateVersion = "3.4.1";
    var t = Object.create(null);
    (s.migrateDisablePatches = function () {
      for (var e = 0; e < arguments.length; e++) t[arguments[e]] = !0;
    }),
      (s.migrateEnablePatches = function () {
        for (var e = 0; e < arguments.length; e++) delete t[arguments[e]];
      }),
      (s.migrateIsPatchEnabled = function (e) {
        return !t[e];
      }),
      n.console &&
        n.console.log &&
        ((s && e("3.0.0") && !e("5.0.0")) ||
          n.console.log("JQMIGRATE: jQuery 3.x-4.x REQUIRED"),
        s.migrateWarnings &&
          n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
        n.console.log(
          "JQMIGRATE: Migrate is installed" +
            (s.migrateMute ? "" : " with logging active") +
            ", version " +
            s.migrateVersion
        ));
    var o = {};
    function u(e, t) {
      var r = n.console;
      !s.migrateIsPatchEnabled(e) ||
        (s.migrateDeduplicateWarnings && o[t]) ||
        ((o[t] = !0),
        s.migrateWarnings.push(t + " [" + e + "]"),
        r &&
          r.warn &&
          !s.migrateMute &&
          (r.warn("JQMIGRATE: " + t), s.migrateTrace && r.trace && r.trace()));
    }
    function r(e, t, r, n, o) {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return u(n, o), r;
        },
        set: function (e) {
          u(n, o), (r = e);
        },
      });
    }
    function a(e, t, r, n, o) {
      var a = e[t];
      e[t] = function () {
        return (
          o && u(n, o),
          (s.migrateIsPatchEnabled(n) ? r : a || s.noop).apply(this, arguments)
        );
      };
    }
    function c(e, t, r, n, o) {
      if (!o) throw new Error("No warning message provided");
      return a(e, t, r, n, o), 0;
    }
    function i(e, t, r, n) {
      return a(e, t, r, n), 0;
    }
    (s.migrateDeduplicateWarnings = !0),
      (s.migrateWarnings = []),
      void 0 === s.migrateTrace && (s.migrateTrace = !0),
      (s.migrateReset = function () {
        (o = {}), (s.migrateWarnings.length = 0);
      }),
      "BackCompat" === n.document.compatMode &&
        u("quirks", "jQuery is not compatible with Quirks Mode");
    var d,
      l,
      p,
      f = {},
      m = s.fn.init,
      y = s.find,
      h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      g = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      v = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    for (d in (i(
      s.fn,
      "init",
      function (e) {
        var t = Array.prototype.slice.call(arguments);
        return (
          s.migrateIsPatchEnabled("selector-empty-id") &&
            "string" == typeof e &&
            "#" === e &&
            (u("selector-empty-id", "jQuery( '#' ) is not a valid selector"),
            (t[0] = [])),
          m.apply(this, t)
        );
      },
      "selector-empty-id"
    ),
    (s.fn.init.prototype = s.fn),
    i(
      s,
      "find",
      function (t) {
        var r = Array.prototype.slice.call(arguments);
        if ("string" == typeof t && h.test(t))
          try {
            n.document.querySelector(t);
          } catch (e) {
            t = t.replace(g, function (e, t, r, n) {
              return "[" + t + r + '"' + n + '"]';
            });
            try {
              n.document.querySelector(t),
                u(
                  "selector-hash",
                  "Attribute selector with '#' must be quoted: " + r[0]
                ),
                (r[0] = t);
            } catch (e) {
              u(
                "selector-hash",
                "Attribute selector with '#' was not fixed: " + r[0]
              );
            }
          }
        return y.apply(this, r);
      },
      "selector-hash"
    ),
    y))
      Object.prototype.hasOwnProperty.call(y, d) && (s.find[d] = y[d]);
    c(
      s.fn,
      "size",
      function () {
        return this.length;
      },
      "size",
      "jQuery.fn.size() is deprecated and removed; use the .length property"
    ),
      c(
        s,
        "parseJSON",
        function () {
          return JSON.parse.apply(null, arguments);
        },
        "parseJSON",
        "jQuery.parseJSON is deprecated; use JSON.parse"
      ),
      c(
        s,
        "holdReady",
        s.holdReady,
        "holdReady",
        "jQuery.holdReady is deprecated"
      ),
      c(
        s,
        "unique",
        s.uniqueSort,
        "unique",
        "jQuery.unique is deprecated; use jQuery.uniqueSort"
      ),
      r(
        s.expr,
        "filters",
        s.expr.pseudos,
        "expr-pre-pseudos",
        "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"
      ),
      r(
        s.expr,
        ":",
        s.expr.pseudos,
        "expr-pre-pseudos",
        "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"
      ),
      e("3.1.1") &&
        c(
          s,
          "trim",
          function (e) {
            return null == e ? "" : (e + "").replace(v, "$1");
          },
          "trim",
          "jQuery.trim is deprecated; use String.prototype.trim"
        ),
      e("3.2.0") &&
        (c(
          s,
          "nodeName",
          function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          },
          "nodeName",
          "jQuery.nodeName is deprecated"
        ),
        c(
          s,
          "isArray",
          Array.isArray,
          "isArray",
          "jQuery.isArray is deprecated; use Array.isArray"
        )),
      e("3.3.0") &&
        (c(
          s,
          "isNumeric",
          function (e) {
            var t = typeof e;
            return (
              ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
            );
          },
          "isNumeric",
          "jQuery.isNumeric() is deprecated"
        ),
        s.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            f["[object " + t + "]"] = t.toLowerCase();
          }
        ),
        c(
          s,
          "type",
          function (e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? f[Object.prototype.toString.call(e)] || "object"
              : typeof e;
          },
          "type",
          "jQuery.type is deprecated"
        ),
        c(
          s,
          "isFunction",
          function (e) {
            return "function" == typeof e;
          },
          "isFunction",
          "jQuery.isFunction() is deprecated"
        ),
        c(
          s,
          "isWindow",
          function (e) {
            return null != e && e === e.window;
          },
          "isWindow",
          "jQuery.isWindow() is deprecated"
        )),
      s.ajax &&
        ((l = s.ajax),
        (p = /(=)\?(?=&|$)|\?\?/),
        i(
          s,
          "ajax",
          function () {
            var e = l.apply(this, arguments);
            return (
              e.promise &&
                (c(
                  e,
                  "success",
                  e.done,
                  "jqXHR-methods",
                  "jQXHR.success is deprecated and removed"
                ),
                c(
                  e,
                  "error",
                  e.fail,
                  "jqXHR-methods",
                  "jQXHR.error is deprecated and removed"
                ),
                c(
                  e,
                  "complete",
                  e.always,
                  "jqXHR-methods",
                  "jQXHR.complete is deprecated and removed"
                )),
              e
            );
          },
          "jqXHR-methods"
        ),
        e("4.0.0") ||
          s.ajaxPrefilter("+json", function (e) {
            !1 !== e.jsonp &&
              (p.test(e.url) ||
                ("string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  p.test(e.data))) &&
              u(
                "jsonp-promotion",
                "JSON-to-JSONP auto-promotion is deprecated"
              );
          }));
    var j = s.fn.removeAttr,
      b = s.fn.toggleClass,
      w = /\S+/g;
    function x(e) {
      return e.replace(/-([a-z])/g, function (e, t) {
        return t.toUpperCase();
      });
    }
    i(
      s.fn,
      "removeAttr",
      function (e) {
        var r = this,
          n = !1;
        return (
          s.each(e.match(w), function (e, t) {
            s.expr.match.bool.test(t) &&
              r.each(function () {
                if (!1 !== s(this).prop(t)) return !(n = !0);
              }),
              n &&
                (u(
                  "removeAttr-bool",
                  "jQuery.fn.removeAttr no longer sets boolean properties: " + t
                ),
                r.prop(t, !1));
          }),
          j.apply(this, arguments)
        );
      },
      "removeAttr-bool"
    ),
      i(
        s.fn,
        "toggleClass",
        function (t) {
          return void 0 !== t && "boolean" != typeof t
            ? b.apply(this, arguments)
            : (u(
                "toggleClass-bool",
                "jQuery.fn.toggleClass( boolean ) is deprecated"
              ),
              this.each(function () {
                var e = (this.getAttribute && this.getAttribute("class")) || "";
                e && s.data(this, "__className__", e),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      (!e && !1 !== t && s.data(this, "__className__")) || ""
                    );
              }));
        },
        "toggleClass-bool"
      );
    var Q,
      A,
      R = !1,
      C = /^[a-z]/,
      N =
        /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap &&
      s.each(["height", "width", "reliableMarginRight"], function (e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r &&
          (s.cssHooks[t].get = function () {
            var e;
            return (R = !0), (e = r.apply(this, arguments)), (R = !1), e;
          });
      }),
      i(
        s,
        "swap",
        function (e, t, r, n) {
          var o,
            a,
            i = {};
          for (a in (R ||
            u("swap", "jQuery.swap() is undocumented and deprecated"),
          t))
            (i[a] = e.style[a]), (e.style[a] = t[a]);
          for (a in ((o = r.apply(e, n || [])), t)) e.style[a] = i[a];
          return o;
        },
        "swap"
      ),
      e("3.4.0") &&
        "undefined" != typeof Proxy &&
        (s.cssProps = new Proxy(s.cssProps || {}, {
          set: function () {
            return (
              u("cssProps", "jQuery.cssProps is deprecated"),
              Reflect.set.apply(this, arguments)
            );
          },
        })),
      e("4.0.0")
        ? ((A = {
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
            zoom: !0,
          }),
          "undefined" != typeof Proxy
            ? (s.cssNumber = new Proxy(A, {
                get: function () {
                  return (
                    u("css-number", "jQuery.cssNumber is deprecated"),
                    Reflect.get.apply(this, arguments)
                  );
                },
                set: function () {
                  return (
                    u("css-number", "jQuery.cssNumber is deprecated"),
                    Reflect.set.apply(this, arguments)
                  );
                },
              }))
            : (s.cssNumber = A))
        : (A = s.cssNumber),
      (Q = s.fn.css),
      i(
        s.fn,
        "css",
        function (e, t) {
          var r,
            n,
            o = this;
          return e && "object" == typeof e && !Array.isArray(e)
            ? (s.each(e, function (e, t) {
                s.fn.css.call(o, e, t);
              }),
              this)
            : ("number" == typeof t &&
                ((r = x(e)),
                (n = r),
                (C.test(n) && N.test(n[0].toUpperCase() + n.slice(1))) ||
                  A[r] ||
                  u(
                    "css-number",
                    'Number-typed values are deprecated for jQuery.fn.css( "' +
                      e +
                      '", value )'
                  )),
              Q.apply(this, arguments));
        },
        "css-number"
      );
    var S,
      P,
      k,
      H,
      E = s.data;
    i(
      s,
      "data",
      function (e, t, r) {
        var n, o, a;
        if (t && "object" == typeof t && 2 === arguments.length) {
          for (a in ((n = s.hasData(e) && E.call(this, e)), (o = {}), t))
            a !== x(a)
              ? (u(
                  "data-camelCase",
                  "jQuery.data() always sets/gets camelCased names: " + a
                ),
                (n[a] = t[a]))
              : (o[a] = t[a]);
          return E.call(this, e, o), t;
        }
        return t &&
          "string" == typeof t &&
          t !== x(t) &&
          (n = s.hasData(e) && E.call(this, e)) &&
          t in n
          ? (u(
              "data-camelCase",
              "jQuery.data() always sets/gets camelCased names: " + t
            ),
            2 < arguments.length && (n[t] = r),
            n[t])
          : E.apply(this, arguments);
      },
      "data-camelCase"
    ),
      s.fx &&
        ((k = s.Tween.prototype.run),
        (H = function (e) {
          return e;
        }),
        i(
          s.Tween.prototype,
          "run",
          function () {
            1 < s.easing[this.easing].length &&
              (u(
                "easing-one-arg",
                "'jQuery.easing." +
                  this.easing.toString() +
                  "' should use only one argument"
              ),
              (s.easing[this.easing] = H)),
              k.apply(this, arguments);
          },
          "easing-one-arg"
        ),
        (S = s.fx.interval),
        (P = "jQuery.fx.interval is deprecated"),
        n.requestAnimationFrame &&
          Object.defineProperty(s.fx, "interval", {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return (
                n.document.hidden || u("fx-interval", P),
                s.migrateIsPatchEnabled("fx-interval") && void 0 === S ? 13 : S
              );
            },
            set: function (e) {
              u("fx-interval", P), (S = e);
            },
          }));
    var M = s.fn.load,
      q = s.event.add,
      O = s.event.fix;
    (s.event.props = []),
      (s.event.fixHooks = {}),
      r(
        s.event.props,
        "concat",
        s.event.props.concat,
        "event-old-patch",
        "jQuery.event.props.concat() is deprecated and removed"
      ),
      i(
        s.event,
        "fix",
        function (e) {
          var t,
            r = e.type,
            n = this.fixHooks[r],
            o = s.event.props;
          if (o.length) {
            u(
              "event-old-patch",
              "jQuery.event.props are deprecated and removed: " + o.join()
            );
            while (o.length) s.event.addProp(o.pop());
          }
          if (
            n &&
            !n._migrated_ &&
            ((n._migrated_ = !0),
            u(
              "event-old-patch",
              "jQuery.event.fixHooks are deprecated and removed: " + r
            ),
            (o = n.props) && o.length)
          )
            while (o.length) s.event.addProp(o.pop());
          return (t = O.call(this, e)), n && n.filter ? n.filter(t, e) : t;
        },
        "event-old-patch"
      ),
      i(
        s.event,
        "add",
        function (e, t) {
          return (
            e === n &&
              "load" === t &&
              "complete" === n.document.readyState &&
              u(
                "load-after-event",
                "jQuery(window).on('load'...) called after load event occurred"
              ),
            q.apply(this, arguments)
          );
        },
        "load-after-event"
      ),
      s.each(["load", "unload", "error"], function (e, t) {
        i(
          s.fn,
          t,
          function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === t && "string" == typeof e[0]
              ? M.apply(this, e)
              : (u(
                  "shorthand-removed-v3",
                  "jQuery.fn." + t + "() is deprecated"
                ),
                e.splice(0, 0, t),
                arguments.length
                  ? this.on.apply(this, e)
                  : (this.triggerHandler.apply(this, e), this));
          },
          "shorthand-removed-v3"
        );
      }),
      s.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, r) {
          c(
            s.fn,
            r,
            function (e, t) {
              return 0 < arguments.length
                ? this.on(r, null, e, t)
                : this.trigger(r);
            },
            "shorthand-deprecated-v3",
            "jQuery.fn." + r + "() event shorthand is deprecated"
          );
        }
      ),
      s(function () {
        s(n.document).triggerHandler("ready");
      }),
      (s.event.special.ready = {
        setup: function () {
          this === n.document &&
            u("ready-event", "'ready' event is deprecated");
        },
      }),
      c(
        s.fn,
        "bind",
        function (e, t, r) {
          return this.on(e, null, t, r);
        },
        "pre-on-methods",
        "jQuery.fn.bind() is deprecated"
      ),
      c(
        s.fn,
        "unbind",
        function (e, t) {
          return this.off(e, null, t);
        },
        "pre-on-methods",
        "jQuery.fn.unbind() is deprecated"
      ),
      c(
        s.fn,
        "delegate",
        function (e, t, r, n) {
          return this.on(t, e, r, n);
        },
        "pre-on-methods",
        "jQuery.fn.delegate() is deprecated"
      ),
      c(
        s.fn,
        "undelegate",
        function (e, t, r) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", r);
        },
        "pre-on-methods",
        "jQuery.fn.undelegate() is deprecated"
      ),
      c(
        s.fn,
        "hover",
        function (e, t) {
          return this.on("mouseenter", e).on("mouseleave", t || e);
        },
        "pre-on-methods",
        "jQuery.fn.hover() is deprecated"
      );
    function T(e) {
      var t = n.document.implementation.createHTMLDocument("");
      return (t.body.innerHTML = e), t.body && t.body.innerHTML;
    }
    var F =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
    (s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
      s.migrateEnablePatches("self-closed-tags");
    }),
      i(
        s,
        "htmlPrefilter",
        function (e) {
          var t, r;
          return (
            (r = (t = e).replace(F, "<$1></$2>")) !== t &&
              T(t) !== T(r) &&
              u(
                "self-closed-tags",
                "HTML tags must be properly nested and closed: " + t
              ),
            e.replace(F, "<$1></$2>")
          );
        },
        "self-closed-tags"
      ),
      s.migrateDisablePatches("self-closed-tags");
    var D,
      W,
      _,
      I = s.fn.offset;
    return (
      i(
        s.fn,
        "offset",
        function () {
          var e = this[0];
          return !e || (e.nodeType && e.getBoundingClientRect)
            ? I.apply(this, arguments)
            : (u(
                "offset-valid-elem",
                "jQuery.fn.offset() requires a valid DOM element"
              ),
              arguments.length ? this : void 0);
        },
        "offset-valid-elem"
      ),
      s.ajax &&
        ((D = s.param),
        i(
          s,
          "param",
          function (e, t) {
            var r = s.ajaxSettings && s.ajaxSettings.traditional;
            return (
              void 0 === t &&
                r &&
                (u(
                  "param-ajax-traditional",
                  "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"
                ),
                (t = r)),
              D.call(this, e, t)
            );
          },
          "param-ajax-traditional"
        )),
      c(
        s.fn,
        "andSelf",
        s.fn.addBack,
        "andSelf",
        "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"
      ),
      s.Deferred &&
        ((W = s.Deferred),
        (_ = [
          [
            "resolve",
            "done",
            s.Callbacks("once memory"),
            s.Callbacks("once memory"),
            "resolved",
          ],
          [
            "reject",
            "fail",
            s.Callbacks("once memory"),
            s.Callbacks("once memory"),
            "rejected",
          ],
          ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")],
        ]),
        i(
          s,
          "Deferred",
          function (e) {
            var a = W(),
              i = a.promise();
            function t() {
              var o = arguments;
              return s
                .Deferred(function (n) {
                  s.each(_, function (e, t) {
                    var r = "function" == typeof o[e] && o[e];
                    a[t[1]](function () {
                      var e = r && r.apply(this, arguments);
                      e && "function" == typeof e.promise
                        ? e
                            .promise()
                            .done(n.resolve)
                            .fail(n.reject)
                            .progress(n.notify)
                        : n[t[0] + "With"](
                            this === i ? n.promise() : this,
                            r ? [e] : arguments
                          );
                    });
                  }),
                    (o = null);
                })
                .promise();
            }
            return (
              c(a, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"),
              c(i, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"),
              e && e.call(a, a),
              a
            );
          },
          "deferred-pipe"
        ),
        (s.Deferred.exceptionHook = W.exceptionHook)),
      s
    );
  });
/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

(String.prototype.className = function () {
  return ("string" != typeof this && !this instanceof String) ||
    "function" != typeof this.replace
    ? this
    : this.replace(".", "");
}),
  (String.prototype.varName = function () {
    return ("string" != typeof this && !this instanceof String) ||
      "function" != typeof this.replace
      ? this
      : this.replace("-", "_");
  }),
  (function () {
    const hash = new URL(window.location.href).hash;
    if (!hash || !hash.match("#(tribe|tec)")) return;
    let updatesDidOccurr = !0;
    const mutationObserver = new MutationObserver(function () {
      updatesDidOccurr = !0;
    });
    mutationObserver.observe(window.document, {
      attributes: !0,
      childList: !0,
      characterData: !0,
      subtree: !0,
    });
    let mutationCallback = function () {
      if (updatesDidOccurr)
        (updatesDidOccurr = !1), setTimeout(mutationCallback, 250);
      else {
        mutationObserver.takeRecords(), mutationObserver.disconnect();
        const scrollTo = document.getElementById(hash.substring(1));
        scrollTo && scrollTo.scrollIntoView();
      }
    };
    mutationCallback();
  })();
var tribe = tribe || {};
/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

(tribe.events = tribe.events || {}),
  (tribe.events.views = tribe.events.views || {}),
  (tribe.events.views.breakpoints = {}),
  (function ($, obj) {
    "use strict";
    var $document = $(document);
    (obj.selectors = {
      container: '[data-js="tribe-events-view"]',
      dataScript: '[data-js="tribe-events-view-data"]',
      breakpointClassPrefix: "tribe-common--breakpoint-",
    }),
      (obj.breakpoints = {}),
      (obj.setContainerClasses = function ($container, data) {
        Object.keys(data.breakpoints).forEach(function (breakpoint) {
          var className = obj.selectors.breakpointClassPrefix + breakpoint;
          (obj.breakpoints[breakpoint] = data.breakpoints[breakpoint]),
            $container.outerWidth() < data.breakpoints[breakpoint]
              ? $container.removeClass(className)
              : $container.addClass(className);
        });
      }),
      (obj.handleResize = function (event) {
        obj.setContainerClasses(event.data.container, event.data.data);
      }),
      (obj.unbindEvents = function ($container) {
        $container
          .off("resize.tribeEvents", obj.handleResize)
          .off("beforeAjaxSuccess.tribeEvents", obj.deinit);
      }),
      (obj.bindEvents = function ($container, data) {
        $container
          .on(
            "resize.tribeEvents",
            { container: $container, data: data },
            obj.handleResize
          )
          .on(
            "beforeAjaxSuccess.tribeEvents",
            { container: $container },
            obj.deinit
          );
      }),
      (obj.deinit = function (event, jqXHR, settings) {
        obj.unbindEvents(event.data.container);
      }),
      (obj.initTasks = function ($container, data) {
        $container instanceof jQuery || ($container = $($container)),
          obj.bindEvents($container, data),
          obj.setContainerClasses($container, data);
        $container.data("tribeEventsBreakpoints", { initialized: !0 });
      }),
      (obj.init = function (event, index, $container, data) {
        $container instanceof jQuery || ($container = $($container));
        var state = $container.data("tribeEventsBreakpoints");
        (state && state.initialized) || obj.initTasks($container, data);
      }),
      (obj.setup = function (container) {
        var $container = $(container);
        if ($container.is(obj.selectors.container)) {
          var $data = $container.find(obj.selectors.dataScript),
            data = {};
          $data.length && (data = JSON.parse($data.text().trim())),
            obj.initTasks($container, data);
        }
      }),
      (obj.ready = function () {
        $document.on(
          "afterSetup.tribeEvents",
          obj.selectors.container,
          obj.init
        );
      }),
      $(obj.ready);
  })(jQuery, tribe.events.views.breakpoints);
("use strict");
(function (b, d) {
  b._EPYT_ = b._EPYT_ || {
    ajaxurl: "/wp-admin/admin-ajax.php",
    security: "",
    gallery_scrolloffset: 100,
    eppathtoscripts: "/wp-content/plugins/youtube-embed-plus/scripts/",
    eppath: "/wp-content/plugins/youtube-embed-plus/",
    epresponsiveselector: ["iframe.__youtube_prefs_widget__"],
    epdovol: !0,
    evselector:
      'iframe.__youtube_prefs__[src], iframe[src*="youtube.com/embed/"], iframe[src*="youtube-nocookie.com/embed/"]',
    stopMobileBuffer: !0,
    ajax_compat: !1,
    usingdefault: !0,
    ytapi_load: "light",
    pause_others: !1,
    facade_mode: !1,
    not_live_on_channel: !1,
    maxres_facade: "eager",
  };
  b._EPYT_.touchmoved = !1;
  b._EPYT_.apiVideos = b._EPYT_.apiVideos || {};
  0 === b.location.toString().indexOf("https://") &&
    (b._EPYT_.ajaxurl = b._EPYT_.ajaxurl.replace("http://", "https://"));
  b._EPYT_.pageLoaded = !1;
  d(b).on("load._EPYT_", function () {
    b._EPYT_.pageLoaded = !0;
  });
  document.querySelectorAll ||
    (document.querySelectorAll = function (a) {
      var c = document,
        e = c.documentElement.firstChild,
        g = c.createElement("STYLE");
      e.appendChild(g);
      c.__qsaels = [];
      g.styleSheet.cssText = a + "{x:expression(document.__qsaels.push(this))}";
      b.scrollBy(0, 0);
      return c.__qsaels;
    });
  "undefined" === typeof b._EPADashboard_ &&
    (b._EPADashboard_ = {
      initStarted: !1,
      checkCount: 0,
      onPlayerReady: function (a) {
        try {
          if ("undefined" !== typeof _EPYT_.epdovol && _EPYT_.epdovol) {
            var c = parseInt(a.target.getIframe().getAttribute("data-vol"));
            isNaN(c) ||
              (0 === c
                ? a.target.mute()
                : (a.target.isMuted() && a.target.unMute(),
                  a.target.setVolume(c)));
          }
          var e = parseInt(
            a.target.getIframe().getAttribute("data-epautoplay")
          );
          isNaN(e) || 1 !== e || a.target.playVideo();
        } catch (h) {}
        try {
          var g = a.target.getIframe(),
            f = g.getAttribute("id");
          b._EPYT_.apiVideos[f] = a.target;
          b._EPYT_.not_live_on_channel &&
            0 < a.target.getVideoUrl().indexOf("live_stream") &&
            b._EPADashboard_.doLiveFallback(g);
        } catch (h) {
        } finally {
          d(a.target.getIframe()).css("opacity", 1);
        }
      },
      onPlayerStateChange: function (a) {
        var c = a.target.getIframe();
        b._EPYT_.pause_others &&
          a.data === b.YT.PlayerState.PLAYING &&
          b._EPADashboard_.pauseOthers(a.target);
        a.data === b.YT.PlayerState.PLAYING &&
          !0 !== a.target.ponce &&
          -1 === c.src.indexOf("autoplay=1") &&
          (a.target.ponce = !0);
        if (a.data === b.YT.PlayerState.ENDED && "1" == d(c).data("relstop"))
          if ("function" === typeof a.target.stopVideo) a.target.stopVideo();
          else {
            var e = d(c).clone(!0).off();
            e.attr(
              "src",
              b._EPADashboard_.cleanSrc(
                e.attr("src").replace("autoplay=1", "autoplay=0")
              )
            );
            d(c).replaceWith(e);
            b._EPADashboard_.setupevents(e.attr("id"));
            c = e.get(0);
          }
        e = d(c).closest(".epyt-gallery");
        e.length || (e = d("#" + d(c).data("epytgalleryid")));
        e.length &&
          "1" == e.find(".epyt-pagebutton").first().data("autonext") &&
          a.data === b.YT.PlayerState.ENDED &&
          ((a = e.find(".epyt-current-video")),
          a.length || (a = e.find(".epyt-gallery-thumb").first()),
          (a = a.find(" ~ .epyt-gallery-thumb").first()),
          a.length
            ? a.trigger("click")
            : e
                .find(
                  '.epyt-pagebutton.epyt-next[data-pagetoken!=""][data-pagetoken]'
                )
                .first()
                .trigger("click"));
      },
      isMobile: function () {
        return /Mobi|Android/i.test(navigator.userAgent);
      },
      base64DecodeUnicode: function (a) {
        a = a.replace(/\s/g, "");
        return decodeURIComponent(
          Array.prototype.map
            .call(atob(a), function (c) {
              return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
        );
      },
      findSwapBlock: function (a) {
        var c = d(a).closest(".wp-block-embed");
        c.length || (c = d(a).closest(".epyt-live-chat-wrapper"));
        c.length || (c = d(a).closest(".epyt-video-wrapper"));
        c.length || (c = d(a));
        return c;
      },
      doLiveFallback: function (a) {
        a = _EPADashboard_.findSwapBlock(a);
        if (a.length) {
          var c = d("#epyt-live-fallback");
          if (c.length) {
            var e = "";
            try {
              e = b._EPADashboard_.base64DecodeUnicode(c.get(0).innerHTML);
            } catch (f) {}
            if (e) {
              var g = a.parent();
              b._EPADashboard_.loadYTAPI();
              a.replaceWith(e);
              b._EPADashboard_.apiInit();
              b._EPADashboard_.pageReady();
              setTimeout(function () {
                "undefined" !== typeof d.fn.fitVidsEP && g.fitVidsEP();
              }, 1);
            }
          }
        }
      },
      videoEqual: function (a, c) {
        return a.getIframe &&
          c.getIframe &&
          a.getIframe().id === c.getIframe().id
          ? !0
          : !1;
      },
      pauseOthers: function (a) {
        if (a)
          for (var c in b._EPYT_.apiVideos) {
            var e = b._EPYT_.apiVideos[c];
            e &&
              "function" === typeof e.pauseVideo &&
              e != a &&
              !_EPADashboard_.videoEqual(e, a) &&
              "function" === typeof e.getPlayerState &&
              0 <=
                [YT.PlayerState.BUFFERING, b.YT.PlayerState.PLAYING].indexOf(
                  e.getPlayerState()
                ) &&
              e.pauseVideo();
          }
      },
      justid: function (a) {
        return /[\?&]v=([^&#]*)/.exec(a)[1];
      },
      setupevents: function (a) {
        if ("undefined" !== typeof b.YT && null !== b.YT && b.YT.loaded) {
          var c = document.getElementById(a);
          if (!c.epytsetupdone)
            return (
              b._EPADashboard_.log("Setting up YT API events: " + a),
              (c.epytsetupdone = !0),
              (c = {
                events: {
                  onReady: b._EPADashboard_.onPlayerReady,
                  onStateChange: b._EPADashboard_.onPlayerStateChange,
                },
                host:
                  0 < (c.src || "").indexOf("nocookie")
                    ? "https://www.youtube-nocookie.com"
                    : "https://www.youtube.com",
              }),
              new b.YT.Player(a, c)
            );
        }
      },
      apiInit: function () {
        if ("undefined" !== typeof b.YT) {
          b._EPADashboard_.initStarted = !0;
          for (
            var a = document.querySelectorAll(_EPYT_.evselector), c = 0;
            c < a.length;
            c++
          )
            a[c].hasAttribute("id") ||
              (a[c].id = "_dytid_" + Math.round(8999 * Math.random() + 1e3)),
              b._EPADashboard_.setupevents(a[c].id);
        }
      },
      log: function (a) {
        try {
        //   console.log(a);
        } catch (c) {}
      },
      doubleCheck: function () {
        b._EPADashboard_.checkInterval = setInterval(function () {
          b._EPADashboard_.checkCount++;
          5 <= b._EPADashboard_.checkCount || b._EPADashboard_.initStarted
            ? clearInterval(b._EPADashboard_.checkInterval)
            : (b._EPADashboard_.apiInit(),
              b._EPADashboard_.log("YT API init check"));
        }, 1e3);
      },
      selectText: function (a) {
        if (document.selection) {
          var c = document.body.createTextRange();
          c.moveToElementText(a);
          c.select();
        } else if (b.getSelection) {
          var e = b.getSelection();
          c = document.createRange();
          c.selectNode(a);
          e.removeAllRanges();
          e.addRange(c);
        }
      },
      setVidSrc: function (a, c) {
        if (a.is(".epyt-facade"))
          a.attr("data-facadesrc", b._EPADashboard_.cleanSrc(c)),
            a.trigger("click");
        else {
          c = b._EPADashboard_.cleanSrc(c);
          if (
            a.get(0).src &&
            a.get(0).contentWindow &&
            a.get(0).contentWindow.location
          )
            try {
              a.get(0).contentWindow.location.replace(c);
            } catch (e) {
              a.attr("src", c);
            }
          else a.attr("src", c);
          a.get(0).epytsetupdone = !1;
          b._EPADashboard_.setupevents(a.attr("id"));
        }
        a.css("opacity", "1");
      },
      cleanSrc: function (a) {
        return a.replace("enablejsapi=1?enablejsapi=1", "enablejsapi=1");
      },
      loadYTAPI: function () {
        if ("undefined" === typeof b.YT) {
          if (
            "never" !== b._EPYT_.ytapi_load &&
            ("always" === b._EPYT_.ytapi_load ||
              d(
                'iframe[src*="youtube.com/embed/"], iframe[data-src*="youtube.com/embed/"], .__youtube_prefs__'
              ).length)
          ) {
            var a = document.createElement("script");
            a.src = "https://www.youtube.com/iframe_api";
            a.type = "text/javascript";
            document.getElementsByTagName("head")[0].appendChild(a);
          }
        } else if (b.YT.loaded)
          if (b._EPYT_.pageLoaded)
            b._EPADashboard_.apiInit(),
              b._EPADashboard_.log("YT API available");
          else
            d(b).on("load._EPYT_", function () {
              b._EPADashboard_.apiInit();
              b._EPADashboard_.log("YT API available 2");
            });
      },
      resolveFacadeQuality: function (a, c) {
        a.epytFacadeCount =
          "undefined" === typeof a.epytFacadeCount ? 0 : a.epytFacadeCount + 1;
        if (c || 200 > a.naturalHeight)
          if ((c = d(a).attr("src")))
            d(a).attr("src", c.replace("maxresdefault", "hqdefault")),
              d(a).off("load.epyt");
        2 < a.epytFacadeCount && d(a).off("load.epyt");
      },
      maximizeFacadeQuality: function (a) {
        var c = d(a).attr("src");
        if (c && 0 > c.indexOf("maxresdefault")) {
          c = c.replace("hqdefault", "maxresdefault");
          var e = new Image();
          e.src = c;
          d(e)
            .on("load.epyt", function () {
              d(e).off("load.epyt");
              200 < e.naturalHeight &&
                (d(a).off("load.epyt"), d(a).attr("src", e.src));
            })
            .on("error", function () {
              d(e).off("load.epyt");
            })
            .each(function () {
              e.complete && d(e).trigger("load");
            });
        }
      },
      pageReady: function () {
        b._EPYT_.not_live_on_channel &&
          "never" !== b._EPYT_.ytapi_load &&
          d(".epyt-live-channel").each(function () {
            var a = d(this);
            a.data("eypt-fallback") ||
              (a.data("eypt-fallback", !0),
              a.css("opacity", 0),
              setTimeout(function () {
                a.css("opacity", 1);
              }, 4e3));
          });
        d(".epyt-gallery").each(function () {
          var a = d(this);
          if (
            !a.data("epytevents") ||
            !d("body").hasClass("block-editor-page")
          ) {
            a.data("epytevents", "1");
            var c = d(this)
                .find("iframe, div.__youtube_prefs_gdpr__, div.epyt-facade")
                .first(),
              e = c.data("src") || c.data("facadesrc") || c.attr("src");
            e || (e = c.data("ep-src"));
            var g = d(this)
              .find(".epyt-gallery-list .epyt-gallery-thumb")
              .first()
              .data("videoid");
            "undefined" !== typeof e
              ? ((e = e.replace(g, "GALLERYVIDEOID")),
                a.data("ep-gallerysrc", e))
              : c.hasClass("__youtube_prefs_gdpr__") &&
                a.data("ep-gallerysrc", "");
            a.on(
              "click touchend",
              ".epyt-gallery-list .epyt-gallery-thumb",
              function (f) {
                c = a
                  .find("iframe, div.__youtube_prefs_gdpr__, div.epyt-facade")
                  .first();
                if (
                  !b._EPYT_.touchmoved &&
                  !d(this).hasClass("epyt-current-video")
                ) {
                  a.find(".epyt-gallery-list .epyt-gallery-thumb").removeClass(
                    "epyt-current-video"
                  );
                  d(this).addClass("epyt-current-video");
                  f = d(this).data("videoid");
                  a.data("currvid", f);
                  var h = a.data("ep-gallerysrc").replace("GALLERYVIDEOID", f);
                  f = a.find(".epyt-pagebutton").first().data("thumbplay");
                  "0" !== f &&
                    0 !== f &&
                    ((h =
                      0 < h.indexOf("autoplay")
                        ? h.replace("autoplay=0", "autoplay=1")
                        : h + "&autoplay=1"),
                    c.addClass("epyt-thumbplay"));
                  f = Math.max(d("body").scrollTop(), d("html").scrollTop());
                  var k =
                    c.offset().top - parseInt(_EPYT_.gallery_scrolloffset);
                  f > k
                    ? d("html, body").animate(
                        { scrollTop: k },
                        500,
                        function () {
                          b._EPADashboard_.setVidSrc(c, h);
                        }
                      )
                    : b._EPADashboard_.setVidSrc(c, h);
                }
              }
            )
              .on("touchmove", function (f) {
                b._EPYT_.touchmoved = !0;
              })
              .on("touchstart", function () {
                b._EPYT_.touchmoved = !1;
              })
              .on(
                "keydown",
                ".epyt-gallery-list .epyt-gallery-thumb, .epyt-pagebutton",
                function (f) {
                  var h = f.which;
                  if (13 === h || 32 === h)
                    f.preventDefault(), d(this).trigger("click");
                }
              );
            a.on(
              "mouseenter",
              ".epyt-gallery-list .epyt-gallery-thumb",
              function () {
                d(this).addClass("hover");
              }
            );
            a.on(
              "mouseleave",
              ".epyt-gallery-list .epyt-gallery-thumb",
              function () {
                d(this).removeClass("hover");
              }
            );
            a.on("click touchend", ".epyt-pagebutton", function (f) {
              if (
                !b._EPYT_.touchmoved &&
                !a.find(".epyt-gallery-list").hasClass("epyt-loading")
              ) {
                a.find(".epyt-gallery-list").addClass("epyt-loading");
                var h = "undefined" !== typeof f.originalEvent;
                f = {
                  action: "my_embedplus_gallery_page",
                  security: _EPYT_.security,
                  options: {
                    playlistId: d(this).data("playlistid"),
                    pageToken: d(this).data("pagetoken"),
                    pageSize: d(this).data("pagesize"),
                    columns: d(this).data("epcolumns"),
                    showTitle: d(this).data("showtitle"),
                    showPaging: d(this).data("showpaging"),
                    autonext: d(this).data("autonext"),
                    thumbplay: d(this).data("thumbplay"),
                  },
                };
                var k = d(this).hasClass("epyt-next"),
                  n = parseInt(a.data("currpage") + "");
                a.data("currpage", n + (k ? 1 : -1));
                d.post(_EPYT_.ajaxurl, f, function (l) {
                  a.find(".epyt-gallery-list").html(l);
                  a.find(".epyt-current").each(function () {
                    d(this).text(a.data("currpage"));
                  });
                  a.find(
                    '.epyt-gallery-thumb[data-videoid="' +
                      a.data("currvid") +
                      '"]'
                  ).addClass("epyt-current-video");
                  "1" != a.find(".epyt-pagebutton").first().data("autonext") ||
                    h ||
                    a.find(".epyt-gallery-thumb").first().trigger("click");
                })
                  .fail(function () {
                    alert("Sorry, there was an error loading the next page.");
                  })
                  .always(function () {
                    a.find(".epyt-gallery-list").removeClass("epyt-loading");
                    if (
                      "1" != a.find(".epyt-pagebutton").first().data("autonext")
                    ) {
                      var l = Math.max(
                          d("body").scrollTop(),
                          d("html").scrollTop()
                        ),
                        m =
                          a.find(".epyt-gallery-list").offset().top -
                          parseInt(_EPYT_.gallery_scrolloffset);
                      l > m && d("html, body").animate({ scrollTop: m }, 500);
                    }
                  });
              }
            })
              .on("touchmove", function (f) {
                b._EPYT_.touchmoved = !0;
              })
              .on("touchstart", function () {
                b._EPYT_.touchmoved = !1;
              });
          }
        });
        d(".__youtube_prefs_gdpr__.epyt-is-override").each(function () {
          d(this)
            .parent(".wp-block-embed__wrapper")
            .addClass("epyt-is-override__wrapper");
        });
        d("button.__youtube_prefs_gdpr__").on("click", function (a) {
          a.preventDefault();
          d.cookie &&
            (d.cookie("ytprefs_gdpr_consent", "1", { expires: 30, path: "/" }),
            b.top.location.reload());
        });
        "eager" === b._EPYT_.maxres_facade
          ? d("img.epyt-facade-poster")
              .on("load.epyt", function () {
                b._EPADashboard_.resolveFacadeQuality(this, !1);
              })
              .on("error", function () {
                b._EPADashboard_.resolveFacadeQuality(this, !0);
              })
              .each(function () {
                this.complete && d(this).trigger("load");
              })
          : "soft" === b._EPYT_.maxres_facade &&
            d("img.epyt-facade-poster")
              .on("load.epyt", function () {
                b._EPADashboard_.maximizeFacadeQuality(this);
              })
              .each(function () {
                this.complete && d(this).trigger("load");
              });
        d(".epyt-facade-play").each(function () {
          d(this).find("svg").length ||
            d(this).append(
              '<svg data-no-lazy="1" height="100%" version="1.1" viewBox="0 0 68 48" width="100%"><path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path></svg>'
            );
        });
        d(".epyt-facade-poster[data-facadeoembed]").each(function () {
          var a = d(this);
          if (!a.data("facadeoembedcomplete")) {
            a.data("facadeoembedcomplete", "1");
            var c = "https://www.youtube.com/" + a.data("facadeoembed");
            d.get(
              "https://youtube.com/oembed",
              { url: c, format: "json" },
              function (e) {
                e =
                  "eager" === b._EPYT_.maxres_facade
                    ? e.thumbnail_url.replace("hqdefault", "maxresdefault")
                    : e.thumbnail_url;
                a.attr("src", e);
              },
              "json"
            )
              .fail(function () {})
              .always(function () {});
          }
        });
        d(document).on("click", ".epyt-facade", function (a) {
          a = d(this);
          var c = a.attr("data-facadesrc");
          c = b._EPADashboard_.cleanSrc(c);
          for (
            var e = document.createElement("iframe"), g = 0;
            g < this.attributes.length;
            g++
          ) {
            var f = this.attributes[g];
            (0 <=
              ["allow", "class", "height", "id", "width"].indexOf(
                f.name.toLowerCase()
              ) ||
              0 == f.name.toLowerCase().indexOf("data-")) &&
              d(e).attr(f.name, f.value);
          }
          d(e).removeClass("epyt-facade");
          d(e)
            .attr("allowfullscreen", "")
            .attr("title", a.find("img").attr("alt"))
            .attr(
              "allow",
              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            );
          b._EPADashboard_.loadYTAPI();
          a.replaceWith(e);
          b._EPADashboard_.setVidSrc(d(e), c);
          setTimeout(function () {
            "undefined" !== typeof d.fn.fitVidsEP &&
              d(d(e).parent()).fitVidsEP();
          }, 1);
        });
      },
    });
  b.onYouTubeIframeAPIReady =
    "undefined" !== typeof b.onYouTubeIframeAPIReady
      ? b.onYouTubeIframeAPIReady
      : function () {
          if (b._EPYT_.pageLoaded)
            b._EPADashboard_.apiInit(), b._EPADashboard_.log("YT API ready");
          else
            d(b).on("load._EPYT_", function () {
              b._EPADashboard_.apiInit();
              b._EPADashboard_.log("YT API ready 2");
            });
        };
  (!b._EPYT_.facade_mode ||
    (b._EPYT_.not_live_on_channel &&
      d(
        'iframe[src*="youtube.com/embed/live_stream"], iframe[data-src*="youtube.com/embed/live_stream"]'
      ).length)) &&
    b._EPADashboard_.loadYTAPI();
  if (b._EPYT_.pageLoaded) b._EPADashboard_.doubleCheck();
  else
    d(b).on("load._EPYT_", function () {
      b._EPADashboard_.doubleCheck();
    });
  d(document).ready(function () {
    b._EPADashboard_.pageReady();
    (!b._EPYT_.facade_mode ||
      (b._EPYT_.not_live_on_channel &&
        d(
          'iframe[src*="youtube.com/embed/live_stream"], iframe[data-src*="youtube.com/embed/live_stream"]'
        ).length)) &&
      b._EPADashboard_.loadYTAPI();
    if (b._EPYT_.ajax_compat)
      d(b).on("load._EPYT_", function () {
        d(document).ajaxSuccess(function (a, c, e) {
          c &&
            c.responseText &&
            (-1 !== c.responseText.indexOf("<iframe ") ||
              -1 !== c.responseText.indexOf("enablejsapi")) &&
            (b._EPADashboard_.loadYTAPI(),
            b._EPADashboard_.apiInit(),
            b._EPADashboard_.log("YT API AJAX"),
            b._EPADashboard_.pageReady());
        });
      });
  });
})(window, jQuery);
(function (body) {
  "use strict";
  body.className = body.className.replace(/\btribe-no-js\b/, "tribe-js");
})(document.body);
var astraGetParents = function (e, t) {
    Element.prototype.matches ||
      (Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (e) {
          for (
            var t = (this.document || this.ownerDocument).querySelectorAll(e),
              a = t.length;
            0 <= --a && t.item(a) !== this;

          );
          return -1 < a;
        });
    for (var a = []; e && e !== document; e = e.parentNode)
      (!t || e.matches(t)) && a.push(e);
    return a;
  },
  getParents = function (e, t) {
    console.warn(
      "getParents() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraGetParents() instead."
    ),
      astraGetParents(e, t);
  },
  astraToggleClass = function (e, t) {
    e.classList.contains(t) ? e.classList.remove(t) : e.classList.add(t);
  },
  toggleClass = function (e, t) {
    console.warn(
      "toggleClass() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraToggleClass() instead."
    ),
      astraToggleClass(e, t);
  },
  astraTriggerEvent =
    (!(function () {
      function e(e, t) {
        t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
        var a = document.createEvent("CustomEvent");
        return a.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), a;
      }
      "function" != typeof window.CustomEvent &&
        ((e.prototype = window.Event.prototype), (window.CustomEvent = e));
    })(),
    function (e, t) {
      var a = new CustomEvent(
        t,
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}
      );
      e.dispatchEvent(a);
    });
(astraSmoothScroll = function (e, t) {
  e.preventDefault(), window.scrollTo({ top: t, left: 0, behavior: "smooth" });
}),
  (astScrollToTopHandler = function (e, t) {
    var a = getComputedStyle(t).content,
      n = t.dataset.onDevices,
      a = a.replace(/[^0-9]/g, "");
    "both" == n || ("desktop" == n && "769" == a) || ("mobile" == n && "" == a)
      ? ((n = window.pageYOffset || document.body.scrollTop),
        e && e.length
          ? n > e.offsetHeight + 100
            ? (t.style.display = "block")
            : (t.style.display = "none")
          : 300 < window.pageYOffset
          ? (t.style.display = "block")
          : (t.style.display = "none"))
      : (t.style.display = "none");
  }),
  (function () {
    var r = document.querySelectorAll("#masthead .main-header-menu-toggle"),
      c = document.getElementById("masthead"),
      i = {},
      d = "",
      u = document.body,
      m = "";
    function e(e) {
      d = e.detail.type;
      var t = document.querySelectorAll(".menu-toggle");
      if (
        ("dropdown" === d &&
          (document
            .getElementById("ast-mobile-popup")
            .classList.remove("active", "show"),
          g("updateHeader")),
        "off-canvas" === d)
      )
        for (var a = 0; a < t.length; a++)
          void 0 !== t[a] && t[a].classList.contains("toggled") && t[a].click();
      n(d);
    }
    function g(e) {
      m = c.querySelector("#ast-mobile-header");
      if (null == m || "dropdown" !== m.dataset.type || "updateHeader" === e) {
        (void 0 !== e && "updateHeader" !== e
          ? e.closest(".ast-mobile-popup-inner")
          : document.querySelector("#ast-mobile-popup")
        )
          .querySelectorAll(".menu-item-has-children")
          .forEach((e) => {
            e.classList.remove("ast-submenu-expanded"),
              Array.from(e.querySelectorAll(".sub-menu")).forEach((e) => {
                e.hasAttribute("data-initial-display") ||
                  e.setAttribute(
                    "data-initial-display",
                    window.getComputedStyle(e).display
                  ),
                  "block" === e.getAttribute("data-initial-display")
                    ? (e.style.display = "block")
                    : (e.style.display = "none");
              });
          });
        var t = document.querySelectorAll(".menu-toggle");
        document.body.classList.remove(
          "ast-main-header-nav-open",
          "ast-popup-nav-open"
        ),
          document.documentElement.classList.remove("ast-off-canvas-active");
        for (var a = 0; a < t.length; a++)
          t[a].classList.remove("toggled"), (t[a].style.display = "flex");
      }
    }
    function n(e) {
      var t = document.querySelectorAll("#ast-mobile-header .menu-toggle"),
        a = document.querySelectorAll("#ast-desktop-header .menu-toggle");
      if (void 0 === e && null !== c)
        if ((m = c.querySelector("#ast-mobile-header"))) e = m.dataset.type;
        else {
          var n = c.querySelector("#ast-desktop-header");
          if (!n) return;
          e = n.dataset.toggleType;
        }
      if ("off-canvas" === e) {
        var n = document.getElementById("menu-toggle-close"),
          s = document.querySelector(".ast-mobile-popup-inner");
        if (null == s) return;
        popupLinks = s.getElementsByTagName("a");
        for (var o = 0; o < t.length; o++)
          t[o].removeEventListener("click", astraNavMenuToggle, !1),
            t[o].addEventListener("click", popupTriggerClick, !1),
            (t[o].trigger_type = "mobile");
        for (o = 0; o < a.length; o++)
          a[o].removeEventListener("click", astraNavMenuToggle, !1),
            a[o].addEventListener("click", popupTriggerClick, !1),
            (a[o].trigger_type = "desktop");
        n.addEventListener("click", function (e) {
          document
            .getElementById("ast-mobile-popup")
            .classList.remove("active", "show"),
            g(this);
        }),
          document.addEventListener("keyup", function (e) {
            27 === e.keyCode &&
              (e.preventDefault(),
              document
                .getElementById("ast-mobile-popup")
                .classList.remove("active", "show"),
              g());
          }),
          document.addEventListener("click", function (e) {
            e.target ===
              document.querySelector(
                ".ast-mobile-popup-drawer.active .ast-mobile-popup-overlay"
              ) &&
              (document
                .getElementById("ast-mobile-popup")
                .classList.remove("active", "show"),
              g());
          });
        for (let e = 0, t = popupLinks.length; e < t; e++)
          null !== popupLinks[e].getAttribute("href") &&
            (popupLinks[e].getAttribute("href").startsWith("#") ||
              -1 !== popupLinks[e].getAttribute("href").search("#")) &&
            (!popupLinks[e].parentElement.classList.contains(
              "menu-item-has-children"
            ) ||
              (popupLinks[e].parentElement.classList.contains(
                "menu-item-has-children"
              ) &&
                document
                  .querySelector("header.site-header")
                  .classList.contains("ast-builder-menu-toggle-icon"))) &&
            (popupLinks[e].addEventListener("click", p, !0),
            (popupLinks[e].headerType = "off-canvas"));
        AstraToggleSetup();
      } else if ("dropdown" === e) {
        var r = document.querySelectorAll(".ast-mobile-header-content") || !1,
          s = document.querySelector(".ast-desktop-header-content") || !1;
        if (0 < r.length)
          for (let e = 0; e < r.length; e++) {
            var l = r[e].getElementsByTagName("a");
            for (link = 0, len = l.length; link < len; link++)
              null !== l[link].getAttribute("href") &&
                (l[link].getAttribute("href").startsWith("#") ||
                  -1 !== l[link].getAttribute("href").search("#")) &&
                (!l[link].parentElement.classList.contains(
                  "menu-item-has-children"
                ) ||
                  (l[link].parentElement.classList.contains(
                    "menu-item-has-children"
                  ) &&
                    document
                      .querySelector("header.site-header")
                      .classList.contains("ast-builder-menu-toggle-icon"))) &&
                (l[link].addEventListener("click", p, !0),
                (l[link].headerType = "dropdown"));
          }
        if (s) {
          var i = s.getElementsByTagName("a");
          for (link = 0, len = i.length; link < len; link++)
            i[link].addEventListener("click", p, !0),
              (i[link].headerType = "dropdown");
        }
        for (o = 0; o < t.length; o++)
          t[o].removeEventListener("click", popupTriggerClick, !1),
            t[o].addEventListener("click", astraNavMenuToggle, !1),
            (t[o].trigger_type = "mobile");
        for (o = 0; o < a.length; o++)
          a[o].removeEventListener("click", popupTriggerClick, !1),
            a[o].addEventListener("click", astraNavMenuToggle, !1),
            (a[o].trigger_type = "desktop");
        AstraToggleSetup();
      }
      v();
    }
    function p(e) {
      switch (e.currentTarget.headerType) {
        case "dropdown":
          for (
            var t = document.querySelectorAll(".menu-toggle.toggled"), a = 0;
            a < t.length;
            a++
          )
            t[a].click();
          break;
        case "off-canvas":
          document.getElementById("menu-toggle-close").click();
      }
    }
    "" !== (m = null != c ? c.querySelector("#ast-mobile-header") : m) &&
      null !== m &&
      (d = m.dataset.type),
      document.addEventListener("astMobileHeaderTypeChange", e, !1),
      (popupTriggerClick = function (e) {
        var e = e.currentTarget.trigger_type,
          t = document.getElementById("ast-mobile-popup"),
          a = document.getElementById("menu-toggle-close");
        a && a.focus(),
          u.classList.contains("ast-popup-nav-open") ||
            u.classList.add("ast-popup-nav-open"),
          u.classList.contains("ast-main-header-nav-open") ||
            "mobile" === e ||
            u.classList.add("ast-main-header-nav-open"),
          document.documentElement.classList.contains(
            "ast-off-canvas-active"
          ) || document.documentElement.classList.add("ast-off-canvas-active"),
          "desktop" === e &&
            ((t.querySelector(".ast-mobile-popup-content").style.display =
              "none"),
            (t.querySelector(".ast-desktop-popup-content").style.display =
              "block")),
          "mobile" === e &&
            ((t.querySelector(".ast-desktop-popup-content").style.display =
              "none"),
            (t.querySelector(".ast-mobile-popup-content").style.display =
              "block")),
          (this.style.display = "none"),
          t.classList.add("active", "show");
      }),
      window.addEventListener("load", function () {
        n();
      }),
      document.addEventListener("astLayoutWidthChanged", function () {
        n();
      }),
      document.addEventListener("astPartialContentRendered", function () {
        (r = document.querySelectorAll(".main-header-menu-toggle")),
          u.classList.remove("ast-main-header-nav-open"),
          document.addEventListener("astMobileHeaderTypeChange", e, !1),
          n(),
          v();
      });
    var s =
      null !== navigator.userAgent.match(/Android/i) &&
      "Android" === navigator.userAgent.match(/Android/i)[0]
        ? window.visualViewport.width
        : window.innerWidth;
    window.addEventListener("resize", function () {
      var e, t, a, n;
      "INPUT" !== document.activeElement.tagName &&
        ((e = document.getElementById("menu-toggle-close")),
        (t = document.querySelector(".menu-toggle.toggled")),
        (a = document.querySelector(
          "#masthead > #ast-desktop-header .ast-desktop-header-content"
        )),
        (n = document.querySelector(".elementor-editor-active")),
        a && (a.style.display = "none"),
        (null !== navigator.userAgent.match(/Android/i) &&
        "Android" === navigator.userAgent.match(/Android/i)[0]
          ? window.visualViewport.width
          : window.innerWidth) !== s &&
          (t && null === n && t.click(),
          document.body.classList.remove(
            "ast-main-header-nav-open",
            "ast-popup-nav-open"
          ),
          e) &&
          null == n &&
          e.click(),
        h(),
        AstraToggleSetup());
    }),
      document.addEventListener("DOMContentLoaded", function () {
        if (
          (AstraToggleSetup(),
          null !==
            (e = u.classList.contains("ast-header-break-point")
              ? document.getElementById("ast-mobile-header")
              : document.getElementById("ast-desktop-header")))
        ) {
          var e,
            t = e.querySelector(".navigation-accessibility");
          if (t && e) {
            var a = e.getElementsByTagName("button")[0];
            if (void 0 === a) {
              if (
                !0 ===
                (a = e.getElementsByTagName("a")[0]).classList.contains(
                  "astra-search-icon"
                )
              )
                return;
              if (void 0 === a) return;
            }
            var n = t.getElementsByTagName("ul")[0];
            if (void 0 === n) a.style.display = "none";
            else {
              if (
                (-1 === n.className.indexOf("nav-menu") &&
                  (n.className += " nav-menu"),
                document.addEventListener("DOMContentLoaded", function () {
                  var e;
                  "off-canvas" === d &&
                    (e = document.getElementById("menu-toggle-close")) &&
                    (e.onclick = function () {
                      -1 !== t.className.indexOf("toggled")
                        ? ((t.className = t.className.replace(" toggled", "")),
                          a.setAttribute("aria-expanded", "false"),
                          n.setAttribute("aria-expanded", "false"))
                        : ((t.className += " toggled"),
                          a.setAttribute("aria-expanded", "true"),
                          n.setAttribute("aria-expanded", "true"));
                    });
                }),
                (a.onclick = function () {
                  -1 !== t.className.indexOf("toggled")
                    ? ((t.className = t.className.replace(" toggled", "")),
                      a.setAttribute("aria-expanded", "false"),
                      n.setAttribute("aria-expanded", "false"))
                    : ((t.className += " toggled"),
                      a.setAttribute("aria-expanded", "true"),
                      n.setAttribute("aria-expanded", "true"));
                }),
                !astra.is_header_footer_builder_active)
              ) {
                for (
                  var s = n.getElementsByTagName("a"),
                    o = n.getElementsByTagName("ul"),
                    r = 0,
                    l = o.length;
                  r < l;
                  r++
                )
                  o[r].parentNode.setAttribute("aria-haspopup", "true");
                for (r = 0, l = s.length; r < l; r++)
                  s[r].addEventListener("focus", E, !0),
                    s[r].addEventListener("blur", E, !0),
                    s[r].addEventListener("click", L, !0);
              }
              astra.is_header_footer_builder_active &&
                !(function () {
                  const t = document.querySelectorAll(
                      "nav.site-navigation .menu-item-has-children > a .ast-header-navigation-arrow"
                    ),
                    a = document.querySelectorAll(
                      "nav.site-navigation .sub-menu"
                    ),
                    n = document.querySelectorAll(
                      "nav.site-navigation .menu-item-has-children"
                    ),
                    s = document.querySelectorAll(
                      ".astra-full-megamenu-wrapper"
                    );
                  t &&
                    (t.forEach((e) => {
                      e.addEventListener("keydown", function (a) {
                        "Enter" === a.key &&
                          (a.target
                            .closest("li")
                            .querySelector(".sub-menu")
                            .classList.contains("astra-megamenu")
                            ? setTimeout(() => {
                                var e = a.target
                                    .closest("li")
                                    .querySelector(".sub-menu"),
                                  t = a.target
                                    .closest("li")
                                    .querySelector(
                                      ".astra-full-megamenu-wrapper"
                                    );
                                e && e.classList.toggle("astra-megamenu-focus"),
                                  t &&
                                    t.classList.toggle(
                                      "astra-megamenu-wrapper-focus"
                                    ),
                                  a.target
                                    .closest("li")
                                    .classList.toggle("ast-menu-hover"),
                                  "false" !==
                                    a.target.getAttribute("aria-expanded") &&
                                  a.target.getAttribute("aria-expanded")
                                    ? a.target.setAttribute(
                                        "aria-expanded",
                                        "false"
                                      )
                                    : a.target.setAttribute(
                                        "aria-expanded",
                                        "true"
                                      );
                              }, 10)
                            : setTimeout(() => {
                                a.target
                                  .closest("li")
                                  .querySelector(".sub-menu")
                                  .classList.toggle("toggled-on"),
                                  a.target
                                    .closest("li")
                                    .classList.toggle("ast-menu-hover"),
                                  "false" !==
                                    a.target.getAttribute("aria-expanded") &&
                                  a.target.getAttribute("aria-expanded")
                                    ? a.target.setAttribute(
                                        "aria-expanded",
                                        "false"
                                      )
                                    : a.target.setAttribute(
                                        "aria-expanded",
                                        "true"
                                      );
                              }, 10));
                      });
                    }),
                    (a || n) &&
                      document.addEventListener(
                        "click",
                        function (e) {
                          b(a, t, n, s);
                        },
                        !1
                      ),
                    a || n) &&
                    document.addEventListener(
                      "keydown",
                      function (e) {
                        "Escape" === e.key && b(a, t, n, s);
                      },
                      !1
                    );
                  var e = document.querySelectorAll(
                    "nav.site-navigation .ast-nav-menu > .menu-item-has-children > a .ast-header-navigation-arrow"
                  );
                  e &&
                    e.forEach((e) => {
                      e.addEventListener(
                        "keydown",
                        function (e) {
                          e.target
                            .closest("li")
                            .classList.contains("ast-menu-hover") ||
                            "Enter" !== e.key ||
                            b(a, t, n, s);
                        },
                        !1
                      );
                    });
                })();
            }
          }
        }
      });
    for (
      var t,
        a,
        o,
        l,
        h = function () {
          var e = u.style.overflow,
            t =
              ((u.style.overflow = "hidden"),
              document.documentElement.clientWidth);
          if (((u.style.overflow = e), astra.break_point < t || 0 === t)) {
            if (0 < r.length)
              for (var a = 0; a < r.length; a++)
                null !== r[a] && r[a].classList.remove("toggled");
            u.classList.remove("ast-header-break-point"),
              u.classList.add("ast-desktop"),
              astraTriggerEvent(u, "astra-header-responsive-enabled");
          } else
            u.classList.add("ast-header-break-point"),
              u.classList.remove("ast-desktop"),
              astraTriggerEvent(u, "astra-header-responsive-disabled");
        },
        v = function () {
          var e,
            t = document.querySelectorAll(".ast-account-action-login");
          if (t.length) {
            const a = document.querySelector("#ast-hb-account-login-wrap");
            a &&
              ((e = document.querySelector("#ast-hb-login-close")),
              t.forEach(function (e) {
                e.addEventListener("click", function (e) {
                  e.preventDefault(), a.classList.add("show");
                });
              }),
              e) &&
              e.addEventListener("click", function (e) {
                e.preventDefault(), a.classList.remove("show");
              });
          }
        },
        f =
          (h(),
          (AstraToggleSubMenu = function (e) {
            e.preventDefault(),
              "false" !== e.target.getAttribute("aria-expanded") &&
              e.target.getAttribute("aria-expanded")
                ? e.target.setAttribute("aria-expanded", "false")
                : e.target.setAttribute("aria-expanded", "true");
            for (
              var t = this.parentNode,
                a =
                  (t.classList.contains("ast-submenu-expanded") &&
                    document
                      .querySelector("header.site-header")
                      .classList.contains("ast-builder-menu-toggle-link") &&
                    (this.classList.contains("ast-menu-toggle") ||
                      ("" !== (e = t.querySelector("a").getAttribute("href")) &&
                        "#" !== e &&
                        (window.location = e))),
                  t.querySelectorAll(".menu-item-has-children")),
                n = 0;
              n < a.length;
              n++
            ) {
              a[n].classList.remove("ast-submenu-expanded");
              var s = a[n].querySelector(".sub-menu, .children");
              null !== s && (s.style.display = "none");
            }
            for (
              var o = t.parentNode.querySelectorAll(".menu-item-has-children"),
                n = 0;
              n < o.length;
              n++
            )
              if (o[n] != t) {
                o[n].classList.remove("ast-submenu-expanded");
                for (
                  var r = o[n].querySelectorAll(".sub-menu"), l = 0;
                  l < r.length;
                  l++
                )
                  r[l].style.display = "none";
              }
            t.classList.contains("menu-item-has-children") &&
              (astraToggleClass(t, "ast-submenu-expanded"),
              t.classList.contains("ast-submenu-expanded")
                ? (t.querySelector(".sub-menu").style.display = "block")
                : (t.querySelector(".sub-menu").style.display = "none"));
          }),
          (AstraToggleSetup = function () {
            if (
              "undefined" != typeof astraAddon &&
              "function" == typeof astraToggleSetupPro
            )
              astraToggleSetupPro(d, u, i);
            else {
              var e,
                t,
                a,
                n = !1;
              if (
                0 <
                  (e =
                    "off-canvas" === d || "full-width" === d
                      ? ((t = document.querySelectorAll(
                          "#ast-mobile-popup, #ast-mobile-header"
                        )),
                        (a = document.querySelectorAll(
                          "#ast-mobile-header .main-header-menu-toggle"
                        )).length)
                      : ((t = document.querySelectorAll("#ast-mobile-header")),
                        (n = !(
                          0 <
                          (e = (a = document.querySelectorAll(
                            "#ast-mobile-header .main-header-menu-toggle"
                          )).length)
                        ))
                          ? 1
                          : e)) ||
                n
              )
                for (var s = 0; s < e; s++)
                  if (
                    (n ||
                      (a[s].setAttribute("data-index", s), i[s]) ||
                      ((i[s] = a[s]),
                      a[s].addEventListener("click", astraNavMenuToggle, !1)),
                    void 0 !== t[s])
                  )
                    for (var o, r = 0; r < t.length; r++)
                      if (
                        0 <
                        (o = document
                          .querySelector("header.site-header")
                          .classList.contains("ast-builder-menu-toggle-link")
                          ? t[r].querySelectorAll(
                              "ul.main-header-menu .menu-item-has-children > .menu-link, ul.main-header-menu .ast-menu-toggle"
                            )
                          : t[r].querySelectorAll(
                              "ul.main-header-menu .ast-menu-toggle"
                            )).length
                      )
                        for (var l = 0; l < o.length; l++)
                          o[l].addEventListener(
                            "click",
                            AstraToggleSubMenu,
                            !1
                          );
            }
          }),
          (astraNavMenuToggle = function (e) {
            if ("undefined" != typeof astraAddon)
              astraNavMenuTogglePro(e, u, d, this);
            else {
              e.preventDefault();
              var e = document.querySelectorAll(
                  "#masthead > #ast-mobile-header .main-header-bar-navigation"
                ),
                t =
                  ((r = document.querySelectorAll(
                    "#masthead > #ast-mobile-header .main-header-menu-toggle"
                  )),
                  "0");
              if (
                (null !== this.closest("#ast-fixed-header") &&
                  ((e = document.querySelectorAll(
                    "#ast-fixed-header > #ast-mobile-header .main-header-bar-navigation"
                  )),
                  (r = document.querySelectorAll(
                    "#ast-fixed-header .main-header-menu-toggle"
                  )),
                  (t = "0")),
                void 0 === e[t])
              )
                return !1;
              for (
                var a = e[t].querySelectorAll(".menu-item-has-children"), n = 0;
                n < a.length;
                n++
              ) {
                a[n].classList.remove("ast-submenu-expanded");
                for (
                  var s = a[n].querySelectorAll(".sub-menu"), o = 0;
                  o < s.length;
                  o++
                )
                  s[o].style.display = "none";
              }
              -1 !==
                (this.getAttribute("class") || "").indexOf(
                  "main-header-menu-toggle"
                ) &&
                (astraToggleClass(e[t], "toggle-on"),
                astraToggleClass(r[t], "toggled"),
                e[t].classList.contains("toggle-on")
                  ? ((e[t].style.display = "block"),
                    u.classList.add("ast-main-header-nav-open"))
                  : ((e[t].style.display = ""),
                    u.classList.remove("ast-main-header-nav-open")));
            }
          }),
          u.addEventListener(
            "astra-header-responsive-enabled",
            function () {
              var e = document.querySelectorAll(".main-header-bar-navigation");
              if (0 < e.length)
                for (var t = 0; t < e.length; t++) {
                  null != e[t] &&
                    (e[t].classList.remove("toggle-on"),
                    (e[t].style.display = ""));
                  for (
                    var a = e[t].getElementsByClassName("sub-menu"), n = 0;
                    n < a.length;
                    n++
                  )
                    a[n].style.display = "";
                  for (
                    var s = e[t].getElementsByClassName("children"), o = 0;
                    o < s.length;
                    o++
                  )
                    s[o].style.display = "";
                  for (
                    var r = e[t].getElementsByClassName("ast-search-menu-icon"),
                      l = 0;
                    l < r.length;
                    l++
                  )
                    r[l].classList.remove("ast-dropdown-active"),
                      (r[l].style.display = "");
                }
            },
            !1
          ),
          (k = navigator.userAgent),
          (a =
            k.match(
              /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
            ) || []),
          /trident/i.test(a[1])
            ? (t = /\brv[ :]+(\d+)/g.exec(k) || [])
            : ("Chrome" === a[1] &&
                null != (t = k.match(/\bOPR|Edge\/(\d+)/))) ||
              ((a = a[2]
                ? [a[1], a[2]]
                : [navigator.appName, navigator.appVersion, "-?"]),
              null != (t = k.match(/version\/(\d+)/i)) && a.splice(1, 1, t[1]),
              "Safari" === a[0] &&
                a[1] < 11 &&
                document.body.classList.add("ast-safari-browser-less-than-11")),
          document.getElementsByClassName("astra-search-icon")),
        y = 0;
      y < f.length;
      y++
    )
      f[y].onclick = function (e) {
        var t;
        this.classList.contains("slide-search") &&
          (e.preventDefault(),
          (t = this.parentNode.parentNode.parentNode.querySelector(
            ".ast-search-menu-icon"
          )).classList.contains("ast-dropdown-active")
            ? ("" !== (t.querySelector(".search-field").value || "") &&
                t.querySelector(".search-form").submit(),
              t.classList.remove("ast-dropdown-active"))
            : (t.classList.add("ast-dropdown-active"),
              t
                .querySelector(".search-field")
                .setAttribute("autocomplete", "off"),
              setTimeout(function () {
                t.querySelector(".search-field").focus();
              }, 200)));
      };
    function b(e, t, a, n) {
      e &&
        e.forEach((e) => {
          e.classList.remove("astra-megamenu-focus"),
            e.classList.remove("toggled-on");
        }),
        a &&
          a.forEach((e) => {
            e.classList.remove("ast-menu-hover");
          }),
        n &&
          n.forEach((e) => {
            e.classList.remove("astra-megamenu-wrapper-focus");
          }),
        t &&
          t.forEach((e) => {
            e.setAttribute("aria-expanded", "false");
          });
    }
    function L() {
      var e = this || "";
      if (
        e &&
        !e.classList.contains("astra-search-icon") &&
        null === e.closest(".ast-builder-menu") &&
        -1 !== new String(e).indexOf("#")
      ) {
        var t = e.parentNode;
        if (u.classList.contains("ast-header-break-point"))
          (document
            .querySelector("header.site-header")
            .classList.contains("ast-builder-menu-toggle-link") &&
            t.classList.contains("menu-item-has-children")) ||
            (document
              .querySelector(".main-header-menu-toggle")
              .classList.remove("toggled"),
            (t = document.querySelector(
              ".main-header-bar-navigation"
            )).classList.remove("toggle-on"),
            (t.style.display = "none"),
            astraTriggerEvent(
              document.querySelector("body"),
              "astraMenuHashLinkClicked"
            ));
        else
          for (; -1 === e.className.indexOf("nav-menu"); )
            "li" === e.tagName.toLowerCase() &&
              -1 !== e.className.indexOf("focus") &&
              (e.className = e.className.replace(" focus", "")),
              (e = e.parentElement);
      }
    }
    function E() {
      for (
        var e = this;
        -1 === e.className.indexOf("navigation-accessibility");

      )
        "li" === e.tagName.toLowerCase() && e.classList.toggle("focus"),
          (e = e.parentElement);
    }
    if (
      (document.querySelectorAll(".search-field").forEach((e) => {
        e.addEventListener("focus", function (e) {
          var t = this.parentNode.parentNode.parentNode.querySelector(
            ".ast-search-menu-icon"
          );
          t && astraToggleClass(t, "ast-dropdown-active");
        }),
          e.addEventListener("blur", function (e) {
            var t = this.parentNode.parentNode.parentNode.querySelector(
              ".ast-search-menu-icon"
            );
            t &&
              (t.classList.remove("ast-dropdown-active"),
              astraToggleClass(t, "ast-dropdown-active"));
          });
      }),
      (u.onclick = function (e) {
        if (
          void 0 !== e.target.classList &&
          !e.target.classList.contains("ast-search-menu-icon") &&
          0 === astraGetParents(e.target, ".ast-search-menu-icon").length &&
          0 === astraGetParents(e.target, ".ast-search-icon").length
        )
          for (
            var t = document.getElementsByClassName("ast-search-menu-icon"),
              a = 0;
            a < t.length;
            a++
          )
            t[a].classList.remove("ast-dropdown-active");
      }),
      astra.is_header_footer_builder_active ||
        ("querySelector" in document &&
          "addEventListener" in window &&
          (u.addEventListener("mousedown", function () {
            u.classList.add("ast-mouse-clicked");
          }),
          u.addEventListener("keydown", function () {
            u.classList.remove("ast-mouse-clicked");
          }))),
      astra.is_scroll_to_id)
    ) {
      let t = [];
      var k = document.querySelectorAll(
        'a[href*="#"]:not([href="#"]):not([href="#0"]):not([href*="uagb-tab"]):not(.uagb-toc-link__trigger):not(.skip-link):not(.nav-links a):not([href*="tab-"])'
      );
      if (k)
        for (const link of k)
          link.href.split("#")[0] !== location.href.split("#")[0]
            ? t.push({ hash: link.hash, url: link.href.split("#")[0] })
            : "" !== link.hash && link.addEventListener("click", S);
      function S(e) {
        let t = 0;
        var a = document.querySelector(".site-header");
        a &&
          ((a = a.querySelectorAll("div[data-stick-support]")) &&
            a.forEach((e) => {
              t += e.clientHeight;
            }),
          (a = this.hash)) &&
          (a = document.querySelector(a)) &&
          (a = a.offsetTop - t) &&
          astraSmoothScroll(e, a);
      }
      window.addEventListener("DOMContentLoaded", (e) => {
        for (var a of t)
          if (window.location.href.split("#")[0] === a.url) {
            var n = document.querySelector(".site-header");
            let t = 0;
            (n = n.querySelectorAll("div[data-stick-support]")),
              (n =
                (n &&
                  n.forEach((e) => {
                    t += e.clientHeight;
                  }),
                document.querySelector(a.hash)));
            n && (a = n.offsetTop - t) && astraSmoothScroll(e, a);
          }
      });
    }
    astra.is_scroll_to_top &&
      ((o = document.querySelector("#page header")),
      (l = document.getElementById("ast-scroll-top")),
      astScrollToTopHandler(o, l),
      window.addEventListener("scroll", function () {
        astScrollToTopHandler(o, l);
      }),
      (l.onclick = function (e) {
        astraSmoothScroll(e, 0);
      }),
      l.addEventListener("keydown", function (e) {
        "Enter" === e.key && astraSmoothScroll(e, 0);
      })),
      window.addEventListener("DOMContentLoaded", (e) => {
        document
          .querySelector(".woocommerce-store-notice__dismiss-link")
          ?.addEventListener(
            "click",
            () =>
              !wp?.customize &&
              document.body.classList.remove(
                "ast-woocommerce-store-notice-hanged"
              )
          );
      });
  })(),
  document.addEventListener("DOMContentLoaded", function () {
    function t(e) {
      var e = e.closest(".menu-link"),
        t = e.nextElementSibling.classList.contains("toggled-on");
      e.setAttribute("aria-expanded", t ? "true" : "false");
    }
    document
      .querySelectorAll(".menu-link .dropdown-menu-toggle")
      .forEach(function (e) {
        e.addEventListener("focus", function () {
          t(this);
        }),
          e.addEventListener("blur", function () {
            t(this);
          }),
          e.addEventListener("keydown", function (e) {
            var t;
            "Enter" === e.key &&
              ((e = (e = this).closest(".menu-link")),
              (t = e.getAttribute("aria-expanded")),
              e.setAttribute("aria-expanded", "true" === t ? "false" : "true"));
          });
      }),
      document.addEventListener("keydown", function (e) {
        "Escape" === e.key &&
          document
            .querySelectorAll(".menu-link .dropdown-menu-toggle")
            .forEach(function (e) {
              t(e);
            });
      });
  });
/*!
 * Datepicker for Bootstrap v1.7.0 (https://github.com/uxsolutions/bootstrap-datepicker)
 *
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */ !(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a("object" == typeof exports ? require("jquery") : jQuery);
})(function ($, h) {
  function i() {
    return new Date(Date.UTC.apply(Date, arguments));
  }
  function j() {
    var a = new Date();
    return i(a.getFullYear(), a.getMonth(), a.getDate());
  }
  function k(a, b) {
    return (
      a.getUTCFullYear() === b.getUTCFullYear() &&
      a.getUTCMonth() === b.getUTCMonth() &&
      a.getUTCDate() === b.getUTCDate()
    );
  }
  function b(a, b) {
    return function () {
      return (
        b !== h && $.fn.bootstrapDatepicker.deprecated(b),
        this[a].apply(this, arguments)
      );
    };
  }
  var e,
    l =
      ((e = {
        get: function (a) {
          return this.slice(a)[0];
        },
        contains: function (b) {
          for (var c = b && b.valueOf(), a = 0, d = this.length; a < d; a++)
            if (0 <= this[a].valueOf() - c && this[a].valueOf() - c < 864e5)
              return a;
          return -1;
        },
        remove: function (a) {
          this.splice(a, 1);
        },
        replace: function (a) {
          a &&
            (Array.isArray(a) || (a = [a]),
            this.clear(),
            this.push.apply(this, a));
        },
        clear: function () {
          this.length = 0;
        },
        copy: function () {
          var a = new l();
          return a.replace(this), a;
        },
      }),
      function () {
        var a = [];
        return a.push.apply(a, arguments), $.extend(a, e), a;
      }),
    c = function (b, c) {
      $.data(b, "datepicker", this),
        this._process_options(c),
        (this.dates = new l()),
        (this.viewDate = this.o.defaultViewDate),
        (this.focusDate = null),
        (this.element = $(b)),
        (this.isInput = this.element.is("input")),
        (this.inputField = this.isInput
          ? this.element
          : this.element.find("input")),
        (this.component =
          !!this.element.hasClass("date") &&
          this.element.find(".add-on, .input-group-addon, .btn")),
        this.component && 0 === this.component.length && (this.component = !1),
        (this.isInline = !this.component && this.element.is("div")),
        (this.picker = $(a.template)),
        this._check_template(this.o.templates.leftArrow) &&
          this.picker.find(".prev").html(this.o.templates.leftArrow),
        this._check_template(this.o.templates.rightArrow) &&
          this.picker.find(".next").html(this.o.templates.rightArrow),
        this._buildEvents(),
        this._attachEvents(),
        this.isInline
          ? this.picker.addClass("datepicker-inline").appendTo(this.element)
          : this.picker.addClass("datepicker-dropdown dropdown-menu"),
        this.o.rtl && this.picker.addClass("datepicker-rtl"),
        this.o.calendarWeeks &&
          this.picker
            .find(
              ".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear"
            )
            .attr("colspan", function (b, a) {
              return Number(a) + 1;
            }),
        this._process_options({
          startDate: this._o.startDate,
          endDate: this._o.endDate,
          daysOfWeekDisabled: this.o.daysOfWeekDisabled,
          daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
          datesDisabled: this.o.datesDisabled,
        }),
        (this._allow_update = !1),
        this.setViewMode(this.o.startView),
        (this._allow_update = !0),
        this.fillDow(),
        this.fillMonths(),
        this.update(),
        this.isInline && this.show();
    };
  c.prototype = {
    constructor: c,
    _resolveViewName: function (b) {
      return (
        $.each(a.viewModes, function (a, c) {
          if (b === a || -1 !== $.inArray(b, c.names)) return (b = a), !1;
        }),
        b
      );
    },
    _resolveDaysOfWeek: function (a) {
      return Array.isArray(a) || (a = a.split(/[,\s]*/)), $.map(a, Number);
    },
    _check_template: function (a) {
      try {
        if (a === h || "" === a) return !1;
        if ((a.match(/[<>]/g) || []).length <= 0) return !0;
        return $(a).length > 0;
      } catch (b) {
        return !1;
      }
    },
    _process_options: function (h) {
      this._o = $.extend({}, this._o, h);
      var b = (this.o = $.extend({}, this._o)),
        f = b.language;
      o[f] || o[(f = f.split("-")[0])] || (f = d.language),
        (b.language = f),
        (b.startView = this._resolveViewName(b.startView)),
        (b.minViewMode = this._resolveViewName(b.minViewMode)),
        (b.maxViewMode = this._resolveViewName(b.maxViewMode)),
        (b.startView = Math.max(
          this.o.minViewMode,
          Math.min(this.o.maxViewMode, b.startView)
        )),
        !0 !== b.multidate &&
          ((b.multidate = Number(b.multidate) || !1),
          !1 !== b.multidate && (b.multidate = Math.max(0, b.multidate))),
        (b.multidateSeparator = String(b.multidateSeparator)),
        (b.weekStart %= 7),
        (b.weekEnd = (b.weekStart + 6) % 7);
      var g = a.parseFormat(b.format);
      b.startDate !== -1 / 0 &&
        (b.startDate
          ? b.startDate instanceof Date
            ? (b.startDate = this._local_to_utc(this._zero_time(b.startDate)))
            : (b.startDate = a.parseDate(
                b.startDate,
                g,
                b.language,
                b.assumeNearbyYear
              ))
          : (b.startDate = -1 / 0)),
        b.endDate !== 1 / 0 &&
          (b.endDate
            ? b.endDate instanceof Date
              ? (b.endDate = this._local_to_utc(this._zero_time(b.endDate)))
              : (b.endDate = a.parseDate(
                  b.endDate,
                  g,
                  b.language,
                  b.assumeNearbyYear
                ))
            : (b.endDate = 1 / 0)),
        (b.daysOfWeekDisabled = this._resolveDaysOfWeek(
          b.daysOfWeekDisabled || []
        )),
        (b.daysOfWeekHighlighted = this._resolveDaysOfWeek(
          b.daysOfWeekHighlighted || []
        )),
        (b.datesDisabled = b.datesDisabled || []),
        Array.isArray(b.datesDisabled) ||
          (b.datesDisabled = b.datesDisabled.split(",")),
        (b.datesDisabled = $.map(b.datesDisabled, function (c) {
          return a.parseDate(c, g, b.language, b.assumeNearbyYear);
        }));
      var c = String(b.orientation).toLowerCase().split(/\s+/g),
        e = b.orientation.toLowerCase();
      if (
        ((c = $.grep(c, function (a) {
          return /^auto|left|right|top|bottom$/.test(a);
        })),
        (b.orientation = { x: "auto", y: "auto" }),
        e && "auto" !== e)
      ) {
        if (1 === c.length)
          switch (c[0]) {
            case "top":
            case "bottom":
              b.orientation.y = c[0];
              break;
            case "left":
            case "right":
              b.orientation.x = c[0];
          }
        else
          (e = $.grep(c, function (a) {
            return /^left|right$/.test(a);
          })),
            (b.orientation.x = e[0] || "auto"),
            (e = $.grep(c, function (a) {
              return /^top|bottom$/.test(a);
            })),
            (b.orientation.y = e[0] || "auto");
      }
      if (
        b.defaultViewDate instanceof Date ||
        "string" == typeof b.defaultViewDate
      )
        b.defaultViewDate = a.parseDate(
          b.defaultViewDate,
          g,
          b.language,
          b.assumeNearbyYear
        );
      else if (b.defaultViewDate) {
        var k = b.defaultViewDate.year || new Date().getFullYear(),
          l = b.defaultViewDate.month || 0,
          m = b.defaultViewDate.day || 1;
        b.defaultViewDate = i(k, l, m);
      } else b.defaultViewDate = j();
    },
    _events: [],
    _secondaryEvents: [],
    _applyEvents: function (b) {
      for (var e, c, d, a = 0; a < b.length; a++)
        (e = b[a][0]),
          2 === b[a].length
            ? ((c = h), (d = b[a][1]))
            : 3 === b[a].length && ((c = b[a][1]), (d = b[a][2])),
          e.on(d, c);
    },
    _unapplyEvents: function (b) {
      for (var e, c, d, a = 0; a < b.length; a++)
        (e = b[a][0]),
          2 === b[a].length
            ? ((d = h), (c = b[a][1]))
            : 3 === b[a].length && ((d = b[a][1]), (c = b[a][2])),
          e.off(c, d);
    },
    _buildEvents: function () {
      var a = {
        keyup: $.proxy(function (a) {
          -1 === $.inArray(a.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) &&
            this.update();
        }, this),
        keydown: $.proxy(this.keydown, this),
        paste: $.proxy(this.paste, this),
      };
      !0 === this.o.showOnFocus && (a.focus = $.proxy(this.show, this)),
        this.isInput
          ? (this._events = [[this.element, a]])
          : this.component && this.inputField.length
          ? (this._events = [
              [this.inputField, a],
              [this.component, { click: $.proxy(this.show, this) }],
            ])
          : (this._events = [
              [
                this.element,
                {
                  click: $.proxy(this.show, this),
                  keydown: $.proxy(this.keydown, this),
                },
              ],
            ]),
        this._events.push(
          [
            this.element,
            "*",
            {
              blur: $.proxy(function (a) {
                this._focused_from = a.target;
              }, this),
            },
          ],
          [
            this.element,
            {
              blur: $.proxy(function (a) {
                this._focused_from = a.target;
              }, this),
            },
          ]
        ),
        this.o.immediateUpdates &&
          this._events.push([
            this.element,
            {
              "changeYear changeMonth": $.proxy(function (a) {
                this.update(a.date);
              }, this),
            },
          ]),
        (this._secondaryEvents = [
          [this.picker, { click: $.proxy(this.click, this) }],
          [
            this.picker,
            ".prev, .next",
            { click: $.proxy(this.navArrowsClick, this) },
          ],
          [
            this.picker,
            ".day:not(.disabled)",
            { click: $.proxy(this.dayCellClick, this) },
          ],
          [$(window), { resize: $.proxy(this.place, this) }],
          [
            $(document),
            {
              "mousedown touchstart": $.proxy(function (a) {
                this.element.is(a.target) ||
                  this.element.find(a.target).length ||
                  this.picker.is(a.target) ||
                  this.picker.find(a.target).length ||
                  this.isInline ||
                  this.hide();
              }, this),
            },
          ],
        ]);
    },
    _attachEvents: function () {
      this._detachEvents(), this._applyEvents(this._events);
    },
    _detachEvents: function () {
      this._unapplyEvents(this._events);
    },
    _attachSecondaryEvents: function () {
      this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents);
    },
    _detachSecondaryEvents: function () {
      this._unapplyEvents(this._secondaryEvents);
    },
    _trigger: function (b, c) {
      var d = c || this.dates.get(-1),
        e = this._utc_to_local(d);
      this.element.trigger({
        type: b,
        date: e,
        viewMode: this.viewMode,
        dates: $.map(this.dates, this._utc_to_local),
        format: $.proxy(function (b, c) {
          0 === arguments.length
            ? ((b = this.dates.length - 1), (c = this.o.format))
            : "string" == typeof b && ((c = b), (b = this.dates.length - 1)),
            (c = c || this.o.format);
          var d = this.dates.get(b);
          return a.formatDate(d, c, this.o.language);
        }, this),
      });
    },
    show: function () {
      if (
        !(
          this.inputField.prop("disabled") ||
          (this.inputField.prop("readonly") && !1 === this.o.enableOnReadonly)
        )
      )
        return (
          this.isInline || this.picker.appendTo(this.o.container),
          this.place(),
          this.picker.show(),
          this._attachSecondaryEvents(),
          this._trigger("show"),
          (window.navigator.msMaxTouchPoints || "ontouchstart" in document) &&
            this.o.disableTouchKeyboard &&
            $(this.element).blur(),
          this
        );
    },
    hide: function () {
      return (
        this.isInline ||
          !this.picker.is(":visible") ||
          ((this.focusDate = null),
          this.picker.hide().detach(),
          this._detachSecondaryEvents(),
          this.setViewMode(this.o.startView),
          this.o.forceParse && this.inputField.val() && this.setValue(),
          this._trigger("hide")),
        this
      );
    },
    destroy: function () {
      return (
        this.hide(),
        this._detachEvents(),
        this._detachSecondaryEvents(),
        this.picker.remove(),
        delete this.element.data().datepicker,
        this.isInput || delete this.element.data().date,
        this
      );
    },
    paste: function (a) {
      var b;
      if (
        a.originalEvent.clipboardData &&
        a.originalEvent.clipboardData.types &&
        -1 !== $.inArray("text/plain", a.originalEvent.clipboardData.types)
      )
        b = a.originalEvent.clipboardData.getData("text/plain");
      else {
        if (!window.clipboardData) return;
        b = window.clipboardData.getData("Text");
      }
      this.setDate(b), this.update(), a.preventDefault();
    },
    _utc_to_local: function (a) {
      if (!a) return a;
      var b = new Date(a.getTime() + 6e4 * a.getTimezoneOffset());
      return (
        b.getTimezoneOffset() !== a.getTimezoneOffset() &&
          (b = new Date(a.getTime() + 6e4 * b.getTimezoneOffset())),
        b
      );
    },
    _local_to_utc: function (a) {
      return a && new Date(a.getTime() - 6e4 * a.getTimezoneOffset());
    },
    _zero_time: function (a) {
      return a && new Date(a.getFullYear(), a.getMonth(), a.getDate());
    },
    _zero_utc_time: function (a) {
      return a && i(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate());
    },
    getDates: function () {
      return $.map(this.dates, this._utc_to_local);
    },
    getUTCDates: function () {
      return $.map(this.dates, function (a) {
        return new Date(a);
      });
    },
    getDate: function () {
      return this._utc_to_local(this.getUTCDate());
    },
    getUTCDate: function () {
      var a = this.dates.get(-1);
      return a !== h ? new Date(a) : null;
    },
    clearDates: function () {
      this.inputField.val(""),
        this.update(),
        this._trigger("changeDate"),
        this.o.autoclose && this.hide();
    },
    setDates: function () {
      var a = Array.isArray(arguments[0]) ? arguments[0] : arguments;
      return (
        this.update.apply(this, a),
        this._trigger("changeDate"),
        this.setValue(),
        this
      );
    },
    setUTCDates: function () {
      var a = Array.isArray(arguments[0]) ? arguments[0] : arguments;
      return this.setDates.apply(this, $.map(a, this._utc_to_local)), this;
    },
    setDate: b("setDates"),
    setUTCDate: b("setUTCDates"),
    remove: b(
      "destroy",
      "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"
    ),
    setValue: function () {
      var a = this.getFormattedDate();
      return this.inputField.val(a), this;
    },
    getFormattedDate: function (b) {
      b === h && (b = this.o.format);
      var c = this.o.language;
      return $.map(this.dates, function (d) {
        return a.formatDate(d, b, c);
      }).join(this.o.multidateSeparator);
    },
    getStartDate: function () {
      return this.o.startDate;
    },
    setStartDate: function (a) {
      return (
        this._process_options({ startDate: a }),
        this.update(),
        this.updateNavArrows(),
        this
      );
    },
    getEndDate: function () {
      return this.o.endDate;
    },
    setEndDate: function (a) {
      return (
        this._process_options({ endDate: a }),
        this.update(),
        this.updateNavArrows(),
        this
      );
    },
    setDaysOfWeekDisabled: function (a) {
      return (
        this._process_options({ daysOfWeekDisabled: a }), this.update(), this
      );
    },
    setDaysOfWeekHighlighted: function (a) {
      return (
        this._process_options({ daysOfWeekHighlighted: a }), this.update(), this
      );
    },
    setDatesDisabled: function (a) {
      return this._process_options({ datesDisabled: a }), this.update(), this;
    },
    place: function () {
      if (this.isInline) return this;
      var e = this.picker.outerWidth(),
        h = this.picker.outerHeight(),
        m = 10,
        f = $(this.o.container),
        i = f.width(),
        j =
          "body" === this.o.container ? $(document).scrollTop() : f.scrollTop(),
        k = f.offset(),
        n = [0];
      this.element.parents().each(function () {
        var a = $(this).css("z-index");
        "auto" !== a && 0 !== Number(a) && n.push(Number(a));
      });
      var l = Math.max.apply(Math, n) + this.o.zIndexOffset,
        c = this.component
          ? this.component.parent().offset()
          : this.element.offset(),
        o = this.component
          ? this.component.outerHeight(!0)
          : this.element.outerHeight(!1),
        g = this.component
          ? this.component.outerWidth(!0)
          : this.element.outerWidth(!1),
        a = c.left - k.left,
        b = c.top - k.top;
      "body" !== this.o.container && (b += j),
        this.picker.removeClass(
          "datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"
        ),
        "auto" !== this.o.orientation.x
          ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x),
            "right" === this.o.orientation.x && (a -= e - g))
          : c.left < 0
          ? (this.picker.addClass("datepicker-orient-left"), (a -= c.left - m))
          : a + e > i
          ? (this.picker.addClass("datepicker-orient-right"), (a += g - e))
          : this.o.rtl
          ? this.picker.addClass("datepicker-orient-right")
          : this.picker.addClass("datepicker-orient-left");
      var d = this.o.orientation.y;
      if (
        ("auto" === d && (d = -j + b - h < 0 ? "bottom" : "top"),
        this.picker.addClass("datepicker-orient-" + d),
        "top" === d
          ? (b -= h + parseInt(this.picker.css("padding-top")))
          : (b += o),
        this.o.rtl)
      ) {
        var p = i - (a + g);
        this.picker.css({ top: b, right: p, zIndex: l });
      } else this.picker.css({ top: b, left: a, zIndex: l });
      return this;
    },
    _allow_update: !0,
    update: function () {
      if (!this._allow_update) return this;
      var d = this.dates.copy(),
        b = [],
        c = !1;
      return (
        arguments.length
          ? ($.each(
              arguments,
              $.proxy(function (c, a) {
                a instanceof Date && (a = this._local_to_utc(a)), b.push(a);
              }, this)
            ),
            (c = !0))
          : ((b =
              (b = this.isInput
                ? this.element.val()
                : this.element.data("date") || this.inputField.val()) &&
              this.o.multidate
                ? b.split(this.o.multidateSeparator)
                : [b]),
            delete this.element.data().date),
        (b = $.map(
          b,
          $.proxy(function (b) {
            return a.parseDate(
              b,
              this.o.format,
              this.o.language,
              this.o.assumeNearbyYear
            );
          }, this)
        )),
        (b = $.grep(
          b,
          $.proxy(function (a) {
            return !this.dateWithinRange(a) || !a;
          }, this),
          !0
        )),
        this.dates.replace(b),
        this.o.updateViewDate &&
          (this.dates.length
            ? (this.viewDate = new Date(this.dates.get(-1)))
            : this.viewDate < this.o.startDate
            ? (this.viewDate = new Date(this.o.startDate))
            : this.viewDate > this.o.endDate
            ? (this.viewDate = new Date(this.o.endDate))
            : (this.viewDate = this.o.defaultViewDate)),
        c
          ? (this.setValue(), this.element.trigger("change"))
          : this.dates.length &&
            String(d) !== String(this.dates) &&
            c &&
            (this._trigger("changeDate"), this.element.trigger("change")),
        !this.dates.length &&
          d.length &&
          (this._trigger("clearDate"), this.element.trigger("change")),
        this.fill(),
        this
      );
    },
    fillDow: function () {
      if (this.o.showWeekDays) {
        var b = this.o.weekStart,
          a = "<tr>";
        for (
          this.o.calendarWeeks && (a += '<th class="cw">&#160;</th>');
          b < this.o.weekStart + 7;

        )
          (a += '<th class="dow'),
            -1 !== $.inArray(b, this.o.daysOfWeekDisabled) &&
              (a += " disabled"),
            (a += '">' + o[this.o.language].daysMin[b++ % 7] + "</th>");
        (a += "</tr>"), this.picker.find(".datepicker-days thead").append(a);
      }
    },
    fillMonths: function () {
      for (
        var b = this._utc_to_local(this.viewDate), c = "", a = 0;
        a < 12;
        a++
      )
        c +=
          '<span class="month' +
          (b && b.getMonth() === a ? " focused" : "") +
          '">' +
          o[this.o.language].monthsShort[a] +
          "</span>";
      this.picker.find(".datepicker-months td").html(c);
    },
    setRange: function (a) {
      a && a.length
        ? (this.range = $.map(a, function (a) {
            return a.valueOf();
          }))
        : delete this.range,
        this.fill();
    },
    getClassNames: function (a) {
      var b = [],
        c = this.viewDate.getUTCFullYear(),
        d = this.viewDate.getUTCMonth(),
        e = j();
      return (
        a.getUTCFullYear() < c ||
        (a.getUTCFullYear() === c && a.getUTCMonth() < d)
          ? b.push("old")
          : (a.getUTCFullYear() > c ||
              (a.getUTCFullYear() === c && a.getUTCMonth() > d)) &&
            b.push("new"),
        this.focusDate &&
          a.valueOf() === this.focusDate.valueOf() &&
          b.push("focused"),
        this.o.todayHighlight && k(a, e) && b.push("today"),
        -1 !== this.dates.contains(a) && b.push("active"),
        this.dateWithinRange(a) || b.push("disabled"),
        this.dateIsDisabled(a) && b.push("disabled", "disabled-date"),
        -1 !== $.inArray(a.getUTCDay(), this.o.daysOfWeekHighlighted) &&
          b.push("highlighted"),
        this.range &&
          (a > this.range[0] &&
            a < this.range[this.range.length - 1] &&
            b.push("range"),
          -1 !== $.inArray(a.valueOf(), this.range) && b.push("selected"),
          a.valueOf() === this.range[0] && b.push("range-start"),
          a.valueOf() === this.range[this.range.length - 1] &&
            b.push("range-end")),
        b
      );
    },
    _fill_yearsView: function (m, n, g, o, p, q, j) {
      for (
        var b,
          e,
          a,
          k = "",
          d = g / 10,
          l = this.picker.find(m),
          f = Math.floor(o / g) * g,
          i = f + 9 * d,
          r = Math.floor(this.viewDate.getFullYear() / d) * d,
          s = $.map(this.dates, function (a) {
            return Math.floor(a.getUTCFullYear() / d) * d;
          }),
          c = f - d;
        c <= i + d;
        c += d
      )
        (b = [n]),
          (e = null),
          c === f - d ? b.push("old") : c === i + d && b.push("new"),
          -1 !== $.inArray(c, s) && b.push("active"),
          (c < p || c > q) && b.push("disabled"),
          c === r && b.push("focused"),
          j !== $.noop &&
            (h === (a = j(new Date(c, 0, 1)))
              ? (a = {})
              : "boolean" == typeof a
              ? (a = { enabled: a })
              : "string" == typeof a && (a = { classes: a }),
            !1 === a.enabled && b.push("disabled"),
            a.classes && (b = b.concat(a.classes.split(/\s+/))),
            a.tooltip && (e = a.tooltip)),
          (k +=
            '<span class="' +
            b.join(" ") +
            '"' +
            (e ? ' title="' + e + '"' : "") +
            ">" +
            c +
            "</span>");
      l.find(".datepicker-switch").text(f + "-" + i), l.find("td").html(k);
    },
    fill: function () {
      var n,
        e,
        l,
        b,
        p = new Date(this.viewDate),
        d = p.getUTCFullYear(),
        r = p.getUTCMonth(),
        g =
          this.o.startDate !== -1 / 0
            ? this.o.startDate.getUTCFullYear()
            : -1 / 0,
        v =
          this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
        j = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
        w = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
        x = o[this.o.language].today || o.en.today || "",
        y = o[this.o.language].clear || o.en.clear || "",
        z = o[this.o.language].titleFormat || o.en.titleFormat;
      if (!(isNaN(d) || isNaN(r))) {
        this.picker
          .find(".datepicker-days .datepicker-switch")
          .text(a.formatDate(p, z, this.o.language)),
          this.picker
            .find("tfoot .today")
            .text(x)
            .css(
              "display",
              !0 === this.o.todayBtn || "linked" === this.o.todayBtn
                ? "table-cell"
                : "none"
            ),
          this.picker
            .find("tfoot .clear")
            .text(y)
            .css("display", !0 === this.o.clearBtn ? "table-cell" : "none"),
          this.picker
            .find("thead .datepicker-title")
            .text(this.o.title)
            .css(
              "display",
              "string" == typeof this.o.title && "" !== this.o.title
                ? "table-cell"
                : "none"
            ),
          this.updateNavArrows(),
          this.fillMonths();
        var c = i(d, r, 0),
          A = c.getUTCDate();
        c.setUTCDate(A - ((c.getUTCDay() - this.o.weekStart + 7) % 7));
        var f = new Date(c);
        100 > c.getUTCFullYear() && f.setUTCFullYear(c.getUTCFullYear()),
          f.setUTCDate(f.getUTCDate() + 42),
          (f = f.valueOf());
        for (var k = []; c.valueOf() < f; ) {
          if (
            (n = c.getUTCDay()) === this.o.weekStart &&
            (k.push("<tr>"), this.o.calendarWeeks)
          ) {
            var s = new Date(+c + ((this.o.weekStart - n - 7) % 7) * 864e5),
              t = new Date(Number(s) + ((11 - s.getUTCDay()) % 7) * 864e5),
              q = new Date(
                Number((q = i(t.getUTCFullYear(), 0, 1))) +
                  ((11 - q.getUTCDay()) % 7) * 864e5
              ),
              B = (t - q) / 864e5 / 7 + 1;
            k.push('<td class="cw">' + B + "</td>");
          }
          (e = this.getClassNames(c)).push("day");
          var u = c.getUTCDate();
          this.o.beforeShowDay !== $.noop &&
            (h === (b = this.o.beforeShowDay(this._utc_to_local(c)))
              ? (b = {})
              : "boolean" == typeof b
              ? (b = { enabled: b })
              : "string" == typeof b && (b = { classes: b }),
            !1 === b.enabled && e.push("disabled"),
            b.classes && (e = e.concat(b.classes.split(/\s+/))),
            b.tooltip && (l = b.tooltip),
            b.content && (u = b.content)),
            (e =
              "function" == typeof $.uniqueSort
                ? $.uniqueSort(e)
                : $.unique(e)),
            k.push(
              '<td class="' +
                e.join(" ") +
                '"' +
                (l ? ' title="' + l + '"' : "") +
                ' data-date="' +
                c.getTime().toString() +
                '">' +
                u +
                "</td>"
            ),
            (l = null),
            n === this.o.weekEnd && k.push("</tr>"),
            c.setUTCDate(c.getUTCDate() + 1);
        }
        this.picker.find(".datepicker-days tbody").html(k.join(""));
        var C = o[this.o.language].monthsTitle || o.en.monthsTitle || "Months",
          m = this.picker
            .find(".datepicker-months")
            .find(".datepicker-switch")
            .text(this.o.maxViewMode < 2 ? C : d)
            .end()
            .find("tbody span")
            .removeClass("active");
        if (
          ($.each(this.dates, function (b, a) {
            a.getUTCFullYear() === d &&
              m.eq(a.getUTCMonth()).addClass("active");
          }),
          (d < g || d > j) && m.addClass("disabled"),
          d === g && m.slice(0, v).addClass("disabled"),
          d === j && m.slice(w + 1).addClass("disabled"),
          this.o.beforeShowMonth !== $.noop)
        ) {
          var D = this;
          $.each(m, function (c, b) {
            var e = new Date(d, c, 1),
              a = D.o.beforeShowMonth(e);
            a === h
              ? (a = {})
              : "boolean" == typeof a
              ? (a = { enabled: a })
              : "string" == typeof a && (a = { classes: a }),
              !1 !== a.enabled ||
                $(b).hasClass("disabled") ||
                $(b).addClass("disabled"),
              a.classes && $(b).addClass(a.classes),
              a.tooltip && $(b).prop("title", a.tooltip);
          });
        }
        this._fill_yearsView(
          ".datepicker-years",
          "year",
          10,
          d,
          g,
          j,
          this.o.beforeShowYear
        ),
          this._fill_yearsView(
            ".datepicker-decades",
            "decade",
            100,
            d,
            g,
            j,
            this.o.beforeShowDecade
          ),
          this._fill_yearsView(
            ".datepicker-centuries",
            "century",
            1e3,
            d,
            g,
            j,
            this.o.beforeShowCentury
          );
      }
    },
    updateNavArrows: function () {
      if (this._allow_update) {
        var c,
          d,
          e = new Date(this.viewDate),
          b = e.getUTCFullYear(),
          f = e.getUTCMonth(),
          g =
            this.o.startDate !== -1 / 0
              ? this.o.startDate.getUTCFullYear()
              : -1 / 0,
          i =
            this.o.startDate !== -1 / 0
              ? this.o.startDate.getUTCMonth()
              : -1 / 0,
          h =
            this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
          j = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
          a = 1;
        switch (this.viewMode) {
          case 0:
            (c = b <= g && f <= i), (d = b >= h && f >= j);
            break;
          case 4:
            a *= 10;
          case 3:
            a *= 10;
          case 2:
            a *= 10;
          case 1:
            (c = Math.floor(b / a) * a <= g),
              (d = Math.floor(b / a) * a + a >= h);
        }
        this.picker.find(".prev").toggleClass("disabled", c),
          this.picker.find(".next").toggleClass("disabled", d);
      }
    },
    click: function (e) {
      var b, f, c, d;
      e.preventDefault(),
        e.stopPropagation(),
        (b = $(e.target)).hasClass("datepicker-switch") &&
          this.viewMode !== this.o.maxViewMode &&
          this.setViewMode(this.viewMode + 1),
        b.hasClass("today") &&
          !b.hasClass("day") &&
          (this.setViewMode(0),
          this._setDate(j(), "linked" === this.o.todayBtn ? null : "view")),
        b.hasClass("clear") && this.clearDates(),
        !b.hasClass("disabled") &&
          (b.hasClass("month") ||
            b.hasClass("year") ||
            b.hasClass("decade") ||
            b.hasClass("century")) &&
          (this.viewDate.setUTCDate(1),
          (f = 1),
          1 === this.viewMode
            ? ((d = b.parent().find("span").index(b)),
              (c = this.viewDate.getUTCFullYear()),
              this.viewDate.setUTCMonth(d))
            : ((d = 0),
              (c = Number(b.text())),
              this.viewDate.setUTCFullYear(c)),
          this._trigger(a.viewModes[this.viewMode - 1].e, this.viewDate),
          this.viewMode === this.o.minViewMode
            ? this._setDate(i(c, d, f))
            : (this.setViewMode(this.viewMode - 1), this.fill())),
        this.picker.is(":visible") &&
          this._focused_from &&
          this._focused_from.focus(),
        delete this._focused_from;
    },
    dayCellClick: function (b) {
      var c = $(b.currentTarget).data("date"),
        a = new Date(c);
      this.o.updateViewDate &&
        (a.getUTCFullYear() !== this.viewDate.getUTCFullYear() &&
          this._trigger("changeYear", this.viewDate),
        a.getUTCMonth() !== this.viewDate.getUTCMonth() &&
          this._trigger("changeMonth", this.viewDate)),
        this._setDate(a);
    },
    navArrowsClick: function (c) {
      var b = $(c.currentTarget).hasClass("prev") ? -1 : 1;
      0 !== this.viewMode && (b *= 12 * a.viewModes[this.viewMode].navStep),
        (this.viewDate = this.moveMonth(this.viewDate, b)),
        this._trigger(a.viewModes[this.viewMode].e, this.viewDate),
        this.fill();
    },
    _toggle_multidate: function (a) {
      var b = this.dates.contains(a);
      if (
        (a || this.dates.clear(),
        -1 !== b
          ? (!0 === this.o.multidate ||
              this.o.multidate > 1 ||
              this.o.toggleActive) &&
            this.dates.remove(b)
          : (!1 === this.o.multidate && this.dates.clear(), this.dates.push(a)),
        "number" == typeof this.o.multidate)
      )
        for (; this.dates.length > this.o.multidate; ) this.dates.remove(0);
    },
    _setDate: function (b, a) {
      (a && "date" !== a) || this._toggle_multidate(b && new Date(b)),
        ((!a && this.o.updateViewDate) || "view" === a) &&
          (this.viewDate = b && new Date(b)),
        this.fill(),
        this.setValue(),
        (a && "view" === a) || this._trigger("changeDate"),
        this.inputField.trigger("change"),
        this.o.autoclose && (!a || "date" === a) && this.hide();
    },
    moveDay: function (a, c) {
      var b = new Date(a);
      return b.setUTCDate(a.getUTCDate() + c), b;
    },
    moveWeek: function (a, b) {
      return this.moveDay(a, 7 * b);
    },
    moveMonth: function (d, b) {
      if (!(j = d) || isNaN(j.getTime())) return this.o.defaultViewDate;
      if (!b) return d;
      var j,
        c,
        e,
        a = new Date(d.valueOf()),
        f = a.getUTCDate(),
        i = a.getUTCMonth(),
        g = Math.abs(b);
      if (((b = b > 0 ? 1 : -1), 1 === g))
        (e =
          -1 === b
            ? function () {
                return a.getUTCMonth() === i;
              }
            : function () {
                return a.getUTCMonth() !== c;
              }),
          (c = i + b),
          a.setUTCMonth(c),
          (c = (c + 12) % 12);
      else {
        for (var h = 0; h < g; h++) a = this.moveMonth(a, b);
        (c = a.getUTCMonth()),
          a.setUTCDate(f),
          (e = function () {
            return c !== a.getUTCMonth();
          });
      }
      for (; e(); ) a.setUTCDate(--f), a.setUTCMonth(c);
      return a;
    },
    moveYear: function (a, b) {
      return this.moveMonth(a, 12 * b);
    },
    moveAvailableDate: function (a, c, b) {
      do {
        if (((a = this[b](a, c)), !this.dateWithinRange(a))) return !1;
        b = "moveDay";
      } while (this.dateIsDisabled(a));
      return a;
    },
    weekOfDateIsDisabled: function (a) {
      return -1 !== $.inArray(a.getUTCDay(), this.o.daysOfWeekDisabled);
    },
    dateIsDisabled: function (a) {
      return (
        this.weekOfDateIsDisabled(a) ||
        $.grep(this.o.datesDisabled, function (b) {
          return k(a, b);
        }).length > 0
      );
    },
    dateWithinRange: function (a) {
      return a >= this.o.startDate && a <= this.o.endDate;
    },
    keydown: function (a) {
      if (!this.picker.is(":visible")) {
        (40 === a.keyCode || 27 === a.keyCode) &&
          (this.show(), a.stopPropagation());
        return;
      }
      var b,
        d,
        e = !1,
        c = this.focusDate || this.viewDate;
      switch (a.keyCode) {
        case 27:
          this.focusDate
            ? ((this.focusDate = null),
              (this.viewDate = this.dates.get(-1) || this.viewDate),
              this.fill())
            : this.hide(),
            a.preventDefault(),
            a.stopPropagation();
          break;
        case 37:
        case 38:
        case 39:
        case 40:
          if (
            !this.o.keyboardNavigation ||
            7 === this.o.daysOfWeekDisabled.length
          )
            break;
          (b = 37 === a.keyCode || 38 === a.keyCode ? -1 : 1),
            0 === this.viewMode
              ? a.ctrlKey
                ? (d = this.moveAvailableDate(c, b, "moveYear")) &&
                  this._trigger("changeYear", this.viewDate)
                : a.shiftKey
                ? (d = this.moveAvailableDate(c, b, "moveMonth")) &&
                  this._trigger("changeMonth", this.viewDate)
                : 37 === a.keyCode || 39 === a.keyCode
                ? (d = this.moveAvailableDate(c, b, "moveDay"))
                : this.weekOfDateIsDisabled(c) ||
                  (d = this.moveAvailableDate(c, b, "moveWeek"))
              : 1 === this.viewMode
              ? ((38 === a.keyCode || 40 === a.keyCode) && (b *= 4),
                (d = this.moveAvailableDate(c, b, "moveMonth")))
              : 2 === this.viewMode &&
                ((38 === a.keyCode || 40 === a.keyCode) && (b *= 4),
                (d = this.moveAvailableDate(c, b, "moveYear"))),
            d &&
              ((this.focusDate = this.viewDate = d),
              this.setValue(),
              this.fill(),
              a.preventDefault());
          break;
        case 13:
          if (!this.o.forceParse) break;
          (c = this.focusDate || this.dates.get(-1) || this.viewDate),
            this.o.keyboardNavigation && (this._toggle_multidate(c), (e = !0)),
            (this.focusDate = null),
            (this.viewDate = this.dates.get(-1) || this.viewDate),
            this.setValue(),
            this.fill(),
            this.picker.is(":visible") &&
              (a.preventDefault(),
              a.stopPropagation(),
              this.o.autoclose && this.hide());
          break;
        case 9:
          (this.focusDate = null),
            (this.viewDate = this.dates.get(-1) || this.viewDate),
            this.fill(),
            this.hide();
      }
      e &&
        (this.dates.length
          ? this._trigger("changeDate")
          : this._trigger("clearDate"),
        this.inputField.trigger("change"));
    },
    setViewMode: function (b) {
      (this.viewMode = b),
        this.picker
          .children("div")
          .hide()
          .filter(".datepicker-" + a.viewModes[this.viewMode].clsName)
          .show(),
        this.updateNavArrows(),
        this._trigger("changeViewMode", new Date(this.viewDate));
    },
  };
  var f = function (b, a) {
    $.data(b, "datepicker", this),
      (this.element = $(b)),
      (this.inputs = $.map(a.inputs, function (a) {
        return a.jquery ? a[0] : a;
      })),
      delete a.inputs,
      (this.keepEmptyValues = a.keepEmptyValues),
      delete a.keepEmptyValues,
      g
        .call($(this.inputs), a)
        .on("changeDate", $.proxy(this.dateUpdated, this)),
      (this.pickers = $.map(this.inputs, function (a) {
        return $.data(a, "datepicker");
      })),
      this.updateDates();
  };
  f.prototype = {
    updateDates: function () {
      (this.dates = $.map(this.pickers, function (a) {
        return a.getUTCDate();
      })),
        this.updateRanges();
    },
    updateRanges: function () {
      var a = $.map(this.dates, function (a) {
        return a.valueOf();
      });
      $.each(this.pickers, function (c, b) {
        b.setRange(a);
      });
    },
    dateUpdated: function (e) {
      if (!this.updating) {
        this.updating = !0;
        var f = $.data(e.target, "datepicker");
        if (f !== h) {
          var a = f.getUTCDate(),
            i = this.keepEmptyValues,
            d = $.inArray(e.target, this.inputs),
            b = d - 1,
            c = d + 1,
            g = this.inputs.length;
          if (-1 !== d) {
            if (
              ($.each(this.pickers, function (c, b) {
                b.getUTCDate() || (b !== f && i) || b.setUTCDate(a);
              }),
              a < this.dates[b])
            )
              for (; b >= 0 && a < this.dates[b]; )
                this.pickers[b--].setUTCDate(a);
            else if (a > this.dates[c])
              for (; c < g && a > this.dates[c]; )
                this.pickers[c++].setUTCDate(a);
            this.updateDates(), delete this.updating;
          }
        }
      }
    },
    destroy: function () {
      $.map(this.pickers, function (a) {
        a.destroy();
      }),
        $(this.inputs).off("changeDate", this.dateUpdated),
        delete this.element.data().datepicker;
    },
    remove: b(
      "destroy",
      "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"
    ),
  };
  var m = $.fn.bootstrapDatepicker,
    g = function (b) {
      var a,
        e = Array.apply(null, arguments);
      if (
        (e.shift(),
        this.each(function () {
          var i = $(this),
            g = i.data("datepicker"),
            j = "object" == typeof b && b;
          if (!g) {
            var k = (function (e, a) {
                var c = $(e).data(),
                  d = {},
                  f = new RegExp("^" + a.toLowerCase() + "([A-Z])");
                function g(_, a) {
                  return a.toLowerCase();
                }
                for (var b in ((a = new RegExp("^" + a.toLowerCase())), c))
                  a.test(b) && (d[b.replace(f, g)] = c[b]);
                return d;
              })(this, "date"),
              l = (function (a) {
                var b = {};
                if (o[a] || o[(a = a.split("-")[0])]) {
                  var c = o[a];
                  return (
                    $.each(n, function (d, a) {
                      a in c && (b[a] = c[a]);
                    }),
                    b
                  );
                }
              })($.extend({}, d, k, j).language),
              h = $.extend({}, d, l, k, j);
            i.hasClass("input-daterange") || h.inputs
              ? ($.extend(h, { inputs: h.inputs || i.find("input").toArray() }),
                (g = new f(this, h)))
              : (g = new c(this, h)),
              i.data("datepicker", g);
          }
          "string" == typeof b &&
            "function" == typeof g[b] &&
            (a = g[b].apply(g, e));
        }),
        a === h || a instanceof c || a instanceof f)
      )
        return this;
      if (!(this.length > 1)) return a;
      throw new Error(
        "Using only allowed for the collection of a single element (" +
          b +
          " function)"
      );
    };
  $.fn.bootstrapDatepicker = g;
  var d = ($.fn.bootstrapDatepicker.defaults = {
      assumeNearbyYear: !1,
      autoclose: !1,
      beforeShowDay: $.noop,
      beforeShowMonth: $.noop,
      beforeShowYear: $.noop,
      beforeShowDecade: $.noop,
      beforeShowCentury: $.noop,
      calendarWeeks: !1,
      clearBtn: !1,
      toggleActive: !1,
      daysOfWeekDisabled: [],
      daysOfWeekHighlighted: [],
      datesDisabled: [],
      endDate: 1 / 0,
      forceParse: !0,
      format: "mm/dd/yyyy",
      keepEmptyValues: !1,
      keyboardNavigation: !0,
      language: "en",
      minViewMode: 0,
      maxViewMode: 4,
      multidate: !1,
      multidateSeparator: ",",
      orientation: "auto",
      rtl: !1,
      startDate: -1 / 0,
      startView: 0,
      todayBtn: !1,
      todayHighlight: !1,
      updateViewDate: !0,
      weekStart: 0,
      disableTouchKeyboard: !1,
      enableOnReadonly: !0,
      showOnFocus: !0,
      zIndexOffset: 10,
      container: "body",
      immediateUpdates: !1,
      title: "",
      templates: { leftArrow: "&#x00AB;", rightArrow: "&#x00BB;" },
      showWeekDays: !0,
    }),
    n = ($.fn.bootstrapDatepicker.locale_opts = ["format", "rtl", "weekStart"]);
  $.fn.bootstrapDatepicker.Constructor = c;
  var o = ($.fn.bootstrapDatepicker.dates = {
      en: {
        days: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        monthsShort: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        today: "Today",
        clear: "Clear",
        titleFormat: "MM yyyy",
      },
    }),
    a = {
      viewModes: [
        { names: ["days", "month"], clsName: "days", e: "changeMonth" },
        {
          names: ["months", "year"],
          clsName: "months",
          e: "changeYear",
          navStep: 1,
        },
        {
          names: ["years", "decade"],
          clsName: "years",
          e: "changeDecade",
          navStep: 10,
        },
        {
          names: ["decades", "century"],
          clsName: "decades",
          e: "changeCentury",
          navStep: 100,
        },
        {
          names: ["centuries", "millennium"],
          clsName: "centuries",
          e: "changeMillennium",
          navStep: 1e3,
        },
      ],
      validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
      nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
      parseFormat: function (a) {
        if ("function" == typeof a.toValue && "function" == typeof a.toDisplay)
          return a;
        var b = a.replace(this.validParts, "\0").split("\0"),
          c = a.match(this.validParts);
        if (!b || !b.length || !c || 0 === c.length)
          throw new Error("Invalid date format.");
        return { separators: b, parts: c };
      },
      parseDate: function (b, f, i, x) {
        if (b) {
          if (b instanceof Date) return b;
          if (("string" == typeof f && (f = a.parseFormat(f)), f.toValue))
            return f.toValue(b, f, i);
          var r,
            m,
            n,
            g,
            k,
            s,
            d,
            t,
            w = { d: "moveDay", m: "moveMonth", w: "moveWeek", y: "moveYear" },
            u = { yesterday: "-1d", today: "+0d", tomorrow: "+1d" };
          if (
            (b in u && (b = u[b]),
            /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(b))
          ) {
            for (
              d = 0, g = b.match(/([\-+]\d+)([dmwy])/gi), b = new Date();
              d < g.length;
              d++
            )
              (s = Number((k = g[d].match(/([\-+]\d+)([dmwy])/i))[1])),
                (t = w[k[2].toLowerCase()]),
                (b = c.prototype[t](b, s));
            return c.prototype._zero_utc_time(b);
          }
          g = (b && b.match(this.nonpunctuation)) || [];
          var l,
            p,
            q = {},
            v = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
            e = {
              yyyy: function (b, a) {
                return b.setUTCFullYear(x ? y(a, x) : a);
              },
              m: function (a, b) {
                if (isNaN(a)) return a;
                for (b -= 1; b < 0; ) b += 12;
                for (b %= 12, a.setUTCMonth(b); a.getUTCMonth() !== b; )
                  a.setUTCDate(a.getUTCDate() - 1);
                return a;
              },
              d: function (a, b) {
                return a.setUTCDate(b);
              },
            };
          (e.yy = e.yyyy), (e.M = e.MM = e.mm = e.m), (e.dd = e.d), (b = j());
          var h = f.parts.slice();
          if (
            (g.length !== h.length &&
              (h = $(h)
                .filter(function (b, a) {
                  return -1 !== $.inArray(a, v);
                })
                .toArray()),
            g.length === h.length)
          ) {
            for (d = 0, r = h.length; d < r; d++) {
              if (((l = parseInt(g[d], 10)), (k = h[d]), isNaN(l)))
                switch (k) {
                  case "MM":
                    (p = $(o[i].months).filter(z)),
                      (l = $.inArray(p[0], o[i].months) + 1);
                    break;
                  case "M":
                    (p = $(o[i].monthsShort).filter(z)),
                      (l = $.inArray(p[0], o[i].monthsShort) + 1);
                }
              q[k] = l;
            }
            for (d = 0; d < v.length; d++)
              (n = v[d]) in q &&
                !isNaN(q[n]) &&
                ((m = new Date(b)), e[n](m, q[n]), isNaN(m) || (b = m));
          }
          return b;
        }
        function y(a, b) {
          return (
            !0 === b && (b = 10),
            a < 100 && (a += 2e3) > new Date().getFullYear() + b && (a -= 100),
            a
          );
        }
        function z() {
          var a = this.slice(0, g[d].length),
            b = g[d].slice(0, a.length);
          return a.toLowerCase() === b.toLowerCase();
        }
      },
      formatDate: function (b, c, e) {
        if (!b) return "";
        if (("string" == typeof c && (c = a.parseFormat(c)), c.toDisplay))
          return c.toDisplay(b, c, e);
        var d = {
          d: b.getUTCDate(),
          D: o[e].daysShort[b.getUTCDay()],
          DD: o[e].days[b.getUTCDay()],
          m: b.getUTCMonth() + 1,
          M: o[e].monthsShort[b.getUTCMonth()],
          MM: o[e].months[b.getUTCMonth()],
          yy: b.getUTCFullYear().toString().substring(2),
          yyyy: b.getUTCFullYear(),
        };
        (d.dd = (d.d < 10 ? "0" : "") + d.d),
          (d.mm = (d.m < 10 ? "0" : "") + d.m),
          (b = []);
        for (
          var g = $.extend([], c.separators), f = 0, h = c.parts.length;
          f <= h;
          f++
        )
          g.length && b.push(g.shift()), b.push(d[c.parts[f]]);
        return b.join("");
      },
      headTemplate:
        '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' +
        d.templates.leftArrow +
        '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' +
        d.templates.rightArrow +
        "</th></tr></thead>",
      contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
      footTemplate:
        '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>',
    };
  (a.template =
    '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' +
    a.headTemplate +
    "<tbody></tbody>" +
    a.footTemplate +
    '</table></div><div class="datepicker-months"><table class="table-condensed">' +
    a.headTemplate +
    a.contTemplate +
    a.footTemplate +
    '</table></div><div class="datepicker-years"><table class="table-condensed">' +
    a.headTemplate +
    a.contTemplate +
    a.footTemplate +
    '</table></div><div class="datepicker-decades"><table class="table-condensed">' +
    a.headTemplate +
    a.contTemplate +
    a.footTemplate +
    '</table></div><div class="datepicker-centuries"><table class="table-condensed">' +
    a.headTemplate +
    a.contTemplate +
    a.footTemplate +
    "</table></div></div>"),
    ($.fn.bootstrapDatepicker.DPGlobal = a),
    ($.fn.bootstrapDatepicker.noConflict = function () {
      return ($.fn.bootstrapDatepicker = m), this;
    }),
    ($.fn.bootstrapDatepicker.version = "1.7.0"),
    ($.fn.bootstrapDatepicker.deprecated = function (b) {
      var a = window.console;
      a && a.warn && a.warn("DEPRECATED: " + b);
    }),
    $(document).on(
      "focus.datepicker.data-api click.datepicker.data-api",
      '[data-provide="datepicker"]',
      function (b) {
        var a = $(this);
        a.data("datepicker") || (b.preventDefault(), g.call(a, "show"));
      }
    ),
    $(function () {
      g.call($('[data-provide="datepicker-inline"]'));
    });
});
/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

(tribe.events = tribe.events || {}),
  (tribe.events.views = tribe.events.views || {}),
  (tribe.events.views.viewport = {}),
  (function ($, obj) {
    "use strict";
    var $window = $(window),
      $document = $(document);
    (obj.options = {
      MOBILE_BREAKPOINT:
        tribe.events.views.breakpoints.breakpoints.medium || 768,
    }),
      (obj.setViewport = function ($container) {
        var state = $container.data("tribeEventsState");
        state || (state = {}),
          (state.isMobile =
            $container.outerWidth() < obj.options.MOBILE_BREAKPOINT),
          $container.data("tribeEventsState", state);
      }),
      (obj.handleResize = function (event) {
        var $container = event.data.container;
        obj.setViewport($container), $container.trigger("resize.tribeEvents");
      }),
      (obj.unbindEvents = function ($container) {
        $window.off("resize", obj.handleResize);
      }),
      (obj.bindEvents = function ($container) {
        $window.on("resize", { container: $container }, obj.handleResize);
      }),
      (obj.deinit = function (event, jqXHR, settings) {
        var $container = event.data.container;
        obj.unbindEvents($container),
          $container.off("beforeAjaxSuccess.tribeEvents", obj.deinit);
      }),
      (obj.init = function (event, index, $container, data) {
        obj.bindEvents($container),
          obj.setViewport($container),
          $container.on(
            "beforeAjaxSuccess.tribeEvents",
            { container: $container },
            obj.deinit
          );
      }),
      (obj.ready = function () {
        $document.on(
          "afterSetup.tribeEvents",
          tribe.events.views.manager.selectors.container,
          obj.init
        );
      }),
      $(obj.ready);
  })(jQuery, tribe.events.views.viewport);
/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

(tribe.events = tribe.events || {}),
  (tribe.events.views = tribe.events.views || {}),
  (tribe.events.views.accordion = {}),
  (function ($, obj) {
    "use strict";
    var $document = $(document);
    (obj.selectors = {
      accordionTrigger: '[data-js~="tribe-events-accordion-trigger"]',
    }),
      (obj.setOpenAccordionA11yAttrs = function ($header, $content) {
        $header.attr("aria-expanded", "true"),
          $content.attr("aria-hidden", "false");
      }),
      (obj.setCloseAccordionA11yAttrs = function ($header, $content) {
        $header.attr("aria-expanded", "false"),
          $content.attr("aria-hidden", "true");
      }),
      (obj.closeAllAccordions = function ($container) {
        $container
          .find(obj.selectors.accordionTrigger)
          .each(function (index, header) {
            var $header = $(header),
              contentId = $header.attr("aria-controls"),
              $content = $document.find("#" + contentId);
            obj.closeAccordion($header, $content);
          });
      }),
      (obj.openAccordion = function ($header, $content) {
        obj.setOpenAccordionA11yAttrs($header, $content),
          $content.css("display", "block");
      }),
      (obj.closeAccordion = function ($header, $content) {
        obj.setCloseAccordionA11yAttrs($header, $content),
          $content.css("display", "");
      }),
      (obj.toggleAccordion = function (event) {
        var $container = event.data.container,
          $header = $(event.data.target),
          contentId = $header.attr("aria-controls"),
          $content = $container.find("#" + contentId);
        "true" === $header.attr("aria-expanded")
          ? obj.closeAccordion($header, $content)
          : obj.openAccordion($header, $content);
      }),
      (obj.deinitAccordionA11yAttrs = function ($header, $content) {
        $header.removeAttr("aria-expanded").removeAttr("aria-controls"),
          $content.removeAttr("aria-hidden");
      }),
      (obj.initAccordionA11yAttrs = function ($header, $content) {
        $header
          .attr("aria-expanded", "false")
          .attr("aria-controls", $content.attr("id")),
          $content.attr("aria-hidden", "true");
      }),
      (obj.deinitAccordion = function (index, header) {
        $(header).off("click", obj.toggleAccordion);
      }),
      (obj.initAccordion = function ($container) {
        return function (index, header) {
          $(header).on(
            "click",
            { target: header, container: $container },
            obj.toggleAccordion
          );
        };
      }),
      (obj.unbindAccordionEvents = function ($container) {
        $container
          .find(obj.selectors.accordionTrigger)
          .each(obj.deinitAccordion);
      }),
      (obj.bindAccordionEvents = function ($container) {
        $container
          .find(obj.selectors.accordionTrigger)
          .each(obj.initAccordion($container));
      }),
      (obj.unbindEvents = function (event, jqXHR, settings) {
        var $container = event.data.container;
        obj.unbindAccordionEvents($container),
          $container.off("beforeAjaxSuccess.tribeEvents", obj.unbindEvents);
      }),
      (obj.bindEvents = function (event, index, $container, data) {
        obj.bindAccordionEvents($container),
          $container.on(
            "beforeAjaxSuccess.tribeEvents",
            { container: $container },
            obj.unbindEvents
          );
      }),
      (obj.ready = function () {
        tribe.events.views.manager &&
          $document.on(
            "afterSetup.tribeEvents",
            tribe.events.views.manager.selectors.container,
            obj.bindEvents
          );
      }),
      $(obj.ready);
  })(jQuery, tribe.events.views.accordion);
/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

(tribe.events = tribe.events || {}),
  (tribe.events.views = tribe.events.views || {}),
  (tribe.events.views.viewSelector = {}),
  (function ($, obj) {
    "use strict";
    var $document = $(document);
    (obj.selectors = {
      viewSelector: '[data-js="tribe-events-view-selector"]',
      viewSelectorTabsClass: ".tribe-events-c-view-selector--tabs",
      viewSelectorButton: '[data-js="tribe-events-view-selector-button"]',
      viewSelectorButtonActiveClass:
        ".tribe-events-c-view-selector__button--active",
      viewSelectorListContainer:
        '[data-js="tribe-events-view-selector-list-container"]',
    }),
      (obj.deinitAccordion = function ($header, $content) {
        tribe.events.views.accordion.deinitAccordion(0, $header),
          tribe.events.views.accordion.deinitAccordionA11yAttrs(
            $header,
            $content
          ),
          $content.css("display", "");
      }),
      (obj.initAccordion = function ($container, $header, $content) {
        tribe.events.views.accordion.initAccordion($container)(0, $header),
          tribe.events.views.accordion.initAccordionA11yAttrs(
            $header,
            $content
          );
      }),
      (obj.deinitViewSelectorAccordion = function ($container) {
        var $viewSelectorButton = $container.find(
            obj.selectors.viewSelectorButton
          ),
          $viewSelectorListContainer = $container.find(
            obj.selectors.viewSelectorListContainer
          );
        obj.deinitAccordion($viewSelectorButton, $viewSelectorListContainer),
          $viewSelectorButton.removeClass(
            obj.selectors.viewSelectorButtonActiveClass.className()
          );
      }),
      (obj.initViewSelectorAccordion = function ($container) {
        var $viewSelectorButton = $container.find(
            obj.selectors.viewSelectorButton
          ),
          $viewSelectorListContainer = $container.find(
            obj.selectors.viewSelectorListContainer
          );
        obj.initAccordion(
          $container,
          $viewSelectorButton,
          $viewSelectorListContainer
        );
      }),
      (obj.initState = function ($container) {
        $container
          .find(obj.selectors.viewSelector)
          .data("tribeEventsState", {
            mobileInitialized: !1,
            desktopInitialized: !1,
          });
      }),
      (obj.deinitViewSelector = function ($container) {
        obj.deinitViewSelectorAccordion($container);
      }),
      (obj.initViewSelector = function ($container) {
        var $viewSelector = $container.find(obj.selectors.viewSelector);
        if ($viewSelector.length) {
          var state = $viewSelector.data("tribeEventsState");
          if (
            $viewSelector.hasClass(
              obj.selectors.viewSelectorTabsClass.className()
            )
          ) {
            var isMobile = $container.data("tribeEventsState").isMobile;
            isMobile && !state.mobileInitialized
              ? (obj.initViewSelectorAccordion($container),
                (state.desktopInitialized = !1),
                (state.mobileInitialized = !0),
                $viewSelector.data("tribeEventsState", state))
              : isMobile ||
                state.desktopInitialized ||
                (obj.deinitViewSelectorAccordion($container),
                (state.mobileInitialized = !1),
                (state.desktopInitialized = !0),
                $viewSelector.data("tribeEventsState", state));
          } else
            state.mobileInitialized ||
              state.desktopInitialized ||
              (obj.initViewSelectorAccordion($container),
              (state.desktopInitialized = !0),
              (state.mobileInitialized = !0),
              $viewSelector.data("tribeEventsState", state));
        }
      }),
      (obj.handleViewSelectorButtonClick = function (event) {
        event.data.target.toggleClass(
          obj.selectors.viewSelectorButtonActiveClass.className()
        );
      }),
      (obj.handleClick = function (event) {
        if (
          !Boolean($(event.target).closest(obj.selectors.viewSelector).length)
        ) {
          var $viewSelector = event.data.container.find(
              obj.selectors.viewSelector
            ),
            $viewSelectorButton = $viewSelector.find(
              obj.selectors.viewSelectorButton
            );
          if (
            $viewSelectorButton.hasClass(
              obj.selectors.viewSelectorButtonActiveClass.className()
            )
          ) {
            var $viewSelectorListContainer = $viewSelector.find(
              obj.selectors.viewSelectorListContainer
            );
            $viewSelectorButton.removeClass(
              obj.selectors.viewSelectorButtonActiveClass.className()
            ),
              tribe.events.views.accordion.closeAccordion(
                $viewSelectorButton,
                $viewSelectorListContainer
              );
          }
        }
      }),
      (obj.handleResize = function (event) {
        obj.initViewSelector(event.data.container);
      }),
      (obj.unbindEvents = function ($container) {
        $document.off("click", obj.handleClick),
          $container
            .off("resize.tribeEvents", obj.handleResize)
            .find(obj.selectors.viewSelectorButton)
            .off("click", obj.handleViewSelectorButtonClick);
      }),
      (obj.bindEvents = function ($container) {
        var $viewSelectorButton = $container.find(
          obj.selectors.viewSelectorButton
        );
        $document.on("click", { container: $container }, obj.handleClick),
          $container.on(
            "resize.tribeEvents",
            { container: $container },
            obj.handleResize
          ),
          $viewSelectorButton.on(
            "click",
            { target: $viewSelectorButton },
            obj.handleViewSelectorButtonClick
          );
      }),
      (obj.deinit = function (event, jqXHR, settings) {
        var $container = event.data.container;
        obj.deinitViewSelector($container),
          obj.unbindEvents($container),
          $container.off("beforeAjaxSuccess.tribeEvents", obj.deinit);
      }),
      (obj.init = function (event, index, $container, data) {
        $container.find(obj.selectors.viewSelector).length &&
          (obj.initState($container),
          obj.initViewSelector($container),
          obj.bindEvents($container),
          $container.on(
            "beforeAjaxSuccess.tribeEvents",
            { container: $container },
            obj.deinit
          ));
      }),
      (obj.ready = function () {
        $document.on(
          "afterSetup.tribeEvents",
          tribe.events.views.manager.selectors.container,
          obj.init
        );
      }),
      $(obj.ready);
  })(jQuery, tribe.events.views.viewSelector);
/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

(tribe.events = tribe.events || {}),
  (tribe.events.views = tribe.events.views || {}),
  (tribe.events.views.icalLinks = {}),
  (function ($, obj) {
    "use strict";
    (obj.selectors = {
      icalLinks: ".tribe-events-c-subscribe-dropdown",
      icalLinksButton: ".tribe-events-c-subscribe-dropdown__button",
      icalLinksButtonText: ".tribe-events-c-subscribe-dropdown__button-text",
      icalLinksButtonActiveClass:
        "tribe-events-c-subscribe-dropdown__button--active",
      icalLinksListContainer: ".tribe-events-c-subscribe-dropdown__content",
      icalLinksListContainerShow:
        "tribe-events-c-subscribe-dropdown__content--show",
      icalLinksIcon: ".tribe-events-c-subscribe-dropdown__button-icon",
      icalLinksIconRotate:
        "tribe-events-c-subscribe-dropdown__button-icon--rotate",
    }),
      (obj.handleIcalLinksButtonClick = function (event) {
        event.stopPropagation();
        var $button = $(event.target).closest(obj.selectors.icalLinksButton),
          $content = $button.siblings(obj.selectors.icalLinksListContainer),
          $icon = $button.find(obj.selectors.icalLinksIcon);
        obj.handleAccordionToggle(event),
          $(obj.selectors.icalLinksListContainer).not($content).hide(),
          $(obj.selectors.icalLinksIcon)
            .not($icon)
            .removeClass(obj.selectors.icalLinksIconRotate),
          $icon.toggleClass(obj.selectors.icalLinksIconRotate),
          $content.toggle();
      }),
      (obj.handleAccordionToggle = function (event) {
        var $button = $(event.target).closest(obj.selectors.icalLinksButton),
          $buttonText = $button.find(obj.selectors.icalLinksButtonText);
        $button &&
          $buttonText &&
          obj.handleToggleAccordionExpanded($buttonText);
      }),
      (obj.handleToggleAccordionExpanded = function ($ele) {
        "true" === $ele.attr("aria-expanded")
          ? ($ele.attr("aria-expanded", !1),
            $(obj.selectors.icalLinksIcon).removeClass(
              obj.selectors.icalLinksIconRotate
            ))
          : ($ele.attr("aria-expanded", !0),
            $(obj.selectors.icalLinksIcon).addClass(
              obj.selectors.icalLinksIconRotate
            ));
      }),
      (obj.resetAccordions = function () {
        $(obj.selectors.icalLinksListContainer).hide(),
          $(obj.selectors.icalLinksButtonText).attr("aria-expanded", !1),
          $(obj.selectors.icalLinksIcon).removeClass(
            obj.selectors.icalLinksIconRotate
          );
      }),
      (obj.handleClickOutside = function (event) {
        $(event.target).closest(obj.selectors.icalLinks).length ||
          obj.resetAccordions();
      }),
      (obj.bindEvents = function ($container) {
        $(document).on(
          "click",
          obj.selectors.icalLinksButton,
          obj.handleIcalLinksButtonClick
        ),
          $(document).on("click, focusin", obj.handleClickOutside);
      }),
      (obj.unbindEvents = function ($container) {
        $container
          .find(obj.selectors.icalLinksButton)
          .off("click", obj.handleIcalLinksButtonClick),
          $(document).off("click", obj.handleClickOutside);
      }),
      (obj.deinit = function (event, jqXHR, settings) {
        var $container = event.data.container;
        obj.unbindEvents($container),
          $container.off("beforeAjaxSuccess.tribeEvents", obj.deinit);
      }),
      (obj.init = function (event, index, $container, data) {
        $container.find(obj.selectors.icalLinks).length &&
          (obj.bindEvents($container),
          $container.on(
            "beforeAjaxSuccess.tribeEvents",
            { container: $container },
            obj.deinit
          ));
      }),
      $(document).ready(function () {
        obj.init(null, 0, $("body"), {});
      }),
      $(obj.ready);
  })(jQuery, tribe.events.views.icalLinks);
/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

(tribe.events = tribe.events || {}),
  (tribe.events.views = tribe.events.views || {}),
  (tribe.events.views.navigationScroll = {}),
  (function ($, obj) {
    "use strict";
    var $document = $(document),
      $window = $(window);
    (obj.scrollUp = function (event, html, textStatus, qXHR) {
      var $container = $(event.target),
        windowTop = $window.scrollTop(),
        containerOffset = $container.offset();
      0.75 * windowTop > containerOffset.top &&
        $window.scrollTop(containerOffset.top);
    }),
      (obj.ready = function () {
        $document.on(
          "afterAjaxSuccess.tribeEvents",
          tribe.events.views.manager.selectors.container,
          obj.scrollUp
        );
      }),
      $(obj.ready);
  })(jQuery, tribe.events.views.navigationScroll);
/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

(tribe.events = tribe.events || {}),
  (tribe.events.views = tribe.events.views || {}),
  (tribe.events.views.multidayEvents = {}),
  (function ($, obj) {
    "use strict";
    var $document = $(document);
    (obj.selectors = {}),
      (obj.selectorPrefixes = { month: ".tribe-events-calendar-month__" }),
      (obj.selectorSuffixes = {
        multidayEvent: "multiday-event",
        hiddenMultidayEvent: "multiday-event-hidden",
        multidayEventBarInner: "multiday-event-bar-inner",
        multidayEventBarInnerFocus: "multiday-event-bar-inner--focus",
        multidayEventBarInnerHover: "multiday-event-bar-inner--hover",
      }),
      (obj.findVisibleMultidayEvents = function (
        $container,
        $hiddenMultidayEvent
      ) {
        var eventId = $hiddenMultidayEvent
          .closest(obj.selectors.multidayEvent)
          .data("event-id");
        return $container.find(
          obj.selectors.multidayEvent + "[data-event-id=" + eventId + "]"
        );
      }),
      (obj.toggleHoverClass = function (event) {
        event.data.target.toggleClass(
          obj.selectors.multidayEventBarInnerHover.className()
        );
      }),
      (obj.toggleFocusClass = function (event) {
        event.data.target.toggleClass(
          obj.selectors.multidayEventBarInnerFocus.className()
        );
      }),
      (obj.unbindMultidayEvents = function ($container) {
        $container
          .find(obj.selectors.hiddenMultidayEvent)
          .each(function (hiddenIndex, hiddenMultidayEvent) {
            $(hiddenMultidayEvent).off();
          });
      }),
      (obj.bindMultidayEvents = function ($container) {
        $container
          .find(obj.selectors.hiddenMultidayEvent)
          .each(function (hiddenIndex, hiddenMultidayEvent) {
            var $hiddenMultidayEvent = $(hiddenMultidayEvent);
            obj
              .findVisibleMultidayEvents($container, $hiddenMultidayEvent)
              .each(function (visibleIndex, visibleMultidayEvent) {
                var $visiblemultidayEventBarInner = $(
                  visibleMultidayEvent
                ).find(obj.selectors.multidayEventBarInner);
                $hiddenMultidayEvent
                  .on(
                    "mouseenter mouseleave",
                    { target: $visiblemultidayEventBarInner },
                    obj.toggleHoverClass
                  )
                  .on(
                    "focus blur",
                    { target: $visiblemultidayEventBarInner },
                    obj.toggleFocusClass
                  );
              });
          });
      }),
      (obj.deinitSelectors = function () {
        obj.selectors = {};
      }),
      (obj.initSelectors = function (viewSlug) {
        var selectorPrefix = obj.selectorPrefixes[viewSlug];
        Object.keys(obj.selectorSuffixes).forEach(function (key) {
          obj.selectors[key] = selectorPrefix + obj.selectorSuffixes[key];
        });
      }),
      (obj.unbindEvents = function (event, jqXHR, settings) {
        var $container = event.data.container;
        obj.deinitSelectors(),
          obj.unbindMultidayEvents($container),
          $container.off("beforeAjaxSuccess.tribeEvents", obj.unbindEvents);
      }),
      (obj.bindEvents = function ($container, data) {
        var viewSlug = data.slug;
        -1 !==
          $container
            .data("tribeEventsMultidayEventsAllowedViews")
            .indexOf(viewSlug) &&
          (obj.initSelectors(viewSlug),
          obj.bindMultidayEvents($container),
          $container.on(
            "beforeAjaxSuccess.tribeEvents",
            { container: $container },
            obj.unbindEvents
          ));
      }),
      (obj.initAllowedViews = function ($container) {
        $container.trigger("beforeMultidayEventsInitAllowedViews.tribeEvents", [
          $container,
        ]);
        $container.data("tribeEventsMultidayEventsAllowedViews", ["month"]),
          $container.trigger(
            "afterMultidayEventsInitAllowedViews.tribeEvents",
            [$container]
          );
      }),
      (obj.init = function (event, index, $container, data) {
        obj.initAllowedViews($container), obj.bindEvents($container, data);
      }),
      (obj.ready = function () {
        $document.on(
          "afterSetup.tribeEvents",
          tribe.events.views.manager.selectors.container,
          obj.init
        );
      }),
      $(obj.ready);
  })(jQuery, tribe.events.views.multidayEvents);
/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

(tribe.events = tribe.events || {}),
  (tribe.events.views = tribe.events.views || {}),
  (tribe.events.views.monthMobileEvents = {}),
  (function ($, obj) {
    "use strict";
    var $document = $(document);
    (obj.selectors = {
      calendar: '[data-js="tribe-events-month-grid"]',
      calendarDay: '[data-js="tribe-events-calendar-month-day-cell-mobile"]',
      calendarDaySelectedClass:
        ".tribe-events-calendar-month__day-cell--selected",
      mobileEvents: '[data-js="tribe-events-calendar-month-mobile-events"]',
      mobileEventsMobileDayShowClass:
        ".tribe-events-calendar-month-mobile-events__mobile-day--show",
      mobileEventsDefaultNotices:
        ".tribe-events-header__messages--mobile:not(.tribe-events-header__messages--day)",
    }),
      (obj.closeAllEvents = function ($container) {
        $container
          .find(obj.selectors.calendarDay)
          .each(function (index, header) {
            var $header = $(header),
              contentId = $header.attr("aria-controls"),
              $content = $("");
            contentId &&
              (($content = $container.find("#" + contentId)),
              tribe.events.views.accordion.closeAccordion($header, $content)),
              obj.closeMobileEvents($header, $content);
          });
      }),
      (obj.handleMobileDayClick = function ($container, showDefaultNotices) {
        var $defaultNotices = $container.find(
            obj.selectors.mobileEventsDefaultNotices
          ),
          daySelected =
            $container.find(obj.selectors.mobileEventsMobileDayShowClass)
              .length > 0;
        showDefaultNotices && !daySelected
          ? $defaultNotices.removeClass("tribe-common-a11y-hidden")
          : $defaultNotices.addClass("tribe-common-a11y-hidden");
      }),
      (obj.openMobileEvents = function ($header, $content) {
        $header.attr("aria-controls") &&
          tribe.events.views.accordion.openAccordion($header, $content),
          $header.addClass(obj.selectors.calendarDaySelectedClass.className()),
          $content.addClass(
            obj.selectors.mobileEventsMobileDayShowClass.className()
          );
      }),
      (obj.closeMobileEvents = function ($header, $content) {
        $header.attr("aria-controls") &&
          tribe.events.views.accordion.closeAccordion($header, $content),
          $header.removeClass(
            obj.selectors.calendarDaySelectedClass.className()
          ),
          $content.removeClass(
            obj.selectors.mobileEventsMobileDayShowClass.className()
          );
      }),
      (obj.toggleMobileEvents = function (event) {
        var $container = event.data.container,
          $header = $(event.data.target),
          contentId = $header.attr("aria-controls"),
          $content = $("");
        contentId && ($content = $container.find("#" + contentId)),
          $header.hasClass(obj.selectors.calendarDaySelectedClass.className())
            ? (obj.closeMobileEvents($header, $content),
              obj.handleMobileDayClick($container, !0))
            : (obj.closeAllEvents($container),
              obj.handleMobileDayClick($container, !1),
              obj.openMobileEvents($header, $content));
      }),
      (obj.unbindCalendarEvents = function ($container) {
        $container
          .find(obj.selectors.calendar)
          .find(obj.selectors.calendarDay)
          .each(function (index, day) {
            $(day).off("click", obj.toggleMobileEvents);
          });
      }),
      (obj.bindCalendarEvents = function ($container) {
        var $calendar = $container.find(obj.selectors.calendar);
        $calendar.find(obj.selectors.calendarDay).each(function (index, day) {
          $(day).on(
            "click",
            { target: day, container: $container, calendar: $calendar },
            obj.toggleMobileEvents
          );
        });
      }),
      (obj.initState = function ($container) {
        var $mobileEvents = $container.find(obj.selectors.mobileEvents),
          state = {
            desktopInitialized: !$container.data("tribeEventsState").isMobile,
          };
        $mobileEvents.data("tribeEventsState", state);
      }),
      (obj.handleResize = function (event) {
        var $container = event.data.container,
          $mobileEvents = $container.find(obj.selectors.mobileEvents),
          state = $mobileEvents.data("tribeEventsState");
        $container.data("tribeEventsState").isMobile
          ? (obj.handleMobileDayClick($container, !0),
            state.desktopInitialized && (state.desktopInitialized = !1))
          : state.desktopInitialized ||
            (obj.closeAllEvents($container), (state.desktopInitialized = !0)),
          $mobileEvents.data("tribeEventsState", state);
      }),
      (obj.deinit = function (event, jqXHR, settings) {
        var $container = event.data.container;
        obj.unbindCalendarEvents($container),
          $container
            .off("resize.tribeEvents", obj.handleResize)
            .off("beforeAjaxSuccess.tribeEvents", obj.deinit);
      }),
      (obj.init = function (event, index, $container, data) {
        $container.find(obj.selectors.mobileEvents).length &&
          (obj.handleMobileDayClick($container, !0),
          obj.initState($container),
          obj.bindCalendarEvents($container),
          $container
            .on(
              "resize.tribeEvents",
              { container: $container },
              obj.handleResize
            )
            .on(
              "beforeAjaxSuccess.tribeEvents",
              { container: $container },
              obj.deinit
            ));
      }),
      (obj.ready = function () {
        $document.on(
          "afterSetup.tribeEvents",
          tribe.events.views.manager.selectors.container,
          obj.init
        );
      }),
      $(obj.ready);
  })(jQuery, tribe.events.views.monthMobileEvents);
/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

(tribe.events = tribe.events || {}),
  (tribe.events.views = tribe.events.views || {}),
  (tribe.events.views.monthGrid = {}),
  (function ($, obj) {
    "use strict";
    var $document = $(document);
    (obj.selectors = {
      grid: '[data-js="tribe-events-month-grid"]',
      row: '[data-js="tribe-events-month-grid-row"]',
      cell: '[data-js="tribe-events-month-grid-cell"]',
      focusable: "[tabindex]",
      focused: '[tabindex="0"]',
    }),
      (obj.keyCode = {
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
      }),
      (obj.isValidCell = function (grid, row, col) {
        return (
          !isNaN(row) &&
          !isNaN(col) &&
          row >= 0 &&
          col >= 0 &&
          grid &&
          grid.length &&
          row < grid.length &&
          col < grid[row].length
        );
      }),
      (obj.getNextCell = function (
        grid,
        currentRow,
        currentCol,
        directionX,
        directionY
      ) {
        var row = currentRow + directionY,
          col = currentCol + directionX;
        return obj.isValidCell(grid, row, col)
          ? { row: row, col: col }
          : { row: currentRow, col: currentCol };
      }),
      (obj.setFocusPointer = function ($grid, row, col) {
        var state = $grid.data("tribeEventsState");
        return (
          !!obj.isValidCell(state.grid, row, col) &&
          (state.grid[state.currentRow][state.currentCol].attr(
            "tabindex",
            "-1"
          ),
          state.grid[row][col].attr("tabindex", "0"),
          (state.currentRow = row),
          (state.currentCol = col),
          $grid.data("tribeEventsState", state),
          !0)
        );
      }),
      (obj.focusCell = function ($grid, row, col) {
        obj.setFocusPointer($grid, row, col) &&
          $grid.data("tribeEventsState").grid[row][col].focus();
      }),
      (obj.handleKeydown = function (event) {
        var nextCell,
          $grid = event.data.grid,
          state = $grid.data("tribeEventsState"),
          key = event.which || event.keyCode,
          row = state.currentRow,
          col = state.currentCol;
        switch (key) {
          case obj.keyCode.UP:
            (row = (nextCell = obj.getNextCell(state.grid, row, col, 0, -1))
              .row),
              (col = nextCell.col);
            break;
          case obj.keyCode.DOWN:
            (row = (nextCell = obj.getNextCell(state.grid, row, col, 0, 1))
              .row),
              (col = nextCell.col);
            break;
          case obj.keyCode.LEFT:
            (row = (nextCell = obj.getNextCell(state.grid, row, col, -1, 0))
              .row),
              (col = nextCell.col);
            break;
          case obj.keyCode.RIGHT:
            (row = (nextCell = obj.getNextCell(state.grid, row, col, 1, 0))
              .row),
              (col = nextCell.col);
            break;
          case obj.keyCode.HOME:
            event.ctrlKey && (row = 0), (col = 0);
            break;
          case obj.keyCode.END:
            event.ctrlKey && (row = state.grid.length - 1),
              (col = state.grid[state.currentRow].length - 1);
            break;
          default:
            return;
        }
        obj.focusCell($grid, row, col), event.preventDefault();
      }),
      (obj.handleClick = function (event) {
        for (
          var $grid = event.data.grid,
            state = $grid.data("tribeEventsState"),
            $clickedCell = $(event.target).closest(obj.selectors.focusable),
            row = 0;
          row < state.grid.length;
          row++
        )
          for (var col = 0; col < state.grid[row].length; col++)
            if (state.grid[row][col].is($clickedCell))
              return void obj.focusCell($grid, row, col);
      }),
      (obj.initState = function ($grid) {
        $grid.data("tribeEventsState", {
          grid: [],
          currentRow: 0,
          currentCol: 0,
        });
      }),
      (obj.setupGrid = function ($grid) {
        var state = $grid.data("tribeEventsState");
        $grid.find(obj.selectors.row).each(function (rowIndex, row) {
          var gridRow = [];
          $(row)
            .find(obj.selectors.cell)
            .each(function (colIndex, cell) {
              var $cell = $(cell);
              if ($cell.is(obj.selectors.focusable))
                $cell.is(obj.selectors.focused) &&
                  ((state.currentRow = state.grid.length),
                  (state.currentCol = gridRow.length)),
                  gridRow.push($cell);
              else {
                var $focusableCell = $cell.find(obj.selectors.focusable);
                $focusableCell.is(obj.selectors.focusable) &&
                  ($cell.is(obj.selectors.focused) &&
                    ((state.currentRow = state.grid.length),
                    (state.currentCol = gridRow.length)),
                  gridRow.push($focusableCell));
              }
            }),
            gridRow.length && state.grid.push(gridRow);
        }),
          $grid.data("tribeEventsState", state);
      }),
      (obj.unbindEvents = function ($grid) {
        $grid.off();
      }),
      (obj.bindEvents = function ($grid) {
        $grid
          .on("keydown", { grid: $grid }, obj.handleKeydown)
          .on("click", { grid: $grid }, obj.handleClick);
      }),
      (obj.deinit = function (event, jqXHR, settings) {
        var $container = event.data.container,
          $grid = $container.find(obj.selectors.grid);
        obj.unbindEvents($grid),
          $container.off("beforeAjaxSuccess.tribeEvents", obj.deinit);
      }),
      (obj.init = function (event, index, $container, data) {
        var $grid = $container.find(obj.selectors.grid);
        if ($grid.length) {
          obj.initState($grid), obj.setupGrid($grid);
          var state = $grid.data("tribeEventsState");
          obj.setFocusPointer($grid, state.currentRow, state.currentCol),
            obj.bindEvents($grid),
            $container.on(
              "beforeAjaxSuccess.tribeEvents",
              { container: $container },
              obj.deinit
            );
        }
      }),
      (obj.ready = function () {
        $document.on(
          "afterSetup.tribeEvents",
          tribe.events.views.manager.selectors.container,
          obj.init
        );
      }),
      $(obj.ready);
  })(jQuery, tribe.events.views.monthGrid);
/*! tooltipster v4.2.6 */ !(function (a, b) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (a) {
        return b(a);
      })
    : "object" == typeof exports
    ? (module.exports = b(require("jquery")))
    : b(jQuery);
})(this, function (a) {
  function b(a) {
    this.$container, (this.constraints = null), this.__$tooltip, this.__init(a);
  }
  function c(b, c) {
    var d = !0;
    return (
      a.each(b, function (a, e) {
        return void 0 === c[a] || b[a] !== c[a] ? ((d = !1), !1) : void 0;
      }),
      d
    );
  }
  function d(b) {
    var c = b.attr("id"),
      d = c ? h.window.document.getElementById(c) : null;
    return d ? d === b[0] : a.contains(h.window.document.body, b[0]);
  }
  function e() {
    if (!g) return !1;
    var a = g.document.body || g.document.documentElement,
      b = a.style,
      c = "transition",
      d = ["Moz", "Webkit", "Khtml", "O", "ms"];
    if ("string" == typeof b[c]) return !0;
    c = c.charAt(0).toUpperCase() + c.substr(1);
    for (var e = 0; e < d.length; e++)
      if ("string" == typeof b[d[e] + c]) return !0;
    return !1;
  }
  var f = {
      animation: "fade",
      animationDuration: 350,
      content: null,
      contentAsHTML: !1,
      contentCloning: !1,
      debug: !0,
      delay: 300,
      delayTouch: [300, 500],
      functionInit: null,
      functionBefore: null,
      functionReady: null,
      functionAfter: null,
      functionFormat: null,
      IEmin: 6,
      interactive: !1,
      multiple: !1,
      parent: null,
      plugins: ["sideTip"],
      repositionOnScroll: !1,
      restoration: "none",
      selfDestruction: !0,
      theme: [],
      timer: 0,
      trackerInterval: 500,
      trackOrigin: !1,
      trackTooltip: !1,
      trigger: "hover",
      triggerClose: {
        click: !1,
        mouseleave: !1,
        originClick: !1,
        scroll: !1,
        tap: !1,
        touchleave: !1,
      },
      triggerOpen: { click: !1, mouseenter: !1, tap: !1, touchstart: !1 },
      updateAnimation: "rotate",
      zIndex: 9999999,
    },
    g = "undefined" != typeof window ? window : null,
    h = {
      hasTouchCapability: !(
        !g ||
        !(
          "ontouchstart" in g ||
          (g.DocumentTouch && g.document instanceof g.DocumentTouch) ||
          g.navigator.maxTouchPoints
        )
      ),
      hasTransitions: e(),
      IE: !1,
      semVer: "4.2.6",
      window: g,
    },
    i = function () {
      (this.__$emitterPrivate = a({})),
        (this.__$emitterPublic = a({})),
        (this.__instancesLatestArr = []),
        (this.__plugins = {}),
        (this._env = h);
    };
  (i.prototype = {
    __bridge: function (b, c, d) {
      if (!c[d]) {
        var e = function () {};
        e.prototype = b;
        var g = new e();
        g.__init && g.__init(c),
          a.each(b, function (a, b) {
            0 != a.indexOf("__") &&
              (c[a]
                ? f.debug &&
                  console.log(
                    "The " +
                      a +
                      " method of the " +
                      d +
                      " plugin conflicts with another plugin or native methods"
                  )
                : ((c[a] = function () {
                    return g[a].apply(
                      g,
                      Array.prototype.slice.apply(arguments)
                    );
                  }),
                  (c[a].bridged = g)));
          }),
          (c[d] = g);
      }
      return this;
    },
    __setWindow: function (a) {
      return (h.window = a), this;
    },
    _getRuler: function (a) {
      return new b(a);
    },
    _off: function () {
      return (
        this.__$emitterPrivate.off.apply(
          this.__$emitterPrivate,
          Array.prototype.slice.apply(arguments)
        ),
        this
      );
    },
    _on: function () {
      return (
        this.__$emitterPrivate.on.apply(
          this.__$emitterPrivate,
          Array.prototype.slice.apply(arguments)
        ),
        this
      );
    },
    _one: function () {
      return (
        this.__$emitterPrivate.one.apply(
          this.__$emitterPrivate,
          Array.prototype.slice.apply(arguments)
        ),
        this
      );
    },
    _plugin: function (b) {
      var c = this;
      if ("string" == typeof b) {
        var d = b,
          e = null;
        return (
          d.indexOf(".") > 0
            ? (e = c.__plugins[d])
            : a.each(c.__plugins, function (a, b) {
                return b.name.substring(b.name.length - d.length - 1) == "." + d
                  ? ((e = b), !1)
                  : void 0;
              }),
          e
        );
      }
      if (b.name.indexOf(".") < 0)
        throw new Error("Plugins must be namespaced");
      return (
        (c.__plugins[b.name] = b), b.core && c.__bridge(b.core, c, b.name), this
      );
    },
    _trigger: function () {
      var a = Array.prototype.slice.apply(arguments);
      return (
        "string" == typeof a[0] && (a[0] = { type: a[0] }),
        this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, a),
        this.__$emitterPublic.trigger.apply(this.__$emitterPublic, a),
        this
      );
    },
    instances: function (b) {
      var c = [],
        d = b || ".tooltipstered";
      return (
        a(d).each(function () {
          var b = a(this),
            d = b.data("tooltipster-ns");
          d &&
            a.each(d, function (a, d) {
              c.push(b.data(d));
            });
        }),
        c
      );
    },
    instancesLatest: function () {
      return this.__instancesLatestArr;
    },
    off: function () {
      return (
        this.__$emitterPublic.off.apply(
          this.__$emitterPublic,
          Array.prototype.slice.apply(arguments)
        ),
        this
      );
    },
    on: function () {
      return (
        this.__$emitterPublic.on.apply(
          this.__$emitterPublic,
          Array.prototype.slice.apply(arguments)
        ),
        this
      );
    },
    one: function () {
      return (
        this.__$emitterPublic.one.apply(
          this.__$emitterPublic,
          Array.prototype.slice.apply(arguments)
        ),
        this
      );
    },
    origins: function (b) {
      var c = b ? b + " " : "";
      return a(c + ".tooltipstered").toArray();
    },
    setDefaults: function (b) {
      return a.extend(f, b), this;
    },
    triggerHandler: function () {
      return (
        this.__$emitterPublic.triggerHandler.apply(
          this.__$emitterPublic,
          Array.prototype.slice.apply(arguments)
        ),
        this
      );
    },
  }),
    (a.tooltipster = new i()),
    (a.Tooltipster = function (b, c) {
      (this.__callbacks = { close: [], open: [] }),
        this.__closingTime,
        this.__Content,
        this.__contentBcr,
        (this.__destroyed = !1),
        (this.__$emitterPrivate = a({})),
        (this.__$emitterPublic = a({})),
        (this.__enabled = !0),
        this.__garbageCollector,
        this.__Geometry,
        this.__lastPosition,
        (this.__namespace = "tooltipster-" + Math.round(1e6 * Math.random())),
        this.__options,
        this.__$originParents,
        (this.__pointerIsOverOrigin = !1),
        (this.__previousThemes = []),
        (this.__state = "closed"),
        (this.__timeouts = { close: [], open: null }),
        (this.__touchEvents = []),
        (this.__tracker = null),
        this._$origin,
        this._$tooltip,
        this.__init(b, c);
    }),
    (a.Tooltipster.prototype = {
      __init: function (b, c) {
        var d = this;
        if (
          ((d._$origin = a(b)),
          (d.__options = a.extend(!0, {}, f, c)),
          d.__optionsFormat(),
          !h.IE || h.IE >= d.__options.IEmin)
        ) {
          var e = null;
          if (
            (void 0 === d._$origin.data("tooltipster-initialTitle") &&
              ((e = d._$origin.attr("title")),
              void 0 === e && (e = null),
              d._$origin.data("tooltipster-initialTitle", e)),
            null !== d.__options.content)
          )
            d.__contentSet(d.__options.content);
          else {
            var g,
              i = d._$origin.attr("data-tooltip-content");
            i && (g = a(i)),
              g && g[0] ? d.__contentSet(g.first()) : d.__contentSet(e);
          }
          d._$origin.removeAttr("title").addClass("tooltipstered"),
            d.__prepareOrigin(),
            d.__prepareGC(),
            a.each(d.__options.plugins, function (a, b) {
              d._plug(b);
            }),
            h.hasTouchCapability &&
              a(h.window.document.body).on(
                "touchmove." + d.__namespace + "-triggerOpen",
                function (a) {
                  d._touchRecordEvent(a);
                }
              ),
            d
              ._on("created", function () {
                d.__prepareTooltip();
              })
              ._on("repositioned", function (a) {
                d.__lastPosition = a.position;
              });
        } else d.__options.disabled = !0;
      },
      __contentInsert: function () {
        var a = this,
          b = a._$tooltip.find(".tooltipster-content"),
          c = a.__Content,
          d = function (a) {
            c = a;
          };
        return (
          a._trigger({ type: "format", content: a.__Content, format: d }),
          a.__options.functionFormat &&
            (c = a.__options.functionFormat.call(
              a,
              a,
              { origin: a._$origin[0] },
              a.__Content
            )),
          "string" != typeof c || a.__options.contentAsHTML
            ? b.empty().append(c)
            : b.text(c),
          a
        );
      },
      __contentSet: function (b) {
        return (
          b instanceof a && this.__options.contentCloning && (b = b.clone(!0)),
          (this.__Content = b),
          this._trigger({ type: "updated", content: b }),
          this
        );
      },
      __destroyError: function () {
        throw new Error(
          "This tooltip has been destroyed and cannot execute your method call."
        );
      },
      __geometry: function () {
        var b = this,
          c = b._$origin,
          d = b._$origin.is("area");
        if (d) {
          var e = b._$origin.parent().attr("name");
          c = a('img[usemap="#' + e + '"]');
        }
        var f = c[0].getBoundingClientRect(),
          g = a(h.window.document),
          i = a(h.window),
          j = c,
          k = {
            available: { document: null, window: null },
            document: { size: { height: g.height(), width: g.width() } },
            window: {
              scroll: {
                left:
                  h.window.scrollX ||
                  h.window.document.documentElement.scrollLeft,
                top:
                  h.window.scrollY ||
                  h.window.document.documentElement.scrollTop,
              },
              size: { height: i.height(), width: i.width() },
            },
            origin: {
              fixedLineage: !1,
              offset: {},
              size: { height: f.bottom - f.top, width: f.right - f.left },
              usemapImage: d ? c[0] : null,
              windowOffset: {
                bottom: f.bottom,
                left: f.left,
                right: f.right,
                top: f.top,
              },
            },
          };
        if (d) {
          var l = b._$origin.attr("shape"),
            m = b._$origin.attr("coords");
          if (
            (m &&
              ((m = m.split(",")),
              a.map(m, function (a, b) {
                m[b] = parseInt(a);
              })),
            "default" != l)
          )
            switch (l) {
              case "circle":
                var n = m[0],
                  o = m[1],
                  p = m[2],
                  q = o - p,
                  r = n - p;
                (k.origin.size.height = 2 * p),
                  (k.origin.size.width = k.origin.size.height),
                  (k.origin.windowOffset.left += r),
                  (k.origin.windowOffset.top += q);
                break;
              case "rect":
                var s = m[0],
                  t = m[1],
                  u = m[2],
                  v = m[3];
                (k.origin.size.height = v - t),
                  (k.origin.size.width = u - s),
                  (k.origin.windowOffset.left += s),
                  (k.origin.windowOffset.top += t);
                break;
              case "poly":
                for (
                  var w = 0, x = 0, y = 0, z = 0, A = "even", B = 0;
                  B < m.length;
                  B++
                ) {
                  var C = m[B];
                  "even" == A
                    ? (C > y && ((y = C), 0 === B && (w = y)),
                      w > C && (w = C),
                      (A = "odd"))
                    : (C > z && ((z = C), 1 == B && (x = z)),
                      x > C && (x = C),
                      (A = "even"));
                }
                (k.origin.size.height = z - x),
                  (k.origin.size.width = y - w),
                  (k.origin.windowOffset.left += w),
                  (k.origin.windowOffset.top += x);
            }
        }
        var D = function (a) {
          (k.origin.size.height = a.height),
            (k.origin.windowOffset.left = a.left),
            (k.origin.windowOffset.top = a.top),
            (k.origin.size.width = a.width);
        };
        for (
          b._trigger({
            type: "geometry",
            edit: D,
            geometry: {
              height: k.origin.size.height,
              left: k.origin.windowOffset.left,
              top: k.origin.windowOffset.top,
              width: k.origin.size.width,
            },
          }),
            k.origin.windowOffset.right =
              k.origin.windowOffset.left + k.origin.size.width,
            k.origin.windowOffset.bottom =
              k.origin.windowOffset.top + k.origin.size.height,
            k.origin.offset.left =
              k.origin.windowOffset.left + k.window.scroll.left,
            k.origin.offset.top =
              k.origin.windowOffset.top + k.window.scroll.top,
            k.origin.offset.bottom = k.origin.offset.top + k.origin.size.height,
            k.origin.offset.right = k.origin.offset.left + k.origin.size.width,
            k.available.document = {
              bottom: {
                height: k.document.size.height - k.origin.offset.bottom,
                width: k.document.size.width,
              },
              left: {
                height: k.document.size.height,
                width: k.origin.offset.left,
              },
              right: {
                height: k.document.size.height,
                width: k.document.size.width - k.origin.offset.right,
              },
              top: {
                height: k.origin.offset.top,
                width: k.document.size.width,
              },
            },
            k.available.window = {
              bottom: {
                height: Math.max(
                  k.window.size.height -
                    Math.max(k.origin.windowOffset.bottom, 0),
                  0
                ),
                width: k.window.size.width,
              },
              left: {
                height: k.window.size.height,
                width: Math.max(k.origin.windowOffset.left, 0),
              },
              right: {
                height: k.window.size.height,
                width: Math.max(
                  k.window.size.width -
                    Math.max(k.origin.windowOffset.right, 0),
                  0
                ),
              },
              top: {
                height: Math.max(k.origin.windowOffset.top, 0),
                width: k.window.size.width,
              },
            };
          "html" != j[0].tagName.toLowerCase();

        ) {
          if ("fixed" == j.css("position")) {
            k.origin.fixedLineage = !0;
            break;
          }
          j = j.parent();
        }
        return k;
      },
      __optionsFormat: function () {
        return (
          "number" == typeof this.__options.animationDuration &&
            (this.__options.animationDuration = [
              this.__options.animationDuration,
              this.__options.animationDuration,
            ]),
          "number" == typeof this.__options.delay &&
            (this.__options.delay = [
              this.__options.delay,
              this.__options.delay,
            ]),
          "number" == typeof this.__options.delayTouch &&
            (this.__options.delayTouch = [
              this.__options.delayTouch,
              this.__options.delayTouch,
            ]),
          "string" == typeof this.__options.theme &&
            (this.__options.theme = [this.__options.theme]),
          null === this.__options.parent
            ? (this.__options.parent = a(h.window.document.body))
            : "string" == typeof this.__options.parent &&
              (this.__options.parent = a(this.__options.parent)),
          "hover" == this.__options.trigger
            ? ((this.__options.triggerOpen = {
                mouseenter: !0,
                touchstart: !0,
              }),
              (this.__options.triggerClose = {
                mouseleave: !0,
                originClick: !0,
                touchleave: !0,
              }))
            : "click" == this.__options.trigger &&
              ((this.__options.triggerOpen = { click: !0, tap: !0 }),
              (this.__options.triggerClose = { click: !0, tap: !0 })),
          this._trigger("options"),
          this
        );
      },
      __prepareGC: function () {
        var b = this;
        return (
          b.__options.selfDestruction
            ? (b.__garbageCollector = setInterval(function () {
                var c = new Date().getTime();
                (b.__touchEvents = a.grep(b.__touchEvents, function (a, b) {
                  return c - a.time > 6e4;
                })),
                  d(b._$origin) ||
                    b.close(function () {
                      b.destroy();
                    });
              }, 2e4))
            : clearInterval(b.__garbageCollector),
          b
        );
      },
      __prepareOrigin: function () {
        var a = this;
        if (
          (a._$origin.off("." + a.__namespace + "-triggerOpen"),
          h.hasTouchCapability &&
            a._$origin.on(
              "touchstart." +
                a.__namespace +
                "-triggerOpen touchend." +
                a.__namespace +
                "-triggerOpen touchcancel." +
                a.__namespace +
                "-triggerOpen",
              function (b) {
                a._touchRecordEvent(b);
              }
            ),
          a.__options.triggerOpen.click ||
            (a.__options.triggerOpen.tap && h.hasTouchCapability))
        ) {
          var b = "";
          a.__options.triggerOpen.click &&
            (b += "click." + a.__namespace + "-triggerOpen "),
            a.__options.triggerOpen.tap &&
              h.hasTouchCapability &&
              (b += "touchend." + a.__namespace + "-triggerOpen"),
            a._$origin.on(b, function (b) {
              a._touchIsMeaningfulEvent(b) && a._open(b);
            });
        }
        if (
          a.__options.triggerOpen.mouseenter ||
          (a.__options.triggerOpen.touchstart && h.hasTouchCapability)
        ) {
          var b = "";
          a.__options.triggerOpen.mouseenter &&
            (b += "mouseenter." + a.__namespace + "-triggerOpen "),
            a.__options.triggerOpen.touchstart &&
              h.hasTouchCapability &&
              (b += "touchstart." + a.__namespace + "-triggerOpen"),
            a._$origin.on(b, function (b) {
              (!a._touchIsTouchEvent(b) && a._touchIsEmulatedEvent(b)) ||
                ((a.__pointerIsOverOrigin = !0), a._openShortly(b));
            });
        }
        if (
          a.__options.triggerClose.mouseleave ||
          (a.__options.triggerClose.touchleave && h.hasTouchCapability)
        ) {
          var b = "";
          a.__options.triggerClose.mouseleave &&
            (b += "mouseleave." + a.__namespace + "-triggerOpen "),
            a.__options.triggerClose.touchleave &&
              h.hasTouchCapability &&
              (b +=
                "touchend." +
                a.__namespace +
                "-triggerOpen touchcancel." +
                a.__namespace +
                "-triggerOpen"),
            a._$origin.on(b, function (b) {
              a._touchIsMeaningfulEvent(b) && (a.__pointerIsOverOrigin = !1);
            });
        }
        return a;
      },
      __prepareTooltip: function () {
        var b = this,
          c = b.__options.interactive ? "auto" : "";
        return (
          b._$tooltip
            .attr("id", b.__namespace)
            .css({ "pointer-events": c, zIndex: b.__options.zIndex }),
          a.each(b.__previousThemes, function (a, c) {
            b._$tooltip.removeClass(c);
          }),
          a.each(b.__options.theme, function (a, c) {
            b._$tooltip.addClass(c);
          }),
          (b.__previousThemes = a.merge([], b.__options.theme)),
          b
        );
      },
      __scrollHandler: function (b) {
        var c = this;
        if (c.__options.triggerClose.scroll) c._close(b);
        else if (d(c._$origin) && d(c._$tooltip)) {
          var e = null;
          if (b.target === h.window.document)
            c.__Geometry.origin.fixedLineage ||
              (c.__options.repositionOnScroll && c.reposition(b));
          else {
            e = c.__geometry();
            var f = !1;
            if (
              ("fixed" != c._$origin.css("position") &&
                c.__$originParents.each(function (b, c) {
                  var d = a(c),
                    g = d.css("overflow-x"),
                    h = d.css("overflow-y");
                  if ("visible" != g || "visible" != h) {
                    var i = c.getBoundingClientRect();
                    if (
                      "visible" != g &&
                      (e.origin.windowOffset.left < i.left ||
                        e.origin.windowOffset.right > i.right)
                    )
                      return (f = !0), !1;
                    if (
                      "visible" != h &&
                      (e.origin.windowOffset.top < i.top ||
                        e.origin.windowOffset.bottom > i.bottom)
                    )
                      return (f = !0), !1;
                  }
                  return "fixed" == d.css("position") ? !1 : void 0;
                }),
              f)
            )
              c._$tooltip.css("visibility", "hidden");
            else if (
              (c._$tooltip.css("visibility", "visible"),
              c.__options.repositionOnScroll)
            )
              c.reposition(b);
            else {
              var g = e.origin.offset.left - c.__Geometry.origin.offset.left,
                i = e.origin.offset.top - c.__Geometry.origin.offset.top;
              c._$tooltip.css({
                left: c.__lastPosition.coord.left + g,
                top: c.__lastPosition.coord.top + i,
              });
            }
          }
          c._trigger({ type: "scroll", event: b, geo: e });
        }
        return c;
      },
      __stateSet: function (a) {
        return (
          (this.__state = a), this._trigger({ type: "state", state: a }), this
        );
      },
      __timeoutsClear: function () {
        return (
          clearTimeout(this.__timeouts.open),
          (this.__timeouts.open = null),
          a.each(this.__timeouts.close, function (a, b) {
            clearTimeout(b);
          }),
          (this.__timeouts.close = []),
          this
        );
      },
      __trackerStart: function () {
        var a = this,
          b = a._$tooltip.find(".tooltipster-content");
        return (
          a.__options.trackTooltip &&
            (a.__contentBcr = b[0].getBoundingClientRect()),
          (a.__tracker = setInterval(function () {
            if (d(a._$origin) && d(a._$tooltip)) {
              if (a.__options.trackOrigin) {
                var e = a.__geometry(),
                  f = !1;
                c(e.origin.size, a.__Geometry.origin.size) &&
                  (a.__Geometry.origin.fixedLineage
                    ? c(
                        e.origin.windowOffset,
                        a.__Geometry.origin.windowOffset
                      ) && (f = !0)
                    : c(e.origin.offset, a.__Geometry.origin.offset) &&
                      (f = !0)),
                  f ||
                    (a.__options.triggerClose.mouseleave
                      ? a._close()
                      : a.reposition());
              }
              if (a.__options.trackTooltip) {
                var g = b[0].getBoundingClientRect();
                (g.height === a.__contentBcr.height &&
                  g.width === a.__contentBcr.width) ||
                  (a.reposition(), (a.__contentBcr = g));
              }
            } else a._close();
          }, a.__options.trackerInterval)),
          a
        );
      },
      _close: function (b, c, d) {
        var e = this,
          f = !0;
        if (
          (e._trigger({
            type: "close",
            event: b,
            stop: function () {
              f = !1;
            },
          }),
          f || d)
        ) {
          c && e.__callbacks.close.push(c),
            (e.__callbacks.open = []),
            e.__timeoutsClear();
          var g = function () {
            a.each(e.__callbacks.close, function (a, c) {
              c.call(e, e, { event: b, origin: e._$origin[0] });
            }),
              (e.__callbacks.close = []);
          };
          if ("closed" != e.__state) {
            var i = !0,
              j = new Date(),
              k = j.getTime(),
              l = k + e.__options.animationDuration[1];
            if (
              ("disappearing" == e.__state &&
                l > e.__closingTime &&
                e.__options.animationDuration[1] > 0 &&
                (i = !1),
              i)
            ) {
              (e.__closingTime = l),
                "disappearing" != e.__state && e.__stateSet("disappearing");
              var m = function () {
                clearInterval(e.__tracker),
                  e._trigger({ type: "closing", event: b }),
                  e._$tooltip
                    .off("." + e.__namespace + "-triggerClose")
                    .removeClass("tooltipster-dying"),
                  a(h.window).off("." + e.__namespace + "-triggerClose"),
                  e.__$originParents.each(function (b, c) {
                    a(c).off("scroll." + e.__namespace + "-triggerClose");
                  }),
                  (e.__$originParents = null),
                  a(h.window.document.body).off(
                    "." + e.__namespace + "-triggerClose"
                  ),
                  e._$origin.off("." + e.__namespace + "-triggerClose"),
                  e._off("dismissable"),
                  e.__stateSet("closed"),
                  e._trigger({ type: "after", event: b }),
                  e.__options.functionAfter &&
                    e.__options.functionAfter.call(e, e, {
                      event: b,
                      origin: e._$origin[0],
                    }),
                  g();
              };
              h.hasTransitions
                ? (e._$tooltip.css({
                    "-moz-animation-duration":
                      e.__options.animationDuration[1] + "ms",
                    "-ms-animation-duration":
                      e.__options.animationDuration[1] + "ms",
                    "-o-animation-duration":
                      e.__options.animationDuration[1] + "ms",
                    "-webkit-animation-duration":
                      e.__options.animationDuration[1] + "ms",
                    "animation-duration":
                      e.__options.animationDuration[1] + "ms",
                    "transition-duration":
                      e.__options.animationDuration[1] + "ms",
                  }),
                  e._$tooltip
                    .clearQueue()
                    .removeClass("tooltipster-show")
                    .addClass("tooltipster-dying"),
                  e.__options.animationDuration[1] > 0 &&
                    e._$tooltip.delay(e.__options.animationDuration[1]),
                  e._$tooltip.queue(m))
                : e._$tooltip
                    .stop()
                    .fadeOut(e.__options.animationDuration[1], m);
            }
          } else g();
        }
        return e;
      },
      _off: function () {
        return (
          this.__$emitterPrivate.off.apply(
            this.__$emitterPrivate,
            Array.prototype.slice.apply(arguments)
          ),
          this
        );
      },
      _on: function () {
        return (
          this.__$emitterPrivate.on.apply(
            this.__$emitterPrivate,
            Array.prototype.slice.apply(arguments)
          ),
          this
        );
      },
      _one: function () {
        return (
          this.__$emitterPrivate.one.apply(
            this.__$emitterPrivate,
            Array.prototype.slice.apply(arguments)
          ),
          this
        );
      },
      _open: function (b, c) {
        var e = this;
        if (!e.__destroying && d(e._$origin) && e.__enabled) {
          var f = !0;
          if (
            ("closed" == e.__state &&
              (e._trigger({
                type: "before",
                event: b,
                stop: function () {
                  f = !1;
                },
              }),
              f &&
                e.__options.functionBefore &&
                (f = e.__options.functionBefore.call(e, e, {
                  event: b,
                  origin: e._$origin[0],
                }))),
            f !== !1 && null !== e.__Content)
          ) {
            c && e.__callbacks.open.push(c),
              (e.__callbacks.close = []),
              e.__timeoutsClear();
            var g,
              i = function () {
                "stable" != e.__state && e.__stateSet("stable"),
                  a.each(e.__callbacks.open, function (a, b) {
                    b.call(e, e, {
                      origin: e._$origin[0],
                      tooltip: e._$tooltip[0],
                    });
                  }),
                  (e.__callbacks.open = []);
              };
            if ("closed" !== e.__state)
              (g = 0),
                "disappearing" === e.__state
                  ? (e.__stateSet("appearing"),
                    h.hasTransitions
                      ? (e._$tooltip
                          .clearQueue()
                          .removeClass("tooltipster-dying")
                          .addClass("tooltipster-show"),
                        e.__options.animationDuration[0] > 0 &&
                          e._$tooltip.delay(e.__options.animationDuration[0]),
                        e._$tooltip.queue(i))
                      : e._$tooltip.stop().fadeIn(i))
                  : "stable" == e.__state && i();
            else {
              if (
                (e.__stateSet("appearing"),
                (g = e.__options.animationDuration[0]),
                e.__contentInsert(),
                e.reposition(b, !0),
                h.hasTransitions
                  ? (e._$tooltip
                      .addClass("tooltipster-" + e.__options.animation)
                      .addClass("tooltipster-initial")
                      .css({
                        "-moz-animation-duration":
                          e.__options.animationDuration[0] + "ms",
                        "-ms-animation-duration":
                          e.__options.animationDuration[0] + "ms",
                        "-o-animation-duration":
                          e.__options.animationDuration[0] + "ms",
                        "-webkit-animation-duration":
                          e.__options.animationDuration[0] + "ms",
                        "animation-duration":
                          e.__options.animationDuration[0] + "ms",
                        "transition-duration":
                          e.__options.animationDuration[0] + "ms",
                      }),
                    setTimeout(function () {
                      "closed" != e.__state &&
                        (e._$tooltip
                          .addClass("tooltipster-show")
                          .removeClass("tooltipster-initial"),
                        e.__options.animationDuration[0] > 0 &&
                          e._$tooltip.delay(e.__options.animationDuration[0]),
                        e._$tooltip.queue(i));
                    }, 0))
                  : e._$tooltip
                      .css("display", "none")
                      .fadeIn(e.__options.animationDuration[0], i),
                e.__trackerStart(),
                a(h.window)
                  .on(
                    "resize." + e.__namespace + "-triggerClose",
                    function (b) {
                      var c = a(document.activeElement);
                      ((c.is("input") || c.is("textarea")) &&
                        a.contains(e._$tooltip[0], c[0])) ||
                        e.reposition(b);
                    }
                  )
                  .on(
                    "scroll." + e.__namespace + "-triggerClose",
                    function (a) {
                      e.__scrollHandler(a);
                    }
                  ),
                (e.__$originParents = e._$origin.parents()),
                e.__$originParents.each(function (b, c) {
                  a(c).on(
                    "scroll." + e.__namespace + "-triggerClose",
                    function (a) {
                      e.__scrollHandler(a);
                    }
                  );
                }),
                e.__options.triggerClose.mouseleave ||
                  (e.__options.triggerClose.touchleave && h.hasTouchCapability))
              ) {
                e._on("dismissable", function (a) {
                  a.dismissable
                    ? a.delay
                      ? ((m = setTimeout(function () {
                          e._close(a.event);
                        }, a.delay)),
                        e.__timeouts.close.push(m))
                      : e._close(a)
                    : clearTimeout(m);
                });
                var j = e._$origin,
                  k = "",
                  l = "",
                  m = null;
                e.__options.interactive && (j = j.add(e._$tooltip)),
                  e.__options.triggerClose.mouseleave &&
                    ((k += "mouseenter." + e.__namespace + "-triggerClose "),
                    (l += "mouseleave." + e.__namespace + "-triggerClose ")),
                  e.__options.triggerClose.touchleave &&
                    h.hasTouchCapability &&
                    ((k += "touchstart." + e.__namespace + "-triggerClose"),
                    (l +=
                      "touchend." +
                      e.__namespace +
                      "-triggerClose touchcancel." +
                      e.__namespace +
                      "-triggerClose")),
                  j
                    .on(l, function (a) {
                      if (
                        e._touchIsTouchEvent(a) ||
                        !e._touchIsEmulatedEvent(a)
                      ) {
                        var b =
                          "mouseleave" == a.type
                            ? e.__options.delay
                            : e.__options.delayTouch;
                        e._trigger({
                          delay: b[1],
                          dismissable: !0,
                          event: a,
                          type: "dismissable",
                        });
                      }
                    })
                    .on(k, function (a) {
                      (!e._touchIsTouchEvent(a) &&
                        e._touchIsEmulatedEvent(a)) ||
                        e._trigger({
                          dismissable: !1,
                          event: a,
                          type: "dismissable",
                        });
                    });
              }
              e.__options.triggerClose.originClick &&
                e._$origin.on(
                  "click." + e.__namespace + "-triggerClose",
                  function (a) {
                    e._touchIsTouchEvent(a) ||
                      e._touchIsEmulatedEvent(a) ||
                      e._close(a);
                  }
                ),
                (e.__options.triggerClose.click ||
                  (e.__options.triggerClose.tap && h.hasTouchCapability)) &&
                  setTimeout(function () {
                    if ("closed" != e.__state) {
                      var b = "",
                        c = a(h.window.document.body);
                      e.__options.triggerClose.click &&
                        (b += "click." + e.__namespace + "-triggerClose "),
                        e.__options.triggerClose.tap &&
                          h.hasTouchCapability &&
                          (b += "touchend." + e.__namespace + "-triggerClose"),
                        c.on(b, function (b) {
                          e._touchIsMeaningfulEvent(b) &&
                            (e._touchRecordEvent(b),
                            (e.__options.interactive &&
                              a.contains(e._$tooltip[0], b.target)) ||
                              e._close(b));
                        }),
                        e.__options.triggerClose.tap &&
                          h.hasTouchCapability &&
                          c.on(
                            "touchstart." + e.__namespace + "-triggerClose",
                            function (a) {
                              e._touchRecordEvent(a);
                            }
                          );
                    }
                  }, 0),
                e._trigger("ready"),
                e.__options.functionReady &&
                  e.__options.functionReady.call(e, e, {
                    origin: e._$origin[0],
                    tooltip: e._$tooltip[0],
                  });
            }
            if (e.__options.timer > 0) {
              var m = setTimeout(function () {
                e._close();
              }, e.__options.timer + g);
              e.__timeouts.close.push(m);
            }
          }
        }
        return e;
      },
      _openShortly: function (a) {
        var b = this,
          c = !0;
        if (
          "stable" != b.__state &&
          "appearing" != b.__state &&
          !b.__timeouts.open &&
          (b._trigger({
            type: "start",
            event: a,
            stop: function () {
              c = !1;
            },
          }),
          c)
        ) {
          var d =
            0 == a.type.indexOf("touch")
              ? b.__options.delayTouch
              : b.__options.delay;
          d[0]
            ? (b.__timeouts.open = setTimeout(function () {
                (b.__timeouts.open = null),
                  b.__pointerIsOverOrigin && b._touchIsMeaningfulEvent(a)
                    ? (b._trigger("startend"), b._open(a))
                    : b._trigger("startcancel");
              }, d[0]))
            : (b._trigger("startend"), b._open(a));
        }
        return b;
      },
      _optionsExtract: function (b, c) {
        var d = this,
          e = a.extend(!0, {}, c),
          f = d.__options[b];
        return (
          f ||
            ((f = {}),
            a.each(c, function (a, b) {
              var c = d.__options[a];
              void 0 !== c && (f[a] = c);
            })),
          a.each(e, function (b, c) {
            void 0 !== f[b] &&
              ("object" != typeof c ||
              c instanceof Array ||
              null == c ||
              "object" != typeof f[b] ||
              f[b] instanceof Array ||
              null == f[b]
                ? (e[b] = f[b])
                : a.extend(e[b], f[b]));
          }),
          e
        );
      },
      _plug: function (b) {
        var c = a.tooltipster._plugin(b);
        if (!c) throw new Error('The "' + b + '" plugin is not defined');
        return (
          c.instance && a.tooltipster.__bridge(c.instance, this, c.name), this
        );
      },
      _touchIsEmulatedEvent: function (a) {
        for (
          var b = !1,
            c = new Date().getTime(),
            d = this.__touchEvents.length - 1;
          d >= 0;
          d--
        ) {
          var e = this.__touchEvents[d];
          if (!(c - e.time < 500)) break;
          e.target === a.target && (b = !0);
        }
        return b;
      },
      _touchIsMeaningfulEvent: function (a) {
        return (
          (this._touchIsTouchEvent(a) && !this._touchSwiped(a.target)) ||
          (!this._touchIsTouchEvent(a) && !this._touchIsEmulatedEvent(a))
        );
      },
      _touchIsTouchEvent: function (a) {
        return 0 == a.type.indexOf("touch");
      },
      _touchRecordEvent: function (a) {
        return (
          this._touchIsTouchEvent(a) &&
            ((a.time = new Date().getTime()), this.__touchEvents.push(a)),
          this
        );
      },
      _touchSwiped: function (a) {
        for (var b = !1, c = this.__touchEvents.length - 1; c >= 0; c--) {
          var d = this.__touchEvents[c];
          if ("touchmove" == d.type) {
            b = !0;
            break;
          }
          if ("touchstart" == d.type && a === d.target) break;
        }
        return b;
      },
      _trigger: function () {
        var b = Array.prototype.slice.apply(arguments);
        return (
          "string" == typeof b[0] && (b[0] = { type: b[0] }),
          (b[0].instance = this),
          (b[0].origin = this._$origin ? this._$origin[0] : null),
          (b[0].tooltip = this._$tooltip ? this._$tooltip[0] : null),
          this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, b),
          a.tooltipster._trigger.apply(a.tooltipster, b),
          this.__$emitterPublic.trigger.apply(this.__$emitterPublic, b),
          this
        );
      },
      _unplug: function (b) {
        var c = this;
        if (c[b]) {
          var d = a.tooltipster._plugin(b);
          d.instance &&
            a.each(d.instance, function (a, d) {
              c[a] && c[a].bridged === c[b] && delete c[a];
            }),
            c[b].__destroy && c[b].__destroy(),
            delete c[b];
        }
        return c;
      },
      close: function (a) {
        return (
          this.__destroyed ? this.__destroyError() : this._close(null, a), this
        );
      },
      content: function (a) {
        var b = this;
        if (void 0 === a) return b.__Content;
        if (b.__destroyed) b.__destroyError();
        else if ((b.__contentSet(a), null !== b.__Content)) {
          if (
            "closed" !== b.__state &&
            (b.__contentInsert(), b.reposition(), b.__options.updateAnimation)
          )
            if (h.hasTransitions) {
              var c = b.__options.updateAnimation;
              b._$tooltip.addClass("tooltipster-update-" + c),
                setTimeout(function () {
                  "closed" != b.__state &&
                    b._$tooltip.removeClass("tooltipster-update-" + c);
                }, 1e3);
            } else
              b._$tooltip.fadeTo(200, 0.5, function () {
                "closed" != b.__state && b._$tooltip.fadeTo(200, 1);
              });
        } else b._close();
        return b;
      },
      destroy: function () {
        var b = this;
        if (b.__destroyed) b.__destroyError();
        else {
          "closed" != b.__state
            ? b.option("animationDuration", 0)._close(null, null, !0)
            : b.__timeoutsClear(),
            b._trigger("destroy"),
            (b.__destroyed = !0),
            b._$origin
              .removeData(b.__namespace)
              .off("." + b.__namespace + "-triggerOpen"),
            a(h.window.document.body).off("." + b.__namespace + "-triggerOpen");
          var c = b._$origin.data("tooltipster-ns");
          if (c)
            if (1 === c.length) {
              var d = null;
              "previous" == b.__options.restoration
                ? (d = b._$origin.data("tooltipster-initialTitle"))
                : "current" == b.__options.restoration &&
                  (d =
                    "string" == typeof b.__Content
                      ? b.__Content
                      : a("<div></div>").append(b.__Content).html()),
                d && b._$origin.attr("title", d),
                b._$origin.removeClass("tooltipstered"),
                b._$origin
                  .removeData("tooltipster-ns")
                  .removeData("tooltipster-initialTitle");
            } else
              (c = a.grep(c, function (a, c) {
                return a !== b.__namespace;
              })),
                b._$origin.data("tooltipster-ns", c);
          b._trigger("destroyed"),
            b._off(),
            b.off(),
            (b.__Content = null),
            (b.__$emitterPrivate = null),
            (b.__$emitterPublic = null),
            (b.__options.parent = null),
            (b._$origin = null),
            (b._$tooltip = null),
            (a.tooltipster.__instancesLatestArr = a.grep(
              a.tooltipster.__instancesLatestArr,
              function (a, c) {
                return b !== a;
              }
            )),
            clearInterval(b.__garbageCollector);
        }
        return b;
      },
      disable: function () {
        return this.__destroyed
          ? (this.__destroyError(), this)
          : (this._close(), (this.__enabled = !1), this);
      },
      elementOrigin: function () {
        return this.__destroyed ? void this.__destroyError() : this._$origin[0];
      },
      elementTooltip: function () {
        return this._$tooltip ? this._$tooltip[0] : null;
      },
      enable: function () {
        return (this.__enabled = !0), this;
      },
      hide: function (a) {
        return this.close(a);
      },
      instance: function () {
        return this;
      },
      off: function () {
        return (
          this.__destroyed ||
            this.__$emitterPublic.off.apply(
              this.__$emitterPublic,
              Array.prototype.slice.apply(arguments)
            ),
          this
        );
      },
      on: function () {
        return (
          this.__destroyed
            ? this.__destroyError()
            : this.__$emitterPublic.on.apply(
                this.__$emitterPublic,
                Array.prototype.slice.apply(arguments)
              ),
          this
        );
      },
      one: function () {
        return (
          this.__destroyed
            ? this.__destroyError()
            : this.__$emitterPublic.one.apply(
                this.__$emitterPublic,
                Array.prototype.slice.apply(arguments)
              ),
          this
        );
      },
      open: function (a) {
        return (
          this.__destroyed ? this.__destroyError() : this._open(null, a), this
        );
      },
      option: function (b, c) {
        return void 0 === c
          ? this.__options[b]
          : (this.__destroyed
              ? this.__destroyError()
              : ((this.__options[b] = c),
                this.__optionsFormat(),
                a.inArray(b, ["trigger", "triggerClose", "triggerOpen"]) >= 0 &&
                  this.__prepareOrigin(),
                "selfDestruction" === b && this.__prepareGC()),
            this);
      },
      reposition: function (a, b) {
        var c = this;
        return (
          c.__destroyed
            ? c.__destroyError()
            : "closed" != c.__state &&
              d(c._$origin) &&
              (b || d(c._$tooltip)) &&
              (b || c._$tooltip.detach(),
              (c.__Geometry = c.__geometry()),
              c._trigger({
                type: "reposition",
                event: a,
                helper: { geo: c.__Geometry },
              })),
          c
        );
      },
      show: function (a) {
        return this.open(a);
      },
      status: function () {
        return {
          destroyed: this.__destroyed,
          enabled: this.__enabled,
          open: "closed" !== this.__state,
          state: this.__state,
        };
      },
      triggerHandler: function () {
        return (
          this.__destroyed
            ? this.__destroyError()
            : this.__$emitterPublic.triggerHandler.apply(
                this.__$emitterPublic,
                Array.prototype.slice.apply(arguments)
              ),
          this
        );
      },
    }),
    (a.fn.tooltipster = function () {
      var b = Array.prototype.slice.apply(arguments),
        c =
          "You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.";
      if (0 === this.length) return this;
      if ("string" == typeof b[0]) {
        var d = "#*$~&";
        return (
          this.each(function () {
            var e = a(this).data("tooltipster-ns"),
              f = e ? a(this).data(e[0]) : null;
            if (!f)
              throw new Error(
                "You called Tooltipster's \"" +
                  b[0] +
                  '" method on an uninitialized element'
              );
            if ("function" != typeof f[b[0]])
              throw new Error('Unknown method "' + b[0] + '"');
            this.length > 1 &&
              "content" == b[0] &&
              (b[1] instanceof a ||
                ("object" == typeof b[1] && null != b[1] && b[1].tagName)) &&
              !f.__options.contentCloning &&
              f.__options.debug &&
              console.log(c);
            var g = f[b[0]](b[1], b[2]);
            return g !== f || "instance" === b[0] ? ((d = g), !1) : void 0;
          }),
          "#*$~&" !== d ? d : this
        );
      }
      a.tooltipster.__instancesLatestArr = [];
      var e = b[0] && void 0 !== b[0].multiple,
        g = (e && b[0].multiple) || (!e && f.multiple),
        h = b[0] && void 0 !== b[0].content,
        i = (h && b[0].content) || (!h && f.content),
        j = b[0] && void 0 !== b[0].contentCloning,
        k = (j && b[0].contentCloning) || (!j && f.contentCloning),
        l = b[0] && void 0 !== b[0].debug,
        m = (l && b[0].debug) || (!l && f.debug);
      return (
        this.length > 1 &&
          (i instanceof a ||
            ("object" == typeof i && null != i && i.tagName)) &&
          !k &&
          m &&
          console.log(c),
        this.each(function () {
          var c = !1,
            d = a(this),
            e = d.data("tooltipster-ns"),
            f = null;
          e
            ? g
              ? (c = !0)
              : m &&
                (console.log(
                  "Tooltipster: one or more tooltips are already attached to the element below. Ignoring."
                ),
                console.log(this))
            : (c = !0),
            c &&
              ((f = new a.Tooltipster(this, b[0])),
              e || (e = []),
              e.push(f.__namespace),
              d.data("tooltipster-ns", e),
              d.data(f.__namespace, f),
              f.__options.functionInit &&
                f.__options.functionInit.call(f, f, { origin: this }),
              f._trigger("init")),
            a.tooltipster.__instancesLatestArr.push(f);
        }),
        this
      );
    }),
    (b.prototype = {
      __init: function (b) {
        (this.__$tooltip = b),
          this.__$tooltip
            .css({ left: 0, overflow: "hidden", position: "absolute", top: 0 })
            .find(".tooltipster-content")
            .css("overflow", "auto"),
          (this.$container = a('<div class="tooltipster-ruler"></div>')
            .append(this.__$tooltip)
            .appendTo(h.window.document.body));
      },
      __forceRedraw: function () {
        var a = this.__$tooltip.parent();
        this.__$tooltip.detach(), this.__$tooltip.appendTo(a);
      },
      constrain: function (a, b) {
        return (
          (this.constraints = { width: a, height: b }),
          this.__$tooltip.css({
            display: "block",
            height: "",
            overflow: "auto",
            width: a,
          }),
          this
        );
      },
      destroy: function () {
        this.__$tooltip
          .detach()
          .find(".tooltipster-content")
          .css({ display: "", overflow: "" }),
          this.$container.remove();
      },
      free: function () {
        return (
          (this.constraints = null),
          this.__$tooltip.css({
            display: "",
            height: "",
            overflow: "visible",
            width: "",
          }),
          this
        );
      },
      measure: function () {
        this.__forceRedraw();
        var a = this.__$tooltip[0].getBoundingClientRect(),
          b = {
            size: {
              height: a.height || a.bottom - a.top,
              width: a.width || a.right - a.left,
            },
          };
        if (this.constraints) {
          var c = this.__$tooltip.find(".tooltipster-content"),
            d = this.__$tooltip.outerHeight(),
            e = c[0].getBoundingClientRect(),
            f = {
              height: d <= this.constraints.height,
              width:
                a.width <= this.constraints.width &&
                e.width >= c[0].scrollWidth - 1,
            };
          b.fits = f.height && f.width;
        }
        return (
          h.IE &&
            h.IE <= 11 &&
            b.size.width !== h.window.document.documentElement.clientWidth &&
            (b.size.width = Math.ceil(b.size.width) + 1),
          b
        );
      },
    });
  var j = navigator.userAgent.toLowerCase();
  -1 != j.indexOf("msie")
    ? (h.IE = parseInt(j.split("msie")[1]))
    : -1 !== j.toLowerCase().indexOf("trident") && -1 !== j.indexOf(" rv:11")
    ? (h.IE = 11)
    : -1 != j.toLowerCase().indexOf("edge/") &&
      (h.IE = parseInt(j.toLowerCase().split("edge/")[1]));
  var k = "tooltipster.sideTip";
  return (
    a.tooltipster._plugin({
      name: k,
      instance: {
        __defaults: function () {
          return {
            arrow: !0,
            distance: 6,
            functionPosition: null,
            maxWidth: null,
            minIntersection: 16,
            minWidth: 0,
            position: null,
            side: "top",
            viewportAware: !0,
          };
        },
        __init: function (a) {
          var b = this;
          (b.__instance = a),
            (b.__namespace =
              "tooltipster-sideTip-" + Math.round(1e6 * Math.random())),
            (b.__previousState = "closed"),
            b.__options,
            b.__optionsFormat(),
            b.__instance._on("state." + b.__namespace, function (a) {
              "closed" == a.state
                ? b.__close()
                : "appearing" == a.state &&
                  "closed" == b.__previousState &&
                  b.__create(),
                (b.__previousState = a.state);
            }),
            b.__instance._on("options." + b.__namespace, function () {
              b.__optionsFormat();
            }),
            b.__instance._on("reposition." + b.__namespace, function (a) {
              b.__reposition(a.event, a.helper);
            });
        },
        __close: function () {
          this.__instance.content() instanceof a &&
            this.__instance.content().detach(),
            this.__instance._$tooltip.remove(),
            (this.__instance._$tooltip = null);
        },
        __create: function () {
          var b = a(
            '<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>'
          );
          this.__options.arrow ||
            b
              .find(".tooltipster-box")
              .css("margin", 0)
              .end()
              .find(".tooltipster-arrow")
              .hide(),
            this.__options.minWidth &&
              b.css("min-width", this.__options.minWidth + "px"),
            this.__options.maxWidth &&
              b.css("max-width", this.__options.maxWidth + "px"),
            (this.__instance._$tooltip = b),
            this.__instance._trigger("created");
        },
        __destroy: function () {
          this.__instance._off("." + self.__namespace);
        },
        __optionsFormat: function () {
          var b = this;
          if (
            ((b.__options = b.__instance._optionsExtract(k, b.__defaults())),
            b.__options.position && (b.__options.side = b.__options.position),
            "object" != typeof b.__options.distance &&
              (b.__options.distance = [b.__options.distance]),
            b.__options.distance.length < 4 &&
              (void 0 === b.__options.distance[1] &&
                (b.__options.distance[1] = b.__options.distance[0]),
              void 0 === b.__options.distance[2] &&
                (b.__options.distance[2] = b.__options.distance[0]),
              void 0 === b.__options.distance[3] &&
                (b.__options.distance[3] = b.__options.distance[1]),
              (b.__options.distance = {
                top: b.__options.distance[0],
                right: b.__options.distance[1],
                bottom: b.__options.distance[2],
                left: b.__options.distance[3],
              })),
            "string" == typeof b.__options.side)
          ) {
            var c = {
              top: "bottom",
              right: "left",
              bottom: "top",
              left: "right",
            };
            (b.__options.side = [b.__options.side, c[b.__options.side]]),
              "left" == b.__options.side[0] || "right" == b.__options.side[0]
                ? b.__options.side.push("top", "bottom")
                : b.__options.side.push("right", "left");
          }
          6 === a.tooltipster._env.IE &&
            b.__options.arrow !== !0 &&
            (b.__options.arrow = !1);
        },
        __reposition: function (b, c) {
          var d,
            e = this,
            f = e.__targetFind(c),
            g = [];
          e.__instance._$tooltip.detach();
          var h = e.__instance._$tooltip.clone(),
            i = a.tooltipster._getRuler(h),
            j = !1,
            k = e.__instance.option("animation");
          switch (
            (k && h.removeClass("tooltipster-" + k),
            a.each(["window", "document"], function (d, k) {
              var l = null;
              if (
                (e.__instance._trigger({
                  container: k,
                  helper: c,
                  satisfied: j,
                  takeTest: function (a) {
                    l = a;
                  },
                  results: g,
                  type: "positionTest",
                }),
                1 == l ||
                  (0 != l &&
                    0 == j &&
                    ("window" != k || e.__options.viewportAware)))
              )
                for (var d = 0; d < e.__options.side.length; d++) {
                  var m = { horizontal: 0, vertical: 0 },
                    n = e.__options.side[d];
                  "top" == n || "bottom" == n
                    ? (m.vertical = e.__options.distance[n])
                    : (m.horizontal = e.__options.distance[n]),
                    e.__sideChange(h, n),
                    a.each(["natural", "constrained"], function (a, d) {
                      if (
                        ((l = null),
                        e.__instance._trigger({
                          container: k,
                          event: b,
                          helper: c,
                          mode: d,
                          results: g,
                          satisfied: j,
                          side: n,
                          takeTest: function (a) {
                            l = a;
                          },
                          type: "positionTest",
                        }),
                        1 == l || (0 != l && 0 == j))
                      ) {
                        var h = {
                            container: k,
                            distance: m,
                            fits: null,
                            mode: d,
                            outerSize: null,
                            side: n,
                            size: null,
                            target: f[n],
                            whole: null,
                          },
                          o =
                            "natural" == d
                              ? i.free()
                              : i.constrain(
                                  c.geo.available[k][n].width - m.horizontal,
                                  c.geo.available[k][n].height - m.vertical
                                ),
                          p = o.measure();
                        if (
                          ((h.size = p.size),
                          (h.outerSize = {
                            height: p.size.height + m.vertical,
                            width: p.size.width + m.horizontal,
                          }),
                          "natural" == d
                            ? c.geo.available[k][n].width >=
                                h.outerSize.width &&
                              c.geo.available[k][n].height >= h.outerSize.height
                              ? (h.fits = !0)
                              : (h.fits = !1)
                            : (h.fits = p.fits),
                          "window" == k &&
                            (h.fits
                              ? "top" == n || "bottom" == n
                                ? (h.whole =
                                    c.geo.origin.windowOffset.right >=
                                      e.__options.minIntersection &&
                                    c.geo.window.size.width -
                                      c.geo.origin.windowOffset.left >=
                                      e.__options.minIntersection)
                                : (h.whole =
                                    c.geo.origin.windowOffset.bottom >=
                                      e.__options.minIntersection &&
                                    c.geo.window.size.height -
                                      c.geo.origin.windowOffset.top >=
                                      e.__options.minIntersection)
                              : (h.whole = !1)),
                          g.push(h),
                          h.whole)
                        )
                          j = !0;
                        else if (
                          "natural" == h.mode &&
                          (h.fits ||
                            h.size.width <= c.geo.available[k][n].width)
                        )
                          return !1;
                      }
                    });
                }
            }),
            e.__instance._trigger({
              edit: function (a) {
                g = a;
              },
              event: b,
              helper: c,
              results: g,
              type: "positionTested",
            }),
            g.sort(function (a, b) {
              if (a.whole && !b.whole) return -1;
              if (!a.whole && b.whole) return 1;
              if (a.whole && b.whole) {
                var c = e.__options.side.indexOf(a.side),
                  d = e.__options.side.indexOf(b.side);
                return d > c ? -1 : c > d ? 1 : "natural" == a.mode ? -1 : 1;
              }
              if (a.fits && !b.fits) return -1;
              if (!a.fits && b.fits) return 1;
              if (a.fits && b.fits) {
                var c = e.__options.side.indexOf(a.side),
                  d = e.__options.side.indexOf(b.side);
                return d > c ? -1 : c > d ? 1 : "natural" == a.mode ? -1 : 1;
              }
              return "document" == a.container &&
                "bottom" == a.side &&
                "natural" == a.mode
                ? -1
                : 1;
            }),
            (d = g[0]),
            (d.coord = {}),
            d.side)
          ) {
            case "left":
            case "right":
              d.coord.top = Math.floor(d.target - d.size.height / 2);
              break;
            case "bottom":
            case "top":
              d.coord.left = Math.floor(d.target - d.size.width / 2);
          }
          switch (d.side) {
            case "left":
              d.coord.left = c.geo.origin.windowOffset.left - d.outerSize.width;
              break;
            case "right":
              d.coord.left =
                c.geo.origin.windowOffset.right + d.distance.horizontal;
              break;
            case "top":
              d.coord.top = c.geo.origin.windowOffset.top - d.outerSize.height;
              break;
            case "bottom":
              d.coord.top =
                c.geo.origin.windowOffset.bottom + d.distance.vertical;
          }
          "window" == d.container
            ? "top" == d.side || "bottom" == d.side
              ? d.coord.left < 0
                ? c.geo.origin.windowOffset.right -
                    this.__options.minIntersection >=
                  0
                  ? (d.coord.left = 0)
                  : (d.coord.left =
                      c.geo.origin.windowOffset.right -
                      this.__options.minIntersection -
                      1)
                : d.coord.left > c.geo.window.size.width - d.size.width &&
                  (c.geo.origin.windowOffset.left +
                    this.__options.minIntersection <=
                  c.geo.window.size.width
                    ? (d.coord.left = c.geo.window.size.width - d.size.width)
                    : (d.coord.left =
                        c.geo.origin.windowOffset.left +
                        this.__options.minIntersection +
                        1 -
                        d.size.width))
              : d.coord.top < 0
              ? c.geo.origin.windowOffset.bottom -
                  this.__options.minIntersection >=
                0
                ? (d.coord.top = 0)
                : (d.coord.top =
                    c.geo.origin.windowOffset.bottom -
                    this.__options.minIntersection -
                    1)
              : d.coord.top > c.geo.window.size.height - d.size.height &&
                (c.geo.origin.windowOffset.top +
                  this.__options.minIntersection <=
                c.geo.window.size.height
                  ? (d.coord.top = c.geo.window.size.height - d.size.height)
                  : (d.coord.top =
                      c.geo.origin.windowOffset.top +
                      this.__options.minIntersection +
                      1 -
                      d.size.height))
            : (d.coord.left > c.geo.window.size.width - d.size.width &&
                (d.coord.left = c.geo.window.size.width - d.size.width),
              d.coord.left < 0 && (d.coord.left = 0)),
            e.__sideChange(h, d.side),
            (c.tooltipClone = h[0]),
            (c.tooltipParent = e.__instance.option("parent").parent[0]),
            (c.mode = d.mode),
            (c.whole = d.whole),
            (c.origin = e.__instance._$origin[0]),
            (c.tooltip = e.__instance._$tooltip[0]),
            delete d.container,
            delete d.fits,
            delete d.mode,
            delete d.outerSize,
            delete d.whole,
            (d.distance = d.distance.horizontal || d.distance.vertical);
          var l = a.extend(!0, {}, d);
          if (
            (e.__instance._trigger({
              edit: function (a) {
                d = a;
              },
              event: b,
              helper: c,
              position: l,
              type: "position",
            }),
            e.__options.functionPosition)
          ) {
            var m = e.__options.functionPosition.call(e, e.__instance, c, l);
            m && (d = m);
          }
          i.destroy();
          var n, o;
          "top" == d.side || "bottom" == d.side
            ? ((n = { prop: "left", val: d.target - d.coord.left }),
              (o = d.size.width - this.__options.minIntersection))
            : ((n = { prop: "top", val: d.target - d.coord.top }),
              (o = d.size.height - this.__options.minIntersection)),
            n.val < this.__options.minIntersection
              ? (n.val = this.__options.minIntersection)
              : n.val > o && (n.val = o);
          var p;
          (p = c.geo.origin.fixedLineage
            ? c.geo.origin.windowOffset
            : {
                left: c.geo.origin.windowOffset.left + c.geo.window.scroll.left,
                top: c.geo.origin.windowOffset.top + c.geo.window.scroll.top,
              }),
            (d.coord = {
              left: p.left + (d.coord.left - c.geo.origin.windowOffset.left),
              top: p.top + (d.coord.top - c.geo.origin.windowOffset.top),
            }),
            e.__sideChange(e.__instance._$tooltip, d.side),
            c.geo.origin.fixedLineage
              ? e.__instance._$tooltip.css("position", "fixed")
              : e.__instance._$tooltip.css("position", ""),
            e.__instance._$tooltip
              .css({
                left: d.coord.left,
                top: d.coord.top,
                height: d.size.height,
                width: d.size.width,
              })
              .find(".tooltipster-arrow")
              .css({ left: "", top: "" })
              .css(n.prop, n.val),
            e.__instance._$tooltip.appendTo(e.__instance.option("parent")),
            e.__instance._trigger({
              type: "repositioned",
              event: b,
              position: d,
            });
        },
        __sideChange: function (a, b) {
          a.removeClass("tooltipster-bottom")
            .removeClass("tooltipster-left")
            .removeClass("tooltipster-right")
            .removeClass("tooltipster-top")
            .addClass("tooltipster-" + b);
        },
        __targetFind: function (a) {
          var b = {},
            c = this.__instance._$origin[0].getClientRects();
          if (c.length > 1) {
            var d = this.__instance._$origin.css("opacity");
            1 == d &&
              (this.__instance._$origin.css("opacity", 0.99),
              (c = this.__instance._$origin[0].getClientRects()),
              this.__instance._$origin.css("opacity", 1));
          }
          if (c.length < 2)
            (b.top = Math.floor(
              a.geo.origin.windowOffset.left + a.geo.origin.size.width / 2
            )),
              (b.bottom = b.top),
              (b.left = Math.floor(
                a.geo.origin.windowOffset.top + a.geo.origin.size.height / 2
              )),
              (b.right = b.left);
          else {
            var e = c[0];
            (b.top = Math.floor(e.left + (e.right - e.left) / 2)),
              (e = c.length > 2 ? c[Math.ceil(c.length / 2) - 1] : c[0]),
              (b.right = Math.floor(e.top + (e.bottom - e.top) / 2)),
              (e = c[c.length - 1]),
              (b.bottom = Math.floor(e.left + (e.right - e.left) / 2)),
              (e =
                c.length > 2
                  ? c[Math.ceil((c.length + 1) / 2) - 1]
                  : c[c.length - 1]),
              (b.left = Math.floor(e.top + (e.bottom - e.top) / 2));
          }
          return b;
        },
      },
    }),
    a
  );
});
/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

(tribe.events = tribe.events || {}),
  (tribe.events.views = tribe.events.views || {}),
  (tribe.events.views.tooltip = {}),
  (function ($, obj) {
    "use strict";
    var $document = $(document);
    (obj.config = { delayHoverIn: 300, delayHoverOut: 300 }),
      (obj.selectors = {
        tooltipTrigger: '[data-js~="tribe-events-tooltip"]',
        tribeEventsTooltipTriggerHoverClass:
          ".tribe-events-tooltip-trigger--hover",
        tribeEventsTooltipThemeClass: ".tribe-events-tooltip-theme",
        tribeEventsTooltipThemeHoverClass: ".tribe-events-tooltip-theme--hover",
        tribeCommonClass: ".tribe-common",
        tribeEventsClass: ".tribe-events",
      }),
      (obj.handleOriginFocus = function (event) {
        setTimeout(function () {
          (event.data.target.is(":focus") ||
            event.data.target.hasClass(
              obj.selectors.tribeEventsTooltipTriggerHoverClass.className()
            )) &&
            event.data.target.tooltipster("open");
        }, obj.config.delayHoverIn);
      }),
      (obj.handleOriginBlur = function (event) {
        event.data.target.tooltipster("close");
      }),
      (obj.handleOriginHoverIn = function (event) {
        event.data.target.addClass(
          obj.selectors.tribeEventsTooltipTriggerHoverClass.className()
        );
      }),
      (obj.handleOriginHoverOut = function (event) {
        event.data.target.removeClass(
          obj.selectors.tribeEventsTooltipTriggerHoverClass.className()
        );
      }),
      (obj.handleTooltipHoverIn = function (event) {
        event.data.target.addClass(
          obj.selectors.tribeEventsTooltipThemeHoverClass.className()
        );
      }),
      (obj.handleTooltipHoverOut = function (event) {
        event.data.target.removeClass(
          obj.selectors.tribeEventsTooltipThemeHoverClass.className()
        );
      }),
      (obj.handleInstanceClose = function (event) {
        var $origin = event.data.origin,
          $tooltip = $(event.tooltip);
        ($origin.is(":focus") ||
          $origin.hasClass(
            obj.selectors.tribeEventsTooltipTriggerHoverClass.className()
          ) ||
          $tooltip.hasClass(
            obj.selectors.tribeEventsTooltipThemeHoverClass.className()
          )) &&
          event.stop();
      }),
      (obj.handleInstanceClosing = function (event) {
        $(event.tooltip)
          .off("mouseenter touchstart", obj.handleTooltipHoverIn)
          .off("mouseleave touchleave", obj.handleTooltipHoverOut);
      }),
      (obj.onFunctionInit = function (instance, helper) {
        var $origin = $(helper.origin);
        $origin
          .on("focus", { target: $origin }, obj.handleOriginFocus)
          .on("blur", { target: $origin }, obj.handleOriginBlur)
          .on(
            "mouseenter touchstart",
            { target: $origin },
            obj.handleOriginHoverIn
          )
          .on(
            "mouseleave touchleave",
            { target: $origin },
            obj.handleOriginHoverOut
          ),
          instance
            .on("close", { origin: $origin }, obj.handleInstanceClose)
            .on("closing", { origin: $origin }, obj.handleInstanceClosing);
      }),
      (obj.onFunctionReady = function (instance, helper) {
        var $tooltip = $(helper.tooltip);
        $tooltip
          .on(
            "mouseenter touchstart",
            { target: $tooltip },
            obj.handleTooltipHoverIn
          )
          .on(
            "mouseleave touchleave",
            { target: $tooltip },
            obj.handleTooltipHoverOut
          );
      }),
      (obj.deinitTooltips = function ($container) {
        $container
          .find(obj.selectors.tooltipTrigger)
          .each(function (index, trigger) {
            $(trigger).off().tooltipster("instance").off();
          });
      }),
      (obj.initTooltips = function ($container) {
        var theme = $container.data("tribeEventsTooltipTheme");
        $container
          .find(obj.selectors.tooltipTrigger)
          .each(function (index, trigger) {
            $(trigger).tooltipster({
              animationDuration: 0,
              interactive: !0,
              delay: [obj.config.delayHoverIn, obj.config.delayHoverOut],
              delayTouch: [obj.config.delayHoverIn, obj.config.delayHoverOut],
              theme: theme,
              functionInit: obj.onFunctionInit,
              functionReady: obj.onFunctionReady,
            });
          });
      }),
      (obj.initTheme = function ($container) {
        $container.trigger("beforeTooltipInitTheme.tribeEvents", [$container]);
        var theme = [
          obj.selectors.tribeEventsTooltipThemeClass.className(),
          obj.selectors.tribeCommonClass.className(),
          obj.selectors.tribeEventsClass.className(),
        ];
        $container.data("tribeEventsTooltipTheme", theme),
          $container.trigger("afterTooltipInitTheme.tribeEvents", [$container]);
      }),
      (obj.deinit = function (event, jqXHR, settings) {
        var $container = event.data.container;
        obj.deinitTooltips($container),
          $container.off("beforeAjaxSuccess.tribeEvents", obj.deinit);
      }),
      (obj.init = function (event, index, $container, data) {
        obj.initTheme($container),
          obj.initTooltips($container),
          $container.on(
            "beforeAjaxSuccess.tribeEvents",
            { container: $container },
            obj.deinit
          );
      }),
      (obj.ready = function () {
        $document.on(
          "afterSetup.tribeEvents",
          tribe.events.views.manager.selectors.container,
          obj.init
        );
      }),
      $(obj.ready);
  })(jQuery, tribe.events.views.tooltip);
/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

(tribe.events = tribe.events || {}),
  (tribe.events.views = tribe.events.views || {}),
  (tribe.events.views.eventsBar = {}),
  (function ($, obj) {
    "use strict";
    var $document = $(document);
    (obj.selectors = {
      eventsBar: '[data-js="tribe-events-events-bar"]',
      searchButton: '[data-js="tribe-events-search-button"]',
      searchButtonActiveClass:
        ".tribe-events-c-events-bar__search-button--active",
      searchContainer: '[data-js="tribe-events-search-container"]',
    }),
      (obj.keyCode = { END: 35, HOME: 36, LEFT: 37, RIGHT: 39 }),
      (obj.deinitAccordion = function ($header, $content) {
        tribe.events.views.accordion.deinitAccordion(0, $header),
          tribe.events.views.accordion.deinitAccordionA11yAttrs(
            $header,
            $content
          ),
          $content.css("display", "");
      }),
      (obj.initAccordion = function ($container, $header, $content) {
        tribe.events.views.accordion.initAccordion($container)(0, $header),
          tribe.events.views.accordion.initAccordionA11yAttrs(
            $header,
            $content
          );
      }),
      (obj.handleSearchButtonClick = function (event) {
        event.data.target.toggleClass(
          obj.selectors.searchButtonActiveClass.className()
        );
      }),
      (obj.deinitSearchAccordion = function ($container) {
        var $searchButton = $container.find(obj.selectors.searchButton);
        $searchButton.removeClass(
          obj.selectors.searchButtonActiveClass.className()
        );
        var $searchContainer = $container.find(obj.selectors.searchContainer);
        obj.deinitAccordion($searchButton, $searchContainer),
          $searchButton.off("click", obj.handleSearchButtonClick);
      }),
      (obj.initSearchAccordion = function ($container) {
        var $searchButton = $container.find(obj.selectors.searchButton),
          $searchContainer = $container.find(obj.selectors.searchContainer);
        obj.initAccordion($container, $searchButton, $searchContainer),
          $searchButton.on(
            "click",
            { target: $searchButton },
            obj.handleSearchButtonClick
          );
      }),
      (obj.initState = function ($container) {
        $container
          .find(obj.selectors.eventsBar)
          .data("tribeEventsState", {
            mobileInitialized: !1,
            desktopInitialized: !1,
          });
      }),
      (obj.deinitEventsBar = function ($container) {
        obj.deinitSearchAccordion($container);
      }),
      (obj.initEventsBar = function ($container) {
        var $eventsBar = $container.find(obj.selectors.eventsBar);
        if ($eventsBar.length) {
          var state = $eventsBar.data("tribeEventsState"),
            isMobile = $container.data("tribeEventsState").isMobile;
          isMobile && !state.mobileInitialized
            ? (obj.initSearchAccordion($container),
              (state.desktopInitialized = !1),
              (state.mobileInitialized = !0),
              $eventsBar.data("tribeEventsState", state))
            : isMobile ||
              state.desktopInitialized ||
              (obj.deinitSearchAccordion($container),
              (state.mobileInitialized = !1),
              (state.desktopInitialized = !0),
              $eventsBar.data("tribeEventsState", state));
        }
      }),
      (obj.handleResize = function (event) {
        obj.initEventsBar(event.data.container);
      }),
      (obj.handleClick = function (event) {
        var $target = $(event.target),
          isParentSearchButton = Boolean(
            $target.closest(obj.selectors.searchButton).length
          ),
          isParentSearchContainer = Boolean(
            $target.closest(obj.selectors.searchContainer).length
          );
        if (!isParentSearchButton && !isParentSearchContainer) {
          var $eventsBar = event.data.container.find(obj.selectors.eventsBar),
            $searchButton = $eventsBar.find(obj.selectors.searchButton);
          if (
            $searchButton.hasClass(
              obj.selectors.searchButtonActiveClass.className()
            )
          ) {
            var $searchContainer = $eventsBar.find(
              obj.selectors.searchContainer
            );
            $searchButton.removeClass(
              obj.selectors.searchButtonActiveClass.className()
            ),
              tribe.events.views.accordion.closeAccordion(
                $searchButton,
                $searchContainer
              );
          }
        }
      }),
      (obj.unbindEvents = function ($container) {
        $container.off("resize.tribeEvents", obj.handleResize),
          $document.off("click", obj.handleClick);
      }),
      (obj.bindEvents = function ($container) {
        $container.on(
          "resize.tribeEvents",
          { container: $container },
          obj.handleResize
        ),
          $document.on("click", { container: $container }, obj.handleClick);
      }),
      (obj.deinit = function (event, jqXHR, settings) {
        var $container = event.data.container;
        obj.deinitEventsBar($container),
          obj.unbindEvents($container),
          $container.off("beforeAjaxSuccess.tribeEvents", obj.deinit);
      }),
      (obj.init = function (event, index, $container, data) {
        $container.find(obj.selectors.eventsBar).length &&
          (obj.initState($container),
          obj.initEventsBar($container),
          obj.bindEvents($container),
          $container.on(
            "beforeAjaxSuccess.tribeEvents",
            { container: $container },
            obj.deinit
          ));
      }),
      (obj.ready = function () {
        $document.on(
          "afterSetup.tribeEvents",
          tribe.events.views.manager.selectors.container,
          obj.init
        );
      }),
      $(obj.ready);
  })(jQuery, tribe.events.views.eventsBar);
/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

(tribe.events = tribe.events || {}),
  (tribe.events.views = tribe.events.views || {}),
  (tribe.events.views.eventsBarInputs = {}),
  (function ($, obj) {
    "use strict";
    var $document = $(document);
    (obj.selectors = {
      input: '[data-js="tribe-events-events-bar-input-control-input"]',
      inputWrapper: '[data-js="tribe-events-events-bar-input-control"]',
    }),
      (obj.handleInputChange = function (event) {
        var $input = event.data.target;
        event.data.wrapper.toggleClass(
          event.data.inputClassFocus,
          "" !== $input.val().trim()
        );
      }),
      (obj.unbindInputEvents = function ($container) {
        $container
          .find(obj.selectors.inputWrapper)
          .each(function (index, wrapper) {
            var $input = $(wrapper).find(obj.selectors.input);
            $input.length && $input.off();
          });
      }),
      (obj.bindInputEvents = function ($container) {
        $container
          .find(obj.selectors.inputWrapper)
          .each(function (index, wrapper) {
            var inputWrapperClass = wrapper.className.match(
              /tribe-events-c-search__input-control--[a-z]+/
            );
            if (inputWrapperClass) {
              var inputWrapperFocus = inputWrapperClass[0] + "-focus",
                $wrapper = $(wrapper),
                $input = $wrapper.find(obj.selectors.input);
              $input.length &&
                ($wrapper.toggleClass(
                  inputWrapperFocus,
                  "" !== $input.val().trim()
                ),
                $input.on(
                  "change",
                  {
                    target: $input,
                    wrapper: $wrapper,
                    inputClassFocus: inputWrapperFocus,
                  },
                  obj.handleInputChange
                ));
            }
          });
      }),
      (obj.unbindEvents = function (event, jqXHR, settings) {
        var $container = event.data.container;
        obj.unbindInputEvents($container),
          $container.off("beforeAjaxSuccess.tribeEvents", obj.unbindEvents);
      }),
      (obj.bindEvents = function (event, index, $container, data) {
        $container.find(obj.selectors.inputWrapper).length &&
          (obj.bindInputEvents($container),
          $container.on(
            "beforeAjaxSuccess.tribeEvents",
            { container: $container },
            obj.unbindEvents
          ));
      }),
      (obj.ready = function () {
        $document.on(
          "afterSetup.tribeEvents",
          tribe.events.views.manager.selectors.container,
          obj.bindEvents
        );
      }),
      $(obj.ready);
  })(jQuery, tribe.events.views.eventsBarInputs);
/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

(tribe.events = tribe.events || {}),
  (tribe.events.views = tribe.events.views || {}),
  (tribe.events.views.datepicker = {}),
  (function ($, obj) {
    "use strict";
    var $document = $(document);
    (obj.selectors = {
      datepickerFormClass: ".tribe-events-c-top-bar__datepicker-form",
      datepickerContainer:
        '[data-js="tribe-events-top-bar-datepicker-container"]',
      datepickerDaysBody: ".datepicker-days tbody",
      input: '[data-js="tribe-events-top-bar-date"]',
      button: '[data-js="tribe-events-top-bar-datepicker-button"]',
      buttonOpenClass: ".tribe-events-c-top-bar__datepicker-button--open",
      dateInput: '[name="tribe-events-views[tribe-bar-date]"]',
      prevIconTemplate:
        ".tribe-events-c-top-bar__datepicker-template-prev-icon",
      nextIconTemplate:
        ".tribe-events-c-top-bar__datepicker-template-next-icon",
    }),
      (obj.state = { initialized: !1 }),
      (obj.options = {
        container: null,
        daysOfWeekDisabled: [],
        maxViewMode: "decade",
        minViewMode: "month",
        orientation: "bottom left",
        showOnFocus: !1,
        templates: { leftArrow: "", rightArrow: "" },
      }),
      (obj.keyCode = { ENTER: 13 }),
      (obj.today = null),
      (obj.dateFormatMap = { d: "dd", j: "d", m: "mm", n: "m", Y: "yyyy" }),
      (obj.observer = null),
      (obj.padNumber = function (number) {
        var numStr = number + "";
        return (numStr.length > 1 ? "" : "0") + numStr;
      }),
      (obj.request = function (viewData, $container) {
        var data = { view_data: viewData };
        tribe.events.views.manager.request(data, $container);
      }),
      (obj.createDateInputObj = function (value) {
        var $input = $("<input>");
        return (
          $input.attr({
            type: "hidden",
            name: "tribe-events-views[tribe-bar-date]",
            value: value,
          }),
          $input
        );
      }),
      (obj.submitRequest = function ($container, value) {
        var viewData = {};
        (viewData["tribe-bar-date"] = value), obj.request(viewData, $container);
      }),
      (obj.handleChangeDate = function (event) {
        var $container = event.data.container,
          date = event.date.getDate(),
          month = event.date.getMonth() + 1,
          year = event.date.getFullYear(),
          paddedDate = obj.padNumber(date),
          dateValue = [year, obj.padNumber(month), paddedDate].join("-");
        obj.submitRequest($container, dateValue);
      }),
      (obj.handleChangeMonth = function (event) {
        var month,
          year,
          $container = event.data.container;
        if (event.date)
          (month = event.date.getMonth() + 1),
            (year = event.date.getFullYear());
        else {
          var date = $container
            .find(obj.selectors.input)
            .bootstrapDatepicker("getDate");
          (month = date.getMonth() + 1), (year = date.getFullYear());
        }
        var dateValue = [year, obj.padNumber(month)].join("-");
        obj.submitRequest($container, dateValue);
      }),
      (obj.handleKeyDown = function (event) {
        event.keyCode === obj.keyCode.ENTER &&
          event.data.input.bootstrapDatepicker().trigger("changeMonth");
      }),
      (obj.handleShow = function (event) {
        event.data.datepickerButton.addClass(
          obj.selectors.buttonOpenClass.className()
        );
      }),
      (obj.handleHide = function (event) {
        var $datepickerButton = event.data.datepickerButton,
          state = $datepickerButton.data("tribeEventsState");
        event.data.observer.disconnect(),
          state.isTarget
            ? event.data.input.bootstrapDatepicker("show")
            : $datepickerButton
                .removeClass(obj.selectors.buttonOpenClass.className())
                .trigger("focus");
      }),
      (obj.handleMousedown = function (event) {
        var $datepickerButton = event.data.target,
          state = $datepickerButton.data("tribeEventsState");
        if ("touchstart" === event.type) {
          var tapHide =
            "hide" ===
            ($datepickerButton.hasClass(
              obj.selectors.buttonOpenClass.className()
            )
              ? "hide"
              : "show");
          return (
            (state.isTarget = !1),
            void $datepickerButton
              .data("tribeTapHide", tapHide)
              .data("tribeEventsState", state)
              .off("mousedown", obj.handleMousedown)
          );
        }
        (state.isTarget = !0),
          $datepickerButton.data("tribeEventsState", state);
      }),
      (obj.handleClick = function (event) {
        var $input = event.data.input,
          $datepickerButton = event.data.target,
          state = $datepickerButton.data("tribeEventsState"),
          method = $datepickerButton.hasClass(
            obj.selectors.buttonOpenClass.className()
          )
            ? "hide"
            : "show";
        $datepickerButton.data("tribeTapHide") ||
          ((state.isTarget = !1),
          $datepickerButton.data("tribeEventsState", state),
          $input.bootstrapDatepicker(method),
          "show" === method && $input.trigger("focus"));
      }),
      (obj.handleMutation = function (data) {
        var $container = data.container;
        return function (mutationsList, observer) {
          mutationsList.forEach(function (mutation) {
            "childList" === mutation.type &&
              $container
                .find(obj.selectors.datepickerDaysBody)
                .is(mutation.target) &&
              mutation.addedNodes.length &&
              $container.trigger("handleMutationMonthChange.tribeEvents");
          });
        };
      }),
      (obj.setToday = function (today) {
        var date = today;
        today.indexOf(" ") >= 0 && (date = today.split(" ")[0]),
          (obj.today = new Date(date));
      }),
      (obj.isSameAsToday = function (date, unit) {
        switch (unit) {
          case "year":
            return date.getFullYear() === obj.today.getUTCFullYear();
          case "month":
            return (
              obj.isSameAsToday(date, "year") &&
              date.getMonth() === obj.today.getUTCMonth()
            );
          case "day":
            return (
              obj.isSameAsToday(date, "month") &&
              date.getDate() === obj.today.getUTCDate()
            );
          default:
            return !1;
        }
      }),
      (obj.isBeforeToday = function (date, unit) {
        switch (unit) {
          case "year":
            return date.getFullYear() < obj.today.getUTCFullYear();
          case "month":
            return (
              obj.isBeforeToday(date, "year") ||
              (obj.isSameAsToday(date, "year") &&
                date.getMonth() < obj.today.getUTCMonth())
            );
          case "day":
            return (
              obj.isBeforeToday(date, "month") ||
              (obj.isSameAsToday(date, "month") &&
                date.getDate() < obj.today.getUTCDate())
            );
          default:
            return !1;
        }
      }),
      (obj.filterDayCells = function (date) {
        return obj.isBeforeToday(date, "day")
          ? "past"
          : obj.isSameAsToday(date, "day")
          ? "current"
          : void 0;
      }),
      (obj.filterMonthCells = function (date) {
        return obj.isBeforeToday(date, "month")
          ? "past"
          : obj.isSameAsToday(date, "month")
          ? "current"
          : void 0;
      }),
      (obj.filterYearCells = function (date) {
        return obj.isBeforeToday(date, "year")
          ? "past"
          : obj.isSameAsToday(date, "year")
          ? "current"
          : void 0;
      }),
      (obj.convertDateFormat = function (dateFormat) {
        var convertedDateFormat = dateFormat;
        return (
          Object.keys(obj.dateFormatMap).forEach(function (key) {
            convertedDateFormat = convertedDateFormat.replace(
              key,
              obj.dateFormatMap[key]
            );
          }),
          convertedDateFormat
        );
      }),
      (obj.initDateFormat = function (data) {
        var dateFormat = (data.date_formats || {}).compact,
          convertedDateFormat = obj.convertDateFormat(dateFormat);
        obj.options.format = convertedDateFormat;
      }),
      (obj.deinit = function (event, jqXHR, settings) {
        var $container = event.data.container;
        $container.trigger("beforeDatepickerDeinit.tribeEvents", [
          jqXHR,
          settings,
        ]);
        var $input = $container.find(obj.selectors.input),
          $datepickerButton = $container.find(obj.selectors.button);
        $input.bootstrapDatepicker("destroy").off(),
          $datepickerButton.off(),
          $container.off("beforeAjaxSuccess.tribeEvents", obj.deinit),
          $container.trigger("afterDatepickerDeinit.tribeEvents", [
            jqXHR,
            settings,
          ]);
      }),
      (obj.init = function (event, index, $container, data) {
        $container.trigger("beforeDatepickerInit.tribeEvents", [
          index,
          $container,
          data,
        ]);
        var $input = $container.find(obj.selectors.input),
          $datepickerButton = $container.find(obj.selectors.button),
          $prevIcon = $container.find(obj.selectors.prevIconTemplate).html(),
          $nextIcon = $container.find(obj.selectors.nextIconTemplate).html(),
          viewSlug = data.slug,
          isMonthView = "month" === viewSlug,
          changeEvent = isMonthView ? "changeMonth" : "changeDate",
          changeHandler = isMonthView
            ? obj.handleChangeMonth
            : obj.handleChangeDate;
        (obj.observer = new MutationObserver(
          obj.handleMutation({ container: $container })
        )),
          obj.setToday(data.today),
          obj.initDateFormat(data),
          (obj.options.weekStart = data.start_of_week),
          (obj.options.container = $container.find(
            obj.selectors.datepickerContainer
          )),
          (obj.options.minViewMode = isMonthView ? "year" : "month");
        var datepickerI18n =
            (window.tribe_l10n_datatables || {}).datepicker || {},
          nextText = datepickerI18n.nextText || "Next",
          prevText = datepickerI18n.prevText || "Prev";
        (obj.options.templates.leftArrow =
          $prevIcon +
          '<span class="tribe-common-a11y-visual-hide">' +
          prevText +
          "</span>"),
          (obj.options.templates.rightArrow =
            $nextIcon +
            '<span class="tribe-common-a11y-visual-hide">' +
            nextText +
            "</span>"),
          (obj.options.beforeShowDay = obj.filterDayCells),
          (obj.options.beforeShowMonth = obj.filterMonthCells),
          (obj.options.beforeShowYear = obj.filterYearCells),
          document.dir && "rtl" === document.dir && (obj.options.rtl = !0),
          document.lang && (obj.options.language = document.lang),
          $input
            .bootstrapDatepicker(obj.options)
            .on(changeEvent, { container: $container }, changeHandler)
            .on("show", { datepickerButton: $datepickerButton }, obj.handleShow)
            .on(
              "hide",
              {
                datepickerButton: $datepickerButton,
                input: $input,
                observer: obj.observer,
              },
              obj.handleHide
            ),
          isMonthView &&
            $input
              .bootstrapDatepicker()
              .on("keydown", { input: $input }, obj.handleKeyDown),
          $datepickerButton
            .on(
              "touchstart mousedown",
              { target: $datepickerButton },
              obj.handleMousedown
            )
            .on(
              "click",
              { target: $datepickerButton, input: $input },
              obj.handleClick
            )
            .data("tribeEventsState", { isTarget: !1 }),
          $container.on(
            "beforeAjaxSuccess.tribeEvents",
            { container: $container, viewSlug: viewSlug },
            obj.deinit
          ),
          $container.trigger("afterDatepickerInit.tribeEvents", [
            index,
            $container,
            data,
          ]);
      }),
      (obj.initDatepickerI18n = function () {
        var datepickerI18n =
          (window.tribe_l10n_datatables || {}).datepicker || {};
        datepickerI18n.dayNames &&
          ($.fn.bootstrapDatepicker.dates.en.days = datepickerI18n.dayNames),
          datepickerI18n.dayNamesShort &&
            ($.fn.bootstrapDatepicker.dates.en.daysShort =
              datepickerI18n.dayNamesShort),
          datepickerI18n.dayNamesMin &&
            ($.fn.bootstrapDatepicker.dates.en.daysMin =
              datepickerI18n.dayNamesMin),
          datepickerI18n.monthNames &&
            ($.fn.bootstrapDatepicker.dates.en.months =
              datepickerI18n.monthNames),
          datepickerI18n.monthNamesMin &&
            ($.fn.bootstrapDatepicker.dates.en.monthsShort =
              datepickerI18n.monthNamesMin),
          datepickerI18n.today &&
            ($.fn.bootstrapDatepicker.dates.en.today = datepickerI18n.today),
          datepickerI18n.clear &&
            ($.fn.bootstrapDatepicker.dates.en.clear = datepickerI18n.clear);
      }),
      (obj.initDatepicker = function () {
        obj.initDatepickerI18n(), (obj.state.initialized = !0);
      }),
      (obj.ready = function () {
        obj.initDatepicker(),
          obj.state.initialized &&
            $document.on(
              "afterSetup.tribeEvents",
              tribe.events.views.manager.selectors.container,
              obj.init
            );
      }),
      $(obj.ready);
  })(jQuery, tribe.events.views.datepicker);
/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

var tribe_tickets_rsvp = { num_attendees: 0, event: {} };
!(function ($, my) {
  "use strict";
  (my.init = function () {
    (my.$rsvp = $(".tribe-events-tickets-rsvp")),
      (my.attendee_template = $(
        document.getElementById("tribe-tickets-rsvp-tmpl")
      ).html()),
      my.$rsvp.on(
        "change input keyup",
        ".tribe-tickets-quantity",
        my.event.quantity_changed
      ),
      my.$rsvp.closest(".cart").on("submit", my.event.handle_submission),
      $(".tribe-rsvp-list").on(
        "click",
        ".attendee-meta-row .toggle",
        function () {
          $(this)
            .toggleClass("on")
            .siblings(".attendee-meta-details")
            .slideToggle();
        }
      );
  }),
    (my.quantity_changed = function ($quantity) {
      const $rsvp = $quantity.closest(".tribe-events-tickets-rsvp"),
        $rsvpQtys = $rsvp.find(".tribe-tickets-quantity");
      let rsvpQty = 0;
      $rsvpQtys.each(function () {
        rsvpQty += parseInt($(this).val(), 10);
      }),
        0 === rsvpQty
          ? $rsvp.removeClass("tribe-tickets-has-rsvp")
          : $rsvp.addClass("tribe-tickets-has-rsvp");
    }),
    (my.validate_rsvp_info = function ($form) {
      const $qty = $form.find("input.tribe-tickets-quantity"),
        $name = $form.find("input#tribe-tickets-full-name"),
        $email = $form.find("input#tribe-tickets-email");
      let rsvpQty = 0;
      return (
        $qty.each(function () {
          rsvpQty += parseInt($(this).val(), 10);
        }),
        $name.val().trim().length && $email.val().trim().length && rsvpQty
      );
    }),
    (my.validate_meta = function ($form) {
      let isMetaValid = !0;
      return (
        !!window.tribe_event_tickets_plus &&
          (isMetaValid =
            window.tribe_event_tickets_plus.meta.validate_meta($form)),
        isMetaValid
      );
    }),
    (my.event.quantity_changed = function () {
      my.quantity_changed($(this));
    }),
    (my.event.handle_submission = function (e) {
      const $form = $(this).closest("form"),
        $rsvpMessages = $form.find(
          ".tribe-rsvp-messages, .tribe-rsvp-message-confirmation-error"
        ),
        $etpMetaMessages = $form.find(
          ".tribe-event-tickets-meta-required-message"
        ),
        isRsvpInfoValid = my.validate_rsvp_info($form),
        isAttendeeMetaValid = my.validate_meta($form);
      return (
        !(!isRsvpInfoValid || !isAttendeeMetaValid) ||
        (isRsvpInfoValid ? $rsvpMessages.hide() : $rsvpMessages.show(),
        isAttendeeMetaValid
          ? ($etpMetaMessages.hide(),
            $form.removeClass("tribe-event-tickets-plus-meta-missing-required"))
          : ($form.addClass("tribe-event-tickets-plus-meta-missing-required"),
            $etpMetaMessages.show()),
        $("html, body").animate({ scrollTop: $form.offset().top - 100 }, 300),
        !1)
      );
    }),
    $(my.init);
})(jQuery, tribe_tickets_rsvp);
/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

var tribe_ticket_details = tribe_ticket_details || {};
!(function ($, obj) {
  "use strict";
  var $document = $(document);
  (obj.init = function (detailsElems) {
    obj.event_listeners();
  }),
    (obj.selectors = [
      ".tribe-tickets__item__details__summary--more",
      ".tribe-tickets__item__details__summary--less",
    ]),
    (obj.event_listeners = function () {
      $document.on("keyup", obj.selectors, function (event) {
        13 === event.keyCode && obj.toggle_open(event.target);
      }),
        $document.on("click", obj.selectors, function (event) {
          obj.toggle_open(event.target);
        });
    }),
    (obj.toggle_open = function (trigger) {
      if (trigger) {
        var $trigger = $(trigger);
        if (
          $trigger.hasClass("tribe-tickets__item__details__summary--more") ||
          $trigger.hasClass("tribe-tickets__item__details__summary--less")
        ) {
          var $parent = $trigger.closest(
              ".tribe-tickets__item__details__summary"
            ),
            $target = $("#" + $trigger.attr("aria-controls"));
          if ($target && $parent) {
            event.preventDefault();
            var onOff = !$parent.hasClass("tribe__details--open");
            $parent.toggleClass("tribe__details--open", onOff),
              $target.toggleClass("tribe__details--open", onOff);
          }
        }
      }
    }),
    $(function () {
      var detailsElems = document.querySelectorAll(
        ".tribe-tickets__item__details__summary"
      );
      detailsElems.length && obj.init(detailsElems);
    });
})(jQuery, tribe_ticket_details);
window.FPConfig = {
  delay: 0,
  ignoreKeywords: [
    "/wp-admin",
    "/wp-login.php",
    "/cart",
    "/checkout",
    "add-to-cart",
    "logout",
    "#",
    "?",
    ".png",
    ".jpeg",
    ".jpg",
    ".gif",
    ".svg",
    ".webp",
  ],
  maxRPS: 0,
  hoverDelay: 0,
};
("use strict");
function flyingPages() {
  var a = new Set(),
    b = new Set(),
    c = document.createElement("link"),
    d =
      c.relList &&
      c.relList.supports &&
      c.relList.supports("prefetch") &&
      window.IntersectionObserver &&
      "isIntersecting" in IntersectionObserverEntry.prototype,
    e =
      navigator.connection &&
      (navigator.connection.saveData ||
        (navigator.connection.effectiveType || "").includes("2g"));
  if (!e && d) {
    var f = function (a) {
        return new Promise(function (b, c) {
          var d = document.createElement("link");
          (d.rel = "prefetch"),
            (d.href = a),
            (d.onload = b),
            (d.onerror = c),
            document.head.appendChild(d);
        });
      },
      g = function (a) {
        var b = setTimeout(function () {
          return p();
        }, 5e3);
        f(a)
          ["catch"](function () {
            return p();
          })
          ["finally"](function () {
            return clearTimeout(b);
          });
      },
      h = function (c) {
        var d =
          !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1];
        if (!(b.has(c) || a.has(c))) {
          var e = window.location.origin;
          if (c.substring(0, e.length) === e && window.location.href !== c) {
            for (var f = 0; f < window.FPConfig.ignoreKeywords.length; f++)
              if (c.includes(window.FPConfig.ignoreKeywords[f])) return;
            d ? (g(c), b.add(c)) : a.add(c);
          }
        }
      },
      i = new IntersectionObserver(function (a) {
        a.forEach(function (a) {
          if (a.isIntersecting) {
            var b = a.target.href;
            h(b, !window.FPConfig.maxRPS);
          }
        });
      }),
      j = function () {
        return setInterval(function () {
          Array.from(a)
            .slice(0, window.FPConfig.maxRPS)
            .forEach(function (c) {
              g(c), b.add(c), a["delete"](c);
            });
        }, 1e3);
      },
      k = null,
      l = function (a) {
        var c = a.target.closest("a");
        c &&
          c.href &&
          !b.has(c.href) &&
          (k = setTimeout(function () {
            h(c.href, !0);
          }, window.FPConfig.hoverDelay));
      },
      m = function (a) {
        var c = a.target.closest("a");
        c && c.href && !b.has(c.href) && h(c.href, !0);
      },
      n = function (a) {
        var c = a.target.closest("a");
        c && c.href && !b.has(c.href) && clearTimeout(k);
      },
      o =
        window.requestIdleCallback ||
        function (a) {
          var b = Date.now();
          return setTimeout(function () {
            a({
              didTimeout: !1,
              timeRemaining: function timeRemaining() {
                var a = Math.max;
                return a(0, 50 - (Date.now() - b));
              },
            });
          }, 1);
        },
      p = function () {
        document.querySelectorAll("a").forEach(function (a) {
          return i.unobserve(a);
        }),
          a.clear(),
          document.removeEventListener("mouseover", l, !0),
          document.removeEventListener("mouseout", n, !0),
          document.removeEventListener("touchstart", m, !0);
      };
    (window.FPConfig = Object.assign(
      { delay: 0, ignoreKeywords: [], maxRPS: 3, hoverDelay: 50 },
      window.FPConfig
    )),
      j(),
      o(function () {
        return setTimeout(function () {
          return document.querySelectorAll("a").forEach(function (a) {
            return i.observe(a);
          });
        }, 1e3 * window.FPConfig.delay);
      });
    var q = { capture: !0, passive: !0 };
    document.addEventListener("mouseover", l, q),
      document.addEventListener("mouseout", n, q),
      document.addEventListener("touchstart", m, q);
  }
}
flyingPages();
/*! lazysizes - v5.3.1 */
!(function (e) {
  var t = (function (u, D, f) {
    "use strict";
    var k, H;
    if (
      ((function () {
        var e;
        var t = {
          lazyClass: "lazyload",
          loadedClass: "lazyloaded",
          loadingClass: "lazyloading",
          preloadClass: "lazypreload",
          errorClass: "lazyerror",
          autosizesClass: "lazyautosizes",
          fastLoadedClass: "ls-is-cached",
          iframeLoadMode: 1,
          srcAttr: "data-src",
          srcsetAttr: "data-srcset",
          sizesAttr: "data-sizes",
          minSize: 40,
          customMedia: {},
          init: true,
          expFactor: 1.5,
          hFac: 0.8,
          loadMode: 2,
          loadHidden: true,
          ricTimeout: 0,
          throttleDelay: 125,
        };
        H = u.lazySizesConfig || u.lazysizesConfig || {};
        for (e in t) {
          if (!(e in H)) {
            H[e] = t[e];
          }
        }
      })(),
      !D || !D.getElementsByClassName)
    ) {
      return { init: function () {}, cfg: H, noSupport: true };
    }
    var O = D.documentElement,
      i = u.HTMLPictureElement,
      P = "addEventListener",
      $ = "getAttribute",
      q = u[P].bind(u),
      I = u.setTimeout,
      U = u.requestAnimationFrame || I,
      o = u.requestIdleCallback,
      j = /^picture$/i,
      r = ["load", "error", "lazyincluded", "_lazyloaded"],
      a = {},
      G = Array.prototype.forEach,
      J = function (e, t) {
        if (!a[t]) {
          a[t] = new RegExp("(\\s|^)" + t + "(\\s|$)");
        }
        return a[t].test(e[$]("class") || "") && a[t];
      },
      K = function (e, t) {
        if (!J(e, t)) {
          e.setAttribute("class", (e[$]("class") || "").trim() + " " + t);
        }
      },
      Q = function (e, t) {
        var a;
        if ((a = J(e, t))) {
          e.setAttribute("class", (e[$]("class") || "").replace(a, " "));
        }
      },
      V = function (t, a, e) {
        var i = e ? P : "removeEventListener";
        if (e) {
          V(t, a);
        }
        r.forEach(function (e) {
          t[i](e, a);
        });
      },
      X = function (e, t, a, i, r) {
        var n = D.createEvent("Event");
        if (!a) {
          a = {};
        }
        a.instance = k;
        n.initEvent(t, !i, !r);
        n.detail = a;
        e.dispatchEvent(n);
        return n;
      },
      Y = function (e, t) {
        var a;
        if (!i && (a = u.picturefill || H.pf)) {
          if (t && t.src && !e[$]("srcset")) {
            e.setAttribute("srcset", t.src);
          }
          a({ reevaluate: true, elements: [e] });
        } else if (t && t.src) {
          e.src = t.src;
        }
      },
      Z = function (e, t) {
        return (getComputedStyle(e, null) || {})[t];
      },
      s = function (e, t, a) {
        a = a || e.offsetWidth;
        while (a < H.minSize && t && !e._lazysizesWidth) {
          a = t.offsetWidth;
          t = t.parentNode;
        }
        return a;
      },
      ee = (function () {
        var a, i;
        var t = [];
        var r = [];
        var n = t;
        var s = function () {
          var e = n;
          n = t.length ? r : t;
          a = true;
          i = false;
          while (e.length) {
            e.shift()();
          }
          a = false;
        };
        var e = function (e, t) {
          if (a && !t) {
            e.apply(this, arguments);
          } else {
            n.push(e);
            if (!i) {
              i = true;
              (D.hidden ? I : U)(s);
            }
          }
        };
        e._lsFlush = s;
        return e;
      })(),
      te = function (a, e) {
        return e
          ? function () {
              ee(a);
            }
          : function () {
              var e = this;
              var t = arguments;
              ee(function () {
                a.apply(e, t);
              });
            };
      },
      ae = function (e) {
        var a;
        var i = 0;
        var r = H.throttleDelay;
        var n = H.ricTimeout;
        var t = function () {
          a = false;
          i = f.now();
          e();
        };
        var s =
          o && n > 49
            ? function () {
                o(t, { timeout: n });
                if (n !== H.ricTimeout) {
                  n = H.ricTimeout;
                }
              }
            : te(function () {
                I(t);
              }, true);
        return function (e) {
          var t;
          if ((e = e === true)) {
            n = 33;
          }
          if (a) {
            return;
          }
          a = true;
          t = r - (f.now() - i);
          if (t < 0) {
            t = 0;
          }
          if (e || t < 9) {
            s();
          } else {
            I(s, t);
          }
        };
      },
      ie = function (e) {
        var t, a;
        var i = 99;
        var r = function () {
          t = null;
          e();
        };
        var n = function () {
          var e = f.now() - a;
          if (e < i) {
            I(n, i - e);
          } else {
            (o || r)(r);
          }
        };
        return function () {
          a = f.now();
          if (!t) {
            t = I(n, i);
          }
        };
      },
      e = (function () {
        var v, m, c, h, e;
        var y, z, g, p, C, b, A;
        var n = /^img$/i;
        var d = /^iframe$/i;
        var E = "onscroll" in u && !/(gle|ing)bot/.test(navigator.userAgent);
        var _ = 0;
        var w = 0;
        var M = 0;
        var N = -1;
        var L = function (e) {
          M--;
          if (!e || M < 0 || !e.target) {
            M = 0;
          }
        };
        var x = function (e) {
          if (A == null) {
            A = Z(D.body, "visibility") == "hidden";
          }
          return (
            A ||
            !(
              Z(e.parentNode, "visibility") == "hidden" &&
              Z(e, "visibility") == "hidden"
            )
          );
        };
        var W = function (e, t) {
          var a;
          var i = e;
          var r = x(e);
          g -= t;
          b += t;
          p -= t;
          C += t;
          while (r && (i = i.offsetParent) && i != D.body && i != O) {
            r = (Z(i, "opacity") || 1) > 0;
            if (r && Z(i, "overflow") != "visible") {
              a = i.getBoundingClientRect();
              r =
                C > a.left && p < a.right && b > a.top - 1 && g < a.bottom + 1;
            }
          }
          return r;
        };
        var t = function () {
          var e, t, a, i, r, n, s, o, l, u, f, c;
          var d = k.elements;
          if ((h = H.loadMode) && M < 8 && (e = d.length)) {
            t = 0;
            N++;
            for (; t < e; t++) {
              if (!d[t] || d[t]._lazyRace) {
                continue;
              }
              if (!E || (k.prematureUnveil && k.prematureUnveil(d[t]))) {
                R(d[t]);
                continue;
              }
              if (!(o = d[t][$]("data-expand")) || !(n = o * 1)) {
                n = w;
              }
              if (!u) {
                u =
                  !H.expand || H.expand < 1
                    ? O.clientHeight > 500 && O.clientWidth > 500
                      ? 500
                      : 370
                    : H.expand;
                k._defEx = u;
                f = u * H.expFactor;
                c = H.hFac;
                A = null;
                if (w < f && M < 1 && N > 2 && h > 2 && !D.hidden) {
                  w = f;
                  N = 0;
                } else if (h > 1 && N > 1 && M < 6) {
                  w = u;
                } else {
                  w = _;
                }
              }
              if (l !== n) {
                y = innerWidth + n * c;
                z = innerHeight + n;
                s = n * -1;
                l = n;
              }
              a = d[t].getBoundingClientRect();
              if (
                (b = a.bottom) >= s &&
                (g = a.top) <= z &&
                (C = a.right) >= s * c &&
                (p = a.left) <= y &&
                (b || C || p || g) &&
                (H.loadHidden || x(d[t])) &&
                ((m && M < 3 && !o && (h < 3 || N < 4)) || W(d[t], n))
              ) {
                R(d[t]);
                r = true;
                if (M > 9) {
                  break;
                }
              } else if (
                !r &&
                m &&
                !i &&
                M < 4 &&
                N < 4 &&
                h > 2 &&
                (v[0] || H.preloadAfterLoad) &&
                (v[0] ||
                  (!o && (b || C || p || g || d[t][$](H.sizesAttr) != "auto")))
              ) {
                i = v[0] || d[t];
              }
            }
            if (i && !r) {
              R(i);
            }
          }
        };
        var a = ae(t);
        var S = function (e) {
          var t = e.target;
          if (t._lazyCache) {
            delete t._lazyCache;
            return;
          }
          L(e);
          K(t, H.loadedClass);
          Q(t, H.loadingClass);
          V(t, B);
          X(t, "lazyloaded");
        };
        var i = te(S);
        var B = function (e) {
          i({ target: e.target });
        };
        var T = function (e, t) {
          var a = e.getAttribute("data-load-mode") || H.iframeLoadMode;
          if (a == 0) {
            e.contentWindow.location.replace(t);
          } else if (a == 1) {
            e.src = t;
          }
        };
        var F = function (e) {
          var t;
          var a = e[$](H.srcsetAttr);
          if ((t = H.customMedia[e[$]("data-media") || e[$]("media")])) {
            e.setAttribute("media", t);
          }
          if (a) {
            e.setAttribute("srcset", a);
          }
        };
        var s = te(function (t, e, a, i, r) {
          var n, s, o, l, u, f;
          if (!(u = X(t, "lazybeforeunveil", e)).defaultPrevented) {
            if (i) {
              if (a) {
                K(t, H.autosizesClass);
              } else {
                t.setAttribute("sizes", i);
              }
            }
            s = t[$](H.srcsetAttr);
            n = t[$](H.srcAttr);
            if (r) {
              o = t.parentNode;
              l = o && j.test(o.nodeName || "");
            }
            f = e.firesLoad || ("src" in t && (s || n || l));
            u = { target: t };
            K(t, H.loadingClass);
            if (f) {
              clearTimeout(c);
              c = I(L, 2500);
              V(t, B, true);
            }
            if (l) {
              G.call(o.getElementsByTagName("source"), F);
            }
            if (s) {
              t.setAttribute("srcset", s);
            } else if (n && !l) {
              if (d.test(t.nodeName)) {
                T(t, n);
              } else {
                t.src = n;
              }
            }
            if (r && (s || l)) {
              Y(t, { src: n });
            }
          }
          if (t._lazyRace) {
            delete t._lazyRace;
          }
          Q(t, H.lazyClass);
          ee(function () {
            var e = t.complete && t.naturalWidth > 1;
            if (!f || e) {
              if (e) {
                K(t, H.fastLoadedClass);
              }
              S(u);
              t._lazyCache = true;
              I(function () {
                if ("_lazyCache" in t) {
                  delete t._lazyCache;
                }
              }, 9);
            }
            if (t.loading == "lazy") {
              M--;
            }
          }, true);
        });
        var R = function (e) {
          if (e._lazyRace) {
            return;
          }
          var t;
          var a = n.test(e.nodeName);
          var i = a && (e[$](H.sizesAttr) || e[$]("sizes"));
          var r = i == "auto";
          if (
            (r || !m) &&
            a &&
            (e[$]("src") || e.srcset) &&
            !e.complete &&
            !J(e, H.errorClass) &&
            J(e, H.lazyClass)
          ) {
            return;
          }
          t = X(e, "lazyunveilread").detail;
          if (r) {
            re.updateElem(e, true, e.offsetWidth);
          }
          e._lazyRace = true;
          M++;
          s(e, t, r, i, a);
        };
        var r = ie(function () {
          H.loadMode = 3;
          a();
        });
        var o = function () {
          if (H.loadMode == 3) {
            H.loadMode = 2;
          }
          r();
        };
        var l = function () {
          if (m) {
            return;
          }
          if (f.now() - e < 999) {
            I(l, 999);
            return;
          }
          m = true;
          H.loadMode = 3;
          a();
          q("scroll", o, true);
        };
        return {
          _: function () {
            e = f.now();
            k.elements = D.getElementsByClassName(H.lazyClass);
            v = D.getElementsByClassName(H.lazyClass + " " + H.preloadClass);
            q("scroll", a, true);
            q("resize", a, true);
            q("pageshow", function (e) {
              if (e.persisted) {
                var t = D.querySelectorAll("." + H.loadingClass);
                if (t.length && t.forEach) {
                  U(function () {
                    t.forEach(function (e) {
                      if (e.complete) {
                        R(e);
                      }
                    });
                  });
                }
              }
            });
            if (u.MutationObserver) {
              new MutationObserver(a).observe(O, {
                childList: true,
                subtree: true,
                attributes: true,
              });
            } else {
              O[P]("DOMNodeInserted", a, true);
              O[P]("DOMAttrModified", a, true);
              setInterval(a, 999);
            }
            q("hashchange", a, true);
            [
              "focus",
              "mouseover",
              "click",
              "load",
              "transitionend",
              "animationend",
            ].forEach(function (e) {
              D[P](e, a, true);
            });
            if (/d$|^c/.test(D.readyState)) {
              l();
            } else {
              q("load", l);
              D[P]("DOMContentLoaded", a);
              I(l, 2e4);
            }
            if (k.elements.length) {
              t();
              ee._lsFlush();
            } else {
              a();
            }
          },
          checkElems: a,
          unveil: R,
          _aLSL: o,
        };
      })(),
      re = (function () {
        var a;
        var n = te(function (e, t, a, i) {
          var r, n, s;
          e._lazysizesWidth = i;
          i += "px";
          e.setAttribute("sizes", i);
          if (j.test(t.nodeName || "")) {
            r = t.getElementsByTagName("source");
            for (n = 0, s = r.length; n < s; n++) {
              r[n].setAttribute("sizes", i);
            }
          }
          if (!a.detail.dataAttr) {
            Y(e, a.detail);
          }
        });
        var i = function (e, t, a) {
          var i;
          var r = e.parentNode;
          if (r) {
            a = s(e, r, a);
            i = X(e, "lazybeforesizes", { width: a, dataAttr: !!t });
            if (!i.defaultPrevented) {
              a = i.detail.width;
              if (a && a !== e._lazysizesWidth) {
                n(e, r, i, a);
              }
            }
          }
        };
        var e = function () {
          var e;
          var t = a.length;
          if (t) {
            e = 0;
            for (; e < t; e++) {
              i(a[e]);
            }
          }
        };
        var t = ie(e);
        return {
          _: function () {
            a = D.getElementsByClassName(H.autosizesClass);
            q("resize", t);
          },
          checkElems: t,
          updateElem: i,
        };
      })(),
      t = function () {
        if (!t.i && D.getElementsByClassName) {
          t.i = true;
          re._();
          e._();
        }
      };
    return (
      I(function () {
        H.init && t();
      }),
      (k = {
        cfg: H,
        autoSizer: re,
        loader: e,
        init: t,
        uP: Y,
        aC: K,
        rC: Q,
        hC: J,
        fire: X,
        gW: s,
        rAF: ee,
      })
    );
  })(e, e.document, Date);
  (e.lazySizes = t),
    "object" == typeof module && module.exports && (module.exports = t);
})("undefined" != typeof window ? window : {});
!(function (e) {
  ("object" == typeof exports && "undefined" != typeof module) ||
  "function" != typeof define ||
  !define.amd
    ? e()
    : define("inert", e);
})(function () {
  "use strict";
  var e,
    t,
    n,
    i,
    o,
    r,
    s = function (e, t, n) {
      return t && a(e.prototype, t), n && a(e, n), e;
    };
  function a(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function d(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function u(e, t) {
    d(this, u),
      (this._inertManager = t),
      (this._rootElement = e),
      (this._managedNodes = new Set()),
      this._rootElement.hasAttribute("aria-hidden")
        ? (this._savedAriaHidden =
            this._rootElement.getAttribute("aria-hidden"))
        : (this._savedAriaHidden = null),
      this._rootElement.setAttribute("aria-hidden", "true"),
      this._makeSubtreeUnfocusable(this._rootElement),
      (this._observer = new MutationObserver(this._onMutation.bind(this))),
      this._observer.observe(this._rootElement, {
        attributes: !0,
        childList: !0,
        subtree: !0,
      });
  }
  function h(e, t) {
    d(this, h),
      (this._node = e),
      (this._overrodeFocusMethod = !1),
      (this._inertRoots = new Set([t])),
      (this._savedTabIndex = null),
      (this._destroyed = !1),
      this.ensureUntabbable();
  }
  function l(e) {
    if ((d(this, l), !e))
      throw new Error(
        "Missing required argument; InertManager needs to wrap a document."
      );
    (this._document = e),
      (this._managedNodes = new Map()),
      (this._inertRoots = new Map()),
      (this._observer = new MutationObserver(this._watchForInert.bind(this))),
      _(e.head || e.body || e.documentElement),
      "loading" === e.readyState
        ? e.addEventListener(
            "DOMContentLoaded",
            this._onDocumentLoaded.bind(this)
          )
        : this._onDocumentLoaded();
  }
  function c(e, t, n) {
    if (e.nodeType == Node.ELEMENT_NODE) {
      var i = e;
      if ((s = (t && t(i), i.shadowRoot))) return void c(s, t, s);
      if ("content" == i.localName) {
        for (
          var o = (s = i).getDistributedNodes ? s.getDistributedNodes() : [],
            r = 0;
          r < o.length;
          r++
        )
          c(o[r], t, n);
        return;
      }
      if ("slot" == i.localName) {
        for (
          var s,
            a = (s = i).assignedNodes ? s.assignedNodes({ flatten: !0 }) : [],
            d = 0;
          d < a.length;
          d++
        )
          c(a[d], t, n);
        return;
      }
    }
    for (var u = e.firstChild; null != u; ) c(u, t, n), (u = u.nextSibling);
  }
  function _(e) {
    var t;
    e.querySelector("style#inert-style, link#inert-style") ||
      ((t = document.createElement("style")).setAttribute("id", "inert-style"),
      (t.textContent =
        "\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n"),
      e.appendChild(t));
  }
  "undefined" != typeof window &&
    ((e = Array.prototype.slice),
    (t = Element.prototype.matches || Element.prototype.msMatchesSelector),
    (n = [
      "a[href]",
      "area[href]",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "button:not([disabled])",
      "details",
      "summary",
      "iframe",
      "object",
      "embed",
      "[contenteditable]",
    ].join(",")),
    s(u, [
      {
        key: "destructor",
        value: function () {
          this._observer.disconnect(),
            this._rootElement &&
              (null !== this._savedAriaHidden
                ? this._rootElement.setAttribute(
                    "aria-hidden",
                    this._savedAriaHidden
                  )
                : this._rootElement.removeAttribute("aria-hidden")),
            this._managedNodes.forEach(function (e) {
              this._unmanageNode(e.node);
            }, this),
            (this._observer = null),
            (this._rootElement = null),
            (this._managedNodes = null),
            (this._inertManager = null);
        },
      },
      {
        key: "_makeSubtreeUnfocusable",
        value: function (e) {
          var t = this,
            n =
              (c(e, function (e) {
                return t._visitNode(e);
              }),
              document.activeElement);
          if (!document.body.contains(e)) {
            for (var i = e, o = void 0; i; ) {
              if (i.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                o = i;
                break;
              }
              i = i.parentNode;
            }
            o && (n = o.activeElement);
          }
          e.contains(n) &&
            (n.blur(), n === document.activeElement && document.body.focus());
        },
      },
      {
        key: "_visitNode",
        value: function (e) {
          e.nodeType === Node.ELEMENT_NODE &&
            (e !== this._rootElement &&
              e.hasAttribute("inert") &&
              this._adoptInertRoot(e),
            (t.call(e, n) || e.hasAttribute("tabindex")) &&
              this._manageNode(e));
        },
      },
      {
        key: "_manageNode",
        value: function (e) {
          (e = this._inertManager.register(e, this)), this._managedNodes.add(e);
        },
      },
      {
        key: "_unmanageNode",
        value: function (e) {
          (e = this._inertManager.deregister(e, this)) &&
            this._managedNodes.delete(e);
        },
      },
      {
        key: "_unmanageSubtree",
        value: function (e) {
          var t = this;
          c(e, function (e) {
            return t._unmanageNode(e);
          });
        },
      },
      {
        key: "_adoptInertRoot",
        value: function (e) {
          var t = this._inertManager.getInertRoot(e);
          t ||
            (this._inertManager.setInert(e, !0),
            (t = this._inertManager.getInertRoot(e))),
            t.managedNodes.forEach(function (e) {
              this._manageNode(e.node);
            }, this);
        },
      },
      {
        key: "_onMutation",
        value: function (t, n) {
          t.forEach(function (t) {
            var n,
              i = t.target;
            "childList" === t.type
              ? (e.call(t.addedNodes).forEach(function (e) {
                  this._makeSubtreeUnfocusable(e);
                }, this),
                e.call(t.removedNodes).forEach(function (e) {
                  this._unmanageSubtree(e);
                }, this))
              : "attributes" === t.type &&
                ("tabindex" === t.attributeName
                  ? this._manageNode(i)
                  : i !== this._rootElement &&
                    "inert" === t.attributeName &&
                    i.hasAttribute("inert") &&
                    (this._adoptInertRoot(i),
                    (n = this._inertManager.getInertRoot(i)),
                    this._managedNodes.forEach(function (e) {
                      i.contains(e.node) && n._manageNode(e.node);
                    })));
          }, this);
        },
      },
      {
        key: "managedNodes",
        get: function () {
          return new Set(this._managedNodes);
        },
      },
      {
        key: "hasSavedAriaHidden",
        get: function () {
          return null !== this._savedAriaHidden;
        },
      },
      {
        key: "savedAriaHidden",
        set: function (e) {
          this._savedAriaHidden = e;
        },
        get: function () {
          return this._savedAriaHidden;
        },
      },
    ]),
    (i = u),
    s(h, [
      {
        key: "destructor",
        value: function () {
          var e;
          this._throwIfDestroyed(),
            this._node &&
              this._node.nodeType === Node.ELEMENT_NODE &&
              ((e = this._node),
              null !== this._savedTabIndex
                ? e.setAttribute("tabindex", this._savedTabIndex)
                : e.removeAttribute("tabindex"),
              this._overrodeFocusMethod && delete e.focus),
            (this._node = null),
            (this._inertRoots = null),
            (this._destroyed = !0);
        },
      },
      {
        key: "_throwIfDestroyed",
        value: function () {
          if (this.destroyed)
            throw new Error("Trying to access destroyed InertNode");
        },
      },
      {
        key: "ensureUntabbable",
        value: function () {
          var e;
          this.node.nodeType === Node.ELEMENT_NODE &&
            ((e = this.node),
            t.call(e, n)
              ? (-1 === e.tabIndex && this.hasSavedTabIndex) ||
                (e.hasAttribute("tabindex") &&
                  (this._savedTabIndex = e.tabIndex),
                e.setAttribute("tabindex", "-1"),
                e.nodeType === Node.ELEMENT_NODE &&
                  ((e.focus = function () {}),
                  (this._overrodeFocusMethod = !0)))
              : e.hasAttribute("tabindex") &&
                ((this._savedTabIndex = e.tabIndex),
                e.removeAttribute("tabindex")));
        },
      },
      {
        key: "addInertRoot",
        value: function (e) {
          this._throwIfDestroyed(), this._inertRoots.add(e);
        },
      },
      {
        key: "removeInertRoot",
        value: function (e) {
          this._throwIfDestroyed(),
            this._inertRoots.delete(e),
            0 === this._inertRoots.size && this.destructor();
        },
      },
      {
        key: "destroyed",
        get: function () {
          return this._destroyed;
        },
      },
      {
        key: "hasSavedTabIndex",
        get: function () {
          return null !== this._savedTabIndex;
        },
      },
      {
        key: "node",
        get: function () {
          return this._throwIfDestroyed(), this._node;
        },
      },
      {
        key: "savedTabIndex",
        set: function (e) {
          this._throwIfDestroyed(), (this._savedTabIndex = e);
        },
        get: function () {
          return this._throwIfDestroyed(), this._savedTabIndex;
        },
      },
    ]),
    (o = h),
    s(l, [
      {
        key: "setInert",
        value: function (e, t) {
          if (t) {
            if (
              !this._inertRoots.has(e) &&
              ((t = new i(e, this)),
              e.setAttribute("inert", ""),
              this._inertRoots.set(e, t),
              !this._document.body.contains(e))
            )
              for (var n = e.parentNode; n; )
                11 === n.nodeType && _(n), (n = n.parentNode);
          } else
            this._inertRoots.has(e) &&
              (this._inertRoots.get(e).destructor(),
              this._inertRoots.delete(e),
              e.removeAttribute("inert"));
        },
      },
      {
        key: "getInertRoot",
        value: function (e) {
          return this._inertRoots.get(e);
        },
      },
      {
        key: "register",
        value: function (e, t) {
          var n = this._managedNodes.get(e);
          return (
            void 0 !== n ? n.addInertRoot(t) : (n = new o(e, t)),
            this._managedNodes.set(e, n),
            n
          );
        },
      },
      {
        key: "deregister",
        value: function (e, t) {
          var n = this._managedNodes.get(e);
          return n
            ? (n.removeInertRoot(t),
              n.destroyed && this._managedNodes.delete(e),
              n)
            : null;
        },
      },
      {
        key: "_onDocumentLoaded",
        value: function () {
          e
            .call(this._document.querySelectorAll("[inert]"))
            .forEach(function (e) {
              this.setInert(e, !0);
            }, this),
            this._observer.observe(
              this._document.body || this._document.documentElement,
              { attributes: !0, subtree: !0, childList: !0 }
            );
        },
      },
      {
        key: "_watchForInert",
        value: function (n, i) {
          var o = this;
          n.forEach(function (n) {
            switch (n.type) {
              case "childList":
                e.call(n.addedNodes).forEach(function (n) {
                  var i;
                  n.nodeType === Node.ELEMENT_NODE &&
                    ((i = e.call(n.querySelectorAll("[inert]"))),
                    t.call(n, "[inert]") && i.unshift(n),
                    i.forEach(function (e) {
                      this.setInert(e, !0);
                    }, o));
                }, o);
                break;
              case "attributes":
                if ("inert" !== n.attributeName) return;
                var i = n.target,
                  r = i.hasAttribute("inert");
                o.setInert(i, r);
            }
          }, this);
        },
      },
    ]),
    (s = l),
    HTMLElement.prototype.hasOwnProperty("inert") ||
      ((r = new s(document)),
      Object.defineProperty(HTMLElement.prototype, "inert", {
        enumerable: !0,
        get: function () {
          return this.hasAttribute("inert");
        },
        set: function (e) {
          r.setInert(this, e);
        },
      })));
});
var runtime = (function (t) {
  "use strict";
  var e,
    r = Object.prototype,
    n = r.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (t, e, r) {
        t[e] = r.value;
      },
    i =
      (w = "function" == typeof Symbol ? Symbol : {}).iterator || "@@iterator",
    a = w.asyncIterator || "@@asyncIterator",
    c = w.toStringTag || "@@toStringTag";
  function u(t, e, r) {
    return (
      Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      t[e]
    );
  }
  try {
    u({}, "");
  } catch (r) {
    u = function (t, e, r) {
      return (t[e] = r);
    };
  }
  function h(t, r, n, i) {
    var a, c, u, h;
    (r = r && r.prototype instanceof v ? r : v),
      (r = Object.create(r.prototype)),
      (i = new O(i || []));
    return (
      o(r, "_invoke", {
        value:
          ((a = t),
          (c = n),
          (u = i),
          (h = f),
          function (t, r) {
            if (h === p) throw new Error("Generator is already running");
            if (h === y) {
              if ("throw" === t) throw r;
              return { value: e, done: !0 };
            }
            for (u.method = t, u.arg = r; ; ) {
              var n = u.delegate;
              if (
                n &&
                ((n = (function t(r, n) {
                  var o = n.method,
                    i = r.iterator[o];
                  return i === e
                    ? ((n.delegate = null),
                      ("throw" === o &&
                        r.iterator.return &&
                        ((n.method = "return"),
                        (n.arg = e),
                        t(r, n),
                        "throw" === n.method)) ||
                        ("return" !== o &&
                          ((n.method = "throw"),
                          (n.arg = new TypeError(
                            "The iterator does not provide a '" + o + "' method"
                          )))),
                      g)
                    : "throw" === (o = l(i, r.iterator, n.arg)).type
                    ? ((n.method = "throw"),
                      (n.arg = o.arg),
                      (n.delegate = null),
                      g)
                    : (i = o.arg)
                    ? i.done
                      ? ((n[r.resultName] = i.value),
                        (n.next = r.nextLoc),
                        "return" !== n.method &&
                          ((n.method = "next"), (n.arg = e)),
                        (n.delegate = null),
                        g)
                      : i
                    : ((n.method = "throw"),
                      (n.arg = new TypeError(
                        "iterator result is not an object"
                      )),
                      (n.delegate = null),
                      g);
                })(n, u)),
                n)
              ) {
                if (n === g) continue;
                return n;
              }
              if ("next" === u.method) u.sent = u._sent = u.arg;
              else if ("throw" === u.method) {
                if (h === f) throw ((h = y), u.arg);
                u.dispatchException(u.arg);
              } else "return" === u.method && u.abrupt("return", u.arg);
              if (((h = p), "normal" === (n = l(a, c, u)).type)) {
                if (((h = u.done ? y : s), n.arg !== g))
                  return { value: n.arg, done: u.done };
              } else
                "throw" === n.type &&
                  ((h = y), (u.method = "throw"), (u.arg = n.arg));
            }
          }),
      }),
      r
    );
  }
  function l(t, e, r) {
    try {
      return { type: "normal", arg: t.call(e, r) };
    } catch (t) {
      return { type: "throw", arg: t };
    }
  }
  t.wrap = h;
  var f = "suspendedStart",
    s = "suspendedYield",
    p = "executing",
    y = "completed",
    g = {};
  function v() {}
  function d() {}
  function m() {}
  var w,
    b,
    L =
      ((b =
        (b =
          (u((w = {}), i, function () {
            return this;
          }),
          Object.getPrototypeOf)) && b(b(k([])))) &&
        b !== r &&
        n.call(b, i) &&
        (w = b),
      (m.prototype = v.prototype = Object.create(w)));
  function x(t) {
    ["next", "throw", "return"].forEach(function (e) {
      u(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function E(t, e) {
    var r;
    o(this, "_invoke", {
      value: function (o, i) {
        function a() {
          return new e(function (r, a) {
            !(function r(o, i, a, c) {
              var u;
              if ("throw" !== (o = l(t[o], t, i)).type)
                return (i = (u = o.arg).value) &&
                  "object" == typeof i &&
                  n.call(i, "__await")
                  ? e.resolve(i.__await).then(
                      function (t) {
                        r("next", t, a, c);
                      },
                      function (t) {
                        r("throw", t, a, c);
                      }
                    )
                  : e.resolve(i).then(
                      function (t) {
                        (u.value = t), a(u);
                      },
                      function (t) {
                        return r("throw", t, a, c);
                      }
                    );
              c(o.arg);
            })(o, i, r, a);
          });
        }
        return (r = r ? r.then(a, a) : a());
      },
    });
  }
  function j(t) {
    var e = { tryLoc: t[0] };
    1 in t && (e.catchLoc = t[1]),
      2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
      this.tryEntries.push(e);
  }
  function _(t) {
    var e = t.completion || {};
    (e.type = "normal"), delete e.arg, (t.completion = e);
  }
  function O(t) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      t.forEach(j, this),
      this.reset(!0);
  }
  function k(t) {
    if (t || "" === t) {
      var r,
        o = t[i];
      if (o) return o.call(t);
      if ("function" == typeof t.next) return t;
      if (!isNaN(t.length))
        return (
          (r = -1),
          ((o = function o() {
            for (; ++r < t.length; )
              if (n.call(t, r)) return (o.value = t[r]), (o.done = !1), o;
            return (o.value = e), (o.done = !0), o;
          }).next = o)
        );
    }
    throw new TypeError(typeof t + " is not iterable");
  }
  return (
    o(L, "constructor", { value: (d.prototype = m), configurable: !0 }),
    o(m, "constructor", { value: d, configurable: !0 }),
    (d.displayName = u(m, c, "GeneratorFunction")),
    (t.isGeneratorFunction = function (t) {
      return (
        !!(t = "function" == typeof t && t.constructor) &&
        (t === d || "GeneratorFunction" === (t.displayName || t.name))
      );
    }),
    (t.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, m)
          : ((t.__proto__ = m), u(t, c, "GeneratorFunction")),
        (t.prototype = Object.create(L)),
        t
      );
    }),
    (t.awrap = function (t) {
      return { __await: t };
    }),
    x(E.prototype),
    u(E.prototype, a, function () {
      return this;
    }),
    (t.AsyncIterator = E),
    (t.async = function (e, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new E(h(e, r, n, o), i);
      return t.isGeneratorFunction(r)
        ? a
        : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
    }),
    x(L),
    u(L, c, "Generator"),
    u(L, i, function () {
      return this;
    }),
    u(L, "toString", function () {
      return "[object Generator]";
    }),
    (t.keys = function (t) {
      var e,
        r = Object(t),
        n = [];
      for (e in r) n.push(e);
      return (
        n.reverse(),
        function t() {
          for (; n.length; ) {
            var e = n.pop();
            if (e in r) return (t.value = e), (t.done = !1), t;
          }
          return (t.done = !0), t;
        }
      );
    }),
    (t.values = k),
    (O.prototype = {
      constructor: O,
      reset: function (t) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = e),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = e),
          this.tryEntries.forEach(_),
          !t)
        )
          for (var r in this)
            "t" === r.charAt(0) &&
              n.call(this, r) &&
              !isNaN(+r.slice(1)) &&
              (this[r] = e);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (t) {
        if (this.done) throw t;
        var r = this;
        function o(n, o) {
          return (
            (c.type = "throw"),
            (c.arg = t),
            (r.next = n),
            o && ((r.method = "next"), (r.arg = e)),
            !!o
          );
        }
        for (var i = this.tryEntries.length - 1; 0 <= i; --i) {
          var a = this.tryEntries[i],
            c = a.completion;
          if ("root" === a.tryLoc) return o("end");
          if (a.tryLoc <= this.prev) {
            var u = n.call(a, "catchLoc"),
              h = n.call(a, "finallyLoc");
            if (u && h) {
              if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              if (this.prev < a.finallyLoc) return o(a.finallyLoc);
            } else if (u) {
              if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
            } else {
              if (!h) throw new Error("try statement without catch or finally");
              if (this.prev < a.finallyLoc) return o(a.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
          var o = this.tryEntries[r];
          if (
            o.tryLoc <= this.prev &&
            n.call(o, "finallyLoc") &&
            this.prev < o.finallyLoc
          ) {
            var i = o;
            break;
          }
        }
        var a = (i =
          i &&
          ("break" === t || "continue" === t) &&
          i.tryLoc <= e &&
          e <= i.finallyLoc
            ? null
            : i)
          ? i.completion
          : {};
        return (
          (a.type = t),
          (a.arg = e),
          i
            ? ((this.method = "next"), (this.next = i.finallyLoc), g)
            : this.complete(a)
        );
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return (
          "break" === t.type || "continue" === t.type
            ? (this.next = t.arg)
            : "return" === t.type
            ? ((this.rval = this.arg = t.arg),
              (this.method = "return"),
              (this.next = "end"))
            : "normal" === t.type && e && (this.next = e),
          g
        );
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t)
            return this.complete(r.completion, r.afterLoc), _(r), g;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
          var r,
            n,
            o = this.tryEntries[e];
          if (o.tryLoc === t)
            return (
              "throw" === (r = o.completion).type && ((n = r.arg), _(o)), n
            );
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (t, r, n) {
        return (
          (this.delegate = { iterator: k(t), resultName: r, nextLoc: n }),
          "next" === this.method && (this.arg = e),
          g
        );
      },
    }),
    t
  );
})("object" == typeof module ? module.exports : {});
try {
  regeneratorRuntime = runtime;
} catch (t) {
  "object" == typeof globalThis
    ? (globalThis.regeneratorRuntime = runtime)
    : Function("r", "regeneratorRuntime = r")(runtime);
}
/*! This file is auto-generated */
(() => {
  "use strict";
  var e = {
      d: (t, d) => {
        for (var o in d)
          e.o(d, o) &&
            !e.o(t, o) &&
            Object.defineProperty(t, o, { enumerable: !0, get: d[o] });
      },
      o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    },
    t = {};
  function d(e) {
    "undefined" != typeof document &&
      ("complete" !== document.readyState &&
      "interactive" !== document.readyState
        ? document.addEventListener("DOMContentLoaded", e)
        : e());
  }
  e.d(t, { default: () => d }),
    ((window.wp = window.wp || {}).domReady = t.default);
})();
(() => {
  var e = {
    n: (t) => {
      var a = t && t.__esModule ? () => t.default : () => t;
      return e.d(a, { a }), a;
    },
    d: (t, a) => {
      for (var o in a)
        e.o(a, o) &&
          !e.o(t, o) &&
          Object.defineProperty(t, o, { enumerable: !0, get: a[o] });
    },
    o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
  };
  (() => {
    "use strict";
    const t = window.wp.domReady;
    var a = e.n(t);
    const o = () => window.location.href !== window.parent.location.href,
      n = "starter-templates-iframe-preview-data",
      r = () => {
        let e = "";
        const t = document.querySelector(".site-logo-img img");
        return t && (e = t.src), e;
      };
    let s = r();
    const l = (e, t) => {
        if (!e) return "";
        if (e) {
          const a = e.match(/'([^']+)'/);
          return a ? a[1] : "inherit" === e ? t : e;
        }
        return t || void 0;
      },
      i = (e) => {
        switch (e.value.param) {
          case "siteLogo":
            const t = document.querySelectorAll(".site-logo-img img");
            "" === s && (s = r());
            let a = e.value.data.url || s;
            if (((a = e.value.data.dataUri || a), 0 === t.length && "" !== a)) {
              const t = document.createElement("span");
              t.classList.add("site-logo-img");
              const o = document.createElement("a");
              o.setAttribute("class", "custom-logo-link"),
                o.setAttribute("href", "#"),
                o.setAttribute("aria-current", "page"),
                t.appendChild(o);
              const n = document.createElement("img");
              n.classList.add("custom-logo"),
                n.setAttribute("src", a),
                o.appendChild(n);
              const r = document
                  .getElementById("ast-desktop-header")
                  .querySelectorAll(".ast-site-identity")[0],
                s = r.querySelectorAll(".ast-site-title-wrap")[0];
              r.insertBefore(t, s);
              const l = e.value.data.width || "";
              "" !== l &&
                ((n.style.width = l + "px"), (n.style.maxWidth = l + "px"));
            } else if ("" !== a)
              for (const [o, n] of Object.entries(t)) {
                n.removeAttribute("srcset"), n.setAttribute("src", a);
                const t = e.value.data.width;
                "" !== t &&
                  ((n.style.width = t + "px"), (n.style.maxWidth = t + "px"));
              }
            break;
          case "colorPalette":
            const o = e.value.data.colors || [],
              n = starter_templates_zip_preview.AstColorPaletteVarPrefix,
              i = starter_templates_zip_preview.AstEleColorPaletteVarPrefix;
            if (0 === o.length) {
              document
                .querySelector("body")
                .classList.remove("starter-templates-preview-palette");
              const e = document.getElementsByClassName(
                "starter-templates-preview-palette"
              );
              return void (e.length > 0 && e[0].remove());
            }
            document
              .querySelector("body")
              .classList.add("starter-templates-preview-palette");
            const d = Object.entries(o)
              .map((e, t) => [
                `--e-global-color-${i[t].replace(/-/g, "")}: ${e[1]};`,
                `${n}${t}: ${e[1]};`,
              ])
              .map((e) => e.join(""))
              .join("");
            let c = document.getElementById(
              "starter-templates-preview-palette-css"
            );
            c ||
              ((c = document.createElement("style")),
              (c.id = "starter-templates-preview-palette-css"),
              c.setAttribute("rel", "stylesheet"),
              document.head.appendChild(c)),
              (c.innerHTML = `.starter-templates-preview-palette{ ${d} }`);
            break;
          case "siteTypography":
            if (!Object.keys(e.value.data).length) {
              const e = document.getElementById("starter-templates-typography");
              return void (e && e.remove());
            }
            ((e) => {
              if (!e) return;
              if (!document.getElementById("google-fonts-domain")) {
                const e = document.createElement("link");
                (e.id = "google-fonts-domain"),
                  e.setAttribute("rel", "preconnect"),
                  e.setAttribute("href", "https://fonts.gstatic.com"),
                  document.head.appendChild(e);
              }
              let t = document.getElementById("st-previw-google-fonts-url");
              t ||
                ((t = document.createElement("link")),
                (t.id = "st-previw-google-fonts-url"),
                t.setAttribute("rel", "stylesheet"),
                document.head.appendChild(t));
              const a = [];
              let o = e["body-font-family"] || "",
                n = parseInt(e["body-font-weight"]) || "";
              n && (n = `:wght@${n}`),
                o &&
                  ((o = l(o)),
                  (o = o.replace(" ", "+")),
                  a.push(`family=${o}${n}`));
              let r = e["headings-font-family"] || "",
                s = parseInt(e["headings-font-weight"]) || "";
              s && (s = `:wght@${s}`),
                r &&
                  ((r = l(r, o)),
                  (r = r.replace(" ", "+")),
                  a.push(`family=${r}${s}`));
              const i = `https://fonts.googleapis.com/css2?${a.join(
                "&"
              )}&display=swap`;
              t.setAttribute("href", i);
            })(e.value.data),
              ((e) => {
                if (!e) return;
                let t = document.getElementById("starter-templates-typography");
                t ||
                  ((t = document.createElement("style")),
                  (t.id = "starter-templates-typography"),
                  t.setAttribute("rel", "stylesheet"),
                  document.head.appendChild(t));
                let a = "";
                (a +=
                  "body, button, input, select, textarea, .ast-button, .ast-custom-button {"),
                  (a += "\tfont-family: " + e["body-font-family"] + ";"),
                  (a += "\tfont-weight: " + e["body-font-weight"] + ";"),
                  (a +=
                    "\tfont-size: " +
                    e["font-size-body"].desktop +
                    e["font-size-body"]["desktop-unit"] +
                    ";"),
                  (a += "\tline-height: " + e["body-line-height"] + ";"),
                  (a += "}"),
                  (a +=
                    "h1, .entry-content h1, h2, .entry-content h2, h3, .entry-content h3, h4, .entry-content h4, h5, .entry-content h5, h6, .entry-content h6, .site-title, .site-title a {"),
                  (a += "\tfont-family: " + e["headings-font-family"] + ";"),
                  (a += "\tline-height: " + e["headings-line-height"] + ";"),
                  (a += "\tfont-weight: " + e["headings-font-weight"] + ";"),
                  (a += "}"),
                  ["h1", "h2", "h3", "h4", "h5", "h6"].forEach((t) => {
                    const o =
                        "inherit" === e["font-family-" + t]
                          ? e["headings-font-family"]
                          : e["font-family-" + t],
                      n =
                        "inherit" === e["font-weight-" + t]
                          ? e["headings-font-weight"]
                          : e["font-weight-" + t];
                    let r = "";
                    void 0 !== o &&
                      "" !== o &&
                      ((r += `${t}, .entry-content ${t} {`),
                      (r += "\tfont-family: " + o + ";")),
                      void 0 !== e["line-height-" + t] &&
                        "" !== e["line-height-" + t] &&
                        (r += "\tline-height: " + e["line-height-" + t] + ";"),
                      void 0 !== n &&
                        "" !== n &&
                        (r += "\tfont-weight: " + n + ";"),
                      (a += "" !== r ? r + "}" : "");
                  }),
                  (t.innerHTML = a);
              })(e.value.data);
            break;
          case "siteTitle":
            ((e) => {
              const t = document.getElementById("ast-desktop-header"),
                a = t && t.querySelectorAll(".ast-site-identity")[0],
                o = a && a.querySelectorAll(".ast-site-title-wrap")[0];
              o && (o.style.display = e ? "block" : "none");
            })(e.value.data);
            break;
          case "clearPreviewAssets":
            const m = document.getElementById("starter-templates-typography");
            m && m.remove(),
              document
                .querySelector("body")
                .classList.remove("starter-templates-preview-palette");
            const p = document.getElementsByClassName(
              "starter-templates-preview-palette"
            );
            p.length > 0 && p[0].remove();
            break;
          case "completeOnboarding":
            localStorage.removeItem("starter-templates-iframe-preview-data");
        }
      };
    window.addEventListener(
      "message",
      function (e) {
        if (
          o() &&
          (console.log("addEventListener message: ", e),
          "object" == typeof e.data &&
            "starterTemplatePreviewDispatch" === e.data.call)
        ) {
          const t = e.data;
          let a = JSON.parse(localStorage.getItem(n));
          null === a && ((a = {}), (a.data = {})),
            (a.data[t.value.param] = t.value.data),
            delete a.data.clearPreviewAssets,
            (t.url = window.location.origin),
            (a.url = window.location.origin),
            "cleanStorage" === t.value.param
              ? (delete a.data.cleanStorage,
                (a.data.siteLogo = t.value.data),
                (a.data.colorPalette = {}),
                (a.data.siteTypography = {}),
                Object.keys(a.data).map((e) =>
                  i({ value: { param: e, data: a.data[e] } })
                ))
              : i(t),
            localStorage.setItem(n, JSON.stringify(a));
        }
      },
      !1
    ),
      a()(() => {
        if (!o()) return;
        const e = document.createElement("style");
        (e.id = "starter-templates-logo-css"),
          document.getElementsByTagName("head")[0].appendChild(e),
          (e.innerHTML =
            ".site-logo-img img { transition: unset; } #wpadminbar { display: none; } html{  margin-top: 0 !important; }}");
        const t = ((a = n), JSON.parse(localStorage.getItem(a)));
        var a;
        t &&
          Object.keys(t.data).map((e) =>
            i({ value: { param: e, data: t.data[e] } })
          );
      });
  })();
})();
(astraToggleSetupPro = function (e, t, a) {
  var n,
    l,
    o,
    s = !1;
  if (
    0 <
      (n =
        "off-canvas" === e || "full-width" === e
          ? ((l = document.querySelectorAll(
              "#ast-mobile-popup, #ast-mobile-header"
            )),
            (o = t.classList.contains("ast-header-break-point")
              ? document.querySelectorAll(
                  "#ast-mobile-header .main-header-menu-toggle"
                )
              : document.querySelectorAll(
                  "#ast-desktop-header .main-header-menu-toggle"
                )).length)
          : t.classList.contains("ast-header-break-point")
          ? ((l = document.querySelectorAll("#ast-mobile-header")),
            (s = !(
              0 <
              (n = (o = document.querySelectorAll(
                "#ast-mobile-header .main-header-menu-toggle"
              )).length)
            ))
              ? 1
              : n)
          : ((l = document.querySelectorAll("#ast-desktop-header")),
            (o = document.querySelectorAll(
              "#ast-desktop-header .main-header-menu-toggle"
            )).length)) ||
    s
  )
    for (var r = 0; r < n; r++)
      if (
        (s ||
          (o[r].setAttribute("data-index", r), a[r]) ||
          ((a[r] = o[r]),
          o[r].addEventListener("click", astraNavMenuToggle, !1)),
        void 0 !== l[r])
      )
        for (var d, i = 0; i < l.length; i++)
          if (
            0 <
            (d = document
              .querySelector("header.site-header")
              .classList.contains("ast-builder-menu-toggle-link")
              ? l[i].querySelectorAll(
                  "ul.main-header-menu .menu-item-has-children > .menu-link, ul.main-header-menu .ast-menu-toggle"
                )
              : l[i].querySelectorAll("ul.main-header-menu .ast-menu-toggle"))
              .length
          )
            for (var c = 0; c < d.length; c++)
              d[c].addEventListener("click", AstraToggleSubMenu, !1);
}),
  (astraNavMenuTogglePro = function (e, t, a, n) {
    e.preventDefault();
    var l = e.target.closest("#ast-desktop-header"),
      o = document.querySelector(
        "#masthead > #ast-desktop-header .ast-desktop-header-content"
      ),
      s =
        ((l =
          null != l && "" !== l
            ? l.querySelector(".main-header-menu-toggle")
            : document.querySelector(
                "#masthead > #ast-desktop-header .main-header-menu-toggle"
              )),
        document.querySelector(
          "#masthead > #ast-desktop-header .ast-desktop-header-content .main-header-bar-navigation"
        ));
    if ("desktop" === e.currentTarget.trigger_type)
      null !== s &&
        "" !== s &&
        void 0 !== s &&
        (astraToggleClass(s, "toggle-on"),
        s.classList.contains("toggle-on")
          ? (s.style.display = "block")
          : (s.style.display = "")),
        astraToggleClass(l, "toggled"),
        l.classList.contains("toggled")
          ? (t.classList.add("ast-main-header-nav-open"),
            "dropdown" === a && (o.style.display = "block"))
          : (t.classList.remove("ast-main-header-nav-open"),
            (o.style.display = "none"));
    else {
      (e = document.querySelectorAll(
        "#masthead > #ast-mobile-header .main-header-bar-navigation"
      )),
        (s =
          ((menu_toggle_all = document.querySelectorAll(
            "#masthead > #ast-mobile-header .main-header-menu-toggle"
          )),
          "0")),
        (l = !1);
      if (
        (null !== n.closest("#ast-fixed-header") &&
          ((e = document.querySelectorAll(
            "#ast-fixed-header > #ast-mobile-header .main-header-bar-navigation"
          )),
          (menu_toggle_all = document.querySelectorAll(
            "#ast-fixed-header .main-header-menu-toggle"
          )),
          (s = "0"),
          (l = !0)),
        void 0 === e[s])
      )
        return !1;
      for (
        var r = e[s].querySelectorAll(".menu-item-has-children"), d = 0;
        d < r.length;
        d++
      ) {
        r[d].classList.remove("ast-submenu-expanded");
        for (
          var i = r[d].querySelectorAll(".sub-menu"), c = 0;
          c < i.length;
          c++
        )
          i[c].style.display = "none";
      }
      -1 !==
        (n.getAttribute("class") || "").indexOf("main-header-menu-toggle") &&
        (astraToggleClass(e[s], "toggle-on"),
        astraToggleClass(menu_toggle_all[s], "toggled"),
        l &&
          1 < menu_toggle_all.length &&
          astraToggleClass(menu_toggle_all[1], "toggled"),
        e[s].classList.contains("toggle-on")
          ? ((e[s].style.display = "block"),
            t.classList.add("ast-main-header-nav-open"))
          : ((e[s].style.display = ""),
            t.classList.remove("ast-main-header-nav-open")));
    }
  });
const accountMenuToggle = function () {
  const n =
      astraAddon.hf_account_action_type &&
      "menu" === astraAddon.hf_account_action_type,
    l =
      n &&
      astraAddon.hf_account_show_menu_on &&
      "click" === astraAddon.hf_account_show_menu_on;
  var e = document.querySelectorAll(".ast-header-account-wrap");
  e &&
    e.forEach((t) => {
      const a = t.querySelector(".ast-account-nav-menu");
      document.addEventListener("pointerup", function (e) {
        (l ||
          (n &&
            document
              .querySelector("body")
              .classList.contains("ast-header-break-point"))) &&
          !t.contains(e.target) &&
          ((a.style.right = ""), (a.style.left = ""));
      });
      var e = t.querySelector(".ast-header-account-link");
      e &&
        e.addEventListener("click", function (e) {
          (l ||
            (n &&
              document
                .querySelector("body")
                .classList.contains("ast-header-break-point"))) &&
            (headerSelectionPosition = e.target.closest(
              ".site-header-section"
            )) &&
            (headerSelectionPosition.classList.contains(
              "site-header-section-left"
            )
              ? ((a.style.left = "" === a.style.left ? "-100%" : ""),
                (a.style.right = "" === a.style.right ? "auto" : ""))
              : ((a.style.right = "" === a.style.right ? "-100%" : ""),
                (a.style.left = "" === a.style.left ? "auto" : "")));
        });
    });
};
document.addEventListener("astPartialContentRendered", function () {
  accountMenuToggle();
}),
  window.addEventListener("load", function () {
    accountMenuToggle();
  }),
  document.addEventListener("astLayoutWidthChanged", function () {
    accountMenuToggle();
  });
!(function (o, r) {
  var s = "astHookExtSticky",
    i = r.document,
    a = (jQuery(r).outerWidth(), jQuery(r).width()),
    n = {
      dependent: [],
      max_width: "",
      site_layout: "",
      break_point: 920,
      admin_bar_height_lg: 32,
      admin_bar_height_sm: 46,
      admin_bar_height_xs: 0,
      stick_upto_scroll: 0,
      gutter: 0,
      wrap: "<div></div>",
      body_padding_support: !0,
      html_padding_support: !0,
      active_shrink: !1,
      shrink: { padding_top: "", padding_bottom: "" },
      sticky_on_device: "desktop",
      header_style: "none",
      hide_on_scroll: "no",
    };
  function e(t, e) {
    (this.element = t),
      (this.options = o.extend({}, n, e)),
      (this._defaults = n),
      (this._name = s),
      "1" == this.options.hide_on_scroll &&
        (this.navbarHeight = o(t).outerHeight()),
      (this.lastScrollTop = 0),
      (this.delta = 5),
      (this.should_stick = !0),
      (this.hideScrollInterval = ""),
      this.init();
  }
  (e.prototype.stick_me = function (t, e) {
    var o = jQuery(t.element),
      s = jQuery(r).outerWidth(),
      i = parseInt(t.options.stick_upto_scroll),
      a = parseInt(o.parent().attr("data-stick-maxwidth")),
      n = parseInt(o.parent().attr("data-stick-gutter"));
    "enabled" == (astraAddon.hook_sticky_header || "") &&
      (!(
        "desktop" == t.options.sticky_on_device &&
        astraAddon.hook_custom_header_break_point > s
      ) &&
      !(
        "mobile" == t.options.sticky_on_device &&
        astraAddon.hook_custom_header_break_point <= s
      ) &&
      jQuery(r).scrollTop() > i
        ? "none" == t.options.header_style &&
          ("enabled" == t.options.active_shrink
            ? (t.hasShrink(t, "stick"),
              (i = "none"),
              o.hasClass("ast-custom-header") || (i = n),
              o.parent().css("min-height", o.outerHeight()),
              o
                .addClass("ast-header-sticky-active")
                .stop()
                .css({
                  "max-width": a,
                  top: i,
                  "padding-top": t.options.shrink.padding_top,
                  "padding-bottom": t.options.shrink.padding_bottom,
                }))
            : (t.hasShrink(t, "stick"),
              o.parent().css("min-height", o.outerHeight()),
              o
                .addClass("ast-header-sticky-active")
                .stop()
                .css({
                  "max-width": a,
                  top: n,
                  "padding-top": t.options.shrink.padding_top,
                  "padding-bottom": t.options.shrink.padding_bottom,
                })),
          o.addClass("ast-sticky-shrunk").stop())
        : t.stickRelease(t)),
      "enabled" == (astraAddon.hook_sticky_footer || "") &&
        (("desktop" == t.options.sticky_on_device &&
          astraAddon.hook_custom_footer_break_point > s) ||
        ("mobile" == t.options.sticky_on_device &&
          astraAddon.hook_custom_footer_break_point <= s)
          ? t.stickRelease(t)
          : (jQuery("body").addClass("ast-footer-sticky-active"),
            o.parent().css("min-height", o.outerHeight()),
            o.stop().css({ "max-width": a })));
  }),
    (e.prototype.update_attrs = function () {
      var o,
        t = this,
        e = jQuery(t.element),
        s = parseInt(t.options.gutter),
        i = t.options.max_width;
      "none" == t.options.header_style && (o = e.offset().top || 0),
        "ast-box-layout" != t.options.site_layout &&
          (i = jQuery("body").width()),
        t.options.dependent &&
          jQuery.each(t.options.dependent, function (t, e) {
            jQuery(e).length &&
              "on" == jQuery(e).parent().attr("data-stick-support") &&
              ((dependent_height = jQuery(e).outerHeight()),
              (s += parseInt(dependent_height)),
              (o -= parseInt(dependent_height)));
          }),
        t.options.admin_bar_height_lg &&
          jQuery("#wpadminbar").length &&
          782 < a &&
          ((s += parseInt(t.options.admin_bar_height_lg)),
          (o -= parseInt(t.options.admin_bar_height_lg))),
        t.options.admin_bar_height_sm &&
          jQuery("#wpadminbar").length &&
          600 <= a &&
          a <= 782 &&
          ((s += parseInt(t.options.admin_bar_height_sm)),
          (o -= parseInt(t.options.admin_bar_height_sm))),
        t.options.admin_bar_height_xs &&
          jQuery("#wpadminbar").length &&
          ((s += parseInt(t.options.admin_bar_height_xs)),
          (o -= parseInt(t.options.admin_bar_height_xs))),
        t.options.body_padding_support &&
          ((s += parseInt(jQuery("body").css("padding-top"), 10)),
          (o -= parseInt(jQuery("body").css("padding-top"), 10))),
        t.options.html_padding_support &&
          ((s += parseInt(jQuery("html").css("padding-top"), 10)),
          (o -= parseInt(jQuery("html").css("padding-top"), 10))),
        (t.options.stick_upto_scroll = o),
        "none" == t.options.header_style &&
          e
            .parent()
            .css("min-height", e.outerHeight())
            .attr("data-stick-gutter", parseInt(s))
            .attr("data-stick-maxwidth", parseInt(i));
    }),
    (e.prototype.hasShrink = function (t, e) {
      o(r).scrollTop() > jQuery(t.element).outerHeight()
        ? jQuery("body").addClass("ast-shrink-custom-header")
        : jQuery("body").removeClass("ast-shrink-custom-header");
    }),
    (e.prototype.stickRelease = function (t) {
      var e = jQuery(t.element);
      "enabled" == (astraAddon.hook_sticky_header || "") &&
        "none" == t.options.header_style &&
        (e
          .removeClass("ast-header-sticky-active")
          .stop()
          .css({ "max-width": "", top: "", padding: "" }),
        e.parent().css("min-height", ""),
        e.removeClass("ast-sticky-shrunk").stop()),
        "enabled" == (astraAddon.hook_sticky_footer || "") &&
          jQuery("body").removeClass("ast-footer-sticky-active");
    }),
    (e.prototype.init = function () {
      var e, t;
      jQuery(this.element) &&
        ((e = this),
        (t = jQuery(e.element)),
        parseInt(e.options.gutter),
        t.position().top,
        "none" == e.options.header_style &&
          t
            .wrap(e.options.wrap)
            .parent()
            .css("min-height", t.outerHeight())
            .attr("data-stick-support", "on")
            .attr("data-stick-maxwidth", parseInt(e.options.max_width)),
        e.update_attrs(),
        jQuery(r).on("resize", function () {
          e.stickRelease(e), e.update_attrs(), e.stick_me(e);
        }),
        jQuery(r).on("scroll", function () {
          e.stick_me(e, "scroll");
        }),
        jQuery(i).ready(function (t) {
          e.stick_me(e);
        }));
    }),
    (o.fn[s] = function (t) {
      return this.each(function () {
        o.data(this, "plugin_" + s) ||
          o.data(this, "plugin_" + s, new e(this, t));
      });
    });
  var d = jQuery("body").width(),
    _ = astraAddon.site_layout || "",
    h = astraAddon.hook_sticky_header || "",
    p = astraAddon.hook_shrink_header || "";
  (sticky_header_on_devices =
    astraAddon.hook_sticky_header_on_devices || "desktop"),
    (site_layout_box_width = astraAddon.site_layout_box_width || 1200),
    (hook_sticky_footer = astraAddon.hook_sticky_footer || ""),
    (sticky_footer_on_devices =
      astraAddon.hook_sticky_footer_on_devices || "desktop"),
    "ast-box-layout" === _ && (d = parseInt(site_layout_box_width)),
    jQuery(i).ready(function (t) {
      "enabled" == h &&
        jQuery(".ast-custom-header").astHookExtSticky({
          sticky_on_device: sticky_header_on_devices,
          header_style: "none",
          site_layout: _,
          max_width: d,
          active_shrink: p,
        }),
        "enabled" == hook_sticky_footer &&
          jQuery(".ast-custom-footer").astHookExtSticky({
            sticky_on_device: sticky_footer_on_devices,
            max_width: d,
            site_layout: _,
            header_style: "none",
          });
    });
})(jQuery, window);
!(function (n, h) {
  var a = "astExtSticky",
    l = h.document,
    r = (jQuery(h).outerWidth(), jQuery(h).width()),
    c = astraAddon.header_builder_active,
    s = {
      dependent: [],
      max_width: "",
      site_layout: "",
      break_point: 920,
      admin_bar_height_lg: 32,
      admin_bar_height_sm: 46,
      admin_bar_height_xs: 0,
      stick_upto_scroll: 0,
      gutter: 0,
      wrap: "<div></div>",
      body_padding_support: !0,
      html_padding_support: !0,
      shrink: { padding_top: "", padding_bottom: "" },
      sticky_on_device: "desktop",
      header_style: "none",
      hide_on_scroll: "no",
    },
    d = 0,
    p = null !== l.querySelector("#ast-hb-account-login-wrap");
  function t(e, t) {
    (this.element = e),
      (this.options = n.extend({}, s, t)),
      (this._defaults = s),
      (this._name = a),
      "1" == this.options.hide_on_scroll &&
        (this.navbarHeight = n(e).outerHeight()),
      (this.lastScrollTop = 0),
      (this.delta = 5),
      (this.should_stick = !0),
      (this.hideScrollInterval = ""),
      this.init();
  }
  (t.prototype.stick_me = function (e, t) {
    var a,
      s,
      d,
      i,
      r,
      o = jQuery(e.element);
    jQuery(h).outerWidth();
    (stick_upto_scroll = parseInt(e.options.stick_upto_scroll)),
      (max_width = parseInt(o.parent().attr("data-stick-maxwidth"))),
      (gutter = parseInt(o.parent().attr("data-stick-gutter"))),
      (aboveHeaderSelectorValue = gutter),
      c &&
        astraAddon.header_main_shrink &&
        ((o.hasClass("ast-stick-primary-below-wrapper") ||
          o.hasClass("ast-primary-header")) &&
          1 == astraAddon.header_above_stick &&
          0 < gutter &&
          (gutter -= 10),
        (a = l.querySelector(".ast-above-header-bar")),
        1 == astraAddon.header_above_stick) &&
        null !== a &&
        (aboveHeaderSelectorValue =
          a.getBoundingClientRect().height +
          parseInt(a.parentNode.getAttribute("data-stick-gutter"))),
      ("desktop" != e.options.sticky_on_device ||
        !jQuery("body").hasClass("ast-header-break-point")) &&
      ("mobile" != e.options.sticky_on_device ||
        jQuery("body").hasClass("ast-header-break-point"))
        ? (stick_upto_scroll < 0 && (stick_upto_scroll = 0),
          (a =
            0 <
            l.getElementsByClassName("elementor-motion-effects-parent").length),
          jQuery(h).scrollTop() > stick_upto_scroll
            ? ((s = o),
              c &&
                ((r = o.closest(".ast-mobile-header-wrap")),
                (d = o.closest("#ast-desktop-header")),
                (r = 0 === r.length ? o.find(".ast-mobile-header-wrap") : r),
                (d = 0 === d.length ? o.find("#ast-desktop-header") : d),
                r
                  .find(".ast-mobile-header-content")
                  .css("top", o.outerHeight() + gutter),
                "ast-box-layout" == e.options.site_layout
                  ? ((i = jQuery("body").width()),
                    r.find(".ast-mobile-header-content").css("width", i))
                  : r
                      .find(".ast-mobile-header-content")
                      .css("width", max_width),
                d
                  .find(".ast-desktop-header-content")
                  .css("top", o.outerHeight() + gutter),
                d.find(".ast-desktop-header-content").css("width", max_width)),
              "1" === e.options.hide_on_scroll
                ? e.hasScrolled(e, "stick")
                : "none" == e.options.header_style
                ? (a || o.parent().css("min-height", o.outerHeight()),
                  l
                    .querySelector("body")
                    .classList.contains("fl-builder-edit") ||
                    o.addClass("ast-sticky-active").stop().css({ top: gutter }),
                  o
                    .addClass("ast-sticky-active")
                    .stop()
                    .css({
                      "max-width": max_width,
                      "padding-top": e.options.shrink.padding_top,
                      "padding-bottom": e.options.shrink.padding_bottom,
                    }),
                  (o.hasClass("ast-stick-primary-below-wrapper") ||
                    o.hasClass("ast-primary-header")) &&
                    1 == astraAddon.header_above_stick &&
                    o
                      .closest("#ast-desktop-header")
                      .find(".ast-above-header-bar")
                      .outerHeight() < 70 &&
                    (o
                      .addClass("ast-sticky-active")
                      .stop()
                      .css({ top: a ? aboveHeaderSelectorValue : "unset" }),
                    o.parent().css("min-height", o.outerHeight())),
                  o.addClass("ast-sticky-shrunk").stop(),
                  n(l).trigger("addStickyClass"),
                  s.addClass("ast-header-sticked"))
                : "slide" == e.options.header_style
                ? (s.css({ top: gutter }),
                  s.addClass("ast-header-slide"),
                  s.css("visibility", "visible"),
                  s
                    .addClass("ast-sticky-active")
                    .stop()
                    .css({ transform: p ? "none" : "translateY(0)" }),
                  n("html").addClass("ast-header-stick-slide-active"),
                  n(l).trigger("addStickyClass"),
                  s.addClass("ast-header-sticked"))
                : "fade" == e.options.header_style &&
                  (s.css({ top: gutter }),
                  s.addClass("ast-header-fade"),
                  s.css("visibility", "visible"),
                  s.addClass("ast-sticky-active").stop().css({ opacity: "1" }),
                  n("html").addClass("ast-header-stick-fade-active"),
                  n(l).trigger("addStickyClass"),
                  s.addClass("ast-header-sticked")))
            : (e.stickRelease(e),
              c &&
                ((r =
                  0 === (r = o.closest(".ast-mobile-header-wrap")).length
                    ? o.find(".ast-mobile-header-wrap")
                    : r),
                (jQuery("body").hasClass("ast-primary-sticky-header-active") &&
                  jQuery("body").hasClass("ast-above-sticky-header-active") &&
                  jQuery("body").hasClass("ast-below-sticky-header-active")) ||
                  r.find(".ast-mobile-header-content").removeAttr("style"))))
        : e.stickRelease(e);
  }),
    (t.prototype.update_attrs = function () {
      var e,
        a,
        t = this,
        s = jQuery(t.element),
        d = parseInt(t.options.gutter),
        i = t.options.max_width;
      "none" != t.options.header_style ||
      jQuery("body").hasClass("ast-sticky-toggled-off")
        ? n("#masthead").length &&
          ((e = n("#masthead")),
          (a = e.offset().top + e.outerHeight() + 100 || 0))
        : (a = s.offset().top || 0),
        "ast-box-layout" != t.options.site_layout &&
          (i = jQuery("body").width()),
        t.options.dependent &&
          jQuery.each(t.options.dependent, function (e, t) {
            jQuery(t).length &&
              "on" == jQuery(t).parent().attr("data-stick-support") &&
              ((dependent_height = jQuery(t).outerHeight()),
              (d += parseInt(dependent_height)),
              (a -= parseInt(dependent_height)));
          }),
        t.options.admin_bar_height_lg &&
          jQuery("#wpadminbar").length &&
          782 < r &&
          ((d += parseInt(t.options.admin_bar_height_lg)),
          (a -= parseInt(t.options.admin_bar_height_lg))),
        t.options.admin_bar_height_sm &&
          jQuery("#wpadminbar").length &&
          600 <= r &&
          r <= 782 &&
          ((d += parseInt(t.options.admin_bar_height_sm)),
          (a -= parseInt(t.options.admin_bar_height_sm))),
        t.options.admin_bar_height_xs &&
          jQuery("#wpadminbar").length &&
          ((d += parseInt(t.options.admin_bar_height_xs)),
          (a -= parseInt(t.options.admin_bar_height_xs))),
        t.options.body_padding_support &&
          ((d += parseInt(jQuery("body").css("padding-top"), 10)),
          (a -= parseInt(jQuery("body").css("padding-top"), 10))),
        t.options.html_padding_support &&
          ((d += parseInt(jQuery("html").css("padding-top"), 10)),
          (a -= parseInt(jQuery("html").css("padding-top"), 10))),
        I && a--,
        (t.options.stick_upto_scroll = a),
        "none" == t.options.header_style
          ? s
              .parent()
              .css("min-height", s.outerHeight())
              .attr("data-stick-gutter", parseInt(d))
              .attr("data-stick-maxwidth", parseInt(i))
          : (s
              .parent()
              .attr("data-stick-gutter", parseInt(d))
              .attr("data-stick-maxwidth", parseInt(i)),
            "ast-padded-layout" === t.options.site_layout &&
              s.css("max-width", parseInt(i)));
    }),
    (t.prototype.hasScrolled = function (e, t) {
      var a,
        s = n(h).scrollTop();
      Math.abs(d - s) <= 5 ||
        ((a = jQuery(e.element)),
        d < s && 0 < s
          ? jQuery(e.element).removeClass("ast-nav-down").addClass("ast-nav-up")
          : s + n(h).height() < n(l).height() &&
            jQuery(e.element)
              .removeClass("ast-nav-up")
              .addClass("ast-nav-down"),
        (d = s),
        n(e.element).hasClass("ast-nav-up") || "stick" != t
          ? (a.css({ transform: "translateY(-100%)" }).stop(),
            setTimeout(function () {
              a.removeClass("ast-sticky-active");
            }, 300),
            a.css({ visibility: "hidden", top: "" }),
            n(l).trigger("removeStickyClass"),
            n("html").removeClass("ast-header-stick-scroll-active"),
            a.removeClass("ast-header-sticked"))
          : (a.css({ top: gutter }),
            a.addClass("ast-header-sticked"),
            a.addClass("ast-header-slide"),
            a.css("visibility", "visible"),
            a
              .addClass("ast-sticky-active")
              .stop()
              .css({ transform: "translateY(0)" }),
            n(l).trigger("addStickyClass"),
            n("html").addClass("ast-header-stick-scroll-active")));
    }),
    (t.prototype.stickRelease = function (e) {
      var t = jQuery(e.element),
        a = t;
      "1" === e.options.hide_on_scroll
        ? e.hasScrolled(e, "release")
        : "none" == e.options.header_style
        ? (t
            .removeClass("ast-sticky-active")
            .stop()
            .css({ "max-width": "", top: "", padding: "" }),
          t.parent().css("min-height", ""),
          n(l).trigger("removeStickyClass"),
          a.removeClass("ast-header-sticked"),
          t.removeClass("ast-sticky-shrunk").stop())
        : "slide" == e.options.header_style
        ? (a
            .removeClass("ast-sticky-active")
            .stop()
            .css({ transform: p ? "translateY(-100vh)" : "translateY(-100%)" }),
          a.css({ visibility: "hidden", top: "" }),
          n("html").removeClass("ast-header-stick-slide-active"),
          n(l).trigger("removeStickyClass"),
          a.removeClass("ast-header-sticked"))
        : "fade" == e.options.header_style &&
          (a.removeClass("ast-sticky-active").stop().css({ opacity: "0" }),
          a.css({ visibility: "hidden" }),
          a.removeClass("ast-header-sticked"),
          n(l).trigger("removeStickyClass"),
          n("html").removeClass("ast-header-stick-fade-active"));
    }),
    (t.prototype.init = function () {
      var t, e;
      jQuery(this.element) &&
        ((t = this),
        (e = jQuery(t.element)),
        ("none" == t.options.header_style
          ? e.wrap(t.options.wrap).parent().css("min-height", e.outerHeight())
          : e.wrap(t.options.wrap)
        )
          .attr("data-stick-support", "on")
          .attr("data-stick-maxwidth", parseInt(t.options.max_width)),
        t.update_attrs(),
        jQuery(h).on("resize", function () {
          t.stickRelease(t), t.update_attrs(), t.stick_me(t);
        }),
        jQuery(h).on("scroll", function () {
          t.stick_me(t, "scroll"),
            jQuery("body").hasClass("ast-sticky-toggled-off") &&
              (t.update_attrs(), t.stick_me(t, "scroll"));
        }),
        jQuery(l).ready(function (e) {
          t.stick_me(t);
        }));
    }),
    (n.fn[a] = function (e) {
      return this.each(function () {
        n.data(this, "plugin_" + a) ||
          n.data(this, "plugin_" + a, new t(this, e));
      });
    });
  var e,
    i = jQuery("body"),
    o = i.width(),
    y = astraAddon.stick_header_meta || "default",
    _ = astraAddon.header_main_stick || "",
    m = astraAddon.header_main_shrink || "",
    u = astraAddon.header_above_stick || "",
    b = astraAddon.header_below_stick || "",
    k = astraAddon.header_main_stick_meta || "",
    g = astraAddon.header_above_stick_meta || "",
    v = astraAddon.header_below_stick_meta || "",
    w = astraAddon.site_layout || "",
    j = astraAddon.site_layout_box_width || 1200,
    Q = astraAddon.sticky_header_on_devices || "desktop",
    f = astraAddon.sticky_header_style || "none",
    x = astraAddon.sticky_hide_on_scroll || "",
    C = astraAddon.header_logo_width || "",
    S = astraAddon.responsive_header_logo_width || "",
    I = astraAddon.stick_origin_position || "",
    A = astraAddon.tablet_break_point || 768,
    E = astraAddon.mobile_break_point || 544;
  "disabled" != y &&
    ("enabled" === y && ((_ = k), (u = g), (b = v)),
    0 < n("header .site-logo-img img").length &&
      (-1 ===
        (k =
          0 ==
          (k =
            void 0 === (k = (y = n("header .site-logo-img img")).attr("height"))
              ? y.height()
              : k)
            ? ""
            : k)
          .toString()
          .indexOf("%") && (k += "px"),
      "" != S.desktop || "" != S.tablet || "" != S.mobile
        ? (e =
            "<style type='text/css' id='ast-site-identity-img' class='ast-site-identity-img' > #masthead .ast-header-sticked .site-logo-img .astra-logo-svg { width: " +
            S.desktop +
            "px; } @media (max-width: " +
            A +
            "px) { #masthead .ast-header-sticked .site-logo-img .astra-logo-svg { width: " +
            S.tablet +
            "px; } } @media (max-width: " +
            E +
            "px) { #masthead .ast-header-sticked .site-logo-img .astra-logo-svg{ width: " +
            S.mobile +
            "px; } } </style>")
        : "" != C &&
          (e =
            "<style type='text/css' id='ast-site-identity-img' class='ast-site-identity-img' > #masthead .ast-header-sticked .site-logo-img .astra-logo-svg { width: " +
            C +
            "px; } #masthead .ast-header-sticked .site-logo-img img { max-height: " +
            k +
            "; width: auto; } </style>"),
      n("head").append(e)),
    _ || u || b) &&
    (n(l).on("addStickyClass", function () {
      var e = "";
      ("1" != _ && "on" != _ && "disabled" != _) ||
        (e += " ast-primary-sticky-header-active"),
        ("1" != u && "on" != u && "disabled" != u) ||
          (e += " ast-above-sticky-header-active"),
        ("1" != b && "on" != b && "disabled" != b) ||
          (e += " ast-below-sticky-header-active"),
        n("body").addClass(e);
    }),
    n(l).on("removeStickyClass", function () {
      var e = "";
      ("1" != _ && "on" != _ && "disabled" != _) ||
        (e += " ast-primary-sticky-header-active"),
        ("1" != u && "on" != u && "disabled" != u) ||
          (e += " ast-above-sticky-header-active"),
        ("1" != b && "on" != b && "disabled" != b) ||
          (e += " ast-below-sticky-header-active"),
        n("body").removeClass(e);
    }),
    "ast-box-layout" === w && (o = parseInt(j)),
    jQuery(l).on("ready astLayoutWidthChanged", function (e) {
      if ("astLayoutWidthChanged" === e.type) {
        if (!(parseInt(_) || parseInt(b) || parseInt(u))) return;
        jQuery("div.ast-stick-primary-below-wrapper").children().unwrap(),
          jQuery('div[data-stick-support="on"]').children().unwrap();
      }
      var t;
      "1" == x
        ? ("1" == m &&
            jQuery("#ast-fixed-header").addClass("ast-sticky-shrunk").stop(),
          "1" != u &&
            "on" != u &&
            "disabled" != u &&
            jQuery("#ast-fixed-header .ast-above-header").hide(),
          "1" != _ &&
            "on" != _ &&
            "disabled" != _ &&
            jQuery("#ast-fixed-header .main-header-bar").hide(),
          "1" != b &&
            "on" != b &&
            "disabled" != b &&
            jQuery("#ast-fixed-header .ast-below-header").hide(),
          jQuery("#ast-fixed-header").astExtSticky({
            max_width: o,
            site_layout: w,
            sticky_on_device: Q,
            header_style: "slide",
            hide_on_scroll: x,
          }))
        : "none" == f
        ? c
          ? ("both" === Q ? ["desktop", "mobile"] : [Q]).forEach(function (e) {
              var t;
              ("1" != u && "on" != u && "disabled" != u) ||
                jQuery(
                  "#masthead #ast-" + e + "-header .ast-above-header"
                ).astExtSticky({
                  max_width: o,
                  site_layout: w,
                  sticky_on_device: Q,
                  header_style: f,
                  hide_on_scroll: x,
                }),
                ("1" != _ && "on" != _ && "disabled" != _) ||
                ("1" != b && "on" != b && "disabled" != b)
                  ? (("1" != _ && "on" != _ && "disabled" != _) ||
                      ((t = m ? { padding_top: "", padding_bottom: "" } : ""),
                      jQuery(
                        "#masthead #ast-" + e + "-header .main-header-bar"
                      ).astExtSticky({
                        dependent: [
                          "#masthead #ast-" + e + "-header .ast-above-header",
                        ],
                        max_width: o,
                        site_layout: w,
                        shrink: t,
                        sticky_on_device: Q,
                        header_style: f,
                        hide_on_scroll: x,
                      }),
                      jQuery(
                        "#masthead #ast-" + e + "-header .ast-custom-header"
                      ).astExtSticky({
                        max_width: o,
                        site_layout: w,
                        shrink: t,
                        sticky_on_device: Q,
                        header_style: f,
                        hide_on_scroll: x,
                      })),
                    ("1" != b && "on" != b && "disabled" != b) ||
                      jQuery(
                        "#masthead #ast-" + e + "-header .ast-below-header"
                      ).astExtSticky({
                        dependent: [
                          "#masthead #ast-" + e + "-header .main-header-bar",
                          "#masthead #ast-" + e + "-header .ast-above-header",
                        ],
                        max_width: o,
                        site_layout: w,
                        sticky_on_device: Q,
                        header_style: f,
                        hide_on_scroll: x,
                      }))
                  : ((jQuery(
                      "#masthead #ast-" + e + "-header .main-header-bar-wrap"
                    ).length
                      ? jQuery(
                          "#masthead #ast-" +
                            e +
                            "-header .main-header-bar-wrap"
                        )
                      : jQuery(
                          "#masthead #ast-" +
                            e +
                            "-header .ast-below-header-wrap"
                        )
                    ).wrap(
                      '<div class="ast-stick-primary-below-wrapper"></div>'
                    ),
                    jQuery(
                      "#masthead #ast-" + e + "-header .ast-below-header-wrap"
                    ).prependTo(
                      "#masthead #ast-" +
                        e +
                        "-header .ast-stick-primary-below-wrapper"
                    ),
                    jQuery(
                      "#masthead #ast-" + e + "-header .main-header-bar-wrap"
                    ).prependTo(
                      "#masthead #ast-" +
                        e +
                        "-header .ast-stick-primary-below-wrapper"
                    ),
                    jQuery(
                      "#masthead #ast-" +
                        e +
                        "-header .ast-stick-primary-below-wrapper"
                    ).astExtSticky({
                      dependent: [
                        "#masthead #ast-" + e + "-header .ast-above-header",
                      ],
                      max_width: o,
                      site_layout: w,
                      shrink: t,
                      sticky_on_device: Q,
                      header_style: f,
                      hide_on_scroll: x,
                    }));
            })
          : (("1" != u && "on" != u && "disabled" != u) ||
              jQuery("#masthead .ast-above-header").astExtSticky({
                max_width: o,
                site_layout: w,
                sticky_on_device: Q,
                header_style: f,
                hide_on_scroll: x,
              }),
            ("1" != _ && "on" != _ && "disabled" != _) ||
            ("1" != b && "on" != b && "disabled" != b)
              ? (("1" != _ && "on" != _ && "disabled" != _) ||
                  ((t = m ? { padding_top: "", padding_bottom: "" } : ""),
                  jQuery("#masthead .main-header-bar").astExtSticky({
                    dependent: ["#masthead .ast-above-header"],
                    max_width: o,
                    site_layout: w,
                    shrink: t,
                    sticky_on_device: Q,
                    header_style: f,
                    hide_on_scroll: x,
                  }),
                  jQuery("#masthead .ast-custom-header").astExtSticky({
                    max_width: o,
                    site_layout: w,
                    shrink: t,
                    sticky_on_device: Q,
                    header_style: f,
                    hide_on_scroll: x,
                  })),
                ("1" != b && "on" != b && "disabled" != b) ||
                  jQuery("#masthead .ast-below-header").astExtSticky({
                    dependent: [
                      "#masthead .main-header-bar",
                      "#masthead .ast-above-header",
                    ],
                    max_width: o,
                    site_layout: w,
                    sticky_on_device: Q,
                    header_style: f,
                    hide_on_scroll: x,
                  }))
              : (jQuery("#masthead .main-header-bar-wrap").wrap(
                  '<div class="ast-stick-primary-below-wrapper"></div>'
                ),
                jQuery("#masthead .ast-below-header-wrap").prependTo(
                  ".ast-stick-primary-below-wrapper"
                ),
                jQuery("#masthead .main-header-bar-wrap").prependTo(
                  ".ast-stick-primary-below-wrapper"
                ),
                jQuery(
                  "#masthead .ast-stick-primary-below-wrapper"
                ).astExtSticky({
                  dependent: ["#masthead .ast-above-header"],
                  max_width: o,
                  site_layout: w,
                  shrink: t,
                  sticky_on_device: Q,
                  header_style: f,
                  hide_on_scroll: x,
                })))
        : (jQuery("#ast-fixed-header").addClass("ast-sticky-shrunk").stop(),
          "1" != u &&
            "on" != u &&
            "disabled" != u &&
            jQuery("#ast-fixed-header .ast-above-header").hide(),
          "1" != _ &&
            "on" != _ &&
            "disabled" != _ &&
            jQuery("#ast-fixed-header .main-header-bar").hide(),
          "1" != b &&
            "on" != b &&
            "disabled" != b &&
            jQuery("#ast-fixed-header .ast-below-header").hide(),
          ("1" != u &&
            "on" != u &&
            "disabled" != u &&
            "1" != _ &&
            "on" != _ &&
            "disabled" != _ &&
            "1" != b &&
            "on" != b &&
            "disabled" != b) ||
            ((t = m ? { padding_top: "", padding_bottom: "" } : ""),
            jQuery("#ast-fixed-header").astExtSticky({
              max_width: o,
              site_layout: w,
              shrink: t,
              sticky_on_device: Q,
              header_style: f,
              hide_on_scroll: x,
            }))),
        ("mobile" != Q && "both" != Q) ||
          (jQuery("#masthead .main-header-menu-toggle").click(function (e) {
            var t, a;
            jQuery("#masthead .main-header-menu-toggle").hasClass("toggled")
              ? (i.addClass("ast-sticky-toggled-off"),
                "none" == s.header_style &&
                  (jQuery("#masthead .main-header-bar").hasClass(
                    "ast-sticky-active"
                  ) ||
                    jQuery(
                      "#masthead .ast-stick-primary-below-wrapper"
                    ).hasClass("ast-sticky-active")) &&
                  ((t = jQuery(h).height()),
                  (a = 0),
                  jQuery("#masthead .ast-above-header") &&
                    jQuery("#masthead .ast-above-header").length &&
                    (a = jQuery("#masthead .ast-above-header").height()),
                  "1" == x && jQuery("html").css({ overflow: "hidden" }),
                  ("1" != m ||
                  ("1" != _ && "on" != _ && "disabled" != _) ||
                  ("1" != b && "on" != b && "disabled" != b)
                    ? jQuery("#masthead .main-header-bar.ast-sticky-active")
                    : jQuery("#masthead .ast-stick-primary-below-wrapper")
                  ).css({ "max-height": t - a + "px", "overflow-y": "auto" })))
              : (i.addClass("ast-sticky-toggled-off"),
                jQuery("html").css({ overflow: "" }),
                ("1" != m ||
                ("1" != _ && "on" != _ && "disabled" != _) ||
                ("1" != b && "on" != b && "disabled" != b)
                  ? jQuery("#masthead .main-header-bar.ast-sticky-active")
                  : jQuery("#masthead .ast-stick-primary-below-wrapper")
                ).css({ "max-height": "", "overflow-y": "" }));
          }),
          jQuery("#ast-fixed-header .main-header-menu-toggle").click(function (
            e
          ) {
            var t;
            jQuery("#ast-fixed-header .main-header-menu-toggle").hasClass(
              "toggled"
            )
              ? ((t = jQuery(h).height()),
                "1" == x && jQuery("html").css({ overflow: "auto" }),
                jQuery("#ast-fixed-header").css({
                  "max-height": t + "px",
                  "overflow-y": "auto",
                }))
              : (jQuery("html").css({ overflow: "" }),
                jQuery("#ast-fixed-header").css({
                  "max-height": "",
                  "overflow-y": "",
                }));
          }));
    }));
})(jQuery, window);
!(function () {
  var e;
  function o(e) {
    var t = (t = document.body.className).replace(e, "");
    document.body.className = t;
  }
  function d(e) {
    (e.style.display = "block"),
      setTimeout(function () {
        e.style.opacity = 1;
      }, 1);
  }
  function n(e) {
    (e.style.opacity = ""),
      setTimeout(function () {
        e.style.display = "";
      }, 200);
  }
  (r = "iPhone" == navigator.userAgent.match(/iPhone/i) ? "iphone" : ""),
    (e = "iPod" == navigator.userAgent.match(/iPod/i) ? "ipod" : ""),
    (document.body.className += " " + r),
    (document.body.className += " " + e);
  for (
    var t = document.querySelectorAll("a.astra-search-icon:not(.slide-search)"),
      a = 0;
    t.length > a;
    a++
  )
    t[a].onclick = function (e) {
      var t, a, o, n;
      if (
        (e.preventDefault(),
        (e = e || window.event),
        this.classList.contains("header-cover"))
      )
        for (
          var s = document.querySelectorAll(".ast-search-box.header-cover"),
            c = astraAddon.is_header_builder_active || !1,
            r = 0;
          r < s.length;
          r++
        )
          for (
            var l = s[r].parentNode.querySelectorAll("a.astra-search-icon"),
              i = 0;
            i < l.length;
            i++
          )
            l[i] == this &&
              (d(s[r]),
              s[r].querySelector("input.search-field").focus(),
              c
                ? ((t = s[r]),
                  (n = o = a = void 0),
                  document.body.classList.contains("ast-header-break-point") &&
                    ((n = document.querySelector(".main-navigation")),
                    (a = document.querySelector(".main-header-bar")),
                    (o = document.querySelector(".ast-mobile-header-wrap")),
                    null !== a) &&
                    null !== n &&
                    ((n = n.offsetHeight),
                    (a = a.offsetHeight),
                    (o = o.offsetHeight),
                    (n =
                      n &&
                      !document.body.classList.contains(
                        "ast-no-toggle-menu-enable"
                      )
                        ? parseFloat(n) - parseFloat(a)
                        : parseFloat(a)),
                    t.parentNode.classList.contains("ast-mobile-header-wrap") &&
                      (n = parseFloat(o)),
                    (t.style.maxHeight = Math.abs(n) + "px")))
                : ((a = s[r]),
                  (t = o = void 0),
                  document.body.classList.contains("ast-header-break-point") &&
                    ((t = document.querySelector(".main-navigation")),
                    null !==
                      (o = document.querySelector(".main-header-bar"))) &&
                    null !== t &&
                    ((t = t.offsetHeight),
                    (o = o.offsetHeight),
                    (t =
                      t &&
                      !document.body.classList.contains(
                        "ast-no-toggle-menu-enable"
                      )
                        ? parseFloat(t) - parseFloat(o)
                        : parseFloat(o)),
                    (a.style.maxHeight = Math.abs(t) + "px"))));
      else
        this.classList.contains("full-screen") &&
          (e = document.getElementById(
            "ast-seach-full-screen-form"
          )).classList.contains("full-screen") &&
          (d(e),
          (document.body.className += " full-screen"),
          e.querySelector("input.search-field").focus());
    };
  for (
    var s = document.querySelectorAll(".ast-search-box .close"),
      a = 0,
      c = s.length;
    a < c;
    ++a
  )
    s[a].onclick = function (e) {
      e = e || window.event;
      for (var t = this; ; ) {
        if (t.parentNode.classList.contains("ast-search-box")) {
          n(t.parentNode), o("full-screen");
          break;
        }
        if (t.parentNode.classList.contains("site-header")) break;
        t = t.parentNode;
      }
    };
  (document.onkeydown = function (e) {
    if (27 == e.keyCode)
      for (
        var e = document.getElementById("ast-seach-full-screen-form"),
          t =
            (null != e && (n(e), o("full-screen")),
            document.querySelectorAll(".ast-search-box.header-cover")),
          a = 0;
        a < t.length;
        a++
      )
        n(t[a]);
  }),
    window.addEventListener("resize", function () {
      if (
        "BODY" === document.activeElement.tagName &&
        "INPUT" != document.activeElement.tagName
      ) {
        var e = document.querySelectorAll(".ast-search-box.header-cover");
        if (!document.body.classList.contains("ast-header-break-point"))
          for (var t = 0; t < e.length; t++)
            (e[t].style.maxHeight = ""),
              (e[t].style.opacity = ""),
              (e[t].style.display = "");
      }
    });
  var r = document.getElementById("close");
  r &&
    r.addEventListener("keydown", function (e) {
      "Enter" === e.key
        ? (e.preventDefault(), this.click())
        : "Tab" === e.key && e.preventDefault();
    });
})();
!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 100));
})({
  100: function (e, t, r) {
    "use strict";
    r.r(t);
    var n = function (e) {
      return "string" != typeof e || "" === e
        ? (console.error("The namespace must be a non-empty string."), !1)
        : !!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e) ||
            (console.error(
              "The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."
            ),
            !1);
    };
    var o = function (e) {
      return "string" != typeof e || "" === e
        ? (console.error("The hook name must be a non-empty string."), !1)
        : /^__/.test(e)
        ? (console.error("The hook name cannot begin with `__`."), !1)
        : !!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e) ||
          (console.error(
            "The hook name can only contain numbers, letters, dashes, periods and underscores."
          ),
          !1);
    };
    var i = function (e, t) {
      return function (r, i, a) {
        var s =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10,
          c = e[t];
        if (o(r) && n(i))
          if ("function" == typeof a)
            if ("number" == typeof s) {
              var l = { callback: a, priority: s, namespace: i };
              if (c[r]) {
                var u,
                  d = c[r].handlers;
                for (u = d.length; u > 0 && !(s >= d[u - 1].priority); u--);
                u === d.length ? (d[u] = l) : d.splice(u, 0, l),
                  c.__current.forEach(function (e) {
                    e.name === r && e.currentIndex >= u && e.currentIndex++;
                  });
              } else c[r] = { handlers: [l], runs: 0 };
              "hookAdded" !== r && e.doAction("hookAdded", r, i, a, s);
            } else
              console.error(
                "If specified, the hook priority must be a number."
              );
          else console.error("The hook callback must be a function.");
      };
    };
    var a = function (e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return function (i, a) {
        var s = e[t];
        if (o(i) && (r || n(a))) {
          if (!s[i]) return 0;
          var c = 0;
          if (r)
            (c = s[i].handlers.length),
              (s[i] = { runs: s[i].runs, handlers: [] });
          else
            for (
              var l = s[i].handlers,
                u = function (e) {
                  l[e].namespace === a &&
                    (l.splice(e, 1),
                    c++,
                    s.__current.forEach(function (t) {
                      t.name === i && t.currentIndex >= e && t.currentIndex--;
                    }));
                },
                d = l.length - 1;
              d >= 0;
              d--
            )
              u(d);
          return "hookRemoved" !== i && e.doAction("hookRemoved", i, a), c;
        }
      };
    };
    var s = function (e, t) {
      return function (r, n) {
        var o = e[t];
        return void 0 !== n
          ? r in o &&
              o[r].handlers.some(function (e) {
                return e.namespace === n;
              })
          : r in o;
      };
    };
    var c = function (e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return function (n) {
        var o = e[t];
        o[n] || (o[n] = { handlers: [], runs: 0 }), o[n].runs++;
        var i = o[n].handlers;
        for (
          var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), c = 1;
          c < a;
          c++
        )
          s[c - 1] = arguments[c];
        if (!i || !i.length) return r ? s[0] : void 0;
        var l = { name: n, currentIndex: 0 };
        for (o.__current.push(l); l.currentIndex < i.length; ) {
          var u = i[l.currentIndex],
            d = u.callback.apply(null, s);
          r && (s[0] = d), l.currentIndex++;
        }
        return o.__current.pop(), r ? s[0] : void 0;
      };
    };
    var l = function (e, t) {
      return function () {
        var r,
          n,
          o = e[t];
        return null !==
          (r =
            null === (n = o.__current[o.__current.length - 1]) || void 0 === n
              ? void 0
              : n.name) && void 0 !== r
          ? r
          : null;
      };
    };
    var u = function (e, t) {
      return function (r) {
        var n = e[t];
        return void 0 === r
          ? void 0 !== n.__current[0]
          : !!n.__current[0] && r === n.__current[0].name;
      };
    };
    var d = function (e, t) {
        return function (r) {
          var n = e[t];
          if (o(r)) return n[r] && n[r].runs ? n[r].runs : 0;
        };
      },
      f = function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.actions = Object.create(null)),
          (this.actions.__current = []),
          (this.filters = Object.create(null)),
          (this.filters.__current = []),
          (this.addAction = i(this, "actions")),
          (this.addFilter = i(this, "filters")),
          (this.removeAction = a(this, "actions")),
          (this.removeFilter = a(this, "filters")),
          (this.hasAction = s(this, "actions")),
          (this.hasFilter = s(this, "filters")),
          (this.removeAllActions = a(this, "actions", !0)),
          (this.removeAllFilters = a(this, "filters", !0)),
          (this.doAction = c(this, "actions")),
          (this.applyFilters = c(this, "filters", !0)),
          (this.currentAction = l(this, "actions")),
          (this.currentFilter = l(this, "filters")),
          (this.doingAction = u(this, "actions")),
          (this.doingFilter = u(this, "filters")),
          (this.didAction = d(this, "actions")),
          (this.didFilter = d(this, "filters"));
      };
    var h = function () {
        return new f();
      },
      p = h();
    p.addAction,
      p.addFilter,
      p.removeAction,
      p.removeFilter,
      p.hasAction,
      p.hasFilter,
      p.removeAllActions,
      p.removeAllFilters,
      p.doAction,
      p.applyFilters,
      p.currentAction,
      p.currentFilter,
      p.doingAction,
      p.doingFilter,
      p.didAction,
      p.didFilter,
      p.actions,
      p.filters;
    function v(e) {
      return (v =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function m(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function y(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? m(Object(r), !0).forEach(function (t) {
              g(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : m(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function g(e, t, r) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != v(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, t || "default");
              if ("object" != v(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == v(t) ? t : t + "";
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    (window.isEditMode = !1),
      (window.ea = {
        hooks: h(),
        isEditMode: !1,
        elementStatusCheck: function (e) {
          return (
            !(!window.eaElementList || !(e in window.eaElementList)) ||
            ((window.eaElementList = y(
              y({}, window.eaElementList),
              {},
              g({}, e, !0)
            )),
            !1)
          );
        },
      }),
      ea.hooks.addAction("widgets.reinit", "ea", function (e) {
        var t = jQuery(".eael-filter-gallery-container", e),
          r = jQuery(".eael-post-grid:not(.eael-post-carousel)", e),
          n = jQuery(".eael-twitter-feed-masonry", e),
          o = jQuery(".eael-instafeed", e),
          i = jQuery(".premium-gallery-container", e),
          a = jQuery(".eael-event-calendar-cls", e),
          s = jQuery(".eael-testimonial-slider", e),
          c = jQuery(".eael-tm-carousel", e),
          l = jQuery(".eael-post-carousel:not(.eael-post-grid)", e),
          u = jQuery(".eael-logo-carousel", e),
          d = jQuery(".eael-twitter-feed-carousel", e);
        t.length && t.isotope("layout"),
          r.length && r.isotope("layout"),
          n.length && n.isotope("layout"),
          o.length && o.isotope("layout"),
          i.length && i.isotope("layout"),
          a.length && ea.hooks.doAction("eventCalendar.reinit"),
          s.length && ea.hooks.doAction("testimonialSlider.reinit"),
          c.length && ea.hooks.doAction("teamMemberCarousel.reinit"),
          l.length && ea.hooks.doAction("postCarousel.reinit"),
          u.length && ea.hooks.doAction("logoCarousel.reinit"),
          d.length && ea.hooks.doAction("twitterCarousel.reinit");
      });
    var b,
      w = function (e) {
        window.dispatchEvent(new Event("resize")),
          (e = "object" === v(e) ? e : jQuery(e))
            .find(".swiper-wrapper")
            .each(function () {
              var e = jQuery(this).css("transform");
              jQuery(this).css("transform", e);
            });
      };
    ea.hooks.addAction("ea-advanced-tabs-triggered", "ea", w),
      ea.hooks.addAction("ea-advanced-accordion-triggered", "ea", w),
      jQuery(window).on("elementor/frontend/init", function () {
        (window.isEditMode = elementorFrontend.isEditMode()),
          (window.ea.isEditMode = elementorFrontend.isEditMode()),
          ea.hooks.doAction("init"),
          ea.isEditMode && ea.hooks.doAction("editMode.init");
      }),
      (function (e) {
        (ea.getToken = function () {
          localize.nonce &&
            !ea.noncegenerated &&
            e.ajax({
              url: localize.ajaxurl,
              type: "post",
              data: { action: "eael_get_token" },
              success: function (e) {
                e.success &&
                  ((localize.nonce = e.data.nonce), (ea.noncegenerated = !0));
              },
            });
        }),
          (ea.sanitizeURL = function (e) {
            if (e.startsWith("/") || e.startsWith("#")) return e;
            try {
              var t = new URL(e);
              if (
                ![
                  "http:",
                  "https:",
                  "ftp:",
                  "ftps:",
                  "mailto:",
                  "news:",
                  "irc:",
                  "irc6:",
                  "ircs:",
                  "gopher:",
                  "nntp:",
                  "feed:",
                  "telnet:",
                  "mms:",
                  "rtsp:",
                  "sms:",
                  "svn:",
                  "tel:",
                  "fax:",
                  "xmpp:",
                  "webcal:",
                  "urn:",
                ].includes(t.protocol)
              )
                throw new Error("Invalid protocol");
              return t.toString();
            } catch (e) {
              return console.error("Error sanitizing URL:", e.message), "#";
            }
          });
        var t = !0;
        window.addEventListener("hashchange", function () {
          if (t) {
            var e = window.location.hash.substr(1);
            "undefined" !== (e = "safari" === e ? "eael-safari" : e) &&
              e &&
              jQuery("#" + e).trigger("click");
          }
        }),
          e("a").on("click", function (r) {
            var n,
              o = e(this).attr("href");
            (n = (o = void 0 === o ? "" : o).startsWith("#")) ||
              (n = (o = o.replace(localize.page_permalink, "")).startsWith(
                "#"
              )),
              n &&
                ((t = !1),
                setTimeout(function () {
                  t = !0;
                }, 100));
            try {
              if (o.startsWith("#!")) {
                var i = o.replace("#!", "#");
                e(i).trigger("click");
              } else {
                if (
                  n &&
                  (e(o).hasClass("eael-tab-item-trigger") ||
                    e(o).hasClass("eael-accordion-header"))
                )
                  if ((e(o).trigger("click"), void 0 !== o && o))
                    if (e(o).closest(".eael-advance-tabs").length > 0) {
                      var a = tab.data("custom-id-offset");
                      (a = a ? parseFloat(a) : 0),
                        e("html, body").animate(
                          { scrollTop: e(o).offset().top - a },
                          300
                        );
                    }
              }
            } catch (e) {}
          }),
          e(document).on("click", ".e-n-tab-title", function () {
            window.dispatchEvent(new Event("resize"));
          });
      })(jQuery),
      (b = jQuery)(document).on(
        "click",
        ".theme-savoy .eael-product-popup .nm-qty-minus, .theme-savoy .eael-product-popup .nm-qty-plus",
        function (e) {
          var t = b(this),
            r = t.closest(".quantity").find(".qty"),
            n = parseFloat(r.val()),
            o = parseFloat(r.attr("max")),
            i = parseFloat(r.attr("min")),
            a = r.attr("step");
          (n && "" !== n && "NaN" !== n) || (n = 0),
            ("" !== o && "NaN" !== o) || (o = ""),
            ("" !== i && "NaN" !== i) || (i = 0),
            ("any" !== a &&
              "" !== a &&
              void 0 !== a &&
              "NaN" !== parseFloat(a)) ||
              (a = 1),
            t.hasClass("nm-qty-plus")
              ? o && (o == n || n > o)
                ? r.val(o)
                : r.val(n + parseFloat(a))
              : i && (i == n || n < i)
              ? r.val(i)
              : n > 0 && r.val(n - parseFloat(a));
        }
      ),
      (function (e) {
        (e.fn.isInViewport = function () {
          if (e(this).length < 1) return !1;
          var t = e(this).offset().top,
            r = t + e(this).outerHeight() / 2,
            n = e(window).scrollTop(),
            o = n + e(window).height() / 2;
          return r > n && t < o;
        }),
          e(document).ready(function () {
            var e = new URLSearchParams(location.search);
            if (
              e.has("popup-selector") &&
              (e.has("eael-lostpassword") || e.has("eael-resetpassword"))
            ) {
              var t = e.get("popup-selector");
              t.length &&
                ((t = t.replace(/_/g, " ")),
                setTimeout(function () {
                  jQuery(t).trigger("click");
                }, 300));
            }
          });
      })(jQuery);
  },
});
("use strict");
var epdofitvids =
  epdofitvids ||
  function (b) {
    b.fn.fitVidsEP = function (h) {
      _EPYT_.epresponsiveselector.constructor !== Array &&
        (_EPYT_.epresponsiveselector = JSON.parse(_EPYT_.epresponsiveselector));
      var d = { customSelector: null };
      if (!document.getElementById("fit-vids-style")) {
        var f = document.createElement("style"),
          l =
            document.getElementsByTagName("base")[0] ||
            document.getElementsByTagName("script")[0];
        f.className = "fit-vids-style";
        f.id = "fit-vids-style";
        f.textContent =
          ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}";
        l.parentNode.insertBefore(f, l);
      }
      h && b.extend(d, h);
      return this.each(function () {
        var e = _EPYT_.epresponsiveselector;
        d.customSelector && e.push(d.customSelector);
        e = b(this).find(e.join(","));
        e = e.not("object object");
        e.each(function () {
          var a = b(this);
          if (
            !(
              ("embed" === this.tagName.toLowerCase() &&
                a.parent("object").length) ||
              a.parent(".fluid-width-video-wrapper").length ||
              "absolute" === a.css("position")
            )
          ) {
            a.is("[data-origwidth]:not([width])") &&
              a.attr("width", a.data("origwidth"));
            a.is("[data-origheight]:not([height])") &&
              a.attr("height", a.data("origheight"));
            var k =
                "object" === this.tagName.toLowerCase() ||
                (a.attr("height") && !isNaN(parseInt(a.attr("height"), 10)))
                  ? parseInt(a.attr("height"), 10)
                  : a.height(),
              g = isNaN(parseInt(a.attr("width"), 10))
                ? a.width()
                : parseInt(a.attr("width"), 10);
            k /= g;
            a.attr("id") ||
              a.attr("id", "fitvid" + Math.floor(999999 * Math.random()));
            var m = a.attr("width"),
              n = a.attr("height");
            if (a.parent().hasClass("epyt-video-wrapper"))
              try {
                a
                  .parent()
                  .addClass("fluid-width-video-wrapper")
                  .attr("style", "padding-top: " + 100 * k + "% !important;"),
                  a.removeAttr("height").removeAttr("width"),
                  setTimeout(function () {
                    if ("function" === typeof Event)
                      var c = new Event("resize");
                    else
                      (c = document.createEvent("Event")),
                        c.initEvent("resize", !0, !0);
                    window.dispatchEvent(c);
                  }, 10),
                  setTimeout(function () {
                    parseInt(a.parent().css("padding-top"), 10) >
                      a.height() + 20 &&
                      (a
                        .parent()
                        .removeClass("fluid-width-video-wrapper")
                        .css("padding-top", ""),
                      a.attr("width", m),
                      a.attr("height", n));
                  }, 100);
              } catch (c) {}
            else {
              g = document.createElement("div");
              g.className = "fluid-width-video-wrapper";
              try {
                a
                  .wrap(g)
                  .parent(".fluid-width-video-wrapper")
                  .attr("style", "padding-top: " + 100 * k + "% !important;"),
                  a.removeAttr("height").removeAttr("width"),
                  setTimeout(function () {
                    if ("function" === typeof Event)
                      var c = new Event("resize");
                    else
                      (c = document.createEvent("Event")),
                        c.initEvent("resize", !0, !0);
                    window.dispatchEvent(c);
                  }, 10),
                  setTimeout(function () {
                    parseInt(a.parent().css("padding-top"), 10) >
                      a.height() + 20 &&
                      (a
                        .parent()
                        .removeClass("fluid-width-video-wrapper")
                        .css("padding-top", ""),
                      a.attr("width", m),
                      a.attr("height", n));
                  }, 100);
              } catch (c) {}
            }
          }
        });
      });
    };
    b(document).ready(function () {
      b("body").fitVidsEP();
      b(document).ajaxSuccess(function (h, d, f) {
        d &&
          d.responseText &&
          -1 !== d.responseText.indexOf("<iframe ") &&
          b("body").fitVidsEP();
      });
    });
    return !0;
  };
try {
  epdofitvids(window.jQuery);
} catch (b) {}
/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

!(function (f) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = f();
  else if ("function" == typeof define && define.amd) define([], f);
  else {
    ("undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : this
    ).Qs = f();
  }
})(function () {
  return (function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            return o(e[i][1][r] || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  })(
    {
      1: [
        function (require, module, exports) {
          "use strict";
          var replace = String.prototype.replace,
            percentTwenties = /%20/g,
            Format_RFC1738 = "RFC1738",
            Format_RFC3986 = "RFC3986";
          module.exports = {
            default: Format_RFC3986,
            formatters: {
              RFC1738: function (e) {
                return replace.call(e, percentTwenties, "+");
              },
              RFC3986: function (e) {
                return String(e);
              },
            },
            RFC1738: Format_RFC1738,
            RFC3986: Format_RFC3986,
          };
        },
        {},
      ],
      2: [
        function (require, module, exports) {
          "use strict";
          var stringify = require(4),
            parse = require(3),
            formats = require(1);
          module.exports = {
            formats: formats,
            parse: parse,
            stringify: stringify,
          };
        },
        { 1: 1, 3: 3, 4: 4 },
      ],
      3: [
        function (require, module, exports) {
          "use strict";
          var utils = require(5),
            has = Object.prototype.hasOwnProperty,
            isArray = Array.isArray,
            defaults = {
              allowDots: !1,
              allowEmptyArrays: !1,
              allowPrototypes: !1,
              allowSparse: !1,
              arrayLimit: 20,
              charset: "utf-8",
              charsetSentinel: !1,
              comma: !1,
              decodeDotInKeys: !1,
              decoder: utils.decode,
              delimiter: "&",
              depth: 5,
              duplicates: "combine",
              ignoreQueryPrefix: !1,
              interpretNumericEntities: !1,
              parameterLimit: 1e3,
              parseArrays: !0,
              plainObjects: !1,
              strictNullHandling: !1,
            },
            interpretNumericEntities = function (e) {
              return e.replace(/&#(\d+);/g, function (e, t) {
                return String.fromCharCode(parseInt(t, 10));
              });
            },
            parseArrayValue = function (e, t) {
              return e && "string" == typeof e && t.comma && e.indexOf(",") > -1
                ? e.split(",")
                : e;
            },
            parseKeys = function parseQueryStringKeys(e, t, r, a) {
              if (e) {
                var o = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                  i = /(\[[^[\]]*])/g,
                  l = r.depth > 0 && /(\[[^[\]]*])/.exec(o),
                  s = l ? o.slice(0, l.index) : o,
                  n = [];
                if (s) {
                  if (
                    !r.plainObjects &&
                    has.call(Object.prototype, s) &&
                    !r.allowPrototypes
                  )
                    return;
                  n.push(s);
                }
                for (
                  var p = 0;
                  r.depth > 0 && null !== (l = i.exec(o)) && p < r.depth;

                ) {
                  if (
                    ((p += 1),
                    !r.plainObjects &&
                      has.call(Object.prototype, l[1].slice(1, -1)) &&
                      !r.allowPrototypes)
                  )
                    return;
                  n.push(l[1]);
                }
                return (
                  l && n.push("[" + o.slice(l.index) + "]"),
                  (function (e, t, r, a) {
                    for (
                      var o = a ? t : parseArrayValue(t, r), i = e.length - 1;
                      i >= 0;
                      --i
                    ) {
                      var l,
                        s = e[i];
                      if ("[]" === s && r.parseArrays)
                        l = r.allowEmptyArrays && "" === o ? [] : [].concat(o);
                      else {
                        l = r.plainObjects ? Object.create(null) : {};
                        var n =
                            "[" === s.charAt(0) &&
                            "]" === s.charAt(s.length - 1)
                              ? s.slice(1, -1)
                              : s,
                          p = r.decodeDotInKeys ? n.replace(/%2E/g, ".") : n,
                          c = parseInt(p, 10);
                        r.parseArrays || "" !== p
                          ? !isNaN(c) &&
                            s !== p &&
                            String(c) === p &&
                            c >= 0 &&
                            r.parseArrays &&
                            c <= r.arrayLimit
                            ? ((l = [])[c] = o)
                            : "__proto__" !== p && (l[p] = o)
                          : (l = { 0: o });
                      }
                      o = l;
                    }
                    return o;
                  })(n, t, r, a)
                );
              }
            };
          module.exports = function (e, t) {
            var r = (function normalizeParseOptions(e) {
              if (!e) return defaults;
              if (
                void 0 !== e.allowEmptyArrays &&
                "boolean" != typeof e.allowEmptyArrays
              )
                throw new TypeError(
                  "`allowEmptyArrays` option can only be `true` or `false`, when provided"
                );
              if (
                void 0 !== e.decodeDotInKeys &&
                "boolean" != typeof e.decodeDotInKeys
              )
                throw new TypeError(
                  "`decodeDotInKeys` option can only be `true` or `false`, when provided"
                );
              if (
                null !== e.decoder &&
                void 0 !== e.decoder &&
                "function" != typeof e.decoder
              )
                throw new TypeError("Decoder has to be a function.");
              if (
                void 0 !== e.charset &&
                "utf-8" !== e.charset &&
                "iso-8859-1" !== e.charset
              )
                throw new TypeError(
                  "The charset option must be either utf-8, iso-8859-1, or undefined"
                );
              var t = void 0 === e.charset ? defaults.charset : e.charset,
                r =
                  void 0 === e.duplicates ? defaults.duplicates : e.duplicates;
              if ("combine" !== r && "first" !== r && "last" !== r)
                throw new TypeError(
                  "The duplicates option must be either combine, first, or last"
                );
              return {
                allowDots:
                  void 0 === e.allowDots
                    ? !0 === e.decodeDotInKeys || defaults.allowDots
                    : !!e.allowDots,
                allowEmptyArrays:
                  "boolean" == typeof e.allowEmptyArrays
                    ? !!e.allowEmptyArrays
                    : defaults.allowEmptyArrays,
                allowPrototypes:
                  "boolean" == typeof e.allowPrototypes
                    ? e.allowPrototypes
                    : defaults.allowPrototypes,
                allowSparse:
                  "boolean" == typeof e.allowSparse
                    ? e.allowSparse
                    : defaults.allowSparse,
                arrayLimit:
                  "number" == typeof e.arrayLimit
                    ? e.arrayLimit
                    : defaults.arrayLimit,
                charset: t,
                charsetSentinel:
                  "boolean" == typeof e.charsetSentinel
                    ? e.charsetSentinel
                    : defaults.charsetSentinel,
                comma: "boolean" == typeof e.comma ? e.comma : defaults.comma,
                decodeDotInKeys:
                  "boolean" == typeof e.decodeDotInKeys
                    ? e.decodeDotInKeys
                    : defaults.decodeDotInKeys,
                decoder:
                  "function" == typeof e.decoder ? e.decoder : defaults.decoder,
                delimiter:
                  "string" == typeof e.delimiter || utils.isRegExp(e.delimiter)
                    ? e.delimiter
                    : defaults.delimiter,
                depth:
                  "number" == typeof e.depth || !1 === e.depth
                    ? +e.depth
                    : defaults.depth,
                duplicates: r,
                ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                interpretNumericEntities:
                  "boolean" == typeof e.interpretNumericEntities
                    ? e.interpretNumericEntities
                    : defaults.interpretNumericEntities,
                parameterLimit:
                  "number" == typeof e.parameterLimit
                    ? e.parameterLimit
                    : defaults.parameterLimit,
                parseArrays: !1 !== e.parseArrays,
                plainObjects:
                  "boolean" == typeof e.plainObjects
                    ? e.plainObjects
                    : defaults.plainObjects,
                strictNullHandling:
                  "boolean" == typeof e.strictNullHandling
                    ? e.strictNullHandling
                    : defaults.strictNullHandling,
              };
            })(t);
            if ("" === e || null == e)
              return r.plainObjects ? Object.create(null) : {};
            for (
              var a =
                  "string" == typeof e
                    ? (function parseQueryStringValues(e, t) {
                        var r,
                          a = { __proto__: null },
                          o = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
                          i =
                            t.parameterLimit === 1 / 0
                              ? void 0
                              : t.parameterLimit,
                          l = o.split(t.delimiter, i),
                          s = -1,
                          n = t.charset;
                        if (t.charsetSentinel)
                          for (r = 0; r < l.length; ++r)
                            0 === l[r].indexOf("utf8=") &&
                              ("utf8=%E2%9C%93" === l[r]
                                ? (n = "utf-8")
                                : "utf8=%26%2310003%3B" === l[r] &&
                                  (n = "iso-8859-1"),
                              (s = r),
                              (r = l.length));
                        for (r = 0; r < l.length; ++r)
                          if (r !== s) {
                            var p,
                              c,
                              d = l[r],
                              u = d.indexOf("]="),
                              y = -1 === u ? d.indexOf("=") : u + 1;
                            -1 === y
                              ? ((p = t.decoder(d, defaults.decoder, n, "key")),
                                (c = t.strictNullHandling ? null : ""))
                              : ((p = t.decoder(
                                  d.slice(0, y),
                                  defaults.decoder,
                                  n,
                                  "key"
                                )),
                                (c = utils.maybeMap(
                                  parseArrayValue(d.slice(y + 1), t),
                                  function (e) {
                                    return t.decoder(
                                      e,
                                      defaults.decoder,
                                      n,
                                      "value"
                                    );
                                  }
                                ))),
                              c &&
                                t.interpretNumericEntities &&
                                "iso-8859-1" === n &&
                                (c = interpretNumericEntities(c)),
                              d.indexOf("[]=") > -1 &&
                                (c = isArray(c) ? [c] : c);
                            var f = has.call(a, p);
                            f && "combine" === t.duplicates
                              ? (a[p] = utils.combine(a[p], c))
                              : (f && "last" !== t.duplicates) || (a[p] = c);
                          }
                        return a;
                      })(e, r)
                    : e,
                o = r.plainObjects ? Object.create(null) : {},
                i = Object.keys(a),
                l = 0;
              l < i.length;
              ++l
            ) {
              var s = i[l],
                n = parseKeys(s, a[s], r, "string" == typeof e);
              o = utils.merge(o, n, r);
            }
            return !0 === r.allowSparse ? o : utils.compact(o);
          };
        },
        { 5: 5 },
      ],
      4: [
        function (require, module, exports) {
          "use strict";
          var getSideChannel = require(29),
            utils = require(5),
            formats = require(1),
            has = Object.prototype.hasOwnProperty,
            arrayPrefixGenerators = {
              brackets: function brackets(e) {
                return e + "[]";
              },
              comma: "comma",
              indices: function indices(e, r) {
                return e + "[" + r + "]";
              },
              repeat: function repeat(e) {
                return e;
              },
            },
            isArray = Array.isArray,
            push = Array.prototype.push,
            pushToArray = function (e, r) {
              push.apply(e, isArray(r) ? r : [r]);
            },
            toISO = Date.prototype.toISOString,
            defaultFormat = formats.default,
            defaults = {
              addQueryPrefix: !1,
              allowDots: !1,
              allowEmptyArrays: !1,
              arrayFormat: "indices",
              charset: "utf-8",
              charsetSentinel: !1,
              delimiter: "&",
              encode: !0,
              encodeDotInKeys: !1,
              encoder: utils.encode,
              encodeValuesOnly: !1,
              format: defaultFormat,
              formatter: formats.formatters[defaultFormat],
              indices: !1,
              serializeDate: function serializeDate(e) {
                return toISO.call(e);
              },
              skipNulls: !1,
              strictNullHandling: !1,
            },
            sentinel = {},
            stringify = function stringify(
              e,
              r,
              t,
              o,
              a,
              n,
              i,
              l,
              s,
              f,
              u,
              d,
              y,
              c,
              p,
              m,
              h,
              v
            ) {
              for (
                var w = e, b = v, g = 0, A = !1;
                void 0 !== (b = b.get(sentinel)) && !A;

              ) {
                var D = b.get(e);
                if (((g += 1), void 0 !== D)) {
                  if (D === g) throw new RangeError("Cyclic object value");
                  A = !0;
                }
                void 0 === b.get(sentinel) && (g = 0);
              }
              if (
                ("function" == typeof f
                  ? (w = f(r, w))
                  : w instanceof Date
                  ? (w = y(w))
                  : "comma" === t &&
                    isArray(w) &&
                    (w = utils.maybeMap(w, function (e) {
                      return e instanceof Date ? y(e) : e;
                    })),
                null === w)
              ) {
                if (n) return s && !m ? s(r, defaults.encoder, h, "key", c) : r;
                w = "";
              }
              if (
                (function isNonNullishPrimitive(e) {
                  return (
                    "string" == typeof e ||
                    "number" == typeof e ||
                    "boolean" == typeof e ||
                    "symbol" == typeof e ||
                    "bigint" == typeof e
                  );
                })(w) ||
                utils.isBuffer(w)
              )
                return s
                  ? [
                      p(m ? r : s(r, defaults.encoder, h, "key", c)) +
                        "=" +
                        p(s(w, defaults.encoder, h, "value", c)),
                    ]
                  : [p(r) + "=" + p(String(w))];
              var E,
                N = [];
              if (void 0 === w) return N;
              if ("comma" === t && isArray(w))
                m && s && (w = utils.maybeMap(w, s)),
                  (E = [
                    { value: w.length > 0 ? w.join(",") || null : void 0 },
                  ]);
              else if (isArray(f)) E = f;
              else {
                var S = Object.keys(w);
                E = u ? S.sort(u) : S;
              }
              var O = l ? r.replace(/\./g, "%2E") : r,
                T = o && isArray(w) && 1 === w.length ? O + "[]" : O;
              if (a && isArray(w) && 0 === w.length) return T + "[]";
              for (var k = 0; k < E.length; ++k) {
                var I = E[k],
                  P =
                    "object" == typeof I && void 0 !== I.value ? I.value : w[I];
                if (!i || null !== P) {
                  var x = d && l ? I.replace(/\./g, "%2E") : I,
                    z = isArray(w)
                      ? "function" == typeof t
                        ? t(T, x)
                        : T
                      : T + (d ? "." + x : "[" + x + "]");
                  v.set(e, g);
                  var K = getSideChannel();
                  K.set(sentinel, v),
                    pushToArray(
                      N,
                      stringify(
                        P,
                        z,
                        t,
                        o,
                        a,
                        n,
                        i,
                        l,
                        "comma" === t && m && isArray(w) ? null : s,
                        f,
                        u,
                        d,
                        y,
                        c,
                        p,
                        m,
                        h,
                        K
                      )
                    );
                }
              }
              return N;
            };
          module.exports = function (e, r) {
            var t,
              o = e,
              a = (function normalizeStringifyOptions(e) {
                if (!e) return defaults;
                if (
                  void 0 !== e.allowEmptyArrays &&
                  "boolean" != typeof e.allowEmptyArrays
                )
                  throw new TypeError(
                    "`allowEmptyArrays` option can only be `true` or `false`, when provided"
                  );
                if (
                  void 0 !== e.encodeDotInKeys &&
                  "boolean" != typeof e.encodeDotInKeys
                )
                  throw new TypeError(
                    "`encodeDotInKeys` option can only be `true` or `false`, when provided"
                  );
                if (
                  null !== e.encoder &&
                  void 0 !== e.encoder &&
                  "function" != typeof e.encoder
                )
                  throw new TypeError("Encoder has to be a function.");
                var r = e.charset || defaults.charset;
                if (
                  void 0 !== e.charset &&
                  "utf-8" !== e.charset &&
                  "iso-8859-1" !== e.charset
                )
                  throw new TypeError(
                    "The charset option must be either utf-8, iso-8859-1, or undefined"
                  );
                var t = formats.default;
                if (void 0 !== e.format) {
                  if (!has.call(formats.formatters, e.format))
                    throw new TypeError("Unknown format option provided.");
                  t = e.format;
                }
                var o,
                  a = formats.formatters[t],
                  n = defaults.filter;
                if (
                  (("function" == typeof e.filter || isArray(e.filter)) &&
                    (n = e.filter),
                  (o =
                    e.arrayFormat in arrayPrefixGenerators
                      ? e.arrayFormat
                      : "indices" in e
                      ? e.indices
                        ? "indices"
                        : "repeat"
                      : defaults.arrayFormat),
                  "commaRoundTrip" in e && "boolean" != typeof e.commaRoundTrip)
                )
                  throw new TypeError(
                    "`commaRoundTrip` must be a boolean, or absent"
                  );
                var i =
                  void 0 === e.allowDots
                    ? !0 === e.encodeDotInKeys || defaults.allowDots
                    : !!e.allowDots;
                return {
                  addQueryPrefix:
                    "boolean" == typeof e.addQueryPrefix
                      ? e.addQueryPrefix
                      : defaults.addQueryPrefix,
                  allowDots: i,
                  allowEmptyArrays:
                    "boolean" == typeof e.allowEmptyArrays
                      ? !!e.allowEmptyArrays
                      : defaults.allowEmptyArrays,
                  arrayFormat: o,
                  charset: r,
                  charsetSentinel:
                    "boolean" == typeof e.charsetSentinel
                      ? e.charsetSentinel
                      : defaults.charsetSentinel,
                  commaRoundTrip: e.commaRoundTrip,
                  delimiter:
                    void 0 === e.delimiter ? defaults.delimiter : e.delimiter,
                  encode:
                    "boolean" == typeof e.encode ? e.encode : defaults.encode,
                  encodeDotInKeys:
                    "boolean" == typeof e.encodeDotInKeys
                      ? e.encodeDotInKeys
                      : defaults.encodeDotInKeys,
                  encoder:
                    "function" == typeof e.encoder
                      ? e.encoder
                      : defaults.encoder,
                  encodeValuesOnly:
                    "boolean" == typeof e.encodeValuesOnly
                      ? e.encodeValuesOnly
                      : defaults.encodeValuesOnly,
                  filter: n,
                  format: t,
                  formatter: a,
                  serializeDate:
                    "function" == typeof e.serializeDate
                      ? e.serializeDate
                      : defaults.serializeDate,
                  skipNulls:
                    "boolean" == typeof e.skipNulls
                      ? e.skipNulls
                      : defaults.skipNulls,
                  sort: "function" == typeof e.sort ? e.sort : null,
                  strictNullHandling:
                    "boolean" == typeof e.strictNullHandling
                      ? e.strictNullHandling
                      : defaults.strictNullHandling,
                };
              })(r);
            "function" == typeof a.filter
              ? (o = (0, a.filter)("", o))
              : isArray(a.filter) && (t = a.filter);
            var n = [];
            if ("object" != typeof o || null === o) return "";
            var i = arrayPrefixGenerators[a.arrayFormat],
              l = "comma" === i && a.commaRoundTrip;
            t || (t = Object.keys(o)), a.sort && t.sort(a.sort);
            for (var s = getSideChannel(), f = 0; f < t.length; ++f) {
              var u = t[f];
              (a.skipNulls && null === o[u]) ||
                pushToArray(
                  n,
                  stringify(
                    o[u],
                    u,
                    i,
                    l,
                    a.allowEmptyArrays,
                    a.strictNullHandling,
                    a.skipNulls,
                    a.encodeDotInKeys,
                    a.encode ? a.encoder : null,
                    a.filter,
                    a.sort,
                    a.allowDots,
                    a.serializeDate,
                    a.format,
                    a.formatter,
                    a.encodeValuesOnly,
                    a.charset,
                    s
                  )
                );
            }
            var d = n.join(a.delimiter),
              y = !0 === a.addQueryPrefix ? "?" : "";
            return (
              a.charsetSentinel &&
                ("iso-8859-1" === a.charset
                  ? (y += "utf8=%26%2310003%3B&")
                  : (y += "utf8=%E2%9C%93&")),
              d.length > 0 ? y + d : ""
            );
          };
        },
        { 1: 1, 29: 29, 5: 5 },
      ],
      5: [
        function (require, module, exports) {
          "use strict";
          var formats = require(1),
            has = Object.prototype.hasOwnProperty,
            isArray = Array.isArray,
            hexTable = (function () {
              for (var e = [], r = 0; r < 256; ++r)
                e.push(
                  "%" + ((r < 16 ? "0" : "") + r.toString(16)).toUpperCase()
                );
              return e;
            })();
          module.exports = {
            combine: function combine(e, r) {
              return [].concat(e, r);
            },
            compact: function compact(e) {
              for (
                var r = [{ obj: { o: e }, prop: "o" }], t = [], o = 0;
                o < r.length;
                ++o
              )
                for (
                  var n = r[o], a = n.obj[n.prop], c = Object.keys(a), i = 0;
                  i < c.length;
                  ++i
                ) {
                  var u = c[i],
                    p = a[u];
                  "object" == typeof p &&
                    null !== p &&
                    -1 === t.indexOf(p) &&
                    (r.push({ obj: a, prop: u }), t.push(p));
                }
              return (
                (function compactQueue(e) {
                  for (; e.length > 1; ) {
                    var r = e.pop(),
                      t = r.obj[r.prop];
                    if (isArray(t)) {
                      for (var o = [], n = 0; n < t.length; ++n)
                        void 0 !== t[n] && o.push(t[n]);
                      r.obj[r.prop] = o;
                    }
                  }
                })(r),
                e
              );
            },
            decode: function (e, r, t) {
              var o = e.replace(/\+/g, " ");
              if ("iso-8859-1" === t)
                return o.replace(/%[0-9a-f]{2}/gi, unescape);
              try {
                return decodeURIComponent(o);
              } catch (e) {
                return o;
              }
            },
            encode: function encode(e, r, t, o, n) {
              if (0 === e.length) return e;
              var a = e;
              if (
                ("symbol" == typeof e
                  ? (a = Symbol.prototype.toString.call(e))
                  : "string" != typeof e && (a = String(e)),
                "iso-8859-1" === t)
              )
                return escape(a).replace(/%u[0-9a-f]{4}/gi, function (e) {
                  return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
                });
              for (var c = "", i = 0; i < a.length; i += 1024) {
                for (
                  var u = a.length >= 1024 ? a.slice(i, i + 1024) : a,
                    p = [],
                    s = 0;
                  s < u.length;
                  ++s
                ) {
                  var f = u.charCodeAt(s);
                  45 === f ||
                  46 === f ||
                  95 === f ||
                  126 === f ||
                  (f >= 48 && f <= 57) ||
                  (f >= 65 && f <= 90) ||
                  (f >= 97 && f <= 122) ||
                  (n === formats.RFC1738 && (40 === f || 41 === f))
                    ? (p[p.length] = u.charAt(s))
                    : f < 128
                    ? (p[p.length] = hexTable[f])
                    : f < 2048
                    ? (p[p.length] =
                        hexTable[192 | (f >> 6)] + hexTable[128 | (63 & f)])
                    : f < 55296 || f >= 57344
                    ? (p[p.length] =
                        hexTable[224 | (f >> 12)] +
                        hexTable[128 | ((f >> 6) & 63)] +
                        hexTable[128 | (63 & f)])
                    : ((s += 1),
                      (f =
                        65536 +
                        (((1023 & f) << 10) | (1023 & u.charCodeAt(s)))),
                      (p[p.length] =
                        hexTable[240 | (f >> 18)] +
                        hexTable[128 | ((f >> 12) & 63)] +
                        hexTable[128 | ((f >> 6) & 63)] +
                        hexTable[128 | (63 & f)]));
                }
                c += p.join("");
              }
              return c;
            },
            isBuffer: function isBuffer(e) {
              return !(
                !e ||
                "object" != typeof e ||
                !(
                  e.constructor &&
                  e.constructor.isBuffer &&
                  e.constructor.isBuffer(e)
                )
              );
            },
            isRegExp: function isRegExp(e) {
              return "[object RegExp]" === Object.prototype.toString.call(e);
            },
            maybeMap: function maybeMap(e, r) {
              if (isArray(e)) {
                for (var t = [], o = 0; o < e.length; o += 1) t.push(r(e[o]));
                return t;
              }
              return r(e);
            },
            merge: function merge(e, r, t) {
              if (!r) return e;
              if ("object" != typeof r) {
                if (isArray(e)) e.push(r);
                else {
                  if (!e || "object" != typeof e) return [e, r];
                  ((t && (t.plainObjects || t.allowPrototypes)) ||
                    !has.call(Object.prototype, r)) &&
                    (e[r] = !0);
                }
                return e;
              }
              if (!e || "object" != typeof e) return [e].concat(r);
              var o = e;
              return (
                isArray(e) &&
                  !isArray(r) &&
                  (o = (function arrayToObject(e, r) {
                    for (
                      var t = r && r.plainObjects ? Object.create(null) : {},
                        o = 0;
                      o < e.length;
                      ++o
                    )
                      void 0 !== e[o] && (t[o] = e[o]);
                    return t;
                  })(e, t)),
                isArray(e) && isArray(r)
                  ? (r.forEach(function (r, o) {
                      if (has.call(e, o)) {
                        var n = e[o];
                        n && "object" == typeof n && r && "object" == typeof r
                          ? (e[o] = merge(n, r, t))
                          : e.push(r);
                      } else e[o] = r;
                    }),
                    e)
                  : Object.keys(r).reduce(function (e, o) {
                      var n = r[o];
                      return (
                        has.call(e, o)
                          ? (e[o] = merge(e[o], n, t))
                          : (e[o] = n),
                        e
                      );
                    }, o)
              );
            },
          };
        },
        { 1: 1 },
      ],
      29: [
        function (require, module, exports) {
          "use strict";
          var GetIntrinsic = require(20),
            callBound = require(7),
            inspect = require(27),
            $TypeError = require(16),
            $WeakMap = GetIntrinsic("%WeakMap%", !0),
            $Map = GetIntrinsic("%Map%", !0),
            $weakMapGet = callBound("WeakMap.prototype.get", !0),
            $weakMapSet = callBound("WeakMap.prototype.set", !0),
            $weakMapHas = callBound("WeakMap.prototype.has", !0),
            $mapGet = callBound("Map.prototype.get", !0),
            $mapSet = callBound("Map.prototype.set", !0),
            $mapHas = callBound("Map.prototype.has", !0),
            listGetNode = function (e, t) {
              for (var n, a = e; null !== (n = a.next); a = n)
                if (n.key === t)
                  return (a.next = n.next), (n.next = e.next), (e.next = n), n;
            };
          module.exports = function getSideChannel() {
            var e,
              t,
              n,
              a = {
                assert: function (e) {
                  if (!a.has(e))
                    throw new $TypeError(
                      "Side channel does not contain " + inspect(e)
                    );
                },
                get: function (a) {
                  if (
                    $WeakMap &&
                    a &&
                    ("object" == typeof a || "function" == typeof a)
                  ) {
                    if (e) return $weakMapGet(e, a);
                  } else if ($Map) {
                    if (t) return $mapGet(t, a);
                  } else if (n)
                    return (function (e, t) {
                      var n = listGetNode(e, t);
                      return n && n.value;
                    })(n, a);
                },
                has: function (a) {
                  if (
                    $WeakMap &&
                    a &&
                    ("object" == typeof a || "function" == typeof a)
                  ) {
                    if (e) return $weakMapHas(e, a);
                  } else if ($Map) {
                    if (t) return $mapHas(t, a);
                  } else if (n)
                    return (function (e, t) {
                      return !!listGetNode(e, t);
                    })(n, a);
                  return !1;
                },
                set: function (a, r) {
                  $WeakMap &&
                  a &&
                  ("object" == typeof a || "function" == typeof a)
                    ? (e || (e = new $WeakMap()), $weakMapSet(e, a, r))
                    : $Map
                    ? (t || (t = new $Map()), $mapSet(t, a, r))
                    : (n || (n = { key: {}, next: null }),
                      (function (e, t, n) {
                        var a = listGetNode(e, t);
                        a
                          ? (a.value = n)
                          : (e.next = { key: t, next: e.next, value: n });
                      })(n, a, r));
                },
              };
            return a;
          };
        },
        { 16: 16, 20: 20, 27: 27, 7: 7 },
      ],
      6: [function (require, module, exports) {}, {}],
      7: [
        function (require, module, exports) {
          "use strict";
          var GetIntrinsic = require(20),
            callBind = require(8),
            $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
          module.exports = function callBoundIntrinsic(i, n) {
            var t = GetIntrinsic(i, !!n);
            return "function" == typeof t && $indexOf(i, ".prototype.") > -1
              ? callBind(t)
              : t;
          };
        },
        { 20: 20, 8: 8 },
      ],
      20: [
        function (require, module, exports) {
          "use strict";
          var $Error = require(12),
            $EvalError = require(11),
            $RangeError = require(13),
            $ReferenceError = require(14),
            $SyntaxError = require(15),
            $TypeError = require(16),
            $URIError = require(17),
            $Function = Function,
            getEvalledConstructor = function (r) {
              try {
                return $Function(
                  '"use strict"; return (' + r + ").constructor;"
                )();
              } catch (r) {}
            },
            $gOPD = Object.getOwnPropertyDescriptor;
          if ($gOPD)
            try {
              $gOPD({}, "");
            } catch (r) {
              $gOPD = null;
            }
          var throwTypeError = function () {
              throw new $TypeError();
            },
            ThrowTypeError = $gOPD
              ? (function () {
                  try {
                    return throwTypeError;
                  } catch (r) {
                    try {
                      return $gOPD(arguments, "callee").get;
                    } catch (r) {
                      return throwTypeError;
                    }
                  }
                })()
              : throwTypeError,
            hasSymbols = require(24)(),
            hasProto = require(23)(),
            getProto =
              Object.getPrototypeOf ||
              (hasProto
                ? function (r) {
                    return r.__proto__;
                  }
                : null),
            needsEval = {},
            TypedArray =
              "undefined" != typeof Uint8Array && getProto
                ? getProto(Uint8Array)
                : undefined,
            INTRINSICS = {
              __proto__: null,
              "%AggregateError%":
                "undefined" == typeof AggregateError
                  ? undefined
                  : AggregateError,
              "%Array%": Array,
              "%ArrayBuffer%":
                "undefined" == typeof ArrayBuffer ? undefined : ArrayBuffer,
              "%ArrayIteratorPrototype%":
                hasSymbols && getProto
                  ? getProto([][Symbol.iterator]())
                  : undefined,
              "%AsyncFromSyncIteratorPrototype%": undefined,
              "%AsyncFunction%": needsEval,
              "%AsyncGenerator%": needsEval,
              "%AsyncGeneratorFunction%": needsEval,
              "%AsyncIteratorPrototype%": needsEval,
              "%Atomics%": "undefined" == typeof Atomics ? undefined : Atomics,
              "%BigInt%": "undefined" == typeof BigInt ? undefined : BigInt,
              "%BigInt64Array%":
                "undefined" == typeof BigInt64Array ? undefined : BigInt64Array,
              "%BigUint64Array%":
                "undefined" == typeof BigUint64Array
                  ? undefined
                  : BigUint64Array,
              "%Boolean%": Boolean,
              "%DataView%":
                "undefined" == typeof DataView ? undefined : DataView,
              "%Date%": Date,
              "%decodeURI%": decodeURI,
              "%decodeURIComponent%": decodeURIComponent,
              "%encodeURI%": encodeURI,
              "%encodeURIComponent%": encodeURIComponent,
              "%Error%": $Error,
              "%eval%": eval,
              "%EvalError%": $EvalError,
              "%Float32Array%":
                "undefined" == typeof Float32Array ? undefined : Float32Array,
              "%Float64Array%":
                "undefined" == typeof Float64Array ? undefined : Float64Array,
              "%FinalizationRegistry%":
                "undefined" == typeof FinalizationRegistry
                  ? undefined
                  : FinalizationRegistry,
              "%Function%": $Function,
              "%GeneratorFunction%": needsEval,
              "%Int8Array%":
                "undefined" == typeof Int8Array ? undefined : Int8Array,
              "%Int16Array%":
                "undefined" == typeof Int16Array ? undefined : Int16Array,
              "%Int32Array%":
                "undefined" == typeof Int32Array ? undefined : Int32Array,
              "%isFinite%": isFinite,
              "%isNaN%": isNaN,
              "%IteratorPrototype%":
                hasSymbols && getProto
                  ? getProto(getProto([][Symbol.iterator]()))
                  : undefined,
              "%JSON%": "object" == typeof JSON ? JSON : undefined,
              "%Map%": "undefined" == typeof Map ? undefined : Map,
              "%MapIteratorPrototype%":
                "undefined" != typeof Map && hasSymbols && getProto
                  ? getProto(new Map()[Symbol.iterator]())
                  : undefined,
              "%Math%": Math,
              "%Number%": Number,
              "%Object%": Object,
              "%parseFloat%": parseFloat,
              "%parseInt%": parseInt,
              "%Promise%": "undefined" == typeof Promise ? undefined : Promise,
              "%Proxy%": "undefined" == typeof Proxy ? undefined : Proxy,
              "%RangeError%": $RangeError,
              "%ReferenceError%": $ReferenceError,
              "%Reflect%": "undefined" == typeof Reflect ? undefined : Reflect,
              "%RegExp%": RegExp,
              "%Set%": "undefined" == typeof Set ? undefined : Set,
              "%SetIteratorPrototype%":
                "undefined" != typeof Set && hasSymbols && getProto
                  ? getProto(new Set()[Symbol.iterator]())
                  : undefined,
              "%SharedArrayBuffer%":
                "undefined" == typeof SharedArrayBuffer
                  ? undefined
                  : SharedArrayBuffer,
              "%String%": String,
              "%StringIteratorPrototype%":
                hasSymbols && getProto
                  ? getProto(""[Symbol.iterator]())
                  : undefined,
              "%Symbol%": hasSymbols ? Symbol : undefined,
              "%SyntaxError%": $SyntaxError,
              "%ThrowTypeError%": ThrowTypeError,
              "%TypedArray%": TypedArray,
              "%TypeError%": $TypeError,
              "%Uint8Array%":
                "undefined" == typeof Uint8Array ? undefined : Uint8Array,
              "%Uint8ClampedArray%":
                "undefined" == typeof Uint8ClampedArray
                  ? undefined
                  : Uint8ClampedArray,
              "%Uint16Array%":
                "undefined" == typeof Uint16Array ? undefined : Uint16Array,
              "%Uint32Array%":
                "undefined" == typeof Uint32Array ? undefined : Uint32Array,
              "%URIError%": $URIError,
              "%WeakMap%": "undefined" == typeof WeakMap ? undefined : WeakMap,
              "%WeakRef%": "undefined" == typeof WeakRef ? undefined : WeakRef,
              "%WeakSet%": "undefined" == typeof WeakSet ? undefined : WeakSet,
            };
          if (getProto)
            try {
              null.error;
            } catch (r) {
              var errorProto = getProto(getProto(r));
              INTRINSICS["%Error.prototype%"] = errorProto;
            }
          var doEval = function doEval(r) {
              var e;
              if ("%AsyncFunction%" === r)
                e = getEvalledConstructor("async function () {}");
              else if ("%GeneratorFunction%" === r)
                e = getEvalledConstructor("function* () {}");
              else if ("%AsyncGeneratorFunction%" === r)
                e = getEvalledConstructor("async function* () {}");
              else if ("%AsyncGenerator%" === r) {
                var t = doEval("%AsyncGeneratorFunction%");
                t && (e = t.prototype);
              } else if ("%AsyncIteratorPrototype%" === r) {
                var o = doEval("%AsyncGenerator%");
                o && getProto && (e = getProto(o.prototype));
              }
              return (INTRINSICS[r] = e), e;
            },
            LEGACY_ALIASES = {
              __proto__: null,
              "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
              "%ArrayPrototype%": ["Array", "prototype"],
              "%ArrayProto_entries%": ["Array", "prototype", "entries"],
              "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
              "%ArrayProto_keys%": ["Array", "prototype", "keys"],
              "%ArrayProto_values%": ["Array", "prototype", "values"],
              "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
              "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
              "%AsyncGeneratorPrototype%": [
                "AsyncGeneratorFunction",
                "prototype",
                "prototype",
              ],
              "%BooleanPrototype%": ["Boolean", "prototype"],
              "%DataViewPrototype%": ["DataView", "prototype"],
              "%DatePrototype%": ["Date", "prototype"],
              "%ErrorPrototype%": ["Error", "prototype"],
              "%EvalErrorPrototype%": ["EvalError", "prototype"],
              "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
              "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
              "%FunctionPrototype%": ["Function", "prototype"],
              "%Generator%": ["GeneratorFunction", "prototype"],
              "%GeneratorPrototype%": [
                "GeneratorFunction",
                "prototype",
                "prototype",
              ],
              "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
              "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
              "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
              "%JSONParse%": ["JSON", "parse"],
              "%JSONStringify%": ["JSON", "stringify"],
              "%MapPrototype%": ["Map", "prototype"],
              "%NumberPrototype%": ["Number", "prototype"],
              "%ObjectPrototype%": ["Object", "prototype"],
              "%ObjProto_toString%": ["Object", "prototype", "toString"],
              "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
              "%PromisePrototype%": ["Promise", "prototype"],
              "%PromiseProto_then%": ["Promise", "prototype", "then"],
              "%Promise_all%": ["Promise", "all"],
              "%Promise_reject%": ["Promise", "reject"],
              "%Promise_resolve%": ["Promise", "resolve"],
              "%RangeErrorPrototype%": ["RangeError", "prototype"],
              "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
              "%RegExpPrototype%": ["RegExp", "prototype"],
              "%SetPrototype%": ["Set", "prototype"],
              "%SharedArrayBufferPrototype%": [
                "SharedArrayBuffer",
                "prototype",
              ],
              "%StringPrototype%": ["String", "prototype"],
              "%SymbolPrototype%": ["Symbol", "prototype"],
              "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
              "%TypedArrayPrototype%": ["TypedArray", "prototype"],
              "%TypeErrorPrototype%": ["TypeError", "prototype"],
              "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
              "%Uint8ClampedArrayPrototype%": [
                "Uint8ClampedArray",
                "prototype",
              ],
              "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
              "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
              "%URIErrorPrototype%": ["URIError", "prototype"],
              "%WeakMapPrototype%": ["WeakMap", "prototype"],
              "%WeakSetPrototype%": ["WeakSet", "prototype"],
            },
            bind = require(19),
            hasOwn = require(26),
            $concat = bind.call(Function.call, Array.prototype.concat),
            $spliceApply = bind.call(Function.apply, Array.prototype.splice),
            $replace = bind.call(Function.call, String.prototype.replace),
            $strSlice = bind.call(Function.call, String.prototype.slice),
            $exec = bind.call(Function.call, RegExp.prototype.exec),
            rePropName =
              /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
            reEscapeChar = /\\(\\)?/g,
            stringToPath = function stringToPath(r) {
              var e = $strSlice(r, 0, 1),
                t = $strSlice(r, -1);
              if ("%" === e && "%" !== t)
                throw new $SyntaxError(
                  "invalid intrinsic syntax, expected closing `%`"
                );
              if ("%" === t && "%" !== e)
                throw new $SyntaxError(
                  "invalid intrinsic syntax, expected opening `%`"
                );
              var o = [];
              return (
                $replace(r, rePropName, function (r, e, t, n) {
                  o[o.length] = t ? $replace(n, reEscapeChar, "$1") : e || r;
                }),
                o
              );
            },
            getBaseIntrinsic = function getBaseIntrinsic(r, e) {
              var t,
                o = r;
              if (
                (hasOwn(LEGACY_ALIASES, o) &&
                  (o = "%" + (t = LEGACY_ALIASES[o])[0] + "%"),
                hasOwn(INTRINSICS, o))
              ) {
                var n = INTRINSICS[o];
                if ((n === needsEval && (n = doEval(o)), void 0 === n && !e))
                  throw new $TypeError(
                    "intrinsic " +
                      r +
                      " exists, but is not available. Please file an issue!"
                  );
                return { alias: t, name: o, value: n };
              }
              throw new $SyntaxError("intrinsic " + r + " does not exist!");
            };
          module.exports = function GetIntrinsic(r, e) {
            if ("string" != typeof r || 0 === r.length)
              throw new $TypeError("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && "boolean" != typeof e)
              throw new $TypeError('"allowMissing" argument must be a boolean');
            if (null === $exec(/^%?[^%]*%?$/, r))
              throw new $SyntaxError(
                "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
              );
            var t = stringToPath(r),
              o = t.length > 0 ? t[0] : "",
              n = getBaseIntrinsic("%" + o + "%", e),
              a = n.name,
              y = n.value,
              i = !1,
              p = n.alias;
            p && ((o = p[0]), $spliceApply(t, $concat([0, 1], p)));
            for (var d = 1, s = !0; d < t.length; d += 1) {
              var f = t[d],
                u = $strSlice(f, 0, 1),
                l = $strSlice(f, -1);
              if (
                ('"' === u ||
                  "'" === u ||
                  "`" === u ||
                  '"' === l ||
                  "'" === l ||
                  "`" === l) &&
                u !== l
              )
                throw new $SyntaxError(
                  "property names with quotes must have matching quotes"
                );
              if (
                (("constructor" !== f && s) || (i = !0),
                hasOwn(INTRINSICS, (a = "%" + (o += "." + f) + "%")))
              )
                y = INTRINSICS[a];
              else if (null != y) {
                if (!(f in y)) {
                  if (!e)
                    throw new $TypeError(
                      "base intrinsic for " +
                        r +
                        " exists, but the property is not available."
                    );
                  return;
                }
                if ($gOPD && d + 1 >= t.length) {
                  var c = $gOPD(y, f);
                  y =
                    (s = !!c) && "get" in c && !("originalValue" in c.get)
                      ? c.get
                      : y[f];
                } else (s = hasOwn(y, f)), (y = y[f]);
                s && !i && (INTRINSICS[a] = y);
              }
            }
            return y;
          };
        },
        {
          11: 11,
          12: 12,
          13: 13,
          14: 14,
          15: 15,
          16: 16,
          17: 17,
          19: 19,
          23: 23,
          24: 24,
          26: 26,
        },
      ],
      8: [
        function (require, module, exports) {
          "use strict";
          var bind = require(19),
            GetIntrinsic = require(20),
            setFunctionLength = require(28),
            $TypeError = require(16),
            $apply = GetIntrinsic("%Function.prototype.apply%"),
            $call = GetIntrinsic("%Function.prototype.call%"),
            $reflectApply =
              GetIntrinsic("%Reflect.apply%", !0) || bind.call($call, $apply),
            $defineProperty = require(10),
            $max = GetIntrinsic("%Math.max%");
          module.exports = function callBind(e) {
            if ("function" != typeof e)
              throw new $TypeError("a function is required");
            var n = $reflectApply(bind, $call, arguments);
            return setFunctionLength(
              n,
              1 + $max(0, e.length - (arguments.length - 1)),
              !0
            );
          };
          var applyBind = function applyBind() {
            return $reflectApply(bind, $apply, arguments);
          };
          $defineProperty
            ? $defineProperty(module.exports, "apply", { value: applyBind })
            : (module.exports.apply = applyBind);
        },
        { 10: 10, 16: 16, 19: 19, 20: 20, 28: 28 },
      ],
      16: [
        function (require, module, exports) {
          "use strict";
          module.exports = TypeError;
        },
        {},
      ],
      19: [
        function (require, module, exports) {
          "use strict";
          var implementation = require(18);
          module.exports = Function.prototype.bind || implementation;
        },
        { 18: 18 },
      ],
      10: [
        function (require, module, exports) {
          "use strict";
          var $defineProperty =
            require(20)("%Object.defineProperty%", !0) || !1;
          if ($defineProperty)
            try {
              $defineProperty({}, "a", { value: 1 });
            } catch (e) {
              $defineProperty = !1;
            }
          module.exports = $defineProperty;
        },
        { 20: 20 },
      ],
      28: [
        function (require, module, exports) {
          "use strict";
          var GetIntrinsic = require(20),
            define = require(9),
            hasDescriptors = require(22)(),
            gOPD = require(21),
            $TypeError = require(16),
            $floor = GetIntrinsic("%Math.floor%");
          module.exports = function setFunctionLength(e, r) {
            if ("function" != typeof e)
              throw new $TypeError("`fn` is not a function");
            if (
              "number" != typeof r ||
              r < 0 ||
              r > 4294967295 ||
              $floor(r) !== r
            )
              throw new $TypeError(
                "`length` must be a positive 32-bit integer"
              );
            var t = arguments.length > 2 && !!arguments[2],
              i = !0,
              n = !0;
            if ("length" in e && gOPD) {
              var o = gOPD(e, "length");
              o && !o.configurable && (i = !1), o && !o.writable && (n = !1);
            }
            return (
              (i || n || !t) &&
                (hasDescriptors
                  ? define(e, "length", r, !0, !0)
                  : define(e, "length", r)),
              e
            );
          };
        },
        { 16: 16, 20: 20, 21: 21, 22: 22, 9: 9 },
      ],
      9: [
        function (require, module, exports) {
          "use strict";
          var $defineProperty = require(10),
            $SyntaxError = require(15),
            $TypeError = require(16),
            gopd = require(21);
          module.exports = function defineDataProperty(e, r, o) {
            if (!e || ("object" != typeof e && "function" != typeof e))
              throw new $TypeError("`obj` must be an object or a function`");
            if ("string" != typeof r && "symbol" != typeof r)
              throw new $TypeError("`property` must be a string or a symbol`");
            if (
              arguments.length > 3 &&
              "boolean" != typeof arguments[3] &&
              null !== arguments[3]
            )
              throw new $TypeError(
                "`nonEnumerable`, if provided, must be a boolean or null"
              );
            if (
              arguments.length > 4 &&
              "boolean" != typeof arguments[4] &&
              null !== arguments[4]
            )
              throw new $TypeError(
                "`nonWritable`, if provided, must be a boolean or null"
              );
            if (
              arguments.length > 5 &&
              "boolean" != typeof arguments[5] &&
              null !== arguments[5]
            )
              throw new $TypeError(
                "`nonConfigurable`, if provided, must be a boolean or null"
              );
            if (arguments.length > 6 && "boolean" != typeof arguments[6])
              throw new $TypeError("`loose`, if provided, must be a boolean");
            var n = arguments.length > 3 ? arguments[3] : null,
              l = arguments.length > 4 ? arguments[4] : null,
              t = arguments.length > 5 ? arguments[5] : null,
              i = arguments.length > 6 && arguments[6],
              a = !!gopd && gopd(e, r);
            if ($defineProperty)
              $defineProperty(e, r, {
                configurable: null === t && a ? a.configurable : !t,
                enumerable: null === n && a ? a.enumerable : !n,
                value: o,
                writable: null === l && a ? a.writable : !l,
              });
            else {
              if (!i && (n || l || t))
                throw new $SyntaxError(
                  "This environment does not support defining a property as non-configurable, non-writable, or non-enumerable."
                );
              e[r] = o;
            }
          };
        },
        { 10: 10, 15: 15, 16: 16, 21: 21 },
      ],
      15: [
        function (require, module, exports) {
          "use strict";
          module.exports = SyntaxError;
        },
        {},
      ],
      21: [
        function (require, module, exports) {
          "use strict";
          var $gOPD = require(20)("%Object.getOwnPropertyDescriptor%", !0);
          if ($gOPD)
            try {
              $gOPD([], "length");
            } catch (t) {
              $gOPD = null;
            }
          module.exports = $gOPD;
        },
        { 20: 20 },
      ],
      11: [
        function (require, module, exports) {
          "use strict";
          module.exports = EvalError;
        },
        {},
      ],
      12: [
        function (require, module, exports) {
          "use strict";
          module.exports = Error;
        },
        {},
      ],
      13: [
        function (require, module, exports) {
          "use strict";
          module.exports = RangeError;
        },
        {},
      ],
      14: [
        function (require, module, exports) {
          "use strict";
          module.exports = ReferenceError;
        },
        {},
      ],
      17: [
        function (require, module, exports) {
          "use strict";
          module.exports = URIError;
        },
        {},
      ],
      18: [
        function (require, module, exports) {
          "use strict";
          var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ",
            toStr = Object.prototype.toString,
            max = Math.max,
            funcType = "[object Function]",
            concatty = function concatty(t, n) {
              for (var r = [], o = 0; o < t.length; o += 1) r[o] = t[o];
              for (var e = 0; e < n.length; e += 1) r[e + t.length] = n[e];
              return r;
            },
            slicy = function slicy(t, n) {
              for (var r = [], o = n || 0, e = 0; o < t.length; o += 1, e += 1)
                r[e] = t[o];
              return r;
            },
            joiny = function (t, n) {
              for (var r = "", o = 0; o < t.length; o += 1)
                (r += t[o]), o + 1 < t.length && (r += n);
              return r;
            };
          module.exports = function bind(t) {
            var n = this;
            if ("function" != typeof n || toStr.apply(n) !== funcType)
              throw new TypeError(ERROR_MESSAGE + n);
            for (
              var r,
                o = slicy(arguments, 1),
                e = max(0, n.length - o.length),
                i = [],
                c = 0;
              c < e;
              c++
            )
              i[c] = "$" + c;
            if (
              ((r = Function(
                "binder",
                "return function (" +
                  joiny(i, ",") +
                  "){ return binder.apply(this,arguments); }"
              )(function () {
                if (this instanceof r) {
                  var e = n.apply(this, concatty(o, arguments));
                  return Object(e) === e ? e : this;
                }
                return n.apply(t, concatty(o, arguments));
              })),
              n.prototype)
            ) {
              var p = function Empty() {};
              (p.prototype = n.prototype),
                (r.prototype = new p()),
                (p.prototype = null);
            }
            return r;
          };
        },
        {},
      ],
      23: [
        function (require, module, exports) {
          "use strict";
          var test = { __proto__: null, foo: {} },
            $Object = Object;
          module.exports = function hasProto() {
            return (
              { __proto__: test }.foo === test.foo && !(test instanceof $Object)
            );
          };
        },
        {},
      ],
      26: [
        function (require, module, exports) {
          "use strict";
          var call = Function.prototype.call,
            $hasOwn = Object.prototype.hasOwnProperty,
            bind = require(19);
          module.exports = bind.call(call, $hasOwn);
        },
        { 19: 19 },
      ],
      24: [
        function (require, module, exports) {
          "use strict";
          var origSymbol = "undefined" != typeof Symbol && Symbol,
            hasSymbolSham = require(25);
          module.exports = function hasNativeSymbols() {
            return (
              "function" == typeof origSymbol &&
              "function" == typeof Symbol &&
              "symbol" == typeof origSymbol("foo") &&
              "symbol" == typeof Symbol("bar") &&
              hasSymbolSham()
            );
          };
        },
        { 25: 25 },
      ],
      22: [
        function (require, module, exports) {
          "use strict";
          var $defineProperty = require(10),
            hasPropertyDescriptors = function hasPropertyDescriptors() {
              return !!$defineProperty;
            };
          (hasPropertyDescriptors.hasArrayLengthDefineBug =
            function hasArrayLengthDefineBug() {
              if (!$defineProperty) return null;
              try {
                return 1 !== $defineProperty([], "length", { value: 1 }).length;
              } catch (r) {
                return !0;
              }
            }),
            (module.exports = hasPropertyDescriptors);
        },
        { 10: 10 },
      ],
      25: [
        function (require, module, exports) {
          "use strict";
          module.exports = function hasSymbols() {
            if (
              "function" != typeof Symbol ||
              "function" != typeof Object.getOwnPropertySymbols
            )
              return !1;
            if ("symbol" == typeof Symbol.iterator) return !0;
            var t = {},
              e = Symbol("test"),
              r = Object(e);
            if ("string" == typeof e) return !1;
            if ("[object Symbol]" !== Object.prototype.toString.call(e))
              return !1;
            if ("[object Symbol]" !== Object.prototype.toString.call(r))
              return !1;
            for (e in ((t[e] = 42), t)) return !1;
            if ("function" == typeof Object.keys && 0 !== Object.keys(t).length)
              return !1;
            if (
              "function" == typeof Object.getOwnPropertyNames &&
              0 !== Object.getOwnPropertyNames(t).length
            )
              return !1;
            var o = Object.getOwnPropertySymbols(t);
            if (1 !== o.length || o[0] !== e) return !1;
            if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
            if ("function" == typeof Object.getOwnPropertyDescriptor) {
              var n = Object.getOwnPropertyDescriptor(t, e);
              if (42 !== n.value || !0 !== n.enumerable) return !1;
            }
            return !0;
          };
        },
        {},
      ],
      27: [
        function (require, module, exports) {
          (function (global) {
            (function () {
              var hasMap = "function" == typeof Map && Map.prototype,
                mapSizeDescriptor =
                  Object.getOwnPropertyDescriptor && hasMap
                    ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
                    : null,
                mapSize =
                  hasMap &&
                  mapSizeDescriptor &&
                  "function" == typeof mapSizeDescriptor.get
                    ? mapSizeDescriptor.get
                    : null,
                mapForEach = hasMap && Map.prototype.forEach,
                hasSet = "function" == typeof Set && Set.prototype,
                setSizeDescriptor =
                  Object.getOwnPropertyDescriptor && hasSet
                    ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
                    : null,
                setSize =
                  hasSet &&
                  setSizeDescriptor &&
                  "function" == typeof setSizeDescriptor.get
                    ? setSizeDescriptor.get
                    : null,
                setForEach = hasSet && Set.prototype.forEach,
                weakMapHas =
                  "function" == typeof WeakMap && WeakMap.prototype
                    ? WeakMap.prototype.has
                    : null,
                weakSetHas =
                  "function" == typeof WeakSet && WeakSet.prototype
                    ? WeakSet.prototype.has
                    : null,
                weakRefDeref =
                  "function" == typeof WeakRef && WeakRef.prototype
                    ? WeakRef.prototype.deref
                    : null,
                booleanValueOf = Boolean.prototype.valueOf,
                objectToString = Object.prototype.toString,
                functionToString = Function.prototype.toString,
                $match = String.prototype.match,
                $slice = String.prototype.slice,
                $replace = String.prototype.replace,
                $toUpperCase = String.prototype.toUpperCase,
                $toLowerCase = String.prototype.toLowerCase,
                $test = RegExp.prototype.test,
                $concat = Array.prototype.concat,
                $join = Array.prototype.join,
                $arrSlice = Array.prototype.slice,
                $floor = Math.floor,
                bigIntValueOf =
                  "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
                gOPS = Object.getOwnPropertySymbols,
                symToString =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? Symbol.prototype.toString
                    : null,
                hasShammedSymbols =
                  "function" == typeof Symbol &&
                  "object" == typeof Symbol.iterator,
                toStringTag =
                  "function" == typeof Symbol &&
                  Symbol.toStringTag &&
                  (Symbol.toStringTag, 1)
                    ? Symbol.toStringTag
                    : null,
                isEnumerable = Object.prototype.propertyIsEnumerable,
                gPO =
                  ("function" == typeof Reflect
                    ? Reflect.getPrototypeOf
                    : Object.getPrototypeOf) ||
                  ([].__proto__ === Array.prototype
                    ? function (t) {
                        return t.__proto__;
                      }
                    : null);
              function addNumericSeparator(t, e) {
                if (
                  t === 1 / 0 ||
                  t === -1 / 0 ||
                  t != t ||
                  (t && t > -1e3 && t < 1e3) ||
                  $test.call(/e/, e)
                )
                  return e;
                var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
                if ("number" == typeof t) {
                  var n = t < 0 ? -$floor(-t) : $floor(t);
                  if (n !== t) {
                    var o = String(n),
                      i = $slice.call(e, o.length + 1);
                    return (
                      $replace.call(o, r, "$&_") +
                      "." +
                      $replace.call(
                        $replace.call(i, /([0-9]{3})/g, "$&_"),
                        /_$/,
                        ""
                      )
                    );
                  }
                }
                return $replace.call(e, r, "$&_");
              }
              var utilInspect = require(6),
                inspectCustom = utilInspect.custom,
                inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
              function wrapQuotes(t, e, r) {
                var n = "double" === (r.quoteStyle || e) ? '"' : "'";
                return n + t + n;
              }
              function quote(t) {
                return $replace.call(String(t), /"/g, "&quot;");
              }
              function isArray(t) {
                return !(
                  "[object Array]" !== toStr(t) ||
                  (toStringTag && "object" == typeof t && toStringTag in t)
                );
              }
              function isRegExp(t) {
                return !(
                  "[object RegExp]" !== toStr(t) ||
                  (toStringTag && "object" == typeof t && toStringTag in t)
                );
              }
              function isSymbol(t) {
                if (hasShammedSymbols)
                  return t && "object" == typeof t && t instanceof Symbol;
                if ("symbol" == typeof t) return !0;
                if (!t || "object" != typeof t || !symToString) return !1;
                try {
                  return symToString.call(t), !0;
                } catch (t) {}
                return !1;
              }
              module.exports = function inspect_(t, e, r, n) {
                var o = e || {};
                if (
                  has(o, "quoteStyle") &&
                  "single" !== o.quoteStyle &&
                  "double" !== o.quoteStyle
                )
                  throw new TypeError(
                    'option "quoteStyle" must be "single" or "double"'
                  );
                if (
                  has(o, "maxStringLength") &&
                  ("number" == typeof o.maxStringLength
                    ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0
                    : null !== o.maxStringLength)
                )
                  throw new TypeError(
                    'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
                  );
                var i = !has(o, "customInspect") || o.customInspect;
                if ("boolean" != typeof i && "symbol" !== i)
                  throw new TypeError(
                    "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
                  );
                if (
                  has(o, "indent") &&
                  null !== o.indent &&
                  "\t" !== o.indent &&
                  !(parseInt(o.indent, 10) === o.indent && o.indent > 0)
                )
                  throw new TypeError(
                    'option "indent" must be "\\t", an integer > 0, or `null`'
                  );
                if (
                  has(o, "numericSeparator") &&
                  "boolean" != typeof o.numericSeparator
                )
                  throw new TypeError(
                    'option "numericSeparator", if provided, must be `true` or `false`'
                  );
                var a = o.numericSeparator;
                if (void 0 === t) return "undefined";
                if (null === t) return "null";
                if ("boolean" == typeof t) return t ? "true" : "false";
                if ("string" == typeof t) return inspectString(t, o);
                if ("number" == typeof t) {
                  if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
                  var c = String(t);
                  return a ? addNumericSeparator(t, c) : c;
                }
                if ("bigint" == typeof t) {
                  var l = String(t) + "n";
                  return a ? addNumericSeparator(t, l) : l;
                }
                var p = void 0 === o.depth ? 5 : o.depth;
                if (
                  (void 0 === r && (r = 0),
                  r >= p && p > 0 && "object" == typeof t)
                )
                  return isArray(t) ? "[Array]" : "[Object]";
                var u = (function getIndent(t, e) {
                  var r;
                  if ("\t" === t.indent) r = "\t";
                  else {
                    if (!("number" == typeof t.indent && t.indent > 0))
                      return null;
                    r = $join.call(Array(t.indent + 1), " ");
                  }
                  return { base: r, prev: $join.call(Array(e + 1), r) };
                })(o, r);
                if (void 0 === n) n = [];
                else if (indexOf(n, t) >= 0) return "[Circular]";
                function inspect(t, e, i) {
                  if ((e && (n = $arrSlice.call(n)).push(e), i)) {
                    var a = { depth: o.depth };
                    return (
                      has(o, "quoteStyle") && (a.quoteStyle = o.quoteStyle),
                      inspect_(t, a, r + 1, n)
                    );
                  }
                  return inspect_(t, o, r + 1, n);
                }
                if ("function" == typeof t && !isRegExp(t)) {
                  var s = (function nameOf(t) {
                      if (t.name) return t.name;
                      var e = $match.call(
                        functionToString.call(t),
                        /^function\s*([\w$]+)/
                      );
                      return e ? e[1] : null;
                    })(t),
                    f = arrObjKeys(t, inspect);
                  return (
                    "[Function" +
                    (s ? ": " + s : " (anonymous)") +
                    "]" +
                    (f.length > 0 ? " { " + $join.call(f, ", ") + " }" : "")
                  );
                }
                if (isSymbol(t)) {
                  var y = hasShammedSymbols
                    ? $replace.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1")
                    : symToString.call(t);
                  return "object" != typeof t || hasShammedSymbols
                    ? y
                    : markBoxed(y);
                }
                if (
                  (function isElement(t) {
                    return (
                      !(!t || "object" != typeof t) &&
                      (("undefined" != typeof HTMLElement &&
                        t instanceof HTMLElement) ||
                        ("string" == typeof t.nodeName &&
                          "function" == typeof t.getAttribute))
                    );
                  })(t)
                ) {
                  for (
                    var S = "<" + $toLowerCase.call(String(t.nodeName)),
                      g = t.attributes || [],
                      m = 0;
                    m < g.length;
                    m++
                  )
                    S +=
                      " " +
                      g[m].name +
                      "=" +
                      wrapQuotes(quote(g[m].value), "double", o);
                  return (
                    (S += ">"),
                    t.childNodes && t.childNodes.length && (S += "..."),
                    S + "</" + $toLowerCase.call(String(t.nodeName)) + ">"
                  );
                }
                if (isArray(t)) {
                  if (0 === t.length) return "[]";
                  var b = arrObjKeys(t, inspect);
                  return u &&
                    !(function singleLineValues(t) {
                      for (var e = 0; e < t.length; e++)
                        if (indexOf(t[e], "\n") >= 0) return !1;
                      return !0;
                    })(b)
                    ? "[" + indentedJoin(b, u) + "]"
                    : "[ " + $join.call(b, ", ") + " ]";
                }
                if (
                  (function isError(t) {
                    return !(
                      "[object Error]" !== toStr(t) ||
                      (toStringTag && "object" == typeof t && toStringTag in t)
                    );
                  })(t)
                ) {
                  var h = arrObjKeys(t, inspect);
                  return "cause" in Error.prototype ||
                    !("cause" in t) ||
                    isEnumerable.call(t, "cause")
                    ? 0 === h.length
                      ? "[" + String(t) + "]"
                      : "{ [" + String(t) + "] " + $join.call(h, ", ") + " }"
                    : "{ [" +
                        String(t) +
                        "] " +
                        $join.call(
                          $concat.call("[cause]: " + inspect(t.cause), h),
                          ", "
                        ) +
                        " }";
                }
                if ("object" == typeof t && i) {
                  if (
                    inspectSymbol &&
                    "function" == typeof t[inspectSymbol] &&
                    utilInspect
                  )
                    return utilInspect(t, { depth: p - r });
                  if ("symbol" !== i && "function" == typeof t.inspect)
                    return t.inspect();
                }
                if (
                  (function isMap(t) {
                    if (!mapSize || !t || "object" != typeof t) return !1;
                    try {
                      mapSize.call(t);
                      try {
                        setSize.call(t);
                      } catch (t) {
                        return !0;
                      }
                      return t instanceof Map;
                    } catch (t) {}
                    return !1;
                  })(t)
                ) {
                  var d = [];
                  return (
                    mapForEach &&
                      mapForEach.call(t, function (e, r) {
                        d.push(inspect(r, t, !0) + " => " + inspect(e, t));
                      }),
                    collectionOf("Map", mapSize.call(t), d, u)
                  );
                }
                if (
                  (function isSet(t) {
                    if (!setSize || !t || "object" != typeof t) return !1;
                    try {
                      setSize.call(t);
                      try {
                        mapSize.call(t);
                      } catch (t) {
                        return !0;
                      }
                      return t instanceof Set;
                    } catch (t) {}
                    return !1;
                  })(t)
                ) {
                  var j = [];
                  return (
                    setForEach &&
                      setForEach.call(t, function (e) {
                        j.push(inspect(e, t));
                      }),
                    collectionOf("Set", setSize.call(t), j, u)
                  );
                }
                if (
                  (function isWeakMap(t) {
                    if (!weakMapHas || !t || "object" != typeof t) return !1;
                    try {
                      weakMapHas.call(t, weakMapHas);
                      try {
                        weakSetHas.call(t, weakSetHas);
                      } catch (t) {
                        return !0;
                      }
                      return t instanceof WeakMap;
                    } catch (t) {}
                    return !1;
                  })(t)
                )
                  return weakCollectionOf("WeakMap");
                if (
                  (function isWeakSet(t) {
                    if (!weakSetHas || !t || "object" != typeof t) return !1;
                    try {
                      weakSetHas.call(t, weakSetHas);
                      try {
                        weakMapHas.call(t, weakMapHas);
                      } catch (t) {
                        return !0;
                      }
                      return t instanceof WeakSet;
                    } catch (t) {}
                    return !1;
                  })(t)
                )
                  return weakCollectionOf("WeakSet");
                if (
                  (function isWeakRef(t) {
                    if (!weakRefDeref || !t || "object" != typeof t) return !1;
                    try {
                      return weakRefDeref.call(t), !0;
                    } catch (t) {}
                    return !1;
                  })(t)
                )
                  return weakCollectionOf("WeakRef");
                if (
                  (function isNumber(t) {
                    return !(
                      "[object Number]" !== toStr(t) ||
                      (toStringTag && "object" == typeof t && toStringTag in t)
                    );
                  })(t)
                )
                  return markBoxed(inspect(Number(t)));
                if (
                  (function isBigInt(t) {
                    if (!t || "object" != typeof t || !bigIntValueOf) return !1;
                    try {
                      return bigIntValueOf.call(t), !0;
                    } catch (t) {}
                    return !1;
                  })(t)
                )
                  return markBoxed(inspect(bigIntValueOf.call(t)));
                if (
                  (function isBoolean(t) {
                    return !(
                      "[object Boolean]" !== toStr(t) ||
                      (toStringTag && "object" == typeof t && toStringTag in t)
                    );
                  })(t)
                )
                  return markBoxed(booleanValueOf.call(t));
                if (
                  (function isString(t) {
                    return !(
                      "[object String]" !== toStr(t) ||
                      (toStringTag && "object" == typeof t && toStringTag in t)
                    );
                  })(t)
                )
                  return markBoxed(inspect(String(t)));
                if ("undefined" != typeof window && t === window)
                  return "{ [object Window] }";
                if (t === global) return "{ [object globalThis] }";
                if (
                  !(function isDate(t) {
                    return !(
                      "[object Date]" !== toStr(t) ||
                      (toStringTag && "object" == typeof t && toStringTag in t)
                    );
                  })(t) &&
                  !isRegExp(t)
                ) {
                  var O = arrObjKeys(t, inspect),
                    w = gPO
                      ? gPO(t) === Object.prototype
                      : t instanceof Object || t.constructor === Object,
                    $ = t instanceof Object ? "" : "null prototype",
                    k =
                      !w && toStringTag && Object(t) === t && toStringTag in t
                        ? $slice.call(toStr(t), 8, -1)
                        : $
                        ? "Object"
                        : "",
                    v =
                      (w || "function" != typeof t.constructor
                        ? ""
                        : t.constructor.name
                        ? t.constructor.name + " "
                        : "") +
                      (k || $
                        ? "[" +
                          $join.call($concat.call([], k || [], $ || []), ": ") +
                          "] "
                        : "");
                  return 0 === O.length
                    ? v + "{}"
                    : u
                    ? v + "{" + indentedJoin(O, u) + "}"
                    : v + "{ " + $join.call(O, ", ") + " }";
                }
                return String(t);
              };
              var hasOwn =
                Object.prototype.hasOwnProperty ||
                function (t) {
                  return t in this;
                };
              function has(t, e) {
                return hasOwn.call(t, e);
              }
              function toStr(t) {
                return objectToString.call(t);
              }
              function indexOf(t, e) {
                if (t.indexOf) return t.indexOf(e);
                for (var r = 0, n = t.length; r < n; r++)
                  if (t[r] === e) return r;
                return -1;
              }
              function inspectString(t, e) {
                if (t.length > e.maxStringLength) {
                  var r = t.length - e.maxStringLength,
                    n = "... " + r + " more character" + (r > 1 ? "s" : "");
                  return (
                    inspectString($slice.call(t, 0, e.maxStringLength), e) + n
                  );
                }
                return wrapQuotes(
                  $replace.call(
                    $replace.call(t, /(['\\])/g, "\\$1"),
                    /[\x00-\x1f]/g,
                    lowbyte
                  ),
                  "single",
                  e
                );
              }
              function lowbyte(t) {
                var e = t.charCodeAt(0),
                  r = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[e];
                return r
                  ? "\\" + r
                  : "\\x" +
                      (e < 16 ? "0" : "") +
                      $toUpperCase.call(e.toString(16));
              }
              function markBoxed(t) {
                return "Object(" + t + ")";
              }
              function weakCollectionOf(t) {
                return t + " { ? }";
              }
              function collectionOf(t, e, r, n) {
                return (
                  t +
                  " (" +
                  e +
                  ") {" +
                  (n ? indentedJoin(r, n) : $join.call(r, ", ")) +
                  "}"
                );
              }
              function indentedJoin(t, e) {
                if (0 === t.length) return "";
                var r = "\n" + e.prev + e.base;
                return r + $join.call(t, "," + r) + "\n" + e.prev;
              }
              function arrObjKeys(t, e) {
                var r = isArray(t),
                  n = [];
                if (r) {
                  n.length = t.length;
                  for (var o = 0; o < t.length; o++)
                    n[o] = has(t, o) ? e(t[o], t) : "";
                }
                var i,
                  a = "function" == typeof gOPS ? gOPS(t) : [];
                if (hasShammedSymbols) {
                  i = {};
                  for (var c = 0; c < a.length; c++) i["$" + a[c]] = a[c];
                }
                for (var l in t)
                  has(t, l) &&
                    ((r && String(Number(l)) === l && l < t.length) ||
                      (hasShammedSymbols && i["$" + l] instanceof Symbol) ||
                      ($test.call(/[^\w$]/, l)
                        ? n.push(e(l, t) + ": " + e(t[l], t))
                        : n.push(l + ": " + e(t[l], t))));
                if ("function" == typeof gOPS)
                  for (var p = 0; p < a.length; p++)
                    isEnumerable.call(t, a[p]) &&
                      n.push("[" + e(a[p]) + "]: " + e(t[a[p]], t));
                return n;
              }
            }).call(this);
          }).call(
            this,
            "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : {}
          );
        },
        { 6: 6 },
      ],
    },
    {},
    [2]
  )(2);
});
(function () {
  /**
   * Function that search if an object has all the specified methods and all those methods are functions.
   *
   * @since 4.7.7
   *
   * @param {Object} obj The object where all the methods might be stored
   * @param {Array} methods An array with the name of all the methods to be tested
   * @return {boolean} True if has all the methods false otherwise.
   */
  function search_for_methods(obj, methods) {
    // Object is not defined or does not exist on window nothing to do.
    if (!obj || window[obj]) {
      return false;
    }

    var search = methods.filter(function (name) {
      // Test if the method is part of Obj and if is a function.
      return obj[name] && "function" === typeof obj[name];
    });
    return methods.length === search.length;
  }

  /**
   * Function to compare if the variable _ is from lodash by testing some of us unique methods.
   *
   * @since 4.7.7
   *
   * @return {boolean} True if the global _ is from lodash.
   */
  function is_lodash() {
    return search_for_methods(window._, [
      "get",
      "set",
      "at",
      "cloneDeep",
      "some",
      "every",
    ]);
  }

  window._lodash_tmp = false;
  // If current _ is from lodash Store it in a temp variable before underscore is loaded
  if ("_" in window && is_lodash()) {
    window._lodash_tmp = _;
  }
})();
/*! This file is auto-generated */
!(function (n, r) {
  var t, e;
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = r())
    : "function" == typeof define && define.amd
    ? define("underscore", r)
    : ((n = "undefined" != typeof globalThis ? globalThis : n || self),
      (t = n._),
      ((e = n._ = r()).noConflict = function () {
        return (n._ = t), e;
      }));
})(this, function () {
  var n = "1.13.6",
    r =
      ("object" == typeof self && self.self === self && self) ||
      ("object" == typeof global && global.global === global && global) ||
      Function("return this")() ||
      {},
    e = Array.prototype,
    F = Object.prototype,
    V = "undefined" != typeof Symbol ? Symbol.prototype : null,
    P = e.push,
    f = e.slice,
    s = F.toString,
    q = F.hasOwnProperty,
    t = "undefined" != typeof ArrayBuffer,
    u = "undefined" != typeof DataView,
    U = Array.isArray,
    W = Object.keys,
    z = Object.create,
    L = t && ArrayBuffer.isView,
    $ = isNaN,
    C = isFinite,
    K = !{ toString: null }.propertyIsEnumerable("toString"),
    J = [
      "valueOf",
      "isPrototypeOf",
      "toString",
      "propertyIsEnumerable",
      "hasOwnProperty",
      "toLocaleString",
    ],
    G = Math.pow(2, 53) - 1;
  function l(u, o) {
    return (
      (o = null == o ? u.length - 1 : +o),
      function () {
        for (
          var n = Math.max(arguments.length - o, 0), r = Array(n), t = 0;
          t < n;
          t++
        )
          r[t] = arguments[t + o];
        switch (o) {
          case 0:
            return u.call(this, r);
          case 1:
            return u.call(this, arguments[0], r);
          case 2:
            return u.call(this, arguments[0], arguments[1], r);
        }
        for (var e = Array(o + 1), t = 0; t < o; t++) e[t] = arguments[t];
        return (e[o] = r), u.apply(this, e);
      }
    );
  }
  function o(n) {
    var r = typeof n;
    return "function" == r || ("object" == r && !!n);
  }
  function H(n) {
    return void 0 === n;
  }
  function Q(n) {
    return !0 === n || !1 === n || "[object Boolean]" === s.call(n);
  }
  function i(n) {
    var r = "[object " + n + "]";
    return function (n) {
      return s.call(n) === r;
    };
  }
  var X = i("String"),
    Y = i("Number"),
    Z = i("Date"),
    nn = i("RegExp"),
    rn = i("Error"),
    tn = i("Symbol"),
    en = i("ArrayBuffer"),
    a = i("Function"),
    r = r.document && r.document.childNodes,
    p = (a =
      "function" != typeof /./ &&
      "object" != typeof Int8Array &&
      "function" != typeof r
        ? function (n) {
            return "function" == typeof n || !1;
          }
        : a),
    r = i("Object"),
    un = u && r(new DataView(new ArrayBuffer(8))),
    a = "undefined" != typeof Map && r(new Map()),
    u = i("DataView");
  var h = un
      ? function (n) {
          return null != n && p(n.getInt8) && en(n.buffer);
        }
      : u,
    v = U || i("Array");
  function y(n, r) {
    return null != n && q.call(n, r);
  }
  var on = i("Arguments"),
    an =
      (!(function () {
        on(arguments) ||
          (on = function (n) {
            return y(n, "callee");
          });
      })(),
      on);
  function fn(n) {
    return Y(n) && $(n);
  }
  function cn(n) {
    return function () {
      return n;
    };
  }
  function ln(r) {
    return function (n) {
      n = r(n);
      return "number" == typeof n && 0 <= n && n <= G;
    };
  }
  function sn(r) {
    return function (n) {
      return null == n ? void 0 : n[r];
    };
  }
  var d = sn("byteLength"),
    pn = ln(d),
    hn =
      /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
  var vn = t
      ? function (n) {
          return L ? L(n) && !h(n) : pn(n) && hn.test(s.call(n));
        }
      : cn(!1),
    g = sn("length");
  function yn(n, r) {
    r = (function (r) {
      for (var t = {}, n = r.length, e = 0; e < n; ++e) t[r[e]] = !0;
      return {
        contains: function (n) {
          return !0 === t[n];
        },
        push: function (n) {
          return (t[n] = !0), r.push(n);
        },
      };
    })(r);
    var t = J.length,
      e = n.constructor,
      u = (p(e) && e.prototype) || F,
      o = "constructor";
    for (y(n, o) && !r.contains(o) && r.push(o); t--; )
      (o = J[t]) in n && n[o] !== u[o] && !r.contains(o) && r.push(o);
  }
  function b(n) {
    if (!o(n)) return [];
    if (W) return W(n);
    var r,
      t = [];
    for (r in n) y(n, r) && t.push(r);
    return K && yn(n, t), t;
  }
  function dn(n, r) {
    var t = b(r),
      e = t.length;
    if (null == n) return !e;
    for (var u = Object(n), o = 0; o < e; o++) {
      var i = t[o];
      if (r[i] !== u[i] || !(i in u)) return !1;
    }
    return !0;
  }
  function m(n) {
    return n instanceof m
      ? n
      : this instanceof m
      ? void (this._wrapped = n)
      : new m(n);
  }
  function gn(n) {
    return new Uint8Array(n.buffer || n, n.byteOffset || 0, d(n));
  }
  (m.VERSION = n),
    (m.prototype.valueOf =
      m.prototype.toJSON =
      m.prototype.value =
        function () {
          return this._wrapped;
        }),
    (m.prototype.toString = function () {
      return String(this._wrapped);
    });
  var bn = "[object DataView]";
  function mn(n, r, t, e) {
    var u;
    return n === r
      ? 0 !== n || 1 / n == 1 / r
      : null != n &&
          null != r &&
          (n != n
            ? r != r
            : ("function" == (u = typeof n) ||
                "object" == u ||
                "object" == typeof r) &&
              (function n(r, t, e, u) {
                r instanceof m && (r = r._wrapped);
                t instanceof m && (t = t._wrapped);
                var o = s.call(r);
                if (o !== s.call(t)) return !1;
                if (un && "[object Object]" == o && h(r)) {
                  if (!h(t)) return !1;
                  o = bn;
                }
                switch (o) {
                  case "[object RegExp]":
                  case "[object String]":
                    return "" + r == "" + t;
                  case "[object Number]":
                    return +r != +r
                      ? +t != +t
                      : 0 == +r
                      ? 1 / +r == 1 / t
                      : +r == +t;
                  case "[object Date]":
                  case "[object Boolean]":
                    return +r == +t;
                  case "[object Symbol]":
                    return V.valueOf.call(r) === V.valueOf.call(t);
                  case "[object ArrayBuffer]":
                  case bn:
                    return n(gn(r), gn(t), e, u);
                }
                o = "[object Array]" === o;
                if (!o && vn(r)) {
                  var i = d(r);
                  if (i !== d(t)) return !1;
                  if (r.buffer === t.buffer && r.byteOffset === t.byteOffset)
                    return !0;
                  o = !0;
                }
                if (!o) {
                  if ("object" != typeof r || "object" != typeof t) return !1;
                  var i = r.constructor,
                    a = t.constructor;
                  if (
                    i !== a &&
                    !(p(i) && i instanceof i && p(a) && a instanceof a) &&
                    "constructor" in r &&
                    "constructor" in t
                  )
                    return !1;
                }
                e = e || [];
                u = u || [];
                var f = e.length;
                for (; f--; ) if (e[f] === r) return u[f] === t;
                e.push(r);
                u.push(t);
                if (o) {
                  if ((f = r.length) !== t.length) return !1;
                  for (; f--; ) if (!mn(r[f], t[f], e, u)) return !1;
                } else {
                  var c,
                    l = b(r);
                  if (((f = l.length), b(t).length !== f)) return !1;
                  for (; f--; )
                    if (((c = l[f]), !y(t, c) || !mn(r[c], t[c], e, u)))
                      return !1;
                }
                e.pop();
                u.pop();
                return !0;
              })(n, r, t, e));
  }
  function c(n) {
    if (!o(n)) return [];
    var r,
      t = [];
    for (r in n) t.push(r);
    return K && yn(n, t), t;
  }
  function jn(e) {
    var u = g(e);
    return function (n) {
      if (null == n) return !1;
      var r = c(n);
      if (g(r)) return !1;
      for (var t = 0; t < u; t++) if (!p(n[e[t]])) return !1;
      return e !== wn || !p(n[_n]);
    };
  }
  var _n = "forEach",
    r = ["clear", "delete"],
    u = ["get", "has", "set"],
    U = r.concat(_n, u),
    wn = r.concat(u),
    t = ["add"].concat(r, _n, "has"),
    u = a ? jn(U) : i("Map"),
    r = a ? jn(wn) : i("WeakMap"),
    U = a ? jn(t) : i("Set"),
    a = i("WeakSet");
  function j(n) {
    for (var r = b(n), t = r.length, e = Array(t), u = 0; u < t; u++)
      e[u] = n[r[u]];
    return e;
  }
  function An(n) {
    for (var r = {}, t = b(n), e = 0, u = t.length; e < u; e++)
      r[n[t[e]]] = t[e];
    return r;
  }
  function xn(n) {
    var r,
      t = [];
    for (r in n) p(n[r]) && t.push(r);
    return t.sort();
  }
  function Sn(f, c) {
    return function (n) {
      var r = arguments.length;
      if ((c && (n = Object(n)), !(r < 2 || null == n)))
        for (var t = 1; t < r; t++)
          for (
            var e = arguments[t], u = f(e), o = u.length, i = 0;
            i < o;
            i++
          ) {
            var a = u[i];
            (c && void 0 !== n[a]) || (n[a] = e[a]);
          }
      return n;
    };
  }
  var On = Sn(c),
    _ = Sn(b),
    Mn = Sn(c, !0);
  function En(n) {
    var r;
    return o(n)
      ? z
        ? z(n)
        : (((r = function () {}).prototype = n),
          (n = new r()),
          (r.prototype = null),
          n)
      : {};
  }
  function Bn(n) {
    return v(n) ? n : [n];
  }
  function w(n) {
    return m.toPath(n);
  }
  function Nn(n, r) {
    for (var t = r.length, e = 0; e < t; e++) {
      if (null == n) return;
      n = n[r[e]];
    }
    return t ? n : void 0;
  }
  function In(n, r, t) {
    n = Nn(n, w(r));
    return H(n) ? t : n;
  }
  function Tn(n) {
    return n;
  }
  function A(r) {
    return (
      (r = _({}, r)),
      function (n) {
        return dn(n, r);
      }
    );
  }
  function kn(r) {
    return (
      (r = w(r)),
      function (n) {
        return Nn(n, r);
      }
    );
  }
  function x(u, o, n) {
    if (void 0 === o) return u;
    switch (null == n ? 3 : n) {
      case 1:
        return function (n) {
          return u.call(o, n);
        };
      case 3:
        return function (n, r, t) {
          return u.call(o, n, r, t);
        };
      case 4:
        return function (n, r, t, e) {
          return u.call(o, n, r, t, e);
        };
    }
    return function () {
      return u.apply(o, arguments);
    };
  }
  function Dn(n, r, t) {
    return null == n ? Tn : p(n) ? x(n, r, t) : (o(n) && !v(n) ? A : kn)(n);
  }
  function Rn(n, r) {
    return Dn(n, r, 1 / 0);
  }
  function S(n, r, t) {
    return m.iteratee !== Rn ? m.iteratee(n, r) : Dn(n, r, t);
  }
  function Fn() {}
  function Vn(n, r) {
    return (
      null == r && ((r = n), (n = 0)),
      n + Math.floor(Math.random() * (r - n + 1))
    );
  }
  (m.toPath = Bn), (m.iteratee = Rn);
  var O =
    Date.now ||
    function () {
      return new Date().getTime();
    };
  function Pn(r) {
    function t(n) {
      return r[n];
    }
    var n = "(?:" + b(r).join("|") + ")",
      e = RegExp(n),
      u = RegExp(n, "g");
    return function (n) {
      return e.test((n = null == n ? "" : "" + n)) ? n.replace(u, t) : n;
    };
  }
  var t = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;",
    },
    qn = Pn(t),
    t = Pn(An(t)),
    Un = (m.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g,
    }),
    Wn = /(.)^/,
    zn = {
      "'": "'",
      "\\": "\\",
      "\r": "r",
      "\n": "n",
      "\u2028": "u2028",
      "\u2029": "u2029",
    },
    Ln = /\\|'|\r|\n|\u2028|\u2029/g;
  function $n(n) {
    return "\\" + zn[n];
  }
  var Cn = /^\s*(\w|\$)+\s*$/;
  var Kn = 0;
  function Jn(n, r, t, e, u) {
    return e instanceof r
      ? ((e = En(n.prototype)), o((r = n.apply(e, u))) ? r : e)
      : n.apply(t, u);
  }
  var M = l(function (u, o) {
      function i() {
        for (var n = 0, r = o.length, t = Array(r), e = 0; e < r; e++)
          t[e] = o[e] === a ? arguments[n++] : o[e];
        for (; n < arguments.length; ) t.push(arguments[n++]);
        return Jn(u, i, this, this, t);
      }
      var a = M.placeholder;
      return i;
    }),
    Gn =
      ((M.placeholder = m),
      l(function (r, t, e) {
        var u;
        if (p(r))
          return (u = l(function (n) {
            return Jn(r, u, t, this, e.concat(n));
          }));
        throw new TypeError("Bind must be called on a function");
      })),
    E = ln(g);
  function B(n, r, t, e) {
    if (((e = e || []), r || 0 === r)) {
      if (r <= 0) return e.concat(n);
    } else r = 1 / 0;
    for (var u = e.length, o = 0, i = g(n); o < i; o++) {
      var a = n[o];
      if (E(a) && (v(a) || an(a)))
        if (1 < r) B(a, r - 1, t, e), (u = e.length);
        else for (var f = 0, c = a.length; f < c; ) e[u++] = a[f++];
      else t || (e[u++] = a);
    }
    return e;
  }
  var Hn = l(function (n, r) {
    var t = (r = B(r, !1, !1)).length;
    if (t < 1) throw new Error("bindAll must be passed function names");
    for (; t--; ) {
      var e = r[t];
      n[e] = Gn(n[e], n);
    }
    return n;
  });
  var Qn = l(function (n, r, t) {
      return setTimeout(function () {
        return n.apply(null, t);
      }, r);
    }),
    Xn = M(Qn, m, 1);
  function Yn(n) {
    return function () {
      return !n.apply(this, arguments);
    };
  }
  function Zn(n, r) {
    var t;
    return function () {
      return 0 < --n && (t = r.apply(this, arguments)), n <= 1 && (r = null), t;
    };
  }
  var nr = M(Zn, 2);
  function rr(n, r, t) {
    r = S(r, t);
    for (var e, u = b(n), o = 0, i = u.length; o < i; o++)
      if (r(n[(e = u[o])], e, n)) return e;
  }
  function tr(o) {
    return function (n, r, t) {
      r = S(r, t);
      for (var e = g(n), u = 0 < o ? 0 : e - 1; 0 <= u && u < e; u += o)
        if (r(n[u], u, n)) return u;
      return -1;
    };
  }
  var er = tr(1),
    ur = tr(-1);
  function or(n, r, t, e) {
    for (var u = (t = S(t, e, 1))(r), o = 0, i = g(n); o < i; ) {
      var a = Math.floor((o + i) / 2);
      t(n[a]) < u ? (o = a + 1) : (i = a);
    }
    return o;
  }
  function ir(o, i, a) {
    return function (n, r, t) {
      var e = 0,
        u = g(n);
      if ("number" == typeof t)
        0 < o
          ? (e = 0 <= t ? t : Math.max(t + u, e))
          : (u = 0 <= t ? Math.min(t + 1, u) : t + u + 1);
      else if (a && t && u) return n[(t = a(n, r))] === r ? t : -1;
      if (r != r) return 0 <= (t = i(f.call(n, e, u), fn)) ? t + e : -1;
      for (t = 0 < o ? e : u - 1; 0 <= t && t < u; t += o)
        if (n[t] === r) return t;
      return -1;
    };
  }
  var ar = ir(1, er, or),
    fr = ir(-1, ur);
  function cr(n, r, t) {
    r = (E(n) ? er : rr)(n, r, t);
    if (void 0 !== r && -1 !== r) return n[r];
  }
  function N(n, r, t) {
    if (((r = x(r, t)), E(n)))
      for (u = 0, o = n.length; u < o; u++) r(n[u], u, n);
    else
      for (var e = b(n), u = 0, o = e.length; u < o; u++) r(n[e[u]], e[u], n);
    return n;
  }
  function I(n, r, t) {
    r = S(r, t);
    for (
      var e = !E(n) && b(n), u = (e || n).length, o = Array(u), i = 0;
      i < u;
      i++
    ) {
      var a = e ? e[i] : i;
      o[i] = r(n[a], a, n);
    }
    return o;
  }
  function lr(p) {
    return function (n, r, t, e) {
      var u = 3 <= arguments.length,
        o = n,
        i = x(r, e, 4),
        a = t,
        f = !E(o) && b(o),
        c = (f || o).length,
        l = 0 < p ? 0 : c - 1;
      for (u || ((a = o[f ? f[l] : l]), (l += p)); 0 <= l && l < c; l += p) {
        var s = f ? f[l] : l;
        a = i(a, o[s], s, o);
      }
      return a;
    };
  }
  var sr = lr(1),
    pr = lr(-1);
  function T(n, e, r) {
    var u = [];
    return (
      (e = S(e, r)),
      N(n, function (n, r, t) {
        e(n, r, t) && u.push(n);
      }),
      u
    );
  }
  function hr(n, r, t) {
    r = S(r, t);
    for (var e = !E(n) && b(n), u = (e || n).length, o = 0; o < u; o++) {
      var i = e ? e[o] : o;
      if (!r(n[i], i, n)) return !1;
    }
    return !0;
  }
  function vr(n, r, t) {
    r = S(r, t);
    for (var e = !E(n) && b(n), u = (e || n).length, o = 0; o < u; o++) {
      var i = e ? e[o] : o;
      if (r(n[i], i, n)) return !0;
    }
    return !1;
  }
  function k(n, r, t, e) {
    return (
      E(n) || (n = j(n)),
      0 <= ar(n, r, (t = "number" == typeof t && !e ? t : 0))
    );
  }
  var yr = l(function (n, t, e) {
    var u, o;
    return (
      p(t)
        ? (o = t)
        : ((t = w(t)), (u = t.slice(0, -1)), (t = t[t.length - 1])),
      I(n, function (n) {
        var r = o;
        if (!r) {
          if (null == (n = u && u.length ? Nn(n, u) : n)) return;
          r = n[t];
        }
        return null == r ? r : r.apply(n, e);
      })
    );
  });
  function dr(n, r) {
    return I(n, kn(r));
  }
  function gr(n, e, r) {
    var t,
      u,
      o = -1 / 0,
      i = -1 / 0;
    if (
      null == e ||
      ("number" == typeof e && "object" != typeof n[0] && null != n)
    )
      for (var a = 0, f = (n = E(n) ? n : j(n)).length; a < f; a++)
        null != (t = n[a]) && o < t && (o = t);
    else
      (e = S(e, r)),
        N(n, function (n, r, t) {
          (u = e(n, r, t)),
            (i < u || (u === -1 / 0 && o === -1 / 0)) && ((o = n), (i = u));
        });
    return o;
  }
  var br = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
  function mr(n) {
    return n
      ? v(n)
        ? f.call(n)
        : X(n)
        ? n.match(br)
        : E(n)
        ? I(n, Tn)
        : j(n)
      : [];
  }
  function jr(n, r, t) {
    if (null == r || t) return (n = E(n) ? n : j(n))[Vn(n.length - 1)];
    for (
      var e = mr(n),
        t = g(e),
        u = ((r = Math.max(Math.min(r, t), 0)), t - 1),
        o = 0;
      o < r;
      o++
    ) {
      var i = Vn(o, u),
        a = e[o];
      (e[o] = e[i]), (e[i] = a);
    }
    return e.slice(0, r);
  }
  function D(o, r) {
    return function (t, e, n) {
      var u = r ? [[], []] : {};
      return (
        (e = S(e, n)),
        N(t, function (n, r) {
          r = e(n, r, t);
          o(u, n, r);
        }),
        u
      );
    };
  }
  var _r = D(function (n, r, t) {
      y(n, t) ? n[t].push(r) : (n[t] = [r]);
    }),
    wr = D(function (n, r, t) {
      n[t] = r;
    }),
    Ar = D(function (n, r, t) {
      y(n, t) ? n[t]++ : (n[t] = 1);
    }),
    xr = D(function (n, r, t) {
      n[t ? 0 : 1].push(r);
    }, !0);
  function Sr(n, r, t) {
    return r in t;
  }
  var Or = l(function (n, r) {
      var t = {},
        e = r[0];
      if (null != n) {
        p(e)
          ? (1 < r.length && (e = x(e, r[1])), (r = c(n)))
          : ((e = Sr), (r = B(r, !1, !1)), (n = Object(n)));
        for (var u = 0, o = r.length; u < o; u++) {
          var i = r[u],
            a = n[i];
          e(a, i, n) && (t[i] = a);
        }
      }
      return t;
    }),
    Mr = l(function (n, t) {
      var r,
        e = t[0];
      return (
        p(e)
          ? ((e = Yn(e)), 1 < t.length && (r = t[1]))
          : ((t = I(B(t, !1, !1), String)),
            (e = function (n, r) {
              return !k(t, r);
            })),
        Or(n, e, r)
      );
    });
  function Er(n, r, t) {
    return f.call(n, 0, Math.max(0, n.length - (null == r || t ? 1 : r)));
  }
  function Br(n, r, t) {
    return null == n || n.length < 1
      ? null == r || t
        ? void 0
        : []
      : null == r || t
      ? n[0]
      : Er(n, n.length - r);
  }
  function R(n, r, t) {
    return f.call(n, null == r || t ? 1 : r);
  }
  var Nr = l(function (n, r) {
      return (
        (r = B(r, !0, !0)),
        T(n, function (n) {
          return !k(r, n);
        })
      );
    }),
    Ir = l(function (n, r) {
      return Nr(n, r);
    });
  function Tr(n, r, t, e) {
    Q(r) || ((e = t), (t = r), (r = !1)), null != t && (t = S(t, e));
    for (var u = [], o = [], i = 0, a = g(n); i < a; i++) {
      var f = n[i],
        c = t ? t(f, i, n) : f;
      r && !t
        ? ((i && o === c) || u.push(f), (o = c))
        : t
        ? k(o, c) || (o.push(c), u.push(f))
        : k(u, f) || u.push(f);
    }
    return u;
  }
  var kr = l(function (n) {
    return Tr(B(n, !0, !0));
  });
  function Dr(n) {
    for (var r = (n && gr(n, g).length) || 0, t = Array(r), e = 0; e < r; e++)
      t[e] = dr(n, e);
    return t;
  }
  var Rr = l(Dr);
  function Fr(n, r) {
    return n._chain ? m(r).chain() : r;
  }
  function Vr(t) {
    return (
      N(xn(t), function (n) {
        var r = (m[n] = t[n]);
        m.prototype[n] = function () {
          var n = [this._wrapped];
          return P.apply(n, arguments), Fr(this, r.apply(m, n));
        };
      }),
      m
    );
  }
  N(
    ["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
    function (r) {
      var t = e[r];
      m.prototype[r] = function () {
        var n = this._wrapped;
        return (
          null != n &&
            (t.apply(n, arguments),
            ("shift" !== r && "splice" !== r) || 0 !== n.length || delete n[0]),
          Fr(this, n)
        );
      };
    }
  ),
    N(["concat", "join", "slice"], function (n) {
      var r = e[n];
      m.prototype[n] = function () {
        var n = this._wrapped;
        return Fr(this, (n = null != n ? r.apply(n, arguments) : n));
      };
    });
  n = Vr({
    __proto__: null,
    VERSION: n,
    restArguments: l,
    isObject: o,
    isNull: function (n) {
      return null === n;
    },
    isUndefined: H,
    isBoolean: Q,
    isElement: function (n) {
      return !(!n || 1 !== n.nodeType);
    },
    isString: X,
    isNumber: Y,
    isDate: Z,
    isRegExp: nn,
    isError: rn,
    isSymbol: tn,
    isArrayBuffer: en,
    isDataView: h,
    isArray: v,
    isFunction: p,
    isArguments: an,
    isFinite: function (n) {
      return !tn(n) && C(n) && !isNaN(parseFloat(n));
    },
    isNaN: fn,
    isTypedArray: vn,
    isEmpty: function (n) {
      var r;
      return (
        null == n ||
        ("number" == typeof (r = g(n)) && (v(n) || X(n) || an(n))
          ? 0 === r
          : 0 === g(b(n)))
      );
    },
    isMatch: dn,
    isEqual: function (n, r) {
      return mn(n, r);
    },
    isMap: u,
    isWeakMap: r,
    isSet: U,
    isWeakSet: a,
    keys: b,
    allKeys: c,
    values: j,
    pairs: function (n) {
      for (var r = b(n), t = r.length, e = Array(t), u = 0; u < t; u++)
        e[u] = [r[u], n[r[u]]];
      return e;
    },
    invert: An,
    functions: xn,
    methods: xn,
    extend: On,
    extendOwn: _,
    assign: _,
    defaults: Mn,
    create: function (n, r) {
      return (n = En(n)), r && _(n, r), n;
    },
    clone: function (n) {
      return o(n) ? (v(n) ? n.slice() : On({}, n)) : n;
    },
    tap: function (n, r) {
      return r(n), n;
    },
    get: In,
    has: function (n, r) {
      for (var t = (r = w(r)).length, e = 0; e < t; e++) {
        var u = r[e];
        if (!y(n, u)) return !1;
        n = n[u];
      }
      return !!t;
    },
    mapObject: function (n, r, t) {
      r = S(r, t);
      for (var e = b(n), u = e.length, o = {}, i = 0; i < u; i++) {
        var a = e[i];
        o[a] = r(n[a], a, n);
      }
      return o;
    },
    identity: Tn,
    constant: cn,
    noop: Fn,
    toPath: Bn,
    property: kn,
    propertyOf: function (r) {
      return null == r
        ? Fn
        : function (n) {
            return In(r, n);
          };
    },
    matcher: A,
    matches: A,
    times: function (n, r, t) {
      var e = Array(Math.max(0, n));
      r = x(r, t, 1);
      for (var u = 0; u < n; u++) e[u] = r(u);
      return e;
    },
    random: Vn,
    now: O,
    escape: qn,
    unescape: t,
    templateSettings: Un,
    template: function (o, n, r) {
      n = Mn({}, (n = !n && r ? r : n), m.templateSettings);
      var t,
        r = RegExp(
          [
            (n.escape || Wn).source,
            (n.interpolate || Wn).source,
            (n.evaluate || Wn).source,
          ].join("|") + "|$",
          "g"
        ),
        i = 0,
        a = "__p+='";
      if (
        (o.replace(r, function (n, r, t, e, u) {
          return (
            (a += o.slice(i, u).replace(Ln, $n)),
            (i = u + n.length),
            r
              ? (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'")
              : t
              ? (a += "'+\n((__t=(" + t + "))==null?'':__t)+\n'")
              : e && (a += "';\n" + e + "\n__p+='"),
            n
          );
        }),
        (a += "';\n"),
        (r = n.variable))
      ) {
        if (!Cn.test(r))
          throw new Error("variable is not a bare identifier: " + r);
      } else (a = "with(obj||{}){\n" + a + "}\n"), (r = "obj");
      a =
        "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
        a +
        "return __p;\n";
      try {
        t = new Function(r, "_", a);
      } catch (n) {
        throw ((n.source = a), n);
      }
      function e(n) {
        return t.call(this, n, m);
      }
      return (e.source = "function(" + r + "){\n" + a + "}"), e;
    },
    result: function (n, r, t) {
      var e = (r = w(r)).length;
      if (!e) return p(t) ? t.call(n) : t;
      for (var u = 0; u < e; u++) {
        var o = null == n ? void 0 : n[r[u]];
        void 0 === o && ((o = t), (u = e)), (n = p(o) ? o.call(n) : o);
      }
      return n;
    },
    uniqueId: function (n) {
      var r = ++Kn + "";
      return n ? n + r : r;
    },
    chain: function (n) {
      return ((n = m(n))._chain = !0), n;
    },
    iteratee: Rn,
    partial: M,
    bind: Gn,
    bindAll: Hn,
    memoize: function (e, u) {
      function o(n) {
        var r = o.cache,
          t = "" + (u ? u.apply(this, arguments) : n);
        return y(r, t) || (r[t] = e.apply(this, arguments)), r[t];
      }
      return (o.cache = {}), o;
    },
    delay: Qn,
    defer: Xn,
    throttle: function (t, e, u) {
      function o() {
        (l = !1 === u.leading ? 0 : O()),
          (i = null),
          (c = t.apply(a, f)),
          i || (a = f = null);
      }
      function n() {
        var n = O(),
          r = (l || !1 !== u.leading || (l = n), e - (n - l));
        return (
          (a = this),
          (f = arguments),
          r <= 0 || e < r
            ? (i && (clearTimeout(i), (i = null)),
              (l = n),
              (c = t.apply(a, f)),
              i || (a = f = null))
            : i || !1 === u.trailing || (i = setTimeout(o, r)),
          c
        );
      }
      var i,
        a,
        f,
        c,
        l = 0;
      return (
        (u = u || {}),
        (n.cancel = function () {
          clearTimeout(i), (l = 0), (i = a = f = null);
        }),
        n
      );
    },
    debounce: function (r, t, e) {
      function u() {
        var n = O() - i;
        n < t
          ? (o = setTimeout(u, t - n))
          : ((o = null), e || (f = r.apply(c, a)), o || (a = c = null));
      }
      var o,
        i,
        a,
        f,
        c,
        n = l(function (n) {
          return (
            (c = this),
            (a = n),
            (i = O()),
            o || ((o = setTimeout(u, t)), e && (f = r.apply(c, a))),
            f
          );
        });
      return (
        (n.cancel = function () {
          clearTimeout(o), (o = a = c = null);
        }),
        n
      );
    },
    wrap: function (n, r) {
      return M(r, n);
    },
    negate: Yn,
    compose: function () {
      var t = arguments,
        e = t.length - 1;
      return function () {
        for (var n = e, r = t[e].apply(this, arguments); n--; )
          r = t[n].call(this, r);
        return r;
      };
    },
    after: function (n, r) {
      return function () {
        if (--n < 1) return r.apply(this, arguments);
      };
    },
    before: Zn,
    once: nr,
    findKey: rr,
    findIndex: er,
    findLastIndex: ur,
    sortedIndex: or,
    indexOf: ar,
    lastIndexOf: fr,
    find: cr,
    detect: cr,
    findWhere: function (n, r) {
      return cr(n, A(r));
    },
    each: N,
    forEach: N,
    map: I,
    collect: I,
    reduce: sr,
    foldl: sr,
    inject: sr,
    reduceRight: pr,
    foldr: pr,
    filter: T,
    select: T,
    reject: function (n, r, t) {
      return T(n, Yn(S(r)), t);
    },
    every: hr,
    all: hr,
    some: vr,
    any: vr,
    contains: k,
    includes: k,
    include: k,
    invoke: yr,
    pluck: dr,
    where: function (n, r) {
      return T(n, A(r));
    },
    max: gr,
    min: function (n, e, r) {
      var t,
        u,
        o = 1 / 0,
        i = 1 / 0;
      if (
        null == e ||
        ("number" == typeof e && "object" != typeof n[0] && null != n)
      )
        for (var a = 0, f = (n = E(n) ? n : j(n)).length; a < f; a++)
          null != (t = n[a]) && t < o && (o = t);
      else
        (e = S(e, r)),
          N(n, function (n, r, t) {
            ((u = e(n, r, t)) < i || (u === 1 / 0 && o === 1 / 0)) &&
              ((o = n), (i = u));
          });
      return o;
    },
    shuffle: function (n) {
      return jr(n, 1 / 0);
    },
    sample: jr,
    sortBy: function (n, e, r) {
      var u = 0;
      return (
        (e = S(e, r)),
        dr(
          I(n, function (n, r, t) {
            return { value: n, index: u++, criteria: e(n, r, t) };
          }).sort(function (n, r) {
            var t = n.criteria,
              e = r.criteria;
            if (t !== e) {
              if (e < t || void 0 === t) return 1;
              if (t < e || void 0 === e) return -1;
            }
            return n.index - r.index;
          }),
          "value"
        )
      );
    },
    groupBy: _r,
    indexBy: wr,
    countBy: Ar,
    partition: xr,
    toArray: mr,
    size: function (n) {
      return null == n ? 0 : (E(n) ? n : b(n)).length;
    },
    pick: Or,
    omit: Mr,
    first: Br,
    head: Br,
    take: Br,
    initial: Er,
    last: function (n, r, t) {
      return null == n || n.length < 1
        ? null == r || t
          ? void 0
          : []
        : null == r || t
        ? n[n.length - 1]
        : R(n, Math.max(0, n.length - r));
    },
    rest: R,
    tail: R,
    drop: R,
    compact: function (n) {
      return T(n, Boolean);
    },
    flatten: function (n, r) {
      return B(n, r, !1);
    },
    without: Ir,
    uniq: Tr,
    unique: Tr,
    union: kr,
    intersection: function (n) {
      for (var r = [], t = arguments.length, e = 0, u = g(n); e < u; e++) {
        var o = n[e];
        if (!k(r, o)) {
          for (var i = 1; i < t && k(arguments[i], o); i++);
          i === t && r.push(o);
        }
      }
      return r;
    },
    difference: Nr,
    unzip: Dr,
    transpose: Dr,
    zip: Rr,
    object: function (n, r) {
      for (var t = {}, e = 0, u = g(n); e < u; e++)
        r ? (t[n[e]] = r[e]) : (t[n[e][0]] = n[e][1]);
      return t;
    },
    range: function (n, r, t) {
      null == r && ((r = n || 0), (n = 0)), (t = t || (r < n ? -1 : 1));
      for (
        var e = Math.max(Math.ceil((r - n) / t), 0), u = Array(e), o = 0;
        o < e;
        o++, n += t
      )
        u[o] = n;
      return u;
    },
    chunk: function (n, r) {
      if (null == r || r < 1) return [];
      for (var t = [], e = 0, u = n.length; e < u; )
        t.push(f.call(n, e, (e += r)));
      return t;
    },
    mixin: Vr,
    default: m,
  });
  return (n._ = n);
});
(function () {
  /**
   * If we have a temp variable of type function it means lodash was loaded before underscore so we need to
   * remove the reference to underscore from window._ by using the method .noConflict() from underscore, after
   * this point we need to revert back the value of window._ which was lodash.
   *
   * In the second scenario when underscore is loaded before lodash, this will not be executed as window._
   * will remain as lodash.
   *
   * On a third scenario when lodash is not included this will either be executed which will allow to use
   * something like: window.underscore || window._ to fallback to the correct value of underscore in the plugins.
   */
  if (
    window._lodash_tmp !== false &&
    typeof window._lodash_tmp === "function"
  ) {
    // Remove reference to _ if is underscore
    window.underscore = _.noConflict();
    // Restore reference to lodash if present
    window._ = window._lodash_tmp;
  }
})();
/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

(tribe.events = tribe.events || {}),
  (tribe.events.views = tribe.events.views || {}),
  (tribe.events.views.manager = {}),
  (function ($, _, obj) {
    "use strict";
    var $window = $(window);
    (obj.nonces = null),
      (obj.selectors = {
        container: '[data-js="tribe-events-view"]',
        form: '[data-js="tribe-events-view-form"]',
        link: '[data-js="tribe-events-view-link"]',
        dataScript: '[data-js="tribe-events-view-data"]',
        loader: ".tribe-events-view-loader",
        loaderText: ".tribe-events-view-loader__text",
        hiddenElement: ".tribe-common-a11y-hidden",
        nonceScript: '[data-js="tribe-events-view-nonce-data"]',
      }),
      (obj.lastLocation = { origin: "", pathname: "" }),
      (obj.doingPopstate = !1),
      (obj.currentAjaxRequest = null),
      (obj.$lastContainer = $()),
      (obj.$containers = $()),
      (obj.cleanup = function (container) {
        var $container = $(container),
          $form = $container.find(obj.selectors.form),
          $data = $container.find(obj.selectors.dataScript),
          data = {};
        $data.length && (data = JSON.parse($data.text().trim())),
          $container.trigger("beforeCleanup.tribeEvents", [$container, data]),
          $container
            .find(obj.selectors.link)
            .off("click.tribeEvents", obj.onLinkClick),
          $form.length && $form.off("submit.tribeEvents", obj.onSubmit),
          $container.trigger("afterCleanup.tribeEvents", [$container, data]);
      }),
      (obj.setup = function (index, container) {
        var $nonces = $($.find(obj.selectors.nonceScript)),
          $container = $(container),
          $form = $container.find(obj.selectors.form),
          $data = $container.find(obj.selectors.dataScript),
          data = {};
        $nonces.length &&
          ((obj.nonces = JSON.parse($($nonces[0]).text().trim())),
          $nonces.remove()),
          $data.length && (data = JSON.parse($data.text().trim())),
          $container.trigger("beforeSetup.tribeEvents", [
            index,
            $container,
            data,
          ]),
          $container
            .find(obj.selectors.link)
            .on("click.tribeEvents", obj.onLinkClick),
          $form.length && $form.on("submit.tribeEvents", obj.onSubmit),
          $container.trigger("afterSetup.tribeEvents", [
            index,
            $container,
            data,
          ]);
      }),
      (obj.getContainer = function (element) {
        var $element = $(element);
        return $element.is(obj.selectors.container)
          ? $element
          : $element.parents(obj.selectors.container).eq(0);
      }),
      (obj.getContainerData = function ($container) {
        var $data = $container.find(obj.selectors.dataScript);
        if ($data.length) return JSON.parse($data.text().trim());
      }),
      (obj.shouldManageUrl = function ($container) {
        var shouldManageUrl = $container.data("view-manage-url");
        return (shouldManageUrl =
          void 0 === shouldManageUrl ||
          /^(true|1|on|yes)$/.test(String(shouldManageUrl)));
      }),
      (obj.updateUrl = function ($container) {
        if (!obj.doingPopstate && obj.shouldManageUrl($container)) {
          var $data = $container.find(obj.selectors.dataScript);
          if ($data.length) {
            var data = JSON.parse($data.text().trim());
            _.isObject(data) &&
              (_.isUndefined(data.url) ||
                _.isUndefined(data.title) ||
                ((document.title = data.title),
                window.history.pushState(null, data.title, data.url),
                (obj.lastLocation.pathname = document.location.pathname),
                (obj.lastLocation.origin = document.location.origin)));
          }
        }
      }),
      (obj.onLinkClick = function (event) {
        var $container = obj.getContainer(this);
        $container.trigger("beforeOnLinkClick.tribeEvents", event),
          event.preventDefault();
        var containerData = obj.getContainerData($container),
          url = $(this).attr("href"),
          prevUrl = containerData.prev_url,
          shouldManageUrl = obj.shouldManageUrl($container),
          shortcodeId = $container.data("view-shortcode"),
          data = {
            prev_url: encodeURI(decodeURI(prevUrl)),
            url: encodeURI(decodeURI(url)),
            should_manage_url: shouldManageUrl,
          };
        return (
          shortcodeId && (data.shortcode = shortcodeId),
          obj.request(data, $container),
          $container.trigger("afterOnLinkClick.tribeEvents", event),
          !1
        );
      }),
      (obj.onSubmit = function (event) {
        var $container = obj.getContainer(this);
        $container.trigger("beforeOnSubmit.tribeEvents", event),
          event.preventDefault();
        var $form = $(this),
          data = {
            view_data: Qs.parse($form.serialize())["tribe-events-views"],
          };
        return (
          obj.request(data, $container),
          $container.trigger("afterOnSubmit.tribeEvents", event),
          !1
        );
      }),
      (obj.onPopState = function (event) {
        var target = event.originalEvent.target,
          url = target.location.href,
          $container = obj.getLastContainer();
        if (
          obj.lastLocation.origin === target.location.origin &&
          obj.lastLocation.pathname === target.location.pathname
        )
          return !1;
        if (
          ((obj.lastLocation.pathname = document.location.pathname),
          (obj.lastLocation.origin = document.location.origin),
          !$container)
        )
          return !1;
        obj.currentAjaxRequest && obj.currentAjaxRequest.abort(),
          (obj.doingPopstate = !0),
          $container.trigger("beforePopState.tribeEvents", event);
        var data = { url: url };
        return obj.request(data, $container), !1;
      }),
      (obj.setupRequestData = function (data, $container) {
        var shouldManageUrl = obj.shouldManageUrl($container),
          containerData = obj.getContainerData($container);
        data.url || (data.url = containerData.url),
          data.prev_url || (data.prev_url = containerData.prev_url),
          (data.should_manage_url = shouldManageUrl),
          obj.nonces && (data = $.extend(data, obj.nonces));
        var requestData = $container.data("tribeRequestData");
        return $.isPlainObject(requestData)
          ? $.extend(requestData, data)
          : data;
      }),
      (obj.request = function (data, $container) {
        $container.trigger("beforeRequest.tribeEvents", [data, $container]);
        var settings = obj.getAjaxSettings($container);
        (settings.data = obj.setupRequestData(data, $container)),
          (obj.currentAjaxRequest = $.ajax(settings)),
          $container.trigger("afterRequest.tribeEvents", [data, $container]);
      }),
      (obj.getAjaxSettings = function ($container) {
        return {
          url: $container.data("view-rest-url"),
          method: $container.data("view-rest-method") || "POST",
          async: !0,
          beforeSend: obj.ajaxBeforeSend,
          complete: obj.ajaxComplete,
          success: obj.ajaxSuccess,
          error: obj.ajaxError,
          context: $container,
        };
      }),
      (obj.ajaxBeforeSend = function (jqXHR, settings) {
        var $loader = this.find(obj.selectors.loader);
        if (
          (this.trigger("beforeAjaxBeforeSend.tribeEvents", [jqXHR, settings]),
          $loader.length)
        ) {
          $loader.removeClass(obj.selectors.hiddenElement.className());
          var $loaderText = $loader.find(obj.selectors.loaderText);
          $loaderText.text($loaderText.text());
        }
        this.attr("aria-busy", "true"),
          this.trigger("afterAjaxBeforeSend.tribeEvents", [jqXHR, settings]);
      }),
      (obj.ajaxComplete = function (jqXHR, textStatus) {
        var $loader = this.find(obj.selectors.loader);
        this.trigger("beforeAjaxComplete.tribeEvents", [jqXHR, textStatus]),
          $loader.length &&
            $loader.addClass(obj.selectors.hiddenElement.className()),
          this.trigger("afterAjaxComplete.tribeEvents", [jqXHR, textStatus]),
          obj.doingPopstate && (obj.doingPopstate = !1),
          (obj.currentAjaxRequest = null);
      }),
      (obj.ajaxSuccess = function (data, textStatus, jqXHR) {
        var $container = this;
        $container.trigger("beforeAjaxSuccess.tribeEvents", [
          data,
          textStatus,
          jqXHR,
        ]);
        var $html = $(data),
          $nonces = $html.find(obj.selectors.nonceScript);
        ($html = $html.not(obj.selectors.nonceScript)),
          $nonces.length &&
            (obj.nonces = JSON.parse($($nonces[0]).text().trim())),
          obj.cleanup($container),
          document.dispatchEvent(
            new CustomEvent("containerReplaceBefore.tribeEvents", {
              detail: $container,
            })
          ),
          $container.replaceWith($html),
          ($container = $html),
          obj.setup(0, $container),
          document.dispatchEvent(
            new CustomEvent("containerReplaceAfter.tribeEvents", {
              detail: $container,
            })
          ),
          obj.selectContainers(),
          obj.updateUrl($container),
          $container.trigger("afterAjaxSuccess.tribeEvents", [
            data,
            textStatus,
            jqXHR,
          ]),
          obj.shouldManageUrl($container) && (obj.$lastContainer = $container);
      }),
      (obj.ajaxError = function (jqXHR, settings) {
        this.trigger("beforeAjaxError.tribeEvents", [jqXHR, settings]),
          this.trigger("afterAjaxError.tribeEvents", [jqXHR, settings]);
      }),
      (obj.selectContainers = function () {
        return (obj.$containers = $(obj.selectors.container)), obj.$containers;
      }),
      (obj.getLastContainer = function () {
        return (
          obj.$lastContainer.length ||
            (obj.$lastContainer = obj.$containers
              .filter('[data-view-manage-url="1"]')
              .eq(0)),
          obj.$lastContainer
        );
      }),
      (obj.ready = function () {
        obj.selectContainers().each(obj.setup),
          (obj.lastLocation = {
            origin: document.location.origin,
            pathname: document.location.pathname,
          });
      }),
      $(obj.ready),
      $window.on("popstate", obj.onPopState);
  })(jQuery, window.underscore || window._, tribe.events.views.manager);
/(trident|msie)/i.test(navigator.userAgent) &&
  document.getElementById &&
  window.addEventListener &&
  window.addEventListener(
    "hashchange",
    function () {
      var t,
        e = location.hash.substring(1);
      /^[A-z0-9_-]+$/.test(e) &&
        (t = document.getElementById(e)) &&
        (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) ||
          (t.tabIndex = -1),
        t.focus());
    },
    !1
  );
