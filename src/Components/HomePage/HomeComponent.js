
// images
import header_img  from '../../Assets/images/desktop/image-header.jpg'

// Components
import { Hero } from "./Hero/Hero"
import { Navigation } from "./Navigation/Navigation"
import { Container } from './GridContainer/Container'
import { TestimonialContainer } from './Testimonial/Testimonial'
import { Footer } from './Footer/Footer'

export const HomeComponent = () => {
	return (
			<div>
				<div className="bg-transparent bg-center bg-cover" style={{ backgroundImage: `url(${header_img})`}}>
				<Navigation />
					<Hero />
				</div>
				<Container />
				<TestimonialContainer />
				<Footer />
			</div>
		)
}