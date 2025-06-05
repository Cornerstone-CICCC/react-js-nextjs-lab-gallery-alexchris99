import type { Photo } from "../page";
import Image from "next/image";
type Props = {
	params: Promise<{ id: string }>;
};
const page = async ({ params }: Props) => {
	const { id } = await params;
	const res = await fetch(`http://localhost:3000/api/gallery/${id}`);
	const data: Photo = await res.json();
	return (
		<div className="p-4 flex flex-col gap-3 justify-center items-center">
			<h1>{data.title}</h1>
			<Image src={data.url} alt="alt" width={600} height={600} />
		</div>
	);
};

export default page;
