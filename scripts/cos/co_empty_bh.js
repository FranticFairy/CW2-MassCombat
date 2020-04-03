CO_EMPTY_BH.getCODescription = function()
{
    return qsTr("A rogue state that seeks to overthrow other governments and create some kind of 'New World Order'. They are suspected to be behind several terrorist attacks.");
};
CO_EMPTY_BH.getName = function()
{
    return qsTr("Revolutionary Army");
};
CO_EMPTY_BH.getBio = function()
{
    return qsTr("A blank CO for the Revolutionary Army.");
};
CO_EMPTY_BH.loadCOMusic = function(co)
{
    // put the co music in here.
    switch (co.getPowerMode())
    {
        case GameEnums.PowerMode_Power:
            audio.addMusic("resources/music/cos/power.mp3", 992, 45321);
            break;
        case GameEnums.PowerMode_Superpower:
            audio.addMusic("resources/music/cos/superpower.mp3", 1505, 49515);
            break;
        case GameEnums.PowerMode_Tagpower:
            audio.addMusic("resources/music/cos/tagpower.mp3", 14611, 65538);
            break;
        default:
            audio.addMusic("mods/MassCombat/music/cos/revolutionaryarmy.mp3");
            break;
    }
};