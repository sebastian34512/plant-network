import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { fetchToken } from "../services/post-service";

interface NavbarProps {
  token?: string;
  setToken: (token: string) => void;
}

export const Navbar = (props: NavbarProps) => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(0, 40, 0, 0.6)",
        boxShadow: "none",
        paddingLeft: 2,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          Plant Network Dashboard
        </Typography>
        <Button
          color="inherit"
          variant="outlined"
          sx={{
            borderColor: "white",
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
          onClick={
            props.token === undefined || props.token === ""
              ? () => fetchToken().then(props.setToken)
              : () => props.setToken("")
          }
        >
          {props.token === undefined || props.token === "" ? "Login" : "Logout"}
        </Button>
      </Toolbar>
    </AppBar>
  );
};
