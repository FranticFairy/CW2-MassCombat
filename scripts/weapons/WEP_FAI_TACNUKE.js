var Constructor = function () {
    this.getName = function () {
        return qsTr("Tactical Nuke");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 85;
    };
    this.damageTable = [
        ["FAI_CASH_TRAIN",110],
        ["FAI_GUN_AA",110],
        ["FAI_GUN_ARTY",110],
        ["FAI_GUN_AT",110],
        ["FAI_HOVER_HEAVY",110],
        ["FAI_HOVER_TRANS",115],
        ["FAI_HOVERCRAFT",110],
        ["FAI_IFV",115],
        ["FAI_IFV_AMPHI",115],
        ["FAI_IFV_HEAVY",110],
        ["FAI_INF_CONSCRIPT",145],
        ["FAI_INF_ELITE",125],
        ["FAI_INF_ENGINEER",145],
        ["FAI_INF_MANPAD",145],
        ["FAI_INF_MG",145],
        ["FAI_INF_RIFLE",135],
        ["FAI_INF_RPG",145],
        ["FAI_INF_SNIPER",145],
        ["FAI_LAUNCHER_ASM",115],
        ["FAI_LAUNCHER_RKT",115],
        ["FAI_LAUNCHER_SAM",115],
        ["FAI_LAUNCHER_WMD",125],
        ["FAI_OTH_OGRE",30],
        ["FAI_SHIP_BATTLESHIP",80],
        ["FAI_SHIP_CARRIER",80],
        ["FAI_SHIP_CRUISER",90],
        ["FAI_SHIP_DESTROYER",100],
        ["FAI_SHIP_EKRANOPLAN",95],
        ["FAI_SHIP_FRIGATE",105],
        ["FAI_SHIP_INVASION",115],
        ["FAI_SHIP_LCA",130],
        ["FAI_SHIP_LIBERTY",125],
        ["FAI_SHIP_ORLYONOK",105],
        ["FAI_SHIP_SUBMARINE",100],
        ["FAI_SHIP_SUPPLY",110],
        ["FAI_SHIP_TRANS",110],
        ["FAI_SUPP_ARMORCAR",110],
        ["FAI_SUPP_RECON",110],
        ["FAI_SUPP_SPAA",105],
        ["FAI_SUPP_SPARTY",105],
        ["FAI_SUPP_SPAT",105],
        ["FAI_TANK_BATTLE",110],
        ["FAI_TANK_HEAVY",110],
        ["FAI_TANK_HOVER",110],
        ["FAI_TANK_LIGHT",110],
        ["FAI_TANK_MECH",110],
        ["FAI_TRAIN_ARMOR",110],
        ["FAI_TRAIN_DIESEL",110],
        ["FAI_TRAIN_ELEC",110],
        ["FAI_TRAIN_GUN",110],
        ["FAI_TRAIN_STEAM",110],
        ["FAI_TRAIN_SUPPLY",110],
        ["FAI_TRANS_AMPHI",110],
        ["FAI_TRANS_HALFT",115],
        ["FAI_TRANS_HORSE",135],
        ["FAI_TRANS_SCREW",110],
        ["FAI_TRANS_TRUCK",110],
        ["FAI_UTIL_ARV",110],
        ["FAI_UTIL_AVLB",110],
        ["FAI_UTIL_DOZER",110],
        ["FAI_UTIL_RADAR",110],
        ["FAI_UTIL_SUPPLY",110],
        ["FAI_UTIL_SWEEP",110],        
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_TACNUKE.damageTable, "WEP_FAI_TACNUKE");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_TACNUKE = new Constructor();
