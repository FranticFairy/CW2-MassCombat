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
        if (armyName === "ge" || armyName === "bg" || armyName === "ac") {
            identifier = "+1";
        } else if (armyName === "yc" || armyName === "bh") {
            identifier = "+2";
        } else if (armyName === "ma" || armyName === "bd") {
            identifier = "+3";
        }

        sprite.loadSprite("FAI_IFV" + identifier,  false, BATTLEANIMATION_FAI_IFV.getMaxUnitCount(), Qt.point(-5, 5));
        sprite.loadSprite("FAI_IFV" + identifier + "+mask",  true, BATTLEANIMATION_FAI_IFV.getMaxUnitCount(), Qt.point(-5, 5));
    };

    this.loadFireAnimation = function(sprite, unit, defender, weapon)
    {
        BATTLEANIMATION_FAI_IFV.loadStandingAnimation(sprite, unit, defender, weapon);
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
var BATTLEANIMATION_FAI_IFV = new Constructor();
