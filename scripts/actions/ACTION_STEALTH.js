var Constructor = function()
{
    // called for loading the main sprite
    this.canBePerformed = function(action)
    {
        var unit = action.getTargetUnit();
        var actionTargetField = action.getActionTarget();
        var targetField = action.getTarget();
        var terrain = map.getTerrain(actionTargetField.x, actionTargetField.y).getID();
        if ((unit.getHasMoved() === true) ||
            (unit.getBaseMovementCosts(actionTargetField.x, actionTargetField.y) <= 0) ||
            (unit.getUnitID() == "FAI_SHIP_SUBMARINE" && terrain == "BEACH"))
        {
            return false;
        }
        if ((actionTargetField.x === targetField.x) && (actionTargetField.y === targetField.y) ||
            (action.getMovementTarget() === null))
        {
            if (unit.getHidden() === false)
            {
                return true;
            }
        }
        return false;
    };
    this.getActionText = function()
    {
        return qsTr("Stealth");
    };
    this.getIcon = function()
    {
        return "dive";
    };
    this.isFinalStep = function(action)
    {
        return true;
    };
    this.perform = function(action)
    {
        // we need to move the unit to the target position
        var unit = action.getTargetUnit();
        var animation = Global[unit.getUnitID()].doWalkingAnimation(action);
        animation.setEndOfAnimationCall("ACTION_STEALTH", "performPostAnimation");
        // move unit to target position
        unit.moveUnitAction(action);
        ACTION_STEALTH.postAnimationUnit = unit;

    };
    this.postAnimationUnit = null;
    this.performPostAnimation = function(action)
    {
        // disable unit commandments for this turn
        var animation = GameAnimationFactory.createAnimation(ACTION_STEALTH.postAnimationUnit.getX(), ACTION_STEALTH.postAnimationUnit.getY());
        if (ACTION_STEALTH.postAnimationUnit.getUnitID() === "FAI_SHIP_SUBMARINE")
        {
            animation.addSprite("dive", -map.getImageSize() / 2, -map.getImageSize() / 2, 0, 1.5);
        }
        else
        {
            animation.addSprite("stealth", -map.getImageSize() / 2, -map.getImageSize() / 2, 0, 1.5);
        }
		var unit = ACTION_STEALTH.postAnimationUnit;
		unit.setHasMoved(true);
        ACTION_STEALTH.postAnimationUnit.setHidden(true);
        ACTION_STEALTH.postAnimationUnit = null;
    }
}

Constructor.prototype = ACTION;
var ACTION_STEALTH = new Constructor();
