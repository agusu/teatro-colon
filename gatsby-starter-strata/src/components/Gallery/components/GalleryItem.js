import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

const GalleryItem = ({id, source, thumbnail, caption, description, position, toggleLightbox, permalink}) => {

    const onClick = useCallback((e) => {
        e.preventDefault()
        toggleLightbox(position)
    }, [position, toggleLightbox]);

    const openLink = useCallback((e) => {
        e.preventDefault()
        window.open(permalink, '_blank').focus();
    }, []);

    return (<article key={id} className="6u 12u$(xsmall) work-item">
        <a
        className="image fit thumb"
        href={source}
        onClick={permalink ? openLink : onClick }>
        <img src={thumbnail} alt=""/>
        </a>

        <h3>{caption}</h3>
        <p>{description}</p>
    </article>)
};

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
    id: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    toggleLightbox: PropTypes.func.isRequired
}

export default GalleryItem