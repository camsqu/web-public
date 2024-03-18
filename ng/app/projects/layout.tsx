export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="items-left justify-center gap-4 py-8 md:py-10">
			<div className="">
				{children}
			</div>
		</section>
	);
}
