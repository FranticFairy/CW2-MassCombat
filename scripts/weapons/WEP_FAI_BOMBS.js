var Constructor = function () {
    this.getName = function () {
        return qsTr("Bombs");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 75;
    };
    this.damageTable = [
        ["FAI_FOOTSOLDIER", 115],
        ["FAI_TRUCK", 95],
        ["FAI_AMPHIBTRUCK", 95],

        ["FAI_IFV", 75],
        ["FAI_AMPHIBIFV", 75],
        ["FAI_HVYIFV", 65],

        ["FAI_FIELDAT", 75],
        ["FAI_FIELDARTY", 75],

        ["FAI_ARMORCAR", 85],
        ["FAI_RECON", 95],

        ["FAI_LAUNCHERASM", 80],
        ["FAI_LAUNCHERNUKE", 90],
        ["FAI_LAUNCHERRKT", 80],
        ["FAI_LAUNCHERSAM", 80],

        ["FAI_LIGHTTANK", 75],
        ["FAI_TANK", 65],
        ["FAI_HVYTANK", 55],
        ["FAI_HOVERTANK", 65],

        ["FAI_SPAA", 75],
        ["FAI_SPARTY", 75],

        ["FAI_FASTTRAIN", 85],
        ["FAI_HEAVYTRAIN", 85],
        ["FAI_ARMORTRAIN", 75],
        ["FAI_RAILWAYGUN", 95],

        ["FAI_HOVERCRAFT", 65],
        ["FAI_HVYHOVER", 55],
        ["FAI_TRANSHOVER", 60],

        ["FAI_BARGE", 20],

        ["FAI_BATTLESHIP", 25],
        ["FAI_CARRIER", 25],
        ["FAI_CRUISER", 45],
        ["FAI_DESTROYER", 55],
        ["FAI_COASTPATROL", 70],
        ["FAI_TRANSSHIP", 75],
        ["FAI_OGRE", 10]
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_BOMBS.damageTable, "WEP_FAI_BOMBS");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_BOMBS = new Constructor();
