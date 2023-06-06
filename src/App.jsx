import Header from "./components/Header";

import styles from "./App.module.css";

import "./global.css";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <div>post</div>
        </main>
      </div>
    </div>
  );
}

export default App;
