const Clicker = () => {
    const fireLasers =(e) => {
        console.log(e)
        console.log("THE LASERS HAVE BEEN FIRED! ZAP! PEW PEW")
    }
    return (
    <>
    <button onClick={fireLasers}> Click me!</button>
    <textarea onScroll={fireLasers} rows="2">
    Annie Allen is a story told in verse about a Black girl growing up. Gwendolyn Brooks won the Pulitzer Prize for the collection in 1950, becoming the first Black poet to receive the award. Annie’s life is broken into three sections. The middle section, “The Anniad” is often described as a mock epic. The tongue in cheek title references Homer’s Iliad. 
    It describe’s Annie’s quest to fall in love in the midst of America going to war. And the poem simultaneously mocks the machismo of traditional epic poetry while remaining a genuine exploration of emotions. Annie’s quest to hold onto her grand ideas of love throughout the poem is elevated by its literary connection with the hero’s journey. 
    And she goes through a transformation of consciousness by the end of the 43 stanzas. The language is intentionally dense, but what Brooks accomplishes in this poem works on so many levels.
    </textarea>
    </>
    
    )
}

export default Clicker;