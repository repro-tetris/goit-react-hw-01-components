import { PropTypes } from "prop-types";
import { Friends, Friend, Status, Avatar, Name } from "./FriendList.styled";
export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ id, name, avatar, isOnline }) => {
        return (
          <Friend key={id}>
            <Status isOnline={isOnline} />
            <Avatar src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
          </Friend>
        );
      })}
    </Friends>
  );
};

FriendList.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};
