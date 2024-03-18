import { title } from "@/components/primitives";
import { User } from "@nextui-org/user";
import {Spacer} from "@nextui-org/spacer";
import {Button, ButtonGroup} from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import {Chip} from "@nextui-org/chip";
import React from "react";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import resume from "./resume.json";
// import { DownloadIcon } from './downloadIcon';

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function DateFix(dateIn: any) {
	let date = new Date(dateIn);
	let month = months[date.getMonth()];
	let year = date.getFullYear();
	return month + " " + year;
}

function LineFix(lineIn: any) {
	let lines = lineIn.split("\n");
	lines.map((line: any, index: any) => {
		lines[index] = <p key={index}>{line}<br/></p>;
	}, lines);
	return lines;
};

function SkillList() {
	let skills = [];
for (let i = 0; i < resume.skills.length; i++) {
	let skill = <Chip key={i} variant="shadow">{resume.skills[i].name}</Chip>;
	skills.push(skill);
};
return skills;
};

function ExperienceList() {
	let exps = [];
	for (let i = 0; i < resume.work.length; i++) {
		let exp = 
		<Card key={i} className="max-w-[400px]">
					<CardHeader className="flex gap-3">
						<Image alt="Company logo" height={40} radius="sm" src={resume.work[i].logo} width={40}/>
						<div className="flex flex-col">
						<p className="text-md">{resume.work[i].name}</p>
						<p className="text-small text-default-500">{resume.work[i].position}</p>
						</div>
					</CardHeader>
					<Divider/>
					<CardBody>
						<p>{LineFix(resume.work[i].summary)}</p>
					</CardBody>
					<Divider/>
					<CardFooter>
						<div className="flex flex-col text-small text-default-500">
							<p>{DateFix(resume.work[i].startDate)} - {DateFix(resume.work[i].endDate)}</p>
							<p>{resume.work[i].location}</p>
						</div>
					</CardFooter>
				</Card>;
		exps.push(exp);
	};
return exps;
}

function CertList() {
	let certs = [];
	let someEnds = "";
	for (let i = resume.certificates.length - 1; i >= 0; i--) {
		if (!resume.certificates[i].endDate) {
			someEnds = "";
		}
		else {
			someEnds = " - " + DateFix(resume.certificates[i].endDate);
		}
		let cert = 
		<Card key={i} className="col-span-8 sm:col-span-4 sm:max-width h-[200px]">
			<CardHeader className="absolute z-10 top-1 flex-col !items-start">
				<p className="text-tiny text-white/60 uppercase font-bold">{DateFix(resume.certificates[i].startDate)}{someEnds}</p>
				<h4 className="text-white font-medium text-large">{resume.certificates[i].name}</h4>
			</CardHeader>
				<Image removeWrapper alt="Certification card background" className="z-0 w-full h-full object-cover" src={resume.certificates[i].image}/>
			<CardFooter className="absolute bg-black/40 bottom-0 border-t-1 border-default-600 dark:border-default-100 z-10 justify-between">
        		<div>
          			<p className="text-white text-tiny">{resume.certificates[i].issuer}</p>
          			<p className="text-white text-tiny">Credly link available</p>
        		</div>
        		<Button className="text-tiny" color="primary" radius="full" size="sm" as={Link} href={resume.certificates[i].url} showAnchorIcon>
          			Validate
        		</Button>
      		</CardFooter>
		</Card>;
		certs.push(cert);
	};
return certs;
};

function eduList() {
	let edus = [];
	for (let i = 0; i < resume.education.length; i++) {
		let edu = 
		<Card key={i} className="col-span-8 sm:col-span-4 sm:max-width h-[200px]">
			<CardHeader className="absolute z-10 top-1 flex-col !items-start">
				<p className="text-tiny text-white/60 uppercase font-bold">{DateFix(resume.education[i].startDate)} - {DateFix(resume.education[i].endDate)}</p>
				<h4 className="text-white font-medium text-large">{resume.education[i].institution}</h4>
			</CardHeader>
				<Image removeWrapper alt="Education card background" className="z-0 w-full h-full object-cover" src={resume.education[i].bgimage}/>
			<CardFooter className="absolute bg-black/40 bottom-0 border-t-1 border-default-600 dark:border-default-100 z-10 justify-between">
				<div className="flex gap-3">
				<Image alt="lime logo" height={40} radius="sm" src={resume.education[i].image} width={40}/>
		  			<p className="text-white text-tiny">{resume.education[i].area}</p>
				</div>
	  		</CardFooter>
		</Card>;
		edus.push(edu);
	};
return edus;
}

export default function ResumePage() {
	return (
		<div className="">
			<div className="">
				<div className="float-right">
					<Button color="primary" variant="faded" className="" href="https://cameronsquire.com/resume" as={Link} size="lg" showAnchorIcon>Download PDF</Button>
				</div>
			</div>
			<div className="">
				<User 
					name="Cameron Squire"
					description="A 24-year old networking and security enthusiast, surfing on the internet."
					avatarProps={{
						src: "https://media.licdn.com/dms/image/D5603AQEx__O84ryKlA/profile-displayphoto-shrink_200_200/0/1675265828854?e=1712793600&v=beta&t=5DawXRpIa3edcdLuVOobbA_yDsArVmJuzW44InyYhVE",
						size: "lg",	
						name: "CS"
					}}
					/>
				{/* <h1 className="text-lg">{resume.basics.label}</h1> */}
				<div className="space-between">
					<Spacer y={3}/>
				</div>
				<p>{resume.basics.summary}</p>
				<Spacer y={5}/>
				<p className={title()}>Education</p>
				<Spacer y={5}/>
				<div className="flex flex-wrap gap-4">
					{eduList()}
				</div>
				<Spacer y={5}/>
				<p className={title()}>Experience</p>
				<Spacer y={5}/>
				<div className="flex flex-wrap gap-4">
					{ExperienceList()}
				</div>
				<Spacer y={5}/>
				<p className={title()}>Skills</p>
				<Spacer y={5}/>
				<div className="space-x-3 space-y-2">
				{SkillList()}
				</div>
				<Spacer y={5}/>
				<p className={title()}>Certifications</p>
				<Spacer y={5}/>
				<div className="flex flex-wrap gap-4">
					{CertList()}
				</div>
			</div>
		</div>
	);
}
