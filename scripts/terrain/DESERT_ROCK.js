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