
var RandomizedSet = function() {
    this.map = new Map();
    this.array=[];
 
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val))
        return false;
    this.map.set(val, this.array.length);
    this.array.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.map.has(val))
        return false;
    const index = this.map.get(val);
    const lastElement = this.array[this.array.length-1];
    this.array[index] = lastElement;
    this.map.set(lastElement, index);
    this.array.pop();
    this.map.delete(val)
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.map.keys().length);
    return this.array[randomIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */