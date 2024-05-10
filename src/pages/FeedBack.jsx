import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);

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
          setSubmitted(true);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    handleSubmit();
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      {submitted ? (
        <p>Thank you for your feedback!</p>
      ) : (
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
      )}
    </div>
  );
};

export default Feedback;
