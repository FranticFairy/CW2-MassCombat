var Constructor = function () 
{
    this.getName = function () 
    {
        return qsTr("Tank Gun");
    };
    this.getEnviromentDamage = function (enviromentId) 
    {
        return 20;
    };
    this.damageTable = [
        ["FAI_FOOTSOLDIER", 15],
        ["FAI_TRUCK", 65],
        ["FAI_AMPHIBTRUCK", 65],

        ["FAI_IFV", 85],
        ["FAI_AMPHIBIFV", 85],
        ["FAI_HVYIFV", 75],

        ["FAI_FIELDAT", 50],
        ["FAI_FIELDARTY", 50],

        ["FAI_ARMORCAR", 65],
        ["FAI_RECON", 75],

        ["FAI_LAUNCHERASM", 65],
        ["FAI_LAUNCHERNUKE", 75],
        ["FAI_LAUNCHERRKT", 65],
        ["FAI_LAUNCHERSAM", 65],

        ["FAI_LIGHTTANK", 70],
        ["FAI_TANK", 55],
        ["FAI_HVYTANK", 30],
        ["FAI_HOVERTANK", 55],

        ["FAI_SPAA", 65],
        ["FAI_SPARTY", 75],

        ["FAI_FASTTRAIN", 50],
        ["FAI_HEAVYTRAIN", 50],
        ["FAI_ARMORTRAIN", 35],
        ["FAI_RAILWAYGUN", 60],

        ["FAI_HOVERCRAFT", 55],
        ["FAI_HVYHOVER", 30],
        ["FAI_TRANSHOVER", 40],

        ["FAI_BARGE", 25]
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_TANKGUN.damageTable, "WEP_FAI_TANKGUN");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_TANKGUN = new Constructor();
