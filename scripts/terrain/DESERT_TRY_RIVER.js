DESERT_TRY_RIVER.getTerrainAnimationForeground = function(unit, terrain)
{
    return "fore_desertriver";
};
DESERT_TRY_RIVER.getTerrainAnimationBackground = function(unit, terrain)
{
    return "back_desert";
};
DESERT_TRY_RIVER.getName = function()
{
    return qsTr("Dry River");
};


DESERT_TRY_RIVER.init = function (terrain)
{
    terrain.setVisionHigh(0);
};