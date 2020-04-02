var Constructor = function()
{
    this.getTerrainGroup = function()
    {
        return 1;
    };
    // loader for stuff which needs C++ Support
    this.init = function (terrain)
    {
        terrain.setTerrainName(MARSH.getName());
        terrain.setVisionHigh(0);
    };
    this.getName = function()
    {
        return qsTr("Marsh");
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
        terrain.loadBaseSprite("marsh");
    };
    this.getMiniMapIcon = function()
    {
        return "minimap_marsh";
    };
    
    this.getTerrainAnimationForeground = function(unit, terrain)
    {
        return "fore_swamp";
    };
    this.getTerrainAnimationBackground = function(unit, terrain)
    {
        return "back_forest+0";
    };

    this.getDescription = function()
    {
        return "<r>" + qsTr("Swampy terrain that hinders unit movement. Good luck getting through here without specialist vehicles.") + "</r>";
    };

    this.getTerrainSprites = function()
    {
        // array of sprites that can be selected as fix sprites for this terrain
        return ["marsh"];
    };
};
Constructor.prototype = TERRAIN;
var MARSH = new Constructor();
