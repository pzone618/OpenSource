import { LogoBehance, LogoDeviantart, LogoDribbble } from "react-ionicons";
import { useNavigate } from "react-router";

const Navbar = () => {
	const navigate = useNavigate();
	const navLinks = [
		{ title: "Home", path: "/", active: true },
		{ title: "Portfolio", path: "/", active: false },
		{ title: "Newsletter", path: "/", active: false },
		{ title: "Contact", path: "/", active: false },
		{ title: "About", path: "/", active: false },
	];
	return (
		<div className="w-full h-[60px] fixed top-4 left-0 flex z-50">
			<div className="w-full md:px-[235px] px-[23px] flex items-center justify-between">
				<div
					className="text-orange-400 font-bold text-[28px] cursor-pointermd:ml-[12px]"
					onClick={() => navigate("/")}
				>
					Tom <span className="text-orange-200">Design</span>
				</div>
				<div className="hidden md:flex items-center gap-12">
					{navLinks.map((link) => {
						return (
							<a
								href={link.path}
								key={link.title}
								className="font-normal text-[15px] text-white transition-all duration-200 hover:text-orange-400"
							>
								{link.title}
							</a>
						);
					})}
				</div>
				<div className="flex items-center gap-6">
					<LogoDribbble
						color={"#fff"}
						cssClasses={"cursor-pointer hover:fill-orange-400 transition-all duration-300"}
					/>
					<LogoBehance
						color={"#fff"}
						cssClasses={"cursor-pointer hover:fill-orange-400 transition-all duration-300"}
					/>
					<LogoDeviantart
						color={"#fff"}
						cssClasses={"cursor-pointer hover:fill-orange-400 transition-all duration-300"}
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
