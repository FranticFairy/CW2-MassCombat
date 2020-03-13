var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setFuel(70);
        unit.setMaxFuel(70);
        unit.setBaseMovementPoints(6);
        unit.setVision(2)
    };
    // called for loading the main sprite
    this.loadSprites = function(unit)
    {
        // load sprites
        unit.loadSprite("FAI_TRANSSHIP", false);
        unit.loadSprite("FAI_TRANSSHIP+mask", true);
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
        animation.loadSprite(unitID + "+mask", true, 1.5);
        animation.loadSprite(unitID, false, 1.5);
        animation.setSound("moveship.wav", -2);
        return animation;
    };
    this.getTerrainAnimationBase = function(unit, terrain)
    {
        return "base_air";
    };

    this.getTerrainAnimationForeground = function(unit, terrain)
    {
        return "fore_sea";
    };

    this.getTerrainAnimationBackground = function(unit, terrain)
    {
        return "back_sea";
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_BOAT";
    };
    this.getBaseCost = function()
    {
        return 8000;
    };
    this.getName = function()
    {
        return qsTr("Transport Ship")
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
        return ["FAI_TRUCK","FAI_AMPHIBTRUCK","FAI_IFV","FAI_AMPHIBIFV","FAI_HVYIFV","FAI_FIELDARTY","FAI_FIELDAT","FAI_LIGHTTANK","FAI_TANK","FAI_HVYTANK","FAI_HOVERTANK","FAI_SPAA","FAI_SPARTY","FAI_LAUNCHERSAM","FAI_LAUNCHERNUKE","FAI_LAUNCHERRKT","FAI_LAUNCHERASM","FAI_RECON","FAI_ARMORCAR","FAI_SUPPLYTRUCK","FAI_MECHINF","FAI_FOOTSOLDIER","FAI_AVLB","FAI_ARV","FAI_DOZER","FAI_CASH_TRUCK","FAI_SCREW","FAI_SCREW_TRANSPORT","FAI_MECH"];
    };
    this.getDescription = function()
    {
        return qsTr("For bringing your armies across the ocean. Transport Ships can carry two units, but are slow and defenceless.");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Naval;
    };
}

Constructor.prototype = UNIT;
var FAI_TRANSSHIP = new Constructor();
