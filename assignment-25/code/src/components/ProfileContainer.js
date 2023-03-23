import ProfileCard from "./ProfileCard";
import "./ProfileContainer.css";
const ProfileContainer = (props) => {
  const { data } = props;
  const profiles = data.map((x, y) => <ProfileCard person={x} key={y} />);
  return <div className="profileContainer">{profiles}</div>;
};
export default ProfileContainer;
