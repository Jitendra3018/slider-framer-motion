import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import images from "./images";
import "./App.css";

function App() {
	const [width, setWidth] = useState(0);
	const carousel = useRef();
	// console.log(images);

	useEffect(() => {
		// console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	return (
		<div>
			{/* Carousal */}
			<motion.div
				ref={carousel}
				className="carousel"
				whileTap={{ cursor: "grabbing" }}
			>
				<motion.h1 className="heading">React Slider</motion.h1>
				<motion.div
					drag="x"
					dragConstraints={{ right: 0, left: -width }}
					className="innerCarousel"
				>
					{images.map((image, index) => (
						<motion.div className="item" key={index}>
							<img src={image} alt="" />
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
}

export default App;
