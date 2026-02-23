import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Content from "components/sidebar/components/Content"; // your main dashboard links

function Sidebar({ routes }) {
  // Background color based on light/dark mode
  const sidebarBg = useColorModeValue("white", "navy.800");

  return (
    <Box
      display={{ sm: "none", xl: "block" }}
      w="300px"
      h="100vh"
      position="fixed"
      bg={sidebarBg}
      overflowX="hidden"
      boxShadow={useColorModeValue(
        "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
        "unset"
      )}
    >
      <Content routes={routes} />
    </Box>
  );
}
export function SidebarResponsive(props) {
  return null; // does nothing
}

export default Sidebar;
