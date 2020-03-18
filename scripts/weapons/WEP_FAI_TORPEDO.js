var Constructor = function () {
    this.getName = function () {
        return qsTr("Torpedo");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 0;
    };
    this.damageTable = [
        ["FAI_OTH_OGRE",5],
        ["FAI_SHIP_BATTLESHIP",75],
        ["FAI_SHIP_CARRIER",75],
        ["FAI_SHIP_CRUISER",65],
        ["FAI_SHIP_DESTROYER",55],
        ["FAI_SHIP_FRIGATE",60],
        ["FAI_SHIP_INVASION",90],
        ["FAI_SHIP_LCA",105],
        ["FAI_SHIP_LIBERTY",100],
        ["FAI_SHIP_SUBMARINE",65],
        ["FAI_SHIP_SUPPLY",85],
        ["FAI_SHIP_TRANS",85],      
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_TORPEDO.damageTable, "WEP_FAI_TORPEDO");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_TORPEDO = new Constructor();
