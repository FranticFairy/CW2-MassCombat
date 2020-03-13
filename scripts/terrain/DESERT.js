DESERT.getTerrainAnimationForeground = function(unit, terrain)
{
    return "fore_desert";
};
DESERT.getTerrainAnimationBackground = function(unit, terrain)
{
    return "back_desert";
};
DESERT.loadBaseSprite = function(terrain)
{
    terrain.loadBaseSprite("desert");   
};
DESERT.loadOverlaySprite = function(terrain)
{
};