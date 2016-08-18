function LivingEntity(entity, posX, posY) {
    this.entity = entity;
    this.posX   = posX;
    this.posY   = posY;
}

LivingEntity.prototype.draw = function(context) {
    this.entity.draw(context, this.posX, this.posY);
}

LivingEntity.prototype.live = function() {
    this.posX += Math.floor(Math.random() * 3) - 1;
}
