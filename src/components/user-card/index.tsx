import React from "react";
import { useDispatch } from "react-redux";

import * as Styled from "./styled-components";
import { deleteUser, showProfile } from "../../redux/slices/users";

interface UserCardProps {
  name: string;
  pictureUrl: string;
  id: string;
}

const UserCard = React.forwardRef<any, UserCardProps>(
  ({ name, pictureUrl, id }, ref) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
      dispatch(deleteUser({ id }));
    };

    const handleShowProfile = () => {
      dispatch(showProfile({ id }));
    };

    return (
      <Styled.CardContainer ref={ref}>
        <Styled.ImgSection>
          <img src={pictureUrl} alt="user" />
        </Styled.ImgSection>
        <Styled.NameSection>{name}</Styled.NameSection>
        <Styled.ActionsSection>
          <Styled.ProfileButton onClick={handleShowProfile}>
            Profile
          </Styled.ProfileButton>
          <Styled.DeleteButton onClick={handleDelete}>
            Delete
          </Styled.DeleteButton>
        </Styled.ActionsSection>
      </Styled.CardContainer>
    );
  }
);

export default UserCard;
