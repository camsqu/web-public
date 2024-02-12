import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Spacer } from "@nextui-org/spacer";
import { Divider } from "@nextui-org/divider";
import { User } from "@nextui-org/user";
import 'animate.css';

export const runtime = 'edge';

function countSecondsSinceDate() {
	let date = new Date(2000-0o2-0o5);
	const currentDate = new Date();
	const difference = currentDate.getTime() - date.getTime();
	const seconds = Math.floor(difference / 1000);
	return seconds;
  }

export default function Home() {

	return (
		<section className="flex">
			<div className="flex-col">
				<h1 className={title()}>👋 Hey there, I'm <span className={title({ color: "cyan" })}>Cameron Squire</span></h1>
				<h2 className={`${subtitle()} animate__animated animate__fadeInUp`}>Networking Student and HomeKit user</h2>
				
				<Spacer y={14} />
				<Card>
					<CardBody>
					<p id="intro">I know what you're thinking, <i>another nerd with too many
                        domains</i> right? Hear me out for just a sec though, becuase I am no software developer.</p>
                <p id="explain">I am a many second old networking student and car enthusiast, I
                    enjoy messing with hardware and searching for vulnerabilities, both physical and virtual.</p>
                <p id="pitch">If that's something you want on your team or just want to say hey, reach out and let's
                    chat!</p>
					</CardBody>
				</Card>
                <Spacer y={4} />
				<div className="max-w-lg">
						<div className="space-y-1">
							<h4 className="text-medium font-medium">Find my accounts here</h4>
							<p className="text-small text-default-400">If you want to reach out and chat, you can do so from one of the below options.</p>
						</div>
						<Divider className="my-4" />
						<div className="flex h-5 items-center space-x-4 text-small">
						<Link isBlock showAnchorIcon href="mailto:hello@cameronsquire.com" size="lg" color="success">hello@</Link>
							<Divider orientation="vertical" />
							<Link isBlock showAnchorIcon href="https://linkedin.com/in/camsqu" color="primary">/in/camsqu</Link>
							<Divider orientation="vertical" />
							<Link isBlock showAnchorIcon href="https://github.com/camsqu" color="foreground">/camsqu</Link>
						</div>
				</div>
			</div>
		</section>
	);
}
