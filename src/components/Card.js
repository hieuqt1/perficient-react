import './Card.css'

function Card(props) {

    /**classes takes in any tag's className as arguments and adds 'card' tag to it as well
     * 
     * ex: <div className = 'example'> now becomes <div className = 'card example'>
    */
    const classes = 'card ' + props.className;
    return (

        /**props.children takes in all content between tags as arguments
         * 
         * ex: <div>This is sample output
         * to make some fluff content as 
         * an example for clarity</div>
         * 
         * .children takes in 'This is sample output
         * to make some fluff content as 
         * an example for clarity' as arguments
        */
        <div className={classes}>{props.children}</div>
    )
}

export default Card;