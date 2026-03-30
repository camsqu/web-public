import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Spacer, Image, Link, Divider } from "@nextui-org/react";
import { title } from "@/components/primitives";

export default function ProjectsPage() {
	return (
		<div>

			<h1 className={title()}>Projects</h1>
			<Spacer y={10} />
			<div className="flex">
				<Card className="">
					<CardHeader className="flex gap-3">
						<Image
						alt="UFEI logo"
						height={40}
						radius="sm"
						src="https://ufei.calpoly.edu/wp-content/uploads/2021/02/UFEI.png"
						width={140}
						/>
						<div className="flex flex-col">
						<p className="text-md">Rapid Urban Forestry Assessment</p>
						<p className="text-small text-default-500">ufei.calpoly.edu</p>
						</div>
					</CardHeader>
					<Divider/>
					<CardBody>
						<p>Today there are no available tools to view the forestry levels in urban areas, inhibiting green efforts to combat climate change. Our project is to create the frontend of a user friendly tool that allows for new data ingestion to an existing database which is then analyzed and presents visually pleasing visualizations and appropriate recommendations to increase urban tree coverage.</p>
					</CardBody>
					<Divider/>
					<CardFooter>
						<Link
						isExternal
						showAnchorIcon
						href="https://ufei.calpoly.edu"
						>
						UFEI Project from Cal Poly.
						</Link>
					</CardFooter>
					</Card>
			</div>
		</div>
	);
}
