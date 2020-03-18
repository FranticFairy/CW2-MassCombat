var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setWeapon1ID("WEP_FAI_ARTY");

        unit.setMinRange(2);
        unit.setMaxRange(3);
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
        animation.loadSprite(unitID + "+mask", true, 2);
        animation.loadSprite(unitID, false, 2);
        animation.setSound("movetank.wav", -2);
        return animation;
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_LIGHT_TOWED";
    };
    this.getBaseCost = function()
    {
        return 6000;
    };
    this.getName = function()
    {
        return qsTr("Field Artillery")
    };
    this.canMoveAndFire = function()
    {
        return false;
    };
    this.getDescription = function()
    {
        return qsTr("Although static artillery is old, it's still useful. Cheaper than it's mobile cousins, these guns can still pack a good punch.");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };
}

Constructor.prototype = UNIT;
var FAI_GUN_ARTY = new Constructor();
