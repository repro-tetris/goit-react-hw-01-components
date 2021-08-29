import { PropTypes } from "prop-types";
import { Friends } from "./FriendList.styled";
import { Friend } from "../Friend/Friend";
export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ id, name, avatar, isOnline }) => {
        return (
          <Friend key={id} name={name} avatar={avatar} isOnline={isOnline} />
        );
      })}
    </Friends>
  );
};

FriendList.propTypes = {
  id: PropTypes.number,
};
