import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { LessonContainer } from "./components/LessonContainer/LessonContainer";
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
      <LessonContainer title="Social Profile">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </LessonContainer>
      <LessonContainer title="Statistic">
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
      </LessonContainer>
      <LessonContainer title="Friend List">
        <FriendList friends={friends} />
      </LessonContainer>
      <LessonContainer title="Transaction History">
        <TransactionHistory items={transactions} />
      </LessonContainer>
    </div>
  );
}

export default App;
