import "./ProfileCard.css";
const ProfileCard = (props) => {
  const { person } = props;
  const personStatus = (
    <>
      {person.status === "online" && <span class="green">● </span>}
      {person.status}
    </>
  );
  return (
    <div className="profileWrapper">
      <div className="imageContainer">
        <img src={person.profilePicture} alt={person.name} />
        <span className="star">
          {person.isVerified ? <>&#9733;</> : <>&#9734;</>}
        </span>
        <div>{person.profession}</div>
        <div>Rs. {person.compensation}/hour</div>
      </div>
      <div className="detailsContainer">
        <div>{`${person.name}, ${person.age}`}</div>
        <div>
          <i className="fa fa-map-marker" />
          {person.address}
        </div>
        <div className="description">{person.description}</div>
        <div className="button" id="viewCVBtn">
          VIEW CV
        </div>
        <div className="button" id="makeOfferBtn">
          MAKE OFFER
        </div>
        <div>{personStatus}</div>
      </div>
    </div>
  );
};
export default ProfileCard;
