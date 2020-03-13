BRIDGE.loadBaseSprite = function(terrain, currentTerrainID)
{
    var surroundings = terrain.getSurroundings("RIVER,SEA,ROUGH_SEA,REAF,BEACH,FOG,RAILBRIDGE", false, false, GameEnums.Directions_Direct, false);
    terrain.loadBaseSprite("bridge" + surroundings);
};
