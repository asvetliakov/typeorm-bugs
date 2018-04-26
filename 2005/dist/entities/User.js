"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let User = class User {
    constructor() {
        /**
         * User activation status
         */
        this.activated = false;
        /**
         * Do not disturb global flag for user
         */
        this.dnd = false;
        /**
         * User activation token
         *
         */
        this.activationToken = null;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("increment", { type: "integer" })
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: "tinyint",
        width: 1,
        // default: 0,
        transformer: {
            from: val => !!val,
            to: val => val,
        },
    })
], User.prototype, "activated", void 0);
__decorate([
    typeorm_1.Column({
        type: "tinyint",
        default: 0,
        width: 1,
        transformer: {
            from: val => !!val,
            to: val => val,
        },
    })
], User.prototype, "dnd", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        length: 128,
        nullable: true,
    })
], User.prototype, "activationToken", void 0);
User = __decorate([
    typeorm_1.Entity()
], User);
exports.User = User;
