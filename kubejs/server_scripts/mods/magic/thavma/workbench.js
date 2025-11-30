ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mf = (id) => `modern_factory:magic/thavma/arcane_workbench/${id}`;

    // -- REMOVED RECIPES -- //
    const RECIPES_TO_REMOVE = [
        th('elemental_stone_arcane_workbench')
    ];
    RECIPES_TO_REMOVE.forEach(id => event.remove( {id: id} ));

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let workbench = (id, aspect, item_inputs, shape, item_outputs) => {
        let newRecipe = {
            type: th('arcane_workbench'),
            aspects: aspect,
            key: item_inputs,
            pattern: shape,
            result: item_outputs
        }
        event.custom(newRecipe).id(id);
    }

    // goggles recipe
    workbench(
        mf('arcane_goggles'),
        {
            "thavma:aer": 4,
            "thavma:aether": 4,
            "thavma:aqua": 4,
            "thavma:ignis": 4,
            "thavma:terra": 4
        },
        {    
            g: {item: th('orichalcum_ingot')},
            l: {item: kj('tanned_leather')},
            o: {item: th('arcane_lens')}
        },
        [
            'lgl',
            'l l',
            'ogo'
        ],        
        {
            count: 1,
            id: th('goggles')
        }
    )

    // elemental stone recipe
    workbench(
        mf('elemental_stone'),
        {
            "thavma:aer": 16,
            "thavma:aether": 16,
            "thavma:aqua": 16,
            "thavma:ignis": 16,
            "thavma:terra": 16
        },
        {    
            s: {tag: th('shards')},
            b: {item: mc('blackstone')}
        },
        [
            'bbb',
            'bsb',
            'bbb'
        ],        
        {
            count: 8,
            id: th('elemental_stone')
        }
    )

})