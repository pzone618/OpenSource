import contactImage from "../../assets/images/contact.jpg";

const Contact = () => {
	return (
		<div className="w-full px-[23px] md:py-20 py-16 bg-[#f6f6f6] relative z-[100]">
			<div className="flex w-full md:flex-row flex-col items-center justify-center gap-16 p-16">
				<img
					src={contactImage}
					alt="contact"
					className="w-[500px] rounded-xl shadow-sm hover:translate-y-5 transition-all duration-300"
				/>
				<div className="flex flex-col gap-6">
					<span className="text-orange-600 opacity-[0.06] md:text-9xl text-5xl font-extrabold">
						CONTACT ME
					</span>
					<form action="#">
						<div className="flex w-full items-center justify-between gap-5">
							<input
								type="text"
								placeholder="Name"
								className="w-full outline-none rounded-md shadow-sm border border-orange-300 bg-white px-3 py-4"
							/>
							<input
								type="text"
								placeholder="Email"
								className="w-full outline-none rounded-md shadow-sm border border-orange-300 bg-white px-3 py-4"
							/>
						</div>
						<input
							type="text"
							placeholder="Subject"
							className="w-full mt-5 outline-none rounded-md shadow-sm border border-orange-300 bg-white px-3 py-4"
						/>
						<textarea
							cols={30}
							rows={12}
							placeholder="Message"
							className="w-full mt-5 outline-none rounded-md shadow-sm border border-orange-300 bg-white px-3 py-4"
						></textarea>
					</form>
					<button className="text-white rounded-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 w-fit px-5 py-3 font-medium">
						Submit Message
					</button>
				</div>
			</div>
		</div>
	);
};

export default Contact;
