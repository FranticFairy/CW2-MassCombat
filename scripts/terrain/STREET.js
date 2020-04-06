STREET.loadBaseSprite = function(terrain)
{
    var surroundings = terrain.getSurroundings("STREET,RAILCROSS,BRIDGE,DESERT_PATH,TELEPORTTILE,AIRPORT,FACTORY,HARBOUR,HQ,LABOR,STATION,TOWN,URBAN,RUIN,MINE,TOWER",
                                               false, false, GameEnums.Directions_Direct, false, true);
    terrain.loadBaseSprite("street" + surroundings);
};

STREET.init = function (terrain)
{
    terrain.setVisionHigh(0);
};