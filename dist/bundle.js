(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.Coordinate = void 0;
/**
  *  中心点对象，图形所处在画布上的坐标中心点
  * @author JiangXincan
  * @date 2020/9/28 17:38
  * @return
  */

var Coordinate = function () {
    function Coordinate(x, y) {
        _classCallCheck(this, Coordinate);

        this._x = x;
        this._y = y;
    }

    _createClass(Coordinate, [{
        key: "x",
        get: function get() {
            return this._x;
        },
        set: function set(value) {
            this._x = value;
        }
    }, {
        key: "y",
        get: function get() {
            return this._y;
        },
        set: function set(value) {
            this._y = value;
        }
    }]);

    return Coordinate;
}();

exports.Coordinate = Coordinate;

},{}],2:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.Draw = void 0;

var Draw = function () {
    function Draw(panel, graph) {
        _classCallCheck(this, Draw);

        this._panel = panel;
        this._graph = graph;
    }

    _createClass(Draw, [{
        key: "panel",
        get: function get() {
            return this._panel;
        },
        set: function set(value) {
            this._panel = value;
        }
    }, {
        key: "graph",
        get: function get() {
            return this._graph;
        },
        set: function set(value) {
            this._graph = value;
        }
    }]);

    return Draw;
}();

exports.Draw = Draw;

},{}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleGraph = void 0;
/**
 *  圆形实体对象
 * @author JiangXincan
 * @date 2020/5/19 13:38
 */
var graph_entity_1 = require("./graph.entity");

var CircleGraph = function (_graph_entity_1$Graph) {
    _inherits(CircleGraph, _graph_entity_1$Graph);

    function CircleGraph(id, center, r) {
        _classCallCheck(this, CircleGraph);

        // 半径
        var _this = _possibleConstructorReturn(this, (CircleGraph.__proto__ || Object.getPrototypeOf(CircleGraph)).call(this, id, center));

        _this._r = 30;
        _this._r = r;
        return _this;
    }

    _createClass(CircleGraph, [{
        key: "r",
        get: function get() {
            return this._r;
        },
        set: function set(value) {
            this._r = value;
        }
    }]);

    return CircleGraph;
}(graph_entity_1.Graph);

exports.CircleGraph = CircleGraph;

},{"./graph.entity":5}],4:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
exports.DiamondGraph = void 0;
/**
 *  菱形实体对象
 * @author JiangXincan
 * @date 2020/5/19 13:38
 */
var graph_entity_1 = require("./graph.entity");

var DiamondGraph = function (_graph_entity_1$Graph) {
    _inherits(DiamondGraph, _graph_entity_1$Graph);

    function DiamondGraph(id, center, width, height) {
        _classCallCheck(this, DiamondGraph);

        var _this = _possibleConstructorReturn(this, (DiamondGraph.__proto__ || Object.getPrototypeOf(DiamondGraph)).call(this, id, center));

        _this._width = width;
        _this._height = height;
        return _this;
    }

    _createClass(DiamondGraph, [{
        key: "width",
        get: function get() {
            return this._width;
        },
        set: function set(value) {
            this._width = value;
        }
    }, {
        key: "height",
        get: function get() {
            return this._height;
        },
        set: function set(value) {
            this._height = value;
        }
    }]);

    return DiamondGraph;
}(graph_entity_1.Graph);

exports.DiamondGraph = DiamondGraph;

},{"./graph.entity":5}],5:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = void 0;

var Graph = function () {
    function Graph(id, center) {
        _classCallCheck(this, Graph);

        this._lineWidth = 1;
        this._strokeStyle = "gray";
        this._id = id;
        this._center = center;
    }

    _createClass(Graph, [{
        key: "id",
        get: function get() {
            return this._id;
        },
        set: function set(value) {
            this._id = value;
        }
    }, {
        key: "lineWidth",
        get: function get() {
            return this._lineWidth;
        },
        set: function set(value) {
            this._lineWidth = value;
        }
    }, {
        key: "strokeStyle",
        get: function get() {
            return this._strokeStyle;
        },
        set: function set(value) {
            this._strokeStyle = value;
        }
    }, {
        key: "center",
        get: function get() {
            return this._center;
        },
        set: function set(value) {
            this._center = value;
        }
    }]);

    return Graph;
}();

exports.Graph = Graph;

},{}],6:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
exports.OvalGraph = void 0;
/**
 *  椭圆实体对象
 * @author JiangXincan
 * @date 2020/5/19 13:38
 */
var graph_entity_1 = require("./graph.entity");

var OvalGraph = function (_graph_entity_1$Graph) {
    _inherits(OvalGraph, _graph_entity_1$Graph);

    function OvalGraph(id, center, width, height) {
        _classCallCheck(this, OvalGraph);

        var _this = _possibleConstructorReturn(this, (OvalGraph.__proto__ || Object.getPrototypeOf(OvalGraph)).call(this, id, center));

        _this._width = width;
        _this._height = height;
        return _this;
    }

    _createClass(OvalGraph, [{
        key: "width",
        get: function get() {
            return this._width;
        },
        set: function set(value) {
            this._width = value;
        }
    }, {
        key: "height",
        get: function get() {
            return this._height;
        },
        set: function set(value) {
            this._height = value;
        }
    }]);

    return OvalGraph;
}(graph_entity_1.Graph);

exports.OvalGraph = OvalGraph;

},{"./graph.entity":5}],7:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
exports.RectangleGraph = void 0;
var graph_entity_1 = require("./graph.entity");

var RectangleGraph = function (_graph_entity_1$Graph) {
    _inherits(RectangleGraph, _graph_entity_1$Graph);

    function RectangleGraph(id, center, width, height) {
        _classCallCheck(this, RectangleGraph);

        var _this = _possibleConstructorReturn(this, (RectangleGraph.__proto__ || Object.getPrototypeOf(RectangleGraph)).call(this, id, center));

        _this._width = width;
        _this._height = height;
        return _this;
    }

    _createClass(RectangleGraph, [{
        key: "width",
        get: function get() {
            return this._width;
        },
        set: function set(value) {
            this._width = value;
        }
    }, {
        key: "height",
        get: function get() {
            return this._height;
        },
        set: function set(value) {
            this._height = value;
        }
    }]);

    return RectangleGraph;
}(graph_entity_1.Graph);

exports.RectangleGraph = RectangleGraph;

},{"./graph.entity":5}],8:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.Panel = void 0;

var Panel = function () {
    function Panel(id) {
        var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
        var backgroundColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#fdfdfd";
        var resolution = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "%";

        _classCallCheck(this, Panel);

        this._id = id;
        this._width = width;
        this._height = height;
        this._backgroundColor = backgroundColor;
        this._resolution = resolution;
    }

    _createClass(Panel, [{
        key: "id",
        get: function get() {
            return this._id;
        },
        set: function set(value) {
            this._id = value;
        }
    }, {
        key: "width",
        get: function get() {
            return this._width;
        },
        set: function set(value) {
            this._width = value;
        }
    }, {
        key: "height",
        get: function get() {
            return this._height;
        },
        set: function set(value) {
            this._height = value;
        }
    }, {
        key: "backgroundColor",
        get: function get() {
            return this._backgroundColor;
        },
        set: function set(value) {
            this._backgroundColor = value;
        }
    }, {
        key: "resolution",
        get: function get() {
            return this._resolution;
        },
        set: function set(value) {
            this._resolution = value;
        }
    }]);

    return Panel;
}();

exports.Panel = Panel;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var draw_entity_1 = require("./entity/draw/draw.entity");
var panel_entity_1 = require("./entity/panel/panel.entity");
var panel_service_1 = require("./service/panel.service");
var rectangle_graph_entity_1 = require("./entity/graph/rectangle.graph.entity");
var draw_service_1 = require("./service/draw.service");
var coordinate_entity_1 = require("./entity/coordinate/coordinate.entity");
var circle_graph_entity_1 = require("./entity/graph/circle.graph.entity");
var oval_graph_entity_1 = require("./entity/graph/oval.graph.entity");
var diamond_graph_entity_1 = require("./entity/graph/diamond.graph.entity");
/**
 *
 * @param drawService 绘图处理接口类
 * @param draw 绘图对象
 * @author JiangXincan
 * @date 2020/5/19 11:02
 * @return
 */
function draw(drawService, draw) {
    return drawService.draw(draw);
}
var showHello = function showHello(id) {
    // 绘制画布
    var panel = new panel_entity_1.Panel(id, 1300, 600, "#38c6ec", "px");
    var panelServiceImpl = new panel_service_1.PanelServiceImpl();
    var ctx = panelServiceImpl.create(panel);
    // 构造矩形对象（有宽高）
    var rectangleGraph = new rectangle_graph_entity_1.RectangleGraph("rectangle", new coordinate_entity_1.Coordinate(5, 5), 50, 20);
    // 构造原型对象（有半径）
    var circleGraph = new circle_graph_entity_1.CircleGraph("circleGraph", new coordinate_entity_1.Coordinate(50, 50), 30);
    // 构造椭圆对象
    var ovalGraph = new oval_graph_entity_1.OvalGraph("ovalGraph", new coordinate_entity_1.Coordinate(150, 50), 30, 10);
    // 构造菱形对象
    var diamondGraph = new diamond_graph_entity_1.DiamondGraph("diamondGraph", new coordinate_entity_1.Coordinate(40, 10), 30, 30);
    // 构建绘图对象（矩形）
    var rectangleDraw = new draw_entity_1.Draw(ctx, rectangleGraph);
    var rectangleGraphDrawServiceImpl = new draw_service_1.RectangleGraphDrawServiceImpl();
    rectangleGraphDrawServiceImpl.draw(rectangleDraw);
    // 构建绘图对象（圆形）
    var circleDraw = new draw_entity_1.Draw(ctx, circleGraph);
    var circleGraphDrawServiceImpl = new draw_service_1.CircleGraphDrawServiceImpl();
    circleGraphDrawServiceImpl.draw(circleDraw);
    // 构建绘图对象（椭圆）
    var ovalDraw = new draw_entity_1.Draw(ctx, ovalGraph);
    var ovalGraphDrawServiceImpl = new draw_service_1.OvalGraphDrawServiceImpl();
    ovalGraphDrawServiceImpl.draw(ovalDraw);
    // 构建绘图对象（菱形）
    var diamondDraw = new draw_entity_1.Draw(ctx, diamondGraph);
    var diamondGraphDrawServiceImpl = new draw_service_1.DiamondGraphDrawServiceImpl();
    diamondGraphDrawServiceImpl.draw(diamondDraw);
};
showHello("canvas");

},{"./entity/coordinate/coordinate.entity":1,"./entity/draw/draw.entity":2,"./entity/graph/circle.graph.entity":3,"./entity/graph/diamond.graph.entity":4,"./entity/graph/oval.graph.entity":6,"./entity/graph/rectangle.graph.entity":7,"./entity/panel/panel.entity":8,"./service/draw.service":10,"./service/panel.service":11}],10:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.DiamondGraphDrawServiceImpl = exports.OvalGraphDrawServiceImpl = exports.CircleGraphDrawServiceImpl = exports.RectangleGraphDrawServiceImpl = void 0;
/**
  *  绘制矩形
  * @author JiangXincan
  * @date 2020/9/28 18:23
  */

var RectangleGraphDrawServiceImpl = function () {
    function RectangleGraphDrawServiceImpl() {
        _classCallCheck(this, RectangleGraphDrawServiceImpl);
    }

    _createClass(RectangleGraphDrawServiceImpl, [{
        key: "draw",
        value: function draw(_draw) {
            var ctx = _draw.panel;
            var graph = _draw.graph;
            var center = graph.center;
            ctx.beginPath();
            ctx.lineWidth = graph.lineWidth;
            ctx.strokeStyle = "red";
            ctx.strokeRect(center.x, center.y, graph.width, graph.height);
            ctx.stroke();
            return _draw;
        }
    }]);

    return RectangleGraphDrawServiceImpl;
}();

exports.RectangleGraphDrawServiceImpl = RectangleGraphDrawServiceImpl;
/**
 *  绘制圆形
 * @author JiangXincan
 * @date 2020/9/28 18:23
 */

var CircleGraphDrawServiceImpl = function () {
    function CircleGraphDrawServiceImpl() {
        _classCallCheck(this, CircleGraphDrawServiceImpl);
    }

    _createClass(CircleGraphDrawServiceImpl, [{
        key: "draw",
        value: function draw(_draw2) {
            var ctx = _draw2.panel;
            var graph = _draw2.graph;
            var center = graph.center;
            ctx.beginPath();
            ctx.strokeStyle = "lime";
            ctx.arc(center.x, center.y, graph.r, 0, Math.PI * 2, true);
            ctx.stroke();
            return _draw2;
        }
    }]);

    return CircleGraphDrawServiceImpl;
}();

exports.CircleGraphDrawServiceImpl = CircleGraphDrawServiceImpl;
/**
 *  绘制椭圆形
 * @author JiangXincan
 * @date 2020/9/28 18:23
 */

var OvalGraphDrawServiceImpl = function () {
    function OvalGraphDrawServiceImpl() {
        _classCallCheck(this, OvalGraphDrawServiceImpl);
    }

    _createClass(OvalGraphDrawServiceImpl, [{
        key: "draw",
        value: function draw(_draw3) {
            var ctx = _draw3.panel;
            var graph = _draw3.graph;
            var center = graph.center;
            ctx.beginPath();
            ctx.strokeStyle = "lime";
            ctx.ellipse(center.x, center.y, 30, 10, 0, 0, Math.PI * 2);
            ctx.stroke();
            return _draw3;
        }
    }]);

    return OvalGraphDrawServiceImpl;
}();

exports.OvalGraphDrawServiceImpl = OvalGraphDrawServiceImpl;

var DiamondGraphDrawServiceImpl = function () {
    function DiamondGraphDrawServiceImpl() {
        _classCallCheck(this, DiamondGraphDrawServiceImpl);
    }

    _createClass(DiamondGraphDrawServiceImpl, [{
        key: "draw",
        value: function draw(_draw4) {
            var ctx = _draw4.panel;
            var graph = _draw4.graph;
            var center = graph.center;
            ctx.beginPath();
            ctx.rotate(Math.PI / 180 * 45);
            ctx.strokeStyle = "blue";
            ctx.strokeRect(center.x + graph.width, center.x, graph.width, graph.height);
            ctx.stroke();
            return _draw4;
        }
    }]);

    return DiamondGraphDrawServiceImpl;
}();

exports.DiamondGraphDrawServiceImpl = DiamondGraphDrawServiceImpl;

},{}],11:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.PanelServiceImpl = void 0;

var PanelServiceImpl = function () {
    function PanelServiceImpl() {
        _classCallCheck(this, PanelServiceImpl);
    }

    _createClass(PanelServiceImpl, [{
        key: "create",
        value: function create(panel) {
            var element = document.getElementById(panel.id);
            var context = element.getContext("2d");
            element.style.width = "" + panel.width + panel.resolution;
            element.style.height = "" + panel.height + panel.resolution;
            element.style.backgroundColor = panel.backgroundColor;
            return context;
        }
    }]);

    return PanelServiceImpl;
}();

exports.PanelServiceImpl = PanelServiceImpl;

},{}]},{},[9])

//# sourceMappingURL=bundle.js.map
