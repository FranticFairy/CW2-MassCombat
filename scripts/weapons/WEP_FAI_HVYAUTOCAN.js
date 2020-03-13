var Constructor = function () {
    this.getName = function () {
        return qsTr("Heavy Autocannon");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 10;
    };
    this.damageTable = [
        ["FAI_FOOTSOLDIER", 100],
        ["FAI_TRUCK", 80],
        ["FAI_AMPHIBTRUCK", 80],

        ["FAI_IFV", 90],
        ["FAI_AMPHIBIFV", 90],
        ["FAI_HVYIFV", 80],

        ["FAI_FIELDAT", 70],
        ["FAI_FIELDARTY", 70],

        ["FAI_ARMORCAR", 80],
        ["FAI_RECON", 90],

        ["FAI_LAUNCHERASM", 100],
        ["FAI_LAUNCHERNUKE", 110],
        ["FAI_LAUNCHERRKT", 100],
        ["FAI_LAUNCHERSAM", 100],

        ["FAI_LIGHTTANK", 85],
        ["FAI_TANK", 75],
        ["FAI_HVYTANK", 55],
        ["FAI_HOVERTANK", 75],

        ["FAI_SPAA", 75],
        ["FAI_SPARTY", 75],

        ["FAI_FASTTRAIN", 80],
        ["FAI_HEAVYTRAIN", 80],
        ["FAI_ARMORTRAIN", 65],
        ["FAI_RAILWAYGUN", 90],

        ["FAI_SEAPLANE", 5],

        ["FAI_HOVERCRAFT", 75],
        ["FAI_HVYHOVER", 55],
        ["FAI_TRANSHOVER", 70],
        ["FAI_EKRANOPLAN", 65],

        ["FAI_BARGE", 85],
        ["FAI_OGRE", 2]
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_HVYAUTOCAN.damageTable, "WEP_FAI_HVYAUTOCAN");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_HVYAUTOCAN = new Constructor();
