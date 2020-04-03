CO_EMPTY_OS.getCODescription = function()
{
    return qsTr("An international organization with several member-states, the Allied Nations are the primary peacekeepers in the world.");
};
CO_EMPTY_OS.getName = function()
{
    return qsTr("Allied Nations");
};
CO_EMPTY_OS.getBio = function()
{
    return qsTr("A blank CO for the Allied Nations.");
};
CO_EMPTY_OS.loadCOMusic = function(co)
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
            audio.addMusic("mods/MassCombat/music/cos/alliednations.mp3");
            break;
    }
};