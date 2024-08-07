import products from "../other/ProductReadNow";
const HomeReadNow = () => {
  return (
    <div className="read-now">
      <div className="read-now-text">
        <h3>READ NOW</h3>
        <h1>ON THE KULT BLOG</h1>
      </div>
      <div className="read-now-card">
        {products?.length > 0 &&
          products.slice(0, 3).map((item, index) => (
            <>
              <div className="read-now-content">
                <div className="read-img">
                  <img src={item?.image} />
                </div>
                <div className="img-text-content">
                  <h1>{item?.title}</h1>
                  <h5>{item?.description}</h5>
                  <div className="readmore">
                    <a href="#">
                      <h4>Read more</h4>
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
      <div className="product-button">
        <button>VIEW ALL PRODUCTS</button>
      </div>
    </div>
  );
};

export default HomeReadNow;
