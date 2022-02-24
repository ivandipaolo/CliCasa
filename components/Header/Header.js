import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../Public/logo.png";

export const Header = () => {
	return (
		<div id="header">
			<div id="logo">
				<Image src={logo} alt="Picture of the author" width={50} height={52} />
				<p>
					Cli<span>Casa</span>
				</p>
			</div>
			<nav>
				<Link href="/">
					<a>Comprar</a>
				</Link>
				<Link href="/">
					<a>Vender</a>
				</Link>
				<Link href="/">
					<a>#YOELIJOCLICPISO</a>
				</Link>
				<Link href="/">
					<a>¿POR QUÉ CLICPISO?</a>
				</Link>
			</nav>

			<style jsx>{`
				#header {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					#logo{
						
					}
				}
			`}</style>
		</div>
	);
};
