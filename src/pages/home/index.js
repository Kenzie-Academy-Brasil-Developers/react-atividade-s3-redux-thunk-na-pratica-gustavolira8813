import { useSelector } from "react-redux";
import FormComments from "../../components/FormComments";
import "./styles.css";
const Home = () => {
  const users = useSelector((state) => state.user);
  return (
    <>
      <div>
        <h1>KenzieBook</h1>
      </div>
      <div>
        <h3>Comentários</h3>
        <div className="container">
          <div className="box">
            <h4>{users.name}</h4>
            <ul>
              {users.comments.map((e, i) => (
                <li key={i}>
                  <small>{e}</small>
                </li>
              ))}
            </ul>
          </div>
          <FormComments />
          {console.log(users)}
        </div>
      </div>
    </>
  );
};
export default Home;
