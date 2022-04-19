import "./tableList.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const TableList = () => {
  const rows = [
    {
      id: 14,
      product: "note 7",
      img: "https://cdn.vox-cdn.com/thumbor/7DRqEHejCqKZTd0YkiswoC-CuJg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/6873889/samsung-note-7-9978.jpg",
      customer: "John",
      date: "1 March",
      amount: 125,
      method: "Cash On Delivery",
      status: "Approved",
    },
    {
      id: 15,
      product: "note 7",
      img: "https://cdn.vox-cdn.com/thumbor/7DRqEHejCqKZTd0YkiswoC-CuJg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/6873889/samsung-note-7-9978.jpg",
      customer: "John",
      date: "1 March",
      amount: 125,
      method: "Cash On Delivery",
      status: "Approved",
    },
    {
      id: 16,
      product: "note 7",
      img: "https://cdn.vox-cdn.com/thumbor/7DRqEHejCqKZTd0YkiswoC-CuJg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/6873889/samsung-note-7-9978.jpg",
      customer: "John",
      date: "1 March",
      amount: 125,
      method: "Online",
      status: "Pending",
    },
    {
      id: 17,
      product: "note 7",
      img: "https://cdn.vox-cdn.com/thumbor/7DRqEHejCqKZTd0YkiswoC-CuJg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/6873889/samsung-note-7-9978.jpg",
      customer: "John",
      date: "1 March",
      amount: 125,
      method: "Cash On Delivery",
      status: "Approved",
    },
    {
      id: 18,
      product: "note 7",
      img: "https://cdn.vox-cdn.com/thumbor/7DRqEHejCqKZTd0YkiswoC-CuJg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/6873889/samsung-note-7-9978.jpg",
      customer: "John",
      date: "1 March",
      amount: 125,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row" className="tableCell">
                {row.id}
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
