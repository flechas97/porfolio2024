'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useRef } from 'react';

export default function Home() {
  const fotobig = useRef<HTMLDivElement>(null);
  function toggleImage() {
    if (fotobig.current) {
      fotobig.current.classList.toggle('invisible');
  } else {
      console.log("fotobig is null");
  }
  }
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
                  <div className={styles.menuitem}>Inicio</div>
                  <div className={styles.menuitem}>Proyectos</div>
                  <div className={styles.menuitem}>Sobre mi</div>
                  <div className={styles.menuitem}>Certificaciones</div>
                  <div className={styles.menuitem}>Contacto</div>
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

      <section className={styles.portada}>
          <div className={styles.portadawrapper}>
            <button className={styles.buttoncv} onClick={()=>{window.open("./CV_ROBERTO.pdf")}}>Descargar CV</button>
            <h1 className={styles.titulo}>Desarrollador Web</h1>
            <h1 className={styles.nombre}>Bermejo Roberto</h1>
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
      <section>
      <div className={styles.secproyectoswrapper}>


        <div className={styles.menuproyectoscontenidosobremi}>
          <div className={styles.itemproyectoscontenido}>
            <div className={styles.itemproyectoscontenidoslidesobremi}>
              <h5 className={styles.tituloSecciones}>EXPERIENCIA</h5>
              <h2 className={styles.subtituloSecciones}>Experiencia profesional</h2>
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
      <section className={styles.secproyectos}>
        <div className={styles.secproyectoswrapper}>

        
        <div  className={styles.menuproyectos}>
            <h5 className={styles.tituloSecciones}>PROYECTOS</h5>
            <h2 className={styles.subtituloSecciones}>Mis proyectos destacados</h2>
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
              <div className={styles.imagenproyectoscontenidoslide} style={{ position: 'relative', width: '100%', height: '300px' }}>
                  <Image className={styles.imagenimgproyectoscontenidoslide} src="/port.png" alt="proyecto1"    layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        </div>




        <div className={styles.menuproyectoscontenido}>
          <div className={styles.itemproyectoscontenido}>

            <div className={styles.itemproyectoscontenidoslide}>
              <div className={styles.imagenproyectoscontenidoslide} style={{ position: 'relative', width: '100%', height: '300px' }}>
                  <Image className={styles.imagenimgproyectoscontenidoslide} src="/port.png" alt="proyecto1"    layout="fill" objectFit="cover" />
              </div>
            </div>
            
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
          </div>
        </div>


        <div className={styles.menuproyectoscontenido}>
          <div className={styles.itemproyectoscontenido}>
            <div className={styles.itemproyectoscontenidoslide}>
              <h5 className={styles.tituloSecciones}>Frontend</h5>
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
              <div className={styles.imagenproyectoscontenidoslide} style={{ position: 'relative', width: '100%', height: '300px' }}>
                  <Image className={styles.imagenimgproyectoscontenidoslide} src="/port.png" alt="proyecto1"    layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        </div>



        <div className={styles.menuproyectoscontenido}>
          <div className={styles.itemproyectoscontenido}>
            <div className={styles.itemproyectoscontenidoslide}>
              <div className={styles.imagenproyectoscontenidoslide} style={{ position: 'relative', width: '100%', height: '300px' }}>
                  <Image className={styles.imagenimgproyectoscontenidoslide} src="/port.png" alt="proyecto1"    layout="fill" objectFit="cover" />
              </div>
            </div>

            <div className={styles.itemproyectoscontenidoslide}>
              <h5 className={styles.tituloSecciones}>Backend</h5>
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

          </div>
        </div>


        
        </div>
      </section>

      <section>
      <div className={styles.secproyectoswrapper}>


        <div className={styles.menuproyectoscontenidosobremi}>
          <div className={styles.itemproyectoscontenido}>
            <div className={styles.itemproyectoscontenidoslidesobremi}>
              <h5 className={styles.tituloSecciones}>SOBRE MI</h5>
              <h2 className={styles.subtituloSecciones}>Roberto Bermejo</h2>
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

      <section>
      <div className={styles.secproyectoswrapper}>

        <div className={styles.menuproyectoscontenidotecnologias}>
          <h5 className={styles.tituloSecciones}>STACK TECNOLOGICO</h5>
          <h2 className={styles.subtituloSecciones}>Lista tecnologias usadas</h2>
        </div>
        <div className="listado list1">
            <div>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src="/html5.png" alt="perfil"    layout="fill"objectFit="contain" />
                </div>
            </div>
            <div>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src="/css3.png" alt="perfil"    layout="fill"objectFit="contain" />
                </div>
            </div>
            <div>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src="/javascc.webp" alt="perfil"    layout="fill"objectFit="contain" />
                </div>
            </div>
            <div>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src="/react.png" alt="perfil"    layout="fill"objectFit="contain" />
                </div>
            </div>
            <div>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src="/larav.png" alt="perfil"    layout="fill"objectFit="contain" />
                </div>
            </div>
            <div>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src="/nodess.png" alt="perfil"    layout="fill"objectFit="contain" />
                </div>
            </div>
            <div>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src="/html5.png" alt="perfil"    layout="fill"objectFit="contain" />
                </div>
            </div>
            <div>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src="/html5.png" alt="perfil"    layout="fill"objectFit="contain" />
                </div>
            </div>
            <div>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src="/html5.png" alt="perfil"    layout="fill"objectFit="contain" />
                </div>
            </div>
        </div>
        <div className="listado">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
      </section>

      <footer>

      </footer>
    </main>
    </>
  );
}
