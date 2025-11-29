ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mf = (id) => `modern_factory:food/${id}`;
    
    event.replaceInput( { input: ed('garlic') },
        ed('garlic'),       
        wi('garlic')
    )
})

ServerEvents.tags('item', event => {
    event.add('c:crops/garlic', wi('garlic'))
})