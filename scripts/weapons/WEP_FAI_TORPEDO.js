var Constructor = function () {
    this.getName = function () {
        return qsTr("Torpedo");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 0;
    };
    this.damageTable = [
        ["FAI_BARGE", 55],

        ["FAI_BATTLESHIP", 75],
        ["FAI_CARRIER", 75],
        ["FAI_CRUISER", 65],
        ["FAI_DESTROYER", 55],
        ["FAI_SUBMARINE", 65],
        ["FAI_COASTPATROL", 70],
        ["FAI_TRANSSHIP", 85],
        ["FAI_OGRE", 5]
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_TORPEDO.damageTable, "WEP_FAI_TORPEDO");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_TORPEDO = new Constructor();
