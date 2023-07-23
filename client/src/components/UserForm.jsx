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
        label="first name"
        error={errors.first_name}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="last_name"
        label="last name"
        error={errors.last_name}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="phone_number"
        label="phone"
        type="phone"
        error={errors.phone_number}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="email"
        label="email"
        type="email"
        error={errors.email}
        onChange={onInputChange}
        data={data}
        sm={6}
      />

      <Input
        name="country"
        label="country"
        error={errors.url}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="city"
        label="city"
        error={errors.alt}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="job_title"
        label="job title"
        error={errors.state}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="years_of_experience"
        label="years of experience"
        type={"number"}
        error={errors.country}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
    </Form>
  );
};

export default React.memo(UserForm);
