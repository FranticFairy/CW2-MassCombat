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
        unit.loadSprite("FAI_HELIVHC", false);
        unit.loadSprite("FAI_HELIVHC+mask", true);
    };
    this.startOfTurn = function(unit)
    {
        // pay unit upkeep
        var fuelCosts = 2 + unit.getFuelCostModifier(Qt.point(unit.getX(), unit.getY()), 2);
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
        animation.setSound("movecopter.wav", -2);
        return animation;
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_AIR";
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
    this.getBaseCost = function()
    {
        return 8000;
    };
    this.getLoadingPlace = function()
    {
        return 1;
    };
    this.getTransportUnits = function()
    {
        return ["FAI_TRUCK","FAI_AMPHIBTRUCK","FAI_IFV","FAI_AMPHIBIFV","FAI_FIELDARTY","FAI_FIELDAT","FAI_LIGHTTANK","FAI_SPAA","FAI_SPARTY","FAI_RECON","FAI_ARMORCAR","FAI_SUPPLYTRUCK","FAI_MECHINF","FAI_DOZER","FAI_SCREW","FAI_SCREW_TRANSPORT"];
    };
    this.getName = function()
    {
        return qsTr("Transport Helicopter")
    };
    this.canMoveAndFire = function()
    {
        return true;
    };
    this.getDescription = function()
    {
        return qsTr("For when you need to get your Light Tanks and such across Mountains and Oceans. These helicopters are, however, defenceless.");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Air;
    };
}

Constructor.prototype = UNIT;
var FAI_HELIVHC = new Constructor();
