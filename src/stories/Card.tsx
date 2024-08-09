import React from "react";
import "./card.css";

export interface CardProps {
  /**
   * Is this the heading for a card
   */
  heading?: string;
  /**
   * Is this the sub-heading for a card
   */
  subHeading?: string;
  /**
   * What description you want to give?
   */
  description?: string;
  /**
   * Title
   */
  title?: string;
  /**
   * Image url
   */
  image?: string;

  /**
   * Link name
   */
  name: string;
  /**
   * Link
   */
  link?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Card = ({
  heading = "ON THE KULT BLOG",
  subHeading = "READ NOW",
  description = "Winter's here, and there's nothing dry, dehydrated or atopic skin likes less! Cooling temperatures, increased use of heating and declining humity...",
  title = "BABY IT'S COLD OUTSIDE",
  link = "#",
  name = "Read more",
  image = "../../public/images/card1.png",
  ...props
}: CardProps) => {
  //   const mode = primary
  //     ? "storybook-button--primary"
  //     : "storybook-button--secondary";
  return (
    <div className="read-now">
      <div className="read-now-text">
        <h3>{heading}</h3>
        <h1>{subHeading}</h1>
      </div>
      <div className="read-now-card">
        {/* <div> */}
        <div className="read-now-content">
          <div className="read-img">
            <img src={image} />
          </div>
          <div className="img-text-content">
            <h1>{title}</h1>
            <h5>{description}</h5>
            <div className="readmore">
              <a href={link}>
                <h4>{name}</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="product-button">
        <button>VIEW ALL PRODUCTS</button>
      </div>
    </div>
  );
};
