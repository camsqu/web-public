"use client";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

export default function Home() {

	return (
		<section className="flex">
			<div className="flex-col md-5">
				<h1 className={title({ color: "cyan" })}>Cameron Squire</h1>
				<h2 className={subtitle()}>Networking Student and HomeKit user</h2>
			</div>
			<div className="flex-col justify-right align-items-right">
				<Card
					isFooterBlurred
					radius="lg"
					className="border-none"
				>
					<Image
						alt="Woman listing to music"
						className="object-cover"
						height={200}
						src="https://i.redd.it/6pl929hz3yg51.jpg"
						width={200}
					/>
					<CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
						<p className="text-tiny text-white/80">Available soon.</p>
						<Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
							Notify me
						</Button>
					</CardFooter>
				</Card>
			</div>
		</section>
	);
}
