var Constructor = function () {
    this.getName = function () {
        return qsTr("H. Tank Gun");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 25;
    };
    this.damageTable = [
        ["FAI_CASH_TRAIN",65],
        ["FAI_GUN_AA",45],
        ["FAI_GUN_ARTY",45],
        ["FAI_GUN_AT",45],
        ["FAI_HOVER_HEAVY",75],
        ["FAI_HOVER_TRANS",95],
        ["FAI_HOVERCRAFT",90],
        ["FAI_IFV",95],
        ["FAI_IFV_AMPHI",95],
        ["FAI_IFV_HEAVY",90],
        ["FAI_LAUNCHER_ASM",90],
        ["FAI_LAUNCHER_RKT",90],
        ["FAI_LAUNCHER_SAM",90],
        ["FAI_LAUNCHER_WMD",100],
        ["FAI_OTH_OGRE",15],
        ["FAI_SHIP_EKRANOPLAN",15],
        ["FAI_SHIP_ORLYONOK",25],
        ["FAI_SUPP_ARMORCAR",90],
        ["FAI_SUPP_RECON",85],
        ["FAI_SUPP_SPAA",85],
        ["FAI_SUPP_SPARTY",85],
        ["FAI_SUPP_SPAT",85],
        ["FAI_TANK_BATTLE",75],
        ["FAI_TANK_HEAVY",55],
        ["FAI_TANK_HOVER",75],
        ["FAI_TANK_LIGHT",90],
        ["FAI_TANK_MECH",90],
        ["FAI_TRAIN_ARMOR",45],
        ["FAI_TRAIN_DIESEL",65],
        ["FAI_TRAIN_ELEC",65],
        ["FAI_TRAIN_GUN",75],
        ["FAI_TRAIN_STEAM",65],
        ["FAI_TRAIN_SUPPLY",65],
        ["FAI_TRANS_AMPHI",85],
        ["FAI_TRANS_HALFT",90],
        ["FAI_TRANS_SCREW",85],
        ["FAI_TRANS_TRUCK",85],
        ["FAI_UTIL_ARV",90],
        ["FAI_UTIL_AVLB",90],
        ["FAI_UTIL_DOZER",90],
        ["FAI_UTIL_RADAR",90],
        ["FAI_UTIL_SUPPLY",85],
        ["FAI_UTIL_SWEEP",90],        
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_HEAVYTANKGUN.damageTable, "WEP_FAI_HEAVYTANKGUN");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_HEAVYTANKGUN = new Constructor();
