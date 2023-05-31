import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import './blog.css'
function Blog(){
  const [nutri,setNutri] = useState([])

  useEffect(()=>{

   function loadApi(){
     let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
     fetch(url)
     .then((resposta) => resposta.json())
     .then((json) => {
       setNutri(json)
     })

     .catch(()=> console.log('erro na api'))
   }
    loadApi()
  },[])

let catArray = nutri.map((item)=>{
 return item.categoria
})

function filtrarCategorias(array){
 return array.filter((item,index)=>{
   return array.indexOf(item) === index                                                                                            
 })
}

let categoriaPost = filtrarCategorias(catArray)

   return(
   <section id="blog">
     {categoriaPost.map((item)=>{

       return(
         <div className={'area_post'}>
          <h2>{item}</h2>
          <div className="c_post">
          {nutri.map((itemp) =>{
             if(itemp.categoria === item){
               return(
                 <div  className="post">
                 <div className="post_info">
                 < img src={itemp.capa} alt={itemp.titulo} />
                   <h4>{itemp.titulo}</h4>
                 <p>{itemp.subtitulo}</p>
                 </div>
                 <Link to={`/produto/${itemp.id}`}>Ver Post</Link>
                 </div>
               )
             }
           })}
          </div>
     

          
         </div>
       )
     })}
   </section>
   )
}

export default Blog;