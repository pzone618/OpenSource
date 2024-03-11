import { CameraOutline, ImagesOutline, VideocamOutline } from "react-ionicons";

const Services = () => {
	const servicesList = [
		{
			title: "Photography",
			icon: (
				<CameraOutline
					width="30px"
					height="30px"
					color="#ea580c"
				/>
			),
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
		{
			title: "Video Editing",
			icon: (
				<VideocamOutline
					width="30px"
					height="30px"
					color="#ea580c"
				/>
			),
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
		{
			title: "Photo Editing",
			icon: (
				<ImagesOutline
					width="30px"
					height="30px"
					color="#ea580c"
				/>
			),
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
	];
	return (
		<div className="w-full md:px-[190px] px-[23px] py-20 bg-white relative z-[100]">
			<div className="flex w-full flex-col items-center justify-center gap-10 p-16">
				<div className="flex w-full flex-col gap-2 justify-center items-center">
					<span className="font-medium text-[25px]">What can I do for you ?</span>
					<p className="text-center text-gray-900">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</div>
				<div className="flex w-full md:flex-row flex-col gap-10 items-center justify-between">
					{servicesList.map((s) => {
						return (
							<div
								key={s.title}
								className="bg-white hover:bg-orange-50 hover:-translate-y-5 transition-all duration-300 rounded-md border shadow-sm border-orange-500 flex flex-col justify-center items-center text-center gap-4 p-8"
							>
								{s.icon}
								<span className="text-orange-600 font-medium text-xl">{s.title}</span>
								<p className="max-w-[350px] text-gray-600 leading-7">{s.description}</p>
								<a
									href="#"
									className="text-orange-700"
								>
									Learn More
								</a>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Services;
