import Entertainment from './queryContents/Entertainment'
import Technology from './queryContents/Technology'
import AdsSpace1 from './AdsSpace/AdsSpace1'

const HomeContents = () => {
  return (
    <div className="my-3">
        <div className="">
            <div className="flex flex-col">
                <Entertainment />
                <Technology />
            </div>
        </div>
    </div>
  )
}

export default HomeContents
