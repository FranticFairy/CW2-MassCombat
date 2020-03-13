var Constructor = function()
{
    // called for loading the main sprite
    this.loadSprites = function(building, neutral)
    {
        if (building.getOwnerID() >= 0 && !neutral)
        {
            // none neutral player
            building.loadSprite("factory", false);
            building.loadSprite("factory+mask", true);
        }
        else
        {
            // neutral player
            building.loadSprite("factory+neutral", false);
        }
    };
    this.getName = function()
    {
        return qsTr("Base");
    };
    this.addCaptureAnimationBuilding = function(animation, building, startColor, capturedColor)
    {
        animation.addBuildingSprite("factory+mask", startColor , capturedColor, true);
        animation.addBuildingSprite("factory", startColor , capturedColor, false);
    };

    this.getActions = function()
    {
        // returns a string id list of the actions this building can perform
        return "ACTION_BUILD_UNITS";
    };

    this.getConstructionList = function(building)
    {
        return ["FAI_TRUCK","FAI_SUPPLYTRUCK","FAI_MECHINF","FAI_AMPHIBTRUCK","FAI_IFV","FAI_AMPHIBIFV","FAI_HVYIFV","FAI_FIELDARTY","FAI_FIELDAT","FAI_LIGHTTANK","FAI_TANK","FAI_HVYTANK","FAI_SPAA","FAI_SPARTY","FAI_LAUNCHERSAM","FAI_LAUNCHERNUKE","FAI_LAUNCHERRKT","FAI_LAUNCHERASM","FAI_RECON","FAI_ARMORCAR","FAI_AVLB","FAI_ARV","FAI_DOZER","FAI_CASH_TRUCK","FAI_SCREW","FAI_SCREW_TRANSPORT"];
    };
    this.getTerrainAnimationForeground = function(unit, terrain)
    {
        return "fore_factory";
    };

    this.getTerrainAnimationBackground = function(unit, terrain)
    {
        return "back_factory";
    };

    this.getDescription = function()
    {
        return "<r>" + qsTr("Once captured can be used for ") + "</r>" +
               "<div c='#00ff00'>" + qsTr("production and resupplying ") + "</div>" +
               "<r>" + qsTr("of ") + "</r>" +
               "<div c='#00ff00'>" + qsTr("ground ") + "</div>" +
               "<r>" + qsTr("units.") + "</r>";
    };
}

Constructor.prototype = BUILDING;
var FACTORY = new Constructor();
