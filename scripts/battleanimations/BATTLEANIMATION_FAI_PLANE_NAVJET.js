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
        if (armyName === "ge" || armyName === "ma" || armyName === "bg" || armyName === "dm") {
            identifier = "+1";
        } else if (armyName === "bh" || armyName === "ac") {
            identifier = "+2";
        }

        sprite.loadSprite("FAI_PLANE_NAVJET" + identifier,  false, BATTLEANIMATION_FAI_PLANE_NAVJET.getMaxUnitCount(), Qt.point(-5, 35));
        sprite.loadSprite("FAI_PLANE_NAVJET" + identifier + "+mask",  true, BATTLEANIMATION_FAI_PLANE_NAVJET.getMaxUnitCount(), Qt.point(-5, 35));
    };

    this.loadFireAnimation = function(sprite, unit, defender, weapon)
    {
        BATTLEANIMATION_FAI_PLANE_NAVJET.loadStandingAnimation(sprite, unit, defender, weapon);
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
var BATTLEANIMATION_FAI_PLANE_NAVJET = new Constructor();
