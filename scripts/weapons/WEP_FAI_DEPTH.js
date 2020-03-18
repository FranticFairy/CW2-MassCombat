var Constructor = function () {
    this.getName = function () {
        return qsTr("Depth Charges");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 0;
    };
    this.damageTable = [
        ["FAI_SHIP_SUBMARINE",75],
        ["FAI_OTH_OGRE",3],
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_DEPTH.damageTable, "WEP_FAI_DEPTH");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_DEPTH = new Constructor();
