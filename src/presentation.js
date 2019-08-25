// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Table,
  TableHeader,
  TableRow,
  TableItem,
  TableHeaderItem,
  TableBody
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            studentsXbooks
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Project Proposal
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            create by: Team needaname
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary" caps fit>
            Project Description
          </Heading>
          <Text size={6}>
            txtX is a student ran book store application that will allow
            students to buy, sell, and trade books online without a middleman.
          </Text>
        </Slide>
        <Slide>
          <Heading>What value will it bring?</Heading>
          <List>
            <ListItem>
              Decreases the amount students spend on books by purchasing off
              other students
            </ListItem>
            <ListItem>
              Increases the amount students earn selling books by selling to
              students
            </ListItem>
            <ListItem>
              Eliminates students spending any money if they can trade for a
              book
            </ListItem>
            <ListItem>
              Nationwide recognition for WVUP by funding a influtiental project
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>
            Project Main Features
          </Heading>
          <List>
            <ListItem>Login / Registration</ListItem>
            <ListItem>Admin Management</ListItem>
            <ListItem>Create a Listing for books</ListItem>
            <ListItem>Buy, Sell, and Trade listings</ListItem>
            <ListItem>Price comparison from other major retailers</ListItem>
            <ListItem>Search for a listing by price, ISBN, name, etc</ListItem>
            <ListItem>Book Wish List to watch for listings</ListItem>
            <ListItem>Notification System</ListItem>
            <ListItem>Colleges buy license to add their brand to site</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="tertiary">
            Key Stakeholders
          </Heading>
          <Table textAlign="left" textSize="6rem">
            <TableBody>
              <TableRow>
                <TableItem>Client</TableItem>
                <TableItem>WVUP</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Sponsor</TableItem>
                <TableItem>Gary Thompson, Charles Almond</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Project Manager</TableItem>
                <TableItem>Levi Butcher</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="tertiary">
            Project Timeline
          </Heading>
          <Table textAlign="left" textSize="6rem">
            <TableHeader>
              <TableRow>
                <TableHeaderItem>Task</TableHeaderItem>
                <TableHeaderItem>Start to End</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>Develop Beta Release</TableItem>
                <TableItem>8/26/19 - 12/2/19</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Beta Release Testing</TableItem>
                <TableItem>12/9/19 - 1/9/19</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Implement Final Features</TableItem>
                <TableItem>1/12/19 - 5/1/19</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="tertiary">
            Beta Goals
          </Heading>
          <List>
            <ListItem>Login / Registration</ListItem>
            <ListItem>Admin Management</ListItem>
            <ListItem>Create a Listing for books</ListItem>
            <ListItem>Buy, Sell, and Trade listings</ListItem>
            <ListItem>Search for a listing by price, ISBN, name, etc</ListItem>
            <ListItem>Notification System</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
