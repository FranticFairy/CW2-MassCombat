var Constructor = function () {
    this.getName = function () {
        return qsTr("Autocannon");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 5;
    };
    this.damageTable = [
        ["FAI_FOOTSOLDIER", 105],
        ["FAI_TRUCK", 85],
        ["FAI_AMPHIBTRUCK", 85],

        ["FAI_IFV", 70],
        ["FAI_AMPHIBIFV", 70],
        ["FAI_HVYIFV", 60],

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
        ["FAI_HOVERTANK", 15],
        ["FAI_HVYTANK", 5],

        ["FAI_SPAA", 15],
        ["FAI_SPARTY", 25],

        ["FAI_FASTTRAIN", 35],
        ["FAI_HEAVYTRAIN", 35],
        ["FAI_ARMORTRAIN", 10],
        ["FAI_RAILWAYGUN", 40],

        ["FAI_GUNSHIP", 40],
        ["FAI_HELIINF", 50],
        ["FAI_HELIVHC", 50],
        
        ["FAI_HOVERCRAFT", 15],
        ["FAI_HVYHOVER", 5],
        ["FAI_TRANSHOVER", 10],
        ["FAI_OGRE", 1]
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_AUTOCANNON.damageTable, "WEP_FAI_AUTOCANNON");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_AUTOCANNON = new Constructor();
