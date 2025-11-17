ServerEvents.recipes(event => {
    event.remove({ id: 'extradelight:cutting/cutting/garlic_dividing_knife' })
    
    event.replaceInput( { input: 'extradelight:garlic' },
    'extradelight:garlic',            // Arg 2: the item to replace
    'witchery:garlic')
    
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{item: "witchery:garlic"}],
        result: [{item: {
            count: 3, id: "extradelight:garlic_clove"
            }
        },
        {chance: 0.75, item: {
            count: 1,
            id: "extradelight:garlic_clove"}
        }
        ],
        tool: {tag: "c:tools/knife"}
    })
})



ServerEvents.tags('item', event => {
    event.add('c:crops/garlic', 'witchery:garlic')
})