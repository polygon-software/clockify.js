"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Api_1 = require("../../../../../../../Api");
var CustomField = (function (_super) {
    __extends(CustomField, _super);
    function CustomField(apiKey, workspaceId, projectId, customFieldId) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspaceId = workspaceId;
        _this.projectId = projectId;
        _this.customFieldId = customFieldId;
        return _this;
    }
    CustomField.prototype.resourceSubPath = function () {
        return "/workspaces/" + this.workspaceId + "/projects/" + this.projectId + "/custom-fields/" + this.customFieldId;
    };
    CustomField.prototype.patch = function (data) {
        return this.axiosPatch(data, {});
    };
    CustomField.prototype.delete = function () {
        return this.axiosDelete({});
    };
    return CustomField;
}(Api_1.default));
exports.default = CustomField;
//# sourceMappingURL=index.js.map