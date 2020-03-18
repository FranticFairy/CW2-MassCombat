var Constructor = function () 
{
    this.getName = function () 
    {
        return qsTr("Laser");
    };
    this.getEnviromentDamage = function (enviromentId) 
    {
        return 25;
    };
    this.damageTable = [
        ["FAI_CASH_TRAIN",85],
        ["FAI_GUN_AA",80],
        ["FAI_GUN_ARTY",80],
        ["FAI_GUN_AT",80],
        ["FAI_HOVER_HEAVY",75],
        ["FAI_HOVER_TRANS",75],
        ["FAI_HOVERCRAFT",70],
        ["FAI_IFV",75],
        ["FAI_IFV_AMPHI",75],
        ["FAI_IFV_HEAVY",70],
        ["FAI_INF_CONSCRIPT",115],
        ["FAI_INF_ELITE",95],
        ["FAI_INF_ENGINEER",115],
        ["FAI_INF_MANPAD",115],
        ["FAI_INF_MG",115],
        ["FAI_INF_RIFLE",105],
        ["FAI_INF_RPG",115],
        ["FAI_INF_SNIPER",115],
        ["FAI_LAUNCHER_ASM",90],
        ["FAI_LAUNCHER_RKT",90],
        ["FAI_LAUNCHER_SAM",90],
        ["FAI_LAUNCHER_WMD",100],
        ["FAI_OTH_OGRE",25],
        ["FAI_SUPP_ARMORCAR",70],
        ["FAI_SUPP_RECON",85],
        ["FAI_SUPP_SPAA",65],
        ["FAI_SUPP_SPARTY",65],
        ["FAI_SUPP_SPAT",65],
        ["FAI_TANK_BATTLE",75],
        ["FAI_TANK_HEAVY",55],
        ["FAI_TANK_HOVER",75],
        ["FAI_TANK_LIGHT",70],
        ["FAI_TANK_MECH",70],
        ["FAI_TRAIN_ARMOR",65],
        ["FAI_TRAIN_DIESEL",85],
        ["FAI_TRAIN_ELEC",85],
        ["FAI_TRAIN_GUN",90],
        ["FAI_TRAIN_STEAM",85],
        ["FAI_TRAIN_SUPPLY",85],
        ["FAI_TRANS_AMPHI",85],
        ["FAI_TRANS_HALFT",90],
        ["FAI_TRANS_HORSE",105],
        ["FAI_TRANS_SCREW",85],
        ["FAI_TRANS_TRUCK",85],
        ["FAI_UTIL_ARV",70],
        ["FAI_UTIL_AVLB",70],
        ["FAI_UTIL_DOZER",70],
        ["FAI_UTIL_RADAR",70],
        ["FAI_UTIL_SUPPLY",85],
        ["FAI_UTIL_SWEEP",70],        
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_MECHLASER.damageTable, "WEP_FAI_MECHLASER");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_MECHLASER = new Constructor();
