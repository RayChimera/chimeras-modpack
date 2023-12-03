// priority: 100
Platform.mods.kubejs.name = 'Chimera\'s Modpack'

StartupEvents.registry('item', event => {
    // Singular coins
    function create_coin_and_stack(coin){
        let value = coin[0]
        let color = coin [1]
        event.create('kubejs:coin_' + value)
        .displayName(color + value.charAt(0).toUpperCase() + value.slice(1) + ' Coin')
        .maxStackSize(64)
        .glow(true);

        event.create('kubejs:coin_' + value + '_stack')
        .displayName(color + value.charAt(0).toUpperCase() + value.slice(1) + ' Coin Stack')
        .maxStackSize(64)
        .glow(true);
    }

    let coins = [['copper', '§f'], ['silver', '§a'], ['gold', '§9'], ['platinum', '§5'], ['netherite', '§6']];
    for (let i = 0; i < coins.length; i++){create_coin_and_stack(coins[i])}
})
