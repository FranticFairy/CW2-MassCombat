var Constructor = function () {
    this.getName = function () {
        return qsTr("Flamethrowers");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 0;
    };
    this.damageTable = [
        ["FAI_CASH_TRAIN",20],
        ["FAI_GUN_AA",80],
        ["FAI_GUN_ARTY",80],
        ["FAI_GUN_AT",80],
        ["FAI_HOVER_HEAVY",10],
        ["FAI_HOVER_TRANS",20],
        ["FAI_HOVERCRAFT",15],
        ["FAI_IFV",20],
        ["FAI_IFV_AMPHI",20],
        ["FAI_IFV_HEAVY",15],
        ["FAI_INF_CONSCRIPT",90],
        ["FAI_INF_ELITE",70],
        ["FAI_INF_ENGINEER",90],
        ["FAI_INF_MANPAD",90],
        ["FAI_INF_MG",90],
        ["FAI_INF_RIFLE",80],
        ["FAI_INF_RPG",90],
        ["FAI_INF_SNIPER",90],
        ["FAI_LAUNCHER_ASM",65],
        ["FAI_LAUNCHER_RKT",65],
        ["FAI_LAUNCHER_SAM",65],
        ["FAI_LAUNCHER_WMD",75],
        ["FAI_SUPP_ARMORCAR",15],
        ["FAI_SUPP_RECON",60],
        ["FAI_SUPP_SPAA",10],
        ["FAI_SUPP_SPARTY",10],
        ["FAI_SUPP_SPAT",10],
        ["FAI_TANK_BATTLE",10],
        ["FAI_TANK_HEAVY",5],
        ["FAI_TANK_HOVER",10],
        ["FAI_TANK_LIGHT",15],
        ["FAI_TANK_MECH",15],
        ["FAI_TRAIN_ARMOR",5],
        ["FAI_TRAIN_DIESEL",20],
        ["FAI_TRAIN_ELEC",20],
        ["FAI_TRAIN_GUN",55],
        ["FAI_TRAIN_STEAM",20],
        ["FAI_TRAIN_SUPPLY",20],
        ["FAI_TRANS_AMPHI",60],
        ["FAI_TRANS_HALFT",65],
        ["FAI_TRANS_HORSE",80],
        ["FAI_TRANS_SCREW",60],
        ["FAI_TRANS_TRUCK",60],
        ["FAI_UTIL_ARV",15],
        ["FAI_UTIL_AVLB",15],
        ["FAI_UTIL_DOZER",15],
        ["FAI_UTIL_RADAR",15],
        ["FAI_UTIL_SUPPLY",60],
        ["FAI_UTIL_SWEEP",15],        
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_INF_FLAME.damageTable, "WEP_FAI_INF_FLAME");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_INF_FLAME = new Constructor();
