import React from "react";
import Input from "./form/input";
import Form from "./form/form";

const UserForm = ({
  onSubmit,
  onReset,
  onFormChange,
  title,
  errors,
  data,
  onInputChange,
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      onReset={onReset}
      onChange={onFormChange}
      styles={{ maxWidth: "800px" }}
      title={title}
      to={"/"}
    >
      <Input
        name="first_name"
        label="First name"
        error={errors.first_name}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="last_name"
        label="Last name"
        error={errors.last_name}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="phone_number"
        label="Phone"
        type="phone"
        error={errors.phone_number}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="email"
        label="Email"
        type="email"
        error={errors.email}
        onChange={onInputChange}
        data={data}
        sm={6}
      />

      <Input
        name="country"
        label="Country"
        error={errors.country}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="city"
        label="City"
        error={errors.city}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="job_title"
        label="Job title"
        error={errors.job_title}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="years_of_experience"
        label="Years of experience"
        type={"number"}
        error={errors.years_of_experience}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
    </Form>
  );
};

export default React.memo(UserForm);
