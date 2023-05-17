import ContentGalleryItem from "./ContentGalleryItem";
import {BiBriefcase} from "react-icons/all";

const ContentGallery = () => {

    return <div className='content-gallery'>
        <ContentGalleryItem
            title={'Portfolio'}
            description={'Find out what I have done so far'}
            viewMoreCTA={() => {
                console.log('test')
            }}
            icon={<BiBriefcase />}
        />
        <ContentGalleryItem
            title={'Portfolio'}
            description={'Find out what I have done so far'}
            viewMoreCTA={() => {
                console.log('test')
            }}
            icon={<BiBriefcase />}
        />
        <ContentGalleryItem
            title={'Portfolio'}
            description={'Find out what I have done so far'}
            viewMoreCTA={() => {
                console.log('test')
            }}
            icon={<BiBriefcase />}
        />
        <ContentGalleryItem
            title={'Portfolio'}
            description={'Find out what I have done so far'}
            viewMoreCTA={() => {
                console.log('test')
            }}
            icon={<BiBriefcase />}
        />
    </div>
}

export default ContentGallery;