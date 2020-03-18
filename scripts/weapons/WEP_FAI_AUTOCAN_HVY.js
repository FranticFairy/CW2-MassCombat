var Constructor = function () {
    this.getName = function () {
        return qsTr("Heavy Autocannon");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 10;
    };
    this.damageTable = [
        ["FAI_CASH_TRAIN",80],
        ["FAI_GUN_AA",70],
        ["FAI_GUN_ARTY",70],
        ["FAI_GUN_AT",70],
        ["FAI_HOVER_HEAVY",75],
        ["FAI_HOVER_TRANS",90],
        ["FAI_HOVERCRAFT",85],
        ["FAI_IFV",90],
        ["FAI_IFV_AMPHI",90],
        ["FAI_IFV_HEAVY",85],
        ["FAI_INF_CONSCRIPT",110],
        ["FAI_INF_ELITE",90],
        ["FAI_INF_ENGINEER",110],
        ["FAI_INF_MANPAD",110],
        ["FAI_INF_MG",110],
        ["FAI_INF_RIFLE",100],
        ["FAI_INF_RPG",110],
        ["FAI_INF_SNIPER",110],
        ["FAI_LAUNCHER_ASM",95],
        ["FAI_LAUNCHER_RKT",95],
        ["FAI_LAUNCHER_SAM",95],
        ["FAI_LAUNCHER_WMD",105],
        ["FAI_OTH_OGRE",2],
        ["FAI_SHIP_EKRANOPLAN",65],
        ["FAI_SHIP_ORLYONOK",75],
        ["FAI_SUPP_ARMORCAR",85],
        ["FAI_SUPP_RECON",90],
        ["FAI_SUPP_SPAA",80],
        ["FAI_SUPP_SPARTY",80],
        ["FAI_SUPP_SPAT",80],
        ["FAI_TANK_BATTLE",75],
        ["FAI_TANK_HEAVY",55],
        ["FAI_TANK_HOVER",75],
        ["FAI_TANK_LIGHT",85],
        ["FAI_TANK_MECH",85],
        ["FAI_TRAIN_ARMOR",65],
        ["FAI_TRAIN_DIESEL",80],
        ["FAI_TRAIN_ELEC",80],
        ["FAI_TRAIN_GUN",90],
        ["FAI_TRAIN_STEAM",80],
        ["FAI_TRAIN_SUPPLY",80],
        ["FAI_TRANS_AMPHI",90],
        ["FAI_TRANS_HALFT",95],
        ["FAI_TRANS_HORSE",100],
        ["FAI_TRANS_SCREW",90],
        ["FAI_TRANS_TRUCK",90],
        ["FAI_UTIL_ARV",85],
        ["FAI_UTIL_AVLB",85],
        ["FAI_UTIL_DOZER",85],
        ["FAI_UTIL_RADAR",85],
        ["FAI_UTIL_SUPPLY",90],
        ["FAI_UTIL_SWEEP",85],    
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_AUTOCAN_HVY.damageTable, "WEP_FAI_AUTOCAN_HVY");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_AUTOCAN_HVY = new Constructor();
