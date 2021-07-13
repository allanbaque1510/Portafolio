import React from 'react'
import './css/Home.css'
import foto from './image/mifoto.jpeg'
import {Doughnut } from 'react-chartjs-2'
import evcom from './image/evcom.png'
import evcom2 from './image/evcom2.png'
import evcom3 from './image/evcom3.png'
import cont from './image/contabilidad.png'
import cont2 from './image/contabilidad2.png'
import cont3 from './image/contabilidad3.png'
import gold from './image/gold.png'
import gold2 from './image/gold2.png'
import gold3 from './image/gold3.png'
import logo from './image/logo.png'
const Home = () => {
    window.addEventListener('scroll',function(){
        let imagen= document.getElementsByTagName('li')
        console.log(imagen)
    })
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
                            <li><a href='https://github.com/allanbaque1510'><i class="fab fa-github"></i></a></li>
                            <li><a href='https://www.facebook.com/allan.baque.758'><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href='https://api.whatsapp.com/send?phone=593983739647'><i class="fab fa-whatsapp"></i></a></li>
                            <li><a href='https://www.linkedin.com/in/allan-baque-jacome-9612b9149/'><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                    <div className="proyectos">
                        <h2>Sobre mi</h2>
                            <div className="yo">
                                <img src={foto} alt="" />
                                <p>¡Hola! Mi nombre es Allan Baque, soy desarrollador web front-end, actualmente cursando la carrera de ingeniería en telemática, cuento con 1 año de experiencia en el campo del desarrollo web, soy una persona proactiva y con ganas de seguir aprendiendo. </p>
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
                                    <Doughnut  data={data}  />
                                </div>
                        </div>
                        <div className="pr-r">
                            <h2>Proyectos creados</h2>
                            
                            <div className="proyect">
                                <div className="monitor">
                                <div className="slider">
                                        <ul>
                                            <li><img src={evcom} alt="" /></li>
                                            <li><img src={evcom2} alt="" /></li>
                                            <li><img src={evcom3} alt="" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="texto-p">
                                    <h3>EvCom Catalogo</h3>
                                    <p>Este proyecto se trata de un catálogo de productos de una tienda física, el problema a resolver es de que los clientes puedan realizar sus pedidos, o ver los productos disponibles con los que cuenta la tienda, así mismo la tienda cuenta con un sistema de agregar productos para mostrar en la sección.</p>
                                    <br />
                                    <a href='https://ecomerce-f1ad8.web.app' className='link-p'>Ir al proyecto!</a>                                
                                </div>
                            </div>

                            <div className="proyect">
                                <div className="monitor">
                                <div className="slider">
                                        <ul>
                                            <li><img src={cont} alt="" /></li>
                                            <li><img src={cont2} alt="" /></li>
                                            <li><img src={cont3} alt="" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="texto-p">
                                    <h3>App de contabilidad</h3>
                                        <p>El objetivo de esta aplicación web, es de llevar el control del pago y de la deuda que tiene el cliente, así como el total de la cuenta, la aplicación cuenta con un historial donde se registra todos los pagos realizados, además de una sección de registro y modificación de datos. La base de datos que se utiliza es FireBase.</p>
                                    <br />
                                    <a href='https://a-contabilidad.web.app' className='link-p'>Ir al proyecto!</a>
                                </div>
                            </div>


                            <div className="proyect">
                                <div className="monitor">
                                <div className="slider">
                                        <ul>
                                            <li><img src={gold} alt="" /></li>
                                            <li><img src={gold3} alt="" /></li>
                                            <li><img src={gold2} alt="" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="texto-p">
                                    <h3>Gold Professional</h3>
                                        <p>Gold professional es una empresa que se encarga de productos para cabello, donde muestra cada producto con los que cuenta la empresa y el método de tratamiento de cada uno, cuenta con una sección para contacto en el cual se usa un microservicio para el envío de emails, además de vínculos con geolocalización de los diferentes locales donde se pueden encontrar dichos productos.</p>
                                    <br />
                                    <a href='https://goldproffesional.web.app' className='link-p'>Ir al proyecto!</a>
                                </div>
                            </div>

                        </div>
                        <div className="logo">
                            <img src={logo} className='ima-log' alt="" />
                            <div className="texto-logo">
                            <p>
                            Portafolio de desarrollador web
                            <br />
                            Created By <b>Allan Baque</b> |&copy; All rights reserved </p>
                            </div>
                        </div>
                </div>
        </div>
    )
}

export default Home
