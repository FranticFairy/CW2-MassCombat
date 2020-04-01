SNOW_WASTELAND.getTerrainAnimationForeground = function(unit, terrain)
{
    return "fore_snow+0";
};
SNOW_WASTELAND.getTerrainAnimationBackground = function(unit, terrain)
{
    return "back_snow";
};
SNOW_WASTELAND.loadBaseSprite = function(terrain)
{
    terrain.loadBaseSprite("snow_wasteland");   
};

SNOW_WASTELAND.init = function (terrain)
{
    terrain.setVisionHigh(0);
};