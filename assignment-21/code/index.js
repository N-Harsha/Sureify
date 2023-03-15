const root = ReactDOM.createRoot(document.getElementById("container"));

const Header = () => (
  <header>
    <div className="logoContainer">
      <img src="./res/logo.png" alt="" />
      <h1 className="pageTitle">Basketball</h1>
    </div>
    <nav>
      <ul>
        <li>about us</li>
        <li>pricing</li>
        <li>contat us</li>
      </ul>
    </nav>
  </header>
);
const Footer = () => <footer>© Basketball Development Inc 2023</footer>;
const Content = (props) => {
  const { points } = props;
  const listItems = points.map((x, y) => <li key={y}>{x}</li>);
  return <ul>{listItems}</ul>;
};
const ContentContainer = (props) => {
  return (
    <div className={`contentContainer ${props.rev === true ? "rev" : ""}`}>
      <img src={props.img} />
      <Content points={props.points} />
    </div>
  );
};
const Container = () => (
  <>
    <Header />
    <ContentContainer
      points={[
        "excitement of the game: Basketball is a fast-paced game that keeps you on the edge of your seat. The thrill of watching your favorite team score points, make great plays, and come out on top is an adrenaline rush.",
        "The players: Basketball has produced some of the greatest athletes of all time, and it's always exciting to watch these skilled players showcase their talents on the court. Whether it's their incredible ball-handling skills, their ability to jump and dunk, or their deadly accuracy from beyond the arc, basketball players are truly amazing to watch.",
        "The team spirit: Basketball is a team sport, and the camaraderie and teamwork that go into each game are truly inspiring. It's amazing to see how a group of individuals can come together and work towards a common goal, and the sense of pride and unity that comes with supporting your team is truly special.",
      ]}
      img="./res/1.jpeg"
    />
    <ContentContainer
      points={[
        "The strategy: Basketball is a sport that requires a lot of strategy and tactical thinking. It's fascinating to watch how coaches and players adapt their game plan depending on the opponent and the situation, and how they work together to outsmart and outmaneuver their opponents.",
        "The culture: Basketball has a rich culture that extends far beyond the game itself. From the music and fashion associated with the sport to the larger-than-life personalities of the players, basketball is a cultural phenomenon that has captivated fans all around the world.",
      ]}
      img="./res/2.jpeg"
      rev
    />
    <Footer />
  </>
);
root.render(<Container />);
