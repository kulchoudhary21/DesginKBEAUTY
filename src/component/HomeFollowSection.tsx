import data from "../other/Products";
const HomeAboutSection = () => {
  return (
    <div className="follow-page">
      <div className="follow-heading">
        <h3>FOLLOW OUR JOURNEY</h3>
        <h2>@KBEAUTYARABIA</h2>
        <div className="follow-card-section">
          {data &&
            data?.map((item, index) => (
              <div className="follow-card">
                <div className="follow-img-section">
                  <img src={`${item?.image}`} alt="image" />
                  <div className="overlay">
                    <img src="../../public/images/instagram 1.png" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomeAboutSection;
