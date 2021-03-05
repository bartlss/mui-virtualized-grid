"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualizedMUIGrid = void 0;
var core_1 = require("@material-ui/core");
var react_1 = require("react");
var React = require('react');
var VirtualItem_1 = require("./subComponents/VirtualItem");
var VirtualizedMUIGridStyles = function (_a) {
    var palette = _a.palette;
    return core_1.createStyles({
        root: {
            backgroundColor: palette.background.paper,
            color: palette.text.primary,
            overflow: 'auto'
        },
        scrollableContainerStyle: {
            position: 'relative'
        },
        scrollableListContainerStyle: {
            position: 'relative',
            width: '100%'
        }
    });
};
exports.VirtualizedMUIGrid = react_1.forwardRef(function (_a, ref) {
    var _b = _a.classes, classes = _b === void 0 ? {} : _b, _c = _a.columns, columns = _c === void 0 ? 1 : _c, _d = _a.localizationMessages, localizationMessages = _d === void 0 ? {
        nothingToDisplay: 'Nothing to Display'
    } : _d, _e = _a.containerHeight, containerHeight = _e === void 0 ? 300 : _e, data = _a.data, listItemProps = _a.listItemProps, _f = _a.preRenderRowCount, preRenderRowCount = _f === void 0 ? 3 : _f, renderItem = _a.renderItem, _g = _a.rowHeight, rowHeight = _g === void 0 ? 300 : _g, _h = _a.spacing, spacing = _h === void 0 ? 0 : _h, _j = _a.variant, variant = _j === void 0 ? 'Grid' : _j;
    var _k = react_1.useState([]), rows = _k[0], setRows = _k[1];
    var containerRef = react_1.useRef(null);
    var currentRenderCount = 0;
    react_1.useEffect(function () {
        var rowArray = [];
        var totalRows = Math.ceil(data.length / (variant === 'List' ? 1 : columns));
        for (var a = 0; a < totalRows; a++) {
            rowArray.push(a);
        }
        setRows(rowArray);
    }, [columns, data]);
    var renderItemsForRow = function (rowData, i) {
        return variant == 'List' ? (renderItem(rowData, i)) : (React.createElement(core_1.Grid, { item: true, key: i, style: {
                height: rowHeight,
            }, xs: (12 / columns) }, renderItem(rowData, i)));
    };
    var renderRow = function (row) {
        var _a;
        var filterRowData = data.slice(currentRenderCount, currentRenderCount + columns);
        currentRenderCount = currentRenderCount + columns;
        return (React.createElement(VirtualItem_1.VirtualItem, { height: rowHeight, key: row, listItemProps: listItemProps, offset: (((_a = containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) === null || _a === void 0 ? void 0 : _a.clientHeight) || 0) +
                rowHeight * preRenderRowCount, spacing: spacing, target: containerRef === null || containerRef === void 0 ? void 0 : containerRef.current, top: row * rowHeight, variant: variant }, filterRowData.map(renderItemsForRow)));
    };
    return (React.createElement(core_1.Grid, { className: classes.root, container: true, ref: containerRef, spacing: spacing, style: {
            height: containerHeight,
        } }, (data === null || data === void 0 ? void 0 : data.length) ?
        variant == 'List' ? (React.createElement(core_1.List, { className: classes.scrollableListContainerStyle }, rows === null || rows === void 0 ? void 0 : rows.map(renderRow))) : (React.createElement(core_1.Grid, { container: true, className: classes.scrollableContainerStyle, item: true }, rows === null || rows === void 0 ? void 0 : rows.map(renderRow)))
        : (React.createElement(core_1.Grid, { container: true, justify: "center" },
            React.createElement(core_1.Grid, { item: true, xs: false },
                React.createElement(core_1.Typography, { variant: "body1" }, localizationMessages === null || localizationMessages === void 0 ? void 0 : localizationMessages.nothingToDisplay))))));
});
exports.VirtualizedMUIGrid.displayName = 'VirtualizedMUIGrid';
exports.default = core_1.withStyles(VirtualizedMUIGridStyles, {
    name: 'OdsVirtualizedMUIGrid',
})(exports.VirtualizedMUIGrid);
