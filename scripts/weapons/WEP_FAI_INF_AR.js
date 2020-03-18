var Constructor = function () {
    this.getName = function () {
        return qsTr("Assault Rifles");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 0;
    };
    this.damageTable = [
        ["FAI_CASH_TRAIN",25],
        ["FAI_GUN_AA",75],
        ["FAI_GUN_ARTY",75],
        ["FAI_GUN_AT",75],
        ["FAI_HELI_ATTACK",10],
        ["FAI_HELI_GUNSHIP",0],
        ["FAI_HELI_INF",20],
        ["FAI_HELI_SCOUT",20],
        ["FAI_HELI_VHC",20],
        ["FAI_HOVER_HEAVY",5],
        ["FAI_HOVER_TRANS",15],
        ["FAI_HOVERCRAFT",10],
        ["FAI_IFV",15],
        ["FAI_IFV_AMPHI",15],
        ["FAI_IFV_HEAVY",10],
        ["FAI_INF_CONSCRIPT",85],
        ["FAI_INF_ELITE",65],
        ["FAI_INF_ENGINEER",85],
        ["FAI_INF_MANPAD",85],
        ["FAI_INF_MG",85],
        ["FAI_INF_RIFLE",75],
        ["FAI_INF_RPG",85],
        ["FAI_INF_SNIPER",85],
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
        ["FAI_TANK_HEAVY",1],
        ["FAI_TANK_HOVER",5],
        ["FAI_TANK_LIGHT",10],
        ["FAI_TANK_MECH",10],
        ["FAI_TRAIN_DIESEL",25],
        ["FAI_TRAIN_ELEC",25],
        ["FAI_TRAIN_GUN",50],
        ["FAI_TRAIN_STEAM",25],
        ["FAI_TRAIN_SUPPLY",25],
        ["FAI_TRANS_AMPHI",55],
        ["FAI_TRANS_HALFT",60],
        ["FAI_TRANS_HORSE",75],
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
        return WEAPON.getDamageFromTable(unit, WEP_FAI_INF_AR.damageTable, "WEP_FAI_INF_AR");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_INF_AR = new Constructor();
