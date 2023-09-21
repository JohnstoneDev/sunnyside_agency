import transform from '../../../Assets/images/desktop/image-transform.jpg'
import stand_out from '../../../Assets/images/desktop/image-stand-out.jpg'
import photography from '../../../Assets/images/desktop/image-photography.jpg'
import design from '../../../Assets/images/desktop/image-graphic-design.jpg'

const content = [
  {
    heading : 'Transform your brand',
    paragraph : 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
    image : transform
  },
  {
    heading : 'Stand out to the right audience',
    paragraph : 'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. ',
    image : stand_out
  }
]

function GridContainer({ heading, image, paragraph,  }) {
  return (
    <div className='desktop:grid desktop:grid-cols-2 tablet:grid tablet:grid-cols-2 mobile:flex mobile:flex-col-reverse max-mobile:flex max-mobile:flex-col items-center justify-evenly gap-0'>
        <section className="font-heading flex flex-col items-start justify-between gap-6 p-8">
            <h2 className='text-heading text-desaturated-blue'>{heading}</h2>
            <p className="font-global text-moderate-cyan">{paragraph}</p>
            <h6 className="border-b-4 border-transparent hover:border-b-yellow rounded-b-sm hover:border-b-4 text-desaturated-blue uppercase text-[16px] font-heading">Learn More</h6>
        </section>
        <img src={image} alt="" className='w-full object-cover object-center'/>
    </div>
  )
}

function ReverseGridContainer({ heading, image, paragraph,  }) {
  return (
    <div className='desktop:grid desktop:grid-cols-2 tablet:grid tablet:grid-cols-2 mobile:flex mobile:flex-col max-mobile:flex max-mobile:flex-col items-center justify-evenly gap-0'>
        <img src={image} alt="" className='w-full object-cover object-center'/>
        <section className="font-heading flex flex-col items-start justify-between gap-6 p-8">
            <h2 className='text-heading text-desaturated-blue'>{heading}</h2>
            <p className="font-global text-moderate-cyan">{paragraph}</p>
            <h6 className="border-b-4 border-transparent hover:border-b-soft-red rounded-b-sm hover:border-b-4 text-desaturated-blue uppercase text-[16px] font-heading">Learn More</h6>
        </section>
    </div>
  )
}


function FlexContainerOne() {
  return (
    <div className='bg-cover mobile:bg-center pt-72 max-mobile:bg-center text-desaturated-cyan' style={{ backgroundImage : `url(${design})`}}>
      <div className='text-center flex flex-col gap-6 p-12  pt-40'>
        <h3 className='font-heading text-heading'>Graphic Design</h3>
        <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
      </div>
    </div>
  )
}


function FlexContainerTwo() {
  return (
    <div className='bg-cover mobile:bg-center max-mobile:bg-center pt-72 text-dark-blue desktop:w-3/5' style={{ backgroundImage : `url(${photography})`}}>
      <div className='text-center flex flex-col gap-6 p-12 pt-40'>
        <h3 className='font-heading text-heading'>Photography</h3>
        <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
      </div>
    </div>
  )
}

export function Container() {
  return (
      <div className='flex flex-col items-start justify-center'>
        <GridContainer {...content[0]} />
        <ReverseGridContainer {...content[1]} />
        <div className='flex desktop:flex-row tablet:flex-row mobile:flex-col max-mobile:flex-col items-start justify-evenly tablet:w-full'>
            <FlexContainerOne/>
            <FlexContainerTwo/>
        </div>
      </div>
  )
}