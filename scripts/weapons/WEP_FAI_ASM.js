var Constructor = function () {
    this.getName = function () {
        return qsTr("Anti-Ship Missile");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 0;
    };
    this.damageTable = [
        ["FAI_HOVERCRAFT", 65],
        ["FAI_HVYHOVER", 65],
        ["FAI_TRANSHOVER", 75],
        ["FAI_EKRANOPLAN", 75],

        ["FAI_BARGE", 85],

        ["FAI_BATTLESHIP", 55],
        ["FAI_CARRIER", 65],
        ["FAI_CRUISER", 75],
        ["FAI_DESTROYER", 85],
        ["FAI_SUBMARINE", 65],
        ["FAI_TRANSSHIP", 95]
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_ASM.damageTable, "WEP_FAI_ASM");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_ASM = new Constructor();
