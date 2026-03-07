import Profile from "./Component/Profile";

const App = () => {
  return (
    <div className="parent">
      <Profile user="Ayan" img='https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Profile user="Zeeshan" img='https://images.unsplash.com/photo-1740431025828-74befe2bbc6a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Profile user="Shahan" img='https://images.unsplash.com/photo-1613405790252-9dda0cbd58f3?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  );
};

export default App;
