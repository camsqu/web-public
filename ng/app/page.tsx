import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import React from "react";
import { Card, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

export const runtime = 'edge';

export default function Home() {

	return (
		<section className="flex">
			<div className="flex-col md-5 mr-10">
				<h1 className={title({ color: "cyan" })}>Cameron Squire</h1>
				<h2 className={subtitle()}>Networking Student and HomeKit user</h2>
			</div>
			<div className="flex-row justify-right align-items-right">
				<div className="flex">
				<Card
					isFooterBlurred
					isHoverable
					radius="lg"
					className="border-none hover:scale-110"
				>
					<Image
						alt="Woman listing to music"
						className="object-cover"
						height={200}
						src="https://64.media.tumblr.com/74f1b15e95c6dc42a2d914d628b43088/b23c1e90665c60ca-19/s1280x1920/09935c2f01e278877f9acad3ec086e46f40fe5c0.gifv"
						width={200}
					/>
					<CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
						<p className="text-tiny text-white/80">Hot memes</p>
						<Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
							Notify me
						</Button>
					</CardFooter>
				</Card>
				</div>
				<div className="flex">
				<Card
					isFooterBlurred
					isHoverable
					radius="lg"
					className="border-none hover:scale-110"
				>
					<Image
						alt="Woman listing to music"
						className="object-cover"
						height={200}
						src="https://64.media.tumblr.com/0013d8a7f1ef8706fae27a657d55f981/tumblr_pp999v0FSv1rnbw6mo1_500.gifv"
						width={200}
					/>
					<CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
						<p className="text-tiny text-white/80">About me</p>
						<Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
							Notify me
						</Button>
					</CardFooter>
				</Card>
				</div>
			</div>
		</section>
	);
}
