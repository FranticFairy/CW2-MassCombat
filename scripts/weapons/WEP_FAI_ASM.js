var Constructor = function () {
    this.getName = function () {
        return qsTr("Anti-Ship Missile");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 0;
    };
    this.damageTable = [
        ["FAI_HOVER_HEAVY",55],
        ["FAI_HOVER_TRANS",70],
        ["FAI_HOVERCRAFT",65],
        ["FAI_SHIP_BATTLESHIP",55],
        ["FAI_SHIP_CARRIER",55],
        ["FAI_SHIP_CRUISER",75],
        ["FAI_SHIP_DESTROYER",85],
        ["FAI_SHIP_EKRANOPLAN",75],
        ["FAI_SHIP_FRIGATE",90],
        ["FAI_SHIP_INVASION",100],
        ["FAI_SHIP_LCA",115],
        ["FAI_SHIP_LIBERTY",110],
        ["FAI_SHIP_ORLYONOK",85],
        ["FAI_SHIP_SUBMARINE",65],
        ["FAI_SHIP_SUPPLY",95],
        ["FAI_SHIP_TRANS",95],
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_ASM.damageTable, "WEP_FAI_ASM");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_ASM = new Constructor();
