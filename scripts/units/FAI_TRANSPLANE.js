var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setFuel(65);
        unit.setMaxFuel(65);
        unit.setBaseMovementPoints(6);
        unit.setVision(0)
    };
    // called for loading the main sprite
    this.loadSprites = function(unit)
    {
        // load sprites
        unit.loadSprite("FAI_TRANSPLANE", false);
        unit.loadSprite("FAI_TRANSPLANE+mask", true);
    };
    this.doWalkingAnimation = function(action)
    {
        var unit = action.getTargetUnit();
        var animation = GameAnimationFactory.createWalkingAnimation(unit, action);
        var unitID = unit.getUnitID().toLowerCase();
        animation.loadSprite(unitID + "+mask", true, 2);
        animation.loadSprite(unitID, false, 2);
        animation.setSound("movetank.wav", -2);
        return animation;
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_AIR";
    };
    this.getBaseCost = function()
    {
        return 15000;
    };
    this.getName = function()
    {
        return qsTr("Transport Plane")
    };
    this.startOfTurn = function(unit)
    {
        // pay unit upkeep
        var fuelCosts = 3 + unit.getFuelCostModifier(Qt.point(unit.getX(), unit.getY()), 5);
        if (fuelCosts < 0)
        {
            fuelCosts = 0;
        }
        unit.setFuel(unit.getFuel() - fuelCosts);
    };
    this.createExplosionAnimation = function(x, y, unit)
    {
        var animation = GameAnimationFactory.createAnimation(x, y);
        animation.addSprite("explosion+air", -map.getImageSize() / 2, -map.getImageSize(), 0, 1.5);
        audio.playSound("explosion+air.wav");
        return animation;
    };
    this.doWalkingAnimation = function(action)
    {
        var unit = action.getTargetUnit();
        var animation = GameAnimationFactory.createWalkingAnimation(unit, action);
        var unitID = unit.getUnitID().toLowerCase();
        animation.loadSprite(unitID + "+mask", true, 1.5);
        animation.loadSprite(unitID, false, 1.5);
        animation.setSound("moveair.wav", -2);
        return animation;
    };
    this.canMoveAndFire = function()
    {
        return true;
    };
    this.useTerrainDefense = function()
    {
        return false;
    };

    this.getTerrainAnimationBase = function(unit, terrain)
    {
        return "base_air";
    };

    this.getTerrainAnimationForeground = function(unit, terrain)
    {
        return "";
    };

    this.getTerrainAnimationBackground = function(unit, terrain)
    {
        return "";
    };
    this.getLoadingPlace = function()
    {
        return 2;
    };
    this.getTransportUnits = function()
    {
        return ["FAI_TRUCK","FAI_AMPHIBTRUCK","FAI_IFV","FAI_AMPHIBIFV","FAI_HVYIFV","FAI_FIELDARTY","FAI_FIELDAT","FAI_LIGHTTANK","FAI_TANK","FAI_HVYTANK","FAI_HOVERTANK","FAI_SPAA","FAI_SPARTY","FAI_LAUNCHERSAM","FAI_LAUNCHERNUKE","FAI_LAUNCHERRKT","FAI_LAUNCHERASM","FAI_RECON","FAI_ARMORCAR","FAI_SUPPLYTRUCK","FAI_MECHINF","FAI_FOOTSOLDIER","FAI_AVLB","FAI_ARV","FAI_DOZER","FAI_CASH_TRUCK","FAI_SCREW","FAI_SCREW_TRANSPORT"];
    };
    this.getDescription = function()
    {
        return qsTr("Need to bring your troops to a different part of the world? Transport Planes can carry two ground units by air! They can only load and unload on Airports, though, and have no way of defending themselves...");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Air;
    };
}

Constructor.prototype = UNIT;
var FAI_TRANSPLANE = new Constructor();
