ACTION_CAPTURE.getCapturableBuildings = function()
{
	GameConsole.print("I got called", 0);
    return ["HQ", "LABOR", "MINE", "FACTORY", "AIRPORT", "HARBOUR",
			"PIPESTATION", "RADAR", "STATION", "TOWER", "TOWN", "TEMPORARY_AIRPORT",
            "TEMPORARY_HARBOUR", "OILRIG"];
};