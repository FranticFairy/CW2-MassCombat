var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setFuel(70);
        unit.setMaxFuel(70);
        unit.setBaseMovementPoints(5);
        unit.setVision(2)
    };
    // called for loading the main sprite
    this.loadSprites = function(unit)
    {
        // load sprites
        unit.loadSprite("FAI_HOVER_TRANS", false);
        unit.loadSprite("FAI_HOVER_TRANS+mask", true);
    };
    this.startOfTurn = function(unit)
    {
        // pay unit upkeep
        var fuelCosts = 1 + unit.getFuelCostModifier(Qt.point(unit.getX(), unit.getY()), 1);
        if (fuelCosts < 0)
        {
            fuelCosts = 0;
        }
        unit.setFuel(unit.getFuel() - fuelCosts);
    };
    this.createExplosionAnimation = function(x, y, unit)
    {
        var animation = GameAnimationFactory.createAnimation(x, y);
        animation.addSprite("explosion+water", -map.getImageSize() / 2, -map.getImageSize(), 0, 1.5);
        audio.playSound("explosion+water.wav");
        return animation;
    };
    this.doWalkingAnimation = function(action)
    {
        var unit = action.getTargetUnit();
        var animation = GameAnimationFactory.createWalkingAnimation(unit, action);
        var unitID = unit.getUnitID().toLowerCase();
        animation.loadSprite(unitID + "+mask", true, 1);
        animation.loadSprite(unitID, false, 1);
        animation.setSound("moveship.wav", -2);
        return animation;
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_HOVER";
    };
    this.getBaseCost = function()
    {
        return 12000;
    };
    this.getName = function()
    {
        return qsTr("Transport Hovercraft")
    };
    this.canMoveAndFire = function()
    {
        return true;
    };
    this.getLoadingPlace = function()
    {
        return 2;
    };
    this.getTransportUnits = function()
    {
        return ["FAI_TRANS_TRUCK","FAI_TRANS_AMPHI","FAI_IFV","FAI_IFV_AMPHI","FAI_IFV_HEAVY","FAI_GUN_ARTY","FAI_GUN_AT","FAI_TANK_LIGHT","FAI_TANK_BATTLE","FAI_TANK_HEAVY","FAI_TANK_HOVER","FAI_SUPP_SPAA","FAI_SUPP_SPARTY","FAI_LAUNCHER_SAM","FAI_LAUNCHER_WMD","FAI_LAUNCHER_RKT","FAI_LAUNCHER_ASM","FAI_SUPP_RECON","FAI_SUPP_ARMORCAR","FAI_UTIL_SUPPLY","FAI_TRANS_HALFT","FAI_INF_RIFLE","FAI_UTIL_AVLB","FAI_UTIL_ARV","FAI_UTIL_DOZER","FAI_CASH_TRUCK","FAI_TRANS_SCREW"];
    };
    this.getDescription = function()
    {
        return qsTr("Although they're not as fast as Ekranoplans, Transport Hovercrafts have better all-terrain capabilities.");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Naval;
    };
}

Constructor.prototype = UNIT;
var FAI_HOVER_TRANS = new Constructor();
