import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../Public/logo.png";
import { StyledHeader } from "./StyledHeader";
import phone from "../../Public/header/phone.png";
import whatsapp from "../../Public/header/whatsapp.png";
import mail from "../../Public/header/mail.png";
import down from "../../Public/header/down.png";
export const Header = () => {
	return (
		<StyledHeader>
			<div className="logo">
				<Image src={logo} alt="CliCasa Logo" layout={'fixed'} />
				<p>
					Cli<span>Casa</span>
				</p>
			</div>
			<nav>
				<Link href="/">
					<a><p>VENDER</p></a>
				</Link>
				<Link href="/">
					<a><p>COMPRAR</p></a>
				</Link>
				<Link href="/">
					<a><p>#YOELIJOCLICPISO</p></a>
				</Link>
				<Link href="/">
					<a>
						<p>¿POR QUÉ CLICPISO?</p>
						{/* <Image src={down} alt="down picture" width={25} height={25}/> */}
					</a>
				</Link>
			</nav>
			<div className="social">
				<Image src={phone} alt="phone picture" width={60} height={60} />
				<p>910 123 456</p>
				<Image src={whatsapp} alt="whatsapp picture" width={60} height={60} />
				<Image src={mail} alt="mail picture" width={60} height={60} />
			</div>
		</StyledHeader>
	);
};
