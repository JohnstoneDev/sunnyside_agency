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
    <div className='flex flex-col items-center justify-center gap-8 p-8'>
      <div>
        <img src={image} alt=""  className='rounded-full h-24'/>
      </div>
      <div className='flex flex-col items-center justify-center gap-8'>
        <p>{paragraph}</p>
        <section className='space-y-4'>
          <h5>{name}</h5>
          <span>{title}</span>
        </section>
      </div>
    </div>
  )
}

export function TestimonialContainer() {
  return (
    <div className='text-center'>
      <div className='p-10 space-y-8'>
        <h3 className='text-[30px] uppercase font-heading text-moderate-cyan'>Client Testimonials</h3>
        <div className='flex gap-8'>
          { testmonials.map(t => <Testimonial key={t.id} {...t} />) }
        </div>
      </div>
    </div>
  )
}