ACTION_BUILD_UNITS.perform = function(action)
{
    action.startReading();
    var unitID = action.readDataString();
    var player = map.getCurrentPlayer();
    var unit = map.spawnUnit(action.getTarget().x, action.getTarget().y, unitID, player);

    // pay for the unit
    map.getCurrentPlayer().addFunds(-action.getCosts());
    map.getGameRecorder().buildUnit(player.getPlayerID());
    unit.setHasMoved(true);
    ACTION_ONBUILD.perform(unit);
    player.buildedUnit(unit);
};