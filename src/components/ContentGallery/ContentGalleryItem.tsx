import {IconType} from "react-icons/lib";

interface ContentGalleryItemProps {
    title: string
    description: string
    icon: IconType
    viewMoreCTA: () => void;
}
const ContentGalleryItem = ({ title, description, icon, viewMoreCTA } : ContentGalleryItemProps) => {
    return <div className='content-gallery-item'>
        {icon}
        <h3>{title}</h3>
        <p>{description}</p>
        <span onClick={viewMoreCTA}>View more</span>
    </div>
}

export default ContentGalleryItem;