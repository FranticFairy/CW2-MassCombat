MOUNTAIN.loadBaseSprite = function(terrain)
{
    terrain.loadBaseSprite("mountain");   
};
MOUNTAIN.init = function (terrain)
{
    terrain.setVisionHigh(3);
};
MOUNTAIN.getBonusVision = function(unit)
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