// Article.js
import React from 'react';
import '@/styles/Article.css';

export default function Article() {
    return (
        <a href="#">
            <article>
                <img src="https://picsum.photos/1920/1080" alt="Imagen Principal" />
                <img src="https://picsum.photos/800/608" alt="Imagen Secundaria" />
            </article>
        </a>
    );
}
