var Constructor = function () {
    this.getName = function () {
        return qsTr("Ground Effect");
    };
    this.movementpointsTable = [
        ["BEACH", 1],
        ["FOG", 1],
        ["ROUGH_SEA", 3],
        ["SEA", 1],
        ["TELEPORTTILE", 0],
        ["HARBOUR", 1],
        ["TEMPORARY_HARBOUR", 1]
    ];

    this.getMovementpoints = function (terrain, unit) {
        if ((terrain.getID() === "BRIDGE" || terrain.getID() === "RAILBRIDGE") && terrain.getBaseTerrainID() === "SEA") {
            return 1;
        }
        return MOVEMENTTABLE.getMovementpointsFromTable(terrain, MOVE_FAI_GEV.movementpointsTable);
    };
};
Constructor.prototype = MOVEMENTTABLE;
var MOVE_FAI_GEV = new Constructor();
