var Constructor = function () {
    this.getName = function () {
        return qsTr("Laser Turrets");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 1;
    };
    this.damageTable = [
        ["FAI_CASH_PLANE",75],  
        ["FAI_CASH_SHIP",75],
        ["FAI_CASH_TRAIN",55],
        ["FAI_GUN_AA",105],
        ["FAI_GUN_ARTY",105],
        ["FAI_GUN_AT",105],
        ["FAI_HELI_ATTACK",100],
        ["FAI_HELI_GUNSHIP",90],
        ["FAI_HELI_INF",110],
        ["FAI_HELI_SCOUT",110],
        ["FAI_HELI_VHC",110],
        ["FAI_HOVER_HEAVY",35],
        ["FAI_HOVER_TRANS",45],
        ["FAI_HOVERCRAFT",40],
        ["FAI_IFV",45],
        ["FAI_IFV_AMPHI",45],
        ["FAI_IFV_HEAVY",40],
        ["FAI_INF_CONSCRIPT",135],
        ["FAI_INF_ELITE",115],
        ["FAI_INF_ENGINEER",135],
        ["FAI_INF_MANPAD",135],
        ["FAI_INF_MG",135],
        ["FAI_INF_RIFLE",125],
        ["FAI_INF_RPG",135],
        ["FAI_INF_SNIPER",135],
        ["FAI_LAUNCHER_ASM",110],
        ["FAI_LAUNCHER_RKT",110],
        ["FAI_LAUNCHER_SAM",110],
        ["FAI_LAUNCHER_WMD",120],
        ["FAI_OTH_OGRE",1],
        ["FAI_PLANE_AEWC",75],
        ["FAI_PLANE_BOMBER",75],
        ["FAI_PLANE_FIGHTER",85],
        ["FAI_PLANE_FLYBOAT",80],
        ["FAI_PLANE_GLIDER",95],
        ["FAI_PLANE_NAVJET",90],
        ["FAI_PLANE_SEAPLANE",100],
        ["FAI_PLANE_STEALTHBOMBER",65],
        ["FAI_PLANE_STEALTHFIGHTER",75],
        ["FAI_PLANE_TANKBUSTER",90],
        ["FAI_PLANE_TRANS",75],
        ["FAI_SHIP_EKRANOPLAN",55],
        ["FAI_SHIP_ORLYONOK",65],
        ["FAI_SUPP_ARMORCAR",40],
        ["FAI_SUPP_RECON",105],
        ["FAI_SUPP_SPAA",35],
        ["FAI_SUPP_SPARTY",35],
        ["FAI_SUPP_SPAT",35],
        ["FAI_TANK_BATTLE",35],
        ["FAI_TANK_HEAVY",25],
        ["FAI_TANK_HOVER",35],
        ["FAI_TANK_LIGHT",40],
        ["FAI_TANK_MECH",40],
        ["FAI_TRAIN_ARMOR",30],
        ["FAI_TRAIN_DIESEL",55],
        ["FAI_TRAIN_ELEC",55],
        ["FAI_TRAIN_GUN",60],
        ["FAI_TRAIN_STEAM",55],
        ["FAI_TRAIN_SUPPLY",55],
        ["FAI_TRANS_AMPHI",105],
        ["FAI_TRANS_HALFT",110],
        ["FAI_TRANS_HORSE",125],
        ["FAI_TRANS_SCREW",105],
        ["FAI_TRANS_TRUCK",105],
        ["FAI_UTIL_ARV",40],
        ["FAI_UTIL_AVLB",40],
        ["FAI_UTIL_DOZER",40],
        ["FAI_UTIL_RADAR",40],
        ["FAI_UTIL_SUPPLY",105],
        ["FAI_UTIL_SWEEP",40],  
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_OGRE_TURRETS.damageTable, "WEP_FAI_OGRE_TURRETS");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_OGRE_TURRETS = new Constructor();
