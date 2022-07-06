(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page"], {
	"0538": function(t, e, n) {
		"use strict";
		var c = n("1c0b"),
		r = n("861d"),
		a = [].slice,
		i = {},
		o = function(t, e, n) {
			if (! (e in i)) {
				for (var c = [], r = 0; r < e; r++) c[r] = "a[" + r + "]";
				i[e] = Function("C,a", "return new C(" + c.join(",") + ")")
			}
			return i[e](t, n)
		};
		t.exports = Function.bind ||
		function(t) {
			var e = c(this),
			n = a.call(arguments, 1),
			i = function() {
				var c = n.concat(a.call(arguments));
				return this instanceof i ? o(e, c.length, c) : e.apply(t, c)
			};
			return r(e.prototype) && (i.prototype = e.prototype),
			i
		}
	},
	"1a3b": function(t, e, n) {},
	3410 : function(t, e, n) {
		var c = n("23e7"),
		r = n("d039"),
		a = n("7b0b"),
		i = n("e163"),
		o = n("e177"),
		u = r((function() {
			i(1)
		}));
		c({
			target: "Object",
			stat: !0,
			forced: u,
			sham: !o
		},
		{
			getPrototypeOf: function(t) {
				return i(a(t))
			}
		})
	},
	"4ae1": function(t, e, n) {
		var c = n("23e7"),
		r = n("d066"),
		a = n("1c0b"),
		i = n("825a"),
		o = n("861d"),
		u = n("7c73"),
		l = n("0538"),
		s = n("d039"),
		b = r("Reflect", "construct"),
		p = s((function() {
			function t() {}
			return ! (b((function() {}), [], t) instanceof t)
		})),
		f = !s((function() {
			b((function() {}))
		})),
		d = p || f;
		c({
			target: "Reflect",
			stat: !0,
			forced: d,
			sham: d
		},
		{
			construct: function(t, e) {
				a(t),
				i(e);
				var n = arguments.length < 3 ? t: a(arguments[2]);
				if (f && !p) return b(t, e, n);
				if (t == n) {
					switch (e.length) {
					case 0:
						return new t;
					case 1:
						return new t(e[0]);
					case 2:
						return new t(e[0], e[1]);
					case 3:
						return new t(e[0], e[1], e[2]);
					case 4:
						return new t(e[0], e[1], e[2], e[3])
					}
					var c = [null];
					return c.push.apply(c, e),
					new(l.apply(t, c))
				}
				var r = n.prototype,
				s = u(o(r) ? r: Object.prototype),
				d = Function.apply.call(t, s, e);
				return o(d) ? d: s
			}
		})
	},
	5350 : function(t, e, n) {
		"use strict";
		var c = n("7a23"),
		r = Object(c["W"])("data-v-6d5e68b2");
		Object(c["D"])("data-v-6d5e68b2");
		var a = {
			class: "flex flex-col"
		},
		i = {
			class: "post-header"
		},
		o = {
			key: 0,
			class: "post-title text-white uppercase"
		},
		u = {
			class: "main-grid"
		},
		l = {
			class: "relative"
		},
		s = {
			key: 1,
			class: "\n            bg-ob-deep-800\n            px-14\n            py-16\n            rounded-2xl\n            shadow-xl\n            block\n            min-h-screen\n          "
		},
		b = Object(c["j"])("br", null, null, -1),
		p = Object(c["j"])("br", null, null, -1),
		f = Object(c["j"])("br", null, null, -1),
		d = {
			class: "col-span-1"
		};
		Object(c["B"])();
		var g = r((function(t, e, n, g, j, O) {
			var h = Object(c["I"])("ob-skeleton"),
			v = Object(c["I"])("Profile"),
			m = Object(c["I"])("Toc"),
			y = Object(c["I"])("Sidebar"),
			w = Object(c["J"])("scroll-spy");
			return Object(c["A"])(),
			Object(c["g"])("div", a, [Object(c["j"])("div", i, [t.post.title ? (Object(c["A"])(), Object(c["g"])("h1", o, Object(c["M"])(t.pageTitle), 1)) : (Object(c["A"])(), Object(c["g"])(h, {
				key: 1,
				class: "post-title text-white uppercase",
				width: "100%",
				height: "clamp(1.2rem, calc(1rem + 3.5vw), 4rem)"
			}))]), Object(c["j"])("div", u, [Object(c["j"])("div", l, [t.post.content ? Object(c["T"])((Object(c["A"])(), Object(c["g"])("div", {
				key: 0,
				class: "post-html",
				innerHTML: t.post.content
			},
			null, 8, ["innerHTML"])), [[w, {
				sectionSelector: "h1, h2, h3, h4, h5, h6"
			}]]) : (Object(c["A"])(), Object(c["g"])("div", s, [Object(c["j"])(h, {
				tag: "div",
				count: 1,
				height: "36px",
				width: "150px",
				class: "mb-6"
			}), b, Object(c["j"])(h, {
				tag: "div",
				count: 35,
				height: "16px",
				width: "100px",
				class: "mr-2"
			}), p, f, Object(c["j"])(h, {
				tag: "div",
				count: 25,
				height: "16px",
				width: "100px",
				class: "mr-2"
			})])), Object(c["H"])(t.$slots, "default", {},
			void 0, !0)]), Object(c["j"])("div", d, [Object(c["j"])(y, null, {
			default:
				r((function() {
					return [Object(c["j"])(v, {
						author: "blog-author"
					}), Object(c["j"])(m, {
						toc: t.post.toc
					},
					null, 8, ["toc"])]
				})),
				_: 1
			})])])])
		})),
		j = n("47e2"),
		O = n("2a1d"),
		h = n("5701"),
		v = Object(c["k"])({
			name: "ObPageContainer",
			components: {
				Sidebar: O["d"],
				Toc: O["f"],
				Profile: O["b"]
			},
			props: {
				post: {
					type: Object,
				default:
					function() {
						return {}
					}
				},
				title: {
					type: String,
				default:
					""
				}
			},
			setup: function(t) {
				var e = Object(h["a"])(),
				n = Object(j["b"])(),
				r = n.t,
				a = Object(c["N"])(t).post,
				i = Object(c["N"])(t).title;
				return Object(c["R"])((function() {
					return a.value.covers
				}), (function(t) {
					console.log(t),
					t && e.setHeaderImage(t)
				})),
				Object(c["x"])((function() {
					e.setHeaderImage(a.value.covers)
				})),
				Object(c["y"])((function() {
					e.resetHeaderImage()
				})),
				{
					pageTitle: Object(c["e"])((function() {
						return "" !== i.value ? i.value: a.value.title
					})),
					t: r
				}
			}
		});
		n("8625");
		v.render = g,
		v.__scopeId = "data-v-6d5e68b2";
		e["a"] = v
	},
	7037 : function(t, e, n) {
		function c(e) {
			return "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? (t.exports = c = function(t) {
				return typeof t
			},
			t.exports["default"] = t.exports, t.exports.__esModule = !0) : (t.exports = c = function(t) {
				return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
			},
			t.exports["default"] = t.exports, t.exports.__esModule = !0),
			c(e)
		}
		n("a4d3"),
		n("e01a"),
		n("d3b7"),
		n("d28b"),
		n("3ca3"),
		n("ddb0"),
		t.exports = c,
		t.exports["default"] = t.exports,
		t.exports.__esModule = !0
	},
	"76f0": function(t, e, n) {
		"use strict";
		n("b1d6")
	},
	"7db3": function(t, e, n) {
		"use strict";
		n("1a3b")
	},
	8625 : function(t, e, n) {
		"use strict";
		n("9d2c")
	},
	"9d2c": function(t, e, n) {},
	b1d6: function(t, e, n) {},
	b6c6: function(t, e, n) {
		"use strict";
		var c = n("7a23"),
		r = Object(c["W"])("data-v-4170130a");
		Object(c["D"])("data-v-4170130a");
		var a = {
			class: "breadcrumbs flex flex-row gap-6 text-white"
		};
		Object(c["B"])();
		var i = r((function(t, e, n, r, i, o) {
			return Object(c["A"])(),
			Object(c["g"])("ul", a, [Object(c["j"])("li", null, Object(c["M"])(t.t("menu.home")), 1), Object(c["j"])("li", null, Object(c["M"])(t.current), 1)])
		})),
		o = n("47e2"),
		u = Object(c["k"])({
			name: "Breadcrumb",
			props: {
				current: String
			},
			setup: function() {
				var t = Object(o["b"])(),
				e = t.t;
				return {
					t: e
				}
			}
		});
		n("76f0");
		u.render = i,
		u.__scopeId = "data-v-4170130a";
		e["a"] = u
	},
	ced1: function(t, e, n) {
		"use strict";
		n.d(e, "a", (function() {
			return o
		}));
		var c = n("1da1"),
		r = (n("96cf"), n("d3b7"), n("77ba")),
		a = n("79f6"),
		i = n("d8ac"),
		o = Object(r["b"])({
			id: "articleStore",
			state: function() {
				return {}
			},
			getters: {},
			actions: {
				fetchArticle: function(t) {
					return Object(c["a"])(regeneratorRuntime.mark((function e() {
						var n, c;
						return regeneratorRuntime.wrap((function(e) {
							while (1) switch (e.prev = e.next) {
							case 0:
								return e.next = 2,
								Object(a["f"])(t);
							case 2:
								return n = e.sent,
								c = n.data,
								e.abrupt("return", new Promise((function(t) {
									return setTimeout((function() {
										t(new i["a"](c))
									}), 200)
								})));
							case 5:
							case "end":
								return e.stop()
							}
						}), e)
					})))()
				}
			}
		})
	},
}]);