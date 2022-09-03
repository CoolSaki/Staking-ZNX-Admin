import { useStyles } from "./DateInputStyles";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import calendar_icon from "../../../assets/svg/calendar_icon.svg";

interface DateInputProps {
  letter?: string;
  date?: Date | null;
  className?: any;
  dateChange: (date: Date | null) => void;
}

const DateInput = ({ letter, date, dateChange }: DateInputProps) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.dateinputRoot}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div className={classes.dateRoot}>
            {letter && <div className={classes.dateStart}>{letter}</div>}
            <KeyboardDatePicker
              className={classes.datePicker}
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-dialog"
              placeholder={"Select date"}
              value={date === undefined ? null : date}
              onChange={dateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              keyboardIcon={<img src={calendar_icon} alt="calendarIcon" />}
            />
          </div>
        </MuiPickersUtilsProvider>
      </div>
    </>
  );
};

export default DateInput;
