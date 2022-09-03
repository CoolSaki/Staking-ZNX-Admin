import Pagination from "./TableBase/Pagination";
import {
  StyledRowsPerPageBox,
  StyledNativeSelect,
  useStyles,
  BootstrapInput,
} from "./ActionTableStyles";

interface ActionTableProps {
  totalCnt?: any;
  className?: any;
  PgNum?: any;
  PgRows?: any;
  handlePgNum: (pgNum: number) => void;
  handlePgRows: (pgRows: number) => void;
  tableContent: React.ReactNode;
}

const ActionTable = ({
  className,
  totalCnt,
  PgNum,
  PgRows,
  handlePgNum,
  handlePgRows,
  tableContent,
}: ActionTableProps) => {
  const classes = useStyles();
  return (
    <div className={className}>
      {tableContent}
      <div className={classes.paginationContainer}>
        <div className={classes.perPageRoot}>
          <StyledRowsPerPageBox>
            Show
            <StyledNativeSelect
              id='demo-customized-select-native'
              value={PgRows}
              onChange={(e: any) => handlePgRows(e.target.value)}
              input={<BootstrapInput />}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </StyledNativeSelect>
            Records
          </StyledRowsPerPageBox>
        </div>
        <div className={classes.paginationRoot}>
          <Pagination
            count={totalCnt}
            page={PgNum}
            onPageChange={handlePgNum}
            rowsPerPage={PgRows}
          />
        </div>
      </div>
    </div>
  );
};

export default ActionTable;
