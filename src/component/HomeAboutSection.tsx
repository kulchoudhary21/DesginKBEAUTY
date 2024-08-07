const HomeAboutSection = () => {
  return (
    <div className="about-parent">
      <div className="about-row-1">
        <div className="card1">
          <h4>ISNTREE</h4>
          <h2>SUN PROTECTION MADE SIMPLE</h2>
          <h6>
            Isntree’s range of broad spectrum sun protection products are
            lightweight and suitable for daily use. Not only do they help
            control skin shine, but also keep skin feeling cool and comfortable.
            These suncreens also contain hyaluronic acid which helps deliver
            deep hydration and strengthen the skin’s moisture barrier. Available
            in a variety of formulations to suit every skin type.{" "}
          </h6>
          <button>FIND OUT MORE</button>
        </div>
        <div className="card2">
          <img src="../../public/images/Rectangle1.png" width={"100%"} />
        </div>
      </div>
      <div className="about-row-1">
        <div className="card2">
          <img src="../../public/images/Rectangle2.png" width={"100%"} />
        </div>
        <div className="card1">
          <h4>HARUHARU WONDER</h4>
          <h2>FOR THAT ‘GLOW FROM WITHIN’</h2>
          <h6>
            Wondering how to achieve that radiant, healthy looking ‘glass skin’?
            Say hello to HaruHaru Wonder’s popular Black Rice Hyaluronic Toner.
            A multi-purpose essence and toner that uses a patented Ultra Deep
            Technology to deliver skin nourishing ingredients within the skin’s
            layers to reveal deeply hydrated skin and nourished skin. Bonus- It
            is Vegan, cruelty free and contains 95% natural ingredients!{" "}
          </h6>
          <button>FIND OUT MORE</button>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutSection;
