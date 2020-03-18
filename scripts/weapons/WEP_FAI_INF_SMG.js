var Constructor = function () {
    this.getName = function () {
        return qsTr("Sub-machine Guns");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 0;
    };
    this.damageTable = [
        ["FAI_CASH_TRAIN",5],
        ["FAI_GUN_AA",55],
        ["FAI_GUN_ARTY",55],
        ["FAI_GUN_AT",55],
        ["FAI_HELI_ATTACK",1],
        ["FAI_HELI_INF",11],
        ["FAI_HELI_SCOUT",11],
        ["FAI_HELI_VHC",11],
        ["FAI_HOVER_TRANS",6],
        ["FAI_HOVERCRAFT",1],
        ["FAI_IFV",6],
        ["FAI_IFV_AMPHI",6],
        ["FAI_IFV_HEAVY",1],
        ["FAI_INF_CONSCRIPT",65],
        ["FAI_INF_ELITE",45],
        ["FAI_INF_ENGINEER",65],
        ["FAI_INF_MANPAD",65],
        ["FAI_INF_MG",65],
        ["FAI_INF_RIFLE",55],
        ["FAI_INF_RPG",65],
        ["FAI_INF_SNIPER",65],
        ["FAI_LAUNCHER_ASM",40],
        ["FAI_LAUNCHER_RKT",40],
        ["FAI_LAUNCHER_SAM",40],
        ["FAI_LAUNCHER_WMD",50],
        ["FAI_SUPP_ARMORCAR",1],
        ["FAI_SUPP_RECON",35],
        ["FAI_TANK_LIGHT",1],
        ["FAI_TANK_MECH",1],
        ["FAI_TRAIN_DIESEL",5],
        ["FAI_TRAIN_ELEC",5],
        ["FAI_TRAIN_GUN",30],
        ["FAI_TRAIN_STEAM",5],
        ["FAI_TRAIN_SUPPLY",5],
        ["FAI_TRANS_AMPHI",35],
        ["FAI_TRANS_HALFT",40],
        ["FAI_TRANS_HORSE",55],
        ["FAI_TRANS_SCREW",35],
        ["FAI_TRANS_TRUCK",35],
        ["FAI_UTIL_ARV",1],
        ["FAI_UTIL_AVLB",1],
        ["FAI_UTIL_DOZER",1],
        ["FAI_UTIL_RADAR",1],
        ["FAI_UTIL_SUPPLY",35],
        ["FAI_UTIL_SWEEP",1],        
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_INF_SMG.damageTable, "WEP_FAI_INF_SMG");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_INF_SMG = new Constructor();
