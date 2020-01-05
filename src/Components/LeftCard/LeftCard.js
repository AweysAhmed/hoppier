import React, { useEffect, useState } from "react";
import {
  TableContainer,
  TableHead,
  Table,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";
import axios from "axios";

const List = () => {
  const [clients, setClients] = useState([]);
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get(
          "https://s3.amazonaws.com/misc-file-snack/MOCK_SNACKER_DATA.json"
        ),
        axios.get("https://ca.desknibbles.com/products.json?limit=250")
      ])
      .then(
        axios.spread((clients, snacks) => {
          setClients(clients.data);
          setSnacks(snacks.data);
        })
      )
      .catch(err => console.log(err));
  }, []);
  // console.log(clients);
  console.log(typeof snacks);
  console.log(typeof clients);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>Favourite Snack</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {snacks.title.map((snacks, index) => (
              <TableCell key={index}>{snacks}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;

// continue working on this
