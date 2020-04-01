var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setAmmo1(0);
        unit.setMaxAmmo1(0);
        unit.setWeapon1ID("");

        unit.setAmmo2(0);
        unit.setMaxAmmo2(0);
        unit.setWeapon2ID("");

        unit.setFuel(0);
        unit.setMaxFuel(0);
        unit.setBaseMovementPoints(0);
        unit.setMinRange(0);
        unit.setMaxRange(0);
		unit.setVision(1);
		
		unit.setHidden(true);
    };
    // called for loading the main sprite
    this.loadSprites = function(unit)
    {
        // load sprites
        unit.loadSprite("FAI_OTH_SEAMINE", false);
        unit.loadSprite("FAI_OTH_SEAMINE+mask", true);
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
        animation.loadSprite(unitID + "+mask", true, 1);
        animation.loadSprite(unitID, false, 1);
        animation.setSound("movetank.wav", -2);
        return animation;
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_SHIP";
    };
    this.startOfTurn = function(unit)
    {
        // explode mine?
        var owner = unit.getOwner();
        var x = unit.getX();
        var y = unit.getY();
        var fields = globals.getCircle(1, 1);
        var explode = false;
        var targetX;
        var targetY;
        var targetHP = 0;
        var tempHP;
        for (var i = 0; i < fields.size(); i++)
        {
            var point = fields.at(i);
            if (map.onMap(x + point.x, y + point.y))
            {
                var terrain = map.getTerrain(x + point.x, y + point.y);
                var targetUnit = terrain.getUnit();
                if (targetUnit !== null &&
                    owner.isEnemyUnit(targetUnit) &&
                    terrain.getBaseTerrainID() === "SEA" &&
                    targetUnit.getUnitType() !== GameEnums.UnitType_Air)
                {
                    var targetUnit = terrain.getUnit();

                    //It complains about this
                if (targetUnit.getHp() > targetHP)
                {
                        targetX = targetUnit.getX();
                        targetY = targetUnit.getY();
                        targetHP = targetUnit.getHp();
                }
                    explode = true;
                }
            }
        }
        if (explode)
        {
            terrain = map.getTerrain(targetX, targetY);
            targetUnit = terrain.getUnit();
            if (targetUnit !== null &&
                targetUnit.getUnitType() == GameEnums.UnitType_Naval &&
                targetUnit.getUnitType() !== GameEnums.UnitType_Air)
            {
                targetUnit.setHp(targetUnit.getHpRounded() - 4);

                //But not about this
                if (targetUnit.getHp() <= 0)
                {
                    // we destroyed a unit
                    map.getGameRecorder().destroyedUnit(targetUnit.getOwner().getPlayerID());
                    targetUnit.killUnit();
                }
            }
            var animation = GameAnimationFactory.createAnimation(x + point.x, y + point.y);
            animation.addSprite("explosion+water", -map.getImageSize() / 2, -map.getImageSize(), 0, 1.5);
            audio.playSound("explosion+water.wav");

            fields.remove();
            unit.killUnit();
            // we destroyed a unit
            map.getGameRecorder().destroyedUnit(owner.getPlayerID());
        }
    };
    this.getName = function()
    {
        return qsTr("Seamine")
    };
    this.getLoadingPlace = function()
    {
        return 0;
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
    this.getActions = function()
    {
        // returns a string id list of the actions this unit can perform
        return "";
    };
    this.getDescription = function()
    {
        return qsTr("Immobile but dangerous, Seamines explode and deal 4 damage to any enemy ship that gets too close. They're permanently stealthed...");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Naval;
    };
}

Constructor.prototype = UNIT;
var FAI_OTH_SEAMINE = new Constructor();
