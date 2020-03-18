var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setWeapon1ID("WEP_FAI_NAVAL_HEAVY");

        unit.setMinRange(2);
        unit.setMaxRange(5);
        unit.setAmmo1(5);
        unit.setMaxAmmo1(5);

        unit.setFuel(70);
        unit.setMaxFuel(70);
        unit.setBaseMovementPoints(4);
        unit.setVision(1)
    };
    // called for loading the main sprite
    this.loadSprites = function(unit)
    {
        // load sprites
        unit.loadSprite("FAI_SHIP_BATTLESHIP", false);
        unit.loadSprite("FAI_SHIP_BATTLESHIP+mask", true);
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_SHIP";
    };
    this.getBaseCost = function()
    {
        return 20000;
    };
    this.getName = function()
    {
        return qsTr("Battleship")
    };
    this.canMoveAndFire = function()
    {
        return true;
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
    this.getDescription = function()
    {
        return qsTr("The king of the seas! Battleships carry powerful guns that devastate both land and naval targets. Be wary of submarines and planes, however, because this ship is defenceless against subs, and it's anti-aircraft guns aren't impressive.");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Naval;
    };
}

Constructor.prototype = UNIT;
var FAI_SHIP_BATTLESHIP = new Constructor();
