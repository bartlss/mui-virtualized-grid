"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualItem = void 0;
var react_1 = require("react");
var React = require('react');
var core_1 = require("@material-ui/core");
var useStyles = core_1.makeStyles({
    rowGrid: {
        position: 'absolute',
        top: function (props) { return props.top; },
        left: 0,
        height: function (props) { return props.height; }
    },
    rowList: {
        position: 'absolute',
        top: function (props) { return props.top; },
        left: 0,
        height: function (props) { return props.height; },
        width: '100%'
    }
});
var VirtualItem = function (_a) {
    var children = _a.children, height = _a.height, _b = _a.listItemProps, listItemProps = _b === void 0 ? {} : _b, offset = _a.offset, spacing = _a.spacing, target = _a.target, top = _a.top, _c = _a.variant, variant = _c === void 0 ? 'Grid' : _c;
    var _d = react_1.useState(false), canShow = _d[0], setCanShow = _d[1];
    var classes = useStyles({
        top: top,
        height: height
    });
    var showTrigger = core_1.useScrollTrigger({
        disableHysteresis: true,
        threshold: top - offset,
        target: target,
    });
    var hideBottomTrigger = core_1.useScrollTrigger({
        disableHysteresis: true,
        threshold: top + offset,
        target: target,
    });
    var callback = react_1.useCallback(function () {
        setCanShow(showTrigger && !hideBottomTrigger);
    }, [showTrigger, hideBottomTrigger]);
    react_1.useEffect(function () {
        var handler = setTimeout(function () {
            callback();
        }, 1);
        return function () {
            clearTimeout(handler);
        };
    }, [callback]);
    if (canShow) {
        if (variant == 'List') {
            return (React.createElement(core_1.ListItem, __assign({}, listItemProps, { className: classes.rowList }), children));
        }
        return (React.createElement(core_1.Grid, { container: true, className: classes.rowGrid, item: true, spacing: spacing }, children));
    }
    return null;
};
exports.VirtualItem = VirtualItem;
