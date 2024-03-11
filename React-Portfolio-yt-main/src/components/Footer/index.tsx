import { LogoBehance, LogoDeviantart, LogoDribbble } from "react-ionicons";

const Footer = () => {
	return (
		<div className="w-full h-[60px] flex bg-white border-t border-t-orange-300 relative z-[100]">
			<div className="flex w-full md:px-[60px] px-[23px] items-center justify-between">
				<div className="text-orange-400 font-bold text-[28px] cursor-pointer md:ml-[12px]">
					Tom <span className="text-orange-200">Design</span>
				</div>
				<div className="flex items-center gap-6">
					<LogoDribbble
						color={"#333"}
						cssClasses={"cursor-pointer hover:fill-orange-400 transition-all duration-300"}
					/>
					<LogoBehance
						color={"#333"}
						cssClasses={"cursor-pointer hover:fill-orange-400 transition-all duration-300"}
					/>
					<LogoDeviantart
						color={"#333"}
						cssClasses={"cursor-pointer hover:fill-orange-400 transition-all duration-300"}
					/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
