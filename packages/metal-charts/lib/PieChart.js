'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PieChart = undefined;

var _metalState = require('metal-state');

var _metalSoy = require('metal-soy');

var _metalSoy2 = _interopRequireDefault(_metalSoy);

var _Chart2 = require('./Chart');

var _Chart3 = _interopRequireDefault(_Chart2);

var _PieChartSoy = require('./PieChart.soy.js');

var _PieChartSoy2 = _interopRequireDefault(_PieChartSoy);

var _types = require('./utils/types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Pie Chart component.
 * @augments Chart
 */
var PieChart = function (_Chart) {
	_inherits(PieChart, _Chart);

	function PieChart() {
		_classCallCheck(this, PieChart);

		return _possibleConstructorReturn(this, (PieChart.__proto__ || Object.getPrototypeOf(PieChart)).apply(this, arguments));
	}

	return PieChart;
}(_Chart3.default);

PieChart.STATE = {
	/**
  * Data that will be rendered to the chart.
  * @instance
  * @memberof PieChart
  * @type {?Array|undefined}
  * @default []
  */
	columns: _metalState.Config.arrayOf(_metalState.Config.shapeOf({
		axis: _metalState.Config.oneOf(['y', 'y2']),
		class: _metalState.Config.string(),
		color: _metalState.Config.string(),
		data: _metalState.Config.array().required(),
		hide: _metalState.Config.bool(),
		id: _metalState.Config.required().string(),
		name: _metalState.Config.string(),
		regions: _metalState.Config.array(),
		type: _metalState.Config.oneOf(_types2.default.percentage),
		x: _metalState.Config.string()
	})),

	/**
  * The variety of chart that will be rendered.
  * @instance
  * @memberof PieChart
  * @type {?string|undefined}
  * @default pie
  */
	type: _metalState.Config.oneOf(_types2.default.percentage).value('pie')
};

_metalSoy2.default.register(PieChart, _PieChartSoy2.default);

exports.PieChart = PieChart;
exports.default = PieChart;
//# sourceMappingURL=PieChart.js.map