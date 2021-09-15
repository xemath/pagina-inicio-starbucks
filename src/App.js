import { useEffect, useState } from 'react';
import Header from './Header'
import Content from './Content'
import Botones from './Botones';
import Media from './Media';
import Circulo from './Circulo';

const imagen = [
{
  id : 0,
  imagen : '/imagenes/img1.png',
  thumb : 'imagenes/thumb1.png',
  color : 'circulo-verde'
},
{
  id : 1,
  imagen : '/imagenes/img2.png',
  thumb : 'imagenes/thumb2.png',
  color : 'circulo-rosado'
},
{
  id : 2,
  imagen : '/imagenes/img3.png',
  thumb : 'imagenes/thumb3.png',
  color : 'circulo-fucsia'
}
]
function App() {
  
  const [thumb, setThumb] = useState(imagen[0].imagen)
  const [colorCirculo, setColorCirculo] = useState(imagen[0].color)
  
  const cambiarImagen = (img, clr,indice)=>{
    setThumb(img)
    setColorCirculo(clr)
    
  }
  
  return (
    <section>
      <Header/>
      <Circulo color ={colorCirculo}/>
      <Content thumb={thumb}/>
      <Botones imagen={imagen} cambiarImagen={cambiarImagen}/>
      <Media/>
    </section>
  );
}

export default App;
