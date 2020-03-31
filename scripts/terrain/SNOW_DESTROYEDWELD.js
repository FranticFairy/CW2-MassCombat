SNOW_DESTROYEDWELD.getTerrainAnimationForeground = function(unit, terrain)
{
    return "fore_snow+0";
};
SNOW_DESTROYEDWELD.getTerrainAnimationBackground = function(unit, terrain)
{
    return "back_snow";
};

SNOW_DESTROYEDWELD.init = function (terrain)
{
    terrain.setVisionHigh(0);
};