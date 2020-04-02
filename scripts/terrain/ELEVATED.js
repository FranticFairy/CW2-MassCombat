var Constructor = function()
{
    this.getTerrainGroup = function()
    {
        return 1;
    };
    // loader for stuff which needs C++ Support
    this.init = function (terrain)
    {
        terrain.setVisionHigh(2);
        terrain.setTerrainName(ELEVATED.getName());
    };
    this.getName = function()
    {
        return qsTr("Hill");
    };
    this.getDefense = function()
    {
        return 1;
    };
    this.loadBaseSprite = function(terrain)
    {
        terrain.loadBaseSprite("elevated");   
    };
    this.getMiniMapIcon = function()
    {
        return "minimap_elevated";
    };
    this.getTerrainAnimationForeground = function(unit, terrain)
    {
        return "fore_plains";
    };
    this.getTerrainAnimationBackground = function(unit, terrain)
    {
        return "back_mountain";
    };
    this.getDescription = function()
    {
        return "<r>" + qsTr("Clear view. In Fog of War, Infantry unit's gain ") + "</r>" +
               "<div c='#00ff00'>" + qsTr("vision +3.") + "</div>";
    };
    this.loadOverlaySprite = function (terrain) {
        var surroundings = terrain.getSurroundings("MOUNTAIN,ELEVATED", true, true, GameEnums.Directions_Direct, false);
        if (surroundings !== "") {
            terrain.loadOverlaySprite("elevated" + surroundings);
        }    
        // load overlay south east
        if (!surroundings.includes("+S") && !surroundings.includes("+E")) {
            var surroundingsSE = terrain.getSurroundings("MOUNTAIN,ELEVATED", true, true, GameEnums.Directions_SouthEast, false);
            if (surroundingsSE !== "") {
                terrain.loadOverlaySprite("elevated" + surroundingsSE);
            }
        }
        // load overlay north east
        if (!surroundings.includes("+N") && !surroundings.includes("+E")) {
            var surroundingsNE = terrain.getSurroundings("MOUNTAIN,ELEVATED", true, true, GameEnums.Directions_NorthEast, false);
            if (surroundingsNE !== "") {
                terrain.loadOverlaySprite("elevated" + surroundingsNE);
            }
        }
        // load overlay south west
        if (!surroundings.includes("+S") && !surroundings.includes("+W")) {
            var surroundingsSW = terrain.getSurroundings("MOUNTAIN,ELEVATED", true, true, GameEnums.Directions_SouthWest, false);
            if (surroundingsSW !== "") {
                terrain.loadOverlaySprite("elevated" + surroundingsSW);
            }
        }
        // load overlay north west
        if (!surroundings.includes("+N") && !surroundings.includes("+W")) {
            var surroundingsNW = terrain.getSurroundings("MOUNTAIN,ELEVATED", true, true, GameEnums.Directions_NorthWest, false);
            if (surroundingsNW !== "") {
                terrain.loadOverlaySprite("elevated" + surroundingsNW);
            }
        }
    };
};
Constructor.prototype = TERRAIN;
var ELEVATED = new Constructor();
