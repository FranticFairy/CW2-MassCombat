var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setWeapon1ID("WEP_FAI_TACNUKE");
        unit.setMinRange(4);
        unit.setMaxRange(10);
        unit.setAmmo1(1);
        unit.setMaxAmmo1(1);

        unit.setFuel(70);
        unit.setMaxFuel(70);
        unit.setBaseMovementPoints(4);
        unit.setVision(1)
    };
    // called for loading the main sprite
    this.loadSprites = function(unit)
    {
        // load sprites
        unit.loadSprite("FAI_LAUNCHER_WMD", false);
        unit.loadSprite("FAI_LAUNCHER_WMD+mask", true);
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
        return "MOVE_FAI_WHEEL";
    };
    this.getBaseCost = function()
    {
        return 38000;
    };
    this.getName = function()
    {
        return qsTr("Nuke Launcher")
    };
    this.canMoveAndFire = function()
    {
        return false;
    };
    this.getDescription = function()
    {
        return qsTr("For when you have a lot of money, and want to deal a lot of pain. Although slow and vulnerable, these vehicles have an immense range, and although they only carry two attacks worth of Ammo, they can annihilate almost anything!");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };
}

Constructor.prototype = UNIT;
var FAI_LAUNCHER_WMD = new Constructor();
