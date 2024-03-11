import aboutImage from "../../assets/images/a3.jpg";
const About = () => {
	return (
		<div className="w-full px-[23px] bg-white relative z-[100]">
			<div className="flex w-full md:flex-row flex-col items-center justify-center gap-16 p-16">
				<img
					src={aboutImage}
					alt="about"
					className="w-[500px] rounded-xl shadow-sm hover:translate-y-5 transition-all duration-300"
				/>
				<div className="flex flex-col gap-6">
					<span className="text-orange-600 opacity-[0.06] md:text-9xl text-6xl font-extrabold">
						ABOUT ME
					</span>
					<span className="text-orange-500 md:text-5xl text-3xl font-semibold">
						I just Love my Work!
					</span>
					<p className="text-gray-900 max-w-[500px] leading-8">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse sit id iusto
						nesciunt repellat consequatur eius, ullam voluptates error! Cumque nihil
						doloremque ducimus corporis amet ipsam, aperiam distinctio? Similique, ipsam.
					</p>
					<div className="flex w-full items-center gap-4">
						<button className="text-white rounded-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 w-fit px-5 py-3 font-medium">
							Contact me
						</button>
						<button className="hover:text-white rounded-full border-2 border-orange-500 hover:bg-orange-500 transition-all duration-300 w-fit px-5 py-3 font-medium">
							Download CV
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
