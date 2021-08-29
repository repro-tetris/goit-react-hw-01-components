import { PropTypes } from "prop-types";
import { FriendStyle, Status, Avatar, Name } from "./Friend.styled";

export const Friend = ({ name, avatar, isOnline }) => {
  return (
    <FriendStyle>
      <Status isOnline={isOnline} />
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendStyle>
  );
};

Friend.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};
