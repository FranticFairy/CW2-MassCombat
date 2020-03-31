SNOW_WELD.getTerrainAnimationForeground = function(unit, terrain)
{
    return "fore_snow+0";
};
SNOW_WELD.getTerrainAnimationBackground = function(unit, terrain)
{
    return "back_snow";
};

SNOW_WELD.init = function (terrain)
{
    terrain.setVisionHigh(2);
};