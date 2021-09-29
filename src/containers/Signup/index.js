import MenuAppBar from "../../components/AppBar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MyCard from "../../components/Card";
import BasicTextFields from "../../components/Input";
import BasicButtons from "../../components/Button";
import "./css/style.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword, auth, db, setDoc, doc } from "../../config/Firebase";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const register = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        await setDoc(doc(db, "users", res.user.uid), {
          fullName,
          email,
          password,
          address,
        });
        setLoading(false);
        console.log("agaya===>", res);
        history.push("/");
      })
      .catch((err) => {
        setLoading(false);
        console.log("masla agaya==>", err);
      });
  };
  return (
    <div>
      <MenuAppBar title="Signup" />ِ
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={6} md={12}>
            <MyCard>
              <h1>Signup</h1>
              <div className="mt-20">
                <BasicTextFields
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                  label="Full Name"
                  type="text"
                />
              </div>
              <div className="mt-20">
                <BasicTextFields
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  label="Email"
                  type="email"
                />
              </div>{" "}
              <div className="mt-20">
                <BasicTextFields
                  onChange={(e) => setaddress(e.target.value)}
                  value={address}
                  label="Address"
                  type="text"
                />
              </div>{" "}
              <div className="mt-20">
                <BasicTextFields
                  onChange={(e) => setphone(e.target.value)}
                  value={phone}
                  label="Phone"
                  type="number"
                />
              </div>
              <div className="mt-20">
                <BasicTextFields
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  label="Password"
                  type="password"
                />
              </div>
              <div className="mt-20">
                <BasicButtons
                  onClick={register}
                  title={loading ? "Loading..." : "REGISTER"}
                />
              </div>
              <div className="mt-20" style={{ textAlign: "center" }}>
                <Link to="/">Login now</Link>
              </div>
            </MyCard>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Signup;
