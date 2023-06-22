
interface ContentGalleryItemProps {
    title: string
    description: string
    icon: any
    backgroundImage: any
    isOpen: boolean
    viewMoreCTA: () => void;
}
const ContentGalleryItem = ({ title, description, icon, backgroundImage, isOpen, viewMoreCTA } : ContentGalleryItemProps) => {
    return <li className={`content-gallery-item ${isOpen ? 'is-open' : ''}`} style={{backgroundImage: `url(${backgroundImage})`}}>
            {icon}
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={viewMoreCTA}>View more</button>
    </li>
}

export default ContentGalleryItem;
