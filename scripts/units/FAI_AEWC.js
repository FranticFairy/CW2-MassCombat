var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setFuel(65);
        unit.setMaxFuel(65);
        unit.setBaseMovementPoints(6);
        unit.setVision(10)
    };
    // called for loading the main sprite
    this.loadSprites = function(unit)
    {
        // load sprites
        unit.loadSprite("FAI_AEWC", false);
        unit.loadSprite("FAI_AEWC+mask", true);
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_AIR";
    };
    this.getBaseCost = function()
    {
        return 13500;
    };
    this.getName = function()
    {
        return qsTr("AEWC")
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
    this.getDescription = function()
    {
        return qsTr("For seeing your enemies before they see you! Although unarmed, these planes can spot the enemy from miles away!");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Air;
    };
}

Constructor.prototype = UNIT;
var FAI_AEWC = new Constructor();
