'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Slider from "./slider";
import Slidertfg from "./slidertfg";
import { useRef,useEffect } from 'react';
import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";

export default function Home() {
  const fotobig = useRef<HTMLDivElement>(null);
  const selected = useRef<HTMLDivElement>(null);
  const proyectos = useRef(null);
  const tecnologias = useRef(null);
  const experiencia = useRef(null);
  const portada = useRef(null);
  const sobre = useRef(null);

  function toggleImage() {
    if (fotobig.current) {
      fotobig.current.classList.toggle('invisible');
  } else {
      console.log("fotobig is null");
  }
  }
  function imagenizquierda(event:any) {

    let div = event.target.parentNode.parentNode;
    console.log("izquierda",div);
  }
  function imagenderecha(event:any) {
    let div = event.target.parentNode.parentNode;
    console.log("derecha",div);
    
  }
  function scrollToTarget(id:string) {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // selected.style.setProperty('width',`100px`);
      if (selected.current) {
        // selected.current.style.backgroundColor = 'lightblue';
      }
    }
  }
function initObserver(element:any, pixeles:any, threshold:any) {
  const elemento = document.querySelector(element)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("entrando")
          if (selected.current) {
            selected.current.style.width = pixeles;
          }
          // observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5,
      rootMargin: '0px 0px -50% 0px',
     } // Ajusta el umbral según tus necesidades
  );

  if (elemento) {
    observer.observe(elemento);
  }
}

  useEffect(() => {
    if (window.innerWidth > 800) {
      initObserver('#home', '46px',0.5);
      initObserver('#tecnologias', '114px',0.5);
      initObserver('#experiencia','180px',0.2);
      initObserver('#proyectostrigger', '245px',0.5);
      initObserver('#sobre', '310px',0.5);
    }else{
      console.log("test")
      initObserver('#home', '46px',0.5);
      initObserver('#tecnologias', '100px',0.5);
      initObserver('#triggermobileexp','150px',0.1);
      initObserver('#proyectostrigger', '203px',0.5);
      initObserver('#sobre', '255px',0.5);
    }


  }, []);
return (
   <>
      <header className={styles.header}>
          <div className={styles.contentHeader}>
            <div className={styles.secHeader}>
                <div className={styles.perfilcaja}>
                    <div className={styles.fperfil} onClick={toggleImage}>
                        <Image src="/perfil.png" alt="perfil" width={50} height={50} />
                    </div>
                    <div className={styles.textoscaja}>
                      <div>Roberto Bermejo</div>
                      <div>Desarrollador Full Stack</div>
                    </div>
                </div>
            </div>
            <div className={styles.secHeader}>
               <div className={styles.menuheader}>
                  <div className="selected" ref={selected}></div>
                  <div className={styles.menuitem}  onClick={()=> {scrollToTarget("home")}}>
                    <Image className={styles.imagenimgproyectoscontenidoslide} src="/home.png" alt="home" width={23} height={23}  objectFit="cover" />
                  </div>
                  <div className={styles.menuitem} onClick={()=> {scrollToTarget("tecnologias")}}>
                    <Image className={styles.imagenimgproyectoscontenidoslide} src="/code.png" alt="home" width={23} height={23}  objectFit="cover" />
                  </div>
                  <div className={styles.menuitem} onClick={()=> {scrollToTarget("experiencia")}}>
                    <Image className={styles.imagenimgproyectoscontenidoslide} src="/work.png" alt="home" width={23} height={23}  objectFit="cover" />
                  </div>
                  <div className={styles.menuitem} onClick={()=> {scrollToTarget("proyectos")}}>
                    <Image className={styles.imagenimgproyectoscontenidoslide} src="/tool.png" alt="home" width={23} height={23}  objectFit="cover" />
                  </div>
                  <div className={styles.menuitem} onClick={()=> {scrollToTarget("sobre")}}>
                    <Image className={styles.imagenimgproyectoscontenidoslide} src="/mail.png" alt="home" width={23} height={23}  objectFit="cover" />
                  </div>
               </div>
            </div>
          </div>
      </header>
 <main>
  <div id="backgrondfotobig" className="invisible" ref={fotobig} onClick={toggleImage}>
    <div id="fotobig">
        <div style={{}}>
          <Image src="/perfil.png" alt="perfil" layout="fill" objectFit="cover" />
        </div>
      </div>
  </div>

      <section  id="home" className={styles.portada} ref={portada}>
          <div className={styles.portadawrapper}>
            <button className={styles.buttoncv} onClick={()=>{window.open("./CV_ROBERTO.pdf")}}>Descargar CV</button>
            <h1 className={styles.titulo}>Desarrollador Web</h1>
            <h1 className={styles.nombre}>Roberto Bermejo</h1>
            <span className={styles.subtitulo}>Full Stack React & Laravel</span>
            <button className={styles.buttoninfo} onClick={()=>{window.open('https://www.linkedin.com/in/roberto-bermejo-matillas/')}}>Linkedin</button>
            <div className={styles.tecnologiasportada}>
              <div  className={styles.itemtecnologiasportada}>
                <div style={{ position: 'relative', width: '100%', height: '50px' }}>
                  <Image src="/html5.png" alt="perfil"    layout="fill"objectFit="contain" />
                </div>
              </div>
              <div  className={styles.itemtecnologiasportada}>
                <div style={{ position: 'relative', width: '100%', height: '50px' }}>
                  <Image src="/css3.png" alt="perfil"    layout="fill" objectFit="contain" />
                </div>
              </div>
              <div  className={styles.itemtecnologiasportada}>
              <div style={{ position: 'relative', width: '100%', height: '50px' }}>
                  <Image src="/javascc.webp" alt="perfil"    layout="fill" objectFit="contain" />
                </div>
              </div>
              <div  className={styles.itemtecnologiasportada}>
              <div style={{ position: 'relative', width: '100%', height: '50px' }}>
                  <Image src="/react.png" alt="perfil"    layout="fill" objectFit="contain" />
                </div>
              </div>
              <div  className={styles.itemtecnologiasportada}>
              <div style={{ position: 'relative', width: '100%', height: '50px' }}>
                  <Image src="/larav.png" alt="perfil"    layout="fill" objectFit="contain" />
                </div>
              </div>
              <div  className={styles.itemtecnologiasportada}>
              <div style={{ position: 'relative', width: '100%', height: '50px' }}>
                  <Image src="/nodess.png" alt="perfil"    layout="fill" objectFit="contain" />
                </div>
              </div>
            </div>
          </div>

      </section>

      <section id="tecnologias" ref={tecnologias}>
      <div className={styles.secproyectoswrapper}>

        <div className={styles.menuproyectoscontenidotecnologias}>
          <h5 className={styles.tituloSecciones}>STACK TECNOLOGICO</h5>
          <h2 className={styles.subtituloSecciones}>Lista tecnologias, librerias y frameworks usado</h2>
          <div className="barraSeparadora"></div>
        </div>
        <div className="listado list1">
            <div className="listadoitem" style={{ position: 'relative' }}>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src="/html5.png" alt="perfil"    layout="fill" objectFit="contain" />
                </div>
                <div className="listadoitempopup invisible">
                  <h5 className={styles.tituloSecciones}>HTML5</h5>
                  <p className={styles.subtitulo} style={{fontSize:'12px',marginBottom:'0px'}}>5 Años Experiencia.</p>
                </div>
            </div>
            <div className="listadoitem" style={{ position: 'relative' }}>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src="/css3.png" alt="perfil"    layout="fill"objectFit="contain" />
                </div>
                <div className="listadoitempopup invisible">
                  <h5 className={styles.tituloSecciones}>CSS3</h5>
                  <p className={styles.subtitulo} style={{fontSize:'12px',marginBottom:'0px'}}>5 Años Experiencia.</p>
                  <h5 className={styles.tituloSecciones}>Librerias</h5>
                  <ul>
                    <li>Bootstrap - 4 meses</li>
                    <li>Tailwind - 4 meses</li>
                    <li>SCSS/SASS - 1 mes</li>
                  </ul>
                </div>
            </div>
            <div className="listadoitem" style={{ position: 'relative' }}>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src="/javascc.webp" alt="perfil"    layout="fill"objectFit="contain" />
                </div>
                <div className="listadoitempopup invisible">
                  <h5 className={styles.tituloSecciones}>JavaScript</h5>
                  <p className={styles.subtitulo} style={{fontSize:'12px',marginBottom:'0px'}}>4 Años Experiencia.</p>
                  <h5 className={styles.tituloSecciones}>Librerias</h5>
                  <ul>
                    <li>GULP - 4 meses</li>
                    <li>GSAP - 2 meses</li>
                    <li>WebPack - 1 año</li>
                    <li>VideoJS - 1 año</li>
                  </ul>
                </div>
            </div>
            <div className="listadoitem" style={{ position: 'relative' }}>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src="/react.png" alt="perfil"    layout="fill"objectFit="contain" />
                </div>
                <div className="listadoitempopup invisible">
                  <h5 className={styles.tituloSecciones}>React</h5>
                  <p className={styles.subtitulo} style={{fontSize:'12px',marginBottom:'0px'}}>1 Años Experiencia.</p>
                </div>
            </div>
            <div className="listadoitem" style={{ position: 'relative' }}>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src="/larav.png" alt="perfil"    layout="fill"objectFit="contain" />
                </div>
                <div className="listadoitempopup invisible">
                  <h5 className={styles.tituloSecciones}>Laravel</h5>
                  <p className={styles.subtitulo} style={{fontSize:'12px',marginBottom:'0px'}}>2 Años Experiencia.</p>
                </div>
            </div>
            <div className="listadoitem" style={{ position: 'relative' }}>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src="/nodess.png" alt="perfil"    layout="fill"objectFit="contain" />
                </div>
                <div className="listadoitempopup invisible">
                  <h5 className={styles.tituloSecciones}>NodeJs</h5>
                  <p className={styles.subtitulo} style={{fontSize:'12px',marginBottom:'0px'}}>3 Años Experiencia.</p>
                </div>
            </div>
            <div className="listadoitem" style={{ position: 'relative' }}>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src="/mysql.png" alt="perfil"    layout="fill"objectFit="contain" />
                </div>
                <div className="listadoitempopup invisible">
                  <h5 className={styles.tituloSecciones}>MySQL</h5>
                  <p className={styles.subtitulo} style={{fontSize:'12px',marginBottom:'0px'}}>3 Años Experiencia.</p>
                </div>
            </div>
            <div className="listadoitem" style={{ position: 'relative' }}>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src="/php.png" alt="perfil"    layout="fill"objectFit="contain" />
                </div>
                <div className="listadoitempopup invisible">
                  <h5 className={styles.tituloSecciones}>PHP</h5>
                  <p className={styles.subtitulo} style={{fontSize:'12px',marginBottom:'0px'}}>4 Años Experiencia.</p>
                </div>
            </div>
            <div className="listadoitem" style={{ position: 'relative' }}>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src="/next.png" alt="perfil"    layout="fill"objectFit="contain" />
                </div>
                <div className="listadoitempopup invisible">
                  <h5 className={styles.tituloSecciones}>NEXT</h5>
                  <p className={styles.subtitulo} style={{fontSize:'12px',marginBottom:'0px'}}>1 Años Experiencia.</p>
                </div>
            </div>
        </div>
      </div>
      </section>




      <section id="experiencia" ref={experiencia}>
      <div className={styles.secproyectoswrapper}>


        <div className={styles.menuproyectoscontenidosobremi}>
          <div className={styles.itemproyectoscontenido} ref={experiencia}>
            <div className={styles.itemproyectoscontenidoslidesobremi}>
              <h5 className={styles.tituloSecciones} id="triggermobileexp">EXPERIENCIA</h5>
              <h2 className={styles.subtituloSecciones}>Experiencia profesional</h2>
              <div className="barraSeparadora"></div>
              <p className={styles.parafoSecciones} style={{fontSize:'18px', paddingRight:'30px'}}>Como desarrollador full stack, he adquirido habilidades blandas esenciales y una gran capacidad de análisis. He aprendido a colaborar eficazmente en equipo con diversos departamentos y a desempeñarme de forma autónoma, gestionando proyectos complejos de principio a fin. Estas competencias me permiten abordar desafíos técnicos con confianza y eficiencia.</p>
            </div>
            <div className={styles.itemproyectoscontenidoslidesobremi}>
              <div className={styles.textosSobremiexperiencia} style={{ position: 'relative', height: 'auto' }}>
                 <h5>PRISA MEDIA - AdTech - Programador Junior</h5>
                 <div style={{ display: 'flex', width: '100%',justifyContent:'start',flexWrap:'wrap' }}>
                  <div style={{ marginRight:'40px', minWidth:'200px' }}>
                    <span>Funciones:</span>
                    <ul>
                        <li>Desarrollo de formatos</li>
                        <li>Herramientas Full Stack</li>
                        <li>Analisis de datos</li>
                        <li>Resolucion de incidencias</li>
                        <li>Automatizar tareas</li>
                      </ul>
                 </div>
                  <div >
                    <span>Tecnologias:</span>
                    <ul>
                      <li>HTML5, CSS3, JavaScript</li>
                      <li>PHP, Laravel</li>
                      <li>React</li>
                      <li>Jest</li>
                      <li>Diversas Librerias</li>
                    </ul>
                  </div>
                 </div>

               
                 
              </div>
              <div className={styles.textosSobremiexperiencia} style={{ position: 'relative', height: 'auto' }}>
                 <h5>Binary Soluciones Informaticas - Programador Becario</h5>
                 <div style={{ display: 'flex', width: '100%',justifyContent:'start',flexWrap:'wrap' }}>
                  <div style={{ marginRight:'40px', minWidth:'200px' }}>
                    <span>Funciones:</span>
                      <ul>
                        <li>Correcion Errores</li>
                        <li>Maquetado</li>
                      </ul>
                 </div>
                  <div>
                    <span>Tecnologias:</span>
                    <ul>
                      <li>HTML5, CSS3, JavaScript</li>
                      <li>PHP</li>
                    </ul>
                  </div>
                 </div>
              </div>
            </div>
            
          </div>
        </div>

        </div>
      </section>
      <section  id="proyectos" className={styles.secproyectos}>
        <div className={styles.secproyectoswrapper}>

        
        <div  className={styles.menuproyectos} ref={proyectos}>
            <h5 className={styles.tituloSecciones}  id="proyectostrigger">PROYECTOS</h5>
            <h2 className={styles.subtituloSecciones}>Mis proyectos destacados</h2>
            <div className="barraSeparadora"></div>
            {/* <div className={styles.menuproyectoscaja}>
                <div className={styles.menuproyectositem} style={{ textDecoration: 'underline'}}>Todos</div>
                <div className={styles.menuproyectositem}>Full Stack</div>
                <div className={styles.menuproyectositem}>Frontend</div>
                <div className={styles.menuproyectositem}>Backend</div>
            </div> */}
        </div>


        <div className={styles.menuproyectoscontenido}>
          <div className={styles.itemproyectoscontenido}>
            <div className={styles.itemproyectoscontenidoslide}>
              <h5 className={styles.tituloSecciones}>Full Stack</h5>
              <h2 className={styles.subtituloSecciones}>Como En Hytale Web</h2>
              <p className={styles.parafoSecciones}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, excepturi! Lorem ipsum dolor sit amet.</p>
              <div className={styles.tecnologiasProyecto}>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
              </div>
            </div>
            <div className={styles.itemproyectoscontenidoslide}>
              {/* <div className={styles.imagenproyectoscontenidoslide} style={{ position: 'relative', width: '100%', height: '300px' }}>
                  <Image className={styles.imagenimgproyectoscontenidoslide} src="/port.png" alt="proyecto1"    layout="fill" objectFit="cover" />
                  <div className="controlsImagenes">
                      <div className="irizquierda" onClick={(e:any)=>{imagenizquierda(e)}}></div>
                      <div className="irderecha" onClick={(e:any)=>{imagenderecha(e)}}></div>
                  </div>
              </div> */}
              <Slider></Slider>
            </div>
          </div>
        </div>




        <div className={styles.menuproyectoscontenido}>
          <div className={styles.itemproyectoscontenido}>

            <div className={styles.itemproyectoscontenidoslide}>
              {/* <div className={styles.imagenproyectoscontenidoslide} style={{ position: 'relative', width: '100%', height: '300px' }}>
                  <Image className={styles.imagenimgproyectoscontenidoslide} src="/port.png" alt="proyecto1"    layout="fill" objectFit="cover" />
              </div> */}
                <Slidertfg></Slidertfg>
            </div>
            
            <div className={styles.itemproyectoscontenidoslide}>
              <h5 className={styles.tituloSecciones}>Full Stack</h5>
              <h2 className={styles.subtituloSecciones}>Web Restaurante TFG</h2>
              <p className={styles.parafoSecciones}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, excepturi! Lorem ipsum dolor sit amet.</p>
              <div className={styles.tecnologiasProyecto}>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.menuproyectoscontenido}>
          <div className={styles.itemproyectoscontenido}>
            <div className={styles.itemproyectoscontenidoslide}>
              <h5 className={styles.tituloSecciones}>Full Stack</h5>
              <h2 className={styles.subtituloSecciones}>Herramienta Flex</h2>
              <p className={styles.parafoSecciones}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, excepturi! Lorem ipsum dolor sit amet.</p>
              <div className={styles.tecnologiasProyecto}>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
              </div>
            </div>
            <div className={styles.itemproyectoscontenidoslide}>
            <div className={styles.imagenproyectoscontenidoslide} style={{ position: 'relative', width: '100%', height: '300px' }}>
                  <Image className={styles.imagenimgproyectoscontenidoslide} src="/imagenesTFG/flex.png" alt="proyecto1"    layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        </div>



        <div className={styles.menuproyectoscontenido}>
          <div className={styles.itemproyectoscontenido}>
            <div className={styles.itemproyectoscontenidoslide}>
            <div className={styles.imagenproyectoscontenidoslide} style={{ position: 'relative', width: '100%', height: '300px' }}>
                  <Image className={styles.imagenimgproyectoscontenidoslide} src="/imagenesTFG/marmoles.png" alt="proyecto1"    layout="fill" objectFit="cover" />
              </div>
            </div>

            <div className={styles.itemproyectoscontenidoslide}>
              <h5 className={styles.tituloSecciones}>Full Stack</h5>
              <h2 className={styles.subtituloSecciones}>Gestor Empresa Marmoles</h2>
              <p className={styles.parafoSecciones}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, excepturi! Lorem ipsum dolor sit amet.</p>
              <div className={styles.tecnologiasProyecto}>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
              </div>
            </div>

          </div>
        </div>


        
        </div>
      </section>

      <section  id="sobre" ref={sobre}>
      <div className={styles.secproyectoswrapper}>


        <div className={styles.menuproyectoscontenidosobremi}>
          <div className={styles.itemproyectoscontenido}>
            <div className={styles.itemproyectoscontenidoslidesobremi}>
              <h5 className={styles.tituloSecciones}>SOBRE MI</h5>
              <h2 className={styles.subtituloSecciones}>Roberto Bermejo</h2>
              <div className="barraSeparadora"></div>
              <p className={styles.parafoSecciones}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odit sint dolorum facere. Molestiae rerum in mollitia soluta quibusdam placeat nesciunt animi, ea iusto tempora eligendi sunt minus dolores reiciendis eos commodi velit voluptatibus vitae, odio exercitationem sint. Odit ad laborum provident maiores itaque iusto ipsum molestias quibusdam beatae ut?</p>
            </div>
            <div className={styles.itemproyectoscontenidoslidesobremi}>
              <div className={styles.textosSobremi} style={{ position: 'relative', height: 'auto' }}>
                 <h5>Tecnico Superior Desarrollo Aplicaciones Web</h5>
                 <p>Tecnologias aprendidas: HTML5, CSS3, JavaScript, PHP, Java. <br /> <br />
                 Graduado en 2022 en el IES Arcipeste de hita, Guadalajara.</p>
              </div>
            </div>
          </div>
        </div>

        </div>
      </section>



      <footer>

      </footer>
    </main>
    </>
  );
}
