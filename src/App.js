import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { LessonContainer } from "./components/LessonContainer/LessonContainer";
import { Statistics } from "./components/Statistics/Statistics";
import { FriendList } from "./components/FriendList/FriendList";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";
import user from "./user.json";
import statisticalData from "./statistical-data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

function App() {
  return (
    <div className="App">
      <LessonContainer title="social-profile" paddings={30}>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </LessonContainer>
      <LessonContainer title="statistic" paddings={30}>
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
      </LessonContainer>
      <LessonContainer title="Friend List" paddings={30}>
        <FriendList friends={friends} />
      </LessonContainer>
      <LessonContainer title="Transaction History" paddings={30}>
        <TransactionHistory items={transactions} />
      </LessonContainer>
    </div>
  );
}

export default App;
