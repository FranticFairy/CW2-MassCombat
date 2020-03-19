var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setWeapon1ID("WEP_FAI_MECHLASER");
        unit.setWeapon2ID("WEP_FAI_AUTOCAN");

        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setAmmo1(9);
        unit.setMaxAmmo1(9);
        unit.setAmmo2(10);
        unit.setMaxAmmo2(10);
        unit.setFuel(70);
        unit.setMaxFuel(70);
        unit.setBaseMovementPoints(6);
        unit.setVision(2)
    };
    // called for loading the main sprite
    this.loadSprites = function(unit)
    {
        // load sprites
        unit.loadSprite("FAI_TANK_MECH", false);
        unit.loadSprite("FAI_TANK_MECH+mask", true);
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
        return "MOVE_FAI_WALKER";
    };
    this.getBaseCost = function()
    {
        return 13000;
    };
    this.getName = function()
    {
        return qsTr("Battlewalker")
    };
    this.canMoveAndFire = function()
    {
        return true;
    };
    this.getDescription = function()
    {
        return qsTr("The backbone of any armoured force, Tanks are the go-to unit for modern ground combat.");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };
}

Constructor.prototype = UNIT;
var FAI_TANK_MECH = new Constructor();
