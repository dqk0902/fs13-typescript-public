"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
class List extends Array {
    constructor() {
        super();
    }
    /* fix function fetchAll to save data in the array once the fetching is successful*/
    async fetchAll(url) {
        const jsondata = await fetch(url);
        const data = await jsondata.json();
        if ("message" in data) {
            throw Error("fetch is fail");
        }
        this.push(data);
        return data;
    }
    /* complete the function sortList() with a parameter "order", which can be
      either "asc" or "desc". Sort the array by id according to the given order and return the
      reference to the same array*/
    sortList(order) {
        if (order === "asc") {
            this.sort((a, b) => a.id - b.id);
        }
        else {
            this.sort((a, b) => b.id - a.id);
        }
    }
}
exports.List = List;
