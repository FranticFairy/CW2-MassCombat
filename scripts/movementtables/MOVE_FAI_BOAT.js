var Constructor = function () {
    this.getName = function () {
        return qsTr("Boat");
    };
    this.movementpointsTable = [
        ["BEACH", 1],
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
        return MOVEMENTTABLE.getMovementpointsFromTable(terrain, MOVE_FAI_BOAT.movementpointsTable);
    };
};
Constructor.prototype = MOVEMENTTABLE;
var MOVE_FAI_BOAT = new Constructor();
