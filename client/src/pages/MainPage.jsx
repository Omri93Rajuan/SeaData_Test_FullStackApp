import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsersFetch } from "../redux/reducers";
import { Container, Fab, Typography } from "@mui/material";
import UsersTable from "../components/UsersTable";
import PageHeader from "../components/PageHeader";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsersFetch());
  }, [dispatch]);

  return (
    <Container>
      <PageHeader
        title="Main Page"
        subtitle="Here you can find a CRM system of all the users"
      />
      {!users.length && (
        <Typography>Oops... it seems there are no users to display</Typography>
      )}
      {users.length > 0 && (
        <UsersTable
          users={users}
          onDelete={(parmas) => () => {
            dispatch(deleteUser(parmas.id));
            dispatch(getUsersFetch());
          }}
        />
      )}
      <Fab
        onClick={() => navigate("AddUserPage")}
        color="primary"
        aria-label="add"
        sx={{
          position: "absolute",
          bottom: 75,
          right: 16,
        }}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
};

export default MainPage;
