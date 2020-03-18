var Constructor = function () {
    this.getName = function () {
        return qsTr("M. Naval Guns");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 35;
    };
    this.damageTable = [
        ["FAI_OTH_OGRE",10],
        ["FAI_SHIP_BATTLESHIP",25],
        ["FAI_SHIP_CARRIER",25],
        ["FAI_SHIP_CRUISER",55],
        ["FAI_SHIP_DESTROYER",75],
        ["FAI_SHIP_EKRANOPLAN",65],
        ["FAI_SHIP_FRIGATE",80],
        ["FAI_SHIP_INVASION",60],
        ["FAI_SHIP_LCA",75],
        ["FAI_SHIP_LIBERTY",70],
        ["FAI_SHIP_ORLYONOK",75],
        ["FAI_SHIP_SUBMARINE",25],
        ["FAI_SHIP_SUPPLY",55],
        ["FAI_SHIP_TRANS",55],
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_NAVAL_MED.damageTable, "WEP_FAI_NAVAL_MED");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_NAVAL_MED = new Constructor();
