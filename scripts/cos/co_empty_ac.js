CO_EMPTY_AC.getCODescription = function()
{
    return qsTr("An army that grew big enough to have it's own state. It's land and naval forces are state-of-the-art, but it's airforce is rather outdated.");
};
CO_EMPTY_AC.getName = function()
{
    return qsTr("Alfieq's Army");
};
CO_EMPTY_AC.getBio = function()
{
    return qsTr("A blank CO for Alfieq's Army.");
};
CO_EMPTY_AC.loadCOMusic = function(co)
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
            audio.addMusic("mods/MassCombat/music/cos/alfieqarmy.mp3");
            break;
        }
};