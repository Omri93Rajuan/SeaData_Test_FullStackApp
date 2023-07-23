import React from "react";
import Container from "@mui/material/Container";
import useForm from "../hooks/useForm";
import initialAddUserForm from "../helpers/initialAddUserForm";
import addUserSchema_joi from "../helpers/addUserSchema_joi";
import UserForm from "../components/UserForm";
import { useDispatch } from "react-redux";
import { addUserFetch } from "../redux/reducers";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { Box } from "@mui/material";


const AddUserPage = () => {
  const dispatch = useDispatch();
const navigate = useNavigate()

    const { value, ...rest } = useForm(
        initialAddUserForm,
       addUserSchema_joi,
       () => {
        dispatch(addUserFetch(value.data))
        navigate("/")
      }
      );
    
  return <>
    <Container
  >
          <PageHeader
  title="Add new user"
  subtitle="Here you can Add a new user to the system"
/>
<Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <UserForm
        title="register form"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        setData={rest.setData}
        errors={value.errors}
        data={value.data}
      />
      </Box>
    </Container>
  </>
};

export default AddUserPage;