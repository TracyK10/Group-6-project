import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Feedback = () => {
  const classes = useStyles();
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  useEffect(() => {
    const handleSubmit = () => {
      if (!formData.name || !formData.email || !formData.comment) {
        return;
      }
      fetch("your-backend-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to save feedback");
          }
          return response.json();
        })
        .then((data) => {
          // Data saved successfully, redirect to thank you page
          history.push("/thank-you");
          console.log(data)
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    handleSubmit();
  }, [formData, history]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form className={classes.form}>
      <TextField
        id="name"
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        variant="outlined"
      />
      <TextField
        id="email"
        name="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        variant="outlined"
      />
      <TextField
        id="comment"
        name="comment"
        label="Comment"
        multiline
        rows={4}
        value={formData.comment}
        onChange={handleChange}
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default Feedback;
