var Constructor = function()
{
    this.getMaxUnitCount = function()
    {
        return 1;
    };

    this.loadStandingAnimation = function(sprite, unit, defender, weapon)
    {
        sprite.loadSprite("FAI_TRAIN_DIESEL",  false, BATTLEANIMATION_FAI_TRAIN_DIESEL.getMaxUnitCount(), Qt.point(0, 42));
        sprite.loadSprite("FAI_TRAIN_DIESEL+mask",  true, BATTLEANIMATION_FAI_TRAIN_DIESEL.getMaxUnitCount(), Qt.point(0, 42));
    };

    this.loadFireAnimation = function(sprite, unit, defender, weapon)
    {
        BATTLEANIMATION_FAI_TRAIN_DIESEL.loadStandingAnimation(sprite, unit, defender, weapon);
        // if (weapon === 0) {
        //     // // gun
    
        //     sprite.loadSound("tank_shot.wav", 1, "mods/fai_total_overhaul/sounds/", 0);
        // } else {
        //     // mg
        //     sprite.loadSound("hmg.wav", 1, "mods/fai_total_overhaul/sounds/", 0);
    
        // }
    };

    this.getFireDurationMS = function()
    {
        // the time will be scaled with animation speed inside the engine
        return 500;
    };
};

Constructor.prototype = BATTLEANIMATION;
var BATTLEANIMATION_FAI_TRAIN_DIESEL = new Constructor();
