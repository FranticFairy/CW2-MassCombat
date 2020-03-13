var Constructor = function()
{
    this.getTerrainGroup = function()
    {
        return 0;
    };
    // loader for stuff which needs C++ Support
    this.init = function (terrain)
    {
        terrain.setTerrainName(SKY.getName());
    };

    this.getName = function()
    {
        return qsTr("Sky");
    };
    this.loadBaseSprite = function(terrain, currentTerrainID)
    {
        terrain.loadBaseSprite("sky");
    };
    this.loadOverlaySprite = function(terrain)
    {
        var surroundings = terrain.getSurroundings("SKY", true, true, GameEnums.Directions_Direct, false);
        if (surroundings !== "")
        {
            terrain.loadOverlaySprite("sky" + surroundings);
        }
        // load river overlay
        var surroundingsSea = terrain.getSurroundings("SKY, SEA", true, false, GameEnums.Directions_All, false);
        var surroundingsSeaDirect = terrain.getSurroundings("SKY, SEA", true, false, GameEnums.Directions_Direct, false);
        var surroundingsRiver = terrain.getSurroundings("RIVER", false, false, GameEnums.Directions_Direct, false);
        var surroundingsRiver2 = terrain.getSurroundings("RIVER", false, false, GameEnums.Directions_All, false);
        // load overlay north
        if ((surroundingsRiver.includes("+N")))
        {
            var overlay = "riverending";
            overlay += "+N";
            if((surroundingsSeaDirect.includes("+E")) && surroundingsRiver2.includes("+NE")) {
                overlay += "+NE";
            }
            if((surroundingsSeaDirect.includes("+W")) && surroundingsRiver2.includes("+NW")) {
                overlay += "+NW";
            }

            terrain.loadOverlaySprite(overlay);
        }
        // load overlay east
        if ((surroundingsRiver.includes("+E")))
        {
            var overlay = "riverending";
            if((surroundingsSeaDirect.includes("+N")) && surroundingsRiver2.includes("+NE")) {
                overlay += "+NE";
            }
            overlay += "+E";

            if((surroundingsSeaDirect.includes("+S")) && surroundingsRiver2.includes("+SE")) {
                overlay += "+SE";
            }

            terrain.loadOverlaySprite(overlay);
        }
        // load overlay south
        if ((surroundingsRiver.includes("+S")))
        {
            var overlay = "riverending";
            if((surroundingsSeaDirect.includes("+E")) && surroundingsRiver2.includes("+SE")) {
                overlay += "+SE";
            }
            overlay += "+S";

            if((surroundingsSeaDirect.includes("+W")) && surroundingsRiver2.includes("+SW")) {
                overlay += "+SW";
            }

            terrain.loadOverlaySprite(overlay);
        }
        // load overlay west
        if ((surroundingsRiver.includes("+W")))
        {
            var overlay = "riverending";
            if((surroundingsSeaDirect.includes("+S")) && surroundingsRiver2.includes("+SW")) {
                overlay += "+SW";
            }
            overlay += "+W";

            if((surroundingsSeaDirect.includes("+N")) && surroundingsRiver2.includes("+NW")) {
                overlay += "+NW";
            }

            terrain.loadOverlaySprite(overlay);
        }
        // load overlay south east
        if (!surroundings.includes("+S") && !surroundings.includes("+E"))
        {
            var surroundingsSE = terrain.getSurroundings("SKY", true, true, GameEnums.Directions_SouthEast, false);
            if (surroundingsSE !== "")
            {
                terrain.loadOverlaySprite("sky" + surroundingsSE);
            }
        }
        // load overlay north east
        if (!surroundings.includes("+N") && !surroundings.includes("+E"))
        {
            var surroundingsNE = terrain.getSurroundings("SKY", true, true, GameEnums.Directions_NorthEast, false);
            if (surroundingsNE !== "")
            {
                terrain.loadOverlaySprite("sky" + surroundingsNE);
            }
        }
        // load overlay south west
        if (!surroundings.includes("+S") && !surroundings.includes("+W"))
        {
            var surroundingsSW = terrain.getSurroundings("SKY", true, true, GameEnums.Directions_SouthWest, false);
            if (surroundingsSW !== "")
            {
                terrain.loadOverlaySprite("sky" + surroundingsSW);
            }
        }
        // load overlay north west
        if (!surroundings.includes("+N") && !surroundings.includes("+W"))
        {
            var surroundingsNW = terrain.getSurroundings("SKY", true, true, GameEnums.Directions_NorthWest, false);
            if (surroundingsNW !== "")
            {
                terrain.loadOverlaySprite("sky" + surroundingsNW);
            }
        }
    };
    this.getMiniMapIcon = function()
    {
        return "minimap_sky";
    };

    this.getTerrainAnimationBase = function(unit, terrain)
    {
        return "base_air";
    };
    
    
    this.getTerrainAnimationForeground = function(unit, terrain)
    {
        return "fore_sky";
    };
    this.getTerrainAnimationBackground = function(unit, terrain)
    {
        return "back_sky";
    };

    this.getDescription = function()
    {
        return qsTr("Empty sky, only air units can fly here.");
    };
};
Constructor.prototype = TERRAIN;
var SKY = new Constructor();
