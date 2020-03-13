var Constructor = function()
{
    this.getTerrainGroup = function()
    {
        return 1;
    };
    // loader for stuff which needs C++ Support
    this.init = function (terrain)
    {
        terrain.setTerrainName(RAILCROSS.getName());
    };
    this.getName = function()
    {
        return qsTr("Railway Crossing");
    };
    this.loadBaseTerrain = function(terrain, currentTerrainID)
    {
        if (currentTerrainID === "SNOW")
        {
            terrain.loadBaseTerrain("SNOW");
        }
        else if (currentTerrainID === "DESERT")
        {
            terrain.loadBaseTerrain("DESERT");
        }
        else
        {
            terrain.loadBaseTerrain("PLAINS");
        }
    };
    this.loadBaseSprite = function(terrain)
    {
        var surroundings = terrain.getSurroundings("RAILWAY,RAILCROSS,RAILBRIDGE,STATION",
                                                   false, false, GameEnums.Directions_Direct, true, true);
        if(surroundings.includes("+E") || surroundings.includes("+W")) {
            surroundings = "+E+W";
        } else {
            surroundings = "";
        }

        terrain.loadBaseSprite("railcross" + surroundings);
    };
    this.getMiniMapIcon = function()
    {
        return "minimap_rail";
    };
    this.getTerrainAnimationForeground = function(unit, terrain)
    {
        return "fore_rails";
    };
    this.getDescription = function()
    {
        return qsTr("Railway Crossings for land units to cross railways.");
    };

    this.getTerrainSprites = function()
    {
        // array of sprites that can be selected as fix sprites for this terrain
        return [
            "railcross",
            "railcross+E+W"
                ];
    };
};
Constructor.prototype = TERRAIN;
var RAILCROSS = new Constructor();
