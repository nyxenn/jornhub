(function (p) {
  function e(e) {
    for (
      var n, c, r = e[0], i = e[1], j = e[2], u = 0, a = [];
      u < r.length;
      u++
    )
      (c = r[u]),
        Object.prototype.hasOwnProperty.call(o, c) && o[c] && a.push(o[c][0]),
        (o[c] = 0);
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (p[n] = i[n]);
    f && f(e);
    while (a.length) a.shift()();
    return g.push.apply(g, j || []), t();
  }
  function t() {
    for (var p, e = 0; e < g.length; e++) {
      for (var t = g[e], n = !0, r = 1; r < t.length; r++) {
        var i = t[r];
        0 !== o[i] && (n = !1);
      }
      n && (g.splice(e--, 1), (p = c((c.s = t[0]))));
    }
    return p;
  }
  var n = {},
    o = { app: 0 },
    g = [];
  function c(e) {
    if (n[e]) return n[e].exports;
    var t = (n[e] = { i: e, l: !1, exports: {} });
    return p[e].call(t.exports, t, t.exports, c), (t.l = !0), t.exports;
  }
  (c.m = p),
    (c.c = n),
    (c.d = function (p, e, t) {
      c.o(p, e) || Object.defineProperty(p, e, { enumerable: !0, get: t });
    }),
    (c.r = function (p) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(p, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(p, "__esModule", { value: !0 });
    }),
    (c.t = function (p, e) {
      if ((1 & e && (p = c(p)), 8 & e)) return p;
      if (4 & e && "object" === typeof p && p && p.__esModule) return p;
      var t = Object.create(null);
      if (
        (c.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: p }),
        2 & e && "string" != typeof p)
      )
        for (var n in p)
          c.d(
            t,
            n,
            function (e) {
              return p[e];
            }.bind(null, n)
          );
      return t;
    }),
    (c.n = function (p) {
      var e =
        p && p.__esModule
          ? function () {
              return p["default"];
            }
          : function () {
              return p;
            };
      return c.d(e, "a", e), e;
    }),
    (c.o = function (p, e) {
      return Object.prototype.hasOwnProperty.call(p, e);
    }),
    (c.p = "/");
  var r = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    i = r.push.bind(r);
  (r.push = e), (r = r.slice());
  for (var j = 0; j < r.length; j++) e(r[j]);
  var f = i;
  g.push([0, "chunk-vendors"]), t();
})({
  0: function (p, e, t) {
    p.exports = t("56d7");
  },
  "0125": function (p, e, t) {
    p.exports = t.p + "media/41.db97edaa.mp4";
  },
  "068d": function (p, e, t) {
    p.exports = t.p + "img/11.d46aee28.jpg";
  },
  "06d4": function (p, e, t) {
    p.exports = t.p + "img/6.85259162.jpg";
  },
  "089f": function (p, e, t) {
    p.exports = t.p + "img/38.1b59efb2.jpg";
  },
  "0a06": function (p, e, t) {
    p.exports = t.p + "img/14.e36938e5.jpg";
  },
  "11d9": function (p, e, t) {
    p.exports = t.p + "img/3.592358d5.jpg";
  },
  "15ea": function (p, e, t) {
    p.exports = t.p + "img/8.63941a64.jpg";
  },
  1771: function (p, e, t) {
    var n = {
      "./1.jpg": "8554",
      "./10.jpg": "efcc",
      "./11.jpg": "068d",
      "./12.jpg": "e834",
      "./13.jpg": "c246",
      "./14.jpg": "0a06",
      "./15.jpg": "431a",
      "./16.jpg": "58c1",
      "./17.jpg": "4e6b",
      "./18.jpg": "f992",
      "./19.jpg": "bdd1",
      "./2.jpg": "405a",
      "./20.jpg": "a823",
      "./21.jpg": "d878",
      "./22.jpg": "67ce",
      "./23.jpg": "d423",
      "./24.jpg": "51e9",
      "./25.jpg": "2e36",
      "./26.jpg": "d1e4",
      "./27.jpg": "5cb9",
      "./28.jpg": "4f4b",
      "./29.jpg": "5ee2",
      "./3.jpg": "11d9",
      "./30.jpg": "36d0",
      "./31.jpg": "6e32",
      "./32.jpg": "3f7c",
      "./33.jpg": "896f",
      "./34.jpg": "1fd8",
      "./35.jpg": "68d7",
      "./36.jpg": "a7a8",
      "./37.jpg": "290b",
      "./38.jpg": "089f",
      "./39.mp4": "a47a",
      "./4.jpg": "bafb",
      "./40.jpg": "f34a",
      "./41.mp4": "0125",
      "./42.jpg": "85e3",
      "./43.mp4": "cc60",
      "./44.jpg": "d385",
      "./45.jpg": "cab7",
      "./46.jpg": "cca4",
      "./47.jpg": "3fa9",
      "./48.jpg": "264d",
      "./5.jpg": "4d0f",
      "./6.jpg": "06d4",
      "./7.jpg": "32a5",
      "./8.jpg": "15ea",
      "./9.jpg": "6d96",
      "./logo.png": "cf05",
    };
    function o(p) {
      var e = g(p);
      return t(e);
    }
    function g(p) {
      if (!t.o(n, p)) {
        var e = new Error("Cannot find module '" + p + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      return n[p];
    }
    (o.keys = function () {
      return Object.keys(n);
    }),
      (o.resolve = g),
      (p.exports = o),
      (o.id = "1771");
  },
  "1bdf": function (p, e, t) {},
  "1fd8": function (p, e, t) {
    p.exports = t.p + "img/34.0ee648fa.jpg";
  },
  "264d": function (p, e, t) {
    p.exports = t.p + "img/48.18ea4632.jpg";
  },
  "290b": function (p, e, t) {
    p.exports = t.p + "img/37.71028248.jpg";
  },
  "2e36": function (p, e, t) {
    p.exports = t.p + "img/25.bde2be12.jpg";
  },
  "312b": function (p, e, t) {},
  "314d": function (p, e, t) {
    "use strict";
    t("312b");
  },
  "32a5": function (p, e, t) {
    p.exports = t.p + "img/7.b496057e.jpg";
  },
  "36d0": function (p, e, t) {
    p.exports = t.p + "img/30.44df3672.jpg";
  },
  "3f7c": function (p, e, t) {
    p.exports = t.p + "img/32.175fe29e.jpg";
  },
  "3fa9": function (p, e, t) {
    p.exports = t.p + "img/47.be30e505.jpg";
  },
  "405a": function (p, e, t) {
    p.exports = t.p + "img/2.bfd99df1.jpg";
  },
  "431a": function (p, e, t) {
    p.exports = t.p + "img/15.369beaad.jpg";
  },
  "4d0f": function (p, e, t) {
    p.exports = t.p + "img/5.83436690.jpg";
  },
  "4e6b": function (p, e, t) {
    p.exports = t.p + "img/17.eb69a79c.jpg";
  },
  "4f4b": function (p, e, t) {
    p.exports = t.p + "img/28.78459105.jpg";
  },
  "51e9": function (p, e, t) {
    p.exports = t.p + "img/24.062ccfb1.jpg";
  },
  "55d9": function (p, e, t) {
    "use strict";
    t("b8f0");
  },
  "56d7": function (p, e, t) {
    "use strict";
    t.r(e);
    t("e260"), t("e6cf"), t("cca6"), t("a79d");
    var n = t("7a23");
    function o(p, e, t, o, g, c) {
      var r = Object(n["h"])("JornNavigation"),
        i = Object(n["h"])("JornDex");
      return (
        Object(n["f"])(),
        Object(n["c"])("div", null, [Object(n["e"])(r), Object(n["e"])(i)])
      );
    }
    var g = { class: "main" },
      c = { key: 0, width: "320", height: "240", controls: "" },
      r = Object(n["d"])(" Your browser does not support the video tag. ");
    function i(p, e, o, i, j, f) {
      return (
        Object(n["f"])(),
        Object(n["c"])("div", g, [
          (Object(n["f"])(!0),
          Object(n["c"])(
            n["a"],
            null,
            Object(n["g"])(j.jorns, function (p, o) {
              return (
                Object(n["f"])(),
                Object(n["c"])("div", { key: o, class: "entry" }, [
                  38 == o || 40 == o || 42 == o
                    ? (Object(n["f"])(),
                      Object(n["c"])("video", c, [
                        Object(n["e"])(
                          "source",
                          {
                            src: t("1771")("./".concat(p)),
                            type: "video/mp4",
                            onClick:
                              e[1] ||
                              (e[1] = function (p) {
                                return f.togglePlay(p);
                              }),
                          },
                          null,
                          8,
                          ["src"]
                        ),
                        r,
                      ]))
                    : (Object(n["f"])(),
                      Object(n["c"])(
                        "img",
                        {
                          key: 1,
                          src: t("1771")("./".concat(p)),
                          alt: "jorn-" + o,
                        },
                        null,
                        8,
                        ["src", "alt"]
                      )),
                ])
              );
            }),
            128
          )),
        ])
      );
    }
    var j = {
      name: "JornDex",
      data: function () {
        return {
          jorns: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
            "5.jpg",
            "6.jpg",
            "7.jpg",
            "8.jpg",
            "9.jpg",
            "10.jpg",
            "11.jpg",
            "12.jpg",
            "13.jpg",
            "14.jpg",
            "15.jpg",
            "16.jpg",
            "17.jpg",
            "18.jpg",
            "19.jpg",
            "20.jpg",
            "21.jpg",
            "22.jpg",
            "23.jpg",
            "24.jpg",
            "25.jpg",
            "26.jpg",
            "27.jpg",
            "28.jpg",
            "29.jpg",
            "30.jpg",
            "31.jpg",
            "32.jpg",
            "33.jpg",
            "34.jpg",
            "35.jpg",
            "36.jpg",
            "37.jpg",
            "38.jpg",
            "39.mp4",
            "40.jpg",
            "41.mp4",
            "42.jpg",
            "43.mp4",
            "44.jpg",
            "45.jpg",
            "46.jpg",
            "47.jpg",
            "48.jpg",
          ],
        };
      },
      methods: {
        togglePlay: function (p) {
          console.log(p);
        },
      },
    };
    t("55d9");
    j.render = i;
    var f = j,
      u = t("cf05"),
      a = t.n(u),
      s = { class: "nav" },
      d = Object(n["e"])(
        "div",
        { class: "hub" },
        [Object(n["e"])("img", { src: a.a, alt: "logo" })],
        -1
      );
    function b(p, e, t, o, g, c) {
      return Object(n["f"])(), Object(n["c"])("div", s, [d]);
    }
    var m = {};
    t("314d");
    m.render = b;
    var l = m,
      x = { name: "App", components: { JornDex: f, JornNavigation: l } };
    t("eeba");
    x.render = o;
    var v = x,
      O = Object(n["b"])(v);
    O.mount("#app");
  },
  "58c1": function (p, e, t) {
    p.exports = t.p + "img/16.e48a7689.jpg";
  },
  "5cb9": function (p, e, t) {
    p.exports = t.p + "img/27.33971fb9.jpg";
  },
  "5ee2": function (p, e, t) {
    p.exports = t.p + "img/29.5ecd87e3.jpg";
  },
  "67ce": function (p, e, t) {
    p.exports = t.p + "img/22.2f19724f.jpg";
  },
  "68d7": function (p, e, t) {
    p.exports = t.p + "img/35.6dffe8dc.jpg";
  },
  "6d96": function (p, e, t) {
    p.exports = t.p + "img/9.12a00cb1.jpg";
  },
  "6e32": function (p, e, t) {
    p.exports = t.p + "img/31.f5f82b89.jpg";
  },
  8554: function (p, e, t) {
    p.exports = t.p + "img/1.eca797e8.jpg";
  },
  "85e3": function (p, e, t) {
    p.exports = t.p + "img/42.47295870.jpg";
  },
  "896f": function (p, e, t) {
    p.exports = t.p + "img/33.b929e3e8.jpg";
  },
  a47a: function (p, e, t) {
    p.exports = t.p + "media/39.c4c26c42.mp4";
  },
  a7a8: function (p, e, t) {
    p.exports = t.p + "img/36.2272a0b7.jpg";
  },
  a823: function (p, e, t) {
    p.exports = t.p + "img/20.d256f96a.jpg";
  },
  b8f0: function (p, e, t) {},
  bafb: function (p, e, t) {
    p.exports = t.p + "img/4.c8a79273.jpg";
  },
  bdd1: function (p, e, t) {
    p.exports = t.p + "img/19.1f416ea6.jpg";
  },
  c246: function (p, e, t) {
    p.exports = t.p + "img/13.cb80211a.jpg";
  },
  cab7: function (p, e, t) {
    p.exports = t.p + "img/45.f51b7d02.jpg";
  },
  cc60: function (p, e, t) {
    p.exports = t.p + "media/43.25358afc.mp4";
  },
  cca4: function (p, e, t) {
    p.exports = t.p + "img/46.ab03e0f1.jpg";
  },
  cf05: function (p, e, t) {
    p.exports = t.p + "img/logo.a8b246b8.png";
  },
  d1e4: function (p, e, t) {
    p.exports = t.p + "img/26.3d07a7e6.jpg";
  },
  d385: function (p, e, t) {
    p.exports = t.p + "img/44.b7262302.jpg";
  },
  d423: function (p, e, t) {
    p.exports = t.p + "img/23.435c88ee.jpg";
  },
  d878: function (p, e, t) {
    p.exports = t.p + "img/21.8fa0d038.jpg";
  },
  e834: function (p, e, t) {
    p.exports = t.p + "img/12.ca88bdfb.jpg";
  },
  eeba: function (p, e, t) {
    "use strict";
    t("1bdf");
  },
  efcc: function (p, e, t) {
    p.exports = t.p + "img/10.fac2c1dd.jpg";
  },
  f34a: function (p, e, t) {
    p.exports = t.p + "img/40.c0158a5e.jpg";
  },
  f992: function (p, e, t) {
    p.exports = t.p + "img/18.4fd89229.jpg";
  },
});
//# sourceMappingURL=app.d42fda86.js.map
