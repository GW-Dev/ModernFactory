ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mf = (id) => `modern_factory:food/cutting/${id}`;

        // -- EXTRA DELIGHT REMOVED RECIPES -- //
    const ED_DELETED_ITEMS = [
        ed('cutting/cutting/garlic_dividing_knife')
    ];
    ED_DELETED_ITEMS.forEach(id => event.remove( {id: id} ));
    
        // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let cutting = (id, item_inputs, item_outputs, tool_used) => {
        let newRecipe = {
            type: fd('cutting'),
        }

        if (item_inputs)
            newRecipe['ingredients'] = item_inputs;
        if (item_outputs)
            newRecipe['result'] = item_outputs;
        if (tool_used)
            newRecipe['tool'] = tool_used;
        event.custom(newRecipe).id(id);
    }

    cutting(
        mf('garlic_cutting'),
        [ { item: wi('garlic') } ],
        [ { item: {
                count: 3, id: ed('garlic_clove')
            }
          },
          {chance: 0.75, 
            item: {
                count: 1, id: ed('garlic_clove') 
            } 
        } ],
        [ { tag: 'c:tools/knife' } ]
    )
})