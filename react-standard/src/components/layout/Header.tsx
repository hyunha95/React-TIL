import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { Button, Avatar, Stack, Box, IconButton } from "@mui/material";

/**
 * @description 샘플 헤더 컴포넌트
 */
function Header() {
   // router
   const navigate = useNavigate();

   // event
   const onSignOut = () => {
      Cookies.remove("access_token");
      navigate("login");
   };

   // view
   return (
      <Box
         sx={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "56px",
            padding: "0 20px",
            borderBottom: "1px solid rgba(145, 158, 171, 0.15)",
            backgroundColor: "#F9FAFB",
         }}
      >
         <Avatar sx={{ width: 30, height: 30 }} src="/broken-image.jpg" />
         <Button
            variant="outlined"
            size="small"
            onClick={onSignOut}
            sx={{ marginLeft: "10px" }}
         >
            SIGN OUT
         </Button>
      </Box>
   );
}

export default Header;
