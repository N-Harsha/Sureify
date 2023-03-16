import "./App.css";
import ProfileContainer from "./components/ProfileContainer";
function App() {
  const data = [
    {
      profession: "Film Director, Producer",
      compensation: 1000,
      name: "S. S. Rajamouli",
      age: 49,
      address: "Hyderabad, Telangana",
      profilePicture:
        "https://img.jagranjosh.com/images/2022/March/2832022/SS-Rajamouli-Biography-RRR-director.jpg",
      description:
        "Koduri Srisaila Sri Rajamouli is an Indian film director and screenwriter who primarily works in Telugu cinema and is known for his action, fantasy, and epic genre films. He is referred as the highest grossing Indian director of all time and the highest-paid director in India",
      lastSeen: "2023-03-16T17:12:12",
      status: "online",
      isVerified: true,
    },
    {
      profession: "Actor, Film Director",
      compensation: 500,
      name: "Gautham Vasudev Menon",
      age: 50,
      address: "Palakkad, Kerala",
      profilePicture:
        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/gautham-menon-2889-08-02-2022-03-33-26.jpg",
      description:
        "Gautham Vasudev Menon is an Indian film director, screenwriter, producer and actor who predominantly works in Tamil film industry. He has also directed Telugu and Hindi films that either simultaneously shot with or remakes of his own Tamil films.",
      lastSeen: "2023-03-01T12:12:12",
      status: "offline",
      isVerified: false,
    },
    {
      profession: "Film Director, Producer",
      compensation: 1000,
      name: "S. S. Rajamouli",
      age: 49,
      address: "Hyderabad, Telangana",
      profilePicture:
        "https://img.jagranjosh.com/images/2022/March/2832022/SS-Rajamouli-Biography-RRR-director.jpg",
      description:
        "Koduri Srisaila Sri Rajamouli is an Indian film director and screenwriter who primarily works in Telugu cinema and is known for his action, fantasy, and epic genre films. He is referred as the highest grossing Indian director of all time and the highest-paid director in India",
      lastSeen: "2023-03-16T17:12:12",
      status: "offline",
      isVerified: true,
    },
    {
      profession: "Actor, Film Director",
      compensation: 500,
      name: "Gautham Vasudev Menon",
      age: 50,
      address: "Palakkad, Kerala",
      profilePicture:
        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/gautham-menon-2889-08-02-2022-03-33-26.jpg",
      description:
        "Gautham Vasudev Menon is an Indian film director, screenwriter, producer and actor who predominantly works in Tamil film industry. He has also directed Telugu and Hindi films that either simultaneously shot with or remakes of his own Tamil films.",
      lastSeen: "2023-03-13T12:12:12",
      status: "offline",
      isVerified: false,
    },
  ];
  return <ProfileContainer data={data} />;
}

export default App;
