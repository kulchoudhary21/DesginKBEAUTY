import { Rating, RatingStar as OriginalRatingStar } from "flowbite-react";
const RatingStar = ({ filled }) => {
  return (
    <OriginalRatingStar
      className={`rating-star ${filled ? "filled" : ""}`}
      filled={filled}
    />
  );
};
const HomeBestSeller = ({ data, heading, buttonHide }) => {
  return (
    <div className="best-seller">
      <div className="bs-section">
        <h3>{heading}</h3>
        <div className="card-section">
          {data &&
            data?.map((item, index) => (
              <div className="card">
                <div className="img-section">
                  <img src={`${item?.image}`} alt="image" />
                </div>
                <div className="card-text">
                  <h5>{item?.name}</h5>
                  <div className="rating">
                    <Rating>
                      <RatingStar filled={true} />
                      <RatingStar filled={true} />
                      <RatingStar filled={true} />
                      <RatingStar filled={true} />
                      <RatingStar filled={false} />
                    </Rating>
                    <p>({item?.star})</p>
                  </div>
                  <div className="price">${item?.price}</div>
                </div>
              </div>
            ))}
        </div>
        {buttonHide && (
          <div className="product-button">
            <button>VIEW ALL PRODUCTS</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeBestSeller;
