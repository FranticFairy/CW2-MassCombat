var PLAYER =
{
    // static information about players
    // making it easy editable\modable for everyone :)

    getDefaultPlayerColors : function()
    {
        return 21;
    },
    getDefaultColor : function(index)
    {
        var color = "#000000";
        switch (index)
        {
            case 0:
                //RED - Legion Cult
                color = "#A80B00";
                break;
            case 1:
                //BLUE - Alfieq's Army
                color = "#5575C2";
                break;
            case 2:
                //GREEN
                color = "#267F00";
                break;
            case 3:
                //YELLOW - Wolves' Pact
                color = "#EEDC65";
                break;
            case 4:
                //PURPLE - Revolutionary Army
                color = "#57007F";
                break;
            case 5:
                //FULLRED
                color = "#FF0000";
                break;
            case 6:
                //FULLBLUE
                color = "#0000FF";
                break;
            case 7:
                //FULLGREEN
                color = "#00FF00";
                break;
            case 8:
                //FULLYELLOW
                color = "#FFFF00";
                break;
            case 9:
                //LGREY - Steel League
                color = "#dedede";
                break;
            case 10:
                //ORANGE - Parlin Republic
                color = "#FF6A00";
                break;
            case 11:
                //TEAL - Independant States
                color = "#007F7F";
                break;
            case 12:
                //AQUA - Allied Nations
                color = "#0094FF";
                break;                
            case 13:
                //PINK
                color = "#FF00DC";
                break;                
            case 14:
                //BROWN - Tenaris Empire
                color = "#7F3300";
                break;                
            case 15:
                //MILGREEN
                color = "#3D4A2C";
                break;
            case 16:
                //MGREY - Sol Confederacy
                color = "#424242";
                break;
            case 17:
                //TOXIC GREEN
                color = "#00FF90";
                break;
            case 18:
                //DARKRED
                color = "#660000";
                break;
            case 19:
                //BEIGE
                color = "#CBB997";
                break;
            case 20:
                //CAB
                color = "#604048";
                break;
            default:
                // create a cool random color
                var red = globals.randInt(0, 255);
                if (red < 16)
                {
                    red = 16;
                }
                var green = globals.randInt(0, 255);
                if (green < 16)
                {
                    green = 16;
                }
                var blue = globals.randInt(0, 255);
                if (blue < 16)
                {
                    blue = 16;
                }
                color = "#" + red.toString(16) + green.toString(16) + blue.toString(16);
                break;
        }
        return color;
    },

    // return the default set for colors
    loadDefaultPlayerColor : function (player)
    {
        var color = PLAYER.getDefaultColor(player.getPlayerID());
        player.setColor(color);
    },

    getDefaultArmy : function (player)
    {
        var id = player.getPlayerID() % 13;
        var armies = PLAYER.getArmies();
        return armies[id];
    },

    getArmyName : function (army)
    {
        switch (army)
        {
            case "OS":
                return tr("Allied Nations");
            case "BM":
                return tr("Parlin Republic");
            case "GE":
                return tr("Tenaris Empire");
            case "YC":
                return tr("Wolves' Pact");
            case "BH":
                return tr("Revolutionary Army");
            case "BG":
                return tr("Sol Confederacy");
            case "ML":
                return tr("Steel League");
            case "AC":
                return tr("Alfieq's Army");
            case "BT":
                return tr("Independent States");
            case "DM":
                return tr("Legion Cult");
            case "GS":
                return tr("Advance Wars COs");
            case "PF":
                return tr("Commander Wars COs");
            case "TI":
                return tr("Custom COs");
        }
    },

    // co selection infos
    getArmies : function()
    {
        return ["OS",
                "BM",
                "GE",
                "YC",
                "BH",
                "BG",
                "MA",
                "AC",
                "BD",
                "DM",
                "GS",
                "PF",
                "TI"];
    },

    getArmyCOsOS : function()
    {
        return ["CO_EMPTY_OS", "CO_RANDOM"];
    },

    getArmyCOsBM : function()
    {
        return ["CO_EMPTY_BM", "CO_RANDOM"];
    },

    getArmyCOsGE : function()
    {
        return ["CO_EMPTY_GE", "CO_RANDOM"];
    },

    getArmyCOsYC : function()
    {
        return ["CO_EMPTY_YC", "CO_RANDOM"];
    },

    getArmyCOsBH : function()
    {
        return ["CO_EMPTY_BH", "CO_RANDOM"];
    },

    getArmyCOsBG : function()
    {
        return ["CO_EMPTY_BG", "CO_RANDOM"];
    },

    getArmyCOsMA : function()
    {
        return ["CO_EMPTY_MA", "CO_RANDOM"];
    },

    getArmyCOsAC : function()
    {
        return ["CO_EMPTY_AC", "CO_RANDOM"];
    },

    getArmyCOsBD : function()
    {
        return ["CO_EMPTY_BD", "CO_RANDOM"];
    },

    getArmyCOsGS : function()
    {
        return ["CO_EMPTY_GS", "CO_RANDOM"];
    },

    getArmyCOsPF : function()
    {
        return ["CO_EMPTY_PF", "CO_RANDOM"];
    },

    getArmyCOsTI : function()
    {
        return ["CO_EMPTY_TI", "CO_RANDOM"];
    },

    getArmyCOsDM : function()
    {
        return ["CO_EMPTY_DM", "CO_RANDOM"];
    },
}
