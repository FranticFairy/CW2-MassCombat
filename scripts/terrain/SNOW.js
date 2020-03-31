SNOW.getTerrainAnimationForeground = function(unit, terrain)
{
    return "fore_snow+0";
};
SNOW.getTerrainAnimationBackground = function(unit, terrain)
{
    return "back_snow";
};
SNOW.loadBaseSprite = function(terrain)
{
    terrain.loadBaseSprite("snow");   
};
SNOW.loadOverlaySprite = function(terrain)
{
};

SNOW.init = function (terrain)
{
    terrain.setVisionHigh(0);
};