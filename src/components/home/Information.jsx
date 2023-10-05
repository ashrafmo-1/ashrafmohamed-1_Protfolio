import portfolioImage from "../../assets/image/cv.jpg";

const Information = () => {
  return (
    <div className="information">
      <img
        className="portfolioImage"
        src={portfolioImage}
        alt="portfolioImage"
      />
      <p className={"my-info"}>
        <span>name:</span> ashraf mohamed
      </p>
      <p className={"my-info"}>
        <span>age:</span> 21
      </p>
      <p className={"my-info"}>
        <span>jop:</span> front end developer
      </p>
      <p className={"my-info"}>
        <span>Nationality:</span> Egyptian
      </p>
      <p className={"my-info"}>
        <span>Study:</span> Business information systems (BIS)
      </p>
      <p className={"my-info"}>
        <span>Study:</span> Egyptian
      </p>
    </div>
  );
};

export default Information;
