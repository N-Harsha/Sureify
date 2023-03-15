import Content from "./Content";

const ContentContainer = (props) => {
  return (
    <div className={`contentContainer ${props.rev === true ? "rev" : ""}`}>
      <img src={props.img} />
      <Content points={props.points} />
    </div>
  );
};
export default ContentContainer;
