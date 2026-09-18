import MyComponent2 from './my_component_2.tsx';

const Home = () => {
  // const [state, setState] = useState(initValue);
  return (
    <main>
      <h1>Docs</h1>
      <div className="box red">
        <p>asd</p>
      </div>
      <MyComponent2 titulo="Hello there" loading>
        <p>Lorem</p>
        <p>Ipsum</p>
      </MyComponent2>
    </main>
  );
}

export default Home;
