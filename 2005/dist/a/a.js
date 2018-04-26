"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield typeorm_1.createConnection();
        const a = new User_1.User();
        a.activated = true;
        a.activationToken = "test";
        // a.email = "test@test.com";
        // a.password = "somepass";
        // a.firstName = "first";
        // a.lastName = "last";
        yield conn.manager.getRepository(User_1.User).save(a);
        console.log(a.activated);
        console.log(a.activationToken);
        yield conn.close();
    });
}
test();
