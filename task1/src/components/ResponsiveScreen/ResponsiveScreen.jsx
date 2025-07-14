import React from 'react';
import './ResponsiveScreen.css';

export default function ResponsiveScreen() {
  return (
    <div className="page-wrap">

      <h1>Task 1: please make this responsive</h1>

      <p>While maintaining the hierarchy of importance.</p>

      <article className="main-story">

        <img src="http://f.cl.ly/items/2e3c2a1Z0D1H3u0W2K12/shera.jpg" alt="Sha Ra Rocking"/>

        <div className="story-intro">
          <h1>Most Important Story</h1>
          <p>This article has the most visual weight. <a href="http://nebezial.deviantart.com/art/she-ra-115867096">image source.</a></p>
        </div>

      </article>

      <section className="sub-stories">

        <article className="sub-story">
          {/* replaced the img src, because the original image was not available */}
          <img src="https://loremflickr.com/250/350/cat" alt="Kitten"/>
          <div className="story-intro">
            <h2>Less Important Story</h2>
            <p>This story has less visual weight.</p>
          </div>
        </article>

        <article className="sub-story">
          {/* replaced the img src, because the original image was not available */}
          <img src="https://picsum.photos/id/237/250/350" alt="Puppy"/>
          <div className="story-intro">
            <h2>Less Important Story</h2>
            <p>This story has less visual weight.</p>
          </div>
        </article>

        <article className="sub-story last">
          <img src="http://placebear.com/250/350" alt="Bear"/>
          <div className="story-intro">
            <h2>Less Important Story</h2>
            <p>This story has less visual weight.</p>
          </div>
        </article>

      </section>

    </div>
  );
}
