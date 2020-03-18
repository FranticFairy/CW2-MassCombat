var Constructor = function () {
    this.getName = function () {
        return qsTr("L. Naval Guns");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 15;
    };
    this.damageTable = [
        ["FAI_OTH_OGRE",5],
        ["FAI_SHIP_BATTLESHIP",15],
        ["FAI_SHIP_CARRIER",15],
        ["FAI_SHIP_CRUISER",35],
        ["FAI_SHIP_DESTROYER",55],
        ["FAI_SHIP_EKRANOPLAN",55],
        ["FAI_SHIP_FRIGATE",60],
        ["FAI_SHIP_INVASION",70],
        ["FAI_SHIP_LCA",85],
        ["FAI_SHIP_LIBERTY",80],
        ["FAI_SHIP_ORLYONOK",65],
        ["FAI_SHIP_SUBMARINE",15],
        ["FAI_SHIP_SUPPLY",65],
        ["FAI_SHIP_TRANS",65],
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_NAVAL_LIGHT.damageTable, "WEP_FAI_NAVAL_LIGHT");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_NAVAL_LIGHT = new Constructor();
