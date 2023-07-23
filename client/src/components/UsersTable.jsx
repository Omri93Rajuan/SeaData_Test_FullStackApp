import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const UsersTable = ({ users, onDelete, onChangeStatus, handleGetUser }) => {
  const navigate = useNavigate();
  const columns = [
    { field: "idNumber", headerName: "Number", width: 90 },
    { field: "firstName", headerName: "First name",
    width: 130,
    cellClassName: (params) =>
    params.row.year_of_experience <= 1
      ? "orange-cell"
      : "",    
  },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "email", headerName: "Email", width: 120 },
    { field: "phone", headerName: "phone", width: 120 },
    { field: "country", headerName: "Country", width: 130 },
    { field: "city", headerName: "City ", width: 130 },
    { field: "job_title", headerName: "Job title", width: 150 },
    { field: "year_of_experience", headerName: "EXP", width: 80 },

    {
      field: "Delete",
      headerName: "Delete",
      type: "actions",
      width: 80,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={onDelete(params)}
        />,
      ],
    },
  ];

  const rows = Array.from(users, (user, i) => {
    return {
      id: user.id || `TEMP-${i + 1}`,
      idNumber: i + 1,
      lastName: user.last_name,
      firstName: user.first_name,
      email: user.email,
      phone: user.phone_number,
      country: user.country,
      city: user.city,
      job_title: user.job_title,
      year_of_experience: user.years_of_experience ,
    };
  });

  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          // אופציה קיימת להוספת פיצ'רים בלחיצה על השורה
          onRowClick={() => navigate(``)}
        ></DataGrid>
      </div>
    </>
  );
};

export default UsersTable;
