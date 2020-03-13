var Constructor = function () {
    this.getName = function () {
        return qsTr("H. Naval Guns");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 55;
    };
    this.damageTable = [
        ["FAI_FOOTSOLDIER", 105],
        ["FAI_TRUCK", 85],
        ["FAI_AMPHIBTRUCK", 85],

        ["FAI_IFV", 75],
        ["FAI_AMPHIBIFV", 75],
        ["FAI_HVYIFV", 65],

        ["FAI_FIELDAT", 65],
        ["FAI_FIELDARTY", 65],

        ["FAI_ARMORCAR", 55],
        ["FAI_RECON", 75],

        ["FAI_LAUNCHERASM", 80],
        ["FAI_LAUNCHERNUKE", 90],
        ["FAI_LAUNCHERRKT", 80],
        ["FAI_LAUNCHERSAM", 80],

        ["FAI_LIGHTTANK", 75],
        ["FAI_TANK", 55],
        ["FAI_HVYTANK", 45],
        ["FAI_HOVERTANK", 55],

        ["FAI_SPAA", 65],
        ["FAI_SPARTY", 65],

        ["FAI_FASTTRAIN", 55],
        ["FAI_HEAVYTRAIN", 55],
        ["FAI_ARMORTRAIN", 55],
        ["FAI_RAILWAYGUN", 65],

        ["FAI_HOVERCRAFT", 55],
        ["FAI_HVYHOVER", 45],
        ["FAI_TRANSHOVER", 75],
        ["FAI_EKRANOPLAN", 75],

        ["FAI_BARGE", 85],

        ["FAI_BATTLESHIP", 45],
        ["FAI_CARRIER", 55],
        ["FAI_CRUISER", 65],
        ["FAI_DESTROYER", 85],
        ["FAI_COASTPATROL", 100],
        ["FAI_SUBMARINE", 25],
        ["FAI_TRANSSHIP", 105],
        ["FAI_OGRE", 20]
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_NAVALHEAVY.damageTable, "WEP_FAI_NAVALHEAVY");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_NAVALHEAVY = new Constructor();
