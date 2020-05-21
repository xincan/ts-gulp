(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.Coordinate = void 0;

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

},{}],4:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
exports.RectangleGraph = void 0;
var graph_entity_1 = require("./graph.entity");
var coordinate_utils_1 = require("../../utils/coordinate.utils");

var RectangleGraph = function (_graph_entity_1$Graph) {
    _inherits(RectangleGraph, _graph_entity_1$Graph);

    function RectangleGraph(id, center, width, height) {
        _classCallCheck(this, RectangleGraph);

        var _this = _possibleConstructorReturn(this, (RectangleGraph.__proto__ || Object.getPrototypeOf(RectangleGraph)).call(this, id, center));

        _this._width = width;
        _this._height = height;
        _this._coordinate = coordinate_utils_1.CoordinateUtils.coordinate(center.x, center.y, width, height);
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
    }, {
        key: "coordinate",
        get: function get() {
            return this._coordinate;
        },
        set: function set(value) {
            this._coordinate = value;
        }
    }]);

    return RectangleGraph;
}(graph_entity_1.Graph);

exports.RectangleGraph = RectangleGraph;

},{"../../utils/coordinate.utils":9,"./graph.entity":3}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var draw_entity_1 = require("./entity/draw/draw.entity");
var panel_entity_1 = require("./entity/panel/panel.entity");
var panel_service_1 = require("./service/panel.service");
var rectangle_graph_entity_1 = require("./entity/graph/rectangle.graph.entity");
var draw_service_1 = require("./service/draw.service");
var coordinate_entity_1 = require("./entity/coordinate/coordinate.entity");
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
    var panel = new panel_entity_1.Panel(id, 500, 500, "#ec3b5b", "px");
    var panelServiceImpl = new panel_service_1.PanelServiceImpl();
    var ctx = panelServiceImpl.create(panel);
    // 构造矩形对象
    var center = new coordinate_entity_1.Coordinate(50, 50);
    var rectangleGraph = new rectangle_graph_entity_1.RectangleGraph("rectangle", center, 100, 50);
    // 构建绘图对象
    var draw = new draw_entity_1.Draw(ctx, rectangleGraph);
    var drawServiceImpl = new draw_service_1.DrawServiceImpl();
    var rect = drawServiceImpl.draw(draw);
    console.log(rect);
};
showHello("canvas");

},{"./entity/coordinate/coordinate.entity":1,"./entity/draw/draw.entity":2,"./entity/graph/rectangle.graph.entity":4,"./entity/panel/panel.entity":5,"./service/draw.service":7,"./service/panel.service":8}],7:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawServiceImpl = void 0;

var DrawServiceImpl = function () {
    function DrawServiceImpl() {
        _classCallCheck(this, DrawServiceImpl);
    }

    _createClass(DrawServiceImpl, [{
        key: "draw",
        value: function draw(_draw) {
            var ctx = _draw.panel;
            var graph = _draw.graph;
            var coordinate = graph.coordinate;
            // 红色矩形
            ctx.beginPath();
            ctx.lineWidth = graph.lineWidth;
            ctx.strokeStyle = "black";
            ctx.strokeRect(coordinate.x, coordinate.y, graph.width, graph.height);
            ctx.stroke();
            return _draw;
        }
    }]);

    return DrawServiceImpl;
}();

exports.DrawServiceImpl = DrawServiceImpl;

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.CoordinateUtils = void 0;
var coordinate_entity_1 = require("../entity/coordinate/coordinate.entity");

var CoordinateUtils = function () {
    function CoordinateUtils() {
        _classCallCheck(this, CoordinateUtils);
    }

    _createClass(CoordinateUtils, null, [{
        key: "coordinate",

        /**
         *  //TODO
         * @author JiangXincan
         * @date 2020/5/19 14:22
         * @return object
         * @param x 图形起始点x坐标
         * @param y 图形起始点y坐标
         * @param width 图形宽度（px）
         * @param height 图形高度（px）
         */
        value: function coordinate(x, y, width, height) {
            // width: 200   height: 150 center [250, 100]
            return new coordinate_entity_1.Coordinate(x - width / 2, y - height / 2);
        }
    }]);

    return CoordinateUtils;
}();

exports.CoordinateUtils = CoordinateUtils;

},{"../entity/coordinate/coordinate.entity":1}]},{},[6])

//# sourceMappingURL=bundle.js.map
