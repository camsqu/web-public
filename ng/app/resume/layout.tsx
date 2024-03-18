export default function ResumeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="gap-4 py-8 md:py-10">
			<div className="max-w-screen">
				{children}
			</div>
		</section>
	);
}
