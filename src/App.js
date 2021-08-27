import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { LessonContainer } from "./components/LessonContainer/LessonContainer";
import user from "./user.json";

function App() {
  return (
    <div className="App">
      <LessonContainer title="homework-01/social-profile/" paddings={30}>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </LessonContainer>
    </div>
  );
}

export default App;
