BRIDGE.loadBaseSprite = function(terrain, currentTerrainID)
{
    var surroundings = terrain.getSurroundings("RIVER,SEA,ROUGH_SEA,REAF,BEACH,FOG,RAILBRIDGE,FORD", false, false, GameEnums.Directions_Direct, false);
    terrain.loadBaseSprite("bridge" + surroundings);
};

BRIDGE.init = function (terrain)
{
    terrain.setVisionHigh(0);
};

BRIDGE.canBePlaced = function(x, y)
{
    var terrain = map.getTerrain(x, y);
    if ((terrain.getTerrainID() === "FORD") ||
        (terrain.getTerrainID() === "RIVER") ||
        (terrain.getTerrainID() === "BRIDGE") ||
        (terrain.getTerrainID() === "SEA"))
    {
        return true;
    }
    else
    {
        return false;
    }

};