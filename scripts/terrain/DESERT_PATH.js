DESERT_PATH.getTerrainAnimationForeground = function(unit, terrain)
{
    return "fore_desertrock";
};
DESERT_PATH.getTerrainAnimationBackground = function(unit, terrain)
{
    return "back_desert";
};

DESERT_PATH.init = function (terrain)
{
    terrain.setVisionHigh(0);
};