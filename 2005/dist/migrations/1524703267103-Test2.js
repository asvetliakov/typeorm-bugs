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
class test21524703267103 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("CREATE TABLE `another` (`id` int NOT NULL AUTO_INCREMENT, `test` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `activated` tinyint(1) NOT NULL, `dnd` tinyint(1) NOT NULL DEFAULT 0, `activationToken` varchar(128) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("DROP TABLE `user`");
            yield queryRunner.query("DROP TABLE `another`");
        });
    }
}
exports.test21524703267103 = test21524703267103;
