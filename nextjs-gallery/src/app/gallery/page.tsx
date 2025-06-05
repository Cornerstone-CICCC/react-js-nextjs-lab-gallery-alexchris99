import Image from "next/image";
import Link from "next/link";
export type Photo = {
	albumId: number;
	id: number;
	title: string;
	url: string;
	thumbnailUrl: string;
};

const page = async () => {
	const fetchGallery = async () => {
		const res = await fetch("http://localhost:3000/api/gallery");
		const data = await res.json();
		return data;
	};
	const gallery: Photo[] = await fetchGallery();

	return (
		<div className="text-center">
			<h1 className="m-3">Gallery</h1>
			<div className=" grid grid-cols-7 gap-3 m-3">
				{gallery.map((image) => (
					<Link href={`/gallery/${image.id}`} key={image.id}>
						<Image
							src={image.thumbnailUrl}
							alt="Image"
							width={150}
							height={150}
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default page;
