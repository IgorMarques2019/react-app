import { useParams } from "react-router-dom";
import './post.css'
import { useState } from "react";
function Produto(){

  const {id} = useParams()
  const [post,setPost] = useState({})
    
      function searchPost(){
        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
        fetch(url)
        .then((resposta) => resposta.json())
        .then((content)=>{
          let meuPost = content.find((postId)=>{
            return postId.id == id
          })
          setPost(meuPost)
        })
        .catch(()=>{
          console.log('erro na requisição')
        })
        }
      searchPost()
      

  


  return(
    <div id="container">
      <div id="post">
        <h1>{post.titulo}</h1>
        <img src={post.capa} alt="Capa do post"/>
        <p>{post.subtitulo}</p>
      </div>
    </div>
    
  )
}
export default Produto;