DESERT_ROCK.getTerrainAnimationForeground = function(unit, terrain)
{
    return "fore_desertrock";
};
DESERT_ROCK.getTerrainAnimationBackground = function(unit, terrain)
{
    return "back_desert";
};
DESERT_ROCK.loadBaseSprite = function(terrain)
{
    terrain.loadBaseSprite("desert_rock");   
};


DESERT_ROCK.init = function (terrain)
{
    terrain.setVisionHigh(3);
};
DESERT_ROCK.getBonusVision = function(unit)
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