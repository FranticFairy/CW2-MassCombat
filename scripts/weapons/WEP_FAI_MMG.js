var Constructor = function () {
    this.getName = function () {
        return qsTr("MMG");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 0;
    };
    this.damageTable = [
        ["FAI_CASH_TRAIN",15],
        ["FAI_GUN_AA",65],
        ["FAI_GUN_ARTY",65],
        ["FAI_GUN_AT",65],
        ["FAI_HELI_ATTACK",5],
        ["FAI_HELI_INF",15],
        ["FAI_HELI_SCOUT",15],
        ["FAI_HELI_VHC",15],
        ["FAI_HOVER_HEAVY",5],
        ["FAI_HOVER_TRANS",15],
        ["FAI_HOVERCRAFT",10],
        ["FAI_IFV",15],
        ["FAI_IFV_AMPHI",15],
        ["FAI_IFV_HEAVY",10],
        ["FAI_INF_CONSCRIPT",95],
        ["FAI_INF_ELITE",75],
        ["FAI_INF_ENGINEER",95],
        ["FAI_INF_MANPAD",95],
        ["FAI_INF_MG",95],
        ["FAI_INF_RIFLE",85],
        ["FAI_INF_RPG",95],
        ["FAI_INF_SNIPER",95],
        ["FAI_LAUNCHER_ASM",60],
        ["FAI_LAUNCHER_RKT",60],
        ["FAI_LAUNCHER_SAM",60],
        ["FAI_LAUNCHER_WMD",70],
        ["FAI_SUPP_ARMORCAR",10],
        ["FAI_SUPP_RECON",55],
        ["FAI_SUPP_SPAA",5],
        ["FAI_SUPP_SPARTY",5],
        ["FAI_SUPP_SPAT",5],
        ["FAI_TANK_BATTLE",5],
        ["FAI_TANK_HOVER",5],
        ["FAI_TANK_LIGHT",10],
        ["FAI_TANK_MECH",10],
        ["FAI_TRAIN_ARMOR",5],
        ["FAI_TRAIN_DIESEL",15],
        ["FAI_TRAIN_ELEC",15],
        ["FAI_TRAIN_GUN",20],
        ["FAI_TRAIN_STEAM",15],
        ["FAI_TRAIN_SUPPLY",15],
        ["FAI_TRANS_AMPHI",55],
        ["FAI_TRANS_HALFT",60],
        ["FAI_TRANS_HORSE",85],
        ["FAI_TRANS_SCREW",55],
        ["FAI_TRANS_TRUCK",55],
        ["FAI_UTIL_ARV",10],
        ["FAI_UTIL_AVLB",10],
        ["FAI_UTIL_DOZER",10],
        ["FAI_UTIL_RADAR",10],
        ["FAI_UTIL_SUPPLY",55],
        ["FAI_UTIL_SWEEP",10],        
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_MMG.damageTable, "WEP_FAI_MMG");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_MMG = new Constructor();
