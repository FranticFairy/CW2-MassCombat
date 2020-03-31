SNOW_MOUNTAIN.getTerrainAnimationForeground = function(unit, terrain)
{
    return "fore_mountain";
};
SNOW_MOUNTAIN.getTerrainAnimationBackground = function(unit, terrain)
{
    return "back_mountain";
};
SNOW_MOUNTAIN.loadBaseSprite = function(terrain)
{
    terrain.loadBaseSprite("snow_mountain");   
};

SNOW_MOUNTAIN.init = function (terrain)
{
    terrain.setVisionHigh(3);
};