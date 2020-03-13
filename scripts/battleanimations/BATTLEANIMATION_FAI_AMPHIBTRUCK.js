var Constructor = function()
{
    this.getMaxUnitCount = function()
    {
        return 5;
    };

    this.loadStandingAnimation = function(sprite, unit, defender, weapon)
    {        
        var terrainType = unit.getTerrain().getTerrainID();
        if(terrainType == "MARSH" || terrainType == "RIVER" || terrainType == "DESERT_TRY_RIVER") {
            sprite.loadSprite("FAI_AMPHIBTRUCK_WATER",  false, BATTLEANIMATION_FAI_AMPHIBIFV.getMaxUnitCount(), Qt.point(-5, 5));
            sprite.loadSprite("FAI_AMPHIBTRUCK_WATER+mask",  true, BATTLEANIMATION_FAI_AMPHIBIFV.getMaxUnitCount(), Qt.point(-5, 5));
        } else {
            sprite.loadSprite("FAI_AMPHIBTRUCK",  false, BATTLEANIMATION_FAI_AMPHIBIFV.getMaxUnitCount(), Qt.point(-5, 5));
            sprite.loadSprite("FAI_AMPHIBTRUCK+mask",  true, BATTLEANIMATION_FAI_AMPHIBIFV.getMaxUnitCount(), Qt.point(-5, 5));
        }
    };

    this.loadFireAnimation = function(sprite, unit, defender, weapon)
    {
        BATTLEANIMATION_FAI_AMPHIBTRUCK.loadStandingAnimation(sprite, unit, defender, weapon);
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
var BATTLEANIMATION_FAI_AMPHIBTRUCK = new Constructor();
