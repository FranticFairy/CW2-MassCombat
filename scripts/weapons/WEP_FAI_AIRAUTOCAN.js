var Constructor = function () {
    this.getName = function () {
        return qsTr("Aircraft Autocannon");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 5;
    };
    this.damageTable = [
        ["FAI_FOOTSOLDIER", 75],
        ["FAI_TRUCK", 55],
        ["FAI_AMPHIBTRUCK", 55],

        ["FAI_IFV", 30],
        ["FAI_AMPHIBIFV", 30],
        ["FAI_HVYIFV", 25],

        ["FAI_FIELDAT", 30],
        ["FAI_FIELDARTY", 30],

        ["FAI_ARMORCAR", 30],
        ["FAI_RECON", 65],

        ["FAI_LAUNCHERASM", 30],
        ["FAI_LAUNCHERNUKE", 30],
        ["FAI_LAUNCHERRKT", 30],
        ["FAI_LAUNCHERSAM", 30],

        ["FAI_LIGHTTANK", 20],
        ["FAI_TANK", 15],
        ["FAI_HVYTANK", 5],
        ["FAI_HOVERTANK", 15],

        ["FAI_SPAA", 5],
        ["FAI_SPARTY", 15],

        ["FAI_FASTTRAIN", 20],
        ["FAI_HEAVYTRAIN", 20],
        ["FAI_ARMORTRAIN", 10],
        ["FAI_RAILWAYGUN", 30],

        ["FAI_GUNSHIP", 65],
        ["FAI_HELIINF", 75],
        ["FAI_HELIVHC", 75],

        ["FAI_AEWC", 20],
        ["FAI_BOMBER", 20],
        ["FAI_FIGHTER", 30],
        ["FAI_SEAPLANE", 55],
        ["FAI_STEALTHBOMBER", 10],
        ["FAI_STEALTHFIGHTER", 10],
        ["FAI_TANKBUSTER", 20],
        ["FAI_TRANSPLANE", 30],

        ["FAI_HOVERCRAFT", 15],
        ["FAI_HVYHOVER", 5],
        ["FAI_TRANSHOVER", 10],
        ["FAI_EKRANOPLAN", 10],

        ["FAI_BARGE", 5],
        ["FAI_OGRE", 1]
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_AIRAUTOCAN.damageTable, "WEP_FAI_AIRAUTOCAN");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_AIRAUTOCAN = new Constructor();
