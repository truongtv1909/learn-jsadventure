function Mouse(name){
    this.name = name;
    this.death = false;
}
Mouse.prototype.die = function(){
    this.death = true;
}

module.exports = Mouse;