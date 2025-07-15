import React from "react";
import "./ResponsiveScreen.css";

export function ResponsiveScreen() {
  return (
    <div className="page-wrap">
      <h1>Task 1: please make this responsive</h1>
      <p>While maintaining the hierarchy of importance.</p>

      <article className="main-story">
        <img
          src="https://picsum.photos/id/1018/800/500"
          srcSet="https://picsum.photos/id/1018/400/250 400w, https://picsum.photos/id/1018/800/500 800w, https://picsum.photos/id/1018/1200/750 1200w"
          sizes="(max-width: 600px) 400px, (max-width: 900px) 800px, 1200px"
          loading="lazy"
          alt="Landscape"
        />

        <div className="story-intro">
          <h1>Most Important Story</h1>
          <p>
            This article has the most visual weight.{" "}
            <a href="https://picsum.photos/id/1018/800/500" target="_blank">
              image source.
            </a>
          </p>
        </div>
      </article>

      <section className="sub-stories">
        <article className="sub-story">
          <img
            className="sub-story-img"
            src="https://loremflickr.com/250/350/cat"
            srcSet="https://loremflickr.com/125/175/cat 125w, https://loremflickr.com/250/350/cat 250w"
            sizes="(max-width: 600px) 125px, 250px"
            loading="lazy"
            alt="Kitten"
          />

          <div className="sub-story-intro">
            <h2>Less Important Story</h2>
            <p>This story has less visual weight.</p>
          </div>
        </article>

        <article className="sub-story">
          <img
            className="sub-story-img"
            src="https://picsum.photos/id/237/250/350"
            srcSet="https://picsum.photos/id/237/125/175 125w, https://picsum.photos/id/237/250/350 250w"
            sizes="(max-width: 600px) 125px, 250px"
            loading="lazy"
            alt="Puppy"
          />
          <div className="sub-story-intro">
            <h2>Less Important Story</h2>
            <p>This story has less visual weight.</p>
          </div>
        </article>

        <article className="sub-story last">
          <img
            className="sub-story-img"
            src="http://placebear.com/250/350"
            srcSet="http://placebear.com/125/175 125w, http://placebear.com/250/350 250w"
            sizes="(max-width: 600px) 125px, 250px"
            loading="lazy"
            alt="Bear"
          />
          <div className="sub-story-intro">
            <h2>Less Important Story</h2>
            <p>This story has less visual weight.</p>
          </div>
        </article>
      </section>
    </div>
  );
}
