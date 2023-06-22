import ContentGalleryItem from "./ContentGalleryItem";
import {BiBriefcase} from "react-icons/all";
import BlogImage from '../../../public/images/blog-1-1000x667.jpg';
import AboutImage from '../../../public/images/about-2-1000x668.jpg';
import ResumeImage from '../../../public/images/resume-2-1000x667.jpg';
import PortfolioImage from '../../../public/images/portfolio-2-1000x667.jpg';
import {useEffect, useState} from "react";

const ContentGallery = () => {

    const [activeGalleryItem, setActiveGalleryItem] = useState<string | null>(null);
    // useEffect(() => {
    //     if (activeGalleryItem) {
    //
    //     }
    // }, [activeGalleryItem])
    return <>
        <div className={`content-gallery-wrapper ${activeGalleryItem ? 'fold-is-open' : ''}`}>
            <ul className='content-gallery'>
                <ContentGalleryItem
                    title={'About'}
                    description={'Find out what I have done so far'}
                    backgroundImage={AboutImage}
                    isOpen={activeGalleryItem === 'about'}
                    viewMoreCTA={() => {
                        console.log('test')
                        setActiveGalleryItem('about')
                    }}
                    icon={<BiBriefcase />}
                />
                <ContentGalleryItem
                    title={'Resume'}
                    description={'Find out what I have done so far'}
                    backgroundImage={ResumeImage}
                    isOpen={activeGalleryItem === 'resume'}
                    viewMoreCTA={() => {
                        console.log('test')
                        setActiveGalleryItem('resume')

                    }}
                    icon={<BiBriefcase />}
                />
                <ContentGalleryItem
                    title={'Portfolio'}
                    description={'Find out what I have done so far'}
                    backgroundImage={PortfolioImage}
                    isOpen={activeGalleryItem === 'portfolio'}
                    viewMoreCTA={() => {
                        console.log('test')
                        setActiveGalleryItem('portfolio')

                    }}
                    icon={<BiBriefcase />}
                />
                <ContentGalleryItem
                    title={'Blog'}
                    description={'Find out what I have done so far'}
                    backgroundImage={BlogImage}
                    isOpen={activeGalleryItem === 'blog'}
                    viewMoreCTA={() => {
                        console.log('test')
                        setActiveGalleryItem('blog')
                    }}
                    icon={<BiBriefcase />}
                />
            </ul>
        </div>
        <div className={`cd-folding-panel ${activeGalleryItem ? 'is-open' : ''}`}>
            <div className="fold-left"></div>
            <div className="fold-right"></div>
            <div className="cd-fold-content"> ovo je content</div>
            <span className="cd-close" onClick={() => { setActiveGalleryItem(null); }}></span>
        </div>
    </>
}

export default ContentGallery;
