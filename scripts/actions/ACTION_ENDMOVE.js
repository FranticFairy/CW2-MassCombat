var Constructor = function () {
    // called for loading the main sprite
    this.perform = function (unit) {
        if (unit.getUnitID() == "FAI_SUPP_GUERILLA") {
            var terrain = map.getTerrain(unit.getX(), unit.getY());
            if (terrain != null) {

                var forests = ["FOREST", "DESERT_FOREST", "SNOW_FOREST", "MARSH"];
                if (forests.indexOf(terrain.getTerrainID()) >= 0) {
                    unit.setHidden(true);
                }
                else {
                    unit.setHidden(false);
                }

            }
        }
        if(unit.getUnitID() == "FAI_SHIP_SWEEP" || unit.getUnitID() == "FAI_SHIP_SUBMARINE") {
            ACTION_PING.pingSeamine(unit, 3);
        }
        if(unit.getUnitID() == "FAI_TANK_SWEEP" || unit.getUnitID() == "FAI_SUPP_RECON" || unit.getUnitID() == "FAI_SUPP_GUERILLA") {
            ACTION_PING.pingLandmine(unit, 3);
        }
        if(unit.getUnitID() == "FAI_SHIP_DESTROYER") {
            ACTION_PING.pingSubmarine(unit, 3);
        }
        if(unit.getUnitID() == "FAI_PLANE_AEWC") {
            ACTION_PING.pingPlane(unit, 15);
        }

        ACTION_ENDMOVE.heightMagic(unit);
    };

    this.heightMagic = function (unit) {
        var terrain = map.getTerrain(unit.getX(), unit.getY());
        if (terrain != null) {
            if (
                unit.getUnitType() != GameEnums.UnitType_Naval &&
                unit.getUnitType() !== GameEnums.UnitType_Air) {

                var highlands = ["DESERT_ROCK", "MOUNTAIN", "SNOW_MOUNTAIN", "ELEVATED",
                    "ELEVATED_FLAT, ELEVATED_ROUGH, ELEVATED_FOREST, HIGH_FLAT, HIGH_ROUGH, HIGH_FOREST"];
                if (highlands.indexOf(terrain.getTerrainID()) >= 0) {
                    unit.setVisionHigh(0);
                }
                else {
                    unit.setVisionHigh(-1);
                }

            }

        }

    }
}

Constructor.prototype = ACTION;
var ACTION_ENDMOVE = new Constructor();
