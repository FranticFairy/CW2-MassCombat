var Constructor = function () {
    this.getName = function () {
        return qsTr("Small Arms");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 0;
    };
    this.damageTable = [
        ["FAI_FOOTSOLDIER", 70],
        ["FAI_TRUCK", 55],
        ["FAI_AMPHIBTRUCK", 55],

        ["FAI_IFV", 45],
        ["FAI_AMPHIBIFV", 45],
        ["FAI_HVYIFV", 40],

        ["FAI_FIELDAT", 55],
        ["FAI_FIELDARTY", 55],

        ["FAI_ARMORCAR", 10],
        ["FAI_RECON", 45],

        ["FAI_LAUNCHERASM", 25],
        ["FAI_LAUNCHERNUKE", 35],
        ["FAI_LAUNCHERRKT", 25],
        ["FAI_LAUNCHERSAM", 25],

        ["FAI_LIGHTTANK", 10],
        ["FAI_TANK", 5],
        ["FAI_HOVERTANK", 5],

        ["FAI_SPAA", 5],
        ["FAI_SPARTY", 15],

        ["FAI_FASTTRAIN", 15],
        ["FAI_HEAVYTRAIN", 15],
        ["FAI_ARMORTRAIN", 5],
        ["FAI_RAILWAYGUN", 20],

        ["FAI_GUNSHIP", 5],
        ["FAI_HELIINF", 5],
        ["FAI_HELIVHC", 5],
        
        ["FAI_HOVERCRAFT", 5]
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_INFWEP.damageTable, "WEP_FAI_INFWEP");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_INFWEP = new Constructor();
