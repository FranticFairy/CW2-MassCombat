DESERT_FOREST.getTerrainAnimationForeground = function(unit, terrain)
{
    return "fore_desertlush";
};
DESERT_FOREST.getTerrainAnimationBackground = function(unit, terrain)
{
    return "back_desert";
};
DESERT_FOREST.getTerrainAnimationBase = function(unit, terrain)
{
    return "base_air";
};
DESERT_FOREST.loadBaseSprite = function(terrain)
{
    terrain.loadBaseSprite("desert_forest");   
};

DESERT_FOREST.init = function (terrain)
{
    terrain.setVisionHigh(1);
};