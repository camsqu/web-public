import React from "react";
import {Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import {  Autocomplete,  AutocompleteSection,  AutocompleteItem} from "@nextui-org/autocomplete";
import { title } from "@/components/primitives";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";

export default function ProjectsPage() {
	return (
		<div>
			<h1 className={title()}>Projects</h1>
			<div className="grid grid-cols-3 gap-4">
			<Card className="max-w-[400px]">
				<CardHeader className="flex gap-3">
					<Image
					alt="nextui logo"
					height={40}
					radius="sm"
					src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
					width={40}
					/>
					<div className="flex flex-col">
					<p className="text-md">Rapid Urban Forestry Assessment</p>
					<p className="text-small text-default-500">selectree.calpoly.edu</p>
					</div>
				</CardHeader>
				<Divider/>
				<CardBody>
					<p>Make beautiful websites regardless of your design experience.</p>
				</CardBody>
				<Divider/>
				<CardFooter>
					<Link
					isExternal
					showAnchorIcon
					href="https://github.com/nextui-org/nextui"
					>
					Visit source code on GitHub.
					</Link>
				</CardFooter>
				</Card>
			</div>
		</div>
	);
}
