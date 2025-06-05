import Link from "next/link";
const Header = () => {
	return (
		<header className="w-full bg-blue-500 flex items-center justify-between p-2 text-xl">
			<div>LOGO</div>
			<menu>
				<nav>
					<ul className="flex gap-3">
						<Link href="/">Home</Link>
						<Link href="/gallery">Gallery</Link>
					</ul>
				</nav>
			</menu>
		</header>
	);
};

export default Header;
