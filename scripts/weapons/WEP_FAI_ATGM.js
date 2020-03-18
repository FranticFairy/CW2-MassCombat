var Constructor = function () {
    this.getName = function () {
        return qsTr("ATGM");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 15;
    };
    this.damageTable = [
        ["FAI_CASH_TRAIN",40],
        ["FAI_HOVER_HEAVY",65],
        ["FAI_HOVER_TRANS",80],
        ["FAI_HOVERCRAFT",75],
        ["FAI_IFV",80],
        ["FAI_IFV_AMPHI",80],
        ["FAI_IFV_HEAVY",75],
        ["FAI_LAUNCHER_ASM",80],
        ["FAI_LAUNCHER_RKT",80],
        ["FAI_LAUNCHER_SAM",80],
        ["FAI_LAUNCHER_WMD",90],
        ["FAI_OTH_OGRE",5],
        ["FAI_SHIP_EKRANOPLAN",25],
        ["FAI_SHIP_ORLYONOK",35],
        ["FAI_SUPP_ARMORCAR",75],
        ["FAI_SUPP_RECON",75],
        ["FAI_SUPP_SPAA",70],
        ["FAI_SUPP_SPARTY",70],
        ["FAI_SUPP_SPAT",70],
        ["FAI_TANK_BATTLE",65],
        ["FAI_TANK_HEAVY",45],
        ["FAI_TANK_HOVER",65],
        ["FAI_TANK_LIGHT",75],
        ["FAI_TANK_MECH",75],
        ["FAI_TRAIN_ARMOR",25],
        ["FAI_TRAIN_DIESEL",40],
        ["FAI_TRAIN_ELEC",40],
        ["FAI_TRAIN_GUN",45],
        ["FAI_TRAIN_STEAM",40],
        ["FAI_TRAIN_SUPPLY",40],
        ["FAI_TRANS_AMPHI",75],
        ["FAI_TRANS_HALFT",80],
        ["FAI_TRANS_SCREW",75],
        ["FAI_TRANS_TRUCK",75],
        ["FAI_UTIL_ARV",75],
        ["FAI_UTIL_AVLB",75],
        ["FAI_UTIL_DOZER",75],
        ["FAI_UTIL_RADAR",75],
        ["FAI_UTIL_SUPPLY",75],
        ["FAI_UTIL_SWEEP",75],
        
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_ATGM.damageTable, "WEP_FAI_ATGM");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_ATGM = new Constructor();
