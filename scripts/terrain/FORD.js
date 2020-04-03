var Constructor = function()
{
    this.getTerrainGroup = function()
    {
        return 1;
    };
    // loader for stuff which needs C++ Support
    this.init = function (terrain)
    {
        terrain.setTerrainName(FORD.getName());
    };

    this.getName = function()
    {
        return qsTr("Ford");
    };
	this.loadBaseTerrain = function(terrain)
    {
		terrain.loadBaseTerrain("RIVER");
    };
    this.loadBaseSprite = function(terrain, currentTerrainID)
    {
        var surroundings = terrain.getSurroundings("RIVER,SEA,ROUGH_SEA,REAF,BEACH,FOG,BRIDGE,RAILBRIDGE", false, false, GameEnums.Directions_Direct, false);
        terrain.loadBaseSprite("ford" + surroundings);
    };
    this.useTerrainAsBaseTerrain = function()
    {
        return true;
    };
    this.canBePlaced = function(x, y)
    {
        var terrain = map.getTerrain(x, y);
        if ((terrain.getTerrainID() === "FORD") ||
            (terrain.getTerrainID() === "RIVER") ||
            (terrain.getTerrainID() === "BRIDGE"))
        {
            return true;
        }
        else
        {
            return false;
        }

    };
    this.getMiniMapIcon = function()
    {
        return "minimap_bridge";
    };
    this.getTerrainAnimationForeground = function(unit, terrain)
    {
        return "fore_river";
    };
    this.getTerrainAnimationBackground = function(unit, terrain)
    {
        return "back_river";
    };
    this.getDescription = function()
    {
        return qsTr("A fordable river. Land units can cross here, but are slow and vulnerable.");
    };
    this.getTerrainSprites = function()
    {
        // array of sprites that can be selected as fix sprites for this terrain
        return ["ford",
                "ford+E",
                "ford+E+S",
                "ford+E+S+W",
                "ford+E+W",
                "ford+N",
                "ford+N+E",
                "ford+N+E+S",
                "ford+N+E+S+W",
                "ford+N+E+W",
                "ford+N+S",
                "ford+N+S+W",
                "ford+N+W",
                "ford+S",
                "ford+S+W",
                "ford+W"];
    };
};
Constructor.prototype = TERRAIN;
var FORD = new Constructor();
