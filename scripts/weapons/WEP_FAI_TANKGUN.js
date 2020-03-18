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
        ["FAI_CASH_TRAIN",50],
        ["FAI_GUN_AA",35],
        ["FAI_GUN_ARTY",35],
        ["FAI_GUN_AT",35],
        ["FAI_HOVER_HEAVY",55],
        ["FAI_HOVER_TRANS",75],
        ["FAI_HOVERCRAFT",70],
        ["FAI_IFV",75],
        ["FAI_IFV_AMPHI",75],
        ["FAI_IFV_HEAVY",70],
        ["FAI_LAUNCHER_ASM",80],
        ["FAI_LAUNCHER_RKT",80],
        ["FAI_LAUNCHER_SAM",80],
        ["FAI_LAUNCHER_WMD",90],
        ["FAI_SUPP_ARMORCAR",70],
        ["FAI_SUPP_RECON",75],
        ["FAI_SUPP_SPAA",65],
        ["FAI_SUPP_SPARTY",65],
        ["FAI_SUPP_SPAT",65],
        ["FAI_TANK_BATTLE",55],
        ["FAI_TANK_HEAVY",30],
        ["FAI_TANK_HOVER",55],
        ["FAI_TANK_LIGHT",70],
        ["FAI_TANK_MECH",70],
        ["FAI_TRAIN_ARMOR",35],
        ["FAI_TRAIN_DIESEL",50],
        ["FAI_TRAIN_ELEC",50],
        ["FAI_TRAIN_GUN",60],
        ["FAI_TRAIN_STEAM",50],
        ["FAI_TRAIN_SUPPLY",50],
        ["FAI_TRANS_AMPHI",75],
        ["FAI_TRANS_HALFT",80],
        ["FAI_TRANS_SCREW",75],
        ["FAI_TRANS_TRUCK",75],
        ["FAI_UTIL_ARV",70],
        ["FAI_UTIL_AVLB",70],
        ["FAI_UTIL_DOZER",70],
        ["FAI_UTIL_RADAR",70],
        ["FAI_UTIL_SUPPLY",75],
        ["FAI_UTIL_SWEEP",70],        
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_TANKGUN.damageTable, "WEP_FAI_TANKGUN");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_TANKGUN = new Constructor();
