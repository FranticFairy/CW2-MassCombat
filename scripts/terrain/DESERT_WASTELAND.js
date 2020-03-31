DESERT_WASTELAND.getTerrainAnimationForeground = function(unit, terrain)
{
    return "fore_desertrock";
};
DESERT_WASTELAND.getTerrainAnimationBackground = function(unit, terrain)
{
    return "back_desert";
};
DESERT_WASTELAND.init = function (terrain)
{
    terrain.setVisionHigh(0);
};