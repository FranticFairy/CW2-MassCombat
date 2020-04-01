var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setWeapon1ID("WEP_FAI_ARTY_HVY");

        unit.setMinRange(2);
        unit.setMaxRange(4);
        unit.setAmmo1(5);
        unit.setMaxAmmo1(5);

        unit.setFuel(99);
        unit.setMaxFuel(99);
        unit.setBaseMovementPoints(2);
        unit.setVision(1);
    };
    // called for loading the main sprite
    this.loadSprites = function(unit)
    {
        // load sprites
        unit.loadSprite("FAI_GUN_ARTY", false);
        unit.loadSprite("FAI_GUN_ARTY+mask", true);
    };
    this.doWalkingAnimation = function(action)
    {
        var unit = action.getTargetUnit();
        var animation = GameAnimationFactory.createWalkingAnimation(unit, action);
        var unitID = unit.getUnitID().toLowerCase();
        animation.loadSprite(unitID + "+mask", true, 1);
        animation.loadSprite(unitID, false, 1);
        animation.setSound("movetank.wav", -2);
        return animation;
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_LIGHT_TOWED";
    };
    this.getBaseCost = function()
    {
        return 7500;
    };
    this.getName = function()
    {
        return qsTr("Heavy Field Artillery")
    };
    this.canMoveAndFire = function()
    {
        return false;
    };
    this.getDescription = function()
    {
        return qsTr("The second-biggest land based conventional guns, these heavy weapons can hurt even warships, but are vulnerable to infantry attack.");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };
}

Constructor.prototype = UNIT;
var FAI_GUN_ARTY = new Constructor();
