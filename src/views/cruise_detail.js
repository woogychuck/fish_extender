import React from "react";
import {
  Box,
  Grid,
  Card,
  Tabs,
  Tab,
  Typography,
  CardContent,
} from "@mui/material";

function CruiseDetail() {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={2} className="cruise-detail">
      <Grid item xs={12} md={8}>
        <Card>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Disney Magic
            </Typography>
            <Typography variant="h5">Cruise Name Here</Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              January 10th - 17th, 2023
            </Typography>
            <Typography variant="body2">Put some text here</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>Put an image or somethign here</CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Signups" />
                  <Tab label="FE Groups" />
                  <Tab label="Pixie Dusters" />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                Item One
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CruiseDetail;
