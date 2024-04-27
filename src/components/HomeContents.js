import Entertainment from './queryContents/Entertainment'
import Technology from './queryContents/Technology'
import AdsSpace1 from './AdsSpace/AdsSpace1'

const HomeContents = () => {
  return (
    <div className="container mx-auto">
        <div className="flex flex-col">
            <div className="flex flex-col">
                <Entertainment />
                <Technology />
            </div>
            <div>
                <AdsSpace1 />
            </div>
        </div>
    </div>
  )
}

export default HomeContents
