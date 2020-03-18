var Constructor = function () {
    this.getName = function () {
        return qsTr("Heavy VMG");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 1;
    };
    this.damageTable = [
        ["FAI_CASH_TRAIN",20],
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
        ["FAI_INF_CONSCRIPT",110],
        ["FAI_INF_ELITE",90],
        ["FAI_INF_ENGINEER",110],
        ["FAI_INF_MANPAD",110],
        ["FAI_INF_MG",110],
        ["FAI_INF_RIFLE",100],
        ["FAI_INF_RPG",110],
        ["FAI_INF_SNIPER",110],
        ["FAI_LAUNCHER_ASM",70],
        ["FAI_LAUNCHER_RKT",70],
        ["FAI_LAUNCHER_SAM",70],
        ["FAI_LAUNCHER_WMD",80],
        ["FAI_SUPP_ARMORCAR",10],
        ["FAI_SUPP_RECON",65],
        ["FAI_SUPP_SPAA",5],
        ["FAI_SUPP_SPARTY",5],
        ["FAI_SUPP_SPAT",5],
        ["FAI_TANK_BATTLE",5],
        ["FAI_TANK_HOVER",5],
        ["FAI_TANK_LIGHT",10],
        ["FAI_TANK_MECH",10],
        ["FAI_TRAIN_ARMOR",5],
        ["FAI_TRAIN_DIESEL",20],
        ["FAI_TRAIN_ELEC",20],
        ["FAI_TRAIN_GUN",25],
        ["FAI_TRAIN_STEAM",20],
        ["FAI_TRAIN_SUPPLY",20],
        ["FAI_TRANS_AMPHI",65],
        ["FAI_TRANS_HALFT",70],
        ["FAI_TRANS_HORSE",100],
        ["FAI_TRANS_SCREW",65],
        ["FAI_TRANS_TRUCK",65],
        ["FAI_UTIL_ARV",10],
        ["FAI_UTIL_AVLB",10],
        ["FAI_UTIL_DOZER",10],
        ["FAI_UTIL_RADAR",10],
        ["FAI_UTIL_SUPPLY",65],
        ["FAI_UTIL_SWEEP",10],        
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_MG_HVYVMG.damageTable, "WEP_FAI_MG_HVYVMG");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_MG_HVYVMG = new Constructor();
