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
SNOW_MOUNTAIN.getBonusVision = function(unit)
{
    var infantry = ["FAI_SUPP_RECON", "FAI_SUPP_ARMORCAR", "FAI_SUPP_GUERILLA"];
    if (infantry.indexOf(unit.getUnitID()) >= 0)
    {
        return 2;
    }
    else
    {
        return 0;
    }
};