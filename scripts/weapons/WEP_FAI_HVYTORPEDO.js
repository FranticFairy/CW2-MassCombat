var Constructor = function () {
    this.getName = function () {
        return qsTr("Heavy Torpedo");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 0;
    };
    this.damageTable = [
        ["FAI_OTH_OGRE",10],
        ["FAI_SHIP_BATTLESHIP",85],
        ["FAI_SHIP_CARRIER",85],
        ["FAI_SHIP_CRUISER",65],
        ["FAI_SHIP_DESTROYER",45],
        ["FAI_SHIP_FRIGATE",50],
        ["FAI_SHIP_INVASION",110],
        ["FAI_SHIP_LCA",125],
        ["FAI_SHIP_LIBERTY",120],
        ["FAI_SHIP_SUBMARINE",75],
        ["FAI_SHIP_SUPPLY",105],
        ["FAI_SHIP_TRANS",105],
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_HVYTORPEDO.damageTable, "WEP_FAI_HVYTORPEDO");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_HVYTORPEDO = new Constructor();
