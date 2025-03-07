{/* Main page that displays lab data given a date and a specific HVAC lab*/}

import * as React from 'react';
import { Container } from "reactstrap";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, ChartLabel, VerticalGridLines, LineMarkSeries, LineSeries} from 'react-vis';
import LabDataView from "../components/LabDataView/LabDataView";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";

const HomePage: React.FC = (props) => {

  return (
    <>
    <Container>
           <LabDataView/> 

      <Box m = {5}> 
      <a href="/comparison-page" className="btn btn-primary btn-block">
                Comparison Page <span className="ml-2 right-icon text-center">&#8594;</span>
      </a>
      </Box>  
   

    </Container>
    </>
  );
};
export default HomePage;