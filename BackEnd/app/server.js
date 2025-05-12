"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001;
app.get("/", (req, res) => {
    res.send("Hello API!");
});
app.get("/2", (req, res) => {
    res.send("Hello working backend!");
});
app.get("/3", (req, res) => {
    res.send("Hello again!");
});
app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});
