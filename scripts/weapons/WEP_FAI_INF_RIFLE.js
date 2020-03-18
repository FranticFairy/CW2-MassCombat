var Constructor = function () {
    this.getName = function () {
        return qsTr("Battle Rifles");
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
        ["FAI_HOVER_HEAVY",1],
        ["FAI_HOVER_TRANS",10],
        ["FAI_HOVERCRAFT",5],
        ["FAI_IFV",10],
        ["FAI_IFV_AMPHI",10],
        ["FAI_IFV_HEAVY",5],
        ["FAI_INF_CONSCRIPT",75],
        ["FAI_INF_ELITE",55],
        ["FAI_INF_ENGINEER",75],
        ["FAI_INF_MANPAD",75],
        ["FAI_INF_MG",75],
        ["FAI_INF_RIFLE",65],
        ["FAI_INF_RPG",75],
        ["FAI_INF_SNIPER",75],
        ["FAI_LAUNCHER_ASM",50],
        ["FAI_LAUNCHER_RKT",50],
        ["FAI_LAUNCHER_SAM",50],
        ["FAI_LAUNCHER_WMD",60],
        ["FAI_SUPP_ARMORCAR",5],
        ["FAI_SUPP_RECON",45],
        ["FAI_SUPP_SPAA",0],
        ["FAI_SUPP_SPARTY",0],
        ["FAI_SUPP_SPAT",0],
        ["FAI_TANK_BATTLE",1],
        ["FAI_TANK_HOVER",1],
        ["FAI_TANK_LIGHT",5],
        ["FAI_TANK_MECH",5],
        ["FAI_TRAIN_ARMOR",5],
        ["FAI_TRAIN_DIESEL",15],
        ["FAI_TRAIN_ELEC",15],
        ["FAI_TRAIN_GUN",20],
        ["FAI_TRAIN_STEAM",15],
        ["FAI_TRAIN_SUPPLY",15],
        ["FAI_TRANS_AMPHI",45],
        ["FAI_TRANS_HALFT",50],
        ["FAI_TRANS_HORSE",65],
        ["FAI_TRANS_SCREW",45],
        ["FAI_TRANS_TRUCK",45],
        ["FAI_UTIL_ARV",5],
        ["FAI_UTIL_AVLB",5],
        ["FAI_UTIL_DOZER",5],
        ["FAI_UTIL_RADAR",5],
        ["FAI_UTIL_SUPPLY",45],
        ["FAI_UTIL_SWEEP",5],        
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_INF_RIFLE.damageTable, "WEP_FAI_INF_RIFLE");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_INF_RIFLE = new Constructor();
