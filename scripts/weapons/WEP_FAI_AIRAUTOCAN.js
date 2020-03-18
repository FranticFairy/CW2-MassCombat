var Constructor = function () {
    this.getName = function () {
        return qsTr("Aircraft Autocannon");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 5;
    };
    this.damageTable = [
        ["FAI_CASH_PLANE",20],
        ["FAI_CASH_SHIP",20],
        ["FAI_CASH_TRAIN",20],
        ["FAI_GUN_AA",30],
        ["FAI_GUN_ARTY",30],
        ["FAI_GUN_AT",30],
        ["FAI_HELI_ATTACK",65],
        ["FAI_HELI_GUNSHIP",55],
        ["FAI_HELI_INF",75],
        ["FAI_HELI_SCOUT",75],
        ["FAI_HELI_VHC",75],
        ["FAI_HOVER_HEAVY",15],
        ["FAI_HOVER_TRANS",25],
        ["FAI_HOVERCRAFT",20],
        ["FAI_IFV",25],
        ["FAI_IFV_AMPHI",25],
        ["FAI_IFV_HEAVY",20],
        ["FAI_INF_CONSCRIPT",85],
        ["FAI_INF_ELITE",65],
        ["FAI_INF_ENGINEER",85],
        ["FAI_INF_MANPAD",85],
        ["FAI_INF_MG",85],
        ["FAI_INF_RIFLE",75],
        ["FAI_INF_RPG",85],
        ["FAI_INF_SNIPER",85],
        ["FAI_LAUNCHER_ASM",70],
        ["FAI_LAUNCHER_RKT",70],
        ["FAI_LAUNCHER_SAM",70],
        ["FAI_LAUNCHER_WMD",80],
        ["FAI_OTH_OGRE",1],
        ["FAI_PLANE_AEWC",20],
        ["FAI_PLANE_BOMBER",20],
        ["FAI_PLANE_FIGHTER",30],
        ["FAI_PLANE_FLYBOAT",25],
        ["FAI_PLANE_GLIDER",40],
        ["FAI_PLANE_NAVJET",35],
        ["FAI_PLANE_SEAPLANE",45],
        ["FAI_PLANE_STEALTHBOMBER",10],
        ["FAI_PLANE_STEALTHFIGHTER",20],
        ["FAI_PLANE_TANKBUSTER",35],
        ["FAI_PLANE_TRANS",20],
        ["FAI_SHIP_EKRANOPLAN",10],
        ["FAI_SHIP_ORLYONOK",20],
        ["FAI_SUPP_ARMORCAR",20],
        ["FAI_SUPP_RECON",65],
        ["FAI_SUPP_SPAA",15],
        ["FAI_SUPP_SPARTY",15],
        ["FAI_SUPP_SPAT",15],
        ["FAI_TANK_BATTLE",15],
        ["FAI_TANK_HEAVY",5],
        ["FAI_TANK_HOVER",15],
        ["FAI_TANK_LIGHT",20],
        ["FAI_TANK_MECH",20],
        ["FAI_TRAIN_ARMOR",10],
        ["FAI_TRAIN_DIESEL",20],
        ["FAI_TRAIN_ELEC",20],
        ["FAI_TRAIN_GUN",30],
        ["FAI_TRAIN_STEAM",20],
        ["FAI_TRAIN_SUPPLY",20],
        ["FAI_TRANS_AMPHI",65],
        ["FAI_TRANS_HALFT",70],
        ["FAI_TRANS_HORSE",75],
        ["FAI_TRANS_SCREW",65],
        ["FAI_TRANS_TRUCK",65],
        ["FAI_UTIL_ARV",20],
        ["FAI_UTIL_AVLB",20],
        ["FAI_UTIL_DOZER",20],
        ["FAI_UTIL_RADAR",20],
        ["FAI_UTIL_SUPPLY",65],
        ["FAI_UTIL_SWEEP",20],
        
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_AIRAUTOCAN.damageTable, "WEP_FAI_AIRAUTOCAN");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_AIRAUTOCAN = new Constructor();
