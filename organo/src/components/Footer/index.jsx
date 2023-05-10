import './index.css'

export default function Footer(){
    return(
        <section className='footer'>
            <div>
                <ul>
                    <li>
                        <a href="https://pt-br.facebook.com/"> 
                            <img src="/images/fb.png" alt="logo-facebook"></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/login"> 
                            <img src="/images/tw.png" alt="logo-twitter"></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/"> 
                            <img src="/images/ig.png" alt="logo-instagram"></img>
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <img src="/images/logo.png" alt="logo-organo" />
            </div>

            <div>
                <p>Desenvolvido por Alura.</p>
            </div>
        </section>
    )
}