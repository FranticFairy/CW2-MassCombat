var Constructor = function()
{
    this.getMaxUnitCount = function()
    {
        return 3;
    };

    this.loadStandingAnimation = function(sprite, unit, defender, weapon)
    {
        sprite.loadSprite("FAI_PLANE_STEALTHFIGHTER",  false, BATTLEANIMATION_FAI_STEALTHFIGHTER.getMaxUnitCount(), Qt.point(-5, 35));
        sprite.loadSprite("FAI_PLANE_STEALTHFIGHTER+mask",  true, BATTLEANIMATION_FAI_STEALTHFIGHTER.getMaxUnitCount(), Qt.point(-5, 35));
    };

    this.loadFireAnimation = function(sprite, unit, defender, weapon)
    {
        BATTLEANIMATION_FAI_STEALTHFIGHTER.loadStandingAnimation(sprite, unit, defender, weapon);
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
var BATTLEANIMATION_FAI_STEALTHFIGHTER = new Constructor();
