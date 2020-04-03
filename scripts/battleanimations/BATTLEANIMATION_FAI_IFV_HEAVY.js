var Constructor = function()
{
    this.getMaxUnitCount = function()
    {
        return 5;
    };

    this.loadStandingAnimation = function(sprite, unit, defender, weapon)
    {
        var player = unit.getOwner();
        var armyName = player.getArmy().toLowerCase();
        var identifier = "";
        if (armyName === "ge" || armyName === "yc" || armyName === "bg" || armyName === "ma") {
            identifier = "+1";
        }

        sprite.loadSprite("FAI_IFV_HEAVY" + identifier,  false, BATTLEANIMATION_FAI_IFV_HEAVY.getMaxUnitCount(), Qt.point(-5, 5));
        sprite.loadSprite("FAI_IFV_HEAVY" + identifier + "+mask",  true, BATTLEANIMATION_FAI_IFV_HEAVY.getMaxUnitCount(), Qt.point(-5, 5));
    };

    this.loadFireAnimation = function(sprite, unit, defender, weapon)
    {
        BATTLEANIMATION_FAI_IFV_HEAVY.loadStandingAnimation(sprite, unit, defender, weapon);
        offset = Qt.point(14, 9);
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
var BATTLEANIMATION_FAI_IFV_HEAVY = new Constructor();
