const Card = (props)=>{
    return(
        <>
          <a href={props.elem.url}>
              <div  className='h-40 w-44 bg-white justify-center rounded'>
               <img src={props.elem.download_url} alt="Lorem Picsum" className="h-full w-full object-cover "/>
              </div>
              <h2 className='font-bold text-xl'>{props.elem.author}</h2>
          </a>  
        </>
    )
}
export default Card