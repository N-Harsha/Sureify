const Content = (props) => {
  const { points } = props;
  const listItems = points.map((x, y) => <li key={y}>{x}</li>);
  return <ul>{listItems}</ul>;
};
export default Content;
