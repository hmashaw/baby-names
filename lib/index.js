"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uniqueRandomArray = require("unique-random-array");
var Names_1 = require("./Names");
var DataViaRequire_1 = require("./strategy/DataViaRequire");
var names = new Names_1.Names(new DataViaRequire_1.DataViaRequire());
exports.all = names.loadNamesStrategy.names;
exports.random = uniqueRandomArray(names.loadNamesStrategy.names);
