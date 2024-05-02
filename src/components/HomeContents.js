import Entertainment from './queryContents/Entertainment'
import Technology from './queryContents/Technology'
import AdsSpace1 from './AdsSpace/AdsSpace1'
import News from './queryContents/News'
import Health from './queryContents/Health'

const HomeContents = () => {
  return (
    <div className="my-3 lg:flex container mx-auto">
        <div className="">
            <div className="flex flex-col">
                {/* <Entertainment />
                <Technology />
                <News />
                <Health /> */}
            </div>
        </div>
        <div className='flex flex-col md:hidden sm:hidden'>
          <AdsSpace1 />
          <AdsSpace1 />
          <AdsSpace1 />
        </div>
    </div>
  )
}

export default HomeContents
