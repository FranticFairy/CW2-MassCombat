MOUNTAIN.loadBaseSprite = function(terrain)
{
    terrain.loadBaseSprite("highland");   
};
MOUNTAIN.init = function (terrain)
{
    terrain.setVisionHigh(3);
};
MOUNTAIN.loadBaseTerrain = function(terrain, currentTerrainID)
{
    
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
MOUNTAIN.loadOverlaySprite = function (terrain) {
    var surroundings = terrain.getSurroundings("MOUNTAIN", false, true, GameEnums.Directions_Direct, false);
    if (surroundings !== "") {
        terrain.loadOverlaySprite("highland" + surroundings);
    }    
    // load overlay south east
    if (!surroundings.includes("+S") && !surroundings.includes("+E")) {
        var surroundingsSE = terrain.getSurroundings("MOUNTAIN", false, true, GameEnums.Directions_SouthEast, false);
        if (surroundingsSE !== "") {
            terrain.loadOverlaySprite("highland" + surroundingsSE);
        }
    }
    // load overlay north east
    if (!surroundings.includes("+N") && !surroundings.includes("+E")) {
        var surroundingsNE = terrain.getSurroundings("MOUNTAIN", false, true, GameEnums.Directions_NorthEast, false);
        if (surroundingsNE !== "") {
            terrain.loadOverlaySprite("highland" + surroundingsNE);
        }
    }
    // load overlay south west
    if (!surroundings.includes("+S") && !surroundings.includes("+W")) {
        var surroundingsSW = terrain.getSurroundings("MOUNTAIN", false, true, GameEnums.Directions_SouthWest, false);
        if (surroundingsSW !== "") {
            terrain.loadOverlaySprite("highland" + surroundingsSW);
        }
    }
    // load overlay north west
    if (!surroundings.includes("+N") && !surroundings.includes("+W")) {
        var surroundingsNW = terrain.getSurroundings("MOUNTAIN", false, true, GameEnums.Directions_NorthWest, false);
        if (surroundingsNW !== "") {
            terrain.loadOverlaySprite("highland" + surroundingsNW);
        }
    }
};