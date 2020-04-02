var Constructor = function()
{
    this.getTerrainGroup = function()
    {
        return 1;
    };
    // loader for stuff which needs C++ Support
    this.init = function (terrain)
    {
        terrain.setTerrainName(FARMLAND.getName());
        terrain.setVisionHigh(0);
    };
    this.getName = function()
    {
        return qsTr("Farmland");
    };
    this.getDefense = function()
    {
        return 1;
    };
    this.loadBaseTerrain = function (terrain, currentTerrainID) {
        terrain.loadBaseTerrain("PLAINS");
    };
    this.loadBaseSprite = function(terrain)
    {
        terrain.loadBaseSprite("farmland");
    };
    this.getMiniMapIcon = function()
    {
        return "minimap_farmland";
    };
    
    this.getTerrainAnimationForeground = function(unit, terrain)
    {
        return "fore_farm";
    };

    this.getDescription = function()
    {
        return "<r>" + qsTr("Rural farmland. Provides some cover, but not much.") + "</r>";
    };

    this.getTerrainSprites = function()
    {
        // array of sprites that can be selected as fix sprites for this terrain
        return ["farmland"];
    };
};
Constructor.prototype = TERRAIN;
var FARMLAND = new Constructor();
