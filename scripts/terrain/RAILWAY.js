var Constructor = function()
{
    this.getTerrainGroup = function()
    {
        return 1;
    };
    // loader for stuff which needs C++ Support
    this.init = function (terrain)
    {
        terrain.setTerrainName(RAILWAY.getName());
        terrain.setVisionHigh(0);
    };
    this.getName = function()
    {
        return qsTr("Railway");
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
        terrain.loadBaseSprite("railway" + surroundings);
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
        return qsTr("Railways can be troublesome for ground units to traverse, but trains need it to be able to travel.");
    };

    this.getTerrainSprites = function()
    {
        // array of sprites that can be selected as fix sprites for this terrain
        return ["railway",
                "railway+E",
                "railway+E+S",
                "railway+E+S+W",
                "railway+E+W",
                "railway+N",
                "railway+N+E",
                "railway+N+E+S",
                "railway+N+E+S+W",
                "railway+N+E+W",
                "railway+N+S",
                "railway+N+S+W",
                "railway+N+W",
                "railway+S",
                "railway+S+W",
                "railway+W"];
    };
};
Constructor.prototype = TERRAIN;
var RAILWAY = new Constructor();
