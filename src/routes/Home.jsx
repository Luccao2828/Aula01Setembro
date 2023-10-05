import {useState, useEffect} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

function Home (){


  //chamando Hooks

  const [slidePreview, setSlidePreview]=useState(1)

  //criando o objeto de imagem

  const imagens = [
    {id:'1',image:'./src/assets/img1.jpg'},
    {id:'1',image:'./src/assets/img2.jpg'},
  ]
  //Hook-useEffect cria efeito colateral

  useEffect(()=>{
    function handleResize(){
      if(window.innerWidht < 720){
        setSlidePreview(1)
      }else{
        setSlidePreview(2)
      }

   }
   handleResize();

   //evento para modificar toda vez em que o usario diminuir a tela

  })

  return(
    <section>
   
    </section>
  )
}
export default Home