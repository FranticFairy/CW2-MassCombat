var Constructor = function () {
    this.getName = function () {
        return qsTr("Anti-Tank Gun");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 25;
    };
    this.damageTable = [
        ["FAI_FOOTSOLDIER", 5],
        ["FAI_TRUCK", 25],
        ["FAI_AMPHIBTRUCK", 25],

        ["FAI_IFV", 65],
        ["FAI_AMPHIBIFV", 65],
        ["FAI_HVYIFV", 55],

        ["FAI_FIELDAT", 20],
        ["FAI_FIELDARTY", 20],

        ["FAI_ARMORCAR", 65],
        ["FAI_RECON", 55],

        ["FAI_LAUNCHERASM", 55],
        ["FAI_LAUNCHERNUKE", 60],
        ["FAI_LAUNCHERRKT", 55],
        ["FAI_LAUNCHERSAM", 55],

        ["FAI_LIGHTTANK", 90],
        ["FAI_TANK", 75],
        ["FAI_HVYTANK", 55],
        ["FAI_HOVERTANK", 75],

        ["FAI_SPAA", 75],
        ["FAI_SPARTY", 85],

        ["FAI_FASTTRAIN", 40],
        ["FAI_HEAVYTRAIN", 40],
        ["FAI_ARMORTRAIN", 25],
        ["FAI_RAILWAYGUN", 45],

        ["FAI_HOVERCRAFT", 75],
        ["FAI_HVYHOVER", 15],
        ["FAI_TRANSHOVER", 30],

        ["FAI_BARGE", 10],
        ["FAI_OGRE", 10]
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_ANTITANKGUN.damageTable, "WEP_FAI_ANTITANKGUN");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_ANTITANKGUN = new Constructor();
