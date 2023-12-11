"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Tabs;
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Tabs = _interopRequireDefault(require("@mui/material/Tabs"));
var _Tab = _interopRequireDefault(require("@mui/material/Tab"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Tabs(props) {
  var menu = props.menu;
  var actions = props.actions;
  var tabs = menu.pages.map(function (d) {
    return d.label;
  });
  var clickTab = function clickTab(e, v) {
    var new_menu = _objectSpread({}, menu);
    new_menu.current_page = v;
    actions.menu.change(new_menu);
  };
  return /*#__PURE__*/React.createElement(_Box["default"], null, /*#__PURE__*/React.createElement(_Tabs["default"], {
    value: menu.current_page,
    onChange: clickTab
  }, tabs.map(function (tab) {
    return /*#__PURE__*/React.createElement(_Tab["default"], {
      key: tab,
      label: tab,
      sx: {
        minWidth: '66px'
      },
      value: tab
    });
  })));
}