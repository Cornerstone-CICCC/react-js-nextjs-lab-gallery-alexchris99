import type { Photo } from "@/app/gallery/page";
import Image from "next/image";

type Props = {
	params: Promise<{ id: string }>;
};

const page = async ({ params }: Props) => {
	const { id } = await params;
	const res = await fetch(`http://localhost:3000/api/gallery/${id}`);
	const data: Photo = await res.json();

	return (
		<div className="fixed w-screen h-screen top-0 left-0 bg-black/70 flex items-center justify-center">
			<div className="bg-white text-black p-3 w-1/3 items-center text-center">
				<Image src={data.url} alt="Image" width={600} height={600} />
				<div className="flex gap-4 justify-around p-3">
					<a
						className="border-1 p-2  inline-block rounded-md shadow-md"
						href="/gallery"
					>
						Close
					</a>
					<a
						className="border-1 p-2  inline-block rounded-md shadow-md"
						href={`/gallery/${data.id}`}
					>
						View Image
					</a>
				</div>
			</div>
		</div>
	);
};

export default page;
