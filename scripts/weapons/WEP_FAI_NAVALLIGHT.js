var Constructor = function () {
    this.getName = function () {
        return qsTr("L. Naval Guns");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 15;
    };
    this.damageTable = [
        ["FAI_HOVERCRAFT", 45],
        ["FAI_HVYHOVER", 35],
        ["FAI_TRANSHOVER", 55],
        ["FAI_EKRANOPLAN", 55],

        ["FAI_BARGE", 65],

        ["FAI_BATTLESHIP", 15],
        ["FAI_CARRIER", 15],
        ["FAI_CRUISER", 35],
        ["FAI_DESTROYER", 55],
        ["FAI_COASTPATROL", 70],
        ["FAI_SUBMARINE", 15],
        ["FAI_TRANSSHIP", 65],
        ["FAI_OGRE", 5]
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_NAVALLIGHT.damageTable, "WEP_FAI_NAVALLIGHT");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_NAVALLIGHT = new Constructor();
