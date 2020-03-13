var Constructor = function () {
    this.getName = function () {
        return qsTr("AA Autocannon");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 1;
    };
    this.damageTable = [
        ["FAI_FOOTSOLDIER", 105],
        ["FAI_TRUCK", 85],
        ["FAI_AMPHIBTRUCK", 85],

        ["FAI_IFV", 70],
        ["FAI_AMPHIBIFV", 70],
        ["FAI_HVYIFV", 65],

        ["FAI_FIELDAT", 70],
        ["FAI_FIELDARTY", 70],

        ["FAI_ARMORCAR", 30],
        ["FAI_RECON", 70],

        ["FAI_LAUNCHERASM", 50],
        ["FAI_LAUNCHERNUKE", 55],
        ["FAI_LAUNCHERRKT", 50],
        ["FAI_LAUNCHERSAM", 50],

        ["FAI_LIGHTTANK", 20],
        ["FAI_TANK", 15],
        ["FAI_HVYTANK", 5],
        ["FAI_HOVERTANK", 15],

        ["FAI_SPAA", 15],
        ["FAI_SPARTY", 25],

        ["FAI_FASTTRAIN", 35],
        ["FAI_HEAVYTRAIN", 35],
        ["FAI_ARMORTRAIN", 10],
        ["FAI_RAILWAYGUN", 40],

        ["FAI_GUNSHIP", 80],
        ["FAI_HELIINF", 90],
        ["FAI_HELIVHC", 90],

        ["FAI_AEWC", 65],
        ["FAI_BOMBER", 55],
        ["FAI_FIGHTER", 65],
        ["FAI_SEAPLANE", 80],
        ["FAI_STEALTHBOMBER", 45],
        ["FAI_STEALTHFIGHTER", 55],
        ["FAI_TANKBUSTER", 65],
        ["FAI_TRANSPLANE", 65],

        ["FAI_HOVERCRAFT", 35],
        ["FAI_HVYHOVER", 5],
        ["FAI_TRANSHOVER", 40],
        ["FAI_EKRANOPLAN", 25],

        ["FAI_BARGE", 5],
        ["FAI_OGRE", 1]
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_AAAUTOCAN.damageTable, "WEP_FAI_AAAUTOCAN");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_AAAUTOCAN = new Constructor();
