CO_EMPTY_BD.getCODescription = function()
{
    return qsTr("This minor power does not belong to any powerful alliances, nor are they a world power.");
};
CO_EMPTY_BD.getName = function()
{
    return qsTr("Independent States");
};
CO_EMPTY_BD.getBio = function()
{
    return qsTr("A blank CO representing a minor nation.");
};

CO_EMPTY_BD.loadCOMusic = function(co)
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
            audio.addMusic("mods/MassCombat/music/cos/minornation.mp3");
            break;
        }
};