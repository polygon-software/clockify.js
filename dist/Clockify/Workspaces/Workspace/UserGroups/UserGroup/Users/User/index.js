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
var User = (function (_super) {
    __extends(User, _super);
    function User(apiKey, workspaceId, userGroupId, userId) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspaceId = workspaceId;
        _this.userGroupId = userGroupId;
        _this.userId = userId;
        return _this;
    }
    User.prototype.resourceSubPath = function () {
        return "/workspaces/" + this.workspaceId + "/user-groups/" + this.userGroupId + "/users/" + this.userId;
    };
    User.prototype.delete = function () {
        return this.axiosDelete({});
    };
    return User;
}(Api_1.default));
exports.default = User;
//# sourceMappingURL=index.js.map