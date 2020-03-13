var Constructor = function ()
{
    // called for loading the main sprite
    this.canBePerformed = function (action)
    {
        var unit = action.getTargetUnit();
        var actionTargetField = action.getActionTarget();
        var targetField = action.getTarget();
        var targetUnit = action.getMovementTarget();
        var transportTerrain = action.getMovementTerrain();

        if ((unit.getHasMoved() === true) ||
            (unit.getBaseMovementCosts(actionTargetField.x, actionTargetField.y) <= 0))
        {
            return false;
        }
        if (((actionTargetField.x !== targetField.x) || (actionTargetField.y !== targetField.y)) &&
            (targetUnit !== null))
        {
            if ((targetUnit.getOwner() === unit.getOwner()) &&
                (targetUnit.getTransportUnits().indexOf(unit.getUnitID()) >= 0) &&
                (targetUnit.getLoadedUnitCount() < targetUnit.getLoadingPlace())) {


                if (targetUnit.getUnitID() === "TRANSPORTPLANE")
                {
                    if ((transportTerrain.getID() === "AIRPORT") ||
                        (transportTerrain.getID() === "TEMPORARY_AIRPORT") ||
                        (transportTerrain.getID() === "STREET"))
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }

                
                if (targetUnit.getUnitID() === "FAI_TRANSPLANE")
                {
                    if ((transportTerrain.getID() === "AIRPORT") ||
                        (transportTerrain.getID() === "TEMPORARY_AIRPORT"))
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                return true;
            }
        }
        return false;

    };


    this.getActionText = function ()
    {
        return qsTr("Load");
    };
    this.getIcon = function ()
    {
        return "load";
    };
    this.isFinalStep = function (action)
    {
        return true;
    };
    this.postAnimationTargetUnit = null;
    this.postAnimationUnit = null;
    this.perform = function (action)
    {
        // we need to move the unit to the target position
        ACTION_LOAD.postAnimationUnit = action.getTargetUnit();
        ACTION_LOAD.postAnimationTargetUnit = action.getMovementTarget();
        var animation = Global[ACTION_LOAD.postAnimationUnit.getUnitID()].doWalkingAnimation(action);
        animation.setEndOfAnimationCall("ACTION_LOAD", "performPostAnimation");
    };
    this.performPostAnimation = function (postAnimation)
    {
        ACTION_LOAD.postAnimationUnit.setHasMoved(true);
        ACTION_LOAD.postAnimationUnit.setCapturePoints(0);
        ACTION_LOAD.postAnimationTargetUnit.loadUnit(ACTION_LOAD.postAnimationUnit);
        audio.playSound("load.wav");
        ACTION_LOAD.postAnimationTargetUnit = null;
        ACTION_LOAD.postAnimationUnit = null;
    };


}

Constructor.prototype = ACTION;
var ACTION_LOAD = new Constructor();
