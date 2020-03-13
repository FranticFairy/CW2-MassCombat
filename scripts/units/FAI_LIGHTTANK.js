var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setWeapon1ID("WEP_FAI_LIGHTTANKGUN");
        unit.setWeapon2ID("WEP_FAI_VMG");

        unit.setAmmo1(9);
        unit.setMaxAmmo1(9);
        unit.setAmmo2(10);
        unit.setMaxAmmo2(10);
        unit.setFuel(80);
        unit.setMaxFuel(80);
        unit.setBaseMovementPoints(7);
        unit.setVision(3)
    };
    // called for loading the main sprite
    this.loadSprites = function(unit)
    {
        // load sprites
        unit.loadSprite("FAI_LIGHTTANK", false);
        unit.loadSprite("FAI_LIGHTTANK+mask", true);
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
        return "MOVE_FAI_LIGHT_TREAD";
    };
    this.getBaseCost = function()
    {
        return 6000;
    };
    this.getName = function()
    {
        return qsTr("Light Tank")
    };
    this.canMoveAndFire = function()
    {
        return true;
    };
    this.getDescription = function()
    {
        return qsTr("For those who can't affort proper tanks, or need something light enough to carry by Helicopter or Ekranoplan. Although weaker than regular Tanks, these vehicles still have uses.");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };
}

Constructor.prototype = UNIT;
var FAI_LIGHTTANK = new Constructor();
