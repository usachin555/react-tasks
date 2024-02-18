function ButtonComponent({title, width, backgroundColor}){
    return(
        <button style={{width:width, backgroundColor:backgroundColor}}>{title}</button>
    )
}
export default ButtonComponent