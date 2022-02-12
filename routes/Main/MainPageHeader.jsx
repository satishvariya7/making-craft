import { Row, Tooltip } from "antd";
import { useSelector } from "react-redux";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MainPageHeader = () => {
  const { user } = useSelector((state) => state.user);
  const [availableTickets, setAvailableTickets] = useState(0);
  const router = useRouter();
  const handleClick = () => {
    router.push("/tickets");
  };

  useEffect(() => {
    if (!user) return;
    setAvailableTickets(user.userTickets - user.pendingTickets);
  }, [user]);

  return (
    <>
      <Row justify="center" style={{ marginBottom: "1rem" }}>
        <Row>
          {user.userTier === "tier0" && (
            <h3 className="iii-norug-title-text">You need more BILLs!</h3>
          )}
          {user.userTier !== "tier0" && (
            <h3 className="iii-norug-title-text">
              You qualify for{" "}
              {user.userTier === "tier1"
                ? "Tier 1"
                : user.userTier === "tier2"
                ? "Tier 2"
                : "Tier 3"}
            </h3>
          )}
        </Row>
      </Row>
      <Row justify="center" style={{ marginBottom: "2rem" }}>
        {availableTickets !== 1 && (
          <h4 className="iii-norug-subtitle-text">
            You have {availableTickets} Tickets.
          </h4>
        )}
        {availableTickets === 1 && (
          <h4 className="iii-norug-subtitle-text">
            You have {availableTickets} Ticket.
          </h4>
        )}
        <Tooltip
          title={`${user.pendingTickets} tickets are currently pending. It takes 7 days for the tickets to become available from the date of purchase.`}
        >
          <InfoCircleOutlined
            onClick={handleClick}
            style={{ marginLeft: "0.5rem", color: "white", cursor: "pointer" }}
          />
        </Tooltip>
      </Row>
    </>
  );
};

export default MainPageHeader;
