var Constructor = function () {
    this.getName = function () {
        return qsTr("Heavy Torpedo");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 0;
    };
    this.damageTable = [
        ["FAI_BARGE", 45],

        ["FAI_BATTLESHIP", 85],
        ["FAI_CARRIER", 85],
        ["FAI_CRUISER", 65],
        ["FAI_DESTROYER", 45],
        ["FAI_COASTPATROL", 60],
        ["FAI_SUBMARINE", 75],
        ["FAI_TRANSSHIP", 105],
        ["FAI_OGRE", 10]
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_HVYTORPEDO.damageTable, "WEP_FAI_HVYTORPEDO");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_HVYTORPEDO = new Constructor();
