import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Container } from "./components/Container/Container";
import { Statistics } from "./components/Statistics/Statistics";
import { FriendList } from "./components/FriendList/FriendList";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";
import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

function App() {
  return (
    <div className="App">
      <Container title="Social Profile">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>
      <Container title="Statistic">
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
      </Container>
      <Container title="Friend List">
        <FriendList friends={friends} />
      </Container>
      <Container title="Transaction History">
        <TransactionHistory items={transactions} />
      </Container>
    </div>
  );
}

export default App;
