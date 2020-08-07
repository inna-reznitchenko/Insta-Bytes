"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServiceClient = void 0;
var axios_1 = __importDefault(require("axios"));
var baseURL = process.env['LB_USER_SERVICE_HOST'] || 'http://localhost:2006';
exports.userServiceClient = axios_1.default.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});
//# sourceMappingURL=index.js.map