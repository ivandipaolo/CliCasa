import React from 'react'
import { StyledEnd, StyledFooter } from './_StyledFooter'
import logo from "../../Public/logo.png";
import Image from 'next/image';
import phone from "../../Public/header/phone.png";
import mail from "../../Public/header/mail.png";
import Link from 'next/link';
import facebook from '../../public/social/facebook.png'
import twitter from '../../public/social/twitter.png'
import linkedin from '../../public/social/linkedin.png'
import youtube from '../../public/social/youtube.png'

export const Footer = () => {
    return (
        <>
            <StyledFooter>
                <div className='line' />
                <div className='contactInfo'>
                    <div className="logo">
                        <Image src={logo} alt="CliCasa Logo" layout={'fixed'} />
                        <p>
                            Cli<span>Casa</span>
                        </p>
                    </div>
                    <div className='contact'>
                        <Image src={phone} alt="phone picture" width={60} height={60} />
                        <p>911 123 456</p>
                        <Image src={mail} alt="mail picture" width={60} height={60} />
                        <p>info@clicasa.com</p>
                    </div>
                </div>
                <div className='line' />
            </StyledFooter>
            <StyledEnd>
                <p>© 2017 CLICASA. TODOS LOS DERECHOS RESERVADOS</p>
                <nav className='help'>
                    <Link href="/">
                        <a><p>Mapa web</p></a>
                    </Link>
                    <Link href="/">
                        <a><p>Contacto</p></a>
                    </Link>
                    <Link href="/">
                        <a><p>Aviso legal</p></a>
                    </Link>
                </nav>
                <nav className='social'>
                    <Link href="/">
                        <a>
                            <Image src={facebook} alt="facebook" width={30} height={30} />
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <Image src={twitter} alt="twitter" width={30} height={30} />
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <Image src={linkedin} alt="linkedin" width={30} height={30} />
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <Image src={youtube} alt="youtube" width={30} height={30} />
                        </a>
                    </Link>
                </nav>
            </StyledEnd>
        </>
    )
}
