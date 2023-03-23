import "./ProfileCard.css";
const ProfileCard = (props) => {
  const { person } = props;
  const formatDate = (lastSeenTime) => {
    const now = new Date();
    const lastSeenTimeObj = new Date(lastSeenTime);

    const currenetTimeInMs = now.getTime();
    const lastSeenTImeInMs = lastSeenTimeObj.getTime();

    const diff = currenetTimeInMs - lastSeenTImeInMs;
    const dayInMs = 24 * 60 * 60 * 1000;
    const hourInMs = 60 * 60 * 1000;
    const days = Math.floor(diff / dayInMs);
    if (days > 0) {
      if (days > 7) return `Last seen several days ago`;
      return `Last seen ${days} days ago`;
    }
    const hours = Math.floor(diff / hourInMs);

    if (hours == 0) return "Last seen less than a hour ago";

    return `Last seen ${hours} hours ago`;
  };
  const personStatus = (
    <>
      {person.status === "online" ? (
        <>
          <span className="green">● </span> <span>online</span>
        </>
      ) : (
        <span>{formatDate(person.lastSeen)}</span>
      )}
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
