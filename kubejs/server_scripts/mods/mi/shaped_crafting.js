ServerEvents.recipes(event => {

    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mf = (id) => `modern_factory:modern_industrialization/shaped_crafting/${id}`;

    // primitive furnace craft
    event.shaped(Item.of(mt('primitive_furnace')),
    [   'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: mc('mud_bricks'),
        B: mc('campfire')

    }).id(mf('primitive_furnace'))
})