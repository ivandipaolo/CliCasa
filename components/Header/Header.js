import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../Public/logo.png";
import { StyledHeader } from "./_StyledHeader";
import phone from "../../Public/header/phone.png";
import mail from "../../Public/header/mail.png";
import whatsapp from "../../Public/header/whatsapp.png";
import down from "../../Public/header/down.png";
import { Turn as Hamburger } from 'hamburger-react'
import { colors } from "../../styles/colors";
export const Header = () => {
	const [isOpen, setOpen] = useState(false)

	return (
		<StyledHeader>

			<div className="hamburger">
				<Hamburger toggled={isOpen} toggle={setOpen} color={colors.lightGrey} hidden />
			</div>

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
						<p>
							¿POR QUÉ CLICPISO?
						</p>
						<Image src={down} alt="down picture" width={25} height={25} />
					</a>
				</Link>
			</nav>
			<div className="social">
				<a href="/">
					<Image src={phone} alt="phone picture" width={60} height={60} />
				</a>
				<p>910 123 456</p>
				<a href="/">
					<Image src={whatsapp} alt="whatsapp picture" width={60} height={60} />
				</a>
				<a href="/">
					<Image src={mail} alt="mail picture" width={60} height={60} />
				</a>
			</div>
		</StyledHeader>
	);
};
