SEA.loadOverlaySprite = function (terrain) {
    var surroundings = terrain.getSurroundings("SEA", true, true, GameEnums.Directions_Direct, false);
    if (surroundings !== "") {
        terrain.loadOverlaySprite("sea" + surroundings);
    }
    // load river overlay
    var surroundingsSea = terrain.getSurroundings("SEA", true, false, GameEnums.Directions_All, false);
    var surroundingsSeaDirect = terrain.getSurroundings("SEA", true, false, GameEnums.Directions_Direct, false);
    var surroundingsRiver = terrain.getSurroundings("RIVER,HARBOUR,FORD", false, false, GameEnums.Directions_Direct, false, true);
    var surroundingsRiver2 = terrain.getSurroundings("RIVER,HARBOUR,FORD", false, false, GameEnums.Directions_All, false, true);
    var surroundingsBridge = terrain.getSurroundings("BRIDGE",false,false, GameEnums.Directions_Direct, false, true);

    if(map != null) {
        if(surroundingsBridge.includes("+N")) {
            var detectedTerrain = map.getTerrain(terrain.getX(), terrain.getY()-1);
            if(detectedTerrain != null) {
                if(detectedTerrain.getBaseTerrainID() != "SEA") {
                    surroundingsRiver += "+N"
                }
            }
        }
        if(surroundingsBridge.includes("+E")) {
            var detectedTerrain = map.getTerrain(terrain.getX()+1, terrain.getY());
            if(detectedTerrain != null) {
                if(detectedTerrain.getBaseTerrainID() != "SEA") {
                    surroundingsRiver += "+E"
                }
            }
        }
        if(surroundingsBridge.includes("+S")) {
            var detectedTerrain = map.getTerrain(terrain.getX(), terrain.getY()+1);
            if(detectedTerrain != null) {
                if(detectedTerrain.getBaseTerrainID() != "SEA") {
                    surroundingsRiver += "+S"
                }
            }
        }
        if(surroundingsBridge.includes("+W")) {
            var detectedTerrain = map.getTerrain(terrain.getX()-1, terrain.getY());
            if(detectedTerrain != null) {
                if(detectedTerrain.getBaseTerrainID() != "SEA") {
                    surroundingsRiver += "+W"
                }
            }
        }

    }
    // load overlay north
    if ((surroundingsRiver.includes("+N"))) {
        var overlay = "riverending";
        overlay += "+N";
        if ((surroundingsSeaDirect.includes("+E")) && surroundingsRiver2.includes("+NE")) {
            overlay += "+NE";
        }
        if ((surroundingsSeaDirect.includes("+W")) && surroundingsRiver2.includes("+NW")) {
            overlay += "+NW";
        }

        terrain.loadOverlaySprite(overlay);
    }
    // load overlay east
    if ((surroundingsRiver.includes("+E"))) {
        var overlay = "riverending";
        if ((surroundingsSeaDirect.includes("+N")) && surroundingsRiver2.includes("+NE")) {
            overlay += "+NE";
        }
        overlay += "+E";

        if ((surroundingsSeaDirect.includes("+S")) && surroundingsRiver2.includes("+SE")) {
            overlay += "+SE";
        }

        terrain.loadOverlaySprite(overlay);
    }
    // load overlay south
    if ((surroundingsRiver.includes("+S"))) {
        var overlay = "riverending";
        if ((surroundingsSeaDirect.includes("+E")) && surroundingsRiver2.includes("+SE")) {
            overlay += "+SE";
        }
        overlay += "+S";

        if ((surroundingsSeaDirect.includes("+W")) && surroundingsRiver2.includes("+SW")) {
            overlay += "+SW";
        }

        terrain.loadOverlaySprite(overlay);
    }
    // load overlay west
    if ((surroundingsRiver.includes("+W"))) {
        var overlay = "riverending";
        if ((surroundingsSeaDirect.includes("+S")) && surroundingsRiver2.includes("+SW")) {
            overlay += "+SW";
        }
        overlay += "+W";

        if ((surroundingsSeaDirect.includes("+N")) && surroundingsRiver2.includes("+NW")) {
            overlay += "+NW";
        }

        terrain.loadOverlaySprite(overlay);
    }
    // load overlay south east
    if (!surroundings.includes("+S") && !surroundings.includes("+E")) {
        var surroundingsSE = terrain.getSurroundings("SEA", true, true, GameEnums.Directions_SouthEast, false);
        if (surroundingsSE !== "") {
            terrain.loadOverlaySprite("sea" + surroundingsSE);
        }
    }
    // load overlay north east
    if (!surroundings.includes("+N") && !surroundings.includes("+E")) {
        var surroundingsNE = terrain.getSurroundings("SEA", true, true, GameEnums.Directions_NorthEast, false);
        if (surroundingsNE !== "") {
            terrain.loadOverlaySprite("sea" + surroundingsNE);
        }
    }
    // load overlay south west
    if (!surroundings.includes("+S") && !surroundings.includes("+W")) {
        var surroundingsSW = terrain.getSurroundings("SEA", true, true, GameEnums.Directions_SouthWest, false);
        if (surroundingsSW !== "") {
            terrain.loadOverlaySprite("sea" + surroundingsSW);
        }
    }
    // load overlay north west
    if (!surroundings.includes("+N") && !surroundings.includes("+W")) {
        var surroundingsNW = terrain.getSurroundings("SEA", true, true, GameEnums.Directions_NorthWest, false);
        if (surroundingsNW !== "") {
            terrain.loadOverlaySprite("sea" + surroundingsNW);
        }
    }
};

SEA.init = function (terrain)
{
    terrain.setVisionHigh(0);
};