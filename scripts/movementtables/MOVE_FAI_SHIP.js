var Constructor = function () {
    this.getName = function () {
        return qsTr("Ship");
    };
    this.movementpointsTable = [
        ["FOG", 1],
        ["REAF", 2],
        ["ROUGH_SEA", 2],
        ["SEA", 1],
        ["TELEPORTTILE", 0],
        ["HARBOUR", 1],
        ["TEMPORARY_HARBOUR", 1],
        ["OILRIG", 2]
    ];

    this.getMovementpoints = function (terrain, unit) {
        if ((terrain.getID() === "BRIDGE" || terrain.getID() === "RAILBRIDGE") && terrain.getBaseTerrainID() === "SEA") {
            return 1;
        }
        if (unit.getUnitID() == "FAI_SHIP_SUBMARINE") {
            if (unit.getHidden() == false) {
                if (terrain.getID() == "BEACH") {

                    return 2;
                }
            }
        }
        return MOVEMENTTABLE.getMovementpointsFromTable(terrain, MOVE_FAI_SHIP.movementpointsTable);
    };
};
Constructor.prototype = MOVEMENTTABLE;
var MOVE_FAI_SHIP = new Constructor();
