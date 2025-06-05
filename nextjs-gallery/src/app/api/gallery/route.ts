export const revalidate = 3600;
import type { Photo } from "@/app/gallery/page";

export async function GET() {
	const res = await fetch(
		"https://jsonplaceholder.typicode.com/photos?_limit=30",
	);
	const data = await res.json();
	const updatedGallery: Photo[] = data.map((image: Photo) =>
		image
			? {
					...image,
					thumbnailUrl: "https://placehold.co/300x300",
					url: "https://placehold.co/1000x1000",
				}
			: "",
	);
	return Response.json(updatedGallery);
}
