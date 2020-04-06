var Constructor = function()
{
    // called for loading the main sprite
    this.canBePerformed = function(action)
    {
        var unit = action.getTargetUnit();
        var actionTargetField = action.getActionTarget();
        var targetField = action.getTarget();

        if ((unit.getHasMoved() === true) ||
            (unit.getAmmo2() === 0) ||
            (unit.getBaseMovementCosts(actionTargetField.x, actionTargetField.y) <= 0)||
            (unit.getOwner().getFunds() < 2000)
            )
        {
            return false;
        }
        if ((actionTargetField.x === targetField.x) && (actionTargetField.y === targetField.y) ||
                (action.getMovementTarget() === null))
        {
            if (ACTION_PLACE_WATERMINE.getMineFields(action).length > 0)
            {
                return true;
            }
        }
        return false;
    };
    this.getMineFields = function(action)
    {
        var targetField = action.getActionTarget();
        var targetFields = [Qt.point(targetField.x + 1, targetField.y),
                            Qt.point(targetField.x - 1, targetField.y),
                            Qt.point(targetField.x,     targetField.y - 1),
                            Qt.point(targetField.x,     targetField.y + 1)];
        var unit = action.getTargetUnit();
        var targetTerrain = map.getTerrain(targetField.x, targetField.y);
        var ret = [];
        // check all neighbour terrains
        for (var i = 0; i < targetFields.length; i++)
        {
            if (map.onMap(targetFields[i].x, targetFields[i].y))
            {
                var terrain = map.getTerrain(targetFields[i].x, targetFields[i].y);
                var defUnit = terrain.getUnit();
                // can the transported unit move over the terrain?
                if ((Global[unit.getMovementType()].getMovementpoints(terrain, unit) > 0) &&
                    (defUnit === null))
                {
                    if(terrain.getTerrainID() != "BEACH") {
                        ret.push(targetFields[i]);
                    }
                }
            }
        }
        return ret;
    };

    this.getActionText = function()
    {
        return qsTr("Place Seamine");
    };
    this.getIcon = function()
    {
        return "FAI_OTH_SEAMINE";
    };
    this.isFinalStep = function(action)
    {
        if (action.getInputStep() === 1)
        {
            return true;
        }
        else
        {
            return false;
        }
    };

    this.getStepInputType = function(action)
    {        
        return "FIELD";
    };

    this.getStepData = function(action, data)
    {
        var unit = action.getTargetUnit();
        var actionTargetField = action.getActionTarget();
        data.setColor("#C800FF00");
        var fields = ACTION_PLACE_WATERMINE.getMineFields(action);
        for (var i3 = 0; i3 < fields.length; i3++)
        {
            data.addPoint(Qt.point(fields[i3].x, fields[i3].y));
        }
    };

    this.postAnimationMinePosX = -1;
    this.postAnimationMinePosY = -1;
    this.perform = function(action)
    {
        // we need to move the unit to the target position
        var unit = action.getTargetUnit();
        var animation = Global[unit.getUnitID()].doWalkingAnimation(action);
        animation.setEndOfAnimationCall("ACTION_PLACE_WATERMINE", "performPostAnimation");
        // move unit to target position
        unit.moveUnitAction(action);
        // disable unit commandments for this turn
        unit.setHasMoved(true);
        unit.reduceAmmo2(1);
        action.startReading();
        var x = action.readDataInt32();
        var y = action.readDataInt32();
        ACTION_PLACE_WATERMINE.postAnimationMinePosX = x;
        ACTION_PLACE_WATERMINE.postAnimationMinePosY = y;
    };
    this.performPostAnimation = function(postAnimation)
    {
        // unloading the units here :)
        var player = map.getCurrentPlayer();
        var unit = map.spawnUnit(ACTION_PLACE_WATERMINE.postAnimationMinePosX,
                                 ACTION_PLACE_WATERMINE.postAnimationMinePosY,
                                 "FAI_OTH_SEAMINE", player);
        if (unit !== null)
        {
            // pay for the unit
            map.getGameRecorder().buildUnit(player.getPlayerID());
            unit.setHasMoved(true);
        }
        player.buildedUnit(unit);
        player.addFunds(-2000);
        audio.playSound("mine-place.wav", -2, "mods/MassCombat/sounds/");
        ACTION_PLACE_WATERMINE.postAnimationMinePosX = -1;
        ACTION_PLACE_WATERMINE.postAnimationMinePosY = -1;
    };
}

Constructor.prototype = ACTION;
var ACTION_PLACE_WATERMINE = new Constructor();
