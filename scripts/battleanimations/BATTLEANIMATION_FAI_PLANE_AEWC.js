var Constructor = function()
{
    this.getMaxUnitCount = function()
    {
        return 2;
    };

    this.loadStandingAnimation = function(sprite, unit, defender, weapon)
    {
        sprite.loadSprite("FAI_PLANE_AEWC",  false, BATTLEANIMATION_FAI_PLANE_AEWC.getMaxUnitCount(), Qt.point(-5, 35));
        sprite.loadSprite("FAI_PLANE_AEWC+mask",  true, BATTLEANIMATION_FAI_PLANE_AEWC.getMaxUnitCount(), Qt.point(-5, 35));
    };

    this.loadFireAnimation = function(sprite, unit, defender, weapon)
    {
        BATTLEANIMATION_FAI_AEWC.loadStandingAnimation(sprite, unit, defender, weapon);
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
var BATTLEANIMATION_FAI_PLANE_AEWC = new Constructor();
