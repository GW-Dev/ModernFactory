ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mf = (id) => `modern_factory:magic/thavma/crucible/${id}`;

    // -- REMOVED RECIPES -- //
    const RECIPES_TO_REMOVE = [
        th('thavmite_ingot_crucible'),
        th('orichalcum_ingot_crucible')
    ];
    RECIPES_TO_REMOVE.forEach(id => event.remove( {id: id} ));

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let crucible = (id, aspect, item_inputs, item_outputs) => {
        let newRecipe = {
            type: th('crucible'),
            aspects: aspect,
            catalyst: item_inputs,
            result: item_outputs
        }
        event.custom(newRecipe).id(id);
    }

    // thavmite ingot recipe
    crucible(
        mf('thavmite_ingot'),
        {
            'thavma:praecantatio': 4
        },
        [ 
            {item: mi('aluminum_ingot')},
        ],
        {
            count: 1,
            id: th('thavmite_ingot')
        }
    )

    // orichalcum ingot recipe
    crucible(
        mf('orichalcum_ingot'),
        {
            'thavma:instrumentum': 4
        },
        [ 
            {item: mi('steel_ingot')},
        ],
        {
            count: 1,
            id: th('orichalcum_ingot')
        }
    )

})