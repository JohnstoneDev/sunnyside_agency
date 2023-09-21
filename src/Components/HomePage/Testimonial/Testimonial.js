import emily from '../../../Assets/images/image-emily.jpg'
import jennifer from '../../../Assets/images/image-jennie.jpg'
import thomas from '../../../Assets/images/image-thomas.jpg'


const testmonials = [
  {
    id : 1,
    name : "  Emily R.",
    image : emily,
    title : "Marketing Director",
    paragraph : "  We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
  },
  {
    id : 2,
    name : "Thomas S.",
    image : thomas,
    title : " Chief Operating Officer",
    paragraph : "  Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
  },
  {
    id : 3,
    name : "Jennie F.",
    image : jennifer,
    title : "Business Owner",
    paragraph : "  Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
  },
]


function Testimonial({ image, paragraph, name, title }) {
  return (
    <div className='flex flex-col items-center justify-evenly gap-6 p-8 tracking-wide'>
      <div>
        <img src={image} alt=""  className='rounded-full h-24'/>
      </div>
      <div className='flex flex-col items-center justify-center gap-8'>
        <p className='text-desaturated-cyan'>{paragraph}</p>
        <section className='space-y-4'>
          <h5 className='font-heading text-dark-grayish-blue font-semibold'>{name}</h5>
          <span className='text-moderate-cyan'>{title}</span>
        </section>
      </div>
    </div>
  )
}

export function TestimonialContainer() {
  return (
    <div className='text-center'>
      <div className='p-16 space-y-8'>
        <h3 className='text-[28px] uppercase font-heading text-moderate-cyan tracking-wider'>Client Testimonials</h3>
        <div className='flex gap-8 mobile:flex-col max-mobile:flex-col desktop:flex-row tablet:flex-row'>
          { testmonials.map(t => <Testimonial key={t.id} {...t} />) }
        </div>
      </div>
    </div>
  )
}