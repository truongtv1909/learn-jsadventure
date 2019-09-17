function Cat(name){
    this.name = name;
    this.stomach = [];
}
Cat.prototype.eat = function(m){
    this.stomach.push(m);
    m.die();
}

module.exports = Cat;