var Constructor = function () {
    this.pingSeamine = function(unit, range) {
        var fields = globals.getCircle(0, range);
        for (var i = 0; i < fields.size(); i++)
        {
            var x = fields.at(i).x + unit.getX();
            var y = fields.at(i).y + unit.getY();
            if (map.onMap(x, y))
            {
                var terrain = map.getTerrain(x,y);
                if(terrain != null) {
                    var targetUnit = terrain.getUnit()
                    if(targetUnit != null) {
                        var unitType = targetUnit.getUnitID();
                        if(unitType == "FAI_OTH_SEAMINE") {
                            unit.getOwner().addVisionField(x, y, 1, true);
                        }
                    }
                }
            }
        }
    }
    this.pingLandmine = function(unit, range) {
        var fields = globals.getCircle(0, range);
        for (var i = 0; i < fields.size(); i++)
        {
            var x = fields.at(i).x + unit.getX();
            var y = fields.at(i).y + unit.getY();
            if (map.onMap(x, y))
            {
                var terrain = map.getTerrain(x,y);
                if(terrain != null) {
                    var targetUnit = terrain.getUnit()
                    if(targetUnit != null) {
                        var unitType = targetUnit.getUnitID();
                        if(unitType == "FAI_OTH_LANDMINE") {
                            unit.getOwner().addVisionField(x, y, 1, true);
                        }
                    }
                }
            }
        }
    }
    this.pingSubmarine = function(unit, range) {
        var fields = globals.getCircle(0, range);
        for (var i = 0; i < fields.size(); i++)
        {
            var x = fields.at(i).x + unit.getX();
            var y = fields.at(i).y + unit.getY();
            if (map.onMap(x, y))
            {
                var terrain = map.getTerrain(x,y);
                if(terrain != null) {
                    var targetUnit = terrain.getUnit()
                    if(targetUnit != null) {
                        var unitType = targetUnit.getUnitID();
                        if(unitType == "FAI_SHIP_SUBMARINE") {
                            unit.getOwner().addVisionField(x, y, 1, true);
                        }
                    }
                }
            }
        }
    }
    this.pingPlane = function(unit, range) {
        var fields = globals.getCircle(0, range);
        for (var i = 0; i < fields.size(); i++)
        {
            var x = fields.at(i).x + unit.getX();
            var y = fields.at(i).y + unit.getY();
            if (map.onMap(x, y))
            {
                var terrain = map.getTerrain(x,y);
                if(terrain != null) {
                    var targetUnit = terrain.getUnit()
                    if(targetUnit != null) {
                        if(targetUnit.getUnitType() == GameEnums.UnitType_Air && targetUnit.getHidden() === false) {
                            unit.getOwner().addVisionField(x, y, 1, true);
                        }
                    }
                }
            }
        }
    }
    this.pingType = function(unit, range, typeString) {
        var fields = globals.getCircle(0, range);
        for (var i = 0; i < fields.size(); i++)
        {
            var x = fields.at(i).x + unit.getX();
            var y = fields.at(i).y + unit.getY();
            if (map.onMap(x, y))
            {
                var terrain = map.getTerrain(x,y);
                if(terrain != null) {
                    var targetUnit = terrain.getUnit()
                    if(targetUnit != null) {
                        var unitType = targetUnit.getUnitID();
                        if(unitType == typeString) {
                            unit.getOwner().addVisionField(x, y, 1, true);
                        }
                    }
                }
            }
        }
    }
}

Constructor.prototype = ACTION;
var ACTION_PING = new Constructor();
