STREET.loadBaseSprite = function(terrain)
{
    var surroundings = terrain.getSurroundings("STREET,RAILCROSS,BRIDGE,DESERT_PATH",
                                               false, false, GameEnums.Directions_Direct, false, true);
    terrain.loadBaseSprite("street" + surroundings);
};

STREET.init = function (terrain)
{
    terrain.setVisionHigh(0);
};