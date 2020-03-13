var Constructor = function () {
    this.getName = function () {
        return qsTr("Laser Turrets");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 1;
    };
    this.damageTable = [
        ["FAI_FOOTSOLDIER", 125],
        ["FAI_TRUCK", 115],
        ["FAI_AMPHIBTRUCK", 115],

        ["FAI_IFV", 105],
        ["FAI_AMPHIBIFV", 105],
        ["FAI_HVYIFV", 105],

        ["FAI_FIELDAT", 105],
        ["FAI_FIELDARTY", 105],

        ["FAI_ARMORCAR", 50],
        ["FAI_RECON", 105],

        ["FAI_LAUNCHERASM", 70],
        ["FAI_LAUNCHERNUKE", 75],
        ["FAI_LAUNCHERRKT", 70],
        ["FAI_LAUNCHERSAM", 70],

        ["FAI_LIGHTTANK", 40],
        ["FAI_TANK", 35],
        ["FAI_HVYTANK", 25],
        ["FAI_HOVERTANK", 35],

        ["FAI_SPAA", 35],
        ["FAI_SPARTY", 45],

        ["FAI_FASTTRAIN", 55],
        ["FAI_HEAVYTRAIN", 55],
        ["FAI_ARMORTRAIN", 30],
        ["FAI_RAILWAYGUN", 60],

        ["FAI_GUNSHIP", 100],
        ["FAI_HELIINF", 110],
        ["FAI_HELIVHC", 110],

        ["FAI_AEWC", 85],
        ["FAI_BOMBER", 75],
        ["FAI_FIGHTER", 85],
        ["FAI_SEAPLANE", 100],
        ["FAI_STEALTHBOMBER", 65],
        ["FAI_STEALTHFIGHTER", 75],
        ["FAI_TANKBUSTER", 85],
        ["FAI_TRANSPLANE", 85],

        ["FAI_HOVERCRAFT", 55],
        ["FAI_HVYHOVER", 25],
        ["FAI_TRANSHOVER", 60],
        ["FAI_EKRANOPLAN", 55],

        ["FAI_BARGE", 25],
        ["FAI_OGRE", 1]
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_OGRE_TURRETS.damageTable, "WEP_FAI_OGRE_TURRETS");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_OGRE_TURRETS = new Constructor();
