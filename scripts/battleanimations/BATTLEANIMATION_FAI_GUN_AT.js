var Constructor = function()
{
    this.getMaxUnitCount = function()
    {
        return 5;
    };

    this.loadStandingAnimation = function(sprite, unit, defender, weapon)
    {
        sprite.loadSprite("FAI_GUN_AT",  false, BATTLEANIMATION_FAI_GUN_AT.getMaxUnitCount(), Qt.point(-5, 5));
        sprite.loadSprite("FAI_GUN_AT+mask",  true, BATTLEANIMATION_FAI_GUN_AT.getMaxUnitCount(), Qt.point(-5, 5));
    };

    this.loadFireAnimation = function(sprite, unit, defender, weapon)
    {
        BATTLEANIMATION_FAI_GUN_AT.loadStandingAnimation(sprite, unit, defender, weapon);
        offset = Qt.point(25, 10);
        sprite.loadSprite("medium_shot",  false, sprite.getMaxUnitCount(), offset,
        1, 0.5, 0, 0);
        offset = Qt.point(25, 9);
        sprite.loadSprite("medium_shot",  false, sprite.getMaxUnitCount(), offset,
        1, 0.5, 0, 0);
    };

    this.getFireDurationMS = function()
    {
        // the time will be scaled with animation speed inside the engine
        return 500;
    };
};

Constructor.prototype = BATTLEANIMATION;
var BATTLEANIMATION_FAI_GUN_AT = new Constructor();
