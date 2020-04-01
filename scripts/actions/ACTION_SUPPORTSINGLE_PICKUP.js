var Constructor = function ()
{
    // called for loading the main sprite
    this.canBePerformed = function(action)
    {
        var unit = action.getTargetUnit();
        var actionTargetField = action.getActionTarget();
        var targetField = action.getTarget();

        if ((unit.getHasMoved() === true) || unit.getLoadedUnitCount() >= unit.getLoadingPlace())
        {
            return false;
        }
        if ((actionTargetField.x === targetField.x) && (actionTargetField.y === targetField.y) ||
                (action.getMovementTarget() === null))
        {
            if (ACTION_SUPPORTSINGLE_PICKUP.getUnitFields(action).length > 0)
            {
                return true;
            }
        }
        return false;
    };

    this.getUnitFields = function(action)
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
                var temp = unit.getTransportUnits().toString();
                var transportables = temp.split(",");
                // can the transported unit move over the terrain?
                if ((defUnit != null) && unit.getOwner() === defUnit.getOwner() && transportables.includes(defUnit.getUnitID()) && defUnit.getHasMoved() === false)
                {
                    ret.push(targetFields[i]);
                }
            }
        }
        return ret;
    };

    this.getActionText = function ()
    {
        return qsTr("Pickup");
    };
    this.getIcon = function ()
    {
        return "load";
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
        var fields = ACTION_SUPPORTSINGLE_PICKUP.getUnitFields(action);
        for (var i3 = 0; i3 < fields.length; i3++)
        {
            data.addPoint(Qt.point(fields[i3].x, fields[i3].y));
        }
    };

    this.postAnimationTargetUnit = null;
    this.postAnimationUnit = null;
    this.perform = function(action)
    {
        // we need to move the unit to the target position
        var unit = action.getTargetUnit();
        var animation = Global[unit.getUnitID()].doWalkingAnimation(action);
        animation.setEndOfAnimationCall("ACTION_SUPPORTSINGLE_PICKUP", "performPostAnimation");
        // move unit to target position
        unit.moveUnitAction(action);
        // disable unit commandments for this turn
        action.startReading();
        var x = action.readDataInt32();
        var y = action.readDataInt32();
        ACTION_SUPPORTSINGLE_PICKUP.postAnimationPickupPosX = x;
        ACTION_SUPPORTSINGLE_PICKUP.postAnimationPickupPosY = y;
        ACTION_SUPPORTSINGLE_PICKUP.postAnimationLoader = unit;
        
    };

    this.performPostAnimation = function(postAnimation)
    {
        // unloading the units here :)
        var player = map.getCurrentPlayer();
        terrain = map.getTerrain(ACTION_SUPPORTSINGLE_PICKUP.postAnimationPickupPosX, ACTION_SUPPORTSINGLE_PICKUP.postAnimationPickupPosY);
        targetUnit = terrain.getUnit();
        targetACTION_ENDMOVE.perform(unit);
        ACTION_SUPPORTSINGLE_PICKUP.postAnimationLoader.loadUnit(targetUnit);
        
        audio.playSound("load.wav");
        ACTION_SUPPORTSINGLE_PICKUP.postAnimationPickupPosX = null;
        ACTION_SUPPORTSINGLE_PICKUP.postAnimationPickupPosY = null;
        ACTION_SUPPORTSINGLE_PICKUP.postAnimationLoader = null;
    };
}

Constructor.prototype = ACTION;
var ACTION_SUPPORTSINGLE_PICKUP = new Constructor();
