import React from 'react'

import './preview-collection.styles.scss'

const CollectionPreview = ({ title, items}) => (
    <div className = 'collection-preview'>
        <hi className = 'title'>{title.toUpperCase()}</hi>
        <div className = 'preview'>
        {
            items.filter((item , idx) => idx < 4)
            .map(item => (
                <div key = {item.id}>{item.name}</div>
            ))}
        </div>
    </div>
);

export default CollectionPreview