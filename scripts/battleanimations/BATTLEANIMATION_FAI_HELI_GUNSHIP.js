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
        if (armyName === "ge" || armyName === "bd") {
            identifier = "+1";
        } else if (armyName === "yc" || armyName === "bh" || armyName === "ac") {
            identifier = "+2";
        } else if (armyName === "ma" || armyName === "bg") {
            identifier = "+3";
        } else if (armyName === "dm") {
            identifier = "+4";
        }

        sprite.loadSprite("FAI_HELI_GUNSHIP" + identifier,  false, BATTLEANIMATION_FAI_HELI_GUNSHIP.getMaxUnitCount(), Qt.point(-5, 35));
        sprite.loadSprite("FAI_HELI_GUNSHIP" + identifier + "+mask",  true, BATTLEANIMATION_FAI_HELI_GUNSHIP.getMaxUnitCount(), Qt.point(-5, 35));
    };

    this.loadFireAnimation = function(sprite, unit, defender, weapon)
    {
        BATTLEANIMATION_FAI_HELI_GUNSHIP.loadStandingAnimation(sprite, unit, defender, weapon);
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
var BATTLEANIMATION_FAI_HELI_GUNSHIP = new Constructor();
