import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PricingCard from "../Compoenents/PricingCard";
function Pricing() {
  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        textAlign="center"
        mt={2}
        gutterBottom
      >
        Pricing
      </Typography>
      <PricingCard />
    </>
  );
}

export default Pricing;
