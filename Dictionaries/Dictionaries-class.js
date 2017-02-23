"use strict";

function Dictionary() {
    this.dataStore = new Array();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.sort = sort;
}

function add(key, value) {
    if(!this.dataStore.hasOwnProperty(key)) {
        this.dataStore[key]  = value;
        return true;
    }

    return false;
}

function find(key, value) {
    if(this.dataStore.hasOwnProperty(key)) {
        return this.dataStore[key];
    }
    return false;
}

function remove(key) {
    delete this.dataStore[key];
}

function showAll() {
    Object.keys(this.dataStore).forEach(function(key) {
        console.log(`${key} -> ${this.dataStore[key]}`);
    }, this);
}

function sort () {
    Object.keys(this.dataStore).sort().forEach(function(key) {
        console.log(`${key} -> ${this.dataStore[key]}`);
    }, this);
}

