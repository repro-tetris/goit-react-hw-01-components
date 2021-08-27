import css from "./FriendList.module.css";
import { PropTypes } from "prop-types";
export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, name, avatar, isOnline }) => {
        return (
          <li key={id} className={css.item}>
            <span
              className={`${css.status} ${isOnline ? `${css.online}` : ""}`}
            ></span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};
