import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Spacer, Image, Link, Divider } from "@nextui-org/react";
import { title } from "@/components/primitives";

export default function SecurityPage() {
	return (
		<div>

			<h1 className={title()}>Security</h1>
			<Spacer y={10} />
			<div className="flex">
				<Card className="">
					<CardHeader className="flex gap-3">
						<div className="flex flex-col">
							<p className="text-md">Responsible Vulnerability Disclosure Policy</p>
							<p className="text-small text-default-500">cameronsquire.com</p>
						</div>
					</CardHeader>
					<Divider />
					<CardBody>
						<p>This website (cameronsquire.com) is a personal project, not a company or commercial service. Still, I take security seriously and appreciate anyone who helps identify and report potential vulnerabilities responsibly.

							How to Report

							If you believe you have found a security issue on this site, please email security@cameronsquire.com or use the address listed in my security.txt file.
							Include:
							•	A clear explanation of the issue.
							•	Steps to reproduce it (if applicable).
							•	Any relevant details or screenshots that help illustrate the problem.
						</p>
					</CardBody>
					<Divider />
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
