import React, { useState } from "react";
import { useStyles } from "./SearchStyle";
import { Grid } from "@material-ui/core";
import ActionButton from "../ActionButton/ActionButton";
import ActionInput from "../ActionInput/ActionInput";
import DateInput from "../DateInput/DateInput";

interface SearchProps {
  handleSearch: (start: number, end: number, keyword: string) => void;
}

export const Search = ({ handleSearch }: SearchProps) => {
  const classes = useStyles();
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>();
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>();
  const [searchValue, setSearchValue] = useState("");
  const [startDate, setStartDate] = useState(0);
  const [endDate, setEndDate] = useState(0);

  const handleStartDateChange = (date: Date | null) => {
    setSelectedStartDate(date);
    let start =
      date !== null && date !== undefined && Math.floor(date.getTime() / 1000);
    start !== false && setStartDate(start);
  };

  const handleEndDateChange = (date: Date | null) => {
    setSelectedEndDate(date);
    let end =
      date !== null && date !== undefined && Math.floor(date.getTime() / 1000);
    end !== false && setEndDate(end);
  };

  const handleInputChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const clickSearch = () => {
    handleSearch(startDate, endDate, searchValue);
  };

  return (
    <Grid container spacing={1} className={classes.tableRoot}>
      <Grid item xs={12} sm={12} md={3}>
        <DateInput
          letter="Start"
          date={selectedStartDate}
          dateChange={handleStartDateChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <DateInput
          letter="End"
          date={selectedEndDate}
          dateChange={handleEndDateChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <div className={classes.searchRoot}>
          <ActionInput
            placeholder="please search"
            type="search"
            handleChange={(e) => handleInputChange(e)}
          />
          <ActionButton
            color="lightblue"
            className={classes.searchBtn}
            statusClick={clickSearch}
          >
            Search
          </ActionButton>
        </div>
      </Grid>
    </Grid>
  );
};
