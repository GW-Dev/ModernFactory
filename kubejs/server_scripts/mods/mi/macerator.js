ServerEvents.recipes(event => {

    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mf = (id) => `modern_factory:modern_industrialization/macerator/${id}`;

    // thavma ores

    const THAVMA_INFUSED_STONES = [
        'ignis',
        'aer',
        'terra',
        'aqua',
        'aether'
    ]

    THAVMA_INFUSED_STONES.forEach(element => {
        event.recipes.modern_industrialization.macerator(2, 100)
            .itemIn('1x ' + th(`${element}_infused_stone`))
            .itemOut('4x ' + th(`${element}_shard`))
            .itemOut('1x ' + th(`${element}_shard`), 0.5)
            .id(mf(`${element}_shard_from_stone`))

        event.recipes.modern_industrialization.macerator(2, 100)
            .itemIn('1x ' + th(`${element}_infused_deepslate`))
            .itemOut('4x ' + th(`${element}_shard`))
            .itemOut('1x ' + th(`${element}_shard`), 0.5)
            .id(mf(`${element}_shard_from_deepslate`))
    });

    
})