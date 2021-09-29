import MenuAppBar from "../../components/AppBar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MyCard from "../../components/Card";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  collection,
  db,
  addDoc,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
  where,
  query,
  getDocs,
} from "../../config/Firebase";
function Profile() {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    const dataSet = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user.uid);
          const docRef = doc(db, "users", user.uid);
          const docSnap = getDoc(docRef).then((data) => {
            if (data.exists()) {
              console.log(data.data().number);
              setname(data.data().fullName);
              setemail(data.data().email);
              setphone(data.data().address);
            } else {
              console.log("No Such Document");
            }
          });
        } else {
          console.log("No User");
        }
      });
    };
    dataSet();
  }, []);
  return (
    <div>
      <MenuAppBar title="Login" />ِ
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={6} md={12}>
            <MyCard>
              <h1>Profile</h1>
              <h3>Name: {name}</h3>
              <h3>Email: {email}</h3>
              <h3>Address: {phone}</h3>
              <Link to={"/chat"}>Chat</Link>
            </MyCard>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Profile;
