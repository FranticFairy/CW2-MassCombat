var Constructor = function()
{
    this.getMaxUnitCount = function()
    {
        return 5;
    };

    this.loadStandingAnimation = function(sprite, unit, defender, weapon)
    {
        sprite.loadSprite("FAI_TANK",  false, BATTLEANIMATION_FAI_TANK.getMaxUnitCount(), Qt.point(-5, 5));
        sprite.loadSprite("FAI_TANK+mask",  true, BATTLEANIMATION_FAI_TANK.getMaxUnitCount(), Qt.point(-5, 5));
    };

    this.loadFireAnimation = function(sprite, unit, defender, weapon)
    {
        BATTLEANIMATION_FAI_TANK.loadStandingAnimation(sprite, unit, defender, weapon);
        offset = Qt.point(23.5, 9);
        if (weapon === 0) {
            // gun
            sprite.loadSprite("medium_shot",  false, sprite.getMaxUnitCount(), offset,
            1, 0.5, 0, 0);
        } else {
            // mg
            sprite.loadSprite("mg_shot",  false, sprite.getMaxUnitCount(), offset,
            1, 0.5, 0, 0);
    
        }
    };

    this.getFireDurationMS = function()
    {
        // the time will be scaled with animation speed inside the engine
        return 500;
    };
};

Constructor.prototype = BATTLEANIMATION;
var BATTLEANIMATION_FAI_TANK = new Constructor();
