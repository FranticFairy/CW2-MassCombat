CO_EMPTY_DM.getCODescription = function()
{
    return qsTr("A strange and potentially dangerous cult. Not much is known about them.");
};
CO_EMPTY_DM.getName = function()
{
    return qsTr("Legion Cult");
};
CO_EMPTY_DM.getBio = function()
{
    return qsTr("A blank CO for the Legion Cult.");
};
CO_EMPTY_DM.loadCOMusic = function(co)
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
            audio.addMusic("mods/MassCombat/music/cos/legioncult.mp3");
            break;
    }
};