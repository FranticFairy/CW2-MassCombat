var Constructor = function()
{
    // called for loading the main sprite
    this.loadSprites = function(building, neutral)
    {
        if (building.getOwnerID() >= 0 && !neutral)
        {
            // none neutral player
            building.loadSprite("town", false);
            building.loadSprite("town+mask", true);
        }
        else
        {
            // neutral player
            building.loadSprite("town+neutral", false);
        }
    };
    this.getConstructionList = function(building)
    {
        return ["FAI_FOOTSOLDIER","FAI_TRUCK","FAI_SUPPLYTRUCK","FAI_MECHINF","FAI_AMPHIBTRUCK","FAI_IFV","FAI_AMPHIBIFV","FAI_HVYIFV","FAI_FIELDARTY","FAI_FIELDAT","FAI_LIGHTTANK","FAI_TANK","FAI_HVYTANK","FAI_SPAA","FAI_SPARTY","FAI_LAUNCHERSAM","FAI_LAUNCHERNUKE","FAI_LAUNCHERRKT","FAI_LAUNCHERASM","FAI_RECON","FAI_ARMORCAR","FAI_HOVERTANK","FAI_HOVERCRAFT","FAI_HVYHOVER","FAI_TRANSHOVER","FAI_AVLB","FAI_ARV","FAI_DOZER","FAI_CASH_TRUCK","FAI_SCREW","FAI_SCREW_TRANSPORT"];
    };

    this.getName = function()
    {
        return qsTr("Town");
    };

    this.getDescription = function()
    {
        return "<r>" + qsTr("Populated city. Once captured ") + "</r>" +
               "<div c='#00ff00'>" + qsTr("ground ") + "</div>" +
               "<r>" + qsTr("units can ") + "</r>" +
               "<div c='#00ff00'>" + qsTr("resupply") + "</div>" +
               "<r>" + qsTr(".") + "</r>";
    };
}

Constructor.prototype = BUILDING;
var TOWN = new Constructor();
