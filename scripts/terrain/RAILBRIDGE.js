var Constructor = function()
{
    this.getTerrainGroup = function()
    {
        return 1;
    };
    // loader for stuff which needs C++ Support
    this.init = function (terrain)
    {
        terrain.setTerrainName(RAILBRIDGE.getName());
    };

    this.getName = function()
    {
        return qsTr("Railbridge");
    };
	this.loadBaseTerrain = function(terrain)
    {
		terrain.loadBaseTerrain("RIVER");
    };
    this.loadBaseSprite = function(terrain, currentTerrainID)
    {
        var surroundings = terrain.getSurroundings("RIVER,SEA,ROUGH_SEA,REAF,BEACH,FOG,BRIDGE", false, false, GameEnums.Directions_Direct, false);
        terrain.loadBaseSprite("railbridge" + surroundings);
    };
    this.useTerrainAsBaseTerrain = function()
    {
        return true;
    };
    this.canBePlaced = function(x, y)
    {
        var terrain = map.getTerrain(x, y);
        if ((terrain.getTerrainID() === "SEA") ||
            (terrain.getTerrainID() === "RIVER") ||
            (terrain.getTerrainID() === "RAILBRIDGE"))
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
        return "minimap_railbridge";
    };
    this.getTerrainAnimationForeground = function(unit, terrain)
    {
        return "fore_railbridge";
    };
    this.getTerrainAnimationBackground = function(unit, terrain)
    {
        return "back_bridge";
    };
    this.getDescription = function()
    {
        return qsTr("Railway bridges function like regular bridges, but can be traversed by trains, and can be troublesome for other ground vehicles.");
    };
    this.getTerrainSprites = function()
    {
        // array of sprites that can be selected as fix sprites for this terrain
        return ["railbridge",
                "railbridge+E",
                "railbridge+E+S",
                "railbridge+E+S+W",
                "railbridge+E+W",
                "railbridge+N",
                "railbridge+N+E",
                "railbridge+N+E+S",
                "railbridge+N+E+S+W",
                "railbridge+N+E+W",
                "railbridge+N+S",
                "railbridge+N+S+W",
                "railbridge+N+W",
                "railbridge+S",
                "railbridge+S+W",
                "railbridge+W"];
    };
};
Constructor.prototype = TERRAIN;
var RAILBRIDGE = new Constructor();
