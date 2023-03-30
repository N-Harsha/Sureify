import { Grid, TextField, Typography, Button } from "@mui/material";

function ContactUs() {
  return (
    <>
      <Typography
        variant="h4"
        align="center"
        component="h1"
        mt={4}
        gutterBottom
      >
        {"Contact Us".toUpperCase()}
      </Typography>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sx={{ width: "30%" }}>
          <form
            id="contact-form"
            // className={classes.contactForm}
            // onSubmit={this.handleSubmit}
          >
            <Grid item>
              <TextField
                fullWidth
                required
                id="name"
                label="Name"
                name="userName"
                // className={classes.inputField}
                // onChange={this.handleChange("userName")}
                margin="normal"
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                required
                id="email"
                label="Email"
                name="email"
                // className={classes.inputField}
                // onChange={this.handleChange("email")}
                margin="normal"
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                required
                id="message"
                label="Message"
                name="message"
                // className={classes.inputField}
                // onChange={this.handleChange("message")}
                margin="normal"
                multiline
                // rowsMax="4"
              />
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              spacing={2}
              sx={{ mt: 2 }}
            >
              <Grid item>
                <Button
                  //   className={classes.formButton}
                  type="reset"
                  variant="contained"
                  color="secondary"
                  //   color="default"
                  //disabled={submitting || pristine}
                >
                  RESET
                </Button>
              </Grid>
              <Grid item>
                <Button
                  //   className={classes.formButton}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
}

export default ContactUs;
