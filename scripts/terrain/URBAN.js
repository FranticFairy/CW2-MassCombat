var Constructor = function()
{
    this.getTerrainGroup = function()
    {
        return 1;
    };
    // loader for stuff which needs C++ Support
    this.init = function (terrain)
    {
        terrain.setTerrainName(URBAN.getName());
    };
    this.getName = function()
    {
        return qsTr("Urban");
    };
    this.getDefense = function()
    {
        return 3;
    };
    this.loadBaseTerrain = function(terrain, currentTerrainID)
    {
		terrain.loadBaseTerrain("PLAINS");
    };
    this.loadBaseSprite = function(terrain)
    {
        terrain.loadBaseSprite("urban");
    };
    this.getMiniMapIcon = function()
    {
        return "minimap_building";
    };
    this.getTerrainAnimationForeground = function(unit, terrain)
    {
        return "fore_town";
    };
    this.getTerrainAnimationBackground = function(unit, terrain)
    {
        return "back_town";
    };
    this.getDescription = function()
    {
        return "<r>" + qsTr("Urban area too sparesly populated to make money") + "</r>";
    };
    this.getTerrainSprites = function()
    {
        // array of sprites that can be selected as fix sprites for this terrain
        return ["urban.png"];
    };
};
Constructor.prototype = TERRAIN;
var URBAN = new Constructor();
