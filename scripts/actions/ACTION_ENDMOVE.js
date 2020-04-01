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

        unit.setHasMoved(true);
    };
}

Constructor.prototype = ACTION;
var ACTION_ENDMOVE = new Constructor();
