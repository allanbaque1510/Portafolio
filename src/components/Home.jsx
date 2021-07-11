import React from 'react'
import './css/Home.css'
import {Link} from 'react-router-dom'
import foto from './image/mifoto.jpg'
import {Doughnut } from 'react-chartjs-2'
import evcom from './image/evcom.png'
const Home = () => {
    window.addEventListener('scroll',function(){
        let imagen= document.getElementsByTagName('li')
        console.log(imagen)
    })
    const opciones={
        responsive:true
    }
    const data={
        labels:['Html', 'Css', 'JS', 'React','Git','Firebase'],
        datasets:[
            {
                label: 'Tecnologias que domino',
                data: [75, 43, 54, 84, 30, 39],
                backgroundColor:[
                    'rgb(255, 145, 0, 0.8)',
                    'rgb(0, 81, 255, 0.8)', 
                    'rgb(238, 255, 0, 0.8)', 
                    'rgb(0, 174, 255, 0.8)',
                    'rgb(161, 12, 12, 0.8)',
                    'rgb(8, 223, 151, 0.8)' 
                ],
                borderColor: [
                    'rgb(255, 145, 0)',
                    'rgb(0, 81, 255)', 
                    'rgb(238, 255, 0)', 
                    'rgb(0, 174, 255)',
                    'rgb(161, 12, 12)',
                    'rgb(8, 223, 151)' 
                  ],
                borderWidth: 1,
            },
        ],
    }


    return (
        <div className='home'>
            <div className="bienvenido">
                <div className="contenido">
                    <h1>Bienvenido</h1>
                    <p>A mi portafolio</p>
                </div>
                    <div className="contacto">
                        <ul>
                            <li><Link to='/'><i class="fab fa-github"></i></Link></li>
                            <li><Link to=''><i class="fab fa-facebook-f"></i></Link></li>
                            <li><Link to=''><i class="fab fa-whatsapp"></i></Link></li>
                            <li><Link to=''><i class="fab fa-linkedin-in"></i></Link></li>
                        </ul>
                    </div>
                    <div className="proyectos">
                        <h2>Sobre mi</h2>
                        <div className="yo">
                            <img src={foto} alt="" />
                            <p>Hola! Mi nombre es Allan Baque, soy desarrollador web front-end, actualmente cursando la carrera de ingenieria en telematica,
                            cuento con 1 año de experiencia en el campo del desarrollo web, soy una persona proactiva y con ganas de seguir aprendiendo</p>
                        
                            <ul>
                                <li><i class="fab fa-html5"></i></li>
                                <li><i class="fab fa-css3-alt"></i></li>
                                <li><i class="fab fa-js"></i></li>
                                <li><i class="fab fa-react"></i></li>
                                <li><i class="fab fa-git-alt"></i></li>
                                <li><i class="fas fa-server"></i></li>
                            </ul>
                        </div>
                                <div className="grafico">
                                    Tecnologias que uso:
                                    <Doughnut  data={data} options={opciones} width={100} height={100}/>
                                </div>
                        </div>
                        <div className="pr-r">
                            <h2>Proyectos creados</h2>
                            
                            <div className="proyect">
                                <div className="monitor">
                                    <img src={evcom} className='ima-monitor' alt="" />
                                </div>
                                <div className="texto-p">
                                    <h3>EvCom Catalogo</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aut sint consequuntur. Aliquid maxime facere veniam ducimus, cum exercitationem magnam.</p>
                                </div>
                            </div>

                            <div className="proyect">
                                <div className="monitor">
                                    <img src={evcom} className='ima-monitor' alt="" />
                                </div>
                                <div className="texto-p">
                                    <h3>EvCom Catalogo</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aut sint consequuntur. Aliquid maxime facere veniam ducimus, cum exercitationem magnam.</p>
                                </div>
                            </div>
                           

                        </div>
                </div>
        </div>
    )
}

export default Home
