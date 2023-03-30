import { Paper, Button, Grid } from "@mui/material";
import { orange } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
function PricingCard() {
  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      mt={4}
      md={12}
      sm={8}
      sx={{ margin: "0px auto" }}
    >
      <Grid item sm={12} md={4}>
        <Paper elevation={3} sx={{ padding: "20px" }}>
          <Grid container spacing={2} alignItems="baseLine">
            <Grid item>
              <Typography variant="h4" sx={{ my: 2 }}>
                Monthly
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">billed monthly</Typography>
            </Grid>
          </Grid>
          <Typography variant="body1" sx={{ my: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus
            nisl id purus sollicitudin porta. Proin venenatis vestibulum dolor
            et varius. Nam libero diam, suscipit ac sapien in, bibendum aliquam.
          </Typography>
          <Grid container spacing={2} alignItems="baseLine">
            <Grid item>
              <Typography variant="h3" sx={{ my: 2 }}>
                $29.99
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">/mo</Typography>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            sx={{
              width: "100%",
            }}
          >
            Subscribe
          </Button>
        </Paper>
      </Grid>
      <Grid item sm={12} md={4}>
        <Paper elevation={3} sx={{ padding: "20px" }}>
          <Grid container spacing={2} alignItems="baseLine">
            <Grid item>
              <Typography variant="h4" sx={{ my: 2 }}>
                Yearly
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">
                billed yearly ($127.20)
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body1" sx={{ my: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit
            massa vel nibh elementum faucibus. Nulla libero lectus, sagittis et
            mi et, venenatis porttitor magna. Aenean dapibus tempus risus id.
          </Typography>
          <Grid container spacing={2} alignItems="baseLine">
            <Grid item>
              <Typography variant="h3" sx={{ my: 2 }}>
                $10.60
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">/mo</Typography>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            sx={{
              width: "100%",
            }}
          >
            Subscribe
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default PricingCard;
