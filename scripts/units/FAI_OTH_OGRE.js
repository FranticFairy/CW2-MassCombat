var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setMinRange(1);
        unit.setMaxRange(2);
        unit.setWeapon1ID("WEP_FAI_OGRE_MAIN");
        unit.setWeapon2ID("WEP_FAI_OGRE_TURRETS");

        unit.setAmmo1(6);
        unit.setMaxAmmo1(6);
        unit.setAmmo2(10);
        unit.setMaxAmmo2(10);

        unit.setFuel(60);
        unit.setMaxFuel(60);
        unit.setBaseMovementPoints(3);
        unit.setVision(2);
        unit.setIgnoreUnitCollision(true);
    };
    // called for loading the main sprite
    this.loadSprites = function(unit)
    {
        // load sprites
        unit.loadSprite("FAI_OTH_OGRE", false);
        unit.loadSprite("FAI_OTH_OGRE+mask", true);
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
        return "MOVE_FAI_OGRE";
    };
    this.getBaseCost = function()
    {
        return 45000;
    };
    this.getName = function()
    {
        return qsTr("OGRE CYBERTANK")
    };
    this.canMoveAndFire = function()
    {
        return true;
    };
    this.getDescription = function()
    {
        return qsTr("The most feared weapon of all. A behemoth of a tank, armed with Nuclear Cannons and Lasers, capable of traversing most terrains driven by a blood-thirsty AI. The ultimate unit capable of annihilating any lesser foe. The OGRE.");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };
}

Constructor.prototype = UNIT;
var FAI_OTH_OGRE = new Constructor();
