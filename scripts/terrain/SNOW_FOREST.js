SNOW_FOREST.getTerrainAnimationForeground = function(unit, terrain)
{
    return "fore_snow+0";
};
SNOW_FOREST.getTerrainAnimationBackground = function(unit, terrain)
{
    return "back_forest_snow";
};
SNOW_FOREST.getTerrainAnimationBase = function(unit, terrain)
{
    return "base_air";
};
SNOW_FOREST.loadBaseSprite = function(terrain)
{
    terrain.loadBaseSprite("snow_forest");   
};

SNOW_FOREST.init = function (terrain)
{
    terrain.setVisionHigh(1);
};